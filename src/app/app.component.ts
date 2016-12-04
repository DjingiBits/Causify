import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from '../services/user.service'

@Component({    
    selector: 'app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
    pageTitle: string = 'Causify'
    errorMessage : any
    isLoggedIn : boolean

    constructor(private user: UserService, private router : Router){}

    toggleNavigation(){
        this.isLoggedIn = !this.isLoggedIn
    }

    logout(){
        this.user.logoutUser()
            .subscribe(
                () => {
                    console.log("I am here")
                    this.router.navigate(['/home'])
                    this.toggleNavigation()
                },
               error => {
                   console.log("I am here")
                   this.router.navigate(['/home'])
                   this.toggleNavigation()
               } );
    }
}