"use strict";
(self["webpackChunknew_connect_v3"] = self["webpackChunknew_connect_v3"] || []).push([["projects_connect_src_app_Pages_ConnectModules_connect-pages_order-page_order-page_module_ts"],{

/***/ 31344:
/*!*************************************************************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/ConnectModules/connect-pages/order-page/order-details/order-details.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderDetailsComponent": () => (/* binding */ OrderDetailsComponent)
/* harmony export */ });
/* harmony import */ var _shared_shared_components_shared_order_list_send_to_friend_send_to_friend_send_to_friend_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-components/shared-order-list/send-to-friend/send-to-friend/send-to-friend.component */ 34932);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../environments/environment */ 75514);
/* harmony import */ var _shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-enums/ResponseCodeEnum */ 31580);
/* harmony import */ var _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Models/Enums/RequestTypes/RequestTypes */ 20987);
/* harmony import */ var _shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-enums/ServiceNameEnum */ 4946);
/* harmony import */ var _shared_shared_static_id_shared_static_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-static-id/shared-static-id */ 9470);
/* harmony import */ var _shared_shared_components_shard_popup_deducted_cost_deducted_cost_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-components/shard-popup/deducted-cost/deducted-cost.component */ 77754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _Services_OrderServices_OrderListService_order_list_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../Services/OrderServices/OrderListService/order-list.service */ 86540);
/* harmony import */ var _shared_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-services/toastr.service */ 55325);
/* harmony import */ var projects_connect_src_app_Services_OrderServices_actions_actions_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! projects/connect/src/app/Services/OrderServices/actions/actions.service */ 83615);
/* harmony import */ var _shared_shared_services_generate_order_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-services/generate-order-data.service */ 28348);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _shared_shared_components_shared_order_list_Order_Details_order_details_card_order_details_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-components/shared-order-list/Order-Details/order-details-card/order-details-card.component */ 50603);


















