import { Component } from '@angular/core';
import { Disco } from 'src/app/models/record';
import { Song } from 'src/app/models/song';
import { DiscoService } from 'src/app/services/disco-service/disco.service';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css'],
  providers: [DiscoService]
})
export class MusicaComponent {
  public records: Array<Disco>;
  public playing: string;

  constructor(private discoService: DiscoService) {
    this.playing = '';
    this.records = [];
    this.discoService.getDiscs().subscribe({
      next: (discs: any) => {
        this.records = discs.data;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  ngOnInit(): void {
  }

  playSong(song: Song): void {
    console.log(song);
    this.playing = `${song.title} - ${song.artist}`;
    let audioPlayer = document.getElementById('audio_player') as HTMLAudioElement;
    audioPlayer.setAttribute('src', song.path);
    audioPlayer.play();
  }
}
