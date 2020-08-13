# 工作台

本文档用于指引第三方业务系统接入`WorkPlus工作台`。

## 卡片类型

工作台当前支持以下卡片类型，它们的数据来源为：

| 卡片类型      | 基础定义来源 | 业务数据来源 |
| ------------- | ------------ | ------------ |
| 搜索卡片      | 后台         | 无           |
| Banner卡片    | 后台         | 后台         |
| 快捷入口卡片1 | 后台         | 第三方业务   |
| 快捷入口卡片2 | 后台         | 第三方业务   |
| 常用应用卡片  | 后台         | 无           |
| 列表卡片1     | 后台         | 第三方业务   |
| 列表卡片2     | 后台         | 第三方业务   |
| 新闻卡片1     | 后台         | 第三方业务   |
| 新闻卡片2     | 后台         | 第三方业务   |
| 新闻卡片3     | 后台         | 第三方业务   |
| 新闻卡片4     | 后台         | 第三方业务   |
| 分类卡片      | 后台         | 第三方业务   |
| 自定义卡片    | 后台         | 无           |

## 常用卡片说明

### 搜索卡片

<p class="w6s-image">
  <img :src="$withBase('/widget/SEARCH.png')" alt="搜索卡片" width="50%">
</p>

> 搜索卡片无第三方业务数据

* 搜索卡片的的所有数据来源于后台，无需调用客户系统的数据；
* 大小固定；
* 搜索卡片包含搜索功能及右边的扫一扫功能，不可定制其它功能。

### Banner卡片

<p class="w6s-image">
  <img :src="$withBase('/widget/BANNER.png')" alt="Banner卡片" width="50%">
</p>

> Banner卡片无第三方业务数据

* 无需调用业务数据接口；
* 大小固定；
* Banner卡片的广告定义也在后台中进行定义；

### 常用应用卡片

<p class="w6s-image">
  <img :src="$withBase('/widget/SHORTCUT.png')" alt="常用应用卡片" width="50%">
</p>

> 常用应用卡片无第三方业务数据

* 常用应用卡片的逻辑是对应用的相关编辑；
* 无需调用业务数据接口；
* 大小固定；

### 快捷方式入口卡片

* 是否显示标题，内容个数，样式由后台 API 决定及返回；
* 快捷方式支持红点显示规则（参见[应用红点](/light-app/notify.md))；
* 调用业务系统数据，渲染 UI。

**业务数据返回参考：**

<details>
<summary>点击查看业务数据详情</summary>

```js
{
  "status": 0,
  "message": "everything is ok",
  "result": {
    //卡片内容定义
    "items":[
      {
        //显示类型，文本或数字
        "show_type": "number",
        //数字值
        "number": "123",
        //标题
        "title": "待办",
        //事件类型
        "event_type": "Url",
        //点击事件值 
        "event_value": "http://www.baidu.com/todo",
        //红点请求配置
        "tip_url": "http://data/com/tip"
      },
      {
        "show_type": "icon",
        "icon_type": "Url",
        "icon_value": "http://icon.com/a.png",
        "title": "待办",
        "event_type": "Url",
        "event_value": "http://www.workplus.io/todo"
      }
    ]
  }
}
```
</details>

**字段说明：**

`items`元素说明：

每个`item`代表快捷方式中的一个显示内容：

|    属性         | 值类型              | 描述                                       |
| ----------- | ------------------- | ------------------------------------------ |
| show_type   |                     | Icon：图标  number: 数字                   |
| number      |                 | 仅show_type为number时有效                  |
| title       | 字符                | 标题内容                                   |
| icon_type   | Url、MediaId，Inner | 图标类型，仅在show_type为icon时有效        |
| icon_value  |                     | 图标值，仅在show_type为icon时有效          |
| event_type  |                     | 点击事件                                   |
| event_value |                     | 事件值                                     |
| tip_url     |                     | 红点规则URL，客户端会从此URL请求红点的逻辑 |

### 列表卡片

- 是否显示标题，内容个数，样式由后台API决定及返回
- 调用业务系统数据，渲染UI

**业务数据返回参考：**

<details>
<summary>点击查看业务数据详情</summary>

```js
{
	"status": 0,
	"message": "everything is ok",
	"result": {
		//列表元素定义
		"items": [{
			//标题
			"title": "细数麦当劳那些'奇特'的餐",
			//时间
			"date_time": "2018-01-12",
			//来源
			"source": "消息来源",
			//事件类型
			"event_type": "Url",
			//事件值
			"event_value": "http://www.baidu.com/todo",
			//图片类型(列表卡片2才支持)
			"icon_type": "Url",
			//图片链接(列表卡片2才支持)
			"icon_value": "http://icon.com/a.png"
		}]
	}
}
```
</details>

**字段说明：** 

`items`元素说明：

