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
      params: { url: 'www/invoiceSelect.htm?scene=INVOICE_EXPENSE&einvMerchantId=914406066176547680&serverRedirectUrl=https%3A%2F%2Fdctest.mideadc.com' },
    },
  ],
};
