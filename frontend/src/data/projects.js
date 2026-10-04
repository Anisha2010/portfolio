export const projects = [
  {
    id: 1,
    slug: 'cadtech',
    title: 'CadTech Solution',
    subtitle: 'CAD Learning Management System',
    category: 'Full Stack',
    shortDescription:
      'A full-stack learning platform for CAD students, instructors and admins with structured course delivery and enrollment flows.',
    description:
      'A full-stack learning platform designed for CAD courses with student, instructor and admin workflows.',
    longDescription:
      'CadTech Solution is a full-stack LMS focused on CAD education, allowing learners to access courses, complete enrollments and progress through structured learning resources within a secure product experience.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay', 'Authentication'],
    features: [
      'Authentication',
      'Role-based access',
      'Course management',
      'Course publishing',
      'Enrollment',
      'Payments',
      'Learning player',
      'Admin dashboard',
      'Student management',
      'Email verification',
      'OTP login',
      'Forgot password',
      'OAuth',
    ],
    problem:
      'CAD learners need a structured platform where courses, learning resources, enrollment and progress can be managed from a single system.',
    solution:
      'I built a full-stack LMS with role-based access, course publishing, enrollment, payments and a protected learning experience.',
    challenges: [
      'Role-based access and protected routes',
      'Enrollment ownership and access control',
      'Payment flow integration for course purchases',
      'Course publishing and admin workflows',
      'Authentication and secure API flow',
      'Frontend and backend state management across content and payments',
    ],
    images: ['/images/cadtech.png', '/images/pc.jpg'],
    liveUrl: 'https://frontend-taupe-one-49.vercel.app',
    githubUrl: 'https://github.com/Anisha2010/cad-tech',
    featured: true,
  },
  {
    id: 2,
    slug: 'movers-packers',
    title: 'Movers & Packers',
    subtitle: 'Service booking workflow platform',
    category: 'Full Stack',
    shortDescription:
      'A booking-focused platform designed to simplify moving and packing service workflows for customers and service teams.',
    description:
      'A full-stack platform for managing moving and packing service workflows.',
    longDescription:
      'Movers & Packers is a service-driven web application built to streamline booking, service management and dashboard workflows in a responsive full-stack experience.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Authentication'],
    features: [
      'Booking workflow',
      'Service management',
      'Authentication',
      'Admin dashboard',
      'Responsive customer experience',
      'API-driven data handling',
    ],
    problem:
      'Customers and service teams need a simpler, more organized way to manage moving and packing requests without losing visibility across workflows.',
    solution:
      'I built a multi-step booking and management experience with a user-friendly interface, admin controls and a scalable backend flow.',
    challenges: [
      'Designing a clear booking workflow for a service-based business',
      'Separating customer and admin responsibilities in the app',
      'Managing booking data reliably through the dashboard flow',
      'Keeping the interface responsive across devices',
    ],
    images: ['/images/movers.png', '/images/img.png'],
    liveUrl: 'https://movers-packers-omega.vercel.app/',
    githubUrl: 'https://github.com/Anisha2010/movers_packers',
    featured: true,
  },
  {
    id: 3,
    slug: 'portfolio',
    title: 'Personal Portfolio Website',
    subtitle: 'Responsive React portfolio',
    category: 'Frontend',
    shortDescription:
      'A responsive developer portfolio built to showcase my projects, technical skills, education, and development journey with a modern React-based UI.',
    description:
      'A responsive developer portfolio for presenting my projects, skills, journey and contact details.',
    longDescription:
      'This portfolio is a React-based developer profile site built to present projects, technical skills, education, development journey and contact information in a clean responsive experience.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'React Router', 'Responsive Design'],
    features: [
      'Responsive portfolio layout',
      'Separated route-based pages',
      'Project overview cards',
      'Theme toggle',
      'Resume access',
      'Contact form validation',
      'Scroll-to-top behavior',
      'Accessible navigation',
    ],
    problem:
      'A developer portfolio needs a clear structure for presenting projects, skills, education and contact details without sacrificing readability or responsiveness.',
    solution:
      'I built a React portfolio with route-based pages, reusable components and a consistent theme to present my work in a clean, maintainable layout.',
    challenges: [
      'Organizing multiple portfolio sections into a route-based experience',
      'Maintaining responsive behavior across page layouts',
      'Keeping the design consistent with the existing theme system',
      'Ensuring accessible navigation and clear calls to action',
    ],
    images: ['/images/portfolio.png', '/images/img.png'],
    liveUrl: 'https://anisha2010.github.io/portfolio/',
    githubUrl: 'https://github.com/Anisha2010/portfolio',
    featured: false,
  },
];
