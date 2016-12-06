import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
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
  private currentUser = sessionStorage.getItem('username')

  constructor(causesService: CausesService, private router: Router) {
    this.causesService = causesService
  }

  ngOnInit(): void {
    this.causesService.getCauses()
    .subscribe(
      causes => this.causes = causes,
      error => this.errorMessage = <any>error
    );
  }
  deleteCurrentCause(_id :string){
      this.causesService.deleteCause(_id)
          .subscribe(
              userInfo => {
                this.router.navigate(['/home'])
              },
              () => {
                console.log('Error occurred')
              }
          );
  }
}