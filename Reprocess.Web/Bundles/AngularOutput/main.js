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

/***/ "./src/app/Directive/unique-role-validator.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/Directive/unique-role-validator.directive.ts ***!
  \**************************************************************/
/*! exports provided: UniqueRoleValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueRoleValidatorDirective", function() { return UniqueRoleValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Service_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Service/role.service */ "./src/app/Service/role.service.ts");




var UniqueRoleValidatorDirective = /** @class */ (function () {
    function UniqueRoleValidatorDirective(roleService) {
        this.roleService = roleService;
    }
    UniqueRoleValidatorDirective_1 = UniqueRoleValidatorDirective;
    UniqueRoleValidatorDirective.prototype.validate = function (control) {
        var _this = this;
        console.log("validate");
        console.log(control.value);
        return this.roleService.checkRoleNameExist(control.value).toPromise()
            .then(function (res) {
            console.log(_this.result);
        }).then(function (res) {
            return _this.result.IsSuccess ? { 'uniqueRolez': true } : { 'uniqueRolez': false };
        });
    };
    var UniqueRoleValidatorDirective_1;
    UniqueRoleValidatorDirective = UniqueRoleValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[uniqueRole]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_ASYNC_VALIDATORS"], useExisting: UniqueRoleValidatorDirective_1, multi: true }]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Service_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]])
    ], UniqueRoleValidatorDirective);
    return UniqueRoleValidatorDirective;
}());



/***/ }),

/***/ "./src/app/Interceptor/httpInterceptor.ts":
/*!************************************************!*\
  !*** ./src/app/Interceptor/httpInterceptor.ts ***!
  \************************************************/
/*! exports provided: httpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptor", function() { return httpInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



var httpInterceptor = /** @class */ (function () {
    function httpInterceptor() {
    }
    httpInterceptor.prototype.intercept = function (httpRequest, next) {
        // add auth header with jwt if account is logged in and request is to the api url
        var account = localStorage.getItem('jwt');
        var isLoggedIn = account;
        var isApiUrl = httpRequest.url.startsWith(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL);
        if (isLoggedIn && isApiUrl) {
            httpRequest = httpRequest.clone({
                setHeaders: { Authorization: "Bearer " + account }
            });
        }
        return next.handle(httpRequest);
    };
    httpInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], httpInterceptor);
    return httpInterceptor;
}());



/***/ }),

/***/ "./src/app/Model/role/role-data.ts":
/*!*****************************************!*\
  !*** ./src/app/Model/role/role-data.ts ***!
  \*****************************************/
/*! exports provided: RoleData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleData", function() { return RoleData; });
var RoleData = /** @class */ (function () {
    function RoleData() {
    }
    return RoleData;
}());



/***/ }),

/***/ "./src/app/Model/user/user-profile-data.ts":
/*!*************************************************!*\
  !*** ./src/app/Model/user/user-profile-data.ts ***!
  \*************************************************/
/*! exports provided: UserProfileData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileData", function() { return UserProfileData; });
var UserProfileData = /** @class */ (function () {
    function UserProfileData() {
    }
    return UserProfileData;
}());



/***/ }),

/***/ "./src/app/Service/error-code.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Service/error-code.service.ts ***!
  \***********************************************/
/*! exports provided: ErrorCodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCodeService", function() { return ErrorCodeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var ErrorCodeService = /** @class */ (function () {
    function ErrorCodeService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL;
        this.url = this.API_URL + "ErrorCode/";
    }
    ErrorCodeService.prototype.GetErrors = function (currentPage, pageSize) {
        return this.httpClient.get(this.url + "GetErrors?currentPage=" + currentPage + "&pageSize=" + pageSize);
    };
    ErrorCodeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ErrorCodeService);
    return ErrorCodeService;
}());



/***/ }),

/***/ "./src/app/Service/metric-reprocess.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/Service/metric-reprocess.service.ts ***!
  \*****************************************************/
/*! exports provided: MetricReprocessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricReprocessService", function() { return MetricReprocessService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var MetricReprocessService = /** @class */ (function () {
    function MetricReprocessService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL;
        this.url = this.API_URL + "MetricsReprocess";
    }
    MetricReprocessService.prototype.getStatusFiles = function (trackSearch) {
        return this.httpClient.post(this.url + "/TrackStatusFile", trackSearch);
    };
    MetricReprocessService.prototype.mtReprocess = function (reprocessSearch) {
        return this.httpClient.post(this.url + "/MTReprocess", reprocessSearch);
    };
    MetricReprocessService.prototype.trackStatusFiles = function (trackSearchs) {
        return this.httpClient.post(this.url + "/TrackStatusFile", trackSearchs);
    };
    MetricReprocessService.prototype.getTrackStatusFiles = function (trackSearchParams) {
        return this.httpClient.post(this.url + "/TrackStatusFiles", trackSearchParams);
    };
    MetricReprocessService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MetricReprocessService);
    return MetricReprocessService;
}());



/***/ }),

/***/ "./src/app/Service/role.service.ts":
/*!*****************************************!*\
  !*** ./src/app/Service/role.service.ts ***!
  \*****************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var RoleService = /** @class */ (function () {
    function RoleService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL;
        this.url = this.API_URL + "Role";
    }
    //#region  USER CRUD
    RoleService.prototype.getRoles = function () {
        return this.httpClient.get(this.url + "/GetRoles");
    };
    RoleService.prototype.getRoleById = function (id) {
        return this.httpClient.get(this.url + "/GetRoleById/" + ("" + id));
    };
    RoleService.prototype.createRole = function (roleItem) {
        return this.httpClient.post(this.url + "/InsertRole/", roleItem);
    };
    RoleService.prototype.updateRole = function (roleItem) {
        return this.httpClient.post(this.url + "/UpdateRole/", roleItem);
    };
    RoleService.prototype.checkRoleNameExist = function (roleName) {
        return this.httpClient.get(this.url + "/IsExistRoleInDb?roleName=" + roleName);
    };
    RoleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RoleService);
    return RoleService;
}());



/***/ }),

/***/ "./src/app/Service/routing-reprocess.service.ts":
/*!******************************************************!*\
  !*** ./src/app/Service/routing-reprocess.service.ts ***!
  \******************************************************/
/*! exports provided: RoutingReprocessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingReprocessService", function() { return RoutingReprocessService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var RoutingReprocessService = /** @class */ (function () {
    function RoutingReprocessService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL;
        this.urlRoutingReprocess = this.API_URL + "RoutingReprocess";
    }
    RoutingReprocessService.prototype.startRoutingReprocess = function (routingReprocess) {
        return this.httpClient.post(this.urlRoutingReprocess + "/Index", routingReprocess);
    };
    RoutingReprocessService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], RoutingReprocessService);
    return RoutingReprocessService;
}());



/***/ }),

/***/ "./src/app/Service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/Service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL;
        this.urlLogin = this.API_URL + "Login";
        this.url = this.API_URL + "User";
    }
    UserService.prototype.userLogin = function (userLogin) {
        return this.httpClient.post(this.urlLogin + "/UserLogin", userLogin);
    };
    //#region  USER CRUD
    UserService.prototype.getUser = function (currentPage, pageSize, username) {
        return this.httpClient.get(this.url + "/GetUsers?currentPage=" + currentPage + "&pageSize=" + pageSize + "&username=" + username);
    };
    UserService.prototype.getUserById = function (id) {
        return this.httpClient.get(this.url + "/GetUserById/" + ("" + id));
    };
    UserService.prototype.createUser = function (userProfile) {
        return this.httpClient.post(this.url + "/InsertUser/", userProfile);
    };
    UserService.prototype.updateUser = function (userProfile) {
        return this.httpClient.post(this.url + "/UpdateUser/", userProfile);
    };
    UserService.prototype.updateActiveUser = function (userData) {
        return this.httpClient.post(this.url + "/ActiveUser/", userData);
    };
    UserService.prototype.checkUserNameExist = function (userName) {
        return this.httpClient.get(this.url + "/IsExistUserInDb?userName=" + userName + "&email=''" + "&isCheckUserName=true");
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    about works! Manh\n</p>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _metric_reprocess_metric_reprocess_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metric-reprocess/metric-reprocess.component */ "./src/app/metric-reprocess/metric-reprocess.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _routing_reprocess_routing_reprocess_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routing-reprocess/routing-reprocess.component */ "./src/app/routing-reprocess/routing-reprocess.component.ts");
/* harmony import */ var src_app_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/error-code/error-code.component */ "./src/app/error-code/error-code.component.ts");










var routes = [
    { path: "", component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
    { path: "MetricsReprocess", component: _metric_reprocess_metric_reprocess_component__WEBPACK_IMPORTED_MODULE_4__["MetricReprocessComponent"] },
    { path: "Login", component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: "login", component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: "Login/Index", component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: "User", component: _user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"] },
    { path: "Role", component: _role_role_component__WEBPACK_IMPORTED_MODULE_5__["RoleComponent"] },
    { path: "RoutingReprocess", component: _routing_reprocess_routing_reprocess_component__WEBPACK_IMPORTED_MODULE_8__["RoutingReprocessComponent"] },
    { path: "ErrorCode", component: src_app_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_9__["ErrorCodeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n</router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _class_class_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./class/class.component */ "./src/app/class/class.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _metric_reprocess_metric_reprocess_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./metric-reprocess/metric-reprocess.component */ "./src/app/metric-reprocess/metric-reprocess.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_add_editUser_add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/add_editUser/add-edit-user/add-edit-user.component */ "./src/app/user/add_editUser/add-edit-user/add-edit-user.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
/* harmony import */ var _role_add_editRole_add_edit_role_add_edit_role_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./role/add_editRole/add-edit-role/add-edit-role.component */ "./src/app/role/add_editRole/add-edit-role/add-edit-role.component.ts");
/* harmony import */ var _Interceptor_httpInterceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Interceptor/httpInterceptor */ "./src/app/Interceptor/httpInterceptor.ts");
/* harmony import */ var _Directive_unique_role_validator_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Directive/unique-role-validator.directive */ "./src/app/Directive/unique-role-validator.directive.ts");
/* harmony import */ var _routing_reprocess_routing_reprocess_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./routing-reprocess/routing-reprocess.component */ "./src/app/routing-reprocess/routing-reprocess.component.ts");
/* harmony import */ var src_app_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/error-code/error-code.component */ "./src/app/error-code/error-code.component.ts");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _class_class_component__WEBPACK_IMPORTED_MODULE_10__["ClassComponent"],
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_13__["LoaderComponent"],
                _metric_reprocess_metric_reprocess_component__WEBPACK_IMPORTED_MODULE_14__["MetricReprocessComponent"],
                _user_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_16__["IndexComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_17__["UserComponent"],
                _user_add_editUser_add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_18__["AddEditUserComponent"],
                _role_role_component__WEBPACK_IMPORTED_MODULE_19__["RoleComponent"],
                _role_add_editRole_add_edit_role_add_edit_role_component__WEBPACK_IMPORTED_MODULE_20__["AddEditRoleComponent"],
                _Directive_unique_role_validator_directive__WEBPACK_IMPORTED_MODULE_22__["UniqueRoleValidatorDirective"],
                _routing_reprocess_routing_reprocess_component__WEBPACK_IMPORTED_MODULE_23__["RoutingReprocessComponent"],
                src_app_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_24__["ErrorCodeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot({
                    timeOut: 1000,
                    positionClass: 'toast-top-right',
                    preventDuplicates: false,
                }),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"]
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["APP_BASE_HREF"], useValue: "/" },
                //{ provide: UrlSerializer, useValue: lowerCaseUrlSerializer },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _Interceptor_httpInterceptor__WEBPACK_IMPORTED_MODULE_21__["httpInterceptor"], multi: true }
                // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/class/class.component.html":
/*!********************************************!*\
  !*** ./src/app/class/class.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    Manh class\n</p>"

/***/ }),

/***/ "./src/app/class/class.component.scss":
/*!********************************************!*\
  !*** ./src/app/class/class.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsYXNzL2NsYXNzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/class/class.component.ts":
/*!******************************************!*\
  !*** ./src/app/class/class.component.ts ***!
  \******************************************/
/*! exports provided: ClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassComponent", function() { return ClassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClassComponent = /** @class */ (function () {
    function ClassComponent() {
    }
    ClassComponent.prototype.ngOnInit = function () {
    };
    ClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-class',
            template: __webpack_require__(/*! ./class.component.html */ "./src/app/class/class.component.html"),
            styles: [__webpack_require__(/*! ./class.component.scss */ "./src/app/class/class.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClassComponent);
    return ClassComponent;
}());



/***/ }),

/***/ "./src/app/error-code/error-code.component.html":
/*!******************************************************!*\
  !*** ./src/app/error-code/error-code.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-body\" id=\"panel-pody\" style=\"height: calc(100vh - 230px);\">\n  <app-loader *ngIf=\"isLoading\"></app-loader>\n  <div class=\"di__tableWrapperFixed table-responsive\">\n    <div class=\"table-responsive\">\n      <table class=\"table table-hover tablesroll\">\n        <thead>\n          <tr class=\"table-primary\">\n            <th scope=\"col\" class=\"col-2\">Error Code</th>\n            <th scope=\"col\" class=\"col-6\">Description </th>\n\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of data|paginate:{  itemsPerPage: pageSize,currentPage: page,totalItems: count};\">\n            <td><a (click)=\"ShowDescription(item.ErrorMessage)\">{{item.ErrorCode}}</a></td>\n            <td>{{(item.ErrorMessage.length>100)?(item.ErrorMessage|slice:0:100)+'..':(item.ErrorMessage)}}</td>\n\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"panel-footer clearfix\">\n    <div class=\"di__panel-right\">\n      <div class=\"di__panel-right\">\n        <div class=\"col-md-12\">\n          <pagination-controls previousLabel=\"Prev\"\n                               nextLabel=\"Next\"\n                               responsive=\"true\"\n                               (pageChange)=\"handlePageChange($event)\"></pagination-controls>\n        </div>\n      </div>\n    </div>\n    <div class=\"di__panel-showing\">\n      <form class=\"form-inline\">\n        <div class=\"form-group form-group-sm\">\n          <select class=\"form-control di__showing\" [(ngModel)]=\"pageSize\" name=\"pgSizeControl\" (ngModelChange)=\"handlePageSizeChange(pageSize)\" id=\"numberOfObject\">\n            <option *ngFor=\"let size of pageSizes\" [ngValue]=\"size\">\n              {{ size }}\n            </option>\n          </select>\n          Item Per Page\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n  \n  \n"

/***/ }),

/***/ "./src/app/error-code/error-code.component.scss":
/*!******************************************************!*\
  !*** ./src/app/error-code/error-code.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLWNvZGUvZXJyb3ItY29kZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/error-code/error-code.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error-code/error-code.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCodeComponent", function() { return ErrorCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_error_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/error-code.service */ "./src/app/Service/error-code.service.ts");



var ErrorCodeComponent = /** @class */ (function () {
    function ErrorCodeComponent(errorCodeService) {
        this.errorCodeService = errorCodeService;
        this.page = 1;
        this.pageSize = 10;
        this.count = 0;
        this.pageSizes = [10, 50, 100];
    }
    ErrorCodeComponent.prototype.ngOnInit = function () {
        this.GetData();
    };
    ErrorCodeComponent.prototype.GetData = function () {
        var _this = this;
        this.isLoading = true;
        this.errorCodeService.GetErrors(this.page, this.pageSize)
            .subscribe(function (data) {
            if (data.length > 0) {
                _this.data = data;
                _this.count = data[0].TotalRows;
            }
            else {
                _this.count = 0;
            }
            _this.isLoading = false;
        });
    };
    ErrorCodeComponent.prototype.handlePageChange = function (event) {
        this.page = event;
        this.GetData();
    };
    ErrorCodeComponent.prototype.handlePageSizeChange = function (event) {
        this.pageSize = event;
        console.log(this.pageSize);
        this.page = 1;
        this.GetData();
    };
    ErrorCodeComponent.prototype.ShowDescription = function (message) {
        alert(message);
    };
    ErrorCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-code',
            template: __webpack_require__(/*! ./error-code.component.html */ "./src/app/error-code/error-code.component.html"),
            styles: [__webpack_require__(/*! ./error-code.component.scss */ "./src/app/error-code/error-code.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Service_error_code_service__WEBPACK_IMPORTED_MODULE_2__["ErrorCodeService"]])
    ], ErrorCodeComponent);
    return ErrorCodeComponent;
}());



/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/index/index.component.scss":
/*!********************************************!*\
  !*** ./src/app/index/index.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/index/index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/loader/loader.component.html":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"table-loading\" class=\"loader ui-widget-overlay bg-white opacity-80\">\n    <img src=\"/Angular//src//assets/loader-02-xs.gif\">\n</div>\n"

/***/ }),

/***/ "./src/app/loader/loader.component.scss":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".opacity-80,\n.no-shadow.transparent.btn:hover i,\n.ui-datepicker-current.ui-priority-secondary {\n  opacity: 0.8 !important;\n  -moz-opacity: 0.8 !important;\n}\n\n.table,\n.label-white,\n.bg-white {\n  background: #fff;\n}\n\n.ui-widget-overlay {\n  position: fixed !important;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  text-align: center;\n  z-index: 2000;\n}\n\n.ui-widget-overlay img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -26px 0 0 -26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGVyL0Q6XFxTb3VyY2VDb2RlXFxEaU1ldHJpY3NcXE1haW5cXFNvdXJjZVxcVmlldG5hbVxcUmVwcm9jZXNzLVdlYkFwcHNcXFJlcHJvY2Vzcy1GcmFtZXdvcmtcXFJlcHJvY2Vzcy5XZWJcXEFuZ3VsYXIvc3JjXFxhcHBcXGxvYWRlclxcbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHSSx1QkFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FERUE7OztFQUdJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wYWNpdHktODAsXHJcbi5uby1zaGFkb3cudHJhbnNwYXJlbnQuYnRuOmhvdmVyIGksXHJcbi51aS1kYXRlcGlja2VyLWN1cnJlbnQudWktcHJpb3JpdHktc2Vjb25kYXJ5IHtcclxuICAgIG9wYWNpdHk6IC44MCAhaW1wb3J0YW50O1xyXG4gICAgLW1vei1vcGFjaXR5OiAuODAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYmxlLFxyXG4ubGFiZWwtd2hpdGUsXHJcbi5iZy13aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4udWktd2lkZ2V0LW92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDIwMDA7XHJcbn1cclxuXHJcbi51aS13aWRnZXQtb3ZlcmxheSBpbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW46IC0yNnB4IDAgMCAtMjZweDtcclxufVxyXG4iLCIub3BhY2l0eS04MCxcbi5uby1zaGFkb3cudHJhbnNwYXJlbnQuYnRuOmhvdmVyIGksXG4udWktZGF0ZXBpY2tlci1jdXJyZW50LnVpLXByaW9yaXR5LXNlY29uZGFyeSB7XG4gIG9wYWNpdHk6IDAuOCAhaW1wb3J0YW50O1xuICAtbW96LW9wYWNpdHk6IDAuOCAhaW1wb3J0YW50O1xufVxuXG4udGFibGUsXG4ubGFiZWwtd2hpdGUsXG4uYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4udWktd2lkZ2V0LW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDIwMDA7XG59XG5cbi51aS13aWRnZXQtb3ZlcmxheSBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbjogLTI2cHggMCAwIC0yNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/loader/loader.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/metric-reprocess/metric-reprocess.component.html":
/*!******************************************************************!*\
  !*** ./src/app/metric-reprocess/metric-reprocess.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-loader *ngIf=\"isLoading\"></app-loader>\n\n    <nav>\n        <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\n            <a class=\"nav-item nav-link active \" id=\"nav-home-tab\" data-toggle=\"tab\" href=\"#nav-home\" role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\">Track Files</a>\n            <a class=\"nav-item nav-link \" id=\"nav-profile-tab\" data-toggle=\"tab\" href=\"#nav-profile\" role=\"tab\" aria-controls=\"nav-profile\" aria-selected=\"false\">Metrics Reprocess</a>\n            <!-- <a class=\"nav-item nav-link\" id=\"nav-contact-tab\" data-toggle=\"tab\" href=\"#nav-contact\" role=\"tab\" aria-controls=\"nav-contact\" aria-selected=\"false\">Contact</a> -->\n        </div>\n    </nav>\n    <div class=\"tab-content\" id=\"nav-tabContent\">\n        <div class=\"tab-pane fade show active\" id=\"nav-home\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">\n            <div class=\"track\">\n                <form novalidate (ngSubmit)=\"onSubmitBtnTrack()\" [formGroup]=\"rfTrackFile\">\n                    <div class=\"form-group row\">\n                        <label for=\"colFormLabel\" class=\"col-sm-2 col-form-label\">Flow: </label>\n                        <div class=\"col-sm-5 col-md-4 col-lg-4\">\n                            <select class=\"form-control\" [(ngModel)]=\"flowItemSelected\" (ngModelChange)=\"onChangeCombbFlow($event)\" formControlName=\"flowCombb\">\n                      <option [ngValue]=\"i\" *ngFor=\"let i of flowDatas\">{{i.Name}}</option>\n                    </select>\n                        </div>\n                        <div class=\"col-sm-5 col-md-4 col-lg-3\">\n                            <select class=\"form-control\" (change)=\"onChangeCombbFlowOption($event.target.value)\">\n                      <option value=\"1\">Inbound</option>\n                      <option value=\"2\">Oubound</option>\n                    </select>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"colFormLabel\" class=\"col-sm-2 col-form-label\">Year/Quarter: </label>\n                        <div class=\"col-sm-5 col-md-4 col-lg-4\">\n                            <input class=\"form-control col-md-3\" type=\"number\" id=\"Year\" name=\"Year\" min=\"1990\" max=\"9999\" required formControlName=\"Year\">\n                        </div>\n                        <div class=\"col-sm-5 col-md-4 col-lg-3\">\n                            <input class=\"form-control col-md-3\" type=\"number\" id=\"Quarter\" name=\"Quarter\" style=\"margin-left:5px;\" min=\"1\" max=\"4\" required formControlName=\"Quarter\">\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"this.flowItemSelected.Id ==1\" class=\"form-group row\">\n                        <label for=\"colFormLabel\" class=\"col-sm-2 col-form-label\">Inbox/Outbox IDs:</label>\n                        <div class=\"col-sm-10\">\n                            <textarea type=\"text\" class=\"form-control\" id=\"InOutboxIDs\" name=\"InOutboxIDs\" style=\"width:100%; height: 80px;\" required pattern=\"^[0-9]+(,[0-9]+)*$\" placeholder=\"List of Inbox or Outbox ID, ex: 1,2,...\" formControlName=\"InOutboxIDs\"></textarea>\n                            <small *ngIf=\"inOutboxIDs.errors && inOutboxIDs.errors.pattern\" class=\"text-danger\">Inbox/Outbox IDs incorrect format (ex:1,2,... )</small>\n                            <small *ngIf=\"inOutboxIDs.hasError('required') && inOutboxIDs.touched\" class=\"text-danger\">Inbox/Outbox IDs is required</small>\n                        </div>\n                    </div>\n\n                    <!--<div class=\"form-group row\">\n      <label for=\"colFormLabel\" class=\"col-sm-2 col-form-label\">File List:</label>\n      <div class=\"col-sm-10\">\n          <textarea class=\"form-control\" #txtAreaFile rows=\"3\" formControlName=\"files\" (change)=\"onFileListtxtAreaChange($event.target.value)\">  </textarea>\n      </div>\n  </div>\n  <div class=\"form-group row\">\n      <label for=\"\" class=\"col-sm-2 col-form-label\">Import File: </label>\n      <div class=\"col-sm-10\">\n          <input type=\"file\" #impInput formControlName=\"impFile\" (change)=\"fileChanged($event)\" class=\"form-control-file\" id=\"exampleFormControlFile1\">\n      </div>files\n  </div>-->\n                    <div class=\"btn-center \">\n                        <button type=\"submit\" [disabled]=\"!rfTrackFile.valid\" class=\"col-sm-3 btn btn-primary btn_pd-2  btn-lg btn-block\">Track</button>\n                    </div>\n                </form>\n            </div>\n            <div class=\"trackview \">\n                <div class=\"form-group row\">\n                    <div class=\"col-sm-3\">\n                        <select class=\"custom-select mr-sm-2\" id=\"inlineFormCustomSelect\" (change)=\"onChangeNumberPerPageSelected($event.target.value,true)\">\n                  <option value=\"10\" selected>10 items per page</option>\n                  <option value=\"20\">20 items per page</option>\n                  <option value=\"50\">50 items per page</option>\n                  <option value=\"100\">100 items per page</option>\n                </select>\n                    </div>\n                </div>\n                <div class=\"table-responsive\">\n                    <table class=\"table table-hover tablesroll\">\n                        <thead>\n                            <tr class=\"table-primary\">\n                                <th class=\"col-1 \"><input [checked]=\"isAllCheckBoxChecked()\" type=\"checkbox\" (change)=\"onCheckboxAll($event)\"></th>\n                                <th class=\"col-1 breaklines\"> Inbox/Outbox Id</th>\n                                <th class=\"col-1\">Integration Status</th>\n                                <th class=\"col-3 breaklines\">Created</th>\n                                <th class=\"col-5 breaklines\">Note</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let item of trackDataGrid | paginate: {id :'dwa',currentPage : pageTrack,itemsPerPage :itemsPerPageTrack, totalItems : totalItemsTrack} \">\n                                <td class=\"col-1\">\n                                    <input [checked]=\"item.IsChecked\" (change)=\"onCheckboxValue($event,item)\" [disabled]=\"item.IsDisable\" type=\"checkbox\">\n                                </td>\n                                <td [ngClass]=\"this.trackSearchDataParams.FlowCombbData.Id ==1 ? 'col-1  breaklines textcenter' : 'col-5 filename breaklines'\"> {{item.InOutboxId}}</td>\n                                <td class=\"col-1\">{{item.IntergrationStatus}}</td>\n                                <td class=\"col-3 \">{{item.DateShow}}</td>\n                                <td [ngClass]=\"this.trackSearchDataParams.FlowCombbData.Id ==1 ? 'col-5  breaklines textcenter' : 'col-1   textcenter'\">{{item.Note}}</td>\n\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n\n                <!-- End -->\n\n\n                <div class=\"track_pagination\">\n                    <div class=\"row pou center\">\n                        <pagination-controls id=\"dwa\" (pageBoundsCorrection)=\"pageTrack = $event\" (pageChange)=\"pageTrack = $event\" maxSize=\"9\" directionLinks=\"true\" autoHide=\"true\" responsive=\"true\" previousLabel=\"Previous\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\"\n                            screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n                        </pagination-controls>\n                    </div>\n\n                </div>\n\n            </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"nav-profile\" role=\"tabpanel\" aria-labelledby=\"nav-profile-tab\">\n\n            <div class=\"mtreprocess\">\n                <div class=\"mtreprocess__searchoptions\">\n                    <form novalidate (ngSubmit)=\"onSubmitReprocess()\" [formGroup]=\"rfSearchReprocess\">\n                        <div class=\"form-row row-ml-40 \">\n                            <div class=\"col-md-4 \">\n                                <div class=\"form-check \">\n                                    <input type=\"checkbox\" formControlName=\"isUseMTImportService\" class=\"form-check-input\" id=\"exampleCheck1\">\n                                    <label class=\"form-check-label\" for=\"exampleCheck1\">Use MT ImportService to import data</label>\n                                </div>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-outline-secondary\" (click)=\"onUnsuccessOrNotImpBtnClick()\" type=\"button\">Select all UnSuccess OR Not Importing documents</button>\n                            </div>\n                            <div class=\"text-center col-md-3 \">\n                                <button class=\"btn btn-primary\" type=\"submit\">Reprocess</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"form-group row\">\n                    <div class=\"col-sm-3\">\n                        <select class=\"custom-select mr-sm-2\" id=\"inlineFormCustomSelect\" (change)=\"onChangeNumberPerPageSelected($event.target.value,false)\">\n            <option value=\"10\" selected>10 items per page</option>\n            <option value=\"20\">20 items per page</option>\n            <option value=\"50\">50 items per page</option>\n            <option value=\"100\">100 items per page</option>\n          </select>\n                    </div>\n                </div>\n                <div class=\"mtreprocess__gridview\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table table-hover tablescroll \">\n                            <thead>\n                                <tr class=\"table-primary\">\n                                    <th class=\"col-2\">Inbox/Outbox Id</th>\n                                    <th class=\"col-2\">Year Quarter</th>\n                                    <th class=\"col-6\">Notes</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let item of  mtReprocessGrid | paginate: {id :'reprocess_pagination',currentPage : pageReprocess,itemsPerPage :itemsPerPageReprocess, totalItems : totalItemsReprocess}\">\n                                    <td class=\"col-2 breaklines\">{{item.InOuboxId}}</td>\n                                    <td class=\"col-2\">{{item.YearQuarter}}</td>\n                                    <td class=\"col-6 breaklines\">{{item.Note}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n\n\n                </div>\n\n\n                <!-- <div class=\"mtreprocess__gridview mtreprocess \">\n                <table class=\"table-wrapper table table-bordered  \">\n                    <thead>\n                        <tr>\n                            <th class=\"col-sm-2\">Inbox/Outbox Id</th>\n                            <th class=\"col-sm-2\">Customer Id</th>\n                            <th class=\"col-sm-2\">Year Quarter</th>\n                            <th class=\"col-sm-6\">Notes</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of  mtReprocessGrid | paginate: {id :'reprocess_pagination',currentPage : pageReprocess,itemsPerPage :itemsPerPageReprocess, totalItems : totalItemsReprocess}\">\n                            <td class=\"col-sm-2\">{{item.InOuboxId}}</td>\n                            <td class=\"col-sm-2\">{{item.CustomerId}}</td>\n                            <td class=\"col-sm-2\">{{item.YearQuarter}}</td>\n                            <td class=\"col-sm-6\">{{item.Note}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n\n            </div> -->\n                <div class=\"track_pagination\">\n                    <div class=\"row pou center\">\n                        <pagination-controls id=\"reprocess_pagination\" (pageBoundsCorrection)=\"pageReprocess = $event\" (pageChange)=\"pageReprocess = $event\" maxSize=\"9\" directionLinks=\"true\" autoHide=\"true\" responsive=\"true\" previousLabel=\"Previous\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\"\n                            screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n                        </pagination-controls>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n\n        <!-- <div class=\"tab-pane fade\" id=\"nav-contact\" role=\"tabpanel\" aria-labelledby=\"nav-contact-tab\">...</div> -->\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/metric-reprocess/metric-reprocess.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/metric-reprocess/metric-reprocess.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".track {\n  margin-top: 20px;\n}\n\n.btn-center {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 5px;\n  margin-top: -10px;\n}\n\n.mtreprocess {\n  margin-top: 20px;\n}\n\n.inp_ml {\n  margin-left: -14px;\n}\n\n.radio_pt {\n  padding-top: 7px;\n}\n\ninput[type=radio],\ninput[type=checkbox] {\n  /* IE 9 */\n  /* Chrome, Safari, Opera */\n  transform: scale(1.5);\n}\n\n.formgroup_pl {\n  padding-left: 30px;\n}\n\n.mtreprocess__gridview {\n  height: 300px;\n  overflow: scroll;\n}\n\n/* Validate css */\n\n.form-control.ng-touched.ng-invalid {\n  border: 1px solid red;\n}\n\n.form-control.ng-touched.ng-valid {\n  border: 1px solid green;\n}\n\n/* End Validate css */\n\n.row-ml-40 {\n  margin-left: 40px;\n}\n\n.row-mt {\n  margin-top: -2%;\n}\n\n.btn_pd-2 {\n  padding: 2px;\n}\n\n.row_mt-30 {\n  margin-top: 30px;\n}\n\n.table td {\n  text-align: center;\n}\n\n.textcenter {\n  text-align: center !important;\n}\n\ntable th {\n  text-align: center;\n  vertical-align: top;\n}\n\n.filename {\n  text-align: left !important;\n  word-break: break-all !important;\n}\n\n.track_pagination {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 5px;\n}\n\n.pou {\n  margin-left: auto;\n}\n\n.breaklines {\n  word-wrap: break-word;\n}\n\n/*Begin table css*/\n\n.tablesroll {\n  display: block;\n  height: 400px;\n  overflow: scroll;\n}\n\n/*End table css */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWV0cmljLXJlcHJvY2Vzcy9EOlxcU291cmNlQ29kZVxcRGlNZXRyaWNzXFxNYWluXFxTb3VyY2VcXFZpZXRuYW1cXFJlcHJvY2Vzcy1XZWJBcHBzXFxSZXByb2Nlc3MtRnJhbWV3b3JrXFxSZXByb2Nlc3MuV2ViXFxBbmd1bGFyL3NyY1xcYXBwXFxtZXRyaWMtcmVwcm9jZXNzXFxtZXRyaWMtcmVwcm9jZXNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZXRyaWMtcmVwcm9jZXNzL21ldHJpYy1yZXByb2Nlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBRFdBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1JKOztBRFdBO0VBQ0ksZ0JBQUE7QUNSSjs7QURXQTtFQUNJLGtCQUFBO0FDUko7O0FEV0E7RUFDSSxnQkFBQTtBQ1JKOztBRFdBOztFQUdJLFNBQUE7RUFFQSwwQkFBQTtFQUNBLHFCQUFBO0FDUko7O0FEV0E7RUFDSSxrQkFBQTtBQ1JKOztBRGFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDVko7O0FEY0EsaUJBQUE7O0FBRUE7RUFDSSxxQkFBQTtBQ1pKOztBRGVBO0VBQ0ksdUJBQUE7QUNaSjs7QURnQkEscUJBQUE7O0FBRUE7RUFDSSxpQkFBQTtBQ2RKOztBRGlCQTtFQUNJLGVBQUE7QUNkSjs7QURpQkE7RUFDSSxZQUFBO0FDZEo7O0FEaUJBO0VBQ0ksZ0JBQUE7QUNkSjs7QURpQkE7RUFDSSxrQkFBQTtBQ2RKOztBRGlCQTtFQUNJLDZCQUFBO0FDZEo7O0FEaUJBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ2RKOztBRGlCQTtFQUNJLDJCQUFBO0VBQ0EsZ0NBQUE7QUNkSjs7QURpQkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNkSjs7QURpQkE7RUFDSSxpQkFBQTtBQ2RKOztBRGlCQTtFQUNJLHFCQUFBO0FDZEo7O0FEa0JBLGtCQUFBOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ2hCSjs7QURxQkEsaUJBQUEiLCJmaWxlIjoic3JjL2FwcC9tZXRyaWMtcmVwcm9jZXNzL21ldHJpYy1yZXByb2Nlc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhY2sge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLy8udHJhY2t2aWV3IHtcclxuLy8gICAgIGhlaWdodDogMzAwcHg7XHJcbi8vICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuLy8gfVxyXG4vLyAudGFibGUtZml4ZWQgdGJvZHkge1xyXG4vLyAgICAgaGVpZ2h0OiAzMDBweDtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyB9XHJcbi5idG4tY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG59XHJcblxyXG4ubXRyZXByb2Nlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmlucF9tbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE0cHg7XHJcbn1cclxuXHJcbi5yYWRpb19wdCB7XHJcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0sXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgLyogSUUgOSAqL1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbiAgICAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxufVxyXG5cclxuLmZvcm1ncm91cF9wbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5tdHJlcHJvY2Vzc19fc2VhcmNob3B0aW9ucyB7fVxyXG5cclxuLm10cmVwcm9jZXNzX19ncmlkdmlldyB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuXHJcbi8qIFZhbGlkYXRlIGNzcyAqL1xyXG5cclxuLmZvcm0tY29udHJvbC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLm5nLXRvdWNoZWQubmctdmFsaWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbn1cclxuXHJcblxyXG4vKiBFbmQgVmFsaWRhdGUgY3NzICovXHJcblxyXG4ucm93LW1sLTQwIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG59XHJcblxyXG4ucm93LW10IHtcclxuICAgIG1hcmdpbi10b3A6IC0yJTtcclxufVxyXG5cclxuLmJ0bl9wZC0yIHtcclxuICAgIHBhZGRpbmc6IDJweDtcclxufVxyXG5cclxuLnJvd19tdC0zMCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4udGFibGUgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGV4dGNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxudGFibGUgdGgge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLmZpbGVuYW1lIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udHJhY2tfcGFnaW5hdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4ucG91IHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4uYnJlYWtsaW5lcyB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcblxyXG4vKkJlZ2luIHRhYmxlIGNzcyovXHJcblxyXG4udGFibGVzcm9sbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcblxyXG4vLzU3NVxyXG5cclxuLypFbmQgdGFibGUgY3NzICovXHJcblxyXG4vLzE4ICsgMSArMSw1KzEgPSAyMSw1IiwiLnRyYWNrIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmJ0bi1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuLm10cmVwcm9jZXNzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmlucF9tbCB7XG4gIG1hcmdpbi1sZWZ0OiAtMTRweDtcbn1cblxuLnJhZGlvX3B0IHtcbiAgcGFkZGluZy10b3A6IDdweDtcbn1cblxuaW5wdXRbdHlwZT1yYWRpb10sXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gIC8qIElFIDkgKi9cbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gIC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG59XG5cbi5mb3JtZ3JvdXBfcGwge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5tdHJlcHJvY2Vzc19fZ3JpZHZpZXcge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4vKiBWYWxpZGF0ZSBjc3MgKi9cbi5mb3JtLWNvbnRyb2wubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4uZm9ybS1jb250cm9sLm5nLXRvdWNoZWQubmctdmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbn1cblxuLyogRW5kIFZhbGlkYXRlIGNzcyAqL1xuLnJvdy1tbC00MCB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuXG4ucm93LW10IHtcbiAgbWFyZ2luLXRvcDogLTIlO1xufVxuXG4uYnRuX3BkLTIge1xuICBwYWRkaW5nOiAycHg7XG59XG5cbi5yb3dfbXQtMzAge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4udGFibGUgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0Y2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHRoIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uZmlsZW5hbWUge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbCAhaW1wb3J0YW50O1xufVxuXG4udHJhY2tfcGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5wb3Uge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmJyZWFrbGluZXMge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi8qQmVnaW4gdGFibGUgY3NzKi9cbi50YWJsZXNyb2xsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi8qRW5kIHRhYmxlIGNzcyAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/metric-reprocess/metric-reprocess.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/metric-reprocess/metric-reprocess.component.ts ***!
  \****************************************************************/
