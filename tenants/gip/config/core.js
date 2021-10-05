const brands = require('./brands');
const emailX = require('./email-x');
// const nativeX = require('./native-x');

module.exports = {
  emailX,
  // nativeX,
  dpm: {
    emailx: {
      enabled: true,
    },
  },
  snowpro: {
    ...brands.gip,
    name: 'SnowPro Newsletter',
    headerLogoSrc: '/files/base/acbm/gip/image/static/logo/snow-pro-logo.png',
    footerLogoSrc: '/files/base/acbm/gip/image/static/logo/new-standard-footer-logo-7EC0EA.png',
    primaryColor: '#7ec0ea',
    editor: 'Ryan Whisner',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/gip/image/static/editors-ryan.png',
  },
};
