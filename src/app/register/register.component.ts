import { Component, Input, Output, EventEmitter } from '@angular/core'
//import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service'

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
    constructor(private user: UserService) { }

    register() {
        this.user
            .registerUser(this.userData)
            .subscribe(
                userInfo => this.saveAuthInSession(userInfo),
                error => this.errorMessage = <any>error
            );
    }

    saveAuthInSession(userInfo: any) {
        sessionStorage.setItem("userId", userInfo._id);
        sessionStorage.setItem("username", userInfo.username);
        sessionStorage.setItem("authToken", userInfo._kmd.authtoken);
    }
}