import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/Services/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers:[AlbumsService]
})
export class AlbumsComponent {

  Albums:any;
  constructor(private objAlbumService:AlbumsService) {
    this.objAlbumService.getAllAlbumsByObservable().subscribe((
      data => {this.Albums = data;})) 
   }
}
