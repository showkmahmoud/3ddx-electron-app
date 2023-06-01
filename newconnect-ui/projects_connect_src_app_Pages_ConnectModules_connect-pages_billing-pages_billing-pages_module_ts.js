"use strict";
(self["webpackChunknew_connect_v3"] = self["webpackChunknew_connect_v3"] || []).push([["projects_connect_src_app_Pages_ConnectModules_connect-pages_billing-pages_billing-pages_module_ts"],{

/***/ 48740:
/*!*******************************************************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/ConnectModules/connect-pages/billing-pages/billing-pages-routing.module.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingPagesRoutingModule": () => (/* binding */ BillingPagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _billing_billing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./billing/billing.component */ 98291);
/* harmony import */ var _charged_charged_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charged/charged.component */ 72323);
/* harmony import */ var _not_charged_not_charged_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-charged/not-charged.component */ 61632);
/* harmony import */ var _Resolvers_Billing_Resolver_Charged_charged_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Resolvers/Billing-Resolver/Charged/charged.resolver */ 50290);
/* harmony import */ var _Resolvers_Billing_Resolver_Not_Charged_not_charged_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Resolvers/Billing-Resolver/Not_Charged/not-charged.resolver */ 31800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);








const routes = [
    {
        path: '',
        component: _billing_billing_component__WEBPACK_IMPORTED_MODULE_0__.BillingComponent,
        children: [
            {
                path: 'charged',
                component: _charged_charged_component__WEBPACK_IMPORTED_MODULE_1__.ChargedComponent,
                resolve: {
                    ChargedOrders: _Resolvers_Billing_Resolver_Charged_charged_resolver__WEBPACK_IMPORTED_MODULE_3__.ChargedResolver,
                },
                data: { breadcrumbs: ['Charged Billing Orders'] }
            },
            {
                path: 'not-charged',
                component: _not_charged_not_charged_component__WEBPACK_IMPORTED_MODULE_2__.NotChargedComponent,
                resolve: {
                    NotCharged: _Resolvers_Billing_Resolver_Not_Charged_not_charged_resolver__WEBPACK_IMPORTED_MODULE_4__.NotChargedResolver
                },
                data: { breadcrumbs: ['Not Charged Billing Orders'] }
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'charged'
            },
        ]
    }
];
class BillingPagesRoutingModule {
}
BillingPagesRoutingModule.ɵfac = function BillingPagesRoutingModule_Factory(t) { return new (t || BillingPagesRoutingModule)(); };
BillingPagesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: BillingPagesRoutingModule });
BillingPagesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BillingPagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 13911:
/*!***********************************************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/ConnectModules/connect-pages/billing-pages/billing-pages.module.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingPagesModule": () => (/* binding */ BillingPagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _billing_billing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./billing/billing.component */ 98291);
/* harmony import */ var _billing_pages_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./billing-pages-routing.module */ 48740);
/* harmony import */ var shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/shared-modules/angular-material.module */ 20793);
/* harmony import */ var _charged_charged_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charged/charged.component */ 72323);
/* harmony import */ var _not_charged_not_charged_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-charged/not-charged.component */ 61632);
/* harmony import */ var shared_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/shared-components/shared-components.module */ 83442);
/* harmony import */ var projects_connect_src_app_Resolvers_Billing_Resolver_Charged_charged_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! projects/connect/src/app/Resolvers/Billing-Resolver/Charged/charged.resolver */ 50290);
/* harmony import */ var projects_connect_src_app_Resolvers_Billing_Resolver_Not_Charged_not_charged_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/connect/src/app/Resolvers/Billing-Resolver/Not_Charged/not-charged.resolver */ 31800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);










class BillingPagesModule {
}
BillingPagesModule.ɵfac = function BillingPagesModule_Factory(t) { return new (t || BillingPagesModule)(); };
BillingPagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: BillingPagesModule });
BillingPagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        projects_connect_src_app_Resolvers_Billing_Resolver_Charged_charged_resolver__WEBPACK_IMPORTED_MODULE_6__.ChargedResolver,
        projects_connect_src_app_Resolvers_Billing_Resolver_Not_Charged_not_charged_resolver__WEBPACK_IMPORTED_MODULE_7__.NotChargedResolver,
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _billing_pages_routing_module__WEBPACK_IMPORTED_MODULE_1__.BillingPagesRoutingModule,
            shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_2__.AngularMaterialModule,
            shared_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__.SharedComponentsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](BillingPagesModule, { declarations: [_billing_billing_component__WEBPACK_IMPORTED_MODULE_0__.BillingComponent,
        _charged_charged_component__WEBPACK_IMPORTED_MODULE_3__.ChargedComponent,
        _not_charged_not_charged_component__WEBPACK_IMPORTED_MODULE_4__.NotChargedComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _billing_pages_routing_module__WEBPACK_IMPORTED_MODULE_1__.BillingPagesRoutingModule,
        shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_2__.AngularMaterialModule,
        shared_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__.SharedComponentsModule] }); })();


/***/ }),

/***/ 98291:
/*!****************************************************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/ConnectModules/connect-pages/billing-pages/billing/billing.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingComponent": () => (/* binding */ BillingComponent)
/* harmony export */ });
/* harmony import */ var _shared_shared_static_id_shared_static_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-static-id/shared-static-id */ 9470);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _Services_OrderServices_OrderListService_order_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../Services/OrderServices/OrderListService/order-list.service */ 86540);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);







function BillingComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BillingComponent_a_2_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const link_r1 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.activeLink = link_r1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("active", ctx_r0.activeLink == link_r1)("id", ctx_r0.htmlID.AnchorTags + "billing" + i_r2)("routerLink", link_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", link_r1.label, " ");
} }
class BillingComponent {
    /**
     * The Requirements For The Construction Of The Component
     * @param router For The routing
     * @param orderListService
     */
    constructor(router, orderListService) {
        this.router = router;
        this.orderListService = orderListService;
        this.links = [
            {
                label: 'Charged',
                path: 'charged'
            },
            {
                label: 'Not Charged',
                path: 'not-charged'
            }
        ];
        this.activeLink = this.links[0];
        this.background = undefined;
        this.htmlID = _shared_shared_static_id_shared_static_id__WEBPACK_IMPORTED_MODULE_0__.CStaticIds;
    }
    /**
     * onInit check activate link
     * @return void
     */
    ngOnInit() {
        this.checkActivateLink();
        this.orderListService.clearSearchData();
    }
    /**
     * checking activate link
     * @return void
     */
    checkActivateLink() {
        if (this.router.url.split('billing-page/')[1] === this.links[0].path) {
            this.activeLink = this.links[0];
        }
        else if (this.router.url.split('billing-page/')[1] === this.links[1].path) {
            this.activeLink = this.links[1];
        }
    }
}
BillingComponent.ɵfac = function BillingComponent_Factory(t) { return new (t || BillingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Services_OrderServices_OrderListService_order_list_service__WEBPACK_IMPORTED_MODULE_1__.OrderListService)); };
BillingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BillingComponent, selectors: [["app-billing"]], decls: 5, vars: 2, consts: [[1, "mt-3"], ["mat-tab-nav-bar", "", 3, "backgroundColor"], ["mat-tab-link", "", 3, "active", "id", "routerLink", "click", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", 3, "active", "id", "routerLink", "click"]], template: function BillingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BillingComponent_a_2_Template, 2, 4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("backgroundColor", ctx.background);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.links);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabNav, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabLink], styles: [".button-group[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n.button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n\tbackground-color: #f7913c !important;\n\tborder: 1px solid;\n\tcolor: white !important;\n\tmargin: 20px;\n\tfont-size: 18px;\n\ttransition: all .3s ease-in-out;\n}\n\n.button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .button-group[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n\tbackground-color: white !important;\n\tcolor: #f7913c !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbGxpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxvQ0FBb0M7Q0FDcEMsaUJBQWlCO0NBQ2pCLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osZUFBZTtDQUNmLCtCQUErQjtBQUNoQzs7QUFFQTs7Q0FFQyxrQ0FBa0M7Q0FDbEMseUJBQXlCO0FBQzFCIiwiZmlsZSI6ImJpbGxpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tZ3JvdXAge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ1dHRvbi1ncm91cCBidXR0b24ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjc5MTNjICFpbXBvcnRhbnQ7XG5cdGJvcmRlcjogMXB4IHNvbGlkO1xuXHRjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcblx0bWFyZ2luOiAyMHB4O1xuXHRmb250LXNpemU6IDE4cHg7XG5cdHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5idXR0b24tZ3JvdXAgYnV0dG9uOmhvdmVyLFxuLmJ1dHRvbi1ncm91cCAuYWN0aXZlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcblx0Y29sb3I6ICNmNzkxM2MgIWltcG9ydGFudDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 72323:
/*!****************************************************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/ConnectModules/connect-pages/billing-pages/charged/charged.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChargedComponent": () => (/* binding */ ChargedComponent)
/* harmony export */ });
/* harmony import */ var _shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-enums/ResponseCodeEnum */ 31580);
/* harmony import */ var _shared_shared_functions_HandleOrdersBilling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-functions/HandleOrdersBilling */ 46377);
/* harmony import */ var shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/shared-enums/ServiceNameEnum */ 4946);
/* harmony import */ var _shared_shared_components_shared_tables_charged_table_charged_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-components/shared-tables/charged-table/charged-table.component */ 11360);
/* harmony import */ var _shared_shared_static_id_shared_static_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-static-id/shared-static-id */ 9470);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var projects_connect_src_app_Services_BillingServices_ChargedService_charged_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/connect/src/app/Services/BillingServices/ChargedService/charged.service */ 68638);
/* harmony import */ var _shared_shared_services_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-services/date.service */ 67652);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _shared_shared_components_error_message_card_error_message_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-components/error-message-card/error-message-card.component */ 49489);














function ChargedComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-charged-table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("billing", ctx_r0.billingData);
} }
function ChargedComponent_mat_card_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChargedComponent_mat_card_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r5.pagination("prev"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", ctx_r3.htmlID.Button + "prev");
} }
function ChargedComponent_mat_card_1_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ChargedComponent_mat_card_1_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r7.pagination("next"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", ctx_r4.htmlID.Button + "next");
} }
function ChargedComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ChargedComponent_mat_card_1_button_3_Template, 2, 1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ChargedComponent_mat_card_1_button_5_Template, 2, 1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.pageNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.billingLength === 15);
} }
function ChargedComponent_app_error_message_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-error-message-card", 12);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("errorMessage", "No Charged Orders");
} }
class ChargedComponent {
    /**
     * The Requirements For The Construction Of The Component
     * @param route For using ActivatedRoute
     * @param chargedService for getting charged orders
     */
    constructor(route, chargedService, dateService) {
        this.route = route;
        this.chargedService = chargedService;
        this.dateService = dateService;
        this.billing = [];
        this.billingData = [];
        this.pageNumber = 0;
        this.pageSize = 15;
        this.htmlID = _shared_shared_static_id_shared_static_id__WEBPACK_IMPORTED_MODULE_4__.CStaticIds;
    }
    ngOnInit() {
        this.getCharged();
    }
    /**
     * get charged orders
     * @return void
     */
    getCharged() {
        this.subscription = this.route.data.subscribe(res => {
            if (res.ChargedOrders.responsCode === _shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.OK) {
                this.billingLength = res.ChargedOrders.reponses[0].data[0].billing.length;
                if (this.billingLength) {
                    this.billing = res.ChargedOrders.reponses[0].data[0].billing;
                    this.billing = (0,_shared_shared_functions_HandleOrdersBilling__WEBPACK_IMPORTED_MODULE_1__.handleOrdersBilling)(this.billing);
                    this.getChargedData(this.billing);
                }
                ;
            }
            ;
        });
    }
    ;
    /**
     * get charged orders billing data
     * @param response charged order
     * @return void
     */
    getChargedData(response) {
        var _a, _b;
        this.billingData = [];
        if (response.length > 0) {
            for (let i = 0; i < response.length; i++) {
                this.billing = response.filter((res, index) => {
                    if (res.chargedTime === response[i].chargedTime) {
                        i = index;
                        return res.chargedTime;
                    }
                });
                this.billingData.push({
                    billing: this.billing,
                    chargeOn: (_a = this.billing[0]) === null || _a === void 0 ? void 0 : _a.chargedTime,
                    totalCost: (_b = this.billing[0]) === null || _b === void 0 ? void 0 : _b.totalCost
                });
            }
        }
        this.billingData.forEach((res, index) => {
            let arr = res.billing.map((response) => response.subOrderCost);
            let totalCost = arr.reduce((a, b) => a + b);
            this.billingData[index].totalCost = totalCost;
        });
        this.chargedService.chargedOBJ.services = [];
    }
    /**
     * page pagination
     * @param type next page or prev page
     * @return void
     */
    pagination(type) {
        if (type === 'prev' && this.pageNumber > 0) {
            this.pageNumber -= 1;
        }
        else if (type === 'next') {
            this.pageNumber += 1;
        }
        this.comp.scrollTop();
        this.chargedService.service = {
            ConditionsAnded: false,
            charged: true,
            columns: [],
            pageNumber: this.pageNumber,
            pageSize: this.pageSize,
            serviceName: shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_2__.ServiceNameEnum.CONNECT_BILLING,
        };
        this.subscription = this.chargedService.getChargedBillings().subscribe(res => {
            if (res.responsCode === _shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.OK) {
                this.billingLength = res.reponses[0].data[0].billing.length;
                if (this.billingLength) {
                    this.billing = res.reponses[0].data[0].billing;
                    this.billing = (0,_shared_shared_functions_HandleOrdersBilling__WEBPACK_IMPORTED_MODULE_1__.handleOrdersBilling)(this.billing);
                    this.getChargedData(this.billing);
                }
            }
        });
        this.chargedService.service.pageNumber = 0;
    }
    /**
     * unsubscribe on destroy
     * @return void
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.billingData = [];
    }
}
ChargedComponent.ɵfac = function ChargedComponent_Factory(t) { return new (t || ChargedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](projects_connect_src_app_Services_BillingServices_ChargedService_charged_service__WEBPACK_IMPORTED_MODULE_5__.ChargedService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_shared_services_date_service__WEBPACK_IMPORTED_MODULE_6__.DateService)); };
ChargedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ChargedComponent, selectors: [["app-charged"]], viewQuery: function ChargedComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_shared_shared_components_shared_tables_charged_table_charged_table_component__WEBPACK_IMPORTED_MODULE_3__.ChargedTableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.comp = _t.first);
    } }, decls: 3, vars: 3, consts: [["class", "animate__animated animate__fadeIn", 4, "ngIf"], ["style", "margin-bottom:90px;", "class", "mt-5 mx-5", 4, "ngIf"], [3, "errorMessage", 4, "ngIf"], [1, "animate__animated", "animate__fadeIn"], [3, "billing"], [1, "mt-5", "mx-5", 2, "margin-bottom", "90px"], [1, "row"], [1, "col-6"], ["class", "main-color-btn ", "mat-button", "", 3, "id", "click", 4, "ngIf"], ["class", "main-color-btn float-end", "mat-button", "", 3, "id", "click", 4, "ngIf"], ["mat-button", "", 1, "main-color-btn", 3, "id", "click"], ["mat-button", "", 1, "main-color-btn", "float-end", 3, "id", "click"], [3, "errorMessage"]], template: function ChargedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, ChargedComponent_mat_card_0_Template, 2, 1, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ChargedComponent_mat_card_1_Template, 6, 2, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ChargedComponent_app_error_message_card_2_Template, 1, 1, "app-error-message-card", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.billingData.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.billingData.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.billingData.length === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _shared_shared_components_shared_tables_charged_table_charged_table_component__WEBPACK_IMPORTED_MODULE_3__.ChargedTableComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _shared_shared_components_error_message_card_error_message_card_component__WEBPACK_IMPORTED_MODULE_7__.ErrorMessageCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFyZ2VkLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 61632:
/*!************************************************************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/ConnectModules/connect-pages/billing-pages/not-charged/not-charged.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotChargedComponent": () => (/* binding */ NotChargedComponent)
/* harmony export */ });
/* harmony import */ var shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/shared-enums/ResponseCodeEnum */ 31580);
/* harmony import */ var shared_shared_functions_HandleOrdersBilling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/shared-functions/HandleOrdersBilling */ 46377);
/* harmony import */ var shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/shared-enums/ServiceNameEnum */ 4946);
/* harmony import */ var shared_shared_components_shared_tables_not_charged_table_not_charged_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-components/shared-tables/not-charged-table/not-charged-table.component */ 90620);
/* harmony import */ var _shared_shared_static_id_shared_static_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-static-id/shared-static-id */ 9470);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var projects_connect_src_app_Services_BillingServices_ChargedService_charged_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/connect/src/app/Services/BillingServices/ChargedService/charged.service */ 68638);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _shared_shared_components_error_message_card_error_message_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-components/error-message-card/error-message-card.component */ 49489);














function NotChargedComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-not-charged-table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("notChargedBilling", ctx_r0.notCharged);
} }
function NotChargedComponent_mat_card_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NotChargedComponent_mat_card_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r5.pagination("prev"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", ctx_r3.htmlID.Button + "prev");
} }
function NotChargedComponent_mat_card_1_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NotChargedComponent_mat_card_1_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r7.pagination("next"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", ctx_r4.htmlID.Button + "next");
} }
function NotChargedComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, NotChargedComponent_mat_card_1_button_3_Template, 2, 1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, NotChargedComponent_mat_card_1_button_5_Template, 2, 1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.pageNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.billingLength === 15);
} }
function NotChargedComponent_app_error_message_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-error-message-card", 12);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("errorMessage", "No Not Charged Orders");
} }
class NotChargedComponent {
    constructor(dialog, route, chargedService) {
        this.dialog = dialog;
        this.route = route;
        this.chargedService = chargedService;
        this.pageNumber = 0;
        this.pageSize = 15;
        this.htmlID = _shared_shared_static_id_shared_static_id__WEBPACK_IMPORTED_MODULE_4__.CStaticIds;
    }
    ngOnInit() {
        this.getNotCharged();
    }
    /**
     * get not charged orders
     * @return void
     */
    getNotCharged() {
        this.subscription = this.route.data.subscribe(notCharged => {
            if (notCharged.NotCharged.responsCode === shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.OK) {
                this.billingLength = notCharged.NotCharged.reponses[0].data[0].billing.length;
                if (this.billingLength) {
                    this.notCharged = notCharged.NotCharged.reponses[0].data[0].billing;
                    this.notCharged = (0,shared_shared_functions_HandleOrdersBilling__WEBPACK_IMPORTED_MODULE_1__.handleOrdersBilling)(this.notCharged);
                    this.chargedService.chargedOBJ.services = [];
                }
            }
        });
    }
    /**
     * page pagination
     * @param type next page or prev page
     * @return void
     */
    pagination(type) {
        if (type === 'prev' && this.pageNumber > 0) {
            this.pageNumber -= 1;
        }
        else if (type === 'next') {
            this.pageNumber += 1;
        }
        this.comp.scrollTop();
        this.chargedService.service = {
            ConditionsAnded: false,
            charged: true,
            columns: [],
            pageNumber: this.pageNumber,
            pageSize: this.pageSize,
            serviceName: shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_2__.ServiceNameEnum.CONNECT_BILLING,
        };
        this.subscription = this.chargedService.getNotChargedBillings().subscribe(notCharged => {
            if ((notCharged === null || notCharged === void 0 ? void 0 : notCharged.responsCode) === shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.OK) {
                this.billingLength = notCharged.reponses[0].data[0].billing.length;
                if (this.billingLength) {
                    this.notCharged = notCharged.reponses[0].data[0].billing;
                    this.notCharged = (0,shared_shared_functions_HandleOrdersBilling__WEBPACK_IMPORTED_MODULE_1__.handleOrdersBilling)(this.notCharged);
                    this.chargedService.chargedOBJ.services = [];
                }
            }
        });
    }
    /**
     * unsubscribe on destroy
     * @return void
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
NotChargedComponent.ɵfac = function NotChargedComponent_Factory(t) { return new (t || NotChargedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](projects_connect_src_app_Services_BillingServices_ChargedService_charged_service__WEBPACK_IMPORTED_MODULE_5__.ChargedService)); };
NotChargedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: NotChargedComponent, selectors: [["app-not-charged"]], viewQuery: function NotChargedComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](shared_shared_components_shared_tables_not_charged_table_not_charged_table_component__WEBPACK_IMPORTED_MODULE_3__.NotChargedTableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.comp = _t.first);
    } }, decls: 3, vars: 3, consts: [["class", "animate__animated animate__fadeIn", 4, "ngIf"], ["style", "margin-bottom:90px;", "class", "mt-5 mx-5", 4, "ngIf"], [3, "errorMessage", 4, "ngIf"], [1, "animate__animated", "animate__fadeIn"], [3, "notChargedBilling"], [1, "mt-5", "mx-5", 2, "margin-bottom", "90px"], [1, "row"], [1, "col-6"], ["class", "main-color-btn ", "mat-button", "", 3, "id", "click", 4, "ngIf"], ["class", "main-color-btn float-end", "mat-button", "", 3, "id", "click", 4, "ngIf"], ["mat-button", "", 1, "main-color-btn", 3, "id", "click"], ["mat-button", "", 1, "main-color-btn", "float-end", 3, "id", "click"], [3, "errorMessage"]], template: function NotChargedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, NotChargedComponent_mat_card_0_Template, 2, 1, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, NotChargedComponent_mat_card_1_Template, 6, 2, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, NotChargedComponent_app_error_message_card_2_Template, 1, 1, "app-error-message-card", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.notCharged.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.notCharged.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.notCharged.length === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, shared_shared_components_shared_tables_not_charged_table_not_charged_table_component__WEBPACK_IMPORTED_MODULE_3__.NotChargedTableComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _shared_shared_components_error_message_card_error_message_card_component__WEBPACK_IMPORTED_MODULE_6__.ErrorMessageCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtY2hhcmdlZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 50290:
/*!*****************************************************************************************!*\
  !*** ./projects/connect/src/app/Resolvers/Billing-Resolver/Charged/charged.resolver.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChargedResolver": () => (/* binding */ ChargedResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _Services_BillingServices_ChargedService_charged_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Services/BillingServices/ChargedService/charged.service */ 68638);


class ChargedResolver {
    /**
     * The Requirements For The Construction Of The resolver
     * @param chargedService for ChargedService
     */
    constructor(chargedService) {
        this.chargedService = chargedService;
    }
    /**
     * get charged billings
     * @return Observable<IMainResponse>
     */
    resolve() {
        return this.chargedService.getChargedBillings();
    }
}
ChargedResolver.ɵfac = function ChargedResolver_Factory(t) { return new (t || ChargedResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_Services_BillingServices_ChargedService_charged_service__WEBPACK_IMPORTED_MODULE_0__.ChargedService)); };
ChargedResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ChargedResolver, factory: ChargedResolver.ɵfac });


/***/ }),

/***/ 31800:
/*!*************************************************************************************************!*\
  !*** ./projects/connect/src/app/Resolvers/Billing-Resolver/Not_Charged/not-charged.resolver.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotChargedResolver": () => (/* binding */ NotChargedResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _Services_BillingServices_ChargedService_charged_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Services/BillingServices/ChargedService/charged.service */ 68638);


class NotChargedResolver {
    /**
     * The Requirements For The Construction Of The resolver
     * @param chargedService for ChargedService
     */
    constructor(chargedService) {
        this.chargedService = chargedService;
    }
    /**
     * get not-charged billings
     * @return Observable<IMainResponse>
     */
    resolve() {
        return this.chargedService.getNotChargedBillings();
    }
}
NotChargedResolver.ɵfac = function NotChargedResolver_Factory(t) { return new (t || NotChargedResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_Services_BillingServices_ChargedService_charged_service__WEBPACK_IMPORTED_MODULE_0__.ChargedService)); };
NotChargedResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotChargedResolver, factory: NotChargedResolver.ɵfac });


