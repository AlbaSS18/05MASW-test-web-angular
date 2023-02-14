import { Song } from "./song";

export class Disco {
    // Añadir esto es lo mismo que meterlo en el constructor
    /* 
    title: string;
    artist: string;
    year: number;
    image_path: string;

    constructor(title: string, artist: string, year: number, image_path: string) {
        this.title = title;
        this.artist = artist;
        this.year = year;
        this.image_path = image_path;
    } 
    */

    constructor(
        public id: number,
        public title: string,
        public artist: string,
        public year: number,
        public image_path: string,
        public songs: Array<Song>
    )
    {
    }

}