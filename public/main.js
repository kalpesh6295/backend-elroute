(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Auth/auth-service.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Auth/auth-service.service.ts ***!
  \**********************************************/
/*! exports provided: AuthServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceService", function() { return AuthServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthServiceService = /** @class */ (function () {
    function AuthServiceService(http) {
        this.http = http;
    }
    AuthServiceService.prototype.signup = function (user) {
        return this.http.post('http://www.elroute.co.in/api/auth/signup', user);
    };
    AuthServiceService.prototype.login = function (user) {
        return this.http.post('http://www.elroute.co.in/api/auth/login', user);
    };
    AuthServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthServiceService);
    return AuthServiceService;
}());



/***/ }),

/***/ "./src/app/Auth/forget-password/forget-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/Auth/forget-password/forget-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0F1dGgvZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Auth/forget-password/forget-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/Auth/forget-password/forget-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  forget-password works!\n</p>\n"

/***/ }),

/***/ "./src/app/Auth/forget-password/forget-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Auth/forget-password/forget-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent() {
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forget-password',
            template: __webpack_require__(/*! ./forget-password.component.html */ "./src/app/Auth/forget-password/forget-password.component.html"),
            styles: [__webpack_require__(/*! ./forget-password.component.css */ "./src/app/Auth/forget-password/forget-password.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/Auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/Auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sigup-form{\n  border: 10px solid #cccccc;\n  padding: 20px;\n  margin: 0;\n}\n.sigup-form h2, .sigup-form p{\n  padding: 0 10px;\n}\n.sigup-form p{\n  margin-top: -15px;\n}\nul{\n  width: 80%;\n  margin: 0 auto;\n  list-style-type: none;\n}\n.first-field{\n  display: flex;\n  width: 100%;\n}\nli{\n  width: 100%;\n  margin: 0;\n  padding: 0;\n\n}\n.form-elements{\n  margin-left: -40px;\n}\nli input{\n margin-top: 20px;\n}\ninput{\n  height: 5vh;\n  padding: 0 20px;\n  width: 100%;\n  outline: none;\n}\n.first-field .Uname{\n  width: 44%;\n  margin-left: -40px;\n\n}\n.first-field .Ulocation{\n  position: relative;\n  width: 50%;\n  height: 5.5vh;\n  margin-left: 70px;\n  margin-top: 20px;\n}\n.first-field .Ulocation select{\n  width: 100%;\n  height: 100%;\n  outline: none;\n}\n.sigup-form button{\n  width: 30%;\n  height: 6vh;\n  margin-left: 25px;\n  margin-top: 20px;\n  border-radius: 10px;\n  border: none;\n}\n.other_option h6{\n  text-align: center;\n  font-size: 15px;\n}\n.social_icon_signup{\n  width: 50%;\n  height: 6vh;\n  display: flex;\n  margin: 0 auto;\n  margin-top: -20px;\n}\n.social_icon{\n  width: 32%;\n  margin-left: 5px;\n}\n.social_icon img{\n  width: 100%;\n  height: 100%;\n}\n.login-link{\n  width: 70%;\n  margin: 0 auto;\n  height: 3vh;\n  margin-top: 10px;\n}\n.login-link h4{\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxVQUFVO0NBQ1g7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0Usa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLHNCQUFzQjtDQUN2QjtBQUNEO0VBQ0UsY0FBYztFQUNkLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXOztDQUVaO0FBQ0Q7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYztDQUNmO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsbUJBQW1COztDQUVwQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0NBQ2Y7QUFDRDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtDQUNkO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL0F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWd1cC1mb3Jte1xuICBib3JkZXI6IDEwcHggc29saWQgI2NjY2NjYztcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAwO1xufVxuLnNpZ3VwLWZvcm0gaDIsIC5zaWd1cC1mb3JtIHB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5zaWd1cC1mb3JtIHB7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xufVxudWx7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4uZmlyc3QtZmllbGR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxubGl7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG5cbn1cbi5mb3JtLWVsZW1lbnRze1xuICBtYXJnaW4tbGVmdDogLTQwcHg7XG59XG5saSBpbnB1dHtcbiBtYXJnaW4tdG9wOiAyMHB4O1xufVxuaW5wdXR7XG4gIGhlaWdodDogNXZoO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmZpcnN0LWZpZWxkIC5VbmFtZXtcbiAgd2lkdGg6IDQ0JTtcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xuXG59XG4uZmlyc3QtZmllbGQgLlVsb2NhdGlvbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUuNXZoO1xuICBtYXJnaW4tbGVmdDogNzBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5maXJzdC1maWVsZCAuVWxvY2F0aW9uIHNlbGVjdHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5zaWd1cC1mb3JtIGJ1dHRvbntcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiA2dmg7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG4ub3RoZXJfb3B0aW9uIGg2e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5zb2NpYWxfaWNvbl9zaWdudXB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNnZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG4uc29jaWFsX2ljb257XG4gIHdpZHRoOiAzMiU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uc29jaWFsX2ljb24gaW1ne1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmxvZ2luLWxpbmt7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDN2aDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5sb2dpbi1saW5rIGg0e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/Auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/Auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sigup-form\">\n    <h2>\n      SIGN IN\n    </h2>\n    <!-- <p>Register and step into the business world</p> -->\n    <form [formGroup]=\"login\" (ngSubmit)=\"onSubmit()\" >\n      <ul>\n     <!-- <li>\n    <div class=\"first-field\">\n      <div class=\"Uname\">\n      <input type=\"text\" placeholder=\"NAME\">\n      </div>\n      <div class=\"Ulocation\">\n        <select>\n          <option>LOCATION</option>\n        </select>\n      </div>\n    </div>\n  </li>\n  <li class=\"form-elements\"><input type=\"text\" placeholder=\"TITLE\"></li> -->\n  <li class=\"form-elements\"><input type=\"email\" placeholder=\"EMAIL ADDRESS\" formControlName= \"Email\" name=\"Email\"></li>\n  <li class=\"form-elements\"><input type=\"password\" placeholder=\"PASSWORD\" formControlName= \"Password\" name=\"Password\"></li>\n  <!-- <li><div class=\"terms\" style=\"display: flex; width: 100%;margin-top: 20px;margin-left: -50px; \">\n      <input type=\"checkbox\" style=\"height: 2vh; padding: 0; margin: 0;width: 10%\">\n      <p  style=\" padding: 0; margin: 0;;width: 90%; font-size: 18px;\" >I accept the <span style=\"color:cadetblue\"> Terms of Use & Privacy Policy </span></p>\n    </div></li> -->\n  </ul>\n  <button>SIGN IN</button>\n    </form>\n    <span class=\"other_option\"><h6>Or you can Sign In with the following</h6></span>\n    <div class=\"social_icon_signup\">\n      <div class=\"social_icon\">\n        <img src=\"../../../assets/images/facebook_logos_PNG19753.png\">\n      </div>\n      <div class=\"social_icon\">\n        <img src=\"../../../assets/images/new-google-logo-2015.png\">\n      </div>\n      <div class=\"social_icon\">\n          <img src=\"../../../assets/images/square-linkedin-512.png\">\n      </div>\n    </div>\n    <div class=\"login-link\">\n      <h4>Don't have a Account?<span style=\"color:cadetblue; margin-left: 5px;cursor: pointer;\">SIGN UP</span></h4>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/Auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/Auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth-service.service */ "./src/app/Auth/auth-service.service.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(storage, authService, router, notification) {
        this.storage = storage;
        this.authService = authService;
        this.router = router;
        this.notification = notification;
        this.login = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.error = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var loginValues = this.login.value;
        this.authService.login(loginValues).subscribe(function (res) {
            console.log(JSON.parse(res['_body']));
            _this.error = false;
            if (!_this.error) {
                _this.storage.set('token', res.headers.get('x-auth'));
                _this.storage.set('companyId', JSON.parse(res['_body']).Company_id[0]);
                _this.authService.token = _this.storage.set('token', res.headers.get('x-auth'));
                _this.router.navigate(['/Dashboard']);
                _this.notification.success('Welcome Back', JSON.parse(res['_body']).UserName);
            }
            else {
                _this.notification.error('Error Login');
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/Auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/Auth/login/login.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["WebStorageService"], _auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/Auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sigup-form{\n  border: 10px solid #cccccc;\n  padding: 20px;\n  margin: 0;\n}\n.sigup-form h2, .sigup-form p{\n  padding: 0 10px;\n}\n.sigup-form p{\n  margin-top: -15px;\n}\nul{\n  width: 80%;\n  margin: 0 auto;\n  list-style-type: none;\n}\n.first-field{\n  display: flex;\n  width: 100%;\n}\nli{\n  width: 100%;\n  margin: 0;\n  padding: 0;\n\n}\n.form-elements{\n  margin-left: -40px;\n}\nli input{\n margin-top: 20px;\n}\ninput{\n  height: 5vh;\n  padding: 0 20px;\n  width: 100%;\n  outline: none;\n}\n.first-field .Uname{\n  width: 44%;\n  margin-left: -40px;\n\n}\n.first-field .Ulocation{\n  position: relative;\n  width: 50%;\n  height: 5.5vh;\n  margin-left: 70px;\n  margin-top: 20px;\n}\n.first-field .Ulocation select{\n  width: 100%;\n  height: 100%;\n  outline: none;\n}\n.sigup-form button{\n  width: 30%;\n  height: 6vh;\n  margin-left: 25px;\n  margin-top: 20px;\n  border-radius: 10px;\n  border: none;\n}\n.other_option h6{\n  text-align: center;\n  font-size: 15px;\n}\n.social_icon_signup{\n  width: 50%;\n  height: 6vh;\n  display: flex;\n  margin: 0 auto;\n  margin-top: -20px;\n}\n.social_icon{\n  width: 32%;\n  margin-left: 5px;\n}\n.social_icon img{\n  width: 100%;\n  height: 100%;\n}\n.login-link{\n  width: 70%;\n  margin: 0 auto;\n  height: 3vh;\n  margin-top: 10px;\n}\n.login-link h4{\n  text-align: center;\n}\n.error{\n  border: 1px solid red;\n}\n.errorMsg{\n  font-size: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLFVBQVU7Q0FDWDtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysc0JBQXNCO0NBQ3ZCO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7O0NBRVo7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixjQUFjO0NBQ2Y7QUFDRDtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7O0NBRXBCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7Q0FDZjtBQUNEO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixhQUFhO0NBQ2Q7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLFlBQVk7RUFDWixhQUFhO0NBQ2Q7QUFDRDtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL0F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ3VwLWZvcm17XG4gIGJvcmRlcjogMTBweCBzb2xpZCAjY2NjY2NjO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDA7XG59XG4uc2lndXAtZm9ybSBoMiwgLnNpZ3VwLWZvcm0gcHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLnNpZ3VwLWZvcm0gcHtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG51bHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5maXJzdC1maWVsZHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5saXtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcblxufVxuLmZvcm0tZWxlbWVudHN7XG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcbn1cbmxpIGlucHV0e1xuIG1hcmdpbi10b3A6IDIwcHg7XG59XG5pbnB1dHtcbiAgaGVpZ2h0OiA1dmg7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZmlyc3QtZmllbGQgLlVuYW1le1xuICB3aWR0aDogNDQlO1xuICBtYXJnaW4tbGVmdDogLTQwcHg7XG5cbn1cbi5maXJzdC1maWVsZCAuVWxvY2F0aW9ue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNS41dmg7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmZpcnN0LWZpZWxkIC5VbG9jYXRpb24gc2VsZWN0e1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnNpZ3VwLWZvcm0gYnV0dG9ue1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDZ2aDtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5vdGhlcl9vcHRpb24gaDZ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLnNvY2lhbF9pY29uX3NpZ251cHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA2dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cbi5zb2NpYWxfaWNvbntcbiAgd2lkdGg6IDMyJTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5zb2NpYWxfaWNvbiBpbWd7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubG9naW4tbGlua3tcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogM3ZoO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmxvZ2luLWxpbmsgaDR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5lcnJvcntcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuLmVycm9yTXNne1xuICBmb250LXNpemU6IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/Auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/Auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sigup-form\">\n  <h2>\n    SIGN UP\n  </h2>\n  <p>Register and step into the business world</p>\n  <form [formGroup]= \"signupForm\" (ngSubmit)=\"onSubmit()\" >\n    <ul>\n   <li>\n  <div class=\"first-field\">\n    <div class=\"Uname\">\n    <input type=\"text\" placeholder=\"NAME\" formControlName=\"UserName\" name=\"UserName\" [ngClass]=\"{'error': !signupForm.get('UserName').valid && signupForm.get('UserName').touched }\">\n    <!-- <span *ngIf=\"!signupForm.get('UserName').valid && signupForm.get('UserName').touched\" class=\"errorMsg\"><p>Please Enter Company</p></span> -->\n    </div>\n    <div class=\"Ulocation\">\n      <select formControlName=\"Location\" name=\"Location\" [ngClass]=\"{'error': !signupForm.get('Location').valid && signupForm.get('Location').touched }\">\n        <option>LOCATION</option>\n      </select>\n    </div>\n  </div>\n</li>\n<li class=\"form-elements\"><input type=\"text\" placeholder=\"TITLE\"  formControlName=\"Title\" name=\"Title\" [ngClass]=\"{'error': !signupForm.get('Title').valid && signupForm.get('Title').touched }\"></li>\n<li class=\"form-elements\"><input type=\"email\" placeholder=\"EMAIL ADDRESS\" formControlName=\"Email\" name=\"Email\" [ngClass]=\"{'error': !signupForm.get('Email').valid && signupForm.get('Email').touched }\" ></li>\n<li class=\"form-elements\"><input type=\"password\" placeholder=\"PASSWORD\" formControlName=\"Password\" name=\"Password\" [ngClass]=\"{'error': !signupForm.get('Password').valid && signupForm.get('Password').touched }\" ></li>\n<li><div class=\"terms\" style=\"display: flex; width: 100%;margin-top: 20px;margin-left: -50px; \">\n    <input type=\"checkbox\" style=\"height: 2vh; padding: 0; margin: 0;width: 10%\">\n    <p  style=\" padding: 0; margin: 0;;width: 90%; font-size: 18px;\" >I accept the <span style=\"color:cadetblue\"> Terms of Use & Privacy Policy </span></p>\n  </div></li>\n</ul>\n<button type=\"submit\">Sign Up</button>\n  </form>\n  <span class=\"other_option\"><h6>Or you can Sign up with the following</h6></span>\n  <div class=\"social_icon_signup\">\n    <div class=\"social_icon\">\n      <img src=\"../../../assets/images/facebook_logos_PNG19753.png\">\n    </div>\n    <div class=\"social_icon\">\n      <img src=\"../../../assets/images/new-google-logo-2015.png\">\n    </div>\n    <div class=\"social_icon\">\n        <img src=\"../../../assets/images/square-linkedin-512.png\">\n    </div>\n  </div>\n  <div class=\"login-link\">\n    <h4>Already have a Account?<span style=\"color:cadetblue; margin-left: 5px;cursor: pointer;\" (click)=\"openLogin()\" >Sign In</span></h4>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/Auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ "./src/app/Auth/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth-service.service */ "./src/app/Auth/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_Service_user_services_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Service/user-services.service */ "./src/app/Service/user-services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var SignupComponent = /** @class */ (function () {
    function SignupComponent(storage, dialog, dialogRef, authService, router, notification, userService) {
        this.storage = storage;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.authService = authService;
        this.router = router;
        this.notification = notification;
        this.userService = userService;
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            UserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            Location: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            Title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    SignupComponent_1 = SignupComponent;
    SignupComponent.prototype.ngOnInit = function () {
    };
    //<-----------------------------to open login------------------------------------>
    SignupComponent.prototype.openLogin = function () {
        this.dialogRef.close(SignupComponent_1);
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '30%';
        this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], dialogConfig);
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.error = true;
        var SignupForm = this.signupForm.value;
        this.authService.signup(SignupForm).subscribe(function (res) {
            _this.error = false;
            if (_this.error === false) {
                console.log(JSON.parse(res['_body']));
                _this.storage.set('token', res.headers.get('x-auth'));
                //  this.storage.set('User', JSON.parse(res['_body']));
                _this.authService.token = _this.storage.get('token');
                _this.dialogRef.close(SignupComponent_1);
                /*-----------------------*/
                _this.userService.getUserData().subscribe(function (res) {
                    _this.storage.set('UserName', JSON.parse(res['_body']).UserName);
                    _this.storage.set('Location', JSON.parse(res['_body']).Location);
                    _this.storage.set('_id', JSON.parse(res['_body'])._id);
                    _this.username = _this.storage.get('UserName');
                    console.log(_this.username);
                    console.log(JSON.parse(res['_body']));
                });
                /*---------------------*/
                _this.authService.signup(SignupForm).subscribe(function (res) {
                    _this.error = false;
                    if (_this.error === false) {
                        console.log(JSON.parse(res['_body']));
                        _this.storage.set('token', res.headers.get('x-auth'));
                        //  this.storage.set('User', JSON.parse(res['_body']));
                        _this.authService.token = _this.storage.get('token');
                        _this.dialogRef.close(SignupComponent_1);
                        //      /*-----------------------*/
                        _this.userService.getUserData().subscribe(function (res) {
                            _this.storage.set('UserName', JSON.parse(res['_body']).UserName);
                            _this.storage.set('Location', JSON.parse(res['_body']).Location);
                            _this.username = _this.storage.get('UserName');
                            console.log(_this.username);
                            console.log(JSON.parse(res['_body']));
                        });
                        //      /*---------------------*/
                        _this.router.navigate(['/Dashboard']);
                        _this.notification.success('LogIn Successful');
                        console.log(_this.authService.token);
                        console.log('1' + _this.error);
                    }
                    if (_this.error) {
                        _this.notification.error('Cant LogIn Enter Valid Details');
                        console.log('3' + _this.error);
                    }
                });
                console.log(_this.error);
            }
        });
    };
    var SignupComponent_1;
    SignupComponent = SignupComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/Auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/Auth/signup/signup.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_6__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_6__["WebStorageService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], src_app_Service_user_services_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/Bookmark/Bookmarkpost/post.component.css":
/*!**********************************************************!*\
  !*** ./src/app/Bookmark/Bookmarkpost/post.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n\n.feed{\n  width: 40%;\n  height: 490px;\n  display: block;\n  margin-right: auto;\n  border: 1px solid #cccccc;\n  margin-right: 5%;\n  margin-left: 5%;\n  margin-top: 20px;\n}\n\n.authorInfo{\nwidth: 100%;\ndisplay: flex;\n}\n\n.details{\n  width: 70%;\n  height: auto;\n  display: flex;\n}\n\n.logo{\n  width: 20%;\n  height: 100%;\n  background-color: black;\n}\n\n.logo img{\n  width: 100%;\n  height: 100%;\n}\n\n.details h1{\n  margin: 0;\n  padding: 5px 0 0 15px;\n  font-weight: 500;\n  font-size: 20px;\n}\n\n.details p{\n  padding: 0px 0 0 15px !important;\n  font-size: 10px;\n}\n\n.feedInfo {\n  width: 95%;\n  margin: 0 auto;\n  height: 15%;\n  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n  border-radius: 5px 5px 0 0;\n  margin-top: 20px;\n}\n\n.feedInfo p{\n  font-size: 12px;\n  margin: 0;\n  margin-top: 5px;\n  margin-bottom: 30px;\n  width: 95%;\n  margin: 0 auto;\n  padding-top: 10px;\n}\n\n.followBtn{\n  width: 25%;\n  height: auto;\n  float: right;\n  text-align: right;\n}\n\n.followBtn button{\n  width: 80%;\n  margin-top: 10px;\n  background-color: green;\n  color: #ffffff;\n  font-weight: 600;\n  height: 25px;\n  border-radius: 15px;\n  border:none;\n  margin-left: 10px;\n}\n\n.followBtn p{\n  align-items: baseline;\n  text-align: right;\n  margin-right: 10px;\n  margin-bottom:  0;\n  font-size: 10px;\n}\n\n.feed-img{\n  width: 100%;\n  height: 60%;\n}\n\n.feed-img img {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n}\n\n.feed-share{\n  width: 100%;\n  height: 7%;\n  /* background-color: burlywood; */\n  display: block;\n  display: flex;\n}\n\n.feed-share img\n{\n  width: 4%;\n  margin-left: 1%;\n\n}\n\n.tagged{\n  width: 100%;\n  height: 7%;\n}\n\nmat-expansion-panel{\n  border-radius: 0 !important;\n\n}\n\nmat-expansion-panel{\n  /* box-shadow: 0 0 0 0!important; */\n}\n\n.tagged mat-expansion-panel-header{\n  height: 35px !important;\n  color: #ffffff !important;\n}\n\nmat-panel-title h4{\n  margin: 0;\n  font-size: 14px;\n  font-weight: 100;\n}\n\n@media screen and (max-width:700px){\n  .company_industry,.login_user{\n    display: none;\n  }\n  .with_login{\n    width: 100%;\n    margin: 0px;\n    padding-top: 18%;\n  }\n  .feeds{\n    width: 100%;\n    padding: 0px;\n  }\n  .add_media h2{\n    font-size: 15px;\n    margin-top: -5px;\n  }\n  .add_media span{\n    font-size: 10px;\n  }\n  .add_feed {\n    font-size: 11px;\n    width: 12%;\n  }\n  section{\n    width: 95%;\n  }\n  .followBtn button{\n    width: 100%;\n    font-size: 8px;\n  }\n  .followBtn p{\n    margin-right: 0;\n  }\n  .details h1{\n    font-size: 15px;\n  }\n  .details p{\n    font-size: 8px;\n  }\n  .feedInfo p{\n    font-size: 10px;\n    line-height: 15px;\n  }\n  mat-panel-title h4{\n    font-size: 11px;\n  }\n  .feed{\n    width: 90%;\n    height: 490px;\n    display: block;\n    margin-right: auto;\n    border: 1px solid #cccccc;\n    margin-right: 5%;\n    margin-left: 5%;\n    margin-top: 20px;\n  }\n}\n\n@media screen and (min-width: 767px) and (max-width: 1024px){\n\n  .login_user{\n  width: 26%;\n  }\n  .user_name h2\n{\n  font-size: 15px;\n  color: #FAF6F6;\n  margin-top: -2px;\n  float: left;\n}\n  .company_industry{\n    width: 25%;\n    }\n  .feeds{\n    width: 48%;\n    padding: 0px;\n  }\n  .add_media h2{\n    font-size: 15px;\n    margin-top: -5px;\n  }\n  .add_media span{\n    font-size: 10px;\n  }\n  .add_feed {\n    font-size: 15px;\n    width: 21%;\n  }\n  section{\n    width: 95%;\n  }\n  .followBtn button{\n    width: 100%;\n    font-size: 8px;\n  }\n  .followBtn p{\n    margin-right: 0;\n  }\n  .details h1{\n    font-size: 15px;\n  }\n  .details p{\n    font-size: 8px;\n  }\n  .feedInfo p{\n    font-size: 10px;\n    line-height: 15px;\n  }\n  mat-panel-title h4{\n    font-size: 11px;\n  }\n}\n\n@media screen and (min-width: 700px) and (max-width: 1440px){\n  .with_login{\n    width: 85%;\n  }\n}\n\ninput{\n  width: 100%;\n  margin: 0 auto;\n  padding: 15px;\n  border:none;\n  margin-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQm9va21hcmsvQm9va21hcmtwb3N0L3Bvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjs7QUFDRDtBQUNBLFlBQVk7QUFDWixjQUFjO0NBQ2I7O0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGNBQWM7Q0FDZjs7QUFDRDtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isd0JBQXdCO0NBQ3pCOztBQUNEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7Q0FDZDs7QUFDRDtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLGlDQUFpQztFQUNqQyxnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixvR0FBb0c7RUFDcEcsMkJBQTJCO0VBQzNCLGlCQUFpQjtDQUNsQjs7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtDQUNuQjs7QUFDRDtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLGtCQUFrQjtDQUNuQjs7QUFDRDtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osa0JBQWtCO0NBQ25COztBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLFlBQVk7RUFDWixZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtDQUN4Qjs7QUFDRDtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixjQUFjO0NBQ2Y7O0FBQ0Q7O0VBRUUsVUFBVTtFQUNWLGdCQUFnQjs7Q0FFakI7O0FBQ0Q7RUFDRSxZQUFZO0VBQ1osV0FBVztDQUNaOztBQUNEO0VBQ0UsNEJBQTRCOztDQUU3Qjs7QUFDRDtFQUNFLG9DQUFvQztDQUNyQzs7QUFDRDtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7Q0FDM0I7O0FBQ0Q7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjs7QUFDRDtFQUNFO0lBQ0UsY0FBYztHQUNmO0VBQ0Q7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtHQUNsQjtFQUNEO0lBQ0UsWUFBWTtJQUNaLGFBQWE7R0FDZDtFQUNEO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtHQUNsQjtFQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztHQUNaO0VBQ0Q7SUFDRSxXQUFXO0dBQ1o7RUFDRDtJQUNFLFlBQVk7SUFDWixlQUFlO0dBQ2hCO0VBQ0Q7SUFDRSxnQkFBZ0I7R0FDakI7RUFDRDtJQUNFLGdCQUFnQjtHQUNqQjtFQUNEO0lBQ0UsZUFBZTtHQUNoQjtFQUNEO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtHQUNuQjtFQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0dBQ2xCO0NBQ0Y7O0FBRUQ7O0VBRUU7RUFDQSxXQUFXO0dBQ1Y7RUFDRDs7RUFFQSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0NBQ2I7RUFDQztJQUNFLFdBQVc7S0FDVjtFQUNIO0lBQ0UsV0FBVztJQUNYLGFBQWE7R0FDZDtFQUNEO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtHQUNsQjtFQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztHQUNaO0VBQ0Q7SUFDRSxXQUFXO0dBQ1o7RUFDRDtJQUNFLFlBQVk7SUFDWixlQUFlO0dBQ2hCO0VBQ0Q7SUFDRSxnQkFBZ0I7R0FDakI7RUFDRDtJQUNFLGdCQUFnQjtHQUNqQjtFQUNEO0lBQ0UsZUFBZTtHQUNoQjtFQUNEO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtHQUNuQjtFQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0NBQ0Y7O0FBQ0Q7RUFDRTtJQUNFLFdBQVc7R0FDWjtDQUNGOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL0Jvb2ttYXJrL0Jvb2ttYXJrcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9ue1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmZlZWR7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogNDkwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5hdXRob3JJbmZve1xud2lkdGg6IDEwMCU7XG5kaXNwbGF5OiBmbGV4O1xufVxuLmRldGFpbHN7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cbi5sb2dve1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLmxvZ28gaW1ne1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRldGFpbHMgaDF7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNXB4IDAgMCAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uZGV0YWlscyBwe1xuICBwYWRkaW5nOiAwcHggMCAwIDE1cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmZlZWRJbmZvIHtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTUlO1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMik7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmZlZWRJbmZvIHB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5mb2xsb3dCdG57XG4gIHdpZHRoOiAyNSU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5mb2xsb3dCdG4gYnV0dG9ue1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyOm5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmZvbGxvd0J0biBwe1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206ICAwO1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uZmVlZC1pbWd7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwJTtcbn1cbi5mZWVkLWltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmZlZWQtc2hhcmV7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDclO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7ICovXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZlZWQtc2hhcmUgaW1nXG57XG4gIHdpZHRoOiA0JTtcbiAgbWFyZ2luLWxlZnQ6IDElO1xuXG59XG4udGFnZ2Vke1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3JTtcbn1cbm1hdC1leHBhbnNpb24tcGFuZWx7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcblxufVxubWF0LWV4cGFuc2lvbi1wYW5lbHtcbiAgLyogYm94LXNoYWRvdzogMCAwIDAgMCFpbXBvcnRhbnQ7ICovXG59XG4udGFnZ2VkIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVye1xuICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cbm1hdC1wYW5lbC10aXRsZSBoNHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjcwMHB4KXtcbiAgLmNvbXBhbnlfaW5kdXN0cnksLmxvZ2luX3VzZXJ7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAud2l0aF9sb2dpbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nLXRvcDogMTglO1xuICB9XG4gIC5mZWVkc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgLmFkZF9tZWRpYSBoMntcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbiAgfVxuICAuYWRkX21lZGlhIHNwYW57XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5hZGRfZmVlZCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHdpZHRoOiAxMiU7XG4gIH1cbiAgc2VjdGlvbntcbiAgICB3aWR0aDogOTUlO1xuICB9XG4gIC5mb2xsb3dCdG4gYnV0dG9ue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICB9XG4gIC5mb2xsb3dCdG4gcHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbiAgLmRldGFpbHMgaDF7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC5kZXRhaWxzIHB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gIH1cbiAgLmZlZWRJbmZvIHB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB9XG4gIG1hdC1wYW5lbC10aXRsZSBoNHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbiAgLmZlZWR7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDQ5MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpe1xuXG4gIC5sb2dpbl91c2Vye1xuICB3aWR0aDogMjYlO1xuICB9XG4gIC51c2VyX25hbWUgaDJcbntcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI0ZBRjZGNjtcbiAgbWFyZ2luLXRvcDogLTJweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4gIC5jb21wYW55X2luZHVzdHJ5e1xuICAgIHdpZHRoOiAyNSU7XG4gICAgfVxuICAuZmVlZHN7XG4gICAgd2lkdGg6IDQ4JTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgLmFkZF9tZWRpYSBoMntcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbiAgfVxuICAuYWRkX21lZGlhIHNwYW57XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5hZGRfZmVlZCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHdpZHRoOiAyMSU7XG4gIH1cbiAgc2VjdGlvbntcbiAgICB3aWR0aDogOTUlO1xuICB9XG4gIC5mb2xsb3dCdG4gYnV0dG9ue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICB9XG4gIC5mb2xsb3dCdG4gcHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbiAgLmRldGFpbHMgaDF7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC5kZXRhaWxzIHB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gIH1cbiAgLmZlZWRJbmZvIHB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB9XG4gIG1hdC1wYW5lbC10aXRsZSBoNHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KXtcbiAgLndpdGhfbG9naW57XG4gICAgd2lkdGg6IDg1JTtcbiAgfVxufVxuXG5pbnB1dHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXI6bm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/Bookmark/Bookmarkpost/post.component.html":
/*!***********************************************************!*\
  !*** ./src/app/Bookmark/Bookmarkpost/post.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-user-overview></app-user-overview>\n<section>\n    \n    <h2>Bookmarks</h2>\n    <app-header3></app-header3>\n    <input type=\"search\" placeholder=\"Enter Product/Service to Search\">\n    <div class=\"feed\">\n    <div class=\"authorInfo\">\n    <div class=\"details\">\n      <div class=\"logo\">\n        <img src=\"https://picsum.photos/500/300/?random\">\n      </div>\n      <div class=\"info\">\n     <h1>Company Name</h1>\n     <p style=\"line-height: 0px;margin-bottom: 12px;margin-top: 5px;\">Industry</p>\n     <p style=\"line-height: 3px;margin-bottom: 10px;\">Location</p>\n    </div>\n    </div>\n    <div class=\"followBtn\">\n     <button>Following<span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20%\" height=\"50%\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z\"/></svg></span></button>\n     <p>34,342 followers</p>\n    </div>\n    </div>\n    <div class=\"feedInfo\">\n      <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content </p>\n    </div>\n    <div class=\"feed-img\">\n    <img src=\"https://picsum.photos/500/300/?random\">\n    </div>\n    <div class=\"feed-share\">\n        <p  style=\"padding: 4px; margin: 0; display: flex;width: 100%;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"  viewBox=\"0 0 24 24\"><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg><span><b style=\"margin-left: 5px;\">24,244</b></span></p>\n        <p style=\" padding: 0; margin:4px 0;     margin-right: 10px;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M16 15v4l8-8.035-8-7.965v4s-13.277 2.144-16 14c5.796-6.206 16-6 16-6z\"/></svg></p>\n        </div>\n    <div class=\"tagged\">\n       <mat-expansion-panel>\n           <mat-expansion-panel-header style=\"background-color:#6E7892;\">\n             <mat-panel-title>\n              <h4 style=\"  color: #fff\">Tagged Products</h4>\n             </mat-panel-title>\n           </mat-expansion-panel-header>\n\n           <p>This is the primary content of the panel.</p>\n\n         </mat-expansion-panel>\n    </div>\n    </div>\n\n    </section>\n"

/***/ }),

/***/ "./src/app/Bookmark/Bookmarkpost/post.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Bookmark/Bookmarkpost/post.component.ts ***!
  \*********************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostComponent = /** @class */ (function () {
    function PostComponent() {
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/Bookmark/Bookmarkpost/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/Bookmark/Bookmarkpost/post.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/Bookmark/bookmark/bookmark.component.css":
/*!**********************************************************!*\
  !*** ./src/app/Bookmark/bookmark/bookmark.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .search-bar{\n  width: 95%;\n  display: flex;\n}\n.search-container {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  margin-top: 120px;\n  z-index: -1;\n\n}\n\n\ninput#search-bar {\n  margin: 0 auto;\n  width: 100%;\n  height: 7vh;\n  padding: 0px 45px;\n  font-size: 1.5rem;\n  border: 1px solid #D0CFCE;\n  outline: none;\n  border-radius: 10px 0 0 10px;\n  outline: none;\n}\ninput#search-bar:focus {\n  transition: 0.35s ease;\n}\ninput#search-bar:focus::-webkit-input-placeholder {\n  transition: opacity 0.45s ease;\n  opacity: 0;\n}\ninput#search-bar:focus::-moz-placeholder {\n  transition: opacity 0.45s ease;\n  opacity: 0;\n}\ninput#search-bar:focus:-ms-placeholder {\n  transition: opacity 0.45s ease;\n  opacity: 0;\n}\n\n.search-icon {\n  position: relative;\n  float: left;\n  width: 75px;\n  height: 75px;\n  top: -62px;\n  right: 15px;\n}\n.search-container button{\n  position: relative;\n  padding: 0;\n  margin: 0;\n  height: 2.3vh;\n  border: none;\n  cursor: pointer;\n  border-radius: 0 10px 10px 0;\n}\n.search-container button  {\n  margin-right: 10px;\n  height: 70%;\n  padding: 0;\n  margin: 0;\n  text-align: center;\n  outline: none;\n  border-radius: 0 10px 10px 0;\n  padding: 0 40px;\n  font-size: 16px;\n}\n.toggleBtn{\n  position: relative;\n  padding: 0;\n  margin: 0;\n  width: 120px;\n  border: none;\n  cursor: pointer;\n  background-color: transparent;\n  border-radius: 0 !important ;\n  margin-right: -40px !important;\n\n}\n.filter{\n  width: 100%;\n  height: 7vh;\n  background-color: royalblue;\n  margin-top: 30px;\n} */\nsection{\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 30px;\n\n}\n.listing{\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 30px;\n}\n.Card{\n  width: 30%;\n  border-radius: 10px;\n  margin-right: 3%;\n  margin-bottom: 30px;\n  display: flex;\n  flex-wrap: wrap;\n  box-shadow: 0 2px 2px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23);\n}\n.productCard, .ServiceCard{\n  display: flex;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #cccccccc;\n  border-radius: 10px 10px 10px 10px\n}\n.productImage, .ServiceImage {\n  border-radius: 10px 0 0 10px;\n  width: 35%;\n  height: 100%;\n}\n.bookmark{\n  width: 1%;\n  height: 3%;\n  background-color: red;\n  position: absolute;\n  margin-left: 10%;\n}\n.productImage img , .ServiceImage img{\n  width: 100%;\n  height: 100%;\n  border-radius: 10px 0 0 10px;\n}\n.productContent{\n  width: 65%;\n  height: 100%;\n  border-radius: 0px 10px 10px 0px;\n}\n.content{\n  width: 95%;\n  margin: 0 auto;\n  height: 100%;\n}\n.discription{\n  font-size: 12px;\n}\n.productContent .content .productCategory h6 ,.ServiceContent .content .ServiceCategory h6 {\n  float: right;\n  margin: 13px 15px 0 0;\n  font-size: 7px;\n  font-weight: 100;\n}\n.productContent .content .productName , .ServiceContent .content .ServiceName{\n  width: 100%;\n\n}\n.productContent .content .productName h2 , .ServiceContent .content .ServiceName h2{\n  margin: 0;\n  width: 100%;\n  font-weight: 100;\n  font-size: 15px;\n  padding-top: 3px;\n  justify-content: flex-end;\n    display: flex\n}\n.productContent .content .productName h5 ,.ServiceContent .content .ServiceName h5{\n  margin: 0;\n  font-weight: 100;\n  text-align: right;\n  font-size: 10px;\n}\n.productContent .content .productName small , .ServiceContent .content .ServiceName small{\n  font-size: 8px;\n  text-align: right;\n}\n.tags{\n  width: 100%;\n  float: right;\n  background-color: azure;\n  height: 20px;\n  margin-bottom: 2px;\n}\n.other-info{\n  width: 100%;\n  display: flex;\n}\n.price{\n  width: 30%;\n}\n.hits {\n  width: 70%;\n}\n.price h4{\n  margin: 0;\n  font-size: 12px;\n}\n.hits p{\n  margin: 0;\n  float: right;\n  font-size: 12px;\n}\n.ServiceContent{\n  width: 65%;\n  height: 100%;\n  border-radius: 10px 0px 0px 10px;\n}\n.ServiceImage{\n  border-radius: 0 10px 10px 0;\n}\n.ServiceImage img{\n  border-radius: 0 10px 10px 0;\n}\n.ServiceContent .content .ServiceCategory h6 {\n  float: right;\n  margin: 13px 0 0 15px;\n}\n.ServiceCard .price{\n  width: 70%;\n}\n.ServiceCard .hits {\n  width: 30%;\n}\n.ServiceCard .price h4{\n  margin: 0;\n}\n.ServiceCard .hits p{\n  margin: 0;\n  float: left;\n}\ninput{\n  width: 100%;\n  padding: 15px;\n  border:none;\n  margin-left: 10px;\n}\n@media screen and (max-width:700px) {\nsection {\n  width: 90%;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.Card {\n  width: 100%;\n\n  \n}\n}\n@media screen and  (min-width:767px)and (max-width:1024px){\n  .Card {\n    width: 47%;\n    \n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQm9va21hcmsvYm9va21hcmsvYm9va21hcmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFzRkk7QUFDSjtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCOztDQUVsQjtBQUdEO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1FQUFtRTtDQUNwRTtBQUNEO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLGtDQUFrQztDQUNuQztBQUNEO0VBQ0UsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxhQUFhO0NBQ2Q7QUFDRDtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCO0NBQzlCO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGlDQUFpQztDQUNsQztBQUNEO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0NBQ2Q7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxZQUFZOztDQUViO0FBQ0Q7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtJQUN4QixhQUFhO0NBQ2hCO0FBQ0Q7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGVBQWU7RUFDZixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLFlBQVk7RUFDWixjQUFjO0NBQ2Y7QUFDRDtFQUNFLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsV0FBVztDQUNaO0FBQ0Q7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixpQ0FBaUM7Q0FDbEM7QUFDRDtFQUNFLDZCQUE2QjtDQUM5QjtBQUNEO0VBQ0UsNkJBQTZCO0NBQzlCO0FBQ0Q7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0NBQ3ZCO0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7QUFDRDtFQUNFLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsVUFBVTtDQUNYO0FBQ0Q7RUFDRSxVQUFVO0VBQ1YsWUFBWTtDQUNiO0FBQ0E7RUFDQyxZQUFZO0VBQ1osY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7Q0FDbkI7QUFFRDtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLFlBQVk7OztDQUdiO0NBQ0E7QUFJRDtFQUNFO0lBQ0UsV0FBVzs7Q0FFZDtDQUNBIiwiZmlsZSI6InNyYy9hcHAvQm9va21hcmsvYm9va21hcmsvYm9va21hcmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5zZWFyY2gtYmFye1xuICB3aWR0aDogOTUlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnNlYXJjaC1jb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMTIwcHg7XG4gIHotaW5kZXg6IC0xO1xuXG59XG5cblxuaW5wdXQjc2VhcmNoLWJhciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3dmg7XG4gIHBhZGRpbmc6IDBweCA0NXB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0QwQ0ZDRTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmlucHV0I3NlYXJjaC1iYXI6Zm9jdXMge1xuICB0cmFuc2l0aW9uOiAwLjM1cyBlYXNlO1xufVxuaW5wdXQjc2VhcmNoLWJhcjpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40NXMgZWFzZTtcbiAgb3BhY2l0eTogMDtcbn1cbmlucHV0I3NlYXJjaC1iYXI6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNDVzIGVhc2U7XG4gIG9wYWNpdHk6IDA7XG59XG5pbnB1dCNzZWFyY2gtYmFyOmZvY3VzOi1tcy1wbGFjZWhvbGRlciB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40NXMgZWFzZTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnNlYXJjaC1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNzVweDtcbiAgdG9wOiAtNjJweDtcbiAgcmlnaHQ6IDE1cHg7XG59XG4uc2VhcmNoLWNvbnRhaW5lciBidXR0b257XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDIuM3ZoO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMDtcbn1cbi5zZWFyY2gtY29udGFpbmVyIGJ1dHRvbiAge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGhlaWdodDogNzAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMDtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4udG9nZ2xlQnRue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudCA7XG4gIG1hcmdpbi1yaWdodDogLTQwcHggIWltcG9ydGFudDtcblxufVxuLmZpbHRlcntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogN3ZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59ICovXG5zZWN0aW9ue1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMzBweDtcblxufVxuXG5cbi5saXN0aW5ne1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uQ2FyZHtcbiAgd2lkdGg6IDMwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLDAsMCwwLjE5KSwgMCAzcHggM3B4IHJnYmEoMCwwLDAsMC4yMyk7XG59XG4ucHJvZHVjdENhcmQsIC5TZXJ2aWNlQ2FyZHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjY2NjO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4XG59XG4ucHJvZHVjdEltYWdlLCAuU2VydmljZUltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcbiAgd2lkdGg6IDM1JTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmJvb2ttYXJre1xuICB3aWR0aDogMSU7XG4gIGhlaWdodDogMyU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuLnByb2R1Y3RJbWFnZSBpbWcgLCAuU2VydmljZUltYWdlIGltZ3tcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcbn1cbi5wcm9kdWN0Q29udGVudHtcbiAgd2lkdGg6IDY1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAxMHB4IDBweDtcbn1cbi5jb250ZW50e1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRpc2NyaXB0aW9ue1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucHJvZHVjdENvbnRlbnQgLmNvbnRlbnQgLnByb2R1Y3RDYXRlZ29yeSBoNiAsLlNlcnZpY2VDb250ZW50IC5jb250ZW50IC5TZXJ2aWNlQ2F0ZWdvcnkgaDYge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMTNweCAxNXB4IDAgMDtcbiAgZm9udC1zaXplOiA3cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4ucHJvZHVjdENvbnRlbnQgLmNvbnRlbnQgLnByb2R1Y3ROYW1lICwgLlNlcnZpY2VDb250ZW50IC5jb250ZW50IC5TZXJ2aWNlTmFtZXtcbiAgd2lkdGg6IDEwMCU7XG5cbn1cbi5wcm9kdWN0Q29udGVudCAuY29udGVudCAucHJvZHVjdE5hbWUgaDIgLCAuU2VydmljZUNvbnRlbnQgLmNvbnRlbnQgLlNlcnZpY2VOYW1lIGgye1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZGlzcGxheTogZmxleFxufVxuLnByb2R1Y3RDb250ZW50IC5jb250ZW50IC5wcm9kdWN0TmFtZSBoNSAsLlNlcnZpY2VDb250ZW50IC5jb250ZW50IC5TZXJ2aWNlTmFtZSBoNXtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogMTAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLnByb2R1Y3RDb250ZW50IC5jb250ZW50IC5wcm9kdWN0TmFtZSBzbWFsbCAsIC5TZXJ2aWNlQ29udGVudCAuY29udGVudCAuU2VydmljZU5hbWUgc21hbGx7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi50YWdze1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG4ub3RoZXItaW5mb3tcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucHJpY2V7XG4gIHdpZHRoOiAzMCU7XG59XG4uaGl0cyB7XG4gIHdpZHRoOiA3MCU7XG59XG4ucHJpY2UgaDR7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmhpdHMgcHtcbiAgbWFyZ2luOiAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5TZXJ2aWNlQ29udGVudHtcbiAgd2lkdGg6IDY1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMTBweDtcbn1cbi5TZXJ2aWNlSW1hZ2V7XG4gIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XG59XG4uU2VydmljZUltYWdlIGltZ3tcbiAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMDtcbn1cbi5TZXJ2aWNlQ29udGVudCAuY29udGVudCAuU2VydmljZUNhdGVnb3J5IGg2IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDEzcHggMCAwIDE1cHg7XG59XG4uU2VydmljZUNhcmQgLnByaWNle1xuICB3aWR0aDogNzAlO1xufVxuLlNlcnZpY2VDYXJkIC5oaXRzIHtcbiAgd2lkdGg6IDMwJTtcbn1cbi5TZXJ2aWNlQ2FyZCAucHJpY2UgaDR7XG4gIG1hcmdpbjogMDtcbn1cbi5TZXJ2aWNlQ2FyZCAuaGl0cyBwe1xuICBtYXJnaW46IDA7XG4gIGZsb2F0OiBsZWZ0O1xufVxuIGlucHV0e1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyOm5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjcwMHB4KSB7XG5zZWN0aW9uIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uQ2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIFxufVxufVxuXG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgIChtaW4td2lkdGg6NzY3cHgpYW5kIChtYXgtd2lkdGg6MTAyNHB4KXtcbiAgLkNhcmQge1xuICAgIHdpZHRoOiA0NyU7XG4gICAgXG59XG59Il19 */"

/***/ }),

/***/ "./src/app/Bookmark/bookmark/bookmark.component.html":
/*!***********************************************************!*\
  !*** ./src/app/Bookmark/bookmark/bookmark.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-overview style=\"margin: 0 auto;width: 80%;\"></app-user-overview>\n<section>\n\n<h2>Bookmarks</h2>\n<app-header3></app-header3>\n<input type=\"search\" placeholder=\"Enter Product/Service to Search\">\n    <div class=\"listing\">\n\n      <!-- <--------------------------------------------------------------------Product Card------------------------------------------------------------------------->\n    <div class=\"Card\" *ngFor=\"let card of cards; let i = index\">\n      <div class=\"productCard\" *ngIf=\"card.type == 1\">\n    <div class=\"productImage\">\n      <!-- <div class=\"bookmark\">\n\n      </div> -->\n      <img src=\"https://picsum.photos/200/300/?random\">\n    </div>\n    <div class=\"productContent\" >\n    <div class=\"content\">\n    <div class=\"productCategory\">\n    <h6>{{card.catogory}}</h6>\n    </div>\n    <div class=\"productName\">\n      <h2>{{card.productName}}</h2>\n      <h5>{{card.company}}</h5>\n      <small style=\"float:right\"><span style=\"border-right:1px solid #cccccc; padding-right: 4px\">{{card.device}}</span><span style= \"padding-left: 8px\">{{card.country}}</span></small>\n    </div>\n    <div class=\"discription\" style=\"margin-top:30px;\">\n    <p>{{card.discription}}</p>\n    </div>\n    <div class=\"tags\">\n\n    </div>\n    <div class=\"other-info\">\n      <div class=\"price\">\n      <h4>Price</h4>\n    </div>\n    <div class=\"hits\">\n      <p>24,354 hits</p>\n    </div>\n    </div>\n    </div>\n    </div>\n      </div>\n      <!-- <--------------------------------------------------------------------Service Card------------------------------------------------------------------------->\n      <div class=\"ServiceCard\" *ngIf=\"card.type == 2\" >\n\n          <div class=\"ServiceContent\">\n          <div class=\"content\">\n          <div class=\"ServiceCategory\">\n          <h6>{{card.Servicecatogory}}</h6>\n          </div>\n          <div class=\"ServiceName\">\n            <h2>{{card.serviceName}}</h2>\n            <h5>{{card.scompany}}</h5>\n            <small style=\"float:right\"><span style=\"border-right:1px solid #cccccc; padding-right: 8px\">{{card.sdevice}}</span><span style= \"padding-left: 8px\">{{card.scountry}}</span></small>\n          </div>\n          <div class=\"discription\" style=\"margin-top:30px;\">\n          <p>{{card.sdiscription}}</p>\n          </div>\n          <div class=\"tags\">\n\n          </div>\n          <div class=\"other-info\">\n            <div class=\"price\">\n            <h4>Price</h4>\n          </div>\n          <div class=\"hits\">\n            <p>24,354 hits</p>\n          </div>\n          </div>\n          </div>\n          </div>\n          <div class=\"ServiceImage\">\n              <!-- <div class=\"bookmark\">\n\n              </div> -->\n              <img src=\"https://picsum.photos/200/300/?random\">\n            </div>\n            </div>\n    </div>\n\n    </div>\n  \n</section>"

/***/ }),

/***/ "./src/app/Bookmark/bookmark/bookmark.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Bookmark/bookmark/bookmark.component.ts ***!
  \*********************************************************/
/*! exports provided: BookmarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkComponent", function() { return BookmarkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Service_bookmark_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service/bookmark-services.service */ "./src/app/Service/bookmark-services.service.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var BookmarkComponent = /** @class */ (function () {
    function BookmarkComponent(bookmarkService, storage) {
        this.bookmarkService = bookmarkService;
        this.storage = storage;
    }
    // cards = [
    //   {
    //   type: 1,
    //   catogory: 'Laptp',
    //   productName: 'Product Name',
    //   company: 'Company ka Naam',
    //   device: 'computer',
    //   country: 'China',
    //   discription: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    //   },
    //   {
    //     type: 2,
    //     Servicecatogory: 'Service',
    //     serviceName: 'Product Name',
    //     scompany: 'Company ka Naam',
    //     sdevice: 'computer',
    //     scountry: 'China',
    //     sdiscription: 'It is a ader will be distracted by the readable content of a page when looking at its layout.'
    //     },
    //     {
    //       type: 2,
    //       Servicecatogory: 'Service',
    //       serviceName: 'Product Name',
    //       scompany: 'Company ka Naam',
    //       sdevice: 'computer',
    //       scountry: 'China',
    //       sdiscription: 'It is a ader will be distracted by the readable content of a page when looking at its layout.'
    //       },
    //       {
    //         type: 2,
    //         Servicecatogory: 'Service',
    //         serviceName: 'Acer Aspire E5-574G 57T1',
    //         scompany: 'by Jinan Kelunte Bearing Co., Ltd.',
    //         sdevice: 'computer',
    //         scountry: 'China',
    //         sdiscription: 'It is a ader will be distracted by the readable content of a page when looking at its layout.'
    //         },
    //         {
    //           type: 2,
    //           Servicecatogory: 'Service',
    //           serviceName: 'Product Name',
    //           scompany: 'Company ka Naam',
    //           sdevice: 'computer',
    //           scountry: 'China',
    //           sdiscription: 'It is a ader will be distracted by the readable content of a page when looking at its layout.'
    //           },
    //           {
    //             type: 2,
    //             Servicecatogory: 'Service',
    //             serviceName: 'Product Name',
    //             scompany: 'Company ka Naam',
    //             sdevice: 'computer',
    //             scountry: 'China',
    //             sdiscription: 'It is a ader will be distracted by the readable content of a page when looking at its layout.'
    //             },
    //     {
    //       type: 1,
    //       catogory: 'Lap',
    //       productName: 'Prot Name',
    //       company: 'Company',
    //       device: 'computer',
    //       country: 'China',
    //       discription: 'It is a long established fact that a reader will be d of a page when looking at its layout.'
    //       },
    //       {
    //         type: 2,
    //         Servicecatogory: 'Service',
    //         serviceName: 'Product Name',
    //         scompany: 'Company ka Naam',
    //         sdevice: 'computer',
    //         scountry: 'China',
    //         sdiscription: 'It is a long established fact that a reader will be readable content of a page when looking at its layout.'
    //         },
    //         {
    //           type: 1,
    //           catogory: 'Laptp',
    //           productName: 'Product Name',
    //           company: 'Company ka Naam',
    //           device: 'computer',
    //           country: 'China',
    //           discription: 'It is a long established fact that a reader will be distrable content of a page when looking at its layout.'
    //           },
    //           {
    //             type: 2,
    //             Servicecatogory: 'Service',
    //             serviceName: 'Product Name',
    //             scompany: 'Company ka Naam',
    //             sdevice: 'computer',
    //             scountry: 'China',
    //             sdiscription: 'It is a long established fact that a reader will beble content of a page when looking at its layout.'
    //             }
    // ];
    BookmarkComponent.prototype.ngOnInit = function () {
        this.bookmarkService.token = this.storage.get('token');
        this.bookmarkService.BookmarkResult().subscribe(function (res) {
            console.log(res);
        });
    };
    BookmarkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bookmark',
            template: __webpack_require__(/*! ./bookmark.component.html */ "./src/app/Bookmark/bookmark/bookmark.component.html"),
            styles: [__webpack_require__(/*! ./bookmark.component.css */ "./src/app/Bookmark/bookmark/bookmark.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [src_app_Service_bookmark_services_service__WEBPACK_IMPORTED_MODULE_1__["BookmarkServices"], angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["WebStorageService"]])
    ], BookmarkComponent);
    return BookmarkComponent;
}());



/***/ }),

/***/ "./src/app/Bookmark/company/company.component.css":
/*!********************************************************!*\
  !*** ./src/app/Bookmark/company/company.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nsection{\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.listing{\n  width: 100%;\n  height: auto;\n}\n.companyCard{\n  width: 48%;\n  margin: 0 auto;\n  border: 1px solid #ccc;\n  border-radius: 30px;\n  float: left;\n  margin-top: 40px;\n  margin-right: 1%;\n  margin-left: 1%;\n}\n.cardHeader{\n  width: 95%;\n  margin: 0 auto;\n  display: flex;\n}\n.logo{\n  height: auto;\n}\n.logo img{\n  width: 120px;\n  height: 120px;\n  padding: 5px 0 0 0;\n  border-radius: 50%;\n}\n.companyInfo{\n  width: 65%;\n  margin-left: 20px;\n}\n.companyInfo h1{\n  margin: 0;\n  padding: 5px 0 0 0;\n}\n.companyInfo button{\n  width: 18%;\n  height: 25px;\n  border: none;\n  border-radius: 10px;\n}\n.storyBtn{\n  width: 40%;\n  margin-left: 5%;\n  margin-top: 20px;\n}\n.storyBtn button{\n  width: 100%;\n  height: 40px;\n  border-radius: 20px;\n  border:none;\n}\n.discription{\n  width: 90%;\n  margin: 0 auto;\n}\n.discription p{\n  width: 80%;\n}\n.cardFooter{\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n}\n.tags{\n  width: 80%;\n\n}\n.tags p{\n  margin: 0;\n  padding: 0px 0 15px 0;\n}\n.icons{\n  width: 20%;\n  display: flex;\n}\n.icons span\n{\n  margin: -9% 1% 1%;\n}\n.icons img\n{\n  width: 80%;\n}\n.icons p{\n  margin: 0;\n  padding: 0px 0 15px 0;\n}\n.des\n{\n  display: none;\n}\n@media screen and (max-width: 700px){\n  section{\n    width: 95%;\n    margin: 0 auto;\n    margin-top: 30px;\n    padding-top: 7%;\n  }\n  .companyCard {\n    width: 100%;\n    margin: 0 auto;\n    border: 1px solid #ccc;\n    border-radius: 30px;\n    margin-top: 21px;\n\n}\n.storyBtn {\n  display: none;\n}\n.companyInfo h1 {\n  float: left;\n  margin: 0;\n  padding: 5px 0 0 0;\n  font-size: 16px;\n}\n.b1{\n  float: right;\n  margin-left: 29px;\n}\n.discription\n{\n  display: none;\n}\n.des\n{\n  display: block;\n}\n.cardFooter\n{\n  display: none;\n}\n.companyInfo  button{\n  width: 27%;\n  height: 25px;\n  border: none;\n  border-radius: 10px;\n}\n.listing input{\n  width: 95%;\n  margin: 0 auto;\n  padding: 10px;\n  border:none;\n}\n}\n@media screen and (min-width: 767px) and (max-width: 1024px){\n  section{\n    width: 90%;\n    margin: 0 auto;\n\n    margin-top: 30px;\n  }\n  .storyBtn{\n    width: 26%;\n    margin-left: 5%;\n    margin-top: 20px;\n}\n.companyCard {\n  width: 100%;\n  margin: 0 auto;\n  border: 1px solid #ccc;\n  border-radius: 30px;\n  float: left;\n  margin-top: 40px;\n  margin-right: 1%;\n  margin-left: 1%;\n\n}\n}\ninput{\n  width: 100%;\n  margin: 0 auto;\n  padding: 15px;\n  border:none;\n  margin-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQm9va21hcmsvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLFlBQVk7RUFDWixhQUFhO0NBQ2Q7QUFDRDtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztDQUNmO0FBQ0Q7RUFDRSxhQUFhO0NBQ2Q7QUFDRDtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2Isb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsV0FBVztDQUNaO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7Q0FDZjtBQUNEO0VBQ0UsV0FBVzs7Q0FFWjtBQUNEO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtDQUN2QjtBQUNEO0VBQ0UsV0FBVztFQUNYLGNBQWM7Q0FDZjtBQUNEOztFQUVFLGtCQUFrQjtDQUNuQjtBQUNEOztFQUVFLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtDQUN2QjtBQUNEOztFQUVFLGNBQWM7Q0FDZjtBQUNEO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7R0FDakI7RUFDRDtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixpQkFBaUI7O0NBRXBCO0FBQ0Q7RUFDRSxjQUFjO0NBQ2Y7QUFDRDtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtDQUNuQjtBQUNEOztFQUVFLGNBQWM7Q0FDZjtBQUNEOztFQUVFLGVBQWU7Q0FDaEI7QUFDRDs7RUFFRSxjQUFjO0NBQ2Y7QUFDRDtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0VBQ2QsWUFBWTtDQUNiO0NBQ0E7QUFDRDtFQUNFO0lBQ0UsV0FBVztJQUNYLGVBQWU7O0lBRWYsaUJBQWlCO0dBQ2xCO0VBQ0Q7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtDQUNwQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjs7Q0FFakI7Q0FDQTtBQUNEO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL0Jvb2ttYXJrL2NvbXBhbnkvY29tcGFueS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5zZWN0aW9ue1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5saXN0aW5ne1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmNvbXBhbnlDYXJke1xuICB3aWR0aDogNDglO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMSU7XG4gIG1hcmdpbi1sZWZ0OiAxJTtcbn1cbi5jYXJkSGVhZGVye1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cbi5sb2dve1xuICBoZWlnaHQ6IGF1dG87XG59XG4ubG9nbyBpbWd7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgcGFkZGluZzogNXB4IDAgMCAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uY29tcGFueUluZm97XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmNvbXBhbnlJbmZvIGgxe1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDVweCAwIDAgMDtcbn1cbi5jb21wYW55SW5mbyBidXR0b257XG4gIHdpZHRoOiAxOCU7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnN0b3J5QnRue1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uc3RvcnlCdG4gYnV0dG9ue1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6bm9uZTtcbn1cbi5kaXNjcmlwdGlvbntcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uZGlzY3JpcHRpb24gcHtcbiAgd2lkdGg6IDgwJTtcbn1cbi5jYXJkRm9vdGVye1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cbi50YWdze1xuICB3aWR0aDogODAlO1xuXG59XG4udGFncyBwe1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDBweCAwIDE1cHggMDtcbn1cbi5pY29uc3tcbiAgd2lkdGg6IDIwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5pY29ucyBzcGFuXG57XG4gIG1hcmdpbjogLTklIDElIDElO1xufVxuLmljb25zIGltZ1xue1xuICB3aWR0aDogODAlO1xufVxuLmljb25zIHB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMHB4IDAgMTVweCAwO1xufVxuLmRlc1xue1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xuICBzZWN0aW9ue1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLXRvcDogNyU7XG4gIH1cbiAgLmNvbXBhbnlDYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMjFweDtcblxufVxuLnN0b3J5QnRuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jb21wYW55SW5mbyBoMSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDVweCAwIDAgMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmIxe1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiAyOXB4O1xufVxuLmRpc2NyaXB0aW9uXG57XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZGVzXG57XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNhcmRGb290ZXJcbntcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jb21wYW55SW5mbyAgYnV0dG9ue1xuICB3aWR0aDogMjclO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5saXN0aW5nIGlucHV0e1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOm5vbmU7XG59XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XG4gIHNlY3Rpb257XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcblxuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbiAgLnN0b3J5QnRue1xuICAgIHdpZHRoOiAyNiU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uY29tcGFueUNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDElO1xuICBtYXJnaW4tbGVmdDogMSU7XG5cbn1cbn1cbmlucHV0e1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlcjpub25lO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Bookmark/company/company.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Bookmark/company/company.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-user-overview></app-user-overview>\n<section>\n    <h2>Bookmarks</h2>\n    <app-header3></app-header3>\n    <div class=\"listing\">\n        <!-- <input type=\"search\" placeholder=\"Enter Product/Service to Search\"> -->\n        <input type=\"search\" placeholder=\"Enter Product/Service to Search\">\n    <div class=\"companyCard\">\n    <div class=\"cardHeader\">\n      <div class=\"logo\">\n       <img src=\"https://picsum.photos/200/300/?random\">\n      </div>\n      <div class=\"companyInfo\">\n        <h1>Company Name <span style=\"font-size:13px;\" class=\"b1\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"  viewBox=\"0 0 24 24\"><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg></span></h1>\n        <p><span style=\"padding: 0 10px 0 0;border-right: 1px solid #ccc\" >Location</span> <span style=\"padding: 0 0 0 10px;\">Industry</span></p>\n        <button>Follow</button> <span style=\"margin-left:20px;\">24,567 followers</span>\n      </div>\n      <div class=\"storyBtn\">\n      <button>Know Our Story</button>\n      </div>\n    </div>\n    <div class=\"discription\">\n      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n    </div>\n    <mat-accordion  class=\"des\">\n\n        <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                             (closed)=\"panelOpenState = false\">\n          <mat-expansion-panel-header  class=\"speci\" style=\"background-color:#F5F5F5;\">\n            <mat-panel-title>\n                <h2 >Description</h2>\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class=\"speci_1\"  >\n            <div class=\"speci_details\">\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n\n            </div>\n\n\n          </div>\n        </mat-expansion-panel>\n\n      </mat-accordion>\n    <div class=\"cardFooter\">\n    <div class=\"tags\">\n    <p>Taggs</p>\n    </div>\n    <div class=\"icons\">\n        <span><img src=\"assets/images/google_icon.png\"></span>\n        <span><img src=\"assets/images/contact1.png\"></span>\n    </div>\n    </div>\n    </div>\n    </div>\n    </section>\n\n"

/***/ }),

/***/ "./src/app/Bookmark/company/company.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Bookmark/company/company.component.ts ***!
  \*******************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyComponent = /** @class */ (function () {
    function CompanyComponent() {
    }
    CompanyComponent.prototype.ngOnInit = function () {
    };
    CompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/Bookmark/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.css */ "./src/app/Bookmark/company/company.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/Bookmark/feeds/feeds.component.css":
/*!****************************************************!*\
  !*** ./src/app/Bookmark/feeds/feeds.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\n    width: 65%;\n    margin: 0 auto;\n    margin-top: 5%;\n  }\n  \n  .feed{\n    width: 100%;\n    height: 490px;\n    display: block;\n    margin-right: auto;\n    border: 1px solid #cccccc;\n  }\n  \n  .authorInfo{\n  width: 100%;\n  display: flex;\n  }\n  \n  .details{\n    width: 70%;\n    height: auto;\n    display: flex;\n  }\n  \n  .logo{\n    width: 20%;\n    height: 100%;\n    background-color: black;\n  }\n  \n  .logo img{\n    width: 100%;\n    height: 100%;\n  }\n  \n  .details h1{\n    margin: 0;\n    padding: 5px 0 0 15px;\n    font-weight: 500;\n    font-size: 20px;\n  }\n  \n  .details p{\n    padding: 0px 0 0 15px !important;\n    font-size: 10px;\n  }\n  \n  .feedInfo {\n    width: 95%;\n    margin: 0 auto;\n    height: 15%;\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n    border-radius: 5px 5px 0 0;\n    margin-top: 20px;\n  }\n  \n  .feedInfo p{\n    font-size: 12px;\n    margin: 0;\n    margin-top: 5px;\n    margin-bottom: 30px;\n    width: 95%;\n    margin: 0 auto;\n    padding-top: 10px;\n  }\n  \n  .followBtn{\n    width: 25%;\n    height: auto;\n    float: right;\n    text-align: right;\n  }\n  \n  .followBtn button{\n    width: 80%;\n    margin-top: 10px;\n    background-color: green;\n    color: #ffffff;\n    font-weight: 600;\n    height: 25px;\n    border-radius: 15px;\n    border:none;\n    margin-left: 10px;\n  }\n  \n  .followBtn p{\n    align-items: baseline;\n    text-align: right;\n    margin-right: 10px;\n    margin-bottom:  0;\n    font-size: 10px;\n  }\n  \n  .feed-img{\n    width: 100%;\n    height: 60%;\n  }\n  \n  .feed-img img {\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n  }\n  \n  .feed-share{\n    width: 100%;\n    height: 7%;\n    background-color: burlywood;\n    display: block;\n  }\n  \n  .tagged{\n    width: 100%;\n    height: 7%;\n  }\n  \n  mat-expansion-panel{\n    border-radius: 0 !important;\n    background-color:#6E7892;\n  \n  }\n  \n  mat-expansion-panel{\n    /* box-shadow: 0 0 0 0!important; */\n  }\n  \n  .tagged mat-expansion-panel-header{\n    height: 35px !important;\n    color: #ffffff !important;\n  }\n  \n  mat-panel-title h4{\n    margin: 0;\n    font-size: 14px;\n    font-weight: 100;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQm9va21hcmsvZmVlZHMvZmVlZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtHQUNoQjs7RUFFRDtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiwwQkFBMEI7R0FDM0I7O0VBQ0Q7RUFDQSxZQUFZO0VBQ1osY0FBYztHQUNiOztFQUNEO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixjQUFjO0dBQ2Y7O0VBQ0Q7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHdCQUF3QjtHQUN6Qjs7RUFDRDtJQUNFLFlBQVk7SUFDWixhQUFhO0dBQ2Q7O0VBQ0Q7SUFDRSxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixnQkFBZ0I7R0FDakI7O0VBQ0Q7SUFDRSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0dBQ2pCOztFQUNEO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osb0dBQW9HO0lBQ3BHLDJCQUEyQjtJQUMzQixpQkFBaUI7R0FDbEI7O0VBQ0Q7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7R0FDbkI7O0VBQ0Q7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7R0FDbkI7O0VBQ0Q7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGtCQUFrQjtHQUNuQjs7RUFDRDtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7R0FDakI7O0VBQ0Q7SUFDRSxZQUFZO0lBQ1osWUFBWTtHQUNiOztFQUNEO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7R0FDeEI7O0VBQ0Q7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLDRCQUE0QjtJQUM1QixlQUFlO0dBQ2hCOztFQUNEO0lBQ0UsWUFBWTtJQUNaLFdBQVc7R0FDWjs7RUFDRDtJQUNFLDRCQUE0QjtJQUM1Qix5QkFBeUI7O0dBRTFCOztFQUNEO0lBQ0Usb0NBQW9DO0dBQ3JDOztFQUNEO0lBQ0Usd0JBQXdCO0lBQ3hCLDBCQUEwQjtHQUMzQjs7RUFDRDtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0dBQ2xCIiwiZmlsZSI6InNyYy9hcHAvQm9va21hcmsvZmVlZHMvZmVlZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb257XG4gICAgd2lkdGg6IDY1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgfVxuICBcbiAgLmZlZWR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0OTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgfVxuICAuYXV0aG9ySW5mb3tcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmRldGFpbHN7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAubG9nb3tcbiAgICB3aWR0aDogMjAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgfVxuICAubG9nbyBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5kZXRhaWxzIGgxe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiA1cHggMCAwIDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLmRldGFpbHMgcHtcbiAgICBwYWRkaW5nOiAwcHggMCAwIDE1cHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLmZlZWRJbmZvIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGhlaWdodDogMTUlO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIC5mZWVkSW5mbyBwe1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxuICAuZm9sbG93QnRue1xuICAgIHdpZHRoOiAyNSU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICAuZm9sbG93QnRuIGJ1dHRvbntcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuICAuZm9sbG93QnRuIHB7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAgMDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLmZlZWQtaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjAlO1xuICB9XG4gIC5mZWVkLWltZyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG4gIC5mZWVkLXNoYXJle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNyU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC50YWdnZWR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3JTtcbiAgfVxuICBtYXQtZXhwYW5zaW9uLXBhbmVse1xuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM2RTc4OTI7XG4gIFxuICB9XG4gIG1hdC1leHBhbnNpb24tcGFuZWx7XG4gICAgLyogYm94LXNoYWRvdzogMCAwIDAgMCFpbXBvcnRhbnQ7ICovXG4gIH1cbiAgLnRhZ2dlZCBtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcntcbiAgICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICB9XG4gIG1hdC1wYW5lbC10aXRsZSBoNHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/Bookmark/feeds/feeds.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Bookmark/feeds/feeds.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n\n\n    <div class=\"feed\">\n    <div class=\"authorInfo\">\n    <div class=\"details\">\n      <div class=\"logo\">\n        <img src=\"https://picsum.photos/500/300/?random\">\n      </div>\n      <div class=\"info\">\n     <h1>Company Name</h1>\n     <p style=\"line-height: 0px;margin-bottom: 12px;margin-top: 5px;\">Industry</p>\n     <p style=\"line-height: 3px;margin-bottom: 10px;\">Location</p>\n    </div>\n    </div>\n    <div class=\"followBtn\" >\n     <button >Following</button>\n     <p>34,342 followers</p>\n    </div>\n    </div>\n    <div class=\"feedInfo\">\n      <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content </p>\n    </div>\n    <div class=\"feed-img\">\n    <img src=\"https://picsum.photos/500/300/?random\">\n    </div>\n    <div class=\"feed-share\">\n    <p  style=\"padding: 0; margin: 0;\">Bookmark</p>\n    <p style=\"float:right; padding: 0; margin: 0;     margin-right: 10px;\">Share</p>\n    </div>\n    <div class=\"tagged\">\n       <mat-expansion-panel>\n           <mat-expansion-panel-header>\n             <mat-panel-title>\n              <h4>Tagged Products</h4>\n             </mat-panel-title>\n           </mat-expansion-panel-header>\n    \n           <p>This is the primary content of the panel.</p>\n    \n         </mat-expansion-panel>\n    </div>\n    </div>\n    \n    </section>"

/***/ }),

/***/ "./src/app/Bookmark/feeds/feeds.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Bookmark/feeds/feeds.component.ts ***!
  \***************************************************/
/*! exports provided: FeedsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedsComponent", function() { return FeedsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeedsComponent = /** @class */ (function () {
    function FeedsComponent() {
    }
    FeedsComponent.prototype.ngOnInit = function () {
    };
    FeedsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feeds',
            template: __webpack_require__(/*! ./feeds.component.html */ "./src/app/Bookmark/feeds/feeds.component.html"),
            styles: [__webpack_require__(/*! ./feeds.component.css */ "./src/app/Bookmark/feeds/feeds.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeedsComponent);
    return FeedsComponent;
}());



/***/ }),

/***/ "./src/app/Bookmark/product/product.component.css":
/*!********************************************************!*\
  !*** ./src/app/Bookmark/product/product.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Jvb2ttYXJrL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Bookmark/product/product.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Bookmark/product/product.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Bookmark/product/product.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Bookmark/product/product.component.ts ***!
  \*******************************************************/
/*! exports provided: ProductBookmarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductBookmarkComponent", function() { return ProductBookmarkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductBookmarkComponent = /** @class */ (function () {
    function ProductBookmarkComponent() {
    }
    ProductBookmarkComponent.prototype.ngOnInit = function () {
    };
    ProductBookmarkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/Bookmark/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/Bookmark/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductBookmarkComponent);
    return ProductBookmarkComponent;
}());



/***/ }),

/***/ "./src/app/Bpage/b-page/b-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/Bpage/b-page/b-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-badge-content{font-weight:600;font-size:12px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-badge-small .mat-badge-content{font-size:6px}.mat-badge-large .mat-badge-content{font-size:24px}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 56px;letter-spacing:-.05em}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.02em}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.005em}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px}.mat-bottom-sheet-container{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-button-toggle{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card-title{font-size:24px;font-weight:500}.mat-card-header .mat-card-title{font-size:20px}.mat-card-content,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:14px;font-weight:500}.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}.mat-table{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell,.mat-footer-cell{font-size:14px}.mat-calendar{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif}.mat-expansion-panel-header{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field-wrapper{padding-bottom:1.34375em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.34375em) scale(.75);transform:translateY(-1.34375em) scale(.75);width:133.33333%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.34374em) scale(.75);transform:translateY(-1.34374em) scale(.75);width:133.33334%}.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}.mat-form-field-label{top:1.34375em}.mat-form-field-underline{bottom:1.34375em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.66667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.54167em;top:calc(100% - 1.66667em)}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28122em) scale(.75);transform:translateY(-1.28122em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28121em) scale(.75);transform:translateY(-1.28121em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.2812em) scale(.75);transform:translateY(-1.2812em) scale(.75)}}.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em 0}.mat-form-field-appearance-fill .mat-form-field-label{top:1.09375em;margin-top:-.5em}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-.59375em) scale(.75);transform:translateY(-.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-.59374em) scale(.75);transform:translateY(-.59374em) scale(.75);width:133.33334%}.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0 1em 0}.mat-form-field-appearance-outline .mat-form-field-label{top:1.84375em;margin-top:-.25em}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.59375em) scale(.75);transform:translateY(-1.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.59374em) scale(.75);transform:translateY(-1.59374em) scale(.75);width:133.33334%}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px}.mat-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-slider-thumb-label-text{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-sub-label-error{font-weight:400}.mat-step-label-error{font-size:14px}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tab-label,.mat-tab-link{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0}.mat-tooltip{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset{font-size:14px;padding-top:8px;padding-bottom:8px}.mat-list-item{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-base .mat-list-item{font-size:16px}.mat-list-base .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-list-option{font-size:16px}.mat-list-base .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-list-base[dense] .mat-list-item{font-size:12px}.mat-list-base[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}.mat-list-base[dense] .mat-list-option{font-size:12px}.mat-list-base[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list-base[dense] .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-simple-snackbar{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-nested-tree-node,.mat-tree-node{font-weight:400;font-size:14px}.mat-ripple{overflow:hidden;position:relative}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1),-webkit-transform 0s cubic-bezier(0,0,.2,1);-webkit-transform:scale(0);transform:scale(0)}@media screen and (-ms-high-contrast:active){.mat-ripple-element{display:none}}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}@-webkit-keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-start{/*!*/}@-webkit-keyframes cdk-text-field-autofill-end{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;animation-name:cdk-text-field-autofill-start}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{height:auto!important;overflow:hidden!important;padding:2px 0!important;box-sizing:content-box!important}.mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-option{color:rgba(0,0,0,.87)}.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#673ab7}.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ffd740}.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}.mat-optgroup-label{color:rgba(0,0,0,.54)}.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox::after{color:#fafafa}.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ffd740}.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#673ab7}.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled{background:#b0b0b0}.mat-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mat-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mat-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mat-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mat-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mat-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mat-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mat-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mat-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mat-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mat-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mat-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mat-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mat-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mat-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mat-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mat-app-background{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-theme-loaded-marker{display:none}.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}.mat-badge-content{color:#fff;background:#673ab7}.mat-badge-accent .mat-badge-content{background:#ffd740;color:rgba(0,0,0,.87)}.mat-badge-warn .mat-badge-content{color:#fff;background:#f44336}.mat-badge{position:relative}.mat-badge-hidden .mat-badge-content{display:none}.mat-badge-disabled .mat-badge-content{background:#b9b9b9;color:rgba(0,0,0,.38)}.mat-badge-content{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out, -webkit-transform .2s ease-in-out;-webkit-transform:scale(.6);transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}.mat-badge-content.mat-badge-active{-webkit-transform:none;transform:none}.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px}@media screen and (-ms-high-contrast:active){.mat-badge-small .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}@media screen and (-ms-high-contrast:active){.mat-badge-medium .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-11px}.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px}@media screen and (-ms-high-contrast:active){.mat-badge-large .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}.mat-bottom-sheet-container{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);background:#fff;color:rgba(0,0,0,.87)}.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:0 0}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#673ab7}.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ffd740}.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:#673ab7}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:#ffd740}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:#f44336}.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}.mat-button .mat-ripple-element,.mat-icon-button .mat-ripple-element,.mat-stroked-button .mat-ripple-element{opacity:.1;background-color:currentColor}.mat-button-focus-overlay{background:#000}.mat-stroked-button:not([disabled]){border-color:rgba(0,0,0,.12)}.mat-fab,.mat-flat-button,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:#fff}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:rgba(0,0,0,.87)}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#673ab7}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ffd740}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}.mat-fab.mat-primary .mat-ripple-element,.mat-flat-button.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-fab.mat-accent .mat-ripple-element,.mat-flat-button.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-fab.mat-warn .mat-ripple-element,.mat-flat-button.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-flat-button:not([class*=mat-elevation-z]),.mat-stroked-button:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-raised-button:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-raised-button:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-raised-button[disabled]:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-fab:not([class*=mat-elevation-z]),.mat-mini-fab:not([class*=mat-elevation-z]){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-fab:not([disabled]):active:not([class*=mat-elevation-z]),.mat-mini-fab:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-fab[disabled]:not([class*=mat-elevation-z]),.mat-mini-fab[disabled]:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-button-toggle-group,.mat-button-toggle-standalone{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{box-shadow:none}.mat-button-toggle{color:rgba(0,0,0,.38)}.mat-button-toggle .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.12)}.mat-button-toggle-appearance-standard{color:rgba(0,0,0,.87);background:#fff}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:#000}.mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle{border-left:solid 1px rgba(0,0,0,.12)}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle+.mat-button-toggle{border-left:none;border-right:none;border-top:solid 1px rgba(0,0,0,.12)}.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-checked.mat-button-toggle-appearance-standard{color:rgba(0,0,0,.87)}.mat-button-toggle-disabled{color:rgba(0,0,0,.26);background-color:#eee}.mat-button-toggle-disabled.mat-button-toggle-appearance-standard{background:#fff}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{border:solid 1px rgba(0,0,0,.12)}.mat-card{background:#fff;color:rgba(0,0,0,.87)}.mat-card:not([class*=mat-elevation-z]){box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-card.mat-card-flat:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-card-subtitle{color:rgba(0,0,0,.54)}.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark{fill:#fafafa}.mat-checkbox-checkmark-path{stroke:#fafafa!important}@media screen and (-ms-high-contrast:black-on-white){.mat-checkbox-checkmark-path{stroke:#000!important}}.mat-checkbox-mixedmark{background-color:#fafafa}.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#673ab7}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ffd740}.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked:not(.mat-checkbox-indeterminate) .mat-checkbox-background{background-color:#b0b0b0}.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}.mat-checkbox-disabled .mat-checkbox-label{color:rgba(0,0,0,.54)}@media screen and (-ms-high-contrast:active){.mat-checkbox-disabled{opacity:.5}}@media screen and (-ms-high-contrast:active){.mat-checkbox-background{background:0 0}}.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{background-color:#673ab7}.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:#ffd740}.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{background-color:#f44336}.mat-chip.mat-standard-chip{background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip:not(.mat-chip-disabled):active{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-chip.mat-standard-chip:not(.mat-chip-disabled) .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-disabled{opacity:.4}.mat-chip.mat-standard-chip::after{background:#000}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#673ab7;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-ripple-element{background:rgba(255,255,255,.1)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-ripple-element{background:rgba(255,255,255,.1)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent{background-color:#ffd740;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-ripple-element{background:rgba(0,0,0,.1)}.mat-table{background:#fff}.mat-table tbody,.mat-table tfoot,.mat-table thead,.mat-table-sticky,[mat-footer-row],[mat-header-row],[mat-row],mat-footer-row,mat-header-row,mat-row{background:inherit}mat-footer-row,mat-header-row,mat-row,td.mat-cell,td.mat-footer-cell,th.mat-header-cell{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell{color:rgba(0,0,0,.54)}.mat-cell,.mat-footer-cell{color:rgba(0,0,0,.87)}.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}.mat-datepicker-content .mat-calendar-next-button,.mat-datepicker-content .mat-calendar-previous-button,.mat-datepicker-toggle{color:rgba(0,0,0,.54)}.mat-calendar-table-header{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}.mat-calendar-body-selected{background-color:#673ab7;color:#fff}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(103,58,183,.4)}.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);background-color:#fff;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-selected{background-color:#ffd740;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(255,215,64,.4)}.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px rgba(0,0,0,.87)}.mat-datepicker-content.mat-warn .mat-calendar-body-selected{background-color:#f44336;color:#fff}.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(244,67,54,.4)}.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content-touch{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-datepicker-toggle-active{color:#673ab7}.mat-datepicker-toggle-active.mat-accent{color:#ffd740}.mat-datepicker-toggle-active.mat-warn{color:#f44336}.mat-dialog-container{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);background:#fff;color:rgba(0,0,0,.87)}.mat-divider{border-top-color:rgba(0,0,0,.12)}.mat-divider-vertical{border-right-color:rgba(0,0,0,.12)}.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-action-row{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}@media (hover:none){.mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background:#fff}}.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.26)}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}.mat-form-field-label{color:rgba(0,0,0,.6)}.mat-hint{color:rgba(0,0,0,.6)}.mat-form-field.mat-focused .mat-form-field-label{color:#673ab7}.mat-form-field.mat-focused .mat-form-field-label.mat-accent{color:#ffd740}.mat-form-field.mat-focused .mat-form-field-label.mat-warn{color:#f44336}.mat-focused .mat-form-field-required-marker{color:#ffd740}.mat-form-field-ripple{background-color:rgba(0,0,0,.87)}.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#673ab7}.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent{background-color:#ffd740}.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn{background-color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent{background-color:#f44336}.mat-error{color:#f44336}.mat-form-field-appearance-legacy .mat-form-field-label{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-hint{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-standard .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-fill .mat-form-field-flex{background-color:rgba(0,0,0,.04)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02)}.mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before{background-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline{color:rgba(0,0,0,.12)}.mat-form-field-appearance-outline .mat-form-field-outline-thick{color:rgba(0,0,0,.87)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#673ab7}.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick{color:#ffd740}.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:rgba(0,0,0,.06)}.mat-icon.mat-primary{color:#673ab7}.mat-icon.mat-accent{color:#ffd740}.mat-icon.mat-warn{color:#f44336}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{color:rgba(0,0,0,.54)}.mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix::after,.mat-input-element:disabled{color:rgba(0,0,0,.38)}.mat-input-element{caret-color:#673ab7}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-accent .mat-input-element{caret-color:#ffd740}.mat-form-field-invalid .mat-input-element,.mat-warn .mat-input-element{caret-color:#f44336}.mat-form-field-type-mat-native-select.mat-form-field-invalid .mat-form-field-infix::after{color:#f44336}.mat-list-base .mat-list-item{color:rgba(0,0,0,.87)}.mat-list-base .mat-list-option{color:rgba(0,0,0,.87)}.mat-list-base .mat-subheader{color:rgba(0,0,0,.54)}.mat-list-item-disabled{background-color:#eee}.mat-list-option:focus,.mat-list-option:hover,.mat-nav-list .mat-list-item:focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}.mat-menu-panel{background:#fff}.mat-menu-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}.mat-menu-item[disabled],.mat-menu-item[disabled]::after{color:rgba(0,0,0,.38)}.mat-menu-item .mat-icon:not([color]),.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator{background:#fff}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:rgba(0,0,0,.38)}.mat-progress-bar-background{fill:#d1c4e9}.mat-progress-bar-buffer{background-color:#d1c4e9}.mat-progress-bar-fill::after{background-color:#673ab7}.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#ffe57f}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ffe57f}.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ffd740}.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}.mat-progress-spinner circle,.mat-spinner circle{stroke:#673ab7}.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ffd740}.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#673ab7}.mat-radio-button.mat-primary .mat-radio-inner-circle,.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-primary:active .mat-radio-persistent-ripple{background-color:#673ab7}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ffd740}.mat-radio-button.mat-accent .mat-radio-inner-circle,.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#ffd740}.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}.mat-radio-button.mat-warn .mat-radio-inner-circle,.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-warn:active .mat-radio-persistent-ripple{background-color:#f44336}.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle,.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}.mat-radio-button .mat-ripple-element{background-color:#000}.mat-select-value{color:rgba(0,0,0,.87)}.mat-select-placeholder{color:rgba(0,0,0,.42)}.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}.mat-select-arrow{color:rgba(0,0,0,.54)}.mat-select-panel{background:#fff}.mat-select-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#673ab7}.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ffd740}.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push{background-color:#fff}.mat-drawer:not(.mat-drawer-side){box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-drawer-side{border-right:solid 1px rgba(0,0,0,.12)}.mat-drawer-side.mat-drawer-end{border-left:solid 1px rgba(0,0,0,.12);border-right:none}[dir=rtl] .mat-drawer-side{border-left:solid 1px rgba(0,0,0,.12);border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#ffd740}.mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:rgba(255,215,64,.54)}.mat-slide-toggle.mat-checked .mat-ripple-element{background-color:#ffd740}.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{background-color:#673ab7}.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{background-color:rgba(103,58,183,.54)}.mat-slide-toggle.mat-primary.mat-checked .mat-ripple-element{background-color:#673ab7}.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-thumb{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-bar{background-color:rgba(244,67,54,.54)}.mat-slide-toggle.mat-warn.mat-checked .mat-ripple-element{background-color:#f44336}.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:#000}.mat-slide-toggle-thumb{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);background-color:#fafafa}.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}.mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#673ab7}.mat-primary .mat-slider-thumb-label-text{color:#fff}.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ffd740}.mat-accent .mat-slider-thumb-label-text{color:rgba(0,0,0,.87)}.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}.mat-warn .mat-slider-thumb-label-text{color:#fff}.mat-slider-focus-ring{background-color:rgba(255,215,64,.2)}.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill{background-color:rgba(0,0,0,.26)}.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}@media (hover:none){.mat-step-header:hover{background:0 0}}.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.54)}.mat-step-header .mat-step-icon{background-color:rgba(0,0,0,.54);color:#fff}.mat-step-header .mat-step-icon-selected,.mat-step-header .mat-step-icon-state-done,.mat-step-header .mat-step-icon-state-edit{background-color:#673ab7;color:#fff}.mat-step-header .mat-step-icon-state-error{background-color:transparent;color:#f44336}.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}.mat-step-header .mat-step-label.mat-step-label-error{color:#f44336}.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}.mat-horizontal-stepper-header::after,.mat-horizontal-stepper-header::before,.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}.mat-sort-header-arrow{color:#757575}.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#673ab7}.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ffd740}.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:rgba(0,0,0,.87)}.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#673ab7}.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ffd740}.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(0,0,0,.12)}.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary{background:#673ab7;color:#fff}.mat-toolbar.mat-accent{background:#ffd740;color:rgba(0,0,0,.87)}.mat-toolbar.mat-warn{background:#f44336;color:#fff}.mat-toolbar .mat-focused .mat-form-field-ripple,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-form-field-underline{background-color:currentColor}.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-select-value{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-tooltip{background:rgba(97,97,97,.9)}.mat-tree{background:#fff}.mat-nested-tree-node,.mat-tree-node{color:rgba(0,0,0,.87)}.mat-snack-bar-container{color:rgba(255,255,255,.7);background:#323232;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-simple-snackbar-action{color:#ffd740}section{\n  width: 90%;\n  margin: 0 auto;\n  margin-top: 4%;\n\n}header{\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  box-shadow: 0px 3px 10px #5555;\n}.card{\n  display: flex;\n  width: 40%;\n  margin-top: 1%;\n}.card h1{\n  text-align: center;\n  font-size: 35px;\n  font-weight: 400;\n}.iandl{\nwidth: 60%;\nmargin: 0 auto;\ndisplay: flex;\n}.iandl h3{\n  width: 48%;\n  text-align: center;\n  margin: 0;\n}.follow-btn{\n  margin-top: 30px;\n  display: flex;\n}.follow-btn button{\n  width: 70%;\n  height: 50px;\n  border: none;\n  color: #fff;\n  background-color: #333333;\n  font-size: 20px;\n}.follow-btn span\n{\n  margin-left: 18%;\n  font-size: 26px;\n}.extraInfo{\n width: 30%;\n  box-shadow: 0px 3px 10px #5555;\n  padding: 0px 25px;\n\n}.social{\n  width: 100%;\n  margin-bottom: 20px;\n  display: flex\n}.social_links\n{\n  width: 100%;\n\n}.social_links span\n{\n  padding: 0px 2%;\n}.card-left{\n  width: 100%;\n  display: flex;\n\n}.card-left h3{\n  font-weight: 400;\n  margin: 0;\n  padding-top: 20px;\n}.headerImg{\n  width: 60%;\n  height: 34vh;\n  background-color: #fff;\n  display: flex;\n}.logoheader{\n  width: 35%;\n  height: 20%;\n  /* background-color: darkseagreen; */\n\n  top:50px;\n  /* left: 35%; */\n  padding: 22px 22px;\n\n}.logoheader img{\nwidth: 100%;\nbox-shadow: 0px 3px 10px #5555;\n}.img{\n  width: 100%;\n  height: 100%;\n  /* background-color: darkgreen;\n   background-image: linear-gradient(to right, gold 30%, transparent 80%);  */\n\n}.img img{\n  width: 100%;\n  height: 100%;\n}.tabs{\n  width: 100%;\n  margin-top: 3vh;\n  height: 15vh;\n  display: flex;\n}.tab{\n  height: 100%;\n  width: 30%;\n  background-color: white;\n  margin-left: 5%;\n  margin-right: 0%;\n  transition: .2s;\n  box-shadow: 0px 3px 10px #5555;\n}.tabClicked{\n  height: 150%;\n  transition: .2s;\n}.tab h1{\n  text-align: center;\n  font-size: 35px;\n  font-weight: 500;\n}.body{\n  width: 100%;\n  display: flex;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-top: 50px;\n}.infoSection1{\n  width: 95%;\n  margin: 0 auto;\n  display: flex;\n  margin-top: 30px;\n}.shortBio{\n  width: 27%;\n  box-shadow: 0px 3px 10px #5555;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}.bio{\n  width: 90%;\n  margin: 0 auto;\n\n}.bio h2{\n  margin-top: 0;\n  width: 100%;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 10px;\n}.feed{\n  width: 38%;\n  height: 490px;\n  display: block;\n  margin-right: auto;\n  border: 1px solid #cccccc;\n  margin-right: 4%;\n  margin-left: 3%;\n}.authorInfo{\nwidth: 100%;\ndisplay: flex;\n}.details{\n  width: 70%;\n  height: auto;\n  display: flex;\n}.logo{\n  width: 20%;\n  height: 100%;\n  background-color: black;\n}.logo img{\n  width: 100%;\n  height: 100%;\n}.details h1{\n  margin: 0;\n  padding: 5px 0 0 15px;\n  font-weight: 500;\n  font-size: 20px;\n}.details p{\n  padding: 0px 0 0 15px !important;\n  font-size: 10px;\n}.feedInfo {\n  width: 95%;\n  margin: 0 auto;\n  height: 15%;\n  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n  border-radius: 5px 5px 0 0;\n  margin-top: 20px;\n}.feedInfo p{\n  font-size: 12px;\n  margin: 0;\n  margin-top: 5px;\n  margin-bottom: 30px;\n  width: 95%;\n  margin: 0 auto;\n  padding-top: 10px;\n}.followBtn{\n  width: 25%;\n  height: auto;\n  float: right;\n  text-align: right;\n}.followBtn button{\n  width: 80%;\n  margin-top: 10px;\n  background-color: green;\n  color: #ffffff;\n  font-weight: 600;\n  height: 25px;\n  border-radius: 15px;\n  border:none;\n  margin-left: 10px;\n}.followBtn p{\n  align-items: baseline;\n  text-align: right;\n  margin-right: 10px;\n  margin-bottom:  0;\n  font-size: 10px;\n}.feed-img{\n  width: 100%;\n  height: 60%;\n}.feed-img img {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n}.feed-share{\n  width: 100%;\n  height: 7%;\n  display: block;\n  padding-top: 1%;\n  display: flex;\n}.feed-share img\n{\n  width: 4%;\n  margin-left: 1%;\n\n}.tagged{\n  width: 100%;\n  height: 7%;\n}mat-expansion-panel{\n  border-radius: 0 !important;\n  background-color: #707070;\n\n}.tagged mat-expansion-panel-header{\n  height: 35px !important;\n  color: #ffffff !important;\n}mat-panel-title h4{\n  margin: 0;\n  font-size: 14px;\n  font-weight: 100;\n}.header_responsive\n{\n    display:none;\n\n}.mob-cards{\n  flex-wrap: wrap;\n width: 100%;\n margin: 0 auto;\n}.mob-cards{\n  display: none;\n}.card-wrapper{\n  width: 46%;\n  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .2), 0 1px 8px 0 rgba(0, 0, 0, .12);\n  margin-left: 2%;\n  margin-right: 2%;\n  margin-top: 5%;\n}.img-banner img{\n  max-width:100%;\n  height:auto;\n}.content-details p{\nmargin-top: 0;\nfont-size: 13px;\n}.footer-content{\n  margin: 0 auto;\n}.card-wrapper h6{\n  margin: 0;\n  margin-top:5px;\n  margin-bottom: 5px;\n}.card-wrapper h5{\n  margin: 0;\n  margin-bottom: 6px;\n  font-weight: 500;\n  padding: 5px;\n}.body1\n{\n  box-shadow: 0px 3px 10px #5555;\n  margin-top: 6%;\n  padding: 20px 0;\n}.comapany_contact\n{\n  width: 80%;\n  margin: 0 auto;\n\n}.comapany_contact h2\n{\n  color: #070707;\n\n}.company_details\n{\n  display: flex;\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 2%;\n}.company_details1\n{\n  width: 47%;\n  box-shadow: 0px 3px 10px #5555;\n  height: 175px;\n  padding-top:1%;\n  margin-left: 2%;\n\n}.company_email\n{\n  display: flex;\n  width: 45%;\n  MARGIN: 0 AUTO;\n  font-size: 28px;\n}.company_email p\n{\n  width: 15%;\n  color:#0A9AB1;\n}.company_email1\n{\n  text-align: center;\n}.company_email1 h2\n{\n  margin-top: auto;\n  margin-bottom: auto;\n  font-weight: 500;\n}.company_address\n{\n  width: 80%;\n  margin: 0 auto;\n  display: flex;\n}.google_map\n{\n  background-color: red;\n  height: 500px;\n  width: 47%;\n  font-size: 25px;\n  color: wheat;\n}.complete_address\n{\n  font-size: 30px;\n  width: 34%;\n  margin-left: 5%;\n  margin-bottom: auto;\n  margin-top: auto;\n}.complete_address p {\n  margin-bottom: auto;\n  margin-top: auto;\n  margin-top: 3%;\n}@media screen and (max-width:700px){\n  .company_industry,.login_user{\n    display: none;\n  }\n  .with_login{\n    width: 100%;\n    margin: 0px;\n    padding-top: 18%;\n  }\n  .feeds{\n    width: 100%;\n    padding: 0px;\n  }\n  .add_media h2{\n    font-size: 15px;\n    margin-top: -5px;\n  }\n  .add_media span{\n    font-size: 10px;\n  }\n  .add_feed {\n    font-size: 11px;\n    width: 12%;\n  }\n  section{\n    width: 95%;\n  }\n  .followBtn button{\n    width: 100%;\n    font-size: 8px;\n  }\n  .followBtn p{\n    margin-right: 0;\n  }\n  .details h1{\n    font-size: 15px;\n  }\n  .details p{\n    font-size: 8px;\n  }\n  .feedInfo p{\n    font-size: 10px;\n    line-height: 15px;\n  }\n  mat-panel-title h4{\n    font-size: 11px;\n  }\n.body\n  {\n    margin-top: 0;\n  }\n  .header_responsive\n  {\n      display:block;\n\n  }\n  header\n    {\n      display: none;\n    }\n.header{\n  width: 100%;\n  /* border: 1px solid #ccc; */\n  padding: 15px 0;\n  display: flex;\n}\n.headerElements1{\n  width: 94%;\n  margin: 0 auto;\n  display: flex;\n  border: solid 1px gray;\n  margin-top: -13%;\n  position: fixed;\n  background-color: white;\n}\n.elements{\n  width: 100%;\n  height: 100%;\n  padding:10px 30px;\n\n}\n.elements h4{\n  margin: 0;\n}\n.headerImg {\n  width: 100%;\n  height: 34vh;\n  margin-top: 22%;\n  background-color: #ec1818;\n  display: flex;\n}\n.tabs {\n  display: none;\n}\n.tabs1   {\n  width: 100%;\n  margin-top: 3vh;\n  height: 15vh;\n  display: flex;\n}\n.follow-btn span {\n  margin-left: 7%;\n  font-size: 22px;\n}\n.card  {\n  box-shadow: 0px 3px 10px #5555;\n  display: flex;\n  width: 100%;\n  margin-top: 1%;\n}\n.tabClicked{\n  border: solid 1px gray;\n}\n.extraInfo{\n  width: 100%;\n  box-shadow: 0px 3px 10px #5555;\n  padding: 0px 25px;\n}\n.infoSection1 {\n  width: 95%;\n  margin: 0 auto;\n  display: block;\n  margin-top: 30px;\n}\n.shortBio {\n  width: 100%;\n}\n.feed {\n  width: 100%;\n  margin-left:0;\n  margin-top:2%;\n}\n.otherInfocard {\n\n  width: 100% ! important;\n  margin-top: 10%;\n}\n.Card {\n  width: 100% ! important;\n\n}\n.infoSectonCard {\n\n display: block ! important;\n}\n.infoSectonCard img {\n  width: 100% ! important;\n  background-color: beige;\n}\n.content{\n  width: 100% ! important;\n}\n.Card {display:  none ! important;}\n.mob-cards{\n  display:flex;\nflex-wrap: wrap;\npadding-top:0px;\n\n}\n.infoImg img{\n  width: 100% ! important;\n   height: 20% ! important;\n}\n.infoContent p{\n  width: 100% ! important;\n\n}\n.comapany_contact[_ngcontent-c1] {\n  width: 96%;\n  margin: 0 auto;\n}\n.company_details[_ngcontent-c1] {\n  display: flex;\nwidth: 100%;\n  margin: 0 auto;\n  margin-top: 2%;\n}\n.company_details1[_ngcontent-c1] {\n  width: 47%;\n  box-shadow: 0px 3px 10px #5555;\n  height: 131px;\n  padding-top: 1%;\n  margin-left: 2%;\n}\n.company_email[_ngcontent-c1] {\n  display: flex;\n  width: 92%;\n  MARGIN: 0 AUTO;\n  font-size: 28px;\n}\n.company_email[_ngcontent-c1] p[_ngcontent-c1] {\n  width: 21%;\n  color: #0A9AB1;\n  font-size: 15px;\n}\n.company_email1 {\n  width: 83%;\n  MARGIN: 0 AUTO;\n}\n.company_email1   h2 {\n  font-size: 15px;\n  text-align: center;\n}\n.company_address {\n  width: 94%;\n  margin: 0 auto;\n   display: block;\n}\n.google_map {\n\n  width: 100%;\n  height: 300px;\n }\n.complete_address{\n  font-size: 15px;\n  width: 100%;\n}\n}@media screen and (min-width: 767px) and (max-width: 1024px){\n\n  .login_user{\n  width: 26%;\n  }\n  .user_name h2\n{\n  font-size: 15px;\n  color: #FAF6F6;\n  margin-top: -2px;\n  float: left;\n}\n  .company_industry{\n    width: 25%;\n    }\n  .feeds{\n    width: 48%;\n    padding: 0px;\n  }\n  .add_media h2{\n    font-size: 15px;\n    margin-top: -5px;\n  }\n  .add_media span{\n    font-size: 10px;\n  }\n  .add_feed {\n    font-size: 15px;\n    width: 21%;\n  }\n  section{\n    width: 95%;\n    margin-left:9%;\n    margin-top: 8%;\n  }\n  .followBtn button{\n    width: 100%;\n    font-size: 8px;\n  }\n  .followBtn p{\n    margin-right: 0;\n  }\n  .details h1{\n    font-size: 15px;\n  }\n  .details p{\n    font-size: 8px;\n  }\n  .feedInfo p{\n    font-size: 10px;\n    line-height: 15px;\n  }\n  mat-panel-title h4{\n    font-size: 11px;\n  }\n  .tab h1 {\n\n    font-size: 25px;\n  }\n  .extraInfo {\n    width: 40%;\n  }\n    .tab {\n\n      width: 26%;\n\n  }\n  .company_details {\n\n    width: 100%;\n}\n.comapany_contact {\n  width: 95%;\n  margin: 0 auto;\n}\n.company_email\n {\n  width: 88%;\n}\n.company_email p {\n  width: 20%;\n}\n.company_email1 {\n  width: 100%;\n  text-align: center;\n}\n.company_address {\n  width: 96%;\n  margin: 0 auto;\n\n}\n.complete_address {\n  width: 40%;\n\n}\n\n}@media screen and (min-width: 700px) and (max-width: 1440px){\n  .with_login{\n    width: 85%;\n  }\n\n}.otherInfocard{\n  /* height: 10vh; */\n  width: 30%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  box-shadow: 0px 3px 10px #5555;\n}.infoCard{\n  width: 90%;\n  margin: 0 auto;\n  height: 100%;\n}.info{\n  border-bottom: 1px solid #ccc;\n}label{\n  font-size: 12px;\n  text-transform: uppercase;\n}.info h3{\n  margin-top: 5px;\n  margin-bottom: 0;\n  padding-bottom: 5px;\n  font-weight: 500;\n  color: black;\n}/* <-------------------------------------------------------------body 2-------------------------------------------------------------------> */.infoSection2{\n  width: 95%;\n  margin: 0 auto;\n  margin-top: 30px;\n}.infoImg{\n  width: 100%;\n\n\n}.infoImg img{\n  width: 100%;\n}.infoContent h3{\n  text-align: center;\n  font-size: 25px;\n  font-weight: 400;\n  margin: 0;\n  padding: 20px 0 20px 0;\n}.infoContent p{\n  width: 70%;\n  border-top: 1px solid #ccc;\n  margin: 0 auto;\n  padding-top: 30px;\n  font-size: 15px;\n  line-height: 22px;\n}.infoSectonCard{\n  width: 90%;\n  margin: 0 auto;\n  /* background-color: aqua; */\n  margin-top: 40px;\n  display: flex;\n}.infoSectonCard img{\n  width: 60%;\n  background-color: beige;\n  /* margin-right: 5% */\n}.content{\n  width: 33%;\n   box-shadow: 0px 3px 10px #5555;\n}.Sectioncontent{\n  width: 90%;\n  margin: 0 auto;\n  height: 100%;\n\n}/* <----------------------------------------------------------------Slider-------------------------------------------------> */.certificate{\n  width: 90%;\n  margin: 0 auto;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-top: 50px;\n}.certificate h2{\n  font-weight: 500;\n}.slider-wrapper{\nwidth: 90%;\nmargin: 0 auto;\n}.items img{\n  margin-right: 60px;\n}.companyImg{\n  width: 90%;\n  margin: 0 auto;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-top: 50px;\n}.companyImg h2{\n  font-weight: 500;\n}.companyImg .items img{\n  margin-right: 60px;\n  width: 430px;\n  height: 370px;\n}/* <-------------------------------------------------------------body 3-------------------------------------------------------------------> */.productConatiner{\n  width: 100%;\n  margin: 0 auto;\n  height: 16rem;\n  margin-bottom: 30px;\n  display: flex;\n  flex-wrap: wrap;\n  overflow: hidden;\n  transition-duration: .5s ease-in-out;\n}.productAddbutton{\n  width: 50%;\n  margin: 0 auto;\n  background-color: red;\n}.productAddbutton button{\n  width: 100%;\n  height: 40px;\n  color: #FAF6F6;\n  text-transform: uppercase;\n  border: 1px solid #FAF6F6;\n  background-color:  #333333;\n}.expand{\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  transition-duration: .5s ease-in-out;\n}.conatiner{\n  width: 80%;\n  margin: 0 auto;\n}.infoSection3{\n  display: block;\n  width: 95%;\n  margin: 0 auto;\n}/* .conatiner button{\n  float: right;\n  margin-right: 5%;\n  margin-top: -10%;\n  position: absolute;\n} *//* <---------------------------------------------------------------PRODUCT CARD-------------------------------------------------------------------------> */.Card{\n  width: 47%;\n  height: 15rem;\n  border-radius: 10px;\n  margin-right: 3%;\n  margin-bottom: 30px;\n  display: flex;\n  flex-wrap: wrap;\n  box-shadow: 0 2px 2px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23);\n}.productCard, .ServiceCard{\n  display: flex;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #cccccccc;\n  border-radius: 10px 10px 10px 10px\n}.productImage, .ServiceImage {\n  border-radius: 10px 0 0 10px;\n  width: 35%;\n  height: 100%;\n}.bookmark{\n  width: 1%;\n  height: 3%;\n\n  background-color: red;\n  position: absolute;\n  margin-left: 10%;\n}.productImage img , .ServiceImage img{\n  width: 100%;\n  height: 100%;\n  border-radius: 10px 0 0 10px;\n}.productContent{\n  width: 65%;\n  height: 100%;\n  border-radius: 0px 10px 10px 0px;\n}.infoSection3 .content{\n  width: 95%;\n  margin: 0 auto;\n  height: 100%;\n  box-shadow: none;\n}.productContent .content .productCategory h6 ,.ServiceContent .content .ServiceCategory h6 {\n  float: right;\n  margin: 13px 15px 0 0;\n  font-size: 13px;\n  font-weight: 100;\n}.productContent .content .productName , .ServiceContent .content .ServiceName{\n  width: 100%;\n\n}.productContent .content .productName h2 , .ServiceContent .content .ServiceName h2{\n  margin: 0;\n  width: 100%;\n  font-weight: 100;\n  font-size: 25px;\n  padding-top: 3px;\n  justify-content: flex-end;\n    display: flex\n}.productContent .content .productName h5 ,.ServiceContent .content .ServiceName h5{\n  margin: 0;\n  font-weight: 100;\n  text-align: right;\n\n}.productContent .content .productName small , .ServiceContent .content .ServiceName small{\n  font-size: 12px;\n  text-align: right;\n}.tags{\n  width: 100%;\n  float: right;\n  background-color: azure;\n\n}.other-info{\n  width: 100%;\n  display: flex;\n}.price{\n  width: 30%;\n}.hits {\n  width: 70%;\n}.price h4{\n  margin: 0;\n}.hits p{\n  margin: 0;\n  float: right;\n}.ServiceContent{\n  width: 65%;\n  height: 100%;\n  border-radius: 10px 0px 0px 10px;\n}.ServiceImage{\n  border-radius: 0 10px 10px 0;\n}.ServiceImage img{\n  border-radius: 0 10px 10px 0;\n}.ServiceContent .content .ServiceCategory h6 {\n  float: right;\n  margin: 13px 0 0 15px;\n}.ServiceCard .price{\n  width: 70%;\n}.ServiceCard .hits {\n  width: 30%;\n}.ServiceCard .price h4{\n  margin: 0;\n}.ServiceCard .hits p{\n  margin: 0;\n  float: left;\n}.card-wrapper{\n  width: 46%;\n  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .2), 0 1px 8px 0 rgba(0, 0, 0, .12);\n  margin-left: 2%;\n  margin-right: 2%;\n}.img-banner img{\n  max-width:100%;\n  height:auto;\n}.content-details p{\nmargin-top: 0;\nfont-size: 13px;\n}.footer-content{\n  margin: 0 auto;\n}.card-wrapper h6{\n  margin: 0;\n  margin-top:5px;\n  margin-bottom: 5px;\n}.card-wrapper h5{\n  margin: 0;\n  margin-bottom: 6px;\n  font-weight: 500;\n  padding: 5px;\n}/* @media (max-width:1013px){\n  .card-wrapper{\n  max-width:400px;\n}\n  .header{\n  font-size:20px;\n}\n  .btn{\n  height:10px;\n  width:100px;\n  margin:20px;\n align-items:center;\n}\n  .img-banner img{\n  max-width:400px;\n  height:auto;\n}\n} */@media screen and (min-width: 767px)and (max-width: 1024px){\n  .Card{\n    width: 100%;\n    height: 15rem;\n    border-radius: 10px;\n    margin-right: 3%;\n    margin-bottom: 30px;\n    display: flex;\n    flex-wrap: wrap;\n    box-shadow: 0 2px 2px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9wcmVidWlsdC10aGVtZXMvZGVlcHB1cnBsZS1hbWJlci5jc3MiLCJzcmMvYXBwL0JwYWdlL2ItcGFnZS9iLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUIsZ0JBQWdCLGVBQWUsOENBQThDLENBQUMsb0NBQW9DLGFBQWEsQ0FBQyxvQ0FBb0MsY0FBYyxDQUFDLHlDQUF5QyxzREFBc0QsZUFBZSxDQUFDLHNDQUFzQyxzREFBc0QsZUFBZSxDQUFDLDZDQUE2QyxzREFBc0QsZUFBZSxDQUFDLDZDQUE2QyxzREFBc0QsZUFBZSxDQUFDLDJCQUEyQix5REFBeUQsZUFBZSxDQUFDLDJCQUEyQix3REFBd0QsZUFBZSxDQUFDLDZCQUE2QixxREFBcUQsQ0FBQyxzQ0FBc0MscURBQXFELENBQUMsNENBQTRDLGVBQWUsQ0FBQyx3QkFBd0IscURBQXFELENBQUMsOENBQThDLHdEQUF3RCxnQkFBZ0IscUJBQXFCLENBQUMsOENBQThDLHNEQUFzRCxnQkFBZ0IscUJBQXFCLENBQUMsOENBQThDLHNEQUFzRCxnQkFBZ0Isc0JBQXNCLENBQUMsOENBQThDLHNEQUFzRCxlQUFlLENBQUMsNEJBQTRCLHFEQUFxRCxDQUFDLDRHQUE0RywrQ0FBK0MsZUFBZSxlQUFlLENBQUMsbUJBQW1CLDhDQUE4QyxDQUFDLFVBQVUsOENBQThDLENBQUMsZ0JBQWdCLGVBQWUsZUFBZSxDQUFDLGlDQUFpQyxjQUFjLENBQUMscUNBQXFDLGNBQWMsQ0FBQyxjQUFjLDhDQUE4QyxDQUFDLHlDQUF5QyxnQkFBZ0IsQ0FBQyxVQUFVLGVBQWUsZUFBZSxDQUFDLCtFQUErRSxjQUFjLENBQUMsV0FBVyw4Q0FBOEMsQ0FBQyxpQkFBaUIsZUFBZSxlQUFlLENBQUMsMkJBQTJCLGNBQWMsQ0FBQyxjQUFjLDhDQUE4QyxDQUFDLG1CQUFtQixjQUFjLENBQUMscURBQXFELGVBQWUsZUFBZSxDQUFDLDhC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LG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsYUFBYTtDQUNkLEFBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJJLEFBR0o7RUFDRTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtRUFBbUU7R0FDcEU7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL0JwYWdlL2ItcGFnZS9iLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtYmFkZ2UtY29udGVudHtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtYmFkZ2Utc21hbGwgLm1hdC1iYWRnZS1jb250ZW50e2ZvbnQtc2l6ZTo2cHh9Lm1hdC1iYWRnZS1sYXJnZSAubWF0LWJhZGdlLWNvbnRlbnR7Zm9udC1zaXplOjI0cHh9Lm1hdC1oMSwubWF0LWhlYWRsaW5lLC5tYXQtdHlwb2dyYXBoeSBoMXtmb250OjQwMCAyNHB4LzMycHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowIDAgMTZweH0ubWF0LWgyLC5tYXQtdGl0bGUsLm1hdC10eXBvZ3JhcGh5IGgye2ZvbnQ6NTAwIDIwcHgvMzJweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAxNnB4fS5tYXQtaDMsLm1hdC1zdWJoZWFkaW5nLTIsLm1hdC10eXBvZ3JhcGh5IGgze2ZvbnQ6NDAwIDE2cHgvMjhweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAxNnB4fS5tYXQtaDQsLm1hdC1zdWJoZWFkaW5nLTEsLm1hdC10eXBvZ3JhcGh5IGg0e2ZvbnQ6NDAwIDE1cHgvMjRweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAxNnB4fS5tYXQtaDUsLm1hdC10eXBvZ3JhcGh5IGg1e2ZvbnQ6NDAwIDExLjYycHgvMjBweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAxMnB4fS5tYXQtaDYsLm1hdC10eXBvZ3JhcGh5IGg2e2ZvbnQ6NDAwIDkuMzhweC8yMHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDEycHh9Lm1hdC1ib2R5LTIsLm1hdC1ib2R5LXN0cm9uZ3tmb250OjUwMCAxNHB4LzI0cHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtYm9keSwubWF0LWJvZHktMSwubWF0LXR5cG9ncmFwaHl7Zm9udDo0MDAgMTRweC8yMHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWJvZHkgcCwubWF0LWJvZHktMSBwLC5tYXQtdHlwb2dyYXBoeSBwe21hcmdpbjowIDAgMTJweH0ubWF0LWNhcHRpb24sLm1hdC1zbWFsbHtmb250OjQwMCAxMnB4LzIwcHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtZGlzcGxheS00LC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktNHtmb250OjMwMCAxMTJweC8xMTJweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCA1NnB4O2xldHRlci1zcGFjaW5nOi0uMDVlbX0ubWF0LWRpc3BsYXktMywubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTN7Zm9udDo0MDAgNTZweC81NnB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDY0cHg7bGV0dGVyLXNwYWNpbmc6LS4wMmVtfS5tYXQtZGlzcGxheS0yLC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMntmb250OjQwMCA0NXB4LzQ4cHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowIDAgNjRweDtsZXR0ZXItc3BhY2luZzotLjAwNWVtfS5tYXQtZGlzcGxheS0xLC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMXtmb250OjQwMCAzNHB4LzQwcHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowIDAgNjRweH0ubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXJ7Zm9udDo0MDAgMTRweC8yMHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWJ1dHRvbiwubWF0LWZhYiwubWF0LWZsYXQtYnV0dG9uLC5tYXQtaWNvbi1idXR0b24sLm1hdC1taW5pLWZhYiwubWF0LXJhaXNlZC1idXR0b24sLm1hdC1zdHJva2VkLWJ1dHRvbntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtYnV0dG9uLXRvZ2dsZXtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1jYXJke2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWNhcmQtdGl0bGV7Zm9udC1zaXplOjI0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxle2ZvbnQtc2l6ZToyMHB4fS5tYXQtY2FyZC1jb250ZW50LC5tYXQtY2FyZC1zdWJ0aXRsZXtmb250LXNpemU6MTRweH0ubWF0LWNoZWNrYm94e2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWNoZWNrYm94LWxheW91dCAubWF0LWNoZWNrYm94LWxhYmVse2xpbmUtaGVpZ2h0OjI0cHh9Lm1hdC1jaGlwe2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWNoaXAgLm1hdC1jaGlwLXJlbW92ZS5tYXQtaWNvbiwubWF0LWNoaXAgLm1hdC1jaGlwLXRyYWlsaW5nLWljb24ubWF0LWljb257Zm9udC1zaXplOjE4cHh9Lm1hdC10YWJsZXtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1oZWFkZXItY2VsbHtmb250LXNpemU6MTJweDtmb250LXdlaWdodDo1MDB9Lm1hdC1jZWxsLC5tYXQtZm9vdGVyLWNlbGx7Zm9udC1zaXplOjE0cHh9Lm1hdC1jYWxlbmRhcntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1jYWxlbmRhci1ib2R5e2ZvbnQtc2l6ZToxM3B4fS5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCwubWF0LWNhbGVuZGFyLXBlcmlvZC1idXR0b257Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHRoe2ZvbnQtc2l6ZToxMXB4O2ZvbnQtd2VpZ2h0OjQwMH0ubWF0LWRpYWxvZy10aXRsZXtmb250OjUwMCAyMHB4LzMycHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE1cHg7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnR7Zm9udDo0MDAgMTRweC8yMHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWZvcm0tZmllbGR7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjEuMTI1O2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWZvcm0tZmllbGQtd3JhcHBlcntwYWRkaW5nLWJvdHRvbToxLjM0Mzc1ZW19Lm1hdC1mb3JtLWZpZWxkLXByZWZpeCAubWF0LWljb24sLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb257Zm9udC1zaXplOjE1MCU7bGluZS1oZWlnaHQ6MS4xMjV9Lm1hdC1mb3JtLWZpZWxkLXByZWZpeCAubWF0LWljb24tYnV0dG9uLC5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29uLWJ1dHRvbntoZWlnaHQ6MS41ZW07d2lkdGg6MS41ZW19Lm1hdC1mb3JtLWZpZWxkLXByZWZpeCAubWF0LWljb24tYnV0dG9uIC5tYXQtaWNvbiwubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbi1idXR0b24gLm1hdC1pY29ue2hlaWdodDoxLjEyNWVtO2xpbmUtaGVpZ2h0OjEuMTI1fS5tYXQtZm9ybS1maWVsZC1pbmZpeHtwYWRkaW5nOi41ZW0gMDtib3JkZXItdG9wOi44NDM3NWVtIHNvbGlkIHRyYW5zcGFyZW50fS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4zNDM3NWVtKSBzY2FsZSguNzUpO3dpZHRoOjEzMy4zMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjM0Mzc0ZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzM0JX0ubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlcnt0b3A6LS44NDM3NWVtO3BhZGRpbmctdG9wOi44NDM3NWVtfS5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS4zNDM3NWVtfS5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7Ym90dG9tOjEuMzQzNzVlbX0ubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXJ7Zm9udC1zaXplOjc1JTttYXJnaW4tdG9wOi42NjY2N2VtO3RvcDpjYWxjKDEwMCUgLSAxLjc5MTY3ZW0pfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtd3JhcHBlcntwYWRkaW5nLWJvdHRvbToxLjI1ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1pbmZpeHtwYWRkaW5nOi40Mzc1ZW0gMH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWiguMDAxcHgpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSguNzUpO3dpZHRoOjEzMy4zMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSguNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKC4wMDEwMXB4KTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjRlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzQlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSguNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKC4wMDEwMnB4KTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjNlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzUlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWx7dG9wOjEuMjgxMjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtib3R0b206MS4yNWVtfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXJ7bWFyZ2luLXRvcDouNTQxNjdlbTt0b3A6Y2FsYygxMDAlIC0gMS42NjY2N2VtKX1AbWVkaWEgcHJpbnR7Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTIyZW0pIHNjYWxlKC43NSl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyMWVtKSBzY2FsZSguNzUpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyZW0pIHNjYWxlKC43NSl9fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6LjI1ZW0gMCAuNzVlbSAwfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RvcDoxLjA5Mzc1ZW07bWFyZ2luLXRvcDotLjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtLjU5Mzc1ZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzMzJX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0uNTkzNzRlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzQlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6MWVtIDAgMWVtIDB9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtbGFiZWx7dG9wOjEuODQzNzVlbTttYXJnaW4tdG9wOi0uMjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS41OTM3NWVtKSBzY2FsZSguNzUpO3dpZHRoOjEzMy4zMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS41OTM3NGVtKSBzY2FsZSguNzUpO3dpZHRoOjEzMy4zMzMzNCV9Lm1hdC1ncmlkLXRpbGUtZm9vdGVyLC5tYXQtZ3JpZC10aWxlLWhlYWRlcntmb250LXNpemU6MTRweH0ubWF0LWdyaWQtdGlsZS1mb290ZXIgLm1hdC1saW5lLC5tYXQtZ3JpZC10aWxlLWhlYWRlciAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtZ3JpZC10aWxlLWZvb3RlciAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMiksLm1hdC1ncmlkLXRpbGUtaGVhZGVyIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTJweH1pbnB1dC5tYXQtaW5wdXQtZWxlbWVudHttYXJnaW4tdG9wOi0uMDYyNWVtfS5tYXQtbWVudS1pdGVte2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo0MDB9Lm1hdC1wYWdpbmF0b3IsLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXJ7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4fS5tYXQtcmFkaW8tYnV0dG9ue2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LXNlbGVjdHtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1zZWxlY3QtdHJpZ2dlcntoZWlnaHQ6MS4xMjVlbX0ubWF0LXNsaWRlLXRvZ2dsZS1jb250ZW50e2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTJweDtmb250LXdlaWdodDo1MDB9Lm1hdC1zdGVwcGVyLWhvcml6b250YWwsLm1hdC1zdGVwcGVyLXZlcnRpY2Fse2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LXN0ZXAtbGFiZWx7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtc3RlcC1zdWItbGFiZWwtZXJyb3J7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtc3RlcC1sYWJlbC1lcnJvcntmb250LXNpemU6MTRweH0ubWF0LXN0ZXAtbGFiZWwtc2VsZWN0ZWR7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtdGFiLWdyb3Vwe2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1saW5re2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC10b29sYmFyLC5tYXQtdG9vbGJhciBoMSwubWF0LXRvb2xiYXIgaDIsLm1hdC10b29sYmFyIGgzLC5tYXQtdG9vbGJhciBoNCwubWF0LXRvb2xiYXIgaDUsLm1hdC10b29sYmFyIGg2e2ZvbnQ6NTAwIDIwcHgvMzJweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjB9Lm1hdC10b29sdGlwe2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTBweDtwYWRkaW5nLXRvcDo2cHg7cGFkZGluZy1ib3R0b206NnB4fS5tYXQtdG9vbHRpcC1oYW5kc2V0e2ZvbnQtc2l6ZToxNHB4O3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTo4cHh9Lm1hdC1saXN0LWl0ZW17Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtbGlzdC1vcHRpb257Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVte2ZvbnQtc2l6ZToxNnB4fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpe2ZvbnQtc2l6ZToxNHB4fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb257Zm9udC1zaXplOjE2cHh9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpe2ZvbnQtc2l6ZToxNHB4fS5tYXQtbGlzdC1iYXNlIC5tYXQtc3ViaGVhZGVye2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1pdGVte2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjEycHh9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb257Zm9udC1zaXplOjEycHh9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjEycHh9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtc3ViaGVhZGVye2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTJweDtmb250LXdlaWdodDo1MDB9Lm1hdC1vcHRpb257Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNnB4fS5tYXQtb3B0Z3JvdXAtbGFiZWx7Zm9udDo1MDAgMTRweC8yNHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LXNpbXBsZS1zbmFja2Jhcntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHh9Lm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9ue2xpbmUtaGVpZ2h0OjE7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXdlaWdodDo1MDB9Lm1hdC10cmVle2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LW5lc3RlZC10cmVlLW5vZGUsLm1hdC10cmVlLW5vZGV7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc2l6ZToxNHB4fS5tYXQtcmlwcGxle292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZX0ubWF0LXJpcHBsZS5tYXQtcmlwcGxlLXVuYm91bmRlZHtvdmVyZmxvdzp2aXNpYmxlfS5tYXQtcmlwcGxlLWVsZW1lbnR7cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyLXJhZGl1czo1MCU7cG9pbnRlci1ldmVudHM6bm9uZTt0cmFuc2l0aW9uOm9wYWNpdHksdHJhbnNmb3JtIDBzIGN1YmljLWJlemllcigwLDAsLjIsMSk7dHJhbnNmb3JtOnNjYWxlKDApfUBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5tYXQtcmlwcGxlLWVsZW1lbnR7ZGlzcGxheTpub25lfX0uY2RrLXZpc3VhbGx5LWhpZGRlbntib3JkZXI6MDtjbGlwOnJlY3QoMCAwIDAgMCk7aGVpZ2h0OjFweDttYXJnaW46LTFweDtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjFweDtvdXRsaW5lOjA7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmV9LmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyLC5jZGstb3ZlcmxheS1jb250YWluZXJ7cG9pbnRlci1ldmVudHM6bm9uZTt0b3A6MDtsZWZ0OjA7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX0uY2RrLW92ZXJsYXktY29udGFpbmVye3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6MTAwMH0uY2RrLW92ZXJsYXktY29udGFpbmVyOmVtcHR5e2Rpc3BsYXk6bm9uZX0uY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXJ7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTAwMH0uY2RrLW92ZXJsYXktcGFuZXtwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czphdXRvO2JveC1zaXppbmc6Ym9yZGVyLWJveDt6LWluZGV4OjEwMDA7ZGlzcGxheTpmbGV4O21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJX0uY2RrLW92ZXJsYXktYmFja2Ryb3B7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7ei1pbmRleDoxMDAwO3BvaW50ZXItZXZlbnRzOmF1dG87LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O3RyYW5zaXRpb246b3BhY2l0eSAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7b3BhY2l0eTowfS5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5ne29wYWNpdHk6MX1AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKXsuY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5Oi42fX0uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcHtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjMyKX0uY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AsLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmd7b3BhY2l0eTowfS5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94e3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTAwMDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21pbi13aWR0aDoxcHg7bWluLWhlaWdodDoxcHh9LmNkay1nbG9iYWwtc2Nyb2xsYmxvY2t7cG9zaXRpb246Zml4ZWQ7d2lkdGg6MTAwJTtvdmVyZmxvdy15OnNjcm9sbH1Aa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0ey8qISovfUBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5key8qISovfS5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbHthbmltYXRpb24tbmFtZTpjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydH0uY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOm5vdCg6LXdlYmtpdC1hdXRvZmlsbCl7YW5pbWF0aW9uLW5hbWU6Y2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kfXRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZXtyZXNpemU6bm9uZX10ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5ne2hlaWdodDphdXRvIWltcG9ydGFudDtvdmVyZmxvdzpoaWRkZW4haW1wb3J0YW50O3BhZGRpbmc6MnB4IDAhaW1wb3J0YW50O2JveC1zaXppbmc6Y29udGVudC1ib3ghaW1wb3J0YW50fS5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xKX0ubWF0LW9wdGlvbntjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1vcHRpb246Zm9jdXM6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSwubWF0LW9wdGlvbjpob3Zlcjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfS5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1vcHRpb24ubWF0LWFjdGl2ZXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KTtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1vcHRpb24ubWF0LW9wdGlvbi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2NvbG9yOiM2NzNhYjd9Lm1hdC1hY2NlbnQgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6I2ZmZDc0MH0ubWF0LXdhcm4gLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6I2Y0NDMzNn0ubWF0LW9wdGdyb3VwLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LW9wdGdyb3VwLWRpc2FibGVkIC5tYXQtb3B0Z3JvdXAtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcHNldWRvLWNoZWNrYm94e2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXBzZXVkby1jaGVja2JveDo6YWZ0ZXJ7Y29sb3I6I2ZhZmFmYX0ubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRle2JhY2tncm91bmQ6I2ZmZDc0MH0ubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZXtiYWNrZ3JvdW5kOiM2NzNhYjd9Lm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsLm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGV7YmFja2dyb3VuZDojZjQ0MzM2fS5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZHtiYWNrZ3JvdW5kOiNiMGIwYjB9Lm1hdC1lbGV2YXRpb24tejB7Ym94LXNoYWRvdzowIDAgMCAwIHJnYmEoMCwwLDAsLjIpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTQpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxe2JveC1zaGFkb3c6MCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16Mntib3gtc2hhZG93OjAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejN7Ym94LXNoYWRvdzowIDNweCAzcHggLTJweCByZ2JhKDAsMCwwLC4yKSwwIDNweCA0cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggOHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXo0e2JveC1zaGFkb3c6MCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA0cHggNXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejV7Ym94LXNoYWRvdzowIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDVweCA4cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTRweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16Nntib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16N3tib3gtc2hhZG93OjAgNHB4IDVweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgN3B4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDJweCAxNnB4IDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejh7Ym94LXNoYWRvdzowIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXo5e2JveC1zaGFkb3c6MCA1cHggNnB4IC0zcHggcmdiYSgwLDAsMCwuMiksMCA5cHggMTJweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDE2cHggMnB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTB7Ym94LXNoYWRvdzowIDZweCA2cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDEwcHggMTRweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgNHB4IDE4cHggM3B4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTF7Ym94LXNoYWRvdzowIDZweCA3cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDExcHggMTVweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgNHB4IDIwcHggM3B4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTJ7Ym94LXNoYWRvdzowIDdweCA4cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDEycHggMTdweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNXB4IDIycHggNHB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTN7Ym94LXNoYWRvdzowIDdweCA4cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDEzcHggMTlweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNXB4IDI0cHggNHB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTR7Ym94LXNoYWRvdzowIDdweCA5cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDE0cHggMjFweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNXB4IDI2cHggNHB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTV7Ym94LXNoYWRvdzowIDhweCA5cHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE1cHggMjJweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNnB4IDI4cHggNXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTZ7Ym94LXNoYWRvdzowIDhweCAxMHB4IC01cHggcmdiYSgwLDAsMCwuMiksMCAxNnB4IDI0cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDZweCAzMHB4IDVweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejE3e2JveC1zaGFkb3c6MCA4cHggMTFweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMTdweCAyNnB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA2cHggMzJweCA1cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxOHtib3gtc2hhZG93OjAgOXB4IDExcHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE4cHggMjhweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgN3B4IDM0cHggNnB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTl7Ym94LXNoYWRvdzowIDlweCAxMnB4IC02cHggcmdiYSgwLDAsMCwuMiksMCAxOXB4IDI5cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDdweCAzNnB4IDZweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejIwe2JveC1zaGFkb3c6MCAxMHB4IDEzcHggLTZweCByZ2JhKDAsMCwwLC4yKSwwIDIwcHggMzFweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOHB4IDM4cHggN3B4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MjF7Ym94LXNoYWRvdzowIDEwcHggMTNweCAtNnB4IHJnYmEoMCwwLDAsLjIpLDAgMjFweCAzM3B4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA4cHggNDBweCA3cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoyMntib3gtc2hhZG93OjAgMTBweCAxNHB4IC02cHggcmdiYSgwLDAsMCwuMiksMCAyMnB4IDM1cHggM3B4IHJnYmEoMCwwLDAsLjE0KSwwIDhweCA0MnB4IDdweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejIze2JveC1zaGFkb3c6MCAxMXB4IDE0cHggLTdweCByZ2JhKDAsMCwwLC4yKSwwIDIzcHggMzZweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOXB4IDQ0cHggOHB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MjR7Ym94LXNoYWRvdzowIDExcHggMTVweCAtN3B4IHJnYmEoMCwwLDAsLjIpLDAgMjRweCAzOHB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA5cHggNDZweCA4cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtYXBwLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRoZW1lLWxvYWRlZC1tYXJrZXJ7ZGlzcGxheTpub25lfS5tYXQtYXV0b2NvbXBsZXRlLXBhbmVse2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDRweCA1cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtYWN0aXZlKTpub3QoOmhvdmVyKXtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcik6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1iYWRnZS1jb250ZW50e2NvbG9yOiNmZmY7YmFja2dyb3VuZDojNjczYWI3fS5tYXQtYmFkZ2UtYWNjZW50IC5tYXQtYmFkZ2UtY29udGVudHtiYWNrZ3JvdW5kOiNmZmQ3NDA7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtYmFkZ2Utd2FybiAubWF0LWJhZGdlLWNvbnRlbnR7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiNmNDQzMzZ9Lm1hdC1iYWRnZXtwb3NpdGlvbjpyZWxhdGl2ZX0ubWF0LWJhZGdlLWhpZGRlbiAubWF0LWJhZGdlLWNvbnRlbnR7ZGlzcGxheTpub25lfS5tYXQtYmFkZ2UtZGlzYWJsZWQgLm1hdC1iYWRnZS1jb250ZW50e2JhY2tncm91bmQ6I2I5YjliOTtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1iYWRnZS1jb250ZW50e3Bvc2l0aW9uOmFic29sdXRlO3RleHQtYWxpZ246Y2VudGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlci1yYWRpdXM6NTAlO3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dDt0cmFuc2Zvcm06c2NhbGUoLjYpO292ZXJmbG93OmhpZGRlbjt3aGl0ZS1zcGFjZTpub3dyYXA7dGV4dC1vdmVyZmxvdzplbGxpcHNpcztwb2ludGVyLWV2ZW50czpub25lfS5tYXQtYmFkZ2UtY29udGVudC5tYXQtYmFkZ2UtYWN0aXZle3RyYW5zZm9ybTpub25lfS5tYXQtYmFkZ2Utc21hbGwgLm1hdC1iYWRnZS1jb250ZW50e3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7bGluZS1oZWlnaHQ6MTZweH1AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKXsubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudHtvdXRsaW5lOnNvbGlkIDFweDtib3JkZXItcmFkaXVzOjB9fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudHt0b3A6LThweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1iZWxvdyAubWF0LWJhZGdlLWNvbnRlbnR7Ym90dG9tOi04cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi0xNnB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotMTZweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LTE2cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LTE2cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi04cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi04cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi04cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LThweH0ubWF0LWJhZGdlLW1lZGl1bSAubWF0LWJhZGdlLWNvbnRlbnR7d2lkdGg6MjJweDtoZWlnaHQ6MjJweDtsaW5lLWhlaWdodDoyMnB4fUBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5tYXQtYmFkZ2UtbWVkaXVtIC5tYXQtYmFkZ2UtY29udGVudHtvdXRsaW5lOnNvbGlkIDFweDtib3JkZXItcmFkaXVzOjB9fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hYm92ZSAubWF0LWJhZGdlLWNvbnRlbnR7dG9wOi0xMXB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1iZWxvdyAubWF0LWJhZGdlLWNvbnRlbnR7Ym90dG9tOi0xMXB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTIycHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotMjJweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0yMnB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMjJweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi0xMXB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTExcHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMTFweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LTExcHh9Lm1hdC1iYWRnZS1sYXJnZSAubWF0LWJhZGdlLWNvbnRlbnR7d2lkdGg6MjhweDtoZWlnaHQ6MjhweDtsaW5lLWhlaWdodDoyOHB4fUBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5tYXQtYmFkZ2UtbGFyZ2UgLm1hdC1iYWRnZS1jb250ZW50e291dGxpbmU6c29saWQgMXB4O2JvcmRlci1yYWRpdXM6MH19Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50e3RvcDotMTRweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1iZWxvdyAubWF0LWJhZGdlLWNvbnRlbnR7Ym90dG9tOi0xNHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMjhweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTI4cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0yOHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0yOHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMTRweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTE0cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0xNHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0xNHB4fS5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lcntib3gtc2hhZG93OjAgOHB4IDEwcHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE2cHggMjRweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNnB4IDMwcHggNXB4IHJnYmEoMCwwLDAsLjEyKTtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtYnV0dG9uLC5tYXQtaWNvbi1idXR0b24sLm1hdC1zdHJva2VkLWJ1dHRvbntjb2xvcjppbmhlcml0O2JhY2tncm91bmQ6MCAwfS5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnksLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeXtjb2xvcjojNjczYWI3fS5tYXQtYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudHtjb2xvcjojZmZkNzQwfS5tYXQtYnV0dG9uLm1hdC13YXJuLC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm4sLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtc3Ryb2tlZC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXXtjb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6IzY3M2FiN30ubWF0LWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjojZmZkNzQwfS5tYXQtYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1idXR0b25bZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm1hdC1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWljb24tYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1zdHJva2VkLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50e29wYWNpdHk6LjE7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3J9Lm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kOiMwMDB9Lm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSl7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWZhYiwubWF0LWZsYXQtYnV0dG9uLC5tYXQtbWluaS1mYWIsLm1hdC1yYWlzZWQtYnV0dG9ue2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1mYWIubWF0LXByaW1hcnksLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeXtjb2xvcjojZmZmfS5tYXQtZmFiLm1hdC1hY2NlbnQsLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtbWluaS1mYWIubWF0LWFjY2VudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1mYWIubWF0LXdhcm4sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwubWF0LW1pbmktZmFiLm1hdC13YXJuLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2Fybntjb2xvcjojZmZmfS5tYXQtZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LWZhYi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1mYWJbZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtbWluaS1mYWJbZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRde2NvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LWZhYi5tYXQtcHJpbWFyeSwubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnksLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6IzY3M2FiN30ubWF0LWZhYi5tYXQtYWNjZW50LC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZmZkNzQwfS5tYXQtZmFiLm1hdC13YXJuLC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4sLm1hdC1taW5pLWZhYi5tYXQtd2FybiwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm57YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LWZhYi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1mYWJbZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtbWluaS1mYWJbZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZmFiLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtZmFiLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMSl9Lm1hdC1mYWIubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1taW5pLWZhYi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC1mbGF0LWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwubWF0LXN0cm9rZWQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCAwIDAgMCByZ2JhKDAsMCwwLC4yKSwwIDAgMCAwIHJnYmEoMCwwLDAsLjE0KSwwIDAgMCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LXJhaXNlZC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtcmFpc2VkLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCA1cHggNXB4IC0zcHggcmdiYSgwLDAsMCwuMiksMCA4cHggMTBweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDE0cHggMnB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCAwIDAgMCByZ2JhKDAsMCwwLC4yKSwwIDAgMCAwIHJnYmEoMCwwLDAsLjE0KSwwIDAgMCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWZhYjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwubWF0LW1pbmktZmFiOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZmFiOm5vdChbZGlzYWJsZWRdKTphY3RpdmU6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1taW5pLWZhYjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCA3cHggOHB4IC00cHggcmdiYSgwLDAsMCwuMiksMCAxMnB4IDE3cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDVweCAyMnB4IDRweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1mYWJbZGlzYWJsZWRdOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLC5tYXQtbWluaS1mYWJbZGlzYWJsZWRdOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCAwIDAgMCByZ2JhKDAsMCwwLC4yKSwwIDAgMCAwIHJnYmEoMCwwLDAsLjE0KSwwIDAgMCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAsLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmV7Ym94LXNoYWRvdzowIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkLC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmR7Ym94LXNoYWRvdzpub25lfS5tYXQtYnV0dG9uLXRvZ2dsZXtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1idXR0b24tdG9nZ2xlIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJke2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSsubWF0LWJ1dHRvbi10b2dnbGV7Ym9yZGVyLWxlZnQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX1bZGlyPXJ0bF0gLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlKy5tYXQtYnV0dG9uLXRvZ2dsZXtib3JkZXItbGVmdDpub25lO2JvcmRlci1yaWdodDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkLm1hdC1idXR0b24tdG9nZ2xlLXZlcnRpY2FsIC5tYXQtYnV0dG9uLXRvZ2dsZSsubWF0LWJ1dHRvbi10b2dnbGV7Ym9yZGVyLWxlZnQ6bm9uZTtib3JkZXItcmlnaHQ6bm9uZTtib3JkZXItdG9wOnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWR7YmFja2dyb3VuZC1jb2xvcjojZTBlMGUwO2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJke2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuMjYpO2JhY2tncm91bmQtY29sb3I6I2VlZX0ubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZHtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWR7YmFja2dyb3VuZC1jb2xvcjojYmRiZGJkfS5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkLC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmR7Ym9yZGVyOnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1jYXJke2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1jYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWNhcmQubWF0LWNhcmQtZmxhdDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgMCAwIDAgcmdiYSgwLDAsMCwuMiksMCAwIDAgMCByZ2JhKDAsMCwwLC4xNCksMCAwIDAgMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1jYXJkLXN1YnRpdGxle2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNoZWNrYm94LWZyYW1le2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jaGVja2JveC1jaGVja21hcmt7ZmlsbDojZmFmYWZhfS5tYXQtY2hlY2tib3gtY2hlY2ttYXJrLXBhdGh7c3Ryb2tlOiNmYWZhZmEhaW1wb3J0YW50fUBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDpibGFjay1vbi13aGl0ZSl7Lm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aHtzdHJva2U6IzAwMCFpbXBvcnRhbnR9fS5tYXQtY2hlY2tib3gtbWl4ZWRtYXJre2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYX0ubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojZmZkNzQwfS5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtd2FybiAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1jaGVja2JveC1kaXNhYmxlZC5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlKSAubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojYjBiMGIwfS5tYXQtY2hlY2tib3gtZGlzYWJsZWQ6bm90KC5tYXQtY2hlY2tib3gtY2hlY2tlZCkgLm1hdC1jaGVja2JveC1mcmFtZXtib3JkZXItY29sb3I6I2IwYjBiMH0ubWF0LWNoZWNrYm94LWRpc2FibGVkIC5tYXQtY2hlY2tib3gtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfUBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5tYXQtY2hlY2tib3gtZGlzYWJsZWR7b3BhY2l0eTouNX19QG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OmFjdGl2ZSl7Lm1hdC1jaGVja2JveC1iYWNrZ3JvdW5ke2JhY2tncm91bmQ6MCAwfX0ubWF0LWNoZWNrYm94Om5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6IzY3M2FiN30ubWF0LWNoZWNrYm94Om5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojZmZkNzQwfS5tYXQtY2hlY2tib3g6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcHtiYWNrZ3JvdW5kLWNvbG9yOiNlMGUwZTA7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcCAubWF0LWNoaXAtcmVtb3Zle2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcDpub3QoLm1hdC1jaGlwLWRpc2FibGVkKTphY3RpdmV7Ym94LXNoYWRvdzowIDNweCAzcHggLTJweCByZ2JhKDAsMCwwLC4yKSwwIDNweCA0cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggOHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcDpub3QoLm1hdC1jaGlwLWRpc2FibGVkKSAubWF0LWNoaXAtcmVtb3ZlOmhvdmVye29wYWNpdHk6LjU0fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1kaXNhYmxlZHtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcDo6YWZ0ZXJ7YmFja2dyb3VuZDojMDAwfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjc7Y29sb3I6I2ZmZn0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnkgLm1hdC1jaGlwLXJlbW92ZXtjb2xvcjojZmZmO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm57YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2O2NvbG9yOiNmZmZ9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC13YXJuIC5tYXQtY2hpcC1yZW1vdmV7Y29sb3I6I2ZmZjtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZmZkNzQwO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudCAubWF0LWNoaXAtcmVtb3Zle2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xKX0ubWF0LXRhYmxle2JhY2tncm91bmQ6I2ZmZn0ubWF0LXRhYmxlIHRib2R5LC5tYXQtdGFibGUgdGZvb3QsLm1hdC10YWJsZSB0aGVhZCwubWF0LXRhYmxlLXN0aWNreSxbbWF0LWZvb3Rlci1yb3ddLFttYXQtaGVhZGVyLXJvd10sW21hdC1yb3ddLG1hdC1mb290ZXItcm93LG1hdC1oZWFkZXItcm93LG1hdC1yb3d7YmFja2dyb3VuZDppbmhlcml0fW1hdC1mb290ZXItcm93LG1hdC1oZWFkZXItcm93LG1hdC1yb3csdGQubWF0LWNlbGwsdGQubWF0LWZvb3Rlci1jZWxsLHRoLm1hdC1oZWFkZXItY2VsbHtib3JkZXItYm90dG9tLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWhlYWRlci1jZWxse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNlbGwsLm1hdC1mb290ZXItY2VsbHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1jYWxlbmRhci1hcnJvd3tib3JkZXItdG9wLWNvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLW5leHQtYnV0dG9uLC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItcHJldmlvdXMtYnV0dG9uLC5tYXQtZGF0ZXBpY2tlci10b2dnbGV7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVye2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlci1kaXZpZGVyOjphZnRlcntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWNhbGVuZGFyLWJvZHktbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnR7Y29sb3I6cmdiYSgwLDAsMCwuODcpO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudH0ubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9LmNkay1rZXlib2FyZC1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmU+Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSwuY2RrLXByb2dyYW0tZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCksLm1hdC1jYWxlbmRhci1ib2R5LWNlbGw6bm90KC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCk6aG92ZXI+Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA0KX0ubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCl7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpe2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4xOCl9Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6IzY3M2FiNztjb2xvcjojZmZmfS5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEwMyw1OCwxODMsLjQpfS5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCAjZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50e2JveC1zaGFkb3c6MCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA0cHggNXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMik7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDA7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDIxNSw2NCwuNCl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggcmdiYSgwLDAsMCwuODcpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzY7Y29sb3I6I2ZmZn0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDQsNjcsNTQsLjQpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCAjZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50LXRvdWNoe2JveC1zaGFkb3c6MCAwIDAgMCByZ2JhKDAsMCwwLC4yKSwwIDAgMCAwIHJnYmEoMCwwLDAsLjE0KSwwIDAgMCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZXtjb2xvcjojNjczYWI3fS5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlLm1hdC1hY2NlbnR7Y29sb3I6I2ZmZDc0MH0ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZS5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtZGlhbG9nLWNvbnRhaW5lcntib3gtc2hhZG93OjAgMTFweCAxNXB4IC03cHggcmdiYSgwLDAsMCwuMiksMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwwLDAsLjE0KSwwIDlweCA0NnB4IDhweCByZ2JhKDAsMCwwLC4xMik7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWRpdmlkZXJ7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1kaXZpZGVyLXZlcnRpY2Fse2JvcmRlci1yaWdodC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1leHBhbnNpb24tcGFuZWx7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1hY3Rpb24tcm93e2JvcmRlci10b3AtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKS5jZGsta2V5Ym9hcmQtZm9jdXNlZCwubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSkuY2RrLXByb2dyYW0tZm9jdXNlZCwubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSk6aG92ZXJ7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9QG1lZGlhIChob3Zlcjpub25lKXsubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCk6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXJ7YmFja2dyb3VuZDojZmZmfX0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGV7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXIsLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9ue2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXXtjb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPXRydWVdIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZXtjb2xvcjppbmhlcml0fS5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC42KX0ubWF0LWhpbnR7Y29sb3I6cmdiYSgwLDAsMCwuNil9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjojNjczYWI3fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LWFjY2VudHtjb2xvcjojZmZkNzQwfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LXdhcm57Y29sb3I6I2Y0NDMzNn0ubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlcntjb2xvcjojZmZkNzQwfS5tYXQtZm9ybS1maWVsZC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZmZkNzQwfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC13YXJue2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciwubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LWFjY2VudHtjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtYWNjZW50e2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWVycm9ye2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtaGludHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQscmdiYSgwLDAsMCwuNDIpIDAscmdiYSgwLDAsMCwuNDIpIDMzJSx0cmFuc3BhcmVudCAwKTtiYWNrZ3JvdW5kLXNpemU6NHB4IDEwMCU7YmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0LXh9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHJnYmEoMCwwLDAsLjQyKSAwLHJnYmEoMCwwLDAsLjQyKSAzMyUsdHJhbnNwYXJlbnQgMCk7YmFja2dyb3VuZC1zaXplOjRweCAxMDAlO2JhY2tncm91bmQtcmVwZWF0OnJlcGVhdC14fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXh7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtZmxleHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjAyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le2NvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiM2NzNhYjd9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZC5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiNmZmQ3NDB9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZC5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmV7Y29sb3I6cmdiYSgwLDAsMCwuMDYpfS5tYXQtaWNvbi5tYXQtcHJpbWFyeXtjb2xvcjojNjczYWI3fS5tYXQtaWNvbi5tYXQtYWNjZW50e2NvbG9yOiNmZmQ3NDB9Lm1hdC1pY29uLm1hdC13YXJue2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciwubWF0LWlucHV0LWVsZW1lbnQ6ZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtaW5wdXQtZWxlbWVudHtjYXJldC1jb2xvcjojNjczYWI3fS5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtaW5wdXQtZWxlbWVudDo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1pbnB1dC1lbGVtZW50Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWlucHV0LWVsZW1lbnQ6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWFjY2VudCAubWF0LWlucHV0LWVsZW1lbnR7Y2FyZXQtY29sb3I6I2ZmZDc0MH0ubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWlucHV0LWVsZW1lbnQsLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudHtjYXJldC1jb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjojZjQ0MzM2fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVte2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9ue2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWxpc3QtYmFzZSAubWF0LXN1YmhlYWRlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1saXN0LWl0ZW0tZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZWVlfS5tYXQtbGlzdC1vcHRpb246Zm9jdXMsLm1hdC1saXN0LW9wdGlvbjpob3ZlciwubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtOmZvY3VzLC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW06aG92ZXJ7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1tZW51LXBhbmVse2JhY2tncm91bmQ6I2ZmZn0ubWF0LW1lbnUtcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDRweCA1cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LW1lbnUtaXRlbXtiYWNrZ3JvdW5kOjAgMDtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1tZW51LWl0ZW1bZGlzYWJsZWRdLC5tYXQtbWVudS1pdGVtW2Rpc2FibGVkXTo6YWZ0ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtbWVudS1pdGVtIC5tYXQtaWNvbjpub3QoW2NvbG9yXSksLm1hdC1tZW51LWl0ZW0tc3VibWVudS10cmlnZ2VyOjphZnRlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1tZW51LWl0ZW0taGlnaGxpZ2h0ZWQ6bm90KFtkaXNhYmxlZF0pLC5tYXQtbWVudS1pdGVtLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdChbZGlzYWJsZWRdKSwubWF0LW1lbnUtaXRlbS5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdChbZGlzYWJsZWRdKSwubWF0LW1lbnUtaXRlbTpob3Zlcjpub3QoW2Rpc2FibGVkXSl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1wYWdpbmF0b3J7YmFja2dyb3VuZDojZmZmfS5tYXQtcGFnaW5hdG9yLC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2Vye2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50e2JvcmRlci10b3A6MnB4IHNvbGlkIHJnYmEoMCwwLDAsLjU0KTtib3JkZXItcmlnaHQ6MnB4IHNvbGlkIHJnYmEoMCwwLDAsLjU0KX0ubWF0LXBhZ2luYXRvci1maXJzdCwubWF0LXBhZ2luYXRvci1sYXN0e2JvcmRlci10b3A6MnB4IHNvbGlkIHJnYmEoMCwwLDAsLjU0KX0ubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItZmlyc3QsLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWxhc3R7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5ke2ZpbGw6I2QxYzRlOX0ubWF0LXByb2dyZXNzLWJhci1idWZmZXJ7YmFja2dyb3VuZC1jb2xvcjojZDFjNGU5fS5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVye2JhY2tncm91bmQtY29sb3I6IzY3M2FiN30ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmR7ZmlsbDojZmZlNTdmfS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVye2JhY2tncm91bmQtY29sb3I6I2ZmZTU3Zn0ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVye2JhY2tncm91bmQtY29sb3I6I2ZmZDc0MH0ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5ke2ZpbGw6I2ZmY2RkMn0ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1idWZmZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZjZGQyfS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVye2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLC5tYXQtc3Bpbm5lciBjaXJjbGV7c3Ryb2tlOiM2NzNhYjd9Lm1hdC1wcm9ncmVzcy1zcGlubmVyLm1hdC1hY2NlbnQgY2lyY2xlLC5tYXQtc3Bpbm5lci5tYXQtYWNjZW50IGNpcmNsZXtzdHJva2U6I2ZmZDc0MH0ubWF0LXByb2dyZXNzLXNwaW5uZXIubWF0LXdhcm4gY2lyY2xlLC5tYXQtc3Bpbm5lci5tYXQtd2FybiBjaXJjbGV7c3Ryb2tlOiNmNDQzMzZ9Lm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6IzY3M2FiN30ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5OmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxle2JhY2tncm91bmQtY29sb3I6IzY3M2FiN30ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjojZmZkNzQwfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudDphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4ubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOiNmNDQzMzZ9Lm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4gLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4gLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4ubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2FybjphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1sYWJlbC1jb250ZW50e2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXJhZGlvLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6IzAwMH0ubWF0LXNlbGVjdC12YWx1ZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zZWxlY3QtcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LXZhbHVle2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1zZWxlY3QtcGFuZWx7YmFja2dyb3VuZDojZmZmfS5tYXQtc2VsZWN0LXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA0cHggNXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1zZWxlY3QtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiM2NzNhYjd9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1hY2NlbnQgLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6I2ZmZDc0MH0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LXdhcm4gLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1pbnZhbGlkIC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtZHJhd2VyLWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmE7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZHJhd2Vye2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kcmF3ZXIubWF0LWRyYXdlci1wdXNoe2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LWRyYXdlcjpub3QoLm1hdC1kcmF3ZXItc2lkZSl7Ym94LXNoYWRvdzowIDhweCAxMHB4IC01cHggcmdiYSgwLDAsMCwuMiksMCAxNnB4IDI0cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDZweCAzMHB4IDVweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1kcmF3ZXItc2lkZXtib3JkZXItcmlnaHQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWRyYXdlci1zaWRlLm1hdC1kcmF3ZXItZW5ke2JvcmRlci1sZWZ0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMik7Ym9yZGVyLXJpZ2h0Om5vbmV9W2Rpcj1ydGxdIC5tYXQtZHJhd2VyLXNpZGV7Ym9yZGVyLWxlZnQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKTtib3JkZXItcmlnaHQ6bm9uZX1bZGlyPXJ0bF0gLm1hdC1kcmF3ZXItc2lkZS5tYXQtZHJhd2VyLWVuZHtib3JkZXItbGVmdDpub25lO2JvcmRlci1yaWdodDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZHJhd2VyLWJhY2tkcm9wLm1hdC1kcmF3ZXItc2hvd257YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC42KX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFye2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjE1LDY0LC41NCl9Lm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTAzLDU4LDE4MywuNTQpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtd2Fybi5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NCw2Nyw1NCwuNTQpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtc2xpZGUtdG9nZ2xlOm5vdCgubWF0LWNoZWNrZWQpIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JveC1zaGFkb3c6MCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKTtiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmF9Lm1hdC1zbGlkZS10b2dnbGUtYmFye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYi1sYWJlbCwubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdHJhY2stZmlsbHtiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjd9Lm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHR7Y29sb3I6I2ZmZn0ubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYiwubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYi1sYWJlbCwubWF0LWFjY2VudCAubWF0LXNsaWRlci10cmFjay1maWxse2JhY2tncm91bmQtY29sb3I6I2ZmZDc0MH0ubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWIsLm1hdC13YXJuIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLC5tYXQtd2FybiAubWF0LXNsaWRlci10cmFjay1maWxse2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dHtjb2xvcjojZmZmfS5tYXQtc2xpZGVyLWZvY3VzLXJpbmd7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMTUsNjQsLjIpfS5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLC5tYXQtc2xpZGVyOmhvdmVyIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCwubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10cmFjay1maWxse2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtc2xpZGVyLWRpc2FibGVkOmhvdmVyIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1zbGlkZXItbWluLXZhbHVlIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmd7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVse2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZy5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYi1sYWJlbHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpIC5tYXQtc2xpZGVyLXRodW1ie2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4yNik7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyk6aG92ZXIgLm1hdC1zbGlkZXItdGh1bWJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpLmNkay1mb2N1c2VkLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKTpob3Zlci5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1ie2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1zbGlkZXItaGFzLXRpY2tzIC5tYXQtc2xpZGVyLXdyYXBwZXI6OmFmdGVye2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC43KX0ubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRpY2tze2JhY2tncm91bmQtaW1hZ2U6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2JhKDAsMCwwLC43KSxyZ2JhKDAsMCwwLC43KSAycHgsdHJhbnNwYXJlbnQgMCx0cmFuc3BhcmVudCk7YmFja2dyb3VuZC1pbWFnZTotbW96LXJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoLjAwMDFkZWcscmdiYSgwLDAsMCwuNykscmdiYSgwLDAsMCwuNykgMnB4LHRyYW5zcGFyZW50IDAsdHJhbnNwYXJlbnQpfS5tYXQtc2xpZGVyLXZlcnRpY2FsIC5tYXQtc2xpZGVyLXRpY2tze2JhY2tncm91bmQtaW1hZ2U6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20scmdiYSgwLDAsMCwuNykscmdiYSgwLDAsMCwuNykgMnB4LHRyYW5zcGFyZW50IDAsdHJhbnNwYXJlbnQpfS5tYXQtc3RlcC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQsLm1hdC1zdGVwLWhlYWRlci5jZGstcHJvZ3JhbS1mb2N1c2VkLC5tYXQtc3RlcC1oZWFkZXI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNCl9QG1lZGlhIChob3Zlcjpub25lKXsubWF0LXN0ZXAtaGVhZGVyOmhvdmVye2JhY2tncm91bmQ6MCAwfX0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbCwubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1vcHRpb25hbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjU0KTtjb2xvcjojZmZmfS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lLC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdHtiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjc7Y29sb3I6I2ZmZn0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVycm9ye2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2Y0NDMzNn0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1hY3RpdmV7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWVycm9ye2NvbG9yOiNmNDQzMzZ9Lm1hdC1zdGVwcGVyLWhvcml6b250YWwsLm1hdC1zdGVwcGVyLXZlcnRpY2Fse2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LXN0ZXBwZXItdmVydGljYWwtbGluZTo6YmVmb3Jle2JvcmRlci1sZWZ0LWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmFmdGVyLC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YmVmb3JlLC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmV7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1zb3J0LWhlYWRlci1hcnJvd3tjb2xvcjojNzU3NTc1fS5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1uYXYtYmFye2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyKX0ubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciAubWF0LXRhYi1uYXYtYmFye2JvcmRlci10b3A6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyKTtib3JkZXItYm90dG9tOm5vbmV9Lm1hdC10YWItbGFiZWwsLm1hdC10YWItbGlua3tjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC10YWItZ3JvdXBbY2xhc3MqPW1hdC1iYWNrZ3JvdW5kLV0gLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXJbY2xhc3MqPW1hdC1iYWNrZ3JvdW5kLV17Ym9yZGVyLWJvdHRvbTpub25lO2JvcmRlci10b3A6bm9uZX0ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIwOSwxOTYsMjMzLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5Lm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMjksMTI3LC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2ZmZDc0MH0ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50Lm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50Lm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjA1LDIxMCwuMyl9Lm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXRhYi1ncm91cC5tYXQtd2Fybi5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyMDksMTk2LDIzMywuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rcywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rc3tiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjd9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmssLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5re2NvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjI5LDEyNywuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGlua3MsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmtze2JhY2tncm91bmQtY29sb3I6I2ZmZDc0MH0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmssLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGlua3tjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjA1LDIxMCwuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rcywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rc3tiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmssLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5re2NvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtdG9vbGJhcntiYWNrZ3JvdW5kOiNmNWY1ZjU7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeXtiYWNrZ3JvdW5kOiM2NzNhYjc7Y29sb3I6I2ZmZn0ubWF0LXRvb2xiYXIubWF0LWFjY2VudHtiYWNrZ3JvdW5kOiNmZmQ3NDA7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdG9vbGJhci5tYXQtd2FybntiYWNrZ3JvdW5kOiNmNDQzMzY7Y29sb3I6I2ZmZn0ubWF0LXRvb2xiYXIgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3J9Lm1hdC10b29sYmFyIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtc2VsZWN0LWFycm93LC5tYXQtdG9vbGJhciAubWF0LXNlbGVjdC1hcnJvdywubWF0LXRvb2xiYXIgLm1hdC1zZWxlY3QtdmFsdWV7Y29sb3I6aW5oZXJpdH0ubWF0LXRvb2xiYXIgLm1hdC1pbnB1dC1lbGVtZW50e2NhcmV0LWNvbG9yOmN1cnJlbnRDb2xvcn0ubWF0LXRvb2x0aXB7YmFja2dyb3VuZDpyZ2JhKDk3LDk3LDk3LC45KX0ubWF0LXRyZWV7YmFja2dyb3VuZDojZmZmfS5tYXQtbmVzdGVkLXRyZWUtbm9kZSwubWF0LXRyZWUtbm9kZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zbmFjay1iYXItY29udGFpbmVye2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjcpO2JhY2tncm91bmQ6IzMyMzIzMjtib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb257Y29sb3I6I2ZmZDc0MH0iLCJAaW1wb3J0ICdAYW5ndWxhci9tYXRlcmlhbC9wcmVidWlsdC10aGVtZXMvZGVlcHB1cnBsZS1hbWJlci5jc3MnO1xuc2VjdGlvbntcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDQlO1xuXG59XG5oZWFkZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCAjNTU1NTtcbn1cbi5jYXJke1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW4tdG9wOiAxJTtcbn1cbi5jYXJkIGgxe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5pYW5kbHtcbndpZHRoOiA2MCU7XG5tYXJnaW46IDAgYXV0bztcbmRpc3BsYXk6IGZsZXg7XG59XG4uaWFuZGwgaDN7XG4gIHdpZHRoOiA0OCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xufVxuLmZvbGxvdy1idG57XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZm9sbG93LWJ0biBidXR0b257XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmZvbGxvdy1idG4gc3Bhblxue1xuICBtYXJnaW4tbGVmdDogMTglO1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbi5leHRyYUluZm97XG4gd2lkdGg6IDMwJTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxMHB4ICM1NTU1O1xuICBwYWRkaW5nOiAwcHggMjVweDtcblxufVxuLnNvY2lhbHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXhcbn1cbi5zb2NpYWxfbGlua3NcbntcbiAgd2lkdGg6IDEwMCU7XG5cbn1cbi5zb2NpYWxfbGlua3Mgc3Bhblxue1xuICBwYWRkaW5nOiAwcHggMiU7XG59XG5cbi5jYXJkLWxlZnR7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuXG59XG5cbi5jYXJkLWxlZnQgaDN7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uaGVhZGVySW1ne1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDM0dmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubG9nb2hlYWRlcntcbiAgd2lkdGg6IDM1JTtcbiAgaGVpZ2h0OiAyMCU7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGRhcmtzZWFncmVlbjsgKi9cblxuICB0b3A6NTBweDtcbiAgLyogbGVmdDogMzUlOyAqL1xuICBwYWRkaW5nOiAyMnB4IDIycHg7XG5cbn1cbi5sb2dvaGVhZGVyIGltZ3tcbndpZHRoOiAxMDAlO1xuYm94LXNoYWRvdzogMHB4IDNweCAxMHB4ICM1NTU1O1xufVxuLmltZ3tcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBnb2xkIDMwJSwgdHJhbnNwYXJlbnQgODAlKTsgICovXG5cbn1cbi5pbWcgaW1ne1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGFic3tcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDN2aDtcbiAgaGVpZ2h0OiAxNXZoO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnRhYntcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDAlO1xuICB0cmFuc2l0aW9uOiAuMnM7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCAjNTU1NTtcbn1cbi50YWJDbGlja2Vke1xuICBoZWlnaHQ6IDE1MCU7XG4gIHRyYW5zaXRpb246IC4ycztcbn1cbi50YWIgaDF7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmJvZHl7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmluZm9TZWN0aW9uMXtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uc2hvcnRCaW97XG4gIHdpZHRoOiAyNyU7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCAjNTU1NTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbi5iaW97XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuXG59XG4uYmlvIGgye1xuICBtYXJnaW4tdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uZmVlZHtcbiAgd2lkdGg6IDM4JTtcbiAgaGVpZ2h0OiA0OTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgbWFyZ2luLXJpZ2h0OiA0JTtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xufVxuLmF1dGhvckluZm97XG53aWR0aDogMTAwJTtcbmRpc3BsYXk6IGZsZXg7XG59XG4uZGV0YWlsc3tcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmxvZ297XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4ubG9nbyBpbWd7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZGV0YWlscyBoMXtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA1cHggMCAwIDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5kZXRhaWxzIHB7XG4gIHBhZGRpbmc6IDBweCAwIDAgMTVweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uZmVlZEluZm8ge1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAxNSU7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uZmVlZEluZm8gcHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmZvbGxvd0J0bntcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmZvbGxvd0J0biBidXR0b257XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXI6bm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uZm9sbG93QnRuIHB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogIDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5mZWVkLWltZ3tcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjAlO1xufVxuLmZlZWQtaW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uZmVlZC1zaGFyZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNyU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogMSU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZmVlZC1zaGFyZSBpbWdcbntcbiAgd2lkdGg6IDQlO1xuICBtYXJnaW4tbGVmdDogMSU7XG5cbn1cbi50YWdnZWR7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDclO1xufVxubWF0LWV4cGFuc2lvbi1wYW5lbHtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwO1xuXG59XG4udGFnZ2VkIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVye1xuICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cbm1hdC1wYW5lbC10aXRsZSBoNHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4uaGVhZGVyX3Jlc3BvbnNpdmVcbntcbiAgICBkaXNwbGF5Om5vbmU7XG5cbn1cbi5tb2ItY2FyZHN7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiB3aWR0aDogMTAwJTtcbiBtYXJnaW46IDAgYXV0bztcbn1cbi5tb2ItY2FyZHN7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY2FyZC13cmFwcGVye1xuICB3aWR0aDogNDYlO1xuICBib3gtc2hhZG93OiAwIDNweCA0cHggMCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgM3B4IDNweCAtMnB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDFweCA4cHggMCByZ2JhKDAsIDAsIDAsIC4xMik7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG4uaW1nLWJhbm5lciBpbWd7XG4gIG1heC13aWR0aDoxMDAlO1xuICBoZWlnaHQ6YXV0bztcbn1cblxuLmNvbnRlbnQtZGV0YWlscyBwe1xubWFyZ2luLXRvcDogMDtcbmZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmZvb3Rlci1jb250ZW50e1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYXJkLXdyYXBwZXIgaDZ7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDo1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5jYXJkLXdyYXBwZXIgaDV7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiA1cHg7XG59XG4uYm9keTFcbntcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxMHB4ICM1NTU1O1xuICBtYXJnaW4tdG9wOiA2JTtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG4uY29tYXBhbnlfY29udGFjdFxue1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcblxufVxuLmNvbWFwYW55X2NvbnRhY3QgaDJcbntcbiAgY29sb3I6ICMwNzA3MDc7XG5cbn1cbi5jb21wYW55X2RldGFpbHNcbntcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuXG4uY29tcGFueV9kZXRhaWxzMVxue1xuICB3aWR0aDogNDclO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDEwcHggIzU1NTU7XG4gIGhlaWdodDogMTc1cHg7XG4gIHBhZGRpbmctdG9wOjElO1xuICBtYXJnaW4tbGVmdDogMiU7XG5cbn1cbi5jb21wYW55X2VtYWlsXG57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA0NSU7XG4gIE1BUkdJTjogMCBBVVRPO1xuICBmb250LXNpemU6IDI4cHg7XG59XG4uY29tcGFueV9lbWFpbCBwXG57XG4gIHdpZHRoOiAxNSU7XG4gIGNvbG9yOiMwQTlBQjE7XG59XG4uY29tcGFueV9lbWFpbDFcbntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbXBhbnlfZW1haWwxIGgyXG57XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY29tcGFueV9hZGRyZXNzXG57XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmdvb2dsZV9tYXBcbntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogNDclO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiB3aGVhdDtcbn1cbi5jb21wbGV0ZV9hZGRyZXNzXG57XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgd2lkdGg6IDM0JTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuLmNvbXBsZXRlX2FkZHJlc3MgcCB7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi10b3A6IDMlO1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzAwcHgpe1xuICAuY29tcGFueV9pbmR1c3RyeSwubG9naW5fdXNlcntcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC53aXRoX2xvZ2lue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxOCU7XG4gIH1cbiAgLmZlZWRze1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICAuYWRkX21lZGlhIGgye1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICB9XG4gIC5hZGRfbWVkaWEgc3BhbntcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLmFkZF9mZWVkIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgd2lkdGg6IDEyJTtcbiAgfVxuICBzZWN0aW9ue1xuICAgIHdpZHRoOiA5NSU7XG4gIH1cbiAgLmZvbGxvd0J0biBidXR0b257XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gIH1cbiAgLmZvbGxvd0J0biBwe1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuICAuZGV0YWlscyBoMXtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLmRldGFpbHMgcHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgfVxuICAuZmVlZEluZm8gcHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIH1cbiAgbWF0LXBhbmVsLXRpdGxlIGg0e1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuLmJvZHlcbiAge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbiAgLmhlYWRlcl9yZXNwb25zaXZlXG4gIHtcbiAgICAgIGRpc3BsYXk6YmxvY2s7XG5cbiAgfVxuICBoZWFkZXJcbiAgICB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbi5oZWFkZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAqL1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaGVhZGVyRWxlbWVudHMxe1xuICB3aWR0aDogOTQlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JheTtcbiAgbWFyZ2luLXRvcDogLTEzJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5lbGVtZW50c3tcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzoxMHB4IDMwcHg7XG5cbn1cbi5lbGVtZW50cyBoNHtcbiAgbWFyZ2luOiAwO1xufVxuLmhlYWRlckltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM0dmg7XG4gIG1hcmdpbi10b3A6IDIyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjMTgxODtcbiAgZGlzcGxheTogZmxleDtcbn1cbi50YWJzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi50YWJzMSAgIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDN2aDtcbiAgaGVpZ2h0OiAxNXZoO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZvbGxvdy1idG4gc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiA3JTtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLmNhcmQgIHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxMHB4ICM1NTU1O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMSU7XG59XG4udGFiQ2xpY2tlZHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JheTtcbn1cbi5leHRyYUluZm97XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDEwcHggIzU1NTU7XG4gIHBhZGRpbmc6IDBweCAyNXB4O1xufVxuLmluZm9TZWN0aW9uMSB7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5zaG9ydEJpbyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZlZWQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6MDtcbiAgbWFyZ2luLXRvcDoyJTtcbn1cbi5vdGhlckluZm9jYXJkIHtcblxuICB3aWR0aDogMTAwJSAhIGltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuLkNhcmQge1xuICB3aWR0aDogMTAwJSAhIGltcG9ydGFudDtcblxufVxuLmluZm9TZWN0b25DYXJkIHtcblxuIGRpc3BsYXk6IGJsb2NrICEgaW1wb3J0YW50O1xufVxuLmluZm9TZWN0b25DYXJkIGltZyB7XG4gIHdpZHRoOiAxMDAlICEgaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcbn1cbi5jb250ZW50e1xuICB3aWR0aDogMTAwJSAhIGltcG9ydGFudDtcbn1cbi5DYXJkIHtkaXNwbGF5OiAgbm9uZSAhIGltcG9ydGFudDt9XG4ubW9iLWNhcmRze1xuICBkaXNwbGF5OmZsZXg7XG5mbGV4LXdyYXA6IHdyYXA7XG5wYWRkaW5nLXRvcDowcHg7XG5cbn1cbi5pbmZvSW1nIGltZ3tcbiAgd2lkdGg6IDEwMCUgISBpbXBvcnRhbnQ7XG4gICBoZWlnaHQ6IDIwJSAhIGltcG9ydGFudDtcbn1cbi5pbmZvQ29udGVudCBwe1xuICB3aWR0aDogMTAwJSAhIGltcG9ydGFudDtcblxufVxuLmNvbWFwYW55X2NvbnRhY3RbX25nY29udGVudC1jMV0ge1xuICB3aWR0aDogOTYlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jb21wYW55X2RldGFpbHNbX25nY29udGVudC1jMV0ge1xuICBkaXNwbGF5OiBmbGV4O1xud2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cbi5jb21wYW55X2RldGFpbHMxW19uZ2NvbnRlbnQtYzFdIHtcbiAgd2lkdGg6IDQ3JTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxMHB4ICM1NTU1O1xuICBoZWlnaHQ6IDEzMXB4O1xuICBwYWRkaW5nLXRvcDogMSU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cbi5jb21wYW55X2VtYWlsW19uZ2NvbnRlbnQtYzFdIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDkyJTtcbiAgTUFSR0lOOiAwIEFVVE87XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbi5jb21wYW55X2VtYWlsW19uZ2NvbnRlbnQtYzFdIHBbX25nY29udGVudC1jMV0ge1xuICB3aWR0aDogMjElO1xuICBjb2xvcjogIzBBOUFCMTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLmNvbXBhbnlfZW1haWwxIHtcbiAgd2lkdGg6IDgzJTtcbiAgTUFSR0lOOiAwIEFVVE87XG59XG4uY29tcGFueV9lbWFpbDEgICBoMiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbXBhbnlfYWRkcmVzcyB7XG4gIHdpZHRoOiA5NCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAgZGlzcGxheTogYmxvY2s7XG59XG4uZ29vZ2xlX21hcCB7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG4gfVxuLmNvbXBsZXRlX2FkZHJlc3N7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcblxuICAubG9naW5fdXNlcntcbiAgd2lkdGg6IDI2JTtcbiAgfVxuICAudXNlcl9uYW1lIGgyXG57XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNGQUY2RjY7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuICAuY29tcGFueV9pbmR1c3RyeXtcbiAgICB3aWR0aDogMjUlO1xuICAgIH1cbiAgLmZlZWRze1xuICAgIHdpZHRoOiA0OCU7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG4gIC5hZGRfbWVkaWEgaDJ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG4gIH1cbiAgLmFkZF9tZWRpYSBzcGFue1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAuYWRkX2ZlZWQge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB3aWR0aDogMjElO1xuICB9XG4gIHNlY3Rpb257XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW4tbGVmdDo5JTtcbiAgICBtYXJnaW4tdG9wOiA4JTtcbiAgfVxuICAuZm9sbG93QnRuIGJ1dHRvbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDhweDtcbiAgfVxuICAuZm9sbG93QnRuIHB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG4gIC5kZXRhaWxzIGgxe1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAuZGV0YWlscyBwe1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICB9XG4gIC5mZWVkSW5mbyBwe1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgfVxuICBtYXQtcGFuZWwtdGl0bGUgaDR7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG4gIC50YWIgaDEge1xuXG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG4gIC5leHRyYUluZm8ge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbiAgICAudGFiIHtcblxuICAgICAgd2lkdGg6IDI2JTtcblxuICB9XG4gIC5jb21wYW55X2RldGFpbHMge1xuXG4gICAgd2lkdGg6IDEwMCU7XG59XG4uY29tYXBhbnlfY29udGFjdCB7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvbXBhbnlfZW1haWxcbiB7XG4gIHdpZHRoOiA4OCU7XG59XG4uY29tcGFueV9lbWFpbCBwIHtcbiAgd2lkdGg6IDIwJTtcbn1cbi5jb21wYW55X2VtYWlsMSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29tcGFueV9hZGRyZXNzIHtcbiAgd2lkdGg6IDk2JTtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbn1cbi5jb21wbGV0ZV9hZGRyZXNzIHtcbiAgd2lkdGg6IDQwJTtcblxufVxuXG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCl7XG4gIC53aXRoX2xvZ2lue1xuICAgIHdpZHRoOiA4NSU7XG4gIH1cblxufVxuLm90aGVySW5mb2NhcmR7XG4gIC8qIGhlaWdodDogMTB2aDsgKi9cbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxMHB4ICM1NTU1O1xufVxuLmluZm9DYXJke1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmluZm97XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxubGFiZWx7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5pbmZvIGgze1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiBibGFjaztcbn1cbi8qIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYm9keSAyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT4gKi9cbi5pbmZvU2VjdGlvbjJ7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLmluZm9JbWd7XG4gIHdpZHRoOiAxMDAlO1xuXG5cbn1cbi5pbmZvSW1nIGltZ3tcbiAgd2lkdGg6IDEwMCU7XG59XG4uaW5mb0NvbnRlbnQgaDN7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XG59XG4uaW5mb0NvbnRlbnQgcHtcbiAgd2lkdGg6IDcwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cbi5pbmZvU2VjdG9uQ2FyZHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWE7ICovXG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaW5mb1NlY3RvbkNhcmQgaW1ne1xuICB3aWR0aDogNjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcbiAgLyogbWFyZ2luLXJpZ2h0OiA1JSAqL1xufVxuIC5jb250ZW50e1xuICB3aWR0aDogMzMlO1xuICAgYm94LXNoYWRvdzogMHB4IDNweCAxMHB4ICM1NTU1O1xufVxuLlNlY3Rpb25jb250ZW50e1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuXG59XG4vKiA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNsaWRlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+ICovXG4uY2VydGlmaWNhdGV7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmNlcnRpZmljYXRlIGgye1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnNsaWRlci13cmFwcGVye1xud2lkdGg6IDkwJTtcbm1hcmdpbjogMCBhdXRvO1xufVxuLml0ZW1zIGltZ3tcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xufVxuLmNvbXBhbnlJbWd7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmNvbXBhbnlJbWcgaDJ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY29tcGFueUltZyAuaXRlbXMgaW1ne1xuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA0MzBweDtcbiAgaGVpZ2h0OiAzNzBweDtcbn1cbi8qIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYm9keSAzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT4gKi9cbi5wcm9kdWN0Q29uYXRpbmVye1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTZyZW07XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjVzIGVhc2UtaW4tb3V0O1xufVxuLnByb2R1Y3RBZGRidXR0b257XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4ucHJvZHVjdEFkZGJ1dHRvbiBidXR0b257XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjRkFGNkY2O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkFGNkY2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzMzMzMzMztcbn1cbi5leHBhbmR7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC41cyBlYXNlLWluLW91dDtcbn1cbi5jb25hdGluZXJ7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmluZm9TZWN0aW9uM3tcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLyogLmNvbmF0aW5lciBidXR0b257XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgbWFyZ2luLXRvcDogLTEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufSAqL1xuLyogPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVBST0RVQ1QgQ0FSRC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+ICovXG5cbi5DYXJke1xuICB3aWR0aDogNDclO1xuICBoZWlnaHQ6IDE1cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDNweCAzcHggcmdiYSgwLDAsMCwwLjIzKTtcbn1cbi5wcm9kdWN0Q2FyZCwgLlNlcnZpY2VDYXJke1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHhcbn1cbi5wcm9kdWN0SW1hZ2UsIC5TZXJ2aWNlSW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAxMHB4O1xuICB3aWR0aDogMzUlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uYm9va21hcmt7XG4gIHdpZHRoOiAxJTtcbiAgaGVpZ2h0OiAzJTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cbi5wcm9kdWN0SW1hZ2UgaW1nICwgLlNlcnZpY2VJbWFnZSBpbWd7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XG59XG4ucHJvZHVjdENvbnRlbnR7XG4gIHdpZHRoOiA2NSU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XG59XG4uaW5mb1NlY3Rpb24zIC5jb250ZW50e1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ucHJvZHVjdENvbnRlbnQgLmNvbnRlbnQgLnByb2R1Y3RDYXRlZ29yeSBoNiAsLlNlcnZpY2VDb250ZW50IC5jb250ZW50IC5TZXJ2aWNlQ2F0ZWdvcnkgaDYge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMTNweCAxNXB4IDAgMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuLnByb2R1Y3RDb250ZW50IC5jb250ZW50IC5wcm9kdWN0TmFtZSAsIC5TZXJ2aWNlQ29udGVudCAuY29udGVudCAuU2VydmljZU5hbWV7XG4gIHdpZHRoOiAxMDAlO1xuXG59XG4ucHJvZHVjdENvbnRlbnQgLmNvbnRlbnQgLnByb2R1Y3ROYW1lIGgyICwgLlNlcnZpY2VDb250ZW50IC5jb250ZW50IC5TZXJ2aWNlTmFtZSBoMntcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGRpc3BsYXk6IGZsZXhcbn1cbi5wcm9kdWN0Q29udGVudCAuY29udGVudCAucHJvZHVjdE5hbWUgaDUgLC5TZXJ2aWNlQ29udGVudCAuY29udGVudCAuU2VydmljZU5hbWUgaDV7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbn1cbi5wcm9kdWN0Q29udGVudCAuY29udGVudCAucHJvZHVjdE5hbWUgc21hbGwgLCAuU2VydmljZUNvbnRlbnQgLmNvbnRlbnQgLlNlcnZpY2VOYW1lIHNtYWxse1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnRhZ3N7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xuXG59XG4ub3RoZXItaW5mb3tcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucHJpY2V7XG4gIHdpZHRoOiAzMCU7XG59XG4uaGl0cyB7XG4gIHdpZHRoOiA3MCU7XG59XG4ucHJpY2UgaDR7XG4gIG1hcmdpbjogMDtcbn1cbi5oaXRzIHB7XG4gIG1hcmdpbjogMDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLlNlcnZpY2VDb250ZW50e1xuICB3aWR0aDogNjUlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDBweCAxMHB4O1xufVxuLlNlcnZpY2VJbWFnZXtcbiAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMDtcbn1cbi5TZXJ2aWNlSW1hZ2UgaW1ne1xuICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xufVxuLlNlcnZpY2VDb250ZW50IC5jb250ZW50IC5TZXJ2aWNlQ2F0ZWdvcnkgaDYge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMTNweCAwIDAgMTVweDtcbn1cbi5TZXJ2aWNlQ2FyZCAucHJpY2V7XG4gIHdpZHRoOiA3MCU7XG59XG4uU2VydmljZUNhcmQgLmhpdHMge1xuICB3aWR0aDogMzAlO1xufVxuLlNlcnZpY2VDYXJkIC5wcmljZSBoNHtcbiAgbWFyZ2luOiAwO1xufVxuLlNlcnZpY2VDYXJkIC5oaXRzIHB7XG4gIG1hcmdpbjogMDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jYXJkLXdyYXBwZXJ7XG4gIHdpZHRoOiA0NiU7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgLjE0KSwgMCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAuMiksIDAgMXB4IDhweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xufVxuLmltZy1iYW5uZXIgaW1ne1xuICBtYXgtd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OmF1dG87XG59XG5cbi5jb250ZW50LWRldGFpbHMgcHtcbm1hcmdpbi10b3A6IDA7XG5mb250LXNpemU6IDEzcHg7XG59XG5cbi5mb290ZXItY29udGVudHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2FyZC13cmFwcGVyIGg2e1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6NXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uY2FyZC13cmFwcGVyIGg1e1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5cbi8qIEBtZWRpYSAobWF4LXdpZHRoOjEwMTNweCl7XG4gIC5jYXJkLXdyYXBwZXJ7XG4gIG1heC13aWR0aDo0MDBweDtcbn1cbiAgLmhlYWRlcntcbiAgZm9udC1zaXplOjIwcHg7XG59XG4gIC5idG57XG4gIGhlaWdodDoxMHB4O1xuICB3aWR0aDoxMDBweDtcbiAgbWFyZ2luOjIwcHg7XG4gYWxpZ24taXRlbXM6Y2VudGVyO1xufVxuICAuaW1nLWJhbm5lciBpbWd7XG4gIG1heC13aWR0aDo0MDBweDtcbiAgaGVpZ2h0OmF1dG87XG59XG59ICovXG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XG4gIC5DYXJke1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwwLDAsMC4xOSksIDAgM3B4IDNweCByZ2JhKDAsMCwwLDAuMjMpO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/Bpage/b-page/b-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/Bpage/b-page/b-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-side-nav></app-side-nav>\n<section>\n  <div class=\"header_responsive\">\n\n        <div class=\"headerElements1\">\n            <div class=\"elements\"(click)=\"showTwo()\" [ngClass]=\"{'tabClicked': two}\"><h4>Products</h4></div>\n            <div class=\"elements\"  (click)=\"showThree()\" [ngClass]=\"{'tabClicked': three}\"><h4>Comapny</h4></div>\n            <div class=\"elements\"  (click)=\"showFour()\" [ngClass]=\"{'tabClicked': four}\"><h4>Feed</h4></div>\n            </div>\n        <div class=\"headerImg\">\n            <!-- <div class=\"img\" [ngStyle]=\"{'background-image':getUrl(), 'background-size' : 'contain'}\"> </div> -->\n               <!-- <div class=\"img\" ><img src=\"assets/images/bk1.jpg\"></div>  -->\n\n        </div>\n\n        <div class=\"card\">\n\n\n            <div class=\"logoheader\">\n            <img src=\"{{image}}\">\n            </div>\n            <div class=\"user_profile\">\n                <h2>{{CompanyName}}</h2>\n\n                     <div class=\"follow-btn\">\n                    <button>FOLLOW</button>\n                    <span>24,255</span>\n                </div>\n              </div>\n        </div>\n\n\n      </div>\n\n<header>\n    <h1 style=\"margin: 0 auto;width: 97%;     display: flex;padding-top: 10px;font-size: 100%;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16.464\" height=\"27.259\" viewBox=\"0 0 16.464 27.259\">\n      <g id=\"location\" transform=\"translate(-486.5 -340.5)\">\n        <path id=\"Union_12\" data-name=\"Union 12\" d=\"M1.174,11.729A7.817,7.817,0,0,1,0,7.585,7.415,7.415,0,0,1,7.232,0a7.415,7.415,0,0,1,7.232,7.585,7.817,7.817,0,0,1-1.173,4.143L7.323,24Z\" transform=\"translate(487.5 341.5)\" fill=\"#fff\" stroke=\"#bcbccb\" stroke-width=\"2\"/>\n        <g id=\"Ellipse_3\" data-name=\"Ellipse 3\" transform=\"translate(490.988 345.299)\" fill=\"#bcbccb\" stroke=\"#bcbccb\" stroke-width=\"2\">\n          <circle cx=\"3.778\" cy=\"3.778\" r=\"3.778\" stroke=\"none\"/>\n          <circle cx=\"3.778\" cy=\"3.778\" r=\"2.778\" fill=\"none\"/>\n        </g>\n      </g>\n    </svg><span style=\"margin-left:10px;\">{{country}}</span></h1>\n      <div class=\"card\">\n            <div class=\"logoheader\">\n            <img src=\"assets/images/logo.png\">\n            </div>\n            <div class=\"user_profile\">\n                <h2>{{CompanyName}}</h2>\n                <p>{{industry}}</p>\n               <p> {{city}}</p>\n               <p>{{companyEmail}}</p>\n                <div class=\"follow-btn\">\n                    <button>FOLLOW</button>\n                    <span>24,255</span>\n                </div>\n              </div>\n        </div>\n\n            <!-- <div class=\"logoheader\"></div>\n      <h1>Company Ka Naam</h1>\n      <div class=\"iandl\">\n          <h3>INDUSTRY</h3> <H3>LOCATION</H3>\n      </div>\n      <div class=\"follow-btn\">\n        <button>FOLLOW</button>\n      </div>\n      <div class=\"extraInfo\">\n      <p>9 A.M. - 5 P.M.</p>\n      <p>www.elroute.com</p>\n      <p>Bookmark</p>\n      </div>\n      <div class=\"social\">\n\n      </div> -->\n      <div class=\"headerImg\">\n          <!-- <div class=\"img\" [ngStyle]=\"{'background-image':getUrl(), 'background-size' : 'contain'}\"> </div> -->\n             <!-- <div class=\"img\" ><img src=\"assets/images/bk1.jpg\"></div>  -->\n\n      </div>\n\n</header>\n<div class=\"card-left\">\n<!-- <div class=\"headerImg\">\n    <h3>CATEGORY</h3>\n\n<div class=\"img\"></div>\n</div> -->\n<div class=\"extraInfo\">\n    <p>9 A.M. - 5 P.M.</p>\n    <p>{{website}}</p>\n\n    <div class=\"social\">\n        <div class=\"social_links\">\n            <span><img src=\"assets/images/linkdin.png\"></span>\n            <span><img src=\"assets/images/linkdin.png\"></span>\n            <span><img src=\"assets/images/linkdin.png\"></span>\n        </div>\n\n        <div class=\"social_bookmark\">\n            <span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"  viewBox=\"0 0 24 24\"><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg></span>\n        </div>\n      </div>\n  </div>\n<div class=\"tabs\">\n<div class=\"tab\" (click)=\"showTwo()\" [ngClass]=\"{'tabClicked': two}\"><h1>INFO</h1></div>\n<div class=\"tab\" (click)=\"showThree()\" [ngClass]=\"{'tabClicked': three}\"><h1>PRODUCTS</h1></div>\n<div class=\"tab\" (click)=\"showFour()\" [ngClass]=\"{'tabClicked': four}\"><h1>CONTACT</h1></div>\n</div>\n</div>\n\n<div class=\"body\" *ngIf=\"one\">\n  <div class=\"infoSection1\">\n      <div class=\"shortBio\">\n          <div class=\"bio\">\n       <h2>SHORT BIO</h2>\n       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n          </div>\n      </div>\n\n         <div class=\"feed\">\n             <div class=\"authorInfo\">\n             <div class=\"details\">\n               <div class=\"logo\">\n                 <img src=\"https://picsum.photos/500/300/?random\">\n               </div>\n               <div class=\"info\">\n              <h1>Company Name</h1>\n              <p style=\"line-height: 0px;margin-bottom: 12px;margin-top: 5px;\">Industry</p>\n              <p style=\"line-height: 3px;margin-bottom: 10px;\">Location</p>\n             </div>\n             </div>\n             <div class=\"followBtn\">\n              <button>Following <span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19%\" height=\"53%\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z\"/></svg></span></button>\n              <p>34,342 followers</p>\n             </div>\n             </div>\n             <div class=\"feedInfo\">\n               <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content </p>\n             </div>\n             <div class=\"feed-img\">\n             <img src=\"https://picsum.photos/500/300/?random\">\n             </div>\n             <div class=\"feed-share\">\n              <p  style=\"padding: 4px; margin: 0; display: flex;width: 100%;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"  viewBox=\"0 0 24 24\"><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg><span><b style=\"margin-left: 5px;\">24,244</b></span></p>\n              <p style=\" padding: 0; margin:4px 0;     margin-right: 10px;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M16 15v4l8-8.035-8-7.965v4s-13.277 2.144-16 14c5.796-6.206 16-6 16-6z\"/></svg></p>\n              </div>\n             <div class=\"tagged\">\n                <mat-expansion-panel>\n                    <mat-expansion-panel-header style=\"background-color:#6E7892;\">\n                      <mat-panel-title>\n                       <h4 style=\"  color: #fff\">Tagged Products</h4>\n                      </mat-panel-title>\n                    </mat-expansion-panel-header>\n\n                    <p>This is the primary content of the panel.</p>\n\n                  </mat-expansion-panel>\n             </div>\n             </div>\n       <div class=\"otherInfocard\">\n        <div class=\"infoCard\">\n        <div class=\"hq info\">\n          <label>HEADquarters</label>\n          <h3>{{country}} , {{city}}</h3>\n        </div>\n        <div class=\"estd info\">\n            <label>year estd.</label>\n            <h3>{{yearEstd}}</h3>\n          </div>\n          <div class=\"estd info\">\n              <label>size</label>\n              <h3>{{companySize}}</h3>\n            </div>\n            <div class=\"add info\">\n                <label>office address</label>\n                <h3>{{address}}</h3>\n              </div>\n              <div class=\"revenu info\" style=\"border-bottom:none\">\n                  <label>Total Revenue</label>\n                  <h3>50-100</h3>\n                </div>\n        </div>\n       </div>\n  </div>\n</div>\n<div class=\"body\" *ngIf=\"two\">\n  <div class=\"infoSection2\">\n    <div class=\"infoImg\">\n      <img src=\"assets/images/bk.png\">\n    </div>\n    <div class=\"infoContent\">\n      <h3>SHORT BIO</h3>\n      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n    </div>\n<div class=\"infoSectonCard\">\n  <img src=\"assets/images/bk.png\">\n<div class=\"content\">\n<div class=\"Sectioncontent\">\n<h2>SECTION TITLE</h2>\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem </p>\n</div>\n</div>\n</div>\n<div class=\"certificate\">\n  <h2>CERTIFICATES</h2>\n  <div ng2-carouselamos class=\"slider-wrapper\"\n  [items]=\"items\"\n  [$prev]=\"prev\"\n  [$next]=\"next\"\n  [$item]=\"item\"\n  ></div>\n<ng-template #prev>\n  <img src= \"../../../assets/images/left-arrow.png\">\n</ng-template>\n<ng-template #next>\n    <img src= \"../../../assets/images/right-arrow.png\">\n  </ng-template>\n  <ng-template #item let-item>\n     <div class=\"items\">\n        <img src=\"{{ item.name }}\">\n     </div>\n    </ng-template>\n  </div>\n  <div class=\"companyImg\">\n      <h2>COMPANY IMAGES</h2>\n      <div ng2-carouselamos class=\"slider-wrapper\"\n      [items]=\"items\"\n      [$prev]=\"prev\"\n      [$next]=\"next\"\n      [$item]=\"item\"\n      ></div>\n    <ng-template #prev>\n      <img src= \"../../../assets/images/left-arrow.png\">\n    </ng-template>\n    <ng-template #next>\n        <img src= \"../../../assets/images/right-arrow.png\">\n      </ng-template>\n      <ng-template #item let-item>\n         <div class=\"items\">\n            <img src=\"{{ item.name }}\">\n         </div>\n        </ng-template>\n      </div>\n  </div>\n</div>\n<div class=\"body\" *ngIf=\"three\">\n  <div class=\"infoSection3\">\n    <div class=\"productAddbutton\"><button routerLink= \"/productForm\">ADD New Product</button></div>\n      <!-- <div *ngFor= \"let product of products; let i = index;\" class=\"conatiner\">\n          <h1>GROUP {{i + 1}}</h1>\n          <div class=\"productConatiner\" [ngClass]= \"{'expand': expand[i]}\" > -->\n              <div class=\"Card\" *ngFor=\"let product of products; let i = index\">\n                  <div class=\"productCard\">\n                <div class=\"productImage\">\n                  <!-- <div class=\"bookmark\">\n\n                  </div> -->\n                  <img src=\"https://picsum.photos/200/300/?random\">\n                </div>\n                <div class=\"productContent\" >\n                <div class=\"content\">\n                <div class=\"productCategory\">\n                <h6>{{product.catogory}}</h6>\n                </div>\n                <div class=\"productName\">\n                  <h2>{{product.productName}}</h2>\n                  <h5>{{product.company}}</h5>\n                  <small style=\"float:right\"><span style=\"border-right:1px solid #cccccc; padding-right: 4px\">{{product.category}}</span><span style= \"padding-left: 8px\">Country</span></small>\n                </div>\n                <div class=\"discription\" style=\"margin-top:30px;\">\n                <p>{{product.shortDescription}}</p>\n                </div>\n                <div class=\"tags\">\n\n                </div>\n                <div class=\"other-info\">\n                  <div class=\"price\">\n                  <h4>{{product.price}}  {{product.minPrice}}</h4>\n                </div>\n                <div class=\"hits\">\n                  <p>24,354 hits</p>\n                </div>\n                </div>\n                </div>\n                </div>\n                  </div>\n                </div>\n\n              <!-- <div class=\"mob-cards\" *ngIf=\"three\">\n                  <div class=\"card-wrapper\" *ngFor=\"let card of group.card; let i = index\" >\n                      <div class=\"header\">\n                          <div class=\"header-content\" style=\"width:95%; display: flex\">\n                            <h5 style=\"width:100%;\">Product</h5>\n                            <span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" style=\"margin-left: 6px;\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg></span>\n                        </div>\n                        <div class=\"header-content\" style=\"width:95%; display: flex\" *ngIf=\"false\">\n                            <h5 style=\"width:50%;\">Service</h5>\n                            <h5  style=\"float:right;justify-content: flex-end; display: flex; width: 50%; text-align: right\" >Bookmark</h5>\n                        </div>\n                      </div>\n\n                    <div class=\"img-banner\"><img src=\"https://images.unsplash.com/photo-1543872981-578a0310c83a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80\"></div>\n\n                    <div class=\"main-content\">\n                      <div class=\"content-details\">\n                        <p>Something is here Some of the contnet</p>\n                      </div>\n                    </div>\n                    <div class=\"footer\">\n                      <div class=\"footer-content\" style=\"width:95%; border-top:1px solid #ccc; display: flex\">\n                        <h6 style=\"width:35%;\">Price</h6>\n                        <h6  style=\"float:right;justify-content: flex-end; display: flex; width: 65%; text-align: right\" >23,445 hits</h6>\n                    </div>\n                  </div>\n\n              </div>\n\n              <div class=\"card-wrapper\">\n                  <div class=\"header\">\n                      <div class=\"header-content\" style=\"width:95%; display: flex\">\n                        <h5 style=\"width:100%;\">Product</h5>\n                        <span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" style=\"margin-left: 6px;\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg></span>\n                    </div>\n                    <div class=\"header-content\" style=\"width:95%; display: flex\" *ngIf=\"false\">\n                        <h5 style=\"width:50%;\">Service</h5>\n                        <h5  style=\"float:right;justify-content: flex-end; display: flex; width: 50%; text-align: right\" >Bookmark</h5>\n                    </div>\n                  </div>\n\n                <div class=\"img-banner\"><img src=\"https://images.unsplash.com/photo-1543872981-578a0310c83a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80\"></div>\n\n                <div class=\"main-content\">\n                  <div class=\"content-details\">\n                    <p>Something is here Some of the contnet</p>\n                  </div>\n                </div>\n                <div class=\"footer\">\n                  <div class=\"footer-content\" style=\"width:95%; border-top:1px solid #ccc; display: flex\">\n                    <h6 style=\"width:35%;\">Price</h6>\n                    <h6  style=\"float:right;justify-content: flex-end; display: flex; width: 65%; text-align: right\" >23,445 hits</h6>\n                </div>\n              </div>\n\n              </div>\n              </div> -->\n\n        </div>\n        <!-- <button (click) = \"onExpand(i)\" >Expand</button> -->\n  </div>\n<!-- </div>\n</div> -->\n<div class=\"body\" *ngIf=\"four\"></div>\n\n\n\n\n</section>\n"

/***/ }),

/***/ "./src/app/Bpage/b-page/b-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/Bpage/b-page/b-page.component.ts ***!
  \**************************************************/
/*! exports provided: BPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BPageComponent", function() { return BPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_company_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Service/company-service.service */ "./src/app/Service/company-service.service.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _Service_product_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Service/product-service.service */ "./src/app/Service/product-service.service.ts");
/* harmony import */ var _Service_feed_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Service/feed-service.service */ "./src/app/Service/feed-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var BPageComponent = /** @class */ (function () {
    function BPageComponent(storage, companyService, productService, feedService, route) {
        var _this = this;
        this.storage = storage;
        this.companyService = companyService;
        this.productService = productService;
        this.feedService = feedService;
        this.route = route;
        this.one = true;
        this.two = false;
        this.three = false;
        this.four = false;
        this.expand = [];
        this.comapnyId = this.route.snapshot.paramMap.get('id');
        console.log(this.comapnyId);
        this.companyService.token = this.storage.get('token');
        this.productService.token = this.storage.get('token');
        this.mycompanyId = this.storage.get('companyId');
        this.token = this.storage.get('token');
        this.companyService.GetoneCompany(this.comapnyId).subscribe(function (res) {
            console.log(JSON.parse(res['_body'])._id);
            _this.CompanyName = JSON.parse(res['_body']).companyName;
            _this.category = JSON.parse(res['_body']).category;
            _this.city = JSON.parse(res['_body']).city;
            _this.companyEmail = JSON.parse(res['_body']).companyEmail;
            _this.companySize = JSON.parse(res['_body']).companySize;
            _this.companyType = JSON.parse(res['_body']).companyType;
            _this.country = JSON.parse(res['_body']).country;
            _this.image = JSON.parse(res['_body']).image;
            _this.industry = JSON.parse(res['_body']).industry;
            _this.mobile = JSON.parse(res['_body']).mobile;
            _this.address = JSON.parse(res['_body']).address;
            _this.yearEstd = JSON.parse(res['_body']).yearEstd;
            _this.website = JSON.parse(res['_body']).website;
            if (_this.comapnyId === _this.mycompanyId) {
                console.log('MY OWN COMPANY');
            }
            else {
                console.log('diffrent Company');
            }
        });
        this.items = [
            { name: 'https://picsum.photos/200/300' },
            { name: 'https://picsum.photos/g/200/300' },
            { name: 'https://picsum.photos/200/300?image=0' },
            { name: 'https://picsum.photos/200/300/?blur' },
            { name: 'https://picsum.photos/200/300/?random' },
            { name: 'https://picsum.photos/200/300' },
            { name: 'https://picsum.photos/g/200/300' },
            { name: 'https://picsum.photos/200/300?image=0' },
            { name: 'https://picsum.photos/200/300/?blur' },
            { name: 'https://picsum.photos/200/300/?random' },
            { name: 'https://picsum.photos/200/300' },
            { name: 'https://picsum.photos/g/200/300' },
            { name: 'https://picsum.photos/200/300?image=0' },
            { name: 'https://picsum.photos/200/300/?blur' },
            { name: 'https://picsum.photos/200/300/?random' },
            { name: 'https://picsum.photos/200/300' },
            { name: 'https://picsum.photos/g/200/300' },
            { name: 'https://picsum.photos/200/300?image=0' },
            { name: 'https://picsum.photos/200/300/?blur' },
            { name: 'https://picsum.photos/200/300/?random' }
        ];
        this.productService.getProduct(this.comapnyId).subscribe(function (res) {
            console.log(JSON.parse(res['_body']));
            _this.products = JSON.parse(res['_body']);
        });
    }
    BPageComponent.prototype.ngOnInit = function () {
        // for (let i = 0; i < this.groups.length; i++) {
        //   this.expand[i] = false;
        //   console.log(this.expand[i]);
        // }
    };
    BPageComponent.prototype.showTwo = function () {
        this.one = false;
        this.two = true;
        this.three = false;
        this.four = false;
    };
    BPageComponent.prototype.showThree = function () {
        this.one = false;
        this.two = false;
        this.three = true;
        this.four = false;
    };
    BPageComponent.prototype.showFour = function () {
        this.one = false;
        this.two = false;
        this.three = false;
        this.four = true;
    };
    BPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-b-page',
            template: __webpack_require__(/*! ./b-page.component.html */ "./src/app/Bpage/b-page/b-page.component.html"),
            styles: [__webpack_require__(/*! ./b-page.component.css */ "./src/app/Bpage/b-page/b-page.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["WebStorageService"], _Service_company_service_service__WEBPACK_IMPORTED_MODULE_2__["CompanyServiceService"],
            _Service_product_service_service__WEBPACK_IMPORTED_MODULE_4__["ProductServiceService"], _Service_feed_service_service__WEBPACK_IMPORTED_MODULE_5__["FeedService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BPageComponent);
    return BPageComponent;
}());



/***/ }),

/***/ "./src/app/Company/compan-edit/compan-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/Company/compan-edit/compan-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBhbnkvY29tcGFuLWVkaXQvY29tcGFuLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Company/compan-edit/compan-edit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/Company/compan-edit/compan-edit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  compan-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/Company/compan-edit/compan-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Company/compan-edit/compan-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: CompanEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanEditComponent", function() { return CompanEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanEditComponent = /** @class */ (function () {
    function CompanEditComponent() {
    }
    CompanEditComponent.prototype.ngOnInit = function () {
    };
    CompanEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-compan-edit',
            template: __webpack_require__(/*! ./compan-edit.component.html */ "./src/app/Company/compan-edit/compan-edit.component.html"),
            styles: [__webpack_require__(/*! ./compan-edit.component.css */ "./src/app/Company/compan-edit/compan-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanEditComponent);
    return CompanEditComponent;
}());



/***/ }),

/***/ "./src/app/Company/compan-profile/compan-profile.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/Company/compan-profile/compan-profile.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBhbnkvY29tcGFuLXByb2ZpbGUvY29tcGFuLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Company/compan-profile/compan-profile.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/Company/compan-profile/compan-profile.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  compan-profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/Company/compan-profile/compan-profile.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Company/compan-profile/compan-profile.component.ts ***!
  \********************************************************************/
/*! exports provided: CompanProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanProfileComponent", function() { return CompanProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanProfileComponent = /** @class */ (function () {
    function CompanProfileComponent() {
    }
    CompanProfileComponent.prototype.ngOnInit = function () {
    };
    CompanProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-compan-profile',
            template: __webpack_require__(/*! ./compan-profile.component.html */ "./src/app/Company/compan-profile/compan-profile.component.html"),
            styles: [__webpack_require__(/*! ./compan-profile.component.css */ "./src/app/Company/compan-profile/compan-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanProfileComponent);
    return CompanProfileComponent;
}());



/***/ }),

/***/ "./src/app/Company/company-form/company-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Company/company-form/company-form.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header{\n  display: none;\n}\n.companyForm{\n  width: 60%;\n display: flex;\n justify-content: center;\n top:50%;\n left: 50%;\n -webkit-transform: translate(13% ,25%);\n         transform: translate(13% ,25%);\n box-shadow: 0 0px 28px rgba(0,0,0,0.30), 0 15px 12px rgba(157, 157, 157, 0.22);\n border: 1px solid  rgba(157, 17, 17, 0.22);\n}\n.infoGraphic{\n  width: 60%;\n  border-right: 1px solid  rgba(157, 157, 157, 0.22);\n}\n.infoGraphic img{\n  width: 100%;\n  height: 100%;\n}\n.form{\n  width: 40%;\n}\n.form ul{\n  list-style-type: none;\n  padding: 0;\n  width: 80%;\n  margin: 0 auto;\n  top:50%;\n  left: 50%;\n  -webkit-transform: translate(0% ,0%);\n          transform: translate(0% ,0%);\n  margin-top: 0px;\n}\nli{\n  width: 100%;\n}\ninput, select{\n  width: 100%;\n  height: 40px;\n  border: none;\n  color: black;\n  outline: none;\n  font-size: 15px;\n  border: 1px solid #333333;\n  margin-top: 28px;\n}\ninput[type=\"file\"]{\n  width: 94%;\n  height: 40px;\n  border: none;\n  color: black;\n  outline: none;\n  font-size: 15px;\n  border: 1px solid #333333;\n  margin-top: 28px;\n  padding: 10px;\n}\ninput::-webkit-input-placeholder {\n  color: black;\n  padding: 0 10px;\n}\ninput::-ms-input-placeholder {\n  color: black;\n  padding: 0 10px;\n}\ninput::placeholder {\n  color: black;\n  padding: 0 10px;\n}\nselect {\n  padding: 0 10px;\n}\n.bnt_1\n{\n  width: 25%;\n  margin-top: 40px;\n  border: none;\n  background-color: lawngreen;\n  color: floralwhite;\n  font-size: 20px;\n  font-weight: 600;\n  height: 40px;\n\n}\nli button{\n  width: 41%;\n  border: none;\n  background-color: lawngreen;\n  color: floralwhite;\n  font-size: 20px;\n  font-weight: 600;\n}\ntextarea\n{\n  width: 100%;\n    height: 77px;\n    margin-top: 44px;\n}\n.imagePreview{\n  width: 100px;\n}\n.imagePreview img{\n  width: 100%;\n}\n@media screen and (max-width: 700px){\n  .companyForm{\n    width: 100%;\n    -webkit-transform: none;\n            transform: none;\n    margin-top: -50px;\n    z-index: 444;\n  }\n  .infoGraphic{\n    display: none;\n    width: 0;\n  }\n  .form {\n    width: 90%;\n    background-color: #fff;\n    position: absolute;\n    /* -webkit-box-shadow: 7px 4px 44px -7px rgba(0,0,0,0.75);\n    -moz-box-shadow: 7px 4px 44px -7px rgba(0,0,0,0.75); */\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n  }\n  .form ul{\n    width: 90%;\n  }\n  .heading{\n    display: none;\n    width: 0;\n  }\n  header{\n    display: block;\n    width: 100%;\n    height: 10pc;\n    background-color: black;\n  }\n  header h1{\n    margin-top: 0;\n    padding-top: 30px;\n    font-size: 25px;\n    margin-bottom: 10px;\n    text-align: center;\n    color: #fff;\n  }\n  header p{\n   text-align: center;\n   margin: 0;\n   color: #fff;\n   font-size: 12px;\n  }\n  input, select{\n    border:none;\n    border-bottom:1px solid #ccc;\n  }\n  li{\n    margin-top: 40px;\n  }\n  li button{\n    float: right;\n    width: 44%;\n\n    background-color: #32CD32;\n    margin-bottom: 10px;\n  }\n  input::-webkit-input-placeholder{\n    padding: 0 0 30px 0;\n\n  }\n  input::-ms-input-placeholder{\n    padding: 0 0 30px 0;\n\n  }\n  input::placeholder{\n    padding: 0 0 30px 0;\n\n  }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcGFueS9jb21wYW55LWZvcm0vY29tcGFueS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0NBQ2Y7QUFDRDtFQUNFLFdBQVc7Q0FDWixjQUFjO0NBQ2Qsd0JBQXdCO0NBQ3hCLFFBQVE7Q0FDUixVQUFVO0NBQ1YsdUNBQStCO1NBQS9CLCtCQUErQjtDQUMvQiwrRUFBK0U7Q0FDL0UsMkNBQTJDO0NBQzNDO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsbURBQW1EO0NBQ3BEO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtDQUNkO0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7QUFDRDtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7RUFDZixRQUFRO0VBQ1IsVUFBVTtFQUNWLHFDQUE2QjtVQUE3Qiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7QUFDRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsY0FBYztDQUNmO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0NBQ2pCO0FBSEQ7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0NBQ2pCO0FBSEQ7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7QUFDRDs7RUFFRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTs7Q0FFZDtBQUNEO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7QUFDRDs7RUFFRSxZQUFZO0lBQ1YsYUFBYTtJQUNiLGlCQUFpQjtDQUNwQjtBQUNEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7QUFDRDtFQUNFO0lBQ0UsWUFBWTtJQUNaLHdCQUFnQjtZQUFoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7R0FDZDtFQUNEO0lBQ0UsY0FBYztJQUNkLFNBQVM7R0FDVjtFQUNEO0lBQ0UsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkI7MkRBQ3VEO0lBQ3ZELG1FQUFtRTtJQUNuRSxnREFBZ0Q7R0FDakQ7RUFDRDtJQUNFLFdBQVc7R0FDWjtFQUNEO0lBQ0UsY0FBYztJQUNkLFNBQVM7R0FDVjtFQUNEO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2Isd0JBQXdCO0dBQ3pCO0VBQ0Q7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFlBQVk7R0FDYjtFQUNEO0dBQ0MsbUJBQW1CO0dBQ25CLFVBQVU7R0FDVixZQUFZO0dBQ1osZ0JBQWdCO0dBQ2hCO0VBQ0Q7SUFDRSxZQUFZO0lBQ1osNkJBQTZCO0dBQzlCO0VBQ0Q7SUFDRSxpQkFBaUI7R0FDbEI7RUFDRDtJQUNFLGFBQWE7SUFDYixXQUFXOztJQUVYLDBCQUEwQjtJQUMxQixvQkFBb0I7R0FDckI7RUFDRDtJQUNFLG9CQUFvQjs7R0FFckI7RUFIRDtJQUNFLG9CQUFvQjs7R0FFckI7RUFIRDtJQUNFLG9CQUFvQjs7R0FFckI7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBhbnkvY29tcGFueS1mb3JtL2NvbXBhbnktZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNvbXBhbnlGb3Jte1xuICB3aWR0aDogNjAlO1xuIGRpc3BsYXk6IGZsZXg7XG4ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gdG9wOjUwJTtcbiBsZWZ0OiA1MCU7XG4gdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTMlICwyNSUpO1xuIGJveC1zaGFkb3c6IDAgMHB4IDI4cHggcmdiYSgwLDAsMCwwLjMwKSwgMCAxNXB4IDEycHggcmdiYSgxNTcsIDE1NywgMTU3LCAwLjIyKTtcbiBib3JkZXI6IDFweCBzb2xpZCAgcmdiYSgxNTcsIDE3LCAxNywgMC4yMik7XG59XG4uaW5mb0dyYXBoaWN7XG4gIHdpZHRoOiA2MCU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICByZ2JhKDE1NywgMTU3LCAxNTcsIDAuMjIpO1xufVxuLmluZm9HcmFwaGljIGltZ3tcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5mb3Jte1xuICB3aWR0aDogNDAlO1xufVxuLmZvcm0gdWx7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRvcDo1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUgLDAlKTtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxubGl7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW5wdXQsIHNlbGVjdHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMzMzMztcbiAgbWFyZ2luLXRvcDogMjhweDtcbn1cbmlucHV0W3R5cGU9XCJmaWxlXCJde1xuICB3aWR0aDogOTQlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzMzMzM7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbnNlbGVjdCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ibnRfMVxue1xuICB3aWR0aDogMjUlO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGxhd25ncmVlbjtcbiAgY29sb3I6IGZsb3JhbHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGhlaWdodDogNDBweDtcblxufVxubGkgYnV0dG9ue1xuICB3aWR0aDogNDElO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGxhd25ncmVlbjtcbiAgY29sb3I6IGZsb3JhbHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG50ZXh0YXJlYVxue1xuICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDc3cHg7XG4gICAgbWFyZ2luLXRvcDogNDRweDtcbn1cbi5pbWFnZVByZXZpZXd7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5pbWFnZVByZXZpZXcgaW1ne1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcbiAgLmNvbXBhbnlGb3Jte1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICB6LWluZGV4OiA0NDQ7XG4gIH1cbiAgLmluZm9HcmFwaGlje1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgLmZvcm0ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLyogLXdlYmtpdC1ib3gtc2hhZG93OiA3cHggNHB4IDQ0cHggLTdweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogN3B4IDRweCA0NHB4IC03cHggcmdiYSgwLDAsMCwwLjc1KTsgKi9cbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4gIH1cbiAgLmZvcm0gdWx7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAuaGVhZGluZ3tcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIGhlYWRlcntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwcGM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIH1cbiAgaGVhZGVyIGgxe1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIGhlYWRlciBwe1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgbWFyZ2luOiAwO1xuICAgY29sb3I6ICNmZmY7XG4gICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgaW5wdXQsIHNlbGVjdHtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjO1xuICB9XG4gIGxpe1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gIH1cbiAgbGkgYnV0dG9ue1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogNDQlO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyQ0QzMjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIGlucHV0OjpwbGFjZWhvbGRlcntcbiAgICBwYWRkaW5nOiAwIDAgMzBweCAwO1xuXG4gIH1cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/Company/company-form/company-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Company/company-form/company-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header> -->\n<header>\n  <h1>Create Your B Face</h1>\n  <p>Register and step into the business world</p>\n</header>\n<form [formGroup] = \"companyForm\" (ngSubmit)= \"onSubmit()\">\n  <!--------------------------------------------------//First Level Form//-------------------------------------------------------->\n<div *ngIf=\"one\">\n  <div class=\"companyForm\">\n    <div class=\"infoGraphic\">\n    <img src= \"https://picsum.photos/1000/800/?random\">\n    </div>\n    <div class=\"form\">\n\n          <ul>\n            <li class=\"heading\"><h1 style=\"margin:0;\">Create Your B Face</h1>\n              <small style=\"font-size:16px; letter-spacing: 2px;\">Register and step into the business world</small>\n            </li>\n              <li><input type=\"text\" placeholder=\"Company Name\" formControlName = \"companyName\" name=\"companyName\" ></li>\n              <span *ngIf=\"!companyForm.get('companyName').valid && companyForm.get('companyName').touched\"><p>Please Enter Company</p></span>\n\n              <li>\n                <div class=\"location\"  >\n                    <input list=\"country\" formControlName = \"country\" placeholder=\"country\" style=\"width:45%;\">\n                    <datalist id=\"country\">\n                    <option value=\"country\">\n                    <option value=\"country\">\n                    <option value=\"country\">\n                    <option value=\"country\">\n                    </datalist>\n                      <input  style=\"width:45%; float: right;\" type=\"text\" placeholder=\"City(optional)\" formControlName = \"city\" name=\"city\">\n                  </div>\n                  <span *ngIf=\"!companyForm.get('country').valid && companyForm.get('country').touched\"><p>Please Select Country</p></span>\n\n            </li>\n            <li><input type=\"email\" placeholder=\"Company Email Address\" formControlName = \"companyEmail\" name=\"companyEmail\"></li>\n            <span *ngIf=\"!companyForm.get('companyEmail').valid && companyForm.get('companyEmail').touched\"><p>Please Enter Valid Email</p></span>\n            <li>\n              <input list=\"industry\" formControlName = \"industry\" placeholder=\"Industry\">\n              <datalist id=\"industry\">\n              <option value=\"industry\">\n              <option value=\"industry\">\n              <option value=\"industry\">\n              <option value=\"industry\">\n              </datalist>\n            </li>\n            <span *ngIf=\"!companyForm.get('industry').valid && companyForm.get('industry').touched\"><p>Please Select Industry</p></span>\n            <li>\n                <input list=\"category\" formControlName = \"category\" placeholder=\"Category\">\n                <datalist id=\"category\">\n                <option value=\"category\">\n                <option value=\"category\">\n                <option value=\"category\">\n                <option value=\"category\">\n                </datalist>\n            </li>\n            <span *ngIf=\"!companyForm.get('category').valid && companyForm.get('category').touched\"><p>Please Select Requied Category</p></span>\n            <li><button type=\"button\" (click)=\"Showtwo()\">Next</button></li>\n            </ul>\n\n\n    </div>\n    </div>\n</div>\n\n<!---------------------------------------------//Second Level Form//--------------------------------------->\n\n<div *ngIf=\"two\">\n  <div class=\"companyForm\">\n    <div class=\"infoGraphic\">\n    <img src= \"https://picsum.photos/1000/800/?random\">\n    </div>\n    <div class=\"form\">\n      <ul>\n        <li class=\"heading\"><h1 style=\"margin:0;\">Create Your B Face</h1>\n          <small style=\"font-size:16px; letter-spacing: 2px;\">Register and step into the business world</small>\n        </li>\n        <li>\n            <div>\n                <input type=\"text\" placeholder=\"website\" formControlName = \"website\" name=\"website\"  class=\"website\">\n                                <input list=\"company-type\" formControlName = \"companyType\" placeholder=\"Company Type\" class=\"company-type\">\n                                <datalist id=\"company-type\">\n                <option value=\"company-type\">\n                <option value=\"company-type\">\n                <option value=\"company-type\">\n                <option value=\"company-type\">\n                </datalist>\n                <input type=\"file\" #filePicker (change)=\"onImagePick($event)\" class=\"picker\" style=\"display: hiddne;\">\n                <button  type=\"button\" (click)=\"filePicker.click()\" class=\"btn\">Pick Company Logo</button>\n                <div class=\"imagePreview\" *ngIf=\"imagePreview!== '' && imagePreview\">\n                    <img [src] = \"imagePreview\" [alt]=\"this.companyForm.value.image.name\">\n                  </div>\n              </div>\n        </li>\n        <li><textarea placeholder=\"Short Bio (200 characters)\"></textarea></li>\n        <li>\n         <div>\n            <input list=\"company-size\" formControlName = \"companySize\" placeholder=\"Company Size\"  class=\"companySize\">\n          <datalist id=\"company-size\">\n          <option value=\"company-size\">\n          <option value=\"company-size\">\n          <option value=\"company-size\">\n          <option value=\"company-size\">\n          </datalist>\n\n          <input list=\"year\" formControlName = \"yearEstd\" placeholder=\" Year Established\"  class=\"yearEstd\">\n\n          <datalist id=\"year\">\n          <option value=\"yearEstd\">\n          <option value=\"yearEstd\">\n          <option value=\"yearEstd\">\n          <option value=\"yearEstd\">\n          </datalist>\n         </div>\n        </li>\n        <li><button type=\"button\" (click)=\"ShowPrev1()\" class=\"bnt_1\">Back</button></li>\n        <li><button type=\"button\" (click)=\"Showthree()\" class=\"bnt_1\">Next</button></li>\n        </ul>\n       \n    </div>\n    </div>\n</div>\n<!-------------------------//Third Level Form//---------------------------------------------------->\n<div *ngIf=\"three\">\n  <div class=\"companyForm\">\n    <div class=\"infoGraphic\">\n    <img src= \"https://picsum.photos/1000/800/?random\">\n    </div>\n    <div class=\"form\">\n\n      <ul>\n        <li class=\"heading\"><h1 style=\"margin:0;\">Create Your B Face</h1>\n          <small style=\"font-size:16px; letter-spacing: 2px;\">Register and step into the business world</small>\n        </li>\n          <li><textarea placeholder=\"Complete Office Address\" formControlName = \"address\"></textarea></li>\n        <li>\n            <div class=\"location\"  >\n                <input type=\"text\" formControlName = \"city\" placeholder=\"City\"  class=\"city\">\n\n                  <input   type=\"text\" placeholder=\"Zip Code\" formControlName = \"zipCode\" class=\"zip\">\n\n              </div>\n        </li>\n        <li><input type=\"number\" placeholder=\"Landline Number\" formControlName = \"landLine\" name=\"companyEmail\"></li>\n        <!-- <li>\n          <input list=\"industry\" formControlName = \"industry\" placeholder=\"Industry\">\n          <datalist id=\"industry\">\n          <option value=\"industry\">\n          <option value=\"industry\">\n          <option value=\"industry\">\n          <option value=\"industry\">\n          </datalist>\n        </li> -->\n        <li>\n            <input type=\"number\" formControlName = \"mobile\" placeholder=\"Mobile Number\">\n            <!-- <datalist id=\"category\">\n            <option value=\"category\">\n            <option value=\"category\">\n            <option value=\"category\">\n            <option value=\"category\">\n            </datalist> -->\n        </li>\n        <span *ngIf=\"!companyForm.get('mobile').valid && companyForm.get('mobile').touched\"><p>Please Enter Mobile Number</p></span>\n        <li><button type=\"button\" (click)=\"ShowPrev2()\" class=\"bnt_1\">Back</button></li>\n        <li><button type=\"submit\">Finish</button></li>\n        </ul>\n       \n    </div>\n    </div>\n</div>\n</form>\n"

/***/ }),

/***/ "./src/app/Company/company-form/company-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Company/company-form/company-form.component.ts ***!
  \****************************************************************/
/*! exports provided: CompanyFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyFormComponent", function() { return CompanyFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_company_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Service/company-service.service */ "./src/app/Service/company-service.service.ts");
/* harmony import */ var src_app_Auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Auth/auth-service.service */ "./src/app/Auth/auth-service.service.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var CompanyFormComponent = /** @class */ (function () {
    function CompanyFormComponent(storage, router, companyService, authService, notification) {
        this.storage = storage;
        this.router = router;
        this.companyService = companyService;
        this.authService = authService;
        this.notification = notification;
        this.one = true;
        this.two = false;
        this.three = false;
        this.companyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            companyEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            industry: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            website: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            companyType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            companySize: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            yearEstd: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            // city: new FormControl(''),
            zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            landLine: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        if (this.Id != null) {
            this.router.navigate(['/companyPage']);
        }
    }
    CompanyFormComponent.prototype.ngOnInit = function () {
        this.companyService.token = this.storage.get('token');
        this.token = this.storage.get('token');
    };
    CompanyFormComponent.prototype.Showtwo = function () {
        this.one = false;
        this.two = true;
        this.three = false;
    };
    CompanyFormComponent.prototype.Showthree = function () {
        this.one = false;
        this.two = false;
        this.three = true;
    };
    CompanyFormComponent.prototype.ShowPrev1 = function () {
        this.one = true;
        this.two = false;
        this.three = false;
    };
    CompanyFormComponent.prototype.ShowPrev2 = function () {
        this.one = false;
        this.two = true;
        this.three = false;
    };
    CompanyFormComponent.prototype.onImagePick = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.companyForm.patchValue({ image: file });
        this.companyForm.get('image').updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    CompanyFormComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.companyForm.valid) {
            console.log(this.companyForm.value);
            var companyData = this.companyForm.value;
            console.log(this.token);
            this.companyService.addCompany(companyData).subscribe(function (res) {
                _this.storage.set('companyId', JSON.parse(res['_body'])._id);
                console.log(_this.Id);
                _this.companyService.Id = _this.storage.get('comapnyId');
            });
            this.Id = this.storage.get('companyId');
            console.log(this.Id);
            this.router.navigate(['/companyPage/' + this.Id]);
            this.notification.success('Welcome' + this.companyForm.value.companyName);
        }
        else {
            this.notification.error('Enter Valid Deatils');
        }
    };
    CompanyFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-form',
            template: __webpack_require__(/*! ./company-form.component.html */ "./src/app/Company/company-form/company-form.component.html"),
            styles: [__webpack_require__(/*! ./company-form.component.css */ "./src/app/Company/company-form/company-form.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["WebStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _Service_company_service_service__WEBPACK_IMPORTED_MODULE_3__["CompanyServiceService"], src_app_Auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], CompanyFormComponent);
    return CompanyFormComponent;
}());



/***/ }),

/***/ "./src/app/Company/company-form2/company-form2.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/Company/company-form2/company-form2.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".companyForm{\n  width: 90%;\n  height: 100vh;\n display: flex;\n justify-content: center;\n margin: 0 auto;\n /* top:50%;\n left: 50%;\n transform: translate(13% ,25%); */\n /* box-shadow: 0 0px 28px rgba(0,0,0,0.30), 0 15px 12px rgba(157, 157, 157, 0.22);\n border: 1px solid  rgba(157, 17, 17, 0.22); */\n}\n.infoGraphic{\n  width: 40%;\n  height: 80%;\n  border-right: 1px solid  rgba(157, 157, 157, 0.22);\n  margin-top: 7%;\n}\n.infoGraphic img{\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n}\n.form{\n  width: 60%;\n  height: 100%;\n}\n.form ul{\n  list-style-type: none;\n  padding: 0;\n  width: 80%;\n  margin: 0 auto;\n  top:50%;\n  left: 50%;\n  -webkit-transform: translate(0% ,20%);\n          transform: translate(0% ,20%);\n  margin-top: 0px;\n}\nli{\n  margin-bottom: 40px;\n  width: 100%;\n}\ninput, select{\n  width: 100%;\n  height: 40px;\n  border: none;\n  color: black;\n  outline: none;\n  font-size: 15px;\n  border: 1px solid #333333;\n}\ninput::-webkit-input-placeholder {\n  color: black;\n  padding: 0 10px;\n}\ninput::-ms-input-placeholder {\n  color: black;\n  padding: 0 10px;\n}\ninput::placeholder {\n  color: black;\n  padding: 0 10px;\n}\nselect {\n  padding: 0 10px;\n}\nul li textarea{\n  width: 100%;\n  height: 150px;\n  border: 1px solid #333333;\n}\nul li textarea::-webkit-input-placeholder{\n  color: black;\n  padding: 0 10px;\n  font-size: 16px;\n}\nul li textarea::-ms-input-placeholder{\n  color: black;\n  padding: 0 10px;\n  font-size: 16px;\n}\nul li textarea::placeholder{\n  color: black;\n  padding: 0 10px;\n  font-size: 16px;\n}\nli button{\n  width: 25%;\n  height: 40px;\n  border: none;\n  background-color: lawngreen;\n  color: floralwhite;\n  font-size: 20px;\n  font-weight: 600;\n}\ninput[type = \"file\"]{\n  visibility: hidden;\n}\n.imagePreview{\n  height: 5rem;\n  margin: 1rem 0;\n}\n.imagePreview img{\n  height: 100%;\n}\n.website{\n  width:55%; margin-bottom: 40px;\n}\n.company-type{\n  width:55%;\n}\n.picker{\n  height:5pc;position: absolute;\n}\n.btn{\n  height:5pc;position: absolute\n}\n.companySize{\n  width: 47%;\n}\n.yearEstd{\n  width: 47%;\n  float: right;\n}\n@media screen and (max-width: 700px){\n  .companyForm{\n    width: 100%;\n    -webkit-transform: none;\n            transform: none;\n    margin-top: -50px;\n    z-index: 444;\n  }\n  .infoGraphic{\n    display: none;\n    width: 0;\n  }\n  .form {\n    width: 90%;\n\n    background-color: #fff;\n    position: absolute;\n    /* -webkit-box-shadow: 7px 4px 44px -7px rgba(0,0,0,0.75);\n    -moz-box-shadow: 7px 4px 44px -7px rgba(0,0,0,0.75); */\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n\n  }\n  .website{\n    width:100%; margin-bottom: 40px;\n  }\n  .company-type{\n    width:100%;\n  }\n  .picker{\n   position: relative;\n  }\n  .btn{\n    position: absolute;\n    left: 5%;\n    width: 90% !important;\n    margin-top: 10%;\n  }\n  .form ul{\n    width: 90%;\n    -webkit-transform: none;\n            transform: none;\n  }\n  .heading{\n    display: none;\n    width: 0;\n  }\n  header{\n    display: block;\n    width: 100%;\n    height: 10pc;\n    background-color: black;\n  }\n  header h1{\n    margin-top: 0;\n    padding-top: 30px;\n    font-size: 25px;\n    margin-bottom: 10px;\n    text-align: center;\n    color: #fff;\n  }\n  header p{\n   text-align: center;\n   margin: 0;\n   color: #fff;\n   font-size: 12px;\n  }\n  input, select{\n    border:none;\n    border-bottom:1px solid #ccc;\n  }\n  li{\n    margin-top: 40px;\n  }\n  li button{\n    float: right;\n    width: 35%;\n    height: 30px;\n    background-color: #32CD32;\n    margin-bottom: 10px;\n  }\n  input::-webkit-input-placeholder{\n    padding: 0 0 30px 0;\n\n  }\n  input::-ms-input-placeholder{\n    padding: 0 0 30px 0;\n\n  }\n  input::placeholder{\n    padding: 0 0 30px 0;\n\n  }\n  .companySize{\n    width: 100%;\n  }\n  .yearEstd{\n    width: 100%;\n    float: none;\n     margin-top: 40px;\n  }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcGFueS9jb21wYW55LWZvcm0yL2NvbXBhbnktZm9ybTIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0NBQ2YsY0FBYztDQUNkLHdCQUF3QjtDQUN4QixlQUFlO0NBQ2Y7O21DQUVrQztDQUNsQzsrQ0FDOEM7Q0FDOUM7QUFDRDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbURBQW1EO0VBQ25ELGVBQWU7Q0FDaEI7QUFDRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0NBQ3hCO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsUUFBUTtFQUNSLFVBQVU7RUFDVixzQ0FBOEI7VUFBOUIsOEJBQThCO0VBQzlCLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0NBQ2pCO0FBSEQ7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0NBQ2pCO0FBSEQ7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtDQUNqQjtBQUpEO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7Q0FDakI7QUFKRDtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsYUFBYTtFQUNiLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsVUFBVSxDQUFDLG9CQUFvQjtDQUNoQztBQUNEO0VBQ0UsVUFBVTtDQUNYO0FBQ0Q7RUFDRSxXQUFXLG1CQUFtQjtDQUMvQjtBQUNEO0VBQ0UsV0FBVyxrQkFBa0I7Q0FDOUI7QUFDRDtFQUNFLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsV0FBVztFQUNYLGFBQWE7Q0FDZDtBQUNEO0VBQ0U7SUFDRSxZQUFZO0lBQ1osd0JBQWdCO1lBQWhCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtHQUNkO0VBQ0Q7SUFDRSxjQUFjO0lBQ2QsU0FBUztHQUNWO0VBQ0Q7SUFDRSxXQUFXOztJQUVYLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkI7MkRBQ3VEO0lBQ3ZELG1FQUFtRTtJQUNuRSxnREFBZ0Q7O0dBRWpEO0VBQ0Q7SUFDRSxXQUFXLENBQUMsb0JBQW9CO0dBQ2pDO0VBQ0Q7SUFDRSxXQUFXO0dBQ1o7RUFDRDtHQUNDLG1CQUFtQjtHQUNuQjtFQUNEO0lBQ0UsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxXQUFXO0lBQ1gsd0JBQWdCO1lBQWhCLGdCQUFnQjtHQUNqQjtFQUNEO0lBQ0UsY0FBYztJQUNkLFNBQVM7R0FDVjtFQUNEO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2Isd0JBQXdCO0dBQ3pCO0VBQ0Q7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFlBQVk7R0FDYjtFQUNEO0dBQ0MsbUJBQW1CO0dBQ25CLFVBQVU7R0FDVixZQUFZO0dBQ1osZ0JBQWdCO0dBQ2hCO0VBQ0Q7SUFDRSxZQUFZO0lBQ1osNkJBQTZCO0dBQzlCO0VBQ0Q7SUFDRSxpQkFBaUI7R0FDbEI7RUFDRDtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixvQkFBb0I7R0FDckI7RUFDRDtJQUNFLG9CQUFvQjs7R0FFckI7RUFIRDtJQUNFLG9CQUFvQjs7R0FFckI7RUFIRDtJQUNFLG9CQUFvQjs7R0FFckI7RUFDRDtJQUNFLFlBQVk7R0FDYjtFQUNEO0lBQ0UsWUFBWTtJQUNaLFlBQVk7S0FDWCxpQkFBaUI7R0FDbkI7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBhbnkvY29tcGFueS1mb3JtMi9jb21wYW55LWZvcm0yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcGFueUZvcm17XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTAwdmg7XG4gZGlzcGxheTogZmxleDtcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiBtYXJnaW46IDAgYXV0bztcbiAvKiB0b3A6NTAlO1xuIGxlZnQ6IDUwJTtcbiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMyUgLDI1JSk7ICovXG4gLyogYm94LXNoYWRvdzogMCAwcHggMjhweCByZ2JhKDAsMCwwLDAuMzApLCAwIDE1cHggMTJweCByZ2JhKDE1NywgMTU3LCAxNTcsIDAuMjIpO1xuIGJvcmRlcjogMXB4IHNvbGlkICByZ2JhKDE1NywgMTcsIDE3LCAwLjIyKTsgKi9cbn1cbi5pbmZvR3JhcGhpY3tcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICByZ2JhKDE1NywgMTU3LCAxNTcsIDAuMjIpO1xuICBtYXJnaW4tdG9wOiA3JTtcbn1cbi5pbmZvR3JhcGhpYyBpbWd7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uZm9ybXtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmZvcm0gdWx7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRvcDo1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUgLDIwJSk7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbmxpe1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbmlucHV0LCBzZWxlY3R7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzMzMzM7XG59XG5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbnNlbGVjdCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbnVsIGxpIHRleHRhcmVhe1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMzMzMztcbn1cbnVsIGxpIHRleHRhcmVhOjpwbGFjZWhvbGRlcntcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbmxpIGJ1dHRvbntcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGxhd25ncmVlbjtcbiAgY29sb3I6IGZsb3JhbHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5pbnB1dFt0eXBlID0gXCJmaWxlXCJde1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uaW1hZ2VQcmV2aWV3e1xuICBoZWlnaHQ6IDVyZW07XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuLmltYWdlUHJldmlldyBpbWd7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53ZWJzaXRle1xuICB3aWR0aDo1NSU7IG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4uY29tcGFueS10eXBle1xuICB3aWR0aDo1NSU7XG59XG4ucGlja2Vye1xuICBoZWlnaHQ6NXBjO3Bvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5idG57XG4gIGhlaWdodDo1cGM7cG9zaXRpb246IGFic29sdXRlXG59XG4uY29tcGFueVNpemV7XG4gIHdpZHRoOiA0NyU7XG59XG4ueWVhckVzdGR7XG4gIHdpZHRoOiA0NyU7XG4gIGZsb2F0OiByaWdodDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcbiAgLmNvbXBhbnlGb3Jte1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICB6LWluZGV4OiA0NDQ7XG4gIH1cbiAgLmluZm9HcmFwaGlje1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgLmZvcm0ge1xuICAgIHdpZHRoOiA5MCU7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvKiAtd2Via2l0LWJveC1zaGFkb3c6IDdweCA0cHggNDRweCAtN3B4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiA3cHggNHB4IDQ0cHggLTdweCByZ2JhKDAsMCwwLDAuNzUpOyAqL1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcblxuICB9XG4gIC53ZWJzaXRle1xuICAgIHdpZHRoOjEwMCU7IG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cbiAgLmNvbXBhbnktdHlwZXtcbiAgICB3aWR0aDoxMDAlO1xuICB9XG4gIC5waWNrZXJ7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmJ0bntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNSU7XG4gICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgfVxuICAuZm9ybSB1bHtcbiAgICB3aWR0aDogOTAlO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxuICAuaGVhZGluZ3tcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIGhlYWRlcntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwcGM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIH1cbiAgaGVhZGVyIGgxe1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIGhlYWRlciBwe1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgbWFyZ2luOiAwO1xuICAgY29sb3I6ICNmZmY7XG4gICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgaW5wdXQsIHNlbGVjdHtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjO1xuICB9XG4gIGxpe1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gIH1cbiAgbGkgYnV0dG9ue1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogMzUlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJDRDMyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgaW5wdXQ6OnBsYWNlaG9sZGVye1xuICAgIHBhZGRpbmc6IDAgMCAzMHB4IDA7XG5cbiAgfVxuICAuY29tcGFueVNpemV7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnllYXJFc3Rke1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBub25lO1xuICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Company/company-form2/company-form2.component.html":
/*!********************************************************************!*\
  !*** ./src/app/Company/company-form2/company-form2.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/Company/company-form2/company-form2.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/Company/company-form2/company-form2.component.ts ***!
  \******************************************************************/
/*! exports provided: CompanyForm2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyForm2Component", function() { return CompanyForm2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Service_company_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Service/company-service.service */ "./src/app/Service/company-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


// import {imageValidator} from './image.validator';



var CompanyForm2Component = /** @class */ (function () {
    function CompanyForm2Component(companyService, router, storage, _fb) {
        this.companyService = companyService;
        this.router = router;
        this.storage = storage;
        this._fb = _fb;
        this.companyForm2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        console.log(this.companyService.Id);
    }
    // companyForm2= this._fb.group({
    //   website: [''],
    //   companyType: [''],
    //   image: [''],
    //   companySize: [''],
    //   yearEstd: ['']
    //  });
    CompanyForm2Component.prototype.ngOnInit = function () {
        this.companyService.token = this.storage.get('token');
        this.token = this.storage.get('token');
    };
    CompanyForm2Component.prototype.onImagePick = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.companyForm2.patchValue({ image: file });
        this.companyForm2.get('image').updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    CompanyForm2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-form2',
            template: __webpack_require__(/*! ./company-form2.component.html */ "./src/app/Company/company-form2/company-form2.component.html"),
            styles: [__webpack_require__(/*! ./company-form2.component.css */ "./src/app/Company/company-form2/company-form2.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [_Service_company_service_service__WEBPACK_IMPORTED_MODULE_2__["CompanyServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CompanyForm2Component);
    return CompanyForm2Component;
}());



/***/ }),

/***/ "./src/app/Company/company-form3/company-form3.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/Company/company-form3/company-form3.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".companyForm{\n  width: 60%;\n display: flex;\n justify-content: center;\n top:50%;\n left: 50%;\n -webkit-transform: translate(33% ,25%);\n         transform: translate(33% ,25%);\n box-shadow: 0 0px 28px rgba(0,0,0,0.30), 0 15px 12px rgba(157, 157, 157, 0.22);\n border: 1px solid  rgba(157, 17, 17, 0.22);\n}\n.infoGraphic{\n  width: 50%;\n  border-right: 1px solid  rgba(157, 157, 157, 0.22);\n}\n.infoGraphic img{\n  width: 100%;\n  height: 100%;\n}\n.form{\n  width: 50%;\n}\n.form ul{\n  list-style-type: none;\n  padding: 0;\n  width: 80%;\n  margin: 0 auto;\n  top:50%;\n  left: 50%;\n  -webkit-transform: translate(0% ,0%);\n          transform: translate(0% ,0%);\n  margin-top: 0px;\n}\nli{\n  margin-top: 28px;\n  width: 100%;\n}\ninput, select{\n  width: 100%;\n  height: 40px;\n  border: none;\n  color: black;\n  outline: none;\n  font-size: 15px;\n  border: 1px solid #333333;\n}\ninput::-webkit-input-placeholder {\n  color: black;\n  padding: 0 10px;\n}\ninput::-ms-input-placeholder {\n  color: black;\n  padding: 0 10px;\n}\ninput::placeholder {\n  color: black;\n  padding: 0 10px;\n}\nselect {\n  padding: 0 10px;\n}\nli button{\n  width: 25%;\n  height: 40px;\n  border: none;\n  background-color: lawngreen;\n  color: floralwhite;\n  font-size: 20px;\n  font-weight: 600;\n}\nli textarea{\n  width: 100%;\n  height: 6rem;\n  border: none;\n  color: black;\n  outline: none;\n  font-size: 15px;\n  border: 1px solid #333333;\n}\ntextarea::-webkit-input-placeholder {\n  color: black;\n  padding: 0 10px;\n}\ntextarea::-ms-input-placeholder {\n  color: black;\n  padding: 0 10px;\n}\ntextarea::placeholder {\n  color: black;\n  padding: 0 10px;\n}\n.city{\n  width: 47%;\n}\n.zip{\nwidth:45%; float: right;\n}\n@media screen and (max-width: 700px){\n  .companyForm{\n    width: 100%;\n    -webkit-transform: none;\n            transform: none;\n    margin-top: -50px;\n    z-index: 444;\n  }\n  .infoGraphic{\n    display: none;\n    width: 0;\n  }\n  .form {\n    width: 90%;\n    background-color: #fff;\n    position: absolute;\n    /* -webkit-box-shadow: 7px 4px 44px -7px rgba(0,0,0,0.75);\n    -moz-box-shadow: 7px 4px 44px -7px rgba(0,0,0,0.75); */\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n  }\n  .form ul{\n    width: 90%;\n  }\n  .heading{\n    display: none;\n    width: 0;\n  }\n  header{\n    display: block;\n    width: 100%;\n    height: 10pc;\n    background-color: black;\n  }\n  header h1{\n    margin-top: 0;\n    padding-top: 30px;\n    font-size: 25px;\n    margin-bottom: 10px;\n    text-align: center;\n    color: #fff;\n  }\n  header p{\n   text-align: center;\n   margin: 0;\n   color: #fff;\n   font-size: 12px;\n  }\n  input, select{\n    border:none;\n    border-bottom:1px solid #ccc;\n  }\n  li{\n    margin-top: 40px;\n  }\n  li button{\n    float: right;\n    width: 35%;\n    height: 30px;\n    background-color: #32CD32;\n    margin-bottom: 10px;\n  }\n  input::-webkit-input-placeholder{\n    padding: 0 0 30px 0;\n\n  }\n  input::-ms-input-placeholder{\n    padding: 0 0 30px 0;\n\n  }\n  input::placeholder{\n    padding: 0 0 30px 0;\n\n  }\n  .city{\n    width: 100%;\n    margin-bottom: 40px;\n  }\n  .zip{\n  width:100%; float: right;\n  margin-bottom: 40px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcGFueS9jb21wYW55LWZvcm0zL2NvbXBhbnktZm9ybTMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7Q0FDWixjQUFjO0NBQ2Qsd0JBQXdCO0NBQ3hCLFFBQVE7Q0FDUixVQUFVO0NBQ1YsdUNBQStCO1NBQS9CLCtCQUErQjtDQUMvQiwrRUFBK0U7Q0FDL0UsMkNBQTJDO0NBQzNDO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsbURBQW1EO0NBQ3BEO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtDQUNkO0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7QUFDRDtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7RUFDZixRQUFRO0VBQ1IsVUFBVTtFQUNWLHFDQUE2QjtVQUE3Qiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixhQUFhO0VBQ2IsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7QUFIRDtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7QUFIRDtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixhQUFhO0VBQ2IsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiwwQkFBMEI7Q0FDM0I7QUFFRDtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7QUFIRDtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7QUFIRDtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLFdBQVc7Q0FDWjtBQUNEO0FBQ0EsVUFBVSxDQUFDLGFBQWE7Q0FDdkI7QUFDRDtFQUNFO0lBQ0UsWUFBWTtJQUNaLHdCQUFnQjtZQUFoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7R0FDZDtFQUNEO0lBQ0UsY0FBYztJQUNkLFNBQVM7R0FDVjtFQUNEO0lBQ0UsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkI7MkRBQ3VEO0lBQ3ZELG1FQUFtRTtJQUNuRSxnREFBZ0Q7R0FDakQ7RUFDRDtJQUNFLFdBQVc7R0FDWjtFQUNEO0lBQ0UsY0FBYztJQUNkLFNBQVM7R0FDVjtFQUNEO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2Isd0JBQXdCO0dBQ3pCO0VBQ0Q7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFlBQVk7R0FDYjtFQUNEO0dBQ0MsbUJBQW1CO0dBQ25CLFVBQVU7R0FDVixZQUFZO0dBQ1osZ0JBQWdCO0dBQ2hCO0VBQ0Q7SUFDRSxZQUFZO0lBQ1osNkJBQTZCO0dBQzlCO0VBQ0Q7SUFDRSxpQkFBaUI7R0FDbEI7RUFDRDtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixvQkFBb0I7R0FDckI7RUFDRDtJQUNFLG9CQUFvQjs7R0FFckI7RUFIRDtJQUNFLG9CQUFvQjs7R0FFckI7RUFIRDtJQUNFLG9CQUFvQjs7R0FFckI7RUFDRDtJQUNFLFlBQVk7SUFDWixvQkFBb0I7R0FDckI7RUFDRDtFQUNBLFdBQVcsQ0FBQyxhQUFhO0VBQ3pCLG9CQUFvQjtHQUNuQjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvQ29tcGFueS9jb21wYW55LWZvcm0zL2NvbXBhbnktZm9ybTMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wYW55Rm9ybXtcbiAgd2lkdGg6IDYwJTtcbiBkaXNwbGF5OiBmbGV4O1xuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuIHRvcDo1MCU7XG4gbGVmdDogNTAlO1xuIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMzJSAsMjUlKTtcbiBib3gtc2hhZG93OiAwIDBweCAyOHB4IHJnYmEoMCwwLDAsMC4zMCksIDAgMTVweCAxMnB4IHJnYmEoMTU3LCAxNTcsIDE1NywgMC4yMik7XG4gYm9yZGVyOiAxcHggc29saWQgIHJnYmEoMTU3LCAxNywgMTcsIDAuMjIpO1xufVxuLmluZm9HcmFwaGlje1xuICB3aWR0aDogNTAlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAgcmdiYSgxNTcsIDE1NywgMTU3LCAwLjIyKTtcbn1cbi5pbmZvR3JhcGhpYyBpbWd7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZm9ybXtcbiAgd2lkdGg6IDUwJTtcbn1cbi5mb3JtIHVse1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0b3A6NTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlICwwJSk7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbmxpe1xuICBtYXJnaW4tdG9wOiAyOHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbmlucHV0LCBzZWxlY3R7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzMzMzM7XG59XG5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbnNlbGVjdCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbmxpIGJ1dHRvbntcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGxhd25ncmVlbjtcbiAgY29sb3I6IGZsb3JhbHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5saSB0ZXh0YXJlYXtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNnJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMzMzMztcbn1cblxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uY2l0eXtcbiAgd2lkdGg6IDQ3JTtcbn1cbi56aXB7XG53aWR0aDo0NSU7IGZsb2F0OiByaWdodDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcbiAgLmNvbXBhbnlGb3Jte1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICB6LWluZGV4OiA0NDQ7XG4gIH1cbiAgLmluZm9HcmFwaGlje1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgLmZvcm0ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLyogLXdlYmtpdC1ib3gtc2hhZG93OiA3cHggNHB4IDQ0cHggLTdweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogN3B4IDRweCA0NHB4IC03cHggcmdiYSgwLDAsMCwwLjc1KTsgKi9cbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4gIH1cbiAgLmZvcm0gdWx7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAuaGVhZGluZ3tcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIGhlYWRlcntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwcGM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIH1cbiAgaGVhZGVyIGgxe1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIGhlYWRlciBwe1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgbWFyZ2luOiAwO1xuICAgY29sb3I6ICNmZmY7XG4gICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgaW5wdXQsIHNlbGVjdHtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjO1xuICB9XG4gIGxpe1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gIH1cbiAgbGkgYnV0dG9ue1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogMzUlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJDRDMyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgaW5wdXQ6OnBsYWNlaG9sZGVye1xuICAgIHBhZGRpbmc6IDAgMCAzMHB4IDA7XG5cbiAgfVxuICAuY2l0eXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB9XG4gIC56aXB7XG4gIHdpZHRoOjEwMCU7IGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/Company/company-form3/company-form3.component.html":
/*!********************************************************************!*\
  !*** ./src/app/Company/company-form3/company-form3.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/Company/company-form3/company-form3.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/Company/company-form3/company-form3.component.ts ***!
  \******************************************************************/
/*! exports provided: CompanyForm3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyForm3Component", function() { return CompanyForm3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Service_company_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Service/company-service.service */ "./src/app/Service/company-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var CompanyForm3Component = /** @class */ (function () {
    function CompanyForm3Component(storage, companyService, router) {
        this.storage = storage;
        this.companyService = companyService;
        this.router = router;
        this.companyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.Id = this.storage.get('companyId');
        console.log(this.Id);
    }
    CompanyForm3Component.prototype.ngOnInit = function () {
        this.companyService.token = this.storage.get('token');
    };
    CompanyForm3Component.prototype.onSubmit = function () {
        console.log(this.companyForm.value);
        var formData = this.companyForm.patchValue({
            address: (this.companyForm.value.address),
            city: (this.companyForm.value.city),
            zipCode: (this.companyForm.value.zipCode),
            landLine: (this.companyForm.value.landLine),
            mobile: (this.companyForm.value.mobile)
        });
        console.log(this.Id);
        this.router.navigate(['/companyPage']);
    };
    CompanyForm3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-form3',
            template: __webpack_require__(/*! ./company-form3.component.html */ "./src/app/Company/company-form3/company-form3.component.html"),
            styles: [__webpack_require__(/*! ./company-form3.component.css */ "./src/app/Company/company-form3/company-form3.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"],
            _Service_company_service_service__WEBPACK_IMPORTED_MODULE_2__["CompanyServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CompanyForm3Component);
    return CompanyForm3Component;
}());



/***/ }),

/***/ "./src/app/Header/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/Header/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\na {\n\ttext-decoration: none;\n}\n.logo {\n\tmargin: 0;\n\tfont-size: 1.45em;\n}\n.logo a,\n.main-nav a {\n\tpadding: 10px 15px;\n\ttext-transform: uppercase;\n\ttext-align: center;\n  display: block;\n  color: white; \n\n}\n.main-nav a {\n\tcolor: #34495e;\n  font-size: .99em;\n  color: #fff;\n  padding-top: 1em;\n\tpadding-bottom: .5em;\n}\n.header {\n  padding-left: 5%;\n\tbackground-color: #333333;\n box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);\n  top: 0;\n\n}\n.header,\n\t.main-nav {\n    display: flex;\n\t}\n.header {\n\t\tflex-direction: row;\n    justify-content: space-between;\n    position: fixed;\n    width: 95%;\n    color: #fff;\n\t}\n.search{\n  width: 60%;\n  border: none;\n  border-radius: 5px;\n}\n.search input{\n  width: 100%;\n  height: 100%;\n  border: none;\n  border-radius: 5px;\n  padding: 0 0 0 20px;\n  font-size: 16px;\n}\n@media screen and (min-width: 320px) and (max-width: 700px){\n  .book_mark\n  {\n    display: none;\n  }\n  .logo {\n   display: none;;\n  }\n  .search input{\n    width: 100%;\n    height: 100%;\n    border: none;\n    border-radius: 5px;\n    padding: 0 0 0 9px;\n    font-size: 11px;\n  }\n  .header {\n    padding-left: 5%;\n    background-color: white;\n    box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);\n    top: 0;\n    z-index: 5;\n  \n  }\n  .main-nav a{\n    color: black;\n  } \n\n}\n@media screen and (min-width: 767px) and (max-width: 1024px){\n .main-nav {\n  display: flex;\n  font-size: 12px;\n}\n.logo a  {\n  padding: 10px 15px;\n  text-transform: uppercase;\n  text-align: center;\n  display: block;\n  color: white;\n  margin-left: 9px;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSGVhZGVyL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0NBQ2xCO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEI7QUFJRDtDQUNDLFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEI7QUFDRDs7Q0FFQyxtQkFBbUI7Q0FDbkIsMEJBQTBCO0NBQzFCLG1CQUFtQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTs7Q0FFZDtBQUVEO0NBQ0MsZUFBZTtFQUNkLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0NBQ2xCLHFCQUFxQjtDQUNyQjtBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCLDBCQUEwQjtDQUd6Qiw4Q0FBOEM7RUFDOUMsT0FBTzs7Q0FFUjtBQUVEOztJQUVJLGNBQWM7RUFDaEI7QUFFQTtFQUNBLG9CQUFvQjtJQUNsQiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDRDtFQUNDLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtDQUNqQjtBQUVEO0VBQ0U7O0lBRUUsY0FBYztHQUNmO0VBQ0Q7R0FDQyxjQUFjO0dBQ2Q7RUFDRDtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxpQkFBaUI7SUFDakIsd0JBQXdCO0lBR3hCLDhDQUE4QztJQUM5QyxPQUFPO0lBQ1AsV0FBVzs7R0FFWjtFQUNEO0lBQ0UsYUFBYTtHQUNkOztDQUVGO0FBQ0Q7Q0FDQztFQUNDLGNBQWM7RUFDZCxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCO0NBQ0EiLCJmaWxlIjoic3JjL2FwcC9IZWFkZXIvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5hIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5cblxuLmxvZ28ge1xuXHRtYXJnaW46IDA7XG5cdGZvbnQtc2l6ZTogMS40NWVtO1xufVxuLmxvZ28gYSxcbi5tYWluLW5hdiBhIHtcblx0cGFkZGluZzogMTBweCAxNXB4O1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogd2hpdGU7IFxuXG59XG5cbi5tYWluLW5hdiBhIHtcblx0Y29sb3I6ICMzNDQ5NWU7XG4gIGZvbnQtc2l6ZTogLjk5ZW07XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLXRvcDogMWVtO1xuXHRwYWRkaW5nLWJvdHRvbTogLjVlbTtcbn1cblxuLmhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogNSU7XG5cdGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuXHQtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTRweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICB0b3A6IDA7XG5cbn1cblxuLmhlYWRlcixcblx0Lm1haW4tbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXHR9XG5cbiAgLmhlYWRlciB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiA5NSU7XG4gICAgY29sb3I6ICNmZmY7XG5cdH1cbiAuc2VhcmNoe1xuICB3aWR0aDogNjAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5zZWFyY2ggaW5wdXR7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwIDAgMCAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xuICAuYm9va19tYXJrXG4gIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5sb2dvIHtcbiAgIGRpc3BsYXk6IG5vbmU7O1xuICB9XG4gIC5zZWFyY2ggaW5wdXR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMCAwIDAgOXB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTRweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogNTtcbiAgXG4gIH1cbiAgLm1haW4tbmF2IGF7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9IFxuXG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XG4gLm1haW4tbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmxvZ28gYSAge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbn1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/Header/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Header/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head\">\n    <header class=\"header\">\n        <h1 class=\"logo\"><a routerLink=\"/Dashboard\">ELROUTE</a></h1>\n        <p>Filter</p>\n        <div class=\"search\" [formGroup] = \"searchForm\" (ngSubmit)= \"onSearch()\">\n        \n               <input type=\"search\" placeholder=\"Enter Product/Service to Search\"  formControlName = \"word\" (keypress) = \"onSearch($event)\" >\n       \n          \n        </div>\n          <ul class=\"main-nav\">\n              <li class=\"book_mark\"><a routerLink=\"/bookmark\">Bookmark</a></li>\n              <li class=\"book_mark\"><a>Location</a></li>\n              <li><a href=\"#\">User</a></li>\n              <!-- <li><a href=\"#\">Contact</a></li> -->\n          </ul>\n      </header>\n\n</div>\n"

/***/ }),

/***/ "./src/app/Header/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Header/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Service_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Service/search.service */ "./src/app/Service/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(storage, router, searchService, route) {
        this.storage = storage;
        this.router = router;
        this.searchService = searchService;
        this.route = route;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            word: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            page: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('1')
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onSearch = function (event) {
        var formData = this.searchForm.value;
        if (event.keyCode === 13) {
            this.searchService.onSearch(this.searchForm.value.word, this.searchForm.value.page);
            this.searchService.searchValue = formData;
            this.router.navigate(['/Result/' + this.searchForm.value.word + '/' + this.searchForm.value.page]);
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/Header/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/Header/header/header.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["WebStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _Service_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/Header/header3/header3.component.css":
/*!******************************************************!*\
  !*** ./src/app/Header/header3/header3.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.header{\n  width: 100%;\n  border: 1px solid #ccc;\n  padding: 10px;\n  display: flex;\n}\n.headerElements{\n  width: 90%;\n  margin: 0 auto;\n  height: 100%;\n  display: flex;\n}\n.elements{\n  width: 10%;\n  height: 100%;\n}\n.elements h4{\n  margin: 0;\n}\n@media screen and (max-width:700px){\n  .elements{\n    width: 40%;\n    height: 100%;\n    font-size: 15px;\n  }\n}\n@media screen and  (min-width:767px)and (max-width:1024px){\n  .elements{\n    width: 18%;\n    height: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSGVhZGVyL2hlYWRlcjMvaGVhZGVyMy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGNBQWM7Q0FDZjtBQUNEO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2IsY0FBYztDQUNmO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7QUFDRDtFQUNFO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7R0FDakI7Q0FDRjtBQUNEO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsYUFBYTtHQUNkO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9IZWFkZXIvaGVhZGVyMy9oZWFkZXIzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5oZWFkZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmhlYWRlckVsZW1lbnRze1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmVsZW1lbnRze1xuICB3aWR0aDogMTAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZWxlbWVudHMgaDR7XG4gIG1hcmdpbjogMDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzAwcHgpe1xuICAuZWxlbWVudHN7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAgKG1pbi13aWR0aDo3NjdweClhbmQgKG1heC13aWR0aDoxMDI0cHgpe1xuICAuZWxlbWVudHN7XG4gICAgd2lkdGg6IDE4JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Header/header3/header3.component.html":
/*!*******************************************************!*\
  !*** ./src/app/Header/header3/header3.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <div class=\"headerElements\">\n    <div class=\"elements\" routerLink = \"/bookmark\"><h4>Products</h4></div>\n    <div class=\"elements\" routerLink = \"/companyBookmark\"><h4>Comapny</h4></div>\n    <div class=\"elements\"  routerLink = \"/post\"><h4>Feed</h4></div>\n    </div>\n    <div class=\"elements\">\n        <h4>Export to Excel</h4>\n      </div>\n      </div>\n"

/***/ }),

/***/ "./src/app/Header/header3/header3.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Header/header3/header3.component.ts ***!
  \*****************************************************/
/*! exports provided: Header3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header3Component", function() { return Header3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Header3Component = /** @class */ (function () {
    function Header3Component() {
    }
    Header3Component.prototype.ngOnInit = function () {
    };
    Header3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header3',
            template: __webpack_require__(/*! ./header3.component.html */ "./src/app/Header/header3/header3.component.html"),
            styles: [__webpack_require__(/*! ./header3.component.css */ "./src/app/Header/header3/header3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Header3Component);
    return Header3Component;
}());



/***/ }),

/***/ "./src/app/Header/s-page-header-search/s-page-header-search.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/Header/s-page-header-search/s-page-header-search.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header_search\n{\n    margin: 0px auto;\n    width: 70%;\n    background-color: #E8E6E9;\n    margin-top: 5%;\n    display: flex;\n    height: 77px;\n    padding-top: 34px;\n}\n.input_search\n{\n    margin: 0 auto;\n    width: 70%;\n\n}\n.input_search input[type=text] {\n    width: 52%;\n    box-sizing: border-box;\n    border: 2px solid #ccc;\n    border-radius: 10px;\n    font-size: 25px;\n    padding: 12px 20px 12px 40px;\n    border: none;\n    border: solid 1px #707070;\n    /* margin: 0 auto; */\n    position: absolute;\n    float: right;\n}\n.input_search button {\n    background-color: #FDFAFA;\n    border: solid 1px #707070;\n    padding: 12px 17px 14px 17px;\n    border-radius: 10px;\n    position: absolute;\n    /* margin-left: -20px; */\n    float: right;\n    left: 70%;\n  }\n.fillter\n    {\n        width: 15%;\n        padding-top: 1%;\n    }\n@media screen and (max-width: 700px) {\n    .header_search{\n        display: none;\n    }\n  }\n@media screen and (min-width: 767px) and (max-width: 1025px){\n    .header_search\n    {\n        margin: 0px auto;\n        width: 70%;\n        background-color: #E8E6E9;\n        margin-top: 9%;\n        display: flex;\n        height: 77px;\n        padding-top: 34px;\n    }\n    .input_search input[type=text] {\n        width: 53%;\n        box-sizing: border-box;\n        border: 2px solid #ccc;\n        border-radius: 10px;\n        font-size: 25px;\n        padding: 12px 20px 12px 40px;\n        border: none;\n        border: solid 1px #707070;\n        position: absolute;\n        float: right;\n    }\n    .input_search button{\n        background-color: #FDFAFA;\n        border: solid 1px #707070;\n        padding: 12px 17px 14px 17px;\n        border-radius: 10px;\n        position: absolute;\n        float: right;\n        left: 66%;\n    }\n    .fillter {\n        width: 15%;\n        padding-top: 2%;\n    }\n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSGVhZGVyL3MtcGFnZS1oZWFkZXItc2VhcmNoL3MtcGFnZS1oZWFkZXItc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0NBQ3JCO0FBQ0Q7O0lBRUksZUFBZTtJQUNmLFdBQVc7O0NBRWQ7QUFDRDtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixhQUFhO0NBQ2hCO0FBRUM7SUFDRSwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsVUFBVTtHQUNYO0FBQ0M7O1FBRUksV0FBVztRQUNYLGdCQUFnQjtLQUNuQjtBQUVIO0lBQ0U7UUFDSSxjQUFjO0tBQ2pCO0dBQ0Y7QUFDRDtJQUNFOztRQUVJLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsMEJBQTBCO1FBQzFCLGVBQWU7UUFDZixjQUFjO1FBQ2QsYUFBYTtRQUNiLGtCQUFrQjtLQUNyQjtJQUNEO1FBQ0ksV0FBVztRQUNYLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsb0JBQW9CO1FBQ3BCLGdCQUFnQjtRQUNoQiw2QkFBNkI7UUFDN0IsYUFBYTtRQUNiLDBCQUEwQjtRQUMxQixtQkFBbUI7UUFDbkIsYUFBYTtLQUNoQjtJQUNEO1FBQ0ksMEJBQTBCO1FBQzFCLDBCQUEwQjtRQUMxQiw2QkFBNkI7UUFDN0Isb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsVUFBVTtLQUNiO0lBQ0Q7UUFDSSxXQUFXO1FBQ1gsZ0JBQWdCO0tBQ25COztHQUVGIiwiZmlsZSI6InNyYy9hcHAvSGVhZGVyL3MtcGFnZS1oZWFkZXItc2VhcmNoL3MtcGFnZS1oZWFkZXItc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyX3NlYXJjaFxue1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgd2lkdGg6IDcwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThFNkU5O1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA3N3B4O1xuICAgIHBhZGRpbmctdG9wOiAzNHB4O1xufVxuLmlucHV0X3NlYXJjaFxue1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA3MCU7XG5cbn1cbi5pbnB1dF9zZWFyY2ggaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgd2lkdGg6IDUyJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgcGFkZGluZzogMTJweCAyMHB4IDEycHggNDBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzcwNzA3MDtcbiAgICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuICBcbiAgLmlucHV0X3NlYXJjaCBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGREZBRkE7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzcwNzA3MDtcbiAgICBwYWRkaW5nOiAxMnB4IDE3cHggMTRweCAxN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8qIG1hcmdpbi1sZWZ0OiAtMjBweDsgKi9cbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbGVmdDogNzAlO1xuICB9XG4gICAgLmZpbGx0ZXJcbiAgICB7XG4gICAgICAgIHdpZHRoOiAxNSU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxJTtcbiAgICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAuaGVhZGVyX3NlYXJjaHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI1cHgpe1xuICAgIC5oZWFkZXJfc2VhcmNoXG4gICAge1xuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThFNkU5O1xuICAgICAgICBtYXJnaW4tdG9wOiA5JTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiA3N3B4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMzRweDtcbiAgICB9XG4gICAgLmlucHV0X3NlYXJjaCBpbnB1dFt0eXBlPXRleHRdIHtcbiAgICAgICAgd2lkdGg6IDUzJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHggMTJweCA0MHB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM3MDcwNzA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbiAgICAuaW5wdXRfc2VhcmNoIGJ1dHRvbntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZERkFGQTtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzcwNzA3MDtcbiAgICAgICAgcGFkZGluZzogMTJweCAxN3B4IDE0cHggMTdweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGxlZnQ6IDY2JTtcbiAgICB9XG4gICAgLmZpbGx0ZXIge1xuICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICBwYWRkaW5nLXRvcDogMiU7XG4gICAgfVxuICAgIFxuICB9Il19 */"

/***/ }),

/***/ "./src/app/Header/s-page-header-search/s-page-header-search.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/Header/s-page-header-search/s-page-header-search.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"header_search\">\n    <div class=\"input_search\">\n      \n          <input type=\"text\" placeholder=\"Search..\" name=\"search\">\n          <button type=\"submit\"><svg width=\"24\" height=\"24\" xmlns=\"http://www.w3.org/2000/svg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path d=\"M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z\"/></svg></button>\n      </div>\n<div class=\"fillter\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\">\n            <path id=\"settings\" d=\"M17.456,6.825,18.9,4.069,17.063,2.231,14.306,3.675a4.7,4.7,0,0,0-1.444-.525L11.813,0H9.188L8.137,3.019a5.485,5.485,0,0,0-1.312.525L4.069,2.1,2.1,4.069,3.544,6.825a5.485,5.485,0,0,0-.525,1.313L0,9.188v2.625l3.019,1.05c.131.525.394.919.525,1.444L2.1,17.063,3.938,18.9l2.756-1.444a4.7,4.7,0,0,0,1.444.525L9.188,21h2.625l1.05-3.019c.525-.131.919-.394,1.444-.525L17.063,18.9,18.9,17.063l-1.444-2.756a4.7,4.7,0,0,0,.525-1.444L21,11.813V9.188l-3.019-1.05A5.485,5.485,0,0,0,17.456,6.825ZM10.5,14.438A3.867,3.867,0,0,1,6.563,10.5,3.867,3.867,0,0,1,10.5,6.563,3.867,3.867,0,0,1,14.438,10.5,3.867,3.867,0,0,1,10.5,14.438Z\" fill=\"#a5a4bf\"/>\n          </svg>\n </div>   \n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/Header/s-page-header-search/s-page-header-search.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/Header/s-page-header-search/s-page-header-search.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SPageHeaderSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPageHeaderSearchComponent", function() { return SPageHeaderSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SPageHeaderSearchComponent = /** @class */ (function () {
    function SPageHeaderSearchComponent() {
    }
    SPageHeaderSearchComponent.prototype.ngOnInit = function () {
    };
    SPageHeaderSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-s-page-header-search',
            template: __webpack_require__(/*! ./s-page-header-search.component.html */ "./src/app/Header/s-page-header-search/s-page-header-search.component.html"),
            styles: [__webpack_require__(/*! ./s-page-header-search.component.css */ "./src/app/Header/s-page-header-search/s-page-header-search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SPageHeaderSearchComponent);
    return SPageHeaderSearchComponent;
}());



/***/ }),

/***/ "./src/app/Header/s-page-header/s-page-header.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Header/s-page-header/s-page-header.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header{\n  border: solid 1px gray;\n  border-right: none;\n  border-left: none;\n  margin-top: 20px;\n}\n.s_page_header\n{\n\n    width: 80%;\n    margin: 0px auto;\n    margin-top: 1%;\n}\n.s_page_details h1{\n  font-weight: 400;\n}\n.s_page_header_link\n{\n    width: 100%;\n\n}\n.s_page_header_link span\n{\n    font-size: 29px;\n    color: #707070;\n}\n.s_page_header_link a\n{\n    font-size: 29px;\n    text-decoration: none;\n    color: #707070;\n    \n}\n.s_page_details\n{\n    color: #707070;\n}\n.s_page_details a\n{\n    text-decoration: none;\n    color: #707070;\n    opacity: .7;\n}\n.s_page_links\n{\n\n    width: 100%;\n}\n.s_page_links select\n{\n    font-size: 29px;\n    border: none;\n    color: #707070;\n    font-weight: 600;\n}\n.s_page_links a\n{\n\n    font-size: 29px;\n    text-decoration: none;\n    color: #707070;\n}\n.s_page_links1\n{\n    float: left;\n}\n.s_page_links2\n{\n    float: left;\n    margin: 0px 20px;\n}\n@media screen and (max-width: 700px){\n    .s_page_header{\n        display: none;\n    }\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSGVhZGVyL3MtcGFnZS1oZWFkZXIvcy1wYWdlLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0NBQ2xCO0FBQ0Q7OztJQUdJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7O0lBRUksWUFBWTs7Q0FFZjtBQUNEOztJQUVJLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCO0FBQ0Q7O0lBRUksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixlQUFlOztDQUVsQjtBQUNEOztJQUVJLGVBQWU7Q0FDbEI7QUFDRDs7SUFFSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFlBQVk7Q0FDZjtBQUNEOzs7SUFHSSxZQUFZO0NBQ2Y7QUFDRDs7SUFFSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7Q0FDcEI7QUFDRDs7O0lBR0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixlQUFlO0NBQ2xCO0FBQ0Q7O0lBRUksWUFBWTtDQUNmO0FBQ0Q7O0lBRUksWUFBWTtJQUNaLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0k7UUFDSSxjQUFjO0tBQ2pCO0dBQ0YiLCJmaWxlIjoic3JjL2FwcC9IZWFkZXIvcy1wYWdlLWhlYWRlci9zLXBhZ2UtaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJ7XG4gIGJvcmRlcjogc29saWQgMXB4IGdyYXk7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uc19wYWdlX2hlYWRlclxue1xuXG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDElO1xufVxuLnNfcGFnZV9kZXRhaWxzIGgxe1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLnNfcGFnZV9oZWFkZXJfbGlua1xue1xuICAgIHdpZHRoOiAxMDAlO1xuXG59XG4uc19wYWdlX2hlYWRlcl9saW5rIHNwYW5cbntcbiAgICBmb250LXNpemU6IDI5cHg7XG4gICAgY29sb3I6ICM3MDcwNzA7XG59XG4uc19wYWdlX2hlYWRlcl9saW5rIGFcbntcbiAgICBmb250LXNpemU6IDI5cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIFxufVxuLnNfcGFnZV9kZXRhaWxzXG57XG4gICAgY29sb3I6ICM3MDcwNzA7XG59XG4uc19wYWdlX2RldGFpbHMgYVxue1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBvcGFjaXR5OiAuNztcbn1cbi5zX3BhZ2VfbGlua3NcbntcblxuICAgIHdpZHRoOiAxMDAlO1xufVxuLnNfcGFnZV9saW5rcyBzZWxlY3RcbntcbiAgICBmb250LXNpemU6IDI5cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uc19wYWdlX2xpbmtzIGFcbntcblxuICAgIGZvbnQtc2l6ZTogMjlweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICM3MDcwNzA7XG59XG4uc19wYWdlX2xpbmtzMVxue1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLnNfcGFnZV9saW5rczJcbntcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDBweCAyMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xuICAgIC5zX3BhZ2VfaGVhZGVye1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/Header/s-page-header/s-page-header.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Header/s-page-header/s-page-header.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"s_page_header\">\n        <div class=\"s_page_header_link\">\n          <a href=\"#\">Home</a><span>  > </span>\n          <a href=\"#\">All</a>\n       </div>\n       <div class=\"s_page_details\">\n            <h1>Showing 1-40  of 84,164 results for <a href=\"#\">All</a></h1>\n        </div>\n        <div class=\"s_page_links\">\n            <div class=\"s_page_links1\">\n             <select routerLink = \"/Result/{{this.word}}/{{this.page}}\">\n                <option>All</option>\n                <option>hey</option>\n                <option>hey</option>\n\n             </select>\n            </div>\n            <div class=\"s_page_links2\">\n                <a routerLink = \"/companyResults/{{this.word}}/{{this.page}}\"> Company</a>\n              </div>\n              <div class=\"s_page_links3\">\n                  <a routerLink = \"/feeds/{{this.word}}/{{this.page}}\"> Feed</a>\n\n                </div>\n         </div>\n        </div>\n</header>\n"

/***/ }),

/***/ "./src/app/Header/s-page-header/s-page-header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Header/s-page-header/s-page-header.component.ts ***!
  \*****************************************************************/
/*! exports provided: SPageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPageHeaderComponent", function() { return SPageHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SPageHeaderComponent = /** @class */ (function () {
    function SPageHeaderComponent(route) {
        this.route = route;
        this.word = this.route.snapshot.paramMap.get('word');
        this.page = this.route.snapshot.paramMap.get('page');
        console.log(this.word, this.page);
    }
    SPageHeaderComponent.prototype.ngOnInit = function () {
    };
    SPageHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-s-page-header',
            template: __webpack_require__(/*! ./s-page-header.component.html */ "./src/app/Header/s-page-header/s-page-header.component.html"),
            styles: [__webpack_require__(/*! ./s-page-header.component.css */ "./src/app/Header/s-page-header/s-page-header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SPageHeaderComponent);
    return SPageHeaderComponent;
}());



/***/ }),

/***/ "./src/app/Header/side-nav/side-nav.component.css":
/*!********************************************************!*\
  !*** ./src/app/Header/side-nav/side-nav.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  margin:0px;\n  padding:0px;\n}\nbody{\n  background: url(https://www.toptal.com/designers/subtlepatterns/patterns/sayagata-400px.png);\n  font-family: 'Signika', sans-serif;\n  font-size:21px;\n}\nheader {\n  background: #fff;\n  padding: 10px 20px;\n  box-shadow: 0px -8px 25px #6d6d6d;       position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 991;\n}\n.menu{\n  cursor: pointer;\n}\n.menuBar{\n\n    width: 20px;\n    height: 2px;\n    background-color: black;\n    margin: 4px 0;\n\n}\n.main {\n  position: relative;\n}\naside {\n  width: 60px;\n  background: #fff;\n  padding: 8px 0px 10px 0px;\n  position: absolute;\n  left: 0;\n  top: 0px;\n  height: 100%;\n  box-shadow: 0px 3px 5px #6d6d6d;\n  overflow: hidden;\n  z-index: 99;\n  height: 100vh;\n}\naside ul {\n  list-style: none;\n  width: 100%;\n}\naside ul li {\n  border-bottom: 1px solid #ccc;\n  padding: 10px 27px;\n  position: relative;\n  cursor: pointer;\n\n}\naside ul li a {\n  font-size: 14px;\n  color: #4a4a4a;\n  text-decoration: none;\n  text-transform:uppercase;\n  white-space: nowrap;\n  display: inline-block;\n}\nspan {\n  display: inline-block;\n  vertical-align: middle;\n  color: #000000;\n  width: 38px;\n}\naside ul li:hover {\n  background: #fff;\n  box-shadow: inset 0px 0px 77px #dedede;\n}\naside ul li a span.notif {\n  position: absolute;\n  top: 8px;\n  text-align: center;\n  width: 30px;\n  height: 30px;\n  right: 10px;\n  background: #343436;\n  line-height: 31px;\n  border-radius: 100%;\n  color: #fff;\n}\naside ul li a span.notif.green {\n    width: 10px;\n    height: 10px;\n    color: transparent;\n    right: 5px;\n    transition: all 0.2s ease;\n}\naside ul li a span.notif.yellow  {\n    width: 10px;\n    height: 10px;\n    color: transparent;\n    right: 5px;\n    transition: all 0.2s ease;\n}\naside ul li a span.notif.red  {\n    width: 10px;\n    height: 10px;\n    color: transparent;\n    right: 5px;\n    transition: all 0.2s ease;\n}\naside ul li:hover a span.notif.red {\n    width: 30px;\n    height: 30px;\n    right: 15px;\n    color: #fff;\n    box-shadow: 0px 0px 60px #e74c3c;\n    top: 10px;\n}\naside ul li:hover a span.notif.yellow{\n    width: 30px;\n    height: 30px;\n    right: 15px;\n    color: #fff;\n    box-shadow: 0px 0px 60px #f1c40f;\n    top: 10px;\n}\naside ul li:hover a span.notif.green{\n    width: 30px;\n    height: 30px;\n    right: 15px;\n    color: #fff;\n    box-shadow: 0px 0px 60px #27ae60;\n    top: 10px;\n}\naside.width {\n    width: 200px;\n}\naside.width ul li a span.notif {\n    width: 30px;\n    height: 30px;\n    right: 10px;\n    color: #fff;\n    box-shadow: 0px 0px 10px transparent;\n    top: 8px;\n}\n/*  */\n@-webkit-keyframes blinker {\n  from {opacity: 1.0;}\n  to {opacity: 0.0;}\n}\n.blink{\n  text-decoration: blink;\n  -webkit-animation-name: blinker;\n  -webkit-animation-duration: 0.6s;\n  -webkit-animation-iteration-count:infinite;\n  -webkit-animation-timing-function:ease-in-out;\n  -webkit-animation-direction: alternate;\n}\np.blink.mah {\n  text-align: center;\n  line-height: 25;\n  position:relative;\n}\np.blink.mah span {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 102, 153, 0);\n  top: 248px;\n  left: 360px;\n}\n.logo{\n  display: none;\n}\n.menu2{\ndisplay: none;\n}\n/*  */\n@media screen and (max-width: 700px){\naside{\n  width: 0px;\n}\n.menu1{\n  display: none;\n}\n.logo{\n  display: block;\n}\n.menu2{\n  display: inline-block;\n}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSGVhZGVyL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtDQUNiO0FBQ0Q7RUFDRSw2RkFBNkY7RUFDN0YsbUNBQW1DO0VBQ25DLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0NBQWtDLE9BQU8sZ0JBQWdCO0VBQ3pELE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBQ0E7O0lBRUcsWUFBWTtJQUNaLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsY0FBYzs7Q0FFakI7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixTQUFTO0VBQ1QsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGNBQWM7Q0FDZjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCOztDQUVqQjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixzQkFBc0I7Q0FDdkI7QUFDQTtFQUNDLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLHVDQUF1QztDQUN4QztBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsWUFBWTtDQUNiO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLFVBQVU7Q0FDYjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxVQUFVO0NBQ2I7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsVUFBVTtDQUNiO0FBQ0Q7SUFDSSxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLFNBQVM7Q0FDWjtBQUNELE1BQU07QUFDTjtFQUNFLE1BQU0sYUFBYSxDQUFDO0VBQ3BCLElBQUksYUFBYSxDQUFDO0NBQ25CO0FBQ0Q7RUFDRSx1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLGlDQUFpQztFQUNqQywyQ0FBMkM7RUFDM0MsOENBQThDO0VBQzlDLHVDQUF1QztDQUN4QztBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxjQUFjO0NBQ2Y7QUFDRDtBQUNBLGNBQWM7Q0FDYjtBQUNELE1BQU07QUFDTjtBQUNBO0VBQ0UsV0FBVztDQUNaO0FBQ0Q7RUFDRSxjQUFjO0NBQ2Y7QUFDRDtFQUNFLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLHNCQUFzQjtDQUN2QjtDQUNBIiwiZmlsZSI6InNyYy9hcHAvSGVhZGVyL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICBtYXJnaW46MHB4O1xuICBwYWRkaW5nOjBweDtcbn1cbmJvZHl7XG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL3d3dy50b3B0YWwuY29tL2Rlc2lnbmVycy9zdWJ0bGVwYXR0ZXJucy9wYXR0ZXJucy9zYXlhZ2F0YS00MDBweC5wbmcpO1xuICBmb250LWZhbWlseTogJ1NpZ25pa2EnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6MjFweDtcbn1cbmhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm94LXNoYWRvdzogMHB4IC04cHggMjVweCAjNmQ2ZDZkOyAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5MTtcbn1cbi5tZW51e1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4gLm1lbnVCYXJ7XG5cbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBtYXJnaW46IDRweCAwO1xuXG59XG4ubWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmFzaWRlIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDhweCAwcHggMTBweCAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggIzZkNmQ2ZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogOTk7XG4gIGhlaWdodDogMTAwdmg7XG59XG5hc2lkZSB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuYXNpZGUgdWwgbGkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogMTBweCAyN3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxufVxuYXNpZGUgdWwgbGkgYSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0YTRhNGE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4gc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHdpZHRoOiAzOHB4O1xufVxuYXNpZGUgdWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDc3cHggI2RlZGVkZTtcbn1cbmFzaWRlIHVsIGxpIGEgc3Bhbi5ub3RpZiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMzNDM0MzY7XG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbn1cbmFzaWRlIHVsIGxpIGEgc3Bhbi5ub3RpZi5ncmVlbiB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICByaWdodDogNXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5hc2lkZSB1bCBsaSBhIHNwYW4ubm90aWYueWVsbG93ICB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICByaWdodDogNXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5hc2lkZSB1bCBsaSBhIHNwYW4ubm90aWYucmVkICB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICByaWdodDogNXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5hc2lkZSB1bCBsaTpob3ZlciBhIHNwYW4ubm90aWYucmVkIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA2MHB4ICNlNzRjM2M7XG4gICAgdG9wOiAxMHB4O1xufVxuYXNpZGUgdWwgbGk6aG92ZXIgYSBzcGFuLm5vdGlmLnllbGxvd3tcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA2MHB4ICNmMWM0MGY7XG4gICAgdG9wOiAxMHB4O1xufVxuYXNpZGUgdWwgbGk6aG92ZXIgYSBzcGFuLm5vdGlmLmdyZWVue1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICByaWdodDogMTVweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDYwcHggIzI3YWU2MDtcbiAgICB0b3A6IDEwcHg7XG59XG5hc2lkZS53aWR0aCB7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuYXNpZGUud2lkdGggdWwgbGkgYSBzcGFuLm5vdGlmIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHRyYW5zcGFyZW50O1xuICAgIHRvcDogOHB4O1xufVxuLyogICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmtlciB7XG4gIGZyb20ge29wYWNpdHk6IDEuMDt9XG4gIHRvIHtvcGFjaXR5OiAwLjA7fVxufVxuLmJsaW5re1xuICB0ZXh0LWRlY29yYXRpb246IGJsaW5rO1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBibGlua2VyO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xufVxucC5ibGluay5tYWgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyNTtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG59XG5wLmJsaW5rLm1haCBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDEwMiwgMTUzLCAwKTtcbiAgdG9wOiAyNDhweDtcbiAgbGVmdDogMzYwcHg7XG59XG4ubG9nb3tcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5tZW51MntcbmRpc3BsYXk6IG5vbmU7XG59XG4vKiAgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcbmFzaWRle1xuICB3aWR0aDogMHB4O1xufVxuLm1lbnUxe1xuICBkaXNwbGF5OiBub25lO1xufVxuLmxvZ297XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1lbnUye1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/Header/side-nav/side-nav.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Header/side-nav/side-nav.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu2\">\n    <span class=\"menu\" (click)=\"onToggle()\"style=\"margin-left: 10px;position: fixed; z-index: 999999 \">\n        <div class=\"menuBar\"></div>\n        <div class=\"menuBar\"></div>\n        <div class=\"menuBar\"></div>\n    </span>\n</div>\n<aside class=\"keep\" [ngClass]= \"{'width': toggle}\" style=\"position:fixed\">\n\n\n    <ul>\n      <li  (click)=\"onToggle()\" class=\"menu1\"> <span class=\"menu\">\n          <div class=\"menuBar\"></div>\n          <div class=\"menuBar\"></div>\n          <div class=\"menuBar\"></div>\n      </span>\n      <!-- <a >ElROUTE</a> -->\n    </li>\n    <li class=\"logo\" style=\"text-align:center;\">ELROUTE</li>\n      <li>\n        <a href=\"/\">\n          <span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z\"/></svg></span>\n           Home\n        </a>\n      </li>\n      <li>\n        <a href=\"/\">\n          <span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12zm8.021 9.593c-.141-.427-.314-.844-.516-1.242l-2.454 1.106c.217.393.39.81.517 1.242l2.453-1.106zm-12.573-.904c.271-.354.58-.674.919-.957l-1.89-1.968c-.328.294-.637.615-.918.957l1.889 1.968zm1.715-1.514c.379-.221.781-.396 1.198-.523l-1.034-2.569c-.41.142-.812.318-1.198.524l1.034 2.568zm-2.759 3.616c.121-.435.288-.854.498-1.25l-2.47-1.067c-.197.403-.364.823-.498 1.25l2.47 1.067zm9.434-6.2c-.387-.205-.79-.379-1.2-.519l-1.024 2.573c.417.125.82.299 1.2.519l1.024-2.573zm2.601 2.13c-.282-.342-.59-.664-.918-.957l-1.89 1.968c.339.283.647.604.918.957l1.89-1.968zm-5.791-3.059c-.219-.017-.437-.026-.649-.026s-.431.009-.65.026v2.784c.216-.025.434-.038.65-.038.216 0 .434.013.649.038v-2.784zm-.648 13.782c-1.294 0-2.343-1.049-2.343-2.343 0-.883.489-1.652 1.21-2.051l1.133-5.31 1.133 5.309c.722.399 1.21 1.168 1.21 2.051 0 1.295-1.049 2.344-2.343 2.344z\"/></svg></span>\n           Dashboard\n        </a>\n      </li>\n      <li>\n        <a href=\"/\">\n          <span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z\"/></svg></span>\n           Inbox\n        </a>\n      </li>\n      <li>\n        <a href=\"/\">\n          <span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.744 16.683l.349-.199v1.717l-.349.195v-1.713zm3.414-.227l.342-.196v-1.717l-.343.195v1.718zm-1.429.813l.343-.195v-1.717l-.343.195v1.717zm.578-.329l.349-.199v-1.717l-.349.199v1.717zm-1.152.656l.343-.196v-1.717l-.343.196v1.717zm-.821.467l.343-.195v-1.717l-.343.195v1.717zm6.666-11.122v11.507l-9.75 5.552-12.25-6.978v-11.507l9.767-5.515 12.233 6.941zm-12.236-4.643l-2.106 1.19 8.891 5.234-.002.003 2.33-1.256-9.113-5.171zm1.236 10.59l-9-5.218v8.19l9 5.126v-8.098zm3.493-3.056l-8.847-5.208-2.488 1.405 8.86 5.138 2.475-1.335zm5.507-.696l-7 3.773v8.362l7-3.985v-8.15z\"/></svg></span>\n           Product\n        </a>\n      </li>\n      <li>\n        <a href=\"/\">\n          <span><svg width=\"24\" height=\"24\" xmlns=\"http://www.w3.org/2000/svg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path d=\"M3.848 19h-.848c-.796 0-1.559-.316-2.121-.879-.563-.562-.879-1.325-.879-2.121v-3c0-7.175 5.377-13 12-13s12 5.825 12 13v3c0 .796-.316 1.559-.879 2.121-.562.563-1.325.879-2.121.879h-.848c-2.69 4.633-6.904 5-8.152 5-1.248 0-5.462-.367-8.152-5zm16.152-5.876c-.601.236-1.269-.18-1.269-.797 0-.304-.022-.61-.053-.915-1.761-.254-3.618-1.926-3.699-3.723-1.315 2.005-4.525 4.17-7.044 4.17 1.086-.699 1.839-2.773 1.903-3.508-.581 1.092-2.898 3.136-4.551 3.487l-.018.489c0 .619-.669 1.032-1.269.797v3.771c.287.256.632.464 1.041.594.225.072.412.224.521.424 2.206 4.046 5.426 4.087 6.438 4.087.929 0 3.719-.035 5.877-3.169-1.071.433-2.265.604-3.759.653-.37.6-1.18 1.016-2.118 1.016-1.288 0-2.333-.784-2.333-1.75s1.045-1.75 2.333-1.75c.933 0 1.738.411 2.112 1.005 1.9-.026 4.336-.334 5.888-2.645v-2.236zm-11-.624c.686 0 1.243.672 1.243 1.5s-.557 1.5-1.243 1.5-1.243-.672-1.243-1.5.557-1.5 1.243-1.5zm6 0c.686 0 1.243.672 1.243 1.5s-.557 1.5-1.243 1.5-1.243-.672-1.243-1.5.557-1.5 1.243-1.5zm5.478-1.5h1.357c-.856-5.118-4.937-9-9.835-9-4.898 0-8.979 3.882-9.835 9h1.357c.52-4.023 3.411-7.722 8.478-7.722s7.958 3.699 8.478 7.722z\"/></svg></span>\n           Services\n        </a>\n      </li>\n      <li>\n        <a href=\"/\">\n          <span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z\"/></svg></span>\n           Individuals\n        </a>\n      </li>\n      <li>\n        <a href=\"/\">\n          <span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm-5 11.5c-.829 0-1.5-.671-1.5-1.5s.671-1.5 1.5-1.5 1.5.671 1.5 1.5-.671 1.5-1.5 1.5zm5 0c-.829 0-1.5-.671-1.5-1.5s.671-1.5 1.5-1.5 1.5.671 1.5 1.5-.671 1.5-1.5 1.5zm5 0c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5z\"/></svg></span>\n           Chat Room\n        </a>\n      </li>\n      <li>\n        <a href=\"/\">\n          <span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 24l-7-6-7 6v-24h14v24z\"/></svg></span>\n           Bookmarks\n        </a>\n      </li>\n      <li>\n        <a href=\"/\">\n          <span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25s-.559 1.25-1.25 1.25zm1.961-5.928c-.904.975-.947 1.514-.935 2.178h-2.005c-.007-1.475.02-2.125 1.431-3.468.573-.544 1.025-.975.962-1.821-.058-.805-.73-1.226-1.365-1.226-.709 0-1.538.527-1.538 2.013h-2.01c0-2.4 1.409-3.95 3.59-3.95 1.036 0 1.942.339 2.55.955.57.578.865 1.372.854 2.298-.016 1.383-.857 2.291-1.534 3.021z\"/></svg></span>\n           Help Center\n        </a>\n      </li>\n      <li>\n        <a href=\"/\">\n          <span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M17 12.645v-2.289c-1.17-.417-1.907-.533-2.28-1.431-.373-.9.07-1.512.6-2.625l-1.618-1.619c-1.105.525-1.723.974-2.626.6-.9-.374-1.017-1.117-1.431-2.281h-2.29c-.412 1.158-.53 1.907-1.431 2.28h-.001c-.9.374-1.51-.07-2.625-.6l-1.617 1.619c.527 1.11.973 1.724.6 2.625-.375.901-1.123 1.019-2.281 1.431v2.289c1.155.412 1.907.531 2.28 1.431.376.908-.081 1.534-.6 2.625l1.618 1.619c1.107-.525 1.724-.974 2.625-.6h.001c.9.373 1.018 1.118 1.431 2.28h2.289c.412-1.158.53-1.905 1.437-2.282h.001c.894-.372 1.501.071 2.619.602l1.618-1.619c-.525-1.107-.974-1.723-.601-2.625.374-.899 1.126-1.019 2.282-1.43zm-8.5 1.689c-1.564 0-2.833-1.269-2.833-2.834s1.269-2.834 2.833-2.834 2.833 1.269 2.833 2.834-1.269 2.834-2.833 2.834zm15.5 4.205v-1.077c-.55-.196-.897-.251-1.073-.673-.176-.424.033-.711.282-1.236l-.762-.762c-.52.248-.811.458-1.235.283-.424-.175-.479-.525-.674-1.073h-1.076c-.194.545-.25.897-.674 1.073-.424.176-.711-.033-1.235-.283l-.762.762c.248.523.458.812.282 1.236-.176.424-.528.479-1.073.673v1.077c.544.193.897.25 1.073.673.177.427-.038.722-.282 1.236l.762.762c.521-.248.812-.458 1.235-.283.424.175.479.526.674 1.073h1.076c.194-.545.25-.897.676-1.074h.001c.421-.175.706.034 1.232.284l.762-.762c-.247-.521-.458-.812-.282-1.235s.529-.481 1.073-.674zm-4 .794c-.736 0-1.333-.597-1.333-1.333s.597-1.333 1.333-1.333 1.333.597 1.333 1.333-.597 1.333-1.333 1.333z\"/></svg></span>\n           Settings\n        </a>\n      </li>\n    </ul>\n  </aside>\n\n"

/***/ }),

/***/ "./src/app/Header/side-nav/side-nav.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Header/side-nav/side-nav.component.ts ***!
  \*******************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideNavComponent = /** @class */ (function () {
    function SideNavComponent() {
        this.toggle = false;
    }
    SideNavComponent.prototype.ngOnInit = function () {
    };
    SideNavComponent.prototype.onToggle = function () {
        this.toggle = !this.toggle;
        console.log(this.toggle);
    };
    SideNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-nav',
            template: __webpack_require__(/*! ./side-nav.component.html */ "./src/app/Header/side-nav/side-nav.component.html"),
            styles: [__webpack_require__(/*! ./side-nav.component.css */ "./src/app/Header/side-nav/side-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/Header/tab-header/tab-header.component.css":
/*!************************************************************!*\
  !*** ./src/app/Header/tab-header/tab-header.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.tab{\n  margin-top: 30px;\n  width: 100%;\n  height: 13vh;\n  border-top: 1px solid #cccccccc;\n  border-bottom: 1px solid #cccccccc;\n}\n.tab-elements{\n  display: flex;\n  margin-left: 100px;\n  height: 100%;\n  width: 30%;\n}\n.tab-elements h2{\n  padding: 20px  50px 0 0;\n  font-weight: 100;\n  font-size: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSGVhZGVyL3RhYi1oZWFkZXIvdGFiLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxtQ0FBbUM7Q0FDcEM7QUFDRDtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFdBQVc7Q0FDWjtBQUNEO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9IZWFkZXIvdGFiLWhlYWRlci90YWItaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50YWJ7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEzdmg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjY2NjY2M7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NjY2M7XG59XG4udGFiLWVsZW1lbnRze1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDMwJTtcbn1cbi50YWItZWxlbWVudHMgaDJ7XG4gIHBhZGRpbmc6IDIwcHggIDUwcHggMCAwO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IDMwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/Header/tab-header/tab-header.component.html":
/*!*************************************************************!*\
  !*** ./src/app/Header/tab-header/tab-header.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab\">\n    <div class=\"tab-elements\">\n        <span>Home > All</span>\n      <h2 routerLink='/Results'>All</h2>\n      <h2  routerLink='/companyResults'>Company</h2>\n      <h2  routerLink='/'>Feed</h2>\n    </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/Header/tab-header/tab-header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Header/tab-header/tab-header.component.ts ***!
  \***********************************************************/
/*! exports provided: TabHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabHeaderComponent", function() { return TabHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabHeaderComponent = /** @class */ (function () {
    function TabHeaderComponent() {
    }
    TabHeaderComponent.prototype.ngOnInit = function () {
    };
    TabHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab-header',
            template: __webpack_require__(/*! ./tab-header.component.html */ "./src/app/Header/tab-header/tab-header.component.html"),
            styles: [__webpack_require__(/*! ./tab-header.component.css */ "./src/app/Header/tab-header/tab-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabHeaderComponent);
    return TabHeaderComponent;
}());



/***/ }),

/***/ "./src/app/HomePage/homepage.service.ts":
/*!**********************************************!*\
  !*** ./src/app/HomePage/homepage.service.ts ***!
  \**********************************************/
/*! exports provided: HomepageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageService", function() { return HomepageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomepageService = /** @class */ (function () {
    function HomepageService(http) {
        this.http = http;
    }
    HomepageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], HomepageService);
    return HomepageService;
}());



/***/ }),

/***/ "./src/app/HomePage/with-login/with-login.component.css":
/*!**************************************************************!*\
  !*** ./src/app/HomePage/with-login/with-login.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".with_login {\n    margin: 0 auto;\n    width: 75%;\n    padding-top: 7%;\n}\n\n.login_user {\n    width: 15%;\n    float: left;\n    box-shadow: 0 5px 5px 5px rgba(25, 25, 25, 0.2);\n}\n\n.user_name {\n    padding: 8px 15px;\n    height: 20px;\n    background-color: #8890A4;\n}\n\n.user_name h2 {\n    font-size: 15px;\n    color: #FAF6F6;\n    margin-top: -2px;\n    float: left;\n}\n\n.user_name span {\n    margin-top: -2px;\n    float: right;\n}\n\n.user_img {\n    width: 40%;\n    MARGIN: 0 AUTO;\n}\n\n.user_img img {\n    width: 100%;\n    MARGIN: 0 AUTO;\n    border-radius: 100%;\n}\n\n.user_details1 {\n    padding: 8px 15px;\n    height: 20px;\n    border-bottom: solid 1px gray;\n}\n\n.user_details1 p {\n    font-size: 15px;\n    color: #707070;\n    margin-top: -2px;\n    float: left;\n}\n\n.user_details1 span {\n    color: #707070;\n    font-size: 12px;\n    margin-top: -2px;\n    float: right;\n}\n\n.user_following {\n    padding: 10px 30px;\n    height: 20px;\n    border-bottom: solid 1px gray;\n}\n\n.user_following p {\n    font-size: 15px;\n    color: #707070;\n    margin-top: -2px;\n    float: left;\n}\n\n.user_following span {\n    color: #707070;\n    font-size: 12px;\n    margin-top: -2px;\n    float: right;\n}\n\n.feeds {\n    width: 60%;\n    float: left;\n    padding: 0 21px;\n}\n\n.add_feed {\n    border-radius: 24px 22px 0 0px;\n    width: 11%;\n    margin: 0 10px;\n    padding: 9px 22px;\n    height: 20px;\n    background-color: #8890A4;\n    color: #FDF9F9;\n}\n\n.about_feed {\n    margin: 0 10px;\n    box-shadow: 0px 5px 5px rgba(25, 25, 25, 0.2);\n    border: solid 1px gray;\n}\n\n.about_feed1 {\n    color: #707070;\n    padding: 7px 20px;\n    text-align: justify;\n    font-size: 12px;\n    line-height: 20px;\n}\n\n.add_media {\n    padding: 15px 26px;\n    height: 20px;\n    background-color: #F5F5F5;\n}\n\n.add_media h2 {\n    font-size: 27px;\n    color: #707070;\n    margin-top: -10px;\n    float: left;\n    font-weight: 500;\n}\n\n.add_media span {\n    font-size: 12px;\n    float: right;\n    color: #707070;\n}\n\n.company_industry {\n    height: 216px;\n    border: solid 1px gray;\n    width: 15%;\n    float: left;\n}\n\n/* border: 1px solid #cccccc;\n .search-bar{\n  width: 95%;\n  display: flex;\n} */\n\n/* .search-container {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  margin-top: 120px;\n  z-index: -1;\n}\n\n\ninput#search-bar {\n  margin: 0 auto;\n  width: 100%;\n  height: 13vh;\n  padding: 0px 45px;\n  font-size: 3rem;\n  border: 1px solid #D0CFCE;\n  outline: none;\n  border-radius: 20px 0 0 20px;\n  outline: none;\n}\ninput#search-bar:focus {\n  transition: 0.35s ease;\n}\ninput#search-bar:focus::-webkit-input-placeholder {\n  transition: opacity 0.45s ease;\n  opacity: 0;\n}\ninput#search-bar:focus::-moz-placeholder {\n  transition: opacity 0.45s ease;\n  opacity: 0;\n}\ninput#search-bar:focus:-ms-placeholder {\n  transition: opacity 0.45s ease;\n  opacity: 0;\n} */\n\nsection {\n    width: 65%;\n    margin: 0 auto;\n    margin-top: 5%;\n}\n\n.feed {\n    width: 100%;\n    height: 490px;\n    display: block;\n    margin-right: auto;\n    border: 1px solid #cccccc;\n}\n\n.authorInfo {\n    width: 100%;\n    display: flex;\n}\n\n.details {\n    width: 70%;\n    height: auto;\n    display: flex;\n}\n\n.logo {\n    width: 20%;\n    height: 100%;\n    background-color: black;\n}\n\n.logo img {\n    width: 100%;\n    height: 100%;\n}\n\n.details h1 {\n    margin: 0;\n    padding: 5px 0 0 15px;\n    font-weight: 500;\n    font-size: 20px;\n}\n\n.details p {\n    padding: 0px 0 0 15px !important;\n    font-size: 10px;\n}\n\n.feedInfo {\n    width: 95%;\n    margin: 0 auto;\n    height: 15%;\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);\n    border-radius: 5px 5px 0 0;\n    margin-top: 20px;\n}\n\n.feedInfo p {\n    font-size: 12px;\n    margin: 0;\n    margin-top: 5px;\n    margin-bottom: 30px;\n    width: 95%;\n    margin: 0 auto;\n    padding-top: 10px;\n}\n\n.followBtn {\n    width: 25%;\n    height: auto;\n    float: right;\n    text-align: right;\n}\n\n.followBtn button {\n    width: 80%;\n    margin-top: 10px;\n    background-color: green;\n    color: #ffffff;\n    font-weight: 600;\n    height: 25px;\n    border-radius: 15px;\n    border: none;\n    margin-left: 10px;\n}\n\n.followBtn p {\n    align-items: baseline;\n    text-align: right;\n    margin-right: 10px;\n    margin-bottom: 0;\n    font-size: 10px;\n}\n\n.feed-img {\n    width: 100%;\n    height: 60%;\n}\n\n.feed-img img {\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n}\n\n.feed-share {\n    width: 100%;\n    height: 7%;\n    /* background-color: burlywood; */\n    display: block;\n    padding-top: 1%;\n    display: flex;\n}\n\n.feed-share img\n{\n  width: 4%;\n  margin-left: 1%;\n\n}\n\n.tagged {\n    width: 100%;\n    height: 7%;\n}\n\nmat-expansion-panel {\n    border-radius: 0 !important;\n    background-color: #707070;\n}\n\nmat-expansion-panel {\n    /* box-shadow: 0 0 0 0!important; */\n}\n\n.tagged mat-expansion-panel-header {\n    height: 35px !important;\n    color: #ffffff !important;\n}\n\nmat-panel-title h4 {\n    margin: 0;\n    font-size: 14px;\n    font-weight: 100;\n}\n\n@media screen and (max-width:700px) {\n    .company_industry,\n    .login_user {\n        display: none;\n    }\n    .with_login {\n        width: 100%;\n        margin: 0px;\n        padding-top: 18%;\n    }\n    .feeds {\n        width: 100%;\n        padding: 0px;\n    }\n    .add_media h2 {\n        font-size: 15px;\n        margin-top: -5px;\n    }\n    .add_media span {\n        font-size: 10px;\n    }\n    .add_feed {\n        font-size: 11px;\n        width: 12%;\n    }\n    section {\n        width: 95%;\n    }\n    .followBtn button {\n        width: 100%;\n        font-size: 8px;\n    }\n    .followBtn p {\n        margin-right: 0;\n    }\n    .details h1 {\n        font-size: 15px;\n    }\n    .details p {\n        font-size: 8px;\n    }\n    .feedInfo p {\n        font-size: 10px;\n        line-height: 15px;\n    }\n    mat-panel-title h4 {\n        font-size: 11px;\n    }\n}\n\n@media screen and (min-width: 767px) and (max-width: 1024px) {\n    .login_user {\n        width: 26%;\n    }\n    .with_login {\n        margin: 0 auto;\n        width: 75%;\n        padding-top: 9%;\n        margin-left: 10%;\n    }\n    .user_name h2 {\n        font-size: 15px;\n        color: #FAF6F6;\n        margin-top: -2px;\n        float: left;\n    }\n    .company_industry {\n        width: 25%;\n    }\n    .feeds {\n        width: 48%;\n        padding: 0px;\n    }\n    .add_media h2 {\n        font-size: 15px;\n        margin-top: -5px;\n    }\n    .add_media span {\n        font-size: 10px;\n    }\n    .add_feed {\n        font-size: 15px;\n        width: 21%;\n    }\n    section {\n        width: 95%;\n    }\n    .followBtn button {\n        width: 100%;\n        font-size: 8px;\n    }\n    .followBtn p {\n        margin-right: 0;\n    }\n    .details h1 {\n        font-size: 15px;\n    }\n    .details p {\n        font-size: 8px;\n    }\n    .feedInfo p {\n        font-size: 10px;\n        line-height: 15px;\n    }\n    mat-panel-title h4 {\n        font-size: 11px;\n    }\n}\n\n@media screen and (min-width: 700px) and (max-width: 1440px) {\n    .with_login {\n        width: 85%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZVBhZ2Uvd2l0aC1sb2dpbi93aXRoLWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0RBQWdEO0NBQ25EOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDhCQUE4QjtDQUNqQzs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDhCQUE4QjtDQUNqQzs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLCtCQUErQjtJQUMvQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsOENBQThDO0lBQzlDLHVC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ZUFBZTtLQUNsQjtJQUNEO1FBQ0ksZ0JBQWdCO1FBQ2hCLGtCQUFrQjtLQUNyQjtJQUNEO1FBQ0ksZ0JBQWdCO0tBQ25CO0NBQ0o7O0FBRUQ7SUFDSTtRQUNJLFdBQVc7S0FDZDtJQUNEO1FBQ0ksZUFBZTtRQUNmLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsaUJBQWlCO0tBQ3BCO0lBQ0Q7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixZQUFZO0tBQ2Y7SUFDRDtRQUNJLFdBQVc7S0FDZDtJQUNEO1FBQ0ksV0FBVztRQUNYLGFBQWE7S0FDaEI7SUFDRDtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7S0FDcEI7SUFDRDtRQUNJLGdCQUFnQjtLQUNuQjtJQUNEO1FBQ0ksZ0JBQWdCO1FBQ2hCLFdBQVc7S0FDZDtJQUNEO1FBQ0ksV0FBVztLQUNkO0lBQ0Q7UUFDSSxZQUFZO1FBQ1osZUFBZTtLQUNsQjtJQUNEO1FBQ0ksZ0JBQWdCO0tBQ25CO0lBQ0Q7UUFDSSxnQkFBZ0I7S0FDbkI7SUFDRDtRQUNJLGVBQWU7S0FDbEI7SUFDRDtRQUNJLGdCQUFnQjtRQUNoQixrQkFBa0I7S0FDckI7SUFDRDtRQUNJLGdCQUFnQjtLQUNuQjtDQUNKOztBQUVEO0lBQ0k7UUFDSSxXQUFXO0tBQ2Q7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL0hvbWVQYWdlL3dpdGgtbG9naW4vd2l0aC1sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpdGhfbG9naW4ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgcGFkZGluZy10b3A6IDclO1xufVxuXG4ubG9naW5fdXNlciB7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggNXB4IHJnYmEoMjUsIDI1LCAyNSwgMC4yKTtcbn1cblxuLnVzZXJfbmFtZSB7XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODkwQTQ7XG59XG5cbi51c2VyX25hbWUgaDIge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogI0ZBRjZGNjtcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4udXNlcl9uYW1lIHNwYW4ge1xuICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udXNlcl9pbWcge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgTUFSR0lOOiAwIEFVVE87XG59XG5cbi51c2VyX2ltZyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIE1BUkdJTjogMCBBVVRPO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi51c2VyX2RldGFpbHMxIHtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGdyYXk7XG59XG5cbi51c2VyX2RldGFpbHMxIHAge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4udXNlcl9kZXRhaWxzMSBzcGFuIHtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLXRvcDogLTJweDtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi51c2VyX2ZvbGxvd2luZyB7XG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggZ3JheTtcbn1cblxuLnVzZXJfZm9sbG93aW5nIHAge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4udXNlcl9mb2xsb3dpbmcgc3BhbiB7XG4gICAgY29sb3I6ICM3MDcwNzA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZmVlZHMge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMCAyMXB4O1xufVxuXG4uYWRkX2ZlZWQge1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHggMjJweCAwIDBweDtcbiAgICB3aWR0aDogMTElO1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIHBhZGRpbmc6IDlweCAyMnB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg5MEE0O1xuICAgIGNvbG9yOiAjRkRGOUY5O1xufVxuXG4uYWJvdXRfZmVlZCB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggcmdiYSgyNSwgMjUsIDI1LCAwLjIpO1xuICAgIGJvcmRlcjogc29saWQgMXB4IGdyYXk7XG59XG5cbi5hYm91dF9mZWVkMSB7XG4gICAgY29sb3I6ICM3MDcwNzA7XG4gICAgcGFkZGluZzogN3B4IDIwcHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5hZGRfbWVkaWEge1xuICAgIHBhZGRpbmc6IDE1cHggMjZweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuLmFkZF9tZWRpYSBoMiB7XG4gICAgZm9udC1zaXplOiAyN3B4O1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5hZGRfbWVkaWEgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogIzcwNzA3MDtcbn1cblxuLmNvbXBhbnlfaW5kdXN0cnkge1xuICAgIGhlaWdodDogMjE2cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JheTtcbiAgICB3aWR0aDogMTUlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG5cbi8qIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gLnNlYXJjaC1iYXJ7XG4gIHdpZHRoOiA5NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG59ICovXG5cblxuLyogLnNlYXJjaC1jb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMTIwcHg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG5cbmlucHV0I3NlYXJjaC1iYXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTN2aDtcbiAgcGFkZGluZzogMHB4IDQ1cHg7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0QwQ0ZDRTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAwIDAgMjBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmlucHV0I3NlYXJjaC1iYXI6Zm9jdXMge1xuICB0cmFuc2l0aW9uOiAwLjM1cyBlYXNlO1xufVxuaW5wdXQjc2VhcmNoLWJhcjpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40NXMgZWFzZTtcbiAgb3BhY2l0eTogMDtcbn1cbmlucHV0I3NlYXJjaC1iYXI6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNDVzIGVhc2U7XG4gIG9wYWNpdHk6IDA7XG59XG5pbnB1dCNzZWFyY2gtYmFyOmZvY3VzOi1tcy1wbGFjZWhvbGRlciB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40NXMgZWFzZTtcbiAgb3BhY2l0eTogMDtcbn0gKi9cblxuc2VjdGlvbiB7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmZlZWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDkwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG59XG5cbi5hdXRob3JJbmZvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGV0YWlscyB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmxvZ28ge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4ubG9nbyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmRldGFpbHMgaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiA1cHggMCAwIDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5kZXRhaWxzIHAge1xuICAgIHBhZGRpbmc6IDBweCAwIDAgMTVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmZlZWRJbmZvIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGhlaWdodDogMTUlO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uZmVlZEluZm8gcCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uZm9sbG93QnRuIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5mb2xsb3dCdG4gYnV0dG9uIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5mb2xsb3dCdG4gcCB7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmZlZWQtaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwJTtcbn1cblxuLmZlZWQtaW1nIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5mZWVkLXNoYXJlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDclO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDsgKi9cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLXRvcDogMSU7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5mZWVkLXNoYXJlIGltZ1xue1xuICB3aWR0aDogNCU7XG4gIG1hcmdpbi1sZWZ0OiAxJTtcblxufVxuXG4udGFnZ2VkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDclO1xufVxuXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDtcbn1cblxubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgLyogYm94LXNoYWRvdzogMCAwIDAgMCFpbXBvcnRhbnQ7ICovXG59XG5cbi50YWdnZWQgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1wYW5lbC10aXRsZSBoNCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjcwMHB4KSB7XG4gICAgLmNvbXBhbnlfaW5kdXN0cnksXG4gICAgLmxvZ2luX3VzZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAud2l0aF9sb2dpbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDE4JTtcbiAgICB9XG4gICAgLmZlZWRzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG4gICAgLmFkZF9tZWRpYSBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICB9XG4gICAgLmFkZF9tZWRpYSBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbiAgICAuYWRkX2ZlZWQge1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIHdpZHRoOiAxMiU7XG4gICAgfVxuICAgIHNlY3Rpb24ge1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgIH1cbiAgICAuZm9sbG93QnRuIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICB9XG4gICAgLmZvbGxvd0J0biBwIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgICAuZGV0YWlscyBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gICAgLmRldGFpbHMgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIH1cbiAgICAuZmVlZEluZm8gcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgfVxuICAgIG1hdC1wYW5lbC10aXRsZSBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLmxvZ2luX3VzZXIge1xuICAgICAgICB3aWR0aDogMjYlO1xuICAgIH1cbiAgICAud2l0aF9sb2dpbiB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICBwYWRkaW5nLXRvcDogOSU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgfVxuICAgIC51c2VyX25hbWUgaDIge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGNvbG9yOiAjRkFGNkY2O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG4gICAgLmNvbXBhbnlfaW5kdXN0cnkge1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgIH1cbiAgICAuZmVlZHMge1xuICAgICAgICB3aWR0aDogNDglO1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICAgIC5hZGRfbWVkaWEgaDIge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgfVxuICAgIC5hZGRfbWVkaWEgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG4gICAgLmFkZF9mZWVkIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB3aWR0aDogMjElO1xuICAgIH1cbiAgICBzZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICB9XG4gICAgLmZvbGxvd0J0biBidXR0b24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgfVxuICAgIC5mb2xsb3dCdG4gcCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gICAgLmRldGFpbHMgaDEge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICAgIC5kZXRhaWxzIHAge1xuICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICB9XG4gICAgLmZlZWRJbmZvIHAge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIH1cbiAgICBtYXQtcGFuZWwtdGl0bGUgaDQge1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAgIC53aXRoX2xvZ2luIHtcbiAgICAgICAgd2lkdGg6IDg1JTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/HomePage/with-login/with-login.component.html":
/*!***************************************************************!*\
  !*** ./src/app/HomePage/with-login/with-login.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<app-side-nav ></app-side-nav>\n<app-header></app-header>\n<!-- <app-side-nav></app-side-nav>\n<app-header style=\"position:fixed\"></app-header>\n<app-s-page-header-search></app-s-page-header-search> -->\n<!-- <app-s-page-header></app-s-page-header> -->\n <div class=\"with_login\">\n  <div class=\"login_user\">\n    <div class=\"user_name\">\n      <h2 >User Name</h2>\n      <span ><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22.678\" height=\"24.478\" viewBox=\"0 0 22.678 24.478\" >\n        <g id=\"edit\" transform=\"translate(-546.942 -212.818)\" >\n          <g id=\"Path_360\" data-name=\"Path 360\" transform=\"translate(564.742 212.818) rotate(42)\" fill=\"#8890A4\"   stroke-linecap=\"round\">\n            <path d=\"M 4.564501762390137 23.57025909423828 L 2.000001668930054 23.57025909423828 C 0.7405316233634949 23.57025909423828 0.6362316012382507 23.1402587890625 0.6362316012382507 22.66120910644531 L 0.4999915957450867 1.996699571609497 C 0.5000016093254089 1.172899603843689 1.172901630401611 0.4999995529651642 2.000001668930054 0.4999995529651642 L 4.564501762390137 0.4999995529651642 C 5.3916015625 0.4999995529651642 6.064501762390137 1.172899603843689 6.064501762390137 1.999999523162842 L 5.883201599121094 22.78681945800781 C 5.883181571960449 23.271240234375 5.718381404876709 23.36581993103027 5.639171600341797 23.41127967834473 C 5.393641471862793 23.55218887329102 4.935871601104736 23.57025909423828 4.564501762390137 23.57025909423828 Z\" stroke=\"none\"/>\n            <path d=\"M 2.000001430511475 1 C 1.449577808380127 1 1.001590251922607 1.447044372558594 1.000005722045898 1.997102737426758 L 1.136211395263672 22.65461921691895 L 1.136231422424316 22.65790939331055 L 1.136231422424316 22.66120910644531 C 1.136231422424316 22.7505989074707 1.1446213722229 22.90604972839355 1.200821399688721 22.9427604675293 C 1.259501457214355 22.98110008239746 1.454841613769531 23.07025909423828 2.000001430511475 23.07025909423828 L 4.564501762390137 23.07025909423828 C 5.097259998321533 23.07025909423828 5.295174598693848 23.01947402954102 5.364688396453857 22.99041175842285 C 5.372547626495361 22.9588737487793 5.383181571960449 22.89670181274414 5.383181571960449 22.79117965698242 L 5.383181571960449 22.78681945800781 L 5.383221626281738 22.7824592590332 L 5.56449556350708 1.996555328369141 C 5.562639236450195 1.446727752685547 5.114757537841797 1 4.564501762390137 1 L 2.000001430511475 1 M 2.000001430511475 0 L 4.564501762390137 0 C 5.669071674346924 0 6.564501762390137 0.8954296112060547 6.564501762390137 2 L 6.383181571960449 22.79117965698242 C 6.383181571960449 23.89575004577637 5.669071674346924 24.07025909423828 4.564501762390137 24.07025909423828 L 2.000001430511475 24.07025909423828 C 0.8954315185546875 24.07025909423828 0.1362314224243164 23.76577949523926 0.1362314224243164 22.66120910644531 L 1.430511474609375e-06 2 C 1.430511474609375e-06 0.8954296112060547 0.8954315185546875 0 2.000001430511475 0 Z\" stroke=\"none\" fill=\"#a5a4bf\"/>\n          </g>\n          <path id=\"Path_359\" data-name=\"Path 359\" d=\"M2090.028-116.6l-.076.285-1.961,5.688,2.394-1.061,3.525-1.446\" transform=\"translate(-1540.202 347)\" fill=\"none\" stroke=\"#a5a4bf\" stroke-width=\"1\"/>\n          <path id=\"Path_361\" data-name=\"Path 361\" d=\"M2088.635-112.306l.683.817Z\" transform=\"translate(-1540 347)\" fill=\"none\" stroke=\"red\" d=\"M5 20 l215 0\"  stroke-width=\"1\"/>\n        </g>\n      </svg>\n      </span>\n    </div>\n    <div class=\"user_img\">\n        <img src=\"assets/images/user_img.jpg\"  >\n    </div>\n    <div class=\"user_details\">\n        <div class=\"user_details1\">\n            <p >{{username}}</p>\n            <span >{{location}}</span>\n          </div>\n          <div class=\"user_following\" routerLink=\"/Following\">\n              <p >Following</p>\n              <span >{{following}}</span>\n            </div>\n            <div class=\"user_following\" routerLink = \"/bookmark\">\n                <p >Bookmark</p>\n                <span >{{bookmark}}</span>\n              </div>\n      </div>\n      <button type=\"button\"(click)= \"onLogout()\">Logout</button>\n  </div>\n  <div class=\"feeds\">\n       <p class=\"add_feed\">Add Feed</p>\n      <div class=\"about_feed\">\n        <div class=\"about_feed1\">\n        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus tincidunt purus et consequat. Nam nibh ipsum, blandit sed commodo in, hendrerit vel arcu. Mauris ultrices eros ut nisi varius tincidunt. Donec convallis sed libero ut facilisis. Vivamus efficitur ex est, quis ultrices magna blandit a. Vestibulum id sapien sagittis, aliquam mi et, finibus est. Proin lobortis, velit non pharetra viverra.</span>\n         </div>\n        <div class=\"add_media\">\n         <div class=\"add_media1\">\n          <h2>Add Media</h2>\n          </div>\n          <div class=\"add_media1\">\n          <span>\"will be added as(company name)\"</span>\n        </div>\n        </div>\n      </div>\n<section>\n\n\n<div class=\"feed\">\n<div class=\"authorInfo\">\n<div class=\"details\">\n  <div class=\"logo\">\n    <img src=\"https://picsum.photos/500/300/?random\">\n  </div>\n  <div class=\"info\">\n <h1>Company Name</h1>\n <p style=\"line-height: 0px;margin-bottom: 12px;margin-top: 5px;\">Industry</p>\n <p style=\"line-height: 3px;margin-bottom: 10px;\">Location</p>\n</div>\n</div>\n<div class=\"followBtn\" >\n <button >Following<span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20%\" height=\"50%\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z\"/></svg></span></button>\n <p>34,342 followers</p>\n</div>\n</div>\n<div class=\"feedInfo\">\n  <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content </p>\n</div>\n<div class=\"feed-img\">\n<img src=\"https://picsum.photos/500/300/?random\">\n</div>\n<div class=\"feed-share\">\n    <p  style=\"padding: 4px; margin: 0; display: flex;width: 100%;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"  viewBox=\"0 0 24 24\"><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg><span><b style=\"margin-left: 5px;\">24,244</b></span></p>\n    <p style=\" padding: 0; margin:4px 0;     margin-right: 10px;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M16 15v4l8-8.035-8-7.965v4s-13.277 2.144-16 14c5.796-6.206 16-6 16-6z\"/></svg></p>\n    </div>\n<div class=\"tagged\">\n   <mat-expansion-panel style=\"background-color:white;\">\n       <mat-expansion-panel-header style=\"background-color: #6E7892;\">\n         <mat-panel-title >\n          <h4 style=\"  color: #fff\">Tagged Products</h4>\n         </mat-panel-title>\n       </mat-expansion-panel-header>\n\n       <p>This is the primary content of the panel.</p>\n\n     </mat-expansion-panel>\n</div>\n</div>\n\n</section>\n    </div>\n\n    <div class=\"company_industry\">\n        <div class=\"explore_industry\">\n            <div class=\"user_name\">\n      <h2 >User Name</h2>\n      <span ><span ><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22.678\" enable-background=\"red\" height=\"24.478\" viewBox=\"0 0 22.678 24.478\" >\n        <g id=\"edit\" transform=\"translate(-546.942 -212.818)\"  >\n          <g id=\"Path_360\" data-name=\"Path 360\" transform=\"translate(564.742 212.818) rotate(42)\" stroke=\"red\" stroke-width=\"4\"  stroke-linecap=\"round\">\n            <path d=\"M 4.564501762390137 23.57025909423828 L 2.000001668930054 23.57025909423828 C 0.7405316233634949 23.57025909423828 0.6362316012382507 23.1402587890625 0.6362316012382507 22.66120910644531 L 0.4999915957450867 1.996699571609497 C 0.5000016093254089 1.172899603843689 1.172901630401611 0.4999995529651642 2.000001668930054 0.4999995529651642 L 4.564501762390137 0.4999995529651642 C 5.3916015625 0.4999995529651642 6.064501762390137 1.172899603843689 6.064501762390137 1.999999523162842 L 5.883201599121094 22.78681945800781 C 5.883181571960449 23.271240234375 5.718381404876709 23.36581993103027 5.639171600341797 23.41127967834473 C 5.393641471862793 23.55218887329102 4.935871601104736 23.57025909423828 4.564501762390137 23.57025909423828 Z\" stroke=\"none\"/>\n            <path d=\"M 2.000001430511475 1 C 1.449577808380127 1 1.001590251922607 1.447044372558594 1.000005722045898 1.997102737426758 L 1.136211395263672 22.65461921691895 L 1.136231422424316 22.65790939331055 L 1.136231422424316 22.66120910644531 C 1.136231422424316 22.7505989074707 1.1446213722229 22.90604972839355 1.200821399688721 22.9427604675293 C 1.259501457214355 22.98110008239746 1.454841613769531 23.07025909423828 2.000001430511475 23.07025909423828 L 4.564501762390137 23.07025909423828 C 5.097259998321533 23.07025909423828 5.295174598693848 23.01947402954102 5.364688396453857 22.99041175842285 C 5.372547626495361 22.9588737487793 5.383181571960449 22.89670181274414 5.383181571960449 22.79117965698242 L 5.383181571960449 22.78681945800781 L 5.383221626281738 22.7824592590332 L 5.56449556350708 1.996555328369141 C 5.562639236450195 1.446727752685547 5.114757537841797 1 4.564501762390137 1 L 2.000001430511475 1 M 2.000001430511475 0 L 4.564501762390137 0 C 5.669071674346924 0 6.564501762390137 0.8954296112060547 6.564501762390137 2 L 6.383181571960449 22.79117965698242 C 6.383181571960449 23.89575004577637 5.669071674346924 24.07025909423828 4.564501762390137 24.07025909423828 L 2.000001430511475 24.07025909423828 C 0.8954315185546875 24.07025909423828 0.1362314224243164 23.76577949523926 0.1362314224243164 22.66120910644531 L 1.430511474609375e-06 2 C 1.430511474609375e-06 0.8954296112060547 0.8954315185546875 0 2.000001430511475 0 Z\" stroke=\"none\" fill=\"#a5a4bf\"/>\n          </g>\n          <path id=\"Path_359\" data-name=\"Path 359\" d=\"M2090.028-116.6l-.076.285-1.961,5.688,2.394-1.061,3.525-1.446\" transform=\"translate(-1540.202 347)\" fill=\"none\" stroke=\"#a5a4bf\" stroke-width=\"1\"/>\n          <path id=\"Path_361\" data-name=\"Path 361\" d=\"M2088.635-112.306l.683.817Z\" transform=\"translate(-1540 347)\" fill=\"none\" stroke=\"red\" d=\"M5 20 l215 0\"  stroke-width=\"1\"/>\n        </g>\n      </svg>\n      </span></span>\n        </div>\n    </div>\n\n\n</div>\n\n</div>\n\n\n\n\n\n</body>\n"

/***/ }),

/***/ "./src/app/HomePage/with-login/with-login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/HomePage/with-login/with-login.component.ts ***!
  \*************************************************************/
/*! exports provided: WithLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithLoginComponent", function() { return WithLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_user_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Service/user-services.service */ "./src/app/Service/user-services.service.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _homepage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../homepage.service */ "./src/app/HomePage/homepage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Auth_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Auth/auth-service.service */ "./src/app/Auth/auth-service.service.ts");
/* harmony import */ var src_app_Service_follow_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Service/follow-service.service */ "./src/app/Service/follow-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var WithLoginComponent = /** @class */ (function () {
    function WithLoginComponent(userService, storage, homeService, router, authService, followers) {
        var _this = this;
        this.userService = userService;
        this.storage = storage;
        this.homeService = homeService;
        this.router = router;
        this.authService = authService;
        this.followers = followers;
        this.show = false;
        this.userService.token = this.storage.get('token');
        this.userService.getUserData().subscribe(function (res) {
            console.log(JSON.parse(res['_body']));
            _this.username = JSON.parse(res['_body']).UserName;
            _this.location = JSON.parse(res['_body']).Location;
            _this.following = JSON.parse(res['_body']).Following.company.length;
            _this.bookmark = JSON.parse(res['_body']).bookmarks.company.length + JSON.parse(res['_body']).bookmarks.post.length + JSON.parse(res['_body']).bookmarks.product.length + JSON.parse(res['_body']).bookmarks.service.length;
        });
    }
    WithLoginComponent.prototype.ngOnInit = function () {
        // this.followers.token=this.storage.get('token');
        // this.followers.getFollowers().subscribe(res=>{
        //   console.log(res);
        // })
    };
    WithLoginComponent.prototype.onLogout = function () {
        this.storage.remove('token');
        this.router.navigate(['/']);
    };
    WithLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-with-login',
            template: __webpack_require__(/*! ./with-login.component.html */ "./src/app/HomePage/with-login/with-login.component.html"),
            styles: [__webpack_require__(/*! ./with-login.component.css */ "./src/app/HomePage/with-login/with-login.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [_Service_user_services_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["WebStorageService"],
            _homepage_service__WEBPACK_IMPORTED_MODULE_3__["HomepageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _Auth_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthServiceService"], src_app_Service_follow_service_service__WEBPACK_IMPORTED_MODULE_6__["FollowService"]])
    ], WithLoginComponent);
    return WithLoginComponent;
}());



/***/ }),

/***/ "./src/app/HomePage/without-login/without-login.component.css":
/*!********************************************************************!*\
  !*** ./src/app/HomePage/without-login/without-login.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".homepage{\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n background-image: url(\"https://image.freepik.com/free-photo/portrait-of-young-businessman-pointing-at-something-looking-up_23-2147847521.jpg\") ;\n background-size: 50% 100%;\n background-repeat: no-repeat;\n}\n.header{\n  width: 100%;\n  height: 15vh;\n}\n.nav{\n  width: 100%;\n  height: 8vh;\n}\n.side-nav{\n  width: 12.5%;\n  height: 3vh;\n\n  float: right;\n  display: flex;\n}\n.side-nav a, .side-nav select{\n  text-decoration: none;\n  width: 48%;\n  vertical-align: middle;\n  font-weight: bolder;\n  color: #333333;\n  border: none;\n  outline: none;\n  cursor: pointer;\n}\n.side-nav select{\n  background-color: transparent;\n}\n.side-nav a{\n  border-right: 1px solid #333333;\n  width: 35%;\n}\n.left-nav{\n  width: 30%;\n  height: 100%;\n}\n.menu{\n  width: 3%;\n  height: 5vh;\n  background-color: aqua;\n  margin-top: 30px;\n  position: absolute;\n  margin-left: 20px;\n}\n.header-bottom{\n  width: 55%;\n  height: 7vh;\n  display: flex;\n  float: right;\n  border-bottom: 2px solid #2222;\n}\n.header-bottom-elements{\n  width: auto;\n  height: 100%;\n  margin-left: 20px;\n\n}\n.header-bottom-elements button h2{\n  font-size: 25px;\n}\n.header-bottom-elements button{\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n}\nsection{\n  width: 45%;\n  height: 30%;\n  margin-top: 20px;\n  margin-right: 7%;\n  float: right;\n}\n.search .text{\n  width: 40%;\n  height: 15%;\n  position: absolute;\n}\n.search .text p{\n  padding: 0;\n  margin: 0;\n  font-size: 25px;\n  word-spacing: 2px;\n  line-height: 40px;\n}\n.search-bar{\n  width: 45%;\n  height: 8%;\n  position: absolute;\n  margin-top: 10%;\n}\n/* <-----------------MENU-------------------> */\n/* <-----------------SEARCH-------------------> */\n.search-container {\n  width: 490px;\n  display: block;\n\n}\ninput#search-bar {\n  margin: 0 auto;\n  width: 100%;\n  height: 45px;\n  padding: 0px 45px;\n  font-size: 1rem;\n  border: 1px solid #D0CFCE;\n  outline: none;\n  border-radius: 6px 0 0 6px;\n  outline: none;\n}\ninput#search-bar:focus {\n  transition: 0.35s ease;\n}\ninput#search-bar:focus::-webkit-input-placeholder {\n  transition: opacity 0.45s ease;\n  opacity: 0;\n}\ninput#search-bar:focus::-moz-placeholder {\n  transition: opacity 0.45s ease;\n  opacity: 0;\n}\ninput#search-bar:focus:-ms-placeholder {\n  transition: opacity 0.45s ease;\n  opacity: 0;\n}\n.search-icon {\n  position: relative;\n  float: left;\n  width: 75px;\n  height: 75px;\n  top: -62px;\n  right: 15px;\n}\n.search-container button{\n  position: relative;\n  padding: 0;\n  margin: 0;\n  float: right;\n  margin-right: -41%;\n  height: 47px;\n  width: 120px;\n  margin-top: -47px;\n  border: none;\n  cursor: pointer;\n  border-radius: 0 6px 6px 0;\n}\n.search-container button select {\n  width: 120px;\n  margin-right: 10px;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  text-align: center;\n  outline: none;\n  border-radius: 0 6px 6px 0;\n  padding: 0 40px;\n  font-size: 16px;\n  background-color: #44444444;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZVBhZ2Uvd2l0aG91dC1sb2dpbi93aXRob3V0LWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLFVBQVU7RUFDVixXQUFXO0VBQ1gsdUVBQXVFO0NBQ3hFLGdKQUFnSjtDQUNoSiwwQkFBMEI7Q0FDMUIsNkJBQTZCO0NBQzdCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtDQUNkO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osWUFBWTtDQUNiO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsWUFBWTs7RUFFWixhQUFhO0VBQ2IsY0FBYztDQUNmO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSw4QkFBOEI7Q0FDL0I7QUFDRDtFQUNFLGdDQUFnQztFQUNoQyxXQUFXO0NBQ1o7QUFDRDtFQUNFLFdBQVc7RUFDWCxhQUFhO0NBQ2Q7QUFDRDtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxhQUFhO0VBQ2IsK0JBQStCO0NBQ2hDO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjs7Q0FFbkI7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0NBQy9CO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCO0FBQ0QsZ0RBQWdEO0FBQ2hELGtEQUFrRDtBQUVsRDtFQUNFLGFBQWE7RUFDYixlQUFlOztDQUVoQjtBQUVEO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLDJCQUEyQjtFQUMzQixjQUFjO0NBQ2Y7QUFDRDtFQUNFLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0UsK0JBQStCO0VBQy9CLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsK0JBQStCO0VBQy9CLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsK0JBQStCO0VBQy9CLFdBQVc7Q0FDWjtBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0NBQ2I7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiwyQkFBMkI7Q0FDNUI7QUFDRDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFdBQVc7RUFDWCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiw0QkFBNEI7Q0FDN0IiLCJmaWxlIjoic3JjL2FwcC9Ib21lUGFnZS93aXRob3V0LWxvZ2luL3dpdGhvdXQtbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lcGFnZXtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XG4gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pbWFnZS5mcmVlcGlrLmNvbS9mcmVlLXBob3RvL3BvcnRyYWl0LW9mLXlvdW5nLWJ1c2luZXNzbWFuLXBvaW50aW5nLWF0LXNvbWV0aGluZy1sb29raW5nLXVwXzIzLTIxNDc4NDc1MjEuanBnXCIpIDtcbiBiYWNrZ3JvdW5kLXNpemU6IDUwJSAxMDAlO1xuIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uaGVhZGVye1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNXZoO1xufVxuLm5hdntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOHZoO1xufVxuLnNpZGUtbmF2e1xuICB3aWR0aDogMTIuNSU7XG4gIGhlaWdodDogM3ZoO1xuXG4gIGZsb2F0OiByaWdodDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5zaWRlLW5hdiBhLCAuc2lkZS1uYXYgc2VsZWN0e1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdpZHRoOiA0OCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zaWRlLW5hdiBzZWxlY3R7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnNpZGUtbmF2IGF7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzMzMzM7XG4gIHdpZHRoOiAzNSU7XG59XG4ubGVmdC1uYXZ7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tZW51e1xuICB3aWR0aDogMyU7XG4gIGhlaWdodDogNXZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmhlYWRlci1ib3R0b217XG4gIHdpZHRoOiA1NSU7XG4gIGhlaWdodDogN3ZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjIyMjtcbn1cbi5oZWFkZXItYm90dG9tLWVsZW1lbnRze1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMjBweDtcblxufVxuLmhlYWRlci1ib3R0b20tZWxlbWVudHMgYnV0dG9uIGgye1xuICBmb250LXNpemU6IDI1cHg7XG59XG4uaGVhZGVyLWJvdHRvbS1lbGVtZW50cyBidXR0b257XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5zZWN0aW9ue1xuICB3aWR0aDogNDUlO1xuICBoZWlnaHQ6IDMwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA3JTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnNlYXJjaCAudGV4dHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiAxNSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5zZWFyY2ggLnRleHQgcHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHdvcmQtc3BhY2luZzogMnB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cbi5zZWFyY2gtYmFye1xuICB3aWR0aDogNDUlO1xuICBoZWlnaHQ6IDglO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cbi8qIDwtLS0tLS0tLS0tLS0tLS0tLU1FTlUtLS0tLS0tLS0tLS0tLS0tLS0tPiAqL1xuLyogPC0tLS0tLS0tLS0tLS0tLS0tU0VBUkNILS0tLS0tLS0tLS0tLS0tLS0tLT4gKi9cblxuLnNlYXJjaC1jb250YWluZXIge1xuICB3aWR0aDogNDkwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG59XG5cbmlucHV0I3NlYXJjaC1iYXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDVweDtcbiAgcGFkZGluZzogMHB4IDQ1cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0QwQ0ZDRTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4IDAgMCA2cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5pbnB1dCNzZWFyY2gtYmFyOmZvY3VzIHtcbiAgdHJhbnNpdGlvbjogMC4zNXMgZWFzZTtcbn1cbmlucHV0I3NlYXJjaC1iYXI6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNDVzIGVhc2U7XG4gIG9wYWNpdHk6IDA7XG59XG5pbnB1dCNzZWFyY2gtYmFyOmZvY3VzOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjQ1cyBlYXNlO1xuICBvcGFjaXR5OiAwO1xufVxuaW5wdXQjc2VhcmNoLWJhcjpmb2N1czotbXMtcGxhY2Vob2xkZXIge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNDVzIGVhc2U7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5zZWFyY2gtaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDc1cHg7XG4gIHRvcDogLTYycHg7XG4gIHJpZ2h0OiAxNXB4O1xufVxuLnNlYXJjaC1jb250YWluZXIgYnV0dG9ue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IC00MSU7XG4gIGhlaWdodDogNDdweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBtYXJnaW4tdG9wOiAtNDdweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDAgNnB4IDZweCAwO1xufVxuLnNlYXJjaC1jb250YWluZXIgYnV0dG9uIHNlbGVjdCB7XG4gIHdpZHRoOiAxMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwIDZweCA2cHggMDtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDQ0NDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/HomePage/without-login/without-login.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/HomePage/without-login/without-login.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"homepage\">\n  <div class=\"header\">\n    <div class=\"nav\">\n    <div class=\"side-nav\">\n    <a (click)=\"openDialog()\">SIGN IN</a>\n    <select>\n      <option>LOCATION</option>\n    </select>\n    </div>\n    <div class=\"left-nav\">\n    <div class=\"menu\">\n    </div>\n    </div>\n\n    </div>\n    <div class=\"header-bottom\">\n     <div class=\"header-bottom-elements\"><button><h2>PRODUCT</h2></button></div>\n     <div class=\"header-bottom-elements\"><button><h2>SERVICE</h2></button></div>\n     <div class=\"header-bottom-elements\"><button><h2>B-SERVICE</h2></button></div>\n    </div>\n  </div>\n  <section>\n    <div class=\"search\">\n     <div class=\"text\">\n       <p>\"Lorem Ipsum is simply dummy text of the printing and typesetting industry.\"</p>\n     </div>\n     <div class=\"search-bar\">\n        <div class=\"search-container\" [formGroup] = \"searchForm\" (ngSubmit)= \"onSearch()\" >\n            <input type=\"text\" id=\"search-bar\" placeholder=\"ENTER PRODUCT/SERVICE TO SEARCH\" formControlName = \"word\"  (keypress) = \"onSearch($event)\" >\n            <a href=\"#\"><img class=\"search-icon\" src=\"http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png\"></a>\n            <button (click)=\"onSearch()\">Search</button>\n          </div>\n     </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/HomePage/without-login/without-login.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/HomePage/without-login/without-login.component.ts ***!
  \*******************************************************************/
/*! exports provided: WithoutLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithoutLoginComponent", function() { return WithoutLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_Auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Auth/signup/signup.component */ "./src/app/Auth/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_Service_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/search.service */ "./src/app/Service/search.service.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var WithoutLoginComponent = /** @class */ (function () {
    function WithoutLoginComponent(storage, dialog, searchService, router) {
        this.storage = storage;
        this.dialog = dialog;
        this.searchService = searchService;
        this.router = router;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            word: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            page: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('1')
        });
    }
    WithoutLoginComponent.prototype.ngOnInit = function () {
        this.token = this.storage.get('token');
        if (this.token) {
            this.router.navigate(['/Dashboard']);
            console.log(this.token);
        }
    };
    WithoutLoginComponent.prototype.openDialog = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '30%';
        this.dialog.open(src_app_Auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"], dialogConfig);
    };
    WithoutLoginComponent.prototype.onSearch = function () {
        var formData = this.searchForm.value;
        this.searchService.onSearch(formData.word, formData.page);
        this.searchService.searchValue = formData;
        this.router.navigate(['/Result/' + formData.word + '/' + formData.page]);
    };
    WithoutLoginComponent.prototype.onEnterKey = function (event) {
        if (event.keyCode === 13) {
            var formData = this.searchForm.value;
            this.searchService.onSearch(formData.word, formData.page);
            this.searchService.searchValue = formData;
            this.router.navigate(['/Result/' + formData.word + '/' + formData.page]);
        }
    };
    WithoutLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-without-login',
            template: __webpack_require__(/*! ./without-login.component.html */ "./src/app/HomePage/without-login/without-login.component.html"),
            styles: [__webpack_require__(/*! ./without-login.component.css */ "./src/app/HomePage/without-login/without-login.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["WebStorageService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], src_app_Service_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], WithoutLoginComponent);
    return WithoutLoginComponent;
}());



/***/ }),

/***/ "./src/app/Post-feed/Feed/feed/feed.component.css":
/*!********************************************************!*\
  !*** ./src/app/Post-feed/Feed/feed/feed.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Bvc3QtZmVlZC9GZWVkL2ZlZWQvZmVlZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Post-feed/Feed/feed/feed.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Post-feed/Feed/feed/feed.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  feed works!\n</p>\n"

/***/ }),

/***/ "./src/app/Post-feed/Feed/feed/feed.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Post-feed/Feed/feed/feed.component.ts ***!
  \*******************************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeedComponent = /** @class */ (function () {
    function FeedComponent() {
    }
    FeedComponent.prototype.ngOnInit = function () {
    };
    FeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! ./feed.component.html */ "./src/app/Post-feed/Feed/feed/feed.component.html"),
            styles: [__webpack_require__(/*! ./feed.component.css */ "./src/app/Post-feed/Feed/feed/feed.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/Post-feed/Post/posts/post.component.css":
/*!*********************************************************!*\
  !*** ./src/app/Post-feed/Post/posts/post.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Bvc3QtZmVlZC9Qb3N0L3Bvc3RzL3Bvc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Post-feed/Post/posts/post.component.html":
/*!**********************************************************!*\
  !*** ./src/app/Post-feed/Post/posts/post.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  post works!\n</p>\n"

/***/ }),

/***/ "./src/app/Post-feed/Post/posts/post.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Post-feed/Post/posts/post.component.ts ***!
  \********************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostsComponent = /** @class */ (function () {
    function PostsComponent() {
    }
    PostsComponent.prototype.ngOnInit = function () {
    };
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/Post-feed/Post/posts/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/Post-feed/Post/posts/post.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/Post-feed/edit_Post/edit-post/edit-post.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/Post-feed/edit_Post/edit-post/edit-post.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Bvc3QtZmVlZC9lZGl0X1Bvc3QvZWRpdC1wb3N0L2VkaXQtcG9zdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Post-feed/edit_Post/edit-post/edit-post.component.html":
/*!************************************************************************!*\
  !*** ./src/app/Post-feed/edit_Post/edit-post/edit-post.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-post works!\n</p>\n"

/***/ }),

/***/ "./src/app/Post-feed/edit_Post/edit-post/edit-post.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Post-feed/edit_Post/edit-post/edit-post.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPostComponent", function() { return EditPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditPostComponent = /** @class */ (function () {
    function EditPostComponent() {
    }
    EditPostComponent.prototype.ngOnInit = function () {
    };
    EditPostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-post',
            template: __webpack_require__(/*! ./edit-post.component.html */ "./src/app/Post-feed/edit_Post/edit-post/edit-post.component.html"),
            styles: [__webpack_require__(/*! ./edit-post.component.css */ "./src/app/Post-feed/edit_Post/edit-post/edit-post.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditPostComponent);
    return EditPostComponent;
}());



/***/ }),

/***/ "./src/app/Product/product-form/product-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Product/product-form/product-form.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\n  display: table;\n  width: 80%;\n  height: 100vh;\n  margin: 0 auto;\n  margin-bottom: 40px;\n}\n.productForm{\n  display: table-cell;\n  width: 50%;\n  height: 100%;\n}\n.productForm form{\n  width: 80%;\n  margin: 0 auto;\n}\n.static{\n  display: table-cell;\n  width: 50%;\n  height: 100%;\n  background-color: greenyellow;\n}\n.listingSection input{\n  width: 100%;\n  height: 35px;\n}\n.productImg{\n  width: 95%;\n  display: flex;\n  padding: 20px 0px 20px 0;\n  margin-top: 20px;\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n\n}\ninput[type = \"file\"]{\n  visibility: hidden;\n  z-index: -44;\n}\n.productImg button{\n  width: 100%;\n  height: 100%;\n  border:none;\n  font-weight: bolder;\n  z-index: 22;\n  margin-top: -30px;\n}\n.addButton{\n  width: 45%;\n  height: 160px;\n  cursor: pointer;\n}\n.image{\n  width: 45%;\n  height: 160px;\n  margin-left: 9%;\n}\n.image img{\n  width: 100%;\n  height: 100%;\n}\n.discription textarea{\n  width: 100%;\n  height: 20vh;\n}\n.chips{\n  margin-top: 30px;\n  width: 100%;\n  height: 20vh;\n  background-color: aqua;\n}\n.category{\n  width: 100%;\n  margin-top: 20px;\n}\n.category input{\n  width: 100%;\n  height: 35px;\n}\n.category textarea{\n  margin-top: 20px;\n  width: 100%;\n  height: 20vh;\n}\n.category button{\n   width: 40%;\n   margin-top: 5px;\n   height: 35px;\n   border: none;\n   border-radius: 10px;\n}\n.price input{\nwidth: 34%;\nheight: 35px;\nmargin-left: 20px;\n}\n.moq input , .proCategory input , .Tf input , .industry input {\n  width: 100%;\n  height: 35px;\n  margin-top: 20px;\n}\nbutton[type= \"submit\"]{\n  margin-top: 30px;\n  width: 30%;\n  height: 40px;\n  font-weight: bolder;\n  font-size: 20px;\n}\ninput , textarea{\n  padding: 0 0 0 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJvZHVjdC9wcm9kdWN0LWZvcm0vcHJvZHVjdC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsV0FBVztFQUNYLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtDQUMvQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QiwrQkFBK0I7O0NBRWhDO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtDQUNkO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtDQUNkO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLFlBQVk7RUFDWixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLFlBQVk7RUFDWixhQUFhO0NBQ2Q7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtDQUNkO0FBQ0Q7R0FDRyxXQUFXO0dBQ1gsZ0JBQWdCO0dBQ2hCLGFBQWE7R0FDYixhQUFhO0dBQ2Isb0JBQW9CO0NBQ3RCO0FBQ0Q7QUFDQSxXQUFXO0FBQ1gsYUFBYTtBQUNiLGtCQUFrQjtDQUNqQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLG9CQUFvQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL1Byb2R1Y3QvcHJvZHVjdC1mb3JtL3Byb2R1Y3QtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbntcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLnByb2R1Y3RGb3Jte1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucHJvZHVjdEZvcm0gZm9ybXtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uc3RhdGlje1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xufVxuLmxpc3RpbmdTZWN0aW9uIGlucHV0e1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLnByb2R1Y3RJbWd7XG4gIHdpZHRoOiA5NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG5cbn1cbmlucHV0W3R5cGUgPSBcImZpbGVcIl17XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgei1pbmRleDogLTQ0O1xufVxuLnByb2R1Y3RJbWcgYnV0dG9ue1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6bm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgei1pbmRleDogMjI7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuLmFkZEJ1dHRvbntcbiAgd2lkdGg6IDQ1JTtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmltYWdle1xuICB3aWR0aDogNDUlO1xuICBoZWlnaHQ6IDE2MHB4O1xuICBtYXJnaW4tbGVmdDogOSU7XG59XG4uaW1hZ2UgaW1ne1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRpc2NyaXB0aW9uIHRleHRhcmVhe1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHZoO1xufVxuLmNoaXBze1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xufVxuLmNhdGVnb3J5e1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5jYXRlZ29yeSBpbnB1dHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLmNhdGVnb3J5IHRleHRhcmVhe1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHZoO1xufVxuLmNhdGVnb3J5IGJ1dHRvbntcbiAgIHdpZHRoOiA0MCU7XG4gICBtYXJnaW4tdG9wOiA1cHg7XG4gICBoZWlnaHQ6IDM1cHg7XG4gICBib3JkZXI6IG5vbmU7XG4gICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnByaWNlIGlucHV0e1xud2lkdGg6IDM0JTtcbmhlaWdodDogMzVweDtcbm1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLm1vcSBpbnB1dCAsIC5wcm9DYXRlZ29yeSBpbnB1dCAsIC5UZiBpbnB1dCAsIC5pbmR1c3RyeSBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5idXR0b25bdHlwZT0gXCJzdWJtaXRcIl17XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuaW5wdXQgLCB0ZXh0YXJlYXtcbiAgcGFkZGluZzogMCAwIDAgMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Product/product-form/product-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Product/product-form/product-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n    <section>\n\n      <div class=\"productForm\">\n          <form [formGroup] = \"productForm\" (ngSubmit)= \"onSubmit()\">\n              <div class=\"header\">\n                  <h1>PRODUCT</h1>\n                  <small>Register and step into business world </small>\n              </div>\n           <div class=\"listingSection\">\n              <h2>Listing Details</h2>\n              <label>Enter Product Name</label>\n              <input type=\"text\" placeholder=\"Product Name\" formControlName=\"productName\">\n              <div class=\"productImg\">\n               <div class=\"addButton\">\n                  <input type=\"file\" #imagePicker (change)=\"onImagePick($event)\">\n                <button type=\"button\" (click)=\"imagePicker.click()\">ADD Product Image</button>\n               </div>\n                <div class=\"image\">\n                  <img  *ngIf=\"imagePreview\" [src]=\"imagePreview\">\n                </div>\n              </div>\n           </div>\n           <div class=\"discription\">\n             <h2>Description</h2>\n             <textarea placeholder=\"Short Description\"  formControlName=\"shortDescription\"></textarea>\n             <div class=\"chips\">\n\n             </div>\n           </div>\n           <div class=\"category\" formArrayName = \"productInfo\" >\n             <div *ngFor=\"let group of productInfoArray.controls; let i = index;\" [formGroupName]=\"i\">\n                <input list=\"category\"  placeholder=\"Product Specification\" formControlName = \"productSpecification\">\n                <datalist id=\"category\">\n                  <option value=\"Category\">\n                     <option value=\"Category\">\n                         <option value=\"Category\">\n                             <option value=\"Category\">\n                                 <option value=\"Category\">\n                </datalist>\n                <textarea placeholder=\"Specification Content\" formControlName = \"specificationContent\"></textarea>\n                <div class=\"fields\" style=\"width: 100%;margin-top: 5px\" formArrayName = \"fileds\">\n\n                   <div *ngFor = \"let list of filedsArray.controls; let i = index; \" [formGroupName] = \"i\">\n                    <input type=\"text\" placeholder=\"Enter Field Name \" style=\"width: 43%\" formControlName = \"fieldName\">\n                  <input type=\"text\" placeholder=\"Enter Field Name \" style=\"width: 43%; margin-left: 7.55555%\" formControlName = \"fieldDes\">\n\n                    </div>\n                </div>\n                <button type=\"button\" (click) = \"onAdd()\">Add More</button>\n                <button type=\"button\" style=\"float:right;margin-top: 30px;\" (click)=\"addProductInfo()\" >Apply</button>\n             </div>\n           </div>\n           <div class=\"otherSection\">\n           <div class=\"price\" style=\"margin-top:60px;\">\n             <input list=\"price\"  placeholder=\"Price\" style=\"width: 15%;height: 30px;margin-left: 0\" formControlName=\"price\">\n             <datalist id=\"price\">\n               <option value=\"price\">\n                  <option value=\"price\">\n                      <option value=\"price\">\n                          <option value=\"price\">\n                              <option value=\"price\">\n             </datalist>\n             <input type=\"number\" placeholder=\"min\"  formControlName=\"minPrice\">\n             <input type=\"number\" placeholder=\"max\"  formControlName=\"maxPrice\">\n           </div>\n           <div class=\"moq\">\n             <input type= \"text\" placeholder=\"MOQ\"  formControlName=\"moq\">\n           </div>\n           <div class=\"industry\">\n              <input list=\"Industry\"  placeholder=\"Industry\"  formControlName=\"industry\">\n             <datalist id=\"Industry\">\n               <option value=\"Industry\">\n                  <option value=\"Industry\">\n                      <option value=\"Industry\">\n                          <option value=\"Industry\">\n                              <option value=\"Industry\">\n                              </datalist>\n            </div>\n            <div class=\"proCategory\">\n                <input type= \"text\" placeholder=\"Category\"  formControlName=\"category\">\n              </div>\n              <div class=\"Tf\">\n                  <input type= \"text\" placeholder=\"TF Code\"  formControlName=\"tfCode\">\n                </div>\n           </div>\n           <button type=\"submit\">Finish</button>\n          </form>\n\n      </div>\n      <div class=\"static\">\n\n      </div>\n    </section>\n</div>\n"

/***/ }),

/***/ "./src/app/Product/product-form/product-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Product/product-form/product-form.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Service_product_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Service/product-service.service */ "./src/app/Service/product-service.service.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ProductFormComponent = /** @class */ (function () {
    function ProductFormComponent(storage, _fb, productService, router, notification) {
        this.storage = storage;
        this._fb = _fb;
        this.productService = productService;
        this.router = router;
        this.notification = notification;
        this.companyId = this.storage.get('companyId');
    }
    ProductFormComponent.prototype.ngOnInit = function () {
        this.productForm = this._fb.group({
            productName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            productImage: [''],
            shortDescription: [''],
            productInfo: this._fb.array([this.addProductInfoGroup()]),
            price: [''],
            minPrice: [''],
            maxPrice: [''],
            moq: [''],
            industry: [''],
            category: [''],
            tfCode: ['']
        });
        this.productService.token = this.storage.get('token');
    };
    ProductFormComponent.prototype.onImagePick = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.productForm.patchValue({ productImage: file });
        this.productForm.get('productImage').updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    ProductFormComponent.prototype.onAdd = function () {
        this.filedsArray.push(this.addFiledsGroup());
    };
    ProductFormComponent.prototype.addProductInfoGroup = function () {
        return this.productInfoForm = this._fb.group({
            productSpecification: [''],
            specificationContent: [''],
            fileds: this._fb.array([this.addFiledsGroup()])
        });
    };
    ProductFormComponent.prototype.addFiledsGroup = function () {
        return this._fb.group({
            fieldName: [''],
            fieldDes: ['']
        });
    };
    Object.defineProperty(ProductFormComponent.prototype, "productInfoArray", {
        get: function () {
            return this.productForm.get('productInfo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductFormComponent.prototype, "filedsArray", {
        get: function () {
            return this.productInfoForm.get('fileds');
        },
        enumerable: true,
        configurable: true
    });
    ProductFormComponent.prototype.addProductInfo = function () {
        this.productInfoArray.push(this.addProductInfoGroup());
    };
    ProductFormComponent.prototype.onSubmit = function () {
        if (this.productForm.valid) {
            console.log(this.productForm.value);
            var productData = this.productForm.value;
            this.productService.addProduct(productData).subscribe(function (res) {
                console.log(JSON.parse(res['_body']));
            });
            this.router.navigate(['/companyPage/' + this.companyId]);
            this.notification.success('Product Added');
        }
        else {
            this.notification.error('Enter Valid Deatils');
        }
    };
    ProductFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-form',
            template: __webpack_require__(/*! ./product-form.component.html */ "./src/app/Product/product-form/product-form.component.html"),
            styles: [__webpack_require__(/*! ./product-form.component.css */ "./src/app/Product/product-form/product-form.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["WebStorageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _Service_product_service_service__WEBPACK_IMPORTED_MODULE_2__["ProductServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], ProductFormComponent);
    return ProductFormComponent;
}());



/***/ }),

/***/ "./src/app/Product/product-listing/product-listing.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/Product/product-listing/product-listing.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\n  width: 60%;\n  height: 100vh;\n  margin: 0 auto;\n  background-color: cyan;\n  display: flex;\n}\n.leftSection{\n   width: 50%;\n   height: 100%;\n   background-color: red;\n}\n.rightSection{\nwidth: 45%;\nheight: 100%;\nbackground-color: black;\nmargin-left: 4%\n}\n.leftSection h2{\n  font-weight: 500;\n  font-size: 25px;\n}\n.category{\n  width: 100%;\n  height: 100%;\n  margin-top: 10%;\n  background-color: blue;\n}\ninput[type=\"search\"]{\n  width: 100%;\n  padding: 15px;\n  border:none;\n  border-bottom: 1px solid #ccc;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJvZHVjdC9wcm9kdWN0LWxpc3RpbmcvcHJvZHVjdC1saXN0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsY0FBYztDQUNmO0FBQ0Q7R0FDRyxXQUFXO0dBQ1gsYUFBYTtHQUNiLHNCQUFzQjtDQUN4QjtBQUNEO0FBQ0EsV0FBVztBQUNYLGFBQWE7QUFDYix3QkFBd0I7QUFDeEIsZUFBZTtDQUNkO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsWUFBWTtFQUNaLDhCQUE4Qjs7Q0FFL0IiLCJmaWxlIjoic3JjL2FwcC9Qcm9kdWN0L3Byb2R1Y3QtbGlzdGluZy9wcm9kdWN0LWxpc3RpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb257XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmxlZnRTZWN0aW9ue1xuICAgd2lkdGg6IDUwJTtcbiAgIGhlaWdodDogMTAwJTtcbiAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbi5yaWdodFNlY3Rpb257XG53aWR0aDogNDUlO1xuaGVpZ2h0OiAxMDAlO1xuYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5tYXJnaW4tbGVmdDogNCVcbn1cbi5sZWZ0U2VjdGlvbiBoMntcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLmNhdGVnb3J5e1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5pbnB1dFt0eXBlPVwic2VhcmNoXCJde1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyOm5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/Product/product-listing/product-listing.component.html":
/*!************************************************************************!*\
  !*** ./src/app/Product/product-listing/product-listing.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n\n<div class=\"leftSection\">\n    <h2>Listed Products</h2>\n    <div class=\"category\">\n     <input type=\"search\" placeholder=\"Enter Product/Service to Search\">\n    </div>\n\n</div>\n<div class=\"rightSection\">\n\n</div>\n</section>\n"

/***/ }),

/***/ "./src/app/Product/product-listing/product-listing.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Product/product-listing/product-listing.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListingComponent", function() { return ProductListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductListingComponent = /** @class */ (function () {
    function ProductListingComponent() {
    }
    ProductListingComponent.prototype.ngOnInit = function () {
    };
    ProductListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-listing',
            template: __webpack_require__(/*! ./product-listing.component.html */ "./src/app/Product/product-listing/product-listing.component.html"),
            styles: [__webpack_require__(/*! ./product-listing.component.css */ "./src/app/Product/product-listing/product-listing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductListingComponent);
    return ProductListingComponent;
}());



/***/ }),

/***/ "./src/app/Product/product-page/product-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Product/product-page/product-page.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product_detalis\n{\n    padding-top:5%;\n    margin-left: 5%;\n}\n.product\n{\n    padding: 10px 20px;\n    background-color: #f5f2f2;\n    width: 30%;\n    float: left;\n}\n.product_1\n{\n    font-size:15px;\n}\n.product_1 li\n{\n   display: inline;\n   font-family:  Segoe UI regular ;\n   color: #707070;\n}\n.product_1 a\n{\n\n    text-decoration:none;\n    color:#707070;\n\n}\n.service2\n{\n\n    padding: 0 24px 48px 20px;\n\n      box-shadow: 0 5px 5px rgba(25,25,25,0.2);\n      background-color: white;\n}\n.service2 p img\n{\n    float: right;\n    margin-top: -9px;\n    width: 7%;\n}\n.service2 p\n{\n    font-family:  Segoe UI regular ;\n    padding-top: 20px;\n\t\n    font-size: 18px;\n    color: #707070;\n    display: flex;\n    float: right;\n\n}\n.service2_img img\n{\n\n   width:100%;\n    box-shadow: 0 5px 5px rgba(25,25,25,0.2);\n\n}\n.tags\n{\n    width: 98%;\n    margin-top: 10px;\n}\n.tags li\n{\n\n    font-size: 20px;\n    margin: 6px;\n    display: inline;\n\n}\n.tags li img\n{\n\n    margin: 5px ;\n    width: 20px;\n}\n.contact\n{\n    text-align: right;\n}\n.contact span\n{\n    font-size:150%;\n    margin-left:20px;\n    border:solid 1px gray;\n    padding: 0px 15px;\n    color:#707070;\n    border-radius: 8px;\n\n}\n.contact img\n{\n    position: absolute;\n    width: 45px;\n    margin: -9px -9px;\n}\n.USA_1 li\n{\n    color: #707070;\n    display: inline;\n    font-size:150%;\n}\n.Description_box\n{\n    width: 45%;\n    float: left;\n   margin-left:2%;\n   font-family:  Segoe UI regular ;\n}\n.des_box\n{\n    padding: 0px 60px;\n    font-family: Segoe UI, Regular;\n    background-color: #F5F5F5;\n\n\n\n}\n.des_box h2\n{\n\n  color: #707070;\n  font-size: 25px;\n  font-weight: 400;\n  padding-top: 15px;\n\n\n}\n.des_box p\n{\n    color: #707070;\n    font-size: 20px;\n    border-top: solid 1px gray;\n\n    padding : 20px 0 30px;\n    font-family: Segoe UI, Regular;\n}\n.speci\n{\n    padding: 7px 70px;\n    font-family: Segoe UI, Regular;\n    background-color: whitesmoke;\n}\n.speci span\n{\n    padding: 7px 40px;\n    border-bottom:solid 1px gray;\n    width: 92%;\n    border-top:solid 1px gray;\n    color: #707070;\n    font-size: 25px;\n    float: left;\n\n\n}\n.speci_1\n{\n    padding: 7px 70px;\n    background-color: white;\n    width: 100%;\n}\n.speci_details\n{\n    float: left;\n    margin: 0 10px;\n}\n.speci h2\n{\n    font-weight: 400;\n    color: #707070;\n}\nsection{\n    width: 65%;\n    margin: 0 auto;\n    margin-top: 5%;\n  }\n.feed{\n    width: 100%;\n    height: 490px;\n    display: block;\n    margin-right: auto;\n    border: 1px solid #cccccc;\n  }\n.authorInfo{\n  width: 100%;\n  display: flex;\n  }\n.details{\n    width: 70%;\n    height: auto;\n    display: flex;\n  }\n.logo{\n    width: 20%;\n    height: 100%;\n    background-color: black;\n  }\n.logo img{\n    width: 100%;\n    height: 100%;\n  }\n.details h1{\n    margin: 0;\n    padding: 5px 0 0 15px;\n    font-weight: 500;\n    font-size: 20px;\n  }\n.details p{\n    padding: 0px 0 0 15px !important;\n    font-size: 10px;\n  }\n.feedInfo {\n    width: 95%;\n    margin: 0 auto;\n    height: 15%;\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n    border-radius: 5px 5px 0 0;\n    margin-top: 20px;\n  }\n.feedInfo p{\n    font-size: 12px;\n    margin: 0;\n    margin-top: 5px;\n    margin-bottom: 30px;\n    width: 95%;\n    margin: 0 auto;\n    padding-top: 10px;\n  }\n.followBtn{\n    width: 25%;\n    height: auto;\n    float: right;\n    text-align: right;\n  }\n.followBtn button{\n    width: 80%;\n    margin-top: 10px;\n    background-color: green;\n    color: #ffffff;\n    font-weight: 600;\n    height: 25px;\n    border-radius: 15px;\n    border:none;\n    margin-left: 10px;\n  }\n.followBtn p{\n    align-items: baseline;\n    text-align: right;\n    margin-right: 10px;\n    margin-bottom:  0;\n    font-size: 10px;\n  }\n.feed-img{\n    width: 100%;\n    height: 60%;\n  }\n.feed-img img {\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n  }\n.feed-share{\n    width: 100%;\n    height: 7%;\n    /* background-color: burlywood; */\n    display: block;\n    display: flex;\n  }\n.tagged{\n    width: 100%;\n    height: 7%;\n  }\nmat-expansion-panel{\n    border-radius: 0 !important;\n  \n  }\nmat-expansion-panel{\n    /* box-shadow: 0 0 0 0!important; */\n  }\n.tagged mat-expansion-panel-header{\n    height: 35px !important;\n    color: #ffffff !important;\n  }\nmat-panel-title h4{\n    margin: 0;\n    font-size: 14px;\n    font-weight: 100;\n  }\n@media screen and (max-width: 700px){\n    section{\n        width: 97%;\n        margin: 0 auto;\n        margin-top: 5%;\n      }\n      .feed{\n        width: 100%;\n        height: 100%;\n        display: block;\n        margin-right: auto;\n        border: 1px solid #cccccc;\n      }\n  .product_detalis{\n    margin-left: 0;\n    width: 90%;\n  }\n  .product{\n    width: 100%;\n    float: none;\n  }\n  .product_1{\n    font-size: 10px;\n  }\n  h2{\n    font-size: 18px !important;\n  }\n  .service2{\n    font-size: 60% !important;\n  }\n  .service2 p img{\n    width: 30px;\n    margin-top: -5px;\n  }\n  .tags {\n    width: 74%;\n    margin-top: 10px;\n}\n  .tags li{\n    font-size: 16px;\n  }\n  .tags li img{\n    width: 15px;\n  }\n  .Description_box{\n    width: 100%;\n  }\n  .des_box{\n    padding: 0 20px;\n  }\n  .des_box p{\n    font-size: 12px;\n    line-height: 20px;\n  }\n  .speci{\n    padding: 0 20px;\n  }\n  .speci_1{\n    padding: 0 20px;\n  }\n  .speci_details{\n    margin: 0;\n  }\n  .USA_1{\n    font-size: 12px;\n  }\n  .moq{\n    float: right;\n  }\n  .followBtn button{\n    width: 80%;\n    margin-top: 10px;\n    background-color: green;\n    color: #ffffff;\n    font-weight: 600;\n    height: 25px;\n    border-radius: 15px;\n    font-size: 10px;\n}\n }\n@media screen and (min-width: 767px) and (max-width: 1024px){\n    .product_detalis[_ngcontent-c1] {\n        padding-top: 8%;\n        margin-left: 9%;\n    }\n    .product {\n        padding: 10px 20px;\n        background-color: #f5f2f2;\n        width: 42%;\n        float: left;\n    }\n    .tags{\n        width: 100%;\n        margin-top: 10px;\n    }\n    .des_box {\n        padding: 0px 20px;\n        font-family: Segoe UI, Regular;\n        background-color: #F5F5F5;\n    }\n    .Description_box {\n        width: 44%;\n        float: left;\n        margin-left: 2%;\n        font-family: Segoe UI regular;\n    }\n    .des_box p {\n        color: #707070;\n        font-size: 16px;\n        border-top: solid 1px gray;\n        padding: 20px 0 30px;\n        font-family: Segoe UI, Regular;\n    }\n    .speci_1 {\n        padding: 7px 38px;\n        background-color: white;\n        width: 100%;\n    }\n    section{\n        width: 90%;\n        margin: 0 auto;\n        margin-top: 5%;\n      }\n      .feed{\n        width: 100%;\n        height: 100%;\n        display: block;\n        margin-right: auto;\n        border: 1px solid #cccccc;\n      }\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJvZHVjdC9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksZUFBZTtJQUNmLGdCQUFnQjtDQUNuQjtBQUNEOztJQUVJLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFlBQVk7Q0FDZjtBQUNEOztJQUVJLGVBQWU7Q0FDbEI7QUFFRDs7R0FFRyxnQkFBZ0I7R0FDaEIsZ0NBQWdDO0dBQ2hDLGVBQWU7Q0FDakI7QUFDRDs7O0lBR0kscUJBQXFCO0lBQ3JCLGNBQWM7O0NBRWpCO0FBRUQ7OztJQUdJLDBCQUEwQjs7TUFFeEIseUNBQXlDO01BQ3pDLHdCQUF3QjtDQUM3QjtBQUVEOztJQUVJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsVUFBVTtDQUNiO0FBQ0Q7O0lBRUksZ0NBQWdDO0lBQ2hDLGtCQUFrQjs7SUFFbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTs7Q0FFaEI7QUFFRDs7O0dBR0csV0FBVztJQUNWLHlDQUF5Qzs7Q0FFNUM7QUFDRDs7SUFFSSxXQUFXO0lBQ1gsaUJBQWlCO0NBQ3BCO0FBQ0Q7OztJQUdJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCOztDQUVuQjtBQUNEOzs7SUFHSSxhQUFhO0lBQ2IsWUFBWTtDQUNmO0FBQ0Q7O0lBRUksa0JBQWtCO0NBQ3JCO0FBQ0Q7O0lBRUksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7O0NBRXRCO0FBQ0Q7O0lBRUksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7Q0FDckI7QUFDRDs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7QUFDRDs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtHQUNiLGVBQWU7R0FDZixnQ0FBZ0M7Q0FDbEM7QUFDRDs7SUFFSSxr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Q0M7SUFDRSxnQkFBZ0I7R0FDakI7RUFDRDtJQUNFLFlBQVk7R0FDYjtFQUNEO0lBQ0UsWUFBWTtHQUNiO0VBQ0Q7SUFDRSxnQkFBZ0I7R0FDakI7RUFDRDtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7R0FDbkI7RUFDRDtJQUNFLGdCQUFnQjtHQUNqQjtFQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxVQUFVO0dBQ1g7RUFDRDtJQUNFLGdCQUFnQjtHQUNqQjtFQUNEO0lBQ0UsYUFBYTtHQUNkO0VBQ0Q7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsZ0JBQWdCO0NBQ25CO0VBQ0M7QUFDRDtJQUNHO1FBQ0ksZ0JBQWdCO1FBQ2hCLGdCQUFnQjtLQUNuQjtJQUNEO1FBQ0ksbUJBQW1CO1FBQ25CLDBCQUEwQjtRQUMxQixXQUFXO1FBQ1gsWUFBWTtLQUNmO0lBQ0Q7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO0tBQ3BCO0lBQ0Q7UUFDSSxrQkFBa0I7UUFDbEIsK0JBQStCO1FBQy9CLDBCQUEwQjtLQUM3QjtJQUNEO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsOEJBQThCO0tBQ2pDO0lBQ0Q7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLDJCQUEyQjtRQUMzQixxQkFBcUI7UUFDckIsK0JBQStCO0tBQ2xDO0lBQ0Q7UUFDSSxrQkFBa0I7UUFDbEIsd0JBQXdCO1FBQ3hCLFlBQVk7S0FDZjtJQUNEO1FBQ0ksV0FBVztRQUNYLGVBQWU7UUFDZixlQUFlO09BQ2hCO01BQ0Q7UUFDRSxZQUFZO1FBQ1osYUFBYTtRQUNiLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsMEJBQTBCO09BQzNCO0VBQ0wiLCJmaWxlIjoic3JjL2FwcC9Qcm9kdWN0L3Byb2R1Y3QtcGFnZS9wcm9kdWN0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0X2RldGFsaXNcbntcbiAgICBwYWRkaW5nLXRvcDo1JTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG59XG4ucHJvZHVjdFxue1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmMmYyO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4ucHJvZHVjdF8xXG57XG4gICAgZm9udC1zaXplOjE1cHg7XG59XG5cbi5wcm9kdWN0XzEgbGlcbntcbiAgIGRpc3BsYXk6IGlubGluZTtcbiAgIGZvbnQtZmFtaWx5OiAgU2Vnb2UgVUkgcmVndWxhciA7XG4gICBjb2xvcjogIzcwNzA3MDtcbn1cbi5wcm9kdWN0XzEgYVxue1xuXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgY29sb3I6IzcwNzA3MDtcblxufVxuXG4uc2VydmljZTJcbntcblxuICAgIHBhZGRpbmc6IDAgMjRweCA0OHB4IDIwcHg7XG5cbiAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCByZ2JhKDI1LDI1LDI1LDAuMik7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlcnZpY2UyIHAgaW1nXG57XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IC05cHg7XG4gICAgd2lkdGg6IDclO1xufVxuLnNlcnZpY2UyIHBcbntcbiAgICBmb250LWZhbWlseTogIFNlZ29lIFVJIHJlZ3VsYXIgO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuXHRcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICM3MDcwNzA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbG9hdDogcmlnaHQ7XG5cbn1cblxuLnNlcnZpY2UyX2ltZyBpbWdcbntcblxuICAgd2lkdGg6MTAwJTtcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggcmdiYSgyNSwyNSwyNSwwLjIpO1xuXG59XG4udGFnc1xue1xuICAgIHdpZHRoOiA5OCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi50YWdzIGxpXG57XG5cbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luOiA2cHg7XG4gICAgZGlzcGxheTogaW5saW5lO1xuXG59XG4udGFncyBsaSBpbWdcbntcblxuICAgIG1hcmdpbjogNXB4IDtcbiAgICB3aWR0aDogMjBweDtcbn1cbi5jb250YWN0XG57XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY29udGFjdCBzcGFuXG57XG4gICAgZm9udC1zaXplOjE1MCU7XG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcbiAgICBib3JkZXI6c29saWQgMXB4IGdyYXk7XG4gICAgcGFkZGluZzogMHB4IDE1cHg7XG4gICAgY29sb3I6IzcwNzA3MDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG5cbn1cbi5jb250YWN0IGltZ1xue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNDVweDtcbiAgICBtYXJnaW46IC05cHggLTlweDtcbn1cbi5VU0FfMSBsaVxue1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBmb250LXNpemU6MTUwJTtcbn1cbi5EZXNjcmlwdGlvbl9ib3hcbntcbiAgICB3aWR0aDogNDUlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgbWFyZ2luLWxlZnQ6MiU7XG4gICBmb250LWZhbWlseTogIFNlZ29lIFVJIHJlZ3VsYXIgO1xufVxuLmRlc19ib3hcbntcbiAgICBwYWRkaW5nOiAwcHggNjBweDtcbiAgICBmb250LWZhbWlseTogU2Vnb2UgVUksIFJlZ3VsYXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcblxuXG5cbn1cbi5kZXNfYm94IGgyXG57XG5cbiAgY29sb3I6ICM3MDcwNzA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG5cblxufVxuXG4uZGVzX2JveCBwXG57XG4gICAgY29sb3I6ICM3MDcwNzA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCBncmF5O1xuXG4gICAgcGFkZGluZyA6IDIwcHggMCAzMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBTZWdvZSBVSSwgUmVndWxhcjtcbn1cbi5zcGVjaVxue1xuICAgIHBhZGRpbmc6IDdweCA3MHB4O1xuICAgIGZvbnQtZmFtaWx5OiBTZWdvZSBVSSwgUmVndWxhcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuLnNwZWNpIHNwYW5cbntcbiAgICBwYWRkaW5nOiA3cHggNDBweDtcbiAgICBib3JkZXItYm90dG9tOnNvbGlkIDFweCBncmF5O1xuICAgIHdpZHRoOiA5MiU7XG4gICAgYm9yZGVyLXRvcDpzb2xpZCAxcHggZ3JheTtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG5cblxufVxuLnNwZWNpXzFcbntcbiAgICBwYWRkaW5nOiA3cHggNzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5zcGVjaV9kZXRhaWxzXG57XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG59XG4uc3BlY2kgaDJcbntcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjNzA3MDcwO1xufVxuc2VjdGlvbntcbiAgICB3aWR0aDogNjUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICB9XG4gIFxuICAuZmVlZHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ5MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICB9XG4gIC5hdXRob3JJbmZve1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuZGV0YWlsc3tcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5sb2dve1xuICAgIHdpZHRoOiAyMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB9XG4gIC5sb2dvIGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmRldGFpbHMgaDF7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDVweCAwIDAgMTVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAuZGV0YWlscyBwe1xuICAgIHBhZGRpbmc6IDBweCAwIDAgMTVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAuZmVlZEluZm8ge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgaGVpZ2h0OiAxNSU7XG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgLmZlZWRJbmZvIHB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICB9XG4gIC5mb2xsb3dCdG57XG4gICAgd2lkdGg6IDI1JTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG4gIC5mb2xsb3dCdG4gYnV0dG9ue1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlcjpub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG4gIC5mb2xsb3dCdG4gcHtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206ICAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAuZmVlZC1pbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MCU7XG4gIH1cbiAgLmZlZWQtaW1nIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAgLmZlZWQtc2hhcmV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3JTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7ICovXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAudGFnZ2Vke1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNyU7XG4gIH1cbiAgbWF0LWV4cGFuc2lvbi1wYW5lbHtcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIFxuICB9XG4gIG1hdC1leHBhbnNpb24tcGFuZWx7XG4gICAgLyogYm94LXNoYWRvdzogMCAwIDAgMCFpbXBvcnRhbnQ7ICovXG4gIH1cbiAgLnRhZ2dlZCBtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcntcbiAgICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICB9XG4gIG1hdC1wYW5lbC10aXRsZSBoNHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIH1cbiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XG4gICAgc2VjdGlvbntcbiAgICAgICAgd2lkdGg6IDk3JTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgfVxuICAgICAgLmZlZWR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgICB9XG4gIC5wcm9kdWN0X2RldGFsaXN7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAucHJvZHVjdHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxuICAucHJvZHVjdF8xe1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICBoMntcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgfVxuICAuc2VydmljZTJ7XG4gICAgZm9udC1zaXplOiA2MCUgIWltcG9ydGFudDtcbiAgfVxuICAuc2VydmljZTIgcCBpbWd7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbiAgfVxuICAudGFncyB7XG4gICAgd2lkdGg6IDc0JTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuICAudGFncyBsaXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLnRhZ3MgbGkgaW1ne1xuICAgIHdpZHRoOiAxNXB4O1xuICB9XG4gIC5EZXNjcmlwdGlvbl9ib3h7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmRlc19ib3h7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICB9XG4gIC5kZXNfYm94IHB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC5zcGVjaXtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gIH1cbiAgLnNwZWNpXzF7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICB9XG4gIC5zcGVjaV9kZXRhaWxze1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuVVNBXzF7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5tb3F7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIC5mb2xsb3dCdG4gYnV0dG9ue1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cbiB9XG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpe1xuICAgIC5wcm9kdWN0X2RldGFsaXNbX25nY29udGVudC1jMV0ge1xuICAgICAgICBwYWRkaW5nLXRvcDogOCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA5JTtcbiAgICB9XG4gICAgLnByb2R1Y3Qge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWYyZjI7XG4gICAgICAgIHdpZHRoOiA0MiU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAgICAudGFnc3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICAgIC5kZXNfYm94IHtcbiAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBTZWdvZSBVSSwgUmVndWxhcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgICB9XG4gICAgLkRlc2NyaXB0aW9uX2JveCB7XG4gICAgICAgIHdpZHRoOiA0NCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBTZWdvZSBVSSByZWd1bGFyO1xuICAgIH1cbiAgICAuZGVzX2JveCBwIHtcbiAgICAgICAgY29sb3I6ICM3MDcwNzA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4IGdyYXk7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMCAzMHB4O1xuICAgICAgICBmb250LWZhbWlseTogU2Vnb2UgVUksIFJlZ3VsYXI7XG4gICAgfVxuICAgIC5zcGVjaV8xIHtcbiAgICAgICAgcGFkZGluZzogN3B4IDM4cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgc2VjdGlvbntcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgfVxuICAgICAgLmZlZWR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgICB9XG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/Product/product-page/product-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Product/product-page/product-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-side-nav ></app-side-nav>\n<app-header></app-header>\n\n      <div class=\"product_detalis\">\n            <div class=\"product\">\n              <div class=\"product_1\">\n                    <li><a href=\"#\">{{tab1}}</a></li>\n                    <li style=\"border-left:solid 1px gray;margin-left: 10px;\"><a href=\"#\">&nbsp;&nbsp;{{tab2}}</a></li>\n                    <li style=\"float:right;\">{{model}}</li>\n              </div>\n              <div style=\"clear:both;\"></div>\n              <h2 style=\"color: #707070; font-size: 30px;font-family: Segoe UI regular; font-weight: 400;\">{{heading}}</h2>\n              <div class=\"service2\">\n                  <p><span>24,125</span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" style=\"margin-left: 6px;\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>  </p>\n\n                  <div class=\"service2_img\"><img src=\"assets/images/henna-powder.jpg\" alt=\"image not found\"></div>\n              </div>\n              <div class=\"tags\">\n                <li><img src=\"assets/images/tags.png\"   alt=\"image not found\"><span>tag1</span></li>\n                <li><img src=\"assets/images/tags.png\"   alt=\"image not found\"><span>tag2</span></li>\n                <li><img src=\"assets/images/tags.png\"   alt=\"image not found\"><span>tag3</span></li>\n                <li><img src=\"assets/images/tags.png\"   alt=\"image not found\"><span>tag4</span></li>\n                <li><img src=\"assets/images/tags.png\"   alt=\"image not found\"><span>tag5</span></li>\n              </div>\n              <p class=\"contact\">\n                  <img src=\"assets/images/contact.png\" alt=\"image not found\"><span>Contact</span>\n              </p>\n              <div class=\"USA_1\">\n                  <li>USA:NA</li>\n                  <li style=\"margin-left:20px;\" class=\"moq\">MOQ:5kg</li>\n            </div>\n        </div>\n       </div>\n      <div class=\"Description_box\">\n       <div class=\"des_box\">\n         <h2>Description</h2>\n\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged  .</p>\n      </div>\n\n\n  <mat-accordion >\n\n  <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\" *ngFor=\"let product of products let i = index\" >\n    <mat-expansion-panel-header  class=\"speci\" style=\"background-color:#F5F5F5;\">\n      <mat-panel-title>\n          <h2 >Description</h2>\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <div class=\"speci_1\" >\n      <div class=\"speci_details\">\n        <P>{{product.setup}}</P>\n        <P>{{product.setup}}</P>\n        <P>{{product.setup}}</P>\n        <P>{{product.setup}}</P>\n      </div>\n      <div class=\"speci_details\">\n          <P> {{product.punchline}}</P>\n          <P> {{product.punchline}}</P>\n          <P>{{product.punchline}}</P>\n          <P>{{product.punchline}}</P>\n        </div>\n\n    </div>\n  </mat-expansion-panel>\n\n</mat-accordion>\n<section>\n\n\n  <div class=\"feed\">\n  <div class=\"authorInfo\">\n  <div class=\"details\">\n    <div class=\"logo\">\n      <img src=\"https://picsum.photos/500/300/?random\">\n    </div>\n    <div class=\"info\">\n   <h1>Company Name</h1>\n   <p style=\"line-height: 0px;margin-bottom: 12px;margin-top: 5px;\">Industry</p>\n   <p style=\"line-height: 3px;margin-bottom: 10px;\">Location</p>\n  </div>\n  </div>\n  <div class=\"followBtn\" >\n   <button >Following<span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30%\" height=\"52%\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z\"/></svg></span></button>\n   <p>34,342 followers</p>\n  </div>\n  </div>\n  <div class=\"feedInfo\">\n    <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content </p>\n  </div>\n  <div class=\"feed-img\">\n  <img src=\"https://picsum.photos/500/300/?random\">\n  </div>\n  <div class=\"feed-share\">\n  <p  style=\"padding: 4px; margin: 0; display: flex;width: 100%;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"  viewBox=\"0 0 24 24\"><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg><span><b style=\"margin-left: 5px;\">24,244</b></span></p>\n  <p style=\" padding: 0; margin:4px 0;     margin-right: 10px;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M16 15v4l8-8.035-8-7.965v4s-13.277 2.144-16 14c5.796-6.206 16-6 16-6z\"/></svg></p>\n  </div>\n  <div class=\"tagged\">\n     <mat-expansion-panel>\n         <mat-expansion-panel-header style=\"background-color:#6E7892;\">\n           <mat-panel-title >\n            <h4>Tagged Products</h4>\n           </mat-panel-title>\n         </mat-expansion-panel-header>\n  \n         <p>This is the primary content of the panel.</p>\n  \n       </mat-expansion-panel>\n  </div>\n  </div>\n  \n  </section>\n</div>\n\n"

/***/ }),

/***/ "./src/app/Product/product-page/product-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Product/product-page/product-page.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageComponent", function() { return ProductPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_product_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Service/product-service.service */ "./src/app/Service/product-service.service.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ProductPageComponent = /** @class */ (function () {
    function ProductPageComponent(storage, route, product) {
        this.storage = storage;
        this.route = route;
        this.product = product;
        this.panelOpenState = false;
        this.id = this.route.snapshot.paramMap.get('_id');
        console.log(this.id);
        this.product.token = this.storage.get('token');
    }
    ProductPageComponent.prototype.ngOnInit = function () {
        // this.product.getOneproduct(this.id).subscribe(res => {
        //   console.log(JSON.parse(res['_body']));
        // });
    };
    ProductPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-page',
            template: __webpack_require__(/*! ./product-page.component.html */ "./src/app/Product/product-page/product-page.component.html"),
            styles: [__webpack_require__(/*! ./product-page.component.css */ "./src/app/Product/product-page/product-page.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["WebStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _Service_product_service_service__WEBPACK_IMPORTED_MODULE_2__["ProductServiceService"]])
    ], ProductPageComponent);
    return ProductPageComponent;
}());



/***/ }),

/***/ "./src/app/Product/product/product.component.css":
/*!*******************************************************!*\
  !*** ./src/app/Product/product/product.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Byb2R1Y3QvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Product/product/product.component.html":
/*!********************************************************!*\
  !*** ./src/app/Product/product/product.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  product works!\n</p>\n"

/***/ }),

/***/ "./src/app/Product/product/product.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Product/product/product.component.ts ***!
  \******************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/Product/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/Product/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/Search/Searchfeeds/feeds.component.css":
/*!********************************************************!*\
  !*** ./src/app/Search/Searchfeeds/feeds.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\n  width: 65%;\n  margin: 0 auto;\n  margin-top: 2%;\n}\n.results{\n  width: 100%;\n}\n.feedResult{\n  display: flex;\n  width: 47%;\n  margin: 0 auto;\n}\n.feed{\n  width: 100%;\n  max-height: 490px;\n  display: block;\n  margin: 0 auto;\n  border: 1px solid #cccccc;\n  margin-right: 1%;\n  margin-left: 1%;\n  margin-bottom: 10%;\n\n}\n.authorInfo{\nwidth: 100%;\ndisplay: flex;\n}\n.details{\n  width: 70%;\n  height: auto;\n  display: flex;\n}\n.logo{\n  width: 20%;\n  height: 100%;\n  background-color: black;\n}\n.logo img{\n  width: 100%;\n  height: 100%;\n}\n.details h1{\n  margin: 0;\n  padding: 5px 0 0 15px;\n  font-weight: 500;\n  font-size: 20px;\n}\n.details p{\n  padding: 0px 0 0 15px !important;\n  font-size: 10px;\n}\n.feedInfo {\n  width: 95%;\n  margin: 0 auto;\n  height: 15%;\n  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n  border-radius: 5px 5px 0 0;\n  margin-top: 20px;\n}\n.feedInfo p{\n  font-size: 12px;\n  margin: 0;\n  margin-top: 5px;\n  margin-bottom: 30px;\n  width: 95%;\n  margin: 0 auto;\n  padding-top: 10px;\n}\n.followBtn{\n  width: 25%;\n  height: auto;\n  float: right;\n  text-align: right;\n}\n.followBtn button{\n  width: 80%;\n  margin-top: 10px;\n  background-color: green;\n  color: #ffffff;\n  font-weight: 600;\n  height: 25px;\n  border-radius: 15px;\n  border:none;\n  margin-left: 10px;\n}\n.followBtn p{\n  align-items: baseline;\n  text-align: right;\n  margin-right: 10px;\n  margin-bottom:  0;\n  font-size: 10px;\n}\n.feed-img{\n  width: 100%;\n  height: 60%;\n}\n.feed-img img {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n}\n.feed-share{\n  width: 100%;\n  height: 7%;\n  /* background-color: burlywood; */\n  display: block;\n  display: flex;\n}\n.feed-share img\n{\n  width: 4%;\n  margin-left: 1%;\n\n}\n.tagged{\n  width: 100%;\n  height: 7%;\n}\nmat-expansion-panel{\n  border-radius: 0 !important;\n  background-color: #6E7892;\n\n}\nmat-expansion-panel{\n  /* box-shadow: 0 0 0 0!important; */\n}\n.tagged mat-expansion-panel-header{\n  height: 35px !important;\n  color: #ffffff !important;\n}\nmat-panel-title h4{\n  margin: 0;\n  font-size: 14px;\n  font-weight: 100;\n}\n@media screen and (max-width:700px){\n  .company_industry,.login_user{\n    display: none;\n  }\n  .with_login{\n    width: 100%;\n    margin: 0px;\n    padding-top: 18%;\n  }\n  .feeds{\n    width: 100%;\n    padding: 0px;\n  }\n  .add_media h2{\n    font-size: 15px;\n    margin-top: -5px;\n  }\n  .add_media span{\n    font-size: 10px;\n  }\n  .add_feed {\n    font-size: 11px;\n    width: 12%;\n  }\n  section{\n    width: 95%;\n  }\n  .followBtn button{\n    width: 100%;\n    font-size: 8px;\n  }\n  .followBtn p{\n    margin-right: 0;\n  }\n  .details h1{\n    font-size: 15px;\n  }\n  .details p{\n    font-size: 8px;\n  }\n  .feedInfo p{\n    font-size: 10px;\n    line-height: 15px;\n  }\n  mat-panel-title h4{\n    font-size: 11px;\n  }\n  .feed {\n    width: 100%;\n    height: 490px;\n    display: block;\n    margin-right: auto;\n    border: 1px solid #cccccc;\n    margin-right: 1%;\n    margin-left: 1%;\n    margin-top: 49px;\n}\n}\n@media screen and (min-width: 767px) and (max-width: 1024px){\n\n  .login_user{\n  width: 26%;\n  }\n  .user_name h2\n{\n  font-size: 15px;\n  color: #FAF6F6;\n  margin-top: -2px;\n  float: left;\n}\n  .company_industry{\n    width: 25%;\n    }\n  .feeds{\n    width: 48%;\n    padding: 0px;\n  }\n  .add_media h2{\n    font-size: 15px;\n    margin-top: -5px;\n  }\n  .add_media span{\n    font-size: 10px;\n  }\n  .add_feed {\n    font-size: 15px;\n    width: 21%;\n  }\n  section{\n    width: 95%;\n  }\n  .followBtn button{\n    width: 100%;\n    font-size: 8px;\n  }\n  .followBtn p{\n    margin-right: 0;\n  }\n  .details h1{\n    font-size: 15px;\n  }\n  .details p{\n    font-size: 8px;\n  }\n  .feedInfo p{\n    font-size: 10px;\n    line-height: 15px;\n  }\n  mat-panel-title h4{\n    font-size: 11px;\n  }\n  .feed {\n    width: 48%;\n    height: 490px;\n    display: block;\n    margin-right: auto;\n    border: 1px solid #cccccc;\n    margin-right: 1%;\n    margin-left: 9%;\n}\n\n}\n@media screen and (min-width: 700px) and (max-width: 1440px){\n  .with_login{\n    width: 85%;\n  }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2VhcmNoL1NlYXJjaGZlZWRzL2ZlZWRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1COztDQUVwQjtBQUNEO0FBQ0EsWUFBWTtBQUNaLGNBQWM7Q0FDYjtBQUNEO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0NBQ2Y7QUFDRDtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isd0JBQXdCO0NBQ3pCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtDQUNkO0FBQ0Q7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGlDQUFpQztFQUNqQyxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLG9HQUFvRztFQUNwRywyQkFBMkI7RUFDM0IsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLFlBQVk7RUFDWixZQUFZO0NBQ2I7QUFDRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0NBQ3hCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsY0FBYztDQUNmO0FBQ0Q7O0VBRUUsVUFBVTtFQUNWLGdCQUFnQjs7Q0FFakI7QUFDRDtFQUNFLFlBQVk7RUFDWixXQUFXO0NBQ1o7QUFDRDtFQUNFLDRCQUE0QjtFQUM1QiwwQkFBMEI7O0NBRTNCO0FBQ0Q7RUFDRSxvQ0FBb0M7Q0FDckM7QUFDRDtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRTtJQUNFLGNBQWM7R0FDZjtFQUNEO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7R0FDbEI7RUFDRDtJQUNFLFlBQVk7SUFDWixhQUFhO0dBQ2Q7RUFDRDtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7R0FDbEI7RUFDRDtJQUNFLGdCQUFnQjtHQUNqQjtFQUNEO0lBQ0UsZ0JBQWdCO0lBQ2hCLFdBQVc7R0FDWjtFQUNEO0lBQ0UsV0FBVztHQUNaO0VBQ0Q7SUFDRSxZQUFZO0lBQ1osZUFBZTtHQUNoQjtFQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxnQkFBZ0I7R0FDakI7RUFDRDtJQUNFLGVBQWU7R0FDaEI7RUFDRDtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7R0FDbkI7RUFDRDtJQUNFLGdCQUFnQjtHQUNqQjtFQUNEO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtDQUNwQjtDQUNBO0FBRUQ7O0VBRUU7RUFDQSxXQUFXO0dBQ1Y7RUFDRDs7RUFFQSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0NBQ2I7RUFDQztJQUNFLFdBQVc7S0FDVjtFQUNIO0lBQ0UsV0FBVztJQUNYLGFBQWE7R0FDZDtFQUNEO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtHQUNsQjtFQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztHQUNaO0VBQ0Q7SUFDRSxXQUFXO0dBQ1o7RUFDRDtJQUNFLFlBQVk7SUFDWixlQUFlO0dBQ2hCO0VBQ0Q7SUFDRSxnQkFBZ0I7R0FDakI7RUFDRDtJQUNFLGdCQUFnQjtHQUNqQjtFQUNEO0lBQ0UsZUFBZTtHQUNoQjtFQUNEO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtHQUNuQjtFQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixnQkFBZ0I7Q0FDbkI7O0NBRUE7QUFDRDtFQUNFO0lBQ0UsV0FBVztHQUNaO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9TZWFyY2gvU2VhcmNoZmVlZHMvZmVlZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb257XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cbi5yZXN1bHRze1xuICB3aWR0aDogMTAwJTtcbn1cbi5mZWVkUmVzdWx0e1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNDclO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5mZWVke1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogNDkwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgbWFyZ2luLWxlZnQ6IDElO1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG5cbn1cbi5hdXRob3JJbmZve1xud2lkdGg6IDEwMCU7XG5kaXNwbGF5OiBmbGV4O1xufVxuLmRldGFpbHN7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cbi5sb2dve1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLmxvZ28gaW1ne1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRldGFpbHMgaDF7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNXB4IDAgMCAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uZGV0YWlscyBwe1xuICBwYWRkaW5nOiAwcHggMCAwIDE1cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmZlZWRJbmZvIHtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTUlO1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMik7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmZlZWRJbmZvIHB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5mb2xsb3dCdG57XG4gIHdpZHRoOiAyNSU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5mb2xsb3dCdG4gYnV0dG9ue1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyOm5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmZvbGxvd0J0biBwe1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206ICAwO1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uZmVlZC1pbWd7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwJTtcbn1cbi5mZWVkLWltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmZlZWQtc2hhcmV7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDclO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7ICovXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZlZWQtc2hhcmUgaW1nXG57XG4gIHdpZHRoOiA0JTtcbiAgbWFyZ2luLWxlZnQ6IDElO1xuXG59XG4udGFnZ2Vke1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3JTtcbn1cbm1hdC1leHBhbnNpb24tcGFuZWx7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZFNzg5MjtcblxufVxubWF0LWV4cGFuc2lvbi1wYW5lbHtcbiAgLyogYm94LXNoYWRvdzogMCAwIDAgMCFpbXBvcnRhbnQ7ICovXG59XG4udGFnZ2VkIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVye1xuICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cbm1hdC1wYW5lbC10aXRsZSBoNHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjcwMHB4KXtcbiAgLmNvbXBhbnlfaW5kdXN0cnksLmxvZ2luX3VzZXJ7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAud2l0aF9sb2dpbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nLXRvcDogMTglO1xuICB9XG4gIC5mZWVkc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgLmFkZF9tZWRpYSBoMntcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbiAgfVxuICAuYWRkX21lZGlhIHNwYW57XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5hZGRfZmVlZCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHdpZHRoOiAxMiU7XG4gIH1cbiAgc2VjdGlvbntcbiAgICB3aWR0aDogOTUlO1xuICB9XG4gIC5mb2xsb3dCdG4gYnV0dG9ue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICB9XG4gIC5mb2xsb3dCdG4gcHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbiAgLmRldGFpbHMgaDF7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC5kZXRhaWxzIHB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gIH1cbiAgLmZlZWRJbmZvIHB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB9XG4gIG1hdC1wYW5lbC10aXRsZSBoNHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbiAgLmZlZWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDkwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG4gICAgbWFyZ2luLXRvcDogNDlweDtcbn1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpe1xuXG4gIC5sb2dpbl91c2Vye1xuICB3aWR0aDogMjYlO1xuICB9XG4gIC51c2VyX25hbWUgaDJcbntcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI0ZBRjZGNjtcbiAgbWFyZ2luLXRvcDogLTJweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4gIC5jb21wYW55X2luZHVzdHJ5e1xuICAgIHdpZHRoOiAyNSU7XG4gICAgfVxuICAuZmVlZHN7XG4gICAgd2lkdGg6IDQ4JTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgLmFkZF9tZWRpYSBoMntcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbiAgfVxuICAuYWRkX21lZGlhIHNwYW57XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5hZGRfZmVlZCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHdpZHRoOiAyMSU7XG4gIH1cbiAgc2VjdGlvbntcbiAgICB3aWR0aDogOTUlO1xuICB9XG4gIC5mb2xsb3dCdG4gYnV0dG9ue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICB9XG4gIC5mb2xsb3dCdG4gcHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbiAgLmRldGFpbHMgaDF7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC5kZXRhaWxzIHB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gIH1cbiAgLmZlZWRJbmZvIHB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB9XG4gIG1hdC1wYW5lbC10aXRsZSBoNHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbiAgLmZlZWQge1xuICAgIHdpZHRoOiA0OCU7XG4gICAgaGVpZ2h0OiA0OTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xuICAgIG1hcmdpbi1sZWZ0OiA5JTtcbn1cblxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpe1xuICAud2l0aF9sb2dpbntcbiAgICB3aWR0aDogODUlO1xuICB9XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Search/Searchfeeds/feeds.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Search/Searchfeeds/feeds.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-side-nav></app-side-nav>\n<app-s-page-header-search></app-s-page-header-search>\n<app-s-page-header></app-s-page-header>\n<section>\n  <div class=\"results\" *ngFor=\"let feed of this.search.feedResult\">\n     <div class=\"feedResult\">\n        <div class=\"feed\" *ngIf=\"feed.CompanyName != null\" >\n            <div class=\"authorInfo\" >\n                <div class=\"details\">\n                  <div class=\"logo\">\n                    <img src= \"https://picsum.photos/500/300/?random\">\n                  </div>\n                  <div class=\"info\">\n                 <h1 routerLink = \"/companyPage/{{feed._id}}\">{{feed.CompanyName}}</h1>\n                 <p style=\"line-height: 0px;margin-bottom: 12px;margin-top: 5px;\">{{feed.Industry}}</p>\n                 <p style=\"line-height: 3px;margin-bottom: 10px;\">{{feed.Location}}</p>\n                </div>\n                </div>\n                <div class=\"followBtn\">\n                 <button (click)=\"follow(feed._id)\">Follow<span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20%\" height=\"50%\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z\"/></svg></span></button>\n                 <p></p>\n                </div>\n                </div>\n                <div class=\"feedInfo\">\n                  <p>{{feed.Content}} </p>\n                </div>\n                <div class=\"feed-img\">\n                <img src=\"https://picsum.photos/500/300/?random\">\n                </div>\n                <div class=\"feed-share\">\n                    <p  style=\"padding: 4px; margin: 0; display: flex;width: 100%;\" (click)=\"onBookmark(feed._id)\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"  viewBox=\"0 0 24 24\"><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/ ></svg><span><b style=\"margin-left: 5px;\">{{feed.Bookmarks}}</b></span></p>\n                    <p style=\" padding: 0; margin:4px 0;     margin-right: 10px;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M16 15v4l8-8.035-8-7.965v4s-13.277 2.144-16 14c5.796-6.206 16-6 16-6z\"/></svg></p>\n                    </div>\n                    <div class=\"tagged\">\n                        <mat-expansion-panel style=\"background-color:white;\">\n                            <mat-expansion-panel-header style=\"background-color: #6E7892;\">\n                              <mat-panel-title >\n                               <h4 style=\"  color: #fff\">Tagged Products</h4>\n                              </mat-panel-title>\n                            </mat-expansion-panel-header>\n\n                            <p>This is the primary content of the panel.</p>\n\n                          </mat-expansion-panel>\n                     </div>\n             </div>\n     </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/Search/Searchfeeds/feeds.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Search/Searchfeeds/feeds.component.ts ***!
  \*******************************************************/
/*! exports provided: FeedsSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedsSearchComponent", function() { return FeedsSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Service/search.service */ "./src/app/Service/search.service.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _Service_bookmark_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Service/bookmark-services.service */ "./src/app/Service/bookmark-services.service.ts");
/* harmony import */ var src_app_Service_follow_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/follow-service.service */ "./src/app/Service/follow-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var FeedsSearchComponent = /** @class */ (function () {
    function FeedsSearchComponent(storage, search, bookmark, follows, route) {
        this.storage = storage;
        this.search = search;
        this.bookmark = bookmark;
        this.follows = follows;
        this.route = route;
    }
    FeedsSearchComponent.prototype.ngOnInit = function () {
        this.word = this.route.snapshot.paramMap.get('word');
        this.page = this.route.snapshot.paramMap.get('page');
        console.log(this.word, this.page);
        this.search.onSearchFeed(this.word, this.page);
        this.bookmark.token = this.storage.get('token');
        console.log(this.bookmark.token);
    };
    FeedsSearchComponent.prototype.onBookmark = function (id) {
        this.bookmark.addPostBookmark(id).subscribe(function (res) {
            console.log(res);
        });
        console.log(id);
    };
    FeedsSearchComponent.prototype.follow = function (id) {
        this.follows.addFollow(id).subscribe(function (res) {
            console.log(res);
        });
    };
    FeedsSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feeds',
            template: __webpack_require__(/*! ./feeds.component.html */ "./src/app/Search/Searchfeeds/feeds.component.html"),
            styles: [__webpack_require__(/*! ./feeds.component.css */ "./src/app/Search/Searchfeeds/feeds.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["WebStorageService"], _Service_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"],
            _Service_bookmark_services_service__WEBPACK_IMPORTED_MODULE_3__["BookmarkServices"], src_app_Service_follow_service_service__WEBPACK_IMPORTED_MODULE_4__["FollowService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], FeedsSearchComponent);
    return FeedsSearchComponent;
}());



/***/ }),

/***/ "./src/app/Search/company-search/company-search.component.css":
/*!********************************************************************!*\
  !*** ./src/app/Search/company-search/company-search.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-bar{\n  width: 95%;\n  display: flex;\n}\n.search-container {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  margin-top: 120px;\n  z-index: -1;\n}\ninput#search-bar {\n  margin: 0 auto;\n  width: 100%;\n  height: 13vh;\n  padding: 0px 45px;\n  font-size: 3rem;\n  border: 1px solid #D0CFCE;\n  outline: none;\n  border-radius: 20px 0 0 20px;\n  outline: none;\n}\ninput#search-bar:focus {\n  transition: 0.35s ease;\n}\ninput#search-bar:focus::-webkit-input-placeholder {\n  transition: opacity 0.45s ease;\n  opacity: 0;\n}\ninput#search-bar:focus::-moz-placeholder {\n  transition: opacity 0.45s ease;\n  opacity: 0;\n}\ninput#search-bar:focus:-ms-placeholder {\n  transition: opacity 0.45s ease;\n  opacity: 0;\n}\n.search-icon {\n  position: relative;\n  float: left;\n  width: 75px;\n  height: 75px;\n  top: -62px;\n  right: 15px;\n}\n.search-container button{\n  position: relative;\n  padding: 0;\n  margin: 0;\n  height: 13.3vh;\n  width: 120px;\n  border: none;\n  cursor: pointer;\n  border-radius: 0 20px 20px 0;\n}\n.search-container button select {\n  width: 120px;\n  margin-right: 10px;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  text-align: center;\n  outline: none;\n  border-radius: 0 20px 20px 0;\n  padding: 0 40px;\n  font-size: 16px;\n}\n.toggleBtn{\n  position: relative;\n  padding: 0;\n  margin: 0;\n  width: 120px;\n  border: none;\n  cursor: pointer;\n  background-color: transparent;\n  border-radius: 0 !important ;\n  margin-right: -40px !important;\n\n}\n.filter{\n  width: 100%;\n  height: 7vh;\n  background-color: royalblue;\n  margin-top: 30px;\n}\nsection{\n  width: 80%;\n  margin: 0 auto;\n  height: 100vh;\n  margin-top: 30px;\n}\n.listing{\n  width: 100%;\n  height: auto;\n}\n.companyCard{\n  width: 80%;\n  margin: 0 auto;\n  border: 1px solid #ccc;\n  border-radius: 30px;\n}\n.cardHeader{\n  width: 95%;\n  margin: 0 auto;\n  display: flex;\n}\n.logo{\n  height: auto;\n}\n.logo img{\n  width: 120px;\n  height: 120px;\n  padding: 5px 0 0 0;\n  border-radius: 50%;\n}\n.companyInfo{\n  width: 65%;\n  margin-left: 20px;\n}\n.companyInfo h1{\n  margin: 0;\n  padding: 5px 0 0 0;\n}\n.companyInfo button{\n  width: 15%;\n  border: solid 1px #707070;;\n  border-radius: 10px;\n  color: #707070;\n  font-size: 22px;\n  font-weight: 700;\n  background-color: #F9FDFA;\n}\n.b1 img\n{ \n  width: 15px;\n    margin-left: 20px;\n\n}\n.storyBtn{\n  width: 15%;\n  margin-left: 5%;\n  margin-top: 20px;\n}\n.storyBtn button{\n  width: 100%;\n  height: 40px;\n  border-radius: 20px;\n  border: none;\n  font-weight: 800;\n  color: #707070;\n  font-size: 17px;\n  background-color: #FFFFFF;\n  border: solid 1px #707070;\n\n}\n.discription{\n  width: 90%;\n  margin: 0 auto;\n}\n.discription p{\n  width: 80%;\n  color: #707070;\n  font-weight: 600;\n}\n.cardFooter{\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n}\n.tags{\n  width: 80%;\n\n}\n/* .tags p{\n  margin: 0;\n  padding: 0px 0 15px 0;\n} */\n.tags span\n{\n  border: solid 1px black;\n    padding: 0px 48px;\n    border-radius: 20px;\n    margin: 1%;\n}\n.icons{\n  width: 20%;\n  display: flex;\n}\n.icons span\n{\n  margin: -9% 1% 1%;\n}\n.icons img\n{\n  width: 80%;\n}\n.icons p{\n  margin: 0;\n  padding: 0px 0 15px 0;\n}\n.des\n{\n  display: none;\n}\n@media screen and (max-width: 700px){\n  section{\n    width: 95%;\n    margin: 0 auto;\n    margin-top: 30px;\n    padding-top: 7%;\n  }\n  .companyCard {\n    width: 100%;\n    margin: 0 auto;\n    border: 1px solid #ccc;\n    border-radius: 30px;\n\n}\n.storyBtn {\n  display: none;\n}\n.companyInfo h1 {\n  float: left;\n  margin: 0;\n  padding: 5px 0 0 0;\n  font-size: 16px;\n}\n.b1{\n  float: right;\n  margin-left: 29px;\n}\n.discription\n{\n  display: none;\n}\n.des\n{\n  display: block;\n}\n.cardFooter\n{\n  display: none;\n}\n.companyInfo  button{\n  width: 27%;\n  height: 25px;\n  border: none;\n  border-radius: 10px;\n}\n\n}\n@media screen and (min-width: 767px) and (max-width: 1024px){\n  section{\n    width: 90%;\n    margin: 0 auto;\n\n    margin-top: 30px;\n  }\n  .storyBtn{\n    width: 26%;\n    margin-left: 5%;\n    margin-top: 20px;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2VhcmNoL2NvbXBhbnktc2VhcmNoL2NvbXBhbnktc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztDQUNmO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtDQUNiO0FBR0Q7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLGNBQWM7Q0FDZjtBQUNEO0VBQ0UsdUJBQXVCO0NBQ3hCO0FBQ0Q7RUFDRSwrQkFBK0I7RUFDL0IsV0FBVztDQUNaO0FBQ0Q7RUFDRSwrQkFBK0I7RUFDL0IsV0FBVztDQUNaO0FBQ0Q7RUFDRSwrQkFBK0I7RUFDL0IsV0FBVztDQUNaO0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtFQUNmLGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtDQUM5QjtBQUNEO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsV0FBVztFQUNYLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFVBQVU7RUFDVixhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLCtCQUErQjs7Q0FFaEM7QUFDRDtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtDQUNkO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztDQUNmO0FBQ0Q7RUFDRSxhQUFhO0NBQ2Q7QUFDRDtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsMEJBQTBCO0NBQzNCO0FBQ0Q7O0VBRUUsWUFBWTtJQUNWLGtCQUFrQjs7Q0FFckI7QUFDRDtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLDBCQUEwQjs7Q0FFM0I7QUFFRDtFQUNFLFdBQVc7RUFDWCxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0NBQ2Y7QUFDRDtFQUNFLFdBQVc7O0NBRVo7QUFDRDs7O0lBR0k7QUFDSjs7RUFFRSx3QkFBd0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixXQUFXO0NBQ2Q7QUFDRDtFQUNFLFdBQVc7RUFDWCxjQUFjO0NBQ2Y7QUFDRDs7RUFFRSxrQkFBa0I7Q0FDbkI7QUFDRDs7RUFFRSxXQUFXO0NBQ1o7QUFDRDtFQUNFLFVBQVU7RUFDVixzQkFBc0I7Q0FDdkI7QUFDRDs7RUFFRSxjQUFjO0NBQ2Y7QUFDRDtFQUNFO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixvQkFBb0I7O0NBRXZCO0FBQ0Q7RUFDRSxjQUFjO0NBQ2Y7QUFDRDtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtDQUNuQjtBQUNEOztFQUVFLGNBQWM7Q0FDZjtBQUNEOztFQUVFLGVBQWU7Q0FDaEI7QUFDRDs7RUFFRSxjQUFjO0NBQ2Y7QUFDRDtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLG9CQUFvQjtDQUNyQjs7Q0FFQTtBQUNEO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsZUFBZTs7SUFFZixpQkFBaUI7R0FDbEI7RUFDRDtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0NBQ3BCO0NBQ0EiLCJmaWxlIjoic3JjL2FwcC9TZWFyY2gvY29tcGFueS1zZWFyY2gvY29tcGFueS1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtYmFye1xuICB3aWR0aDogOTUlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnNlYXJjaC1jb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMTIwcHg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG5cbmlucHV0I3NlYXJjaC1iYXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTN2aDtcbiAgcGFkZGluZzogMHB4IDQ1cHg7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0QwQ0ZDRTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAwIDAgMjBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmlucHV0I3NlYXJjaC1iYXI6Zm9jdXMge1xuICB0cmFuc2l0aW9uOiAwLjM1cyBlYXNlO1xufVxuaW5wdXQjc2VhcmNoLWJhcjpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40NXMgZWFzZTtcbiAgb3BhY2l0eTogMDtcbn1cbmlucHV0I3NlYXJjaC1iYXI6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNDVzIGVhc2U7XG4gIG9wYWNpdHk6IDA7XG59XG5pbnB1dCNzZWFyY2gtYmFyOmZvY3VzOi1tcy1wbGFjZWhvbGRlciB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40NXMgZWFzZTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnNlYXJjaC1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNzVweDtcbiAgdG9wOiAtNjJweDtcbiAgcmlnaHQ6IDE1cHg7XG59XG4uc2VhcmNoLWNvbnRhaW5lciBidXR0b257XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDEzLjN2aDtcbiAgd2lkdGg6IDEyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDIwcHggMDtcbn1cbi5zZWFyY2gtY29udGFpbmVyIGJ1dHRvbiBzZWxlY3Qge1xuICB3aWR0aDogMTIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDIwcHggMDtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4udG9nZ2xlQnRue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudCA7XG4gIG1hcmdpbi1yaWdodDogLTQwcHggIWltcG9ydGFudDtcblxufVxuLmZpbHRlcntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogN3ZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5zZWN0aW9ue1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5saXN0aW5ne1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmNvbXBhbnlDYXJke1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cbi5jYXJkSGVhZGVye1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cbi5sb2dve1xuICBoZWlnaHQ6IGF1dG87XG59XG4ubG9nbyBpbWd7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgcGFkZGluZzogNXB4IDAgMCAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uY29tcGFueUluZm97XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmNvbXBhbnlJbmZvIGgxe1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDVweCAwIDAgMDtcbn1cbi5jb21wYW55SW5mbyBidXR0b257XG4gIHdpZHRoOiAxNSU7XG4gIGJvcmRlcjogc29saWQgMXB4ICM3MDcwNzA7O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogIzcwNzA3MDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGREZBO1xufVxuLmIxIGltZ1xueyBcbiAgd2lkdGg6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG5cbn1cbi5zdG9yeUJ0bntcbiAgd2lkdGg6IDE1JTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnN0b3J5QnRuIGJ1dHRvbntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogIzcwNzA3MDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXI6IHNvbGlkIDFweCAjNzA3MDcwO1xuXG59XG5cbi5kaXNjcmlwdGlvbntcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uZGlzY3JpcHRpb24gcHtcbiAgd2lkdGg6IDgwJTtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY2FyZEZvb3RlcntcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udGFnc3tcbiAgd2lkdGg6IDgwJTtcblxufVxuLyogLnRhZ3MgcHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwcHggMCAxNXB4IDA7XG59ICovXG4udGFncyBzcGFuXG57XG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xuICAgIHBhZGRpbmc6IDBweCA0OHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWFyZ2luOiAxJTtcbn1cbi5pY29uc3tcbiAgd2lkdGg6IDIwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5pY29ucyBzcGFuXG57XG4gIG1hcmdpbjogLTklIDElIDElO1xufVxuLmljb25zIGltZ1xue1xuICB3aWR0aDogODAlO1xufVxuLmljb25zIHB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMHB4IDAgMTVweCAwO1xufVxuLmRlc1xue1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xuICBzZWN0aW9ue1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLXRvcDogNyU7XG4gIH1cbiAgLmNvbXBhbnlDYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG5cbn1cbi5zdG9yeUJ0biB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY29tcGFueUluZm8gaDEge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA1cHggMCAwIDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5iMXtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogMjlweDtcbn1cbi5kaXNjcmlwdGlvblxue1xuICBkaXNwbGF5OiBub25lO1xufVxuLmRlc1xue1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jYXJkRm9vdGVyXG57XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY29tcGFueUluZm8gIGJ1dHRvbntcbiAgd2lkdGg6IDI3JTtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcbiAgc2VjdGlvbntcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuICAuc3RvcnlCdG57XG4gICAgd2lkdGg6IDI2JTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/Search/company-search/company-search.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/Search/company-search/company-search.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-side-nav></app-side-nav>\n<app-s-page-header-search></app-s-page-header-search>\n<app-s-page-header></app-s-page-header>\n<section>\n<div class=\"listing\" >\n\n<div class=\"companyCard\"*ngFor=\"let r of this.result; let i = index\" >\n    \n<div class=\"cardHeader\">\n  <div class=\"logo\">\n   <img src=\"https://picsum.photos/200/300/?random\">\n  </div>\n  <div class=\"companyInfo\">\n    <h1>{{r[i].companyName}}<span class=\"b1\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"  viewBox=\"0 0 24 24\"><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg></span></h1>\n    <p><span style=\"padding: 0 10px 0 0;border-right: 1px solid #ccc\" >{{r[i].location}}</span> <span style=\"padding: 0 0 0 10px;\">Industry</span></p>\n    <button (click)=\"follow(r[i]._id)\">Follow</button> <span style=\"margin-left:15px;\"> &nbsp;24,567 followers</span>\n    {{r[i]._id}}\n  </div>\n  \n  <div class=\"storyBtn\">\n  <button>Know Our Story</button>\n  </div>\n \n</div>\n<div class=\"discription\">\n  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n</div>\n<mat-accordion  class=\"des\">\n\n    <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                         (closed)=\"panelOpenState = false\">\n      <mat-expansion-panel-header  class=\"speci\" style=\"background-color:#F5F5F5;\">\n        <mat-panel-title>\n            <h2 >Description</h2>\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <div class=\"speci_1\"  >\n        <div class=\"speci_details\">\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n         \n        </div>\n        \n        </div>\n    </mat-expansion-panel>\n  \n  </mat-accordion>\n<div class=\"cardFooter\">\n<div class=\"tags\">\n        \n            <span> 1</span>\n            <span> 2</span>\n            <span> 3</span>\n</div>\n<div class=\"icons\">\n    <span><img src=\"assets/images/google_icon.png\"></span>\n    <span><img src=\"assets/images/contact1.png\"></span>\n</div>\n</div>\n</div>\n</div>\n</section>\n"

/***/ }),

/***/ "./src/app/Search/company-search/company-search.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Search/company-search/company-search.component.ts ***!
  \*******************************************************************/
/*! exports provided: CompanySearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanySearchComponent", function() { return CompanySearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Service/search.service */ "./src/app/Service/search.service.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var src_app_Service_company_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/company-service.service */ "./src/app/Service/company-service.service.ts");
/* harmony import */ var src_app_Service_user_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/user-services.service */ "./src/app/Service/user-services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Service_follow_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Service/follow-service.service */ "./src/app/Service/follow-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var CompanySearchComponent = /** @class */ (function () {
    function CompanySearchComponent(storage, search, follows, companyService, userService, route) {
        this.storage = storage;
        this.search = search;
        this.follows = follows;
        this.companyService = companyService;
        this.userService = userService;
        this.route = route;
        this.panelOpenState = false;
        this.result = [];
    }
    CompanySearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.word = this.route.snapshot.paramMap.get('word');
        this.page = this.route.snapshot.paramMap.get('page');
        this.userService.token = this.storage.get('token');
        this.search.onSearchCompany(this.word).subscribe(function (res) {
            _this.result = JSON.parse(res['_body']);
            console.log(_this.result);
        });
    };
    CompanySearchComponent.prototype.follow = function (id) {
        this.follows.token = this.storage.get('token');
        this.follows.addFollow(id).subscribe(function (res) {
            console.log(res);
        });
    };
    CompanySearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-search',
            template: __webpack_require__(/*! ./company-search.component.html */ "./src/app/Search/company-search/company-search.component.html"),
            styles: [__webpack_require__(/*! ./company-search.component.css */ "./src/app/Search/company-search/company-search.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["WebStorageService"], _Service_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"], src_app_Service_follow_service_service__WEBPACK_IMPORTED_MODULE_6__["FollowService"], src_app_Service_company_service_service__WEBPACK_IMPORTED_MODULE_3__["CompanyServiceService"], src_app_Service_user_services_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], CompanySearchComponent);
    return CompanySearchComponent;
}());



/***/ }),

/***/ "./src/app/Search/search/search.component.css":
/*!****************************************************!*\
  !*** ./src/app/Search/search/search.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .search-bar{\n  width: 95%;\n  display: flex;\n}\n.search-container {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  margin-top: 120px;\n  z-index: -1;\n}\n\n\ninput#search-bar {\n  margin: 0 auto;\n  width: 100%;\n  height: 7vh;\n  padding: 0px 45px;\n  font-size: 1.5rem;\n  border: 1px solid #D0CFCE;\n  outline: none;\n  border-radius: 10px 0 0 10px;\n  outline: none;\n}\ninput#search-bar:focus {\n  transition: 0.35s ease;\n}\ninput#search-bar:focus::-webkit-input-placeholder {\n  transition: opacity 0.45s ease;\n  opacity: 0;\n}\ninput#search-bar:focus::-moz-placeholder {\n  transition: opacity 0.45s ease;\n  opacity: 0;\n}\ninput#search-bar:focus:-ms-placeholder {\n  transition: opacity 0.45s ease;\n  opacity: 0;\n}\n\n.search-icon {\n  position: relative;\n  float: left;\n  width: 75px;\n  height: 75px;\n  top: -62px;\n  right: 15px;\n}\n.search-container button{\n  position: relative;\n  padding: 0;\n  margin: 0;\n  height: 2.3vh;\n  border: none;\n  cursor: pointer;\n  border-radius: 0 10px 10px 0;\n}\n.search-container button  {\n  margin-right: 10px;\n  height: 70%;\n  padding: 0;\n  margin: 0;\n  text-align: center;\n  outline: none;\n  border-radius: 0 10px 10px 0;\n  padding: 0 40px;\n  font-size: 16px;\n}\n.toggleBtn{\n  position: relative;\n  padding: 0;\n  margin: 0;\n  width: 120px;\n  border: none;\n  cursor: pointer;\n  background-color: transparent;\n  border-radius: 0 !important ;\n  margin-right: -40px !important;\n\n}\n.filter{\n  width: 100%;\n  height: 7vh;\n  background-color: royalblue;\n  margin-top: 30px;\n} */\nsection{\n  width: 70%;\n  margin: 0 auto;\n  margin-top: 30px;\n  display: flex;\n  flex-wrap: wrap;\n\n}\n.listing{\n  width: 47%;\n  margin-right: 3%;\n}\n.Card{\n  width: 100%;\n  height: 15rem;\n  border-radius: 10px;\n\n  margin-bottom: 30px;\n  display: flex;\n  flex-wrap: wrap;\n  box-shadow: 0 2px 2px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23);\n}\n.productCard, .ServiceCard{\n  display: flex;\n\n  height: 100%;\n  border: 1px solid #cccccccc;\n  border-radius: 10px 10px 10px 10px\n}\n.productImage, .ServiceImage {\n  border-radius: 10px 0 0 10px;\n  width: 35%;\n  height: 100%;\n}\n.bookmark{\n   position: absolute;\n    margin-left: 10%;\n    font-size: 13px;\n    width: 20px;\n    height: 20px;\n    padding-top: 4px;\n    background-color: red;\n}\n.productImage img , .ServiceImage img{\n  width: 100%;\n  height: 100%;\n  border-radius: 10px 0 0 10px;\n}\n.productContent{\n  width: 65%;\n  height: 100%;\n  border-radius: 0px 10px 10px 0px;\n}\n.content{\n  width: 95%;\n  margin: 0 auto;\n  height: 100%;\n}\n.productContent .content .productCategory h6 ,.ServiceContent .content .ServiceCategory h6 {\n  float: right;\n  margin: 13px 15px 0 0;\n  font-size: 13px;\n  font-weight: 100;\n}\n.productContent .content .productName , .ServiceContent .content .ServiceName{\n  width: 100%;\n\n}\n.productContent .content .productName h2 , .ServiceContent .content .ServiceName h2{\n  margin: 0;\n  width: 100%;\n  font-weight: 100;\n  font-size: 25px;\n  padding-top: 3px;\n  justify-content: flex-end;\n    display: flex\n}\n.productContent .content .productName h5 ,.ServiceContent .content .ServiceName h5{\n  margin: 0;\n  font-weight: 100;\n  text-align: right;\n\n}\n.productContent .content .productName small , .ServiceContent .content .ServiceName small{\n  font-size: 12px;\n  text-align: right;\n}\n.tags{\n  width: 100%;\n  float: right;\n  background-color: azure;\n\n}\n.other-info{\n  width: 100%;\n  display: flex;\n}\n.price{\n  width: 30%;\n}\n.hits {\n  width: 70%;\n}\n.price h4{\n  margin: 0;\n  color: #25FE03;\n  font-size: 23px;\n}\n.hits p{\n  margin: 0;\n  float: right;\n}\n.ServiceContent{\n  width: 65%;\n  height: 100%;\n  border-radius: 10px 0px 0px 10px;\n}\n.ServiceImage{\n  border-radius: 0 10px 10px 0;\n}\n.ServiceImage img{\n  border-radius: 0 10px 10px 0;\n}\n.ServiceContent .content .ServiceCategory h6 {\n  float: right;\n  margin: 13px 0 0 15px;\n}\n.ServiceCard .price{\n  width: 70%;\n}\n.ServiceCard .hits {\n  width: 30%;\n}\n.ServiceCard .price h4{\n  margin: 0;\n}\n.ServiceCard .hits p{\n  margin: 0;\n  float: left;\n}\n.mob-cards{\n  display: none;\n}\n.mob-cards{\n  display:flex;\n  flex-wrap: wrap;\n width: 100%;\n margin: 0 auto;\n}\n.card-wrapper{\n  width: 46%;\n  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .2), 0 1px 8px 0 rgba(0, 0, 0, .12);\n  margin-left: 2%;\n  margin-right: 2%;\n}\n.img-banner img{\n  max-width:100%;\n  height:auto;\n}\n.content-details p{\nmargin-top: 0;\nfont-size: 13px;\n}\n.footer-content{\n  margin: 0 auto;\n}\n.card-wrapper h6{\n  margin: 0;\n  margin-top:5px;\n  margin-bottom: 5px;\n}\n.card-wrapper h5{\n  margin: 0;\n  margin-bottom: 6px;\n  font-weight: 500;\n  padding: 5px;\n}\n/* @media (max-width:1013px){\n  .card-wrapper{\n  max-width:400px;\n}\n  .header{\n  font-size:20px;\n}\n  .btn{\n  height:10px;\n  width:100px;\n  margin:20px;\n align-items:center;\n}\n  .img-banner img{\n  max-width:400px;\n  height:auto;\n}\n} */\n.mob-cards{\n  display: none;\n}\n@media screen and (max-width: 700px){\n.listing{display: none;}\n.mob-cards{\n  display:flex;\nflex-wrap: wrap;\npadding-top: 21px;\n\n}\n\n}\n@media screen and (min-width: 767px)and (max-width: 1024px){\n  .Card{\n    width: 100%;\n    height: 15rem;\n    border-radius: 10px;\n    margin-right: 3%;\n    margin-bottom: 30px;\n    display: flex;\n    flex-wrap: wrap;\n    box-shadow: 0 2px 2px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23);\n  }\n}\n.unbookmark{\n  background-color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2VhcmNoL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXFGSTtBQUNKO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGdCQUFnQjs7Q0FFakI7QUFDRDtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0JBQW9COztFQUVwQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtRUFBbUU7Q0FDcEU7QUFDRDtFQUNFLGNBQWM7O0VBRWQsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixrQ0FBa0M7Q0FDbkM7QUFDRDtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsYUFBYTtDQUNkO0FBQ0Q7R0FDRyxtQkFBbUI7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixzQkFBc0I7Q0FDekI7QUFDRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCO0NBQzlCO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGlDQUFpQztDQUNsQztBQUNEO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0NBQ2Q7QUFFRDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsWUFBWTs7Q0FFYjtBQUNEO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiwwQkFBMEI7SUFDeEIsYUFBYTtDQUNoQjtBQUNEO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7O0NBRW5CO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHdCQUF3Qjs7Q0FFekI7QUFDRDtFQUNFLFlBQVk7RUFDWixjQUFjO0NBQ2Y7QUFDRDtFQUNFLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsV0FBVztDQUNaO0FBQ0Q7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsVUFBVTtFQUNWLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixpQ0FBaUM7Q0FDbEM7QUFDRDtFQUNFLDZCQUE2QjtDQUM5QjtBQUNEO0VBQ0UsNkJBQTZCO0NBQzlCO0FBQ0Q7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0NBQ3ZCO0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7QUFDRDtFQUNFLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsVUFBVTtDQUNYO0FBQ0Q7RUFDRSxVQUFVO0VBQ1YsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxjQUFjO0NBQ2Y7QUFDRDtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakIsWUFBWTtDQUNaLGVBQWU7Q0FDZjtBQUNEO0VBQ0UsV0FBVztFQUNYLDZHQUE2RztFQUM3RyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsWUFBWTtDQUNiO0FBRUQ7QUFDQSxjQUFjO0FBQ2QsZ0JBQWdCO0NBQ2Y7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixhQUFhO0NBQ2Q7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpQkk7QUFDSjtFQUNFLGNBQWM7Q0FDZjtBQUNEO0FBQ0EsU0FBUyxjQUFjLENBQUM7QUFDeEI7RUFDRSxhQUFhO0FBQ2YsZ0JBQWdCO0FBQ2hCLGtCQUFrQjs7Q0FFakI7O0NBRUE7QUFDRDtFQUNFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1FQUFtRTtHQUNwRTtDQUNGO0FBQ0Q7RUFDRSx3QkFBd0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9TZWFyY2gvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLnNlYXJjaC1iYXJ7XG4gIHdpZHRoOiA5NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMjBweDtcbiAgei1pbmRleDogLTE7XG59XG5cblxuaW5wdXQjc2VhcmNoLWJhciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3dmg7XG4gIHBhZGRpbmc6IDBweCA0NXB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0QwQ0ZDRTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmlucHV0I3NlYXJjaC1iYXI6Zm9jdXMge1xuICB0cmFuc2l0aW9uOiAwLjM1cyBlYXNlO1xufVxuaW5wdXQjc2VhcmNoLWJhcjpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40NXMgZWFzZTtcbiAgb3BhY2l0eTogMDtcbn1cbmlucHV0I3NlYXJjaC1iYXI6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNDVzIGVhc2U7XG4gIG9wYWNpdHk6IDA7XG59XG5pbnB1dCNzZWFyY2gtYmFyOmZvY3VzOi1tcy1wbGFjZWhvbGRlciB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40NXMgZWFzZTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnNlYXJjaC1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNzVweDtcbiAgdG9wOiAtNjJweDtcbiAgcmlnaHQ6IDE1cHg7XG59XG4uc2VhcmNoLWNvbnRhaW5lciBidXR0b257XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDIuM3ZoO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMDtcbn1cbi5zZWFyY2gtY29udGFpbmVyIGJ1dHRvbiAge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGhlaWdodDogNzAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMDtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4udG9nZ2xlQnRue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudCA7XG4gIG1hcmdpbi1yaWdodDogLTQwcHggIWltcG9ydGFudDtcblxufVxuLmZpbHRlcntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogN3ZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59ICovXG5zZWN0aW9ue1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG59XG4ubGlzdGluZ3tcbiAgd2lkdGg6IDQ3JTtcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcbn1cbi5DYXJke1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDNweCAzcHggcmdiYSgwLDAsMCwwLjIzKTtcbn1cbi5wcm9kdWN0Q2FyZCwgLlNlcnZpY2VDYXJke1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjY2NjO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4XG59XG4ucHJvZHVjdEltYWdlLCAuU2VydmljZUltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcbiAgd2lkdGg6IDM1JTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmJvb2ttYXJre1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbi5wcm9kdWN0SW1hZ2UgaW1nICwgLlNlcnZpY2VJbWFnZSBpbWd7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XG59XG4ucHJvZHVjdENvbnRlbnR7XG4gIHdpZHRoOiA2NSU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XG59XG4uY29udGVudHtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnByb2R1Y3RDb250ZW50IC5jb250ZW50IC5wcm9kdWN0Q2F0ZWdvcnkgaDYgLC5TZXJ2aWNlQ29udGVudCAuY29udGVudCAuU2VydmljZUNhdGVnb3J5IGg2IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDEzcHggMTVweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbi5wcm9kdWN0Q29udGVudCAuY29udGVudCAucHJvZHVjdE5hbWUgLCAuU2VydmljZUNvbnRlbnQgLmNvbnRlbnQgLlNlcnZpY2VOYW1le1xuICB3aWR0aDogMTAwJTtcblxufVxuLnByb2R1Y3RDb250ZW50IC5jb250ZW50IC5wcm9kdWN0TmFtZSBoMiAsIC5TZXJ2aWNlQ29udGVudCAuY29udGVudCAuU2VydmljZU5hbWUgaDJ7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBkaXNwbGF5OiBmbGV4XG59XG4ucHJvZHVjdENvbnRlbnQgLmNvbnRlbnQgLnByb2R1Y3ROYW1lIGg1ICwuU2VydmljZUNvbnRlbnQgLmNvbnRlbnQgLlNlcnZpY2VOYW1lIGg1e1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuXG59XG4ucHJvZHVjdENvbnRlbnQgLmNvbnRlbnQgLnByb2R1Y3ROYW1lIHNtYWxsICwgLlNlcnZpY2VDb250ZW50IC5jb250ZW50IC5TZXJ2aWNlTmFtZSBzbWFsbHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi50YWdze1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcblxufVxuLm90aGVyLWluZm97XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnByaWNle1xuICB3aWR0aDogMzAlO1xufVxuLmhpdHMge1xuICB3aWR0aDogNzAlO1xufVxuLnByaWNlIGg0e1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMjVGRTAzO1xuICBmb250LXNpemU6IDIzcHg7XG59XG4uaGl0cyBwe1xuICBtYXJnaW46IDA7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5TZXJ2aWNlQ29udGVudHtcbiAgd2lkdGg6IDY1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMTBweDtcbn1cbi5TZXJ2aWNlSW1hZ2V7XG4gIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XG59XG4uU2VydmljZUltYWdlIGltZ3tcbiAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMDtcbn1cbi5TZXJ2aWNlQ29udGVudCAuY29udGVudCAuU2VydmljZUNhdGVnb3J5IGg2IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDEzcHggMCAwIDE1cHg7XG59XG4uU2VydmljZUNhcmQgLnByaWNle1xuICB3aWR0aDogNzAlO1xufVxuLlNlcnZpY2VDYXJkIC5oaXRzIHtcbiAgd2lkdGg6IDMwJTtcbn1cbi5TZXJ2aWNlQ2FyZCAucHJpY2UgaDR7XG4gIG1hcmdpbjogMDtcbn1cbi5TZXJ2aWNlQ2FyZCAuaGl0cyBwe1xuICBtYXJnaW46IDA7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLm1vYi1jYXJkc3tcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5tb2ItY2FyZHN7XG4gIGRpc3BsYXk6ZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuIHdpZHRoOiAxMDAlO1xuIG1hcmdpbjogMCBhdXRvO1xufVxuLmNhcmQtd3JhcHBlcntcbiAgd2lkdGg6IDQ2JTtcbiAgYm94LXNoYWRvdzogMCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDNweCAzcHggLTJweCByZ2JhKDAsIDAsIDAsIC4yKSwgMCAxcHggOHB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIG1hcmdpbi1yaWdodDogMiU7XG59XG4uaW1nLWJhbm5lciBpbWd7XG4gIG1heC13aWR0aDoxMDAlO1xuICBoZWlnaHQ6YXV0bztcbn1cblxuLmNvbnRlbnQtZGV0YWlscyBwe1xubWFyZ2luLXRvcDogMDtcbmZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmZvb3Rlci1jb250ZW50e1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYXJkLXdyYXBwZXIgaDZ7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDo1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5jYXJkLXdyYXBwZXIgaDV7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cblxuLyogQG1lZGlhIChtYXgtd2lkdGg6MTAxM3B4KXtcbiAgLmNhcmQtd3JhcHBlcntcbiAgbWF4LXdpZHRoOjQwMHB4O1xufVxuICAuaGVhZGVye1xuICBmb250LXNpemU6MjBweDtcbn1cbiAgLmJ0bntcbiAgaGVpZ2h0OjEwcHg7XG4gIHdpZHRoOjEwMHB4O1xuICBtYXJnaW46MjBweDtcbiBhbGlnbi1pdGVtczpjZW50ZXI7XG59XG4gIC5pbWctYmFubmVyIGltZ3tcbiAgbWF4LXdpZHRoOjQwMHB4O1xuICBoZWlnaHQ6YXV0bztcbn1cbn0gKi9cbi5tb2ItY2FyZHN7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XG4ubGlzdGluZ3tkaXNwbGF5OiBub25lO31cbi5tb2ItY2FyZHN7XG4gIGRpc3BsYXk6ZmxleDtcbmZsZXgtd3JhcDogd3JhcDtcbnBhZGRpbmctdG9wOiAyMXB4O1xuXG59XG5cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KWFuZCAobWF4LXdpZHRoOiAxMDI0cHgpe1xuICAuQ2FyZHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDNweCAzcHggcmdiYSgwLDAsMCwwLjIzKTtcbiAgfVxufVxuLnVuYm9va21hcmt7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/Search/search/search.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Search/search/search.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header>\n<div class=\"search-bar\">\n  <div class=\"search-container\">\n      <input type=\"search\" id=\"search-bar\" placeholder=\"SEARCH\">\n\n      <button>S</button>\n\n    <button class=\"toggleBtn\" style=\"margin-left: 40px;\"><h1>Show</h1></button>\n  </div>\n</div>\n<div *ngIf=\"false\" class=\"filter\">\n</div>\n<app-tab-header></app-tab-header> -->\n<app-header></app-header>\n<app-side-nav></app-side-nav>\n<app-s-page-header-search></app-s-page-header-search>\n<app-s-page-header></app-s-page-header>\n<section class=\"fullscreen\">\n<div class=\"listing\" *ngFor=\"let result of this.search.searchResult; let i = index;\">\n  <!-- <--------------------------------------------------------------------Product Card------------------------------------------------------------------------->\n<div class=\"Card\" *ngIf=\"result != null\" >\n\n  <div>\n\n    <div class=\"productCard\" *ngIf=\"result.type == 1 && result._id != null\" >\n      <div class=\"productImage\">\n          <div class=\"bookmark\" *ngIf=\"notlogin\" (click)=\"openLogin()\">\n\n            </div>\n        <div class=\"bookmark\" *ngIf=\"!notlogin\" (click)=\"bookmark(result._id)\" >\n\n        </div>\n        <div class=\"bookmark\" *ngIf=\"!notlogin && unbookmarked\" (click)=\"bookmark(result._id)\" >\n\n        </div>\n        <div class=\"bookmark unbookmark\" *ngIf=\"!notlogin && !unbookmarked\" (click)=\"unbookmark(result._id)\" >\n\n        </div>\n        <img src=\"https://picsum.photos/200/300/?random\">\n      </div>\n      <div class=\"productContent\" >\n      <div class=\"content\">\n      <div class=\"productCategory\">\n      <h6>{{result.catogory}}</h6>\n      </div>\n      <div class=\"productName\">\n        <h2 routerLink = \"/product-page/{{result._id}}\">{{result.productName}}</h2>\n        <h5 routerLink =\"/companyPage/{{result.c_id}}\">{{result.company}}</h5>\n        <small style=\"float:right\"><span style=\"border-right:1px solid #cccccc; padding-right: 4px\">Device</span><span style= \"padding-left: 8px\">country</span></small>\n      </div>\n      <div class=\"discription\" style=\"margin-top:30px;\">\n      <p>{{result.shortDescription}}</p>\n      </div>\n      <div class=\"tags\">\n\n      </div>\n      <div class=\"other-info\">\n        <div class=\"price\">\n        <h4>{{result.minPrice}}</h4>\n      </div>\n      <div class=\"hits\">\n        <p>24,354 hits</p>\n      </div>\n      </div>\n      </div>\n      </div>\n        </div>\n        <!-- <--------------------------------------------------------------------Service Card------------------------------------------------------------------------->\n        <div class=\"ServiceCard\" *ngIf=\"result.type == 2 && result._id != null\" >\n\n            <div class=\"ServiceContent\">\n            <div class=\"content\">\n            <div class=\"ServiceCategory\">\n            <h6>{{result.catogory}}</h6>\n            </div>\n            <div class=\"ServiceName\">\n              <h2>{{result.serviceName}}</h2>\n              <h5>{{result.company}}</h5>\n              <small style=\"float:right\"><span style=\"border-right:1px solid #cccccc; padding-right: 8px\">Device</span><span style= \"padding-left: 8px\">Country</span></small>\n            </div>\n            <div class=\"discription\" style=\"margin-top:30px;\">\n            <p>{{result.shortDescription}}</p>\n            </div>\n            <div class=\"tags\">\n\n            </div>\n            <div class=\"other-info\">\n              <div class=\"price\">\n              <h4>{{result.minPrice}}</h4>\n            </div>\n            <div class=\"hits\">\n              <p>24,354 hits</p>\n            </div>\n            </div>\n            </div>\n            </div>\n            <div class=\"ServiceImage\">\n                <div class=\"bookmark\" (click)=\"serviceBookmark(result.id)\">\n\n                </div>\n                <img src=\"https://picsum.photos/200/300/?random\">\n              </div>\n              </div>\n  </div>\n</div>\n\n</div>\n</section>\n\n<div class=\"mob-cards\">\n    <div class=\"card-wrapper\">\n        <div class=\"header\">\n            <div class=\"header-content\" style=\"width:95%; display: flex\">\n              <h5 style=\"width:50%;\">Product</h5>\n              <h5  style=\"float:right;justify-content: flex-end; display: flex; width: 50%; text-align: right\" >Bookmark</h5>\n          </div>\n          <div class=\"header-content\" style=\"width:95%; display: flex\" *ngIf=\"false\">\n              <h5 style=\"width:50%;\">Service</h5>\n              <h5  style=\"float:right;justify-content: flex-end; display: flex; width: 50%; text-align: right\" >Bookmark</h5>\n          </div>\n        </div>\n\n      <div class=\"img-banner\"><img src=\"https://images.unsplash.com/photo-1543872981-578a0310c83a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80\"></div>\n\n      <div class=\"main-content\">\n        <div class=\"content-details\">\n          <p>Something is here Some of the contnet</p>\n        </div>\n      </div>\n      <div class=\"footer\">\n        <div class=\"footer-content\" style=\"width:95%; border-top:1px solid #ccc; display: flex\">\n          <h6 style=\"width:35%;\">Price</h6>\n          <h6  style=\"float:right;justify-content: flex-end; display: flex; width: 65%; text-align: right\" >23,445 hits</h6>\n      </div>\n    </div>\n\n</div>\n\n<div class=\"card-wrapper\">\n    <div class=\"header\">\n        <div class=\"header-content\" style=\"width:95%; display: flex\">\n          <h5 style=\"width:50%;\">Product</h5>\n          <h5  style=\"float:right;justify-content: flex-end; display: flex; width: 50%; text-align: right\" >Bookmark</h5>\n      </div>\n      <div class=\"header-content\" style=\"width:95%; display: flex\" *ngIf=\"false\">\n          <h5 style=\"width:50%;\">Service</h5>\n          <h5  style=\"float:right;justify-content: flex-end; display: flex; width: 50%; text-align: right\" >Bookmark</h5>\n      </div>\n    </div>\n\n  <div class=\"img-banner\"><img src=\"https://images.unsplash.com/photo-1543872981-578a0310c83a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80\"></div>\n\n  <div class=\"main-content\">\n    <div class=\"content-details\">\n      <p>Something is here Some of the contnet</p>\n    </div>\n  </div>\n  <div class=\"footer\">\n    <div class=\"footer-content\" style=\"width:95%; border-top:1px solid #ccc; display: flex\">\n      <h6 style=\"width:35%;\">Price</h6>\n      <h6  style=\"float:right;justify-content: flex-end; display: flex; width: 65%; text-align: right\" >23,445 hits</h6>\n  </div>\n</div>\n\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/Search/search/search.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Search/search/search.component.ts ***!
  \***************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Service/search.service */ "./src/app/Service/search.service.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var src_app_Service_bookmark_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/bookmark-services.service */ "./src/app/Service/bookmark-services.service.ts");
/* harmony import */ var _Auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Auth/login/login.component */ "./src/app/Auth/login/login.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Service_user_services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Service/user-services.service */ "./src/app/Service/user-services.service.ts");
/* harmony import */ var src_app_Service_product_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Service/product-service.service */ "./src/app/Service/product-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_company_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Service/company-service.service */ "./src/app/Service/company-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var SearchComponent = /** @class */ (function () {
    function SearchComponent(storage, search, bookmarksService, dialog, userService, product, route, companyService) {
        this.storage = storage;
        this.search = search;
        this.bookmarksService = bookmarksService;
        this.dialog = dialog;
        this.userService = userService;
        this.product = product;
        this.route = route;
        this.companyService = companyService;
        this.show = false;
        this.results = [];
        this.notlogin = true;
        this.unbookmarked = true;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.bookmarksService.token = this.storage.get('token');
        this.userService.token = this.storage.get('token');
        this.product.token = this.storage.get('token');
        this.companyService.token = this.storage.get('token');
        this.token = this.storage.get('token');
        this.word = this.route.snapshot.paramMap.get('word');
        this.page = this.route.snapshot.paramMap.get('page');
        this.search.onSearch(this.word, this.page);
        console.log(this.token);
        if (this.token != null) {
            this.notlogin = false;
        }
        console.log(this.notlogin);
    };
    SearchComponent.prototype.bookmark = function (id) {
        console.log(id);
        this.bookmarksService.addPostBookmark(id).subscribe(function (res) {
            console.log(res);
        });
        this.unbookmarked = false;
    };
    SearchComponent.prototype.unbookmark = function (id) {
        this.unbookmarked = true;
    };
    SearchComponent.prototype.openLogin = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '30%';
        this.dialog.open(_Auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], dialogConfig);
    };
    SearchComponent.prototype.serviceBookmark = function (id) {
        this.bookmarksService.addServiceBookmark(id).subscribe(function (res) {
            console.log(res);
        });
    };
    SearchComponent.prototype.showProduct = function (id) {
        // this.product.getOneproduct(id).subscribe(res => {
        //  console.log(JSON.parse(res['_body']));
        // });
    };
    SearchComponent.prototype.openCompany = function (id) {
        this.companyService.GetoneCompany(id).subscribe(function (res) {
            console.log(res.json);
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/Search/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/Search/search/search.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["WebStorageService"],
            _Service_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"], src_app_Service_bookmark_services_service__WEBPACK_IMPORTED_MODULE_3__["BookmarkServices"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _Service_user_services_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], src_app_Service_product_service_service__WEBPACK_IMPORTED_MODULE_7__["ProductServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _Service_company_service_service__WEBPACK_IMPORTED_MODULE_9__["CompanyServiceService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/Service/bookmark-services.service.ts":
/*!******************************************************!*\
  !*** ./src/app/Service/bookmark-services.service.ts ***!
  \******************************************************/
/*! exports provided: BookmarkServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkServices", function() { return BookmarkServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookmarkServices = /** @class */ (function () {
    function BookmarkServices(http) {
        this.http = http;
    }
    BookmarkServices.prototype.addProductBookmarks = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('x-auth', this.token);
        console.log(this.token);
        return this.http.patch('http://www.elroute.co.in/api/bookmark/product/' + id, id, { headers: headers });
    };
    BookmarkServices.prototype.addCompanyBookmark = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('x-auth', this.token);
        console.log(this.token);
        return this.http.patch('http://www.elroute.co.in/api/bookmark/company/' + id, id, { headers: headers });
    };
    BookmarkServices.prototype.addPostBookmark = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('x-auth', this.token);
        console.log(this.token);
        console.log(id);
        return this.http.patch('http://www.elroute.co.in/api/bookmark/post/' + id, id, { headers: headers });
    };
    BookmarkServices.prototype.addServiceBookmark = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('x-auth', this.token);
        return this.http.patch('http://www.elroute.co.in/api/bookmark/service/' + id, id, { headers: headers });
    };
    BookmarkServices.prototype.BookmarkResult = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('x-auth', this.token);
        return this.http.get('http://www.elroute.co.in/api/bookmarksave', { headers: headers });
    };
    BookmarkServices.prototype.removeProduct = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('x-auth', this.token);
        console.log(this.token);
        return this.http.patch('http://www.elroute.co.in/api/bookmark/product/', { headers: headers });
    };
    BookmarkServices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], BookmarkServices);
    return BookmarkServices;
}());



/***/ }),

/***/ "./src/app/Service/company-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Service/company-service.service.ts ***!
  \****************************************************/
/*! exports provided: CompanyServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyServiceService", function() { return CompanyServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanyServiceService = /** @class */ (function () {
    function CompanyServiceService(http) {
        this.http = http;
    }
    // signup(user) {
    //  return this.http.post('http://www.elroute.co.in/api/auth/signup', user);
    // }
    // login(user) {
    //   return this.http.post('http://www.elroute.co.in/api/auth/login', user);
    // }
    // onEditUser(user) {
    // const headers = new Headers();
    // headers.append('x-auth', this.token);
    //   return this.http.patch('http://www.elroute.co.in/api/user/update', user, {headers: headers});
    // }
    CompanyServiceService.prototype.addCompany = function (company) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var companyFormData = new FormData();
        companyFormData.append('companyName', company.companyName);
        companyFormData.append('country', company.country);
        companyFormData.append('city', company.city);
        companyFormData.append('companyEmail', company.companyEmail);
        companyFormData.append('industry', company.industry);
        companyFormData.append('category', company.category);
        companyFormData.append('website', company.website);
        companyFormData.append('companyType', company.companyType);
        companyFormData.append('image', company.image);
        companyFormData.append('companySize', company.companySize);
        companyFormData.append('yearEstd', company.yearEstd);
        companyFormData.append('address', company.address);
        companyFormData.append('city', company.city);
        companyFormData.append('zipcode', company.zipCode);
        companyFormData.append('landline', company.landLine);
        companyFormData.append('mobile', company.mobile);
        headers.append('x-auth', this.token);
        console.log(this.token);
        return this.http.post('http://www.elroute.co.in/api/company', companyFormData, { headers: headers });
    };
    // addCompany3(company){
    //   const headers=new Headers();
    //   headers.append('x-auth',this.token);
    //   const companyFormData=new FormData();
    //   companyFormData.append('address',company.address);
    //       companyFormData.append('city',company.city);
    //       companyFormData.append('zipcode',company.zipCode);
    //       companyFormData.append('landline',company.landLine);
    //       companyFormData.append('mobile',company.mobile);
    //       // headers.append('x-auth', this.token);
    //       return this.http.patch('http://www.elroute.co.in/api/company/update/' ,companyFormData , {headers: headers});
    // }
    // showComapny(){
    //   const headers=new Headers();
    //   headers.append('x-auth',this.token);
    //   return this.http.get('http://www.elroute.co.in/api/company',{headers: headers});
    // }
    // OneditCompany(company,id) {
    //   const headers = new Headers();
    //   headers.append('x-auth', this.token);
    //   return this.http.patch('http://www.elroute.co.in/api/company/update/' + id, company, {headers: headers});
    // }
    CompanyServiceService.prototype.GetCompany = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('x-auth', this.token);
        return this.http.get('http://www.elroute.co.in/api/company', { headers: headers });
    };
    CompanyServiceService.prototype.GetoneCompany = function (id) {
        console.log(id);
        return this.http.get('http://www.elroute.co.in/api/company/' + id, id);
    };
    //   searchResult(query){
    //     return this.http.get('http://www.elroute.co.in/api/search/'+query);
    //   }
    //   addFeed(post){
    //     const headers=new Headers();
    //     headers.append('x-auth',this.token);
    //     return this.http.post('http://www.elroute.co.in/api/post',post,{headers:headers});
    //   }
    //   getFeed(){
    //     const headers=new Headers();
    //     headers.append('x-auth',this.token);
    //     return this.http.get('http://www.elroute.co.in/api/post', {headers: headers});
    //   }
    //   onEditPost(post,id){
    //     const headers=new Headers();
    //     headers.append('x-auth',this.token);
    //     return this.http.patch('http://www.elroute.co.in/api/post/update/'+id,post, {headers: headers});
    //   }
    //   Followers(companyName){
    //     const headers=new Headers();
    //     headers.append('x-auth',this.token);
    //     return this.http.patch('http://www.elroute.co.in/api/company/follow',companyName, {headers: headers});
    //   }
    //   showFollowers(){
    //     const headers=new Headers();
    //     headers.append('x-auth',this.token);
    //     return this.http.get('http://www.elroute.co.in/api/user/followers', {headers: headers});
    //   }
    //   GetServices(type){
    //     const headers=new Headers();
    //     headers.append('x-auth',this.token);
    //     return this.http.get('http://www.elroute.co.in/api/service/'+type, {headers: headers});
    //   }
    //   GetProduct(){
    //     const headers=new Headers();
    //     headers.append('x-auth',this.token);
    //     return this.http.get('http://www.elroute.co.in/api/product', {headers: headers});
    //   }
    //   bookMark(id) {
    //     const headers = new Headers();
    //     headers.append('x-auth', this.token);
    //     return this.http.patch('http://www.elroute.co.in/api/bookmark/product/'+id, {headers: headers});
    //   }
    // download() {
    //   const headers = new Headers();
    //   headers.append('x-auth', this.token);
    //   return this.http.get('http://www.elroute.co.in/api/bookmarksave', {headers: headers});
    // }
    CompanyServiceService.prototype.companyFollowing = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('x-auth', this.token);
        return this.http.patch('http://www.elroute.co.in/api/company/follow/' + id, { headers: headers });
    };
    CompanyServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CompanyServiceService);
    return CompanyServiceService;
}());



/***/ }),

/***/ "./src/app/Service/feed-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Service/feed-service.service.ts ***!
  \*************************************************/
/*! exports provided: FeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedService", function() { return FeedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedService = /** @class */ (function () {
    function FeedService(http) {
        this.http = http;
    }
    FeedService.prototype.GetFeed = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('x-auth', this.token);
        return this.http.get('http://www.elroute.co.in/api/feed/' + id, { headers: headers });
    };
    FeedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], FeedService);
    return FeedService;
}());



/***/ }),

/***/ "./src/app/Service/follow-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/Service/follow-service.service.ts ***!
  \***************************************************/
/*! exports provided: FollowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowService", function() { return FollowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FollowService = /** @class */ (function () {
    function FollowService(http) {
        this.http = http;
    }
    FollowService.prototype.addFollow = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('x-auth', this.token);
        return this.http.get('http://www.elroute.co.in/api/follow/' + id, { headers: headers });
    };
    FollowService.prototype.getFollowers = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('x-auth', this.token);
        return this.http.get('http://www.elroute.co.in/api/followers', { headers: headers });
    };
    FollowService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], FollowService);
    return FollowService;
}());



/***/ }),

/***/ "./src/app/Service/product-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Service/product-service.service.ts ***!
  \****************************************************/
/*! exports provided: ProductServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductServiceService", function() { return ProductServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductServiceService = /** @class */ (function () {
    function ProductServiceService(http) {
        this.http = http;
    }
    ProductServiceService.prototype.addProduct = function (product) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var productData = new FormData();
        productData.append('productImage', product.productImage);
        productData.append('productName', product.productName);
        productData.append('shortDescription', product.shortDescription);
        productData.append('price ', product.price);
        productData.append('maxPrice', product.maxPrice);
        productData.append('minPrice', product.minPrice);
        productData.append('moq', product.moq);
        productData.append(' industry', product.industry);
        productData.append('category', product.category);
        productData.append('tfCode', product.tfCode);
        productData.append(' productSpecification', product.productSpecification);
        productData.append('specificationContent', product.specificationContent);
        productData.append('fieldName', product.fieldName);
        productData.append('fieldDes', product.fieldDes);
        headers.append('x-auth', this.token);
        console.log(this.token);
        return this.http.post('http://www.elroute.co.in/api/product', productData, { headers: headers });
    };
    ProductServiceService.prototype.getProduct = function (id) {
        return this.http.get('http://www.elroute.co.in/api/product/company/' + id);
    };
    ProductServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ProductServiceService);
    return ProductServiceService;
}());



/***/ }),

/***/ "./src/app/Service/search.service.ts":
/*!*******************************************!*\
  !*** ./src/app/Service/search.service.ts ***!
  \*******************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var SearchService = /** @class */ (function () {
    function SearchService(http, router, storage) {
        this.http = http;
        this.router = router;
        this.storage = storage;
    }
    SearchService.prototype.onSearch = function (word, page) {
        var _this = this;
        console.log(word);
        return this.http.get('http://www.elroute.co.in/api/search/' + word + '/' + page).subscribe(function (res) {
            console.log(JSON.parse(res['_body']));
            _this.searchResult = JSON.parse(res['_body']);
        });
    };
    SearchService.prototype.onSearchCompany = function (word) {
        return this.http.get('http://www.elroute.co.in/api/searchCompany/' + word);
    };
    SearchService.prototype.onSearchFeed = function (word, page) {
        var _this = this;
        return this.http.get('http://www.elroute.co.in/api/searchfeed/' + word + '/' + page).subscribe(function (res) {
            console.log(JSON.parse(res['_body']));
            _this.feedResult = JSON.parse(res['_body']);
        });
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["WebStorageService"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/Service/user-services.service.ts":
/*!**************************************************!*\
  !*** ./src/app/Service/user-services.service.ts ***!
  \**************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUserData = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('x-auth', this.token);
        return this.http.get('http://www.elroute.co.in/api/user', { headers: headers });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/StaticData/Footer/footer/footer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/StaticData/Footer/footer/footer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1N0YXRpY0RhdGEvRm9vdGVyL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/StaticData/Footer/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/StaticData/Footer/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/StaticData/Footer/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/StaticData/Footer/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/StaticData/Footer/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/StaticData/Footer/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/StaticData/Help/help/help.component.css":
/*!*********************************************************!*\
  !*** ./src/app/StaticData/Help/help/help.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1N0YXRpY0RhdGEvSGVscC9oZWxwL2hlbHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/StaticData/Help/help/help.component.html":
/*!**********************************************************!*\
  !*** ./src/app/StaticData/Help/help/help.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  help works!\n</p>\n"

/***/ }),

/***/ "./src/app/StaticData/Help/help/help.component.ts":
/*!********************************************************!*\
  !*** ./src/app/StaticData/Help/help/help.component.ts ***!
  \********************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/StaticData/Help/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/StaticData/Help/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/User/Edit/edit.component.css":
/*!**********************************************!*\
  !*** ./src/app/User/Edit/edit.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1VzZXIvRWRpdC9lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/User/Edit/edit.component.html":
/*!***********************************************!*\
  !*** ./src/app/User/Edit/edit.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/User/Edit/edit.component.ts":
/*!*********************************************!*\
  !*** ./src/app/User/Edit/edit.component.ts ***!
  \*********************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditComponent = /** @class */ (function () {
    function EditComponent() {
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/User/Edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/User/Edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/User/Profile/profile.component.css":
/*!****************************************************!*\
  !*** ./src/app/User/Profile/profile.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1VzZXIvUHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/User/Profile/profile.component.html":
/*!*****************************************************!*\
  !*** ./src/app/User/Profile/profile.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/User/Profile/profile.component.ts":
/*!***************************************************!*\
  !*** ./src/app/User/Profile/profile.component.ts ***!
  \***************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/User/Profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/User/Profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/User/followers/followers.component.css":
/*!********************************************************!*\
  !*** ./src/app/User/followers/followers.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n    width: 60%;\n    height: 100vh;\n    margin: 0 auto;\n    color: #111111;\n}\n\nsection h2 {\n    margin: 0;\n    font-weight: 400;\n    font-size: 25px;\n    margin-top: 5%;\n}\n\n.followers {\n    width: 100%;\n    height: 100%;\n    margin: 0 auto;\n    display: flex;\n    flex-wrap: wrap;\n    margin-top: 2%;\n    border: 1px solid #ccc;\n}\n\n.card {\n    width: 21%;\n    margin-right: 2%;\n    height: 14%;\n    margin-left: 2%;\n    display: flex;\n    margin-top: 3%;\n    box-shadow: 0px 2px 3px #5555;\n}\n\n.image {\n    width: 40%;\n    height: 80%;\n    vertical-align: middle;\n    border-radius: 50%;\n    background-color: black;\n    /* margin-top: auto;\n  margin-bottom: auto; */\n    margin: auto;\n}\n\n.image img {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n}\n\n.info {\n    width: 55%;\n    height: 100%;\n    margin-left: 2%;\n}\n\n.content {\n    width: 90%;\n    margin: 0 auto;\n}\n\n.companyName p {\n    margin: 0;\n    font-size: 10px;\n    text-align: right;\n}\n\n.name h4 {\n    bottom: 0;\n    margin-bottom: 0;\n}\n\n.name small {\n    font-size: 8px;\n    display: flex;\n    justify-content: flex-end;\n    margin: 0;\n}\n\n.follower_box {\n    margin: 0 auto;\n    width: 50%;\n    border: solid 5px gray;\n    height: -webkit-fit-content ! important;\n    height: -moz-fit-content ! important;\n    height: fit-content ! important;\n    margin-top: 27px;\n}\n\n.follower_user {\n    width: 100%;\n    box-shadow: 0px 2px 3px #5555;\n}\n\n.follower_location {\n    background-color: #111111;\n    width: 100%;\n    float: right;\n    height: 110px;\n}\n\n.follower_location span {\n    float: right;\n    color: white;\n    margin: 5px 10px;\n}\n\n.follower_img {\n    margin: 0 auto;\n    width: 28%;\n}\n\n.follower_img1 {\n    position: absolute;\n}\n\n.follower_img1 img {\n    border-radius: 100%;\n    width: 48%;\n    border: slo;\n    border: solid 5px white;\n    margin-top: 26px;\n}\n\n.follower_name {\n    text-align: center;\n    margin-top: 10%;\n}\n\n.follower_name h2 {\n    margin-bottom: auto;\n    margin-top: auto\n}\n\n.follower_name h5 {\n    margin-bottom: auto;\n    margin-top: auto\n}\n\n.follower_des {\n    margin: 8px auto;\n    width: 90%;\n    text-align: justify;\n    box-shadow: 0px 2px 3px #5555;\n}\n\n.follower_des p {\n    margin: 0 auto;\n    width: 90%;\n    text-align: justify;\n    padding: 10px 0;\n}\n\n.follower_company {\n    display: flex;\n    margin: 0 auto;\n    width: 90%;\n    padding: 10px 0;\n}\n\n.company {\n    width: 70%;\n    display: flex;\n}\n\n.company_logo {\n    width: 20%;\n}\n\n.company_logo img {\n    border-radius: 100%;\n    width: 100%;\n}\n\n.company_name {\n    margin-left: 4%;\n}\n\n.followBtn {\n    width: 30%;\n    height: auto;\n    float: right;\n    text-align: right;\n}\n\n.followBtn button {\n    width: 80%;\n    margin-top: 10px;\n    background-color: #8cee53;\n    color: #ffffff;\n    font-weight: 600;\n    height: 25px;\n    border-radius: 15px;\n    border: none;\n    margin-left: 10px;\n}\n\n.follwers_links {\n    margin: 0 auto;\n    width: 28%;\n    display: flex;\n}\n\n.follwers_links img {\n    width: 100%;\n}\n\n@media screen and (max-width:700px) {\n    section {\n        width: 90%;\n        height: 100vh;\n        margin: 0 auto;\n        color: #111111;\n    }\n    .follower_box {\n        height: -webkit-fit-content ! important;\n        height: -moz-fit-content ! important;\n        height: fit-content ! important;\n        margin: 0 auto;\n        width: 90%;\n        border: solid 5px gray;\n    }\n    .follower_img1 img {\n        border-radius: 100%;\n        width: 44%;\n        border: slo;\n        border: solid 5px white;\n        margin-top: 35px;\n    }\n    .follower_des p {\n        margin: 0 auto;\n        width: 90%;\n        text-align: justify;\n        padding: 10px 0;\n        font-size: 11px;\n    }\n    .followBtn button {\n        width: 100%;\n        margin-top: 10px;\n        background-color: #8cee53;\n        color: #ffffff;\n        font-weight: 600;\n        height: 25px;\n        border-radius: 15px;\n        border: none;\n        font-size: 12px;\n    }\n    .company_name {\n        margin-left: 4%;\n        font-size: 11px;\n    }\n    .card {\n        width: 46%;\n        margin-right: 2%;\n        height: 12%;\n        margin-left: 2%;\n        display: flex;\n        margin-top: 3%;\n        box-shadow: 0px 2px 3px #5555;\n    }\n    .name h4 {\n        bottom: 0;\n        margin-bottom: 0;\n        font-size: 13px;\n    }\n}\n\n@media screen and (min-width:767px)and (max-width:1024px) {\n    section {\n        width: 90%;\n        height: 100vh;\n        margin: 0 auto;\n        color: #111111;\n    }\n    .follower_box {\n        height: -webkit-fit-content ! important;\n        height: -moz-fit-content ! important;\n        height: fit-content ! important;\n        margin: 0 auto;\n        width: 90%;\n        border: solid 5px gray;\n    }\n    .follower_img {\n        margin: 0 auto;\n        width: 20%;\n    }\n    .follower_img1 img {\n        border-radius: 100%;\n        border: solid 5px white;\n        margin-top: 26px;\n        width: 50%;\n    }\n    .card {\n        width: 29%;\n        margin-right: 2%;\n        height: 17%;\n        margin-left: 2%;\n        display: flex;\n        margin-top: 3%;\n        box-shadow: 0px 2px 3px #5555;\n    }\n    font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVXNlci9mb2xsb3dlcnMvZm9sbG93ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLDhCQUE4QjtDQUNqQzs7QUFFRDtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEI7eUJBQ3FCO0lBQ3JCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksV0FBVztJQUNYLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLFVBQVU7SUFDVixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLDBCQUEwQjtJQUMxQixVQUFVO0NBQ2I7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix3Q0FBZ0M7SUFBaEMscUNBQWdDO0lBQWhDLGdDQUFnQztJQUNoQyxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0NBQ2pDOztBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztDQUNqQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQiw4QkFBOEI7Q0FDakM7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsY0FBYztDQUNqQjs7QUFFRDtJQUNJLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsY0FBYztDQUNqQjs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJO1FBQ0ksV0FBVztRQUNYLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZUFBZTtLQUNsQjtJQUNEO1FBQ0ksd0NBQWdDO1FBQWhDLHFDQUFnQztRQUFoQyxnQ0FBZ0M7UUFDaEMsZUFBZTtRQUNmLFdBQVc7UUFDWCx1QkFBdUI7S0FDMUI7SUFDRDtRQUNJLG9CQUFvQjtRQUNwQixXQUFXO1FBQ1gsWUFBWTtRQUNaLHdCQUF3QjtRQUN4QixpQkFBaUI7S0FDcEI7SUFDRDtRQUNJLGVBQWU7UUFDZixXQUFXO1FBQ1gsb0JBQW9CO1FBQ3BCLGdCQUFnQjtRQUNoQixnQkFBZ0I7S0FDbkI7SUFDRDtRQUNJLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsMEJBQTBCO1FBQzFCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLG9CQUFvQjtRQUNwQixhQUFhO1FBQ2IsZ0JBQWdCO0tBQ25CO0lBQ0Q7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0tBQ25CO0lBQ0Q7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGVBQWU7UUFDZiw4QkFBOEI7S0FDakM7SUFDRDtRQUNJLFVBQVU7UUFDVixpQkFBaUI7UUFDakIsZ0JBQWdCO0tBQ25CO0NBQ0o7O0FBRUQ7SUFDSTtRQUNJLFdBQVc7UUFDWCxjQUFjO1FBQ2QsZUFBZTtRQUNmLGVBQWU7S0FDbEI7SUFDRDtRQUNJLHdDQUFnQztRQUFoQyxxQ0FBZ0M7UUFBaEMsZ0NBQWdDO1FBQ2hDLGVBQWU7UUFDZixXQUFXO1FBQ1gsdUJBQXVCO0tBQzFCO0lBQ0Q7UUFDSSxlQUFlO1FBQ2YsV0FBVztLQUNkO0lBQ0Q7UUFDSSxvQkFBb0I7UUFDcEIsd0JBQXdCO1FBQ3hCLGlCQUFpQjtRQUNqQixXQUFXO0tBQ2Q7SUFDRDtRQUNJLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsZUFBZTtRQUNmLDhCQUE4QjtLQUNqQztJQUNELGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL1VzZXIvZm9sbG93ZXJzL2ZvbGxvd2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGNvbG9yOiAjMTExMTExO1xufVxuXG5zZWN0aW9uIGgyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5mb2xsb3dlcnMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uY2FyZCB7XG4gICAgd2lkdGg6IDIxJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICAgIGhlaWdodDogMTQlO1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggM3B4ICM1NTU1O1xufVxuXG4uaW1hZ2Uge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgLyogbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bzsgKi9cbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5pbWFnZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5pbmZvIHtcbiAgICB3aWR0aDogNTUlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbi5jb250ZW50IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY29tcGFueU5hbWUgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm5hbWUgaDQge1xuICAgIGJvdHRvbTogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubmFtZSBzbWFsbCB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmZvbGxvd2VyX2JveCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3JkZXI6IHNvbGlkIDVweCBncmF5O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQgISBpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMjdweDtcbn1cblxuLmZvbGxvd2VyX3VzZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggM3B4ICM1NTU1O1xufVxuXG4uZm9sbG93ZXJfbG9jYXRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGhlaWdodDogMTEwcHg7XG59XG5cbi5mb2xsb3dlcl9sb2NhdGlvbiBzcGFuIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogNXB4IDEwcHg7XG59XG5cbi5mb2xsb3dlcl9pbWcge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAyOCU7XG59XG5cbi5mb2xsb3dlcl9pbWcxIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5mb2xsb3dlcl9pbWcxIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB3aWR0aDogNDglO1xuICAgIGJvcmRlcjogc2xvO1xuICAgIGJvcmRlcjogc29saWQgNXB4IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDI2cHg7XG59XG5cbi5mb2xsb3dlcl9uYW1lIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4uZm9sbG93ZXJfbmFtZSBoMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICBtYXJnaW4tdG9wOiBhdXRvXG59XG5cbi5mb2xsb3dlcl9uYW1lIGg1IHtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IGF1dG9cbn1cblxuLmZvbGxvd2VyX2RlcyB7XG4gICAgbWFyZ2luOiA4cHggYXV0bztcbiAgICB3aWR0aDogOTAlO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggIzU1NTU7XG59XG5cbi5mb2xsb3dlcl9kZXMgcCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDkwJTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuLmZvbGxvd2VyX2NvbXBhbnkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDkwJTtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbi5jb21wYW55IHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb21wYW55X2xvZ28ge1xuICAgIHdpZHRoOiAyMCU7XG59XG5cbi5jb21wYW55X2xvZ28gaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY29tcGFueV9uYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogNCU7XG59XG5cbi5mb2xsb3dCdG4ge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmZvbGxvd0J0biBidXR0b24ge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGNlZTUzO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uZm9sbHdlcnNfbGlua3Mge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAyOCU7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmZvbGx3ZXJzX2xpbmtzIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzAwcHgpIHtcbiAgICBzZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGNvbG9yOiAjMTExMTExO1xuICAgIH1cbiAgICAuZm9sbG93ZXJfYm94IHtcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudCAhIGltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGJvcmRlcjogc29saWQgNXB4IGdyYXk7XG4gICAgfVxuICAgIC5mb2xsb3dlcl9pbWcxIGltZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIHdpZHRoOiA0NCU7XG4gICAgICAgIGJvcmRlcjogc2xvO1xuICAgICAgICBib3JkZXI6IHNvbGlkIDVweCB3aGl0ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICB9XG4gICAgLmZvbGxvd2VyX2RlcyBwIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgIH1cbiAgICAuZm9sbG93QnRuIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGNlZTUzO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLmNvbXBhbnlfbmFtZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0JTtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgIH1cbiAgICAuY2FyZCB7XG4gICAgICAgIHdpZHRoOiA0NiU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMiU7XG4gICAgICAgIGhlaWdodDogMTIlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi10b3A6IDMlO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDNweCAjNTU1NTtcbiAgICB9XG4gICAgLm5hbWUgaDQge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY3cHgpYW5kIChtYXgtd2lkdGg6MTAyNHB4KSB7XG4gICAgc2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBjb2xvcjogIzExMTExMTtcbiAgICB9XG4gICAgLmZvbGxvd2VyX2JveCB7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQgISBpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBib3JkZXI6IHNvbGlkIDVweCBncmF5O1xuICAgIH1cbiAgICAuZm9sbG93ZXJfaW1nIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgfVxuICAgIC5mb2xsb3dlcl9pbWcxIGltZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogc29saWQgNXB4IHdoaXRlO1xuICAgICAgICBtYXJnaW4tdG9wOiAyNnB4O1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgICAuY2FyZCB7XG4gICAgICAgIHdpZHRoOiAyOSU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMiU7XG4gICAgICAgIGhlaWdodDogMTclO1xuICAgICAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi10b3A6IDMlO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDNweCAjNTU1NTtcbiAgICB9XG4gICAgZm9udC1zaXplOiAxM3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/User/followers/followers.component.html":
/*!*********************************************************!*\
  !*** ./src/app/User/followers/followers.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n<h2>Followers</h2>\n<div class=\"followers\">\n<div class=\"card\" *ngFor=\"let follower of followers\">\n<div class=\"image\">\n<img src=\"https://picsum.photos/200/300/?random\">\n</div>\n<div class=\"info\">\n<div class=\"content\">\n  <div class=\"companyName\">\n    <p>{{follower.comapny}}</p>\n  </div>\n  <div class=\"name\">\n    <h4>{{follower.name}}</h4>\n    <small>{{follower.catogary}}</small>\n    <small style=\"text-transform:uppercase;margin-top: 8%;\">{{follower.country}}</small>\n  </div>\n</div>\n</div>\n</div>\n      <div class=\"follower_box\">\n        <div class=\"follower_user\">\n            <div class=\"follower_location\">\n              <span>INDIA</span>\n             </div> \n             <div class=\"follower_img\">\n                <div class=\"follower_img1\">\n                  <img src=\"assets/images/user.png\">\n                </div>\n             </div>\n            <div style=\"clear:both\"></div>\n             <div class=\"follower_name\">\n                <h2>Nikhil Sharma</h2>\n                <h5>Web Designer</h5>\n              </div>\n              <div class=\"follower_des\">\n                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n              </div>\n              <div class=\"follower_company\">\n                    <div class=\"company\">\n                      <div class=\"company_logo\">\n                            <img src=\"assets/images/user.png\">\n                      </div>\n                      <div class=\"company_name\">\n                          <h4> ELroute pvt.ltd.</h4>\n                    </div>\n                  </div>\n                      <div class=\"followBtn\">\n                          <button>Following</button>\n                      </div>\n              </div>\n              <div class=\"follwers_links\">\n                      <div class=\"facebook\">\n                        <img src=\"assets/images/fb.png\">\n                       </div>\n                       <div class=\"google\">\n                          <div class=\"facebook\">\n                              <img src=\"assets/images/fb.png\">\n                             </div>\n                        </div>\n                        <div class=\"linkdin\">\n                            <div class=\"facebook\">\n                                <img src=\"assets/images/fb.png\">\n                               </div>\n                          </div> \n                </div>\n            \n      </div>\n\n      </div>\n\n\n</div>\n</section>\n"

/***/ }),

/***/ "./src/app/User/followers/followers.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/User/followers/followers.component.ts ***!
  \*******************************************************/
/*! exports provided: FollowersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersComponent", function() { return FollowersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FollowersComponent = /** @class */ (function () {
    function FollowersComponent() {
        this.followers = [{
                image: 'https://picsum.photos/200/300/?random',
                comapny: 'Xyz',
                name: 'Username',
                catogary: 'kuch bhi',
                country: 'India'
            },
            {
                image: 'https://picsum.photos/200/300/?random',
                comapny: 'Xyz',
                name: 'Username',
                catogary: 'kuch bhi',
                country: 'India'
            },
            {
                image: 'https://picsum.photos/200/300/?random',
                comapny: 'Xyz',
                name: 'Username',
                catogary: 'kuch bhi',
                country: 'India'
            },
            {
                image: 'https://picsum.photos/200/300/?random',
                comapny: 'Xyz',
                name: 'Username',
                catogary: 'kuch bhi',
                country: 'India'
            }
        ];
    }
    FollowersComponent.prototype.ngOnInit = function () {
    };
    FollowersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-followers',
            template: __webpack_require__(/*! ./followers.component.html */ "./src/app/User/followers/followers.component.html"),
            styles: [__webpack_require__(/*! ./followers.component.css */ "./src/app/User/followers/followers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FollowersComponent);
    return FollowersComponent;
}());



/***/ }),

/***/ "./src/app/User/following/following.component.css":
/*!********************************************************!*\
  !*** ./src/app/User/following/following.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".following_title\n{\n  padding-top: 3%;\n}\n.following_title h1 {\n    width: 80%;\n    margin: 0 auto;\n    padding: 12px;\n    font-size: 25px;\n}\n.user_following {\n    width: 80%;\n    margin: 0 auto;\n    box-shadow: 0 1px 5px 2px rgba(25, 25, 25, 0.2);\n}\n.follow_search {\n    width: 95%;\n    margin: 0 auto;\n    padding: 10px;\n}\n.follow_search input[type=\"search\"] {\n    font-size: 26px;\n    width: 100%;\n    background-color: #f5f5fa;\n    border: none;\n}\n.following {\n    display: flex;\n    margin: 0 auto;\n    background-color: #ffffff;\n    box-shadow: 0 1px 5px 0px rgba(25, 25, 25, 0.2);\n    margin: 10px auto;\n    width: 94%;\n    border-radius: 10px;\n}\n.following_1 {\n    width: 70%;\n    display: flex;\n    margin-left: 1%;\n}\n.following_image {\n    width: 10%;\n}\n.following_image img {\n    width: 100%;\n    border-radius: 100%;\n    padding: 10px 0px;\n}\n.following_name {\n    margin-left: 1%;\n    width: auto;\n    margin-bottom: auto;\n    margin-top: auto;\n    height: 56%;\n}\n.following_name h2 {\n    margin-bottom: auto;\n    margin-top: auto;\n    font-weight: 500;\n    margin-left: 8px;\n}\n.following_name span {\n    font-size: 12px;\n}\n.following_bookmark {\n    width: 15%;\n    margin-top: auto;\n    margin-bottom: auto;\n    margin-left: 30px;\n    display: flex;\n}\n.following_bookmark img {\n    width: 20%;\n}\n.following_bookmark span {\n    font-size: 13px;\n    margin-left: 2%;\n}\n.following_2 {\n    width: 30%;\n    display: flex;\n}\n.followBtn {\n    width: 100%;\n    height: auto;\n    float: right;\n    text-align: left;\n    margin-top: 18%\n}\n.followBtn button {\n    width: 90%;\n    background-color: green;\n    color: #ffffff;\n    font-weight: 600;\n    height: 30px;\n    border-radius: 15px;\n    border: none;\n    margin-left: 10px;\n}\n.followBtn svg {\n    width: 15px;\n}\n.following_icon1 {\n    width: 60%;\n    margin: 0px 10px;\n    padding: 10px 0px;\n}\n.following_icon1 img {\n    width: 80%;\n    border-radius: 100%\n}\nsection{\n    width: 80%;\n    margin: 0 auto;\n    margin-top: 30px;\n    display: none;\n  }\n.listing{\n    width: 100%;\n    height: auto;\n  }\n.companyCard{\n    width: 48%;\n    margin: 0 auto;\n    border: 1px solid #ccc;\n    border-radius: 30px;\n    float: left;\n    margin-top: 40px;\n    margin-right: 1%;\n    margin-left: 1%;\n  }\n.cardHeader{\n    width: 95%;\n    margin: 0 auto;\n    display: flex;\n  }\n.logo{\n    height: auto;\n  }\n.logo img{\n    width: 120px;\n    height: 120px;\n    padding: 5px 0 0 0;\n    border-radius: 50%;\n  }\n.companyInfo{\n    width: 65%;\n    margin-left: 20px;\n  }\n.companyInfo h1{\n    margin: 0;\n    padding: 5px 0 0 0;\n  }\n.companyInfo button{\n    width: 18%;\n    height: 25px;\n    border: none;\n    border-radius: 10px;\n  }\n.storyBtn{\n    width: 40%;\n    margin-left: 5%;\n    margin-top: 20px;\n  }\n.storyBtn button{\n    width: 100%;\n    height: 40px;\n    border-radius: 20px;\n    border:none;\n  }\n.discription{\n    width: 90%;\n    margin: 0 auto;\n  }\n.discription p{\n    width: 80%;\n  }\n.cardFooter{\n    width: 90%;\n    margin: 0 auto;\n    display: flex;\n  }\n.tags{\n    width: 60%;\n  \n  }\n.tags p{\n    margin: 0;\n    padding: 0px 0 15px 0;\n  }\n.icons{\n    width: 20%;\n    display: flex;\n  }\n.icons p{\n    margin: 0;\n    padding: 0px 0 15px 0;\n  }\n.des\n  {\n    display: none;\n  }\n@media screen and (max-width: 700px){\n    .following_title\n    {\n      padding-top: 10%;\n    }\n    .user_following\n      {\n        display:none;\n\n      }\n    section{\n      width: 95%;\n      margin: 0 auto;\n      display: block;\n    }\n    .companyCard {\n      width: 100%;\n      margin: 0 auto;\n      border: 1px solid #ccc;\n      border-radius: 30px;\n      margin-top: 21px;\n  \n  }\n  .storyBtn {\n    display: none;\n  }\n  .companyInfo h1 {\n    float: left;\n    margin: 0;\n    padding: 5px 0 0 0;\n    font-size: 19px;\n  }\n  .b1{\n    margin-left: 13px;\n    font-size: 9px ! important;\n  }\n  .discription\n  {\n    display: none;\n  }\n  .des\n  {\n    display: block;\n  }\n  .cardFooter\n  {\n    dispay: none;\n  }\n  .companyInfo  button{\n    width: 27%;\n    height: 25px;\n    border: none;\n    border-radius: 10px;\n  }\n  .listing input{\n    width: 95%;\n    margin: 0 auto;\n    padding: 10px;\n    border:none;\n  }\n  }\n@media screen and (min-width: 767px)and (max-width: 1024px){\n    .following_title\n    {\n      padding-top: 6%;\n    }\n    .following_name h2 {\n    margin-bottom: auto;\n    margin-top: auto;\n    font-weight: 500;\n    margin-left: 8px;\n    font-size: 19px;\n}\n.following_2 {\n    width: 40%;\n    display: flex;\n}\n.following_1 {\n    width: 65%;\n    display: flex;\n    margin-left: 1%;\n}\n.followBtn {\n    width: 100%;\n    height: auto;\n    float: right;\n    text-align: left;\n    margin-top: 14%;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVXNlci9mb2xsb3dpbmcvZm9sbG93aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsZ0JBQWdCO0NBQ2pCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7Q0FDbkI7QUFFRDtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0RBQWdEO0NBQ25EO0FBRUQ7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7Q0FDakI7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGFBQWE7Q0FDaEI7QUFFRDtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLGdEQUFnRDtJQUNoRCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG9CQUFvQjtDQUN2QjtBQUVEO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7Q0FDbkI7QUFFRDtJQUNJLFdBQVc7Q0FDZDtBQUVEO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixrQkFBa0I7Q0FDckI7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixZQUFZO0NBQ2Y7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtDQUNwQjtBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBRUQ7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsY0FBYztDQUNqQjtBQUVEO0lBQ0ksV0FBVztDQUNkO0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0NBQ25CO0FBRUQ7SUFDSSxXQUFXO0lBQ1gsY0FBYztDQUNqQjtBQUVEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7Q0FDckI7QUFFRDtJQUNJLFlBQVk7Q0FDZjtBQUVEO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7Q0FDckI7QUFFRDtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7Q0FDdEI7QUFNRDtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7R0FDZjtBQUNEO0lBQ0UsWUFBWTtJQUNaLGFBQWE7R0FDZDtBQUNEO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtHQUNqQjtBQUNEO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0dBQ2Y7QUFDRDtJQUNFLGFBQWE7R0FDZDtBQUNEO0lBQ0UsYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsbUJBQW1CO0dBQ3BCO0FBQ0Q7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0dBQ25CO0FBQ0Q7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0dBQ3BCO0FBQ0Q7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixvQkFBb0I7R0FDckI7QUFDRDtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0dBQ2xCO0FBQ0Q7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixZQUFZO0dBQ2I7QUFDRDtJQUNFLFdBQVc7SUFDWCxlQUFlO0dBQ2hCO0FBQ0Q7SUFDRSxXQUFXO0dBQ1o7QUFDRDtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYztHQUNmO0FBQ0Q7SUFDRSxXQUFXOztHQUVaO0FBQ0Q7SUFDRSxVQUFVO0lBQ1Ysc0JBQXNCO0dBQ3ZCO0FBQ0Q7SUFDRSxXQUFXO0lBQ1gsY0FBYztHQUNmO0FBQ0Q7SUFDRSxVQUFVO0lBQ1Ysc0JBQXNCO0dBQ3ZCO0FBQ0Q7O0lBRUUsY0FBYztHQUNmO0FBQ0Q7SUFDRTs7TUFFRSxpQkFBaUI7S0FDbEI7SUFDRDs7UUFFSSxhQUFhOztPQUVkO0lBQ0g7TUFDRSxXQUFXO01BQ1gsZUFBZTtNQUNmLGVBQWU7S0FDaEI7SUFDRDtNQUNFLFlBQVk7TUFDWixlQUFlO01BQ2YsdUJBQXVCO01BQ3ZCLG9CQUFvQjtNQUNwQixpQkFBaUI7O0dBRXBCO0VBQ0Q7SUFDRSxjQUFjO0dBQ2Y7RUFDRDtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGdCQUFnQjtHQUNqQjtFQUNEO0lBQ0Usa0JBQWtCO0lBQ2xCLDJCQUEyQjtHQUM1QjtFQUNEOztJQUVFLGNBQWM7R0FDZjtFQUNEOztJQUVFLGVBQWU7R0FDaEI7RUFDRDs7SUFFRSxhQUFhO0dBQ2Q7RUFDRDtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLG9CQUFvQjtHQUNyQjtFQUNEO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWTtHQUNiO0dBQ0E7QUFDRDtJQUNFOztNQUVFLGdCQUFnQjtLQUNqQjtJQUNEO0lBQ0Esb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksV0FBVztJQUNYLGNBQWM7Q0FDakI7QUFDRDtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0NBQ25CO0NBQ0EiLCJmaWxlIjoic3JjL2FwcC9Vc2VyL2ZvbGxvd2luZy9mb2xsb3dpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb2xsb3dpbmdfdGl0bGVcbntcbiAgcGFkZGluZy10b3A6IDMlO1xufVxuLmZvbGxvd2luZ190aXRsZSBoMSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnVzZXJfZm9sbG93aW5nIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAycHggcmdiYSgyNSwgMjUsIDI1LCAwLjIpO1xufVxuXG4uZm9sbG93X3NlYXJjaCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZm9sbG93X3NlYXJjaCBpbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmYTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5mb2xsb3dpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAwIDFweCA1cHggMHB4IHJnYmEoMjUsIDI1LCAyNSwgMC4yKTtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICB3aWR0aDogOTQlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5mb2xsb3dpbmdfMSB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbn1cblxuLmZvbGxvd2luZ19pbWFnZSB7XG4gICAgd2lkdGg6IDEwJTtcbn1cblxuLmZvbGxvd2luZ19pbWFnZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbi5mb2xsb3dpbmdfbmFtZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDElO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBoZWlnaHQ6IDU2JTtcbn1cblxuLmZvbGxvd2luZ19uYW1lIGgyIHtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uZm9sbG93aW5nX25hbWUgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZm9sbG93aW5nX2Jvb2ttYXJrIHtcbiAgICB3aWR0aDogMTUlO1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZm9sbG93aW5nX2Jvb2ttYXJrIGltZyB7XG4gICAgd2lkdGg6IDIwJTtcbn1cblxuLmZvbGxvd2luZ19ib29rbWFyayBzcGFuIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG4uZm9sbG93aW5nXzIge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmZvbGxvd0J0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDE4JVxufVxuXG4uZm9sbG93QnRuIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmZvbGxvd0J0biBzdmcge1xuICAgIHdpZHRoOiAxNXB4O1xufVxuXG4uZm9sbG93aW5nX2ljb24xIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbi5mb2xsb3dpbmdfaWNvbjEgaW1nIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCVcbn1cblxuXG5cblxuXG5zZWN0aW9ue1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5saXN0aW5ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAuY29tcGFueUNhcmR7XG4gICAgd2lkdGg6IDQ4JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgfVxuICAuY2FyZEhlYWRlcntcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmxvZ297XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5sb2dvIGltZ3tcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBwYWRkaW5nOiA1cHggMCAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIC5jb21wYW55SW5mb3tcbiAgICB3aWR0aDogNjUlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG4gIC5jb21wYW55SW5mbyBoMXtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogNXB4IDAgMCAwO1xuICB9XG4gIC5jb21wYW55SW5mbyBidXR0b257XG4gICAgd2lkdGg6IDE4JTtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgLnN0b3J5QnRue1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgLnN0b3J5QnRuIGJ1dHRvbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXI6bm9uZTtcbiAgfVxuICAuZGlzY3JpcHRpb257XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAuZGlzY3JpcHRpb24gcHtcbiAgICB3aWR0aDogODAlO1xuICB9XG4gIC5jYXJkRm9vdGVye1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAudGFnc3tcbiAgICB3aWR0aDogNjAlO1xuICBcbiAgfVxuICAudGFncyBwe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwcHggMCAxNXB4IDA7XG4gIH1cbiAgLmljb25ze1xuICAgIHdpZHRoOiAyMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuaWNvbnMgcHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMHB4IDAgMTVweCAwO1xuICB9XG4gIC5kZXNcbiAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xuICAgIC5mb2xsb3dpbmdfdGl0bGVcbiAgICB7XG4gICAgICBwYWRkaW5nLXRvcDogMTAlO1xuICAgIH1cbiAgICAudXNlcl9mb2xsb3dpbmdcbiAgICAgIHtcbiAgICAgICAgZGlzcGxheTpub25lO1xuXG4gICAgICB9XG4gICAgc2VjdGlvbntcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuY29tcGFueUNhcmQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMjFweDtcbiAgXG4gIH1cbiAgLnN0b3J5QnRuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5jb21wYW55SW5mbyBoMSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDVweCAwIDAgMDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gIH1cbiAgLmIxe1xuICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICAgIGZvbnQtc2l6ZTogOXB4ICEgaW1wb3J0YW50O1xuICB9XG4gIC5kaXNjcmlwdGlvblxuICB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuZGVzXG4gIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuY2FyZEZvb3RlclxuICB7XG4gICAgZGlzcGF5OiBub25lO1xuICB9XG4gIC5jb21wYW55SW5mbyAgYnV0dG9ue1xuICAgIHdpZHRoOiAyNyU7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIC5saXN0aW5nIGlucHV0e1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6bm9uZTtcbiAgfVxuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KWFuZCAobWF4LXdpZHRoOiAxMDI0cHgpe1xuICAgIC5mb2xsb3dpbmdfdGl0bGVcbiAgICB7XG4gICAgICBwYWRkaW5nLXRvcDogNiU7XG4gICAgfVxuICAgIC5mb2xsb3dpbmdfbmFtZSBoMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBmb250LXNpemU6IDE5cHg7XG59XG4uZm9sbG93aW5nXzIge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5mb2xsb3dpbmdfMSB7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbn1cbi5mb2xsb3dCdG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAxNCU7XG59XG59Il19 */"

/***/ }),

/***/ "./src/app/User/following/following.component.html":
/*!*********************************************************!*\
  !*** ./src/app/User/following/following.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-side-nav ></app-side-nav>\n<app-header></app-header>\n<div class=\"following_title\">\n    <h1> Following</h1>\n</div>\n<div class=\"user_following\">\n    <div class=\"follow_search\">\n        <input type=\"search\" placeholder=\"search\">\n    </div>\n    <div class=\"following\"  *ngFor=\"let following of followings let i = index\">\n        <div class=\"following_1\">\n            <div class=\"following_image\">\n                <img src=\"assets/images/user.png\">\n            </div>\n            <div class=\"following_name\">\n                <h2> {{ following .Company_name }}</h2>\n                <span style=\"border-right:solid 1px gray;padding: 0px 10px;\">{{ following.location }}</span>\n                <span style=\"padding: 0px 10px;\">{{following.industry }}</span>\n            </div>\n            <div class=\"following_bookmark\">\n                <span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"  viewBox=\"0 0 24 24\"><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg></span>\n                <span>{{following.follwers_nub}}</span>\n            </div>\n        </div>\n        <div class=\"following_2\">\n            <div class=\"followBtn\">\n                <button>{{ following.Following}}</button>\n            </div>\n            <div class=\"following_icon1\">\n                <img src=\"assets/images/google_icon.png\">\n\n            </div>\n            <div class=\"following_icon1\">\n                <img src=\"assets/images/contact1.png\">\n\n            </div>\n        </div>\n    </div>\n    </div>\n    <section>\n    \n     \n        <div class=\"listing\">\n        <div class=\"companyCard\">\n        <div class=\"cardHeader\">\n          <div class=\"logo\">\n           <img src=\"https://picsum.photos/200/300/?random\">\n          </div>\n          \n          <div class=\"companyInfo\">\n            <h1>Company Name <span style=\"font-size:13px;\" class=\"b1\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"  viewBox=\"0 0 24 24\"><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg></span></h1>\n            <p style=\"font-size: 12px;\"><span style=\"padding: 0 10px 0 0;border-right: 1px solid #ccc\" >Location</span> <span style=\"padding: 0 0 0 10px;\">Industry</span></p>\n            <button>Follow</button> <span style=\"margin-left:20px;\">24,567 followers</span>\n            <div class=\"icons\" style=\" padding: 10px 0;\">\n                <p>Website</p>&nbsp;&nbsp;&nbsp;\n                <p>contact</p>\n                </div>\n          </div>\n          \n          <div class=\"storyBtn\">\n          <button>Know Our Story</button>\n          </div>\n        </div>\n        <div class=\"discription\">\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n        </div>\n        <mat-accordion  class=\"des\">\n    \n            <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                 (closed)=\"panelOpenState = false\">\n              <mat-expansion-panel-header  class=\"speci\" style=\"background-color:#F5F5F5;\">\n                <mat-panel-title>\n                    <h2 >Description</h2>\n                </mat-panel-title>\n              </mat-expansion-panel-header>\n              <div class=\"speci_1\"  >\n                <div class=\"speci_details\">\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n    \n                </div>\n    \n    \n              </div>\n            </mat-expansion-panel>\n    \n          </mat-accordion>\n        </div>\n        </div>\n        </section>\n"

/***/ }),

/***/ "./src/app/User/following/following.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/User/following/following.component.ts ***!
  \*******************************************************/
/*! exports provided: FollowingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingComponent", function() { return FollowingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FollowingComponent = /** @class */ (function () {
    function FollowingComponent() {
        this.followings = [
            {
                Company_name: "Comapny Name",
                location: "India",
                industry: "Industry",
                follwers_nub: "21,000",
                Following: "Following",
            },
            {
                Company_name: "Comapny Name",
                location: "India",
                industry: "Industry",
                follwers_nub: "21,000",
                Following: "Following",
            },
            {
                Company_name: "Comapny Name",
                location: "India",
                industry: "Industry",
                follwers_nub: "21,000",
                Following: "Following",
            },
            {
                Company_name: "Comapny Name",
                location: "India",
                industry: "Industry",
                follwers_nub: "21,000",
                Following: "Following",
            },
            {
                Company_name: "Comapny Name",
                location: "India",
                industry: "Industry",
                follwers_nub: "21,000",
                Following: "Following",
            },
            {
                Company_name: "Comapny Name",
                location: "India",
                industry: "Industry",
                follwers_nub: "21,000",
                Following: "Following",
            },
        ];
    }
    FollowingComponent.prototype.ngOnInit = function () {
    };
    FollowingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-following',
            template: __webpack_require__(/*! ./following.component.html */ "./src/app/User/following/following.component.html"),
            styles: [__webpack_require__(/*! ./following.component.css */ "./src/app/User/following/following.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FollowingComponent);
    return FollowingComponent;
}());



/***/ }),

/***/ "./src/app/User/user-overview/user-overview.component.css":
/*!****************************************************************!*\
  !*** ./src/app/User/user-overview/user-overview.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.bookmark_overview {\n    display: flex;\n    margin: 0 auto;width: 80%;\n    \n}\n.heading\n{\n    display: flex;\n    margin: 0 auto;width: 80%; margin-top: 2%;\n}\n.overview {\n    width: 70%;\n    display: flex;\n}\n.profile {\n    width: 40%;\n    display: flex;\n}\n.follower_user {\n    width: 100%;\n    box-shadow: 0px 4px 3px #5555;\n}\n.follower_location {\n    background-color: #111111;\n    width: 100%;\n    float: right;\n    height: 110px;\n}\n.follower_location span {\n    margin-right: 10px;\n    float: right;\n    color: white;\n}\n.follower_img {\n    margin: 0 auto;\n    width: 35%;\n}\n.follower_img1 {\n    position: absolute;\n}\n.follower_img1 img {\n    border-radius: 100%;\n    width: 30%;\n    margin-top: 30%;\n}\n.follower_name {\n    text-align: center;\n    padding-top: 120px;\n    margin-bottom: auto;\n    margin-top: auto;\n}\n.follower_name h2 {\n    font-size: 20px;\n    margin-bottom: auto;\n    margin-top: auto\n}\n.follower_name h5 {\n    margin-bottom: auto;\n    margin-top: auto\n}\n.Bio {\n    margin-bottom: auto;\n    margin-top: auto;\n    box-shadow: 0px 2px 5px #5555;\n    width: 39%;\n    font-size: 15px;\n}\n.follower_des {\n    text-align: justify;\n}\n.follower_des p {\n    margin: 0 auto;\n    width: 90%;\n    text-align: justify;\n    font-size: 12px;\n}\n.follower_company {\n    display: flex;\n    padding: 10px 0;\n    width: 80%;\n    margin: 0 auto;\n}\n.company {\n    width: 100%;\n    display: flex;\n    margin: 0 auto;\n}\n.company_logo {\n    width: 17%;\n    height: 14%;\n}\n.company_logo img {\n    border-radius: 100%;\n    width: 100%;\n}\n.company_name {\n    margin-left: 4%;\n    font-size: 13px;\n}\n.links {\n    margin-bottom: auto;\n    margin-top: auto;\n    width: 13%;\n}\n.follwers_links {\n    box-shadow: 0px 2px 10px #5555;\n    width: 44%;\n}\n.follwers_links img {\n    width: 100%;\n}\n.bookmark_following {\n    padding: 0px 10px;\n    width: 41%;\n}\n.following_nub {\n    box-shadow: 0px 2px 10px #5555;\n    display: flex;\n}\n.user_img {\n    width: 15%;\n    padding: 10px 20px;\n}\n.user_img img {\n    width: 100%;\n}\n.following_nub1 {\n    font-size: 45px;\n    margin-top: 3%;\n    width: 44%;\n    text-align: center;\n    color: #4d4f5c;\n    font-weight: 600;\n}\n.following_btn {\n    width: 20%;\n}\n.following_btn button {\n    background-color: black;\n    color: white;\n    border: none;\n    font-size: 24px;\n    margin-top: 30%;\n    box-shadow: 0px 2px 3px #5555;\n}\n.b_page_btn {\n    width: 80%;\n    margin: 0 auto;\n    margin-top: 2%;\n}\n.b_page_btn button {\n    border-radius: 60px;\n    background-color: black;\n    color: white;\n    border: none;\n    font-size: 24px;\n    width: 100%;\n    height: 70px;\n    box-shadow: 0px 2px 3px #5555;\n    font-weight: 600;\n    margin-top: 5%;\n}\n.follower_box {\n    margin: 0 auto;\n    width: 50%;\n    border: solid 5px gray;\n    height: -webkit-fit-content ! important;\n    height: -moz-fit-content ! important;\n    height: fit-content ! important;\n    margin-top: 27px;\n    display: none;\n  }\n.follower_user {\n    width: 100%;\n    box-shadow: 0px 2px 3px #5555;\n  }\n.follower_location {\n    background-color: #111111;\n    width: 100%;\n    float: right;\n    height: 110px;\n  }\n.follower_location span {\n    float: right;\n    color: white;\n    margin: 5px 10px;\n  }\n.follower_img {\n    margin: 0 auto;\n    width: 28%;\n  }\n.follower_img1 {\n    position: absolute;\n  }\n.follower_img1 img {\n    border-radius: 100%;\n    width: 48%;\n    border: slo;\n    border: solid 5px white;\n    margin-top: 26px;\n  }\n.follower_name {\n    text-align: center;\n    margin-top: 10%;\n  }\n.follower_name h2 {\n    margin-bottom: auto;\n    margin-top: auto\n  }\n.follower_name h5 {\n    margin-bottom: auto;\n    margin-top: auto\n  }\n.follower_des {\n    margin: 8px auto;\n    width: 90%;\n    text-align: justify;\n    box-shadow: 0px 2px 3px #5555;\n  }\n.follower_des p {\n    margin: 0 auto;\n    width: 90%;\n    text-align: justify;\n    padding: 10px 0;\n  }\n.follower_company {\n    display: flex;\n    margin: 0 auto;\n    width: 90%;\n    padding: 10px 0;\n  }\n.company {\n    width: 70%;\n    display: flex;\n  }\n.company_logo {\n    width: 20%;\n  }\n.company_logo img {\n    border-radius: 100%;\n    width: 100%;\n  }\n.company_name {\n    margin-left: 4%;\n  }\n.followBtn {\n    width: 30%;\n    height: auto;\n    float: right;\n    text-align: right;\n  }\n.followBtn button {\n    width: 80%;\n    margin-top: 10px;\n    background-color: #8cee53;\n    color: #ffffff;\n    font-weight: 600;\n    height: 25px;\n    border-radius: 15px;\n    border: none;\n    margin-left: 10px;\n  }\n.follwers_links1 {\n    margin: 0 auto;\n    width: 28%;\n    display: flex;\n  }\n.follwers_links1 img {\n    width: 100%;\n  }\n#overview1\n  {\n    display: none;\n\n  }\n.b_page_btn button {\n    border-radius: 60px;\n    background-color: black;\n    color: white;\n    border: none;\n    font-size: 24px;\n    width: 100%;\n    height: 70px;\n    box-shadow: 0px 2px 3px #5555;\n    font-weight: 600;\n    margin-top: 5%;\n  }\n@media screen and (max-width:700px) {\n      section\n      {\n          margin-top: 10%;\n      }\n    .heading\n    {\n        display: none;\n    }\n    .follower_name{\n        text-align: center;\n        padding-top: 40px;\n        margin-bottom: auto;\n        margin-top: auto;\n    }\n    .follower_box {\n        height: -webkit-fit-content ! important;\n        height: -moz-fit-content ! important;\n        height: fit-content ! important;\n        margin: 0 auto;\n        width: 90%;\n        border: solid 5px gray;\n        display: block;\n    }\n    .follower_img1 img {\n        border-radius: 100%;\n        width: 44%;\n        border: slo;\n        border: solid 5px white;\n        margin-top: 35px;\n    }\n    .follower_des p {\n        margin: 0 auto;\n        width: 90%;\n        text-align: justify;\n        padding: 10px 0;\n        font-size: 11px;\n    }\n    .followBtn button {\n        width: 100%;\n        margin-top: 10px;\n        background-color: #8cee53;\n        color: #ffffff;\n        font-weight: 600;\n        height: 25px;\n        border-radius: 15px;\n        border: none;\n        font-size: 12px;\n    }\n    .company_name {\n        margin-left: 4%;\n        font-size: 11px;\n    }\n    .card {\n        width: 46%;\n        margin-right: 2%;\n        height: 12%;\n        margin-left: 2%;\n        display: flex;\n        margin-top: 3%;\n        box-shadow: 0px 2px 3px #5555;\n    }\n    .name h4 {\n        bottom: 0;\n        margin-bottom: 0;\n        font-size: 13px;\n    }\n    #overview1\n  {\n    display: block;\n  }\n  .bookmark_overview\n  {\n      display: none;\n  }\n  .bookmark_following {\n    padding: 0px 10px;\n    width: 100%;\n    padding-top: 20px;\n  }\n  .Card {\n    width: 100%;\n}\n\n}\n@media screen and (min-width:767px) and (max-width:1024px) {\n    .heading\n{\n    display: flex;\n    margin: 0 auto;width: 80%; margin-top: 5%;\n}\n    .overview {\n        width: 60%;\n        display: flex;\n    }\n    .following_nub1 {\n        font-size: 29px;\n     \n    }\n    .b_page_btn button {    \n       font-size: 20px;\n   }\n   .following_btn  button {\n    font-size: 15px;\n    margin-top: 35%;\n    }\n    .follower_img {\n        margin: 0 auto;\n        width: 40%;\n    }\n    .follower_img1 img {\n        width: 25%;\n        margin-top: 70px; \n    }\n    .bookmark_following {\n        padding: 0px 10px;\n        width: 50%;\n    }\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVXNlci91c2VyLW92ZXJ2aWV3L3VzZXItb3ZlcnZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZSxXQUFXOztDQUU3QjtBQUNEOztJQUVJLGNBQWM7SUFDZCxlQUFlLFdBQVcsQ0FBQyxlQUFlO0NBQzdDO0FBRUQ7SUFDSSxXQUFXO0lBQ1gsY0FBYztDQUNqQjtBQUVEO0lBQ0ksV0FBVztJQUNYLGNBQWM7Q0FDakI7QUFFRDtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7Q0FDakM7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7Q0FDakI7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUVEO0lBQ0ksZUFBZTtJQUNmLFdBQVc7Q0FDZDtBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGdCQUFnQjtDQUNuQjtBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsaUJBQWlCO0NBQ3BCO0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtDQUNuQjtBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtDQUNuQjtBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLGdCQUFnQjtDQUNuQjtBQUVEO0lBQ0ksb0JBQW9CO0NBQ3ZCO0FBRUQ7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixnQkFBZ0I7Q0FDbkI7QUFFRDtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtDQUNsQjtBQUVEO0lBQ0ksV0FBVztJQUNYLFlBQVk7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O1FBQ0ksV0FBVztRQUNYLGlCQUFpQjtLQUNwQjtJQUNEO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7S0FDZDs7Q0FFSiIsImZpbGUiOiJzcmMvYXBwL1VzZXIvdXNlci1vdmVydmlldy91c2VyLW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5ib29rbWFya19vdmVydmlldyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDAgYXV0bzt3aWR0aDogODAlO1xuICAgIFxufVxuLmhlYWRpbmdcbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMCBhdXRvO3dpZHRoOiA4MCU7IG1hcmdpbi10b3A6IDIlO1xufVxuXG4ub3ZlcnZpZXcge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnByb2ZpbGUge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmZvbGxvd2VyX3VzZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggM3B4ICM1NTU1O1xufVxuXG4uZm9sbG93ZXJfbG9jYXRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGhlaWdodDogMTEwcHg7XG59XG5cbi5mb2xsb3dlcl9sb2NhdGlvbiBzcGFuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZvbGxvd2VyX2ltZyB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDM1JTtcbn1cblxuLmZvbGxvd2VyX2ltZzEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmZvbGxvd2VyX2ltZzEgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xufVxuXG4uZm9sbG93ZXJfbmFtZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG59XG5cbi5mb2xsb3dlcl9uYW1lIGgyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICBtYXJnaW4tdG9wOiBhdXRvXG59XG5cbi5mb2xsb3dlcl9uYW1lIGg1IHtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IGF1dG9cbn1cblxuLkJpbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4ICM1NTU1O1xuICAgIHdpZHRoOiAzOSU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uZm9sbG93ZXJfZGVzIHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uZm9sbG93ZXJfZGVzIHAge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mb2xsb3dlcl9jb21wYW55IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY29tcGFueSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNvbXBhbnlfbG9nbyB7XG4gICAgd2lkdGg6IDE3JTtcbiAgICBoZWlnaHQ6IDE0JTtcbn1cblxuLmNvbXBhbnlfbG9nbyBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb21wYW55X25hbWUge1xuICAgIG1hcmdpbi1sZWZ0OiA0JTtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5saW5rcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIHdpZHRoOiAxMyU7XG59XG5cbi5mb2xsd2Vyc19saW5rcyB7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4ICM1NTU1O1xuICAgIHdpZHRoOiA0NCU7XG59XG5cbi5mb2xsd2Vyc19saW5rcyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYm9va21hcmtfZm9sbG93aW5nIHtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICB3aWR0aDogNDElO1xufVxuXG4uZm9sbG93aW5nX251YiB7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4ICM1NTU1O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi51c2VyX2ltZyB7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbi51c2VyX2ltZyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9sbG93aW5nX251YjEge1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICB3aWR0aDogNDQlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzRkNGY1YztcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZm9sbG93aW5nX2J0biB7XG4gICAgd2lkdGg6IDIwJTtcbn1cblxuLmZvbGxvd2luZ19idG4gYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggIzU1NTU7XG59XG5cbi5iX3BhZ2VfYnRuIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDIlO1xufVxuXG4uYl9wYWdlX2J0biBidXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggM3B4ICM1NTU1O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG5cblxuXG4uZm9sbG93ZXJfYm94IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogNTAlO1xuICAgIGJvcmRlcjogc29saWQgNXB4IGdyYXk7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudCAhIGltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAyN3B4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5mb2xsb3dlcl91c2VyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDNweCAjNTU1NTtcbiAgfVxuICBcbiAgLmZvbGxvd2VyX2xvY2F0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICB9XG4gIFxuICAuZm9sbG93ZXJfbG9jYXRpb24gc3BhbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDVweCAxMHB4O1xuICB9XG4gIFxuICAuZm9sbG93ZXJfaW1nIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMjglO1xuICB9XG4gIFxuICAuZm9sbG93ZXJfaW1nMSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIFxuICAuZm9sbG93ZXJfaW1nMSBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgd2lkdGg6IDQ4JTtcbiAgICBib3JkZXI6IHNsbztcbiAgICBib3JkZXI6IHNvbGlkIDVweCB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiAyNnB4O1xuICB9XG4gIFxuICAuZm9sbG93ZXJfbmFtZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgfVxuICBcbiAgLmZvbGxvd2VyX25hbWUgaDIge1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgbWFyZ2luLXRvcDogYXV0b1xuICB9XG4gIFxuICAuZm9sbG93ZXJfbmFtZSBoNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICBtYXJnaW4tdG9wOiBhdXRvXG4gIH1cbiAgXG4gIC5mb2xsb3dlcl9kZXMge1xuICAgIG1hcmdpbjogOHB4IGF1dG87XG4gICAgd2lkdGg6IDkwJTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggM3B4ICM1NTU1O1xuICB9XG4gIFxuICAuZm9sbG93ZXJfZGVzIHAge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gIH1cbiAgXG4gIC5mb2xsb3dlcl9jb21wYW55IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICB9XG4gIFxuICAuY29tcGFueSB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIFxuICAuY29tcGFueV9sb2dvIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG4gIFxuICAuY29tcGFueV9sb2dvIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmNvbXBhbnlfbmFtZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xuICB9XG4gIFxuICAuZm9sbG93QnRuIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgXG4gIC5mb2xsb3dCdG4gYnV0dG9uIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhjZWU1MztcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuICBcbiAgLmZvbGx3ZXJzX2xpbmtzMSB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDI4JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIFxuICAuZm9sbHdlcnNfbGlua3MxIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIFxuICBcbiBcbiAgI292ZXJ2aWV3MVxuICB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICB9XG4gIFxuICAuYl9wYWdlX2J0biBidXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggM3B4ICM1NTU1O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gIH1cbiAgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzAwcHgpIHtcbiAgICAgIHNlY3Rpb25cbiAgICAgIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgICB9XG4gICAgLmhlYWRpbmdcbiAgICB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5mb2xsb3dlcl9uYW1le1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIH1cbiAgICAuZm9sbG93ZXJfYm94IHtcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudCAhIGltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGJvcmRlcjogc29saWQgNXB4IGdyYXk7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuZm9sbG93ZXJfaW1nMSBpbWcge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICB3aWR0aDogNDQlO1xuICAgICAgICBib3JkZXI6IHNsbztcbiAgICAgICAgYm9yZGVyOiBzb2xpZCA1cHggd2hpdGU7XG4gICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgfVxuICAgIC5mb2xsb3dlcl9kZXMgcCB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG4gICAgLmZvbGxvd0J0biBidXR0b24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhjZWU1MztcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC5jb21wYW55X25hbWUge1xuICAgICAgICBtYXJnaW4tbGVmdDogNCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG4gICAgLmNhcmQge1xuICAgICAgICB3aWR0aDogNDYlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICAgICAgICBoZWlnaHQ6IDEyJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggIzU1NTU7XG4gICAgfVxuICAgIC5uYW1lIGg0IHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICAgICNvdmVydmlldzFcbiAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5ib29rbWFya19vdmVydmlld1xuICB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5ib29rbWFya19mb2xsb3dpbmcge1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICB9XG4gIC5DYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjdweCkgYW5kIChtYXgtd2lkdGg6MTAyNHB4KSB7XG4gICAgLmhlYWRpbmdcbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMCBhdXRvO3dpZHRoOiA4MCU7IG1hcmdpbi10b3A6IDUlO1xufVxuICAgIC5vdmVydmlldyB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIC5mb2xsb3dpbmdfbnViMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjlweDtcbiAgICAgXG4gICAgfVxuICAgIC5iX3BhZ2VfYnRuIGJ1dHRvbiB7ICAgIFxuICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgIH1cbiAgIC5mb2xsb3dpbmdfYnRuICBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAzNSU7XG4gICAgfVxuICAgIC5mb2xsb3dlcl9pbWcge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICB9XG4gICAgLmZvbGxvd2VyX2ltZzEgaW1nIHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgbWFyZ2luLXRvcDogNzBweDsgXG4gICAgfVxuICAgIC5ib29rbWFya19mb2xsb3dpbmcge1xuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gICAgXG59Il19 */"

/***/ }),

/***/ "./src/app/User/user-overview/user-overview.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/User/user-overview/user-overview.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-side-nav ></app-side-nav>\n<app-header></app-header>\n<div  class=\"heading\">\n    <h2 style=\"width: 70%;\">Overview</h2>\n    <h2 style=\"width: 40%;\">Following</h2>\n</div>\n<div class=\"bookmark_overview\" >\n    <div class=\"overview\">\n\n        <div class=\"profile\">\n\n            <div class=\"follower_user\">\n                <div class=\"follower_location\">\n                    <span>{{location}}</span>\n                </div>\n                <div class=\"follower_img\">\n                    <div class=\"follower_img1\">\n                        <img src=\"assets/images/user.png\">\n                    </div>\n                </div>\n\n                <div class=\"follower_name\">\n                    <h2>{{username}}</h2>\n                    <h5>{{title}}</h5>\n                </div>\n\n                <!-- {{this.overviewResult.Email}} -->\n\n            </div>\n        </div>\n        <div class=\"Bio\">\n            <p style=\"text-align:center\"> BIO</p>\n            <div class=\"follower_des\">\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen\n                    book. </p>\n            </div>\n            <div class=\"follower_company\">\n                <div class=\"company\">\n                    <div class=\"company_logo\">\n                        <img src=\"assets/images/user.png\">\n                    </div>\n                    <div class=\"company_name\">\n                        <h4> ELroute pvt.ltd.</h4>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"links\">\n            <div class=\"follwers_links\">\n                <div class=\"facebook\">\n                    <img src=\"assets/images/fb.png\">\n                </div>\n                <div class=\"google\">\n                    <div class=\"facebook\">\n                        <img src=\"assets/images/fb.png\">\n                    </div>\n                </div>\n                <div class=\"linkdin\">\n                    <div class=\"facebook\">\n                        <img src=\"assets/images/fb.png\">\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <div class=\"bookmark_following\">\n\n        <div class=\"following_nub\">\n            <div class=\"user_img\">\n                <img src=\"assets/images/following.png\">\n            </div>\n            <div class=\"following_nub1\">\n                <span>244K</span>\n            </div>\n            <div class=\"following_btn\">\n                <button>Manage</button>\n            </div>\n\n        </div>\n        <div class=\"b_page_btn\">\n            <button routerLink = \"/B-page\">Create  Your B page</button>\n        </div>\n    </div>\n\n</div>\n\n\n\n\n<section>\n\n\n    <div class=\"follower_box\">\n      <div class=\"follower_user\">\n          <div class=\"follower_location\">\n            <span>INDIA</span>\n           </div>\n           <div class=\"follower_img\">\n              <div class=\"follower_img1\">\n                <img src=\"assets/images/user.png\">\n              </div>\n           </div>\n          <div style=\"clear:both\"></div>\n           <div class=\"follower_name\">\n              <h2>{{username}}</h2>\n              <h5>Web Designer</h5>\n            </div>\n            <div class=\"follower_des\">\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n            </div>\n            <div class=\"follower_company\">\n                  <div class=\"company\">\n                    <div class=\"company_logo\">\n                          <img src=\"assets/images/user.png\">\n                    </div>\n                    <div class=\"company_name\">\n                        <h4> ELroute pvt.ltd.</h4>\n                  </div>\n                </div>\n                    <div class=\"followBtn\">\n                        <button>Following</button>\n                    </div>\n            </div>\n            <div class=\"follwers_links1\">\n                    <div class=\"facebook\">\n                      <img src=\"assets/images/fb.png\">\n                     </div>\n                     <div class=\"google\">\n                        <div class=\"facebook\">\n                            <img src=\"assets/images/fb.png\">\n                           </div>\n                      </div>\n                      <div class=\"linkdin\">\n                          <div class=\"facebook\">\n                              <img src=\"assets/images/fb.png\">\n                             </div>\n                        </div>\n                    </div>\n    </div>\n\n    </div>\n    <div class=\"bookmark_following\" id=\"overview1\">\n\n      <div class=\"following_nub\">\n          <div class=\"user_img\">\n              <img src=\"assets/images/following.png\">\n          </div>\n          <div class=\"following_nub1\">\n              <span>244K</span>\n          </div>\n          <div class=\"following_btn\">\n              <button>Mange</button>\n          </div>\n\n      </div>\n      <div class=\"b_page_btn\">\n          <button>Create  Your B page</button>\n      </div>\n    </div>\n    </section>\n"

/***/ }),

/***/ "./src/app/User/user-overview/user-overview.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/User/user-overview/user-overview.component.ts ***!
  \***************************************************************/
/*! exports provided: UserOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserOverviewComponent", function() { return UserOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Service_user_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service/user-services.service */ "./src/app/Service/user-services.service.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var UserOverviewComponent = /** @class */ (function () {
    function UserOverviewComponent(userService, storage, router) {
        var _this = this;
        this.userService = userService;
        this.storage = storage;
        this.router = router;
        this.userService.token = this.storage.get('token');
        this.userService.getUserData().subscribe(function (res) {
            console.log(JSON.parse(res['_body']));
            _this.username = JSON.parse(res['_body']).UserName;
            _this.location = JSON.parse(res['_body']).Location;
            _this.title = JSON.parse(res['_body']).Title;
            console.log(_this.username);
        });
    }
    UserOverviewComponent.prototype.ngOnInit = function () {
    };
    UserOverviewComponent.prototype.createBPage = function () {
        this.router.navigate(['/B-page']);
    };
    UserOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-overview',
            template: __webpack_require__(/*! ./user-overview.component.html */ "./src/app/User/user-overview/user-overview.component.html"),
            styles: [__webpack_require__(/*! ./user-overview.component.css */ "./src/app/User/user-overview/user-overview.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [src_app_Service_user_services_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["WebStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserOverviewComponent);
    return UserOverviewComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _HomePage_without_login_without_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomePage/without-login/without-login.component */ "./src/app/HomePage/without-login/without-login.component.ts");
/* harmony import */ var _HomePage_with_login_with_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomePage/with-login/with-login.component */ "./src/app/HomePage/with-login/with-login.component.ts");
/* harmony import */ var _Search_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Search/search/search.component */ "./src/app/Search/search/search.component.ts");
/* harmony import */ var _Bookmark_bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Bookmark/bookmark/bookmark.component */ "./src/app/Bookmark/bookmark/bookmark.component.ts");
/* harmony import */ var _Search_company_search_company_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Search/company-search/company-search.component */ "./src/app/Search/company-search/company-search.component.ts");
/* harmony import */ var _Company_company_form_company_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Company/company-form/company-form.component */ "./src/app/Company/company-form/company-form.component.ts");
/* harmony import */ var _Product_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Product/product-form/product-form.component */ "./src/app/Product/product-form/product-form.component.ts");
/* harmony import */ var _Product_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Product/product-page/product-page.component */ "./src/app/Product/product-page/product-page.component.ts");
/* harmony import */ var _User_followers_followers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./User/followers/followers.component */ "./src/app/User/followers/followers.component.ts");
/* harmony import */ var _serviceSection_service_page_service_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./serviceSection/service-page/service-page.component */ "./src/app/serviceSection/service-page/service-page.component.ts");
/* harmony import */ var _User_following_following_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./User/following/following.component */ "./src/app/User/following/following.component.ts");
/* harmony import */ var _Search_Searchfeeds_feeds_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Search/Searchfeeds/feeds.component */ "./src/app/Search/Searchfeeds/feeds.component.ts");
/* harmony import */ var _Bookmark_company_company_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Bookmark/company/company.component */ "./src/app/Bookmark/company/company.component.ts");
/* harmony import */ var _Bookmark_Bookmarkpost_post_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Bookmark/Bookmarkpost/post.component */ "./src/app/Bookmark/Bookmarkpost/post.component.ts");
/* harmony import */ var _Bpage_b_page_b_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Bpage/b-page/b-page.component */ "./src/app/Bpage/b-page/b-page.component.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
/* harmony import */ var _guards_company_guard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guards/company-guard.service */ "./src/app/guards/company-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    { path: '', component: _HomePage_without_login_without_login_component__WEBPACK_IMPORTED_MODULE_2__["WithoutLoginComponent"] },
    { path: 'Dashboard', component: _HomePage_with_login_with_login_component__WEBPACK_IMPORTED_MODULE_3__["WithLoginComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"]] },
    { path: 'Result/:word/:page', component: _Search_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"] },
    { path: 'bookmark', component: _Bookmark_bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_5__["BookmarkComponent"] },
    { path: 'companyResults/:word/:page', component: _Search_company_search_company_search_component__WEBPACK_IMPORTED_MODULE_6__["CompanySearchComponent"] },
    { path: 'B-page', component: _Company_company_form_company_form_component__WEBPACK_IMPORTED_MODULE_7__["CompanyFormComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"]] },
    { path: 'productForm', component: _Product_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_8__["ProductFormComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"], _guards_company_guard_service__WEBPACK_IMPORTED_MODULE_18__["CompanyGuardService"]] },
    { path: 'product-page/:_id', component: _Product_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_9__["ProductPageComponent"] },
    { path: 'Followers', component: _User_followers_followers_component__WEBPACK_IMPORTED_MODULE_10__["FollowersComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"]] },
    { path: 'servicePage', component: _serviceSection_service_page_service_page_component__WEBPACK_IMPORTED_MODULE_11__["ServicePageComponent"] },
    { path: 'Following', component: _User_following_following_component__WEBPACK_IMPORTED_MODULE_12__["FollowingComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"]] },
    { path: 'feeds/:word/:page', component: _Search_Searchfeeds_feeds_component__WEBPACK_IMPORTED_MODULE_13__["FeedsSearchComponent"] },
    { path: 'companyBookmark', component: _Bookmark_company_company_component__WEBPACK_IMPORTED_MODULE_14__["CompanyComponent"] },
    { path: 'post', component: _Bookmark_Bookmarkpost_post_component__WEBPACK_IMPORTED_MODULE_15__["PostComponent"] },
    { path: 'companyPage/:id', component: _Bpage_b_page_b_page_component__WEBPACK_IMPORTED_MODULE_16__["BPageComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"], _guards_company_guard_service__WEBPACK_IMPORTED_MODULE_18__["CompanyGuardService"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ElrouteAlpha';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Auth/signup/signup.component */ "./src/app/Auth/signup/signup.component.ts");
/* harmony import */ var _Auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Auth/login/login.component */ "./src/app/Auth/login/login.component.ts");
/* harmony import */ var _Auth_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Auth/forget-password/forget-password.component */ "./src/app/Auth/forget-password/forget-password.component.ts");
/* harmony import */ var _Bookmark_bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Bookmark/bookmark/bookmark.component */ "./src/app/Bookmark/bookmark/bookmark.component.ts");
/* harmony import */ var _Bookmark_product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Bookmark/product/product.component */ "./src/app/Bookmark/product/product.component.ts");
/* harmony import */ var _Bookmark_Bookmarkpost_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Bookmark/Bookmarkpost/post.component */ "./src/app/Bookmark/Bookmarkpost/post.component.ts");
/* harmony import */ var _Post_feed_Post_posts_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Post-feed/Post/posts/post.component */ "./src/app/Post-feed/Post/posts/post.component.ts");
/* harmony import */ var _Bookmark_company_company_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Bookmark/company/company.component */ "./src/app/Bookmark/company/company.component.ts");
/* harmony import */ var _Company_company_form_company_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Company/company-form/company-form.component */ "./src/app/Company/company-form/company-form.component.ts");
/* harmony import */ var _Company_compan_profile_compan_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Company/compan-profile/compan-profile.component */ "./src/app/Company/compan-profile/compan-profile.component.ts");
/* harmony import */ var _Company_compan_edit_compan_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Company/compan-edit/compan-edit.component */ "./src/app/Company/compan-edit/compan-edit.component.ts");
/* harmony import */ var _Product_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Product/product-page/product-page.component */ "./src/app/Product/product-page/product-page.component.ts");
/* harmony import */ var _User_Profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./User/Profile/profile.component */ "./src/app/User/Profile/profile.component.ts");
/* harmony import */ var _User_Edit_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./User/Edit/edit.component */ "./src/app/User/Edit/edit.component.ts");
/* harmony import */ var _Search_search_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Search/search/search.component */ "./src/app/Search/search/search.component.ts");
/* harmony import */ var _Post_feed_edit_Post_edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Post-feed/edit_Post/edit-post/edit-post.component */ "./src/app/Post-feed/edit_Post/edit-post/edit-post.component.ts");
/* harmony import */ var _Post_feed_Feed_feed_feed_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Post-feed/Feed/feed/feed.component */ "./src/app/Post-feed/Feed/feed/feed.component.ts");
/* harmony import */ var _Bookmark_feeds_feeds_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Bookmark/feeds/feeds.component */ "./src/app/Bookmark/feeds/feeds.component.ts");
/* harmony import */ var _Header_header_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Header/header/header.component */ "./src/app/Header/header/header.component.ts");
/* harmony import */ var _StaticData_Footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./StaticData/Footer/footer/footer.component */ "./src/app/StaticData/Footer/footer/footer.component.ts");
/* harmony import */ var _StaticData_Help_help_help_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./StaticData/Help/help/help.component */ "./src/app/StaticData/Help/help/help.component.ts");
/* harmony import */ var _HomePage_without_login_without_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./HomePage/without-login/without-login.component */ "./src/app/HomePage/without-login/without-login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _app_Header_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../app/Header/tab-header/tab-header.component */ "./src/app/Header/tab-header/tab-header.component.ts");
/* harmony import */ var _app_Search_company_search_company_search_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../app/Search/company-search/company-search.component */ "./src/app/Search/company-search/company-search.component.ts");
/* harmony import */ var _Company_company_form2_company_form2_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Company/company-form2/company-form2.component */ "./src/app/Company/company-form2/company-form2.component.ts");
/* harmony import */ var _Company_company_form3_company_form3_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Company/company-form3/company-form3.component */ "./src/app/Company/company-form3/company-form3.component.ts");
/* harmony import */ var _Header_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Header/side-nav/side-nav.component */ "./src/app/Header/side-nav/side-nav.component.ts");
/* harmony import */ var _Product_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Product/product-form/product-form.component */ "./src/app/Product/product-form/product-form.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _Header_s_page_header_s_page_header_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Header/s-page-header/s-page-header.component */ "./src/app/Header/s-page-header/s-page-header.component.ts");
/* harmony import */ var _Header_s_page_header_search_s_page_header_search_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Header/s-page-header-search/s-page-header-search.component */ "./src/app/Header/s-page-header-search/s-page-header-search.component.ts");
/* harmony import */ var _User_followers_followers_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./User/followers/followers.component */ "./src/app/User/followers/followers.component.ts");
/* harmony import */ var _serviceSection_service_page_service_page_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./serviceSection/service-page/service-page.component */ "./src/app/serviceSection/service-page/service-page.component.ts");
/* harmony import */ var _User_following_following_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./User/following/following.component */ "./src/app/User/following/following.component.ts");
/* harmony import */ var _Header_header3_header3_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./Header/header3/header3.component */ "./src/app/Header/header3/header3.component.ts");
/* harmony import */ var _Search_Searchfeeds_feeds_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./Search/Searchfeeds/feeds.component */ "./src/app/Search/Searchfeeds/feeds.component.ts");
/* harmony import */ var _User_user_overview_user_overview_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./User/user-overview/user-overview.component */ "./src/app/User/user-overview/user-overview.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _HomePage_with_login_with_login_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./HomePage/with-login/with-login.component */ "./src/app/HomePage/with-login/with-login.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var ng2_carouselamos__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ng2-carouselamos */ "./node_modules/ng2-carouselamos/dist/index.js");
/* harmony import */ var _Bpage_b_page_b_page_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./Bpage/b-page/b-page.component */ "./src/app/Bpage/b-page/b-page.component.ts");
/* harmony import */ var _Service_company_service_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./Service/company-service.service */ "./src/app/Service/company-service.service.ts");
/* harmony import */ var _Service_product_service_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./Service/product-service.service */ "./src/app/Service/product-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
/* harmony import */ var _guards_company_guard_service__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./guards/company-guard.service */ "./src/app/guards/company-guard.service.ts");
/* harmony import */ var _Service_bookmark_services_service__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./Service/bookmark-services.service */ "./src/app/Service/bookmark-services.service.ts");
/* harmony import */ var _Service_feed_service_service__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./Service/feed-service.service */ "./src/app/Service/feed-service.service.ts");
/* harmony import */ var _Service_follow_service_service__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./Service/follow-service.service */ "./src/app/Service/follow-service.service.ts");
/* harmony import */ var _Service_search_service__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./Service/search.service */ "./src/app/Service/search.service.ts");
/* harmony import */ var _Product_product_listing_product_listing_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./Product/product-listing/product-listing.component */ "./src/app/Product/product-listing/product-listing.component.ts");
/* harmony import */ var _Product_product_product_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./Product/product/product.component */ "./src/app/Product/product/product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












































// <--------------Material Design Imports------------------------>




//
// import { CarouselModule } from 'angular4-carousel';


// import {ProductBookmarkComponent} from './Bookmark/product/product.component';

// import { CopmayService } from './Company/copmay.service';










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _Auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
                _Auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _Auth_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgetPasswordComponent"],
                _Bookmark_bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_7__["BookmarkComponent"],
                _Bookmark_product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductBookmarkComponent"],
                _Bookmark_Bookmarkpost_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"],
                _Bookmark_company_company_component__WEBPACK_IMPORTED_MODULE_11__["CompanyComponent"],
                _Company_company_form_company_form_component__WEBPACK_IMPORTED_MODULE_12__["CompanyFormComponent"],
                _Company_compan_profile_compan_profile_component__WEBPACK_IMPORTED_MODULE_13__["CompanProfileComponent"],
                _Company_compan_edit_compan_edit_component__WEBPACK_IMPORTED_MODULE_14__["CompanEditComponent"],
                _Product_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_15__["ProductPageComponent"],
                _User_Profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"],
                _User_Edit_edit_component__WEBPACK_IMPORTED_MODULE_17__["EditComponent"],
                _Search_search_search_component__WEBPACK_IMPORTED_MODULE_18__["SearchComponent"],
                _Post_feed_edit_Post_edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_19__["EditPostComponent"],
                _Post_feed_Feed_feed_feed_component__WEBPACK_IMPORTED_MODULE_20__["FeedComponent"],
                _Header_header_header_component__WEBPACK_IMPORTED_MODULE_22__["HeaderComponent"],
                _StaticData_Footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
                _StaticData_Help_help_help_component__WEBPACK_IMPORTED_MODULE_24__["HelpComponent"],
                _HomePage_without_login_without_login_component__WEBPACK_IMPORTED_MODULE_25__["WithoutLoginComponent"],
                _HomePage_with_login_with_login_component__WEBPACK_IMPORTED_MODULE_46__["WithLoginComponent"],
                _app_Header_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_29__["TabHeaderComponent"],
                _app_Search_company_search_company_search_component__WEBPACK_IMPORTED_MODULE_30__["CompanySearchComponent"],
                _Company_company_form2_company_form2_component__WEBPACK_IMPORTED_MODULE_31__["CompanyForm2Component"],
                _Company_company_form3_company_form3_component__WEBPACK_IMPORTED_MODULE_32__["CompanyForm3Component"],
                _Header_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_33__["SideNavComponent"],
                _Product_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_34__["ProductFormComponent"],
                _Header_s_page_header_s_page_header_component__WEBPACK_IMPORTED_MODULE_36__["SPageHeaderComponent"],
                _Header_s_page_header_search_s_page_header_search_component__WEBPACK_IMPORTED_MODULE_37__["SPageHeaderSearchComponent"],
                _User_followers_followers_component__WEBPACK_IMPORTED_MODULE_38__["FollowersComponent"],
                _serviceSection_service_page_service_page_component__WEBPACK_IMPORTED_MODULE_39__["ServicePageComponent"],
                _User_following_following_component__WEBPACK_IMPORTED_MODULE_40__["FollowingComponent"],
                _Header_header3_header3_component__WEBPACK_IMPORTED_MODULE_41__["Header3Component"],
                _Bookmark_feeds_feeds_component__WEBPACK_IMPORTED_MODULE_21__["FeedsComponent"],
                _User_user_overview_user_overview_component__WEBPACK_IMPORTED_MODULE_43__["UserOverviewComponent"],
                _Bpage_b_page_b_page_component__WEBPACK_IMPORTED_MODULE_49__["BPageComponent"],
                _Post_feed_Post_posts_post_component__WEBPACK_IMPORTED_MODULE_10__["PostsComponent"],
                _Search_Searchfeeds_feeds_component__WEBPACK_IMPORTED_MODULE_42__["FeedsSearchComponent"],
                _Product_product_listing_product_listing_component__WEBPACK_IMPORTED_MODULE_59__["ProductListingComponent"],
                _Product_product_product_component__WEBPACK_IMPORTED_MODULE_60__["ProductComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_44__["BrowserAnimationsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_45__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_27__["HttpModule"],
                angular_webstorage_service__WEBPACK_IMPORTED_MODULE_28__["StorageServiceModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_35__["MatExpansionModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_47__["MatTabsModule"],
                ng2_carouselamos__WEBPACK_IMPORTED_MODULE_48__["Ng2CarouselamosModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_52__["ToastrModule"].forRoot()
            ],
            entryComponents: [
                _Auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
                _Auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
            ],
            providers: [_Service_company_service_service__WEBPACK_IMPORTED_MODULE_50__["CompanyServiceService"], _Service_product_service_service__WEBPACK_IMPORTED_MODULE_51__["ProductServiceService"], _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_53__["AuthGuardService"], _Service_bookmark_services_service__WEBPACK_IMPORTED_MODULE_55__["BookmarkServices"], _Service_feed_service_service__WEBPACK_IMPORTED_MODULE_56__["FeedService"], _Service_follow_service_service__WEBPACK_IMPORTED_MODULE_57__["FollowService"],
                _Service_search_service__WEBPACK_IMPORTED_MODULE_58__["SearchService"], _guards_company_guard_service__WEBPACK_IMPORTED_MODULE_54__["CompanyGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guards/auth-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        this.token = this.storage.get('token');
        if (!this.token) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["WebStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/guards/company-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/guards/company-guard.service.ts ***!
  \*************************************************/
/*! exports provided: CompanyGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyGuardService", function() { return CompanyGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CompanyGuardService = /** @class */ (function () {
    function CompanyGuardService(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    CompanyGuardService.prototype.canActivate = function () {
        this.companyId = this.storage.get('companyId');
        if (!this.companyId) {
            this.router.navigate(['/Dashboard']);
            return false;
        }
        else {
            return true;
        }
    };
    CompanyGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["WebStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CompanyGuardService);
    return CompanyGuardService;
}());



/***/ }),

/***/ "./src/app/serviceSection/service-page/service-page.component.css":
/*!************************************************************************!*\
  !*** ./src/app/serviceSection/service-page/service-page.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\n  height: 100%;\n  width: 100%;\n}\n#feed2\n{\n  display: none;\n\n}\n.banner{\n  width: 100%;\n  height: 20vh;\n  background-color: lightgray;\n  text-align: center;\n  display: table;\n}\n.banner h1{\n  display: table-cell;\n  vertical-align: middle;\n  margin: 0;\n  padding: 0;\n  font-size: 60px;\n  font-weight: 600;\n}\nsection{\n  width: 95%;\n  float: right;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 3%;\n}\n.rightSection{\n  width: 53%;\n  height: 35vh;\n}\n.leftSection{\n  width: 40%;\n  margin-left: 2%;\n  position: fixed;\n  right: 0;\n  box-shadow: 0px 1px 1px #99999999;\n  border:1px solid #ccc;\n}\n.serviceImage{\n  width: 100%;\n  height: 35vh;\n  background-color: darkolivegreen;\n}\n.serviceImage img{\n  width: 100%;\n  height: 100%;\n}\n.info{\n  width: 100%;\n  margin-top: 3%;\n  /* border-bottom: 1px solid #ccc; */\n}\n.header{\n  width: 100%;\n  border-bottom: 1px solid #ccc;\n}\n.description{\n  width: 90%;\n  margin: 0 auto;\n}\n.description h2{\n  margin: 0;\n  padding: 0;\n  text-align: left;\n  width: 100%;\n  border-bottom: 1px solid #ccc;\n  font-weight: 600;\n  padding-bottom: 10px;\n}\n.description h2 span{\n  font-size: 15px;\n  font-weight: 400;\n  text-transform: uppercase;\n  margin-top: 10px;\n\n}\n.otherData{\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n}\n.priceAndTag{\n  width: 55%;\n  height: 100%;\n}\n.contact{\n  width: 30%;\n \n  margin-top: 6%;\n  text-align: right;\n  margin-left: 15%;\n}\n.contact span\n{\n    font-size:150%;\n    margin-left:20px;\n    border:solid 1px gray;\n    padding: 0px 15px;\n    color:#707070;\n    border-radius: 8px;\n\n}\n.contact img\n{\n    position: absolute;\n    width: 45px;\n    margin: -6px -7px;\n}\n.tag{\n  width: 100%;\n}\n.price{\n  width: 100%;\n}\n.price h2{\n  font-weight: 400;\n}\n.expnasion{\n  width: 90%;\n  margin: 0 auto;\n  margin-top: 20px;\n  margin-bottom: 20px;\n\n}\nmat-expansion-panel{\n  border-radius: 0px 0px 0px 0px !important;\n\n}\nmat-expansion-panel-header{\n  background-color: #F3F3F3;\n\n}\nmat-expansion-panel-header h2{\n  font-weight: 100;\n  font-size: 15px;\n  margin: 0;\n  padding: 0;\n}\n/* .card{\n  width: 100%;\n  border: 1px solid #ccc;\n}\n.header{\n  width: 100%;\n  display: flex;\n  border-bottom: 1px solid #ccc;\n}\n.heading{\n  float: left;\n  width: 60%;\n}\n.content{\n  width: 90%;\n  margin: 0 auto;\n  height: 100%;\n}\n.heading h3{\n margin: 7px 0px 7px 2px;\n font-weight: 600;\n\n}\n.bookmark{\n  float: right;\n  width: 40%;\n  text-align: right;\n  display: flex;\n  justify-content: flex-end;\n}\n.bookmark p{\n  margin:7px 10px 7px 0px;\n}\n.bookmark span{\n  width: 10%;\n  height: 35px;\n  background-color: blueviolet;\n}\n.cardContent{\n  width: 90%;\n  margin: 0 auto;\n}\n.cardContent .cardElement {\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 6px;\n\n}\n.cardContent .cardElement label{\n  font-size: 12px;\n  text-transform: uppercase;\n}\n.cardContent .cardElement h2{\n  margin: 0;\n  font-weight: 600;\n  font-size: 22px;\n  margin-bottom: 10px;\n}\n.cardContent .cardElement  p{\n  margin: 0;\n  margin-bottom: 10px;\n  margin-top: 5px;\n}\n.contact{\n  width: 50%;\n  float: right;\n  display: flex;\n  background-color: blanchedalmond;\n  height: 2pc;\n  margin-top: 10px;\n} */\n@media screen and (max-width: 700px){\nsection{\n  width: 90%;\n  display: block;\n  margin: 0 auto;\n  float: none;\n}\n#feed1{display:none;}\n#feed2{ display:block;}\n.rightSection{\n  width: 100%;\n\n}\n.leftSection{\n  width: 100%;\n  position: relative;\n  margin-left: 0;\n  margin-top: 30px;\n}\n.info p{\n  font-size: 11px;\n   line-height: 20px;\n}\n.description h2{\n  font-size: 15px;\n}\n.description h2 span{\n  display: none;\n}\n.priceAndTag{\n  display: none;\n  width: 0%;\n}\n.contact{\n  width: 100%;\n  margin: 0 auto;\n  height: 4vh;\n  /* position: fixed; */\n  bottom: 20px;\n  left: 11vh;\n  right: auto;\n}\n.contact img{\n  position: absolute;\n  width: 35px;\n  margin: -7px 0px;\n}\n.expnasion{\n  width: 100%;\n  margin-top: 0;\n}\n}\n/* <--------------------------------------------------------FEED CARD-------------------------------------------> */\n.feed{\n  width: 55%;\n  height: 490px;\n  display: block;\n  margin-right: auto;\n  border: 1px solid #cccccc;\n  margin: 0 auto;\n  margin-top: 2%;\n}\n.authorInfo{\nwidth: 100%;\ndisplay: flex;\n}\n.details{\n  width: 70%;\n  height: auto;\n  display: flex;\n}\n.logo{\n  width: 20%;\n  height: 100%;\n  background-color: black;\n}\n.logo img{\n  width: 100%;\n  height: 100%;\n}\n.details h1{\n  margin: 0;\n  padding: 5px 0 0 15px;\n  font-weight: 500;\n  font-size: 20px;\n}\n.details p{\n  padding: 0px 0 0 15px !important;\n  font-size: 10px;\n}\n.feedInfo {\n  width: 95%;\n  margin: 0 auto;\n  height: 15%;\n  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n  border-radius: 5px 5px 0 0;\n  margin-top: 20px;\n}\n.feedInfo p{\n  font-size: 12px;\n  margin: 0;\n  margin-top: 5px;\n  margin-bottom: 30px;\n  width: 95%;\n  margin: 0 auto;\n  padding-top: 10px;\n}\n.followBtn{\n  width: 25%;\n  height: auto;\n  float: right;\n  text-align: right;\n}\n.followBtn button{\n  width: 80%;\n  margin-top: 10px;\n  background-color: green;\n  color: #ffffff;\n  font-weight: 600;\n  height: 25px;\n  border-radius: 15px;\n  border:none;\n  margin-left: 10px;\n}\n.followBtn p{\n  align-items: baseline;\n  text-align: right;\n  margin-right: 10px;\n  margin-bottom:  0;\n  font-size: 10px;\n}\n.feed-img{\n  width: 100%;\n  height: 60%;\n}\n.feed-img img {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n}\n.feed-share{\n  width: 100%;\n  height: 7%;\n  display: flex;\n /* ?splay: block; di */\n}\n.tagged{\n  width: 100%;\n  height: 7%;\n}\nmat-expansion-panel{\n  border-radius: 0 !important;\n\n}\nmat-expansion-panel{\n  /* box-shadow: 0 0 0 0!important; */\n}\n.tagged mat-expansion-panel-header{\n  height: 35px !important;\n  color: #ffffff !important;\n}\nmat-panel-title h4{\n  margin: 0;\n  font-size: 14px;\n  font-weight: 100;\n}\n@media screen and (max-width:768px)\n{\n  .details h1{\n    margin: 0;\n    padding: 5px 0 0 15px;\n    font-weight: 500;\n    font-size: 15px;\n  }\n  .logo{\n    width: 36%;\n  }\n  section {\n    width: 94%;\n    float: right;\n    display: flex;\n    flex-wrap: wrap;\n    margin-top: 3%;\n}\n.followBtn {\n  width: 37%;\n  height: auto;\n  float: right;\n  text-align: right;\n}\n.followBtn  button \n  {\n    font-size: 12px;\n  }\n\n.feed {\n  width: 94%;\n  height: 490px;\n  display: block;\n  \n  border: 1px solid #cccccc;\n}\n}\n@media screen and (max-width:700px){\n  .company_industry,.login_user{\n    display: none;\n  }\n  .with_login{\n    width: 100%;\n    margin: 0px;\n  }\n  .feeds{\n    width: 100%;\n    padding: 0px;\n  }\n  .add_media h2{\n    font-size: 15px;\n    margin-top: -5px;\n  }\n  .add_media span{\n    font-size: 10px;\n  }\n  .add_feed {\n    font-size: 11px;\n    width: 12%;\n  }\n  section{\n    width: 95%;\n  }\n  .followBtn {\n    width: 25%;\n    height: auto;\n    float: right;\n    text-align: right;\n  }\n  .followBtn button{\n    width: 100%;\n    font-size: 8px;\n  }\n  .followBtn p{\n    margin-right: 0;\n    \n  }\n  .details h1{\n    font-size: 15px;\n  }\n  .details p{\n    font-size: 8px;\n  }\n  .feedInfo p{\n    font-size: 10px;\n    line-height: 15px;\n  }\n  mat-panel-title h4{\n    font-size: 11px;\n  }\n}\n@media screen and (min-width: 700px) and (max-width: 1440px){\n  .with_login{\n    width: 85%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZVNlY3Rpb24vc2VydmljZS1wYWdlL3NlcnZpY2UtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7Q0FDYjtBQUNEOztFQUVFLGNBQWM7O0NBRWY7QUFDRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLFdBQVc7RUFDWCxhQUFhO0NBQ2Q7QUFDRDtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxrQ0FBa0M7RUFDbEMsc0JBQXNCO0NBQ3ZCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlDQUFpQztDQUNsQztBQUNEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixvQ0FBb0M7Q0FDckM7QUFDRDtFQUNFLFlBQVk7RUFDWiw4QkFBOEI7Q0FDL0I7QUFDRDtFQUNFLFdBQVc7RUFDWCxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixxQkFBcUI7Q0FDdEI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLGlCQUFpQjs7Q0FFbEI7QUFDRDtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztDQUNmO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsYUFBYTtDQUNkO0FBQ0Q7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ZmlsZSI6InNyYy9hcHAvc2VydmljZVNlY3Rpb24vc2VydmljZS1wYWdlL3NlcnZpY2UtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHl7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4jZmVlZDJcbntcbiAgZGlzcGxheTogbm9uZTtcblxufVxuLmJhbm5lcntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLmJhbm5lciBoMXtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDYwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5zZWN0aW9ue1xuICB3aWR0aDogOTUlO1xuICBmbG9hdDogcmlnaHQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXRvcDogMyU7XG59XG4ucmlnaHRTZWN0aW9ue1xuICB3aWR0aDogNTMlO1xuICBoZWlnaHQ6IDM1dmg7XG59XG4ubGVmdFNlY3Rpb257XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAxcHggIzk5OTk5OTk5O1xuICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG59XG4uc2VydmljZUltYWdle1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNXZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb2xpdmVncmVlbjtcbn1cbi5zZXJ2aWNlSW1hZ2UgaW1ne1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmluZm97XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7ICovXG59XG4uaGVhZGVye1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG4uZGVzY3JpcHRpb257XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmRlc2NyaXB0aW9uIGgye1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uZGVzY3JpcHRpb24gaDIgc3BhbntcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuXG59XG4ub3RoZXJEYXRhe1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wcmljZUFuZFRhZ3tcbiAgd2lkdGg6IDU1JTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhY3R7XG4gIHdpZHRoOiAzMCU7XG4gXG4gIG1hcmdpbi10b3A6IDYlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbn1cblxuLmNvbnRhY3Qgc3Bhblxue1xuICAgIGZvbnQtc2l6ZToxNTAlO1xuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XG4gICAgYm9yZGVyOnNvbGlkIDFweCBncmF5O1xuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xuICAgIGNvbG9yOiM3MDcwNzA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuXG59XG4uY29udGFjdCBpbWdcbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgbWFyZ2luOiAtNnB4IC03cHg7XG59XG4udGFne1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcmljZXtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucHJpY2UgaDJ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uZXhwbmFzaW9ue1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxufVxubWF0LWV4cGFuc2lvbi1wYW5lbHtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XG5cbn1cbm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGM0YzO1xuXG59XG5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciBoMntcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qIC5jYXJke1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cbi5oZWFkZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cbi5oZWFkaW5ne1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDYwJTtcbn1cbi5jb250ZW50e1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmhlYWRpbmcgaDN7XG4gbWFyZ2luOiA3cHggMHB4IDdweCAycHg7XG4gZm9udC13ZWlnaHQ6IDYwMDtcblxufVxuLmJvb2ttYXJre1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA0MCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmJvb2ttYXJrIHB7XG4gIG1hcmdpbjo3cHggMTBweCA3cHggMHB4O1xufVxuLmJvb2ttYXJrIHNwYW57XG4gIHdpZHRoOiAxMCU7XG4gIGhlaWdodDogMzVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcbn1cbi5jYXJkQ29udGVudHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2FyZENvbnRlbnQgLmNhcmRFbGVtZW50IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcblxufVxuLmNhcmRDb250ZW50IC5jYXJkRWxlbWVudCBsYWJlbHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmNhcmRDb250ZW50IC5jYXJkRWxlbWVudCBoMntcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY2FyZENvbnRlbnQgLmNhcmRFbGVtZW50ICBwe1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5jb250YWN0e1xuICB3aWR0aDogNTAlO1xuICBmbG9hdDogcmlnaHQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xuICBoZWlnaHQ6IDJwYztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0gKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcbnNlY3Rpb257XG4gIHdpZHRoOiA5MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZmxvYXQ6IG5vbmU7XG59XG4jZmVlZDF7ZGlzcGxheTpub25lO31cbiNmZWVkMnsgZGlzcGxheTpibG9jazt9XG4ucmlnaHRTZWN0aW9ue1xuICB3aWR0aDogMTAwJTtcblxufVxuLmxlZnRTZWN0aW9ue1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5pbmZvIHB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLmRlc2NyaXB0aW9uIGgye1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uZGVzY3JpcHRpb24gaDIgc3BhbntcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5wcmljZUFuZFRhZ3tcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDAlO1xufVxuLmNvbnRhY3R7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiA0dmg7XG4gIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cbiAgYm90dG9tOiAyMHB4O1xuICBsZWZ0OiAxMXZoO1xuICByaWdodDogYXV0bztcbn1cbi5jb250YWN0IGltZ3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzVweDtcbiAgbWFyZ2luOiAtN3B4IDBweDtcbn1cbi5leHBuYXNpb257XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwO1xufVxufVxuLyogPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRkVFRCBDQVJELS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT4gKi9cbi5mZWVke1xuICB3aWR0aDogNTUlO1xuICBoZWlnaHQ6IDQ5MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMiU7XG59XG4uYXV0aG9ySW5mb3tcbndpZHRoOiAxMDAlO1xuZGlzcGxheTogZmxleDtcbn1cbi5kZXRhaWxze1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubG9nb3tcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi5sb2dvIGltZ3tcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kZXRhaWxzIGgxe1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDVweCAwIDAgMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmRldGFpbHMgcHtcbiAgcGFkZGluZzogMHB4IDAgMCAxNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5mZWVkSW5mbyB7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDE1JTtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5mZWVkSW5mbyBwe1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uZm9sbG93QnRue1xuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uZm9sbG93QnRuIGJ1dHRvbntcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlcjpub25lO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5mb2xsb3dCdG4gcHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAgMDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmZlZWQtaW1ne1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MCU7XG59XG4uZmVlZC1pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5mZWVkLXNoYXJle1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3JTtcbiAgZGlzcGxheTogZmxleDtcbiAvKiA/c3BsYXk6IGJsb2NrOyBkaSAqL1xufVxuLnRhZ2dlZHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNyU7XG59XG5tYXQtZXhwYW5zaW9uLXBhbmVse1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG5cbn1cbm1hdC1leHBhbnNpb24tcGFuZWx7XG4gIC8qIGJveC1zaGFkb3c6IDAgMCAwIDAhaW1wb3J0YW50OyAqL1xufVxuLnRhZ2dlZCBtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcntcbiAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5tYXQtcGFuZWwtdGl0bGUgaDR7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweClcbntcbiAgLmRldGFpbHMgaDF7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDVweCAwIDAgMTVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAubG9nb3tcbiAgICB3aWR0aDogMzYlO1xuICB9XG4gIHNlY3Rpb24ge1xuICAgIHdpZHRoOiA5NCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbi10b3A6IDMlO1xufVxuLmZvbGxvd0J0biB7XG4gIHdpZHRoOiAzNyU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5mb2xsb3dCdG4gIGJ1dHRvbiBcbiAge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4uZmVlZCB7XG4gIHdpZHRoOiA5NCU7XG4gIGhlaWdodDogNDkwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbn1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzAwcHgpe1xuICAuY29tcGFueV9pbmR1c3RyeSwubG9naW5fdXNlcntcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC53aXRoX2xvZ2lue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG4gIC5mZWVkc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgLmFkZF9tZWRpYSBoMntcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbiAgfVxuICAuYWRkX21lZGlhIHNwYW57XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5hZGRfZmVlZCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHdpZHRoOiAxMiU7XG4gIH1cbiAgc2VjdGlvbntcbiAgICB3aWR0aDogOTUlO1xuICB9XG4gIC5mb2xsb3dCdG4ge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICAuZm9sbG93QnRuIGJ1dHRvbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDhweDtcbiAgfVxuICAuZm9sbG93QnRuIHB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIFxuICB9XG4gIC5kZXRhaWxzIGgxe1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAuZGV0YWlscyBwe1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICB9XG4gIC5mZWVkSW5mbyBwe1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgfVxuICBtYXQtcGFuZWwtdGl0bGUgaDR7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCl7XG4gIC53aXRoX2xvZ2lue1xuICAgIHdpZHRoOiA4NSU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/serviceSection/service-page/service-page.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/serviceSection/service-page/service-page.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"banner\">\n  <h1>MARKETING</h1>\n</div> -->\n<app-side-nav ></app-side-nav>\n<app-header></app-header>\n<section>\n<div class=\"rightSection\">\n<div class=\"serviceImage\">\n<img src=\"../../../assets/images/bracelet-camera-equipment-954202.jpg\">\n<div class=\"feed\" id=\"feed1\">\n  <div class=\"authorInfo\">\n  <div class=\"details\">\n    <div class=\"logo\">\n      <img src=\"https://picsum.photos/500/300/?random\">\n    </div>\n    <div class=\"info\">\n   <h1>Company Name</h1>\n   <p style=\"line-height: 0px;margin-bottom: 12px;margin-top: 5px;\">Industry</p>\n   <p style=\"line-height: 3px;margin-bottom: 10px;\">Location</p>\n  </div>\n  </div>\n  <div class=\"followBtn\">\n   <button>Following</button>\n   <p>34,342 followers</p>\n  </div>\n  </div>\n  <div class=\"feedInfo\">\n    <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content </p>\n  </div>\n  <div class=\"feed-img\">\n  <img src=\"https://picsum.photos/500/300/?random\">\n  </div>\n  <div class=\"feed-share\">\n      <p  style=\"padding: 4px; margin: 0; display: flex;width: 100%;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"  viewBox=\"0 0 24 24\"><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg><span><b style=\"margin-left: 5px;\">24,244</b></span></p>\n      <p style=\" padding: 0; margin:4px 0;     margin-right: 10px;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M16 15v4l8-8.035-8-7.965v4s-13.277 2.144-16 14c5.796-6.206 16-6 16-6z\"/></svg></p>\n      </div>\n  <div class=\"tagged\">\n     <mat-expansion-panel>\n         <mat-expansion-panel-header style=\"background-color: #6E7892;\"> \n           <mat-panel-title>\n            <h4 style=\"  color: #fff\">Tagged Products</h4>\n           </mat-panel-title>\n         </mat-expansion-panel-header>\n\n         <p>This is the primary content of the panel.</p>\n\n       </mat-expansion-panel>\n  </div>\n  </div>\n\n\n</div>\n\n</div>\n<div class=\"leftSection\">\n    <div class=\"info\">\n        <div class=\"header\">\n            <div class=\"description\">\n                <h2>DESCRIPTION <span style=\"float:right;\">Country</span></h2>\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n                </div>\n                <div class=\"otherData\">\n                 <div class=\"priceAndTag\">\n                   <div class=\"tag\">\n                    <span></span><p>tag</p>\n                   </div>\n                   <div class=\"price\">\n                     <h2>Rs. 5600</h2>\n                   </div>\n                 </div>\n                 <div class=\"contact\">\n                  <p class=\"contact\">\n                    <img src=\"assets/images/contact.png\" alt=\"image not found\"><span>Contact</span>\n                </p>\n                 </div>\n                </div>\n        </div>\n        <div class=\"expnasion\">\n          <mat-accordion>\n\n            <mat-expansion-panel *ngFor= \"let accordion of accordions; let i = index\">\n              <mat-expansion-panel-header style=\"background-color:#F3F3F3;\">\n                <h2>{{accordion.title}}</h2>\n              </mat-expansion-panel-header>\n\n              <p> {{accordion.content}}</p>\n\n            </mat-expansion-panel>\n        </mat-accordion>\n        </div>\n        </div>\n     \n<!-- <div class=\"card\">\n<div class=\"header\">\n <div class=\"content\">\n  <div class=\"heading\">\n    <h3>SERVICE CARD</h3>\n  </div>\n<div class=\"bookmark\">\n<p>23,456</p>\n<span></span>\n</div>\n </div>\n</div>\n<div class=\"cardContent\">\n  <div class=\"name cardElement\">\n    <label>ORGANISATION NAME</label>\n    <h2>Company Ka Naam</h2>\n  </div>\n  <div class=\"industry cardElement\">\n      <label>Industry</label>\n      <h2>MARKETING</h2>\n    </div>\n    <div class=\"category cardElement\">\n        <label>CAtegory</label>\n        <h2>SERVICE</h2>\n      </div>\n      <div class=\"location cardElement\">\n          <label>Location</label>\n          <h2>Australia</h2>\n        </div>\n        <div class=\"spec cardElement\">\n            <label>specification</label>\n            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>\n          </div>\n          <div class=\"price cardElement\">\n              <label>price</label>\n              <h2>Rs. 5900</h2>\n\n            </div>\n            <div class=\"similar cardElement\" style=\"border-bottom: none\">\n            <label>Similar Services</label>\n            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>\n          </div>\n          <div class=\"contact\">\n\n          </div>\n</div>\n</div> -->\n\n\n</div>\n<section>\n\n\n    <div class=\"feed\" id=\"feed2\">\n    <div class=\"authorInfo\">\n    <div class=\"details\">\n      <div class=\"logo\">\n        <img src=\"https://picsum.photos/500/300/?random\">\n      </div>\n      <div class=\"info\">\n     <h1>Company Name</h1>\n     <p style=\"line-height: 0px;margin-bottom: 12px;margin-top: 5px;\">Industry</p>\n     <p style=\"line-height: 3px;margin-bottom: 10px;\">Location</p>\n    </div>\n    </div>\n    <div class=\"followBtn\">\n     <button>Following</button>\n     <p>34,342 followers</p>\n    </div>\n    </div>\n    <div class=\"feedInfo\">\n      <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content </p>\n    </div>\n    <div class=\"feed-img\">\n    <img src=\"https://picsum.photos/500/300/?random\">\n    </div>\n    <div class=\"feed-share\">\n        <p  style=\"padding: 4px; margin: 0; display: flex;width: 100%;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"  viewBox=\"0 0 24 24\"><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg><span><b style=\"margin-left: 5px;\">24,244</b></span></p>\n        <p style=\" padding: 0; margin:4px 0;     margin-right: 10px;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M16 15v4l8-8.035-8-7.965v4s-13.277 2.144-16 14c5.796-6.206 16-6 16-6z\"/></svg></p>\n        </div>\n    <div class=\"tagged\">\n       <mat-expansion-panel>\n           <mat-expansion-panel-header style=\"background-color: #6E7892;\" >\n             <mat-panel-title>\n              <h4 style=\"  color: #fff\">Tagged Products</h4>\n             </mat-panel-title>\n           </mat-expansion-panel-header>\n  \n           <p>This is the primary content of the panel.</p>\n  \n         </mat-expansion-panel>\n    </div>\n    </div>\n  \n    </section>\n</section>\n"

/***/ }),

/***/ "./src/app/serviceSection/service-page/service-page.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/serviceSection/service-page/service-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: ServicePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicePageComponent", function() { return ServicePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicePageComponent = /** @class */ (function () {
    function ServicePageComponent() {
        this.accordions = [
            {
                title: 'SPCIFICATION',
                content: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. etraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum etraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum etraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum etraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum etraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum etraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumetraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
            },
            {
                title: 'SPCIFICATION',
                content: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker in'
            },
            {
                title: 'SPCIFICATION',
                content: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing s'
            },
            {
                title: 'SPCIFICATION',
                content: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            },
            {
                title: 'SPCIFICATION',
                content: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            },
        ];
    }
    ServicePageComponent.prototype.ngOnInit = function () {
    };
    ServicePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service-page',
            template: __webpack_require__(/*! ./service-page.component.html */ "./src/app/serviceSection/service-page/service-page.component.html"),
            styles: [__webpack_require__(/*! ./service-page.component.css */ "./src/app/serviceSection/service-page/service-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicePageComponent);
    return ServicePageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bhawanaparihar/Documents/elroute/ElrouteAlpha/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map