function OrderDetailsComponent_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 22);
} }
function OrderDetailsComponent_i_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 23);
} }
function OrderDetailsComponent_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 24);
} }
function OrderDetailsComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx_r3.htmlID.Input + "order-cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r3.actionService.orderData.totalCost);
} }
function OrderDetailsComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("(", ctx_r4.actionService.orderData.diffVoucherCost, ") out of ", ctx_r4.actionService.orderData.totalCost, "");
} }
function OrderDetailsComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function OrderDetailsComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r10.viewDeductedDetails(ctx_r10.actionService.orderData); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx_r5.htmlID.Button + "deducted-cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Deducted ", ctx_r5.actionService.orderData.deductedTotalCost, " ");
} }
function OrderDetailsComponent_div_23_h3_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "h3", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Arch of Interest: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx_r12.htmlID.Input + "arch-interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r12.actionService.orderData.arch);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx_r12.htmlID.Input + "arch-type");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r12.actionService.orderData.archType);
} }
function OrderDetailsComponent_div_23_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "h3", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Maxilla: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "h3", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Mandible: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx_r13.htmlID.Input + "arch-maxillatype");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r13.actionService.orderData.Maxilla);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx_r13.htmlID.Input + "arch-mandibletype");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r13.actionService.orderData.Mandible);
} }
function OrderDetailsComponent_div_23_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "h3", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Type: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx_r14.htmlID.Input + "arch-typeofArch");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r14.actionService.orderData.typeofArch);
} }
function OrderDetailsComponent_div_23_h3_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Software: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx_r15.htmlID.Input + "software");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r15.actionService.orderData.software);
} }
function OrderDetailsComponent_div_23_h3_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Format: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx_r16.htmlID.Input + "format");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r16.actionService.orderData.formatEnum);
} }
function OrderDetailsComponent_div_23_h3_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Radiologist: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx_r17.htmlID.Input + "radiologist");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r17.actionService.orderData.radiologist);
} }
function OrderDetailsComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, OrderDetailsComponent_div_23_h3_2_Template, 8, 4, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, OrderDetailsComponent_div_23_div_3_Template, 9, 4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, OrderDetailsComponent_div_23_div_4_Template, 5, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, OrderDetailsComponent_div_23_h3_6_Template, 4, 2, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, OrderDetailsComponent_div_23_h3_7_Template, 4, 2, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, OrderDetailsComponent_div_23_h3_9_Template, 4, 2, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r6.actionService.orderData.arch !== "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r6.actionService.orderData.arch == "Double Arch" && ctx_r6.istype());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r6.actionService.orderData.arch != "Double Arch" && ctx_r6.istype() && ctx_r6.actionService.orderData.typeofArch);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r6.actionService.orderData.software);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r6.isFormat() && ctx_r6.actionService.orderData.formatEnum !== "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r6.actionService.orderData.radiologist && ctx_r6.actionService.orderData.radiologist !== "Not Assigned");
} }
function OrderDetailsComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function OrderDetailsComponent_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r18.onNavigateToAddToOrder(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Add To order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx_r7.htmlID.Button + "add-to-order");
} }
function OrderDetailsComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function OrderDetailsComponent_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r20.sendToFriend(ctx_r20.actionService.orderData); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Send To a Friend ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx_r8.htmlID.Button + "send-to-friend");
} }
function OrderDetailsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "app-order-details-card", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onConfirmingSurgicalGuide", function OrderDetailsComponent_div_28_Template_app_order_details_card_onConfirmingSurgicalGuide_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r23.actionService.confirmSurgicalGuide($event, ctx_r23.orderId); })("onSendingStoneModel", function OrderDetailsComponent_div_28_Template_app_order_details_card_onSendingStoneModel_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r25.actionService.sendStoneModel(ctx_r25.order.orderId); })("onUploadingFiles", function OrderDetailsComponent_div_28_Template_app_order_details_card_onUploadingFiles_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r26.actionService.uploadMissingFiles(); })("onDownloadFile", function OrderDetailsComponent_div_28_Template_app_order_details_card_onDownloadFile_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r24); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r27.actionService.onDownloadFile($event); })("onUploadFileEmmit", function OrderDetailsComponent_div_28_Template_app_order_details_card_onUploadFileEmmit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r24); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r28.actionService.onUploadFileEmmit($event, ctx_r28.orderId); })("onPrepareTrackingNumberEmmit", function OrderDetailsComponent_div_28_Template_app_order_details_card_onPrepareTrackingNumberEmmit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r24); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r29.actionService.onPrepareTrackingNumber($event, ctx_r29.orderId); })("onUploadGRMRFilesEmmit", function OrderDetailsComponent_div_28_Template_app_order_details_card_onUploadGRMRFilesEmmit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r24); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r30.actionService.onUploadGRMRFilesEmmit($event, ctx_r30.orderId); })("onAcceptRejectRestorationGFMREmmit", function OrderDetailsComponent_div_28_Template_app_order_details_card_onAcceptRejectRestorationGFMREmmit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r24); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r31.actionService.onAcceptRejectRestorationGFMR($event, ctx_r31.orderId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subOrder_r22 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("orderDetails", subOrder_r22)("orderId", ctx_r9.orderId)("logo", ctx_r9.logo)("patientName", ctx_r9.actionService.orderData.patientName)("scanningCenter", ctx_r9.actionService.orderData.scanningCenter)("surgicalGuide", ctx_r9.surgicalGuide);
} }
class OrderDetailsComponent {
    /**
     * The Requirements For The Construction Of The Component
     * @param router For The routing
     * @param dialog For The dialogue
     * @param activeRoute For The activeRoute
     * @param generateOrderDataService For The generateOrderDataService
     * @param orderService For The orderService
     * @param orderDetailsService For The orderDetailsService
     * @param toastService For The toastService
     * @param downloadService For The downloadService
     * @param uploadService For The uploadService
     * @param uploadProgressService For The ploadProgressService
     * @param surgicalGuideService For The surgicalGuideService
     * @param acceptRejectRestorationService For The acceptRejectRestorationService
     */
    constructor(router, dialog, activeRoute, orderService, toastService, actionService, generateOrderDataService) {
        this.router = router;
        this.dialog = dialog;
        this.activeRoute = activeRoute;
        this.orderService = orderService;
        this.toastService = toastService;
        this.actionService = actionService;
        this.generateOrderDataService = generateOrderDataService;
        this.logo = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.connectLogo;
        this.trackNumberOBJ = { requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_3__.ERequestTypes.UPDATE, services: [] };
        this.downloadFile = { requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_3__.ERequestTypes.VIEW, services: [] };
        this.surgicalGuideOBJ = { requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_3__.ERequestTypes.VIEW, services: [] };
        this.surgicalGuideConfirmOBJ = { requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_3__.ERequestTypes.UPDATE, services: [] };
        this.sendToFriendOBJ = { requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_3__.ERequestTypes.ADD, services: [] };
        this.AcceptRejectRestorationGFMROBJ = { requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_3__.ERequestTypes.UPDATE, services: [] };
        this.surgicalGuide = {};
        this.htmlID = _shared_shared_static_id_shared_static_id__WEBPACK_IMPORTED_MODULE_5__.CStaticIds;
    }
    ngOnInit() {
        this.activeRoute.params.subscribe(params => {
            if (params.orderId) {
                this.orderId = +params.orderId;
            }
        });
        this.getOrderDetails();
    }
    /**
     * get order details
     * @return void
     */
    getOrderDetails() {
        this.activeRoute.data.subscribe(res => {
            if (res.orderDetails.responsCode === _shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_2__.ResponseCodeEnum.OK) {
                this.actionService.orderData = this.generateOrderDataService.onGenerateArr(res.orderDetails.data.VIEW_ORDER_ALL)[0];
            }
        });
    }
    /**
     * navigate to view all orders list
     * @return void
     */
    viewOrders() {
        this.router.navigate(['connect-modules', 'View-Orders-page']);
    }
    /**
     * navigate to add to order
     * @return void
     */
    onNavigateToAddToOrder() {
        this.router.navigate(['connect-modules', 'add-order-pages', this.orderId]);
    }
    /**
     * send order to friend pop-up
     * @param order sent order
     * @return void
     */
    sendToFriend(order) {
        const dialogRef = this.dialog.open(_shared_shared_components_shared_order_list_send_to_friend_send_to_friend_send_to_friend_component__WEBPACK_IMPORTED_MODULE_0__.SendToFriendComponent, {
            minWidth: '50vw',
            maxWidth: '70vw',
            maxHeight: '90vh',
            data: {
                logo: this.logo,
                order
            }
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                result.orderId = this.orderId;
                this.addToFriend(result);
            }
        });
    }
    /**
     * set sent order object and send order to friend
     * @param orderDetails sent order
     * @return void
     */
    addToFriend(orderDetails) {
        this.sendToFriendOBJ.services[0] = {
            sharedOrderEnum: orderDetails.sharedOrderEnum,
            columns: [],
            ConditionsAnded: false,
            serviceName: _shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_4__.ServiceNameEnum.SEND_TO_FRIEND,
            orderId: orderDetails.orderId,
            friendEmail: orderDetails.friendMail,
        };
        this.orderService.sendOrderToFriend(this.sendToFriendOBJ).subscribe(res => {
            if (res.responsCode === _shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_2__.ResponseCodeEnum.OK) {
                this.toastService.addAlert('Sent Successfully', 'Sent To Friend', 'start');
            }
        });
    }
    isFormat() {
        return this.actionService.orderData.subOrders.find((sub) => sub.subOrderType === 'Conversion');
    }
    istype() {
        return this.actionService.orderData.subOrders.find((sub) => sub.subOrderType === 'Conversion' || sub.subOrderType === 'Full Guided');
    }
    viewDeductedDetails(order) {
        const deductedSubOrders = order.subOrders.filter((subOrder) => subOrder.deductedCost);
        const dialogRef = this.dialog.open(_shared_shared_components_shard_popup_deducted_cost_deducted_cost_component__WEBPACK_IMPORTED_MODULE_6__.DeductedCostComponent, {
            minWidth: '50vw',
            minHeight: '40vh',
            maxWidth: '80vw',
            maxHeight: '90vh',
            autoFocus: false,
            data: {
                logo: this.logo,
                deductedSubOrders,
            }
        });
    }
}
OrderDetailsComponent.ɵfac = function OrderDetailsComponent_Factory(t) { return new (t || OrderDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_Services_OrderServices_OrderListService_order_list_service__WEBPACK_IMPORTED_MODULE_7__.OrderListService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](projects_connect_src_app_Services_OrderServices_actions_actions_service__WEBPACK_IMPORTED_MODULE_9__.ActionsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_shared_services_generate_order_data_service__WEBPACK_IMPORTED_MODULE_10__.GenerateOrderDataService)); };
OrderDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: OrderDetailsComponent, selectors: [["app-order-details"]], decls: 29, vars: 15, consts: [[1, "px-0", "pt-0", "mt-2", 2, "margin-bottom", "80px"], [1, "d-flex", "justify-content-end", "mb-5", "p-2", "show-less"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "id", "click"], [1, "order-detail-info", "d-flex", "justify-content-around"], [1, "d-flex"], ["mat-card-avatar", "", 1, "example-header-image", "mr-3"], ["class", "pi pi-user text-warning mr-2", "style", "font-size: 35px", 4, "ngIf"], ["class", "pi pi-ticket text-warning mr-2", "style", "font-size: 35px", 4, "ngIf"], ["class", "pi pi-server text-warning mr-2", "style", "font-size: 35px", 4, "ngIf"], [1, "order-patient-name", "px-sm-3", "px-md-0"], [1, "mb-1", 3, "id"], [1, "mt-0", 3, "id"], [1, "order-cost"], ["class", "order-price", 3, "id", 4, "ngIf"], ["class", "font-bold", 4, "ngIf"], [1, "deducted-cost-btn"], ["mat-button", "", "class", "d-block orders-btn p-0", 3, "id", "click", 4, "ngIf"], [4, "ngIf"], [1, "order-btns"], ["mat-button", "", "class", "d-block", "color", "primary", 3, "id", "click", 4, "ngIf"], [1, "row", "mt-4", "mx-2"], ["class", " col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-5", 4, "ngFor", "ngForOf"], [1, "pi", "pi-user", "text-warning", "mr-2", 2, "font-size", "35px"], [1, "pi", "pi-ticket", "text-warning", "mr-2", 2, "font-size", "35px"], [1, "pi", "pi-server", "text-warning", "mr-2", 2, "font-size", "35px"], [1, "order-price", 3, "id"], [1, "font-bold"], ["mat-button", "", 1, "d-block", "orders-btn", "p-0", 3, "id", "click"], [1, "order-arch"], ["class", "mb-1", 4, "ngIf"], ["class", "order-arch", 4, "ngIf"], [1, "order-software"], [1, "order-radiologist"], [1, "mb-1"], [3, "id"], ["mat-button", "", "color", "primary", 1, "d-block", 3, "id", "click"], [1, "col-xl-3", "col-lg-4", "col-md-6", "col-sm-12", "mt-5"], [3, "orderDetails", "orderId", "logo", "patientName", "scanningCenter", "surgicalGuide", "onConfirmingSurgicalGuide", "onSendingStoneModel", "onUploadingFiles", "onDownloadFile", "onUploadFileEmmit", "onPrepareTrackingNumberEmmit", "onUploadGRMRFilesEmmit", "onAcceptRejectRestorationGFMREmmit"]], template: function OrderDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function OrderDetailsComponent_Template_button_click_2_listener() { return ctx.viewOrders(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Show less");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, OrderDetailsComponent_i_7_Template, 1, 0, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, OrderDetailsComponent_i_8_Template, 1, 0, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, OrderDetailsComponent_i_9_Template, 1, 0, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, "Total Cost: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, OrderDetailsComponent_span_19_Template, 2, 2, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](20, OrderDetailsComponent_span_20_Template, 2, 2, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, OrderDetailsComponent_button_22_Template, 2, 2, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, OrderDetailsComponent_div_23_Template, 10, 6, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](25, OrderDetailsComponent_button_25_Template, 2, 1, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, OrderDetailsComponent_button_26_Template, 2, 1, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](28, OrderDetailsComponent_div_28_Template, 2, 6, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx.htmlID.Button + "show-less");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.actionService.orderData.orderType === "Patient");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.actionService.orderData.orderType === "Misc");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.actionService.orderData.orderType === "Software");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx.htmlID.Input + "patient-name");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.actionService.orderData.client, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx.htmlID.Input + "orderId");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.orderId);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.actionService.orderData.orderStatus == null ? null : ctx.actionService.orderData.orderStatus.subOrderName) !== "Voucher");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.actionService.orderData.orderStatus == null ? null : ctx.actionService.orderData.orderStatus.subOrderName) === "Voucher");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.actionService.orderData.hasDeductedCost);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.actionService.orderData.orderType === "Patient" && (ctx.actionService.orderData.orderStatus == null ? null : ctx.actionService.orderData.orderStatus.subOrderName) !== "Voucher");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.actionService.orderData.isOwner && (ctx.actionService.orderData.orderStatus == null ? null : ctx.actionService.orderData.orderStatus.subOrderName) !== "Voucher" && ctx.actionService.orderData.orderType === "Patient" && ctx.actionService.orderData.checkAddToOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (!ctx.actionService.orderData.isOwner || (ctx.actionService.orderData.orderStatus == null ? null : ctx.actionService.orderData.orderStatus.subOrderName) !== "Voucher") && ctx.actionService.orderData.orderType !== "Software");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.actionService.orderData.subOrders);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardAvatar, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _shared_shared_components_shared_order_list_Order_Details_order_details_card_order_details_card_component__WEBPACK_IMPORTED_MODULE_11__.OrderDetailsCardComponent], styles: [".order-detail-info[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n@media only screen and (max-width: 1150px)  {\n  .order-detail-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRiIsImZpbGUiOiJvcmRlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXItZGV0YWlsLWluZm8ge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTUwcHgpICB7XG4gIC5vcmRlci1kZXRhaWwtaW5mbyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 98668:
/*!*******************************************************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/ConnectModules/connect-pages/order-page/order-list/order-list.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderListComponent": () => (/* binding */ OrderListComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../environments/environment */ 75514);
/* harmony import */ var _shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-enums/ResponseCodeEnum */ 31580);
/* harmony import */ var _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Models/Enums/RequestTypes/RequestTypes */ 20987);
/* harmony import */ var shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/shared-enums/ServiceNameEnum */ 4946);
/* harmony import */ var shared_API_APIName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/API/APIName */ 93645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _shared_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-services/toastr.service */ 55325);
/* harmony import */ var _Services_OrderServices_OrderListService_order_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../Services/OrderServices/OrderListService/order-list.service */ 86540);
/* harmony import */ var _Services_OrderServices_actions_actions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../Services/OrderServices/actions/actions.service */ 83615);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shared_shared_components_shared_order_list_View_Orders_view_orders_view_orders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../../shared/shared-components/shared-order-list/View-Orders/view-orders/view-orders.component */ 2076);












function OrderListComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "app-view-orders", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("orderDetails", function OrderListComponent_ng_container_0_Template_app_view_orders_orderDetails_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r1.navigateToOrder($event); })("reload", function OrderListComponent_ng_container_0_Template_app_view_orders_reload_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r3.reload(); })("paginationOrder", function OrderListComponent_ng_container_0_Template_app_view_orders_paginationOrder_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r4.paginationOrder($event); })("addToOrderPage", function OrderListComponent_ng_container_0_Template_app_view_orders_addToOrderPage_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r5.onNavigateToAddToOrder($event); })("filterSearch", function OrderListComponent_ng_container_0_Template_app_view_orders_filterSearch_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r6.onFilterOrder($event); })("addToFriend", function OrderListComponent_ng_container_0_Template_app_view_orders_addToFriend_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r7.addToFriend($event); })("onUploadFileEmmit", function OrderListComponent_ng_container_0_Template_app_view_orders_onUploadFileEmmit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r8.actionService.onUploadFileEmmit($event); })("onDownloadFile", function OrderListComponent_ng_container_0_Template_app_view_orders_onDownloadFile_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r9.actionService.onDownloadFile($event); })("onUploadGRMRFilesEmmit", function OrderListComponent_ng_container_0_Template_app_view_orders_onUploadGRMRFilesEmmit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r10.actionService.onUploadGRMRFilesEmmit($event); })("onConfirmingSurgicalGuide", function OrderListComponent_ng_container_0_Template_app_view_orders_onConfirmingSurgicalGuide_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r11.actionService.confirmSurgicalGuide($event); })("onAcceptRejectRestorationGFMREmmit", function OrderListComponent_ng_container_0_Template_app_view_orders_onAcceptRejectRestorationGFMREmmit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r12.actionService.onAcceptRejectRestorationGFMR($event); })("onPrepareTrackingNumberEmmit", function OrderListComponent_ng_container_0_Template_app_view_orders_onPrepareTrackingNumberEmmit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r13.actionService.onPrepareTrackingNumber($event); })("patientNameSearch", function OrderListComponent_ng_container_0_Template_app_view_orders_patientNameSearch_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r14.search(); })("onChangePatientName", function OrderListComponent_ng_container_0_Template_app_view_orders_onChangePatientName_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r15.getPatientName($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("logoSrc", ctx_r0.logo)("orderList", ctx_r0.orderListService.orderList)("Voucher", ctx_r0.Voucher)("showShorMoreBtn", ctx_r0.orderListService.showShorMoreBtn)("ordersCount", ctx_r0.orderListService.ordersCount)("patients", ctx_r0.orderListService.patients);
} }
class OrderListComponent {
    /**
     * The Requirements For The Construction Of The Component
     * @param router For The routing
     * @param route For using activated route
     * @param orderListService for getting orders list
     * @param toastService To show request notifications
     * @param actionService to fire action function
     */
    constructor(router, route, toastService, orderListService, actionService) {
        this.router = router;
        this.route = route;
        this.toastService = toastService;
        this.orderListService = orderListService;
        this.actionService = actionService;
        this.logo = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connectLogo;
        this.orderList = [];
        this.sendToFriendOBJ = { requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_2__.ERequestTypes.ADD, services: [] };
        this.advancedSearchOBJ = { requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_2__.ERequestTypes.VIEW, services: [] };
        this.Voucher = {
            env: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.cpRootURL,
            api: shared_API_APIName__WEBPACK_IMPORTED_MODULE_4__.APIName.orderList.voucher,
            VoucherReq: { requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_2__.ERequestTypes.VIEW, services: [] }
        };
        this.ordersCount = 0;
    }
    /**
     * onInit get order list , orders count and check for page number
     * @return void
     */
    ngOnInit() {
        if (!this.orderListService.filter) {
            if (this.orderListService.showOrderDetails) {
                this.checkPageNumber();
            }
        }
        this.getOrderList();
        this.orderListService.showOrderDetails = false;
    }
    /**
     * paginate orders
     * @param event
     * @return void
     */
    paginationOrder(event) {
        window.scrollTo(0, 0);
        this.orderListService.paginationOrderResolver().subscribe((res) => {
            if (res.responsCode === _shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_1__.ResponseCodeEnum.OK) {
                this.orderListService.orderList = res.data.VIEW_ORDER_ALL;
            }
        });
    }
    /**
     * navigate to view order details
     * @param id order id
     * @return void
     */
    navigateToOrder(id) {
        this.orderListService.showOrderDetails = true;
        this.orderListService.filteredPageNumber = this.orderListService.pageNumber;
        this.router.navigate(['connect-modules', 'View-Orders-page', id]);
    }
    /**
     * reload orders
     * @return void
     */
    reload() {
        this.paginationOrder();
    }
    /**
     * getting order list
     * @return void
     */
    getOrderList() {
        this.route.data.subscribe(res => {
            if (res.OrderList.responsCode === _shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_1__.ResponseCodeEnum.OK) {
                this.orderListService.viewOrders = false;
                this.orderListService.orderList = res.OrderList.data.VIEW_ORDER_ALL;
                this.getListPagination();
            }
        });
    }
    /**
     * sending order to friend
     * @param orderDetails sent order details
     * @return void
     */
    addToFriend(orderDetails) {
        this.sendToFriendOBJ.services[0] = {
            sharedOrderEnum: orderDetails.sharedOrderEnum,
            columns: [],
            ConditionsAnded: false,
            serviceName: shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_3__.ServiceNameEnum.SEND_TO_FRIEND,
            orderId: orderDetails.orderId,
            friendEmail: orderDetails.friendMail,
        };
        this.orderListService.sendOrderToFriend(this.sendToFriendOBJ).subscribe(res => {
            if (res.responsCode === _shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_1__.ResponseCodeEnum.OK) {
                this.toastService.addAlert('Sent Successfully', 'Sent To Friend', 'start');
            }
        });
    }
    /**
     * filter orders
     * @param event filter data
     * @return void
     */
    onFilterOrder(event) {
        this.orderListService.viewOrders = false;
        this.orderListService.pageOffset = 0;
        this.checkPageNumber();
        this.orderListService.onFilterOrder(event).subscribe(res => {
            if (res.responsCode === _shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_1__.ResponseCodeEnum.OK) {
                this.orderListService.orderList = res.data.VIEW_ORDER_ALL;
                this.getListPagination();
            }
        });
    }
    /**
     * navigate to add to order
     * @param orderId order id
     * @return void
     */
    onNavigateToAddToOrder(orderId) {
        this.router.navigate(['connect-modules', 'add-order-pages', orderId]);
    }
    /**
     * stay on the same page number if return from order details
     * @return void
     */
    checkPageNumber() {
        if (!this.orderListService.showOrderDetails) {
            this.orderListService.firstOrders = 0;
            this.orderListService.pageNumber = 0;
        }
        localStorage.setItem('pageNumber', String(this.orderListService.pageNumber));
    }
    /**
     * get orders count for pagination pages
     * @return void
     */
    getListPagination() {
        this.orderListService.getOrderListPagination().subscribe(res => {
            if (res.responsCode === _shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_1__.ResponseCodeEnum.OK) {
                this.ordersCount = this.orderListService.ordersCount = res.data.VIEW_ORDER_ALL[0].ordersCount;
                this.orderListService.viewOrders = true;
            }
        });
    }
    /**
     * patient name search
     * @return void
     */
    search() {
        this.orderListService.returnToFirstPage();
        this.orderListService.viewOrders = false;
        if (this.orderListService.patientName || this.orderListService.searchValue) {
            this.orderListService.searchPatient = true;
            this.orderListService.getAllOrders = false;
            this.orderListService.filter = false;
            this.orderListService.patientSearch().subscribe(res => {
                if (res.responsCode === _shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_1__.ResponseCodeEnum.OK) {
                    this.orderListService.orderList = res.data.VIEW_ORDER_ALL;
                    this.getListPagination();
                }
            });
        }
        else {
            this.orderListService.clearSearchData();
            this.orderListService.reloadOrderList();
        }
    }
    /**
     * change patient name value
     * @return void
     */
    getPatientName(event) {
        if (event) {
            this.orderListService.patientName = event.target.value;
        }
    }
    ngOnDestroy() {
        this.orderListService.pageSize = 21;
    }
}
OrderListComponent.ɵfac = function OrderListComponent_Factory(t) { return new (t || OrderListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_Services_OrderServices_OrderListService_order_list_service__WEBPACK_IMPORTED_MODULE_6__.OrderListService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_Services_OrderServices_actions_actions_service__WEBPACK_IMPORTED_MODULE_7__.ActionsService)); };
OrderListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: OrderListComponent, selectors: [["app-order-list"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "logoSrc", "orderList", "Voucher", "showShorMoreBtn", "ordersCount", "patients", "orderDetails", "reload", "paginationOrder", "addToOrderPage", "filterSearch", "addToFriend", "onUploadFileEmmit", "onDownloadFile", "onUploadGRMRFilesEmmit", "onConfirmingSurgicalGuide", "onAcceptRejectRestorationGFMREmmit", "onPrepareTrackingNumberEmmit", "patientNameSearch", "onChangePatientName"]], template: function OrderListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, OrderListComponent_ng_container_0_Template, 2, 6, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.orderListService.viewOrders);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_shared_components_shared_order_list_View_Orders_view_orders_view_orders_component__WEBPACK_IMPORTED_MODULE_8__.ViewOrdersComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 51365:
/*!*************************************************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/ConnectModules/connect-pages/order-page/order-page-routing.module.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderPageRoutingModule": () => (/* binding */ OrderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-list/order-list.component */ 98668);
/* harmony import */ var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-details/order-details.component */ 31344);
/* harmony import */ var _Resolvers_Order_Resolver_order_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Resolvers/Order-Resolver/order.resolver */ 69230);
/* harmony import */ var _Resolvers_Order_Details_order_details_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Resolvers/Order-Details/order-details.resolver */ 6551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







