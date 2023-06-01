"use strict";
(self["webpackChunknew_connect_v3"] = self["webpackChunknew_connect_v3"] || []).push([["projects_connect_src_app_Pages_ConnectModules_connect-pages_shipping-label-page_shipping-labe-96b9db"],{

/***/ 18625:
/*!**************************************************************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/ConnectModules/connect-pages/shipping-label-page/shipping-label-routing.module.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShippingLabelRoutingModule": () => (/* binding */ ShippingLabelRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _shipping_label_shipping_label_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipping-label/shipping-label.component */ 3897);
/* harmony import */ var _Resolvers_Shipping_Label_shipping_label_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Resolvers/Shipping-Label/shipping-label.resolver */ 10910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [
    {
        path: '',
        component: _shipping_label_shipping_label_component__WEBPACK_IMPORTED_MODULE_0__.ShippingLabelComponent,
        resolve: {
            ChargedOrders: _Resolvers_Shipping_Label_shipping_label_resolver__WEBPACK_IMPORTED_MODULE_1__.ShippingLabelResolver
        }
    }
];
class ShippingLabelRoutingModule {
}
ShippingLabelRoutingModule.ɵfac = function ShippingLabelRoutingModule_Factory(t) { return new (t || ShippingLabelRoutingModule)(); };
ShippingLabelRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ShippingLabelRoutingModule });
ShippingLabelRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ShippingLabelRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 10985:
/*!******************************************************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/ConnectModules/connect-pages/shipping-label-page/shipping-label.module.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShippingLabelModule": () => (/* binding */ ShippingLabelModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shipping_label_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipping-label-routing.module */ 18625);
/* harmony import */ var _shipping_label_shipping_label_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipping-label/shipping-label.component */ 3897);
/* harmony import */ var _shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../shared/shared-modules/angular-material.module */ 20793);
/* harmony import */ var _shared_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../shared/shared-components/shared-components.module */ 83442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);






class ShippingLabelModule {
}
ShippingLabelModule.ɵfac = function ShippingLabelModule_Factory(t) { return new (t || ShippingLabelModule)(); };
ShippingLabelModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ShippingLabelModule });
ShippingLabelModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _shipping_label_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShippingLabelRoutingModule,
            _shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_2__.AngularMaterialModule,
            _shared_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_3__.SharedComponentsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ShippingLabelModule, { declarations: [_shipping_label_shipping_label_component__WEBPACK_IMPORTED_MODULE_1__.ShippingLabelComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _shipping_label_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShippingLabelRoutingModule,
        _shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_2__.AngularMaterialModule,
        _shared_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_3__.SharedComponentsModule] }); })();


/***/ }),

/***/ 3897:
/*!************************************************************************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/ConnectModules/connect-pages/shipping-label-page/shipping-label/shipping-label.component.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShippingLabelComponent": () => (/* binding */ ShippingLabelComponent)
/* harmony export */ });
/* harmony import */ var _shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-enums/ResponseCodeEnum */ 31580);
/* harmony import */ var _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../Models/Enums/RequestTypes/RequestTypes */ 20987);
/* harmony import */ var _shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-enums/ServiceNameEnum */ 4946);
/* harmony import */ var shared_shared_static_data_SubOrderType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/shared-static-data/SubOrderType */ 43337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _Services_ShippingLabelService_shipping_label_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../Services/ShippingLabelService/shipping-label.service */ 13893);
/* harmony import */ var shared_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/shared-services/toastr.service */ 55325);
/* harmony import */ var _shared_shared_services_download_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-services/download.service */ 84317);
/* harmony import */ var _Services_OrderServices_OrderListService_order_list_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../Services/OrderServices/OrderListService/order-list.service */ 86540);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _shared_shared_components_shared_forms_shipping_forms_shipping_forms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-components/shared-forms/shipping-forms/shipping-forms.component */ 99521);












