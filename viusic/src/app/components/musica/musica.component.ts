import { Component } from '@angular/core';
import { Disco } from 'src/app/models/record';
import { Song } from 'src/app/models/song';
import { DiscoService } from 'src/app/services/disco-service/disco.service';
import { SongService } from 'src/app/services/songs-service/song.service';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css'],
  providers: [DiscoService, SongService]
})
export class MusicaComponent {
  public records: Array<Disco>;
  public playing: string;

  constructor(
    private discoService: DiscoService,
    private songService: SongService
  ) {
    this.playing = '';
    this.records = [];
    this.discoService.getDiscs().subscribe({
      next: (discs: any) => {
        this.records = discs.data;
        this.records.forEach((record: Disco) => {
          this.songService.getSongsFromDisc(record.id).subscribe({
            next: (songs: any) => {
              record.songs = songs.data;
            },
            error: (err: any) => {
              console.log(err);
            }
          });
        });
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