/*! exports provided: MetricReprocessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricReprocessComponent", function() { return MetricReprocessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _Service_metric_reprocess_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Service/metric-reprocess.service */ "./src/app/Service/metric-reprocess.service.ts");





var MetricReprocessComponent = /** @class */ (function () {
    function MetricReprocessComponent(trackForm, mtReprocessService, toastr) {
        this.trackForm = trackForm;
        this.mtReprocessService = mtReprocessService;
        this.toastr = toastr;
        this.isLoading = false;
        this.isIDEExtract = false;
        this.itemsPerPageTrack = 10;
        this.totalItemsTrack = 0;
        this.pageTrack = 1;
        this.itemsPerPageReprocess = 6;
        this.totalItemsReprocess = 0;
        this.pageReprocess = 1;
        this.isInbox = true;
    }
    MetricReprocessComponent.prototype.ngOnInit = function () {
        var today = new Date();
        this.rfTrackFile = this.trackForm.group({
            impFile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', null),
            flowCombb: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', null),
            Year: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](today.getFullYear(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(9999)]),
            Quarter: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](Math.floor((today.getMonth() + 2) / 3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[1-4]"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)])),
            InOutboxIDs: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]+(,[0-9]+)*$")])),
        });
        this.rfSearchReprocess = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            isUseMTImportService: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true, null)
        });
        this.flowDatas = [
            { Id: 1, Name: 'CIP', FlowInOutabox: 1, IsInbox: true, Year: today.getFullYear(), Quarter: Math.floor((today.getMonth() + 2) / 3) },
            { Id: 2, Name: 'EDI_Extract', FlowInOutabox: 1, IsInbox: true, Year: today.getFullYear(), Quarter: Math.floor((today.getMonth() + 2) / 3) },
        ];
        this.flowItemSelected = this.flowDatas ? this.flowDatas[0] : null;
    };
    //#region  Submit form
    MetricReprocessComponent.prototype.onSubmitBtnTrack = function () {
        try {
            if (this.rfTrackFile.valid && !this.isLoading) {
                this.trackSearchDataParams = { FlowCombbData: {}, TrackSearchDatas: [] };
                this.trackSearchDataParams.FlowCombbData = this.flowItemSelected;
                this.trackSearchDataParams.FlowCombbData.Year = this.rfTrackFile.value.Year;
                this.trackSearchDataParams.FlowCombbData.Quarter = this.rfTrackFile.value.Quarter;
                var files = this.rfTrackFile.value.InOutboxIDs;
                if (this.trackSearchDataParams.FlowCombbData && this.trackSearchDataParams.FlowCombbData.Id == 2) {
                    this.getTrackFileStatusGrid(this.trackSearchDataParams);
                }
                else if (this.trackSearchDataParams.FlowCombbData && this.trackSearchDataParams.FlowCombbData.Id == 1) //CIP FLOW
                 {
                    if (this.rfTrackFile.valid) {
                        this.trackSearchDataParams.TrackSearchDatas = this.getTrackSearchs(files);
                        if (this.trackSearchDataParams && this.trackSearchDataParams.TrackSearchDatas && this.trackSearchDataParams.TrackSearchDatas.length > 0) {
                            this.getTrackFileStatusGrid(this.trackSearchDataParams);
                        }
                    }
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    MetricReprocessComponent.prototype.onSubmitReprocess = function () {
        var trackGridHaveItemChecked = [];
        if (this.trackDataGrid) {
            trackGridHaveItemChecked = this.trackDataGrid.filter(function (item, index) {
                return item.IsChecked === true;
            });
            var formValue = this.rfSearchReprocess.value;
            var searchCondition = {};
            if (trackGridHaveItemChecked) {
                searchCondition.FlowCombbData = trackGridHaveItemChecked[0].FlowCombbData; // phase 1
            }
            searchCondition.IsImportMetric = formValue.isUseMTImportService;
            var data = {};
            data.SearchCondition = searchCondition;
            data.TrackDataGridNeedReprocess = trackGridHaveItemChecked;
            this.reprocessSearch = data;
            if (this.isValidFormBeforeSubmitReprocess(trackGridHaveItemChecked)) {
                this.getReprocessGrid(this.reprocessSearch);
            }
        }
    };
    Object.defineProperty(MetricReprocessComponent.prototype, "files", {
        //#endregion
        //#region  Property
        get: function () {
            return this.rfTrackFile.get('files');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MetricReprocessComponent.prototype, "inOutboxIDs", {
        get: function () {
            return this.rfTrackFile.get('InOutboxIDs');
        },
        enumerable: true,
        configurable: true
    });
    //#endregion
    //#region  Method
    MetricReprocessComponent.prototype.filesHandler = function (file, index) {
        var obj = {};
        obj.InOutBoxId = file ? file : 0;
        return obj;
    };
    MetricReprocessComponent.prototype.handlerChooseItemToReprocessCIPFlow = function (item, index) {
        var trackGridItem = {};
        trackGridItem.InOutboxId = item.InOutboxId;
        trackGridItem.IntergrationStatus = item.IntergrationStatus;
        trackGridItem.Note = item.Note;
        trackGridItem.Index = item.Index;
        trackGridItem.YearQuarter = item.YearQuarter;
        trackGridItem.DateShow = item.DateShow;
        var inteStatus = item.IntergrationStatus.toLowerCase();
        var note = item.Note.toLowerCase();
        var isCheckedItem = false;
        if (inteStatus !== "success" && inteStatus !== "pass" && inteStatus !== "hold") {
            isCheckedItem = true;
        }
        trackGridItem.IsChecked = isCheckedItem;
        trackGridItem.IsDisable = isCheckedItem;
        trackGridItem.FlowCombbData = item.FlowCombbData;
        return trackGridItem;
    };
    MetricReprocessComponent.prototype.handlerChooseItemToReprocessEDIExtractFlow = function (item, index) {
        var trackGridItem = {};
        trackGridItem.InOutboxId = item.InOutboxId;
        trackGridItem.IntergrationStatus = item.IntergrationStatus;
        trackGridItem.Note = item.Note;
        trackGridItem.Index = item.Index;
        trackGridItem.YearQuarter = item.YearQuarter;
        trackGridItem.DateShow = item.DateShow;
        var inteStatus = item.IntergrationStatus.toLowerCase();
        var note = item.Note.toLowerCase();
        var isCheckedItem = false;
        if (inteStatus !== "success" && inteStatus !== "pass" && inteStatus !== "hold") {
            isCheckedItem = true;
        }
        trackGridItem.Trans = item.Trans;
        trackGridItem.SenderId = item.SenderId;
        trackGridItem.ReceiverId = item.ReceiverId;
        trackGridItem.TrackingProcessId = item.TrackingProcessId;
        trackGridItem.IsChecked = isCheckedItem;
        trackGridItem.IsDisable = isCheckedItem;
        trackGridItem.FlowCombbData = item.FlowCombbData;
        return trackGridItem;
    };
    MetricReprocessComponent.prototype.trackFileReprocessItemHandler = function (item, index) {
        if (item) {
            var fieds = item.trim().split('_');
            var obj = {};
            obj.IsReprocess = true;
            obj.Index = fieds[11];
            return obj;
        }
        else {
            return null;
        }
    };
    MetricReprocessComponent.prototype.getFilesChecked = function (accumulator, currentValue, currentIndex, originArray) {
        var infoReprocess = "_" + currentValue.Index;
        return accumulator += currentValue.FilePath + infoReprocess + "\n";
    };
    MetricReprocessComponent.prototype.onUnsuccessOrNotImpBtnClick = function () {
        if (this.trackDataGrid) {
            this.isLoading = true;
            try {
                if (this.flowItemSelected.Id == 1) //CIP Flow
                 {
                    this.trackDataGrid = this.trackDataGrid.map(this.handlerChooseItemToReprocessCIPFlow);
                }
                else if (this.flowItemSelected.Id == 2) //Extract
                 {
                    this.trackDataGrid = this.trackDataGrid.map(this.handlerChooseItemToReprocessEDIExtractFlow);
                }
                this.isLoading = false;
            }
            catch (error) {
                this.isLoading = false;
            }
        }
    };
    MetricReprocessComponent.prototype.isCheckedItem = function (inteStatus, note) {
        inteStatus = inteStatus.toLowerCase();
        if (inteStatus !== "success" && inteStatus !== "pass" && inteStatus !== "hold" && inteStatus !== "importing"
            && !note.toLowerCase().includes("not exist in diasciir9 database"))
            return true;
        else
            return false;
    };
    MetricReprocessComponent.prototype.getNumberFromForm = function (value, minValue, maxValue) {
        if (value > minValue && value <= maxValue) {
            return value;
        }
        return 0;
    };
    MetricReprocessComponent.prototype.getStringFromForm = function (value) {
        value = value.trim();
        if (value === "" || value === undefined || value === null)
            return "";
        else
            return value;
    };
    MetricReprocessComponent.prototype.isValidFormBeforeSubmitReprocess = function (trackGridHaveItemChecked) {
        if (this.rfSearchReprocess.valid && !this.isLoading) {
            if (trackGridHaveItemChecked !== undefined && trackGridHaveItemChecked.length > 0
                && trackGridHaveItemChecked) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    MetricReprocessComponent.prototype.onCheckboxAll = function (ev) {
        this.trackDataGrid.forEach(function (item, index) {
            if (ev.target.checked) {
                item.IsChecked = true;
            }
            else {
                item.IsChecked = false;
            }
        });
    };
    MetricReprocessComponent.prototype.isAllCheckBoxChecked = function () {
        if (this.trackDataGrid) {
            return this.trackDataGrid.every(function (p) { return p.IsChecked; });
        }
    };
    MetricReprocessComponent.prototype.updateStatusTrackGridThenReporcess = function (trackdataGridNew) {
        for (var _i = 0, trackdataGridNew_1 = trackdataGridNew; _i < trackdataGridNew_1.length; _i++) {
            var item = trackdataGridNew_1[_i];
            this.showUpdatedItem(item);
        }
    };
    MetricReprocessComponent.prototype.showUpdatedItem = function (newItem) {
        var updateItem = this.trackDataGrid.find(this.findIndexToUpdate, newItem.Index);
        var index = this.trackDataGrid.indexOf(updateItem);
        this.trackDataGrid[index] = newItem;
    };
    MetricReprocessComponent.prototype.findIndexToUpdate = function (newItem) {
        return newItem.Index === this;
    };
    //#endregion
    //#region On change Combobox
    MetricReprocessComponent.prototype.onChangeNumberPerPageSelected = function (value, isChangeNumberTrackGrid) {
        if (value > 0) {
            if (isChangeNumberTrackGrid) {
                this.itemsPerPageTrack = value;
            }
            else {
                this.itemsPerPageReprocess = value;
            }
        }
    };
    MetricReprocessComponent.prototype.onChangeCombbFlow = function (itemSelected) {
        var today = new Date();
        // this.flowItemSelected.FlowInOutabox = 1;
        if (itemSelected) {
            if (itemSelected && itemSelected.Id == 2) {
                this.isIDEExtract = true;
                this.rfTrackFile.controls['InOutboxIDs'].clearValidators();
            }
            else {
                this.rfTrackFile.controls['InOutboxIDs'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]+(,[0-9]+)*$")]));
                this.isIDEExtract = false;
            }
        }
        this.flowItemSelected = itemSelected;
        this.onChangeCombbFlowOption(this.isInbox ? 1 : 2);
        this.rfTrackFile.controls['InOutboxIDs'].updateValueAndValidity();
    };
    MetricReprocessComponent.prototype.onChangeCombbFlowOption = function (value) {
        if (value > 0) {
            this.flowItemSelected.FlowInOutabox = value;
            if (value === '1' || value == 1) {
                this.flowItemSelected.IsInbox = true;
                this.isInbox = true;
            }
            else {
                this.flowItemSelected.IsInbox = false;
                this.isInbox = false;
            }
        }
    };
    //#endregion
    //#region  CALL Service
    MetricReprocessComponent.prototype.getTrackSearchs = function (files) {
        var _this = this;
        if (files) {
            var cutStr = files.trim().split(',');
            var datas = cutStr.map(this.filesHandler);
            datas.forEach(function (e) {
                e.Year = _this.rfTrackFile.value.Year;
                e.Quarter = _this.rfTrackFile.value.Quarter;
                e.IsInbox = _this.flowItemSelected.IsInbox;
            });
            return datas;
        }
        else {
            return null;
        }
    };
    MetricReprocessComponent.prototype.getTrackFileStatusGrid = function (datas) {
        var _this = this;
        if (this.trackSearchDataParams.FlowCombbData && this.trackSearchDataParams.FlowCombbData.Id == 2) {
            this.isLoading = true;
            this.mtReprocessService.getTrackStatusFiles(datas).subscribe(function (res) {
                _this.isLoading = false;
                _this.trackDataGrid = res;
                if (_this.trackDataGrid && _this.trackDataGrid.length > 0) {
                    _this.alertSuccess("Track " + (_this.trackDataGrid ? _this.trackDataGrid.length : 0) + " files success !");
                }
                else {
                    // this.alertError("Track files fail !");
                }
            });
        }
        else {
            if (datas) {
                this.isLoading = true;
                this.mtReprocessService.getTrackStatusFiles(datas).subscribe(function (res) {
                    _this.isLoading = false;
                    _this.trackDataGrid = res;
                    console.log(_this.trackDataGrid);
                    if (_this.trackDataGrid && _this.trackDataGrid.length > 0) {
                        _this.alertSuccess("Track " + (_this.trackDataGrid ? _this.trackDataGrid.length : 0) + "/" + datas.TrackSearchDatas.length + " files success !");
                    }
                    else {
                        _this.alertError("Track files fail !");
                    }
                });
            }
            else {
                this.alertError("Track files fail !");
            }
        }
    };
    MetricReprocessComponent.prototype.getReprocessGrid = function (reprocessSearch) {
        var _this = this;
        if (reprocessSearch) {
            this.isLoading = true;
            this.totalItemsReprocess = 0;
            this.mtReprocessService.mtReprocess(reprocessSearch).toPromise()
                .then(function (res) {
                _this.mtReprocessGrid = res;
                _this.isLoading = false;
                if (_this.mtReprocessGrid && _this.mtReprocessGrid.length > 0) {
                    _this.totalItemsReprocess = _this.mtReprocessGrid.length;
                    _this.alertSuccess("Reprocess " + _this.mtReprocessGrid.length + "/" + reprocessSearch.TrackDataGridNeedReprocess.length + " files success !");
                }
                else {
                    _this.alertError("Reprocess fail !");
                }
            });
            //.then(res => {
            //   if (this.rfSearchReprocess.value.isUseMTImportService) {
            //     var checkedFiles = reprocessSearch.TrackDataGrid.reduce(this.getFilesChecked, "");
            //     if (checkedFiles) {
            //       var cutStr = checkedFiles.trim().split('\n');
            //       var datas = cutStr.map(this.trackFileReprocessItemHandler);
            //       if (datas) {
            //         this.isLoading = true;
            //         this.mtReprocessService.getStatusFiles(datas).subscribe(res => {
            //           this.isLoading = false;
            //           this.updateStatusTrackGridThenReporcess(res);
            //           this.alertSuccess("Update status track view success!");
            //         })
            //       }
            //       else {
            //         // Fail alert
            //       }
            //     }
            //     else {
            //       //File error
            //     }
            //   }
            // })
        }
    };
    //#endregion
    //#region  Alert Toasrt
    MetricReprocessComponent.prototype.alertSuccess = function (message) {
        this.toastr.success(message, "Success");
    };
    MetricReprocessComponent.prototype.alertError = function (message) {
        this.toastr.error(message, "Fail");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('impInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MetricReprocessComponent.prototype, "myInputVariable", void 0);
    MetricReprocessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-metric-reprocess',
            template: __webpack_require__(/*! ./metric-reprocess.component.html */ "./src/app/metric-reprocess/metric-reprocess.component.html"),
            styles: [__webpack_require__(/*! ./metric-reprocess.component.scss */ "./src/app/metric-reprocess/metric-reprocess.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _Service_metric_reprocess_service__WEBPACK_IMPORTED_MODULE_4__["MetricReprocessService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], MetricReprocessComponent);
    return MetricReprocessComponent;
}());



/***/ }),

/***/ "./src/app/role/add_editRole/add-edit-role/add-edit-role.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/role/add_editRole/add-edit-role/add-edit-role.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"rfRole\" class=\"form-horizontal\">\n    <div class=\"form-group\">\n        <label for=\"roleName\" class=\"form-label col-sm-3\">Role Name: </label>\n        <div class=\"col-sm-9\">\n            <input formControlName=\"roleName\" type=\"text\" [class]=\" isExistRoleName ? ' form-control isExist' : ' form-control ' \" name=\"roleName\">\n            <small *ngIf=\"roleName.hasError('maxlength')\" class=\"text-danger\">Role name cannot exceed 30 characters.</small>\n            <small *ngIf=\"roleName.hasError('required') && roleName.touched\" class=\"text-danger\">Role name is required.</small>\n            <small *ngIf=\"isExistRoleName\" class=\"text-danger\">Role name already exists.</small>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"description\" class=\"form-label col-sm-3\">Description: </label>\n        <div class=\"col-sm-9\">\n            <input formControlName=\"description\" type=\"text\" class=\"form-control\" name=\"description\">\n            <small *ngIf=\"description.hasError('maxlength')\" class=\"text-danger\">Description cannot exceed 100 characters.</small>\n            <small *ngIf=\"description.hasError('required') && description.touched\" class=\"text-danger\">Description is required</small>\n        </div>\n    </div>\n    <div class=\"text-center\">\n        <button [disabled]=\"rfRole.invalid || isExistRoleName\" (click)=\"addRole()\" *ngIf=\"roleId ==0\" class=\"btn btn-primary btn-addEdit\">Save</button>\n        <button [disabled]=\"rfRole.invalid || isExistRoleName\" (click)=\"updateRole()\" *ngIf=\"roleId !=0\" class=\"btn btn-primary btn-addEdit\">Update</button>\n    </div>\n\n</form>"

/***/ }),

/***/ "./src/app/role/add_editRole/add-edit-role/add-edit-role.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/role/add_editRole/add-edit-role/add-edit-role.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Validate css */\n.form-control.ng-touched.ng-invalid {\n  border: 1px solid red;\n}\n.form-control.ng-touched.ng-valid {\n  border: 1px solid green;\n}\n.form-control.ng-pending {\n  border: 1px solid #ff9415;\n  border-right: 5px solid #ff9415;\n  box-shadow: 0 0 0 0.2 rem rgb(255, 127, 2);\n}\n.isExist {\n  border: 1px solid red !important;\n}\n/* End Validate css */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZS9hZGRfZWRpdFJvbGUvYWRkLWVkaXQtcm9sZS9EOlxcU291cmNlQ29kZVxcRGlNZXRyaWNzXFxNYWluXFxTb3VyY2VcXFZpZXRuYW1cXFJlcHJvY2Vzcy1XZWJBcHBzXFxSZXByb2Nlc3MtRnJhbWV3b3JrXFxSZXByb2Nlc3MuV2ViXFxBbmd1bGFyL3NyY1xcYXBwXFxyb2xlXFxhZGRfZWRpdFJvbGVcXGFkZC1lZGl0LXJvbGVcXGFkZC1lZGl0LXJvbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JvbGUvYWRkX2VkaXRSb2xlL2FkZC1lZGl0LXJvbGUvYWRkLWVkaXQtcm9sZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBQTtBQUVBO0VBQ0kscUJBQUE7QUNBSjtBREdBO0VBQ0ksdUJBQUE7QUNBSjtBREdBO0VBQ0kseUJBQUE7RUFDQSwrQkFBQTtFQUNBLDBDQUFBO0FDQUo7QURHQTtFQUNJLGdDQUFBO0FDQUo7QURJQSxxQkFBQSIsImZpbGUiOiJzcmMvYXBwL3JvbGUvYWRkX2VkaXRSb2xlL2FkZC1lZGl0LXJvbGUvYWRkLWVkaXQtcm9sZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFZhbGlkYXRlIGNzcyAqL1xyXG5cclxuLmZvcm0tY29udHJvbC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLm5nLXRvdWNoZWQubmctdmFsaWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wubmctcGVuZGluZyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY5NDE1O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgI2ZmOTQxNTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMiByZW0gcmdiYSgyNTUsIDEyNywgMiwgMjUpO1xyXG59XHJcblxyXG4uaXNFeGlzdCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi8qIEVuZCBWYWxpZGF0ZSBjc3MgKi8iLCIvKiBWYWxpZGF0ZSBjc3MgKi9cbi5mb3JtLWNvbnRyb2wubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4uZm9ybS1jb250cm9sLm5nLXRvdWNoZWQubmctdmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbn1cblxuLmZvcm0tY29udHJvbC5uZy1wZW5kaW5nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmOTQxNTtcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgI2ZmOTQxNTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4yIHJlbSByZ2IoMjU1LCAxMjcsIDIpO1xufVxuXG4uaXNFeGlzdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xufVxuXG4vKiBFbmQgVmFsaWRhdGUgY3NzICovIl19 */"

/***/ }),

/***/ "./src/app/role/add_editRole/add-edit-role/add-edit-role.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/role/add_editRole/add-edit-role/add-edit-role.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddEditRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditRoleComponent", function() { return AddEditRoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_Model_role_role_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Model/role/role-data */ "./src/app/Model/role/role-data.ts");
/* harmony import */ var src_app_Service_role_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Service/role.service */ "./src/app/Service/role.service.ts");







var AddEditRoleComponent = /** @class */ (function () {
    function AddEditRoleComponent(roleForm, roleService, toastr) {
        this.roleForm = roleForm;
        this.roleService = roleService;
        this.toastr = toastr;
        this.isSubmitForm = false;
        this.isExistRoleName = false;
        this.onLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AddEditRoleComponent.prototype.ngOnInit = function () {
        this.rfRole = this.roleForm.group({
            roleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.RoleDataInp.Role, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.RoleDataInp.Description, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]),
        });
        this.onChageRoleName(this.RoleDataInp.Id > 0 ? false : true);
    };
    //#region  CALL SERVICE
    AddEditRoleComponent.prototype.addRole = function () {
        var _this = this;
        if (this.rfRole.valid && !this.isExistRoleName) {
            this.onLoaded.emit(true);
            this.initRoleData(true);
            this.roleService.createRole(this.roleDataItem).toPromise()
                .then(function (res) {
                _this.result = res;
                _this.onLoaded.emit(false);
                var closeModalBtn = document.getElementById('add-edit-modal-close');
                if (closeModalBtn) {
                    closeModalBtn.click();
                }
            })
                .then(function (res) {
                if (_this.result) {
                    _this.alertSuccess("Add role success !");
                }
                else {
                    _this.alertError("Add role fail !");
                }
            });
        }
    };
    AddEditRoleComponent.prototype.updateRole = function () {
        var _this = this;
        if (this.rfRole.valid && !this.isExistRoleName) {
            this.initRoleData(false);
            this.onLoaded.emit(true);
            this.roleService.updateRole(this.roleDataItem).toPromise()
                .then(function (res) {
                _this.onLoaded.emit(false);
                _this.result = res;
                var closeModalBtn = document.getElementById('add-edit-modal-close');
                if (closeModalBtn) {
                    closeModalBtn.click();
                }
            })
                .then(function (res) {
                if (_this.result) {
                    _this.alertSuccess("Update role success !");
                }
                else {
                    _this.alertError("Update role fail !");
                }
            });
        }
    };
    //#endregion
    //#region  METHOD
    AddEditRoleComponent.prototype.initRoleData = function (isInsert) {
        this.roleDataItem = {};
        var formValue = this.rfRole.value;
        this.roleDataItem.Id = isInsert ? 0 : this.roleId;
        this.roleDataItem.Role = formValue.roleName;
        this.roleDataItem.Description = formValue.description.trim();
        console.log(this.roleDataItem);
    };
    Object.defineProperty(AddEditRoleComponent.prototype, "roleId", {
        //#endregion
        get: function () {
            return this.RoleDataInp.Id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddEditRoleComponent.prototype, "roleName", {
        get: function () {
            return this.rfRole.get('roleName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddEditRoleComponent.prototype, "description", {
        get: function () {
            return this.rfRole.get('description');
        },
        enumerable: true,
        configurable: true
    });
    AddEditRoleComponent.prototype.createExistRoleNameValidator = function () {
        var _this = this;
        return function (control) {
            return _this.roleService
                .checkRoleNameExist(control.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                return result ? { roleExist: true } : null;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { }));
        };
    };
    //#region  Alert Toasrt
    AddEditRoleComponent.prototype.alertSuccess = function (message) {
        this.toastr.success(message, "Success");
    };
    AddEditRoleComponent.prototype.alertError = function (message) {
        this.toastr.error(message, "Fail");
    };
    //#endregion
    AddEditRoleComponent.prototype.onChageRoleName = function (isIinsert) {
        var _this = this;
        this.roleName.valueChanges.subscribe(function (val) {
            if (val) {
                if (!isIinsert) {
                    var isSameUserUpdate = _this.RoleDataInp.Role.toLowerCase().trim() === val.toString().toLowerCase().trim();
                    if (!isSameUserUpdate) {
                        return _this.roleService.checkRoleNameExist(val).toPromise()
                            .then(function (res) {
                            _this.isExistRoleName = res;
                        });
                    }
                    else {
                        _this.isExistRoleName = false;
                    }
                }
                else {
                    return _this.roleService.checkRoleNameExist(val).toPromise()
                        .then(function (res) {
                        _this.isExistRoleName = res;
                    });
                }
            }
            else {
                _this.isExistRoleName = false;
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_Model_role_role_data__WEBPACK_IMPORTED_MODULE_5__["RoleData"])
    ], AddEditRoleComponent.prototype, "RoleDataInp", void 0);
    AddEditRoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-edit-role',
            template: __webpack_require__(/*! ./add-edit-role.component.html */ "./src/app/role/add_editRole/add-edit-role/add-edit-role.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-role.component.scss */ "./src/app/role/add_editRole/add-edit-role/add-edit-role.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_Service_role_service__WEBPACK_IMPORTED_MODULE_6__["RoleService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], AddEditRoleComponent);
    return AddEditRoleComponent;
}());



/***/ }),

/***/ "./src/app/role/role.component.html":
/*!******************************************!*\
  !*** ./src/app/role/role.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Button trigger modal -->\n<button type=\"button\" class=\"btn btn-info btn-lg btn-add\" data-toggle=\"modal\" data-target=\"#exampleModal\" (click)=\"modalAdd()\">\n  Add Role\n</button>\n<table class=\"table table-bordered table-sm\">\n    <thead>\n        <tr>\n            <th scope=\"col \">Index</th>\n            <th scope=\"col \">Role Name</th>\n            <th scope=\"col \">Description </th>\n            <th scope=\"col \" style=\"text-align:center;\">Action</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let item of roles \">\n            <td>{{item.Index}}</td>\n            <td>{{item.Role}}</td>\n            <td>{{item.Description}}</td>\n            <td class=\"\" style=\"text-align:center;\">\n                <button class=\"btn btn-primary me-2 mb-1 btn-edit\" (click)=\"modalEdit(item.Id)\" data-toggle=\"modal\" data-target=\"#exampleModal\">Edit </button>\n                <!-- <button class=\"btn btn-danger me-2 mb-1\" (click)=\"delete(item)\"> Delete </button> -->\n            </td>\n        </tr>\n    </tbody>\n</table>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" data-backdrop=\"static\" data-keyboard=\"false\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{modalTile}}</h5>\n                <button type=\"button\" (click)=\"modalClose()\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" id=\"add-edit-modal-close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n            </div>\n            <div class=\"modal-body\">\n                <app-add-edit-role (onLoaded)=\"loaderHanler($event)\" [RoleDataInp]=\"role\" *ngIf=\"isActiveAddEditRoleComp\"></app-add-edit-role>\n            </div>\n\n        </div>\n    </div>\n</div>\n<app-loader *ngIf=\"isLoading\"></app-loader>"

/***/ }),

/***/ "./src/app/role/role.component.scss":
/*!******************************************!*\
  !*** ./src/app/role/role.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-add {\n  margin: 10px;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZS9EOlxcU291cmNlQ29kZVxcRGlNZXRyaWNzXFxNYWluXFxTb3VyY2VcXFZpZXRuYW1cXFJlcHJvY2Vzcy1XZWJBcHBzXFxSZXByb2Nlc3MtRnJhbWV3b3JrXFxSZXByb2Nlc3MuV2ViXFxBbmd1bGFyL3NyY1xcYXBwXFxyb2xlXFxyb2xlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yb2xlL3JvbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcm9sZS9yb2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1hZGQge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59IiwiLmJ0bi1hZGQge1xuICBtYXJnaW46IDEwcHg7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/role/role.component.ts":
/*!****************************************!*\
  !*** ./src/app/role/role.component.ts ***!
  \****************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/role.service */ "./src/app/Service/role.service.ts");



var RoleComponent = /** @class */ (function () {
    function RoleComponent(roleService) {
        this.roleService = roleService;
        this.modalTile = "Add User";
        this.isActiveAddEditRoleComp = false;
        this.isLoading = false;
    }
    RoleComponent.prototype.ngOnInit = function () {
        this.getRoles();
    };
    //#region User Method
    RoleComponent.prototype.modalAdd = function () {
        this.initRole();
        this.isActiveAddEditRoleComp = true;
        console.log(this.role);
        this.modalTile = "Add Role";
    };
    RoleComponent.prototype.modalEdit = function (id) {
        this.getUserById(id);
        this.modalTile = "Edit Role";
    };
    RoleComponent.prototype.modalClose = function () {
        this.isActiveAddEditRoleComp = false;
        this.getRoles();
    };
    RoleComponent.prototype.initRole = function () {
        this.role = {};
        this.role.Id = 0;
        this.role.Role = "";
        this.role.Description = "";
    };
    //#endregion
    //#region Call Service
    RoleComponent.prototype.getRoles = function () {
        var _this = this;
        this.roleService.getRoles().subscribe(function (res) {
            _this.roles = res;
            console.log(res);
        });
    };
    RoleComponent.prototype.getUserById = function (id) {
        var _this = this;
        return this.roleService.getRoleById(id).toPromise()
            .then(function (res) {
            _this.role = res;
            console.log(res);
        }).then(function (res) {
            _this.isActiveAddEditRoleComp = true;
        });
    };
    RoleComponent.prototype.loaderHanler = function ($event) {
        this.isLoading = $event;
    };
    RoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role',
            template: __webpack_require__(/*! ./role.component.html */ "./src/app/role/role.component.html"),
            styles: [__webpack_require__(/*! ./role.component.scss */ "./src/app/role/role.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Service_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"]])
    ], RoleComponent);
    return RoleComponent;
}());



