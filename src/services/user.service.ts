import { Injectable } from '@angular/core'
import { Headers, Http, Response, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'
import 'rxjs/add/observable/throw'

import { Kinvey } from './Kinvey'

@Injectable()
export class UserService {
    private dbUrl = Kinvey.baseUrl + 'user/' + Kinvey.appKey

    constructor(private http: Http) { }

    loginUser(data) {
        let headers: Headers = new Headers({
            'Authorization': Kinvey.appAuthHeaders(),
            'Content-Type': 'application/json'
        })
        let options = new RequestOptions({ headers: headers })

        return this.http.post(this.dbUrl + '/login', data, options)
            .map((response: Response) => response.json())
            .catch(this.handleError)
    }

    registerUser(data) {
        let headers: Headers = new Headers({
            'Authorization': Kinvey.appAuthHeaders(),
            'Content-Type': 'application/json'
        })
        let options = new RequestOptions({ headers: headers })

        return this.http.post(this.dbUrl, data, options)
            .map((response: Response) => response.json())
            .catch(this.handleError)
    }


    logoutUser() {
        let headers: Headers = new Headers({
            'Authorization': "Kinvey " + sessionStorage.getItem("authToken"),
            'Content-Type': 'application/json'
        })

        let options = new RequestOptions({ headers: headers })
        return this.http.post(this.dbUrl + '/_logout', '', options)
            .map((response: Response) => response.json())
            .catch(this.handleError)
    }

    getUserData(){
        return {
            firstName : sessionStorage.getItem('firstName'),
            lastName : sessionStorage.getItem('lastName'),
        }
    }

    changeUser(data, checkPass){
        let headers: Headers = new Headers({
            'Authorization': "Basic " + btoa(sessionStorage.getItem("username") + ":" + checkPass),
            'Content-Type': 'application/json'
        })
        let options = new RequestOptions({ headers: headers })
        return this.http.put(this.dbUrl + "/" + sessionStorage.getItem("userId"), JSON.stringify(data), options)
            .map((response: Response) => response.json())
            .catch(this.handleError)
    }

    saveAuthInSession(userInfo: any) {
        sessionStorage.setItem("userId", userInfo._id);
        sessionStorage.setItem("username", userInfo.username);
        sessionStorage.setItem("firstName", userInfo.firstName);
        sessionStorage.setItem("lastName", userInfo.lastName);
        sessionStorage.setItem("authToken", userInfo._kmd.authtoken);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }
    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
