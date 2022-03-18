/*!
 * WorkPlus JS-SDK v2.0.0-beta.10
 * (c) 2022 WorkPlusFE
 * MIT License 
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("tslib")):"function"==typeof define&&define.amd?define(["exports","tslib"],n):n((e=e||self).w6s={},e.tslib)}(this,function(e,i){"use strict";function t(){var e;return null!==(e=null===window||void 0===window?void 0:window.navigator)&&void 0!==e&&e.userAgent.includes("workplus")}function r(){var e;return null!==(e=null===window||void 0===window?void 0:window.navigator)&&void 0!==e&&e.userAgent.includes("android")}function o(){var e;return null!==(e=null===window||void 0===window?void 0:window.navigator)&&void 0!==e&&e.userAgent.includes("iPhone")}function f(e){return"[object Function]"===Object.prototype.toString.call(e)}var n=(l.prototype.disable=function(){this._enabled=!1},l.prototype.enable=function(){this._enabled=!0},l.prototype.log=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._enabled&&console.log(this._PREFIX+"[Log]: "+e.join(" "))},l.prototype.warn=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._enabled&&console.warn(this._PREFIX+"[Warn]: "+e.join(" "))},l.prototype.error=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._enabled&&console.error(this._PREFIX+"[Error]: "+e.join(" "))},l);function l(e){void 0===e&&(e=!1),this._PREFIX="WorkPlus JS-SDK ",this._enabled=e}var u="WorkPlus_Image",s="WorkPlus_Contact",c="WorkPlus_Auth",a="WorkPlus_WebView",d="WorkPlus_Email",v="WorkPlus_BarcodeScanner",_="WorkPlus_DeviceInfo",g="WorkPlus_Location",p="WorkPlus_EventLog",h="WorkPlus_Files",m="WorkPlus_NetInfo",w="WorkPlus_Network",y="WorkPlus_BarcodeScanner",b="WorkPlus_LightApp",P="WorkPlus_PublicClound",O="WorkPlus_AppStore",S="WorkPlus_Config",k="WorkPlus_DATA",I="WorkPlus_Dialog",L="WorkPlus_AudioAndVideo",A="WorkPlus_Notification",U=Object.freeze({__proto__:null,WORKPLUS_IMAGE:u,WORKPLUS_CONTACT:s,WORKPLUS_AUTH:c,WORKPLUS_WEBVIEW:a,WORKPLUS_EMAIL:d,WORKPLUS_PAY:"Workplus_Pay",WORKPLUS_SCAN:v,WORKPLUS_DEVICE:_,WORKPLUS_LOCATION:g,WORKPLUS_EVENTLOG:p,WORKPLUS_FILE:h,WORKPLUS_NETINFO:m,WORKPLUS_NETWORK:w,WORKPLUS_BARCODE_SCANNER:y,WORKPLUS_LIGHT_APP:b,WORKPLUS_PUBLIC_CLOUND:P,WORKPLUS_APP_STORE:O,WORKPLUS_CONFIG:S,WORKPLUS_DATA:k,WORKPLUS_DIALOG:I,WORKPLUS_BEHAVIOR_LOG:"WorkPlus_BehaviorLog",WORKPLUS_AUDIO_AND_VIDEO:L,WORKPLUS_NOTIFICATION:A}),W={},R=U;Object.keys(R).map(function(e){var n;e.includes("WORKPLUS_")&&(n=e.replace("WORKPLUS_","").toLocaleLowerCase(),W[R[e]]=n)});function C(e){return!!~e.indexOf("android")}var E=function(){return!!~navigator.userAgent.indexOf("workplus")},D=function(e){var n=document.createElement("script");n.setAttribute("type","text/javascript"),n.setAttribute("src",e),document.getElementsByTagName("head")[0].appendChild(n)},j={cordovajs:{local:"applocal://www/cordova.min.js",iOS:"",android:""},useHttp:!1,pcSDKUri:""},B=(Object.defineProperty(T.prototype,"userAgent",{get:function(){return window.navigator.userAgent.toLowerCase()},enumerable:!1,configurable:!0}),T.prototype.getImportUri=function(){var e=this.getCurrentPlatformByUserAgent();if(this.mustUseHttpModel()||this.config.useHttp){var n=this.config.cordovajs[e];if(n||"development"!==process.env.NODE_ENV||console.warn("当前应用环境适合使 http(s):// 方式加载 cordova.js，请设置对应平台的 cordova.js 访问地址！"),n)return n}return this.config.cordovajs.local},T.prototype.mustUseHttpModel=function(){return!(!self.frameElement||"IFRAME"!==self.frameElement.tagName)||!("https:"!==window.location.protocol||!C(this.userAgent))},T.prototype.getCurrentPlatformByUserAgent=function(){return~this.userAgent.indexOf("iphone")?"iOS":C(this.userAgent)?"android":"local"},T);function T(e,n){this.config=Object.assign(JSON.parse(JSON.stringify(j)),{cordovajs:i.__assign(i.__assign({},e),{local:j.cordovajs.local}),useHttp:n})}function x(){var o=this;this._deviceready=!1,this._inject=!1,this._logger=new n,this._timeout=5e3,this._mock=!1,this._mockData=Object.create(null),this.init=function(e){if(o._logger||(o._logger=new n),null!=e&&e.debug&&(o._logger.enable(),o._logger.warn("SDK 已开启调试模式")),"undefined"!=typeof window&&"[object Window]"===Object.prototype.toString.call(window)){if(o._logger.warn("SDK 已"+(null!=e&&e.auth?"开启":"关闭")+"接口鉴权"),null!=e&&e.auth||window.cordova||o.isDeviceReady||o._inject||(function(e,n){try{if(!E())return;var t=new B(e,n).getImportUri();D(t)}catch(e){console.log(e)}}(null==e?void 0:e.cordovajs,null==e?void 0:e.useHttp),o._inject=!0),o._timeout=(null==e?void 0:e.timeout)||5e3,o._logger.warn("SDK 设置的超时时间为: "+o._timeout+"ms"),null!=e&&e.mock)o._mock=null==e?void 0:e.mock,null!=e&&e.mockData&&(o._mockData=null==e?void 0:e.mockData);else if(!t())return void o._logger.error("请在 WorkPlus APP 内打开应用")}else o._logger.error("不支持非浏览器环境")},this.deviceready=function(t){return new Promise(function(e){function n(){return t&&f(t)&&t()}o.isDeviceReady?(e(),n()):document.addEventListener("deviceready",function(){o._logger.warn("设备已就绪！（deviceready 事件被触发）"),o._setDeviceReady(!0),e(),n()},!1)})},this.error=function(e){f(e)?o._errorCallback=e:o._logger.error("错误监听回调仅支持函数参数")}}var K=new(x.prototype.onError=function(e){this._errorCallback&&f(this._errorCallback)&&this._errorCallback(e)},x.prototype._setDeviceReady=function(e){this._deviceready=e},Object.defineProperty(x.prototype,"isDeviceReady",{get:function(){return this._deviceready},enumerable:!1,configurable:!0}),Object.defineProperty(x.prototype,"logger",{get:function(){return this._logger},enumerable:!1,configurable:!0}),Object.defineProperty(x.prototype,"timeout",{get:function(){return this._timeout},enumerable:!1,configurable:!0}),Object.defineProperty(x.prototype,"mock",{get:function(){return this._mock},enumerable:!1,configurable:!0}),Object.defineProperty(x.prototype,"mockData",{get:function(){return this._mockData},enumerable:!1,configurable:!0}),x),M=K.init,N=K.deviceready,F=K.error,z=K.logger;var V=function(n){try{return JSON.parse(n)}catch(e){return{result:n}}};function H(l,u,s,c,a,d){return void 0===d&&(d=!0),new Promise(function(t,n){function o(){e&&clearTimeout(e)}var i=l+"."+u,e=d?setTimeout(function(e){void 0===e&&(e="接口调用超时"),z.warn(i+" 接口调用响应超时，请重试"),a&&f(a)&&a(e),n(e)},K.timeout):0;try{if(K.mock){var r=function(n,t){var e=K.mockData[W[n]];if(e&&e[t]&&f(e[t])){var o=Object.create(null);z.log("执行 "+n+"."+t+" Mock 调用");try{o=e[t](),z.log("执行 "+n+"."+t+" Mock 返回结果: "+JSON.stringify(o,null,4))}catch(e){z.log("执行 "+n+"."+t+" Mock 发生错误: "+JSON.stringify(e,null,4))}return o}return!1}(l,u);if(r)return o(),void t(r)}K.deviceready(function(){z.log("准备调用 "+i),cordova.exec(function(e){o();var n=V(e);return z.log(i+" 调用成功: "+JSON.stringify(n,null,4)),c&&f(c)&&c(n),t(n)},function(e){return o(),z.error(i+" 接口调用失败"),K.onError(i+" 调用失败: "+e),a&&f(a)&&a(e),n(e)},l,u,s)})}catch(e){K.onError(e)}})}function J(e,n,t){var o=e+"."+n;z.log("同步调用 "+o);K.deviceready(function(){cordova.exec(function(e){z.log(JSON.stringify(e,null,4))},function(e){z.error(JSON.stringify(e,null,4)),K.onError(o+" 调用失败: "+e)},e,n,t)})}function G(o){return new Promise(function(n,t){var e;r()&&(o="file://"+o),e=o,new Promise(function(n,t){window.resolveLocalFileSystemURL(e,function(e){n(e)},function(e){t(e)})}).then(function(e){e.file(function(e){n(e)},function(e){t(e)})}).catch(function(e){t(e)})})}function q(t){return new Promise(function(n){var e=new FileReader;e.onloadend=function(e){n(e)},e.readAsDataURL(t)})}var X={takePicture:function(e){return H(u,"takePicture",[{editable:(null==e?void 0:e.editable)||!1}],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},takePhotoAndAddWaterMark:function(e){var n=e.success,t=e.fail,o=i.__rest(e,["success","fail"]);return H(u,"takePhotoAndAddWaterMark",[{content:o.content,font_size:o.fontSize,color:o.color,mark_disable:o.markDisable,time_enable:o.timeEnable,location_enable:o.locationEnable}],n,t,!1)},saveImages:function(e){var n=e.success,t=e.fail,o=i.__rest(e,["success","fail"]);return H(u,"saveImages",[o],n,t,!1)},showImages:function(e){return J(u,"showImages",[e])},chooseImages:function(e){var n,t,o,i={multiple:(null==e?void 0:e.multiple)||!0,imageKeys:(null==e?void 0:e.imageKeys)||[],file_limit:{max_select_count:(null===(n=null==e?void 0:e.fileLimit)||void 0===n?void 0:n.maxSelectCount)||9,single_select_size:(null===(t=null==e?void 0:e.fileLimit)||void 0===t?void 0:t.singleSelectSize)||-1,total_select_size:(null===(o=null==e?void 0:e.fileLimit)||void 0===o?void 0:o.totalSelectSize)||-1}};return H(u,"chooseImages",[i],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},actionForLongPressImage:function(e){return J(u,"actionForLongPressImage",[e])},cleanCompressImage:function(){return J(u,"cleanCompressImage",[])},toBase64:function(n){return G(n.filePath).then(q).then(function(e){return n.success&&f(n.success)&&n.success(e),Promise.resolve(e)}).catch(function(e){return n.fail&&f(n.fail)&&n.fail(e),Promise.reject(e)})}};var Q=Object.freeze({__proto__:null,getSingleContact:function(e){return H(s,"getContact",[{hideMe:(null==e?void 0:e.hideMe)||!1,filterSenior:(null==e?void 0:e.filterSenior)||1}],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},getContacts:function(e){return H(s,"getContacts",[{selectedContacts:(null==e?void 0:e.selectedContacts)||[],hideMe:(null==e?void 0:e.hideMe)||!1,filterSenior:(null==e?void 0:e.filterSenior)||1}],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},getEmployeesFromCurrentOrg:function(e){return H(s,"getEmployeesFromCurrentOrg",[{selectedEmpList:(null==e?void 0:e.selectedEmpList)||[],hideMe:(null==e?void 0:e.hideMe)||!1,filterSenior:(null==e?void 0:e.filterSenior)||1}],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},selectContacts:function(e){return H(s,"selectContacts",[{filterSenior:(null==e?void 0:e.filterSenior)||1,maxCount:(null==e?void 0:e.maxCount)||-1,selectedUsers:(null==e?void 0:e.selectedUsers)||[],selectedEmployees:(null==e?void 0:e.selectedEmployees)||[]}],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},getMobileContacts:function(e){return H(s,"getMobileContacts",[],null==e?void 0:e.success,null==e?void 0:e.fail)}});var $=Object.freeze({__proto__:null,getLocation:function(e){return H(g,"getLocation",[],null==e?void 0:e.success,null==e?void 0:e.fail)}});var Y={getDeviceInfo:function(e){return H(_,"getDeviceInfo",[],null==e?void 0:e.success,null==e?void 0:e.fail)},getIpAddress:function(e){return H(_,"getIpAddress",[],null==e?void 0:e.success,null==e?void 0:e.fail)},getPedometerData:function(e){return H(_,"getPedometerData",[],null==e?void 0:e.success,null==e?void 0:e.fail)},getAppInfo:function(e){return H(P,"getAppInfo",[],null==e?void 0:e.success,null==e?void 0:e.fail)}};var Z={getEventLogs:function(e){var n=e.success,t=e.fail,o=i.__rest(e,["success","fail"]);return H(p,"getEventLogs",[o],n,t)},getTodayUseDuration:function(e){return H(p,"getTodayUseDuration",[],null==e?void 0:e.success,null==e?void 0:e.fail)}};function ee(e){this.fileTransferInstance=new FileTransfer,this.fileUploadOptions=e}var ne={chooseFiles:function(e){var n,t,o,i={multiple:(null==e?void 0:e.multiple)||!0,file_keys:(null==e?void 0:e.fileKeys)||[],file_limit:{max_select_count:(null===(n=null==e?void 0:e.fileLimit)||void 0===n?void 0:n.maxSelectCount)||9,single_select_size:(null===(t=null==e?void 0:e.fileLimit)||void 0===t?void 0:t.singleSelectSize)||-1,total_select_size:(null===(o=null==e?void 0:e.fileLimit)||void 0===o?void 0:o.totalSelectSize)||-1}};return H(h,"chooseFiles",[i],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},isFileExist:function(e){var n=e.success,t=e.fail,o=i.__rest(e,["success","fail"]);return H(h,"isFileExist",[o],n,t,!1)},openFileDetail:function(e){return J(h,"showFile",[e])},readFile:function(e){return J(h,"readFile",[e])},download:function(i){return new Promise(function(n,t){var e,o;(new FileTransfer).download(encodeURI(i.source),i.target,function(e){null!=i&&i.success(e),n(e)},function(e){null!=i&&i.fail(e),t(e)},null!==(e=i.trustAllHosts)&&void 0!==e&&e,null!==(o=i.options)&&void 0!==o?o:{})})},upload:(ee.prototype.upload=function(o){var e=this;return new Promise(function(n,t){e.fileTransferInstance.onprogress=function(e){var n=e.loaded,t=e.total;o.progress&&f(o.progress)&&o.progress(n,t)},e.fileTransferInstance.upload(o.fileURL,encodeURI(o.server),function(e){return 200===e.responseCode?(o.success&&f(o.success)&&o.success(e),n(e)):t(e)},function(e){o.fail&&f(o.fail)&&o.fail(e),t(e)},e.fileUploadOptions,o.trustAllHosts)})},ee.prototype.abort=function(){this.fileTransferInstance.abort()},ee),getFilePath:function(e){var n=e.success,t=e.fail,o=i.__rest(e,["success","fail"]);return H(h,"getUserFilePath",[o],n,t)}};var te=Object.freeze({__proto__:null,getWifiInfo:function(e){return H(m,"getWifiInfo",[],null==e?void 0:e.success,null==e?void 0:e.fail)},request:function(e){return H(w,"request",[e],null==e?void 0:e.success,null==e?void 0:e.fail)},authRequest:function(e){return H(w,"authRequest",[e],null==e?void 0:e.success,null==e?void 0:e.fail)},assembleAuthUrl:function(e){return H(w,"assembleAuthUrl",[e],null==e?void 0:e.success,null==e?void 0:e.fail)}});var oe={scanner:function(e){return H(y,"scanner",[],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},voiceToText:function(e){return H(a,"voiceToText",[],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},copyText:function(e){return J(a,"copyText",[{text:e}])},tel:function(e){window.location.href="tel:"+e.number},vibrate:function(e){return H(_,"vibrate",[],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},generateBarcode:function(e){return H(v,"generateBarcode",[e],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},generateQrcode:function(e){return H(v,"generateQrcode",[e],null==e?void 0:e.success,null==e?void 0:e.fail,!1)}};var ie=Object.freeze({__proto__:null,openEmail:function(e){return H(d,"openEmail",[],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},writeEmail:function(e){var n=e.success,t=e.fail,o=i.__rest(e,["success","fail"]);return H(d,"writeEmail",[o],n,t,!1)}});var re=Object.freeze({__proto__:null,getUserTicket:function(e){return H(c,"getUserTicket",[],null==e?void 0:e.success,null==e?void 0:e.fail)},biometric:function(e){return H(b,"routeBiometricAuthenticationLock",[],null==e?void 0:e.success,null==e?void 0:e.fail)}});function le(e,n,t){document.addEventListener(e,n,t)}var ue=Object.freeze({__proto__:null,bindBackButtonEvent:function(n){cordova.exec(function(){},function(){},a,"overrideBack",[!0]),cordova.exec(function(e){"back"===e.action&&"function"==typeof n&&n()},function(){},a,"messageChannel",[])},bindPauseEvent:function(n){t()&&(o()&&le("pause",function(e){if(f(n))return n(e)},!1),r()&&cordova.exec(function(e){"pause"===e.action&&f(n)&&n()},function(){},"CoreAndroid","messageChannel",[]))},bindResumeEvent:function(n){t()&&(o()&&le("resume",function(e){if(f(n))return n(e)},!1),r()&&cordova.exec(function(e){"resume"===e.action&&f(n)&&n()},function(){},"CoreAndroid","messageChannel",[]))},unbindBackButtonEvent:function(){cordova.exec(function(){},function(){},a,"overrideBack",[!1])}});var se=Object.freeze({__proto__:null,route:function(e){var n=e.success,t=e.fail,o=i.__rest(e,["success","fail"]);return H(O,"route",[{scheme_url:o.schemeUrl}],n,t,!1)},searchInApp:function(){return J(s,"searchInApp",[])},showAppChatViewById:function(e){return J(s,"showAppChatView",[{app_id:e.appId,domain_id:e.domainId,org_id:e.orgId,session_type:e.sessionType}])},showAppListById:function(e){return J(O,"showAppListById",[{org_id:e.orgId}])}});var ce=Object.freeze({__proto__:null,showUserChatViewByUser:function(e){var n=e.success,t=e.fail,o=i.__rest(e,["success","fail"]);return H(s,"showUserChatViewByUser",[o],n,t,!1)},openDiscussionById:function(e){return J(s,"openDiscussionById",[e])},createDiscussionChat:function(){return J(s,"createDiscussionChat",[])},selectDiscussionMembers:function(e){return H(s,"selectDiscussionMembers",[{discussion_id:e.discussionId,members_selected:(null==e?void 0:e.membersSelected)||[]}],null==e?void 0:e.success,null==e?void 0:e.fail,!1)}});var ae=Object.freeze({__proto__:null,getCurrentUserInfo:function(e){return H(s,"getCurrentUserInfo",[{needEmpInfo:(null==e?void 0:e.needEmpInfo)||!1}],null==e?void 0:e.success,null==e?void 0:e.fail)},getCurrentEmployeeInfo:function(e){return H(s,"getCurrentEmployeeInfo",[{orgCode:(null==e?void 0:e.orgCode)||""}],null==e?void 0:e.success,null==e?void 0:e.fail)},getUserInfoByUserId:function(e){var n=e.success,t=e.fail,o=i.__rest(e,["success","fail"]);return H(s,"getUserInfoByUserId",[o],n,t)},showUserInfoByUsername:function(e){var n=e.success,t=e.fail,o=i.__rest(e,["success","fail"]);return H(s,"showUserInfoByUsername",[o],n,t,!1)}});function de(e){return J(a,"navigation",[e]),0}var fe=Object.freeze({__proto__:null,changeLeftButton:function(e){return J(a,"changeLeftButton",[e.items])},clearLeftButton:function(){return J(a,"clearLeftButton",[])},clearRightButtons:function(){return J(a,"clearRightButtons",[])},leftButton:function(e){return J(a,"leftButton",[e.method])},navigation:{lock:function(){de("lock")},unlock:function(){de("unlock")}},rightButtons:function(e){return J(a,"rightButtons",e.items)},setTitle:function(e){return J(a,"title",[e])},visibleLeftButton:function(e){return J(a,"visibleLeftButton",[e])},showSearchBar:function(e){return H(a,"searchBar",[{visible:!0,hint:(null==e?void 0:e.hint)||"",cancel_mode:(null==e?void 0:e.cancelMode)||"reset"}],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},hideSearchBar:function(){return J(a,"searchBar",[{visible:!1}])}});var ve=Object.freeze({__proto__:null,addWaterMask:function(e){return J(a,"addWaterMask",[e])},changeOrientation:function(e){return J(a,"changeOrientation",[e])},exit:function(){return J(a,"exit",[])},openWebView:function(e){var n={url:e.url,title:e.title,use_android_webview:(null==e?void 0:e.useAndroidWebview)||!1,use_system_webview:(null==e?void 0:e.useSystemWebview)||!1,display_mode:(null==e?void 0:e.displayMode)||"",mute_config:(null==e?void 0:e.muteConfig)||[]};return null!=e&&e.orientation&&(n.orientation=null==e?void 0:e.orientation),J(a,"openWebView",[n])},removeWaterMask:function(){return J(a,"removeWaterMask",[])},share:function(e){return J(a,"share",[{url:e.url,title:e.title,cover_media_id:(null==e?void 0:e.coverMediaId)||"",cover_url:(null==e?void 0:e.coverUrl)||"",scope:e.scope,summary:e.summary,dicrectly:(null==e?void 0:e.dicrectly)||"",direct_session:null==e?void 0:e.directSession}])},wxShare:function(e){return J(a,"wxShare",[{app_id:e.appId,title:e.title,type:e.type,description:e.description,thumb:e.thumb,scene:e.scene,data:e.data}])},registerShakeListener:function(){return J(a,"registerShakeListener",[])},unregisterShakeListener:function(){return J(a,"unregisterShakeListener",[])},launchMiniProgram:function(e){var n=e.success,t=e.fail,o=i.__rest(e,["success","fail"]);return H(a,"launchMiniProgram",[o],n,t)},configPullRefresh:function(e){return H(a,"configPullRefresh",[e],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},onPullRefresh:function(e){return H(a,"onPullRefresh",[],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},startPullRefresh:function(e){return H(a,"startPullRefresh",[],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},endPullRefresh:function(e){return H(a,"endPullRefresh",[],null==e?void 0:e.success,null==e?void 0:e.fail,!1)}});var _e=Object.freeze({__proto__:null,showLoading:function(e){return J(I,"showLoading",[i.__assign({},e)])},hideLoading:function(){return J(I,"hideLoading",[])},showToast:function(e){return e.duration||(e.duration=3e3),J(I,"showToast",[e])},showActionSheet:function(e){return H(I,"showActionSheet",[e],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},showModal:function(e){return H(I,"showModal",[e],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},showInputView:function(e){return H(I,"showInputView",[e],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},popNotification:function(e){return H(A,"pop",[e],null==e?void 0:e.success,null==e?void 0:e.fail,!1)}});var ge=Object.freeze({__proto__:null,getData:function(e){return H(k,"getData",[i.__assign({},e)])},putData:function(e){return J(k,"putData",[i.__assign({},e)])}});function pe(e){return H(S,"config",[e],null==e?void 0:e.success,null==e?void 0:e.fail,!1)}function he(n){return H(S,"ready",[],function(e){z.warn("SDK 已就绪！（ready 事件被触发）"),n(e)},function(){},!1)}function me(e){return H(S,"checkApi",[e],null==e?void 0:e.success,null==e?void 0:e.fail)}function we(e,n,t){t||M(n),e.prototype.$w6s={version:ye,image:be,contact:Pe,user:Oe,session:Se,app:ke,webview:Ie,header:Le,util:Ae,location:Ue,device:We,eventlog:Re,file:Ce,network:Ee,email:De,auth:je,event:Be,ready:he,config:pe,deviceready:Fe,exec:ze,execSync:Ve,error:He,checkApi:me,dialog:Te,storage:xe,record:Ke,video:Me},t&&(e.prototype.$w6s.init=Ne)}var ye="v2.0.0-beta.10",be=X,Pe=Q,Oe=ae,Se=ce,ke=se,Ie=ve,Le=fe,Ae=oe,Ue=$,We=Y,Re=Z,Ce=ne,Ee=te,De=ie,je=re,Be=ue,Te=_e,xe=ge,Ke={translateAudio:function(e){return H(L,"translateAudio",[e],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},voiceRecord:function(e){return H(L,"voiceRecord",[],null==e?void 0:e.success,null==e?void 0:e.fail,!1)}},Me={startVideoRecoder:function(e){return H(L,"startVideoRecoder",[e],null==e?void 0:e.success,null==e?void 0:e.fail,!1)},playVideo:function(e){return H(L,"playVideo",[e],null==e?void 0:e.success,null==e?void 0:e.fail,!1)}},Ne=M,Fe=N,ze=H,Ve=J,He=F;"undefined"!=typeof window&&window.Vue&&we(window.Vue,null,!0),e.app=ke,e.auth=je,e.checkApi=me,e.config=pe,e.contact=Pe,e.device=We,e.deviceready=Fe,e.dialog=Te,e.email=De,e.error=He,e.event=Be,e.eventlog=Re,e.exec=ze,e.execSync=Ve,e.file=Ce,e.header=Le,e.image=be,e.init=Ne,e.install=we,e.location=Ue,e.native={},e.network=Ee,e.ready=he,e.record=Ke,e.session=Se,e.storage=xe,e.user=Oe,e.util=Ae,e.version=ye,e.video=Me,e.webview=Ie,Object.defineProperty(e,"__esModule",{value:!0})});
/* 最终解析权归 恒拓高科(https://workplus.io) 所有! */