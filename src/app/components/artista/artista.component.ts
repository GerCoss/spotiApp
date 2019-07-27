import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe( params => {
      console.log(params['id']);
    });
   }

   getArtista( id: string ) {

   }

}
