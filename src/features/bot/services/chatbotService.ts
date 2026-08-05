import { PortfolioInfo } from '../types';

export class ChatbotService {
  private data: PortfolioInfo;

  constructor(portfolioData: PortfolioInfo) {
    this.data = portfolioData;
  }

  private normalizeText(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  private matchesAny(text: string, keywords: string[]): boolean {
    const normalizedText = this.normalizeText(text);
    return keywords.some(keyword => {
      const normalizedKeyword = this.normalizeText(keyword);
      return normalizedText.includes(normalizedKeyword);
    });
  }

  public generateResponse(message: string): string {
    const lowerMsg = message.toLowerCase();
    
    // Saludos
    if (this.matchesAny(lowerMsg, ['hola', 'hi', 'hey', 'buenas', 'que tal', 'como estas'])) {
      return '¡Hola! 👋 Soy el asistente de Enzo Figlioli. ¿Qué te gustaría saber sobre él? Puedo contarte sobre su experiencia, proyectos, tecnologías o formación.';
    }
    
    // Presentación / Quién es
    if (this.matchesAny(lowerMsg, ['quien', 'quien es', 'presentacion', 'sobre', 'info', 'que haces', 'dedicas'])) {
      return this.getAboutResponse();
    }
    
    // Tecnologías
    if (this.matchesAny(lowerMsg, [
      'tecnologias', 'tecnología', 'stack', 'skills', 'herramientas',
      'lenguajes', 'frameworks', 'programacion', 'que usa', 'que manejas',
      'conoces', 'sabes', 'domina'
    ])) {
      return this.getTechnologiesResponse();
    }
    
    // Proyectos
    if (this.matchesAny(lowerMsg, [
      'proyectos', 'proyecto', 'portfolio', 'trabajos', 'que has hecho',
      'que hiciste', 'que haces', 'portafolio', 'desarrollos', 'aplicaciones'
    ])) {
      return this.getProjectsResponse();
    }
    
    // Experiencia
    if (this.matchesAny(lowerMsg, [
      'experiencia', 'laboral', 'trabajo', 'empleo', 'empresa',
      'donde trabajo', 'donde trabajas', 'freelance', 'independiente'
    ])) {
      return this.getExperienceResponse();
    }
    
    // Educación
    if (this.matchesAny(lowerMsg, [
      'educacion', 'educación', 'estudios', 'estudio', 'universidad',
      'carrera', 'facultad', 'instituto', 'formacion', 'formación',
      'academico', 'titulo', 'diploma', 'certificacion', 'certificación'
    ])) {
      return this.getEducationResponse();
    }
    
    // Proyectos específicos
    if (this.matchesAny(lowerMsg, ['tabl3ro', 'tablero'])) {
      return this.getProjectDetail('Tabl3ro');
    }
    
    if (this.matchesAny(lowerMsg, ['reviewflix', 'review flix'])) {
      return this.getProjectDetail('ReviewFlix');
    }
    
    if (this.matchesAny(lowerMsg, ['fraganciaslp', 'fragancias', 'fragancia'])) {
      return this.getProjectDetail('FraganciasLP');
    }
    
    // Tecnologías específicas
    if (this.matchesAny(lowerMsg, ['react', 'react native'])) {
      return this.getTechDetail('React');
    }
    
    if (this.matchesAny(lowerMsg, ['typescript', 'ts'])) {
      return this.getTechDetail('TypeScript');
    }
    
    if (this.matchesAny(lowerMsg, ['node', 'nodejs', 'express', 'nestjs'])) {
      return this.getTechDetail('Node.js');
    }
    
    if (this.matchesAny(lowerMsg, ['postgresql', 'postgres', 'sql'])) {
      return this.getTechDetail('PostgreSQL');
    }
    
    if (this.matchesAny(lowerMsg, ['mongodb', 'mongo'])) {
      return this.getTechDetail('MongoDB');
    }
    
    // CV
    if (this.matchesAny(lowerMsg, ['cv', 'curriculum', 'currículum', 'curriculo', 'pdf', 'descargar cv'])) {
      return this.getCVResponse();
    }
    
    // Contacto
    if (this.matchesAny(lowerMsg, [
      'contacto', 'contactar', 'email', 'correo', 'mail',
      'telefono', 'teléfono', 'whatsapp', 'contactame', 'comunicarme'
    ])) {
      return this.getContactResponse();
    }
    
    // Ubicación
    if (this.matchesAny(lowerMsg, ['ubicacion', 'ubicación', 'donde vive', 'donde esta', 'localidad', 'ciudad'])) {
      return this.getLocationResponse();
    }
    
    // Disponibilidad
    if (this.matchesAny(lowerMsg, ['disponible', 'disponibilidad', 'trabajo remoto', 'remoto', 'contratar'])) {
      return this.getAvailabilityResponse();
    }
    
    // Ayuda
    if (this.matchesAny(lowerMsg, ['ayuda', 'help', 'opciones', 'menu', 'que puedes hacer', 'que sabes'])) {
      return this.getHelpResponse();
    }
    
    // Agradecimientos
    if (this.matchesAny(lowerMsg, ['gracias', 'thanks', 'thank', 'excelente', 'perfecto', 'muy util'])) {
      return '¡De nada! 😊 Me alegra poder ayudarte. ¿Quieres saber algo más sobre Enzo?';
    }
    
    // Despedidas
    if (this.matchesAny(lowerMsg, ['chao', 'bye', 'adios', 'hasta luego', 'nos vemos', 'salir', 'cerrar'])) {
      return '¡Hasta luego! 👋 Si necesitas algo más, aquí estaré. ¡Que tengas un excelente día!';
    }
    
    // Respuesta por defecto
    return this.getDefaultResponse();
  }

  // Métodos de respuesta
  private getAboutResponse(): string {
    return `👋 **Sobre Enzo Figlioli**\n\n${this.data.title} con experiencia en desarrollo web full stack.\n\n${this.data.description}\n\n📍 ${this.data.location}\n✨ ${this.data.availability}\n\n¿Te gustaría saber más sobre su experiencia, proyectos o tecnologías?`;
  }

  private getTechnologiesResponse(): string {
    const categories = {
      frontend: ['React', 'React Native', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Redux'],
      backend: ['Node.js', 'Express', 'NestJS', 'Django', 'Kotlin'],
      databases: ['MongoDB', 'MySQL', 'PostgreSQL', 'Prisma ORM'],
      tools: ['JWT', 'GraphQL', 'Docker', 'Git', 'GitHub', 'Linux', 'Postman', 'Android Studio']
    };

    return `🛠️ **Stack Tecnológico de Enzo**\n\n` +
      `**Frontend:** ${categories.frontend.join(' • ')}\n\n` +
      `**Backend:** ${categories.backend.join(' • ')}\n\n` +
      `**Bases de Datos:** ${categories.databases.join(' • ')}\n\n` +
      `**Herramientas:** ${categories.tools.join(' • ')}\n\n` +
      `¿Te interesa algún proyecto donde use alguna de estas tecnologías?`;
  }

  private getProjectsResponse(): string {
    const projects = this.data.projects.map(p => 
      `📌 **${p.name}**\n${p.description}\n🔧 ${p.technologies.join(' • ')}${p.link ? `\n🔗 ${p.link}` : ''}`
    ).join('\n\n');

    return `📁 **Proyectos de Enzo**\n\n${projects}\n\n¿Quieres detalles de algún proyecto en particular?`;
  }

  private getProjectDetail(projectName: string): string {
    const project = this.data.projects.find(p => 
      p.name.toLowerCase().includes(projectName.toLowerCase())
    );

    if (project) {
      return `📌 **${project.name}**\n\n${project.description}\n\n` +
        `**Tecnologías:** ${project.technologies.join(' • ')}\n` +
        `${project.link ? `**Repositorio:** ${project.link}` : ''}\n\n` +
        `¿Te gustaría saber más sobre este proyecto?`;
    }
    return this.getDefaultResponse();
  }

  private getTechDetail(techName: string): string {
    // Encontrar proyectos que usen esta tecnología
    const relatedProjects = this.data.projects
      .filter(p => p.technologies.some(t => t.toLowerCase().includes(techName.toLowerCase())))
      .map(p => `• ${p.name}`)
      .join('\n');

    if (relatedProjects) {
      return `🔍 **${techName}**\n\nEnzo utiliza ${techName} en varios de sus proyectos:\n\n${relatedProjects}\n\n¿Quieres saber más sobre algún proyecto específico?`;
    }
    return `🔍 **${techName}**\n\nEnzo incluye ${techName} en su stack tecnológico. ¿Te gustaría saber en qué proyectos lo ha utilizado?`;
  }

  private getExperienceResponse(): string {
    const exp = this.data.experience.map(e =>
      `🏢 **${e.company}** - ${e.position}\n📅 ${e.years}\n${e.description}`
    ).join('\n\n');

    return `💼 **Experiencia de Enzo**\n\n${exp}\n\n¿Te gustaría saber más sobre su experiencia o habilidades?`;
  }

  private getEducationResponse(): string {
    const edu = this.data.education.map(e =>
      `🎓 **${e.institution}**\n📚 ${e.degree}\n📅 ${e.years}`
    ).join('\n\n');

    return `🎓 **Formación Académica**\n\n${edu}\n\n¿Quieres saber más sobre alguna formación específica?`;
  }

  private getCVResponse(): string {
    return `📄 **Currículum de Enzo**\n\nPuedes ver el CV completo de Enzo en el siguiente enlace:\n🔗 https://enzo-figlioli.vercel.app\n\nTambién puedes solicitar el CV en PDF contactándolo directamente.\n\n¿Necesitas información específica sobre su experiencia o educación?`;
  }

  private getContactResponse(): string {
    const contact = this.data.contact;
    return `📫 **Contacto**\n\n` +
      `📧 Email: ${contact.email}\n` +
      `📱 Teléfono: ${contact.phone}\n` +
      `💻 GitHub: ${contact.github}\n` +
      `🔗 LinkedIn: ${contact.linkedin}\n` +
      `🌐 Portfolio: ${contact.portfolio}\n\n` +
      `¿Quieres contactar a Enzo por algún medio en particular?`;
  }

  private getLocationResponse(): string {
    return `📍 Enzo se encuentra en **${this.data.location}**.\n\nEstá disponible para trabajo remoto y proyectos en todo el mundo. 🌎`;
  }

  private getAvailabilityResponse(): string {
    return `✨ **Disponibilidad**\n\n${this.data.availability}\n\nEnzo está abierto a nuevas oportunidades y proyectos desafiantes. ¿Quieres contactarlo?`;
  }

  private getHelpResponse(): string {
    return `🤖 **¿Qué puedo hacer por ti?**\n\nPuedo ayudarte con información sobre Enzo en estas áreas:\n\n` +
      `👤 **Sobre Enzo** - Quién es y su perfil\n` +
      `🛠️ **Tecnologías** - Stack y herramientas\n` +
      `📁 **Proyectos** - Trabajos y desarrollos\n` +
      `💼 **Experiencia** - Trayectoria profesional\n` +
      `🎓 **Educación** - Formación y certificaciones\n` +
      `📄 **CV** - Currículum y documentos\n` +
      `📫 **Contacto** - Cómo comunicarte\n` +
      `📍 **Ubicación** - Dónde está\n` +
      `✨ **Disponibilidad** - Para trabajo remoto\n\n` +
      `¿Qué te gustaría saber? 😊`;
  }

  private getDefaultResponse(): string {
    return `No tengo información específica sobre eso. 🤔\n\nTe sugiero preguntar sobre:\n• Tecnologías\n• Proyectos\n• Experiencia\n• Educación\n• Contacto\n• CV\n• Ubicación\n• Disponibilidad\n\nO escribe **"ayuda"** para ver todas las opciones.`;
  }
}