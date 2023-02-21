import { Injectable } from '@angular/core';
import { Disco } from 'src/app/models/record';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export var urlRecord = 'https://apiviu.amnislabs.com/pro/api/';

@Injectable()
export class DiscoService {

  constructor(private http: HttpClient) { }

  public getDiscs(): Observable<any> {
    return this.http.get<Array<Disco>>(`${urlRecord}discs`);
  }

  public getSongs(): Observable<Array<Disco>> {
    return this.http.get<Array<Disco>>(`${urlRecord}songs`);
  }

  public getSongsFromDisc(idDisco: number): Observable<Array<Disco>> {
    return this.http.get<Array<Disco>>(`${urlRecord}songs/from_disc/${idDisco}`);
  }
}
