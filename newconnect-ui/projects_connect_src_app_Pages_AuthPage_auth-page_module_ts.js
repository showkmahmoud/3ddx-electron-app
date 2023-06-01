"use strict";
(self["webpackChunknew_connect_v3"] = self["webpackChunknew_connect_v3"] || []).push([["projects_connect_src_app_Pages_AuthPage_auth-page_module_ts"],{

/***/ 43441:
/*!*****************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/AuthPage/auth-page-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageRoutingModule": () => (/* binding */ AuthPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _create_new_password_create_new_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-new-password/create-new-password.component */ 94209);
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in/sign-in.component */ 68822);
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up/sign-up.component */ 61945);
/* harmony import */ var _shared_shared_guards_new_password_guard_create_new_password_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/shared-guards/new-password-guard/create-new-password.guard */ 52000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







const routes = [
    { path: 'sign-in', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__.SignInComponent },
    { path: 'sign-up', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__.SignUpComponent },
    { path: 'create-new-password', component: _create_new_password_create_new_password_component__WEBPACK_IMPORTED_MODULE_0__.CreateNewPasswordComponent, canActivate: [_shared_shared_guards_new_password_guard_create_new_password_guard__WEBPACK_IMPORTED_MODULE_3__.CreateNewPasswordGuard] }
];
class AuthPageRoutingModule {
}
AuthPageRoutingModule.ɵfac = function AuthPageRoutingModule_Factory(t) { return new (t || AuthPageRoutingModule)(); };
AuthPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AuthPageRoutingModule });
AuthPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 89388:
/*!*********************************************************************!*\
  !*** ./projects/connect/src/app/Pages/AuthPage/auth-page.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageModule": () => (/* binding */ AuthPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _auth_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-page-routing.module */ 43441);
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in/sign-in.component */ 68822);
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up/sign-up.component */ 61945);
/* harmony import */ var shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/shared-modules/angular-material.module */ 20793);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/shared-components/shared-components.module */ 83442);
/* harmony import */ var _create_new_password_create_new_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-new-password/create-new-password.component */ 94209);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);









class AuthPageModule {
}
AuthPageModule.ɵfac = function AuthPageModule_Factory(t) { return new (t || AuthPageModule)(); };
AuthPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AuthPageModule });
AuthPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _auth_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthPageRoutingModule,
            shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_3__.AngularMaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _shared_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__.SharedComponentsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AuthPageModule, { declarations: [_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__.SignInComponent,
        _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__.SignUpComponent,
        _create_new_password_create_new_password_component__WEBPACK_IMPORTED_MODULE_5__.CreateNewPasswordComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _auth_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthPageRoutingModule,
        shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_3__.AngularMaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _shared_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__.SharedComponentsModule] }); })();


/***/ }),

/***/ 94209:
/*!******************************************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/AuthPage/create-new-password/create-new-password.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateNewPasswordComponent": () => (/* binding */ CreateNewPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var projects_connect_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/connect/src/environments/environment */ 75514);
/* harmony import */ var shared_shared_static_id_shared_static_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/shared-static-id/shared-static-id */ 9470);
/* harmony import */ var shared_shared_validators_password_validator_password_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/shared-validators/password-validator/password.validator */ 22277);
/* harmony import */ var _shared_shared_functions_MustMatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/shared-functions/MustMatch */ 29073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _Services_AuthServices_CreateNewPassword_create_new_password_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/AuthServices/CreateNewPassword/create-new-password.service */ 28661);
/* harmony import */ var _Services_AuthServices_LoginService_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/AuthServices/LoginService/login.service */ 2691);
/* harmony import */ var _shared_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../shared/shared-services/toastr.service */ 55325);
/* harmony import */ var _shared_shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../shared/shared-components/banner/banner.component */ 43843);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 70781);

















function CreateNewPasswordComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Password must be at least 8 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function CreateNewPasswordComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " The password must contain at least one upperCase letter. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function CreateNewPasswordComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " The password must contain at least one lowerCase letter. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function CreateNewPasswordComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " The password must contain at least one digit. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function CreateNewPasswordComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " The password must contain at least one special character (ie, @,#,!,-). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function CreateNewPasswordComponent_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Confirm Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "is not equal");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " New Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
class CreateNewPasswordComponent {
    /**
     * The Requirements For The Construction Of The Component
     * @param formBuilder form builder
     * @param loginService for using log out
     * @param createPassword for create new password requests
     * @param toasterService for notifications
     */
    constructor(formBuilder, createPassword, loginService, toasterService) {
        this.formBuilder = formBuilder;
        this.createPassword = createPassword;
        this.loginService = loginService;
        this.toasterService = toasterService;
        this.logo = projects_connect_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connectLogo;
        this.htmlID = shared_shared_static_id_shared_static_id__WEBPACK_IMPORTED_MODULE_1__.CStaticIds;
        this.showPassword = false;
        this.form = formBuilder.group({
            newPassword: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(8),
                    shared_shared_validators_password_validator_password_validator__WEBPACK_IMPORTED_MODULE_2__.PasswordValidators.hasDigit(),
                    shared_shared_validators_password_validator_password_validator__WEBPACK_IMPORTED_MODULE_2__.PasswordValidators.hasUpper(),
                    shared_shared_validators_password_validator_password_validator__WEBPACK_IMPORTED_MODULE_2__.PasswordValidators.hasLower(),
                    shared_shared_validators_password_validator_password_validator__WEBPACK_IMPORTED_MODULE_2__.PasswordValidators.hasSpecialChar(),
                ],
            ],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        }, {
            validator: (0,_shared_shared_functions_MustMatch__WEBPACK_IMPORTED_MODULE_3__.MustMatch)('newPassword', 'confirmPassword')
        });
    }
    /**
     * This function submit the new password
     * @return void
     */
    onSubmit() {
        this.createPassword.createNewPassword({ newPassword: this.form.controls.newPassword.value }).subscribe(res => {
            if (res.success) {
                localStorage.removeItem('newPass');
                this.loginService.logout();
                this.toasterService.updateAlert('Changed Successfully', 'Password', 'start');
            }
            else {
                this.toasterService.errorAlert('Error Happened', 'Create New Password');
            }
        }, error => { this.toasterService.errorAlert('Error Happened', 'Create New Password'); });
    }
    toggleShowPassword() {
        this.showPassword = !this.showPassword;
    }
}
CreateNewPasswordComponent.ɵfac = function CreateNewPasswordComponent_Factory(t) { return new (t || CreateNewPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_Services_AuthServices_CreateNewPassword_create_new_password_service__WEBPACK_IMPORTED_MODULE_4__.CreateNewPasswordService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_Services_AuthServices_LoginService_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__.ToastrService)); };
CreateNewPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: CreateNewPasswordComponent, selectors: [["app-create-new-password"]], decls: 38, vars: 19, consts: [[3, "formGroup", "ngSubmit"], [1, "container", "d-flex", "justify-content-center", "align-items-center", "animate__animated", "animate__fadeIn"], [1, "placard", "col-lg-4"], ["id", "mat-card", 1, "col-lg-4", "animate__animated", "animate__fadeIn"], ["alt", "Connect Logo", 3, "src", "id"], [1, "w-100"], [1, "new-password", "field"], ["id", "create-new-pass-field", 1, "w-100"], [3, "id"], ["type", "password", "matInput", "", "formControlName", "newPassword", "placeholder", "New Password", 3, "id", "type"], ["matSuffix", "", 2, "cursor", "pointer", 3, "click"], [4, "ngIf"], [1, "confirm-password", "field"], ["type", "password", "matInput", "", "formControlName", "confirmPassword", "placeholder", "New Password", 3, "id", "type"], [1, "w-100", "d-flex", "justify-content-center"], ["type", "submit", "mat-button", "", 1, "auth-btn", 3, "id", "disabled"]], template: function CreateNewPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function CreateNewPasswordComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Create New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Your Password has expired. Please create a new password.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " Your new password must be different from previously used passwords. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "mat-card-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "mat-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CreateNewPasswordComponent_Template_mat_icon_click_19_listener() { return ctx.toggleShowPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, CreateNewPasswordComponent_mat_error_21_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, CreateNewPasswordComponent_mat_error_22_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, CreateNewPasswordComponent_mat_error_23_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, CreateNewPasswordComponent_mat_error_24_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, CreateNewPasswordComponent_mat_error_25_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "mat-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CreateNewPasswordComponent_Template_mat_icon_click_31_listener() { return ctx.toggleShowPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, CreateNewPasswordComponent_mat_error_33_Template, 5, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "mat-card-actions", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, " Reset Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx.logo, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("id", ctx.htmlID.Image + "logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", ctx.htmlID.Label + "newPass");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("type", ctx.showPassword === false ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", ctx.htmlID.Input + "newPass");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", !ctx.showPassword ? "visibility" : "visibility_off", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.controls.newPassword.dirty && ctx.form.controls.newPassword.hasError("minlength") || ctx.form.controls.newPassword.dirty && ctx.form.controls.newPassword.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.controls.newPassword.dirty && ctx.form.controls.newPassword.value && ctx.form.controls.newPassword.hasError("upper"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.controls.newPassword.dirty && ctx.form.controls.newPassword.value && ctx.form.controls.newPassword.hasError("lower"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.controls.newPassword.dirty && ctx.form.controls.newPassword.value && ctx.form.controls.newPassword.hasError("digit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.controls.newPassword.dirty && ctx.form.controls.newPassword.value && ctx.form.controls.newPassword.hasError("special"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", ctx.htmlID.Label + "confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("type", ctx.showPassword === false ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", ctx.htmlID.Input + "confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", !ctx.showPassword ? "visibility" : "visibility_off", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.controls.confirmPassword.value && ctx.form.controls.confirmPassword.hasError("wrongPassword"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", ctx.htmlID.Button + "Reset-pass")("disabled", !ctx.form.valid);
    } }, directives: [_shared_shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_7__.BannerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardFooter, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError], styles: ["img[_ngcontent-%COMP%]{\n  width: max(200px, 60%);\n}\n\n.container[_ngcontent-%COMP%] {\n\theight: 90vh;\n  width: 100vw;\n  max-width: 100vw;\n  flex-direction: column;\n  grid-gap:20px;\n  gap:20px;\n}\n\n.placard[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  width: -moz-fit-content;\n\n  width: fit-content;\n  margin-bottom: 10px;\n  color: var(--primary-color);\n}\n\n.placard[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n  font-weight: 800;\n  font-size: 3em;\n}\n\n.placard[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n  color: rgba(0,0,0,.54);\n  margin-bottom: .1rem !important;\n}\n\nmat-icon[_ngcontent-%COMP%]{\n  color: var(--primary-color);\n  margin-right: .5rem;\n}\n\n#mat-card[_ngcontent-%COMP%]{\n  height: min(400px, 55vh);\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n}\n\n.mat-card-content[_ngcontent-%COMP%]{\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n.field[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\nmat-error[_ngcontent-%COMP%]{\n  display: block;\n  overflow-wrap: break-word;\n  color: #e65109;\n}\n\nbutton[_ngcontent-%COMP%]:disabled{\n  filter: saturate(.4);\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1uZXctcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtDQUNDLFlBQVk7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixhQUFRO0VBQVIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQix1QkFBa0I7O0VBQWxCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7O0FBRXpCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImNyZWF0ZS1uZXctcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcbiAgd2lkdGg6IG1heCgyMDBweCwgNjAlKTtcbn1cblxuLmNvbnRhaW5lciB7XG5cdGhlaWdodDogOTB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6MjBweDtcbn1cblxuLnBsYWNhcmR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG4ucGxhY2FyZCBoMXtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAzZW07XG59XG5cbi5wbGFjYXJkIGgze1xuICBjb2xvcjogcmdiYSgwLDAsMCwuNTQpO1xuICBtYXJnaW4tYm90dG9tOiAuMXJlbSAhaW1wb3J0YW50O1xufVxuXG5tYXQtaWNvbntcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xufVxuXG4jbWF0LWNhcmR7XG4gIGhlaWdodDogbWluKDQwMHB4LCA1NXZoKTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxufVxuXG4ubWF0LWNhcmQtY29udGVudHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5maWVsZHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbm1hdC1lcnJvcntcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGNvbG9yOiAjZTY1MTA5O1xufVxuXG5idXR0b246ZGlzYWJsZWR7XG4gIGZpbHRlcjogc2F0dXJhdGUoLjQpO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuIl19 */"] });


