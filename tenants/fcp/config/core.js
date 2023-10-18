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
  'blacktop-update': {
    ...brands.pavementMagazine,
    nameFirst: 'Blacktop',
    nameLast: 'Update',
    primaryColor: '#cf3729',
    editor: 'Brandon Noel',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Brandon_Noel_circle.png',
  },
  'breaking-ground': {
    ...brands.equipmentToday,
    nameFirst: 'Breaking',
    nameLast: 'Ground',
    primaryColor: '#f79a00',
    editor: 'Lori Ditoro',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/ooh/image/static/Lori_Ditoro.png',
  },
  'construction-and-workforce-management': {
    ...brands.fcp,
    name: 'Construction & Workforce Management',
    primaryColor: '#f36422',
    editor: 'Charles Rathmann',
    editorTitle: 'Technology Editor',
    editorImage: '/files/base/acbm/fcp/image/static/rathmann_headshot.png',
  },
  'construction-technology': {
    ...brands.fcp,
    headerImgLinkUrl: 'https://www.forconstructionpros.com/construction-technology',
    primaryColor: '#5db2d7',
    nameFirst: 'Construction',
    nameLast: 'Technology',
    editor: 'Charles Rathmann',
    editorTitle: 'Technology Editor',
    editorImage: '/files/base/acbm/fcp/image/static/rathmann_headshot.png',
  },
  'construction-zone-safety': {
    ...brands.fcp,
    primaryColor: '#f04f23',
    nameFirst: 'Construction Zone',
    nameLast: 'Safety',
    editor: 'Gigi Wood',
    editorTitle: 'Managing Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Gigi_Wood.png',
  },
  'crane-connection': {
    ...brands.fcp,
    name: 'Crane Connections',
    primaryColor: '#e62725',
    editor: 'Sarah Webb',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Sarah_Webb_headshot.png',
  },
  'elevating-safety': {
    ...brands.rentalMagazine,
    nameFirst: 'Elevating',
    nameLast: 'Safety',
    primaryColor: '#365685',
    editor: 'Sarah Webb',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Sarah_Webb_headshot.png',
  },
  'fleet-maintenance-report': {
    ...brands.fcp,
    headerImgLinkUrl: 'https://www.forconstructionpros.com/equipment/fleet-maintenance',
    nameFirst: 'Fleet',
    nameLast: 'Maintenance',
    primaryColor: '#f26522',
    editor: 'Lori Ditoro',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/ooh/image/static/Lori_Ditoro.png',
  },
  'headline-news': {
    ...brands.fcp,
    nameFirst: 'Headline',
    nameLast: 'News',
    primaryColor: '#f36422',
    editor: 'Gigi Wood',
    editorTitle: 'Managing Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Gigi_Wood.png',
  },
  'in-the-mix': {
    ...brands.concreteContractor,
    nameFirst: 'In the',
    nameLast: 'Mix',
    primaryColor: '#eb1c24',
    editor: 'Jonathan Kozlowski',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Jonathon_Kozlowski.png',
  },
  'infrastructure-impact': {
    ...brands.fcp,
    nameFirst: 'Infrastructure',
    nameLast: 'Impact',
    primaryColor: '#e9bf2f',
    editor: 'Brandon Noel',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Brandon_Noel_circle.png',
  },
  'lube-report': {
    ...brands.fcp,
    nameFirst: 'Lube',
    nameLast: 'Report',
    primaryColor: '#0051FA',
    editor: 'Lori Ditoro',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/ooh/image/static/Lori_Ditoro.png',
  },
  'modern-fleet-management': {
    ...brands.fcp,
    headerImgLinkUrl: 'https://www.forconstructionpros.com/equipment/fleet-maintenance',
    primaryColor: '#871937',
    nameFirst: 'Modern Fleet',
    nameLast: 'Management',
    editor: 'Lori Ditoro',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/ooh/image/static/Lori_Ditoro.png',
  },
  'new-machine-solutions': {
    ...brands.fcp,
    primaryColor: '#f87526',
    nameFirst: 'New Machine',
    nameLast: 'Solutions',
    editor: 'Lori Ditoro',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/ooh/image/static/Lori_Ditoro.png',
  },
  'power-rental': {
    ...brands.rentalMagazine,
    nameFirst: 'Power',
    nameLast: 'Rental',
    primaryColor: '#fc501c',
    editor: 'Sarah Webb',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Sarah_Webb_headshot.png',
  },
  'rental-market-watch': {
    ...brands.rentalMagazine,
    nameFirst: 'Rental Market',
    nameLast: 'Watch',
    primaryColor: '#bb2b15',
    editor: 'Sarah Webb',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Sarah_Webb_headshot.png',
  },
  'rental-watch': {
    ...brands.rentalMagazine,
    nameFirst: 'Rental',
    nameLast: 'WATCH',
    primaryColor: '#e52824',
    editor: 'Sarah Webb',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Sarah_Webb_headshot.png',

  },
  'road-building-update': {
    ...brands.asphaltContractor,
    nameFirst: 'Road Building',
    nameLast: 'Update',
    primaryColor: '#f4381b',
    editor: 'Brandon Noel',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Brandon_Noel_circle.png',
  },
  'the-contractors-best-friend': {
    ...brands.fcp,
    headerImgLinkUrl: 'https://www.forconstructionpros.com/profit-matters',
    nameFirst: "The Contractor's",
    nameLast: 'Best Friend',
    primaryColor: '#108BC4',
    editor: 'Gigi Wood',
    editorTitle: 'Managing Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Gigi_Wood.png',
  },
  'truck-report': {
    ...brands.fcp,
    headerImgLinkUrl: 'https://www.forconstructionpros.com/trucks',
    nameFirst: 'The Truck',
    nameLast: 'Report',
    primaryColor: '#ffa200',
    editor: 'Lori Ditoro',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/ooh/image/static/Lori_Ditoro.png',
  },
  'openings-news-views': {
    primaryColor: '#004f75',
    name: 'Openings News & Views',
    description: 'Exclusive insight into the most impactful news and trends shaping the non-residential door and hardware industry',
    headerLogoSrc: '/files/base/acbm/fcp/image/static/safesecure-enl-header.jpg',
    displayPrimarySection: true,
    ...brands.sso,
  },
  'show-report': {
    ...brands.fcp,
    nameFirst: 'Show',
    nameLast: 'Report',
    primaryColor: '#2783c2',
    editor: 'Gigi Wood',
    editorTitle: 'Managing Editor',
    editorImage: '/files/base/acbm/fcp/image/static/Gigi_Wood.png',
  },
  'breaking-ground-ironpros': {
    ...brands.equipmentToday,
    nameFirst: 'Breaking',
    nameLast: 'Ground',
    subBrandName: 'IronPros',
    primaryColor: '#c99227',
    headerLogoSrc: '/files/base/acbm/fcp/image/static/logo/IP-logo-high-res.png',
    newsletterLogo: '/files/base/acbm/fcp/image/static/logo/logo-title-breaking-ground.png',
    headerImgLinkUrl: 'https://ironpros.com/en-us/home/anonymous',
    fcpLogoSrc: '/files/base/acbm/fcp/image/static/logo/FCP-logo-high-res.png',
    equipmentTodayLogoSrc: '/files/base/acbm/fcp/image/static/logo/ET-logo-high-res.png',
    equipmentImage: '/files/base/acbm/fcp/image/static/logo/equipment.jpeg',
    technologyImage: '/files/base/acbm/fcp/image/static/logo/technology.png',
    workwearImage: '/files/base/acbm/fcp/image/static/logo/workwear.png',
    editor: 'Wayne Grayson',
    editorImage: '/files/base/acbm/fcp/image/static/Wayne_B&W.jpg',
    socialMedia: {
      imagePath: '/files/base/acbm/fcp/image/static/newsletter',
      links: [
        { provider: 'facebook', href: 'https://www.facebook.com/IronProsResearch/' },
        { provider: 'linkedin', href: 'https://www.linkedin.com/company/ironpros/' },
        { provider: 'twitter', href: 'https://twitter.com/iron_pros/' },
        { provider: 'instagram', href: 'https://www.instagram.com/iron_pros/' },
      ],
    },
  },
  'headline-news-ironpros': {
    ...brands.fcp,
    nameFirst: 'IronPros',
    nameLast: 'Insights',
    subBrandName: 'IronPros',
    primaryColor: '#c99227',
    headerLogoSrc: '/files/base/acbm/fcp/image/static/logo/ironpros-logo.png',
    newsletterLogo: '/files/base/acbm/fcp/image/static/logo/logo-title-headline-news.png',
    headerImgLinkUrl: 'https://ironpros.com/en-us/home/anonymous',
    fcpLogoSrc: '/files/base/acbm/fcp/image/static/logo/black_site_logo.png',
    equipmentTodayLogoSrc: '/files/base/acbm/fcp/image/static/logo/EquipmentToday-logo-black.png',
    equipmentImage: '/files/base/acbm/fcp/image/static/logo/equipment.jpeg',
    technologyImage: '/files/base/acbm/fcp/image/static/logo/technology.png',
    workwearImage: '/files/base/acbm/fcp/image/static/logo/workwear.png',
    editor: 'Wayne Grayson',
    editorImage: '/files/base/acbm/fcp/image/static/Wayne_B&W.jpg',
    socialMedia: {
      imagePath: '/files/base/acbm/fcp/image/static/newsletter',
      links: [
        { provider: 'facebook', href: 'https://www.facebook.com/IronProsResearch/' },
        { provider: 'linkedin', href: 'https://www.linkedin.com/company/ironpros/' },
        { provider: 'twitter', href: 'https://twitter.com/iron_pros/' },
        { provider: 'instagram', href: 'https://www.instagram.com/iron_pros/' },
      ],
    },
  },
  'rental-psc': {
    ...brands.rentalMagazine,
    tagline: '',
    name: 'Rental PSC',
    headerImgLinkUrl: 'https://www.forconstructionpros.com/rental',
    headerLogoSrcLeft: '/files/base/acbm/fcp/image/2023/02/RPN_PSC_320x100_left_.63e124ecb539c.png',
    headerLogoSrcRight: '/files/base/acbm/fcp/image/2023/02/rpn_psc_header_2.63e124ee1695a.png',
    primaryColor: '#f9a71e',
  },
  'pavement-maintenance-reconstruction-psc': {
    ...brands.fcp,
    tagline: '',
    name: 'Pavement Maintenance & Reconstruction PSC',
    headerImgLinkUrl: 'https://www.forconstructionpros.com/pavement-maintenance',
    headerLogoSrcLeft: '/files/base/acbm/fcp/image/2019/11/PVM_PSC_1.5ddec3bbc35db.png',
    headerLogoSrcRight: '/files/base/acbm/fcp/image/2019/11/PVM_PSC_2.5ddec3c0b6633.png',
    primaryColor: '#d71921',
  },
  'equipment-today-psc': {
    ...brands.equipmentToday,
    tagline: '',
    name: 'Eqipment Today PSC',
    headerImgLinkUrl: 'https://www.forconstructionpros.com/equipment',
    headerLogoSrcLeft: '/files/base/acbm/fcp/image/2019/12/ET_PSC_1.5de54bbd50c12.png',
    headerLogoSrcRight: '/files/base/acbm/fcp/image/2022/12/ET_PSC_630x100_right.6390f766caa5c.png',
    primaryColor: '#f8a11c;',
  },
  'concrete-contractor-psc': {
    ...brands.concreteContractor,
    tagline: '',
    name: 'Concrete Contractor PSC',
    headerImgLinkUrl: 'https://www.forconstructionpros.com/concrete',
    headerLogoSrcLeft: '/files/base/acbm/fcp/image/2021/04/cc_psc_left.608af211068ba.png',
    headerLogoSrcRight: '/files/base/acbm/fcp/image/2021/04/cc_psc_right.608af215924c4.png',
    primaryColor: '#3432a9',
  },
  'asphalt-contractor-psc': {
    ...brands.asphaltContractor,
    tagline: '',
    name: 'Asphalt Contractor PSC',
    headerImgLinkUrl: 'https://www.forconstructionpros.com/asphalt',
    headerLogoSrcLeft: '/files/base/acbm/fcp/image/2019/11/ACON_PSC_1.5ddec1344916c.png',
    headerLogoSrcRight: '/files/base/acbm/fcp/image/2022/08/MicrosoftTeams_image__22_.62f2a61d2e9a3.png',
    primaryColor: '#aa282e',
  },
};
