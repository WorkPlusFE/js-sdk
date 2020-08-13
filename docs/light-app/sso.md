# 单点登录

第三方应用在接入 WorkPlus 平台时，往往需要和 WorkPlus 用户系统集成。

目前 WorkPlus 实现单点登录的机制如下：

1. 客户端打开第三方应用时，先以当前登录用户生成用户 Ticket，之后在跳转时会带上该 Ticket 参数；
2. 第三方应用根据 Ticket 参数，验证该 Ticket，如该 Ticket 有效，会返回关联的用户信息。

具体接口使用说明，请查看[单点登录](/api/auth.md)。

## 获取用户信息

不同的端，获取用户信息的方式会不太一样。

### 移动端

移动端通常会通过`js-sdk`接口进行获取，例如使用`w6s.auth.getUserTicket`及`w6s.contact.getCurrentUserInfo`方法来获取临时 Ticket 及当前登录的用户信息。

另一种方式，就是通过截取应用启动地址上的参数，具体设置请查看[应用启动地址](/light-app/create.md#启动地址)。

### PC 客户端

PC 客户端目前主要的方式就是截取应用启动地址上的参数，每个应用被打开时，客户端会获取临时 Ticket 及用户信息并拼接在应用启动地址上，如下：

```js
http://test-app.workplus.io?ticket=ticket&user_id=xxx&domain_id=xx
```

参数包括以下属性:

* `ticket` 临时 Ticket
* `username` 用户名
* `user_id` 用户的 userId
* `domain_id` 用户当前所在的域
* `org_id` 用户当前所在的组织
* `nickname` 用户的昵称，注意转码
* `random` 随机数，一般为时间戳

## 流程解析

<p class="w6s-image">
  <img :src="$withBase('/app/sso.png')" alt="单点登录流程解析" width="100%">
</p>

