import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Home } from './home';

@Injectable()
export class HomeService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private homesUrl = 'app/homes';  // URL to web api

  constructor(private http: Http) { }

  getHomes(): Promise<Home[]> {
    return this.http.get(this.homesUrl)
               .toPromise()
               .then(response => response.json().data as Home[])
               .catch(this.handleError);
  }

  getHome(id: number): Promise<Home> {
    return this.getHomes()
               .then(homes => homes.find(home => home.id === id));
  }

  delete(id: number): Promise<void> {
    let url = `${this.homesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Home> {
    return this.http
      .post(this.homesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(home: Home): Promise<Home> {
    const url = `${this.homesUrl}/${home.id}`;
    return this.http
      .put(url, JSON.stringify(home), {headers: this.headers})
      .toPromise()
      .then(() => home)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}