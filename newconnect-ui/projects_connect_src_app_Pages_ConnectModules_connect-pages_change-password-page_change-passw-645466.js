"use strict";
(self["webpackChunknew_connect_v3"] = self["webpackChunknew_connect_v3"] || []).push([["projects_connect_src_app_Pages_ConnectModules_connect-pages_change-password-page_change-passw-645466"],{

/***/ 54093:
/*!*********************************************************************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/ConnectModules/connect-pages/change-password-page/change-password-page-routing.module.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordPageRoutingModule": () => (/* binding */ ChangePasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _password_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password/password.component */ 79473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    { path: '', component: _password_password_component__WEBPACK_IMPORTED_MODULE_0__.PasswordComponent }
];
class ChangePasswordPageRoutingModule {
}
ChangePasswordPageRoutingModule.ɵfac = function ChangePasswordPageRoutingModule_Factory(t) { return new (t || ChangePasswordPageRoutingModule)(); };
ChangePasswordPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ChangePasswordPageRoutingModule });
ChangePasswordPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChangePasswordPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 59742:
/*!*************************************************************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/ConnectModules/connect-pages/change-password-page/change-password-page.module.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordPageModule": () => (/* binding */ ChangePasswordPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _change_password_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password-page-routing.module */ 54093);
/* harmony import */ var _password_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password/password.component */ 79473);
/* harmony import */ var _shared_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../shared/shared-components/shared-components.module */ 83442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





class ChangePasswordPageModule {
}
ChangePasswordPageModule.ɵfac = function ChangePasswordPageModule_Factory(t) { return new (t || ChangePasswordPageModule)(); };
ChangePasswordPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ChangePasswordPageModule });
ChangePasswordPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _change_password_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordPageRoutingModule,
            _shared_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ChangePasswordPageModule, { declarations: [_password_password_component__WEBPACK_IMPORTED_MODULE_1__.PasswordComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _change_password_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordPageRoutingModule,
        _shared_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule] }); })();


/***/ }),

/***/ 79473:
/*!*************************************************************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/ConnectModules/connect-pages/change-password-page/password/password.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordComponent": () => (/* binding */ PasswordComponent)
/* harmony export */ });
/* harmony import */ var _shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-enums/ServiceNameEnum */ 4946);
/* harmony import */ var _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../Models/Enums/RequestTypes/RequestTypes */ 20987);
/* harmony import */ var _shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-enums/ResponseCodeEnum */ 31580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _Services_ChangePassword_change_password_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Services/ChangePassword/change-password.service */ 26137);
/* harmony import */ var _shared_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-services/toastr.service */ 55325);
/* harmony import */ var _Services_AuthServices_LoginService_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../Services/AuthServices/LoginService/login.service */ 2691);
/* harmony import */ var _Services_OrderServices_OrderListService_order_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../Services/OrderServices/OrderListService/order-list.service */ 86540);
/* harmony import */ var _shared_shared_components_shared_forms_password_form_password_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-components/shared-forms/password-form/password-form.component */ 37953);









class PasswordComponent {
    /**
     * The Requirements For The Construction Of The Component
     * @param service For using changPasswordService methods
     * @param toastService for requests notifications
     * @param loginService
     * @param orderListService
     */
    constructor(service, toastService, loginService, orderListService) {
        this.service = service;
        this.toastService = toastService;
        this.loginService = loginService;
        this.orderListService = orderListService;
    }
    ngOnInit() {
    }
    /**
     * onSubmit change Password
     * @param event change password object
     * @return void
     */
    onSubmit(event) {
        this.objData = {
            newPassword: event.newPassword,
            oldPassword: event.oldPassword,
            serviceName: _shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_0__.ServiceNameEnum.CHANGE_PASSWORD,
            columns: [],
            ConditionsAnded: false
        };
        this.service.changePassword({ services: [this.objData], requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_1__.ERequestTypes.UPDATE }).subscribe(res => {
            if (res.responsCode === _shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_2__.ResponseCodeEnum.OK) {
                this.toastService.updateAlert('Changed Successfully', 'Password', 'start');
                this.loginService.logout();
                this.orderListService.clearSearchData();
            }
        });
    }
}
PasswordComponent.ɵfac = function PasswordComponent_Factory(t) { return new (t || PasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_Services_ChangePassword_change_password_service__WEBPACK_IMPORTED_MODULE_3__.ChangePasswordService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_Services_AuthServices_LoginService_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_Services_OrderServices_OrderListService_order_list_service__WEBPACK_IMPORTED_MODULE_6__.OrderListService)); };
PasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: PasswordComponent, selectors: [["app-password"]], decls: 1, vars: 0, consts: [[3, "changePassOBJ"]], template: function PasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-password-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("changePassOBJ", function PasswordComponent_Template_app_password_form_changePassOBJ_0_listener($event) { return ctx.onSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } }, directives: [_shared_shared_components_shared_forms_password_form_password_form_component__WEBPACK_IMPORTED_MODULE_7__.PasswordFormComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 26137:
/*!*************************************************************************************!*\
  !*** ./projects/connect/src/app/Services/ChangePassword/change-password.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordService": () => (/* binding */ ChangePasswordService)
/* harmony export */ });
/* harmony import */ var shared_API_APIName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/API/APIName */ 93645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _DataService_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataService/data.service */ 16637);



class ChangePasswordService {
    /**
     * The Requirements For The Construction Of The service
     * @param dataService for managing Http methods
     */
    constructor(dataService) {
        this.dataService = dataService;
    }
    /**
     * change password
     * @param data changed password object
     * @return Observable<IMainResponse>
     */
    changePassword(data) {
        return this.dataService.post(shared_API_APIName__WEBPACK_IMPORTED_MODULE_0__.APIName.changePassword, data);
    }
}
ChangePasswordService.ɵfac = function ChangePasswordService_Factory(t) { return new (t || ChangePasswordService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_DataService_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService)); };
ChangePasswordService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ChangePasswordService, factory: ChangePasswordService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=projects_connect_src_app_Pages_ConnectModules_connect-pages_change-password-page_change-passw-645466.js.map