# 自定义方法

`WorkPlus JS-SDK`是在移动端提供的 Cordova 接口能力的基础上进行的二次封装，基于通用性的考虑，一些客户定制的接口并不包含在内。

如果你需要查看完整的 Cordova 文档，请点击[此处](https://open.workplus.io/cordova/)。

## exec

如果你需要使用的接口不包含在 JS-SDK 内，但又想获得 JS-SDK 一样的接口调用体验，可以使用下方接口进行包装转换：

```js
// 带回调的方法，setTimer 为 boolean类型，表示是否启用定时器
w6s.exec(service, action, args, success, fail, setTimer);
```

以某客户定制需求为例，**获取签名信息**，Cordova 接口定义如下：

```js
function getSignature(){
  cordova.exec(
    // success 成功回调
    function(result) {},
    // fail 失败回调
    function(error) {},
    // service
    "WorkPlus_HTMember",
    // action
    "getSignature", 
    // args，为数组
    []
  );
}
```

使用`w6s.exec`包装后：

```js
const getSignature = w6s.exec('WorkPlus_HTMember', 'getSignature', []);

// 基于 Promise 的调用方式
// 如果需要兼容 callback 的方式，需要在方法定义时传入success和fail函数
getSignature()
  .then(function(res) {})
  .catch(function(err) {});
```

## execSync

`execSync`相比`exec`，唯一的区别就是没有回调。

例如打开一个网页，这样的动作不会有任何返回，此时就应该使用`execSync`方法进行转换。

```js
w6s.execSync(service, action, args);
```