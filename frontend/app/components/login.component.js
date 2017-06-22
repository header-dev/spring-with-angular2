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
var login_service_1 = require('../services/login.service');
var Login = (function () {
    function Login(loginService) {
        this.loginService = loginService;
        this.model = { 'username': '', 'password': '' };
    }
    Login.prototype.onSubmit = function () {
        var _this = this;
        this.loginService.sendCredentials(this.model).subscribe(function (data) {
            localStorage.setItem("token", JSON.parse(JSON.stringify(data))._body);
            _this.loginService.sendToken(localStorage.getItem("token")).subscribe(function (data) {
                _this.currentUserName = _this.model.username;
                localStorage.setItem("currentUserName", _this.model.username);
                _this.model.username = "";
                _this.model.password = "";
            });
        });
    };
    Login = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'app/components/login.component.html'
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService])
    ], Login);
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=login.component.js.map