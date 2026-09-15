export const paymentMethods = [
  {
    id: 'bank',
    name: 'Bank Transfer',
    detail: 'GTBank, Access, Zenith, UBA, First Bank and every NUBAN account',
    tips: [
      'Sellers add the bank name, account name and 10-digit NUBAN number',
      'Interbank transfers normally arrive instantly via NIP, but can occasionally be delayed',
      'Sellers should confirm the credit in their banking app, not by SMS alone',
    ],
  },
  {
    id: 'opay',
    name: 'OPay',
    detail: 'Instant wallet-to-wallet transfers',
    tips: ['OPay account numbers are 10 digits, usually your phone number without the leading 0', 'OPay-to-OPay transfers are typically instant'],
  },
  {
    id: 'palmpay',
    name: 'PalmPay',
    detail: 'Pay straight from your PalmPay balance',
    tips: ['Use the 10-digit PalmPay account number shown in the app', 'Check your PalmPay transaction history before releasing'],
  },
  {
    id: 'kuda',
    name: 'Kuda',
    detail: 'Free transfers from the bank of the free',
    tips: ['Kuda accounts receive transfers from any Nigerian bank', 'Keep notifications on so you see credits quickly'],
  },
  {
    id: 'moniepoint',
    name: 'Moniepoint',
    detail: 'Business and personal accounts',
    tips: ['Business accounts may show a business name — make sure buyers know what to expect', 'Moniepoint supports instant NIP transfers'],
  },
];
