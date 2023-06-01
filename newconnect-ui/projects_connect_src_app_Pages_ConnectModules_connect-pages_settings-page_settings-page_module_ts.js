"use strict";
(self["webpackChunknew_connect_v3"] = self["webpackChunknew_connect_v3"] || []).push([["projects_connect_src_app_Pages_ConnectModules_connect-pages_settings-page_settings-page_module_ts"],{

/***/ 45620:
/*!****************************************************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/ConnectModules/connect-pages/settings-page/setting/setting.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingComponent": () => (/* binding */ SettingComponent)
/* harmony export */ });
/* harmony import */ var _shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-enums/ResponseCodeEnum */ 31580);
/* harmony import */ var _shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-enums/ServiceNameEnum */ 4946);
/* harmony import */ var _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Models/Enums/RequestTypes/RequestTypes */ 20987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _Services_EditProfile_edit_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Services/EditProfile/edit-service.service */ 23499);
/* harmony import */ var _shared_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-services/toastr.service */ 55325);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _shared_shared_components_shared_forms_Edit_Profile_form_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-components/shared-forms/Edit-Profile-form/edit-profile/edit-profile.component */ 93605);
/* harmony import */ var _shared_shared_components_suborder_prices_suborder_prices_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-components/suborder-prices/suborder-prices.component */ 77797);










class SettingComponent {
    /**
     * The Requirements For The Construction Of The Component
     * @param route For using activated route
     * @param service for EditServiceService
     * @param toastService To show request notifications
     */
    constructor(service, toastService, route, router) {
        this.service = service;
        this.toastService = toastService;
        this.route = route;
        this.router = router;
    }
    /**
     * onInit get user data
     * @return void
     */
    ngOnInit() {
        this.getUserData();
    }
    /**
     * get user data
     * @return void
     */
    getUserData() {
        this.route.data.subscribe(res => {
            if (res.ChargedOrders.responsCode === _shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.OK) {
                this.settingFormData = res.ChargedOrders.data.VUsersCN[0];
            }
        });
    }
    /**
     * onSubmit edit client data
     * @param event edit form object
     * @return void
     */
    onSubmit(event) {
        var _a;
        const expiration = new Date(event.year, event.month, 2);
        this.editFormOBJ = {
            userCNEmails: event.Emails,
            userCNTelecoms: event.phones,
            userCNAdresses: event.address,
            ConditionsAnded: false,
            city: event.city,
            countryEnumId: event.countryEnumId,
            fName: event.fName,
            lName: event.lName,
            columns: [],
            isPortableVersion: event.portalVersion,
            rcivMail: event.rcivMail,
            serviceName: _shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_1__.ServiceNameEnum.REGISTER_REQUEST,
            stateEnumId: event.stateEnumId,
            userCNEnumId: event.userType,
            userCNId: event.userCNId,
            zipCode: event.zipCode
        };
        if (event.creditCardNum || event.paymentType === 1000) {
            this.editFormOBJ.userCNCreditCards = [{
                    creditCardEnumId: event.paymentType,
                    creditCard: (_a = event.creditCardNum) !== null && _a !== void 0 ? _a : '',
                    creditCardTimeExp: expiration.getTime() ? expiration.getTime() / 1000 : 0
                }];
        }
        this.service.EditProfile({ services: [this.editFormOBJ], requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_2__.ERequestTypes.UPDATE }).subscribe(res => {
            if (res.responsCode === _shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.OK) {
                localStorage.setItem('isPortableVersion', this.editFormOBJ.isPortableVersion.toString());
                localStorage.setItem('lName', this.editFormOBJ.lName);
                localStorage.setItem('fName', this.editFormOBJ.fName);
                localStorage.setItem('type', this.editFormOBJ.userCNEnumId.toString());
                this.toastService.updateAlert('Changed Successfully', 'Edit Profile', 'start');
                this.router.navigate(['connect-modules', 'View-Orders-page']);
            }
        });
    }
}
SettingComponent.ɵfac = function SettingComponent_Factory(t) { return new (t || SettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_Services_EditProfile_edit_service_service__WEBPACK_IMPORTED_MODULE_3__.EditServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router)); };
SettingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: SettingComponent, selectors: [["app-setting"]], decls: 11, vars: 2, consts: [[1, "container", 2, "margin-bottom", "120px", "padding-bottom", "40px"], [1, "row"], [1, "col-md-8", "col-sm-12"], [1, "example-card", "mb-5"], [3, "settingFormData", "registerInOBJ"], [1, "col-md-4", "col-sm-12"], [1, "example-card"], [3, "pricesSubOrder"]], template: function SettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "app-edit-profile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("registerInOBJ", function SettingComponent_Template_app_edit_profile_registerInOBJ_7_listener($event) { return ctx.onSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "app-suborder-prices", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("settingFormData", ctx.settingFormData);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pricesSubOrder", ctx.settingFormData);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _shared_shared_components_shared_forms_Edit_Profile_form_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_5__.EditProfileComponent, _shared_shared_components_suborder_prices_suborder_prices_component__WEBPACK_IMPORTED_MODULE_6__.SuborderPricesComponent], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n.example-card[_ngcontent-%COMP%] {\n  box-shadow: 3px 6px 10px 0px rgb(247 145 60 / 50%), -3px -3px 10px 0px rgb(247 145 60 / 50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDRGQUE0RjtBQUM5RiIsImZpbGUiOiJzZXR0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmV4YW1wbGUtY2FyZCB7XG4gIGJveC1zaGFkb3c6IDNweCA2cHggMTBweCAwcHggcmdiKDI0NyAxNDUgNjAgLyA1MCUpLCAtM3B4IC0zcHggMTBweCAwcHggcmdiKDI0NyAxNDUgNjAgLyA1MCUpO1xufVxuIl19 */"] });


/***/ }),

