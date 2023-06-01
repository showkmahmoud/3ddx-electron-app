"use strict";
(self["webpackChunknew_connect_v3"] = self["webpackChunknew_connect_v3"] || []).push([["common"],{

/***/ 6551:
/*!************************************************************************************!*\
  !*** ./projects/connect/src/app/Resolvers/Order-Details/order-details.resolver.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderDetailsResolver": () => (/* binding */ OrderDetailsResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _Services_OrderServices_OrderListService_order_list_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Services/OrderServices/OrderListService/order-list.service */ 86540);


class OrderDetailsResolver {
    /**
     * The Requirements For The Construction Of The resolver
     * @param orderService for OrderListService
     */
    constructor(orderService) {
        this.orderService = orderService;
    }
    /**
     * get order details
     * @param route for ActivatedRouteSnapshot
     * @return Observable<IMainResponse>
     */
    resolve(route) {
        const id = +route.params.orderId;
        return this.orderService.getOrderById(id);
    }
}
OrderDetailsResolver.ɵfac = function OrderDetailsResolver_Factory(t) { return new (t || OrderDetailsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_Services_OrderServices_OrderListService_order_list_service__WEBPACK_IMPORTED_MODULE_0__.OrderListService)); };
OrderDetailsResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrderDetailsResolver, factory: OrderDetailsResolver.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map