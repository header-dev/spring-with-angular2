import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

	token:string;

	constructor (private http:Http){}

	sendCredentials(model){
		let tokenUrl = 'http://localhost:8080/user/login';
		let header1 = new Headers({'Content-type': 'application/json'});

		return this.http.post(tokenUrl,JSON.stringify(model), {headers:header1});
	}

	sendToken(token){
		let userUrl = 'http://localhost:8080/rest/user/users';
		let header2 = new Headers({'Authorization': 'Bearer '+token});

		return this.http.get(userUrl, {headers:header2});
	}


	checkLogin(){
		if(localStorage.getItem("currentUserName")!="" && localStorage.getItem("token")!=""){
			return true;
		}else{
			return false;
		}
	}

	logout(){
		localStorage.setItem("token","");
		localStorage.setItem("currentUserName","");
		alert("You just logged out.");
	}
}