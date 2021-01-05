/*!
 * WorkPlus JS-SDK v1.1.0-beta.5
 * (c) 2021 WorkPlusFE
 * MIT License 
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).w6s={})}(this,function(e){"use strict";function t(){var e;return null!==(e=null===window||void 0===window?void 0:window.navigator)&&void 0!==e&&e.userAgent.includes("workplus")}function r(){var e;return null!==(e=null===window||void 0===window?void 0:window.navigator)&&void 0!==e&&e.userAgent.includes("android")}function o(){var e;return null!==(e=null===window||void 0===window?void 0:window.navigator)&&void 0!==e&&e.userAgent.includes("iPhone")}function d(e){return"[object Function]"===Object.prototype.toString.call(e)}function n(e){return!!~e.indexOf("android")}var i=function(){return!!~navigator.userAgent.indexOf("workplus")},l=function(e){var n=document.createElement("script");n.setAttribute("type","text/javascript"),n.setAttribute("src",e),document.getElementsByTagName("head")[0].appendChild(n)},u=function(){return(u=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)};function s(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&!~n.indexOf(o)&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)!~n.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t}var c={cordovajs:{local:"applocal://www/cordova.min.js",iOS:"",android:""},useHttp:!1,pcSDKUri:""},a=(Object.defineProperty(f.prototype,"userAgent",{get:function(){return window.navigator.userAgent.toLowerCase()},enumerable:!1,configurable:!0}),f.prototype.getImportUri=function(){var e=this.getCurrentPlatformByUserAgent();if(this.mustUseHttpModel()||this.config.useHttp){var n=this.config.cordovajs[e];if(n||"development"!==process.env.NODE_ENV||console.warn("当前应用环境适合使 http(s):// 方式加载 cordova.js，请设置对应平台的 cordova.js 访问地址！"),n)return n}return this.config.cordovajs.local},f.prototype.mustUseHttpModel=function(){return!(!self.frameElement||"IFRAME"!=self.frameElement.tagName)||!("https:"!==window.location.protocol||!n(this.userAgent))},f.prototype.getCurrentPlatformByUserAgent=function(){return~this.userAgent.indexOf("iphone")?"iOS":n(this.userAgent)?"android":"local"},f);function f(e,n){this.config=Object.assign(JSON.parse(JSON.stringify(c)),{cordovajs:u(u({},e),{local:c.cordovajs.local}),useHttp:n})}var v=(p.prototype.disable=function(){this._enabled=!1},p.prototype.enable=function(){this._enabled=!0},p.prototype.log=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._enabled&&console.log(this._PREFIX+"[Log]: "+e.join(" "))},p.prototype.warn=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._enabled&&console.warn(this._PREFIX+"[Warn]: "+e.join(" "))},p.prototype.error=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._enabled&&console.error(this._PREFIX+"[Error]: "+e.join(" "))},p);function p(e){void 0===e&&(e=!1),this._PREFIX="WorkPlus JS-SDK ",this._enabled=e}var g="WorkPlus_Image",_="WorkPlus_Contact",m="WorkPlus_Auth",h="WorkPlus_WebView",y="WorkPlus_Email",w="WorkPlus_DeviceInfo",b="WorkPlus_Location",P="WorkPlus_EventLog",O="WorkPlus_Files",S="WorkPlus_NetInfo",k="WorkPlus_BarcodeScanner",I="WorkPlus_LightApp",L="WorkPlus_PublicClound",C="WorkPlus_AppStore",E=Object.freeze({__proto__:null,WORKPLUS_IMAGE:g,WORKPLUS_CONTACT:_,WORKPLUS_AUTH:m,WORKPLUS_WEBVIEW:h,WORKPLUS_EMAIL:y,WORKPLUS_PAY:"Workplus_Pay",WORKPLUS_SCAN:"WorkPlus_BarcodeScanner",WORKPLUS_DEVICE:w,WORKPLUS_LOCATION:b,WORKPLUS_EVENTLOG:P,WORKPLUS_FILE:O,WORKPLUS_NETWORK:S,WORKPLUS_BARCODE_SCANNER:k,WORKPLUS_LIGHT_APP:I,WORKPLUS_PUBLIC_CLOUND:L,WORKPLUS_APP_STORE:C}),U={},W=E;Object.keys(W).map(function(e){var n;e.includes("WORKPLUS_")&&(n=e.replace("WORKPLUS_","").toLocaleLowerCase(),U[W[e]]=n)});var A=!1;function j(){var o=this;this._ready=!1,this._inject=!1,this._logger=new v,this._timeout=5e3,this._mock=!1,this._mockData=Object.create(null),this.init=function(e){if(o._logger||(o._logger=new v),null!=e&&e.debug&&(o._logger.enable(),o._logger.warn("当前 SDK 已开启调试模式")),"undefined"!=typeof window&&"[object Window]"===Object.prototype.toString.call(window)){if(window.cordova||o.isReday||o._inject||(function(e,n){try{if(!i())return;var t=new a(e,n).getImportUri();l(t)}catch(e){throw Error(e)}}(null==e?void 0:e.cordovajs,null==e?void 0:e.useHttp),o._inject=!0),o._timeout=(null==e?void 0:e.timeout)||5e3,o._logger.warn("当前 SDK 设置的超时时间为: "+o._timeout+"ms"),null!=e&&e.mock)o._mock=null==e?void 0:e.mock,null!=e&&e.mockData&&(o._mockData=null==e?void 0:e.mockData);else if(!t())return void o._logger.error("请在 WorkPlus APP 下打开页面")}else o._logger.error("SDK 不支持非浏览器环境")},this.ready=function(t){return new Promise(function(e){function n(){return t&&d(t)&&t()}o.isReday?(e(),n()):document.addEventListener("deviceready",function(){o._logger.warn("Cordova 注入成功"),o._setReady(!0),e(),n()},!1)})},this.error=function(e){d(e)?o._errorCallback=e:o._logger.error("错误监听回调仅支持函数参数")}}var R=new(j.prototype.onError=function(e){this._errorCallback&&d(this._errorCallback)&&this._errorCallback(e)},j.prototype._setReady=function(e){A=this._ready=e},Object.defineProperty(j.prototype,"isReday",{get:function(){return this._ready},enumerable:!1,configurable:!0}),Object.defineProperty(j.prototype,"logger",{get:function(){return this._logger},enumerable:!1,configurable:!0}),Object.defineProperty(j.prototype,"timeout",{get:function(){return this._timeout},enumerable:!1,configurable:!0}),Object.defineProperty(j.prototype,"mock",{get:function(){return this._mock},enumerable:!1,configurable:!0}),Object.defineProperty(j.prototype,"mockData",{get:function(){return this._mockData},enumerable:!1,configurable:!0}),j),B=R.init,x=R.ready,D=R.error,T=R.logger,M=A;var K=function(n){try{return JSON.parse(n)}catch(e){return{result:n}}};function F(l,u,s,c,a,f){return void 0===f&&(f=!0),new Promise(function(t,n){function o(){e&&clearTimeout(e)}var r=l+"."+u,e=f?setTimeout(function(e){void 0===e&&(e="接口调用超时"),T.warn(r+" 接口调用响应超时，请重试"),a&&d(a)&&a(e),n(e)},R.timeout):0;try{if(R.mock){var i=function(n,t){var e=R.mockData[U[n]];if(e&&e[t]&&d(e[t])){var o=Object.create(null);T.warn("执行 "+n+"."+t+" Mock 调用");try{o=e[t](),T.warn("执行 "+n+"."+t+" Mock 返回结果: "+JSON.stringify(o,null,4))}catch(e){T.error("执行 "+n+"."+t+" Mock 发生错误: "+JSON.stringify(e,null,4))}return o}return!1}(l,u);if(i)return o(),void t(i)}R.ready(function(){T.warn("准备调用 "+r),cordova.exec(function(e){o(),console.log(e);var n=K(e);return T.warn(r+" 调用成功: "+JSON.stringify(n,null,4)),c&&d(c)&&c(n),t(n)},function(e){return o(),T.error(r+" 接口调用失败"),R.onError(r+" 调用失败: "+e),a&&d(a)&&a(e),n(e)},l,u,s)})}catch(e){R.onError(e)}})}function z(e,n,t){var o=e+"."+n;T.warn("同步调用 "+o);R.ready(function(){cordova.exec(function(e){T.warn(JSON.stringify(e,null,4))},function(e){T.error(JSON.stringify(e,null,4)),R.onError(o+" 调用失败: "+e)},e,n,t)})}function N(o){return new Promise(function(n,t){var e;r()&&(o="file://"+o),e=o,new Promise(function(n,t){window.resolveLocalFileSystemURL(e,function(e){n(e)},function(e){t(e)})}).then(function(e){e.file(function(e){n(e)},function(e){t(e)})}).catch(function(e){t(e)})})}function V(t){return new Promise(function(n){var e=new FileReader;e.onloadend=function(e){n(e)},e.readAsDataURL(t)})}var H={takePicture:function(e){return F(g,"takePicture",[{editable:(null==e?void 0:e.editable)||!1}],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},takePhotoAndAddWaterMark:function(e){var n=e.success,t=e.fail,o=s(e,["success","fail"]);return F(g,"takePhotoAndAddWaterMark",[{content:o.content,font_size:o.fontSize,color:o.color,mark_disable:o.markDisable,time_enable:o.timeEnable,location_enable:o.locationEnable}],n,t,!1)},saveImages:function(e){var n=e.success,t=e.fail,o=s(e,["success","fail"]);return F(g,"saveImages",[o],n,t,!1)},showImages:function(e){return z(g,"showImages",[e])},chooseImages:function(e){var n,t,o,r={multiple:(null==e?void 0:e.multiple)||!0,imageKeys:(null==e?void 0:e.imageKeys)||[],file_limit:{max_select_count:(null===(n=null==e?void 0:e.fileLimit)||void 0===n?void 0:n.maxSelectCount)||9,single_select_size:(null===(t=null==e?void 0:e.fileLimit)||void 0===t?void 0:t.singleSelectSize)||-1,total_select_size:(null===(o=null==e?void 0:e.fileLimit)||void 0===o?void 0:o.totalSelectSize)||-1}};return F(g,"chooseImages",[r],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},actionForLongPressImage:function(e){return z(g,"actionForLongPressImage",[e])},cleanCompressImage:function(){return z(g,"cleanCompressImage",[])},toBase64:function(n){return N(n.filePath).then(V).then(function(e){return n.success&&d(n.success)&&n.success(e),Promise.resolve(e)}).catch(function(e){return n.fail&&d(n.fail)&&n.fail(e),Promise.reject(e)})}};var J=Object.freeze({__proto__:null,getSingleContact:function(e){return F(_,"getContact",[{hideMe:(null==e?void 0:e.hideMe)||!1,filterSenior:(null==e?void 0:e.filterSenior)||1}],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},getContacts:function(e){return F(_,"getContacts",[{selectedContacts:(null==e?void 0:e.selectedContacts)||[],hideMe:(null==e?void 0:e.hideMe)||!1,filterSenior:(null==e?void 0:e.filterSenior)||1}],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},getEmployeesFromCurrentOrg:function(e){return F(_,"getEmployeesFromCurrentOrg",[{selectedEmpList:(null==e?void 0:e.selectedEmpList)||[],hideMe:(null==e?void 0:e.hideMe)||!1,filterSenior:(null==e?void 0:e.filterSenior)||1}],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},selectContacts:function(e){return F(_,"selectContacts",[{filterSenior:(null==e?void 0:e.filterSenior)||1,maxCount:(null==e?void 0:e.maxCount)||-1,selectedUsers:(null==e?void 0:e.selectedUsers)||[],selectedEmployees:(null==e?void 0:e.selectedEmployees)||[]}],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},getMobileContacts:function(e){return F(_,"getMobileContacts",[],null==e?void 0:e.success,null==e?void 0:e.fail)}});var X=Object.freeze({__proto__:null,getLocation:function(e){return F(b,"getLocation",[],null==e?void 0:e.success,null==e?void 0:e.fail)}});var G={getDeviceInfo:function(e){return F(w,"getDeviceInfo",[],null==e?void 0:e.success,null==e?void 0:e.fail)},getIpAddress:function(e){return F(w,"getIpAddress",[],null==e?void 0:e.success,null==e?void 0:e.fail)},getPedometerData:function(e){return F(w,"getPedometerData",[],null==e?void 0:e.success,null==e?void 0:e.fail)},getAppInfo:function(e){return F(L,"getAppInfo",[],null==e?void 0:e.success,null==e?void 0:e.fail)}};var $={getEventLogs:function(e){var n=e.success,t=e.fail,o=s(e,["success","fail"]);return F(P,"getEventLogs",[o],n,t)},getTodayUseDuration:function(e){return F(P,"getTodayUseDuration",[],null==e?void 0:e.success,null==e?void 0:e.fail)}};function Y(e){this.fileTransferInstance=new FileTransfer,this.fileUploadOptions=e}var q={chooseFiles:function(e){var n,t,o,r={multiple:(null==e?void 0:e.multiple)||!0,file_keys:(null==e?void 0:e.fileKeys)||[],file_limit:{max_select_count:(null===(n=null==e?void 0:e.fileLimit)||void 0===n?void 0:n.maxSelectCount)||9,single_select_size:(null===(t=null==e?void 0:e.fileLimit)||void 0===t?void 0:t.singleSelectSize)||-1,total_select_size:(null===(o=null==e?void 0:e.fileLimit)||void 0===o?void 0:o.totalSelectSize)||-1}};return F(O,"chooseFiles",[r],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},isFileExist:function(e){var n=e.success,t=e.fail,o=s(e,["success","fail"]);return F(O,"isFileExist",[o],n,t,!1)},openFileDetail:function(e){return z(O,"showFile",[e])},readFile:function(e){return z(O,"readFile",[e])},download:function(r){return new Promise(function(n,t){var e,o;(new FileTransfer).download(encodeURI(r.source),r.target,function(e){null!=r&&r.success(e),n(e)},function(e){null!=r&&r.fail(e),t(e)},null!==(e=r.trustAllHosts)&&void 0!==e&&e,null!==(o=r.options)&&void 0!==o?o:{})})},upload:(Y.prototype.upload=function(o){var e=this;return new Promise(function(n,t){e.fileTransferInstance.onprogress=function(e){var n=e.loaded,t=e.total;o.progress&&d(o.progress)&&o.progress(n,t)},e.fileTransferInstance.upload(o.fileURL,encodeURI(o.server),function(e){return 200===e.responseCode?(o.success&&d(o.success)&&o.success(e),n(e)):t(e)},function(e){o.fail&&d(o.fail)&&o.fail(e),t(e)},e.fileUploadOptions,o.trustAllHosts)})},Y.prototype.abort=function(){this.fileTransferInstance.abort()},Y),getFilePath:function(e){var n=e.success,t=e.fail,o=s(e,["success","fail"]);return F(O,"getUserFilePath",[o],n,t)}};var Q=Object.freeze({__proto__:null,getWifiInfo:function(e){return F(S,"getWifiInfo",[],null==e?void 0:e.success,null==e?void 0:e.fail)}});var Z={scanner:function(e){return F(k,"scanner",[],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},voiceToText:function(e){return F(h,"voiceToText",[],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},copyText:function(e){return z(h,"copyText",[{text:e}])}};var ee=Object.freeze({__proto__:null,openEmail:function(e){return F(y,"openEmail",[],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},writeEmail:function(e){var n=e.success,t=e.fail,o=s(e,["success","fail"]);return F(y,"writeEmail",[o],n,t,!1)}});var ne=Object.freeze({__proto__:null,getUserTicket:function(e){return F(m,"getUserTicket",[],null==e?void 0:e.success,null==e?void 0:e.fail)},biometric:function(e){return F(I,"routeBiometricAuthenticationLock",[],null==e?void 0:e.success,null==e?void 0:e.fail)}});function te(e,n,t){document.addEventListener(e,n,t)}var oe=Object.freeze({__proto__:null,bindBackButtonEvent:function(n){cordova.exec(function(){},function(){},"CoreAndroid","overrideBackbutton",[!0]),cordova.exec(function(e){"backbutton"===e.action&&"function"==typeof n&&n()},function(){},"CoreAndroid","messageChannel",[])},bindPauseEvent:function(n){t()&&(o()&&te("pause",function(e){if(d(n))return n(e)},!1),r()&&cordova.exec(function(e){"pause"===e.action&&d(n)&&n()},function(){},"CoreAndroid","messageChannel",[]))},bindResumeEvent:function(n){t()&&(o()&&te("resume",function(e){if(d(n))return n(e)},!1),r()&&cordova.exec(function(e){"resume"===e.action&&d(n)&&n()},function(){},"CoreAndroid","messageChannel",[]))}});var re=Object.freeze({__proto__:null,route:function(e){var n=e.success,t=e.fail,o=s(e,["success","fail"]);return F(C,"route",[{scheme_url:o.schemeUrl}],n,t,!1)},searchInApp:function(){return z(_,"searchInApp",[])},showAppChatViewById:function(e){return z(_,"showAppChatView",[{app_id:e.appId,domain_id:e.domainId,org_id:e.orgId,session_type:e.sessionType}])},showAppListById:function(e){return z(C,"showAppListById",[{org_id:e.orgId}])}});var ie=Object.freeze({__proto__:null,showUserChatViewByUser:function(e){var n=e.success,t=e.fail,o=s(e,["success","fail"]);return F(_,"showUserChatViewByUser",[o],n,t,!1)},openDiscussionById:function(e){return z(_,"openDiscussionById",[e])},createDiscussionChat:function(){return z(_,"createDiscussionChat",[])},selectDiscussionMembers:function(e){return F(_,"selectDiscussionMembers",[{discussion_id:e.discussionId,members_selected:(null==e?void 0:e.membersSelected)||[]}],null==e?void 0:e.success,null==e?void 0:e.fail,!1)}});var le=Object.freeze({__proto__:null,getCurrentUserInfo:function(e){return F(_,"getCurrentUserInfo",[{needEmpInfo:(null==e?void 0:e.needEmpInfo)||!1}],null==e?void 0:e.success,null==e?void 0:e.fail)},getCurrentEmployeeInfo:function(e){return F(_,"getCurrentEmployeeInfo",[{orgCode:(null==e?void 0:e.orgCode)||""}],null==e?void 0:e.success,null==e?void 0:e.fail)},getUserInfoByUserId:function(e){var n=e.success,t=e.fail,o=s(e,["success","fail"]);return F(_,"getUserInfoByUserId",[o],n,t)},showUserInfoByUsername:function(e){var n=e.success,t=e.fail,o=s(e,["success","fail"]);return F(_,"showUserInfoByUsername",[o],n,t,!1)}});function ue(e){return z(h,"navigation",[e]),0}var se=Object.freeze({__proto__:null,changeLeftButton:function(e){return z(h,"changeLeftButton",[e.items])},clearLeftButton:function(){return z(h,"clearLeftButton",[])},clearRightButtons:function(){return z(h,"clearRightButtons",[])},leftButton:function(e){return z(h,"leftButton",[e.method])},navigation:{lock:function(){ue("lock")},unlock:function(){ue("unlock")}},rightButtons:function(e){return z(h,"rightButtons",[e.items])},setTitle:function(e){return z(h,"title",[e])},visibleLeftButton:function(e){return z(h,"visibleLeftButton",[e])},showSearchBar:function(e){return F(h,"searchBar",[{visible:!0,hint:(null==e?void 0:e.hint)||"",cancel_mode:(null==e?void 0:e.cancelMode)||"reset"}],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},hideSearchBar:function(){return z(h,"searchBar",[{visible:!1}])}});function ce(e,n,t){t||B(n),e.prototype.$w6s={version:fe,isReady:je,image:de,contact:ve,user:pe,session:ge,app:_e,webview:me,header:he,util:ye,location:we,device:be,eventlog:Pe,file:Oe,network:Se,email:ke,auth:Ie,event:Le,ready:Ee,exec:Ue,execSync:We,error:Ae},t&&(e.prototype.$w6s.init=Ce)}var ae=Object.freeze({__proto__:null,addWaterMask:function(e){return z(h,"addWaterMask",[e])},changeOrientation:function(e){return z(h,"changeOrientation",[e])},exit:function(){return z(h,"exit",[])},openWebView:function(e){return z(h,"openWebView",[{url:e.url,title:e.title,use_android_webview:(null==e?void 0:e.useAndroidWebview)||!1,use_system_webview:(null==e?void 0:e.useSystemWebview)||!1,display_mode:(null==e?void 0:e.displayMode)||""}])},removeWaterMask:function(){return z(h,"removeWaterMask",[])},share:function(e){return z(h,"share",[{url:e.url,title:e.title,cover_media_id:(null==e?void 0:e.coverMediaId)||"",cover_url:(null==e?void 0:e.coverUrl)||"",scope:e.scope,summary:e.summary,dicrectly:(null==e?void 0:e.dicrectly)||"",direct_session:null==e?void 0:e.directSession}])},wxShare:function(e){return z(h,"wxShare",[{app_id:e.appId,title:e.title,type:e.type,description:e.description,thumb:e.thumb,scene:e.scene,data:e.data}])},registerShakeListener:function(){return z(h,"registerShakeListener",[])},unregisterShakeListener:function(){return z(h,"unregisterShakeListener",[])}}),fe="v1.1.0-beta.5",de=H,ve=J,pe=le,ge=ie,_e=re,me=ae,he=se,ye=Z,we=X,be=G,Pe=$,Oe=q,Se=Q,ke=ee,Ie=ne,Le=oe,Ce=B,Ee=x,Ue=F,We=z,Ae=D,je=M;"undefined"!=typeof window&&window.Vue&&ce(window.Vue,null,!0),e.app=_e,e.auth=Ie,e.contact=ve,e.device=be,e.email=ke,e.error=Ae,e.event=Le,e.eventlog=Pe,e.exec=Ue,e.execSync=We,e.file=Oe,e.header=he,e.image=de,e.init=Ce,e.install=ce,e.isReady=je,e.location=we,e.native={},e.network=Se,e.ready=Ee,e.session=ge,e.user=pe,e.util=ye,e.version=fe,e.webview=me,Object.defineProperty(e,"__esModule",{value:!0})});
/* 最终解析权归 恒拓高科(https://workplus.io) 所有! */
