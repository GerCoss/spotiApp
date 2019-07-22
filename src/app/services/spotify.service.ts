import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { 
    console.log('spotiy listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCJzhxYSCoDsQbac3SfsBsxJDWW5nqG-x8f1PNoUqrQLUP1HBXLQCEnWHk_LhMqoA_6n8FpXHADH1ubU6Y'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQCJzhxYSCoDsQbac3SfsBsxJDWW5nqG-x8f1PNoUqrQLUP1HBXLQCEnWHk_LhMqoA_6n8FpXHADH1ubU6Y'
    // });

    return this.getQuery('browse/new-releases?limit=20')
    // this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
              .pipe( map( data => data['albums'].items));
  }

  getArtista(termino: string){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCJzhxYSCoDsQbac3SfsBsxJDWW5nqG-x8f1PNoUqrQLUP1HBXLQCEnWHk_LhMqoA_6n8FpXHADH1ubU6Y'
    });

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    // this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
              .pipe( map( data => data['artists'].items));

  }
}
