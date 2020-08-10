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

## 工作台卡片设置

工作台的基础定义在`WorkPlus后台管理`系统中，请参阅相关文档或登录系统使用参数，此为略过

## 常用卡片说明

### 搜索卡片

> 搜索卡片无第三方业务数据

* 搜索卡片的的所有数据来源于后台，无需调用客户系统的数据;
* 大小固定
* 搜索卡片包含搜索功能及右边的扫一扫功能，不可定制其它功能


### Banner卡片

> Banner卡片无第三方业务数据

* 无需调用业务数据接口
* 大小固定
* Banner卡片的广告定义也在后台中进行定义


### 常用应用卡片

> 常用应用卡片无第三方业务数据

* 常用应用卡片的逻辑是对应用的相关编辑
* 无需调用业务数据接口
* 大小固定


### 快捷方式入口卡片

* 是否显示标题，内容个数，样式由后台API决定及返回
* 快捷方式支持红点显示规则（参见红点规则文档 )
* 调用业务系统数据，渲染UI

#### 业务数据返回参考

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

#### 元素说明 

##### Items 元素说明

每个`Item`代表快捷方式中的一个显示内容：

|    属性         | 值类型              | 描述                                       |
| ----------- | ------------------- | ------------------------------------------ |
| show_type   |                     | Icon：图标  number: 数字                   |
| number      | 字符                | 仅show_type为number时有效                  |
| title       | 字符                | 标题内容                                   |
| icon_type   | Url、MediaId，Inner | 图标类型，仅在show_type为icon时有效        |
| icon_value  |                     | 图标值，仅在show_type为icon时有效          |
| event_type  |                     | 点击事件                                   |
| event_value |                     | 事件值                                     |
| tip_url     |                     | 红点规则URL，客户端会从此URL请求红点的逻辑 |

### 列表卡片

- 是否显示标题，内容个数，样式由后台API决定及返回
- 调用业务系统数据，渲染UI

#### 业务数据返回参考

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

#### 元素说明 

##### items 元素说明

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

#### 元素说明 

##### items 元素说明

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

* 自定义卡片的数据来源于后台
* 本身无业务内容

#### URL参数说明 

##### 示例：http://xxxx.html?custom\_height=300&custom\_scale=0.5&open\_with_out=true

|     属性        | 类型                  | 描述       |
| --------------------  | ------------------- | -------------------     |
| custom_height(可传)           | 浮点型               | 自定义卡片高度      |
| custom_scale(可传)            | 浮点型               | 自定义卡片高度相对宽的比例 (传scale优选选用，与height互斥)|
| open\_with_out(可传)   |布尔值           | 是否打开新的页面跳转链接   |


## 参数支持

对于工作台中的任意 URL，用户可配置参数支持，以下为支持的参数：

|                   | 描述            | 备注               |
| ----------------- | --------------- | ------------------ |
| {{userId}}        | 当前登录用户 ID |                    |
| {{username}}      | 当前登录用户 名 |                    |
| {{username/name}} | 用户名/中文名   |                    |
| {{domainId}}        | 域名 ID |                    |
| {{orgCode}}        | 当前组织code |                    |
| {{ticket}}        | ticket值        |                    |
| {{language}}      | 当前语言设计    | 简中、繁中，英三种 |

如：

`http://data.com?usernmae={{username}}`会被替换为`http://data.com?usename=dfadsa-dsafdsa-dfsa`。

### 国际化

国际化通过参数支持，由返回内容自行国际化，返回不同语言数据。

### 红点规则 

对于支持红点的卡片类型（当前为快捷卡片），相关红点配置请参考红点相关文档。

## 附录一 系统行为值

当工作台中的`event_type`定义为**System**时，其点击行为，将会是 WorkPlus 内置的一些行为：

| 值            | 系统行为 | 备注 |
| ------------- | -------- | ---- |
| CREATE_GROUP  | 创建群聊 |      |
| QRCODE_SCAN   | 扫一扫   |      |
| BING_MESSAGE  | 必应消息 |      |
| VOICE_MEETING | 语音视频 |      |


## 附录二  返回示例

> 快捷方式返回参考

```js
{
	status: 0,
	result: {
		items: [{
				show_type: "number",
				number: "",
				title: "11111111111哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
				event_type: "url",
				event_value: "http://www.163.com",
				date_time: 0
			},
			{
				show_type: "number",
				number: "708111111111",
				title: "待付金额待付金额待付金额",
				event_type: "url",
				event_value: "http://www.baidu.com",
				date_time: 0
			},
			{
				show_type: "number",
				number: "哈哈哈",
				title: "支付成功",
				event_type: "url",
				event_value: "http://workplus.io",
				date_time: 0
			},
			{
				show_type: "number",
				number: "不行",
				title: "我不想要了，可以退不12133",
				event_type: "url",
				event_value: "http://bing.com",
				date_time: 0
			},
			{
				show_type: "number",
				number: "8081",
				title: "哈哈哈哈哈哈哈哈哈哈身上",
				event_type: "url",
				event_value: "http://bing.com",
				date_time: 0
			}
		]
	}
}
```

> 列表&新闻返回示例

```js
{
	status: 0,
	result: {
		items: [{
				title: "电子申报系统权限申请",
				event_type: "url",
				event_value: "http://bpmnew.workapps.io/mobile/?fullScreen=1",
				date_time: "2018/12/13",
				source: "申请人：刘文清"
			},
			{
				title: "来自王梓的员工休假申请",
				event_type: "url",
				event_value: "http://bpmnew.workapps.io/mobile/?fullScreen=1",
				date_time: "2018/12/11",
				source: "上一审批人：程伟"
			},
			{
				title: "公文签报-信息部组织架构调整-20181212",
				event_type: "url",
				event_value: "http://bpmnew.workapps.io/mobile/?fullScreen=1",
				date_time: "2018/12/12",
				source: "申请人：李苗苗"
			},
			{
				title: "来自张清的员工离职申请",
				event_type: "url",
				event_value: "http://bpmnew.workapps.io/mobile/?fullScreen=1",
				date_time: "2018/12/13",
				source: "申请人：张清"
			}
		]
	}
}
```
