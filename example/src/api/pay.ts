// 支付

export default {
  title: '支付',
  module: 'pay',
  active: false,
  apis: [
    {
      title: '选择微信发票',
      description: '选择微信发票',
      action: 'chooseWxInvoice',
      params: {
      },
    },
    {
      title: '选择支付宝发票',
      description: '选择支付宝发票',
      action: 'chooseAliInvoice',
      params: {
        isvUrl: 'https://dctest.mideadc.com',
        einvMerchantId: 9131000074027,
      },
    },
  ],
};
