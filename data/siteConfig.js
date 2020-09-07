module.exports = {
  siteTitle: "Hi! I'm Andrei!",
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Andrei Gutan',
  githubUsername: 'gutcod',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `A Self-taught programmer with an aspiration to become a full-stack Web Developer who holds a Chemical Engineering Degree. A tech-savvy individual with a keen interest in the lastest and the greatest gadgets and gizmos. Always Up-to-date with the latest happenings and connected with the world. Enthusiastic, Motivated, and Passionate to achieve my life goals. Getting things done is how I roll. Quick learner and a sound listener, Solving problems and debugging my way through LIFE!. Creating and maintaining excellent websites and applications for the internet is what I dream of. <br />`,
  skills: [
    {
      name: 'HTML',
      level: 70,
    },
    {
      name: 'CSS',
      level: 60,
    },
    {
      name: 'Javascript',
      level: 50,
    },
    {
      name: 'NodeJs',
      level: 40,
    },
    {
      name: 'React',
      level: 60,
    },
    {
      name: 'Git',
      level: 70,
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: 'Gympass',
      begin: {
        month: 'sep',
        year: '2019',
      },
      duration: null,
      occupation: 'Frontend developer',
      description:
        'I am part of the Corporate team, responsible for the development and maintenance of the employee management platform, giving more and more autonomy to partner companies.',
    },
    {
      company: 'Lendico',
      begin: {
        month: 'apr',
        year: '2018',
      },
      duration: null,
      occupation: 'Frontend developer',
      description:
        'I integrate the Frontend team responsible for developing and maintaining the online lending platform.',
    },
  ],
  portifolio: [
    {
      image: '/images/gatsby-starter-cv.png',
      description: 'Gatsby starter CV template',
      url:
        'https://www.gatsbyjs.org/starters/santosfrancisco/gatsby-starter-cv/',
    },
    {
      image: '/images/awesome-grid.png',
      description: 'Responsive grid for ReactJS',
      url: 'https://github.com/santosfrancisco/react-awesome-styled-grid',
    },
    /* more portifolio items here */
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/andreigutan/',
    github: 'https://github.com/gutcod',
    email: 'andrei.gutsan@gmail.com',
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: '#000000cc',
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    },
  ],
}
