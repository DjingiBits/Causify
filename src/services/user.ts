import { Injectable } from '@angular/core'
import { Headers, Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'
import 'rxjs/add/observable/throw'

@Injectable()
export class UserService {
    private headres: Headers = new Headers({
        'Authorization' : 'Basic 69a9f570e4994fa38d4488d24ec414cd',
        'Content-Type' : 'application/json'
    })

    private userUrl = 'https://baas.kinvey.com/user/kid_rJ2x2BeQe'

    constructor( private http: Http){}

    private getJson(response: Response){
        return response.json()
    }

    private checkForErrors(response: Response){
        if(response.status >= 200 && response. status <= 300){
            return response;
        }
        else{
            let error = new Error(response.statusText)
            error['response'] = response
            console.log(error)
            throw error
        }
    }
     registerUser(data) {

         return this.http.post(this.userUrl,
                 { headers: this.headres})
                 .map(this.checkForErrors)
                 .catch(err => Observable.throw(err))
                 .map(this.getJson)
     }

}