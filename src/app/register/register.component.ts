import { Component } from '@angular/core'
import { UserService } from '../../services/user.service'
import { Router } from '@angular/router'
import { AppComponent } from '../app.component'

@Component({
    templateUrl: 'app/register/register.component.html',
    styleUrls: ['app/register/register.component.css']
})
export class RegisterComponent {

    userExist = false;
    userData = {
        username: "",
        firstName: "",
        lastName: "",
        password: ""
    };
    private confirmPass = ""
    private checkPasswordsMatch = true;

    constructor(private userService: UserService, private router: Router, private app: AppComponent) { }

    register() {
        if(this.checkPasswords(this.userData.password, this.confirmPass)){
            this.userService
                .registerUser(this.userData)
                .subscribe(
                    userInfo => {
                        this.userService.saveAuthInSession(userInfo)
                        this.router.navigate(['/causes'])
                        this.app.toggleNavigation()
                    },
                    () => {
                        this.userExist = true
                    });
        }
        else {
            this.checkPasswordsMatch = false;
        }
    }

    checkPasswords(pass, confPass){
       return pass == confPass
    }
}
