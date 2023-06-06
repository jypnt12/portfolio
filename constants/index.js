
import school from'../assets/school.jpg';
import ignite from'../assets/ignite.jpg';
import blog from'../assets/blog.jpg';
import portal from'../assets/portal.png';
import port from'../assets/3dport.jpg';
import music from'../assets/music.jpg';

const projects = [
  
    {
      name: "Sisters of Mary School",
      description:
        "School website for Sisters of Mary School.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "framer-motion",
          color: "green-text-gradient",
        },
        {
          name: "styled",
          color: "pink-text-gradient",
        },
      ],
      image: school,
      link: "https://remarkable-mousse-669b0f.netlify.app/",
    },
    {
      name: "3D portfolio",
      description:
        "3d portfolio using three.js  ", 
      tags: [
        {
          name: "vite",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "mui",
          color: "pink-text-gradient",
        },
      ],
      image: port,
      link: "https://luminous-youtiao-99d26a.netlify.app/",
    },
    {
        name: "Ignite",
        description:
          "Games search engine. ", 
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "redux",
            color: "green-text-gradient",
          },
          {
            name: "api",
            color: "pink-text-gradient",
          },
        ],
        image: ignite,
        link: "https://github.com/",
      },
      {
        name: "Personal blog",
        description:
          "Personal website, using Next.js. ",
        tags: [
          {
            name: "next",
            color: "blue-text-gradient",
          },
          {
            name: "tailwind",
            color: "green-text-gradient",
          },
          {
            name: "tutorial",
            color: "pink-text-gradient",
          },
        ],
        image: blog,
        link: "https://nextjs-blog-lime-nine.vercel.app/",
      },
      {
          name: "Music player",
          description:
            "Web-based music player.", 
          tags: [
            {
              name: "react",
              color: "blue-text-gradient",
            },
            {
              name: "scss",
              color: "green-text-gradient",
            },
            {
              name: "html",
              color: "pink-text-gradient",
            },
          ],
          image: music,
          link: "https://genuine-muffin-c1e275.netlify.app/",
        },
        {
          name: "Student portal",
          description:
            "Student portal for thesis project using react. ", 
          tags: [
            {
              name: "react",
              color: "blue-text-gradient",
            },
            {
              name: "node",
              color: "green-text-gradient",
            },
            {
              name: "sql",
              color: "pink-text-gradient",
            },
          ],
          image: portal,
          link: "#",
        },
        
]

const accordionData = [
  {
    id:1,
    company:"Tsukiden Global Solutions Inc.",
    details:"Build, test and maintain Zendesk support web application based on clients’ requirements.",
    website:"tsukiden.com.ph",
    tags: [
      {
        name: "react",
        color: "white-text-gradient",
      },
      {
        name: "html",
        color: "white-text-gradient",
      },
      {
        name: "css",
        color: "white-text-gradient",
      },
      {
        name: "mui",
        color:  "white-text-gradient",
      },
      {
        name: "javascript",
        color: "white-text-gradient",
      },
      
      {
        name: "tailwind",
        color:  "white-text-gradient",
      },
    ],
  },
  
  
]
export {projects, accordionData}