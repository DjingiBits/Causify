import { Component, Input, Output, EventEmitter } from '@angular/core'
//import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user'

@Component({
    selector: 'register-form',
    templateUrl: 'app/register/register.component.html',
    styleUrls: ['app/register/register.component.css']
})
export class RegisterComponent {

    @Output() registerUser = new EventEmitter()

   //username: string;
   //firstName: string;
   //lastName: string;
   //password: string;
   ////confirmPass: string;

     userData = {
        username: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPass: ""
    };
   constructor(private user: UserService ) {}

    register() {
        const { username, firstName, lastName , password} = this.userData
        console.log(this.user.registerUser(this.userData));
        console.log(event);
        console.log(JSON.stringify(this.userData));
    }
}