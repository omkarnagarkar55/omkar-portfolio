/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Omkar Nagarkar",
  title: "Hi, I'm Omkar Nagarkar",
  subTitle: emoji(
    "A passionate Full Stack Software Engineer 🚀 with 2+ years of experience building scalable web applications and cloud solutions. Currently pursuing MS in Software Engineering at San Jose State University. Specialized in React, Node.js, AWS, and modern development practices."
  ),
  resumeLink: "", // Add your actual resume link
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/omkarnagarkar55",
  linkedin: "https://www.linkedin.com/in/omkarnagarkar/",
  gmail: "omkarnagarkar55@gmail.com",
  // gitlab: "https://gitlab.com/omkarnagarkar55",
  // facebook: "https://www.facebook.com/omkarnagarkar55",
  medium: "https://medium.com/@omkarnagarkar55",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "GraphQL",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "fas fa-memory"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fas fa-cogs"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "San Jose State University",
      // logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Software Engineering",
      duration: "August 2023 - May 2025",
      desc: "Enterprise Distributed Systems, Data Mining, System Security, Application Development, Software System Design.",
      descBullets: []
    },
    {
      schoolName: "Savitribai Phule Pune University",
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "August 2017 - July 2021",
      desc: "Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Web Technologies, Advance Data Structures.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Cloud & DevOps",
      progressPercentage: "75%"
    },
    {
      Stack: "Database Design",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cloud Engineering Intern",
      company: "Enpro Inc.",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2024 – Aug 2024",
      desc: "Worked on cloud infrastructure and automation solutions to improve deployment efficiency and system reliability.",
      descBullets: []
    },
    {
      role: "Software Engineer",
      company: "Xoriant Solutions Pvt. Ltd.",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "July 2021 – July 2023",
      desc: "Full-stack developer responsible for building enterprise web applications and leading technical initiatives.",
      descBullets: []
    },
    {
      role: "Machine Learning Intern",
      company: "GenioBits Pvt. Ltd.",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Dec 2019 – Mar 2020",
      desc: "Developed machine learning models and data analysis solutions for business intelligence applications.",
      descBullets: []
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle:
    "Showcasing my expertise in full-stack development and cloud technologies",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Ekko: Scalable Microblogging Platform",
      projectDesc:
        "A Twitter-like microblogging platform built with modern technologies. Features real-time messaging, user authentication, post interactions, and a responsive design. Implemented with React, TypeScript, Node.js, GraphQL, and PostgreSQL with Redis caching.",
      footerLink: [
        {
          name: "Visit Github Repo",
          url: "https://github.com/AtharvaJadhav/scalable-microblogging-platform"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "AI-Powered Code Review Tool",
      projectDesc:
        "Machine learning-based code review automation tool that analyzes code quality, suggests improvements, and detects potential bugs. Built using Python, TensorFlow, and integrated with GitHub Actions.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "#"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "IBM Data Science Professional Certification",
      subtitle:
        "Comprehensive certification covering Python, SQL, machine learning, and data visualization techniques.",
      image:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~EGJVDZESH3NZ/CERTIFICATE_LANDING_PAGE~EGJVDZESH3NZ.jpeg",
      imageAlt: "IBM Data Science Professional Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/professional-cert/EGJVDZESH3NZ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=prof"
        }
      ]
    },
    {
      title: "Stanford Machine Learning",
      subtitle:
        "Advanced course covering supervised learning, unsupervised learning, and best practices in machine learning.",
      image:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~FHE7UMA7Z4GG/CERTIFICATE_LANDING_PAGE~FHE7UMA7Z4GG.jpeg",
      imageAlt: "Stanford Machine Learning",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/FHE7UMA7Z4GG?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs & Articles",
  subtitle:
    "I love sharing my knowledge and experiences through technical writing. Here are some of my featured articles.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@omkarnagarkar55/building-scalable-microservices-with-nodejs",
      title: "Building Scalable Microservices with Node.js and Docker",
      description:
        "A comprehensive guide to designing and implementing microservices architecture using Node.js, Docker, and Kubernetes for enterprise applications."
    },
    {
      url: "https://medium.com/@omkarnagarkar55/aws-infrastructure-automation",
      title: "AWS Infrastructure Automation with Terraform",
      description:
        "Learn how to automate your AWS infrastructure deployment using Terraform, including best practices for state management and CI/CD integration."
    },
    {
      url: "https://medium.com/@omkarnagarkar55/react-performance-optimization",
      title: "React Performance Optimization: Advanced Techniques",
      description:
        "Discover advanced React performance optimization techniques including memoization, code splitting, and bundle analysis to build lightning-fast applications."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "omkarnagarkar55@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  twitterDetails,
  isHireable
};
