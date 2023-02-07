import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  public titulo: string;
  public pulsaciones: number;

  constructor() {
    this.titulo = 'Bienvenido a Viusic';
    this.pulsaciones = 0;
  }

  pulsame(): void {
    this.pulsaciones++;
  }

  reset(): void {
    this.pulsaciones = 0;
  }
}
