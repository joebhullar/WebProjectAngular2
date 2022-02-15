import { Injectable } from '@angular/core';
import { Comments } from '../Model/Comments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CommentsService {

  constructor(private http:HttpClient) { }

  getAllCommentsByObservable(){
    return this.http.get<Comments[]>("http://jsonplaceholder.typicode.com/Comments");
  }

      
  getAllCommentsByObservableId(id:number):Observable<Comments[]>{
    return this.http.get<Comments[]>("http://jsonplaceholder.typicode.com/comments");
  }

}
