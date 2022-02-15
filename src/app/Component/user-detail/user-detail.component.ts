import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [UserService]
})
export class UserDetailComponent implements OnInit{
  user:any;
  constructor(private activatedroute:ActivatedRoute, private userService:UserService) { }

  ngOnInit() {
    let id=this.activatedroute.snapshot.params['id'];
    this.userService.getUserDataByObservableId(id).subscribe((data=>{this.user=data;}))      
  }

 }
