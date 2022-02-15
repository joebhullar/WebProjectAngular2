import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/Services/feedback.service';
import { Feedback } from 'src/app/Model/Feedback';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-feedback',
  templateUrl: './create-feedback.component.html',
  styleUrls: ['./create-feedback.component.css'],
  providers:[FeedbackService]
})
export class CreateFeedbackComponent  {
  createFeedback:Feedback[];
  constructor(private _feedbackservice:FeedbackService, private _router:Router) { }

  SaveFeedback(temp:any) {
    this._feedbackservice.SaveFeedback(temp).subscribe();
 }
 ViewFeedback(){
  this._router.navigate(['Feedback'])
  }
}
