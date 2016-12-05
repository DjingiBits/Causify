import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { Kinvey } from './Kinvey'
import {IComment} from "../app/comments/Comment";

@Injectable()
export class CommentsService {
    private dbUrl: string = Kinvey.baseUrl + 'appdata/' + Kinvey.appKey + '/comments'

    private authToken: string = '047208fc-21bd-4b5d-99bc-244aa8be7173.rHvthnazXn65Al4RdTIgVqMlCB4XHtFUjDb8MBTPggk='
    private headers: Headers = new Headers({})

    constructor(private http: Http) {}

    postComment(data) {
        let headers: Headers = new Headers({'Content-Type': 'application/json'})
        headers.append('Authorization', `Kinvey ${this.authToken}`)
        let options = new RequestOptions({ headers: headers })

        return this.http.post(this.dbUrl, JSON.stringify(data), options)
    }

    getComments(causeId : string): Observable<IComment[]> {
        let headers: Headers = new Headers({'Accept': 'application/json'})
        headers.append('Authorization', `Kinvey ${this.authToken}`)
        let options = new RequestOptions({ headers: headers })
       // let params: URLSearchParams = new URLSearchParams();
        //params.set("causeId", causeId );
       // options.search = params

        return this.http.get(this.dbUrl, options)
            .map((response: Response) => <IComment[]>response.json())
    }

}