/***/ }),

/***/ "./src/app/routing-reprocess/routing-reprocess.component.html":
/*!********************************************************************!*\
  !*** ./src/app/routing-reprocess/routing-reprocess.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"margin:10px;\" onload=\"onloadRoutingReprocess()\">\r\n  <form [formGroup]=\"rfRoutingReprocess\" (ngSubmit)=\"onSubmitBtnStart()\">\r\n    <table class=\"tb\">\r\n      <tr>\r\n\r\n        <td class=\"col-md-2\">\r\n          <label>Processing Type:</label><label class=\"clsrequire\">*</label>\r\n        </td>\r\n        <td class=\"col-md-10\">\r\n          <select name=\"ProcessingType\" id=\"ProcessingType\" class=\"form-control\" style=\"width: 100%; max-width: none;\" required formControlName=\"ProcessingType\">\r\n            <option value=\"DownloadInboundDocument\" selected>Download Inbound Document</option>\r\n            <option value=\"DownloadInboundDocumentToDiASCIIR9\">Download Inbound Document To DiASCIIR9</option>\r\n            <option value=\"DownloadInboundDocumentToDiMetrics\">Download Inbound Document To DiMetrics</option>\r\n            <option value=\"DownloadOutboundDocument\">Download Outbound Document</option>\r\n            <option value=\"DownloadOutboundDocumentToDiASCIIR9\">Download Outbound Document To DiASCIIR9</option>\r\n            <option value=\"DownloadOutboundDocumentToDiMetrics\">Download Outbound Document To DiMetrics</option>\r\n          </select>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"col-md-2\">\r\n          <label>Year/Quarter:</label><label class=\"clsrequire\">*</label>\r\n        </td>\r\n        <td class=\"col-md-10\">\r\n          <div class=\"form-inline\">\r\n            <input class=\"form-control col-md-3\" type=\"number\" id=\"Year\" name=\"Year\" min=\"1990\" maxlength=\"4\" required formControlName=\"Year\">\r\n            <input class=\"form-control col-md-3\" type=\"number\" id=\"Quarter\" name=\"Quarter\" style=\"margin-left:5px;\" min=\"1\" max=\"4\" required formControlName=\"Quarter\">\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"col-md-2\">\r\n          <label>Inbox/Outbox IDs:</label><label class=\"clsrequire\">*</label>\r\n        </td>\r\n        <td class=\"col-md-10\">\r\n          <textarea type=\"text\" class=\"form-control\" id=\"InOutboxIDs\" name=\"InOutboxIDs\" style=\"width:100%; height: 80px;\" required pattern=\"^[0-9]+(,[0-9]+)*$\" placeholder=\"List of Inbox ors Outbox ID, ex: 1,2,...\" formControlName=\"InOutboxIDs\"></textarea>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"col-md-2\">\r\n          <label>Bundle in:</label><label class=\"clsrequire\">*</label>\r\n        </td>\r\n        <td class=\"col-md-10\">\r\n          <input class=\"col-md-3 form-control\" type=\"number\" id=\"Bundle\" name=\"Bundle\" min=\"1\" max=\"999999\" value=\"10\" required formControlName=\"Bundle\">\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"col-md-2\">\r\n          <label>Interval in sec:</label><label class=\"clsrequire\">*</label>\r\n        </td>\r\n        <td class=\"col-md-10\">\r\n          <input class=\"col-md-3 form-control\" type=\"number\" id=\"Interval\" name=\"Interval\" min=\"0\" max=\"3600\" value=\"30\" required formControlName=\"Interval\">\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"col-md-2\">\r\n          <label>Result:</label>\r\n        </td>\r\n        <td class=\"col-md-10\">\r\n          <textarea id=\"Message\" class=\"form-control\" name=\"Message\" style=\"width:100%; height: 180px; opacity:0.8;\" disabled>{{ResultMsgDisplay}}</textarea>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"col-md-2\">\r\n          <label>Exception:</label>\r\n        </td>\r\n        <td class=\"col-md-10\">\r\n          <textarea id=\"ErrorMessage\" name=\"ErrorMessage\" class=\"form-control\" style=\"width:100%; height: 180px; opacity:0.8;\" disabled>{{ErrorMsgDisplay}}</textarea>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td colspan=\"4\" class=\"col-md-12\" style=\"text-align: right;\">\r\n          <button type=\"submit\" id=\"btnStart\" class=\"btn btn-success\" style=\"min-width:90px;\">Start</button>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/routing-reprocess/routing-reprocess.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/routing-reprocess/routing-reprocess.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tb {\n  margin-top: 20px;\n}\n\n.tb td {\n  padding: 5px;\n}\n\n.clsrequire {\n  color: red;\n}\n\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442; /* red */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGluZy1yZXByb2Nlc3MvRDpcXFNvdXJjZUNvZGVcXERpTWV0cmljc1xcTWFpblxcU291cmNlXFxWaWV0bmFtXFxSZXByb2Nlc3MtV2ViQXBwc1xcUmVwcm9jZXNzLUZyYW1ld29ya1xcUmVwcm9jZXNzLldlYlxcQW5ndWxhci9zcmNcXGFwcFxccm91dGluZy1yZXByb2Nlc3NcXHJvdXRpbmctcmVwcm9jZXNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yb3V0aW5nLXJlcHJvY2Vzcy9yb3V0aW5nLXJlcHJvY2Vzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw4QkFBQSxFQUFBLFVBQUE7QUNFRjs7QURDQTtFQUNFLDhCQUFBLEVBQUEsUUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcm91dGluZy1yZXByb2Nlc3Mvcm91dGluZy1yZXByb2Nlc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGIge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi50YiB0ZCB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uY2xzcmVxdWlyZSB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4ubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKi9cclxufVxyXG5cclxuLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqL1xyXG59XHJcbiIsIi50YiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi50YiB0ZCB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmNsc3JlcXVpcmUge1xuICBjb2xvcjogcmVkO1xufVxuXG4ubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXG59XG5cbi5uZy1pbnZhbGlkOm5vdChmb3JtKSB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovXG59Il19 */"

/***/ }),

/***/ "./src/app/routing-reprocess/routing-reprocess.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/routing-reprocess/routing-reprocess.component.ts ***!
  \******************************************************************/
/*! exports provided: RoutingReprocessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingReprocessComponent", function() { return RoutingReprocessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_routing_reprocess_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/routing-reprocess.service */ "./src/app/Service/routing-reprocess.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var RoutingReprocessComponent = /** @class */ (function () {
    function RoutingReprocessComponent(rtReprocessService, toastr) {
        this.rtReprocessService = rtReprocessService;
        this.toastr = toastr;
    }
    RoutingReprocessComponent.prototype.ngOnInit = function () {
        var today = new Date();
        this.rfRoutingReprocess = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            ProcessingType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("DownloadInboundDocument", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            Year: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](today.getFullYear(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,])),
            Quarter: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](Math.floor((today.getMonth() + 2) / 3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[1-4]")])),
            InOutboxIDs: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]+(,[0-9]+)*$")])),
            Bundle: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](10, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,])),
            Interval: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](20, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,])),
        });
    };
    RoutingReprocessComponent.prototype.onSubmitBtnStart = function () {
        var f = document.forms[0];
        // check validity input form
        if (f.checkValidity()) {
            var data = this.rfRoutingReprocess.value;
            this.procSendRequestReprocess(data);
        }
        else {
            f.reportValidity();
        }
    };
    RoutingReprocessComponent.prototype.procSendRequestReprocess = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var routingReprocessData, inoutboxIDs, strErrMsg, strResultMsg, i, count, currIndex, ids, res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.ErrorMsgDisplay = "";
                        this.ResultMsgDisplay = "";
                        routingReprocessData = {};
                        routingReprocessData.ProcessingType = data.ProcessingType;
                        routingReprocessData.Year = data.Year;
                        routingReprocessData.Quarter = data.Quarter;
                        routingReprocessData.Bundle = data.Bundle;
                        routingReprocessData.Interval = data.Interval;
                        this.openPopup("1/5");
                        routingReprocessData.IDs = data.InOutboxIDs;
                        inoutboxIDs = data.InOutboxIDs.split(",");
                        strErrMsg = "";
                        strResultMsg = "";
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < inoutboxIDs.length)) return [3 /*break*/, 6];
                        // update current progressing
                        this.updateMessagePopup((i + 1) + "/" + inoutboxIDs.length);
                        return [4 /*yield*/, sleep(100)];
                    case 2:
                        _a.sent();
                        count = 0;
                        currIndex = i;
                        ids = "";
                        if (inoutboxIDs.length > data.Bundle) {
                            while (count < data.Bundle && currIndex < inoutboxIDs.length) {
                                ids = ids + "," + inoutboxIDs[currIndex];
                                currIndex++;
                                count++;
                            }
                            // remove character "," in the first place
                            ids = ids.substring(1, ids.length);
                        }
                        // check if length of ID list less than Bundle in, send once with total ids inputed
                        else {
                            ids = data.InOutboxIDs;
                            currIndex = inoutboxIDs.length;
                        }
                        // post request
                        routingReprocessData.IDs = ids;
                        return [4 /*yield*/, this.rtReprocessService.startRoutingReprocess(routingReprocessData).toPromise()];
                    case 3:
                        res = _a.sent();
                        if (res.ErrorMessage)
                            strErrMsg = strErrMsg + "\r\nAn error occurred while process with IDs=" + res.IDs + ". error message: " + res.ErrorMessage;
                        else
                            strResultMsg = strResultMsg + "\r\n" + res.Message;
                        if (!(currIndex < inoutboxIDs.length)) return [3 /*break*/, 5];
                        return [4 /*yield*/, sleep(data.Interval * 1000)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        i = (i + data.Bundle);
                        return [3 /*break*/, 1];
                    case 6:
                        this.closePopup();
                        if (strErrMsg)
                            this.ErrorMsgDisplay = strErrMsg;
                        // show result  message
                        if (strResultMsg)
                            this.ResultMsgDisplay = strResultMsg;
                        return [2 /*return*/];
                }
            });
        });
    };
    RoutingReprocessComponent.prototype.openPopup = function (message) {
        document.getElementById("progressPopup").style.display = "inline";
        this.updateMessagePopup(message);
    };
    RoutingReprocessComponent.prototype.updateMessagePopup = function (message) {
        document.getElementById("msgCurrProgressPopup").textContent = message;
    };
    RoutingReprocessComponent.prototype.closePopup = function () {
        document.getElementById("msgCurrProgressPopup").textContent = "";
        document.getElementById("progressPopup").style.display = "none";
    };
    RoutingReprocessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-routing-reprocess',
            template: __webpack_require__(/*! ./routing-reprocess.component.html */ "./src/app/routing-reprocess/routing-reprocess.component.html"),
            styles: [__webpack_require__(/*! ./routing-reprocess.component.scss */ "./src/app/routing-reprocess/routing-reprocess.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Service_routing_reprocess_service__WEBPACK_IMPORTED_MODULE_2__["RoutingReprocessService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], RoutingReprocessComponent);
    return RoutingReprocessComponent;
}());

function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
// Implement pattern for textarea tag to check native HTML form
$(document).ready(function () {
    var errorMessage = "Please check the requested format.";
    $(this).find("textarea").on("input change propertychange", function () {
        var pattern = $(this).attr("pattern");
        if (pattern) {
            var patternRegex = new RegExp("^" + pattern.replace(/^\^|\$$/g, '') + "$", "g");
            var hasError = !$(this).val().toString().match(patternRegex);
            if (typeof this.setCustomValidity === "function") {
                this.setCustomValidity(hasError ? errorMessage : "");
            }
            else {
                $(this).toggleClass("error", !!hasError);
                $(this).toggleClass("ok", !hasError);
                if (hasError) {
                    $(this).attr("title", errorMessage);
                }
                else {
                    $(this).removeAttr("title");
                }
            }
        }
    });
});


/***/ }),

