import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs/Subscription'

import { ICause } from '../causes/Cause'
import { CausesService } from '../../services/causes.service'

@Component({
    templateUrl: 'app/detailCause/detail-cause.component.html',
    styleUrls: ['app/detailCause/detail-cause.component.css'],
})
export class DetailCauseComponent implements OnInit, OnDestroy {
    cause: ICause;
    errorMessage: string;
    private subscription: Subscription;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private causesService: CausesService) {
    }


    getCauseId(){
      return  this.route.params['_id']
    }

    ngOnInit(): void {
        this.subscription = this.route.params.subscribe(
            params => {
                let id = params['_id']
                this.getCause(id)
            });
    }

    getCause(id: string): void {
        this.causesService.getCause(id).subscribe(
            cause => this.cause = cause,
            error => this.errorMessage = <any>error)
    }

    onBack(): void {
        this.router.navigate(['/causes'])
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }

}
