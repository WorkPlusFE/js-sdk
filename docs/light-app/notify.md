# 应用红点

<p class="w6s-image">
  <img :src="$withBase('/app/reddot.png')" alt="应用红点" width="320px" />
</p>

如图中的`流程大师`应用右上角的红点数字。当前支持显示红点、数字及图标。

## 显示规则

* 接口由各轻应用提供，但调用的`URL`及返回数据，需遵守`WorkPlus`设定的规则；
* 对于应用`tab`页中的各个轻应用，在应用`tab`显示对应轻应用时调用`API`更新显示此值；
* 用户点击进入轻应用后，由轻应用自己负责清除当前用户的红点，数字或图标；当返回到`tab`页时，APP 会重新再次拉取以刷新。

## API 调用规则

调用 URL 规则：

```js
${URL}&tenantId={tenantId}&username={username}&ticket={ticket}
```

参数说明：

| 参数 | 类型 | 说明|
| - | - | - |
| URL |  String | 这个值由轻应用提供，此项在后台中配置 |
| tenantId | String | 租户ID，当前移动端的用户的域id，由移动端自动填充 | 
| username | String | 当前用户帐号，由移动端自动填充|
| ticket | String | 给轻应用做单点登陆所用，由移动端自动填充 |

返回格式规则：

```js
{
 status: 0
 message: 'Everything is ok'
 tip:{
   notify_type: 'dot',
   icon_url: 'url',
   num: 2
 }
}
```

`status`为`0`时，表示接口调用成功；非`0`时，表示接口调用失败，`message`此时表示失败的原因。

`notify_type`包括4种类型，如下：

* `dot` 在轻应用上显示一个红点
* `digit` 在轻应用上显示一个数字
* `icon` 在轻应用上显示一个图标
* `nothing` 轻应用上不显示红点或数字或图标

而`icon_url`，只有在`notify_type`为`icon`时才会获取，此值为图标资源地址。

`num` 当notify_type为digit 时，此值表示一个数字