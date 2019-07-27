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
      'Authorization': 'Bearer BQC9W6zfOEbKeJDv7c8lsTirx7SaP-3j0qCfog5LGjXqWzMmUUAsYhiTpjvb745zcsUfN1CW4qf08WMTwW8'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQC7j6todXM0yfBlTXgbXSDMFkNZ6xzU2DltmqxEjTWELuiX8aFYWSPJG-vn-X3lYn5Qk-JIi-Usmism1UE'
    // });

    return this.getQuery('browse/new-releases?limit=20')
    // this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
              .pipe( map( data => data['albums'].items));
  }

  getArtistas(termino: string){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC9W6zfOEbKeJDv7c8lsTirx7SaP-3j0qCfog5LGjXqWzMmUUAsYhiTpjvb745zcsUfN1CW4qf08WMTwW8'
    });

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    // this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
              .pipe( map( data => data['artists'].items));

  }

  getArtista(id: string) {

    return this.getQuery(`artists/${id}`);
              // .pipe( map( data => data['artists'].items));

  }
}
