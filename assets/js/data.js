// Base de datos de entradas y enlaces consultados en Gemini
const rawNodes = [
  { id: 1, label: "Gemini AI", value: 35, group: "core", summary: "Punto central de consultas y generación de ideas mediante Inteligencia Artificial." },
  
  // Programación & Tech
  { id: 2, label: "JavaScript ES6", value: 20, group: "tech", summary: "Consultas sobre promesas, async/await y manipulación avanzada del DOM." },
  { id: 3, label: "HTML5 & CSS3", value: 16, group: "tech", summary: "Estructuración de páginas web y diseño responsivo con CSS Grid y Flexbox." },
  { id: 4, label: "Python Scripts", value: 22, group: "tech", summary: "Automatización de tareas, procesamiento de archivos y análisis de datos." },
  { id: 5, label: "React Framework", value: 18, group: "tech", summary: "Creación de componentes interactivos y manejo de estado." },

  // Inteligencia Artificial
  { id: 6, label: "Modelos LLM", value: 25, group: "science", summary: "Principios de funcionamiento de grandes modelos de lenguaje." },
  { id: 7, label: "Prompt Engineering", value: 20, group: "science", summary: "Técnicas avanzadas para estructurar instrucciones en IA." },
  { id: 8, label: "Redes Neuronales", value: 15, group: "science", summary: "Conceptos sobre arquitectura Transformers y aprendizaje profundo." },

  // Productividad & Notas
  { id: 9, label: "Obsidian Vault", value: 28, group: "tools", summary: "Gestión del conocimiento personal basado en archivos Markdown vinculados." },
  { id: 10, label: "Método Zettelkasten", value: 18, group: "tools", summary: "Sistema de toma de notas atómicas e interconectadas." },
  { id: 11, label: "Visualización Vis.js", value: 20, group: "tools", summary: "Librería de renderizado de grafos y redes dinámicas en el navegador." }
];

const rawEdges = [
  { from: 1, to: 6 },
  { from: 1, to: 7 },
  { from: 1, to: 9 },
  { from: 2, to: 3 },
  { from: 2, to: 5 },
  { from: 2, to: 11 },
  { from: 4, to: 1 },
  { from: 6, to: 8 },
  { from: 7, to: 6 },
  { from: 9, to: 10 },
  { from: 9, to: 11 },
  { from: 11, to: 3 }
];
