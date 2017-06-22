import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {PhotoService} from '../services/photo.service';
import {User} from '../models/user';
import {Photo} from '../models/photo';

@Component({
	selector: 'my-album',
	templateUrl: 'app/components/my-album.component.html'
})
export class MyAlbum implements OnInit{

	private photos: Photo[];
	private user;
	private selectedPhoto: Photo;

	constructor(
		private photoService:PhotoService,
		private userService:UserService,
		private router: Router
	){}

	ngOnInit(): void {
  		 this.userService.getUserByUserName(localStorage.getItem("currentUserName")).subscribe(
			user => {
				this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
				this.photoService.getPhotosByUser(this.user).subscribe(
					photos =>  this.photos=JSON.parse(JSON.parse(JSON.stringify(user))._body).photoList
				),
				error => console.log(error)
			}
		),
		error => console.log(error)
  	}

	onSelect(photo: Photo){
		this.selectedPhoto = photo;
		let link = ['/image-detail', this.selectedPhoto.photoId];
  		this.router.navigate(link);
	}

}