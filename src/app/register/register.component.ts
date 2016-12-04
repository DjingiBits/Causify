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
    constructor(private user: UserService, private router : Router, private app: AppComponent) { }

    register() {
        this.user
            .registerUser(this.userData)
            .subscribe(
                userInfo => {
                    this.saveAuthInSession(userInfo)
                    this.router.navigate(['/causes'])
                    this.app.toggleNavigation()
                },
                error => this.errorMessage = <any>error
            );
    }

    saveAuthInSession(userInfo: any) {
        sessionStorage.setItem("userId", userInfo._id);
        sessionStorage.setItem("username", userInfo.username);
        sessionStorage.setItem("authToken", userInfo._kmd.authtoken);
    }
}