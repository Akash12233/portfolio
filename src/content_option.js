const logotext = "Akash Tayade";
const meta = {
    title: "Akash Tayade",
    description: "I’m Akash Tayade a C++ and FullStack Developer",
};

const introdata = {
    title: "I’m AKASH TAYADE",
    animated: {
        first: "I am a C++ Developer",
        second: "I am a FullStack Developer",
        third: "I code, I manage, I excel",
    },
    description: "C++ Software Engineer with hands-on experience building low-latency trading connectivity and performance-critical systems on Linux. Strong foundation in modern C++, concurrency, and system optimization, with exposure to real-time execution infrastructure in a front-office environment. Proven ability to work close to traders and deliver reliable, high-impact software.",
    your_img_url: "./assets/images/photo.png",
};

const dataabout = {
    title: "About me",
    aboutme: "With a versatile skill set spanning Python, C/C++, Javascript, Data Structures, Algorithms, and more, I thrive in software development and embrace challenges. Proficient in Agile methodologies, Scrum, and Product Management, I navigate the complexities of backlogs, burndown charts, and comparative analyses. ",
};
const worktimeline = [
    {
        jobtitle: "Software Developer",
        where: "UBS",
        date: "2025",
    },
    {
        jobtitle: "Presented Research Paper at the CVR National Conference",
        where: "Pleth-StageNet: A Novel Sleep Scoring System using Photoplethysmography for Sleep Disorder Patients",
        date: "2025",   
    },
    {
        jobtitle: " Developed the ”Travel Companion” app for the TBO Hackathon",
        where: "TBO Hackathon",
        date: "2024",
    },
    {
        jobtitle: "Product Intern",
        where: "AbcoedTech.pvt",
        date: "2023",
    },
    {
        jobtitle: "Top Coder On Coding-Ninga",
        where: "VNIT, Nagppur",
        date: "2023",
    },
    {
        jobtitle: "Qualifier in IIT-G Product Management Competition",
        where: "Online",
        date: "2023",
    },
];

const skills = [{
        name: "Python",
        value: 70,
    },
    {
        name: "Data Structure and Algorithms",
        value: 90,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "MongoDB",
        value: 60,
    },
    {
        name:"Node.js",
        value: 60,
    },
    {
        name: "C++",
        value: 80,
    }
];

const services = [
    {
        title: "C++ Systems Development",
        description: "Experienced in modern C++ (C++17/20/23), I specialize in building high-performance, low-latency systems with a strong focus on efficiency and reliability. From multithreaded architectures and networking (TCP/UDP, WebSockets) to performance optimization and memory-efficient design, I develop robust backend systems that scale under demanding, real-time workloads.",
    },
    {
        title: "Web-Development",
        description: "Experienced in MERN stack, I specialize in crafting efficient and dynamic websites. From MongoDB for flexible data storage to React for interactive UIs, I ensure seamless, full-stack development. Proficient in creating RESTful APIs and implementing responsive designs, my focus on user experience and efficient development practices results in standout websites.",
    },
    {
        title: "Product Management",
        description: "I specialize in applying MVPs and Agile methodologies, particularly Scrum, for efficient development. Proficient in backlog management and user stories, I navigate complexities to ensure streamlined processes. My commitment to Agile principles guarantees adaptability and collaboration, defining my approach to successful product management.",
    }
];

