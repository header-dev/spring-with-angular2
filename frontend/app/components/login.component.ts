import { Component } from '@angular/core';

import {LoginService} from '../services/login.service';

@Component({
	selector: 'login',
	templateUrl: 'app/components/login.component.html'
})
export class Login{
	private model = {'username':'','password':''};

	private currentUserName;

	constructor(private loginService: LoginService){}


	onSubmit():void{
		this.loginService.sendCredentials(this.model).subscribe(
			data => {
				localStorage.setItem("token", JSON.parse(JSON.stringify(data))._body);
        		this.loginService.sendToken(localStorage.getItem("token")).subscribe(
          		data => {
           		 	this.currentUserName = this.model.username;
            		localStorage.setItem("currentUserName", this.model.username);
            		this.model.username="";
            		this.model.password="";
          		}
        		)
			}
		);
	}

}