const routes = [
    {
        path: '',
        component: _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_0__.OrderListComponent,
        resolve: {
            OrderList: _Resolvers_Order_Resolver_order_resolver__WEBPACK_IMPORTED_MODULE_2__.OrderResolver,
        },
    },
    {
        path: ':orderId',
        component: _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_1__.OrderDetailsComponent,
        data: { breadcrumbs: ['Order Details'] },
        resolve: {
            orderDetails: _Resolvers_Order_Details_order_details_resolver__WEBPACK_IMPORTED_MODULE_3__.OrderDetailsResolver
        }
    }
];
class OrderPageRoutingModule {
}
OrderPageRoutingModule.ɵfac = function OrderPageRoutingModule_Factory(t) { return new (t || OrderPageRoutingModule)(); };
OrderPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: OrderPageRoutingModule });
OrderPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](OrderPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 22305:
/*!*****************************************************************************************************!*\
  !*** ./projects/connect/src/app/Pages/ConnectModules/connect-pages/order-page/order-page.module.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderPageModule": () => (/* binding */ OrderPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _order_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-page-routing.module */ 51365);
/* harmony import */ var _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-list/order-list.component */ 98668);
/* harmony import */ var _shared_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../shared/shared-components/shared-components.module */ 83442);
/* harmony import */ var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-details/order-details.component */ 31344);
/* harmony import */ var _shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../shared/shared-modules/angular-material.module */ 20793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);







