# 存储

提供对 localStorage 及 sessionStorage 的封装，默认使用 `workplus.` 前缀作为命名空间， 使用如下：

```ts
import { Storage } from '@w6s/sdk';

const storage = new Storage({ type: 'localStorage' });

// 添加 item
storage.add('version', '0.0.1'); // 实际的 key 为 workplus.version

// 获取 item
storage.get('version'); // 0.0.1

// 检测 key 是否存在
storage.hasKey('version'); // true

// 获取 item 数量 (所有 workplus 相关的 item):
storage.count(); // 1

// 清空 storage (所有 workplus 相关的 item):
storage.clear();

// 遍历 item (所有 workplus 相关的 item):
storage.forEach((key, value) => {
  console.log(`key: ${key}, value: ${value}`);
});
```
