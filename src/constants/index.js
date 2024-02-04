import {
    mobile,
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
    meta,
    starbucks,
    tesla,
    shopify,
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
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      title: "UI/UX Designer & Front-end Developer",
      company_name: "InnovateNow Technologies",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Led the UI/UX design process, creating wireframes, mockups, and interactive prototypes for web and mobile applications.",
        "Implemented responsive web designs using HTML5, CSS3, and JavaScript frameworks like Angular and Bootstrap.",
        "Conducted user research and usability testing to gather feedback and iterate on design solutions.",
        "Collaborated with cross-functional teams including product managers and developers to deliver intuitive and visually appealing user interfaces.",
      ],
    },
    {
      title: "Mobile App Developer & UX Researcher",
      company_name: "AppSolutions Co.",
      icon: tesla,
      iconBg: "#383E56",
      date: "April 2021 - Nov 2021",
      points: [
        "Designed and developed user-friendly mobile applications for iOS and Android platforms using Swift, Java, and Kotlin.",
        "Conducted user research and analysis to identify user needs and preferences, informing the design and development process.",
        "Implemented user interface enhancements based on usability testing and feedback gathered from user studies.",
        "Collaborated with cross-functional teams to prioritize features and enhancements based on user insights and business goals.",
      ],
    },
    {
      title: "Web Developer & Front-end Engineer",
      company_name: "Virtual Innovations Inc.",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Oct 2023",
      points: [
        "Implemented front-end interfaces using HTML5, CSS3, and JavaScript frameworks such as React.js & threejs to create immersive user experiences.",
        "Collaborated closely with 3D artists and designers to integrate high-fidelity 3D models and animations into web environments.",
        "Optimized website performance and user interface responsiveness to ensure seamless interaction across desktop and mobile devices.",
        "Conducted code reviews and contributed to the continuous improvement of development processes and best practices within the team.",
      ],
    },
    {
      title: "Founder & Lead Web Developer",
      company_name: "Miele x Riquueza",
      icon: meta,
      iconBg: "#383E56",
      date: "Feb 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Your expertise in web development brought our vision to life on the digital landscape.",
      name: " Dionne Green",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Akinfolarin's dedication and skillset elevated our online platform beyond our expectations.",
      name: "Ayo Richard",
      designation: "CEO",
      company: "SWS ",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Fola's contributions were instrumental in enhancing our online visibility, resulting in significant traffic growth",
      name: "Jessica Adams ",
      designation: "CEO",
      company: "Fiona's Drive2ru",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
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
      source_code_link: "https://mielexriqueza.com/",
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