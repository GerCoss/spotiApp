import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { 
    console.log('spotiy listo');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCceyP23Zjt_cmC9EnvskwI6--pzBUTCHsZ4X2_Y5ZpQs7-C1R_2KtyIhVOAnc3k9YVpHxyZFXZXcse6EY'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }
}
