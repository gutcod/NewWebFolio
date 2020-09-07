module.exports = {
  siteTitle: "Hello! I'm Andrei!",
  siteDescription: `frontend developer`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Andrei Gutan',
  githubUsername: 'gutcod',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `A <strong>Self-taught programmer </strong> with an aspiration to become a <strong>Frontend Developer</strong> who holds a Chemical Engineering Degree. A tech-savvy individual with a keen interest in the lastest and the greatest gadgets and gizmos. Always Up-to-date with the latest happenings and connected with the world. Enthusiastic, Motivated, and Passionate to achieve my life goals. Getting things done is how I roll. Quick learner and a sound listener, Solving problems and debugging my way through LIFE!. Creating and maintaining excellent websites and applications for the internet is what I dream of. <br />`,
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
      level: 70,
    },
    {
      name: 'React',
      level: 60,
    },
    {
      name: 'Redux',
      level: 40,
    },
    {
      name: 'NodeJs',
      level: 50,
    },
    {
      name: 'Express',
      level: 40,
    },
    {
      name: 'MongoDB',
      level: 50,
    },
    {
      name: 'PostgreSQL',
      level: 40,
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
      company: 'Freelance',
      begin: {
        month: 'sep',
        year: '2019',
      },
      duration: null,
      occupation: 'Frontend developer',
      description:
        '- Collaborated with back-end engineers and designers to develop functional and appealing web-based applications with a focus on speed, efficiency, and great user experience -Translated the design wireframes into clean reusable code -Ensured responsive web design and cross-browser compatibility',
    },
    {
      company: 'Rompetrol',
      begin: {
        month: 'apr',
        year: '2018',
      },
      duration: '2 year',
      occupation: 'Process Engineer',
      description: `Prepare and review documents including PFDs, P&IDs, scopes of work, and equipment specifications to support the capital process.`,
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
