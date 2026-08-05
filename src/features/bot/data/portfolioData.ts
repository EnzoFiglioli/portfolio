import { PortfolioInfo } from '../types';

export const portfolioData: PortfolioInfo = {
  name: 'Enzo Figlioli',
  title: 'Junior Full Stack Developer',
  description: 'Desarrollador Full Stack con experiencia en React, TypeScript, Node.js, NestJS y PostgreSQL. Apasionado por construir aplicaciones web robustas y escalables, con enfoque en autenticación, APIs REST y despliegue en producción.',
  
  // Stack principal
  technologies: [
    'React',
    'React Native',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Express',
    'NestJS',
    'Django',
    'Kotlin',
    'Tailwind CSS',
    'Redux',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'Prisma ORM',
    'JWT',
    'GraphQL',
    'Docker',
    'Git',
    'GitHub',
    'Linux',
    'Postman',
    'Android Studio'
  ],
  
  // Proyectos reales
  projects: [
    {
      name: 'Tabl3ro',
      description: 'Red social inspirada en Twitter con autenticación JWT, sistema de publicaciones y feed en tiempo real.',
      technologies: ['React', 'Node.js', 'Express', 'JWT', 'MongoDB'],
      link: 'https://github.com/EnzoFiglioli/tabl3ro'
    },
    {
      name: 'ReviewFlix',
      description: 'Aplicación full stack para reseñas de películas con operaciones CRUD y autenticación de usuarios.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      link: 'https://github.com/EnzoFiglioli/reviewflix'
    },
    {
      name: 'FraganciasLP',
      description: 'Aplicación full stack para gestión y visualización de catálogo de fragancias con Redux y NestJS.',
      technologies: ['React', 'Redux', 'NestJS', 'PostgreSQL', 'TypeScript'],
      link: 'https://github.com/EnzoFiglioli/fraganciaslp'
    }
  ],
  
  // Experiencia laboral real
  experience: [
    {
      company: 'Independiente / Freelance',
      position: 'Desarrollador Full Stack',
      years: 'Marzo 2025 - Presente',
      description: 'Desarrollo de aplicaciones web con React, Node.js, Express y MongoDB. Implementación de autenticación JWT, manejo de errores y validación de datos. Pruebas funcionales y QA para garantizar calidad.'
    }
  ],
  
  // Educación real
  education: [
    {
      institution: 'IFTS N°29',
      degree: 'Tecnicatura en Desarrollo de Software',
      years: 'Agosto 2024 - Julio 2027'
    },
    {
      institution: 'Universidad de Helsinki',
      degree: 'Full Stack Open - MERN',
      years: 'Agosto 2025 - Diciembre 2025'
    },
    {
      institution: 'UNTREF',
      degree: 'Diplomatura en Desarrollo Backend',
      years: 'Marzo 2024 - Noviembre 2024'
    },
    {
      institution: 'IBM SkillsBuild',
      degree: 'Fundamentos de Ciberseguridad',
      years: 'Octubre 2025 - Diciembre 2025'
    },
    {
      institution: 'Codo a Codo 4.0',
      degree: 'Desarrollador FullStack Python',
      years: 'Febrero 2023 - Julio 2023'
    }
  ],
  
  // Contacto real
  contact: {
    email: 'enzofiglioli.p@gmail.com',
    phone: '+54 9 2284 650777',
    github: 'https://github.com/EnzoFiglioli',
    linkedin: 'https://linkedin.com/in/enzo-figlioli',
    portfolio: 'https://enzo-figlioli.vercel.app'
  },
  
  // Información adicional
  location: 'Bolívar, Buenos Aires, Argentina',
  availability: 'Disponible para trabajo remoto'
};