import { Component, OnInit } from '@angular/core'
import { ICause } from './Cause'
import { CausesService } from '../../services/causes.service'

@Component({
  templateUrl: 'app/causes/causes.component.html',
  styleUrls: ['app/causes/causes.component.css'],
  providers: [CausesService]
})
export class CausesComponent implements OnInit {
  causes: ICause[]
  private causesService: CausesService
  private errorMessage: any

  constructor(causesService: CausesService) {
    this.causesService = causesService
  }

  ngOnInit(): void {    
    this.causesService.getCauses()
    .subscribe(
      causes => this.causes = causes,
      error => this.errorMessage = <any>error
    );    
  }
}