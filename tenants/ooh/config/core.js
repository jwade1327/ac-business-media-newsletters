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
  'industry-news': {
    ...brands.oem,
    name: 'Industry News',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
    footerLogoSrc: '',
    primaryColor: '#ed1b24',
    editor: 'Sara Jensen',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/ooh/image/static/Sarah-Jensen.png',
  },
  'technology-news-tracker': {
    ...brands.oem,
    name: 'Technology News Tracker',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
    footerLogoSrc: '',
    primaryColor: '#03c0d4',
    editor: 'Sara Jensen',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/ooh/image/static/Sarah-Jensen.png',
  },
  // 'economic-market-outlook': {
  //   ...brands.oem,
  //   name: 'Equipment Market Outlook',
  //   headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
  //   footerLogoSrc: '',
  //   primaryColor: '',
  //   editor: 'Sara Jensen',
  //   editorTitle: 'Editor-in-Chief',
  //   editorImage: '/files/base/acbm/ooh/image/static/Sarah-Jensen.png',
  // },
  'in-the-cab': {
    ...brands.oem,
    name: 'In the Cab',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
    footerLogoSrc: '',
    primaryColor: '#47a255',
    editor: 'Sara Jensen',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/ooh/image/static/Sarah-Jensen.png',
  },
  'the-electric-age': {
    ...brands.oem,
    name: 'The Electric Age',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
    footerLogoSrc: '',
    primaryColor: '#6aba0b',
    editor: 'Sara Jensen',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/ooh/image/static/Sarah-Jensen.png',
  },
  'engine-revolutions': {
    ...brands.oem,
    name: 'Engine Revolutions',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
    footerLogoSrc: '',
    primaryColor: '#a5b82a',
    editor: 'Sara Jensen',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/ooh/image/static/Sarah-Jensen.png',
  },
  'drivetrain-technology-update': {
    ...brands.oem,
    name: 'Drivetrain Technology Update',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
    footerLogoSrc: '',
    primaryColor: '#f2a300',
    editor: 'Sara Jensen',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/ooh/image/static/Sarah-Jensen.png',
  },
  'efficient-design-manufacturing': {
    ...brands.oem,
    name: 'Efficient Design & Manufacturing',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
    footerLogoSrc: '',
    primaryColor: '#ed1c21',
    editor: 'Sara Jensen',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/ooh/image/static/Sarah-Jensen.png',
  },
  'fluid-power-progress': {
    ...brands.oem,
    name: 'Fluid Power Progress',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
    footerLogoSrc: '',
    primaryColor: '#126baf',
    editor: 'Sara Jensen',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/ooh/image/static/Sarah-Jensen.png',
  },
};
