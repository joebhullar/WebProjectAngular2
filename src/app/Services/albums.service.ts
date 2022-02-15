import { Injectable } from '@angular/core';
import { Albums } from '../Model/Albums';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AlbumsService {

  constructor(private http:HttpClient) {}
    getAllAlbumsByObservable(){
      return this.http.get<Albums[]>("http://jsonplaceholder.typicode.com/albums");
    }
    
    getAllPostByObservableId(id:number):Observable<Albums[]>{
      return this.http.get<Albums[]>("http://jsonplaceholder.typicode.com/albums");
    }   
}
