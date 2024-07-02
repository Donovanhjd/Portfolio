import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    bsure,
    identifi,
    project,
    threejs,
    vuejs,
    vuetify,
    csharp,
    ssms,
    lol,
    wow
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
        title: "Front-End Developer",
        icon: [reactjs, tailwind, vuejs, vuetify, css, html, nodejs],
    },
    {
        title: "Back-End Developer",
        icon: [csharp, ssms, git],
    },
    {
        title: "Part-Time Gamer",
        icon: [lol, wow],
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
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
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
        name: "Vue",
        icon: vuejs,
    },
    {
        name: "Vuetify",
        icon: vuetify,
    },
    {
        name: "C#",
        icon: csharp,
    },
    {
        name: "SSMS",
        icon: ssms,
    },
];

const experiences = [
    {
        title: "JR Full stack Developer",
        company_name: "B-Sure Insurance Brokers",
        icon: bsure,
        iconBg: "#383E56",
        link: 'https://bsure.co.za/',
        date: "October 2019 - February 2021",
        points: [
            "Developing and maintaining web applications using Angular.js, C# & SQL.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "B-Sure Insurance Brokers",
        icon: bsure,
        iconBg: "#E6DEDD",
        link: 'https://bsure.co.za/',
        date: "February 2021 - July 2022",
        points: [
            "Redesigned a monolith to micro Services using Nuxt.js, C#, to adhere to better principles.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "IIDENTIFII",
        icon: identifi,
        iconBg: "#383E56",
        link: 'https://iidentifii.com/',
        date: "July 2022 - Current",
        points: [
            "Developing and maintaining monolith applications using primarily C#, SQL & Azure Dev Ops.",
            "Collaborating with cross-functional teams including Quality Assurance, Product Managers, Product Owners etc, as well as other developers using Jira(Agile approach).",
            "Participating in mentorship & ensuring that I pass on both technical & business logic.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial: "Testimonial here",
        name: "Name here",
        designation: "Designation",
        company: "Company name",
        image: "",
    },
    {
        testimonial: "Testimonial here",
        name: "Name here",
        designation: "Designation",
        company: "Company name",
        image: "",
    },
    {
        testimonial: "Testimonial here",
        name: "Name here",
        designation: "Designation",
        company: "Company name",
        image: "",
    },
];

const projects = [
    {
        name: "Coming Soon",
        description: "Explanation here",
        tags: [
            {
                name: "ReactJS",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: project,
        source_code_link: "https://github.com/",
    },
];

export {services, technologies, experiences, testimonials, projects};