class OrderPageModule {
}
OrderPageModule.ɵfac = function OrderPageModule_Factory(t) { return new (t || OrderPageModule)(); };
OrderPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: OrderPageModule });
OrderPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _order_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderPageRoutingModule,
            _shared_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule,
            _shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_4__.AngularMaterialModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](OrderPageModule, { declarations: [_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_1__.OrderListComponent,
        _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_3__.OrderDetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _order_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderPageRoutingModule,
        _shared_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule,
        _shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_4__.AngularMaterialModule] }); })();


/***/ }),

/***/ 69230:
/*!*****************************************************************************!*\
  !*** ./projects/connect/src/app/Resolvers/Order-Resolver/order.resolver.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderResolver": () => (/* binding */ OrderResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _Services_OrderServices_OrderListService_order_list_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Services/OrderServices/OrderListService/order-list.service */ 86540);


class OrderResolver {
    /**
     * The Requirements For The Construction Of The resolver
     * @param orderListService for OrderListService
     */
    constructor(orderListService) {
        this.orderListService = orderListService;
    }
    /**
     * get order list
     * @param route for ActivatedRouteSnapshot
     * @param state for RouterStateSnapshot
     * @return Observable<IMainResponse>
     */
    resolve(route, state) {
        return this.orderListService.paginationOrderResolver();
    }
}
OrderResolver.ɵfac = function OrderResolver_Factory(t) { return new (t || OrderResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_Services_OrderServices_OrderListService_order_list_service__WEBPACK_IMPORTED_MODULE_0__.OrderListService)); };
OrderResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrderResolver, factory: OrderResolver.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=projects_connect_src_app_Pages_ConnectModules_connect-pages_order-page_order-page_module_ts.js.map