/***/ "./src/app/user/add_editUser/add-edit-user/add-edit-user.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/user/add_editUser/add-edit-user/add-edit-user.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"rfUser\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n    <div class=\"row\">\n        <div class=\"col-6\">\n            <div class=\"form-group row\">\n                <label for=\"Name\" class=\"form-label col-sm-3\">User Name: </label>\n                <div class=\"col-sm-9\">\n                    <input formControlName=\"userName\" type=\"text\" [class]=\"isExistUserName ? ' form-control isExist' : ' form-control ' \" name=\"userName\" readonly>\n                    <small *ngIf=\"userName.hasError('maxlength')\" class=\"text-danger\">User name cannot exceed 20 characters.</small>\n                    <small *ngIf=\"userName.hasError('required') && userName.touched\" class=\"text-danger\">User name is required.</small>\n                    <small *ngIf=\"isExistUserName\" class=\"text-danger\">User name already exists.</small>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-6\">\n            <div class=\"form-group row\">\n                <label for=\"fullName\" class=\"form-label col-sm-3\">Full Name: </label>\n                <div class=\"col-sm-9\">\n                    <input formControlName=\"fullName\" type=\"text\" class=\"form-control\" name=\"fullName\" readonly>\n                    <small *ngIf=\"fullName.hasError('maxlength')\" class=\"text-danger\">Full name cannot exceed 100 characters.</small>\n                    <small *ngIf=\"fullName.hasError('required') && fullName.touched\" class=\"text-danger\">Full name is required.</small>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n\n    <div class=\"row\">\n        <!--<div class=\"col-6\">\n            <div class=\"form-group row\">\n                <label for=\"password\" class=\"form-label col-sm-3\">Password: </label>\n                <div class=\"col-sm-9\">\n                    <input formControlName=\"password\" type=\"password\" class=\"form-control\" name=\"password\" readonly>\n                    <small *ngIf=\"password.hasError('maxlength')\" class=\"text-danger\">Password cannot exceed 8 characters.</small>\n                    <small *ngIf=\"password.hasError('required') && password.touched\" class=\"text-danger\">Password  is required.</small>\n                </div>\n            </div>\n        </div>-->\n        <div class=\"col-6\">\n            <div class=\"form-group row\">\n                <label for=\"phoneNumber\" class=\"form-label col-sm-3\">Phone Number: </label>\n                <div class=\"col-sm-9\">\n                    <input formControlName=\"phoneNumber\" type=\"text\" class=\"form-control\" name=\"phoneNumber\" readonly>\n                    \n\n                </div>\n            </div>\n        </div>\n\n\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-6\">\n            <div class=\"form-group row\">\n                <label for=\"email\" class=\"form-label col-sm-3\">Email: </label>\n                <div class=\"col-sm-9\">\n                    <input formControlName=\"email\" type=\"text\" class=\"form-control\" name=\"email\" readonly>\n                    <small *ngIf=\"email.hasError('maxlength')\" class=\"text-danger\">Email number cannot exceed 50 characters.</small>\n                    <small *ngIf=\"email.hasError('required') && email.touched\" class=\"text-danger\">Email  is required.</small>\n                    <small *ngIf=\"email.errors && email.errors.pattern\" class=\"text-danger\">Email not valid</small>\n\n\n                </div>\n            </div>\n        </div>\n        <div class=\"col-6\">\n            <div class=\"form-group row\">\n                <label for=\"roleName\" class=\"form-label col-sm-3\">Role Name: </label>\n                <div class=\"col-sm-9\">\n                    <!--<select formControlName=\"roleName\" [(ngModel)]=\"roleSelected\" name=\"roleName\" class=\"form-control\">\n                    <option *ngFor=\"let role of roles\" [ngValue]=\"role\">{{role.Role}}</option>\n                  </select>-->\n                  <ul class=\"list-unstyled\">\n                    <li *ngFor=\"let role of roles\">\n                      <input type=\"checkbox\" [value]=\"role.isSelected\" [(ngModel)]=\"role.isSelected\" [ngModelOptions]=\"{standalone: true}\" />\n                      <label class=\"form-check-label\">{{role.Role}}</label>\n                    </li>\n                  </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"text-center\">\n        \n        <button [disabled]=\"rfUser.invalid || isExistUserName\" (click)=\"updateUser()\" class=\"btn btn-primary btn-addEdit\">Update</button>\n    </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/user/add_editUser/add-edit-user/add-edit-user.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/user/add_editUser/add-edit-user/add-edit-user.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Validate css */\n.form-control.ng-touched.ng-invalid {\n  border: 1px solid red;\n}\n.form-control.ng-touched.ng-valid {\n  border: 1px solid green;\n}\n.form-control.ng-pending {\n  border: 1px solid #ff9415;\n  border-right: 5px solid #ff9415;\n  box-shadow: 0 0 0 0.2 rem rgb(255, 127, 2);\n}\n.isExist {\n  border: 1px solid red !important;\n}\np {\n  margin: 0px;\n}\n/* End Validate css */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9hZGRfZWRpdFVzZXIvYWRkLWVkaXQtdXNlci9EOlxcU291cmNlQ29kZVxcRGlNZXRyaWNzXFxNYWluXFxTb3VyY2VcXFZpZXRuYW1cXFJlcHJvY2Vzcy1XZWJBcHBzXFxSZXByb2Nlc3MtRnJhbWV3b3JrXFxSZXByb2Nlc3MuV2ViXFxBbmd1bGFyL3NyY1xcYXBwXFx1c2VyXFxhZGRfZWRpdFVzZXJcXGFkZC1lZGl0LXVzZXJcXGFkZC1lZGl0LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvYWRkX2VkaXRVc2VyL2FkZC1lZGl0LXVzZXIvYWRkLWVkaXQtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBQTtBQUVBO0VBQ0kscUJBQUE7QUNBSjtBREdBO0VBQ0ksdUJBQUE7QUNBSjtBREdBO0VBQ0kseUJBQUE7RUFDQSwrQkFBQTtFQUNBLDBDQUFBO0FDQUo7QURHQTtFQUNJLGdDQUFBO0FDQUo7QURHQTtFQUNJLFdBQUE7QUNBSjtBRElBLHFCQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci9hZGRfZWRpdFVzZXIvYWRkLWVkaXQtdXNlci9hZGQtZWRpdC11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVmFsaWRhdGUgY3NzICovXHJcblxyXG4uZm9ybS1jb250cm9sLm5nLXRvdWNoZWQubmctaW52YWxpZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wubmctdG91Y2hlZC5uZy12YWxpZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC5uZy1wZW5kaW5nIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjk0MTU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjZmY5NDE1O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4yIHJlbSByZ2JhKDI1NSwgMTI3LCAyLCAyNSk7XHJcbn1cclxuXHJcbi5pc0V4aXN0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5wIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG5cclxuLyogRW5kIFZhbGlkYXRlIGNzcyAqLyIsIi8qIFZhbGlkYXRlIGNzcyAqL1xuLmZvcm0tY29udHJvbC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbi5mb3JtLWNvbnRyb2wubmctdG91Y2hlZC5uZy12YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xufVxuXG4uZm9ybS1jb250cm9sLm5nLXBlbmRpbmcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmY5NDE1O1xuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjZmY5NDE1O1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjIgcmVtIHJnYigyNTUsIDEyNywgMik7XG59XG5cbi5pc0V4aXN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkICFpbXBvcnRhbnQ7XG59XG5cbnAge1xuICBtYXJnaW46IDBweDtcbn1cblxuLyogRW5kIFZhbGlkYXRlIGNzcyAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/user/add_editUser/add-edit-user/add-edit-user.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/user/add_editUser/add-edit-user/add-edit-user.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddEditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditUserComponent", function() { return AddEditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_Model_user_user_profile_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Model/user/user-profile-data */ "./src/app/Model/user/user-profile-data.ts");
/* harmony import */ var src_app_Service_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Service/role.service */ "./src/app/Service/role.service.ts");
/* harmony import */ var src_app_Service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Service/user.service */ "./src/app/Service/user.service.ts");