/***/ }),

/***/ 68822:
/*!******************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/AuthPage/sign-in/sign-in.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInComponent": () => (/* binding */ SignInComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 75514);
/* harmony import */ var _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Models/Enums/RequestTypes/RequestTypes */ 20987);
/* harmony import */ var _shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/shared-enums/ResponseCodeEnum */ 31580);
/* harmony import */ var _shared_shared_static_id_shared_static_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/shared-static-id/shared-static-id */ 9470);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _Services_AuthServices_LoginService_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/AuthServices/LoginService/login.service */ 2691);
/* harmony import */ var _Services_AuthServices_ForgetPasswordService_forget_password_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/AuthServices/ForgetPasswordService/forget-password.service */ 60812);
/* harmony import */ var _shared_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../shared/shared-services/toastr.service */ 55325);
/* harmony import */ var _Services_LocalStorageService_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Services/LocalStorageService/local-storage.service */ 91931);
/* harmony import */ var _shared_shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../shared/shared-components/banner/banner.component */ 43843);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _shared_shared_components_shared_forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../shared/shared-components/shared-forms/login-form/login-form.component */ 78048);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 70781);














class SignInComponent {
    /**
     * The Requirements For The Construction Of The Component
     * @param router For The routing
     * @param loginService for logIn method
     * @param forgetPasswordService for forgetPassword method
     * @param toastService for requests notifications
     * @param localStorageService for setting items in local storage ;
     */
    constructor(router, loginService, forgetPasswordService, toastService, localStorageService) {
        this.router = router;
        this.loginService = loginService;
        this.forgetPasswordService = forgetPasswordService;
        this.toastService = toastService;
        this.localStorageService = localStorageService;
        this.logo = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connectLogo;
        this.userData = {};
        this.loginObj = { requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_1__.ERequestTypes.ADD, services: [] };
        this.forgetPasswordObj = { requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_1__.ERequestTypes.UPDATE, services: [] };
        this.htmlID = _shared_shared_static_id_shared_static_id__WEBPACK_IMPORTED_MODULE_3__.CStaticIds;
    }
    /**
     * onInit navigate to orders page if client used remember me in log in
     * @return void
     */
    ngOnInit() {
    }
    /**
     * navigate to register page
     * @return void
     */
    register() {
        this.router.navigate(['auth', 'sign-up']);
    }
    /**
     * onSubmit sign in and navigate to orders page
     * @param event logIn form object
     * @return void
     */
    onSubmit(event) {
        this.loginObj.services[0] = {
            userName: event.email,
            password: event.password,
            serviceName: '',
            columns: [],
            ConditionsAnded: false
        };
        this.loginService.login(this.loginObj).subscribe(res => {
            if (res.responsCode === _shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_2__.ResponseCodeEnum.OK) {
                const responseOBJ = JSON.parse(res.responsString);
                if (!responseOBJ.needChange) {
                    if (event.rememberMe) {
                        localStorage.setItem('rememberUser', 'true');
                    }
                    else {
                        localStorage.setItem('rememberUser', 'false');
                    }
                    this.userData = responseOBJ;
                    this.localStorageService.setLocalStorageGDBR(this.userData);
                    this.router.navigate(['connect-modules', 'View-Orders-page']);
                    this.toastService.addAlert(`Welcome ${this.userData.fName} ${this.userData.lName}`, 'In New Connect', 'start');
                }
                else {
                    localStorage.setItem('newPass', 'true');
                    this.toastService.errorAlert(`expired password, please create new password`, 'Create new password');
                    this.router.navigate(['auth', 'create-new-password']);
                }
            }
        });
    }
    /**
     * onForgetPassword send data to client's mail
     * @param event forgetPassword form Object
     * @return void
     */
    onForgetPassword(event) {
        this.forgetPasswordObj.services[0] = {
            userName: event.email,
            password: '',
            serviceName: '',
            columns: [],
            ConditionsAnded: false
        };
        this.forgetPasswordService.forgetPassword(this.forgetPasswordObj).subscribe(res => {
            if (res.responsCode === _shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_2__.ResponseCodeEnum.OK) {
                this.toastService.addAlert('Please Check Your Email', 'Forget Password', 'start');
            }
        });
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_Services_AuthServices_LoginService_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_Services_AuthServices_ForgetPasswordService_forget_password_service__WEBPACK_IMPORTED_MODULE_5__.ForgetPasswordService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_Services_LocalStorageService_local_storage_service__WEBPACK_IMPORTED_MODULE_7__.LocalStorageService)); };
SignInComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 9, vars: 4, consts: [[1, "container", "animate__animated", "animate__fadeIn"], [1, "animate__animated", "animate__fadeIn"], ["alt", "Connect Logo", 3, "src", "id"], [3, "logo", "signInOBJ", "forgetPasswordOBJ"], ["mat-button", "", 1, "auth-btn", 3, "id", "click"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "app-login-form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("signInOBJ", function SignInComponent_Template_app_login_form_signInOBJ_6_listener($event) { return ctx.onSubmit($event); })("forgetPasswordOBJ", function SignInComponent_Template_app_login_form_forgetPasswordOBJ_6_listener($event) { return ctx.onForgetPassword($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_7_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx.logo, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"])("id", ctx.htmlID.Image + "logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("logo", ctx.logo);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx.htmlID.Button + "register");
    } }, directives: [_shared_shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_8__.BannerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _shared_shared_components_shared_forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_9__.LoginFormComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton], styles: [".example-card[_ngcontent-%COMP%] {\n\tmax-width: 600px;\n\tbox-shadow: 3px 6px 10px 0px rgb(235, 235, 235), -3px -3px 10px 0px rgb(235, 235, 235);\n}\n\n.example-card[_ngcontent-%COMP%]:hover{\n\tbox-shadow: 3px 6px 10px 0px rgb(194, 193, 193), -3px -3px 10px 0px rgb(194, 193, 193);\n\n}\n\n.container[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\theight: 90vh;\n}\n\nimg[_ngcontent-%COMP%] {\n\twidth: 54%;\n}\n\n.example-form[_ngcontent-%COMP%] {\n\tmin-width: 150px;\n\tmax-width: 500px;\n\n}\n\nbutton[_ngcontent-%COMP%] {\n\tdisplay: block;\n\tmargin: auto;\n\twidth: 79%;\n\n}\n\n.mat-card-actions[_ngcontent-%COMP%]:not(.mat-card-actions-align-end)   .mat-button[_ngcontent-%COMP%]:first-child{\n\tdisplay: block;\n\tmargin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGdCQUFnQjtDQUNoQixzRkFBc0Y7QUFDdkY7O0FBRUE7Q0FDQyxzRkFBc0Y7O0FBRXZGOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGdCQUFnQjs7QUFFakI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsWUFBWTtDQUNaLFVBQVU7O0FBRVg7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsWUFBWTtBQUNiIiwiZmlsZSI6InNpZ24taW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xuXHRtYXgtd2lkdGg6IDYwMHB4O1xuXHRib3gtc2hhZG93OiAzcHggNnB4IDEwcHggMHB4IHJnYigyMzUsIDIzNSwgMjM1KSwgLTNweCAtM3B4IDEwcHggMHB4IHJnYigyMzUsIDIzNSwgMjM1KTtcbn1cblxuLmV4YW1wbGUtY2FyZDpob3Zlcntcblx0Ym94LXNoYWRvdzogM3B4IDZweCAxMHB4IDBweCByZ2IoMTk0LCAxOTMsIDE5MyksIC0zcHggLTNweCAxMHB4IDBweCByZ2IoMTk0LCAxOTMsIDE5Myk7XG5cbn1cblxuLmNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRoZWlnaHQ6IDkwdmg7XG59XG5cbmltZyB7XG5cdHdpZHRoOiA1NCU7XG59XG5cbi5leGFtcGxlLWZvcm0ge1xuXHRtaW4td2lkdGg6IDE1MHB4O1xuXHRtYXgtd2lkdGg6IDUwMHB4O1xuXG59XG5cbmJ1dHRvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRtYXJnaW46IGF1dG87XG5cdHdpZHRoOiA3OSU7XG5cbn1cblxuLm1hdC1jYXJkLWFjdGlvbnM6bm90KC5tYXQtY2FyZC1hY3Rpb25zLWFsaWduLWVuZCkgLm1hdC1idXR0b246Zmlyc3QtY2hpbGR7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRtYXJnaW46IGF1dG87XG59XG4iXX0= */"] });


