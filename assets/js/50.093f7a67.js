(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{546:function(t,s,a){"use strict";a.r(s);var _=a(37),e=Object(_.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"应用红点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用红点"}},[t._v("#")]),t._v(" 应用红点")]),t._v(" "),a("p",{staticClass:"w6s-image"},[a("img",{attrs:{src:t.$withBase("/app/reddot.png"),alt:"应用红点",width:"320px"}})]),t._v(" "),a("p",[t._v("如图中的"),a("code",[t._v("流程大师")]),t._v("应用右上角的红点数字。当前支持显示红点、数字及图标。")]),t._v(" "),a("h2",{attrs:{id:"显示规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显示规则"}},[t._v("#")]),t._v(" 显示规则")]),t._v(" "),a("ul",[a("li",[t._v("接口由各轻应用提供，但调用的"),a("code",[t._v("URL")]),t._v("及返回数据，需遵守"),a("code",[t._v("WorkPlus")]),t._v("设定的规则；")]),t._v(" "),a("li",[t._v("对于应用"),a("code",[t._v("tab")]),t._v("页中的各个轻应用，在应用"),a("code",[t._v("tab")]),t._v("显示对应轻应用时调用"),a("code",[t._v("API")]),t._v("更新显示此值；")]),t._v(" "),a("li",[t._v("用户点击进入轻应用后，由轻应用自己负责清除当前用户的红点，数字或图标；当返回到"),a("code",[t._v("tab")]),t._v("页时，APP 会重新再次拉取以刷新。")])]),t._v(" "),a("h2",{attrs:{id:"api-调用规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-调用规则"}},[t._v("#")]),t._v(" API 调用规则")]),t._v(" "),a("p",[t._v("调用 URL 规则：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("tenantId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("tenantId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("username"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("ticket"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ticket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("参数说明：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("URL")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("这个值由轻应用提供，此项在后台中配置")])]),t._v(" "),a("tr",[a("td",[t._v("tenantId")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("租户ID，当前移动端的用户的域id，由移动端自动填充")])]),t._v(" "),a("tr",[a("td",[t._v("username")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("当前用户帐号，由移动端自动填充")])]),t._v(" "),a("tr",[a("td",[t._v("ticket")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("给轻应用做单点登陆所用，由移动端自动填充")])])])]),t._v(" "),a("p",[t._v("返回格式规则：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Everything is ok'")]),t._v("\n tip"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   notify_type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dot'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   icon_url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   num"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("status")]),t._v("为"),a("code",[t._v("0")]),t._v("时，表示接口调用成功；非"),a("code",[t._v("0")]),t._v("时，表示接口调用失败，"),a("code",[t._v("message")]),t._v("此时表示失败的原因。")]),t._v(" "),a("p",[a("code",[t._v("notify_type")]),t._v("包括4种类型，如下：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("dot")]),t._v(" 在轻应用上显示一个红点")]),t._v(" "),a("li",[a("code",[t._v("digit")]),t._v(" 在轻应用上显示一个数字")]),t._v(" "),a("li",[a("code",[t._v("icon")]),t._v(" 在轻应用上显示一个图标")]),t._v(" "),a("li",[a("code",[t._v("nothing")]),t._v(" 轻应用上不显示红点或数字或图标")])]),t._v(" "),a("p",[t._v("而"),a("code",[t._v("icon_url")]),t._v("，只有在"),a("code",[t._v("notify_type")]),t._v("为"),a("code",[t._v("icon")]),t._v("时才会获取，此值为图标资源地址。")]),t._v(" "),a("p",[a("code",[t._v("num")]),t._v(" 当notify_type为digit 时，此值表示一个数字")])])}),[],!1,null,null,null);s.default=e.exports}}]);