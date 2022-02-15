import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validator,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  mygrp:FormGroup;
  constructor(private myBuilder: FormBuilder) { 
       this.mygrp =this.myBuilder.group({
         'username':[],
         'password':[],
         'confirmpassword':[],
         'age':[],
         'email':[],
         'phoneNo':[],
         'Dob':[],
         })
      }
      SaveEmployee(temp:any){
        console.log(temp);
      }

}