/***/ }),

/***/ 61945:
/*!******************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/AuthPage/sign-up/sign-up.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpComponent": () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Models/Enums/RequestTypes/RequestTypes */ 20987);
/* harmony import */ var shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/shared-enums/ResponseCodeEnum */ 31580);
/* harmony import */ var shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/shared-enums/ServiceNameEnum */ 4946);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ 75514);
/* harmony import */ var _shared_shared_static_id_shared_static_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/shared-static-id/shared-static-id */ 9470);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _Services_AuthServices_RegisterService_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/AuthServices/RegisterService/register.service */ 70672);
/* harmony import */ var _Services_AuthServices_LoginService_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Services/AuthServices/LoginService/login.service */ 2691);
/* harmony import */ var _Services_LocalStorageService_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Services/LocalStorageService/local-storage.service */ 91931);
/* harmony import */ var _Services_AuthServices_ForgetPasswordService_forget_password_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Services/AuthServices/ForgetPasswordService/forget-password.service */ 60812);
/* harmony import */ var shared_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/shared-services/toastr.service */ 55325);
/* harmony import */ var _shared_shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../shared/shared-components/banner/banner.component */ 43843);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _shared_shared_components_shared_forms_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../shared/shared-components/shared-forms/register-form/register-form.component */ 75716);















