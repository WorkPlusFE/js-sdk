# 安卓真机调试

## 材料准备

* Chrome浏览器（版本>=59）
* 安卓移动设备（系统版本不低于6）
* USB充电线一条（尽量使用手机原配线）

## 设备设置

允许USB调试：

* 打开安卓设备的`允许USB调试`开关；
* 在应用中打开`http://debugx5.qq.com`页面（可在IM聊天中发送该链接，然后点击打开页面）；
* 在打开的页面中，选择`信息`分类；；
* 找到`TBS settings`，选中`是否打开 TBS 内核 Inspector 调试功能`；
* 选中后，应用会弹出警告提示，点击`确定`即可。

> 不同厂商的安卓设备，打开`开发者选项`页面的方式可能不一样，可参考手机的操作手册或查询网络

<p style="text-align: center">
  <img src="/dev-x5.png" alt="图1" width="250">
  <p style="text-align: center">
    <i>图-1</i>
  </p>
</p>

## 调试

* 将安卓设备通过`USB充电线`连接到电脑，若弹出连接类型，请选择文件传输（不可选择充电模式），若弹出询问是否允许 USB 调试的提示时，请选择允许；
* 打开手机应用，访问任何一个轻应用（可以是本地调试的、离线模式的，或已经发布上线的http(s) 访问方式的）；
* 打开 Chrome 浏览器，在地址栏中输入`chrome://inspect/#devices`；
* 如果调试模式开启成功，可以在页面看到打开应用的相关信息；

<p style="text-align: center">
  <img src="/dev-inspect.png" alt="图2" width="400">
  <p style="text-align: center">
    <i>图-2</i>
  </p>
</p>

* 点击应用信息下方的`inspect`，将会自动打开 Chrome 的调试页面，该页面首次打开较慢，如果出现白屏或者404错误的，请尝试切换到更好的网络或使用翻墙工具。

<p style="text-align: center">
  <img src="/dev-debug.png" alt="图3" width="400">
  <p style="text-align: center">
    <i>图-3</i>
  </p>
</p>

::: tip 提示
首次打开该页面，出现白屏或者404的概率很高，条件允许的情况下，尽可能使用更(翻)好(墙)的网络！
:::

## 看不到应用信息?

若调试时，无法出现`图-2`的应用信息，请尝试以下方法：

* 检查 USB 调试模式是否正常开启，某些手机会自动关闭；
* 再次打开`http://debugx5.qq.com`页面进行设置；
* 更换 USB 充电线或多尝试几次链接电脑；
* 更换手机。

::: warning 提示
`http://debugx5.qq.com`该访问地址必须使用`http`协议，切记！
:::