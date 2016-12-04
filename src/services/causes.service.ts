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

  private authToken: string = '047208fc-21bd-4b5d-99bc-244aa8be7173.rHvthnazXn65Al4RdTIgVqMlCB4XHtFUjDb8MBTPggk='
  constructor(private http: Http) { }

  getCauses(): Observable<ICause[]> {
    let headers: Headers = new Headers({'Accept': 'application/json'})
    headers.append('Authorization', `Kinvey ${this.authToken}`)
    let options = new RequestOptions({ headers: headers })

    return this.http.get(this.dbUrl, options)
      .map((response: Response) => <ICause[]>response.json())
      .catch(this.handleError)
  }
  postCause(data) {
    let headers: Headers = new Headers({'Content-Type': 'application/json'})
    headers.append('Authorization', `Kinvey ${this.authToken}`)    
    let options = new RequestOptions({ headers: headers })

    return this.http.post(this.dbUrl, JSON.stringify(data), options)
      .map(this.handleError)
      .catch(err => Observable.throw(err))
  }

  getCause(_id: string): Observable<ICause> {
    let url = this.dbUrl + '/' + _id
    let headers: Headers = new Headers({'Accept': 'application/json'})
    headers.append('Authorization', `Kinvey ${this.authToken}`)
    let options = new RequestOptions({ headers: headers })

    return this.http.get(url, options)
      .map((response: Response) => <ICause>response.json())
      .catch(this.handleError)
  }

  private handleError(error: Response) {
    console.log(error)
    return Observable.throw(error.json().error || 'Server error')
  }
}
