import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpModule } from '@angular/http'
import { FormsModule, FormBuilder } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app/app.component'
import { HomeComponent } from './app/home/home.component'
import { LoginComponent } from './app/login/login.component'
import { RegisterComponent } from './app/register/register.component'
import { CausesComponent } from './app/causes/causes.component'
import { CreateCauseComponent } from './app/createCause/create-cause.component'
import { PageNotFoundComponent } from './app/pageNotFound/page-not-found.component'
import { UserService } from './services/user.service'
import { CausesService } from './services/causes.service'

// TODO --> create PageNotFoundComponent, LOgoutComponent, CauseDetailComponent, Footer

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        CausesComponent,
        CreateCauseComponent,
        PageNotFoundComponent
    ],
    providers: [FormBuilder, UserService, CausesService],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'causes', component: CausesComponent },
            { path: 'createCuase', component: CreateCauseComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', component: PageNotFoundComponent },
        ]),
        NgbModule.forRoot(),
        FormsModule,
        HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
