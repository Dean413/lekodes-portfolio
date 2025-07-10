import {
  sql,
  mongodb,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  edunet,
  weatherpedia,  
  eduskill,
  abccapital
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

  {
    id: "location",
    title: "Location"
  }
];

export const services = [
  { title: "Javascript", icon: javascript },
  { title: "React", icon: reactjs },
  { title: "tailwind", icon: tailwind },
  { title: "Html", icon: html },
  { title: "Nodejs", icon: nodejs },
  { title: "mySQL", icon: sql },
  { title: "Mongodb", icon: mongodb },
  { title: "Css", icon: css },
   
];



export const experiences = [
  {
    title: "Junior Web-Developer",
    company_name: "ABC Capital Limited",
    icon: abccapital, // replace with your actual icon
    iconBg: "#161329",
    date: "March 2024 - June 2024",
    points: [
      "Built and optimized responsive web interfaces using React.js and Tailwind CSS.",
      "Collaborated with designers and backend developers to implement dynamic user-facing features.",
      "Managed, edited and updated content on the website through superbase",
    ],
  },
  {
    title: "Full Stack Developer (Freelance)",
    company_name: "Freelance Projects",
    icon: eduskill, // replace with your actual icon
    iconBg: "#161329",
    date: "Jan 2023 - Present",
    points: [
      "Designed and deployed full-stack web applications using React.js, Node.js, and MySQL.",
      "Developed admin dashboards, authentication systems, and contact forms with secure API endpoints.",
      "Deployed projects on Vercel and Render, integrating email and database solutions like Supabase.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Coursera",
    icon: edunet, // replace with your actual icon
    iconBg: "#161329",
    date: "July 2022 - Dec 2022",
    points: [
      "Learned and applied best practices in HTML, CSS, JavaScript, and modern frontend frameworks.",
      "Built multiple landing pages and personal portfolio projects during the internship.",
      "Gained hands-on experience with Git, GitHub, and deploying projects on Netlify and Vercel.",
    ],
  },
];

export const projects = [
  {
    name: "QuickFund",
    description:
      "A micro-lending platform where users can apply for short-term loans, manage repayments, and view transaction history. Built with a focus on modern UI and serverless backend.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
      { name: "Vercel", color: "blue-text-gradient" },
    ],
    image: weatherpedia, // Replace with imported image or URL
    source_code_link: "https://github.com/yourusername/quickfund",
  },
  {
    name: "Lekodes Portfolio",
    description:
      "A modern developer portfolio showcasing projects, skills, and contact form integrated with serverless email sending functionality using Vercel Functions.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Framer Motion", color: "green-text-gradient" },
      { name: "Vercel Functions", color: "pink-text-gradient" },
      { name: "EmailJS/Nodemailer", color: "blue-text-gradient" },
    ],
    image: weatherpedia, // Replace with imported image or URL
    source_code_link: "https://github.com/yourusername/lekodes-portfolio",
  },
  {
    name: "Phinex Construction",
    description:
      "A professional construction company website showcasing services, projects, and client-focused design using Bootstrap layout, animated transitions, and typewriter effects.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Bootstrap", color: "green-text-gradient" },
      { name: "Framer Motion", color: "pink-text-gradient" },
      { name: "React Typewriter", color: "blue-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/yourusername/phinex-construction",
  },
  {
    name: "Contact API",
    description:
      "Serverless API that handles contact form submissions and sends emails using Nodemailer and environment variables securely stored on Vercel.",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "Nodemailer", color: "green-text-gradient" },
      { name: "Vercel", color: "pink-text-gradient" },
    ],
    image: weatherpedia, // Replace with imported image or URL
    source_code_link: "https://github.com/yourusername/contact-api",
  },
  {
    name: "Trekarios Vet Clinic",
    description:
      "A responsive veterinary clinic website built for Trekarios, featuring sleek animations, service sections, appointment form, and modern design optimized for all devices.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "Framer Motion", color: "pink-text-gradient" },
    ],
    image: weatherpedia, // replace with actual image path or import
    source_code_link: "https://github.com/yourusername/trekarios-vet-clinic",
  },
  {
    name: "DevTerminal",
    description:
      "A fun terminal-style web portfolio where users can run commands like `about`, `projects`, and `contact` in a simulated CLI.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: weatherpedia, // Replace with imported image or URL
    source_code_link: "https://github.com/yourusername/devterminal",
  },
];

