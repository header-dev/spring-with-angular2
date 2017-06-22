import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import {User} from '../models/user';
import { Photo } from '../models/photo';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class PhotoService{

	constructor(private http:Http){}

	getPhotos() {
    	let url = "http://localhost:8080/photo/allPhotos";
    	return this.http.get(url);
  	}

	getPhotosByUser(user:User){
		let url = "http://localhost:8080/rest/photo/user";
		let header = new Headers({'Content-Type':'application/json','Authorization': 'Bearer '
			+localStorage.getItem("token")});

		return this.http.post(url, JSON.stringify(user), {headers: header});
	}

	getPhotoById(photoId:number){
		let url = "http://localhost:8080/rest/photo/photoId";
		let header = new Headers({'Content-Type':'application/json','Authorization': 'Bearer '
			+localStorage.getItem("token")});

		return this.http.post(url, JSON.stringify(photoId), {headers: header});
	}

	updatePhoto(photo:Photo){
		let url = "http://localhost:8080/rest/photo/update";
		let header = new Headers({'Content-Type':'application/json','Authorization': 'Bearer '
			+localStorage.getItem("token")});
      	return this.http.post(url, JSON.stringify(photo), {headers: header});
	}
}