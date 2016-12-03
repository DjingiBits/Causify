import { Component } from '@angular/core'

@Component({
  selector: 'cf-create-cause',
  templateUrl: 'app/createCause/create-cause.component.html',
  styleUrls: ['app/createCause/create-cause.component.css'],
})
export class CreateCauseComponent {
  title: string;
  imageUrl: string;
  description: string;
  duration: string;
  startDate: string;
  category: string;

  createCause() {
    console.log('created');
  }
}