"use strict";
(self["webpackChunknew_connect_v3"] = self["webpackChunknew_connect_v3"] || []).push([["projects_connect_src_app_Pages_ConnectModules_connect-pages_add-order-pages_add-order-pages_m-420d4f"],{

/***/ 34697:
/*!***********************************************************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/ConnectModules/connect-pages/add-order-pages/add-order-pages-routing.module.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddOrderPagesRoutingModule": () => (/* binding */ AddOrderPagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var projects_connect_src_app_Resolvers_Doctor_List_doctor_list_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/connect/src/app/Resolvers/Doctor-List/doctor-list.resolver */ 61721);
/* harmony import */ var projects_connect_src_app_Resolvers_Order_Details_order_details_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/connect/src/app/Resolvers/Order-Details/order-details.resolver */ 6551);
/* harmony import */ var _add_order_add_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-order/add-order.component */ 76832);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [
    {
        path: '',
        component: _add_order_add_order_component__WEBPACK_IMPORTED_MODULE_2__.AddOrderComponent,
        data: { breadcrumbs: ['Add New Order'] },
        resolve: {
            DoctorList: projects_connect_src_app_Resolvers_Doctor_List_doctor_list_resolver__WEBPACK_IMPORTED_MODULE_0__.DoctorListResolver
        }
    },
    {
        path: ':orderId',
        component: _add_order_add_order_component__WEBPACK_IMPORTED_MODULE_2__.AddOrderComponent,
        data: { breadcrumbs: ['Add To Order'] },
        resolve: {
            orderDetails: projects_connect_src_app_Resolvers_Order_Details_order_details_resolver__WEBPACK_IMPORTED_MODULE_1__.OrderDetailsResolver
        }
    }
];
class AddOrderPagesRoutingModule {
}
AddOrderPagesRoutingModule.ɵfac = function AddOrderPagesRoutingModule_Factory(t) { return new (t || AddOrderPagesRoutingModule)(); };
AddOrderPagesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AddOrderPagesRoutingModule });
AddOrderPagesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        projects_connect_src_app_Resolvers_Order_Details_order_details_resolver__WEBPACK_IMPORTED_MODULE_1__.OrderDetailsResolver
    ], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AddOrderPagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 71756:
/*!***************************************************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/ConnectModules/connect-pages/add-order-pages/add-order-pages.module.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddOrderPagesModule": () => (/* binding */ AddOrderPagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _add_order_pages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-order-pages-routing.module */ 34697);
/* harmony import */ var shared_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/shared-components/shared-components.module */ 83442);
/* harmony import */ var _add_order_add_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-order/add-order.component */ 76832);
/* harmony import */ var shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/shared-modules/angular-material.module */ 20793);
/* harmony import */ var projects_connect_src_app_Resolvers_Doctor_List_doctor_list_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/connect/src/app/Resolvers/Doctor-List/doctor-list.resolver */ 61721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);







class AddOrderPagesModule {
}
AddOrderPagesModule.ɵfac = function AddOrderPagesModule_Factory(t) { return new (t || AddOrderPagesModule)(); };
AddOrderPagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AddOrderPagesModule });
AddOrderPagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        projects_connect_src_app_Resolvers_Doctor_List_doctor_list_resolver__WEBPACK_IMPORTED_MODULE_4__.DoctorListResolver
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _add_order_pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddOrderPagesRoutingModule,
            shared_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_1__.SharedComponentsModule,
            shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_3__.AngularMaterialModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AddOrderPagesModule, { declarations: [_add_order_add_order_component__WEBPACK_IMPORTED_MODULE_2__.AddOrderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _add_order_pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddOrderPagesRoutingModule,
        shared_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_1__.SharedComponentsModule,
        shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_3__.AngularMaterialModule] }); })();


/***/ }),

/***/ 76832:
/*!**********************************************************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/ConnectModules/connect-pages/add-order-pages/add-order/add-order.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddOrderComponent": () => (/* binding */ AddOrderComponent)
/* harmony export */ });
/* harmony import */ var projects_connect_src_app_Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/connect/src/app/Models/Enums/RequestTypes/RequestTypes */ 20987);
/* harmony import */ var shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/shared-enums/ServiceNameEnum */ 4946);
/* harmony import */ var shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/shared-enums/ResponseCodeEnum */ 31580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var _shared_shared_static_data_SubOrderType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-static-data/SubOrderType */ 43337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_shared_services_order_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-services/order-shared.service */ 39026);
/* harmony import */ var projects_connect_src_app_Services_OrderServices_AddOrderService_add_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/connect/src/app/Services/OrderServices/AddOrderService/add-order.service */ 70235);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var shared_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/shared-services/toastr.service */ 55325);
/* harmony import */ var projects_connect_src_app_Services_UploadService_upload_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/connect/src/app/Services/UploadService/upload.service */ 71273);
/* harmony import */ var projects_connect_src_app_Services_OrderServices_OrderListService_order_list_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! projects/connect/src/app/Services/OrderServices/OrderListService/order-list.service */ 86540);
/* harmony import */ var shared_shared_services_upload_progress_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/shared-services/upload-progress.service */ 43479);
/* harmony import */ var shared_shared_services_generate_order_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/shared-services/generate-order-data.service */ 28348);
/* harmony import */ var _shared_shared_services_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-services/date.service */ 67652);
/* harmony import */ var _Services_OrderServices_actions_actions_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../Services/OrderServices/actions/actions.service */ 83615);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _shared_shared_components_shared_forms_add_order_form_add_order_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-components/shared-forms/add-order-form/add-order-form.component */ 73568);
/* harmony import */ var _shared_shared_components_shared_forms_select_orders_select_orders_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-components/shared-forms/select-orders/select-orders.component */ 51088);





















const _c0 = ["orderform"];
function AddOrderComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "app-select-orders", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("isModelScanSG", ctx_r1.isModelScanSG)("isModelScanConv", ctx_r1.isModelScanConv)("restype", ctx_r1.restype)("isGFMRBoth", ctx_r1.isGMRFBothArchOfInterest)("orderCost", ctx_r1.orderCost);
} }
/**
 * Copyright (c) 3ddx
 *
 * @summary Add Order Form Component
 * @author Basel Elsawy
 *
 * Created at     : 2021
 * Last modified  : 2021-11-28
 */
