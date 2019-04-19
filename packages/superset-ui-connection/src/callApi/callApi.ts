/* eslint compat/compat: 'off' */
import 'whatwg-fetch';
import { CallApi } from '../types';
import { CACHE_AVAILABLE, CACHE_KEY, HTTP_STATUS_NOT_MODIFIED, HTTP_STATUS_OK } from '../constants';

// This function fetches an API response and returns the corresponding json
export default function callApi({
  body,
  cache = 'default',
  credentials = 'same-origin',
  headers,
  method = 'GET',
  mode = 'same-origin',
  postPayload,
  redirect = 'follow',
  signal,
  stringify = true,
  url,
}: CallApi): Promise<Response> {
  const request = {
    body,
    cache,
    credentials,
    headers,
    method,
    mode,
    redirect,
    signal,
  };

  if (method === 'GET' && CACHE_AVAILABLE) {
    return caches.open(CACHE_KEY).then(supersetCache =>
      supersetCache
        .match(url)
        .then(cachedResponse => {
          if (cachedResponse) {
            // if we have a cached response and its expiration is still valid,
            // use it directly; we don't have to worry about the cache being
            // stale because Superset deletes them using the Cache API
            const expires = cachedResponse.headers.get('Expires');
            if (expires && Date.parse(expires) >= Date.now()) {
              return cachedResponse;
            }

            // if we have an expired cached response, send its ETag in the
            // `If-None-Match` header in a conditional request
            const etag = cachedResponse.headers.get('Etag');
            if (etag) {
              request.headers = { ...request.headers, 'If-None-Match': etag };
            }
          }

          return fetch(url, request);
        })
        .then(response => {
          if (response.status === HTTP_STATUS_NOT_MODIFIED) {
            return supersetCache.match(url).then(cachedResponse => {
              if (cachedResponse) {
                return cachedResponse.clone();
              }
              // this could happen if the cache is invalidated while the
              // request is in flight
              throw new Error('Received 304 but no content is cached!');
            });
          } else if (
            response.status === HTTP_STATUS_OK &&
            (response.headers.get('Etag') || response.headers.get('Expires'))
          ) {
            const clonedResponse = response.clone();
            supersetCache
              .delete(url)
              .then(() => supersetCache.put(url, clonedResponse))
              .catch(error => new Response(error, { status: 500 }));
          }

          return response;
        }),
    );
  }

  if (
    (method === 'POST' || method === 'PATCH' || method === 'PUT') &&
    typeof postPayload === 'object'
  ) {
    // using FormData has the effect that Content-Type header is set to `multipart/form-data`,
    // not e.g., 'application/x-www-form-urlencoded'
    const formData: FormData = new FormData();

    Object.keys(postPayload).forEach(key => {
      const value = postPayload[key];
      if (typeof value !== 'undefined') {
        formData.append(key, stringify ? JSON.stringify(value) : value);
      }
    });

    request.body = formData;
  }

  return fetch(url, request);
}
