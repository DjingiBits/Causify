import { Component } from '@angular/core'
import { CausesService } from '../../services/causes.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: 'app/createCause/create-cause.component.html',
  styleUrls: ['app/createCause/create-cause.component.css'],
})
export class CreateCauseComponent {

  errorMessage: any
  causeData = {
    title: "",
    imageUrl: "",
    description: "",
    duration: "",
    startDate: "",
    category: "",
  };

  constructor(private cause: CausesService, private router : Router) { }

  createCause() {
    const { title, imageUrl, description, duration, startDate, category} = this.causeData
    this.cause.postCause(this.causeData)
        .subscribe(
            () => this.router.navigate(['/causes']),
            error => this.errorMessage = <any>error
        );

  }
}