class ShippingLabelComponent {
    /**
     * The Requirements For The Construction Of The Component
     * @param route For using activated route
     * @param shippingLabelService for using ShippingLabelService
     * @param toastService To show request notifications
     * @param downloadService for using DownloadService
     * @param orderListService
     */
    constructor(route, shippingLabelService, toastService, downloadService, orderListService) {
        this.route = route;
        this.shippingLabelService = shippingLabelService;
        this.toastService = toastService;
        this.downloadService = downloadService;
        this.orderListService = orderListService;
        this.shippingLabelUserData = {};
        this.shippingOBJ = { requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_1__.ERequestTypes.ADD, services: [] };
        this.downloadFile = { requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_1__.ERequestTypes.VIEW, services: [] };
    }
    /**
     * onInit get user data
     * @return void
     */
    ngOnInit() {
        this.getUserData();
        this.orderListService.clearSearchData();
    }
    /**
     * get user data
     * @return void
     */
    getUserData() {
        this.route.data.subscribe(res => {
            if (res.ChargedOrders.responsCode === _shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.OK) {
                this.shippingLabelUserData = res.ChargedOrders.data.VUsersCN[0];
            }
        });
    }
    /**
     * on submit add shipping label
     * @return void
     */
    submit(event) {
        this.shippingOBJ.services[0] = {
            serviceName: _shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_2__.ServiceNameEnum.ORDER_ADD_SHIPPING_LABEL,
            ConditionsAnded: false,
            columns: [],
            shippingLabelData: {
                name: event.fullName,
                city: event.city,
                countryCode: event.country,
                email: event.email,
                address: event.address,
                telephone: event.phone,
                stateOrProvinceCode: event.state,
                timeToShip: event.timeToShip,
                postalCode: event.zipCode,
            }
        };
        this.shippingLabelService.addShippingLabel(this.shippingOBJ).subscribe(res => {
            if (res.responsCode === _shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.OK) {
                this.orderId = res.reponses[0].data[0].orderID;
                this.toastService.addAlert('Added Successfully', 'Shipping Label', 'start');
            }
        });
    }
    /**
     * download files
     * @return void
     */
    onDownloadFle() {
        this.downloadFile.services[0] = {
            columns: [],
            ConditionsAnded: false,
            isPortable: false,
            orderID: this.orderId,
            serviceName: _shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_2__.ServiceNameEnum.DOWNLOAD_FILE,
            suborderEnum: shared_shared_static_data_SubOrderType__WEBPACK_IMPORTED_MODULE_3__.SubOrderType.MISC.value
        };
        this.shippingLabelService.onDownloadFle(this.downloadFile).subscribe(res => {
            this.downloadService.downLoadFile(res);
        });
    }
}
ShippingLabelComponent.ɵfac = function ShippingLabelComponent_Factory(t) { return new (t || ShippingLabelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_Services_ShippingLabelService_shipping_label_service__WEBPACK_IMPORTED_MODULE_4__.ShippingLabelService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](shared_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_shared_services_download_service__WEBPACK_IMPORTED_MODULE_6__.DownloadService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_Services_OrderServices_OrderListService_order_list_service__WEBPACK_IMPORTED_MODULE_7__.OrderListService)); };
ShippingLabelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ShippingLabelComponent, selectors: [["app-shipping-label"]], decls: 5, vars: 2, consts: [[1, "container"], [1, "row", "justify-content-center", "h-100"], [1, "example-card", "mt-0", "animate__animated", "animate__fadeIn", 2, "margin-bottom", "110px"], [3, "shippingLabelUserData", "orderId", "shippingInOBJ", "downloadFile"]], template: function ShippingLabelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "app-shipping-forms", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("shippingInOBJ", function ShippingLabelComponent_Template_app_shipping_forms_shippingInOBJ_4_listener($event) { return ctx.submit($event); })("downloadFile", function ShippingLabelComponent_Template_app_shipping_forms_downloadFile_4_listener() { return ctx.onDownloadFle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("shippingLabelUserData", ctx.shippingLabelUserData)("orderId", ctx.orderId);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _shared_shared_components_shared_forms_shipping_forms_shipping_forms_component__WEBPACK_IMPORTED_MODULE_8__.ShippingFormsComponent], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n.example-card[_ngcontent-%COMP%] {\n  box-shadow: 3px 6px 10px 0px rgb(247 239 233), -3px -3px 10px 0px rgb(243 233 225);\n  padding: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoaXBwaW5nLWxhYmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrRkFBa0Y7RUFDbEYsYUFBYTtBQUNmIiwiZmlsZSI6InNoaXBwaW5nLWxhYmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmV4YW1wbGUtY2FyZCB7XG4gIGJveC1zaGFkb3c6IDNweCA2cHggMTBweCAwcHggcmdiKDI0NyAyMzkgMjMzKSwgLTNweCAtM3B4IDEwcHggMHB4IHJnYigyNDMgMjMzIDIyNSk7XG4gIHBhZGRpbmc6IDQwcHg7XG59XG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=projects_connect_src_app_Pages_ConnectModules_connect-pages_shipping-label-page_shipping-labe-96b9db.js.map