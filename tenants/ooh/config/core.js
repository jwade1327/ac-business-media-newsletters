const brands = require('./brands');
const emailX = require('./email-x');
// const nativeX = require('./native-x');

module.exports = {
  emailX,
  // nativeX,
  dpm: {
    content: {
      enabled: true,
    },
    emailx: {
      enabled: true,
      useEmailxHref: true,
    },
  },
  'industry-news': {
    ...brands.oem,
    name: 'Industry News',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
    primaryColor: '#ed1b24',
    editor: 'Kathy Wells',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Kathy-Wells-2019.png',
  },
  'technology-news-tracker': {
    ...brands.oem,
    name: 'Technology News Tracker',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
    primaryColor: '#03c0d4',
    editor: 'Kathy Wells',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Kathy-Wells-2019.png',
  },
  'economic-market-outlook': {
    ...brands.oem,
    name: 'Equipment Market Outlook',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
    primaryColor: '#ed1d25',
    editor: 'Lori Ditoro',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Lori_Ditoro.png',
  },
  'in-the-cab': {
    ...brands.oem,
    name: 'In the Cab',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
    primaryColor: '#47a255',
    editor: 'Kathy Wells',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Kathy-Wells-2019.png',
  },
  'the-electric-age': {
    ...brands.oem,
    name: 'The Electric Age',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
    primaryColor: '#6aba0b',
    editor: 'Kathy Wells',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Kathy-Wells-2019.png',
  },
  'engine-revolutions': {
    ...brands.oem,
    name: 'Engine Revolutions',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
    primaryColor: '#a5b82a',
    editor: 'Kathy Wells',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Kathy-Wells-2019.png',
  },
  'drivetrain-technology-update': {
    ...brands.oem,
    name: 'Drivetrain Technology Update',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
    primaryColor: '#f2a300',
    editor: 'Kathy Wells',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Kathy-Wells-2019.png',
  },
  'efficient-design-manufacturing': {
    ...brands.oem,
    name: 'Efficient Design & Manufacturing',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
    primaryColor: '#ed1c21',
    editor: 'Kathy Wells',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Kathy-Wells-2019.png',
  },
  'fluid-power-progress': {
    ...brands.oem,
    name: 'Fluid Power Progress',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
    primaryColor: '#126baf',
    editor: 'Kathy Wells',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Kathy-Wells-2019.png',
  },
  'show-report': {
    ...brands.oem,
    name: 'Show Report',
    primaryColor: '#2783c2',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
    editor: 'Lori Ditoro',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Lori_Ditoro.png',
  },
  'oem-product-showcase': {
    ...brands.oem,
    name: 'OEM Product Showcase',
    tagline: 'New products and systems for heavy-duty equipment designs',
    headerImgLinkUrl: 'https://www.oemoffhighway.com/',
    headerLogoSrcLeft: '/files/base/acbm/ooh/image/2019/01/header_part1.5c2e8bd3d06a3.png',
    headerLogoSrcRight: '/files/base/acbm/ooh/image/2019/01/header_part2.5c2e8bd8be718.png',
    primaryColor: '#000000',
  },
};
