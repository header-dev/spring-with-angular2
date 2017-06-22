import { Component,Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {PhotoService} from '../services/photo.service';
import {UserService} from '../services/user.service';

//Models
import {Photo} from '../models/photo';
import {User} from '../models/user';

import {Comment} from '../models/comment';
import {CommentService} from '../services/comment.service';

@Component({
  selector:'image-comments',
  templateUrl:'app/components/image-comments.component.html'
})
export class ImageComments implements OnInit{
	@Input('photo') photo: Photo;
	myLocalStorate = localStorage;
	user:User = new User();
	newComment:Comment = new Comment();

	constructor(
		private userService: UserService,
		private commentService: CommentService,
		private photoService:PhotoService
	){}

	ngOnInit(): void {
		this.userService.getUserByUserName(localStorage.getItem("currentUserName")).subscribe(
			user=>{
				this.user=JSON.parse(JSON.parse(JSON.stringify(user))._body);
			},
			error => console.log(error)
		)
	}

	onSubmit(){
		this.newComment.photo = this.photo;
		this.newComment.userName=this.user.userName;
		this.newComment.photoId=this.photo.photoId;

		this.commentService.addComment(this.newComment).subscribe(
			photo => this.photoService.getPhotoById(this.photo.photoId).subscribe(
				photo => this.photo = JSON.parse(JSON.parse(JSON.stringify(photo))._body),
				error => console.log(error)
			)
		);
		this.newComment = new Comment();
	}

}