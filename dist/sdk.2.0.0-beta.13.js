/*!
 * WorkPlus JS-SDK v2.0.0-beta.13
 * (c) 2023 WorkPlusFE
 * MIT License 
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).w6s={})}(this,function(e){"use strict";function t(){var e;return null!==(e=null===window||void 0===window?void 0:window.navigator)&&void 0!==e&&e.userAgent.includes("workplus")}function i(){var e;return null!==(e=null===window||void 0===window?void 0:window.navigator)&&void 0!==e&&e.userAgent.includes("android")}function o(){var e;return null!==(e=null===window||void 0===window?void 0:window.navigator)&&void 0!==e&&e.userAgent.includes("iPhone")}function f(e){return"[object Function]"===Object.prototype.toString.call(e)}var n=(r.prototype.disable=function(){this._enabled=!1},r.prototype.enable=function(){this._enabled=!0},r.prototype.log=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._enabled&&console.log(this._PREFIX+"[Log]: "+e.join(" "))},r.prototype.warn=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._enabled&&console.warn(this._PREFIX+"[Warn]: "+e.join(" "))},r.prototype.error=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._enabled&&console.error(this._PREFIX+"[Error]: "+e.join(" "))},r);function r(e){void 0===e&&(e=!1),this._PREFIX="WorkPlus JS-SDK ",this._enabled=e}var l="WorkPlus_Image",u="WorkPlus_Contact",c="WorkPlus_Auth",s="WorkPlus_WebView",a="WorkPlus_Email",d="WorkPlus_Pay",v="WorkPlus_BarcodeScanner",g="WorkPlus_DeviceInfo",p="WorkPlus_Location",_="WorkPlus_EventLog",h="WorkPlus_Files",m="WorkPlus_NetInfo",w="WorkPlus_Network",y="WorkPlus_BarcodeScanner",P="WorkPlus_LightApp",b="WorkPlus_PublicClound",O="WorkPlus_AppStore",I="WorkPlus_Config",S="WorkPlus_DATA",k="WorkPlus_Dialog",L="WorkPlus_AudioAndVideo",A="WorkPlus_Notification",U=Object.freeze({__proto__:null,WORKPLUS_IMAGE:l,WORKPLUS_CONTACT:u,WORKPLUS_AUTH:c,WORKPLUS_WEBVIEW:s,WORKPLUS_EMAIL:a,WORKPLUS_PAY:d,WORKPLUS_SCAN:v,WORKPLUS_DEVICE:g,WORKPLUS_LOCATION:p,WORKPLUS_EVENTLOG:_,WORKPLUS_FILE:h,WORKPLUS_NETINFO:m,WORKPLUS_NETWORK:w,WORKPLUS_BARCODE_SCANNER:y,WORKPLUS_LIGHT_APP:P,WORKPLUS_PUBLIC_CLOUND:b,WORKPLUS_APP_STORE:O,WORKPLUS_CONFIG:I,WORKPLUS_DATA:S,WORKPLUS_DIALOG:k,WORKPLUS_BEHAVIOR_LOG:"WorkPlus_BehaviorLog",WORKPLUS_AUDIO_AND_VIDEO:L,WORKPLUS_NOTIFICATION:A}),W={},R=U;Object.keys(R).map(function(e){var n;e.includes("WORKPLUS_")&&(n=e.replace("WORKPLUS_","").toLocaleLowerCase(),W[R[e]]=n)});function C(e){return!!~e.indexOf("android")}var E=function(){return!!~navigator.userAgent.indexOf("workplus")},j=function(e){var n=document.createElement("script");n.setAttribute("type","text/javascript"),n.setAttribute("src",e),document.getElementsByTagName("head")[0].appendChild(n)},D=function(){return(D=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)};function B(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&!~n.indexOf(o)&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)!~n.indexOf(o[i])&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]]);return t}var x={cordovajs:{local:"applocal://www/cordova.min.js",iOS:"",android:""},useHttp:!1,pcSDKUri:""},T=(Object.defineProperty(K.prototype,"userAgent",{get:function(){return window.navigator.userAgent.toLowerCase()},enumerable:!1,configurable:!0}),K.prototype.getImportUri=function(){var e=this.getCurrentPlatformByUserAgent();if(this.mustUseHttpModel()||this.config.useHttp){var n=this.config.cordovajs[e];if(n||console.warn("当前应用环境适合使 http(s):// 方式加载 cordova.js，请设置对应平台的 cordova.js 访问地址！"),n)return n}return this.config.cordovajs.local},K.prototype.mustUseHttpModel=function(){return!(!self.frameElement||"IFRAME"!==self.frameElement.tagName)||!("https:"!==window.location.protocol||!C(this.userAgent))},K.prototype.getCurrentPlatformByUserAgent=function(){return~this.userAgent.indexOf("iphone")?"iOS":C(this.userAgent)?"android":"local"},K);function K(e,n){this.config=Object.assign(JSON.parse(JSON.stringify(x)),{cordovajs:D(D({},e),{local:x.cordovajs.local}),useHttp:n})}function M(){var o=this;this._deviceready=!1,this._inject=!1,this._logger=new n,this._timeout=5e3,this._mock=!1,this._mockData=Object.create(null),this.init=function(e){if(o._logger||(o._logger=new n),null!=e&&e.debug&&(o._logger.enable(),o._logger.warn("SDK 已开启调试模式")),"undefined"!=typeof window&&"[object Window]"===Object.prototype.toString.call(window)){if(o._logger.warn("SDK 已"+(null!=e&&e.auth?"开启":"关闭")+"接口鉴权"),null!=e&&e.auth||window.cordova||o.isDeviceReady||o._inject||(function(e,n){try{if(!E())return;var t=new T(e,n).getImportUri();j(t)}catch(e){console.log(e)}}(null==e?void 0:e.cordovajs,null==e?void 0:e.useHttp),o._inject=!0),o._timeout=(null==e?void 0:e.timeout)||5e3,o._logger.warn("SDK 设置的超时时间为: "+o._timeout+"ms"),null!=e&&e.mock)o._mock=null==e?void 0:e.mock,null!=e&&e.mockData&&(o._mockData=null==e?void 0:e.mockData);else if(!t())return void o._logger.error("请在 WorkPlus APP 内打开应用")}else o._logger.error("不支持非浏览器环境")},this.deviceready=function(t){return new Promise(function(e){function n(){return t&&f(t)&&t()}o.isDeviceReady?(e(),n()):document.addEventListener("deviceready",function(){o._logger.warn("设备已就绪！（deviceready 事件被触发）"),o._setDeviceReady(!0),e(),n()},!1)})},this.error=function(e){f(e)?o._errorCallback=e:o._logger.error("错误监听回调仅支持函数参数")}}var N=new(M.prototype.onError=function(e){this._errorCallback&&f(this._errorCallback)&&this._errorCallback(e)},M.prototype._setDeviceReady=function(e){this._deviceready=e},Object.defineProperty(M.prototype,"isDeviceReady",{get:function(){return this._deviceready},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"logger",{get:function(){return this._logger},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"timeout",{get:function(){return this._timeout},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"mock",{get:function(){return this._mock},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"mockData",{get:function(){return this._mockData},enumerable:!1,configurable:!0}),M),F=N.init,z=N.deviceready,V=N.error,H=N.logger;var J=function(n){try{return JSON.parse(n)}catch(e){return{result:n}}};function q(l,u,c,s,a,d){return void 0===d&&(d=!0),new Promise(function(t,n){function o(){e&&clearTimeout(e)}var i=l+"."+u,e=d?setTimeout(function(e){void 0===e&&(e="接口调用超时"),H.warn(i+" 接口调用响应超时，请重试"),a&&f(a)&&a(e),n(e)},N.timeout):0;try{if(N.mock){var r=function(n,t){var e=N.mockData[W[n]];if(e&&e[t]&&f(e[t])){var o=Object.create(null);H.log("执行 "+n+"."+t+" Mock 调用");try{o=e[t](),H.log("执行 "+n+"."+t+" Mock 返回结果: "+JSON.stringify(o,null,4))}catch(e){H.log("执行 "+n+"."+t+" Mock 发生错误: "+JSON.stringify(e,null,4))}return o}return!1}(l,u);if(r)return o(),void t(r)}N.deviceready(function(){H.log("准备调用 "+i),cordova.exec(function(e){o();var n=J(e);return H.log(i+" 调用成功: "+JSON.stringify(n,null,4)),s&&f(s)&&s(n),t(n)},function(e){return o(),H.error(i+" 接口调用失败"),N.onError(i+" 调用失败: "+e),a&&f(a)&&a(e),n(e)},l,u,c)})}catch(e){N.onError(e)}})}function G(e,n,t){var o=e+"."+n;H.log("同步调用 "+o);N.deviceready(function(){cordova.exec(function(e){H.log(JSON.stringify(e,null,4))},function(e){H.error(JSON.stringify(e,null,4)),N.onError(o+" 调用失败: "+e)},e,n,t)})}function X(o){return new Promise(function(n,t){var e;i()&&(o="file://"+o),e=o,new Promise(function(n,t){window.resolveLocalFileSystemURL(e,function(e){n(e)},function(e){t(e)})}).then(function(e){e.file(function(e){n(e)},function(e){t(e)})}).catch(function(e){t(e)})})}function Q(t){return new Promise(function(n){var e=new FileReader;e.onloadend=function(e){n(e)},e.readAsDataURL(t)})}var $={takePicture:function(e){return q(l,"takePicture",[{editable:(null==e?void 0:e.editable)||!1}],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},takePhotoAndAddWaterMark:function(e){var n=e.success,t=e.fail,o=B(e,["success","fail"]);return q(l,"takePhotoAndAddWaterMark",[{content:o.content,font_size:o.fontSize,color:o.color,mark_disable:o.markDisable,time_enable:o.timeEnable,location_enable:o.locationEnable}],n,t,!1)},saveImages:function(e){var n=e.success,t=e.fail,o=B(e,["success","fail"]);return q(l,"saveImages",[o],n,t,!1)},showImages:function(e){return G(l,"showImages",[e])},chooseImages:function(e){var n,t,o,i={multiple:(null==e?void 0:e.multiple)||!0,imageKeys:(null==e?void 0:e.imageKeys)||[],file_limit:{max_select_count:(null===(n=null==e?void 0:e.fileLimit)||void 0===n?void 0:n.maxSelectCount)||9,single_select_size:(null===(t=null==e?void 0:e.fileLimit)||void 0===t?void 0:t.singleSelectSize)||-1,total_select_size:(null===(o=null==e?void 0:e.fileLimit)||void 0===o?void 0:o.totalSelectSize)||-1}};return q(l,"chooseImages",[i],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},actionForLongPressImage:function(e){return G(l,"actionForLongPressImage",[e])},cleanCompressImage:function(){return G(l,"cleanCompressImage",[])},toBase64:function(n){return X(n.filePath).then(Q).then(function(e){return n.success&&f(n.success)&&n.success(e),Promise.resolve(e)}).catch(function(e){return n.fail&&f(n.fail)&&n.fail(e),Promise.reject(e)})}};var Y=Object.freeze({__proto__:null,getSingleContact:function(e){return q(u,"getContact",[{hideMe:(null==e?void 0:e.hideMe)||!1,filterSenior:(null==e?void 0:e.filterSenior)||1}],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},getContacts:function(e){return q(u,"getContacts",[{selectedContacts:(null==e?void 0:e.selectedContacts)||[],hideMe:(null==e?void 0:e.hideMe)||!1,filterSenior:(null==e?void 0:e.filterSenior)||1}],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},getEmployeesFromCurrentOrg:function(e){return q(u,"getEmployeesFromCurrentOrg",[{selectedEmpList:(null==e?void 0:e.selectedEmpList)||[],hideMe:(null==e?void 0:e.hideMe)||!1,filterSenior:(null==e?void 0:e.filterSenior)||1}],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},selectContacts:function(e){return q(u,"selectContacts",[{filterSenior:(null==e?void 0:e.filterSenior)||1,maxCount:(null==e?void 0:e.maxCount)||-1,selectedUsers:(null==e?void 0:e.selectedUsers)||[],selectedEmployees:(null==e?void 0:e.selectedEmployees)||[]}],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},getMobileContacts:function(e){return q(u,"getMobileContacts",[],null==e?void 0:e.success,null==e?void 0:e.fail)}});var Z=Object.freeze({__proto__:null,getLocation:function(e){return q(p,"getLocation",[],null==e?void 0:e.success,null==e?void 0:e.fail)}});var ee={getDeviceInfo:function(e){return q(g,"getDeviceInfo",[],null==e?void 0:e.success,null==e?void 0:e.fail)},getIpAddress:function(e){return q(g,"getIpAddress",[],null==e?void 0:e.success,null==e?void 0:e.fail)},getPedometerData:function(e){return q(g,"getPedometerData",[],null==e?void 0:e.success,null==e?void 0:e.fail)},getAppInfo:function(e){return q(b,"getAppInfo",[],null==e?void 0:e.success,null==e?void 0:e.fail)}};var ne={getEventLogs:function(e){var n=e.success,t=e.fail,o=B(e,["success","fail"]);return q(_,"getEventLogs",[o],n,t)},getTodayUseDuration:function(e){return q(_,"getTodayUseDuration",[],null==e?void 0:e.success,null==e?void 0:e.fail)}};function te(e){this.fileTransferInstance=new FileTransfer,this.fileUploadOptions=e}var oe={chooseFiles:function(e){var n,t,o,i={multiple:(null==e?void 0:e.multiple)||!0,file_keys:(null==e?void 0:e.fileKeys)||[],file_limit:{max_select_count:(null===(n=null==e?void 0:e.fileLimit)||void 0===n?void 0:n.maxSelectCount)||9,single_select_size:(null===(t=null==e?void 0:e.fileLimit)||void 0===t?void 0:t.singleSelectSize)||-1,total_select_size:(null===(o=null==e?void 0:e.fileLimit)||void 0===o?void 0:o.totalSelectSize)||-1}};return q(h,"chooseFiles",[i],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},isFileExist:function(e){var n=e.success,t=e.fail,o=B(e,["success","fail"]);return q(h,"isFileExist",[o],n,t,!1)},openFileDetail:function(e){return G(h,"showFile",[e])},readFile:function(e){return G(h,"readFile",[e])},download:function(i){return new Promise(function(n,t){var e,o;(new FileTransfer).download(encodeURI(i.source),i.target,function(e){null!=i&&i.success(e),n(e)},function(e){null!=i&&i.fail(e),t(e)},null!==(e=i.trustAllHosts)&&void 0!==e&&e,null!==(o=i.options)&&void 0!==o?o:{})})},upload:(te.prototype.upload=function(o){var e=this;return new Promise(function(n,t){e.fileTransferInstance.onprogress=function(e){var n=e.loaded,t=e.total;o.progress&&f(o.progress)&&o.progress(n,t)},e.fileTransferInstance.upload(o.fileURL,encodeURI(o.server),function(e){return 200===e.responseCode?(o.success&&f(o.success)&&o.success(e),n(e)):t(e)},function(e){o.fail&&f(o.fail)&&o.fail(e),t(e)},e.fileUploadOptions,o.trustAllHosts)})},te.prototype.abort=function(){this.fileTransferInstance.abort()},te),getFilePath:function(e){var n=e.success,t=e.fail,o=B(e,["success","fail"]);return q(h,"getUserFilePath",[o],n,t)}};var ie=Object.freeze({__proto__:null,getWifiInfo:function(e){return q(m,"getWifiInfo",[],null==e?void 0:e.success,null==e?void 0:e.fail)},request:function(e){return q(w,"request",[e],null==e?void 0:e.success,null==e?void 0:e.fail)},authRequest:function(e){return q(w,"authRequest",[e],null==e?void 0:e.success,null==e?void 0:e.fail)},assembleAuthUrl:function(e){return q(w,"assembleAuthUrl",[e],null==e?void 0:e.success,null==e?void 0:e.fail)}});var re={scanner:function(e){return q(y,"scanner",[],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},voiceToText:function(e){return q(s,"voiceToText",[],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},copyText:function(e){return G(s,"copyText",[{text:e}])},tel:function(e){window.location.href="tel:"+e.number},vibrate:function(e){return q(g,"vibrate",[],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},generateBarcode:function(e){return q(v,"generateBarcode",[e],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},generateQrcode:function(e){return q(v,"generateQrcode",[e],null==e?void 0:e.success,null==e?void 0:e.fail,!1)}};var le=Object.freeze({__proto__:null,openEmail:function(e){return q(a,"openEmail",[],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},writeEmail:function(e){var n=e.success,t=e.fail,o=B(e,["success","fail"]);return q(a,"writeEmail",[o],n,t,!1)}});var ue=Object.freeze({__proto__:null,getUserTicket:function(e){return q(c,"getUserTicket",[],null==e?void 0:e.success,null==e?void 0:e.fail)},biometric:function(e){return q(P,"routeBiometricAuthenticationLock",[],null==e?void 0:e.success,null==e?void 0:e.fail)}});function ce(e,n,t){document.addEventListener(e,n,t)}var se=Object.freeze({__proto__:null,bindBackButtonEvent:function(n){z().then(function(){cordova.exec(function(){},function(){},s,"overrideBack",[!0]),cordova.exec(function(e){"back"===e.action&&"function"==typeof n&&n()},function(){},s,"messageChannel",[])})},bindPauseEvent:function(n){t()&&z().then(function(){o()&&ce("pause",function(e){if(f(n))return n(e)},!1),i()&&cordova.exec(function(e){"pause"===e.action&&f(n)&&n()},function(){},"CoreAndroid","messageChannel",[])})},bindResumeEvent:function(n){t()&&z().then(function(){o()&&ce("resume",function(e){if(f(n))return n(e)},!1),i()&&cordova.exec(function(e){"resume"===e.action&&f(n)&&n()},function(){},"CoreAndroid","messageChannel",[])})},unbindBackButtonEvent:function(){z().then(function(){cordova.exec(function(){},function(){},s,"overrideBack",[!1])})},bindMessageChannel:function(n){z().then(function(){cordova.exec(function(e){n&&n(e)},function(){},s,"messageChannel",[])})}});var ae=Object.freeze({__proto__:null,route:function(e){var n=e.success,t=e.fail,o=B(e,["success","fail"]);return q(O,"route",[{scheme_url:o.schemeUrl}],n,t,!1)},searchInApp:function(){return G(u,"searchInApp",[])},showAppChatViewById:function(e){return G(u,"showAppChatView",[{app_id:e.appId,domain_id:e.domainId,org_id:e.orgId,session_type:e.sessionType}])},showAppListById:function(e){return G(O,"showAppListById",[{org_id:e.orgId}])}});var de=Object.freeze({__proto__:null,showUserChatViewByUser:function(e){var n=e.success,t=e.fail,o=B(e,["success","fail"]);return q(u,"showUserChatViewByUser",[o],n,t,!1)},openDiscussionById:function(e){return G(u,"openDiscussionById",[e])},createDiscussionChat:function(){return G(u,"createDiscussionChat",[])},selectDiscussionMembers:function(e){return q(u,"selectDiscussionMembers",[{discussion_id:e.discussionId,members_selected:(null==e?void 0:e.membersSelected)||[]}],null==e?void 0:e.success,null==e?void 0:e.fail,!1)}});var fe=Object.freeze({__proto__:null,getCurrentUserInfo:function(e){return q(u,"getCurrentUserInfo",[{needEmpInfo:(null==e?void 0:e.needEmpInfo)||!1}],null==e?void 0:e.success,null==e?void 0:e.fail)},getCurrentEmployeeInfo:function(e){return q(u,"getCurrentEmployeeInfo",[{orgCode:(null==e?void 0:e.orgCode)||""}],null==e?void 0:e.success,null==e?void 0:e.fail)},getUserInfoByUserId:function(e){var n=e.success,t=e.fail,o=B(e,["success","fail"]);return q(u,"getUserInfoByUserId",[o],n,t)},showUserInfoByUsername:function(e){var n=e.success,t=e.fail,o=B(e,["success","fail"]);return q(u,"showUserInfoByUsername",[o],n,t,!1)}});function ve(e){return G(s,"navigation",[e]),0}var ge=Object.freeze({__proto__:null,changeLeftButton:function(e){return G(s,"changeLeftButton",[e.items])},clearLeftButton:function(){return G(s,"clearLeftButton",[])},clearRightButtons:function(){return G(s,"clearRightButtons",[])},leftButton:function(e){return G(s,"leftButton",[e.method])},navigation:{lock:function(){ve("lock")},unlock:function(){ve("unlock")}},rightButtons:function(e){return G(s,"rightButtons",e.items)},setTitle:function(e){return G(s,"title",[e])},visibleLeftButton:function(e){return G(s,"visibleLeftButton",[e])},showSearchBar:function(e){return q(s,"searchBar",[{visible:!0,hint:(null==e?void 0:e.hint)||"",cancel_mode:(null==e?void 0:e.cancelMode)||"reset"}],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},hideSearchBar:function(){return G(s,"searchBar",[{visible:!1}])}});var pe=Object.freeze({__proto__:null,addWaterMask:function(e){return G(s,"addWaterMask",[e])},changeOrientation:function(e){return G(s,"changeOrientation",[e])},exit:function(){return G(s,"exit",[])},openWebView:function(e){var n={url:e.url,title:e.title,use_android_webview:(null==e?void 0:e.useAndroidWebview)||!1,use_system_webview:(null==e?void 0:e.useSystemWebview)||!1,display_mode:(null==e?void 0:e.displayMode)||"",mute_config:(null==e?void 0:e.muteConfig)||[]};return null!=e&&e.orientation&&(n.orientation=null==e?void 0:e.orientation),G(s,"openWebView",[n])},removeWaterMask:function(){return G(s,"removeWaterMask",[])},share:function(e){return G(s,"share",[{url:e.url,title:e.title,cover_media_id:(null==e?void 0:e.coverMediaId)||"",cover_url:(null==e?void 0:e.coverUrl)||"",scope:e.scope,summary:e.summary,dicrectly:(null==e?void 0:e.dicrectly)||"",direct_session:null==e?void 0:e.directSession}])},wxShare:function(e){return G(s,"wxShare",[{app_id:e.appId,title:e.title,type:e.type,description:e.description,thumb:e.thumb,scene:e.scene,data:e.data}])},registerShakeListener:function(){return G(s,"registerShakeListener",[])},unregisterShakeListener:function(){return G(s,"unregisterShakeListener",[])},launchMiniProgram:function(e){var n=e.success,t=e.fail,o=B(e,["success","fail"]);return q(s,"launchMiniProgram",[o],n,t)},configPullRefresh:function(e){return q(s,"configPullRefresh",[e],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},onPullRefresh:function(e){return q(s,"onPullRefresh",[],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},startPullRefresh:function(e){return q(s,"startPullRefresh",[],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},endPullRefresh:function(e){return q(s,"endPullRefresh",[],null==e?void 0:e.success,null==e?void 0:e.fail,!1)}});var _e=Object.freeze({__proto__:null,showLoading:function(e){return G(k,"showLoading",[D({},e)])},hideLoading:function(){return G(k,"hideLoading",[])},showToast:function(e){return e.duration||(e.duration=3e3),G(k,"showToast",[e])},showActionSheet:function(e){return q(k,"showActionSheet",[e],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},showModal:function(e){return q(k,"showModal",[e],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},showInputView:function(e){return q(k,"showInputView",[e],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},popNotification:function(e){return q(A,"pop",[e],null==e?void 0:e.success,null==e?void 0:e.fail,!1)}});var he=Object.freeze({__proto__:null,getData:function(e){return q(S,"getData",[D({},e)])},putData:function(e){return G(S,"putData",[D({},e)])}});function me(e){return q(I,"config",[e],null==e?void 0:e.success,null==e?void 0:e.fail,!1)}function we(n){return q(I,"ready",[],function(e){H.warn("SDK 已就绪！（ready 事件被触发）"),n(e)},function(){},!1)}function ye(e){return q(I,"checkApi",[e],null==e?void 0:e.success,null==e?void 0:e.fail)}function Pe(e,n,t){t||F(n),e.prototype.$w6s={version:be,image:Oe,contact:Ie,user:Se,session:ke,app:Le,webview:Ae,header:Ue,util:We,location:Re,device:Ce,eventlog:Ee,file:je,network:De,email:Be,auth:xe,event:Te,ready:we,config:me,deviceready:He,exec:Je,execSync:qe,error:Ge,checkApi:ye,dialog:Ke,storage:Me,record:Ne,video:Fe,pay:ze},t&&(e.prototype.$w6s.init=Ve)}var be="v2.0.0-beta.13",Oe=$,Ie=Y,Se=fe,ke=de,Le=ae,Ae=pe,Ue=ge,We=re,Re=Z,Ce=ee,Ee=ne,je=oe,De=ie,Be=le,xe=ue,Te=se,Ke=_e,Me=he,Ne={translateAudio:function(e){return q(L,"translateAudio",[e],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},voiceRecord:function(e){return q(L,"voiceRecord",[],null==e?void 0:e.success,null==e?void 0:e.fail,!1)}},Fe={startVideoRecoder:function(e){return q(L,"startVideoRecoder",[e],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},playVideo:function(e){return q(L,"playVideo",[e],null==e?void 0:e.success,null==e?void 0:e.fail,!1)}},ze={wxPay:function(e){return q(d,"wxPay",[{app_id:e.appId,request_data:e.requestData}],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},chooseWxInvoice:function(n){var t={},o=["card_sign","sign_type","timestamp","nonce_str"],i=0;return n&&(Object.keys(n).forEach(function(e){t[e]=n[e],o.includes(e)&&i++}),0!==i&&4!==i)?Promise.reject({code:-1,message:"缺少必要参数"}):(console.log(t),q(d,"wechatInvoice",[t],null==n?void 0:n.success,null==n?void 0:n.fail,!1))},chooseAliInvoice:function(e){var n=window.encodeURIComponent(e.isvUrl),t={url:"/www/invoiceSelect.htm?scene=INVOICE_EXPENSE&einvMerchantId="+e.einvMerchantId+"&serverRedirectUrl="+n};return console.log(t),q(d,"aliPayInvoice",[t],null==e?void 0:e.success,null==e?void 0:e.fail,!1)}},Ve=F,He=z,Je=q,qe=G,Ge=V;"undefined"!=typeof window&&window.Vue&&Pe(window.Vue,null,!0),e.app=Le,e.auth=xe,e.checkApi=ye,e.config=me,e.contact=Ie,e.device=Ce,e.deviceready=He,e.dialog=Ke,e.email=Be,e.error=Ge,e.event=Te,e.eventlog=Ee,e.exec=Je,e.execSync=qe,e.file=je,e.header=Ue,e.image=Oe,e.init=Ve,e.install=Pe,e.location=Re,e.native={},e.network=De,e.pay=ze,e.ready=we,e.record=Ne,e.session=ke,e.storage=Me,e.user=Se,e.util=We,e.version=be,e.video=Fe,e.webview=Ae,Object.defineProperty(e,"__esModule",{value:!0})});
/* 最终解析权归 恒拓高科(https://workplus.io) 所有! */
