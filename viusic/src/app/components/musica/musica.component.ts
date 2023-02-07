import { Component } from '@angular/core';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent {
  public records: Array<any>;

  constructor() {
    this.records = [
      {
        title: 'Reputation',
        artist: 'Taylor Swift',
        year: 2017,
        image_path: 'https://www.lahiguera.net/musicalia/artistas/taylor_swift/disco/8600/taylor_swift_reputation-portada.jpg'
      },
      {
        title: 'Entre las dudas y el azar',
        artist: 'Dani Fernández',
        year: 2022,
        image_path: 'https://www.lahiguera.net/musicalia/artistas/dani_fernandez/disco/11710/dani_fernandez_entre_las_dudas_y_el_azar-portada.jpg'
      },
      {
        title: 'Motomami',
        artist: 'Rosalia',
        year: 2022,
        image_path: 'https://www.lahiguera.net/musicalia/artistas/rosalia/disco/11741/portada-p.jpg'
      },
      {
        title: 'La cuarta hoja',
        artist: 'Pablo Alborán',
        year: 2022,
        image_path: 'https://www.lahiguera.net/musicalia/artistas/pablo_alboran/disco/12473/pablo_alboran_la_cuarta_hoja-portada.jpg'
      },
      {
        title: '11 Razones',
        artist: 'Aitana',
        year: 2020,
        image_path: 'https://www.lahiguera.net/musicalia/artistas/aitana/disco/10960/aitana_11_razones-portada.jpg'
      }
    ]; 
  }
}
