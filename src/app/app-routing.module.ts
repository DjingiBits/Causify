import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { UserProfileComponent } from './userProfile/userProfile.component'
import { CausesComponent } from './causes/causes.component'
import { DetailCauseComponent } from './detailCause/detail-cause.component'
import { CreateCauseComponent } from './createCause/create-cause.component'
import { PageNotFoundComponent } from './pageNotFound/page-not-found.component'
import { CausesMapComponent } from  './causesMap/causesMap.component'
import { AuthGuard } from './_guards/auth.guard'

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'userProfile', component: UserProfileComponent, canActivate: [AuthGuard] },
    { path: 'causes', component: CausesComponent, canActivate: [AuthGuard] },
    { path: 'cause/:_id', component: DetailCauseComponent,canActivate: [AuthGuard] },
    { path: 'createCause', component: CreateCauseComponent, canActivate: [AuthGuard] },
    { path: 'causesMap', component: CausesMapComponent, canActivate: [AuthGuard]},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}