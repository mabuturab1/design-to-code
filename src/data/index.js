export const Work = [
  {
    img: '/static/images/workImg.png',
    title: 'RoadStr',
    icons: ['/static/images/icon1.svg', '/static/images/icon2.svg'],
  },
  {
    img: '/static/images/workImg.png',
    title: 'Rockr',
    icons: ['/static/images/icon1.svg'],
  },
  {
    img: '/static/images/workImg.png',
    title: 'Elevate Meal Plan',
    icons: ['/static/images/icon1.svg'],
  },
  {
    img: '/static/images/workImg.png',
    title: 'Class Agile',
    icons: ['/static/images/icon1.svg', '/static/images/icon2.svg'],
  }
];

export const testimonialList = [
  {
    userImg: '/static/images/user.jpg',
    username: 'Alex Smith',
    rating: 5,
    message: 'Lörem ipsum protism soködade att pseudoligen semick, transcism heteromatisk och heteroska metrogam endotyp. Agnostivision semifiering oaktat reat degåst hatan geov anade, decism.',
  },
  {
    userImg: '/static/images/user.jpg',
    username: 'Silva De Ro',
    rating: 5,
    message: 'Lörem ipsum protism soködade att pseudoligen semick, transcism heteromatisk och heteroska metrogam endotyp. Agnostivision semifiering oaktat reat degåst hatan geov anade, decism.',
  },
  {
    userImg: '/static/images/user.jpg',
    username: 'John Makho',
    rating: 5,
    message: 'Lörem ipsum protism soködade att pseudoligen semick, transcism heteromatisk och heteroska metrogam endotyp. Agnostivision semifiering oaktat reat degåst hatan geov anade, decism.',
  },
  {
    userImg: '/static/images/user.jpg',
    username: 'Alex Smith',
    rating: 5,
    message: 'Lörem ipsum protism soködade att pseudoligen semick, transcism heteromatisk och heteroska metrogam endotyp. Agnostivision semifiering oaktat reat degåst hatan geov anade, decism.',
  },
  {
    userImg: '/static/images/user.jpg',
    username: 'Silva De Ro',
    rating: 5,
    message: 'Lörem ipsum protism soködade att pseudoligen semick, transcism heteromatisk och heteroska metrogam endotyp. Agnostivision semifiering oaktat reat degåst hatan geov anade, decism.',
  },
];

export const CardInfo = [
  {
    title: 'Web Design & Development Services',
    desc: 'Mivinde bes, nynde prosat geober geotiligt. Proktigt ribev potrena. Prokror speprehet. Jåtegon kolåbång. Vasoskapet kror bera i dibäs och anat. Vivyng dissa ',
    img: '/static/images/web-dev.svg',
    link: '#',
  },
  {
    title: 'Magento Development Services',
    desc: 'Mivinde bes, nynde prosat geober geotiligt. Proktigt ribev potrena. Prokror speprehet. Jåtegon kolåbång. Vasoskapet kror bera i dibäs och anat. Vivyng dissa ',
    img: '/static/images/mgt-serv.svg',
    link: '#',
  },
  {
    title: 'Search Engine Optimization',
    desc: 'Mivinde bes, nynde prosat geober geotiligt. Proktigt ribev potrena. Prokror speprehet. Jåtegon kolåbång. Vasoskapet kror bera i dibäs och anat. Vivyng dissa ',
    img: '/static/images/research.svg',
    link: '#',
  },
];

export const blogs = [
  {
    title: 'Data lake on AWS will increase the efficiency of your data analysts by 25 percent: tech study',
    publishedOn: 'Nov 12, 2022',
    blogImg: 'https://tsh.io/wp-content/uploads/fly-images/28984/bun-benchmark-small-900x590.jpg',
    author: {
      name: 'Alex Smith',
      img: '/static/images/user.jpg',
      bio: 'Software Architect',
    },
  },
  {
    title: 'Bun benchmark speed test. Is it worth moving to Bun from Node?',
    publishedOn: 'Oct 12, 2022',
    blogImg: 'https://tsh.io/wp-content/uploads/fly-images/28773/Microinteractions-examples-small-900x590.png',
    author: {
      name: 'Silva De Ro',
      img: '/static/images/user.jpg',
      bio: 'Node.js Junior Developer',
    },
  },
  {
    title: 'Developing Amazon Chime chat – a project case study',
    publishedOn: 'Nov 12, 2022',
    blogImg: 'https://tsh.io/wp-content/uploads/fly-images/28665/api_threats_illustration_thumbnail_001-900x590.jpg',
    author: {
      name: 'Alex Smith',
      img: '/static/images/user.jpg',
      bio: 'Software Architect',
    },
  },
  {
    title: 'Bun benchmark speed test. Is it worth moving to Bun from Node?',
    publishedOn: 'Oct 12, 2022',
    blogImg: 'https://tsh.io/wp-content/uploads/fly-images/28222/fastify-practical-overview-small-900x590.png',
    author: {
      name: 'Silva De Ro',
      img: '/static/images/user.jpg',
      bio: 'Node.js Junior Developer',
    },
  },
  {
    title: 'API security threats - TSH’s work with the OWASP top 10',
    publishedOn: 'May 12, 2022',
    blogImg: 'https://tsh.io/wp-content/uploads/fly-images/28222/fastify-practical-overview-small-900x590.png',
    author: {
      name: 'Alex Smith',
      img: '/static/images/user.jpg',
      bio: 'QA Specialist',
    },
  },
  {
    title: 'All about UX writing – How to create intuitive content that people want to read',
    publishedOn: 'Jan 12, 2022',
    blogImg: 'https://tsh.io/wp-content/uploads/fly-images/28222/fastify-practical-overview-small-900x590.png',
    author: {
      name: 'Silva De Ro',
      img: '/static/images/user.jpg',
      bio: 'Product Designer',
    },
  },
];

export const ANIMATION_DURATION = {
  small: 0.25,
  medium: 0.5,
  big: 1,
};

export const getHVAnimationConfigs = (hidden, visible, additionalTransitionConfig = {}) => {
  return {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true },
    variants: {
      visible,
      hidden,
    },
    transition: {
      duration: ANIMATION_DURATION.small,
      ease: 'easeOut',
      ...additionalTransitionConfig,
    },
  };
};