/***/ }),

/***/ 68638:
/*!*********************************************************************************************!*\
  !*** ./projects/connect/src/app/Services/BillingServices/ChargedService/charged.service.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChargedService": () => (/* binding */ ChargedService)
/* harmony export */ });
/* harmony import */ var _shared_API_APIName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../shared/API/APIName */ 93645);
/* harmony import */ var _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Models/Enums/RequestTypes/RequestTypes */ 20987);
/* harmony import */ var _shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/shared-enums/ServiceNameEnum */ 4946);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _DataService_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../DataService/data.service */ 16637);





class ChargedService {
    /**
     * The Requirements For The Construction Of The service
     * @param dataService for managing Http methods
     */
    constructor(dataService) {
        this.dataService = dataService;
        this.chargedOBJ = { services: [] };
        this.chargedOBJ.requestType = _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_1__.ERequestTypes.VIEW;
        this.service = {
            ConditionsAnded: false,
            charged: true,
            columns: [],
            pageNumber: 0,
            pageSize: 15,
            serviceName: _shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_2__.ServiceNameEnum.CONNECT_BILLING,
        };
    }
    /**
     * get charged billings
     * @return Observable<IMainResponse>
     */
    getChargedBillings() {
        this.service.charged = true;
        this.chargedOBJ.services.push(this.service);
        return this.dataService.post(_shared_API_APIName__WEBPACK_IMPORTED_MODULE_0__.APIName.ORDERS, this.chargedOBJ);
    }
    /**
     * get not-charged billings
     * @return Observable<IMainResponse>
     */
    getNotChargedBillings() {
        this.service.charged = false;
        this.chargedOBJ.services.push(this.service);
        return this.dataService.post(_shared_API_APIName__WEBPACK_IMPORTED_MODULE_0__.APIName.ORDERS, this.chargedOBJ);
    }
}
ChargedService.ɵfac = function ChargedService_Factory(t) { return new (t || ChargedService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_DataService_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService)); };
ChargedService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ChargedService, factory: ChargedService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=projects_connect_src_app_Pages_ConnectModules_connect-pages_billing-pages_billing-pages_module_ts.js.map