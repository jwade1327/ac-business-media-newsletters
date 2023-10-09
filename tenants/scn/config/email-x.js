const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://acbm.serve.email-x.parameter1.com');

config
  .setAdUnits('cold-chain-insights', [
    {
      name: 'banner-1',
      id: '5c59a2f5465d1901d2ab83a4',
      width: 600,
      height: 100,
    },
    {
      name: 'banner-2',
      id: '5c59a3095a66db8279d4780f',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('show-report', [
    {
      name: 'banner-1',
      id: '61d49f9d01e4b3d5735d539b',
      width: 600,
      height: 100,
    },
    {
      name: 'banner-2',
      id: '61d49faf7c980280f467c776',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('global-supply-chain-insights', [
    {
      name: 'banner-1',
      id: '5c51c2469bcbcf1119dc9816',
      width: 600,
      height: 100,
    },
    {
      name: 'banner-2',
      id: '5c51c28e58ff6944ce55d111',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('show-report-sdce', [
    {
      name: 'banner-1',
      id: '61d4a04e7c9802f6e467c85b',
      width: 600,
      height: 100,
    },
    {
      name: 'banner-2',
      id: '61d4a06801e4b32a5e5d54b4',
      width: 600,
      height: 100,
    },
  ]);
module.exports = config;