class SignUpComponent {
    /**
     * The Requirements For The Construction Of The Component
     * @param router For The routing
     * @param loginService for logIn method
     * @param registerService for registration
     * @param toastService for requests notifications
     * @param localStorageService for setting items in local storage ;
     */
    constructor(router, registerService, loginService, localStorageService, forgetPasswordService, toastService) {
        this.router = router;
        this.registerService = registerService;
        this.loginService = loginService;
        this.localStorageService = localStorageService;
        this.forgetPasswordService = forgetPasswordService;
        this.toastService = toastService;
        this.logo = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.connectLogo;
        this.signInOBJ = {
            userCNAdresses: [{}],
            userCNCreditCards: [{}],
            userCNEmails: [{}],
            userCNTelecoms: [{}]
        };
        this.userData = {};
        this.loginObj = { requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_0__.ERequestTypes.ADD, services: [] };
        this.htmlID = _shared_shared_static_id_shared_static_id__WEBPACK_IMPORTED_MODULE_4__.CStaticIds;
        this.forgetPasswordObj = { requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_0__.ERequestTypes.UPDATE, services: [] };
        this.isAlreadyExist = false;
    }
    ngOnInit() {
    }
    /**
     * onSubmit  set user's signInOBJ ,register and sign in
     * @param event register object
     * @return void
     */
    onSubmit(event) {
        this.signInOBJ.userCNEnumId = event.userType;
        this.signInOBJ.pwd = event.password;
        this.signInOBJ.fName = event.fName;
        this.signInOBJ.lName = event.lName;
        this.signInOBJ.stateEnumId = +event.state;
        this.signInOBJ.rcivMail = event.rcivMail;
        this.signInOBJ.city = event.city;
        this.signInOBJ.zipCode = +event.zipCode;
        this.signInOBJ.leadRefRepName = event.pleaseSpecifyName;
        this.signInOBJ.usersCNLeadSourceEnumId = +event.leadSource;
        this.signInOBJ.leadSourceDesc = event.pleaseSpecify;
        this.signInOBJ.userCNAdresses[0].addressLine1 = event.address1;
        this.signInOBJ.userCNAdresses[0].addressLine2 = event.address2;
        this.signInOBJ.userCNAdresses[0].usersCNAdressesEnumId = +event.addressType;
        this.signInOBJ.userCNCreditCards[0].creditCard = event.creditCardNum ? event.creditCardNum : '';
        this.signInOBJ.userCNCreditCards[0].creditCardEnumId = event.paymentType;
        let expiration = new Date(event.year, event.month, 2);
        this.signInOBJ.userCNCreditCards[0].creditCardTimeExp = expiration.getTime() ? expiration.getTime() / 1000 : 0;
        this.signInOBJ.userCNEmails[0].email = event.email;
        this.signInOBJ.userCNEmails[0].emailEnumId = event.userType;
        this.signInOBJ.userCNTelecoms = event.phones;
        this.signInOBJ.isPortableVersion = false;
        this.signInOBJ.countryEnumId = event.country;
        this.signInOBJ.serviceName = shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_2__.ServiceNameEnum.VUsersCN;
        this.signInOBJ.columns = [];
        this.signInOBJ.ConditionsAnded = false;
        this.signInOBJ.agreeTerms = event.termsOfService;
        this.signInOBJ.agreePrivacy = event.privacyPolicy;
        this.registerService.register({ services: [this.signInOBJ], requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_0__.ERequestTypes.ADD }).subscribe(res => {
            if (res.responsCode === shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_1__.ResponseCodeEnum.OK) {
                this.signIn();
            }
            if (res.responsCode === shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_1__.ResponseCodeEnum.Registeration_Failed_Email_Exist) {
                this.isAlreadyExist = true;
            }
        });
    }
    /**
     * onSubmit sign in and navigate to orders page
     * @return void
     */
    signIn() {
        this.loginObj.services[0] = {
            userName: this.signInOBJ.userCNEmails[0].email,
            password: this.signInOBJ.pwd,
            serviceName: '',
            columns: [],
            ConditionsAnded: false
        };
        this.loginService.login(this.loginObj).subscribe(response => {
            if (response.responsCode === shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_1__.ResponseCodeEnum.OK) {
                this.userData = JSON.parse(response.responsString);
                this.localStorageService.setLocalStorageGDBR(this.userData);
                this.toastService.tutorial = true;
                this.router.navigate(['connect-modules', 'View-Orders-page']);
                this.toastService.addAlert(`Welcome ${this.userData.fName} ${this.userData.lName}`, 'In New Connect', 'start');
            }
        });
    }
    /**
   * onForgetPassword send data to client's mail
   * @param event forgetPassword form Object
   * @return void
   */
    onForgetPassword(event) {
        this.forgetPasswordObj.services[0] = {
            userName: event.email,
            password: '',
            serviceName: '',
            columns: [],
            ConditionsAnded: false
        };
        this.forgetPasswordService.forgetPassword(this.forgetPasswordObj).subscribe(res => {
            if (res.responsCode === shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_1__.ResponseCodeEnum.OK) {
                this.toastService.addAlert('Please Check Your Email', 'Forget Password', 'start');
            }
        });
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_Services_AuthServices_RegisterService_register_service__WEBPACK_IMPORTED_MODULE_5__.RegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_Services_AuthServices_LoginService_login_service__WEBPACK_IMPORTED_MODULE_6__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_Services_LocalStorageService_local_storage_service__WEBPACK_IMPORTED_MODULE_7__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_Services_AuthServices_ForgetPasswordService_forget_password_service__WEBPACK_IMPORTED_MODULE_8__.ForgetPasswordService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](shared_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__.ToastrService)); };
SignUpComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 7, vars: 4, consts: [[1, "container", "pb-2", "mt-4", "mb-5"], [1, "example-card", 2, "margin-bottom", "150px !important"], ["alt", "Connect Logo", 3, "src", "id"], [3, "isAlreadyExist", "logo", "registerInOBJ", "forgetPasswordOBJ"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "app-register-form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("registerInOBJ", function SignUpComponent_Template_app_register_form_registerInOBJ_6_listener($event) { return ctx.onSubmit($event); })("forgetPasswordOBJ", function SignUpComponent_Template_app_register_form_forgetPasswordOBJ_6_listener($event) { return ctx.onForgetPassword($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx.logo, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"])("id", ctx.htmlID.Image + "logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isAlreadyExist", ctx.isAlreadyExist)("logo", ctx.logo);
    } }, directives: [_shared_shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_10__.BannerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _shared_shared_components_shared_forms_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_11__.RegisterFormComponent], styles: [".container[_ngcontent-%COMP%] {\n    margin-top: 50px;\n}\n\n.example-card[_ngcontent-%COMP%] {\n\tbox-shadow: 3px 6px 10px 0px rgb(247 145 60 / 50%), -3px -3px 10px 0px rgb(247 145 60 / 50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtDQUNDLDRGQUE0RjtBQUM3RiIsImZpbGUiOiJzaWduLXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uZXhhbXBsZS1jYXJkIHtcblx0Ym94LXNoYWRvdzogM3B4IDZweCAxMHB4IDBweCByZ2IoMjQ3IDE0NSA2MCAvIDUwJSksIC0zcHggLTNweCAxMHB4IDBweCByZ2IoMjQ3IDE0NSA2MCAvIDUwJSk7XG59Il19 */"] });


