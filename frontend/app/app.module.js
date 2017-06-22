"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
//Component
var app_component_1 = require('./app.component');
var home_component_1 = require('./components/home.component');
var photo_list_component_1 = require('./components/photo-list.component');
var side_panel_component_1 = require('./components/side-panel.component');
var nav_bar_component_1 = require('./components/nav-bar.component');
var register_component_1 = require('./components/register.component');
var login_component_1 = require('./components/login.component');
var my_album_component_1 = require('./components/my-album.component');
var add_photo_component_1 = require('./components/add-photo.component');
var image_detail_component_1 = require('./components/image-detail.component');
var image_comments_component_1 = require('./components/image-comments.component');
var photo_row_component_1 = require('./components/photo-row.component');
//Service
var login_service_1 = require('./services/login.service');
var user_service_1 = require('./services/user.service');
var register_service_1 = require('./services/register.service');
var photo_service_1 = require('./services/photo.service');
var add_photo_service_1 = require('./services/add-photo.service');
var upload_photo_service_1 = require('./services/upload-photo.service');
var comment_service_1 = require('./services/comment.service');
var app_routing_1 = require('./app.routing');
require('./rxjs-extensions');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                photo_list_component_1.PhotoList,
                side_panel_component_1.SidePanel,
                nav_bar_component_1.NavBar,
                register_component_1.RegisterComponent,
                login_component_1.Login,
                my_album_component_1.MyAlbum,
                add_photo_component_1.AddPhoto,
                image_detail_component_1.ImageDetail,
                image_comments_component_1.ImageComments,
                photo_row_component_1.PhotoRow
            ],
            providers: [
                register_service_1.RegisterService,
                login_service_1.LoginService,
                user_service_1.UserService,
                photo_service_1.PhotoService,
                upload_photo_service_1.UploadPhotoService,
                add_photo_service_1.AddPhotoService,
                comment_service_1.CommentService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map