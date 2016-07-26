import { Injectable }     from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HttpUtilsService {

    constructor(private http: Http) { }

    get(url: string) {
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    post(url: string, data: any): Promise<any> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(url, JSON.stringify(data), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
