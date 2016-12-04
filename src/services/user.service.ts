import { Injectable } from '@angular/core'
import { Headers, Http, Response, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'
import 'rxjs/add/observable/throw'

import { Kinvey } from './Kinvey'

@Injectable()
export class UserService {
    private dbUrl = Kinvey.baseUrl + 'user/' + Kinvey.appKey
    private headers: Headers = new Headers({
        'Authorization': Kinvey.appAuthHeaders(),
        'Content-Type': 'application/json'
    })
    
    constructor(private http: Http) { }

    loginUser(data) {
        let options = new RequestOptions({ headers: this.headers })
        console.log(options)
        return this.http.post(this.dbUrl + '/login', data, options)
            .map((response: Response) => response.json())
            .do(data => console.log('Current user ' + JSON.stringify(data)))
            .catch(err => Observable.throw(err))
    }

    registerUser(data) {
        let options = new RequestOptions({ headers: this.headers })

        return this.http.post(this.dbUrl, data, options)
            .map((response: Response) => response.json())
            .catch(err => Observable.throw(err))
    }
}
