import { Component } from '@angular/core'
import { UserService } from '../../services/user.service'
import { Router } from '@angular/router'

@Component({    
    templateUrl: 'app/login/login.component.html',
    styleUrls: ['app/login/login.component.css']
})
export class LoginComponent {
    constructor(private user: UserService, private router: Router) { }

    errorMessage: any
    loginUserData = {
        username: "",
        password: ""
    };

    login() {
        this.user
            .loginUser(this.loginUserData)
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