/***/ }),

/***/ 28661:
/*!*********************************************************************************************************!*\
  !*** ./projects/connect/src/app/Services/AuthServices/CreateNewPassword/create-new-password.service.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateNewPasswordService": () => (/* binding */ CreateNewPasswordService)
/* harmony export */ });
/* harmony import */ var _shared_API_APIName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../shared/API/APIName */ 93645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _DataService_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataService/data.service */ 16637);



class CreateNewPasswordService {
    /**
     * The Requirements For The Construction Of The service
     * @param dataService for http requests
     */
    constructor(dataService) {
        this.dataService = dataService;
    }
    /**
     * create new password
     * @param newPass new password object
     * @return Observable<any>
     */
    createNewPassword(newPass) {
        return this.dataService.post(_shared_API_APIName__WEBPACK_IMPORTED_MODULE_0__.APIName.createNewPassword, newPass);
    }
}
CreateNewPasswordService.ɵfac = function CreateNewPasswordService_Factory(t) { return new (t || CreateNewPasswordService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_DataService_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService)); };
CreateNewPasswordService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CreateNewPasswordService, factory: CreateNewPasswordService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 60812:
/*!*********************************************************************************************************!*\
  !*** ./projects/connect/src/app/Services/AuthServices/ForgetPasswordService/forget-password.service.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPasswordService": () => (/* binding */ ForgetPasswordService)
