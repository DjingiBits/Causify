import { Component } from '@angular/core'
import { UserService } from '../../services/user.service'
import { Router } from '@angular/router'
import { AppComponent } from '../app.component'

@Component({    
    templateUrl: 'app/register/register.component.html',
    styleUrls: ['app/register/register.component.css']
})
export class RegisterComponent {

    errorMessage: any
    userData = {
        username: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPass: ""
    };
<<<<<<< Updated upstream
    constructor(private userService: UserService, private router : Router, private app: AppComponent) { }
=======
    constructor(private user: UserService, private router : Router, private app: AppComponent) { }
>>>>>>> Stashed changes

    register() {
        this.userService
            .registerUser(this.userData)
            .subscribe(
                userInfo => {
                    this.userService.saveAuthInSession(userInfo)
                    this.router.navigate(['/causes'])
                    this.app.toggleNavigation()
                },
                error => this.errorMessage = <any>error
            );
    }
}
