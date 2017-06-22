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
var user_1 = require('../models/user');
var register_service_1 = require('../services/register.service');
var RegisterComponent = (function () {
    function RegisterComponent(registerService) {
        this.registerService = registerService;
        this.newUser = new user_1.User();
        this.registered = false;
    }
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.registerService.sendUser(this.newUser).then(function (data) {
            _this.registered = true;
            _this.newUser = new user_1.User();
        }, function (error) { return console.log(error); });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register',
            templateUrl: 'app/components/register.component.html'
        }), 
        __metadata('design:paramtypes', [register_service_1.RegisterService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map