/* harmony export */ });
/* harmony import */ var _shared_API_APIName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../shared/API/APIName */ 93645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _DataService_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataService/data.service */ 16637);



class ForgetPasswordService {
    /**
     * The Requirements For The Construction Of The service
     * @param dataService for managing Http methods
     */
    constructor(dataService) {
        this.dataService = dataService;
    }
    /**
     * forget password
     * @param forgetObj forget password object
     * @return Observable<IMainResponse>
     */
    forgetPassword(forgetObj) {
        return this.dataService.post(_shared_API_APIName__WEBPACK_IMPORTED_MODULE_0__.APIName.forgetPassword, forgetObj);
    }
}
ForgetPasswordService.ɵfac = function ForgetPasswordService_Factory(t) { return new (t || ForgetPasswordService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_DataService_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService)); };
ForgetPasswordService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ForgetPasswordService, factory: ForgetPasswordService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 70672:
/*!********************************************************************************************!*\
  !*** ./projects/connect/src/app/Services/AuthServices/RegisterService/register.service.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterService": () => (/* binding */ RegisterService)
/* harmony export */ });
/* harmony import */ var shared_API_APIName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/API/APIName */ 93645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _DataService_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../DataService/data.service */ 16637);



class RegisterService {
    /**
     * The Requirements For The Construction Of The service
     * @param dataService for managing Http methods
     */
    constructor(dataService) {
        this.dataService = dataService;
    }
    /**
     * register
     * @param data register object
     * @return Observable<IMainResponse>
     */
    register(data) {
        return this.dataService.post(shared_API_APIName__WEBPACK_IMPORTED_MODULE_0__.APIName.register, data);
    }
    ;
}
RegisterService.ɵfac = function RegisterService_Factory(t) { return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_DataService_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService)); };
RegisterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RegisterService, factory: RegisterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 91931:
/*!****************************************************************************************!*\
  !*** ./projects/connect/src/app/Services/LocalStorageService/local-storage.service.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageService": () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class LocalStorageService {
    constructor() {
    }
    /**
     * set user data in local storage
     * @param userData user data object
     * @return void
     */
    setLocalStorage(userData) {
        localStorage.setItem('fName', userData.fName);
        localStorage.setItem('lName', userData.lName);
        localStorage.setItem('token', userData.token);
        localStorage.setItem('isPortableVersion', JSON.stringify(userData.isPortableVersion));
        localStorage.setItem('type', JSON.stringify(userData.type));
        localStorage.setItem('userCNId', JSON.stringify(userData.userCNId));
        localStorage.setItem('convOneShotPrice', JSON.stringify(userData.userPrices.convOneShotPrice));
        localStorage.setItem('laserScanPrice', JSON.stringify(userData.userPrices.laserScanPrice));
        localStorage.setItem('reportRecommendedPrice', JSON.stringify(userData.userPrices.reportRecommendedPrice));
        localStorage.setItem('reportRushPrice', JSON.stringify(userData.userPrices.reportRushPrice));
        localStorage.setItem('sgRushPrice', JSON.stringify(userData.userPrices.sgRushPrice));
        localStorage.setItem('tpReviewPrice', JSON.stringify(userData.userPrices.tpReviewPrice));
        localStorage.setItem('userCurrencySymbol', userData.userPrices.userCurrencySymbol);
    }
    /**
     * set user data in GDBR local storage
     * @param userData user data object
     * @return void
     */
    setLocalStorageGDBR(userData) {
        localStorage.setItem('fName', userData.fName);
        localStorage.setItem('lName', userData.lName);
        localStorage.setItem('isPortableVersion', JSON.stringify(userData.isPortableVersion));
        localStorage.setItem('token', '');
        localStorage.setItem('type', JSON.stringify(userData.type));
        localStorage.setItem('userCNId', JSON.stringify(userData.userCNId));
        this.saveOldConnectCookies(userData);
    }
    /**
     * set user data in connect cookies
     * @param userData user data object
     * @return void
     */
    saveOldConnectCookies(userData) {
        const expireCookie = this.getCookieExpiryDate();
        document.cookie = `userCNId=${userData.userCNId};expires=${expireCookie};path=/`;
        document.cookie = `userCNName=${userData.fName + userData.lName};expires=${expireCookie};path=/`;
        // document.cookie = `userCNToken=${loginResp.userData.token};expires=${expireCookie};path=/`;
        // this.cookieService.set('userCNId', String(userData.userCNId), expireCookie, '/');
        // this.cookieService.set('userCNName', userData.fName + userData.lName, expireCookie, '/');
    }
    /**
     * get cookies expiry date
     * @return any
     */
    getCookieExpiryDate() {
        const now = new Date();
        const time = now.getTime();
        const expireTime = time + 7 * 24 * 60 * 60 * 1000;
        now.setTime(expireTime);
        return now.toUTCString();
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 52000:
/*!******************************************************************************!*\
  !*** ./shared/shared-guards/new-password-guard/create-new-password.guard.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateNewPasswordGuard": () => (/* binding */ CreateNewPasswordGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);


class CreateNewPasswordGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        const auth = localStorage.getItem('newPass');
        if (auth) {
            return true;
        }
        else {
            this.router.navigate(['auth', 'sign-in']);
            return false;
        }
    }
}
CreateNewPasswordGuard.ɵfac = function CreateNewPasswordGuard_Factory(t) { return new (t || CreateNewPasswordGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
CreateNewPasswordGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CreateNewPasswordGuard, factory: CreateNewPasswordGuard.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=projects_connect_src_app_Pages_AuthPage_auth-page_module_ts.js.map