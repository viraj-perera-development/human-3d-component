import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    meta,
    google,
    aulab,
    portfolio,
    threejs,
    bootstrap,
    next,
    vite,
    mysql,
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
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "NextJS",
      icon: next,
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
      name: "Vite",
      icon: vite,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Meta React Native Specialization",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "2023 - Present",
      points: [
        "Mobile Development",
        "Programming with JavaScript",
        "Version Control",
        "ReactJS",
        "React Native",
        "Working with Data",
        "Principles of UX/UI Design",
      ],
    },
    {
      title: "Google IT Support Professional Certificate",
      company_name: "Google",
      icon: google,
      iconBg: "#E6DEDD",
      date: "2023 - Present",
      points: [
        "Technical Support Fundamentals",
        "The Bits and Bytes of computer networking",
        "Operating System and Becoming a Power User",
        "System Administration and IT infrastructure Services",
        "IT Automation",
        "IT Security",
      ],
    },
    {
      title: "How to react",
      company_name: "Aulab",
      icon: aulab,
      iconBg: "#E6DEDD",
      date: "Nov 2022",
      points: [
        "Gestione dello stato con useState",
        "Condivisione di uno stato usando la “props drilling”",
        "Condivisione di uno stato usando React Context",
        "Gestiamo uno stato avanzato: useReducer + Context",
        "UI State vs Server Cache State",
        "Come creare un Custom Hook in React",
        "Server Cache State con React Query",
        "Global UI State con Recoil.js",
        "Server Cache State con React Query",
        "Custom Hooks per gestire i nostri stati",
      ],
    },
    {
      title: "Tailwind CSS",
      company_name: "Aulab",
      icon: aulab,
      iconBg: "#E6DEDD",
      date: "Giu 2022",
      points: [
        "Responsive Design",
        "Pseudo stati e animazioni",
        "Dark mode",
        "Tailwind e il processore PostCSS",
        "Ottimizzare le performance",
        "Personalizzazione tema Tailwind",
        "Class on the fly",
      ],
    },
    {
      title: "Master in Full Stack Developping",
      company_name: "Aulab",
      icon: aulab,
      iconBg: "#E6DEDD",
      date: "2022 - 2021",
      points: [
        "HTML 5",
        "CSS 3",
        "Bootstrap 5",
        "JavaScript",
        "PHP 8",
        "Laravel 8",
        "Database relazionali MySQL",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Servizio professionale e competente, il web developer ha realizzato il mio sito web con attenzione ai dettagli e comunicazione tempestiva. Altamente consigliato!",
      name: "Alessio B.",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      testimonial:
        "Collaborazione eccellente, il web developer ha compreso le mie esigenze trasformando la mia visione in un sito esteticamente piacevole e ottimizzato. Supporto post-lancio eccezionale!",
      name: "Amaya P.",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      testimonial:
        "Impressionante capacità nel tradurre idee in un sito web funzionale e di alta qualità. Approccio attento ai dettagli e rispetto dei tempi concordati. Altamente raccomandato!",
      name: "Enrica Z.",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  ];
  
  const projects = [
    {
      name: "3D Portfolio",
      description:
        "Sito web stile portfolio con form di contatto sviluppato con emailjs. Il sito ha una grafica moderna e accattivante grazie a render 3D realizzate con la libreria threeJS oltre a tecnologie come reactJs e Tailwind CSS",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/viraj-perera-development/3d-portfolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };