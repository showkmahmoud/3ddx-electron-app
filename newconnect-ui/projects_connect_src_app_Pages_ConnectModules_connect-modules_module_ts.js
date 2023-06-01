"use strict";
(self["webpackChunknew_connect_v3"] = self["webpackChunknew_connect_v3"] || []).push([["projects_connect_src_app_Pages_ConnectModules_connect-modules_module_ts"],{

/***/ 2594:
/*!*****************************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/ConnectModules/connect-modules-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectModulesRoutingModule": () => (/* binding */ ConnectModulesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _connect_pages_connect_pages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connect-pages/connect-pages.component */ 58666);
/* harmony import */ var _Resolvers_Shipping_Label_shipping_label_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Resolvers/Shipping-Label/shipping-label.resolver */ 10910);
/* harmony import */ var _Resolvers_Patient_Name_patient_name_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Resolvers/Patient-Name/patient-name.resolver */ 80255);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [
    {
        path: '',
        component: _connect_pages_connect_pages_component__WEBPACK_IMPORTED_MODULE_0__.ConnectPagesComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'View-Orders-page'
            },
            {
                path: 'View-Orders-page',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_connect_src_app_Pages_ConnectModules_connect-pages_order-page_order-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./connect-pages/order-page/order-page.module */ 22305)).then(m => m.OrderPageModule),
                data: { breadcrumbs: ['View Orders List'] }
            },
            {
                path: 'add-order-pages',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_connect_src_app_Pages_ConnectModules_connect-pages_add-order-pages_add-order-pages_m-420d4f")]).then(__webpack_require__.bind(__webpack_require__, /*! ./connect-pages/add-order-pages/add-order-pages.module */ 71756)).then(m => m.AddOrderPagesModule),
                data: { breadcrumbs: ['Add New Order'] }
            },
            {
                path: 'billing-page',
                loadChildren: () => __webpack_require__.e(/*! import() */ "projects_connect_src_app_Pages_ConnectModules_connect-pages_billing-pages_billing-pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./connect-pages/billing-pages/billing-pages.module */ 13911)).then(m => m.BillingPagesModule),
                data: { breadcrumbs: ['Billing'] }
            },
            {
                path: 'setting-page',
                loadChildren: () => __webpack_require__.e(/*! import() */ "projects_connect_src_app_Pages_ConnectModules_connect-pages_settings-page_settings-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./connect-pages/settings-page/settings-page.module */ 47075)).then(m => m.SettingsPageModule),
                data: { breadcrumbs: ['Edit Profile'] }
            },
            {
                path: 'password-page',
                loadChildren: () => __webpack_require__.e(/*! import() */ "projects_connect_src_app_Pages_ConnectModules_connect-pages_change-password-page_change-passw-645466").then(__webpack_require__.bind(__webpack_require__, /*! ./connect-pages/change-password-page/change-password-page.module */ 59742)).then(m => m.ChangePasswordPageModule),
                data: { breadcrumbs: ['Change Password'] }
            },
            {
                path: 'shipping-label-page',
                loadChildren: () => __webpack_require__.e(/*! import() */ "projects_connect_src_app_Pages_ConnectModules_connect-pages_shipping-label-page_shipping-labe-96b9db").then(__webpack_require__.bind(__webpack_require__, /*! ./connect-pages/shipping-label-page/shipping-label.module */ 10985)).then(m => m.ShippingLabelModule),
                data: { breadcrumbs: ['Shipping Label'] }
            }
        ],
        resolve: {
            PatientName: _Resolvers_Patient_Name_patient_name_resolver__WEBPACK_IMPORTED_MODULE_2__.PatientNameResolver,
            userData: _Resolvers_Shipping_Label_shipping_label_resolver__WEBPACK_IMPORTED_MODULE_1__.ShippingLabelResolver,
            // OrderList: OrderResolver,
        },
    }
];
class ConnectModulesRoutingModule {
}
ConnectModulesRoutingModule.ɵfac = function ConnectModulesRoutingModule_Factory(t) { return new (t || ConnectModulesRoutingModule)(); };
ConnectModulesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ConnectModulesRoutingModule });
ConnectModulesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ConnectModulesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 73079:
/*!*********************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/ConnectModules/connect-modules.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectModulesModule": () => (/* binding */ ConnectModulesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _connect_modules_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connect-modules-routing.module */ 2594);
/* harmony import */ var _connect_pages_connect_pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connect-pages/connect-pages.component */ 58666);
/* harmony import */ var _shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/shared-modules/angular-material.module */ 20793);
/* harmony import */ var shared_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/shared-components/shared-components.module */ 83442);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _Resolvers_Patient_Name_patient_name_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Resolvers/Patient-Name/patient-name.resolver */ 80255);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);









class ConnectModulesModule {
}
ConnectModulesModule.ɵfac = function ConnectModulesModule_Factory(t) { return new (t || ConnectModulesModule)(); };
ConnectModulesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ConnectModulesModule });
ConnectModulesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        _Resolvers_Patient_Name_patient_name_resolver__WEBPACK_IMPORTED_MODULE_4__.PatientNameResolver
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _connect_modules_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConnectModulesRoutingModule,
            _shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_2__.AngularMaterialModule,
            shared_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_3__.SharedComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ConnectModulesModule, { declarations: [_connect_pages_connect_pages_component__WEBPACK_IMPORTED_MODULE_1__.ConnectPagesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _connect_modules_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConnectModulesRoutingModule,
        _shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_2__.AngularMaterialModule,
        shared_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_3__.SharedComponentsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule] }); })();


/***/ }),

/***/ 58666:
/*!************************************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/ConnectModules/connect-pages/connect-pages.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectPagesComponent": () => (/* binding */ ConnectPagesComponent)
/* harmony export */ });
/* harmony import */ var shared_shared_components_shard_popup_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/shared-components/shard-popup/feedback/feedback.component */ 36045);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 75514);
/* harmony import */ var _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Models/Enums/RequestTypes/RequestTypes */ 20987);
/* harmony import */ var _shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/shared-enums/ResponseCodeEnum */ 31580);
/* harmony import */ var _shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/shared-enums/ServiceNameEnum */ 4946);
/* harmony import */ var _shared_shared_enums_NavigateToEnum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/shared-enums/NavigateToEnum */ 54401);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var _Widgets_Components_progress_progress_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Widgets/Components/progress/progress.component */ 10273);
/* harmony import */ var _shared_shared_static_id_shared_static_id__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../shared/shared-static-id/shared-static-id */ 9470);
/* harmony import */ var _shared_shared_components_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../shared/shared-components/tutorial/tutorial.component */ 45523);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 76322);
/* harmony import */ var _Services_FeedbackService_feedback_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Services/FeedbackService/feedback.service */ 69968);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _shared_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../shared/shared-services/toastr.service */ 55325);
/* harmony import */ var _shared_shared_services_navigate_to_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../shared/shared-services/navigate-to.service */ 71070);
/* harmony import */ var _shared_shared_services_lang_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../shared/shared-services/lang.service */ 95255);
/* harmony import */ var _Services_UploadService_upload_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../Services/UploadService/upload.service */ 71273);
/* harmony import */ var _Services_AuthServices_LoginService_login_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../Services/AuthServices/LoginService/login.service */ 2691);
/* harmony import */ var projects_connect_src_app_Services_OrderServices_OrderListService_order_list_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! projects/connect/src/app/Services/OrderServices/OrderListService/order-list.service */ 86540);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sidenav */ 86608);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/toolbar */ 64106);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/list */ 28417);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shared_shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../shared/shared-components/banner/banner.component */ 43843);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/menu */ 80221);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/badge */ 90330);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
































const _c0 = ["drawer"];
const _c1 = function () { return ["active"]; };
function ConnectPagesComponent_mat_list_item_16_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-list-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ConnectPagesComponent_mat_list_item_16_Template_mat_list_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r10); const link_r7 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); ctx_r9.navigateToPage(); return link_r7.callData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("tabIndex", i_r8 + 1)("routerLink", link_r7.url)("id", ctx_r3.htmlID.List + "connect-url-" + link_r7.id)("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("id", ctx_r3.htmlID.AnchorTags + "connect-url-" + link_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 6, link_r7.page), "");
} }
function ConnectPagesComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ConnectPagesComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r12); _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("id", ctx_r4.htmlID.Button + "open-menu");
} }
const _c2 = function (a0) { return { "tutorial": a0 }; };
class ConnectPagesComponent {
    /**
     * The Requirements For The Construction Of The Component
     * @param route For using activated route
     * @param bottomSheet for using angular material bottom sheet
     * @param toastService To show request notifications
     * @param feedbackService for using FeedbackService
     * @param dialog for using angular material dialog
     * @param navigateToService for using NavigateToService
     * @param langService for using langService
     * @param uploadService for using UploadService
     * @param loginService for using LogInService
     * @param orderListService
     * @param router for routing
     */
    constructor(bottomSheet, feedbackService, dialog, toastService, navigateToService, route, langService, uploadService, loginService, orderListService, router) {
        this.bottomSheet = bottomSheet;
        this.feedbackService = feedbackService;
        this.dialog = dialog;
        this.toastService = toastService;
        this.navigateToService = navigateToService;
        this.route = route;
        this.langService = langService;
        this.uploadService = uploadService;
        this.loginService = loginService;
        this.orderListService = orderListService;
        this.router = router;
        this.htmlID = _shared_shared_static_id_shared_static_id__WEBPACK_IMPORTED_MODULE_7__.CStaticIds;
        this.connectUrls = [
            {
                page: 'View Orders', url: '/connect-modules/View-Orders-page', id: 'view-orders', callData: () => {
                    this.getAllOrders();
                }
            },
            { page: 'Add Order', url: '/connect-modules/add-order-pages', id: 'add-order', callData: () => { } },
            { page: 'Shipping Label', url: '/connect-modules/shipping-label-page', id: 'shipping-label', callData: () => { } },
            { page: 'Billing', url: '/connect-modules/billing-page', id: 'billing', callData: () => { } },
        ];
        this.userName = '';
        this.lang = '';
        this.logo = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.connectLogo;
        this.feedbackOBJ = { requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_2__.ERequestTypes.ADD, services: [] };
        this.urlNavigations = _shared_shared_enums_NavigateToEnum__WEBPACK_IMPORTED_MODULE_5__.NavigateToEnum;
        this.pageName = '';
        this.breadcrumbs = [];
        this.searchObj = { requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_2__.ERequestTypes.VIEW, services: [] };
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_19__.NavigationEnd))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(() => this.route))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)((route) => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }))
            // tslint:disable-next-line:no-shadowed-variable
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.filter)(route => route.outlet === _angular_router__WEBPACK_IMPORTED_MODULE_19__.PRIMARY_OUTLET))
            .subscribe(route => {
            const snapshot = this.router.routerState.snapshot;
            this.breadcrumbs = [];
            const url = snapshot.url;
            const routeData = route.snapshot.data;
            const label = routeData.breadcrumbs;
            const params = snapshot.root.params;
            this.breadcrumbs.push({
                url,
                label,
                params
            });
        });
    }
    /**
     * get order list
     * @return void
     */
    getAllOrders() {
        this.orderListService.returnToFirstPage();
        this.orderListService.clearSearchData();
        this.orderListService.getAllOrders = true;
        this.orderListService.patientName = '';
        if (this.router.url === _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.ordersPageRoute) {
            this.orderListService.reloadOrderList();
        }
        window.scrollTo(0, 0);
    }
    /**
     * onInit get user name
     * @return void
     */
    ngOnInit() {
        this.route.data.subscribe(res => {
            this.orderListService.patients = res.PatientName.data.VIEW_ORDER_ALL;
            this.userData = res.userData.data.VUsersCN[0];
        });
    }
    ngDoCheck() {
        this.userName = localStorage.getItem('fName') + ' ' + localStorage.getItem('lName');
        this.lang = localStorage.getItem('language');
        this.onlineParams = `&Name_Full=${this.userName}&PhoneNumber=${this.userData.phone1}&Email=${this.userData.email}`;
    }
    /**
     * open feedback pop-up and send feedback
     * @return void
     */
    openFeedbackDialog() {
        this.dialogRef = this.dialog.open(shared_shared_components_shard_popup_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_0__.FeedbackComponent, {
            disableClose: true,
            data: {
                logo: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.connectLogo,
            }
        });
        this.dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.feedbackOBJ.services[0] = {
                    msgBody: result.message,
                    msgSubject: result.subject,
                    columns: [],
                    ConditionsAnded: false,
                    serviceName: _shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_4__.ServiceNameEnum.FEEDBACK,
                };
                this.sendFeedBack(this.feedbackOBJ);
            }
        });
    }
    /**
     * log out
     * @return void
     */
    logOut() {
        this.loginService.logout();
        this.orderListService.returnToFirstPage();
        this.orderListService.clearSearchData();
    }
    /**
     * send feedback
     * @param feedbackOBJ feedback object
     * @return void
     */
    sendFeedBack(feedbackOBJ) {
        this.feedbackService.sendFeedBack(feedbackOBJ).subscribe(res => {
            if (res.responsCode === _shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_3__.ResponseCodeEnum.OK) {
                this.toastService.addAlert('Sent Successfully', 'Feedback', 'start');
            }
        });
    }
    /**
     * view uploads
     * @return void
     */
    viewUploads() {
        this.dialogProgressRef = this.dialog.open(_Widgets_Components_progress_progress_component__WEBPACK_IMPORTED_MODULE_6__.ProgressComponent, {
            minWidth: '50vw',
            maxHeight: '80vh',
            data: {
                logo: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.connectLogo,
            }
        });
    }
    onWindowResize() {
        if (window.innerWidth <= 960) {
            this.drawer.close();
        }
        else {
            this.drawer.open();
        }
    }
    /**
     * update uploads number
     * @return number
     */
    filterUploads() {
        const uploads = [...this.uploadService.uploadDataNew];
        return uploads.filter((file) => file.progress !== 100).length;
    }
    /**
     * clear search data on navigate to connect pages
     * @return void
     */
    navigateToPage() {
        this.orderListService.showOrderDetails = false;
        this.orderListService.clearSearchData();
        this.orderListService.viewOrders = false;
    }
    openTutorial() {
        this.toastService.tutorial = false;
        this.dialogTutorialRef = this.dialog.open(_shared_shared_components_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_8__.TutorialComponent, {
            minWidth: '40vw',
            height: '80vh',
            data: {
                logo: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.connectLogo,
            }
        });
    }
}
ConnectPagesComponent.ɵfac = function ConnectPagesComponent_Factory(t) { return new (t || ConnectPagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_21__.MatBottomSheet), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_Services_FeedbackService_feedback_service__WEBPACK_IMPORTED_MODULE_9__.FeedbackService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_shared_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_shared_shared_services_navigate_to_service__WEBPACK_IMPORTED_MODULE_11__.NavigateToService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_shared_shared_services_lang_service__WEBPACK_IMPORTED_MODULE_12__.LangService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_Services_UploadService_upload_service__WEBPACK_IMPORTED_MODULE_13__.UploadService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_Services_AuthServices_LoginService_login_service__WEBPACK_IMPORTED_MODULE_14__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](projects_connect_src_app_Services_OrderServices_OrderListService_order_list_service__WEBPACK_IMPORTED_MODULE_15__.OrderListService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router)); };
ConnectPagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({ type: ConnectPagesComponent, selectors: [["app-connect-pages"]], viewQuery: function ConnectPagesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
    } }, hostBindings: function ConnectPagesComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("resize", function ConnectPagesComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresolveWindow"]);
    } }, decls: 64, vars: 44, consts: [[1, "example-container"], ["mode", "side", "opened", "true", 1, "drawer", "animate__animated", "animate__fadeInLeft"], ["drawer", ""], [1, "header"], ["alt", "Logo", 1, "w-100", 3, "src", "id"], ["mat-mini-fab", "", "color", "warn", 3, "id", "click"], [1, "contents"], [3, "multiple"], ["shoes", ""], [3, "tabIndex", "routerLink", "id", "routerLinkActive", "click", 4, "ngFor", "ngForOf"], [1, "main", "header", "animate__animated", "animate__fadeInDown"], ["mat-mini-fab", "", "class", "mr-3", "color", "warn", 3, "id", "click", 4, "ngIf"], [1, "d-flex", "justify-content-end", "ml-auto"], [1, "mr-4", "m-1", "toll-free", 3, "id"], ["mat-mini-fab", "", "color", "warn", 1, "mr-2", 3, "matMenuTriggerFor", "id"], ["mat-raised-button", "", "color", "warn", 3, "id", "matMenuTriggerFor"], [1, "main", "contents", "animate__animated", "animate__zoomIn"], [1, "main", "footer", "animate__animated", "animate__fadeInUp", 2, "position", "fixed"], ["mat-stroked-button", "", "matBadgePosition", "above", "matBadgeColor", "primary", "color", "warn", 1, "m-1", 3, "matBadge", "id", "click"], ["mat-stroked-button", "", "color", "warn", 1, "m-1", 3, "id", "click"], ["mat-stroked-button", "", "color", "warn", 1, "m-1", 3, "ngClass", "id", "click"], ["menu", "matMenu"], ["mat-menu-item", "", "routerLink", "/connect-modules/setting-page", 3, "id", "click"], ["mat-menu-item", "", "routerLink", "/connect-modules/password-page", 3, "id", "click"], ["mat-menu-item", "", 3, "id", "click"], ["langMenu", "matMenu"], ["disabled", "", "mat-menu-item", "", 3, "id", "click"], [3, "tabIndex", "routerLink", "id", "routerLinkActive", "click"], [3, "id"], ["mat-mini-fab", "", "color", "warn", 1, "mr-3", 3, "id", "click"]], template: function ConnectPagesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "mat-drawer", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "mat-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ConnectPagesComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r13); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](2); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](8, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "div", 6, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "mat-selection-list", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](16, ConnectPagesComponent_mat_list_item_16_Template, 4, 9, "mat-list-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "mat-toolbar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](18, ConnectPagesComponent_button_18_Template, 3, 1, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](19, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](21, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](22, "Toll-Free: 1-866-834-7925 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](26, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](30, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](31, "mat-toolbar", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](32, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ConnectPagesComponent_Template_button_click_32_listener() { return ctx.viewUploads(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](33, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](34, "file_upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](35, " View Uploads ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](36, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ConnectPagesComponent_Template_button_click_36_listener() { return ctx.navigateToService.navigateTo(ctx.urlNavigations.I_SMILE_ON); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](37, " iSmileOn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](38, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ConnectPagesComponent_Template_button_click_38_listener() { return ctx.openFeedbackDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](39, "Feedback ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](40, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ConnectPagesComponent_Template_button_click_40_listener() { return ctx.navigateToService.navigateTo(ctx.urlNavigations.ONLINE_ASSISTANT_URL, ctx.onlineParams); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](41, "Online assistance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](42, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ConnectPagesComponent_Template_button_click_42_listener() { return ctx.navigateToService.navigateTo(ctx.urlNavigations.FT_SESSION); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](43, " Fine Tune ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](44, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ConnectPagesComponent_Template_button_click_44_listener() { return ctx.openTutorial(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](47, "mat-menu", null, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](49, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ConnectPagesComponent_Template_button_click_49_listener() { return ctx.orderListService.clearSearchData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](52, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ConnectPagesComponent_Template_button_click_52_listener() { return ctx.orderListService.clearSearchData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](55, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ConnectPagesComponent_Template_button_click_55_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](58, "mat-menu", null, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](60, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ConnectPagesComponent_Template_button_click_60_listener() { return ctx.langService.changeLanguage("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](61, " English ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](62, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ConnectPagesComponent_Template_button_click_62_listener() { return ctx.langService.changeLanguage("fr"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](63, " French ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](2);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](48);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵclassProp"]("drawer-opened", _r0.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("src", ctx.logo, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeUrl"])("id", ctx.htmlID.Image + "logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("id", ctx.htmlID.Button + "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.connectUrls);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !_r0.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("id", ctx.htmlID.Button + "toll-free");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("matMenuTriggerFor", _r6)("id", ctx.htmlID.Button + "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](26, 32, ctx.lang));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("id", ctx.htmlID.Button + "user")("matMenuTriggerFor", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("matBadge", ctx.filterUploads())("id", ctx.htmlID.Button + "view-upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("id", ctx.htmlID.Button + "i-smile-on");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("id", ctx.htmlID.Button + "feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("id", ctx.htmlID.Button + "online-assistant");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("id", ctx.htmlID.Button + "ft-session");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](42, _c2, ctx.toastService.tutorial))("id", ctx.htmlID.Button + "tutorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](46, 34, "Tutorial"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("id", ctx.htmlID.Button + "edit-profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](51, 36, "Edit Profile"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("id", ctx.htmlID.Button + "change-password");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](54, 38, "Change Password"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("id", ctx.htmlID.Button + "log-out");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](57, 40, "LogOut"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("id", ctx.htmlID.Button + "translate-english");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("id", ctx.htmlID.Button + "translate-french");
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatDrawer, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_27__.MatSelectionList, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgIf, _shared_shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_16__.BannerComponent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__.MatMenuTrigger, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterOutlet, _angular_material_badge__WEBPACK_IMPORTED_MODULE_30__.MatBadge, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgClass, _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__.MatMenuItem, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterLink, _angular_material_list__WEBPACK_IMPORTED_MODULE_27__.MatListItem, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterLinkActive], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__.TranslatePipe], styles: [".drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100vh;\n  min-width: 15%;\n}\n\n.drawer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  justify-content: space-between;\n}\n\n.drawer[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.main.header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  width: 100%;\n  z-index: 2;\n}\n\n.main.contents[_ngcontent-%COMP%] {\n  min-height: 87vh;\n  padding: 0 16px 0 16px;\n}\n\n.main.footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #f7913c;\n  bottom: 0;\n  width: 100%;\n}\n\n.flex-spacer[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.toll-free[_ngcontent-%COMP%] {\n  color: #377FAE;\n  font-size: 14px;\n}\n\n.tutorial[_ngcontent-%COMP%] {\n  animation: glowing 1300ms infinite;\n}\n\n@keyframes glowing {\n  0% {\n    box-shadow: 0 0 5px #377FAE;\n    background-color: #f7913c;\n  }\n  50% {\n    background-color: inherit;\n    box-shadow: 0 0 20px #377FAE;\n  }\n  100% {\n    box-shadow: 0 0 5px #377FAE;\n    background-color: #f7913c;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3QtcGFnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUlBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBQ0E7RUFDRTtJQUNFLDJCQUEyQjtJQUMzQix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtJQUN6Qiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQix5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJjb25uZWN0LXBhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJhd2VyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtaW4td2lkdGg6IDE1JTtcbn1cblxuLmRyYXdlciAuaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZHJhd2VyIC5jb250ZW50cyB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cblxuXG4ubWFpbi5oZWFkZXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAyO1xufVxuXG4ubWFpbi5jb250ZW50cyB7XG4gIG1pbi1oZWlnaHQ6IDg3dmg7XG4gIHBhZGRpbmc6IDAgMTZweCAwIDE2cHg7XG59XG5cbi5tYWluLmZvb3RlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjc5MTNjO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmxleC1zcGFjZXIge1xuICBmbGV4LWdyb3c6IDE7XG59XG4udG9sbC1mcmVlIHtcbiAgY29sb3I6ICMzNzdGQUU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50dXRvcmlhbCB7XG4gIGFuaW1hdGlvbjogZ2xvd2luZyAxMzAwbXMgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGdsb3dpbmcge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjMzc3RkFFO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNzkxM2M7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4ICMzNzdGQUU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjMzc3RkFFO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNzkxM2M7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 80255:
/*!**********************************************************************************!*\
  !*** ./projects/connect/src/app/Resolvers/Patient-Name/patient-name.resolver.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientNameResolver": () => (/* binding */ PatientNameResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var projects_connect_src_app_Services_OrderServices_OrderListService_order_list_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/connect/src/app/Services/OrderServices/OrderListService/order-list.service */ 86540);


class PatientNameResolver {
    /**
     * The Requirements For The Construction Of The resolver
     * @param orderListService for OrderListService
     */
    constructor(orderListService) {
        this.orderListService = orderListService;
    }
    /**
     * get user data
     * @return Observable<IMainResponse>
     */
    resolve() {
        return this.orderListService.getPatientName();
    }
}
PatientNameResolver.ɵfac = function PatientNameResolver_Factory(t) { return new (t || PatientNameResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](projects_connect_src_app_Services_OrderServices_OrderListService_order_list_service__WEBPACK_IMPORTED_MODULE_0__.OrderListService)); };
PatientNameResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PatientNameResolver, factory: PatientNameResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 10910:
/*!**************************************************************************************!*\
  !*** ./projects/connect/src/app/Resolvers/Shipping-Label/shipping-label.resolver.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShippingLabelResolver": () => (/* binding */ ShippingLabelResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _Services_ShippingLabelService_shipping_label_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Services/ShippingLabelService/shipping-label.service */ 13893);


class ShippingLabelResolver {
    /**
     * The Requirements For The Construction Of The resolver
     * @param shippingLabelService for ShippingLabelService
     */
    constructor(shippingLabelService) {
        this.shippingLabelService = shippingLabelService;
    }
    /**
     * get user data
     * @return Observable<IMainResponse>
     */
    resolve() {
        return this.shippingLabelService.getUserData();
    }
}
ShippingLabelResolver.ɵfac = function ShippingLabelResolver_Factory(t) { return new (t || ShippingLabelResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_Services_ShippingLabelService_shipping_label_service__WEBPACK_IMPORTED_MODULE_0__.ShippingLabelService)); };
ShippingLabelResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ShippingLabelResolver, factory: ShippingLabelResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 69968:
/*!*******************************************************************************!*\
  !*** ./projects/connect/src/app/Services/FeedbackService/feedback.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackService": () => (/* binding */ FeedbackService)
/* harmony export */ });
/* harmony import */ var _shared_API_APIName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../shared/API/APIName */ 93645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _DataService_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataService/data.service */ 16637);



class FeedbackService {
    /**
     * The Requirements For The Construction Of The service
     * @param dataService for managing Http methods
     */
    constructor(dataService) {
        this.dataService = dataService;
    }
    /**
     * send feedback
     * @param feedbackOBJ feedback object
     * @return Observable<IMainResponse>
     */
    sendFeedBack(feedbackOBJ) {
        return this.dataService.post(_shared_API_APIName__WEBPACK_IMPORTED_MODULE_0__.APIName.feedback, feedbackOBJ);
    }
}
FeedbackService.ɵfac = function FeedbackService_Factory(t) { return new (t || FeedbackService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_DataService_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService)); };
FeedbackService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FeedbackService, factory: FeedbackService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 13893:
/*!******************************************************************************************!*\
  !*** ./projects/connect/src/app/Services/ShippingLabelService/shipping-label.service.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShippingLabelService": () => (/* binding */ ShippingLabelService)
/* harmony export */ });
/* harmony import */ var _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Models/Enums/RequestTypes/RequestTypes */ 20987);
/* harmony import */ var _shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/shared-enums/ServiceNameEnum */ 4946);
/* harmony import */ var _shared_API_APIName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/API/APIName */ 93645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _DataService_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DataService/data.service */ 16637);





class ShippingLabelService {
    /**
     * The Requirements For The Construction Of The service
     * @param dataService for managing Http methods
     */
    constructor(dataService) {
        this.dataService = dataService;
        this.shippingLabelOBJ = { requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_0__.ERequestTypes.VIEW, services: [] };
    }
    /**
     * get user data
     * @return Observable<IMainResponse>
     */
    getUserData() {
        this.shippingLabelOBJ.services[0] = {
            ConditionsAnded: true,
            asc: false,
            columns: [
                'userCNId',
                'userCNEnumId',
                'userCNEnum',
                'pwd',
                'fName',
                'lName',
                'countryEnumId',
                'countryEnum',
                'stateEnumId',
                'stateEnum',
                'city',
                'zipCode',
                'activated',
                'preferedRadiologyId',
                'preferedRadiologyFirstName',
                'preferedRadiologyLastName',
                'preferedSalesAgentId',
                'preferedSalesAgentFirstName',
                'preferedSalesAgentLastName',
                'assistantName',
                'contractId',
                'appliance',
                'plasterModelArch',
                'TreatmentPlanMinPrice',
                'ConversionMinPrice',
                'conversionOneShot',
                'rushCost',
                'timeStart',
                'timeExp',
                'ReportPrice',
                'currencyEnumId',
                'currencyEnum',
                'languageEnumId',
                'languageEnum',
                'usersCNAdressesEnumId',
                'usersCNAdressesEnum',
                'address',
                'emailEnumId',
                'emailEnum',
                'email',
                'telecomEnumId',
                'telecomEnum',
                'telecom',
                'creditCardEnumId',
                'creditCard',
                'creditCardTimeExp',
                'laserScanCost',
                'isPortableVersion'
            ],
            condition: {
                anded: false,
                argumentName: 'userCNId',
                // @ts-ignore
                argumentValue: +localStorage.getItem('userCNId'),
                inBetween: false,
                like: false,
                not: false,
            },
            has: false,
            ordersOwnerId: Number(localStorage.getItem('userCNId')),
            pageNumber: -1,
            pageSize: -1,
            serviceName: _shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_1__.ServiceNameEnum.VUsersCN,
            sortedByColumnsIndices: [0]
        };
        return this.dataService.post(_shared_API_APIName__WEBPACK_IMPORTED_MODULE_2__.APIName.getUserShippingLabel, this.shippingLabelOBJ);
    }
    /**
     * add shipping label
     * @param shippingOBJ shipping label object
     * @return Observable<IMainResponse>
     */
    addShippingLabel(shippingOBJ) {
        return this.dataService.post(_shared_API_APIName__WEBPACK_IMPORTED_MODULE_2__.APIName.addShippingLabel, shippingOBJ);
    }
    /**
     * download files
     * @param downloadOBJ download object
     * @return Observable<any>
     */
    onDownloadFle(downloadOBJ) {
        return this.dataService.postDownload(_shared_API_APIName__WEBPACK_IMPORTED_MODULE_2__.APIName.downloadFile, downloadOBJ);
    }
}
ShippingLabelService.ɵfac = function ShippingLabelService_Factory(t) { return new (t || ShippingLabelService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_DataService_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService)); };
ShippingLabelService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ShippingLabelService, factory: ShippingLabelService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=projects_connect_src_app_Pages_ConnectModules_connect-modules_module_ts.js.map