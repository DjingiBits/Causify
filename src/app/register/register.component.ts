import { Component } from '@angular/core'
import { UserService } from '../../services/user.service'
import { Router } from '@angular/router'

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
    constructor(private user: UserService, private router : Router) { }

    register() {
        this.user
            .registerUser(this.userData)
            .subscribe(
                userInfo => {
                    this.saveAuthInSession(userInfo)
                    this.router.navigate(['/causes'])
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