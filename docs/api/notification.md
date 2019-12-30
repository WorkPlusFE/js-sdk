# 信息反馈组件

## Alert

```js
w6s.notification.alert({
    message: '这是一条警告信息',
    title: '提示', //非必须
    buttonName: '收到',
    success : function() {},
    fail : function(err) {},
});
```

## Confirm

```js
w6s.notification.confirm({
    message: '是否要删除这条信息？',
    title: '提示',
    buttonLabels: ['删除', '取消'],
    success : function(result) {
        // success 将在点击 button 之后回调
        /*
        {
            buttonIndex: 0 //被点击按钮的索引值，Number类型，从0开始
        }
        */
    },
    fail : function(err) {}
});
```

## Prompt

```js
w6s.notification.prompt({
    message: '请输入验证码',
    title: '提示',
    placeholder: '请输入验证码',
    buttonLabels: ['删除', '取消'],
    success : function(result) {
        // success 将在点击 button 之后回调
        /*
        {
            buttonIndex: 0, // 被点击按钮的索引值，Number类型，从0开始
            value: '' // 输入的值
        }
        */
    },
    fail : function(err) {}
});
```

## Preloader

显示 loading：

```js
w6s.notification.showPreloader({
    text: '玩命加载中...', // loading 显示的字符，空表示不显示文字 (最多8个中文字符)
    showIcon: true, // 显示图标
    success : function(result) {},
    fail : function(err) {}
});
```

隐藏 loading：

```js
w6s.notification.hidePreloader({
    success : function(result) {},
    fail : function(err) {}
});
```

## Toast

```js
w6s.notification.toast({
    icon: '', // icon样式，不同客户端参数不同，请参考参数说明
    text: String, // 提示信息
    duration: Number, // 显示持续时间，单位秒，默认按系统规范[android只有两种(<=2s >2s)]
    delay: Number, // 延迟显示，单位秒，默认0
    success : function(result) {},
    faile : function(err) {}
})
```

## ActionSheet

```js
w6s.notification.actionSheet({
    title: '最好吃的水果', // 标题
    cancelButton: '取消', // 取消按钮文本
    otherButtons: ['苹果', '香蕉', '西瓜', '车厘子'], // 列表按钮
    success : function(result) {
        // success 将在点击 button 之后回调
        /*{
            buttonIndex: 0 //被点击按钮的索引值，Number，从0开始, 取消按钮为-1
        }*/
    },
    fail : function(err) {}
})
```