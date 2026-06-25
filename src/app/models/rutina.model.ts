export interface Bloque {
  hora: string; // formato "HH:mm"
  icono: string;
  titulo: string;
  descripcion: string;
}

export interface Jornada {
  clave: string;
  emoji: string;
  nombre: string;
  subtitulo: string;
  bloques: Bloque[];
}

export type DiaTipo = 'oficina' | 'home' | 'finde';
export type OpcionHome = 'A' | 'B';
