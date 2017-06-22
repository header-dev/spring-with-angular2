import { Component,Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {PhotoService} from '../services/photo.service';
import {UserService} from '../services/user.service';

//Models
import {Photo} from '../models/photo';
import {User} from '../models/user';

@Component({
	selector: 'image-detail',
	templateUrl: 'app/components/image-detail.component.html'
})
export class ImageDetail implements OnInit{
	photo: Photo = new Photo();
	like: string;
	user: User;

	constructor(
		private photoService: PhotoService,
		private userService: UserService,
		private route: ActivatedRoute
	){}

	ngOnInit(): void {
  		this.route.params.forEach((params: Params) => {
	      	let photoId = +params['id'];
              this.photoService.getPhotoById(photoId).subscribe(
              photo => {
                this.photo = JSON.parse(JSON.parse(JSON.stringify(photo))._body);
                this.userService.getUserByUserName(localStorage.getItem("currentUserName")).subscribe(
                user => {
                  this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);

                  if(this.user.likedPhotoList.filter(photo => photo.photoId == this.photo.photoId)[0]){
                    this.like="Unlike";
                  }else{
                    this.like="Like";
                  }
                },
                error => console.log(error)
              )
            },
            error => console.log(error)
            )
    	});
  	}

  	goBack(): void{
  		window.history.back();
  	}

  	likeDisplay(){

  		if(this.like == "Like"){
  			this.like="Unlike";
  			this.user.likedPhotoList.push(this.photo);
        this.photo.likes+=1;
  			this.userService.updateUser(this.user).subscribe();
        this.photoService.updatePhoto(this.photo).subscribe();
  		}else{

  			this.like="Like";

  			for (let i=0; i<this.user.likedPhotoList.length;i++) {
  				if(this.user.likedPhotoList[i].photoId == this.photo.photoId){
  					this.user.likedPhotoList.splice(i,1);
  				}
  			}

  			this.photo.likes-=1;
  			this.userService.updateUser(this.user).subscribe();
  			this.photoService.updatePhoto(this.photo).subscribe();
  		}
  	}

}