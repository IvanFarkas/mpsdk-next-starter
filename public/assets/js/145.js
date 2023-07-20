/*! For license information please see 145.js.LICENSE.txt */
"use strict";(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[145],{17145:(a,e,s)=>{s.r(e),s.d(e,{default:()=>f});var r=s(97542),t=s(9037),i=s(79727),o=s(53954),n=s(23254),c=s(44443),l=s(7159);class m{constructor(a,e,s,r){this.cameraData=a,this.viewmodeData=e,this.floorsViewData=s,this.sweepData=r,this.name="deeplinks",this.defaultBaseUrl=(0,c.rI)(),this.requiredParams=[...m.requiredUrlParams]}createLink(a){const{baseHref:e,additionalParams:s,paramFilter:r,thisArg:t}=a||{},i=new URLSearchParams(window.location.search),o=new URL(e||this.defaultBaseUrl.href);return this.appendParams(o.searchParams,i),r&&this.filterParamsFromURL(o,r,t),s&&this.appendParamsFromDictionary(o.searchParams,s),this.removeStartParams(o),this.dedupeModelParam(o),o}createModelLink(a,e){const{baseHref:s,additionalParams:r,paramFilter:t,thisArg:i}=e||{},o=new URLSearchParams(window.location.search),n=new URL(s||this.defaultBaseUrl.href);return this.appendParams(n.searchParams,o),t&&this.filterParamsFromURL(n,t,i),r&&this.appendParamsFromDictionary(n.searchParams,r),this.removeStartParams(n),this.dedupeModelParam(n),n}createDeepLink(a){const{baseHref:e,additionalParams:s,paramFilter:r,thisArg:t}=a||{},i=new URLSearchParams(l.K.getQueryString({cameraData:this.cameraData,floorsViewData:this.floorsViewData,sweepData:this.sweepData,viewmodeData:this.viewmodeData})),o=new URLSearchParams(window.location.search),n=new URL(e||this.defaultBaseUrl.href);this.appendParams(n.searchParams,o),this.removeStartParams(n),r&&this.filterParamsFromURL(n,r,t);for(const[a,e]of i)l.K.navigationKeys.has(a)&&n.searchParams.set(a,e);if(s){const a=Object.assign({},s);for(const e of l.K.navigationKeys)delete a[e];this.appendParamsFromDictionary(n.searchParams,a)}return this.dedupeModelParam(n),n}setDefaultBaseHref(a,e){this.defaultBaseUrl=new URL(a),this.requiredParams=[...m.requiredUrlParams,...e]}filterParamsFromURL(a,e,s){const r=new Set;for(const[t,i]of a.searchParams)this.requiredParams.includes(t)||e.call(s,t,i)||r.add(t);for(const e of r)a.searchParams.delete(e)}dedupeModelParam(a){const e=a.searchParams.get("m")||a.searchParams.get("model")||"";a.searchParams.delete("model"),a.searchParams.set("m",e)}removeStartParams(a){["start","sm","sp","sq","sr","ss","sf","sz"].forEach(a.searchParams.delete,a.searchParams)}appendParams(a,e){for(const[s,r]of e)a.set(s,r)}appendParamsFromDictionary(a,e){for(const[s,r]of Object.entries(e))a.set(s,r)}}m.requiredUrlParams=["m","model"];var h,d=s(8403);!function(a){a[a.SAME_ORIGIN=0]="SAME_ORIGIN",a[a.EXTERNAL=1]="EXTERNAL",a[a.MODEL=2]="MODEL",a[a.NAVIGATION=3]="NAVIGATION"}(h||(h={}));var P,N=s(12039);!function(a){a[a.IN_FRAME=0]="IN_FRAME",a[a.NEW_WINDOW=1]="NEW_WINDOW",a[a.CUSTOM=2]="CUSTOM"}(P||(P={}));class w{constructor(a){this.commandBinder=a,this.defaultPolicy={[h.NAVIGATION]:P.IN_FRAME,[h.MODEL]:P.IN_FRAME,[h.SAME_ORIGIN]:P.NEW_WINDOW,[h.EXTERNAL]:P.NEW_WINDOW},this.activePolicy=Object.assign({},this.defaultPolicy),this.linkHandlers={[h.NAVIGATION]:{[P.IN_FRAME]:a=>{const e=l.K.deserialize(a);e&&this.navigateToPose(e)},[P.NEW_WINDOW]:a=>this.openNewWindow(a),[P.CUSTOM]:a=>this.customHandlers[h.NAVIGATION](a)},[h.MODEL]:{[P.IN_FRAME]:a=>this.replaceFrameLocation(a),[P.NEW_WINDOW]:a=>this.openNewWindow(a),[P.CUSTOM]:a=>this.customHandlers[h.MODEL](a)},[h.SAME_ORIGIN]:{[P.IN_FRAME]:a=>this.replaceFrameLocation(a),[P.NEW_WINDOW]:a=>this.openNewWindow(a),[P.CUSTOM]:a=>this.customHandlers[h.SAME_ORIGIN](a)},[h.EXTERNAL]:{[P.IN_FRAME]:()=>{throw Error("Navigating Showcase's frame to an external domain is not supported.")},[P.NEW_WINDOW]:a=>this.openNewWindow(a),[P.CUSTOM]:a=>this.customHandlers[h.EXTERNAL](a)}},this.customHandlers={[h.NAVIGATION]:a=>{},[h.MODEL]:a=>{},[h.SAME_ORIGIN]:a=>{},[h.EXTERNAL]:a=>{}}}get HandlingPolicy(){return P}setPolicy(a,e,s){e===P.CUSTOM&&s&&(this.customHandlers[a]=s),this.activePolicy[a]=e}resetPolicy(a){this.activePolicy[a]=this.defaultPolicy[a]}openLink(a){if(function(a){return(0,d.K)(a)&&"pose"in a}(a)){const e=this.activePolicy[h.NAVIGATION];this.linkHandlers[h.NAVIGATION][e](a.fullLink)}else if(function(a){return(0,d.K)(a)&&"modelId"in a}(a)){const e=this.activePolicy[h.MODEL],s=new URL(window.location.href),r=new URL(a.fullLink);s.search=r.search,s.searchParams.delete("m"),s.searchParams.delete("model"),s.searchParams.set("m",a.modelId),s.searchParams.set("play","1"),this.linkHandlers[h.MODEL][e](s.href)}else try{const e=new URL(a);if(e.origin===document.referrer||e.origin===window.location.origin){const e=this.activePolicy[h.SAME_ORIGIN];this.linkHandlers[h.SAME_ORIGIN][e](a)}else{const e=this.activePolicy[h.EXTERNAL];this.linkHandlers[h.EXTERNAL][e](a)}}catch(e){const s=this.activePolicy[h.EXTERNAL];this.linkHandlers[h.EXTERNAL][s](a)}}replaceFrameLocation(a){window.location.replace(a)}openNewWindow(a){window.open(a)}navigateToPose(a){this.commandBinder.issueCommand(new N.L4(a))}}const f=class extends r.Y{constructor(){super(...arguments),this.name="deep linker"}async init(a,e){const[s,r,c,l]=await Promise.all([e.market.waitForData(t.M),e.market.waitForData(n.O),e.market.waitForData(i.c),e.market.waitForData(o.Z)]);this.creator=new m(s,r,c,l),this.handler=new w(e.commandBinder)}get LinkType(){return h}}}}]);