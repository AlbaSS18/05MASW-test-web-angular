export class Song {
    constructor(
        private _id: number,
        private _track: number,
        private _title: string,
        private _artist: string,
        private _path: string,
        private _disc_id: number
    ) {}

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get track(): number {
        return this._track;
    }
    public set track(value: number) {
        this._track = value;
    }

    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }

    public get artist(): string {
        return this._artist;
    }
    public set artist(value: string) {
        this._artist = value;
    }

    public get path(): string {
        return this._path;
    }
    public set path(value: string) {
        this._path = value;
    }

    public get disc_id(): number {
        return this._disc_id;
    }
    public set disc_id(value: number) {
        this._disc_id = value;
    }
    
}