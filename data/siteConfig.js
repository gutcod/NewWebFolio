module.exports = {
  siteTitle: "Hello! I'm Andrei!",
  siteDescription: `frontend developer`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Andrei Gutan',
  githubUsername: 'gutcod',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `I consider myself a team person, who loves bringing smiles to people's faces. With high attention to detail and good practices, I am patient and I enjoy helping people overcome their problems. "If you can't explain it simply, you don't understand it well enough" and "Everyone you meet has something to teach you" are two of my favorite mottos.`,
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
      name: 'JavaScript',
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
      name: 'TypeScript',
      level: 50,
    },
    {
      name: 'NodeJs',
      level: 50,
    },
    {
      name: 'Jest',
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
      company: 'EveryMatrix',
      begin: {
        month: 'march',
        year: '2021',
      },
      duration: null,
      occupation: 'Frontend Developer',
      description: `Working on the Frontend team, being resposible for all components tooling that globally impact applications. Improved the app'\s performance and developer's workflow. Main technology used: Javascript, Typescript, React, Redux, Node.js, React testing Library`,
    },
    {
      company: 'Cetbu-tech',
      begin: {
        month: 'nov',
        year: '2019',
      },
      duration: '1 year',
      occupation: 'Frontend Developer',
      description: `Collaborated with back-end engineers and designers to develop functional and appealing web- based applications with a focus on speed, efficiency, and great user experience. Main technology used: Javascript, React, Redux, Node.js, CSS, HTML`,
    },
  ],
  portifolio: [
    {
      image: '/images/agface.jpeg',
      title: 'AGFACE',
      description: 'A smart app that will detect all faces in a pictures',
      url: 'https://agface.herokuapp.com/',
    },
    {
      image: '/images/crwn-shop.jpeg',
      title: 'CRWN-SHOP',
      description: 'e-commerce with React, Firebase',
      url: 'https://ag-crwn.herokuapp.com/',
    },
    {
      image: '/images/githubapp.jpeg',
      title: 'Git-Search',
      description: 'React Hooks, ContextAPI',
      url: 'https://gutcod.github.io/github-api/',
    },
    {
      image: '/images/quiz-app.jpeg',
      title: 'Quiz-app',
      description: 'React, Redux, Firebase',
      url: 'https://quiz2-95ca7.web.app/',
    },
    {
      image: '/images/note-app.jpeg',
      title: 'Note-app',
      description: 'React Hooks, ContextAPI, Firebase',
      url: 'https://invoice-test-82e61.web.app/',
    },
    {
      image: '/images/robofriends.jpeg',
      title: 'Robofriends',
      description: 'Simple React app',
      url: 'https://gutcod.github.io/robofriend/',
    },

    /* more portifolio items here */
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/andreigutan/',
    github: 'https://github.com/gutcod',
    email: 'andrei.gutsan@gmail.com',
  },

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
      label: 'HOME',
      url: '/',
    },
    {
      label: 'PORTFOLIO',
      url: '/portifolio',
    },
  ],
}