/***/ 66092:
/*!*******************************************************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/ConnectModules/connect-pages/settings-page/settings-page-routing.module.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting/setting.component */ 45620);
/* harmony import */ var _Resolvers_Shipping_Label_shipping_label_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Resolvers/Shipping-Label/shipping-label.resolver */ 10910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [
    {
        path: '',
        component: _setting_setting_component__WEBPACK_IMPORTED_MODULE_0__.SettingComponent,
        resolve: {
            ChargedOrders: _Resolvers_Shipping_Label_shipping_label_resolver__WEBPACK_IMPORTED_MODULE_1__.ShippingLabelResolver
        },
    }
];
class SettingsPageRoutingModule {
}
SettingsPageRoutingModule.ɵfac = function SettingsPageRoutingModule_Factory(t) { return new (t || SettingsPageRoutingModule)(); };
SettingsPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SettingsPageRoutingModule });
SettingsPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SettingsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 47075:
/*!***********************************************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/ConnectModules/connect-pages/settings-page/settings-page.module.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _settings_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-page-routing.module */ 66092);
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting/setting.component */ 45620);
/* harmony import */ var _shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../shared/shared-modules/angular-material.module */ 20793);
/* harmony import */ var _shared_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../shared/shared-components/shared-components.module */ 83442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);






class SettingsPageModule {
}
SettingsPageModule.ɵfac = function SettingsPageModule_Factory(t) { return new (t || SettingsPageModule)(); };
SettingsPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SettingsPageModule });
SettingsPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _settings_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule,
            _shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_2__.AngularMaterialModule,
            _shared_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_3__.SharedComponentsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SettingsPageModule, { declarations: [_setting_setting_component__WEBPACK_IMPORTED_MODULE_1__.SettingComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _settings_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule,
        _shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_2__.AngularMaterialModule,
        _shared_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_3__.SharedComponentsModule] }); })();


/***/ }),

/***/ 23499:
/*!*******************************************************************************!*\
  !*** ./projects/connect/src/app/Services/EditProfile/edit-service.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditServiceService": () => (/* binding */ EditServiceService)
/* harmony export */ });
/* harmony import */ var shared_API_APIName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/API/APIName */ 93645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _DataService_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataService/data.service */ 16637);



class EditServiceService {
    /**
     * The Requirements For The Construction Of The service
     * @param dataService for managing Http methods
     */
    constructor(dataService) {
        this.dataService = dataService;
    }
    /**
     * edit profile
     * @param data edit profile object
     */
    EditProfile(data) {
        return this.dataService.post(shared_API_APIName__WEBPACK_IMPORTED_MODULE_0__.APIName.editprofile, data);
    }
}
EditServiceService.ɵfac = function EditServiceService_Factory(t) { return new (t || EditServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_DataService_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService)); };
EditServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EditServiceService, factory: EditServiceService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=projects_connect_src_app_Pages_ConnectModules_connect-pages_settings-page_settings-page_module_ts.js.map