const dataportfolio = [
    {
        heading: "OrionEX – High-Frequency Trading System",
        img: require("./assets/images/orionex.png"),
        description: "Engineered a C++ ultra-low-latency cryptocurrency derivatives trading system enabling microsecond-level order placement, cancellation, and modification. Built a modular Exchange API Gateway using WebSockets and JSON-RPC (Deribit API), optimized with zero-copy message handling to minimize syscalls and maximize throughput under peak network load.",
        link: "https://github.com/Akash12233/C-High-Frequency-Trading-System-HFT",
    },
    {
        heading: "FitAI – AI-Powered Fitness Platform",
        img: require("./assets/images/fitai.png"),
        description: "Built an AI-driven fitness platform delivering personalized workout plans and interactive coaching using OpenAI APIs. Designed and deployed a scalable MERN stack system with secure JWT and Google OAuth authentication, premium subscription handling, and production-grade deployment on Netlify and Vercel.",
        link: "https://gymfitai.netlify.app/",
    },
    {
        heading: "SomniSense – Sleep Stage Classification System",
        img: require("./assets/images/somnisense.png"),
        description: "Developed a real-time sleep analytics dashboard visualizing REM, N2, N3, and Wake stages using React and Chart.js. Implemented backend pipelines with Flask, Socket.IO, and MongoDB, achieving over 99% classification accuracy using a hybrid CNN-GRU model trained on wavelet-transformed physiological signals.",
        link: "https://github.com/Akash12233/SomniSense",
    },
    {
        heading:"Vehicle Management System",
        img: require("./assets/images/vrs.png"),
        description: "A Vehicle Management System is a software application or platform designed to streamline and automate various aspects of managing a fleet of vehicles.",
        link: "https://github.com/Akash12233/VRS",
    },
    {
        heading:"SportScheduler",
        img: require("./assets/images/sport.png"),
        description: "The Sport Scheduler app is a powerful and user-friendly tool designed to streamline the process of organizing and managing sports events, matches, and schedules.",
        link: "https://github.com/Akash12233/Sport-Sceduler",
    },
    {
        heading:"LinkedIN Tracker",
        img: require("./assets/images/linkedtracker.png"),
        description: "Your go-to solution for enhanced LinkedIn networking. Utilizing local storage, it effortlessly stores links for later access.",
        link: "https://github.com/Akash12233/LinkedIn-Tracker",
    },
    {
        heading:"JPMC Task",
        img: require("./assets/images/jpmc.png"),
        description: "The goal of the task is to create a dynamic web application using React.js that reads and processes the data from the CSV file and presents it in the form of interactive graphs and visualizations.",
        link: "https://github.com/Akash12233/Akash--jpmc-task",
    },
    {
        heading:"Blogeze",
        img: require("./assets/images/blogpost.png"),
        description: "This website simplifies the blog writing process, allowing users to effortlessly craft posts on any topic. With an intuitive interface, users can quickly express their thoughts, ideas, and expertise without the complexities of traditional platforms.",
        link: "https://github.com/Akash12233/blogpost",
    },
    {
        heading:"Memories",
        img: require("./assets/images/memories.png"),
        description: "Memories is a comprehensive event management app built with React. It helps event organizers manage events, handle guest lists, upload and share media, and much more. Whether you're organizing a wedding, a corporate event, or a birthday party, Memories is designed to make your job easier and ensure your guests have a memorable experience.",
        link: "https://github.com/Akash12233/Memories",
    },
    {
        heading:"EMOINRD",
        img: require("./assets/images/EMOINRD.png"),
        description: "This project is a Sentiment Analysis Web Application built using Flask, where users can submit a CSV file or a single text input to predict the sentiment of the text (Positive, Negative, or Neutral). The application uses a machine learning model to classify the sentiment of user input based on pre-trained models, and it also provides a visual representation of the sentiment distribution.",
        link: "https://github.com/Akash12233/EMOINRD",
    },
];

const contactConfig = {
    YOUR_EMAIL: "akashtayade1504@gmail.com",
    YOUR_FONE: "+91 8669190245",
    description: " I seamlessly bridge software and product realms. Fueled by time management, risk-taking, humility, and effective communication, I embody a self-actualized approach to deliver innovative solutions. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
};

const socialprofils = {
    github: "https://github.com/Akash12233",
    linkedin: "https://www.linkedin.com/in/akash-tayade-23453322a/",
    twitter: "https://twitter.com/AkashTa47332668",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};