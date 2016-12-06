import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpModule } from '@angular/http'
import { FormsModule, FormBuilder } from '@angular/forms'
import { RouterModule, CanActivate } from '@angular/router'
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app/app.component'
import { HomeComponent } from './app/home/home.component'
import { LoginComponent } from './app/login/login.component'
import { RegisterComponent } from './app/register/register.component'
import { UserProfileComponent } from './app/userProfile/userProfile.component'
import { CausesComponent } from './app/causes/causes.component'
import { DetailCauseComponent } from './app/detailCause/detail-cause.component'
import { CreateCauseComponent } from './app/createCause/create-cause.component'
import { PageNotFoundComponent } from './app/pageNotFound/page-not-found.component'
import { CausesMapComponent } from  './app/causesMap/causesMap.component'
import { CommentComponent } from './app/comments/comment.component'
import { FooterComponent } from './app/footer/footer.component'
import { UserService } from './services/user.service'
import { CausesService } from './services/causes.service'
import { CommentsService } from './services/comments.service'
import { AppRoutingModule }     from './app/app-routing.module';
import { AuthGuard } from './app/_guards/auth.guard'


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        CausesComponent,
        DetailCauseComponent,
        CreateCauseComponent,
        PageNotFoundComponent,
        FooterComponent,
        CausesMapComponent,
        CommentComponent,
        UserProfileComponent
    ],
    providers: [FormBuilder, UserService, CausesService, CommentsService, AuthGuard ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule.forRoot(),
        FormsModule,
        HttpModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCClQpuyQJkYrlBMl5wMKp7ZpeDrYmXPIo'
        })
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
