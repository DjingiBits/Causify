import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { ICause, Cause } from '../app/causes/Cause'
import { Kinvey } from './Kinvey'

@Injectable()
export class CausesService {
  private dbUrl: string = Kinvey.baseUrl + 'appdata/' + Kinvey.appKey + '/causes'
  // TODO --> get token from Kinvey 
  // Kinvey.appAuthTokenHeaders()
  private authToken: string = '97f73148-71c4-4fb6-9341-9e2ab12c2842.9MF3sfrcAU1pqKI8Cx7ALjwfjoqyarAt155+yXHIJjs='
  private headers: Headers = new Headers({ 'Accept': 'application/json' }) 

  constructor(private http: Http) { }

  getCauses(): Observable<ICause[]> {
    this.headers.append('Authorization', `Kinvey ${this.authToken}`)
    let options = new RequestOptions({ headers: this.headers })

    return this.http.get(this.dbUrl, options)
      .map((response: Response) => <ICause[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError)
  }

  private handleError(error: Response) {
    console.log(error)
    return Observable.throw(error.json().error || 'Server error')
  }
}
