import { Jornada } from '../models/rutina.model';

export const JORNADA_OFICINA: Jornada = {
  clave: 'oficina',
  emoji: '🏢',
  nombre: 'Martes y Jueves — Oficina',
  subtitulo: 'Gym estricto a la mañana · Tardes libres',
  bloques: [
    { hora: '07:15', icono: '🧘', titulo: 'Yoga', descripcion: 'Yoga (10 min).' },
    { hora: '07:25', icono: '🏃', titulo: 'Correr', descripcion: 'Correr (15-20 min): Entrada en calor de camino al gym.' },
    { hora: '07:45', icono: '💪', titulo: 'Gimnasio', descripcion: 'Gimnasio (60 min): Entrenamiento de fuerza.' },
    { hora: '08:45', icono: '🚿', titulo: 'Ducha + Desayuno', descripcion: 'Ducha + Desayuno: Caminata o bici al trabajo (estás a 10 min).' },
    { hora: '10:00', icono: '💼', titulo: 'Trabajo', descripcion: 'TRABAJO: Foco total. Cero tareas del hogar.' },
    { hora: '18:00', icono: '🌊', titulo: 'Tiempo libre absoluto', descripcion: 'Regreso a casa sin pendientes.' },
  ],
};

export const JORNADA_HOME_A: Jornada = {
  clave: 'home-a',
  emoji: '🏠',
  nombre: 'Lun · Mié · Vie — Home Office (Opción A)',
  subtitulo: '¡Hay olas temprano! 🏄‍♂️',
  bloques: [
    { hora: '07:30', icono: '🧘', titulo: 'Yoga', descripcion: 'Yoga (10 min) + chequear el mar.' },
    { hora: '07:45', icono: '🏄', titulo: 'Surf', descripcion: 'SURF: Sesión matutina en el agua hasta ~09:30.' },
    { hora: '10:00', icono: '💼', titulo: 'Trabajo', descripcion: 'TRABAJO: Tareas domésticas en las micro-pausas.' },
    { hora: '12:00', icono: '💪', titulo: 'Gimnasio', descripcion: 'Gimnasio: Escapada de 1 hora aprovechando el bache laboral.' },
    { hora: '18:00', icono: '✅', titulo: 'Fin del día', descripcion: 'Entrenado, surfeado y casa limpia. ¡Todo tu tiempo libre por delante!' },
  ],
};

export const JORNADA_HOME_B: Jornada = {
  clave: 'home-b',
  emoji: '🏠',
  nombre: 'Lun · Mié · Vie — Home Office (Opción B)',
  subtitulo: 'No hay olas ❌🌊',
  bloques: [
    { hora: '07:30', icono: '🧘', titulo: 'Yoga', descripcion: 'Yoga (10 min).' },
    { hora: '07:45', icono: '🏃', titulo: 'Correr', descripcion: 'Correr (15-20 min): Salida directa.' },
    { hora: '08:15', icono: '💪', titulo: 'Gimnasio', descripcion: 'Gimnasio (60 min): Fuerza liquidada temprano.' },
    { hora: '09:15', icono: '🚿', titulo: 'Ducha + Desayuno', descripcion: 'Ducha + Desayuno y conexión al trabajo a las 10:00.' },
    { hora: '10:00', icono: '💼', titulo: 'Trabajo', descripcion: 'TRABAJO: Orden básico del departamento en los recreos.' },
    { hora: '18:00', icono: '🌊', titulo: 'Tiempo libre', descripcion: 'Libre (ventana por si el mar se acomoda tarde).' },
  ],
};

export const JORNADA_FINDE: Jornada = {
  clave: 'finde',
  emoji: '🏖️',
  nombre: 'Sábado y Domingo — Fin de Semana Sagrado',
  subtitulo: '100% libre y sin planes obligatorios',
  bloques: [
    { hora: '00:00', icono: '🏖️', titulo: 'Día libre', descripcion: 'Sin rutina, sin obligaciones. Disfrutá.' },
  ],
};

export const REGLAS_DE_ORO = [
  {
    emoji: '1️⃣',
    icono: '🧹',
    titulo: 'Casa = Home Office',
    descripcion: 'El departamento se mantiene al día solo Lun/Mié/Vie durante el horario laboral. Martes y jueves: prohibido limpiar.',
  },
  {
    emoji: '2️⃣',
    icono: '👟',
    titulo: 'Fricción Cero',
    descripcion: 'Dejá la ropa de correr y el bolso del gym listos al lado de la cama la noche anterior. Te levantás y actuás.',
  },
  {
    emoji: '3️⃣',
    icono: '🏖️',
    titulo: 'Fin de Semana Sagrado',
    descripcion: 'Al meter running, gym, surf y limpieza de lunes a viernes, el sábado y domingo quedan 100% libres y sin planes obligatorios.',
  },
];
