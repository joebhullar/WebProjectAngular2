import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UserService]
})
export class UsersComponent {

  Users: any; 

  constructor(private objUserService:UserService) {
    this.objUserService.getAllUsersByObservable().subscribe((
      data => {this.Users = data;}))
   }


}
