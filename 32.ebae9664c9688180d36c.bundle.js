(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1174:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return reactify}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);function reactify(renderFn,callbacks){class ReactifiedComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component{constructor(props){super(props),this.setContainerRef=this.setContainerRef.bind(this)}componentDidMount(){this.execute()}componentDidUpdate(){this.execute()}componentWillUnmount(){this.container=void 0,(null==callbacks?void 0:callbacks.componentWillUnmount)&&callbacks.componentWillUnmount.bind(this)()}setContainerRef(ref){this.container=ref}execute(){this.container&&renderFn(this.container,this.props)}render(){const{id:id,className:className}=this.props;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{ref:this.setContainerRef,id:id,className:className})}}const ReactifiedClass=ReactifiedComponent;return renderFn.displayName&&(ReactifiedClass.displayName=renderFn.displayName),renderFn.propTypes&&(ReactifiedClass.propTypes=Object.assign(Object.assign({},ReactifiedClass.propTypes),renderFn.propTypes)),renderFn.defaultProps&&(ReactifiedClass.defaultProps=renderFn.defaultProps),ReactifiedComponent}},1640:function(module,exports,__webpack_require__){var api=__webpack_require__(269),content=__webpack_require__(1641);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(content,options),content.locals?content.locals:{});module.exports=exported},1641:function(module,exports,__webpack_require__){(exports=__webpack_require__(270)(!1)).push([module.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n.superset-legacy-chart-rose path {\n  transition: fill-opacity 180ms linear;\n  stroke: #fff;\n  stroke-width: 1px;\n  stroke-opacity: 1;\n  fill-opacity: 0.75;\n}\n\n.superset-legacy-chart-rose text {\n  font: 400 12px Arial, sans-serif;\n  pointer-events: none;\n}\n\n.superset-legacy-chart-rose .clickable path {\n  cursor: pointer;\n}\n\n.superset-legacy-chart-rose .hover path {\n  fill-opacity: 1;\n}\n\n.nv-legend .nv-series {\n  cursor: pointer;\n}\n',""]),module.exports=exports},2141:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var reactify=__webpack_require__(1174),d3=(__webpack_require__(41),__webpack_require__(40),__webpack_require__(90)),d3_default=__webpack_require__.n(d3),prop_types=__webpack_require__(4),prop_types_default=__webpack_require__.n(prop_types),nv_d3=__webpack_require__(1335),nv_d3_default=__webpack_require__.n(nv_d3),src=__webpack_require__(159),NumberFormatterRegistrySingleton=__webpack_require__(126),TimeFormatterRegistrySingleton=__webpack_require__(149);__webpack_require__(1640);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const propTypes={data:prop_types_default.a.objectOf(prop_types_default.a.arrayOf(prop_types_default.a.shape({key:prop_types_default.a.arrayOf(prop_types_default.a.string),name:prop_types_default.a.arrayOf(prop_types_default.a.string),time:prop_types_default.a.number,value:prop_types_default.a.number}))),width:prop_types_default.a.number,height:prop_types_default.a.number,dateTimeFormat:prop_types_default.a.string,numberFormat:prop_types_default.a.string,useRichTooltip:prop_types_default.a.bool,useAreaProportions:prop_types_default.a.bool};function copyArc(d){return{startAngle:d.startAngle,endAngle:d.endAngle,innerRadius:d.innerRadius,outerRadius:d.outerRadius}}function sortValues(a,b){return a.value===b.value?a.name>b.name?1:-1:b.value-a.value}function Rose_Rose(element,props){const{data:data,width:width,height:height,colorScheme:colorScheme,dateTimeFormat:dateTimeFormat,numberFormat:numberFormat,useRichTooltip:useRichTooltip,useAreaProportions:useAreaProportions}=props,div=d3_default.a.select(element);div.classed("superset-legacy-chart-rose",!0);const datum=data,times=Object.keys(datum).map(t=>parseInt(t,10)).sort((a,b)=>a-b),numGrains=times.length,numGroups=datum[times[0]].length,format=Object(NumberFormatterRegistrySingleton.c)(numberFormat),timeFormat=Object(TimeFormatterRegistrySingleton.c)(dateTimeFormat),colorFn=src.CategoricalColorNamespace.getScale(colorScheme);d3_default.a.select(".nvtooltip").remove(),div.selectAll("*").remove();const arc=d3_default.a.svg.arc(),legend=nv_d3_default.a.models.legend(),tooltip=nv_d3_default.a.models.tooltip(),state={disabled:datum[times[0]].map(()=>!1)},g=div.append("svg").attr("width",width).attr("height",height).append("g").attr("class","rose").append("g"),legendWrap=g.append("g").attr("class","legendWrap");function legendData(adatum){return adatum[times[0]].map((v,i)=>({disabled:state.disabled[i],key:v.name}))}legend.width(width).color(d=>colorFn(d.key)),legendWrap.datum(legendData(datum)).call(legend),tooltip.headerFormatter(timeFormat).valueFormatter(format);const roseHeight=height-legend.height(),margin_top=legend.height(),maxRadius=Math.min(width,roseHeight)/2-35,centerTranslate="translate(".concat(width/2,",").concat(roseHeight/2+margin_top,")"),roseWrap=g.append("g").attr("transform",centerTranslate).attr("class","roseWrap"),labelsWrap=g.append("g").attr("transform",centerTranslate).attr("class","labelsWrap"),groupLabelsWrap=g.append("g").attr("transform",centerTranslate).attr("class","groupLabelsWrap");function computeArcStates(adatum){let maxSum=0,grain=0;const sums=[];for(const t of times){const sum=datum[t].reduce((a,v,i)=>a+(state.disabled[i]?0:v.value),0);maxSum=sum>maxSum?sum:maxSum,sums[grain]=sum,grain++}const dtheta=2*Math.PI/numGrains,angles=[];for(let i=0;i<=numGrains;i++)angles.push(dtheta*i-Math.PI/2);const P=maxRadius/maxSum,computeOuterRadius=(value,innerRadius)=>useAreaProportions?Math.sqrt(P*maxRadius*value+innerRadius*innerRadius):P*value+innerRadius,arcSt={data:[],extend:{},push:{},pieStart:{},pie:{},pieOver:{},mini:{},labels:[],groupLabels:[]};let arcId=0;for(let i=0;i<numGrains;i++){const t=times[i],startAngle=angles[i],endAngle=angles[i+1],G=2*Math.PI/sums[i];let outerRadius,pieEndAngle,innerRadius=0,pieStartAngle=0;for(const v of adatum[t]){const val=state.disabled[arcId%numGroups]?0:v.value,{name:name,time:time}=v;v.id=arcId,outerRadius=computeOuterRadius(val,innerRadius),arcSt.data.push({startAngle:startAngle,endAngle:endAngle,innerRadius:innerRadius,outerRadius:outerRadius,name:name,arcId:arcId,val:val,time:time}),arcSt.extend[arcId]={startAngle:startAngle,endAngle:endAngle,innerRadius:innerRadius,name:name,outerRadius:outerRadius+8},arcSt.push[arcId]={startAngle:startAngle,endAngle:endAngle,innerRadius:innerRadius+8,outerRadius:outerRadius+8},arcSt.pieStart[arcId]={startAngle:startAngle,endAngle:endAngle,innerRadius:.075*maxRadius,outerRadius:maxRadius},arcSt.mini[arcId]={startAngle:startAngle,endAngle:endAngle,innerRadius:.075*innerRadius,outerRadius:.075*outerRadius},arcId++,innerRadius=outerRadius}const labelArc=_objectSpread({},arcSt.data[i*numGroups]);labelArc.outerRadius=maxRadius+20,labelArc.innerRadius=maxRadius+15,arcSt.labels.push(labelArc);for(const v of adatum[t].concat().sort(sortValues)){pieEndAngle=G*(state.disabled[v.id%numGroups]?0:v.value)+pieStartAngle,arcSt.pie[v.id]={startAngle:pieStartAngle,endAngle:pieEndAngle,innerRadius:.075*maxRadius,outerRadius:maxRadius,percent:v.value/sums[i]},arcSt.pieOver[v.id]={startAngle:pieStartAngle,endAngle:pieEndAngle,innerRadius:.075*maxRadius,outerRadius:maxRadius+8},pieStartAngle=pieEndAngle}}return arcSt.groupLabels=arcSt.data.slice(0,numGroups),arcSt}let arcSt=computeArcStates(datum);function tween(target,resFunc){return function(d){const interpolate=d3_default.a.interpolate(copyArc(d),copyArc(target));return t=>resFunc(Object.assign(d,interpolate(t)))}}function arcTween(target){return tween(target,d=>arc(d))}function translateTween(target){return tween(target,d=>"translate(".concat(arc.centroid(d),")"))}const segmentsToEdgeCache={};function getSegmentsToEdge(arcId){if(segmentsToEdgeCache[arcId])return segmentsToEdgeCache[arcId];const timeIndex=Math.floor(arcId/numGroups);return segmentsToEdgeCache[arcId]=[arcId+1,numGroups*(timeIndex+1)-1],segmentsToEdgeCache[arcId]}const segmentsInTimeCache={};function getSegmentsInTime(arcId){if(segmentsInTimeCache[arcId])return segmentsInTimeCache[arcId];const timeIndex=Math.floor(arcId/numGroups);return segmentsInTimeCache[arcId]=[timeIndex*numGroups,(timeIndex+1)*numGroups-1],segmentsInTimeCache[arcId]}let clickId=-1,inTransition=!1;const ae=roseWrap.selectAll("g").data(JSON.parse(JSON.stringify(arcSt.data))).enter().append("g").attr("class","segment").classed("clickable",!0).on("mouseover",(function mouseover(b,i){tooltip.data(function tooltipData(d,i,adatum){const timeIndex=Math.floor(d.arcId/numGroups),series=useRichTooltip?adatum[times[timeIndex]].filter(v=>!state.disabled[v.id%numGroups]).map(v=>({key:v.name,value:v.value,color:colorFn(v.name),highlight:v.id===d.arcId})):[{key:d.name,value:d.val,color:colorFn(d.name)}];return{key:"Date",value:d.time,series:series}}(b,0,datum)).hidden(!1);const $this=d3_default.a.select(this);if($this.classed("hover",!0),0>clickId&&!inTransition){$this.select("path").interrupt().transition().duration(180).attrTween("d",arcTween(arcSt.extend[i]));const edge=getSegmentsToEdge(i);arcs.filter(d=>edge[0]<=d.arcId&&d.arcId<=edge[1]).interrupt().transition().duration(180).attrTween("d",d=>arcTween(arcSt.push[d.arcId])(d))}else if(!inTransition){const segments=getSegmentsInTime(clickId);segments[0]<=b.arcId&&b.arcId<=segments[1]&&$this.select("path").interrupt().transition().duration(180).attrTween("d",arcTween(arcSt.pieOver[i]))}})).on("mouseout",(function mouseout(b,i){tooltip.hidden(!0);const $this=d3_default.a.select(this);if($this.classed("hover",!1),0>clickId&&!inTransition){$this.select("path").interrupt().transition().duration(180).attrTween("d",arcTween(arcSt.data[i]));const edge=getSegmentsToEdge(i);arcs.filter(d=>edge[0]<=d.arcId&&d.arcId<=edge[1]).interrupt().transition().duration(180).attrTween("d",d=>arcTween(arcSt.data[d.arcId])(d))}else if(!inTransition){const segments=getSegmentsInTime(clickId);segments[0]<=b.arcId&&b.arcId<=segments[1]&&$this.select("path").interrupt().transition().duration(180).attrTween("d",arcTween(arcSt.pie[i]))}})).on("mousemove",(function(){tooltip()})).on("click",(function click(b,i){if(inTransition)return;const delay=d3_default.a.event.altKey?3750:375,segments=getSegmentsInTime(i);if(0>clickId)inTransition=!0,clickId=i,labels.interrupt().transition().duration(delay).attrTween("transform",d=>translateTween({outerRadius:0,innerRadius:0,startAngle:d.startAngle,endAngle:d.endAngle})(d)).style("opacity",0),groupLabels.attr("transform","translate(".concat(arc.centroid({outerRadius:maxRadius+20,innerRadius:maxRadius+15,startAngle:arcSt.data[i].startAngle,endAngle:arcSt.data[i].endAngle}),")")).interrupt().transition().delay(delay).duration(delay).attrTween("transform",d=>translateTween({outerRadius:maxRadius+20,innerRadius:maxRadius+15,startAngle:arcSt.pie[segments[0]+d.arcId].startAngle,endAngle:arcSt.pie[segments[0]+d.arcId].endAngle})(d)).style("opacity",d=>state.disabled[d.arcId]||arcSt.pie[segments[0]+d.arcId].percent<.05?0:1),ae.classed("clickable",d=>segments[0]>d.arcId||d.arcId>segments[1]),arcs.filter(d=>segments[0]<=d.arcId&&d.arcId<=segments[1]).interrupt().transition().duration(delay).attrTween("d",d=>arcTween(arcSt.pieStart[d.arcId])(d)).transition().duration(delay).attrTween("d",d=>arcTween(arcSt.pie[d.arcId])(d)).each("end",()=>{inTransition=!1}),arcs.filter(d=>segments[0]>d.arcId||d.arcId>segments[1]).interrupt().transition().duration(delay).attrTween("d",d=>arcTween(arcSt.mini[d.arcId])(d));else if(clickId<segments[0]||segments[1]<clickId){inTransition=!0;const clickSegments=getSegmentsInTime(clickId);labels.interrupt().transition().delay(delay).duration(delay).attrTween("transform",d=>translateTween(arcSt.labels[d.arcId/numGroups])(d)).style("opacity",1),groupLabels.interrupt().transition().duration(delay).attrTween("transform",translateTween({outerRadius:maxRadius+20,innerRadius:maxRadius+15,startAngle:arcSt.data[clickId].startAngle,endAngle:arcSt.data[clickId].endAngle})).style("opacity",0),ae.classed("clickable",!0),arcs.filter(d=>clickSegments[0]<=d.arcId&&d.arcId<=clickSegments[1]).interrupt().transition().duration(delay).attrTween("d",d=>arcTween(arcSt.pieStart[d.arcId])(d)).transition().duration(delay).attrTween("d",d=>arcTween(arcSt.data[d.arcId])(d)).each("end",()=>{clickId=-1,inTransition=!1}),arcs.filter(d=>clickSegments[0]>d.arcId||d.arcId>clickSegments[1]).interrupt().transition().delay(delay).duration(delay).attrTween("d",d=>arcTween(arcSt.data[d.arcId])(d))}})),labels=labelsWrap.selectAll("g").data(JSON.parse(JSON.stringify(arcSt.labels))).enter().append("g").attr("class","roseLabel").attr("transform",d=>"translate(".concat(arc.centroid(d),")"));labels.append("text").style("text-anchor","middle").style("fill","#000").text(d=>timeFormat(d.time));const groupLabels=groupLabelsWrap.selectAll("g").data(JSON.parse(JSON.stringify(arcSt.groupLabels))).enter().append("g");groupLabels.style("opacity",0).attr("class","roseGroupLabels").append("text").style("text-anchor","middle").style("fill","#000").text(d=>d.name);const arcs=ae.append("path").attr("class","arc").attr("fill",d=>colorFn(d.name)).attr("d",arc);legend.dispatch.on("stateChange",newState=>{state.disabled!==newState.disabled&&(state.disabled=newState.disabled,function updateActive(){const delay=d3_default.a.event.altKey?3e3:300;legendWrap.datum(legendData(datum)).call(legend);const nArcSt=computeArcStates(datum);if(inTransition=!0,0>clickId)arcs.style("opacity",1).interrupt().transition().duration(delay).attrTween("d",d=>arcTween(nArcSt.data[d.arcId])(d)).each("end",()=>{inTransition=!1,arcSt=nArcSt}).transition().duration(0).style("opacity",d=>state.disabled[d.arcId%numGroups]?0:1);else{const segments=getSegmentsInTime(clickId);arcs.style("opacity",1).interrupt().transition().duration(delay).attrTween("d",d=>segments[0]<=d.arcId&&d.arcId<=segments[1]?arcTween(nArcSt.pie[d.arcId])(d):arcTween(nArcSt.mini[d.arcId])(d)).each("end",()=>{inTransition=!1,arcSt=nArcSt}).transition().duration(0).style("opacity",d=>state.disabled[d.arcId%numGroups]?0:1),groupLabels.interrupt().transition().duration(delay).attrTween("transform",d=>translateTween({outerRadius:maxRadius+20,innerRadius:maxRadius+15,startAngle:nArcSt.pie[segments[0]+d.arcId].startAngle,endAngle:nArcSt.pie[segments[0]+d.arcId].endAngle})(d)).style("opacity",d=>state.disabled[d.arcId]||arcSt.pie[segments[0]+d.arcId].percent<.05?0:1)}}())})}Rose_Rose.displayName="Rose",Rose_Rose.propTypes=propTypes;var src_Rose=Rose_Rose;__webpack_exports__.default=Object(reactify.a)(src_Rose)}}]);
//# sourceMappingURL=32.ebae9664c9688180d36c.bundle.js.map