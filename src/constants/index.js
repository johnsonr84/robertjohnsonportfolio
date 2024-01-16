import {
    frontend,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    stv,
    teqtank,
    posh,
    edx,
    noorda,
    amari,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "tech",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "testimonials",
      title: "Testimonials",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: backend,
    },
    {
      title: "Fullstack Developer",
      icon: frontend,
    },
    {
      title: "Web" + " " + "Developer",
      icon: web,
    },
    {
      title: "Bootcamp Teaching Assistant",
      icon: creator,
    },
  ];

  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Fullstack Engineer",
      company_name: "Strategic Tech Ventures",
      icon: stv,
      iconBg: "#383E56",
      date: "July 2023 - Present",
      points: [
        "Spearheaded the design and development of robust software solutions, leveraging cutting-edge technologies.",
        "Implemented a client-centric approach, ensuring customized applications tailored to meet the specific needs of our clientele.",
        "Contributed to the creation of scalable and efficient software systems that significantly enhanced the overall functionality and performance.",
        "Collaborated with cross-functional teams to deliver web applications that not only met but exceeded client expectations, resulting in increased client satisfaction.",
      ],
    },
    {
      title: "Bootcamp Instructional Specialist",
      company_name: "2U/edX",
      icon: edx,
      iconBg: "#E6DEDD",
      date: "Sept 2021 - Present",
      points: [
        "Mentored, encouraged, and supported students throughout the edX Full Stack Coding Bootcamp, providing guidance on activities, assignments, and projects to help them succeed.",
        "Collaborated with Instructors to develop and refine course module objectives, created engaging class content, and assisted with student office hours to foster a productive learning environment.",
        "Provided detailed and constructive feedback on coding projects, enabling students to identify areas for improvement and build strong coding skills.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "TeqTank",
      icon: teqtank,
      iconBg: "#383E56",
      date: "July 2022 - June 2023",
      points: [
        "Style architecting software platform pages and modules to modernize and streamline UI/UX.",
        "Maintaining and creating client and customer-facing features, utilizing Angular and TypeScript.",
        "Web development for in-house clientele in .NET, Blazor, C# and Bootstrap.",
        "Produced clean, extensible and production ready code for existing back office portal.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Perfectly Posh",
      icon: posh,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - July 2023",
      points: [
        "Designed, developed, and maintained an internal consultant portal for Posh using React, ensuring optimal performance, reliability, and user experience.",
        "Collaborated with cross-functional teams to maintain and create client and customer- facing features, such as user interfaces, web pages, and mobile applications, resulting in improved user experience and increased revenue.",
        "Developed robust code to handle complex business logic and large data fetches, enhancing application performance and scalability.",
        "Conducted thorough peer code reviews and followed coding standards, best practices, and test cases, ensuring code quality, readability, and maintainability.",
      ],
    },
    {
      title: "Fullstack Developer",
      company_name: "Noorda College of Osteopathic Medicine",
      icon: noorda,
      iconBg: "#E6DEDD",
      date: "Oct 2021 - May 2022",
      points: [
        "Fullstack platform development built from the ground up utilizing MongoDB, Express, React and Node (MERN).",
        "Spearheaded the development of a new platform from scratch, resulting in a high-performing, scalable, and secure application that met the needs of stakeholders and users.",
        "Designed wireframes using Adobe XD to streamline the development process and reduce project-to-production times by 30%, enabling the team to rapidly iterate on designs and deliver high-quality features to end-users.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Amari Consulting",
      icon: amari,
      iconBg: "#E6DEDD",
      date: "June 2016 - June 2017",
      points: [
        "Dynamic web development in HTML and CSS, with a specialized focus on WordPress, crafting visually appealing and functional websites",
        "Spearheaded the creation of front-end content for multiple client websites within the WordPress framework, employing collaborative pair programming with backend developers to ensure seamless website launches.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Led the redesign and development of visual content for the Amari website, while concurrently revitalizing numerous client projects through the creation of captivating Photoshop content, enhancing the overall aesthetic and functionality.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "His dedication to software engineering is truly unbelievable. However, his track record makes his tale easier to swallow. I see Robert's progress as 2x to 4x not just from raw talent alone but his willingness to practice and learn.",
      name: "Scott Blanch",
      designation: "Senior Software Engineer",
      company: "Ancestry",
      image: "https://media.licdn.com/dms/image/C5603AQHcHuxQnw7qCA/profile-displayphoto-shrink_400_400/0/1642100557504?e=1710374400&v=beta&t=-3IjvupA3FiN162RVFbC7N_O709C7Ok5RLn9WwAKb4U",
    },
    {
      testimonial:
        "In addition to his technical skills, Robert is also a supportive colleague who is always willing to lend a hand and share his knowledge. His positive attitude and collaborative approach make him a valuable asset to any team.",
      name: "Brandon Schumacher",
      designation: "Full Stack Developer",
      company: "2U/ edX",
      image: "https://media.licdn.com/dms/image/D5603AQHgYZNth1Hd6g/profile-displayphoto-shrink_100_100/0/1679866985106?e=1710979200&v=beta&t=bguHoTnu4kTXO7eutLFcxSBfVgiT0UMboG-HopqHc_0",
    },
    {
      testimonial:
        "He worked hard every day and put in extra hours during the 12-week cohort. He has a great background that allows him to easily interact and communicate with people across various industries.",
      name: "Garret Clark",
      designation: "Managing Director",
      company: "Silicon Slopes",
      image: "https://media.licdn.com/dms/image/C4D03AQFQpn4T4tvlDg/profile-displayphoto-shrink_100_100/0/1620687888579?e=1710979200&v=beta&t=2rCWb898yCvoQHLi8eq5JJBkc5ac5W1j_MAYYG90LZw",
    },
    {
      testimonial:
        "I have worked with Robert on several occasions. His vast experience in software development has been a huge resource for me and many other developers alike. I look forward to the next chance we get to work together.",
      name: "Jon Cabot",
      designation: "Software Engineer",
      company: "TVI MarketPro3",
      image: "https://media.licdn.com/dms/image/C5603AQHiSM924n9Q2Q/profile-displayphoto-shrink_100_100/0/1651195966267?e=1710979200&v=beta&t=qs-BLXdUMol-9pSe0PFDKwbPVDmUSwv8-DqyT7Sa9BA"
    },
    {
      testimonial:
        "His mastery of everything related to Javascript and software development is awe-inspiring. I gained so much knowledge about coding, researching, and best practices, thanks to Rob. It was such an honor to work with him.",
      name: "Sachi Takaoka",
      designation: "JavaScript Developer",
      company: "Bootcamp Student",
      image: "https://media.licdn.com/dms/image/D5635AQGMfBmB3aJrAA/profile-framedphoto-shrink_100_100/0/1697253825820?e=1705914000&v=beta&t=FpUiXVtYNYTY9Ej0LV0ERHtk50MhnQ9RhaCwCd-A8n8",
    },
    {
      testimonial:
        "Rob is really smart and one of the most hardworking people I know. I've worked with him and watched him learn and grow as he's been studying at The Iron Yard and he is a quick learner and an excellent communicator.",
      name: "Jason Larsen",
      designation: "Software Engineering Manager",
      company: "Mavenlink",
      image: "https://media.licdn.com/dms/image/C5603AQHoNpvY7OMqBw/profile-displayphoto-shrink_100_100/0/1525626655549?e=1710979200&v=beta&t=Okd2oKzSaDamd4w8uuJL5BxCKxDN-LvvMd2zEF9tXlU",
    },
    {
      testimonial:
        "Rob has been such a delight to work with! Rob is always up for a challenge and always approaches problems with an open mind. I am always thrilled to work with Rob because he has such an excellent personality. Anyone would be extremely lucky to work with him.",
      name: "Kelly Furness",
      designation: "Software Engineer",
      company: "Articulate",
      image: "https://media.licdn.com/dms/image/C5603AQEtCW2yTQpLZw/profile-displayphoto-shrink_100_100/0/1653683341674?e=1710979200&v=beta&t=H__dslacnV-goaKUu8FC0hUDJGK96Xa9b5ktSnJMcsA",
    },
  ];
  
  const projects = [
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
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };