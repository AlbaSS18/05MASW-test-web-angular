import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Song } from 'src/app/models/song';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent {
  @Input() public song: Song = new Song(0, 0, '', '', '', 0);
  @Output() songToPlay = new EventEmitter();

  reproducirCancion(event: Event, song: Song): void {
    this.songToPlay.emit(song);
  }
}
