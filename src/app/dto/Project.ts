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
        title: 'Employee Management System',

        description:
            'A modern full-stack Employee Management System currently under development using Angular, Spring Boot, MySQL, and REST APIs. The application focuses on employee lifecycle management, secure backend services, responsive dashboards, and scalable enterprise architecture.',

        video: '/videos/EMS.mp4',

        github: 'https://github.com/Piyush-Kumar-Tailor/employee-management-system',

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

        github: '',

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
        title: 'Spam Email Detection System',

        description:
            'A machine learning application that classifies emails as Spam or Ham using Natural Language Processing, TF-IDF vectorization, and the Naive Bayes algorithm.',

        video: '/videos/SHED.mp4',

        github: '',

        demo: '',

        status: 'Completed',

        techStack: [
            'Python',
            'Scikit-Learn',
            'NLP',
            'TF-IDF'
        ],

        features: [
            'Spam Classification',
            'Natural Language Processing',
            'TF-IDF Vectorization',
            'Naive Bayes Model',
            'Email Prediction'
        ]
    },

    {
        title: 'Candidate Management System',

        description:
            'A Java-based Candidate Management System developed using JDBC and MySQL that implements CRUD operations with a clean layered architecture using the DAO design pattern.',

        video: '/videos/CMS.mp4',

        github: '',

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

        github: '',

        demo: '',

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
    }

];