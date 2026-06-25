import { Component, computed, signal } from '@angular/core';
import {
  JORNADA_OFICINA,
  JORNADA_HOME_A,
  JORNADA_HOME_B,
  JORNADA_FINDE,
  REGLAS_DE_ORO,
} from './data/rutina-data';
import { Bloque, Jornada, OpcionHome } from './models/rutina.model';

const STORAGE_KEY = 'rutina-diaria.opcion-home';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly reglas = REGLAS_DE_ORO;
  protected readonly ahora = signal(new Date());
  protected readonly opcionHome = signal<OpcionHome>(this.cargarOpcionGuardada());

  protected readonly diaNombre = computed(() =>
    this.ahora().toLocaleDateString('es-AR', { weekday: 'long' }),
  );

  protected readonly horaActual = computed(() =>
    this.ahora().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }),
  );

  protected readonly esDiaHomeOffice = computed(() => {
    const dia = this.ahora().getDay();
    return dia === 1 || dia === 3 || dia === 5; // lun, mié, vie
  });

  protected readonly jornada = computed<Jornada>(() => {
    const dia = this.ahora().getDay();
    if (dia === 0 || dia === 6) return JORNADA_FINDE;
    if (dia === 2 || dia === 4) return JORNADA_OFICINA;
    return this.opcionHome() === 'A' ? JORNADA_HOME_A : JORNADA_HOME_B;
  });

  protected readonly bloqueActualIndex = computed(() => {
    const minutosActuales = this.minutosDelDia(this.ahora());
    const bloques = this.jornada().bloques;
    let indice = 0;
    for (let i = 0; i < bloques.length; i++) {
      if (minutosActuales >= this.minutosDeHora(bloques[i].hora)) {
        indice = i;
      }
    }
    return indice;
  });

  protected readonly bloqueActual = computed<Bloque>(
    () => this.jornada().bloques[this.bloqueActualIndex()],
  );

  constructor() {
    setInterval(() => this.ahora.set(new Date()), 30_000);
  }

  protected elegirOpcion(opcion: OpcionHome): void {
    this.opcionHome.set(opcion);
    localStorage.setItem(STORAGE_KEY, opcion);
  }

  protected esBloqueActual(indice: number): boolean {
    return indice === this.bloqueActualIndex();
  }

  private cargarOpcionGuardada(): OpcionHome {
    const guardada = localStorage.getItem(STORAGE_KEY);
    return guardada === 'B' ? 'B' : 'A';
  }

  private minutosDeHora(hora: string): number {
    const [h, m] = hora.split(':').map(Number);
    return h * 60 + m;
  }

  private minutosDelDia(fecha: Date): number {
    return fecha.getHours() * 60 + fecha.getMinutes();
  }
}