var AddEditUserComponent = /** @class */ (function () {
    function AddEditUserComponent(userForm, userService, toastr, roleService) {
        this.userForm = userForm;
        this.userService = userService;
        this.toastr = toastr;
        this.roleService = roleService;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.onLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AddEditUserComponent.prototype.ngOnInit = function () {
        this.rfUser = this.userForm.group({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.userProfileData.User.UserName, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]),
            //password: new FormControl(this.userProfileData.User.Password, [Validators.required, Validators.maxLength(8)]),
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.userProfileData.User.FullName, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.userProfileData.User.PhoneNumber),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.userProfileData.User.Email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)])
            //roleName: new FormControl(this.userProfileData.Role.Role, Validators.required),
            //roleId: new FormControl(this.userProfileData.Role.Id, Validators.required),
        });
        this.getRolesCbb();
        this.onChageUserName(this.userProfileData.User.Id > 0 ? false : true);
    };
    //#region  CALL SERVICE
    AddEditUserComponent.prototype.addUser = function () {
        var _this = this;
        if (this.rfUser.valid && !this.isExistUserName) {
            this.initUserProfileData(true);
            this.onLoaded.emit(true);
            console.log(this.userProfileItem);
            this.userService.createUser(this.userProfileItem).toPromise()
                .then(function (res) {
                _this.onLoaded.emit(false);
                _this.result = res;
                var closeModalBtn = document.getElementById('add-edit-modal-close');
                if (closeModalBtn) {
                    closeModalBtn.click();
                }
            })
                .then(function (res) {
                if (_this.result) {
                    _this.alertSuccess("Add user success !");
                }
                else {
                    _this.toastr.error("Add user fail !");
                }
            });
        }
    };
    AddEditUserComponent.prototype.updateUser = function () {
        var _this = this;
        if (this.rfUser.valid && !this.isExistUserName) {
            this.initUserProfileData(false);
            this.onLoaded.emit(true);
            console.log(this.userProfileItem);
            var selectedRoles = [];
            for (var _i = 0, _a = this.roles; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.isSelected) {
                    selectedRoles.push(item);
                }
            }
            this.userProfileItem.JsonRole = JSON.stringify(selectedRoles);
            this.userService.updateUser(this.userProfileItem).toPromise()
                .then(function (res) {
                _this.onLoaded.emit(false);
                _this.result = res;
                var closeModalBtn = document.getElementById('add-edit-modal-close');
                if (closeModalBtn) {
                    closeModalBtn.click();
                }
            })
                .then(function (res) {
                if (_this.result) {
                    _this.alertSuccess("Update user success !");
                }
                else {
                    _this.toastr.error("Update user fail !");
                }
            });
        }
    };
    AddEditUserComponent.prototype.getRolesCbb = function () {
        var _this = this;
        this.onLoaded.emit(true);
        return this.roleService.getRoles().toPromise()
            .then(function (res) {
            _this.onLoaded.emit(false);
            _this.roles = res;
            console.log(_this.roles);
            for (var _i = 0, _a = _this.userProfileData.roles; _i < _a.length; _i++) {
                var roleItem = _a[_i];
                for (var _b = 0, _c = _this.roles; _b < _c.length; _b++) {
                    var item = _c[_b];
                    if (roleItem.Id == item.Id) {
                        item.isSelected = true;
                    }
                }
            }
        });
    };
    //#endregion
    //#region  METHOD
    AddEditUserComponent.prototype.onChangeRole = function (e) {
        console.log(e.selectedIndex + 1);
        this.roleSelected = this.roles.find(function (role, index) {
            return role.Id === (e.selectedIndex + 1);
        });
    };
    AddEditUserComponent.prototype.initUserProfileData = function (isInsert) {
        this.userProfileItem = { User: {}, Role: {} };
        var formValue = this.rfUser.value;
        var user = this.userProfileItem.User;
        var role = this.userProfileItem.Role;
        //todo check roleselected null
        //role.Id = this.roleSelected.Id;
        //role.Role = this.roleSelected.Role;
        /*role.Description = this.roleSelected.Description.trim();*/
        user.Id = isInsert ? 0 : this.userId;
        user.UserName = formValue.userName.trim();
        user.Password = formValue.password;
        user.Email = formValue.email.trim();
        user.FullName = formValue.fullName.trim();
        user.PhoneNumber = formValue.phoneNumber;
        console.log(this.userProfileItem);
    };
    Object.defineProperty(AddEditUserComponent.prototype, "userId", {
        //#endregion
        //#region  Property
        get: function () {
            return this.userProfileData.User.Id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddEditUserComponent.prototype, "userName", {
        get: function () {
            return this.rfUser.get('userName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddEditUserComponent.prototype, "password", {
        get: function () {
            return this.rfUser.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddEditUserComponent.prototype, "fullName", {
        get: function () {
            return this.rfUser.get('fullName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddEditUserComponent.prototype, "phoneNumber", {
        get: function () {
            return this.rfUser.get('phoneNumber');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddEditUserComponent.prototype, "roleName", {
        get: function () {
            return this.rfUser.get('roleName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddEditUserComponent.prototype, "roleId", {
        get: function () {
            return this.rfUser.get('roleId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddEditUserComponent.prototype, "email", {
        get: function () {
            return this.rfUser.get('email');
        },
        enumerable: true,
        configurable: true
    });
    //#endregion
    //#region Custom Validator
    AddEditUserComponent.prototype.IsCheckExistUserName = function (userName) {
        var _this = this;
        if (userName) {
            return this.userService.checkUserNameExist(userName).toPromise()
                .then(function (res) {
                _this.isExistUserName = res;
            });
        }
    };
    AddEditUserComponent.prototype.onChageUserName = function (isIinsert) {
        var _this = this;
        this.userName.valueChanges.subscribe(function (val) {
            if (val) {
                if (!isIinsert) {
                    var isSameUserUpdate = _this.userProfileData.User.UserName.toLowerCase().trim() === val.toString().toLowerCase().trim();
                    if (!isSameUserUpdate) {
                        return _this.userService.checkUserNameExist(val).toPromise()
                            .then(function (res) {
                            _this.isExistUserName = res;
                            console.log(_this.isExistUserName);
                        });
                    }
                    else {
                        _this.isExistUserName = false;
                    }
                }
                else {
                    return _this.userService.checkUserNameExist(val).toPromise()
                        .then(function (res) {
                        _this.isExistUserName = res;
                    });
                }
            }
            else {
                _this.isExistUserName = false;
            }
        });
    };
    // createExistRoleNameValidator(): AsyncValidatorFn {
    //   return (control: AbstractControl): Observable<ValidationErrors> => {
    //     if (!control.valueChanges || control.pristine) {
    //       return null;
    //     }
    //     return this.userService
    //       .checkUserNameExist(control.value)
    //       .pipe(
    //         // map((result: boolean) =>
    //         //   result ? { userExist: true } : null
    //         // ),
    //       );
    //   };
    // }
    //#endregion CustomValidator
    //#region  Alert Toasrt
    AddEditUserComponent.prototype.alertSuccess = function (message) {
        this.toastr.success(message, "Success");
    };
    AddEditUserComponent.prototype.alertError = function (message) {
        this.toastr.error(message, "Fail");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_Model_user_user_profile_data__WEBPACK_IMPORTED_MODULE_4__["UserProfileData"])
    ], AddEditUserComponent.prototype, "userProfileData", void 0);
    AddEditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-edit-user',
            template: __webpack_require__(/*! ./add-edit-user.component.html */ "./src/app/user/add_editUser/add-edit-user/add-edit-user.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-user.component.scss */ "./src/app/user/add_editUser/add-edit-user/add-edit-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_Service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], src_app_Service_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"]])
    ], AddEditUserComponent);
    return AddEditUserComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"group\" style=\"text-align:center\">\n    <h1 class=\"th_titileLogin\">Welcome to the Reprocess WebApps </h1>\n    <h3></h3>\n</div>\n\n<section id=\"form_id\" method=\"post\" name=\"LoginForm\" class=\"th__formInput\" data-parsley-validate=\"\">\n    <form autocomplete=\"off\" (ngSubmit)=\"onSubmitBtnLogin()\" class=\"th__formInput\" role=\"form\" method=\"post\" [formGroup]=\"rfLogin\">\n        <div class=\"group th__groupLogin\">\n            <input formControlName=\"loginUserName\" id=\"LoginUserName\" class=\"th__inputLogin\" type=\"text\"><span class=\"highlight th__highlightLogin\"></span><span class=\"bar\"></span>\n            <small *ngIf=\"userName.hasError('required') && userName.touched\" class=\"text-danger\">User name is required.</small>\n            <label class=\"th__labelLogin\">UserName</label>\n        </div>\n        <div class=\"group th__groupLogin heightError\">\n            <input formControlName=\"loginPassword\" id=\"LoginPassword\" class=\"th__inputLogin\" type=\"password\" data-parsley-trigger=\"change\"><span class=\"highlight th__highlightLogin\"></span><span class=\"bar\"></span>\n            <small *ngIf=\"password.hasError('required') && password.touched\" class=\"text-danger\">Password is required.</small>\n            <label class=\"th__labelLogin\">Password</label>\n        </div>\n        <div>\n            <div id=\"errMessage\" [innerText]='result?.ErrorMSG' class=\"err-mss-box text-danger mrg20B\">\n\n            </div>\n        </div>\n        <button type=\"submit\" value=\"validate\" id=\"submit\" class=\"button buttonBlue\">\n                      LOGIN\n  <div class=\"ripples buttonRipples\"><span class=\"ripplesCircle\"></span></div>\n</button>\n    </form>\n\n</section>"

/***/ }),

/***/ "./src/app/user/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Forms */\nbody #login {\n  min-height: 100vh;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\nlegend {\n  font-size: 21px;\n  line-height: inherit;\n  display: block;\n  width: 100%;\n  margin-bottom: 20px;\n  padding: 0;\n  color: #333;\n  border: 0;\n  border-bottom: 1px solid #dfe8f1;\n}\nlabel {\n  font-weight: bold;\n  display: inline-block;\n}\ninput[type=radio],\ninput[type=checkbox] {\n  line-height: normal;\n}\ninput[type=file] {\n  display: block;\n}\nselect[multiple],\nselect[size] {\n  height: auto;\n}\nselect optgroup {\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n}\ninput[type=file]:focus,\ninput[type=radio]:focus,\ninput[type=checkbox]:focus {\n  outline: thin dotted #333;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\ninput[type=number]::-webkit-outer-spin-button,\ninput[type=number]::-webkit-inner-spin-button {\n  height: auto;\n}\noutput {\n  font-size: 14px;\n  line-height: 1.428571429;\n  display: block;\n  padding-top: 7px;\n  vertical-align: middle;\n  color: #555;\n}\ndiv.dataTables_filter input,\n.input,\n.form-control,\n.dataTables_length select,\n.bootstrap-timepicker-widget table td input,\n.ui-toolbar select,\n.ui-toolbar input {\n  font-size: 13px;\n  display: block;\n  float: none;\n  background: #fff;\n  width: 100%;\n  height: 25px;\n  padding: 2px 10px;\n  color: #2b2f33;\n  border: #dfe8f1 solid 1px;\n  box-shadow: inset 1px 1px 3px #f6f6f6;\n}\ndiv.dataTables_filter input:focus,\n.input:focus,\n.form-control:focus,\n.selector.focus,\n.bootstrap-timepicker-widget table td input:focus,\n.ui-toolbar select:focus,\n.ui-toolbar input:focus {\n  color: #333;\n  border-color: #3da6ff;\n}\n.form-control:-moz-placeholder {\n  color: #999;\n}\n.form-control::-moz-placeholder {\n  color: #999;\n}\n.form-control:-ms-input-placeholder {\n  color: #999;\n}\n.form-control::-webkit-input-placeholder {\n  color: #999;\n}\ntextarea.form-control {\n  height: auto;\n}\n.form-group {\n  margin-bottom: 15px;\n}\n.form-group label {\n  margin-bottom: 5px;\n}\n.form-group .switch-toggle {\n  margin-top: 6px;\n}\n.radio,\n.checkbox {\n  display: block;\n  min-height: 20px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  vertical-align: middle;\n}\n.radio label,\n.checkbox label {\n  font-weight: normal;\n  display: inline;\n  margin-bottom: 0;\n  cursor: pointer;\n}\n.radio input[type=radio],\n.radio-inline input[type=radio],\n.checkbox input[type=checkbox],\n.checkbox-inline input[type=checkbox] {\n  float: left;\n}\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n.radio-inline,\n.checkbox-inline {\n  font-weight: normal;\n  line-height: 19px;\n  display: inline-block;\n  height: 19px;\n  margin-bottom: 0;\n  cursor: pointer;\n  vertical-align: middle;\n}\n.radio-inline label,\n.checkbox-inline label {\n  font-weight: normal;\n  line-height: 17px;\n}\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\ninput[type=radio][disabled],\ninput[type=checkbox][disabled],\n.radio[disabled],\n.radio-inline[disabled],\n.checkbox[disabled],\n.checkbox-inline[disabled],\nfieldset[disabled] input[type=radio],\nfieldset[disabled] input[type=checkbox],\nfieldset[disabled] .radio,\nfieldset[disabled] .radio-inline,\nfieldset[disabled] .checkbox,\nfieldset[disabled] .checkbox-inline {\n  cursor: not-allowed;\n}\n.input-sm {\n  font-size: 12px;\n  line-height: 1.5;\n  height: 30px;\n  padding: 5px 10px;\n  border-radius: 0;\n}\nselect.input-sm {\n  line-height: 30px;\n  height: 30px;\n}\ntextarea.input-sm {\n  height: auto;\n}\n.input-lg {\n  font-size: 18px;\n  line-height: 1.33;\n  height: 45px;\n  padding: 10px 16px;\n  border-radius: 0;\n}\nselect.input-lg {\n  line-height: 45px;\n  height: 45px;\n}\ntextarea.input-lg {\n  height: auto;\n}\n.form-control-static {\n  margin-bottom: 0;\n}\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 0;\n  color: #737373;\n}\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n  }\n  .form-inline .radio,\n.form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    padding-left: 0;\n  }\n  .form-inline .radio input[type=radio],\n.form-inline .checkbox input[type=checkbox] {\n    float: none;\n    margin-left: 0;\n  }\n}\n.form-horizontal .control-label,\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 7px;\n}\n/*.form-horizontal > .form-group {\n    margin-right: -15px;\n    margin-left: -15px;\n}*/\n.form-horizontal > .di__Boxbrd-form {\n  margin-right: -15px !important;\n  margin-left: -15px !important;\n}\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after {\n  display: table;\n  content: \" \";\n}\n.form-horizontal .form-group:after {\n  clear: both;\n}\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after {\n  display: table;\n  content: \" \";\n}\n.form-horizontal .form-group:after {\n  clear: both;\n}\n.form-horizontal .form-control-static {\n  padding-top: 7px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    text-align: left;\n  }\n}\n.input-group {\n  position: relative;\n  display: table;\n  width: 100%;\n  border-collapse: separate;\n}\n.input-group.col {\n  float: none;\n  padding-right: 0;\n  padding-left: 0;\n}\n.input-group .form-control {\n  width: 100%;\n  margin-bottom: 0;\n}\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  font-size: 18px;\n  line-height: 1.33;\n  height: 45px;\n  padding: 10px 16px;\n  border-radius: 0;\n}\nselect.input-group-lg > .form-control,\nselect.input-group-lg > .input-group-addon,\nselect.input-group-lg > .input-group-btn > .btn {\n  line-height: 45px;\n  height: 45px;\n}\ntextarea.input-group-lg > .form-control,\ntextarea.input-group-lg > .input-group-addon,\ntextarea.input-group-lg > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  font-size: 12px;\n  line-height: 1.5;\n  height: 24px;\n  padding: 2px 6px;\n  border-radius: 0px;\n}\nselect.input-group-sm > .form-control,\nselect.input-group-sm > .input-group-addon,\nselect.input-group-sm > .input-group-btn > .btn {\n  line-height: 24px;\n  height: 24px;\n}\ntextarea.input-group-sm > .form-control,\ntextarea.input-group-sm > .input-group-addon,\ntextarea.input-group-sm > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n}\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.input-group-addon div[id^=uniform-] {\n  margin: 0 -3px;\n}\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n.input-group-addon {\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  padding: 2px 6px;\n  text-align: center;\n  color: #2b2f33;\n  background-color: transparent;\n  border: 0px solid #dfe8f1;\n  border-radius: 0px;\n}\n.input-group-addon .glyph-icon {\n  display: block;\n  min-width: 20px;\n  margin: 0 -4px;\n  text-align: center;\n}\n.input-group-addon.addon-inside {\n  line-height: 24px;\n  position: absolute;\n  top: 5px;\n  left: 6px;\n  display: block;\n  width: 32px;\n  height: 24px;\n  padding: 0;\n  border-width: 1px;\n  border-style: solid;\n}\n.input-group-lg .input-group-addon.addon-inside {\n  top: 10px;\n  left: 10px;\n}\n.input-group-addon.addon-inside .glyph-icon {\n  margin: 0;\n}\n.input-group-addon.addon-inside + input {\n  padding-left: 48px;\n}\n.input-group-addon.input-sm {\n  font-size: 12px;\n  padding: 5px 10px;\n  border-radius: 0;\n}\n.input-group-addon.input-lg {\n  font-size: 18px;\n  padding: 10px 16px;\n  border-radius: 0;\n}\n.input-group-addon input[type=radio],\n.input-group-addon input[type=checkbox] {\n  margin-top: 0;\n}\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group-addon:first-child {\n  border-right: 0;\n}\n.input-group-addon.addon-inside:first-child {\n  border-right-width: 1px;\n  border-right-style: solid;\n  border-color: transparent;\n}\n.input-group-btn + .form-control,\n.input-group-addon + .form-control,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group-addon:last-child {\n  border-left: 0;\n}\n.input-group-btn {\n  position: relative;\n  white-space: nowrap;\n}\n.input-group-btn:first-child > .btn {\n  margin-right: -1px;\n}\n.input-group-btn:last-child > .btn {\n  margin-left: -1px;\n}\n.input-group-btn > .btn {\n  position: relative;\n}\n.input-group-btn > .btn + .btn {\n  margin-left: -4px;\n}\n.input-group-btn > .btn:hover,\n.input-group-btn > .btn:active {\n  z-index: 2;\n}\n[data-toggle=buttons] > .btn > input[type=radio],\n[data-toggle=buttons] > .btn > input[type=checkbox] {\n  display: none;\n}\n/* Textarea */\ntextarea.textarea-no-resize,\ntextarea.textarea-autoresize {\n  resize: none;\n}\n.textarea-autosize {\n  transition: height 0.3s;\n  -webkit-transition: height 0.3s;\n  -moz-transition: height 0.3s;\n}\ntextarea.form-control {\n  line-height: 1.6em;\n  padding: 8px 12px;\n}\ntextarea.textarea-xs {\n  height: 50px;\n}\ntextarea.textarea-sm {\n  height: 125px;\n}\ntextarea.textarea-md {\n  height: 200px;\n}\ntextarea.textarea-lg {\n  height: 275px;\n}\n/* Spinner */\n.ui-spinner {\n  position: relative;\n  display: block;\n}\n.ui-spinner .ui-spinner-button {\n  font-size: 9px;\n  line-height: 17px;\n  position: absolute;\n  right: 0;\n  width: 17px;\n  height: 17px;\n  cursor: pointer;\n  text-align: center;\n  border-width: 1px;\n  border-style: solid;\n}\n.ui-spinner .ui-spinner-up {\n  top: 0;\n}\n.ui-spinner .ui-spinner-down {\n  bottom: 0;\n}\n.parsley-errors-list li {\n  font-size: 12px;\n  padding-top: 5px;\n}\n/* Row border */\n.bordered-row > .form-group {\n  padding: 20px 0;\n  margin-bottom: 0;\n  border-top-width: 1px;\n  border-top-style: dashed;\n}\n.bordered-row > .form-group:last-child {\n  padding-bottom: 0;\n}\n.form-group .ui-slider {\n  margin-top: 14px;\n}\n.form-group .ui-slider + .input-group {\n  margin-top: 20px;\n}\n* {\n  box-sizing: border-box;\n}\nhgroup {\n  text-align: center;\n  margin-top: 2em;\n}\nh1.th_titileLogin,\nh3.th_titileLogin {\n  font-weight: 100;\n  font-size: 16px;\n  padding-top: 38px;\n  line-height: 1.4;\n}\nh1.th_titileLogin {\n  color: white;\n}\nh3 {\n  color: #4a89dc;\n}\nform.th__formInput {\n  width: 380px;\n  margin: 1em auto;\n  padding: 3em 1em 2em 1em;\n  background: #fff;\n  border: 1px solid #ebebeb;\n  border-radius: 0;\n}\n@media (min-width: 480px) {\n  form.th__formInput {\n    margin: 3em auto;\n    padding: 3em 2em 2em 2em;\n  }\n  hgroup {\n    margin-top: 4em !important;\n  }\n  h1.th_titileLogin,\nh3.th_titileLogin {\n    font-size: 24px;\n  }\n}\n.th__formInput.confirmForm {\n  margin-top: 140px;\n}\n.group {\n  position: relative;\n  margin-bottom: 45px;\n}\ninput.th__inputLogin {\n  font-size: 15px;\n  padding: 10px 10px 10px 5px;\n  -webkit-appearance: none;\n  display: block;\n  background: #fff;\n  color: #2b3541;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid #757575;\n}\ninput.th__inputLogin:focus {\n  outline: none;\n}\n/* Label */\nlabel.th__labelLogin {\n  color: #9da0aa;\n  font-size: 15px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: -20px;\n  transition: all 0.2s ease;\n}\n/* active */\ninput.th__inputLogin:focus ~ label.th__labelLogin,\ninput.th__inputLogin.used ~ label.th__labelLogin {\n  color: #079998;\n  font-size: 15px;\n}\n/* Underline */\n.bar {\n  position: relative;\n  display: block;\n  width: 100%;\n}\n.bar:before,\n.bar:after {\n  content: \"\";\n  height: 3px;\n  width: 0;\n  bottom: 0px;\n  position: absolute;\n  background: #079998;\n  transition: all 0.2s ease;\n}\n.bar:before {\n  left: 50%;\n}\n.bar:after {\n  right: 50%;\n}\n/* active */\ninput.th__inputLogin:focus ~ .bar:before,\ninput.th__inputLogin:focus ~ .bar:after {\n  width: 50%;\n}\n/* Highlight */\n.highlight.th__highlightLogin {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5;\n}\n/* active */\ninput.th__inputLogin:focus ~ .highlight.th__highlightLogin {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease;\n}\n/* Animations */\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: #079998;\n  }\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n@keyframes inputHighlighter {\n  from {\n    background: #079998;\n  }\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n/* Button */\n.button {\n  position: relative;\n  display: inline-block;\n  padding: 12px 24px;\n  margin: 0.3em 0 1em 0;\n  width: 100%;\n  vertical-align: middle;\n  color: #fff;\n  font-family: \"Open Sans\";\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 20px;\n  -webkit-font-smoothing: antialiased;\n  text-align: center;\n  letter-spacing: 1px;\n  background: #079998;\n  border: 0;\n  border-bottom: 2px solid #068584;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.button:focus {\n  outline: 0;\n}\n/* Button modifiers */\n.buttonBlue {\n  background: #079998;\n  text-shadow: 1px 1px 0 rgba(39, 110, 204, 0.5);\n}\n.buttonBlue:hover {\n  background: #34404e;\n  border-bottom: 2px solid #212932;\n}\n/* Ripples container */\n.ripples {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: transparent;\n}\n/* Ripples circle */\n.ripplesCircle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  width: 0;\n  height: 0;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n}\n.ripples.is-active .ripplesCircle {\n  -webkit-animation: ripples 0.4s ease-in;\n  animation: ripples 0.4s ease-in;\n}\n/* Ripples animation */\n@-webkit-keyframes ripples {\n  0% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  100% {\n    width: 200%;\n    padding-bottom: 200%;\n    opacity: 0;\n  }\n}\n@keyframes ripples {\n  0% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  100% {\n    width: 200%;\n    padding-bottom: 200%;\n    opacity: 0;\n  }\n}\nfooter {\n  text-align: center;\n}\nfooter p {\n  color: #9da0aa;\n  font-size: 13px;\n  letter-spacing: 0.4px;\n}\nfooter a {\n  color: #079998;\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\nfooter a:hover {\n  color: #fff;\n  text-decoration: underline;\n}\nfooter img {\n  width: 80px;\n  transition: all 0.2s ease;\n}\nfooter img:hover {\n  opacity: 0.83;\n}\nfooter img:focus,\nfooter a:focus {\n  outline: none;\n}\np.th__confirmLogin {\n  font-size: 15px;\n  text-align: center;\n}\np.parsley-success {\n  color: #2b3541;\n}\np.parsley-error {\n  color: #f40909;\n  font-size: 13px;\n}\n.chosen-container-multi .chosen-choices li.search-choice {\n  max-width: 50%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-right: 10px;\n}\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: Segoe, \"Segoe UI\", \"DejaVu Sans\", \"Trebuchet MS\", Verdana, \"sans-serif\";\n}\n/**/\nselect.form-control,\nselect {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: #fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 0.75rem center/8px 10px !important;\n}\nselect {\n  border: 1px solid #dfe8f1;\n}\n.form-group-sm .form-control {\n  font-size: 11px;\n  height: 24px;\n  line-height: 1.4;\n  padding: 2px 10px;\n  border-radius: 0;\n}\n.input-sm + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n}\n.form-horizontal .form-group-sm .control-label {\n  padding-top: 4px;\n  font-size: 11px;\n}\n.form-group-sm select.form-control {\n  height: 24px;\n  line-height: 1.5;\n  padding: 0 10px;\n}\n.lan-box {\n  max-width: 200px;\n  margin: 0 auto;\n}\n.lan-box a.dropdown-toggle {\n  color: #fafafa;\n}\n/**/\n.style-cb input[type=checkbox] {\n  display: none;\n}\nlabel.style-cb input[type=checkbox] {\n  color: #f2f2f2;\n}\nlabel.style-cb span {\n  border: 1px solid #ddd;\n  width: 18px;\n  height: 18px;\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  vertical-align: middle;\n  top: -1px;\n}\nlabel.style-cb span:before {\n  position: absolute;\n  padding-right: 0;\n  top: 1px;\n  left: 50%;\n  margin-left: -7px;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-style: normal;\n  font-weight: 400;\n  content: \"\";\n}\nlabel.style-cb input:checked + span:before {\n  content: \"\\f00c\";\n  color: #079998;\n}\nlabel.style-cb input[disabled] + span:before {\n  opacity: 0.25;\n}\n/**/\n.style-rd input[type=radio] {\n  display: none;\n  cursor: pointer;\n}\nlabel.style-rd input[type=radio] {\n  color: #f2f2f2;\n}\nlabel.style-rd span {\n  border: 1px solid #ddd;\n  width: 14px;\n  height: 14px;\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  vertical-align: middle;\n  border-radius: 40px;\n  top: -1px;\n}\nlabel.style-rd input:checked + span {\n  border-color: #079998;\n}\nlabel.style-rd input:hover + span {\n  border-color: #079998;\n  box-shadow: 0 0 0px 2px rgba(45, 154, 227, 0.1);\n}\nlabel.style-rd input:checked + span:before {\n  position: absolute;\n  padding-right: 0;\n  top: 50%;\n  left: 50%;\n  margin-left: -4px;\n  margin-top: -4px;\n  font-style: normal;\n  font-weight: 400;\n  content: \"\";\n  color: #555;\n  width: 8px;\n  height: 8px;\n  border-radius: 100%;\n  background-color: #19b13b;\n}\nlabel.style-rd input[disabled] + span:before,\nlabel.style-rd input[disabled] + span {\n  opacity: 0.25;\n}\n.style-cb .txt-in {\n  position: relative;\n  top: 2px;\n  font-size: 12px;\n}\n/**/\n.style-toggle input[type=checkbox] {\n  display: none;\n  cursor: pointer;\n}\nlabel.style-toggle input[type=checkbox] {\n  color: #f2f2f2;\n}\nlabel.style-toggle span {\n  border: 1px solid #ddd;\n  width: 36px;\n  height: 17px;\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  vertical-align: middle;\n  border-radius: 40px;\n  margin-right: 5px;\n}\nlabel.style-toggle span:before {\n  position: absolute;\n  width: 11px;\n  height: 11px;\n  background-color: #ddd;\n  content: \"\";\n  border-radius: 100%;\n  top: 2px;\n  left: 2px;\n}\nlabel.style-toggle input:checked + span {\n  border-color: #ddd;\n}\nlabel.style-toggle input:hover + span {\n  border-color: #19b13b;\n  box-shadow: 0 0 0px 2px rgba(45, 154, 227, 0.1);\n}\nlabel.style-toggle input:checked + span:before {\n  left: auto;\n  right: 3px;\n  background-color: #079998;\n}\nlabel.style-toggle input[disabled] + span:before,\nlabel.style-toggle input[disabled] + span {\n  opacity: 0.25;\n}\n/**/\n.style-cb-text {\n  font-style: normal;\n}\n.style-cb-text-sm {\n  font-size: 12px;\n}\n/**/\n.login-mss-box,\n.admin-mss-box {\n  position: fixed;\n  right: 10px;\n  bottom: 10px;\n  z-index: 10;\n}\n.admin-mss-box {\n  width: 350px;\n}\n.admin-mss-box .alert-icon > i {\n  font-size: 21px;\n}\n.alert-danger {\n  background: #FDE7E8;\n  border-color: #DE373B;\n  color: #892225;\n}\n.alert-icon {\n  position: relative;\n}\n.alert-icon > i {\n  position: absolute;\n  left: 0;\n  font-size: 33px;\n}\n.alert-icon {\n  padding-left: 42px;\n}\n.di__dialog-icon {\n  position: relative;\n  margin: 20px 10px;\n}\n.di__dialog-icon > i {\n  position: absolute;\n  left: 0;\n  font-size: 33px;\n}\n.di__dialog-icon {\n  padding-left: 48px;\n}\n.di__dialog-warning .di__dialog-icon > i,\n.alert-warning .alert-icon > i {\n  color: #F88E07;\n}\n.di__dialog-warning .di__dialog-sub-title {\n  color: #9a5600;\n}\n.di__dialog-warning .di__dialog-explain-title {\n  color: #3a2103;\n}\n.di__dialog-success .di__dialog-icon > i {\n  color: #03b506;\n}\n.di__dialog-success .di__dialog-sub-title {\n  color: #008802;\n}\n.di__dialog-success .di__dialog-explain-title {\n  color: #042b05;\n}\n.di__dialog-error .di__dialog-icon > i,\n.alert-danger .alert-icon > i {\n  color: #de373b;\n}\n.di__dialog-error .di__dialog-sub-title {\n  color: #de373b;\n}\n.di__dialog-error .di__dialog-explain-title {\n  color: #892225;\n}\n.di__dialog-info .di__dialog-icon >,\n.alert-info .alert-icon > i {\n  color: #4faef9;\n}\n.di__dialog-info .di__dialog-sub-title {\n  color: #36a6ff;\n}\n.di__dialog-info .di__dialog-explain-title {\n  color: #23679C;\n}\n.bt-flabels__wrapper .parsley-errors-list {\n  position: absolute;\n  right: 0;\n  top: -23px;\n}\ninput.parsley-error:before,\nselect.parsley-error:before {\n  content: \"\\f1f8\";\n  position: absolute;\n  right: 0;\n  font-family: \"FontAwesome\";\n  display: inline-block;\n}\n/* N update 06052019*/\n.input-group-btn.reveal-abs {\n  position: absolute;\n  right: 0;\n  top: 4px;\n  width: auto;\n}\n.input-group-btn.reveal-abs .btn-default.reveal-login {\n  background-color: transparent;\n  border-color: transparent;\n  outline: none;\n  box-shadow: none;\n}\n.input-group-btn.reveal-abs .btn-default.reveal-login:hover {\n  color: #079898;\n}\n/**/\n.ui-grid-pager-row-count-picker select {\n  background: #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") 0 0 no-repeat;\n  background-size: 8px 10px;\n  -moz-appearance: none;\n  /* Firefox */\n  -webkit-appearance: none;\n  /* Safari and Chrome */\n  appearance: none;\n}\n/**/\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 0;\n}\n.form-group-sm .help-block {\n  font-size: 11px;\n}\n/**/\n.profile-header-container {\n  text-align: center;\n}\n/**/\n.di_body-upload-result {\n  width: 150px;\n  background-color: #fafafa;\n  padding: 7px;\n}\n.di_body-upload-result-inner {\n  height: 150px;\n  overflow: auto;\n  border: 1px solid #eee;\n  position: relative;\n}\n.di_body-upload-result-inner .icon-img-upload {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -35px;\n  margin-top: -38px;\n  font-size: 63px;\n}\n/***/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9EOlxcU291cmNlQ29kZVxcRGlNZXRyaWNzXFxNYWluXFxTb3VyY2VcXFZpZXRuYW1cXFJlcHJvY2Vzcy1XZWJBcHBzXFxSZXByb2Nlc3MtRnJhbWV3b3JrXFxSZXByb2Nlc3MuV2ViXFxBbmd1bGFyL3NyY1xcYXBwXFx1c2VyXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUUsVUFBQTtBQUVBO0VBQ0ksaUJBQUE7QUNBTjtBREdFO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDQU47QURHRTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0FOO0FER0U7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0FDQU47QURHRTs7RUFFSSxtQkFBQTtBQ0FOO0FER0U7RUFDSSxjQUFBO0FDQU47QURHRTs7RUFFSSxZQUFBO0FDQU47QURHRTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0FOO0FER0U7OztFQUdJLHlCQUFBO0VBQ0EsMENBQUE7RUFDQSxvQkFBQTtBQ0FOO0FER0U7O0VBRUksWUFBQTtBQ0FOO0FER0U7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNBTjtBREdFOzs7Ozs7O0VBV0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBR0EscUNBQUE7QUNKTjtBRE9FOzs7Ozs7O0VBT0ksV0FBQTtFQUNBLHFCQUFBO0FDSk47QURPRTtFQUNJLFdBQUE7QUNKTjtBRE9FO0VBQ0ksV0FBQTtBQ0pOO0FET0U7RUFDSSxXQUFBO0FDSk47QURPRTtFQUNJLFdBQUE7QUNKTjtBRE9FO0VBQ0ksWUFBQTtBQ0pOO0FET0U7RUFDSSxtQkFBQTtBQ0pOO0FET0U7RUFDSSxrQkFBQTtBQ0pOO0FET0U7RUFDSSxlQUFBO0FDSk47QURPRTs7RUFFSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNKTjtBRE9FOztFQUVJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0pOO0FET0U7Ozs7RUFJSSxXQUFBO0FDSk47QURPRTs7RUFFSSxnQkFBQTtBQ0pOO0FET0U7O0VBRUksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDSk47QURPRTs7RUFFSSxtQkFBQTtFQUNBLGlCQUFBO0FDSk47QURPRTs7RUFFSSxhQUFBO0VBQ0EsaUJBQUE7QUNKTjtBRE9FOzs7Ozs7Ozs7Ozs7RUFZSSxtQkFBQTtBQ0pOO0FET0U7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0pOO0FET0U7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUNKTjtBRE9FO0VBQ0ksWUFBQTtBQ0pOO0FET0U7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0pOO0FET0U7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUNKTjtBRE9FO0VBQ0ksWUFBQTtBQ0pOO0FET0U7RUFDSSxnQkFBQTtBQ0pOO0FET0U7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0pOO0FET0U7RUFDSTtJQUNJLHFCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQkFBQTtFQ0pSO0VETUk7SUFDSSxxQkFBQTtFQ0pSO0VETUk7O0lBRUkscUJBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0VDSlI7RURNSTs7SUFFSSxXQUFBO0lBQ0EsY0FBQTtFQ0pSO0FBQ0Y7QURPRTs7Ozs7RUFLSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0xOO0FET0U7OztFQUFBO0FBS0E7RUFDSSw4QkFBQTtFQUNBLDZCQUFBO0FDTE47QURRRTs7RUFFSSxjQUFBO0VBQ0EsWUFBQTtBQ0xOO0FEUUU7RUFDSSxXQUFBO0FDTE47QURRRTs7RUFFSSxjQUFBO0VBQ0EsWUFBQTtBQ0xOO0FEUUU7RUFDSSxXQUFBO0FDTE47QURRRTtFQUNJLGdCQUFBO0FDTE47QURRRTtFQUNJO0lBQ0ksZ0JBQUE7RUNMUjtBQUNGO0FEUUU7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNOTjtBRFNFO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ05OO0FEU0U7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNOTjtBRFNFOzs7RUFHSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ05OO0FEU0U7OztFQUdJLGlCQUFBO0VBQ0EsWUFBQTtBQ05OO0FEU0U7OztFQUdJLFlBQUE7QUNOTjtBRFNFOzs7RUFHSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ05OO0FEU0U7OztFQUdJLGlCQUFBO0VBQ0EsWUFBQTtBQ05OO0FEU0U7OztFQUdJLFlBQUE7QUNOTjtBRFNFOzs7RUFHSSxtQkFBQTtBQ05OO0FEU0U7OztFQUdJLGdCQUFBO0FDTk47QURTRTtFQUNJLGNBQUE7QUNOTjtBRFNFOztFQUVJLFNBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDTk47QURTRTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ05OO0FEU0U7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ05OO0FEU0U7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ05OO0FEU0U7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ05OO0FEU0U7RUFDSSxTQUFBO0FDTk47QURTRTtFQUNJLGtCQUFBO0FDTk47QURTRTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDTk47QURTRTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDTk47QURTRTs7RUFFSSxhQUFBO0FDTk47QURTRTs7Ozs7RUFLSSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQ05OO0FEU0U7RUFDSSxlQUFBO0FDTk47QURTRTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ05OO0FEU0U7Ozs7OztFQU1JLHlCQUFBO0VBQ0EsNEJBQUE7QUNOTjtBRFNFO0VBQ0ksY0FBQTtBQ05OO0FEU0U7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDTk47QURTRTtFQUNJLGtCQUFBO0FDTk47QURTRTtFQUNJLGlCQUFBO0FDTk47QURTRTtFQUNJLGtCQUFBO0FDTk47QURTRTtFQUNJLGlCQUFBO0FDTk47QURTRTs7RUFFSSxVQUFBO0FDTk47QURTRTs7RUFFSSxhQUFBO0FDTk47QURRRSxhQUFBO0FBRUE7O0VBRUksWUFBQTtBQ05OO0FEU0U7RUFDSSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7QUNOTjtBRFNFO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ05OO0FEU0U7RUFDSSxZQUFBO0FDTk47QURTRTtFQUNJLGFBQUE7QUNOTjtBRFNFO0VBQ0ksYUFBQTtBQ05OO0FEU0U7RUFDSSxhQUFBO0FDTk47QURRRSxZQUFBO0FBRUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNOTjtBRFNFO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDTk47QURTRTtFQUNJLE1BQUE7QUNOTjtBRFNFO0VBQ0ksU0FBQTtBQ05OO0FEU0U7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNOTjtBRFFFLGVBQUE7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUNOTjtBRFNFO0VBQ0ksaUJBQUE7QUNOTjtBRFNFO0VBQ0ksZ0JBQUE7QUNOTjtBRFNFO0VBQ0ksZ0JBQUE7QUNOTjtBRFNFO0VBQ0ksc0JBQUE7QUNOTjtBRFNFO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDTk47QURTRTs7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDTk47QURTRTtFQUNJLFlBQUE7QUNOTjtBRFNFO0VBQ0ksY0FBQTtBQ05OO0FEU0U7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ05OO0FEU0U7RUFDSTtJQUNJLGdCQUFBO0lBQ0Esd0JBQUE7RUNOUjtFRFFJO0lBQ0ksMEJBQUE7RUNOUjtFRFFJOztJQUVJLGVBQUE7RUNOUjtBQUNGO0FEU0U7RUFDSSxpQkFBQTtBQ1BOO0FEVUU7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDUE47QURVRTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQ1BOO0FEVUU7RUFDSSxhQUFBO0FDUE47QURTRSxVQUFBO0FBRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBRUEseUJBQUE7QUNQTjtBRFNFLFdBQUE7QUFFQTs7RUFFSSxjQUFBO0VBQ0EsZUFBQTtBQ1BOO0FEU0UsY0FBQTtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ1BOO0FEVUU7O0VBRUksV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSx5QkFBQTtBQ1BOO0FEVUU7RUFDSSxTQUFBO0FDUE47QURVRTtFQUNJLFVBQUE7QUNQTjtBRFNFLFdBQUE7QUFFQTs7RUFFSSxVQUFBO0FDUE47QURTRSxjQUFBO0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNQTjtBRFNFLFdBQUE7QUFFQTtFQUNJLDZDQUFBO0VBQ0EscUNBQUE7QUNQTjtBRFNFLGVBQUE7QUFFQTtFQUNJO0lBQ0ksbUJBQUE7RUNQUjtFRFNJO0lBQ0ksUUFBQTtJQUNBLHVCQUFBO0VDUFI7QUFDRjtBRFVFO0VBQ0k7SUFDSSxtQkFBQTtFQ1JSO0VEVUk7SUFDSSxRQUFBO0lBQ0EsdUJBQUE7RUNSUjtBQUNGO0FEVUUsV0FBQTtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUVBLDBCQUFBO0FDVE47QURZRTtFQUNJLFVBQUE7QUNUTjtBRFdFLHFCQUFBO0FBRUE7RUFDSSxtQkFBQTtFQUNBLDhDQUFBO0FDVE47QURZRTtFQUNJLG1CQUFBO0VBQ0EsZ0NBQUE7QUNUTjtBRFdFLHNCQUFBO0FBRUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDVE47QURXRSxtQkFBQTtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtBQ1ROO0FEWUU7RUFDSSx1Q0FBQTtFQUNBLCtCQUFBO0FDVE47QURXRSxzQkFBQTtBQUVBO0VBQ0k7SUFDSSxVQUFBO0VDVFI7RURXSTtJQUNJLFVBQUE7RUNUUjtFRFdJO0lBQ0ksV0FBQTtJQUNBLG9CQUFBO0lBQ0EsVUFBQTtFQ1RSO0FBQ0Y7QURZRTtFQUNJO0lBQ0ksVUFBQTtFQ1ZSO0VEWUk7SUFDSSxVQUFBO0VDVlI7RURZSTtJQUNJLFdBQUE7SUFDQSxvQkFBQTtJQUNBLFVBQUE7RUNWUjtBQUNGO0FEYUU7RUFDSSxrQkFBQTtBQ1hOO0FEY0U7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDWE47QURjRTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUVBLHlCQUFBO0FDWE47QURjRTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtBQ1hOO0FEY0U7RUFDSSxXQUFBO0VBRUEseUJBQUE7QUNYTjtBRGNFO0VBQ0ksYUFBQTtBQ1hOO0FEY0U7O0VBRUksYUFBQTtBQ1hOO0FEY0U7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNYTjtBRGNFO0VBQ0ksY0FBQTtBQ1hOO0FEY0U7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ1hOO0FEY0U7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDWE47QURjRTs7OztFQUlJLG9GQUFBO0FDWE47QURhRSxHQUFBO0FBRUE7O0VBRUksd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa1BBQUE7QUNYTjtBRGNFO0VBQ0kseUJBQUE7QUNYTjtBRGNFO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNYTjtBRGNFOzs7RUFHSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDWE47QURjRTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ1hOO0FEY0U7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDWE47QURjRTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ1hOO0FEY0U7RUFDSSxjQUFBO0FDWE47QURhRSxHQUFBO0FBRUE7RUFDSSxhQUFBO0FDWE47QURjRTtFQUNJLGNBQUE7QUNYTjtBRGNFO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FDWE47QURjRTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ1hOO0FEY0U7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNYTjtBRGNFO0VBQ0ksYUFBQTtBQ1hOO0FEYUUsR0FBQTtBQUVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUNYTjtBRGNFO0VBQ0ksY0FBQTtBQ1hOO0FEY0U7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQ1hOO0FEY0U7RUFDSSxxQkFBQTtBQ1hOO0FEY0U7RUFDSSxxQkFBQTtFQUNBLCtDQUFBO0FDWE47QURjRTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNYTjtBRGNFOztFQUVJLGFBQUE7QUNYTjtBRGNFO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQ1hOO0FEYUUsR0FBQTtBQUVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUNYTjtBRGNFO0VBQ0ksY0FBQTtBQ1hOO0FEY0U7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNYTjtBRGNFO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNYTjtBRGNFO0VBQ0ksa0JBQUE7QUNYTjtBRGNFO0VBQ0kscUJBQUE7RUFDQSwrQ0FBQTtBQ1hOO0FEY0U7RUFDSSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FDWE47QURjRTs7RUFFSSxhQUFBO0FDWE47QURhRSxHQUFBO0FBRUE7RUFDSSxrQkFBQTtBQ1hOO0FEY0U7RUFDSSxlQUFBO0FDWE47QURhRSxHQUFBO0FBRUE7O0VBRUksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1hOO0FEY0U7RUFDSSxZQUFBO0FDWE47QURjRTtFQUNJLGVBQUE7QUNYTjtBRGNFO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNYTjtBRGNFO0VBQ0ksa0JBQUE7QUNYTjtBRGNFO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtBQ1hOO0FEY0U7RUFDSSxrQkFBQTtBQ1hOO0FEY0U7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDWE47QURjRTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7QUNYTjtBRGNFO0VBQ0ksa0JBQUE7QUNYTjtBRGNFOztFQUVJLGNBQUE7QUNYTjtBRGNFO0VBQ0ksY0FBQTtBQ1hOO0FEY0U7RUFDSSxjQUFBO0FDWE47QURjRTtFQUNJLGNBQUE7QUNYTjtBRGNFO0VBQ0ksY0FBQTtBQ1hOO0FEY0U7RUFDSSxjQUFBO0FDWE47QURjRTs7RUFFSSxjQUFBO0FDWE47QURjRTtFQUNJLGNBQUE7QUNYTjtBRGNFO0VBQ0ksY0FBQTtBQ1hOO0FEY0U7O0VBRUksY0FBQTtBQ1hOO0FEY0U7RUFDSSxjQUFBO0FDWE47QURjRTtFQUNJLGNBQUE7QUNYTjtBRGNFO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ1hOO0FEY0U7O0VBRUksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FDWE47QURhRSxxQkFBQTtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNYTjtBRGNFO0VBQ0ksNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ1hOO0FEY0U7RUFDSSxjQUFBO0FDWE47QURhRSxHQUFBO0FBRUE7RUFDSSxxTUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDWE47QURhRSxHQUFBO0FBRUE7RUFDSSxRQUFBO0FDWE47QURjRTtFQUNJLGVBQUE7QUNYTjtBRGFFLEdBQUE7QUFFQTtFQUNJLGtCQUFBO0FDWE47QURhRSxHQUFBO0FBRUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDWE47QURjRTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ1hOO0FEY0U7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNYTjtBRGFFLElBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAvKiBGb3JtcyAqL1xyXG4gIFxyXG4gIGJvZHkgI2xvZ2luIHtcclxuICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIFxyXG4gIGZpZWxkc2V0IHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGxlZ2VuZCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZmU4ZjE7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT0ncmFkaW8nXSxcclxuICBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT0nZmlsZSddIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIHNlbGVjdFttdWx0aXBsZV0sXHJcbiAgc2VsZWN0W3NpemVdIHtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICBzZWxlY3Qgb3B0Z3JvdXAge1xyXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXN0eWxlOiBpbmhlcml0O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPSdmaWxlJ106Zm9jdXMsXHJcbiAgaW5wdXRbdHlwZT0ncmFkaW8nXTpmb2N1cyxcclxuICBpbnB1dFt0eXBlPSdjaGVja2JveCddOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogdGhpbiBkb3R0ZWQgIzMzMztcclxuICAgICAgb3V0bGluZTogNXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xyXG4gICAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbiAgaW5wdXRbdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIG91dHB1dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgY29sb3I6ICM1NTU7XHJcbiAgfVxyXG4gIFxyXG4gIGRpdi5kYXRhVGFibGVzX2ZpbHRlciBpbnB1dCxcclxuICAvKi5jaG9zZW4tY29udGFpbmVyLXNpbmdsZSAuY2hvc2VuLXNlYXJjaCBpbnB1dCwqL1xyXG4gIFxyXG4gIC5pbnB1dCxcclxuICAuZm9ybS1jb250cm9sLFxyXG4gIC5kYXRhVGFibGVzX2xlbmd0aCBzZWxlY3QsXHJcbiAgLyouY2hvc2VuLWNvbnRhaW5lci1tdWx0aSwqL1xyXG4gIFxyXG4gIC5ib290c3RyYXAtdGltZXBpY2tlci13aWRnZXQgdGFibGUgdGQgaW5wdXQsXHJcbiAgLnVpLXRvb2xiYXIgc2VsZWN0LFxyXG4gIC51aS10b29sYmFyIGlucHV0IHtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gICAgICBjb2xvcjogIzJiMmYzMztcclxuICAgICAgYm9yZGVyOiAjZGZlOGYxIHNvbGlkIDFweDtcclxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDNweCAjZjZmNmY2O1xyXG4gICAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggM3B4ICNmNmY2ZjY7XHJcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggM3B4ICNmNmY2ZjY7XHJcbiAgfVxyXG4gIFxyXG4gIGRpdi5kYXRhVGFibGVzX2ZpbHRlciBpbnB1dDpmb2N1cyxcclxuICAuaW5wdXQ6Zm9jdXMsXHJcbiAgLmZvcm0tY29udHJvbDpmb2N1cyxcclxuICAuc2VsZWN0b3IuZm9jdXMsXHJcbiAgLmJvb3RzdHJhcC10aW1lcGlja2VyLXdpZGdldCB0YWJsZSB0ZCBpbnB1dDpmb2N1cyxcclxuICAudWktdG9vbGJhciBzZWxlY3Q6Zm9jdXMsXHJcbiAgLnVpLXRvb2xiYXIgaW5wdXQ6Zm9jdXMge1xyXG4gICAgICBjb2xvcjogIzMzMztcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjM2RhNmZmO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250cm9sOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogIzk5OTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY29udHJvbDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiAjOTk5O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250cm9sOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiAjOTk5O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250cm9sOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6ICM5OTk7XHJcbiAgfVxyXG4gIFxyXG4gIHRleHRhcmVhLmZvcm0tY29udHJvbCB7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXAgLnN3aXRjaC10b2dnbGUge1xyXG4gICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5yYWRpbyxcclxuICAuY2hlY2tib3gge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWluLWhlaWdodDogMjBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbiAgXHJcbiAgLnJhZGlvIGxhYmVsLFxyXG4gIC5jaGVja2JveCBsYWJlbCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAucmFkaW8gaW5wdXRbdHlwZT0ncmFkaW8nXSxcclxuICAucmFkaW8taW5saW5lIGlucHV0W3R5cGU9J3JhZGlvJ10sXHJcbiAgLmNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J10sXHJcbiAgLmNoZWNrYm94LWlubGluZSBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5yYWRpbysucmFkaW8sXHJcbiAgLmNoZWNrYm94Ky5jaGVja2JveCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5yYWRpby1pbmxpbmUsXHJcbiAgLmNoZWNrYm94LWlubGluZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGhlaWdodDogMTlweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuICBcclxuICAucmFkaW8taW5saW5lIGxhYmVsLFxyXG4gIC5jaGVja2JveC1pbmxpbmUgbGFiZWwge1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICB9XHJcbiAgXHJcbiAgLnJhZGlvLWlubGluZSsucmFkaW8taW5saW5lLFxyXG4gIC5jaGVja2JveC1pbmxpbmUrLmNoZWNrYm94LWlubGluZSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPSdyYWRpbyddW2Rpc2FibGVkXSxcclxuICBpbnB1dFt0eXBlPSdjaGVja2JveCddW2Rpc2FibGVkXSxcclxuICAucmFkaW9bZGlzYWJsZWRdLFxyXG4gIC5yYWRpby1pbmxpbmVbZGlzYWJsZWRdLFxyXG4gIC5jaGVja2JveFtkaXNhYmxlZF0sXHJcbiAgLmNoZWNrYm94LWlubGluZVtkaXNhYmxlZF0sXHJcbiAgZmllbGRzZXRbZGlzYWJsZWRdIGlucHV0W3R5cGU9J3JhZGlvJ10sXHJcbiAgZmllbGRzZXRbZGlzYWJsZWRdIGlucHV0W3R5cGU9J2NoZWNrYm94J10sXHJcbiAgZmllbGRzZXRbZGlzYWJsZWRdIC5yYWRpbyxcclxuICBmaWVsZHNldFtkaXNhYmxlZF0gLnJhZGlvLWlubGluZSxcclxuICBmaWVsZHNldFtkaXNhYmxlZF0gLmNoZWNrYm94LFxyXG4gIGZpZWxkc2V0W2Rpc2FibGVkXSAuY2hlY2tib3gtaW5saW5lIHtcclxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LXNtIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuICBcclxuICBzZWxlY3QuaW5wdXQtc20ge1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICBcclxuICB0ZXh0YXJlYS5pbnB1dC1zbSB7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LWxnIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4zMztcclxuICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIHNlbGVjdC5pbnB1dC1sZyB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIHRleHRhcmVhLmlucHV0LWxnIHtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250cm9sLXN0YXRpYyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWxwLWJsb2NrIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgY29sb3I6ICM3MzczNzM7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAuZm9ybS1pbmxpbmUgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIH1cclxuICAgICAgLmZvcm0taW5saW5lIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb3JtLWlubGluZSAucmFkaW8sXHJcbiAgICAgIC5mb3JtLWlubGluZSAuY2hlY2tib3gge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLmZvcm0taW5saW5lIC5yYWRpbyBpbnB1dFt0eXBlPSdyYWRpbyddLFxyXG4gICAgICAuZm9ybS1pbmxpbmUgLmNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xyXG4gICAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gIH1cclxuICBcclxuICAuZm9ybS1ob3Jpem9udGFsIC5jb250cm9sLWxhYmVsLFxyXG4gIC5mb3JtLWhvcml6b250YWwgLnJhZGlvLFxyXG4gIC5mb3JtLWhvcml6b250YWwgLmNoZWNrYm94LFxyXG4gIC5mb3JtLWhvcml6b250YWwgLnJhZGlvLWlubGluZSxcclxuICAuZm9ybS1ob3Jpem9udGFsIC5jaGVja2JveC1pbmxpbmUge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gIH1cclxuICAvKi5mb3JtLWhvcml6b250YWwgPiAuZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG59Ki9cclxuICBcclxuICAuZm9ybS1ob3Jpem9udGFsPi5kaV9fQm94YnJkLWZvcm0ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3VwOmJlZm9yZSxcclxuICAuZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3VwOmFmdGVyIHtcclxuICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgIGNvbnRlbnQ6ICcgJztcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1ncm91cDphZnRlciB7XHJcbiAgICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3VwOmJlZm9yZSxcclxuICAuZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3VwOmFmdGVyIHtcclxuICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgIGNvbnRlbnQ6ICcgJztcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1ncm91cDphZnRlciB7XHJcbiAgICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1ob3Jpem9udGFsIC5mb3JtLWNvbnRyb2wtc3RhdGljIHtcclxuICAgICAgcGFkZGluZy10b3A6IDdweDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIC5mb3JtLWhvcml6b250YWwgLmNvbnRyb2wtbGFiZWwge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG4gIH1cclxuICBcclxuICAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LWdyb3VwLmNvbCB7XHJcbiAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dC1ncm91cC1sZz4uZm9ybS1jb250cm9sLFxyXG4gIC5pbnB1dC1ncm91cC1sZz4uaW5wdXQtZ3JvdXAtYWRkb24sXHJcbiAgLmlucHV0LWdyb3VwLWxnPi5pbnB1dC1ncm91cC1idG4+LmJ0biB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMzM7XHJcbiAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuICBcclxuICBzZWxlY3QuaW5wdXQtZ3JvdXAtbGc+LmZvcm0tY29udHJvbCxcclxuICBzZWxlY3QuaW5wdXQtZ3JvdXAtbGc+LmlucHV0LWdyb3VwLWFkZG9uLFxyXG4gIHNlbGVjdC5pbnB1dC1ncm91cC1sZz4uaW5wdXQtZ3JvdXAtYnRuPi5idG4ge1xyXG4gICAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gIH1cclxuICBcclxuICB0ZXh0YXJlYS5pbnB1dC1ncm91cC1sZz4uZm9ybS1jb250cm9sLFxyXG4gIHRleHRhcmVhLmlucHV0LWdyb3VwLWxnPi5pbnB1dC1ncm91cC1hZGRvbixcclxuICB0ZXh0YXJlYS5pbnB1dC1ncm91cC1sZz4uaW5wdXQtZ3JvdXAtYnRuPi5idG4ge1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dC1ncm91cC1zbT4uZm9ybS1jb250cm9sLFxyXG4gIC5pbnB1dC1ncm91cC1zbT4uaW5wdXQtZ3JvdXAtYWRkb24sXHJcbiAgLmlucHV0LWdyb3VwLXNtPi5pbnB1dC1ncm91cC1idG4+LmJ0biB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBwYWRkaW5nOiAycHggNnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHNlbGVjdC5pbnB1dC1ncm91cC1zbT4uZm9ybS1jb250cm9sLFxyXG4gIHNlbGVjdC5pbnB1dC1ncm91cC1zbT4uaW5wdXQtZ3JvdXAtYWRkb24sXHJcbiAgc2VsZWN0LmlucHV0LWdyb3VwLXNtPi5pbnB1dC1ncm91cC1idG4+LmJ0biB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIHRleHRhcmVhLmlucHV0LWdyb3VwLXNtPi5mb3JtLWNvbnRyb2wsXHJcbiAgdGV4dGFyZWEuaW5wdXQtZ3JvdXAtc20+LmlucHV0LWdyb3VwLWFkZG9uLFxyXG4gIHRleHRhcmVhLmlucHV0LWdyb3VwLXNtPi5pbnB1dC1ncm91cC1idG4+LmJ0biB7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LWdyb3VwLWFkZG9uLFxyXG4gIC5pbnB1dC1ncm91cC1idG4sXHJcbiAgLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQtZ3JvdXAtYWRkb246bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSxcclxuICAuaW5wdXQtZ3JvdXAtYnRuOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCksXHJcbiAgLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2w6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dC1ncm91cC1hZGRvbiBkaXZbaWRePSd1bmlmb3JtLSddIHtcclxuICAgICAgbWFyZ2luOiAwIC0zcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dC1ncm91cC1hZGRvbixcclxuICAuaW5wdXQtZ3JvdXAtYnRuIHtcclxuICAgICAgd2lkdGg6IDElO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQtZ3JvdXAtYWRkb24ge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICBwYWRkaW5nOiAycHggNnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjMmIyZjMzO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyOiAwcHggc29saWQgI2RmZThmMTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQtZ3JvdXAtYWRkb24gLmdseXBoLWljb24ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWluLXdpZHRoOiAyMHB4O1xyXG4gICAgICBtYXJnaW46IDAgLTRweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQtZ3JvdXAtYWRkb24uYWRkb24taW5zaWRlIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1cHg7XHJcbiAgICAgIGxlZnQ6IDZweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQtZ3JvdXAtbGcgLmlucHV0LWdyb3VwLWFkZG9uLmFkZG9uLWluc2lkZSB7XHJcbiAgICAgIHRvcDogMTBweDtcclxuICAgICAgbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LWdyb3VwLWFkZG9uLmFkZG9uLWluc2lkZSAuZ2x5cGgtaWNvbiB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LWdyb3VwLWFkZG9uLmFkZG9uLWluc2lkZStpbnB1dCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNDhweDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LWdyb3VwLWFkZG9uLmlucHV0LXNtIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LWdyb3VwLWFkZG9uLmlucHV0LWxnIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dC1ncm91cC1hZGRvbiBpbnB1dFt0eXBlPSdyYWRpbyddLFxyXG4gIC5pbnB1dC1ncm91cC1hZGRvbiBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2w6Zmlyc3QtY2hpbGQsXHJcbiAgLmlucHV0LWdyb3VwLWFkZG9uOmZpcnN0LWNoaWxkLFxyXG4gIC5pbnB1dC1ncm91cC1idG46Zmlyc3QtY2hpbGQ+LmJ0bixcclxuICAuaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkPi5kcm9wZG93bi10b2dnbGUsXHJcbiAgLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkPi5idG46bm90KDpsYXN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSkge1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dC1ncm91cC1hZGRvbjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LWdyb3VwLWFkZG9uLmFkZG9uLWluc2lkZTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xyXG4gICAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xyXG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQtZ3JvdXAtYnRuKy5mb3JtLWNvbnRyb2wsXHJcbiAgLmlucHV0LWdyb3VwLWFkZG9uKy5mb3JtLWNvbnRyb2wsXHJcbiAgLmlucHV0LWdyb3VwLWFkZG9uOmxhc3QtY2hpbGQsXHJcbiAgLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkPi5idG4sXHJcbiAgLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkPi5kcm9wZG93bi10b2dnbGUsXHJcbiAgLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZD4uYnRuOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LWdyb3VwLWFkZG9uOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItbGVmdDogMDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LWdyb3VwLWJ0biB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZD4uYnRuIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAtMXB4O1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQtZ3JvdXAtYnRuOmxhc3QtY2hpbGQ+LmJ0biB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQtZ3JvdXAtYnRuPi5idG4ge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dC1ncm91cC1idG4+LmJ0bisuYnRuIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC00cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dC1ncm91cC1idG4+LmJ0bjpob3ZlcixcclxuICAuaW5wdXQtZ3JvdXAtYnRuPi5idG46YWN0aXZlIHtcclxuICAgICAgei1pbmRleDogMjtcclxuICB9XHJcbiAgXHJcbiAgW2RhdGEtdG9nZ2xlPWJ1dHRvbnNdPi5idG4+aW5wdXRbdHlwZT1yYWRpb10sXHJcbiAgW2RhdGEtdG9nZ2xlPWJ1dHRvbnNdPi5idG4+aW5wdXRbdHlwZT1jaGVja2JveF0ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAvKiBUZXh0YXJlYSAqL1xyXG4gIFxyXG4gIHRleHRhcmVhLnRleHRhcmVhLW5vLXJlc2l6ZSxcclxuICB0ZXh0YXJlYS50ZXh0YXJlYS1hdXRvcmVzaXplIHtcclxuICAgICAgcmVzaXplOiBub25lO1xyXG4gIH1cclxuICBcclxuICAudGV4dGFyZWEtYXV0b3NpemUge1xyXG4gICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcztcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC4zcztcclxuICAgICAgLW1vei10cmFuc2l0aW9uOiBoZWlnaHQgMC4zcztcclxuICB9XHJcbiAgXHJcbiAgdGV4dGFyZWEuZm9ybS1jb250cm9sIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xyXG4gICAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICB9XHJcbiAgXHJcbiAgdGV4dGFyZWEudGV4dGFyZWEteHMge1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHRleHRhcmVhLnRleHRhcmVhLXNtIHtcclxuICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICB9XHJcbiAgXHJcbiAgdGV4dGFyZWEudGV4dGFyZWEtbWQge1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuICBcclxuICB0ZXh0YXJlYS50ZXh0YXJlYS1sZyB7XHJcbiAgICAgIGhlaWdodDogMjc1cHg7XHJcbiAgfVxyXG4gIC8qIFNwaW5uZXIgKi9cclxuICBcclxuICAudWktc3Bpbm5lciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC51aS1zcGlubmVyIC51aS1zcGlubmVyLWJ1dHRvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgd2lkdGg6IDE3cHg7XHJcbiAgICAgIGhlaWdodDogMTdweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIH1cclxuICBcclxuICAudWktc3Bpbm5lciAudWktc3Bpbm5lci11cCB7XHJcbiAgICAgIHRvcDogMDtcclxuICB9XHJcbiAgXHJcbiAgLnVpLXNwaW5uZXIgLnVpLXNwaW5uZXItZG93biB7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICB9XHJcbiAgXHJcbiAgLnBhcnNsZXktZXJyb3JzLWxpc3QgbGkge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgfVxyXG4gIC8qIFJvdyBib3JkZXIgKi9cclxuICBcclxuICAuYm9yZGVyZWQtcm93Pi5mb3JtLWdyb3VwIHtcclxuICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XHJcbiAgICAgIGJvcmRlci10b3Atc3R5bGU6IGRhc2hlZDtcclxuICB9XHJcbiAgXHJcbiAgLmJvcmRlcmVkLXJvdz4uZm9ybS1ncm91cDpsYXN0LWNoaWxkIHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWdyb3VwIC51aS1zbGlkZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1ncm91cCAudWktc2xpZGVyKy5pbnB1dC1ncm91cCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICoge1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICBoZ3JvdXAge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICB9XHJcbiAgXHJcbiAgaDEudGhfdGl0aWxlTG9naW4sXHJcbiAgaDMudGhfdGl0aWxlTG9naW4ge1xyXG4gICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAzOHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS40XHJcbiAgfVxyXG4gIFxyXG4gIGgxLnRoX3RpdGlsZUxvZ2luIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICBoMyB7XHJcbiAgICAgIGNvbG9yOiAjNGE4OWRjO1xyXG4gIH1cclxuICBcclxuICBmb3JtLnRoX19mb3JtSW5wdXQge1xyXG4gICAgICB3aWR0aDogMzgwcHg7XHJcbiAgICAgIG1hcmdpbjogMWVtIGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDNlbSAxZW0gMmVtIDFlbTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhKG1pbi13aWR0aDo0ODBweCkge1xyXG4gICAgICBmb3JtLnRoX19mb3JtSW5wdXQge1xyXG4gICAgICAgICAgbWFyZ2luOiAzZW0gYXV0bztcclxuICAgICAgICAgIHBhZGRpbmc6IDNlbSAyZW0gMmVtIDJlbTtcclxuICAgICAgfVxyXG4gICAgICBoZ3JvdXAge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNGVtICFpbXBvcnRhbnRcclxuICAgICAgfVxyXG4gICAgICBoMS50aF90aXRpbGVMb2dpbixcclxuICAgICAgaDMudGhfdGl0aWxlTG9naW4ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4XHJcbiAgICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnRoX19mb3JtSW5wdXQuY29uZmlybUZvcm0ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmdyb3VwIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dC50aF9faW5wdXRMb2dpbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNXB4O1xyXG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBjb2xvcjogIzJiMzU0MTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3NTc1NzU7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0LnRoX19pbnB1dExvZ2luOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgLyogTGFiZWwgKi9cclxuICBcclxuICBsYWJlbC50aF9fbGFiZWxMb2dpbiB7XHJcbiAgICAgIGNvbG9yOiAjOWRhMGFhO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgdG9wOiAtMjBweDtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIH1cclxuICAvKiBhY3RpdmUgKi9cclxuICBcclxuICBpbnB1dC50aF9faW5wdXRMb2dpbjpmb2N1c35sYWJlbC50aF9fbGFiZWxMb2dpbixcclxuICBpbnB1dC50aF9faW5wdXRMb2dpbi51c2VkfmxhYmVsLnRoX19sYWJlbExvZ2luIHtcclxuICAgICAgY29sb3I6ICMwNzk5OTg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweFxyXG4gIH1cclxuICAvKiBVbmRlcmxpbmUgKi9cclxuICBcclxuICAuYmFyIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYXI6YmVmb3JlLFxyXG4gIC5iYXI6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDc5OTk4O1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYXI6YmVmb3JlIHtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gIH1cclxuICBcclxuICAuYmFyOmFmdGVyIHtcclxuICAgICAgcmlnaHQ6IDUwJTtcclxuICB9XHJcbiAgLyogYWN0aXZlICovXHJcbiAgXHJcbiAgaW5wdXQudGhfX2lucHV0TG9naW46Zm9jdXN+LmJhcjpiZWZvcmUsXHJcbiAgaW5wdXQudGhfX2lucHV0TG9naW46Zm9jdXN+LmJhcjphZnRlciB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIC8qIEhpZ2hsaWdodCAqL1xyXG4gIFxyXG4gIC5oaWdobGlnaHQudGhfX2hpZ2hsaWdodExvZ2luIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBoZWlnaHQ6IDYwJTtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICB0b3A6IDI1JTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgLyogYWN0aXZlICovXHJcbiAgXHJcbiAgaW5wdXQudGhfX2lucHV0TG9naW46Zm9jdXN+LmhpZ2hsaWdodC50aF9faGlnaGxpZ2h0TG9naW4ge1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogaW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XHJcbiAgICAgIGFuaW1hdGlvbjogaW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIC8qIEFuaW1hdGlvbnMgKi9cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgaW5wdXRIaWdobGlnaHRlciB7XHJcbiAgICAgIGZyb20ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzA3OTk5ODtcclxuICAgICAgfVxyXG4gICAgICB0byB7XHJcbiAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgaW5wdXRIaWdobGlnaHRlciB7XHJcbiAgICAgIGZyb20ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzA3OTk5ODtcclxuICAgICAgfVxyXG4gICAgICB0byB7XHJcbiAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIC8qIEJ1dHRvbiAqL1xyXG4gIFxyXG4gIC5idXR0b24ge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gICAgICBtYXJnaW46IC4zZW0gMCAxZW0gMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwNzk5OTg7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNjg1ODQ7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b246Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiAwO1xyXG4gIH1cclxuICAvKiBCdXR0b24gbW9kaWZpZXJzICovXHJcbiAgXHJcbiAgLmJ1dHRvbkJsdWUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDc5OTk4O1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwIHJnYmEoMzksIDExMCwgMjA0LCAuNSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b25CbHVlOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzM0NDA0ZTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyMTI5MzI7XHJcbiAgfVxyXG4gIC8qIFJpcHBsZXMgY29udGFpbmVyICovXHJcbiAgXHJcbiAgLnJpcHBsZXMge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIC8qIFJpcHBsZXMgY2lyY2xlICovXHJcbiAgXHJcbiAgLnJpcHBsZXNDaXJjbGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB3aWR0aDogMDtcclxuICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5yaXBwbGVzLmlzLWFjdGl2ZSAucmlwcGxlc0NpcmNsZSB7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiByaXBwbGVzIC40cyBlYXNlLWluO1xyXG4gICAgICBhbmltYXRpb246IHJpcHBsZXMgLjRzIGVhc2UtaW47XHJcbiAgfVxyXG4gIC8qIFJpcHBsZXMgYW5pbWF0aW9uICovXHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHJpcHBsZXMge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcbiAgICAgIDI1JSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgICAgd2lkdGg6IDIwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjAwJTtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyByaXBwbGVzIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG4gICAgICAyNSUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAgIHdpZHRoOiAyMDAlO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwMCU7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGZvb3RlciB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgZm9vdGVyIHAge1xyXG4gICAgICBjb2xvcjogIzlkYTBhYTtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLjRweDtcclxuICB9XHJcbiAgXHJcbiAgZm9vdGVyIGEge1xyXG4gICAgICBjb2xvcjogIzA3OTk5ODtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG4gIH1cclxuICBcclxuICBmb290ZXIgYTpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbiAgXHJcbiAgZm9vdGVyIGltZyB7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG4gIH1cclxuICBcclxuICBmb290ZXIgaW1nOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogLjgzO1xyXG4gIH1cclxuICBcclxuICBmb290ZXIgaW1nOmZvY3VzLFxyXG4gIGZvb3RlciBhOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgcC50aF9fY29uZmlybUxvZ2luIHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIHAucGFyc2xleS1zdWNjZXNzIHtcclxuICAgICAgY29sb3I6ICMyYjM1NDE7XHJcbiAgfVxyXG4gIFxyXG4gIHAucGFyc2xleS1lcnJvciB7XHJcbiAgICAgIGNvbG9yOiAjZjQwOTA5O1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaG9zZW4tY29udGFpbmVyLW11bHRpIC5jaG9zZW4tY2hvaWNlcyBsaS5zZWFyY2gtY2hvaWNlIHtcclxuICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dCxcclxuICBidXR0b24sXHJcbiAgc2VsZWN0LFxyXG4gIHRleHRhcmVhIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFNlZ29lLCBcIlNlZ29lIFVJXCIsIFwiRGVqYVZ1IFNhbnNcIiwgXCJUcmVidWNoZXQgTVNcIiwgVmVyZGFuYSwgXCJzYW5zLXNlcmlmXCJcclxuICB9XHJcbiAgLyoqL1xyXG4gIFxyXG4gIHNlbGVjdC5mb3JtLWNvbnRyb2wsXHJcbiAgc2VsZWN0IHtcclxuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmYgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHZpZXdCb3g9JzAgMCA0IDUnJTNlJTNjcGF0aCBmaWxsPSclMjMzNDNhNDAnIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLyUzZSUzYy9zdmclM2VcIikgbm8tcmVwZWF0IHJpZ2h0IC43NXJlbSBjZW50ZXIvOHB4IDEwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgc2VsZWN0IHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RmZThmMVxyXG4gIH1cclxuICBcclxuICAuZm9ybS1ncm91cC1zbSAuZm9ybS1jb250cm9sIHtcclxuICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQtc20rLmZvcm0tY29udHJvbC1mZWVkYmFjayxcclxuICAuaW5wdXQtZ3JvdXAtc20rLmZvcm0tY29udHJvbC1mZWVkYmFjayxcclxuICAuZm9ybS1ncm91cC1zbSAuZm9ybS1jb250cm9sKy5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xyXG4gICAgICB3aWR0aDogMjRweDtcclxuICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1ncm91cC1zbSAuY29udHJvbC1sYWJlbCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXAtc20gc2VsZWN0LmZvcm0tY29udHJvbCB7XHJcbiAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgcGFkZGluZzogMCAxMHB4XHJcbiAgfVxyXG4gIFxyXG4gIC5sYW4tYm94IHtcclxuICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5sYW4tYm94IGEuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgICAgY29sb3I6ICNmYWZhZmFcclxuICB9XHJcbiAgLyoqL1xyXG4gIFxyXG4gIC5zdHlsZS1jYiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgICBkaXNwbGF5OiBub25lXHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsLnN0eWxlLWNiIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICAgIGNvbG9yOiAjZjJmMmYyXHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsLnN0eWxlLWNiIHNwYW4ge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICB3aWR0aDogMThweDtcclxuICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICB0b3A6IC0xcHhcclxuICB9XHJcbiAgXHJcbiAgbGFiZWwuc3R5bGUtY2Igc3BhbjpiZWZvcmUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMXB4O1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xyXG4gICAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgY29udGVudDogXCJcIlxyXG4gIH1cclxuICBcclxuICBsYWJlbC5zdHlsZS1jYiBpbnB1dDpjaGVja2VkK3NwYW46YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcXGYwMGNcIjtcclxuICAgICAgY29sb3I6ICMwNzk5OThcclxuICB9XHJcbiAgXHJcbiAgbGFiZWwuc3R5bGUtY2IgaW5wdXRbZGlzYWJsZWRdK3NwYW46YmVmb3JlIHtcclxuICAgICAgb3BhY2l0eTogLjI1XHJcbiAgfVxyXG4gIC8qKi9cclxuICBcclxuICAuc3R5bGUtcmQgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsLnN0eWxlLXJkIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICAgIGNvbG9yOiAjZjJmMmYyXHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsLnN0eWxlLXJkIHNwYW4ge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICB3aWR0aDogMTRweDtcclxuICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgICB0b3A6IC0xcHhcclxuICB9XHJcbiAgXHJcbiAgbGFiZWwuc3R5bGUtcmQgaW5wdXQ6Y2hlY2tlZCtzcGFuIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjMDc5OTk4XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsLnN0eWxlLXJkIGlucHV0OmhvdmVyK3NwYW4ge1xyXG4gICAgICBib3JkZXItY29sb3I6ICMwNzk5OTg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwcHggMnB4IHJnYmEoNDUsIDE1NCwgMjI3LCAwLjEpXHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsLnN0eWxlLXJkIGlucHV0OmNoZWNrZWQrc3BhbjpiZWZvcmUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICB3aWR0aDogOHB4O1xyXG4gICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjEzYlxyXG4gIH1cclxuICBcclxuICBsYWJlbC5zdHlsZS1yZCBpbnB1dFtkaXNhYmxlZF0rc3BhbjpiZWZvcmUsXHJcbiAgbGFiZWwuc3R5bGUtcmQgaW5wdXRbZGlzYWJsZWRdK3NwYW4ge1xyXG4gICAgICBvcGFjaXR5OiAuMjVcclxuICB9XHJcbiAgXHJcbiAgLnN0eWxlLWNiIC50eHQtaW4ge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogMnB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC8qKi9cclxuICBcclxuICAuc3R5bGUtdG9nZ2xlIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlclxyXG4gIH1cclxuICBcclxuICBsYWJlbC5zdHlsZS10b2dnbGUgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgICAgY29sb3I6ICNmMmYyZjJcclxuICB9XHJcbiAgXHJcbiAgbGFiZWwuc3R5bGUtdG9nZ2xlIHNwYW4ge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICB3aWR0aDogMzZweDtcclxuICAgICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgbGFiZWwuc3R5bGUtdG9nZ2xlIHNwYW46YmVmb3JlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTFweDtcclxuICAgICAgaGVpZ2h0OiAxMXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICB0b3A6IDJweDtcclxuICAgICAgbGVmdDogMnB4O1xyXG4gIH1cclxuICBcclxuICBsYWJlbC5zdHlsZS10b2dnbGUgaW5wdXQ6Y2hlY2tlZCtzcGFuIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZGRkXHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsLnN0eWxlLXRvZ2dsZSBpbnB1dDpob3ZlcitzcGFuIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjMTliMTNiO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMHB4IDJweCByZ2JhKDQ1LCAxNTQsIDIyNywgMC4xKVxyXG4gIH1cclxuICBcclxuICBsYWJlbC5zdHlsZS10b2dnbGUgaW5wdXQ6Y2hlY2tlZCtzcGFuOmJlZm9yZSB7XHJcbiAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICAgIHJpZ2h0OiAzcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzk5OTg7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsLnN0eWxlLXRvZ2dsZSBpbnB1dFtkaXNhYmxlZF0rc3BhbjpiZWZvcmUsXHJcbiAgbGFiZWwuc3R5bGUtdG9nZ2xlIGlucHV0W2Rpc2FibGVkXStzcGFuIHtcclxuICAgICAgb3BhY2l0eTogLjI1XHJcbiAgfVxyXG4gIC8qKi9cclxuICBcclxuICAuc3R5bGUtY2ItdGV4dCB7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICB9XHJcbiAgXHJcbiAgLnN0eWxlLWNiLXRleHQtc20ge1xyXG4gICAgICBmb250LXNpemU6IDEycHhcclxuICB9XHJcbiAgLyoqL1xyXG4gIFxyXG4gIC5sb2dpbi1tc3MtYm94LFxyXG4gIC5hZG1pbi1tc3MtYm94IHtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICByaWdodDogMTBweDtcclxuICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICB6LWluZGV4OiAxMFxyXG4gIH1cclxuICBcclxuICAuYWRtaW4tbXNzLWJveCB7XHJcbiAgICAgIHdpZHRoOiAzNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmFkbWluLW1zcy1ib3ggLmFsZXJ0LWljb24+aSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjFweFxyXG4gIH1cclxuICBcclxuICAuYWxlcnQtZGFuZ2VyIHtcclxuICAgICAgYmFja2dyb3VuZDogI0ZERTdFODtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjREUzNzNCO1xyXG4gICAgICBjb2xvcjogIzg5MjIyNVxyXG4gIH1cclxuICBcclxuICAuYWxlcnQtaWNvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLmFsZXJ0LWljb24+aSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgZm9udC1zaXplOiAzM3B4O1xyXG4gIH1cclxuICBcclxuICAuYWxlcnQtaWNvbiB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNDJweFxyXG4gIH1cclxuICBcclxuICAuZGlfX2RpYWxvZy1pY29uIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBtYXJnaW46IDIwcHggMTBweFxyXG4gIH1cclxuICBcclxuICAuZGlfX2RpYWxvZy1pY29uPmkge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzNweDtcclxuICB9XHJcbiAgXHJcbiAgLmRpX19kaWFsb2ctaWNvbiB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNDhweFxyXG4gIH1cclxuICBcclxuICAuZGlfX2RpYWxvZy13YXJuaW5nIC5kaV9fZGlhbG9nLWljb24+aSxcclxuICAuYWxlcnQtd2FybmluZyAuYWxlcnQtaWNvbj5pIHtcclxuICAgICAgY29sb3I6ICNGODhFMDdcclxuICB9XHJcbiAgXHJcbiAgLmRpX19kaWFsb2ctd2FybmluZyAuZGlfX2RpYWxvZy1zdWItdGl0bGUge1xyXG4gICAgICBjb2xvcjogIzlhNTYwMFxyXG4gIH1cclxuICBcclxuICAuZGlfX2RpYWxvZy13YXJuaW5nIC5kaV9fZGlhbG9nLWV4cGxhaW4tdGl0bGUge1xyXG4gICAgICBjb2xvcjogIzNhMjEwM1xyXG4gIH1cclxuICBcclxuICAuZGlfX2RpYWxvZy1zdWNjZXNzIC5kaV9fZGlhbG9nLWljb24+aSB7XHJcbiAgICAgIGNvbG9yOiAjMDNiNTA2XHJcbiAgfVxyXG4gIFxyXG4gIC5kaV9fZGlhbG9nLXN1Y2Nlc3MgLmRpX19kaWFsb2ctc3ViLXRpdGxlIHtcclxuICAgICAgY29sb3I6ICMwMDg4MDJcclxuICB9XHJcbiAgXHJcbiAgLmRpX19kaWFsb2ctc3VjY2VzcyAuZGlfX2RpYWxvZy1leHBsYWluLXRpdGxlIHtcclxuICAgICAgY29sb3I6ICMwNDJiMDVcclxuICB9XHJcbiAgXHJcbiAgLmRpX19kaWFsb2ctZXJyb3IgLmRpX19kaWFsb2ctaWNvbj5pLFxyXG4gIC5hbGVydC1kYW5nZXIgLmFsZXJ0LWljb24+aSB7XHJcbiAgICAgIGNvbG9yOiAjZGUzNzNiXHJcbiAgfVxyXG4gIFxyXG4gIC5kaV9fZGlhbG9nLWVycm9yIC5kaV9fZGlhbG9nLXN1Yi10aXRsZSB7XHJcbiAgICAgIGNvbG9yOiAjZGUzNzNiXHJcbiAgfVxyXG4gIFxyXG4gIC5kaV9fZGlhbG9nLWVycm9yIC5kaV9fZGlhbG9nLWV4cGxhaW4tdGl0bGUge1xyXG4gICAgICBjb2xvcjogIzg5MjIyNVxyXG4gIH1cclxuICBcclxuICAuZGlfX2RpYWxvZy1pbmZvIC5kaV9fZGlhbG9nLWljb24+LFxyXG4gIC5hbGVydC1pbmZvIC5hbGVydC1pY29uPmkge1xyXG4gICAgICBjb2xvcjogIzRmYWVmOVxyXG4gIH1cclxuICBcclxuICAuZGlfX2RpYWxvZy1pbmZvIC5kaV9fZGlhbG9nLXN1Yi10aXRsZSB7XHJcbiAgICAgIGNvbG9yOiAjMzZhNmZmXHJcbiAgfVxyXG4gIFxyXG4gIC5kaV9fZGlhbG9nLWluZm8gLmRpX19kaWFsb2ctZXhwbGFpbi10aXRsZSB7XHJcbiAgICAgIGNvbG9yOiAjMjM2NzlDXHJcbiAgfVxyXG4gIFxyXG4gIC5idC1mbGFiZWxzX193cmFwcGVyIC5wYXJzbGV5LWVycm9ycy1saXN0IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAtMjNweFxyXG4gIH1cclxuICBcclxuICBpbnB1dC5wYXJzbGV5LWVycm9yOmJlZm9yZSxcclxuICBzZWxlY3QucGFyc2xleS1lcnJvcjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBcIlxcZjFmOFwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBmb250LWZhbWlseTogJ0ZvbnRBd2Vzb21lJztcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbiAgfVxyXG4gIC8qIE4gdXBkYXRlIDA2MDUyMDE5Ki9cclxuICBcclxuICAuaW5wdXQtZ3JvdXAtYnRuLnJldmVhbC1hYnMge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDRweDtcclxuICAgICAgd2lkdGg6IGF1dG9cclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LWdyb3VwLWJ0bi5yZXZlYWwtYWJzIC5idG4tZGVmYXVsdC5yZXZlYWwtbG9naW4ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZVxyXG4gIH1cclxuICBcclxuICAuaW5wdXQtZ3JvdXAtYnRuLnJldmVhbC1hYnMgLmJ0bi1kZWZhdWx0LnJldmVhbC1sb2dpbjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjMDc5ODk4XHJcbiAgfVxyXG4gIC8qKi9cclxuICBcclxuICAudWktZ3JpZC1wYWdlci1yb3ctY291bnQtcGlja2VyIHNlbGVjdCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmYgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNCA1JyUzRSUzQ3BhdGggZmlsbD0nJTIzMzQzYTQwJyBkPSdNMiAwTDAgMmg0em0wIDVMMCAzaDR6Jy8lM0UlM0Mvc3ZnJTNFXCIpIDAgMCBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogOHB4IDEwcHg7XHJcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgLyogRmlyZWZveCAqL1xyXG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXHJcbiAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgfVxyXG4gIC8qKi9cclxuICBcclxuICAuZm9ybS1ob3Jpem9udGFsIC5oYXMtZmVlZGJhY2sgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XHJcbiAgICAgIHJpZ2h0OiAwXHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWdyb3VwLXNtIC5oZWxwLWJsb2NrIHtcclxuICAgICAgZm9udC1zaXplOiAxMXB4XHJcbiAgfVxyXG4gIC8qKi9cclxuICBcclxuICAucHJvZmlsZS1oZWFkZXItY29udGFpbmVyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgfVxyXG4gIC8qKi9cclxuICBcclxuICAuZGlfYm9keS11cGxvYWQtcmVzdWx0IHtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICBwYWRkaW5nOiA3cHhcclxuICB9XHJcbiAgXHJcbiAgLmRpX2JvZHktdXBsb2FkLXJlc3VsdC1pbm5lciB7XHJcbiAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICB9XHJcbiAgXHJcbiAgLmRpX2JvZHktdXBsb2FkLXJlc3VsdC1pbm5lciAuaWNvbi1pbWctdXBsb2FkIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTM1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0zOHB4O1xyXG4gICAgICBmb250LXNpemU6IDYzcHhcclxuICB9XHJcbiAgLyoqKi8iLCIvKiBGb3JtcyAqL1xuYm9keSAjbG9naW4ge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuZmllbGRzZXQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbn1cblxubGVnZW5kIHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogIzMzMztcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RmZThmMTtcbn1cblxubGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXSxcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuaW5wdXRbdHlwZT1maWxlXSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5zZWxlY3RbbXVsdGlwbGVdLFxuc2VsZWN0W3NpemVdIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5zZWxlY3Qgb3B0Z3JvdXAge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXN0eWxlOiBpbmhlcml0O1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdOmZvY3VzLFxuaW5wdXRbdHlwZT1yYWRpb106Zm9jdXMsXG5pbnB1dFt0eXBlPWNoZWNrYm94XTpmb2N1cyB7XG4gIG91dGxpbmU6IHRoaW4gZG90dGVkICMzMzM7XG4gIG91dGxpbmU6IDVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxub3V0cHV0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogN3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjb2xvcjogIzU1NTtcbn1cblxuZGl2LmRhdGFUYWJsZXNfZmlsdGVyIGlucHV0LFxuLmlucHV0LFxuLmZvcm0tY29udHJvbCxcbi5kYXRhVGFibGVzX2xlbmd0aCBzZWxlY3QsXG4uYm9vdHN0cmFwLXRpbWVwaWNrZXItd2lkZ2V0IHRhYmxlIHRkIGlucHV0LFxuLnVpLXRvb2xiYXIgc2VsZWN0LFxuLnVpLXRvb2xiYXIgaW5wdXQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjVweDtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG4gIGNvbG9yOiAjMmIyZjMzO1xuICBib3JkZXI6ICNkZmU4ZjEgc29saWQgMXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggM3B4ICNmNmY2ZjY7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAzcHggI2Y2ZjZmNjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAzcHggI2Y2ZjZmNjtcbn1cblxuZGl2LmRhdGFUYWJsZXNfZmlsdGVyIGlucHV0OmZvY3VzLFxuLmlucHV0OmZvY3VzLFxuLmZvcm0tY29udHJvbDpmb2N1cyxcbi5zZWxlY3Rvci5mb2N1cyxcbi5ib290c3RyYXAtdGltZXBpY2tlci13aWRnZXQgdGFibGUgdGQgaW5wdXQ6Zm9jdXMsXG4udWktdG9vbGJhciBzZWxlY3Q6Zm9jdXMsXG4udWktdG9vbGJhciBpbnB1dDpmb2N1cyB7XG4gIGNvbG9yOiAjMzMzO1xuICBib3JkZXItY29sb3I6ICMzZGE2ZmY7XG59XG5cbi5mb3JtLWNvbnRyb2w6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4uZm9ybS1jb250cm9sOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk7XG59XG5cbi5mb3JtLWNvbnRyb2w6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk7XG59XG5cbi5mb3JtLWNvbnRyb2w6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTtcbn1cblxudGV4dGFyZWEuZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uZm9ybS1ncm91cCAuc3dpdGNoLXRvZ2dsZSB7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLnJhZGlvLFxuLmNoZWNrYm94IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5yYWRpbyBsYWJlbCxcbi5jaGVja2JveCBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmFkaW8gaW5wdXRbdHlwZT1yYWRpb10sXG4ucmFkaW8taW5saW5lIGlucHV0W3R5cGU9cmFkaW9dLFxuLmNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdLFxuLmNoZWNrYm94LWlubGluZSBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ucmFkaW8gKyAucmFkaW8sXG4uY2hlY2tib3ggKyAuY2hlY2tib3gge1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4ucmFkaW8taW5saW5lLFxuLmNoZWNrYm94LWlubGluZSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTlweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ucmFkaW8taW5saW5lIGxhYmVsLFxuLmNoZWNrYm94LWlubGluZSBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xufVxuXG4ucmFkaW8taW5saW5lICsgLnJhZGlvLWlubGluZSxcbi5jaGVja2JveC1pbmxpbmUgKyAuY2hlY2tib3gtaW5saW5lIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbmlucHV0W3R5cGU9cmFkaW9dW2Rpc2FibGVkXSxcbmlucHV0W3R5cGU9Y2hlY2tib3hdW2Rpc2FibGVkXSxcbi5yYWRpb1tkaXNhYmxlZF0sXG4ucmFkaW8taW5saW5lW2Rpc2FibGVkXSxcbi5jaGVja2JveFtkaXNhYmxlZF0sXG4uY2hlY2tib3gtaW5saW5lW2Rpc2FibGVkXSxcbmZpZWxkc2V0W2Rpc2FibGVkXSBpbnB1dFt0eXBlPXJhZGlvXSxcbmZpZWxkc2V0W2Rpc2FibGVkXSBpbnB1dFt0eXBlPWNoZWNrYm94XSxcbmZpZWxkc2V0W2Rpc2FibGVkXSAucmFkaW8sXG5maWVsZHNldFtkaXNhYmxlZF0gLnJhZGlvLWlubGluZSxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuY2hlY2tib3gsXG5maWVsZHNldFtkaXNhYmxlZF0gLmNoZWNrYm94LWlubGluZSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5pbnB1dC1zbSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuc2VsZWN0LmlucHV0LXNtIHtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxudGV4dGFyZWEuaW5wdXQtc20ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5pbnB1dC1sZyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuMzM7XG4gIGhlaWdodDogNDVweDtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG5zZWxlY3QuaW5wdXQtbGcge1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG50ZXh0YXJlYS5pbnB1dC1sZyB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmZvcm0tY29udHJvbC1zdGF0aWMge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uaGVscC1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGNvbG9yOiAjNzM3MzczO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmZvcm0taW5saW5lIC5mb3JtLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5mb3JtLWlubGluZSAuZm9ybS1jb250cm9sIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLmZvcm0taW5saW5lIC5yYWRpbyxcbi5mb3JtLWlubGluZSAuY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIC5mb3JtLWlubGluZSAucmFkaW8gaW5wdXRbdHlwZT1yYWRpb10sXG4uZm9ybS1pbmxpbmUgLmNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuLmZvcm0taG9yaXpvbnRhbCAuY29udHJvbC1sYWJlbCxcbi5mb3JtLWhvcml6b250YWwgLnJhZGlvLFxuLmZvcm0taG9yaXpvbnRhbCAuY2hlY2tib3gsXG4uZm9ybS1ob3Jpem9udGFsIC5yYWRpby1pbmxpbmUsXG4uZm9ybS1ob3Jpem9udGFsIC5jaGVja2JveC1pbmxpbmUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLXRvcDogN3B4O1xufVxuXG4vKi5mb3JtLWhvcml6b250YWwgPiAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG59Ki9cbi5mb3JtLWhvcml6b250YWwgPiAuZGlfX0JveGJyZC1mb3JtIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogLTE1cHggIWltcG9ydGFudDtcbn1cblxuLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1ncm91cDpiZWZvcmUsXG4uZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3VwOmFmdGVyIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNvbnRlbnQ6IFwiIFwiO1xufVxuXG4uZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3VwOmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5mb3JtLWhvcml6b250YWwgLmZvcm0tZ3JvdXA6YmVmb3JlLFxuLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1ncm91cDphZnRlciB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjb250ZW50OiBcIiBcIjtcbn1cblxuLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1ncm91cDphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uZm9ybS1ob3Jpem9udGFsIC5mb3JtLWNvbnRyb2wtc3RhdGljIHtcbiAgcGFkZGluZy10b3A6IDdweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5mb3JtLWhvcml6b250YWwgLmNvbnRyb2wtbGFiZWwge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbn1cbi5pbnB1dC1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xufVxuXG4uaW5wdXQtZ3JvdXAuY29sIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmlucHV0LWdyb3VwLWxnID4gLmZvcm0tY29udHJvbCxcbi5pbnB1dC1ncm91cC1sZyA+IC5pbnB1dC1ncm91cC1hZGRvbixcbi5pbnB1dC1ncm91cC1sZyA+IC5pbnB1dC1ncm91cC1idG4gPiAuYnRuIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMS4zMztcbiAgaGVpZ2h0OiA0NXB4O1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbnNlbGVjdC5pbnB1dC1ncm91cC1sZyA+IC5mb3JtLWNvbnRyb2wsXG5zZWxlY3QuaW5wdXQtZ3JvdXAtbGcgPiAuaW5wdXQtZ3JvdXAtYWRkb24sXG5zZWxlY3QuaW5wdXQtZ3JvdXAtbGcgPiAuaW5wdXQtZ3JvdXAtYnRuID4gLmJ0biB7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG59XG5cbnRleHRhcmVhLmlucHV0LWdyb3VwLWxnID4gLmZvcm0tY29udHJvbCxcbnRleHRhcmVhLmlucHV0LWdyb3VwLWxnID4gLmlucHV0LWdyb3VwLWFkZG9uLFxudGV4dGFyZWEuaW5wdXQtZ3JvdXAtbGcgPiAuaW5wdXQtZ3JvdXAtYnRuID4gLmJ0biB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmlucHV0LWdyb3VwLXNtID4gLmZvcm0tY29udHJvbCxcbi5pbnB1dC1ncm91cC1zbSA+IC5pbnB1dC1ncm91cC1hZGRvbixcbi5pbnB1dC1ncm91cC1zbSA+IC5pbnB1dC1ncm91cC1idG4gPiAuYnRuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuc2VsZWN0LmlucHV0LWdyb3VwLXNtID4gLmZvcm0tY29udHJvbCxcbnNlbGVjdC5pbnB1dC1ncm91cC1zbSA+IC5pbnB1dC1ncm91cC1hZGRvbixcbnNlbGVjdC5pbnB1dC1ncm91cC1zbSA+IC5pbnB1dC1ncm91cC1idG4gPiAuYnRuIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxudGV4dGFyZWEuaW5wdXQtZ3JvdXAtc20gPiAuZm9ybS1jb250cm9sLFxudGV4dGFyZWEuaW5wdXQtZ3JvdXAtc20gPiAuaW5wdXQtZ3JvdXAtYWRkb24sXG50ZXh0YXJlYS5pbnB1dC1ncm91cC1zbSA+IC5pbnB1dC1ncm91cC1idG4gPiAuYnRuIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaW5wdXQtZ3JvdXAtYWRkb24sXG4uaW5wdXQtZ3JvdXAtYnRuLFxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4uaW5wdXQtZ3JvdXAtYWRkb246bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSxcbi5pbnB1dC1ncm91cC1idG46bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSxcbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uaW5wdXQtZ3JvdXAtYWRkb24gZGl2W2lkXj11bmlmb3JtLV0ge1xuICBtYXJnaW46IDAgLTNweDtcbn1cblxuLmlucHV0LWdyb3VwLWFkZG9uLFxuLmlucHV0LWdyb3VwLWJ0biB7XG4gIHdpZHRoOiAxJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmlucHV0LWdyb3VwLWFkZG9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMTtcbiAgcGFkZGluZzogMnB4IDZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzJiMmYzMztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMHB4IHNvbGlkICNkZmU4ZjE7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLmlucHV0LWdyb3VwLWFkZG9uIC5nbHlwaC1pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi13aWR0aDogMjBweDtcbiAgbWFyZ2luOiAwIC00cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlucHV0LWdyb3VwLWFkZG9uLmFkZG9uLWluc2lkZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiA2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLmlucHV0LWdyb3VwLWxnIC5pbnB1dC1ncm91cC1hZGRvbi5hZGRvbi1pbnNpZGUge1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDEwcHg7XG59XG5cbi5pbnB1dC1ncm91cC1hZGRvbi5hZGRvbi1pbnNpZGUgLmdseXBoLWljb24ge1xuICBtYXJnaW46IDA7XG59XG5cbi5pbnB1dC1ncm91cC1hZGRvbi5hZGRvbi1pbnNpZGUgKyBpbnB1dCB7XG4gIHBhZGRpbmctbGVmdDogNDhweDtcbn1cblxuLmlucHV0LWdyb3VwLWFkZG9uLmlucHV0LXNtIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmlucHV0LWdyb3VwLWFkZG9uLmlucHV0LWxnIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5pbnB1dC1ncm91cC1hZGRvbiBpbnB1dFt0eXBlPXJhZGlvXSxcbi5pbnB1dC1ncm91cC1hZGRvbiBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOmZpcnN0LWNoaWxkLFxuLmlucHV0LWdyb3VwLWFkZG9uOmZpcnN0LWNoaWxkLFxuLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZCA+IC5idG4sXG4uaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkID4gLmRyb3Bkb3duLXRvZ2dsZSxcbi5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZCA+IC5idG46bm90KDpsYXN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSkge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG5cbi5pbnB1dC1ncm91cC1hZGRvbjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogMDtcbn1cblxuLmlucHV0LWdyb3VwLWFkZG9uLmFkZG9uLWluc2lkZTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xuICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uaW5wdXQtZ3JvdXAtYnRuICsgLmZvcm0tY29udHJvbCxcbi5pbnB1dC1ncm91cC1hZGRvbiArIC5mb3JtLWNvbnRyb2wsXG4uaW5wdXQtZ3JvdXAtYWRkb246bGFzdC1jaGlsZCxcbi5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZCA+IC5idG4sXG4uaW5wdXQtZ3JvdXAtYnRuOmxhc3QtY2hpbGQgPiAuZHJvcGRvd24tdG9nZ2xlLFxuLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZCA+IC5idG46bm90KDpmaXJzdC1jaGlsZCkge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuXG4uaW5wdXQtZ3JvdXAtYWRkb246bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuXG4uaW5wdXQtZ3JvdXAtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkID4gLmJ0biB7XG4gIG1hcmdpbi1yaWdodDogLTFweDtcbn1cblxuLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkID4gLmJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xufVxuXG4uaW5wdXQtZ3JvdXAtYnRuID4gLmJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlucHV0LWdyb3VwLWJ0biA+IC5idG4gKyAuYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XG59XG5cbi5pbnB1dC1ncm91cC1idG4gPiAuYnRuOmhvdmVyLFxuLmlucHV0LWdyb3VwLWJ0biA+IC5idG46YWN0aXZlIHtcbiAgei1pbmRleDogMjtcbn1cblxuW2RhdGEtdG9nZ2xlPWJ1dHRvbnNdID4gLmJ0biA+IGlucHV0W3R5cGU9cmFkaW9dLFxuW2RhdGEtdG9nZ2xlPWJ1dHRvbnNdID4gLmJ0biA+IGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogVGV4dGFyZWEgKi9cbnRleHRhcmVhLnRleHRhcmVhLW5vLXJlc2l6ZSxcbnRleHRhcmVhLnRleHRhcmVhLWF1dG9yZXNpemUge1xuICByZXNpemU6IG5vbmU7XG59XG5cbi50ZXh0YXJlYS1hdXRvc2l6ZSB7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjNzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IGhlaWdodCAwLjNzO1xufVxuXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xuICBsaW5lLWhlaWdodDogMS42ZW07XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xufVxuXG50ZXh0YXJlYS50ZXh0YXJlYS14cyB7XG4gIGhlaWdodDogNTBweDtcbn1cblxudGV4dGFyZWEudGV4dGFyZWEtc20ge1xuICBoZWlnaHQ6IDEyNXB4O1xufVxuXG50ZXh0YXJlYS50ZXh0YXJlYS1tZCB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbnRleHRhcmVhLnRleHRhcmVhLWxnIHtcbiAgaGVpZ2h0OiAyNzVweDtcbn1cblxuLyogU3Bpbm5lciAqL1xuLnVpLXNwaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udWktc3Bpbm5lciAudWktc3Bpbm5lci1idXR0b24ge1xuICBmb250LXNpemU6IDlweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxN3B4O1xuICBoZWlnaHQ6IDE3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLnVpLXNwaW5uZXIgLnVpLXNwaW5uZXItdXAge1xuICB0b3A6IDA7XG59XG5cbi51aS1zcGlubmVyIC51aS1zcGlubmVyLWRvd24ge1xuICBib3R0b206IDA7XG59XG5cbi5wYXJzbGV5LWVycm9ycy1saXN0IGxpIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4vKiBSb3cgYm9yZGVyICovXG4uYm9yZGVyZWQtcm93ID4gLmZvcm0tZ3JvdXAge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcbiAgYm9yZGVyLXRvcC1zdHlsZTogZGFzaGVkO1xufVxuXG4uYm9yZGVyZWQtcm93ID4gLmZvcm0tZ3JvdXA6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uZm9ybS1ncm91cCAudWktc2xpZGVyIHtcbiAgbWFyZ2luLXRvcDogMTRweDtcbn1cblxuLmZvcm0tZ3JvdXAgLnVpLXNsaWRlciArIC5pbnB1dC1ncm91cCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5oZ3JvdXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cblxuaDEudGhfdGl0aWxlTG9naW4sXG5oMy50aF90aXRpbGVMb2dpbiB7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy10b3A6IDM4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5cbmgxLnRoX3RpdGlsZUxvZ2luIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5oMyB7XG4gIGNvbG9yOiAjNGE4OWRjO1xufVxuXG5mb3JtLnRoX19mb3JtSW5wdXQge1xuICB3aWR0aDogMzgwcHg7XG4gIG1hcmdpbjogMWVtIGF1dG87XG4gIHBhZGRpbmc6IDNlbSAxZW0gMmVtIDFlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gIGZvcm0udGhfX2Zvcm1JbnB1dCB7XG4gICAgbWFyZ2luOiAzZW0gYXV0bztcbiAgICBwYWRkaW5nOiAzZW0gMmVtIDJlbSAyZW07XG4gIH1cbiAgaGdyb3VwIHtcbiAgICBtYXJnaW4tdG9wOiA0ZW0gIWltcG9ydGFudDtcbiAgfVxuICBoMS50aF90aXRpbGVMb2dpbixcbmgzLnRoX3RpdGlsZUxvZ2luIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cbi50aF9fZm9ybUlucHV0LmNvbmZpcm1Gb3JtIHtcbiAgbWFyZ2luLXRvcDogMTQwcHg7XG59XG5cbi5ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcbn1cblxuaW5wdXQudGhfX2lucHV0TG9naW4ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDVweDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMyYjM1NDE7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzU3NTc1O1xufVxuXG5pbnB1dC50aF9faW5wdXRMb2dpbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi8qIExhYmVsICovXG5sYWJlbC50aF9fbGFiZWxMb2dpbiB7XG4gIGNvbG9yOiAjOWRhMGFhO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGxlZnQ6IDVweDtcbiAgdG9wOiAtMjBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4vKiBhY3RpdmUgKi9cbmlucHV0LnRoX19pbnB1dExvZ2luOmZvY3VzIH4gbGFiZWwudGhfX2xhYmVsTG9naW4sXG5pbnB1dC50aF9faW5wdXRMb2dpbi51c2VkIH4gbGFiZWwudGhfX2xhYmVsTG9naW4ge1xuICBjb2xvcjogIzA3OTk5ODtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4vKiBVbmRlcmxpbmUgKi9cbi5iYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJhcjpiZWZvcmUsXG4uYmFyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAzcHg7XG4gIHdpZHRoOiAwO1xuICBib3R0b206IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjMDc5OTk4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5iYXI6YmVmb3JlIHtcbiAgbGVmdDogNTAlO1xufVxuXG4uYmFyOmFmdGVyIHtcbiAgcmlnaHQ6IDUwJTtcbn1cblxuLyogYWN0aXZlICovXG5pbnB1dC50aF9faW5wdXRMb2dpbjpmb2N1cyB+IC5iYXI6YmVmb3JlLFxuaW5wdXQudGhfX2lucHV0TG9naW46Zm9jdXMgfiAuYmFyOmFmdGVyIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLyogSGlnaGxpZ2h0ICovXG4uaGlnaGxpZ2h0LnRoX19oaWdobGlnaHRMb2dpbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA2MCU7XG4gIHdpZHRoOiAxMDBweDtcbiAgdG9wOiAyNSU7XG4gIGxlZnQ6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi8qIGFjdGl2ZSAqL1xuaW5wdXQudGhfX2lucHV0TG9naW46Zm9jdXMgfiAuaGlnaGxpZ2h0LnRoX19oaWdobGlnaHRMb2dpbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcbiAgYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcbn1cblxuLyogQW5pbWF0aW9ucyAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGlucHV0SGlnaGxpZ2h0ZXIge1xuICBmcm9tIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDc5OTk4O1xuICB9XG4gIHRvIHtcbiAgICB3aWR0aDogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuQGtleWZyYW1lcyBpbnB1dEhpZ2hsaWdodGVyIHtcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZDogIzA3OTk5ODtcbiAgfVxuICB0byB7XG4gICAgd2lkdGg6IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cbi8qIEJ1dHRvbiAqL1xuLmJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gIG1hcmdpbjogMC4zZW0gMCAxZW0gMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGJhY2tncm91bmQ6ICMwNzk5OTg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNjg1ODQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG59XG5cbi5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG4vKiBCdXR0b24gbW9kaWZpZXJzICovXG4uYnV0dG9uQmx1ZSB7XG4gIGJhY2tncm91bmQ6ICMwNzk5OTg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDAgcmdiYSgzOSwgMTEwLCAyMDQsIDAuNSk7XG59XG5cbi5idXR0b25CbHVlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzM0NDA0ZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyMTI5MzI7XG59XG5cbi8qIFJpcHBsZXMgY29udGFpbmVyICovXG4ucmlwcGxlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLyogUmlwcGxlcyBjaXJjbGUgKi9cbi5yaXBwbGVzQ2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xufVxuXG4ucmlwcGxlcy5pcy1hY3RpdmUgLnJpcHBsZXNDaXJjbGUge1xuICAtd2Via2l0LWFuaW1hdGlvbjogcmlwcGxlcyAwLjRzIGVhc2UtaW47XG4gIGFuaW1hdGlvbjogcmlwcGxlcyAwLjRzIGVhc2UtaW47XG59XG5cbi8qIFJpcHBsZXMgYW5pbWF0aW9uICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgcmlwcGxlcyB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDI1JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMjAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJpcHBsZXMge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAyNSUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDIwMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDIwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5mb290ZXIgcCB7XG4gIGNvbG9yOiAjOWRhMGFhO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbn1cblxuZm9vdGVyIGEge1xuICBjb2xvcjogIzA3OTk5ODtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbmZvb3RlciBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5mb290ZXIgaW1nIHtcbiAgd2lkdGg6IDgwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cblxuZm9vdGVyIGltZzpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODM7XG59XG5cbmZvb3RlciBpbWc6Zm9jdXMsXG5mb290ZXIgYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbnAudGhfX2NvbmZpcm1Mb2dpbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5wLnBhcnNsZXktc3VjY2VzcyB7XG4gIGNvbG9yOiAjMmIzNTQxO1xufVxuXG5wLnBhcnNsZXktZXJyb3Ige1xuICBjb2xvcjogI2Y0MDkwOTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY2hvc2VuLWNvbnRhaW5lci1tdWx0aSAuY2hvc2VuLWNob2ljZXMgbGkuc2VhcmNoLWNob2ljZSB7XG4gIG1heC13aWR0aDogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuaW5wdXQsXG5idXR0b24sXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBTZWdvZSwgXCJTZWdvZSBVSVwiLCBcIkRlamFWdSBTYW5zXCIsIFwiVHJlYnVjaGV0IE1TXCIsIFZlcmRhbmEsIFwic2Fucy1zZXJpZlwiO1xufVxuXG4vKiovXG5zZWxlY3QuZm9ybS1jb250cm9sLFxuc2VsZWN0IHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmYgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHZpZXdCb3g9JzAgMCA0IDUnJTNlJTNjcGF0aCBmaWxsPSclMjMzNDNhNDAnIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLyUzZSUzYy9zdmclM2VcIikgbm8tcmVwZWF0IHJpZ2h0IDAuNzVyZW0gY2VudGVyLzhweCAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbnNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZmU4ZjE7XG59XG5cbi5mb3JtLWdyb3VwLXNtIC5mb3JtLWNvbnRyb2wge1xuICBmb250LXNpemU6IDExcHg7XG4gIGhlaWdodDogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5pbnB1dC1zbSArIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2ssXG4uaW5wdXQtZ3JvdXAtc20gKyAuZm9ybS1jb250cm9sLWZlZWRiYWNrLFxuLmZvcm0tZ3JvdXAtc20gLmZvcm0tY29udHJvbCArIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1ncm91cC1zbSAuY29udHJvbC1sYWJlbCB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmZvcm0tZ3JvdXAtc20gc2VsZWN0LmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4ubGFuLWJveCB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubGFuLWJveCBhLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGNvbG9yOiAjZmFmYWZhO1xufVxuXG4vKiovXG4uc3R5bGUtY2IgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5sYWJlbC5zdHlsZS1jYiBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGNvbG9yOiAjZjJmMmYyO1xufVxuXG5sYWJlbC5zdHlsZS1jYiBzcGFuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdG9wOiAtMXB4O1xufVxuXG5sYWJlbC5zdHlsZS1jYiBzcGFuOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgdG9wOiAxcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC03cHg7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBGb250QXdlc29tZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb250ZW50OiBcIlwiO1xufVxuXG5sYWJlbC5zdHlsZS1jYiBpbnB1dDpjaGVja2VkICsgc3BhbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAwY1wiO1xuICBjb2xvcjogIzA3OTk5ODtcbn1cblxubGFiZWwuc3R5bGUtY2IgaW5wdXRbZGlzYWJsZWRdICsgc3BhbjpiZWZvcmUge1xuICBvcGFjaXR5OiAwLjI1O1xufVxuXG4vKiovXG4uc3R5bGUtcmQgaW5wdXRbdHlwZT1yYWRpb10ge1xuICBkaXNwbGF5OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmxhYmVsLnN0eWxlLXJkIGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgY29sb3I6ICNmMmYyZjI7XG59XG5cbmxhYmVsLnN0eWxlLXJkIHNwYW4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICB0b3A6IC0xcHg7XG59XG5cbmxhYmVsLnN0eWxlLXJkIGlucHV0OmNoZWNrZWQgKyBzcGFuIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDc5OTk4O1xufVxuXG5sYWJlbC5zdHlsZS1yZCBpbnB1dDpob3ZlciArIHNwYW4ge1xuICBib3JkZXItY29sb3I6ICMwNzk5OTg7XG4gIGJveC1zaGFkb3c6IDAgMCAwcHggMnB4IHJnYmEoNDUsIDE1NCwgMjI3LCAwLjEpO1xufVxuXG5sYWJlbC5zdHlsZS1yZCBpbnB1dDpjaGVja2VkICsgc3BhbjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xuICBtYXJnaW4tdG9wOiAtNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNvbG9yOiAjNTU1O1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjEzYjtcbn1cblxubGFiZWwuc3R5bGUtcmQgaW5wdXRbZGlzYWJsZWRdICsgc3BhbjpiZWZvcmUsXG5sYWJlbC5zdHlsZS1yZCBpbnB1dFtkaXNhYmxlZF0gKyBzcGFuIHtcbiAgb3BhY2l0eTogMC4yNTtcbn1cblxuLnN0eWxlLWNiIC50eHQtaW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi8qKi9cbi5zdHlsZS10b2dnbGUgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBkaXNwbGF5OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmxhYmVsLnN0eWxlLXRvZ2dsZSBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGNvbG9yOiAjZjJmMmYyO1xufVxuXG5sYWJlbC5zdHlsZS10b2dnbGUgc3BhbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDE3cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5sYWJlbC5zdHlsZS10b2dnbGUgc3BhbjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMXB4O1xuICBoZWlnaHQ6IDExcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHRvcDogMnB4O1xuICBsZWZ0OiAycHg7XG59XG5cbmxhYmVsLnN0eWxlLXRvZ2dsZSBpbnB1dDpjaGVja2VkICsgc3BhbiB7XG4gIGJvcmRlci1jb2xvcjogI2RkZDtcbn1cblxubGFiZWwuc3R5bGUtdG9nZ2xlIGlucHV0OmhvdmVyICsgc3BhbiB7XG4gIGJvcmRlci1jb2xvcjogIzE5YjEzYjtcbiAgYm94LXNoYWRvdzogMCAwIDBweCAycHggcmdiYSg0NSwgMTU0LCAyMjcsIDAuMSk7XG59XG5cbmxhYmVsLnN0eWxlLXRvZ2dsZSBpbnB1dDpjaGVja2VkICsgc3BhbjpiZWZvcmUge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc5OTk4O1xufVxuXG5sYWJlbC5zdHlsZS10b2dnbGUgaW5wdXRbZGlzYWJsZWRdICsgc3BhbjpiZWZvcmUsXG5sYWJlbC5zdHlsZS10b2dnbGUgaW5wdXRbZGlzYWJsZWRdICsgc3BhbiB7XG4gIG9wYWNpdHk6IDAuMjU7XG59XG5cbi8qKi9cbi5zdHlsZS1jYi10ZXh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uc3R5bGUtY2ItdGV4dC1zbSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLyoqL1xuLmxvZ2luLW1zcy1ib3gsXG4uYWRtaW4tbXNzLWJveCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogMTBweDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5hZG1pbi1tc3MtYm94IHtcbiAgd2lkdGg6IDM1MHB4O1xufVxuXG4uYWRtaW4tbXNzLWJveCAuYWxlcnQtaWNvbiA+IGkge1xuICBmb250LXNpemU6IDIxcHg7XG59XG5cbi5hbGVydC1kYW5nZXIge1xuICBiYWNrZ3JvdW5kOiAjRkRFN0U4O1xuICBib3JkZXItY29sb3I6ICNERTM3M0I7XG4gIGNvbG9yOiAjODkyMjI1O1xufVxuXG4uYWxlcnQtaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFsZXJ0LWljb24gPiBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBmb250LXNpemU6IDMzcHg7XG59XG5cbi5hbGVydC1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiA0MnB4O1xufVxuXG4uZGlfX2RpYWxvZy1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDIwcHggMTBweDtcbn1cblxuLmRpX19kaWFsb2ctaWNvbiA+IGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGZvbnQtc2l6ZTogMzNweDtcbn1cblxuLmRpX19kaWFsb2ctaWNvbiB7XG4gIHBhZGRpbmctbGVmdDogNDhweDtcbn1cblxuLmRpX19kaWFsb2ctd2FybmluZyAuZGlfX2RpYWxvZy1pY29uID4gaSxcbi5hbGVydC13YXJuaW5nIC5hbGVydC1pY29uID4gaSB7XG4gIGNvbG9yOiAjRjg4RTA3O1xufVxuXG4uZGlfX2RpYWxvZy13YXJuaW5nIC5kaV9fZGlhbG9nLXN1Yi10aXRsZSB7XG4gIGNvbG9yOiAjOWE1NjAwO1xufVxuXG4uZGlfX2RpYWxvZy13YXJuaW5nIC5kaV9fZGlhbG9nLWV4cGxhaW4tdGl0bGUge1xuICBjb2xvcjogIzNhMjEwMztcbn1cblxuLmRpX19kaWFsb2ctc3VjY2VzcyAuZGlfX2RpYWxvZy1pY29uID4gaSB7XG4gIGNvbG9yOiAjMDNiNTA2O1xufVxuXG4uZGlfX2RpYWxvZy1zdWNjZXNzIC5kaV9fZGlhbG9nLXN1Yi10aXRsZSB7XG4gIGNvbG9yOiAjMDA4ODAyO1xufVxuXG4uZGlfX2RpYWxvZy1zdWNjZXNzIC5kaV9fZGlhbG9nLWV4cGxhaW4tdGl0bGUge1xuICBjb2xvcjogIzA0MmIwNTtcbn1cblxuLmRpX19kaWFsb2ctZXJyb3IgLmRpX19kaWFsb2ctaWNvbiA+IGksXG4uYWxlcnQtZGFuZ2VyIC5hbGVydC1pY29uID4gaSB7XG4gIGNvbG9yOiAjZGUzNzNiO1xufVxuXG4uZGlfX2RpYWxvZy1lcnJvciAuZGlfX2RpYWxvZy1zdWItdGl0bGUge1xuICBjb2xvcjogI2RlMzczYjtcbn1cblxuLmRpX19kaWFsb2ctZXJyb3IgLmRpX19kaWFsb2ctZXhwbGFpbi10aXRsZSB7XG4gIGNvbG9yOiAjODkyMjI1O1xufVxuXG4uZGlfX2RpYWxvZy1pbmZvIC5kaV9fZGlhbG9nLWljb24gPixcbi5hbGVydC1pbmZvIC5hbGVydC1pY29uID4gaSB7XG4gIGNvbG9yOiAjNGZhZWY5O1xufVxuXG4uZGlfX2RpYWxvZy1pbmZvIC5kaV9fZGlhbG9nLXN1Yi10aXRsZSB7XG4gIGNvbG9yOiAjMzZhNmZmO1xufVxuXG4uZGlfX2RpYWxvZy1pbmZvIC5kaV9fZGlhbG9nLWV4cGxhaW4tdGl0bGUge1xuICBjb2xvcjogIzIzNjc5Qztcbn1cblxuLmJ0LWZsYWJlbHNfX3dyYXBwZXIgLnBhcnNsZXktZXJyb3JzLWxpc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IC0yM3B4O1xufVxuXG5pbnB1dC5wYXJzbGV5LWVycm9yOmJlZm9yZSxcbnNlbGVjdC5wYXJzbGV5LWVycm9yOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWY4XCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnRBd2Vzb21lXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyogTiB1cGRhdGUgMDYwNTIwMTkqL1xuLmlucHV0LWdyb3VwLWJ0bi5yZXZlYWwtYWJzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA0cHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4uaW5wdXQtZ3JvdXAtYnRuLnJldmVhbC1hYnMgLmJ0bi1kZWZhdWx0LnJldmVhbC1sb2dpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uaW5wdXQtZ3JvdXAtYnRuLnJldmVhbC1hYnMgLmJ0bi1kZWZhdWx0LnJldmVhbC1sb2dpbjpob3ZlciB7XG4gIGNvbG9yOiAjMDc5ODk4O1xufVxuXG4vKiovXG4udWktZ3JpZC1wYWdlci1yb3ctY291bnQtcGlja2VyIHNlbGVjdCB7XG4gIGJhY2tncm91bmQ6ICNmZmYgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNCA1JyUzRSUzQ3BhdGggZmlsbD0nJTIzMzQzYTQwJyBkPSdNMiAwTDAgMmg0em0wIDVMMCAzaDR6Jy8lM0UlM0Mvc3ZnJTNFXCIpIDAgMCBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogOHB4IDEwcHg7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgLyogRmlyZWZveCAqL1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qKi9cbi5mb3JtLWhvcml6b250YWwgLmhhcy1mZWVkYmFjayAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgcmlnaHQ6IDA7XG59XG5cbi5mb3JtLWdyb3VwLXNtIC5oZWxwLWJsb2NrIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4vKiovXG4ucHJvZmlsZS1oZWFkZXItY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiovXG4uZGlfYm9keS11cGxvYWQtcmVzdWx0IHtcbiAgd2lkdGg6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBwYWRkaW5nOiA3cHg7XG59XG5cbi5kaV9ib2R5LXVwbG9hZC1yZXN1bHQtaW5uZXIge1xuICBoZWlnaHQ6IDE1MHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZGlfYm9keS11cGxvYWQtcmVzdWx0LWlubmVyIC5pY29uLWltZy11cGxvYWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMzVweDtcbiAgbWFyZ2luLXRvcDogLTM4cHg7XG4gIGZvbnQtc2l6ZTogNjNweDtcbn1cblxuLyoqKi8iXX0= */"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_Service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/user.service */ "./src/app/Service/user.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, toasrt) {
        this.userService = userService;
        this.toasrt = toasrt;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.rfLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            loginUserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("admin", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            loginPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("1234", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    LoginComponent.prototype.onSubmitBtnLogin = function () {
        var _this = this;
        try {
            var formValue = this.rfLogin.value;
            var userLoginData = {};
            userLoginData.UserName = formValue.loginUserName;
            userLoginData.PassWord = formValue.loginPassword;
            this.userService.userLogin(userLoginData).subscribe(function (res) {
                _this.result = res;
                if (_this.result.IsSucces) {
                    localStorage.setItem("jwt", _this.result.Token);
                    window.location.href = _this.result.UrlReturn;
                }
                else {
                    if (_this.result.ErrorMSG) {
                        var errMessage = document.getElementById('errMessage');
                    }
                }
            });
        }
        catch (_a) {
            // alert Catch
        }
    };
    Object.defineProperty(LoginComponent.prototype, "userName", {
        get: function () {
            return this.rfLogin.get('loginUserName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.rfLogin.get('loginPassword');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/user/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"di__filerData-block\">\r\n  <div class=\"di__group-input-table\">\r\n    <div class=\"di__group-input-row\">\r\n      <div class=\"di__group-input-col di__filter-200\" id=\"ProductCode-filter\">\r\n        <label class=\"control-label titileField\">Username</label>\r\n        <div class=\"input-group input-group-sm di__uniformStyle-default di__uniform-sm pad0A !important\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"customerId\" (keydown.enter)=\"onKeydown($event)\">\r\n          <div class=\"di__group-input-col di__group-input-col-noLabel example-box-wrapper th__box-wrapper filterSpace pad5L\">\r\n            <button type=\"button\" (click)=\"SearchData()\" class=\"btn btn-xs btn-primary\" title=\"{{resources['btnFilter'].Value}}\">Filter</button>\r\n          </div>\r\n          </div>\r\n      </div>\r\n     \r\n    </div>\r\n  </div>\r\n</div>\n<div class=\"panel-body\" id=\"panel-pody\" style=\"height: calc(100vh - 230px);\">\n  <app-loader *ngIf=\"isLoading\"></app-loader>\n  <div class=\"di__tableWrapperFixed table-responsive\">\n    <div class=\"table-responsive\">\n      <table class=\"table table-bordered table-sm\">\n        <thead>\n          <tr>\n            <th scope=\"col \">Index</th>\n            <th scope=\"col \">User Name</th>\n            <th scope=\"col \">Full Name</th>\n            <th scope=\"col \">Email</th>\n            <th scope=\"col \">Role </th>\n\n            <th scope=\"col \" style=\"text-align:center;\">Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of users|paginate:{  itemsPerPage: pageSize,currentPage: page,totalItems: count};\">\n            <td>{{item.User.Index}}</td>\n            <td>{{item.User.UserName}}</td>\n            <td>{{item.User.FullName}}</td>\n            <td>{{item.User.Email}}</td>\n            <td>{{item.RolesString}}</td>\n\n            <td class=\"\" style=\"text-align:center;\">\n              <button class=\"btn btn-primary me-2 mb-1 btn-edit\" (click)=\"modalEdit(item.User.Id)\" data-toggle=\"modal\" data-target=\"#exampleModal\">Edit </button>\n              <!-- <button class=\"btn btn-danger me-2 mb-1\" (click)=\"delete(item)\"> Delete </button> -->\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"panel-footer clearfix\">\n    <div class=\"di__panel-right\">\n      <div class=\"di__panel-right\">\n        <div class=\"col-md-12\">\n          <pagination-controls previousLabel=\"Prev\"\n                               nextLabel=\"Next\"\n                               responsive=\"true\"\n                               (pageChange)=\"handlePageChange($event)\"></pagination-controls>\n        </div>\n      </div>\n    </div>\n    <div class=\"di__panel-showing\">\n      <form class=\"form-inline\">\n        <div class=\"form-group form-group-sm\">\n          <select class=\"form-control di__showing\" [(ngModel)]=\"pageSize\" name=\"pgSizeControl\" (ngModelChange)=\"handlePageSizeChange(pageSize)\" id=\"numberOfObject\">\n            <option *ngFor=\"let size of pageSizes\" [ngValue]=\"size\">\n              {{ size }}\n            </option>\n          </select>\n          Item Per Page\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n  \n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" data-backdrop=\"static\" data-keyboard=\"false\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{modalTile}}</h5>\n          <button type=\"button\" (click)=\"modalClose()\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" id=\"add-edit-modal-close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <app-add-edit-user (onLoaded)=\"loaderHanler($event)\" [userProfileData]=\"user\" *ngIf=\"isActiveAddEditUserComp\"></app-add-edit-user>\n        </div>\n\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-add {\n  margin: 10px;\n  float: right;\n}\n\ninput[type=checkbox] {\n  /* IE 9 */\n  /* Chrome, Safari, Opera */\n  transform: scale(1.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9EOlxcU291cmNlQ29kZVxcRGlNZXRyaWNzXFxNYWluXFxTb3VyY2VcXFZpZXRuYW1cXFJlcHJvY2Vzcy1XZWJBcHBzXFxSZXByb2Nlc3MtRnJhbWV3b3JrXFxSZXByb2Nlc3MuV2ViXFxBbmd1bGFyL3NyY1xcYXBwXFx1c2VyXFx1c2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBRUksU0FBQTtFQUVBLDBCQUFBO0VBQ0EscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tYWRkIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbiAgICAvKiBJRSA5ICovXHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICAgIC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG59IiwiLmJ0bi1hZGQge1xuICBtYXJnaW46IDEwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICAvKiBJRSA5ICovXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _Service_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Service/role.service */ "./src/app/Service/role.service.ts");
/* harmony import */ var _Service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Service/user.service */ "./src/app/Service/user.service.ts");





var UserComponent = /** @class */ (function () {
    function UserComponent(userService, roleService, toastService) {
        this.userService = userService;
        this.roleService = roleService;
        this.toastService = toastService;
        this.page = 1;
        this.pageSize = 10;
        this.count = 0;
        this.pageSizes = [10, 50, 100];
        this.modalTile = "Add User";
        this.isActiveAddEditUserComp = false;
        this.isLoading = false;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.username = "";
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    //#region User Method
    UserComponent.prototype.modalAdd = function () {
        this.initUser();
        this.isActiveAddEditUserComp = true;
        console.log(this.user);
        this.modalTile = "Add User";
    };
    UserComponent.prototype.modalEdit = function (id) {
        this.getUserById(id);
        this.modalTile = "Edit User";
    };
    UserComponent.prototype.modalClose = function () {
        this.isActiveAddEditUserComp = false;
        this.getUsers();
    };
    UserComponent.prototype.initUser = function () {
        this.user = { User: {}, Role: {} };
        this.user.User.Id = 0;
        this.user.User.UserName = "";
        this.user.User.Password = "";
        this.user.User.FullName = "";
        this.user.User.PhoneNumber = "";
        this.user.User.Email = "";
        this.user.Role.Role = "";
        this.user.Role.Id = 0;
    };
    UserComponent.prototype.isActiveUser = function (user) {
        return user.IsActive;
    };
    UserComponent.prototype.onChangeActiveUser = function (itemChage, event) {
        itemChage.IsActive = event.target.checked;
        this.activeUser(itemChage);
        console.log("-----onChangeActiveUser----------");
        console.log(event.target.checked);
        console.log(itemChage);
    };
    //#endregion
    //#region Call Service
    UserComponent.prototype.SearchData = function () {
        this.getUsers();
    };
    UserComponent.prototype.onKeydown = function (event) {
        console.log(event);
        this.getUsers();
    };
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        this.isLoading = true;
        console.log(this.page);
        this.userService.getUser(this.page, this.pageSize, this.username).subscribe(function (res) {
            if (res.length > 0) {
                _this.users = res;
                _this.count = _this.users[0].User.TotalRows;
            }
            else {
                _this.count = 0;
            }
            console.log(res);
            _this.isLoading = false;
        });
    };
    UserComponent.prototype.handlePageChange = function (event) {
        this.page = event;
        this.getUsers();
    };
    UserComponent.prototype.handlePageSizeChange = function (event) {
        this.pageSize = event;
        console.log(this.pageSize);
        this.page = 1;
        this.getUsers();
    };
    UserComponent.prototype.getUserById = function (id) {
        var _this = this;
        return this.userService.getUserById(id).toPromise()
            .then(function (res) {
            _this.user = res;
            console.log(_this.user);
        }).then(function (res) {
            _this.isActiveAddEditUserComp = true;
        });
    };
    UserComponent.prototype.activeUser = function (data) {
        var _this = this;
        return this.userService.updateActiveUser(data).toPromise()
            .then(function (res) {
            _this.result = res;
            if (_this.result) {
                _this.toastService.success("Success", "Success!");
                _this.getUsers();
            }
            else {
                _this.toastService.error("Fail update active", "Fail!");
            }
        });
    };
    UserComponent.prototype.loaderHanler = function ($event) {
        this.isLoading = $event;
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _Service_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], UserComponent);
    return UserComponent;
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
    production: false,
    API_URL: '/',
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

module.exports = __webpack_require__(/*! D:\SourceCode\DiMetrics\Main\Source\Vietnam\Reprocess-WebApps\Reprocess-Framework\Reprocess.Web\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map