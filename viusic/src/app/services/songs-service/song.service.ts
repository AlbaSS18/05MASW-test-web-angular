import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlRecord } from '../disco-service/disco.service';

@Injectable()
export class SongService {

  constructor(private http: HttpClient) { }

  public getSongs(): Observable<any> {
    return this.http.get<any>(`${urlRecord}songs`);
  }

  public getSongsFromDisc(idDisco: number): Observable<any> {
    return this.http.get<any>(`${urlRecord}songs/from_disc/${idDisco}`);
  }
}
