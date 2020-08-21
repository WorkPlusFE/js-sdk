# 跳转协议 <Badge type="success" text="v3.18.0+" />

本文档主要描述 WorkPlus 内部使用的路由协议，已达到具体业务需求。 

通过在浏览器敲入`url scheme`，就可以检验是否有效，例如在已经安装 WorkPlus 的手机设备上，在浏览器的访问地址栏敲入`workplus://`，将会弹出提示框，询问是否跳转到该应用。

::: tip 提示
通常情况下，不同客户的包，注册的`scheme`会不一样，可通过 [获取 APP 信息](/js-sdk/device.md#获取-app-信息) 接口获取，或咨询相关负责人。
:::

## 轻应用跳转

支持在轻应用内打开另一个轻应用。

```js
workplus://openApp?id=foo&domainId=workplus
```

**参数说明：**

| 参数     | 说明     |
| ------- | ------- |
| id | appId，具体值，请登录管理后台，在应用管理栏目点击该应用即可查看 |
| domainId | 应用所在的域 | 


::: tip 提示
`JS-SDK`也提供相应的[应用跳转](/js-sdk/app.md#路由跳转)接口，相比直接从浏览器地址栏输入`url scheme`或`a标签`触发跳转，SDK 接口可以提供回调，交互会更加友好。
:::

## 音视频会议 

```js
workplus://meeting?type=zoom&action=join 
```

**Type 定义：**

| type     | 定义     |
| ------- | ------- |
| umeeting | umeeting |
| zoom     | zoom     |
| bizconf  | 会畅     |

**Action 定义：**

| action | 定义                                       |
| ----- | ----------------------------------------- |
| join   | 加入会议                                   |
| launch | 发起会议入口, 触发路由时弹出加入会议选择框 |

## 即时呼叫

```js
workplus://voip?action=launch 
```

**Action 定义：**

|   action   |   定义   |
| --- | --- |
| 不传值 | 打开默认的发起会议界面 |
|   launch   |    触发聊天界面里的发起即时呼叫，只允许在聊天界面的范围里使用  |
