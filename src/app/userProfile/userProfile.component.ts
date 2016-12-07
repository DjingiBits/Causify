import { Component } from '@angular/core'
import { Subscription } from 'rxjs/Subscription'
import { UserService } from '../../services/user.service'
import { Router } from '@angular/router'

@Component({
    templateUrl: 'app/userProfile/userProfile.component.html',
    styleUrls: ['app/userProfile/userProfile.component.css']
})

//TODO: ADD CHANGE PASSWORD FUNCTIONALITY

export class UserProfileComponent {

    errorMessage: any
     currentUserData = {
         firstName : "",
         lastName : ""
     }
     checkPass = ""


    private subscription: Subscription;
     constructor(private  user: UserService, private router : Router) {}

     ngOnInit(): void {
           this.currentUserData =  this.user.getUserData()
     }

    changeUserData(){

         this.user.changeUser(this.currentUserData, this.checkPass)
             .subscribe(
                 userInfo => {
                     this.user.saveAuthInSession(userInfo)
                     this.router.navigate(['/userProfile'])
                 },
                 error => this.errorMessage = <any>error
             );

    }

}