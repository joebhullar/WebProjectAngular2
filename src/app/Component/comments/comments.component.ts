import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/Services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers:[CommentsService] // Adding providers enables the HTML To being displayed. //It is actually quite important
})
export class CommentsComponent  { 
  Comments:any;
   constructor(private objCommentsService:CommentsService) {
    this.objCommentsService.getAllCommentsByObservable().subscribe((
      data => {this.Comments = data;})) 
   }

}
