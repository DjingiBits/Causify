import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpModule } from '@angular/http'
import { FormsModule , FormBuilder } from '@angular/forms'
import { AppComponent } from './app/app.component'
import { NavigationComponent } from './app/navigation/navigation.component'
import { HomeComponent } from './app/home/home.component'
import { LoginComponent } from './app/login/login.component'
import { RegisterComponent } from './app/register/register.component'
import { CausesComponent } from './app/causes/causes.component'
import { CreateCauseComponent } from './app/createCause/create-cause.component'
import { UserService } from './services/user'
import { CausesService } from './services/causes.service'

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        CausesComponent,
        CreateCauseComponent
    ],
    providers: [ FormBuilder, UserService,  CausesService],
    imports: [BrowserModule, NgbModule.forRoot(), FormsModule, HttpModule ],
    bootstrap : [AppComponent]
})
export class AppModule { }