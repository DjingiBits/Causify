import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  templateUrl: 'app/pageNotFound/page-not-found.component.html',
  styleUrls: ['app/pageNotFound/page-not-found.component.css']
})
export class PageNotFoundComponent {

  constructor(private router: Router) { }

  navigateToCauses() {
    this.router.navigate(['/causes']);
  }
}
