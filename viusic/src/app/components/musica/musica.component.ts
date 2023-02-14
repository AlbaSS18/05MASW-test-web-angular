import { Component } from '@angular/core';
import { Disco } from 'src/app/models/record';
import { Song } from 'src/app/models/song';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent {
  public records: Array<Disco>;

  constructor() {
    this.records = [
      new Disco (1, 'Reputation', 'Taylor Swift', 2017, 'https://www.lahiguera.net/musicalia/artistas/taylor_swift/disco/8600/taylor_swift_reputation-portada.jpg', 
      [
        new Song (1, 1, 'I Did Something Bad', 'Taylor Swift', 'https://cdn.pixabay.com/audio/2021/12/22/audio_9da2a60074.mp3', 1)
      ]),
      new Disco (2, 'Entre las dudas y el azar', 'Dani Fernández', 2022, 'https://www.lahiguera.net/musicalia/artistas/dani_fernandez/disco/11710/dani_fernandez_entre_las_dudas_y_el_azar-portada.jpg',
      [
        new Song (2, 1, 'Clima tropical', 'Dani Fernández', 'https://cdn.pixabay.com/audio/2021/12/22/audio_9da2a60074.mp3', 2),
        new Song (2, 2, 'Plan fatal', 'Dani Fernández', 'https://cdn.pixabay.com/audio/2021/12/22/audio_9da2a60074.mp3', 2),
        new Song (3, 2, 'Frío', 'Dani Fernández', 'https://cdn.pixabay.com/audio/2021/12/22/audio_9da2a60074.mp3', 2),
        new Song (4, 2, 'Grace', 'Dani Fernández', 'https://cdn.pixabay.com/audio/2021/12/22/audio_9da2a60074.mp3', 2),
        new Song (5, 2, 'Dile a los demás', 'Dani Fernández', 'https://cdn.pixabay.com/audio/2021/12/22/audio_9da2a60074.mp3', 2),
        new Song (6, 2, 'Artificial', 'Dani Fernández', 'https://cdn.pixabay.com/audio/2021/12/22/audio_9da2a60074.mp3', 2),
      ]),
      new Disco (3, 'Motomami', 'Rosalia', 2022, 'https://www.lahiguera.net/musicalia/artistas/rosalia/disco/11741/portada-p.jpg',
      [

      ]),
      new Disco (4, 'La cuarta hoja', 'Pablo Alborán', 2022, 'https://www.lahiguera.net/musicalia/artistas/pablo_alboran/disco/12473/pablo_alboran_la_cuarta_hoja-portada.jpg',
      [

      ]),
      new Disco (5, '11 Razones', 'Aitana', 2020, 'https://www.lahiguera.net/musicalia/artistas/aitana/disco/10960/aitana_11_razones-portada.jpg',
      [

      ]),
    ]; 
  }
}
