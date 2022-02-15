import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/User';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

  getAllUsersByObservable() : Observable<User[]>
  {
    return this.http.get<User[]>("http://jsonplaceholder.typicode.com/users")
  }

  getUserDataByObservableId(id:number) : Observable<User[]>
  {
    return this.http.get<User[]>("http://jsonplaceholder.typicode.com/users/"+id)
  }

}
