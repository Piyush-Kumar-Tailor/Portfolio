import { Technology } from ".";
export interface Experience {

  role: string;

  company: string;

  duration: string;

  description: string[];

  technologies: Technology[];

  icon: string;

  color: string;

}


export const EXPERIENCES: Experience[] = [

  {
    role: 'Java Full Stack Developer Intern',

    company: 'Rismarq Technologies Pvt. Ltd., Jaipur',

    duration: '22 May 2026 – Present',

    icon: 'fa-solid fa-laptop-code',

    color: 'cyan',

    description: [

      'Developing enterprise-grade full-stack web applications using Java, Spring Boot and Angular.',

      'Designing and implementing scalable RESTful APIs following layered architecture and clean coding principles.',

      'Integrating MongoDB with backend services for efficient data management.',

      'Implemented AI-powered features using Google Gemini Large Language Models.',

      'Developed an intelligent Voice AI Agent capable of natural language conversations and task automation.',

      'Collaborated with senior developers to optimize application performance and deliver production-ready software.'

    ],

    technologies: [

      {
        name: 'Java',
        icon: 'fa-brands fa-java',
        color: 'orange'
      },

      {
        name: 'Spring Boot',
        icon: 'fa-solid fa-leaf',
        color: 'green'
      },

      {
        name: 'Angular',
        icon: 'fa-brands fa-angular',
        color: 'red'
      },

      {
        name: 'MongoDB',
        icon: 'fa-solid fa-database',
        color: 'green'
      },

      {
        name: 'REST API',
        icon: 'fa-solid fa-code',
        color: 'cyan'
      },

      {
        name: 'Gemini AI',
        icon: 'fa-solid fa-robot',
        color: 'purple'
      },

      {
        name: 'Voice AI',
        icon: 'fa-solid fa-microphone',
        color: 'pink'
      },

      {
        name: 'Git',
        icon: 'fa-brands fa-git-alt',
        color: 'orange'
      }

    ]

  },

  {

    role: 'Machine Learning Intern',

    company: 'GRRAS Solutions Pvt. Ltd., Jaipur',

    duration: 'Jun 2025 – Aug 2026',

    icon: 'fa-solid fa-brain',

    color: 'blue',

    description: [

      'Developed Computer Vision applications using YOLOv8 and OpenCV.',

      'Built Machine Learning models using TensorFlow and Python.',

      'Created Flask-based backend services for AI applications.',

      'Worked on image processing, object detection and model optimization.',

      'Improved prediction accuracy through data preprocessing and testing.'

    ],

    technologies: [

      {
        name: 'Python',
        icon: 'fa-brands fa-python',
        color: 'yellow'
      },

      {
        name: 'TensorFlow',
        icon: 'fa-solid fa-brain',
        color: 'orange'
      },

      {
        name: 'YOLOv8',
        icon: 'fa-solid fa-camera',
        color: 'red'
      },

      {
        name: 'OpenCV',
        icon: 'fa-solid fa-eye',
        color: 'green'
      },

      {
        name: 'Flask',
        icon: 'fa-solid fa-flask',
        color: 'cyan'
      }

    ]

  },

  {

    role: 'Python Developer Intern',

    company: 'Upflairs Pvt. Ltd., Jaipur',

    duration: 'Jun 2024 – Jul 2024',

    icon: 'fa-solid fa-code',

    color: 'green',

    description: [

      'Developed backend applications using Python and Flask.',

      'Designed REST APIs for web applications.',

      'Integrated MySQL databases with backend services.',

      'Used Git and GitHub for version control and collaborative development.',

      'Enhanced debugging, testing and backend optimization skills.'

    ],

    technologies: [

      {
        name: 'Python',
        icon: 'fa-brands fa-python',
        color: 'yellow'
      },

      {
        name: 'Flask',
        icon: 'fa-solid fa-flask',
        color: 'cyan'
      },

      {
        name: 'REST API',
        icon: 'fa-solid fa-code',
        color: 'blue'
      },

      {
        name: 'MySQL',
        icon: 'fa-solid fa-database',
        color: 'orange'
      },

      {
        name: 'Git',
        icon: 'fa-brands fa-git-alt',
        color: 'red'
      }

    ]

  }

];

