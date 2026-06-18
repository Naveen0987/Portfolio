import neolithic from "../images/projects/neolithic.png";
import blood from "../images/projects/blood-donation.png";
import findjo from "../images/projects/findjo.png";
import freelearn from "../images/projects/freelearn.png";
import tindog from "../images/projects/tindog.png";

const projects = [
  {
    id: 1,
    featured: true,
    title: "Neolithic Exports",
    subtitle: "Real Client Project",
    image: neolithic,

    description:
      "Professional export business website developed for a real client with responsive UI and SEO friendly pages.",

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap"
    ],

    github: "",

    live: "https://neolithicexports.com/"
  },

  {
    id: 2,

    featured: false,

    title: "Blood Donation",

    subtitle: "Frontend",

    image: blood,

    description:
      "Blood Donation Management System built using Java, Spring Boot and MySQL.",

    tech: [
      "HTML",
      "CSS",
      "Bootstrap"
    ],

    github:"",

    live: "https://naveen0987.github.io/blood-donation/"
  },

  {
    id:3,

    featured:false,

    title:"FindJo",

    subtitle:"Frontend",

    image:findjo,

    description:
    "Modern location finder application.",

    tech:[
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap"
    ],

    github:"",

    live:"https://naveen0987.github.io/FindJo/"
  },

  {
    id:4,

    featured:false,

    title:"FREE LEARN",

    subtitle:"Learning Platform",

    image:freelearn,

    description:
    "Educational platform with responsive interface.",

    tech:[
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap"
    ],

    github:"",

    live:"https://naveen0987.github.io/FREE-LEARN/"
  },

  {
    id:5,

    featured:false,

    title:"TinDog",

    subtitle:"Bootstrap",

    image:tindog,

    description:
    "Responsive landing page built using Bootstrap.",

    tech:[
      "Bootstrap",
      "HTML",
      "CSS"
    ],

    github:"",

    live:"https://naveen0987.github.io/tindog/"
  }

];

export default projects;
