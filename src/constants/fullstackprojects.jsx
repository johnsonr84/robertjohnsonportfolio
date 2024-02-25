import { carrent, jobit, slackclone } from "../assets";

const fullstackprojects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Slack Clone",
    description:
      "Full Stack App - Slack Clone built with React, Redux, Styled Components & Firebase Hooks functionality and user authentication via gmail deployed to Firebase.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "auth",
        color: "text-red",
      },
      {
        name: "firebase",
        color: "text-orange",
      },
      {
        name: "styled components",
        color: "text-pink",
      },
    ],
    image: slackclone,
    source_code_link: "https://github.com/johnsonr84/slack-clone",
    deployment_link: "https://slack-clone-dd-71ab5.web.app/",
  },
];

export { fullstackprojects };
