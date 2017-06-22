import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { User } from '../models/user';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegisterService {

	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  sendUser(user: User):  Promise<User[]>{
  	let userUrl = 'http://localhost:8080/user/register';
  	return this.http.post(userUrl, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data).catch(this.handleError);
  }

}