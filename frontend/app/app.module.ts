import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';

//Component
import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home.component';
import { PhotoList } from './components/photo-list.component';
import { SidePanel } from './components/side-panel.component';
import { NavBar } from './components/nav-bar.component';
import { RegisterComponent } from './components/register.component';
import {Login} from './components/login.component';
import {MyAlbum} from './components/my-album.component';
import {AddPhoto} from './components/add-photo.component';
import {ImageDetail} from './components/image-detail.component';
import {ImageComments} from './components/image-comments.component';
import {PhotoRow} from './components/photo-row.component';

//Service
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { RegisterService } from './services/register.service';
import { PhotoService } from './services/photo.service';
import { AddPhotoService } from './services/add-photo.service';
import { UploadPhotoService } from './services/upload-photo.service';
import { CommentService } from './services/comment.service';

import { routing } from './app.routing';
import './rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoList,
    SidePanel,
    NavBar,
    RegisterComponent,
    Login,
    MyAlbum,
    AddPhoto,
    ImageDetail,
    ImageComments,
    PhotoRow
  ],
  providers: [
    RegisterService,
    LoginService,
    UserService,
    PhotoService,
    UploadPhotoService,
    AddPhotoService,
    CommentService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }