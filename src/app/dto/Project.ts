export interface Project {

    title: string;

    description: string;

    video: string;

    github: string;

    demo: string;

    status: 'Completed' | 'In Progress';

    techStack: string[];

    features: string[];

}

export const ALLPROJECT: Project[] = [

    {
        title: 'Smart Notes Summarizer',

        description:
            'An AI-powered PDF Summarization and Study Assistant built with Angular, Spring Boot, PostgreSQL, and Gemini AI. The application allows users to upload PDF documents and automatically generates concise summaries, key points, flashcards, interactive quizzes, and interview questions. It also provides secure authentication, OTP verification, history management, export functionality, and the ability to generate fresh quiz questions for repeated practice.',

        video: '/videos/SNS.mp4',

        github: 'https://github.com/Piyush-Kumar-Tailor/Smart-Notes-Summarizer',

        demo: 'https://notessummarizer.vercel.app/',

        status: 'Completed',

        techStack: [
            'Angular',
            'TypeScript',
            'Tailwind CSS',
            'Java',
            'Spring Boot',
            'REST APIs',
            'PostgreSQL',
            'Gemini AI',
            'Spring Security',
            'JWT',
            'Brevo Email API'
        ],

        features: [
            'Secure User Registration and Authentication',
            'Email OTP Verification',
            'JWT-Based Authentication',
            'PDF Upload and Processing',
            'AI-Generated PDF Summaries',
            'Important Key Point Extraction',
            'AI-Generated Flashcards',
            'Interactive Multiple-Choice Quizzes',
            'Generate New Quiz with Fresh Questions',
            'AI-Generated Interview Questions',
            'Summary History Management',
            'PDF, Markdown and Text Export',
            'Protected User-Specific Data',
            'Responsive Mobile-Friendly Interface'
        ]
    },

    {
        title: 'Employee Management System',

        description:
            'A modern full-stack Employee Management System currently under development using Angular, Spring Boot, MySQL, and REST APIs. The application focuses on employee lifecycle management, secure backend services, responsive dashboards, and scalable enterprise architecture.',

        video: '/videos/EMS.mp4',

        github: '',

        demo: '',

        status: 'In Progress',

        techStack: [
            'Angular',
            'Spring Boot',
            'Java',
            'MySQL',
            'REST API',
            'Tailwind CSS'
        ],

        features: [
            'Employee CRUD Operations',
            'REST API Integration',
            'Responsive Dashboard',
            'Role-Based Authentication (In Progress)',
            'Search & Filtering',
            'Pagination',
            'Form Validation'
        ]
    },

    {
        title: 'Smart Surveillance & Human Analytics System',

        description:
            'An AI-powered real-time surveillance system using YOLOv8, OpenCV, TensorFlow, and Flask to detect people, perform gender classification, and generate analytics through an interactive dashboard.',

        video: '/videos/SSHA.mp4',

        github: 'https://github.com/Piyush-Kumar-Tailor/Smart-Surveillance---Human-Analytics',

        demo: '',

        status: 'Completed',

        techStack: [
            'Python',
            'YOLOv8',
            'OpenCV',
            'TensorFlow',
            'Flask'
        ],

        features: [
            'Real-Time Person Detection',
            'Gender Classification',
            'Analytics Dashboard',
            'Live Camera Streaming',
            'Object Detection',
            'Computer Vision'
        ]
    },

    {
        title: 'Candidate Management System',

        description:
            'A Java-based Candidate Management System developed using JDBC and MySQL that implements CRUD operations with a clean layered architecture using the DAO design pattern.',

        video: '/videos/CMS.mp4',

        github: 'https://github.com/Piyush-Kumar-Tailor/JDBC-Candidate-Management-System',

        demo: '',

        status: 'Completed',

        techStack: [
            'Java',
            'JDBC',
            'MySQL'
        ],

        features: [
            'Candidate CRUD Operations',
            'DAO Layer Architecture',
            'PreparedStatement',
            'Database Connectivity',
            'Input Validation'
        ]
    },

    {
        title: 'Spotify Clone',

        description:
            'A responsive music streaming web application inspired by Spotify, built using HTML, CSS, and JavaScript. The application uses JSON to manage song metadata and provides an interactive music player with seamless playback controls and a modern user interface.',

        video: '/videos/Spotify.mp4',

        github: 'https://github.com/Piyush-Kumar-Tailor/Spotify-Clone',

        demo: 'https://projectclonespotifybypk.netlify.app/',

        status: 'Completed',

        techStack: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'JSON'
        ],

        features: [
            'Play & Pause Music',
            'Previous & Next Track',
            'Dynamic Song List using JSON',
            'Music Progress Bar',
            'Responsive User Interface',
            'Modern Spotify-inspired Design'
        ]
    },

    {
        title: 'Task Management System',

        description:
            'A modern task management application built with Angular that enables users to efficiently organize, track, and manage daily tasks. The application leverages Angular Signals for reactive state management and Browser Local Storage for persistent data, providing a fast and seamless user experience without requiring a backend.',

        video: '/videos/TMS.mp4',

        github: 'https://github.com/Piyush-Kumar-Tailor/Task-Management-System-Angular',

        demo: 'https://task-management-system-angular.vercel.app/',

        status: 'Completed',

        techStack: [
            'Angular',
            'TypeScript',
            'Angular Signals',
            'HTML5',
            'Tailwind CSS',
            'Browser Local Storage'
        ],

        features: [
            'Create, Update & Delete Tasks',
            'Persistent Storage using Local Storage',
            'Reactive State Management with Angular Signals',
            'Task Completion Status',
            'Responsive User Interface',
            'Standalone Component Architecture',
            'Real-time UI Updates',
            'Clean & Modern Dashboard'
        ]
    },

    {
        title: 'Investment Calculator',

        description:
            'A responsive Investment Calculator built with Angular that helps users estimate the future value of their investments based on initial investment, annual contributions, expected return rate, and investment duration. The application leverages Angular Signals for reactive state management, built-in Pipes for currency formatting, and real-time financial calculations to deliver an intuitive user experience.',

        video: '/videos/IC.mp4',

        github: 'https://github.com/Piyush-Kumar-Tailor/Investment-Calculator',

        demo: 'https://investment-calculator-indol-two.vercel.app/',

        status: 'Completed',

        techStack: [
            'Angular',
            'TypeScript',
            'Angular Signals',
            'HTML5',
            'Tailwind CSS',
            'Angular Pipes'
        ],

        features: [
            'Real-time Investment Calculations',
            'Angular Signals for Reactive State Management',
            'Currency Formatting using Angular Currency Pipe',
            'Annual Investment Growth Breakdown',
            'Dynamic Form Validation',
            'Responsive User Interface',
            'Standalone Component Architecture',
            'Financial Data Presentation'
        ]
    }



];