class AddOrderComponent {
    /**
     * The Requirements For The Construction Of The Component
     * @param route For using ActivatedRoute
     * @param orderService for using order shared service
     * @param addOrderService for using add order service
     * @param toastService for using toaster service
     * @param uploadService for using upload service
     * @param orderServices for using order list service
     * @param uploadProgressService for using upload progress service
     * @param generateOrderDataService for using generate order service
     * @param router for routing
     * @param dateService
     * @param orderListService
     */
    constructor(orderService, addOrderService, route, toastService, uploadService, orderServices, uploadProgressService, generateOrderDataService, router, dateService, orderListService, actionsService) {
        this.orderService = orderService;
        this.addOrderService = addOrderService;
        this.route = route;
        this.toastService = toastService;
        this.uploadService = uploadService;
        this.orderServices = orderServices;
        this.uploadProgressService = uploadProgressService;
        this.generateOrderDataService = generateOrderDataService;
        this.router = router;
        this.dateService = dateService;
        this.orderListService = orderListService;
        this.actionsService = actionsService;
        this.isSelectOrder = false;
        this.orderData = {};
        this.buttonOrders = {
            conversion: false,
            report: false,
            restoration: false,
            treatmentPlan: false,
            surgicalGuide: false
        };
        this.isGMRFBothArchOfInterest = false;
        this.isModelScanConv = false;
        this.isModelScanSG = false;
    }
    ngOnInit() {
        this.getDoctorList();
        this.getOrderId();
    }
    /**
     * get order's id and details
     * @return void
     */
    getOrderId() {
        this.route.params.subscribe(res => {
            this.orderId = res.orderId;
            if (this.orderId) {
                this.getOrderDetails();
            }
        });
    }
    /**
     * get order details
     * @return void
     */
    getOrderDetails() {
        this.route.data.subscribe(res => {
            if (res.orderDetails) {
                this.orderDetails = res.orderDetails.data.VIEW_ORDER_ALL;
                if (this.orderDetails[0].conversionID) {
                    this.buttonOrders.conversion = true;
                }
                if (this.orderDetails[0].reportID) {
                    this.buttonOrders.report = true;
                }
                if (this.orderDetails[0].restorationID) {
                    this.buttonOrders.restoration = true;
                }
                if (this.orderDetails[0].treatmentPlanID) {
                    this.buttonOrders.treatmentPlan = true;
                }
                if (this.orderDetails[0].surgicalGuideID) {
                    this.buttonOrders.surgicalGuide = true;
                }
            }
        });
    }
    /**
     * get doctors list
     * @return void
     */
    getDoctorList() {
        this.route.data.subscribe(doctor => {
            if (doctor.DoctorList) {
                this.doctors = doctor.DoctorList.reponses[0].data[0].scanCenterDoctors;
            }
        });
    }
    ;
    ngDoCheck() {
        this.isSelectOrder = (this.orderService.buttons.conversion ||
            this.orderService.buttons.treatmentPlan ||
            this.orderService.buttons.surgicalGuide ||
            this.orderService.buttons.restorations ||
            this.orderService.buttons.radiologyReport ||
            this.orderService.buttons.teethChart) && this.orderCost != null && ((this.orderform.stepper.selectedIndex > 1 && !this.orderDetails) || (this.orderform.stepper.selectedIndex >= 1 && this.orderDetails));
    }
    /**
     * check software
     * @param software order's data
     * @return number
     */
    checkSoftware(software) {
        var _a, _b, _c;
        if (software.conversionForm) {
            return (_a = software.conversionForm) === null || _a === void 0 ? void 0 : _a.software;
        }
        else if (software.treatmentPlanForm) {
            return (_b = software.treatmentPlanForm) === null || _b === void 0 ? void 0 : _b.software;
        }
        else if (software.surgicalGuideForm) {
            return (_c = software.surgicalGuideForm) === null || _c === void 0 ? void 0 : _c.software;
        }
        else {
            return 5;
        }
    }
    ;
    /**
     * check portal
     * @param portable order's data
     * @return boolean
     */
    checkPortable(portable) {
        let isPortable;
        if (portable.conversionForm) {
            isPortable = portable.conversionForm.portableVersion;
        }
        else if (portable.treatmentPlanForm) {
            isPortable = portable.treatmentPlanForm.portableVersion;
        }
        return isPortable === 1 ? false : true;
    }
    ;
    /**
     * check model scan
     * @param event order's data
     * @return boolean
     */
    checkModelScan(event) {
        let modelScan;
        if (event === null || event === void 0 ? void 0 : event.conversionForm) {
            modelScan = event.conversionForm.modelScan;
            return modelScan === 0 ? false : true;
        }
        else {
            return modelScan = false;
        }
    }
    /**
     * get user currency
     * @return number
     */
    getCurrency() {
        const currency = localStorage.getItem('userCurrencySymbol');
        if (currency === '$') {
            return 0;
        }
        else if (currency === '€') {
            return 1;
        }
        else {
            return 2;
        }
    }
    /**
     * on reload get order's data
     * @return void
     */
    onReloadOrder() {
        this.orderServices.getOrderById(this.orderId).subscribe(res => {
            if (res.responsCode === shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_2__.ResponseCodeEnum.OK) {
                this.orderData = this.generateOrderDataService.onGenerateArr(res.data.VIEW_ORDER_ALL)[0];
            }
        });
    }
    /**
     * create order general comment
     * @param event submitted order OBJ
     * @return string
     */
    createGeneralComment(event) {
        var _a, _b, _c, _d;
        let generalComment = '';
        if ((_a = event.conversionForm) === null || _a === void 0 ? void 0 : _a.generalComment) {
            generalComment = generalComment + `\nConversion: ${event.conversionForm.generalComment}`;
        }
        if ((_b = event.treatmentPlanForm) === null || _b === void 0 ? void 0 : _b.generalComment) {
            generalComment = generalComment + `\nTP: ${event.treatmentPlanForm.generalComment}`;
        }
        if ((_c = event.surgicalGuideForm) === null || _c === void 0 ? void 0 : _c.generalComment) {
            generalComment = generalComment + `\nSurgical Guide: ${event.surgicalGuideForm.generalComment}`;
        }
        if ((_d = event.restorationForm) === null || _d === void 0 ? void 0 : _d.generalComment) {
            generalComment = generalComment + `\nRestoration: ${event.restorationForm.generalComment}`;
        }
        return generalComment;
    }
    /**
     * checkExpress guide software
     * @return number
     */
    checkExpress(order) {
        if ((order.treatmentPlanForm || order.surgicalGuideForm) &&
            ((this.buttonOrders.conversion && this.orderDetails[0].softwareEnumId === 3) || !this.buttonOrders.conversion)) {
            return 1;
        }
        else {
            return 0;
        }
    }
    /**
     * submit adding order
     * @param event order's data
     * @return void
     */
    onSubmit(event) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        let generalComments = '';
        let orderService = {
            ConditionsAnded: false,
            columns: [
                'orderId',
                'orderCommonId',
                'orderEnum',
                'patientName',
                'operatorId',
                'doctorLastName',
                'scanningCenterFirstName',
                'isLaserScan',
                'orderEnumId',
                'statusId',
                'hasIntraoralScans',
                'clientToBeBilled',
                'portableFileName',
                'restorationType'
            ],
            abutmentSites: this.orderService.teethChart.abutmentSites,
            clientComment: this.createGeneralComment(event),
            crownSites: this.orderService.teethChart.crownSites,
            implantSites: this.orderService.teethChart.implantSites,
            missingTeeth: this.orderService.teethChart.missingTeeth,
            teethToBeExtracted: this.orderService.teethChart.teethToBeExtracted,
            isPortable: this.checkPortable(event),
            modelScan: this.checkModelScan(event),
            patientName: event.basicInfoFormGroup.patientName,
            scanningCenterId: this.getScanningCenterId(),
            serviceName: shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_1__.ServiceNameEnum.VIEW_ORDER_ALL,
            softwareEnumId: this.checkSoftware(event),
            isExpress: this.checkExpress(event),
            doctorId: this.getDocotrId(event),
            timeSurgery: event.surgicalGuideForm ? ((_a = this.dateService.timeStampToEST(event.surgicalGuideForm.scheduledSurgeryData, event.surgicalGuideForm.scheduledSurgeryTime)) === null || _a === void 0 ? void 0 : _a.getTime()) / 1000 : 0,
            formatEnumId: event.conversionForm ? event.conversionForm.format : this.getFormatId(event)
        };
        if (this.orderId) {
            orderService.orderId = this.orderId;
            orderService.doctorId = this.orderDetails.doctorId;
            orderService.scanningCenterId = this.orderDetails.scanningCenterId;
        }
        let orderServiceObj = Object.assign({}, orderService);
        if (event.conversionForm) {
            let conversionData = {
                currency: this.getCurrency(),
                clientToBeBilledId: event.basicInfoFormGroup.billing === 0 ? Number(localStorage.getItem('userCNId')) : event.basicInfoFormGroup.doctor,
                separateDoubleArchOrder: (event.conversionForm.mandible !== 20 && event.conversionForm.maxilla !== 20 && event.conversionForm.modelScan !== 1) ? event.conversionForm.separateDoubleArchOrder : true,
                softwareFormat: [],
                isRush: false,
                mandibleConversionEnumId: event.conversionForm.mandible,
                mandibleSegmentationEnumId: event.conversionForm.typeMandible,
                maxillaConversionEnumId: event.conversionForm.maxilla,
                maxillaSegmentationEnumId: event.conversionForm.typeMaxilla
            };
            orderServiceObj = Object.assign(Object.assign({}, orderServiceObj), {
                conversionData: conversionData
            });
        }
        const uploadRest = ((_b = event.restorationForm) === null || _b === void 0 ? void 0 : _b.lowerFile) && ((_c = event.restorationForm) === null || _c === void 0 ? void 0 : _c.upperFile) && ((_d = event.restorationForm) === null || _d === void 0 ? void 0 : _d.biteFile);
        if (((_e = event.surgicalGuideForm) === null || _e === void 0 ? void 0 : _e.guided) === 1 || ((_f = event.conversionForm) === null || _f === void 0 ? void 0 : _f.modelScan) === 1 || uploadRest) {
            let applianceData = {
                applinceDestenationAddress: "USA",
                clientToBeBilledId: event.basicInfoFormGroup.billing === 0 ? Number(localStorage.getItem('userCNId')) : event.basicInfoFormGroup.doctor,
                currency: this.getCurrency(),
                hasIntraoralScans: ((_g = event.surgicalGuideForm) === null || _g === void 0 ? void 0 : _g.intraoralScan) === 2 || uploadRest || ((_h = event.conversionForm) === null || _h === void 0 ? void 0 : _h.oral) === 2 ? true : false,
                isForMandible: false,
                isForMaxilla: false,
                isLaserScan: ((_j = event.conversionForm) === null || _j === void 0 ? void 0 : _j.modelScan) === 1 || ((_k = event.surgicalGuideForm) === null || _k === void 0 ? void 0 : _k.guided) === 1 || uploadRest ? true : false,
                isPartiallyEdentulous: false,
                isRush: false,
                isTotallyEdentulous: false,
                sendPVSImpression: false,
                softwareFormat: []
            };
            orderServiceObj = Object.assign(Object.assign({}, orderServiceObj), {
                applianceData: applianceData
            });
        }
        if (event.treatmentPlanForm) {
            let treatmentPlanData = {
                currency: this.getCurrency(),
                isReview: event.treatmentPlanForm.isReviewTP,
                clientToBeBilledId: event.basicInfoFormGroup.billing === 0 ? Number(localStorage.getItem('userCNId')) : event.basicInfoFormGroup.doctor,
                prosthesis: event.treatmentPlanForm.prosthesisType,
                isRush: false,
                softwareFormat: [],
                surgicalProcedures: event.treatmentPlanForm.surgicalPlan,
                typeofImplant: event.treatmentPlanForm.implantType,
            };
            orderServiceObj = Object.assign(Object.assign({}, orderServiceObj), {
                treatmentPlanData: treatmentPlanData
            });
        }
        if (event.surgicalGuideForm) {
            let surgicalguideData = {
                clientToBeBilledId: event.basicInfoFormGroup.billing === 0 ? Number(localStorage.getItem('userCNId')) : event.basicInfoFormGroup.doctor,
                currency: this.getCurrency(),
                fixationFunctionality: event.surgicalGuideForm.fixationPinsDrills,
                ordersGuideKitEnumId: event.surgicalGuideForm.typeofGuide != 5 ? event.surgicalGuideForm.typeofGuide : event.surgicalGuideForm.guidedSurgeryKitType,
                rushIfPossible: event.surgicalGuideForm.rush === 1 ? false : true,
                softwareFormat: [],
                sleeveDiameter: 0,
                timeSurgery: event.surgicalGuideForm ? ((_l = this.dateService.timeStampToEST(event.surgicalGuideForm.scheduledSurgeryData, event.surgicalGuideForm.scheduledSurgeryTime)) === null || _l === void 0 ? void 0 : _l.getTime()) / 1000 : 0,
                ordersGuideSoftwareSupportEnum: {
                    ordersGuideSupportEnumId: event.surgicalGuideForm.guided,
                    ordersSoftwareEnumId: event.surgicalGuideForm.software
                },
                selectedExtraComponents: event.surgicalGuideForm.extracomponents
                    ? event.surgicalGuideForm.extracomponents.map((e) => ({ id: +e, comment: event.surgicalGuideForm.otherDesc }))
                    : []
            };
            orderServiceObj = Object.assign(Object.assign({}, orderServiceObj), {
                surgicalguideData: surgicalguideData
            });
        }
        if (event.restorationForm) {
            let restorationData = {
                softwareFormat: [],
                restorationType: event.restorationForm.restType,
                shadeSys: event.restorationForm.shade,
                shadeValue: event.restorationForm.teeth,
                shadeSysOther: event.restorationForm.shadeOther,
                abutmentMaterial: event.restorationForm.abutment,
                crownMaterial: event.restorationForm.crown,
                isPouring: event.restorationForm.pouring,
                isRushRes: event.restorationForm.isRush,
                retentionType: event.restorationForm.retentionType,
                hasIntraOralScan: event.restorationForm.oral == 1 ? false : true,
                archOfInterest: event.restorationForm.archOfInterest,
                chairSideAssistance: event.restorationForm.chairSideAssistance,
                userCNComment: '',
                toBeBilled: event.basicInfoFormGroup.billing === 0 ? Number(localStorage.getItem('userCNId')) : event.basicInfoFormGroup.doctor
            };
            if (event.restorationForm.retentionTypeSpecify) {
                restorationData.retentionTypeComment = event.restorationForm.retentionTypeSpecify;
            }
            if (event.restorationForm.abutmentSpecify) {
                restorationData.abutmentMaterialComment = event.restorationForm.abutmentSpecify;
            }
            orderServiceObj = Object.assign(Object.assign({}, orderServiceObj), {
                restorationData: restorationData
            });
        }
        if (event.radiologyReportForm) {
            let reportData = {
                isImplantPlanned: event.radiologyReportForm.implantPlanned == 1 ? false : true,
                ReportSmallFieldOfView: false,
                currency: this.getCurrency(),
                softwareFormat: [],
                isRuleOutPathology: event.radiologyReportForm.ruleOutPathology == 1 ? false : true,
                isAirWayEvaluation: event.radiologyReportForm.airWayEvaluation == 1 ? false : true,
                isEvaluateTMJ: event.radiologyReportForm.tmjevaluation == 1 ? false : true,
                isEvaluateSinus: event.radiologyReportForm.sinusEvaluation == 1 ? false : true,
                isEvaluateExistingImplant: event.radiologyReportForm.evaluateExistingImplant == 1 ? false : true,
                isRush: event.radiologyReportForm.rushCase == 1 ? false : true,
                relevantHistory: event.radiologyReportForm.relevant,
                genderEnumId: event.basicInfoFormGroup.gender,
                basicReport: event.radiologyReportForm.BasicReport == 1 ? false : true,
                userCNComment: event.radiologyReportForm.generalComment ? event.radiologyReportForm.generalComment : '',
                DOB: (((_m = this.dateService.timeStampToEST(event.radiologyReportForm.birthdate)) === null || _m === void 0 ? void 0 : _m.getTime()) / 1000).toString(),
                dateImageAcquisition: ((_o = this.dateService.timeStampToEST(event.radiologyReportForm.imagedate)) === null || _o === void 0 ? void 0 : _o.getTime()) / 1000,
                clientToBeBilledId: event.basicInfoFormGroup.billing === 0 ? Number(localStorage.getItem('userCNId')) : event.basicInfoFormGroup.doctor
            };
            orderServiceObj = Object.assign(Object.assign({}, orderServiceObj), {
                reportData: reportData
            });
        }
        let apiData = { services: [orderServiceObj], requestType: projects_connect_src_app_Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_0__.ERequestTypes.ADD };
        this.addOrderService.addOrder(apiData).subscribe(res => {
            var _a, _b, _c, _d, _e, _f, _g;
            if (res.responsCode === shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_2__.ResponseCodeEnum.OK) {
                const orderArr = this.generateOrderDataService.onGenerateArrUpload(res.data.VIEW_ORDER_ALL);
                this.toastService.addAlert('Order added successfully', 'Add Order', 'start');
                if (event.srcResult && (this.orderService.buttons.conversion || this.orderService.buttons.treatmentPlan || this.orderService.buttons.radiologyReport)) {
                    this.orderServices.uploadingId.add(JSON.stringify({ id: res.data.VIEW_ORDER_ALL[0].orderId, type: _shared_shared_static_data_SubOrderType__WEBPACK_IMPORTED_MODULE_3__.SubOrderType.CONVERSION.uploadType }));
                    let uploadFormData = this.GenerateOrderFormData(event.srcResult, orderArr[0].uploadType, res.data.VIEW_ORDER_ALL[0].orderId, (_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.VIEW_ORDER_ALL[1]) === null || _b === void 0 ? void 0 : _b.orderId);
                    let currentIndex = ++this.uploadService.index;
                    let subscribeUpload = this.uploadService.onUploadFile(uploadFormData, Number(localStorage.getItem('userCNId')), res.data.VIEW_ORDER_ALL[0].orderId, orderArr[0].orderStatus, event.srcResult.name, (_c = res.data.VIEW_ORDER_ALL[1]) === null || _c === void 0 ? void 0 : _c.orderId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)((ev) => {
                        if (ev.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpEventType.UploadProgress) {
                            this.uploadService.uploadDataNew[currentIndex].calculatedTime =
                                this.uploadProgressService.calculateTimeRemain(ev.loaded, event.srcResult.size);
                            this.uploadService.uploadDataNew[currentIndex].progress =
                                this.uploadProgressService.returnProgress(ev.loaded, ev.total);
                        }
                        else if (ev instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpResponse) {
                            if (ev.body.responsCode === shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_2__.ResponseCodeEnum.OK) {
                                this.toastService.addAlert('Uploaded Successfully', 'Upload File', 'start');
                                this.orderServices.onReload();
                                this.orderServices.removeUploadId(res.data.VIEW_ORDER_ALL[0].orderId, _shared_shared_static_data_SubOrderType__WEBPACK_IMPORTED_MODULE_3__.SubOrderType.CONVERSION.uploadType);
                            }
                        }
                    })).subscribe(res => { }, error => this.orderServices.removeUploadId(res.data.VIEW_ORDER_ALL[0].orderId, _shared_shared_static_data_SubOrderType__WEBPACK_IMPORTED_MODULE_3__.SubOrderType.CONVERSION.uploadType));
                    this.uploadService.uploadDataNew[currentIndex].subScribe = subscribeUpload;
                }
                if (this.orderService.buttons.restorations) {
                    if (event.restorationForm.upperFile || event.restorationForm.lowerFile || event.restorationForm.biteFile) {
                        this.orderServices.uploadingId.add(JSON.stringify({ id: res.data.VIEW_ORDER_ALL[0].orderId, type: _shared_shared_static_data_SubOrderType__WEBPACK_IMPORTED_MODULE_3__.SubOrderType.GFMR.uploadType }));
                    }
                    const orderData = orderArr[0].subOrders.find((e) => e.subOrderType.includes('Restoration'));
                    if (event.restorationForm.upperFile) {
                        const uploadFormData = this.GenerateOrderFormData(event.restorationForm.upperFile, (_d = orderData.subOrderStatus) === null || _d === void 0 ? void 0 : _d.uploadType, res.data.VIEW_ORDER_ALL[0].orderId, (_f = (_e = res.data) === null || _e === void 0 ? void 0 : _e.VIEW_ORDER_ALL[1]) === null || _f === void 0 ? void 0 : _f.orderId, "upper", false);
                        const currentIndex = ++this.uploadService.index;
                        const upperFileSub = this.uploadService.onUploadFile(uploadFormData, Number(localStorage.getItem('userCNId')), res.data.VIEW_ORDER_ALL[0].orderId, orderData.subOrderStatus, event.restorationForm.upperFile.name, (_g = res.data.VIEW_ORDER_ALL[1]) === null || _g === void 0 ? void 0 : _g.orderId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)((ev) => {
                            var _a, _b, _c;
                            if (ev.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpEventType.UploadProgress) {
                                this.uploadService.uploadDataNew[currentIndex].calculatedTime =
                                    this.uploadProgressService.calculateTimeRemain(ev.loaded, event.restorationForm.upperFile.size);
                                this.uploadService.uploadDataNew[currentIndex].progress =
                                    this.uploadProgressService.returnProgress(ev.loaded, ev.total);
                                this.uploadService.uploadDataNew[currentIndex].subScribe = upperFileSub;
                            }
                            else if (ev instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpResponse) {
                                if (ev.body.responsCode === shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_2__.ResponseCodeEnum.OK) {
                                    this.toastService.addAlert('Uploaded Successfully', 'Upload File', 'start');
                                    if (event.restorationForm.lowerFile) {
                                        let uploadFormData = this.GenerateOrderFormData(event.restorationForm.lowerFile, orderData.subOrderStatus.uploadType, res.data.VIEW_ORDER_ALL[0].orderId, (_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.VIEW_ORDER_ALL[1]) === null || _b === void 0 ? void 0 : _b.orderId, "lower", false);
                                        let currentIndex = ++this.uploadService.index;
                                        let lowerFileSub = this.uploadService.onUploadFile(uploadFormData, Number(localStorage.getItem('userCNId')), res.data.VIEW_ORDER_ALL[0].orderId, orderData.subOrderStatus, event.restorationForm.lowerFile.name, (_c = res.data.VIEW_ORDER_ALL[1]) === null || _c === void 0 ? void 0 : _c.orderId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)((ev) => {
                                            var _a, _b, _c;
                                            if (ev.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpEventType.UploadProgress) {
                                                this.uploadService.uploadDataNew[currentIndex].calculatedTime =
                                                    this.uploadProgressService.calculateTimeRemain(ev.loaded, event.restorationForm.lowerFile.size);
                                                this.uploadService.uploadDataNew[currentIndex].progress =
                                                    this.uploadProgressService.returnProgress(ev.loaded, ev.total);
                                                this.uploadService.uploadDataNew[currentIndex].subScribe = lowerFileSub;
                                            }
                                            else if (ev instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpResponse) {
                                                if (ev.body.responsCode === shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_2__.ResponseCodeEnum.OK) {
                                                    this.toastService.addAlert('Uploaded Successfully', 'Upload File', 'start');
                                                    if (event.restorationForm.biteFile) {
                                                        let uploadFormData = this.GenerateOrderFormData(event.restorationForm.biteFile, orderData.subOrderStatus.uploadType, res.data.VIEW_ORDER_ALL[0].orderId, (_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.VIEW_ORDER_ALL[1]) === null || _b === void 0 ? void 0 : _b.orderId, "bite", true);
                                                        let currentIndex = ++this.uploadService.index;
                                                        let biteFileSub = this.uploadService.onUploadFile(uploadFormData, Number(localStorage.getItem('userCNId')), res.data.VIEW_ORDER_ALL[0].orderId, orderData.subOrderStatus, event.restorationForm.biteFile.name, (_c = res.data.VIEW_ORDER_ALL[1]) === null || _c === void 0 ? void 0 : _c.orderId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)((ev) => {
                                                            if (ev.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpEventType.UploadProgress) {
                                                                this.uploadService.uploadDataNew[currentIndex].calculatedTime =
                                                                    this.uploadProgressService.calculateTimeRemain(ev.loaded, event.restorationForm.biteFile.size);
                                                                this.uploadService.uploadDataNew[currentIndex].progress =
                                                                    this.uploadProgressService.returnProgress(ev.loaded, ev.total);
                                                                this.uploadService.uploadDataNew[currentIndex].subScribe = biteFileSub;
                                                            }
                                                            else if (ev instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpResponse) {
                                                                if (ev.body.responsCode === shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_2__.ResponseCodeEnum.OK) {
                                                                    this.toastService.addAlert('Uploaded Successfully', 'Upload File', 'start');
                                                                    this.orderServices.onReload();
                                                                    this.orderServices.removeUploadId(res.data.VIEW_ORDER_ALL[0].orderId, _shared_shared_static_data_SubOrderType__WEBPACK_IMPORTED_MODULE_3__.SubOrderType.GFMR.uploadType);
                                                                }
                                                            }
                                                        })).subscribe(res => { }, error => this.orderServices.removeUploadId(res.data.VIEW_ORDER_ALL[0].orderId, _shared_shared_static_data_SubOrderType__WEBPACK_IMPORTED_MODULE_3__.SubOrderType.GFMR.uploadType));
                                                    }
                                                }
                                            }
                                        })).subscribe(res => { }, error => this.orderServices.removeUploadId(res.data.VIEW_ORDER_ALL[0].orderId, _shared_shared_static_data_SubOrderType__WEBPACK_IMPORTED_MODULE_3__.SubOrderType.GFMR.uploadType));
                                    }
                                }
                            }
                        })).subscribe(res => { }, error => this.orderServices.removeUploadId(res.data.VIEW_ORDER_ALL[0].orderId, _shared_shared_static_data_SubOrderType__WEBPACK_IMPORTED_MODULE_3__.SubOrderType.GFMR.uploadType));
                    }
                }
                if (!event.isAddAnotherOrder) {
                    if (!this.orderId) {
                        this.orderListService.clearSearchData();
                        this.orderListService.returnToFirstPage();
                    }
                    this.router.navigate(['connect-modules', 'View-Orders-page']);
                }
            }
        });
    }
    /**
     * generate order form data
     */
    GenerateOrderFormData(file, uploadType, orderId, orderId_2, fileCaption, isLastFileInBatch) {
        var _a, _b;
        let uploadFormData = new FormData();
        uploadFormData.append('userID', (_a = localStorage.getItem('userCNId')) !== null && _a !== void 0 ? _a : '');
        uploadFormData.append('token', (_b = localStorage.getItem('token')) !== null && _b !== void 0 ? _b : '');
        uploadFormData.append('file', file);
        uploadFormData.append('scanType', uploadType);
        uploadFormData.append('orderID_1', orderId);
        if (orderId_2) {
            uploadFormData.append('orderID_2', orderId_2);
        }
        if (fileCaption) {
            uploadFormData.append('fileCaption', fileCaption);
            uploadFormData.append('upperFileExtension', this.actionsService.getUploadExtenstions(this.actionsService.upperStlFileName));
            uploadFormData.append('lowerFileExtension', this.actionsService.getUploadExtenstions(this.actionsService.lowerStlFileName));
            uploadFormData.append('biteFileExtension', this.actionsService.getUploadExtenstions(this.actionsService.biteStlFileName));
        }
        if (isLastFileInBatch != null || isLastFileInBatch != undefined)
            uploadFormData.append('isLastFileInBatch', String(isLastFileInBatch));
        return uploadFormData;
    }
    /**
     * get scanning center's id
     * @return number
     */
    getScanningCenterId() {
        let typeUser = localStorage.getItem('type') ? localStorage.getItem('type') : 0;
        let userId = localStorage.getItem('userCNId') ? Number(localStorage.getItem('userCNId')) : 0;
        if (typeUser == 1 || typeUser == 3) {
            return userId;
        }
        else {
            return null;
        }
    }
    /**
     * get doctor's id
     * @param event order's data
     * @return number
     */
    getDocotrId(event) {
        let typeUser = localStorage.getItem('type') ? localStorage.getItem('type') : 1;
        let userId = localStorage.getItem('userCNId') ? Number(localStorage.getItem('userCNId')) : 0;
        if (typeUser == 0 || typeUser == 2) {
            return userId;
        }
        else if (event.basicInfoFormGroup.doctor) {
            return +event.basicInfoFormGroup.doctor;
        }
        else {
            return null;
        }
    }
    /**
     * get format id
     * @param software order's software
     * @return number
     */
    getFormatId(event) {
        let software = 0;
        if (event === null || event === void 0 ? void 0 : event.conversionForm)
            return event.conversionForm.format;
        else if (event === null || event === void 0 ? void 0 : event.treatmentPlanForm)
            software = event.treatmentPlanForm.software;
        else if (event === null || event === void 0 ? void 0 : event.surgicalGuideForm)
            software = event.surgicalGuideForm.software;
        switch (software) {
            case 1:
                return 6;
            case 3:
                return 10;
            case 4:
                return 11;
            case 6:
                return 13;
            default:
                return 12;
        }
    }
    /**
     * calculate cost
     * @param event order's data
     * @return void
     */
    onChangeCost(event) {
        var _a;
        let orderService = {
            ConditionsAnded: true,
            columns: [],
            asc: false,
            pageNumber: -1,
            pageSize: -1,
            sortedByColumnsIndices: [],
            serviceName: shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_1__.ServiceNameEnum.CostCalculate,
            orderDescription: {
                missingTeeth: this.orderService.teethChart.missingTeeth,
                implantSites: this.orderService.teethChart.implantSites,
                teethToBeExtracted: this.orderService.teethChart.teethToBeExtracted,
                isPortable: this.checkPortable(event),
                modelScan: this.checkModelScan(event),
                patientName: event.basicInfoFormGroup.patientName,
                scanningCenterId: this.getScanningCenterId(),
                softwareEnumId: this.checkSoftware(event),
                doctorId: this.getDocotrId(event),
                isExpress: this.checkExpress(event),
                timeSurgery: null,
                formatEnumId: event.conversionForm ? event.conversionForm.format : this.getFormatId(event),
                abutmentSites: this.orderService.teethChart.abutmentSites,
                crownSites: this.orderService.teethChart.crownSites,
            }
        };
        let orderServiceObj = Object.assign({}, orderService);
        if (orderService.orderDescription.modelScan) {
            let applianceData = {
                applinceDestenationAddress: 'USA',
                currency: this.getCurrency(),
                clientToBeBilledId: event.basicInfoFormGroup.billing === 0 ? Number(localStorage.getItem('userCNId')) : event.basicInfoFormGroup.doctor,
                hasIntraoralScans: event.conversionForm.oral == 1 ? false : true,
                isForMandible: false,
                isForMaxilla: false,
                isLaserScan: true,
                isPartiallyEdentulous: false,
                isRush: false,
                isTotallyEdentulous: false,
                sendPVSImpression: false,
                softwareFormat: []
            };
            orderServiceObj.orderDescription = Object.assign(Object.assign({}, orderServiceObj.orderDescription), {
                applianceData: applianceData
            });
        }
        if (event.conversionForm) {
            let conversionData = {
                currency: this.getCurrency(),
                clientToBeBilledId: event.basicInfoFormGroup.billing === 0 ? Number(localStorage.getItem('userCNId')) : event.basicInfoFormGroup.doctor,
                separateDoubleArchOrder: event.conversionForm.separateDoubleArchOrder,
                softwareFormat: [],
                isRush: false,
                mandibleConversionEnumId: event.conversionForm.mandible ? event.conversionForm.mandible : 0,
                mandibleSegmentationEnumId: event.conversionForm.typeMandible,
                maxillaConversionEnumId: event.conversionForm.maxilla ? event.conversionForm.maxilla : 0,
                maxillaSegmentationEnumId: event.conversionForm.typeMaxilla
            };
            orderServiceObj.orderDescription = Object.assign(Object.assign({}, orderServiceObj.orderDescription), {
                conversionData: conversionData
            });
            this.isModelScanConv = event.conversionForm.modelScan === 1;
        }
        if (event.treatmentPlanForm) {
            let treatmentPlanData = {
                currency: this.getCurrency(),
                isReview: event.treatmentPlanForm.isReviewTP,
                isRush: false,
                clientToBeBilledId: event.basicInfoFormGroup.billing === 0 ? Number(localStorage.getItem('userCNId')) : event.basicInfoFormGroup.doctor,
                prosthesis: event.treatmentPlanForm.prosthesisType,
                softwareFormat: [],
                surgicalProcedures: event.treatmentPlanForm.surgicalPlan,
                typeofImplant: event.treatmentPlanForm.implantType,
            };
            orderServiceObj.orderDescription = Object.assign(Object.assign({}, orderServiceObj.orderDescription), {
                treatmentPlanData: treatmentPlanData
            });
        }
        if (event.surgicalGuideForm) {
            let surgicalguideData = {
                clientToBeBilledId: event.basicInfoFormGroup.billing === 0 ? Number(localStorage.getItem('userCNId')) : event.basicInfoFormGroup.doctor,
                currency: this.getCurrency(),
                fixationFunctionality: event.surgicalGuideForm.fixationPinsDrills,
                ordersGuideKitEnumId: event.surgicalGuideForm.typeofGuide != 5 ? event.surgicalGuideForm.typeofGuide : event.surgicalGuideForm.guidedSurgeryKitType,
                rushIfPossible: event.surgicalGuideForm.rush === 1 ? false : true,
                softwareFormat: [],
                sleeveDiameter: 0,
                timeSurgery: event.surgicalGuideForm ? ((_a = this.dateService.timeStampToEST(event.surgicalGuideForm.scheduledSurgeryData, event.surgicalGuideForm.scheduledSurgeryTime)) === null || _a === void 0 ? void 0 : _a.getTime()) / 1000 : 0,
                ordersGuideSoftwareSupportEnum: {
                    ordersGuideSupportEnumId: event.surgicalGuideForm.guided,
                    ordersSoftwareEnumId: event.surgicalGuideForm.software
                },
                selectedExtraComponents: event.surgicalGuideForm.extracomponents
                    ? event.surgicalGuideForm.extracomponents.map((e) => ({ id: +e, comment: event.surgicalGuideForm.otherDesc }))
                    : []
            };
            orderServiceObj.orderDescription = Object.assign(Object.assign({}, orderServiceObj.orderDescription), {
                surgicalguideData: surgicalguideData
            });
            this.isModelScanSG = event.surgicalGuideForm.guided === 1;
        }
        if (event.restorationForm) {
            this.restype = event.restorationForm.restType;
            let restorationData = {
                softwareFormat: [],
                restorationType: event.restorationForm.restType,
                shadeSys: event.restorationForm.shade,
                shadeValue: event.restorationForm.teeth,
                shadeSysOther: event.restorationForm.shadeOther,
                abutmentMaterial: event.restorationForm.abutment,
                crownMaterial: event.restorationForm.crown,
                isPouring: event.restorationForm.pouring,
                isRushRes: event.restorationForm.isRush,
                retentionType: event.restorationForm.retentionType,
                hasIntraOralScan: event.restorationForm.oral == 1 ? false : true,
                archOfInterest: event.restorationForm.archOfInterest,
                chairSideAssistance: event.restorationForm.chairSideAssistance,
                userCNComment: '',
                toBeBilled: event.basicInfoFormGroup.billing === 0 ? Number(localStorage.getItem('userCNId')) : event.basicInfoFormGroup.doctor
            };
            if (event.restorationForm.retentionTypeSpecify) {
                restorationData.retentionTypeComment = event.restorationForm.retentionTypeSpecify;
            }
            if (event.restorationForm.abutmentSpecify) {
                restorationData.abutmentMaterialComment = event.restorationForm.abutmentSpecify;
            }
            orderServiceObj.orderDescription = Object.assign(Object.assign({}, orderServiceObj.orderDescription), {
                restorationData: restorationData
            });
            this.isGMRFBothArchOfInterest = event.restorationForm.archOfInterest == 2;
        }
        if (this.orderId) {
            orderServiceObj.orderDescription.orderId = +this.orderId;
        }
        if (event.radiologyReportForm) {
            let reportData = {
                isImplantPlanned: event.radiologyReportForm.implantPlanned == 1 ? false : true,
                basicReport: event.radiologyReportForm.BasicReport == 1 ? false : true,
                ReportSmallFieldOfView: false,
                currency: this.getCurrency(),
                softwareFormat: [],
                isRuleOutPathology: event.radiologyReportForm.ruleOutPathology == 1 ? false : true,
                isAirWayEvaluation: event.radiologyReportForm.airWayEvaluation == 1 ? false : true,
                isEvaluateTMJ: event.radiologyReportForm.tmjevaluation == 1 ? false : true,
                isEvaluateSinus: event.radiologyReportForm.sinusEvaluation == 1 ? false : true,
                isEvaluateExistingImplant: event.radiologyReportForm.evaluateExistingImplant == 1 ? false : true,
                isRush: event.radiologyReportForm.rushCase == 1 ? false : true,
                relevantHistory: event.radiologyReportForm.relevant,
                genderEnumId: event.basicInfoFormGroup.gender,
                userCNComment: '',
                DOB: '',
                dateImageAcquisition: 0,
                clientToBeBilledId: event.basicInfoFormGroup.billing === 0 ? Number(localStorage.getItem('userCNId')) : event.basicInfoFormGroup.doctor
            };
            orderServiceObj.orderDescription = Object.assign(Object.assign({}, orderServiceObj.orderDescription), {
                reportData: reportData
            });
        }
        let apiData = { services: [orderServiceObj], requestType: projects_connect_src_app_Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_0__.ERequestTypes.VIEW };
        this.addOrderService.calculateCost(apiData).subscribe(res => {
            this.orderCost = res;
        });
    }
}
AddOrderComponent.ɵfac = function AddOrderComponent_Factory(t) { return new (t || AddOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_shared_services_order_shared_service__WEBPACK_IMPORTED_MODULE_4__.OrderSharedService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](projects_connect_src_app_Services_OrderServices_AddOrderService_add_order_service__WEBPACK_IMPORTED_MODULE_5__.AddOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](shared_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](projects_connect_src_app_Services_UploadService_upload_service__WEBPACK_IMPORTED_MODULE_7__.UploadService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](projects_connect_src_app_Services_OrderServices_OrderListService_order_list_service__WEBPACK_IMPORTED_MODULE_8__.OrderListService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](shared_shared_services_upload_progress_service__WEBPACK_IMPORTED_MODULE_9__.UploadProgressService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](shared_shared_services_generate_order_data_service__WEBPACK_IMPORTED_MODULE_10__.GenerateOrderDataService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_shared_services_date_service__WEBPACK_IMPORTED_MODULE_11__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](projects_connect_src_app_Services_OrderServices_OrderListService_order_list_service__WEBPACK_IMPORTED_MODULE_8__.OrderListService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_Services_OrderServices_actions_actions_service__WEBPACK_IMPORTED_MODULE_12__.ActionsService)); };
AddOrderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: AddOrderComponent, selectors: [["app-add-order"]], viewQuery: function AddOrderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.orderform = _t.first);
    } }, decls: 10, vars: 5, consts: [[1, "container"], [1, "row", "justify-content-center", "h-100", 2, "margin-bottom", "90px"], [2, "margin-bottom", "50px", 3, "ngClass"], [1, "example-card", "mt-5"], [3, "orderDetails", "buttonOrders", "doctorsList", "recalculateCost", "ordersOBJ"], ["orderform", ""], ["style", "margin-bottom: 90px", "class", "col-md-3 col-sm-12 select-suborders mt-5", 4, "ngIf"], [1, "col-md-3", "col-sm-12", "select-suborders", "mt-5", 2, "margin-bottom", "90px"], [1, "example-card"], [3, "isModelScanSG", "isModelScanConv", "restype", "isGFMRBoth", "orderCost"]], template: function AddOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, " Add Order ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "app-add-order-form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("recalculateCost", function AddOrderComponent_Template_app_add_order_form_recalculateCost_7_listener($event) { return ctx.onChangeCost($event); })("ordersOBJ", function AddOrderComponent_Template_app_add_order_form_ordersOBJ_7_listener($event) { return ctx.onSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, AddOrderComponent_div_9_Template, 3, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx.isSelectOrder ? "col-md-9" : "col-sm-12");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("orderDetails", ctx.orderDetails)("buttonOrders", ctx.buttonOrders)("doctorsList", ctx.doctors);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isSelectOrder);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardContent, _shared_shared_components_shared_forms_add_order_form_add_order_form_component__WEBPACK_IMPORTED_MODULE_13__.AddOrderFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _shared_shared_components_shared_forms_select_orders_select_orders_component__WEBPACK_IMPORTED_MODULE_14__.SelectOrdersComponent], styles: [".select-suborders[_ngcontent-%COMP%] {\n    margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1vcmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImFkZC1vcmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdC1zdWJvcmRlcnMge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59Il19 */"] });


