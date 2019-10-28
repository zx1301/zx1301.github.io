module.exports = {
  siteTitle: 'Anthony Kim | Software Engineer',
  siteDescription:
    'I\'m a software engineer interested in building websites and applications.',
  siteKeywords:
    'Anthony Kim, software engineer, front-end engineer, web developer, javascript, TCNJ',
  siteUrl: 'https://zx1301.github.io',
  siteLanguage: 'en_US',
  //googleAnalyticsID: 'UA-45666519-2',
  //googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Anthony Kim',
  location: 'Old Tappan, NJ',
  email: 'anthonydh10k@gmail.com',
  github: 'https://github.com/zx1301',
  //twitterHandle: '',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/zx1301',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/anthony-kim-1a9343136/',
    },
    //{
      //name: 'Codepen',
      //url: '',
    //},
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ttony10k/',
    },
    //{
      //name: 'Twitter',
      //url: '',
    //},
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