|   属性          | 值   | 描述       |
| ----------- | ---- | ---------- |
| title       |      | 列表主内容 |
| datetime    | 字符 | 时间值     |
| source      |      | 来源       |
| event_type  |      | 事件类型   |
| event_value |      | 事件值     |
| icon_type   | Url、MediaId，Inner | 图标类型，仅在show_type为icon时有效(列表卡片2才支持)        |
| icon_value  |                     | 图标值，仅在show_type为icon时有效(列表卡片2才支持)          |

### 新闻卡片

**业务数据返回参考：**

<details>
<summary>点击查看业务数据详情</summary>

```js
{
  "status": 0,
  "message": "everything is ok",
  "result":{
    "items":[
      {
        //新闻主标题
        "title": "细数麦当劳那些'奇特'的餐",
        //新闻副标题
        "sub_title": "作为一个老牌的快餐企业，制作流程的标准化，规范化并不是其成功的唯一秘决",
        //时间
        "date_time": "2018-01-12",
        //来源
        "source": "消息来源",
        //事件类型
        "event_type": "Url",
        //事件值
        "event_value": "http://www.baidu.com/todo",
        //图片类型
        "icon_type": "Url",
        //图片链接
        "icon_value": "http://icon.com/a.png",
      }
    ]
  }
}
```
</details>

**字段说明：** 

`items`元素说明：

| 属性            | 值                  | 描述       |
| ----------- | ------------------- | ---------- |
| title       |                     | 新闻主标题 |
| sub_title   |                     | 新闻子标题 |
| date_time   |                     | 新闻时间   |
| source      |                     | 新闻来源   |
| event_type  | Url/System          | 事件类型   |
| event_value |                     | 点击事件值 |
| icon_type   | Url、MediaId，Inner | 图标类型   |
| icon_value  |                     | 图标值     |

### 分类卡片

* 分类卡片本身无业务数据，来源于后台数据；
* 每个分类的内容才调用业务数据；
* 分类的内容支持`列表卡片`和`新闻卡片`，其返回数据参考前文。

### 自定义卡片

> 自定义卡片内容主要通过`H5页面`进行展示。

* 自定义卡片的数据来源于后台；
* 本身无业务内容。

**URL 参数说明：**

自定义卡片在初始化时，会加载 H5页面，但卡片本身无法提前知道卡片内容的高度等信息，允许通过以`URL参数`的形式来告知客户端，如下:

```js
http://xxxx.html?custom_height=300&custom_scale=0.5&open_with_out=true
```

|     属性        | 类型                  | 描述       |
| --------------------  | ------------------- | -------------------     | 
| custom_height   | 浮点型     | 自定义卡片高度      |
| custom_scale  | 浮点型      | 自定义卡片高度相对宽的比例 (传 scale 优选选用，与 height 互斥)|
| open_with_out   |布尔值     | 是否打开新的页面跳转链接   |

除了上述属性，同样支持带入其他参数，详情查看[参数支持](/light-app/workbench.md#参数支持)。

::: warning 关于自定义卡片
毫无疑问，自定义卡片是最灵活的，因为一切都通过`H5页面`进行展示，一个卡片就是一个`WebView`；但也因为该原因，会产生一些问题及约束：

* 性能不如原生卡片；
* 网络不稳定时，可能会导致卡片无法正常展示，白屏等；
* 卡片高度可能会存在偏差，导致卡片内容展示不完整；
* 不支持使用`js-sdk`能力；
* 不支持离线资源。
:::

## 参数支持

对于工作台中的任意 URL，用户可配置参数支持，以下为支持的参数：

::: v-pre
|   字段              | 描述            | 
| ----------------- | --------------- | 
| {{userId}}        | 当前登录`用户ID` |
| {{username}}      | 当前登录`用户名` |
| {{username/name}} | 用户名/中文名   |
| {{domainId}}        | 域ID |
| {{orgCode}}        | 当前`组织code`，也是`orgId` |
| {{ticket}}        | 临时`ticket`值  | 
| {{language}}      | 当前应用的语言版本，如`en`、`zh-CN`  | 
:::

如：

::: v-pre
```js
http://data.com?usernmae={{username}}
// 会被替换成：
http://data.com?usename=foo
```
:::

### 国际化

国际化通过参数支持，由返回内容自行国际化，返回不同语言数据。

### 红点规则 

对于支持红点的卡片类型（当前为快捷卡片），相关红点配置请参考[应用红点](/light-app/notify.md)。

## 系统行为值

当工作台中的`event_type`定义为`System`时，其点击行为，将会是 WorkPlus 内置的一些行为：

| 值            | 系统行为 | 描述 |
| ------------- | -------- | ---- |
| CREATE_GROUP  | 创建群聊 | 打开创建群聊的页面 |
| QRCODE_SCAN   | 扫一扫   |  打开应用的扫一扫页面   |
| BING_MESSAGE  | 必应消息 | 打开必应消息页面  |
| VOICE_MEETING | 语音视频 | 打开音视频功能  |
