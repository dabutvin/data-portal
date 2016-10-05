import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Constellation } from '../../utils/models/constellation';

@Injectable()
export class ConstellationService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private constellationsUrl = 'app/constellations';  // URL to web api

  constructor(private http: Http) { }

  getConstellations(): Promise<Constellation[]> {
    return this.http.get(this.constellationsUrl)
               .toPromise()
               .then(response => response.json().data as Constellation[])
               .catch(this.handleError);
  }

  getConstellation(id: number): Promise<Constellation> {
    return this.getConstellations()
               .then(constellations => constellations.find(constellation => constellation.id === id));
  }

  delete(id: number): Promise<void> {
    let url = `${this.constellationsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Constellation> {
    return this.http
      .post(this.constellationsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(constellation: Constellation): Promise<Constellation> {
    const url = `${this.constellationsUrl}/${constellation.id}`;
    return this.http
      .put(url, JSON.stringify(constellation), {headers: this.headers})
      .toPromise()
      .then(() => constellation)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}