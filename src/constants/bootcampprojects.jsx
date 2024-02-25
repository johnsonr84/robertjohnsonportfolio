import {
  employeedir,
  memberdir,
  pwabudget,
  workouttracker,
  empmanagement,
  html,
  css,
  javascript,
  reactjs,
  nodejs,
  jquery,
  workdayscheduler,
  notetaker,
  teamgenerator,
  readmegenerator,
  weatherdash,
  passwordgenerator,
  jscodequiz,
} from "../assets";

const bootcampprojects = [
  {
    name: "Employee Directory",
    description:
      "Given a table of random users generated from the Random User API, when the user loads the page, a table of employees should render.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "text-bootstrap",
      },
      {
        name: "API",
        color: "text-other",
      },
    ],
    image: employeedir,
    source_code_link:
      "https://github.com/johnsonr84/react-employee-directory/tree/main",
    deployment_link: "https://johnsonr84.github.io/react-employee-directory/",
  },
  {
    name: "Member Directory",
    description:
      "Random User utilizes React Hooks to filter and sort members by first and / or last name.",
    tags: [
      {
        name: "React",
        color: "text-react",
      },
      {
        name: "Bootstrap",
        color: "text-bootstrap",
      },
      {
        name: "API",
        color: "text-other",
      },
    ],
    techs: [
      {
        name: "react",
        icon: reactjs,
      },
      {
        name: "css",
        icon: css,
      },
      {
        name: "javascript",
        icon: javascript,
      },
    ],
    image: memberdir,
    source_code_link: "https://github.com/johnsonr84/random-user",
    deployment_link: "https://johnsonr84.github.io/random-user/#/",
  },
  {
    name: "PWA Budget Tracker",
    description:
      "Add expenses and deposits to your budget, with or without an internet connection. When entering transactions offline, offline-entries will be added to tracker when brought back online.",
    tags: [
      {
        name: "HTML",
        color: "text-html",
      },
      {
        name: "CSS",
        color: "text-css",
      },
      {
        name: "JavaScript",
        color: "text-js",
      },
      {
        name: "Bootstrap",
        color: "text-bootstrap",
      },
      {
        name: "PWA",
        color: "text-other",
      },
    ],
    techs: [
      {
        name: "html",
        icon: html,
      },
      {
        name: "css",
        icon: css,
      },
      {
        name: "javascript",
        icon: javascript,
      },
    ],

    image: pwabudget,
    source_code_link: "https://github.com/johnsonr84/pwa-budget-tracker",
    deployment_link: "https://johnsonr84.github.io/random-user/#/",
  },
  {
    name: "Workout Tracker",
    description:
      "Given a table of random users generated from the Random User API, when the user loads the page, a table of employees should render.",
    tags: [
      {
        name: "HTML",
        color: "text-html",
      },
      {
        name: "CSS",
        color: "text-css",
      },
      {
        name: "JavaScript",
        color: "text-js",
      },
      {
        name: "Bootstrap",
        color: "text-bootstrap",
      },
    ],
    techs: [
      {
        name: "html",
        icon: html,
      },
      {
        name: "css",
        icon: css,
      },
      {
        name: "javascript",
        icon: javascript,
      },
    ],
    image: workouttracker,
    source_code_link: "https://github.com/johnsonr84/workout-tracker",
    deployment_link: "https://slack-clone-dd-71ab5.web.app/",
  },
  {
    name: "Employee Management",
    description:
      "Architect and built a Content Management System (CMS) to manage a company's employees using node, inquirer and MySQL.",
    tags: [
      {
        name: "JavaScript",
        color: "text-js",
      },
      {
        name: "Node",
        color: "text-node",
      },
      {
        name: "MySQL",
        color: "text-mysql",
      },
    ],
    techs: [
      {
        name: "javascript",
        icon: javascript,
      },
      {
        name: "node",
        icon: nodejs,
      },
    ],
    image: empmanagement,
    source_code_link: "https://github.com/johnsonr84/employee-management",
    deployment_link:
      "https://drive.google.com/file/d/1dM8aOmrtdkf3IOSXF8wNFmtPjB2r6fya/view",
  },
  {
    name: "Work Day Scheduler",
    description:
      "Simple calendar application that allows a user to save events for each hour of the workday. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
    tags: [
      {
        name: "HTML",
        color: "text-html",
      },
      {
        name: "CSS",
        color: "text-css",
      },
      {
        name: "JavaScript",
        color: "text-js",
      },
      {
        name: "jQuery",
        color: "text-other",
      },
    ],
    techs: [
      {
        name: "javascript",
        icon: javascript,
      },
      {
        name: "jQuery",
        icon: jquery,
      },
    ],
    image: workdayscheduler,
    source_code_link: "https://github.com/johnsonr84/work-day-scheduler",
    deployment_link: "https://johnsonr84.github.io/work-day-scheduler/",
  },
  {
    name: "Note Taker",
    description:
      "Easy to use note taking application using an Express back end to connect to the input data on the front end. Uniqid was used to generate unique IDs, and fs and path dependencies. ",
    tags: [
      {
        name: "HTML",
        color: "text-html",
      },
      {
        name: "CSS",
        color: "text-css",
      },
      {
        name: "JavaScript",
        color: "text-js",
      },
      {
        name: "Node",
        color: "text-node",
      },
      {
        name: "Express",
        color: "text-other",
      },
    ],
    techs: [
      {
        name: "javascript",
        icon: javascript,
      },
      {
        name: "node",
        icon: nodejs,
      },
    ],
    image: notetaker,
    source_code_link: "https://github.com/johnsonr84/note-taker",
    deployment_link: "https://fathomless-journey-02992.herokuapp.com/",
  },
  {
    name: "Team Profile Generator",
    description:
      "Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.",
    tags: [
      {
        name: "HTML",
        color: "text-html",
      },
      {
        name: "CSS",
        color: "text-css",
      },
      {
        name: "JavaScript",
        color: "text-js",
      },
      {
        name: "Node",
        color: "text-node",
      },
      {
        name: "Jest",
        color: "text-other",
      },
    ],
    techs: [
      {
        name: "javascript",
        icon: javascript,
      },
      {
        name: "node",
        icon: nodejs,
      },
    ],
    image: teamgenerator,
    source_code_link: "https://github.com/johnsonr84/team-profile-generator",
    deployment_link: "https://drive.google.com/file/d/1s9L2zryxVGlj4cFPilu1DRgQoG8T5uBw/view?usp=sharing",
  },
  {
    name: "README.md Generator",
    description:
      "Node.js command-line application that dynamically generates a README.md file from user's input.",
    tags: [
      {
        name: "JavaScript",
        color: "text-js",
      },
      {
        name: "Node",
        color: "text-node",
      },
      {
        name: "Inquirer",
        color: "text-other",
      },
    ],
    techs: [
      {
        name: "javascript",
        icon: javascript,
      },
      {
        name: "node",
        icon: nodejs,
      },
    ],
    image: readmegenerator,
    source_code_link: "https://github.com/johnsonr84/readme-generator",
    deployment_link: "https://drive.google.com/file/d/1pck591s61CiY5xHugS4O-X-CgG4XLF1x/view?usp=sharing",
  },
  {
    name: "Weather Dashboard",
    description:
      "Weather dashboard that runs in the browser, utilizes Third-party APIs and features dynamically updated HTML and CSS. The user can search for any city and view a current and aticipated 5-day weather forcast.",
    tags: [
      {
        name: "JavaScript",
        color: "text-js",
      },
      {
        name: "Node",
        color: "text-node",
      },
      {
        name: "Inquirer",
        color: "text-other",
      },
    ],
    techs: [
      {
        name: "javascript",
        icon: javascript,
      },
      {
        name: "node",
        icon: nodejs,
      },
    ],
    image: weatherdash,
    source_code_link: "https://github.com/johnsonr84/readme-generator",
    deployment_link: "https://drive.google.com/file/d/1pck591s61CiY5xHugS4O-X-CgG4XLF1x/view?usp=sharing",
  },
  {
    name: "Password Generator",
    description:
      "Randomly generated a password with a combination of numbers, upper and lowercase letters and special characters.",
    tags: [
      {
        name: "HTML",
        color: "text-html",
      },
      {
        name: "CSS",
        color: "text-css",
      },
      {
        name: "JavaScript",
        color: "text-js",
      },
    ],
    techs: [
      {
        name: "html",
        icon: html,
      },
      {
        name: "css",
        icon: css,
      },
      {
        name: "javascript",
        icon: javascript,
      },
    ],
    image: passwordgenerator,
    source_code_link: "https://github.com/johnsonr84/password-generator",
    deployment_link: "https://johnsonr84.github.io/password-generator/",
  },
  {
    name: "JavaScript Code Quiz",
    description:
      "Timed JavaScript Quiz featuring 10 code related questions. To save score simply enter initials at the end of the quiz.",
    tags: [
      {
        name: "HTML",
        color: "text-html",
      },
      {
        name: "CSS",
        color: "text-css",
      },
      {
        name: "JavaScript",
        color: "text-js",
      },
    ],
    techs: [
      {
        name: "html",
        icon: html,
      },
      {
        name: "css",
        icon: css,
      },
      {
        name: "javascript",
        icon: javascript,
      },
    ],
    image: jscodequiz,
    source_code_link: "https://github.com/johnsonr84/code-quiz-challenge",
    deployment_link: "https://johnsonr84.github.io/code-quiz-challenge/",
  },
];

export { bootcampprojects };
