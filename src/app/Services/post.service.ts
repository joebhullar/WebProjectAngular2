import { Injectable } from '@angular/core';
import { Post } from '../Model/Post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PostService { //we are working with userid, id, title, body

  constructor(private http:HttpClient) { }
  getAllUsersByObservable(){
    return this.http.get<Post[]>("http://jsonplaceholder.typicode.com/posts")
  }

  getAllPostByObservableById(id:number):Observable<Post[]>
  {
    return this.http.get<Post[]>("http://jsonplaceholder.typicode.com/posts?id=")
  }

}
