import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { CausesService } from '../../services/causes.service'
import { DurationEnum } from '../enums/DurationEnum';

@Component({
  templateUrl: 'app/createCause/create-cause.component.html',
  styleUrls: ['app/createCause/create-cause.component.css'],
})
export class CreateCauseComponent {
  posibleDurations = DurationEnum;
  durations;
  errorMessage: any
  causeData = {
    title: "",
    imageUrl: "",
    description: "",
    duration: DurationEnum.UP_TO_A_DAY,
    startDate: "",
    category: "",
    author: ""
  };

  constructor(private cause: CausesService, private router : Router) { 
    this.durations = Object.keys(DurationEnum).filter((d, i) => i % 2 === 0)
  }
  
  createCause() {
    this.causeData.author = sessionStorage.getItem('username')
    this.cause.postCause(this.causeData)
        .subscribe(
            () => this.router.navigate(['/causes']),
            error => this.errorMessage = <any>error
        )
  }
}