/***/ }),

/***/ 61721:
/*!********************************************************************************!*\
  !*** ./projects/connect/src/app/Resolvers/Doctor-List/doctor-list.resolver.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoctorListResolver": () => (/* binding */ DoctorListResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _Services_OrderServices_doctors_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../Services/OrderServices/doctors.service */ 45705);


class DoctorListResolver {
    /**
     * The Requirements For The Construction Of The resolver
     * @param service for DoctorsService
     */
    constructor(service) {
        this.service = service;
    }
    /**
     * get Doctors list
     * @param route for ActivatedRouteSnapshot
     * @param state for RouterStateSnapshot
     * @return Observable<any>
     */
    resolve(route, state) {
        return this.service.getDoctorList();
    }
}
DoctorListResolver.ɵfac = function DoctorListResolver_Factory(t) { return new (t || DoctorListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_Services_OrderServices_doctors_service__WEBPACK_IMPORTED_MODULE_0__.DoctorsService)); };
DoctorListResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DoctorListResolver, factory: DoctorListResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 45705:
/*!****************************************************************************!*\
  !*** ./projects/connect/src/app/Services/OrderServices/doctors.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoctorsService": () => (/* binding */ DoctorsService)
/* harmony export */ });
/* harmony import */ var shared_API_APIName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/API/APIName */ 93645);
/* harmony import */ var _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Models/Enums/RequestTypes/RequestTypes */ 20987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _DataService_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataService/data.service */ 16637);




class DoctorsService {
    /**
     * The Requirements For The Construction Of The service
     * @param dataService for managing Http methods
     */
    constructor(dataService) {
        this.dataService = dataService;
        this.Req = { requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_1__.ERequestTypes.VIEW, services: [] };
    }
    /**
     * get doctor list
     * @return Observable<IMainResponse>
     */
    getDoctorList() {
        this.Req.services[0] = {
            ConditionsAnded: false,
            columns: [],
            serviceName: "VIEW_SCAN_CENTER_DOCTORS",
        };
        return this.dataService.post(shared_API_APIName__WEBPACK_IMPORTED_MODULE_0__.APIName.doctors, this.Req);
    }
}
DoctorsService.ɵfac = function DoctorsService_Factory(t) { return new (t || DoctorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_DataService_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService)); };
DoctorsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DoctorsService, factory: DoctorsService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=projects_connect_src_app_Pages_ConnectModules_connect-pages_add-order-pages_add-order-pages_m-420d4f.js.map