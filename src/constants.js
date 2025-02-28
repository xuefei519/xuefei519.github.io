

const skills = [
   {
    name: 'HTML',
    category: 'frontend'
  },
   {
    name: 'Javascript',
    category: 'frontend'
  },
   {
    name: 'CSS/SCSS',
    category: 'frontend'
  },
  {
    name: 'Vue',
    category: 'frontend'
  },
  {
    name: 'Vite',
    category: 'frontend'
  },
  {
    name: 'ECharts',
    category: 'frontend'
  },
  {
    name: 'Bootstrap',
    category: 'frontend'
  },
  {
    name: 'jQuery',
    category: 'frontend'
  },
  {
    name: 'D3.js',
    category: 'frontend'
  },
  {
    name: 'Restful API',
    category: 'frontend/backend'
  },
  {
    name: 'Node.js',
    category: 'backend'
  },
  {
    name: 'PostgreSQL',
    category: 'backend'
  },
  {
    name: 'Nginx',
    category: 'deploy'
  },
  {
    name: 'Inkscape',
    category: 'UI/UX'
  },
  {
    name: 'Figma',
    category: 'UI/UX'
  },
  {
    name: 'Flutter',
    category: 'tool'
  },
  {
    name: 'Git',
    category: 'tool'
  },
  {
    name: 'Wordpress',
    category: 'tool'
  }
];
    const projects = [
      {
        name: 'CITF Databank Dashboard',
        img: '/src/assets/imgs/CITF_Dashboard.png',
        link: 'https://dashboard.citf.mcgill.ca/',
        techs: ['HTML','Javascript', 'SCSS', 'Vue', 'ECarts', 'Vite', 'PostgreSQL', 'Node.js', 'Nginx'],
        detail: 'A comprehensive online tool that provides access to standardized COVID-19 data from across Canada. It is an interactive platform offering researchers, policymakers, and public health professionals to explore, filter and compare collected data in the databank with a intuitive and user-friendly interface.'
      },
      {
        name: 'CSBE Dashboard',
        img: '/src/assets/imgs/CSBE.png',
        link: 'https://csbe.mchi.mcgill.ca/',
        techs: ['HTML','Javascript', 'SCSS', 'Vue', 'ECarts', 'Vite'],
        detail: 'An interactive web-based tool designed to provide comprehensive insights into the performance of residential elderly care services (CHSLDs) across Quebec. Developed for the Commissaire à la santé et au bien-être (CSBE) in response to challenges exposed by the COVID-19 pandemic, this dashboard empowers users to visualize, analyze, and extract critical data related to the care and services offered to seniors.'
  }
]

export default {
  skills,
  projects
}
