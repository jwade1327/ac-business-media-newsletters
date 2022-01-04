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
    footerLogoSrc: '/files/base/acbm/ooh/image/static/logo/new-standard-footer-logo-ed1b24.png',
    primaryColor: '#ed1b24',
    editor: 'Sara Jensen',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Sarah_Jensen_new.png',
  },
  'technology-news-tracker': {
    ...brands.oem,
    name: 'Technology News Tracker',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
    footerLogoSrc: '/files/base/acbm/ooh/image/static/logo/new-standard-footer-logo-03c0d4.png',
    primaryColor: '#03c0d4',
    editor: 'Sara Jensen',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Sarah_Jensen_new.png',
  },
  'economic-market-outlook': {
    ...brands.oem,
    name: 'Equipment Market Outlook',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
    footerLogoSrc: '/files/base/acbm/ooh/image/static/logo/new-standard-footer-logo-ED1D25.png',
    primaryColor: '#ed1d25',
    editor: 'Sara Jensen',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Sarah_Jensen_new.png',
  },
  'in-the-cab': {
    ...brands.oem,
    name: 'In the Cab',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
    footerLogoSrc: '/files/base/acbm/ooh/image/static/logo/new-standard-footer-logo-47a255.png',
    primaryColor: '#47a255',
    editor: 'Sara Jensen',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Sarah_Jensen_new.png',
  },
  'the-electric-age': {
    ...brands.oem,
    name: 'The Electric Age',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
    footerLogoSrc: '/files/base/acbm/ooh/image/static/logo/new-standard-footer-logo-6aba0b.png',
    primaryColor: '#6aba0b',
    editor: 'Sara Jensen',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Sarah_Jensen_new.png',
  },
  'engine-revolutions': {
    ...brands.oem,
    name: 'Engine Revolutions',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
    footerLogoSrc: '/files/base/acbm/ooh/image/static/logo/new-standard-footer-logo-a5b82a.png',
    primaryColor: '#a5b82a',
    editor: 'Sara Jensen',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Sarah_Jensen_new.png',
  },
  'drivetrain-technology-update': {
    ...brands.oem,
    name: 'Drivetrain Technology Update',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
    footerLogoSrc: '/files/base/acbm/ooh/image/static/logo/new-standard-footer-logo-f2a300.png',
    primaryColor: '#f2a300',
    editor: 'Sara Jensen',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Sarah_Jensen_new.png',
  },
  'efficient-design-manufacturing': {
    ...brands.oem,
    name: 'Efficient Design & Manufacturing',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
    footerLogoSrc: '/files/base/acbm/ooh/image/static/logo/new-standard-footer-logo-ed1c21.png',
    primaryColor: '#ed1c21',
    editor: 'Sara Jensen',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Sarah_Jensen_new.png',
  },
  'fluid-power-progress': {
    ...brands.oem,
    name: 'Fluid Power Progress',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_LOGO.png',
    footerLogoSrc: '/files/base/acbm/ooh/image/static/logo/new-standard-footer-logo-126baf.png',
    primaryColor: '#126baf',
    editor: 'Sara Jensen',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Sarah_Jensen_new.png',
  },
  'show-report': {
    ...brands.oem,
    name: 'Show Report',
    primaryColor: '#2783c2',
  },
};
