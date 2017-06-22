import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { RegisterComponent } from './components/register.component';
import {Login} from './components/login.component';
import {MyAlbum} from './components/my-album.component';
import {AddPhoto} from './components/add-photo.component';
import {ImageDetail} from './components/image-detail.component';

const appRoutes: Routes = [
  {
    path:'image-detail/:id',
    component: ImageDetail
  },
  {
    path:'add-photo',
    component: AddPhoto
  },
  {
    path:'my-album',
    component: MyAlbum
  },
  {
    path: 'login',
    component: Login
  },
	{
		path: 'register',
		component: RegisterComponent
	},
	{
  		path: '',
  		redirectTo: '/home',
  		pathMatch: 'full'
	},
  {
    path: 'home',
    component: HomeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);