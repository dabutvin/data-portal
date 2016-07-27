import { Injectable }     from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Config } from './config';


@Injectable()
export class HttpUtilsService {

    serverUrl: string;
    constructor(private http: Http, config: Config) {
        this.serverUrl = config.getServerUrl();
    }

    get(url: string) {
        return this.http.get(`${this.serverUrl}${url}`)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    post(url: string, data: any): Promise<any> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(`${this.serverUrl}/${url}`, JSON.stringify(data), { headers: headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
