import { Component, Output, EventEmitter } from '@angular/core'
import { CausesService } from '../../services/causes.service'

@Component({
  selector: 'cf-create-cause',
  templateUrl: 'app/createCause/create-cause.component.html',
  styleUrls: ['app/createCause/create-cause.component.css'],
})
export class CreateCauseComponent {

  @Output() postCause = new EventEmitter()

      causeData = {
      title: "",
      imageUrl: "",
      description: "",
      duration: "",
      startDate: "",
      category: "",
    };

  constructor( private cause: CausesService) {}

  createCause() {
    const { title, imageUrl, description,duration, startDate, category} = this.causeData
      this.cause.postCause(this.causeData)
          .subscribe(causeData => console.log(causeData));
      console.log(event);
      console.log(JSON.stringify(this.causeData));

  }
}