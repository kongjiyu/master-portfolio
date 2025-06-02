/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kong Ji Yu's Portfolio",
  description:
    "Driven by creativity and technology, I focus on building practical, scalable, and impactful solutions across software development and digital systems to help businesses grow.",
  og: {
    title: "Kong Ji Yu Portfolio",
    type: "website",
    url: "https://kongjiyu.github.io", // <-- You can replace with your actual portfolio URL
  },
};

//Home Page
const greeting = {
  title: "Kong Ji Yu",
  logo_name: "KongJiYu",
  nickname: "Ji Yu",
  subTitle:
    "Focused on delivering innovative digital solutions, combining technology and strategy to support business growth and long-term success.",
  resumeLink:
    "https://drive.google.com/file/d/16TjrWCBkxEVe7au2_TyEUId6Lzz-4BkN/view?usp=sharing",
  portfolio_repository: "https://github.com/kongjiyu/master-portfolio",
  githubProfile: "https://github.com/kongjiyu",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/kongjiyu",
  // linkedin: "https://www.linkedin.com/in/ji-yu-kong-249516279/",
  // gmail: "kongjiyu0198@gmail.com",
  // gitlab: ".",
  // facebook: ".",
  // twitter: ".",
  // instagram: "https://www.instagram.com/kongjiyu0198/"

  {
    name: "Github",
    link: "https://github.com/kongjiyu",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ji-yu-kong-249516279/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:kongjiyu0198@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/kongjiyu0198/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Oracle Cloud",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#EA1b22",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/kongjiyu0198/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title:
        "Tunku Abdul Rahman University of Management and Technology (TAR UMT)",
      subtitle: "Diploma in Computer Science",
      logo_path: "tarumt-logo.png",
      alt_name: "TARUMT",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ Studied core subjects including Data Structures, Algorithms, Database Systems, Operating Systems, and Computer Networks.",
        "⚡ Completed various practical projects focusing on software development, web applications, and system design.",
        "⚡ Gained strong foundation in programming, problem-solving, and applied computing skills.",
      ],
      website_link: "https://tarc.edu.my/",
    },
    {
      title:
        "Tunku Abdul Rahman University of Management and Technology (TAR UMT)",
      subtitle: "Bachelor's Degree in Software Engineering",
      logo_path: "tarumt-logo.png",
      alt_name: "TARUMT",
      duration: "2025-2027",
      descriptions: [
        "⚡ Planning to further my studies in Software Engineering to deepen my knowledge in advanced computing, systems architecture, and software design.",
      ],
      website_link: "https://tarc.edu.my/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "Currently gaining industry experience in CRM, cloud, and software development fields. Experienced in CRM configuration, customer communication, cloud system setup, data engineering, system analysis, and website development projects.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "CRM Consultant",
          company: "Dr.Factory",
          company_url: "#",
          logo_path: "dr-factory-logo.png",
          duration: "2025 - Present",
          location: "Malaysia",
          description:
            "Provide CRM consulting services for clients, including system configuration, process optimization, and customer training to improve operational efficiency and business performance.",
          color: "#0077B5",
        },
        // {
        //   title: "Founder",
        //   company: "K&E Tech Innovations",
        //   company_url: "#",
        //   logo_path: "ketech_logo.png",
        //   duration: "2024 - Present",
        //   location: "Malaysia",
        //   description:
        //     "Founded K&E Tech Innovations focusing on website development services, delivering customized web solutions for businesses, and managing full-stack development projects.",
        //   color: "#F24E1E",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "CRM & Cloud Intern",
          company: "Global Genesis",
          company_url: "https://www.ggenysis.com/",
          logo_path: "global-genesis-logo.jpeg",
          duration: "2024",
          location: "Malaysia",
          description:
            "Worked on CRM configuration, cloud infrastructure setup, customer communications, data engineering, system analysis, and conducted CRM system demos for client onboarding.",
          color: "#FFCA28",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects involve CRM system implementation, website development, cloud configuration, and system analysis. I focus on building practical, scalable, and customized solutions that meet real business needs.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, CRM, Cloud and Opensource Development.",
  },
  blogSection: {
    // title: "Blogs",
    // subtitle:
    //   "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    // link: "https://blogs.ashutoshhathidara.com/",
    // avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "19, Jalan Kampung Wira Jaya, Taman Melati, 53300 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
    locality: "Kuala Lumpur",
    country: "Malaysia",
    region: "Wilayah Persekutuan Kuala Lumpur",
    postalCode: "53300",
    streetAddress: "19, Jalan Kampung Wira Jaya, Taman Melati",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/nCcHkTXUZ4aDs1HN8",
  },
  phoneSection: {
    title: "Contact No.",
    subtitle: "+60 10-240 7930",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
