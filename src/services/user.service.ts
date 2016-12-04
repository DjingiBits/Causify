import { Injectable } from '@angular/core'
import { Headers, Http, Response, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'
import 'rxjs/add/observable/throw'

import { Kinvey } from './Kinvey'

@Injectable()
export class UserService {
    private dbUrl = Kinvey.baseUrl + 'user/' + Kinvey.appKey
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    constructor(private http: Http) { }

    loginUser(data) {
        let headers: Headers = new Headers({
            'Authorization': Kinvey.appAuthHeaders(),
            'Content-Type': 'application/json'
        })
        let options = new RequestOptions({ headers: headers })

        return this.http.post(this.dbUrl + '/login', data, options)
            .map((response: Response) => response.json())
            .do(data => console.log('Current user ' + JSON.stringify(data)))
            .catch(err => Observable.throw(err))
    }

    registerUser(data) {
        let headers: Headers = new Headers({
            'Authorization': Kinvey.appAuthHeaders(),
            'Content-Type': 'application/json'
        })
        let options = new RequestOptions({ headers: headers })

        return this.http.post(this.dbUrl, data, options)
            .map((response: Response) => response.json())
            .catch(err => Observable.throw(err))
    }
<<<<<<< Updated upstream
    logoutUser() {
        let headers: Headers = new Headers({
            'Authorization': "Kinvey " + sessionStorage.getItem("authToken"),
            'Content-Type': 'application/json'
        })

        let options = new RequestOptions({ headers: headers })
        return this.http.post(this.dbUrl + '/_logout', '', options)
            .map((response: Response) => response.json())
            .catch(err => Observable.throw(err))
    }

    saveAuthInSession(userInfo: any) {
        sessionStorage.setItem("userId", userInfo._id);
        sessionStorage.setItem("username", userInfo.username);
        sessionStorage.setItem("authToken", userInfo._kmd.authtoken);
=======
    logoutUser(){

        let headers: Headers = new Headers({
            'Authorization': Kinvey.appAuthTokenHeaders(),
            'Content-Type': 'application/json'
        })


        let options = new RequestOptions({ headers:  headers })

        return this.http.post(this.dbUrl + '/_logout', options)
        
>>>>>>> Stashed changes
    }
}
