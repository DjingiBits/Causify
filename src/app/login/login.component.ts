import { Component } from '@angular/core'
import { UserService } from '../../services/user.service'
import { Router } from '@angular/router'
import { AppComponent } from '../app.component'

@Component({    
    templateUrl: 'app/login/login.component.html',
    styleUrls: ['app/login/login.component.css']
})
export class LoginComponent {

    constructor(private userService: UserService, private router: Router, private app : AppComponent) { }

    validCredentials = true;
    loginUserData = {
        username: "",
        password: ""
    };

    login() {
        this.userService
            .loginUser(this.loginUserData)
            .subscribe(
                userInfo => {
                    this.userService.saveAuthInSession(userInfo)
                    this.router.navigate(['/causes'])
                    this.app.toggleNavigation()
                },
                () => {
                   this.validCredentials = false;
                }
            );
    }

}
