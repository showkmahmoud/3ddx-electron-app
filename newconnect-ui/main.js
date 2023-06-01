(self["webpackChunknew_connect_v3"] = self["webpackChunknew_connect_v3"] || []).push([["main"],{

/***/ 24025:
/*!*******************************************************************!*\
  !*** ./projects/connect/src/app/Interceptors/APis.interceptor.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIsInterceptor": () => (/* binding */ APIsInterceptor)
/* harmony export */ });
/* harmony import */ var _shared_API_APIName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/API/APIName */ 93645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class APIsInterceptor {
    constructor() {
    }
    intercept(req, next) {
        if (!req.url.includes('.json') && !req.url.includes(_shared_API_APIName__WEBPACK_IMPORTED_MODULE_0__.APIName.uploadFile) && !req.url.includes(_shared_API_APIName__WEBPACK_IMPORTED_MODULE_0__.APIName.createNewPassword) && !req.url.includes('/assets/banner.properties')) {
            const data = this.prepareAPIRequest(req.body);
            req = req.clone({ body: data });
        }
        else if (req.url.includes(_shared_API_APIName__WEBPACK_IMPORTED_MODULE_0__.APIName.createNewPassword)) {
            const newPassToken = localStorage.getItem('passChangeToken');
            if (newPassToken) {
                req = req.clone({ headers: req.headers.set('passchangetoken', newPassToken) });
            }
        }
        return next.handle(req);
    }
    prepareAPIRequest(body) {
        var _a;
        return {
            internalUser: false,
            loginToken: (_a = localStorage.getItem('token')) !== null && _a !== void 0 ? _a : '',
            requestType: body.requestType,
            userId: Number(localStorage.getItem('userCNId')) ? Number(localStorage.getItem('userCNId')) : -1,
            services: body.services
        };
    }
}
APIsInterceptor.ɵfac = function APIsInterceptor_Factory(t) { return new (t || APIsInterceptor)(); };
APIsInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: APIsInterceptor, factory: APIsInterceptor.ɵfac });


/***/ }),

/***/ 20987:
/*!****************************************************************************!*\
  !*** ./projects/connect/src/app/Models/Enums/RequestTypes/RequestTypes.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERequestTypes": () => (/* binding */ ERequestTypes)
/* harmony export */ });
var ERequestTypes;
(function (ERequestTypes) {
    ERequestTypes["ADD"] = "ADD";
    ERequestTypes["VIEW"] = "VIEW";
    ERequestTypes["UPDATE"] = "UPDATE";
    ERequestTypes["DELETE"] = "DELETE";
    ERequestTypes["GET_ORDER_NUMBER"] = "GET_ORDER_NUMBER";
})(ERequestTypes || (ERequestTypes = {}));


/***/ }),

/***/ 2691:
/*!**************************************************************************************!*\
  !*** ./projects/connect/src/app/Services/AuthServices/LoginService/login.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var _shared_API_APIName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../shared/API/APIName */ 93645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _DataService_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataService/data.service */ 16637);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);




class LoginService {
    /**
     * The Requirements For The Construction Of The service
     * @param dataService for managing Http methods
     * @param router for routing
     */
    constructor(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    /**
     * log in
     * @param loginObj logIn object
     * @return Observable<IMainResponse>
     */
    login(loginObj) {
        return this.dataService.post(_shared_API_APIName__WEBPACK_IMPORTED_MODULE_0__.APIName.login, loginObj);
    }
    /**
     * log out
     * @return void
     */
    logout() {
        this.router.navigate(['auth', 'sign-in']);
        const myLanguage = localStorage.getItem('language') || '';
        localStorage.clear();
        localStorage.setItem('language', myLanguage);
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_DataService_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
LoginService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 16637:
/*!***********************************************************************!*\
  !*** ./projects/connect/src/app/Services/DataService/data.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 75514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 53882);



class DataService {
    /**
     * The Requirements For The Construction Of The service
     * @param httpClient for performing http requests
     */
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * post method
     * @param APIPath
     * @param OBJ posted object
     * @return any
     */
    // tslint:disable-next-line:typedef
    post(APIPath, OBJ) {
        return this.httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.cpRootURL}${APIPath}`, OBJ, { withCredentials: true });
    }
    // tslint:disable-next-line:typedef
    postDownload(APIPath, OBJ) {
        return this.httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.cpRootURL}${APIPath}`, OBJ, { observe: 'response', responseType: 'blob', withCredentials: true });
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
DataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 86540:
/*!************************************************************************************************!*\
  !*** ./projects/connect/src/app/Services/OrderServices/OrderListService/order-list.service.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderListService": () => (/* binding */ OrderListService)
/* harmony export */ });
/* harmony import */ var _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Models/Enums/RequestTypes/RequestTypes */ 20987);
/* harmony import */ var _shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../shared/shared-enums/ServiceNameEnum */ 4946);
/* harmony import */ var _shared_API_APIName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/API/APIName */ 93645);
/* harmony import */ var shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/shared-enums/ResponseCodeEnum */ 31580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _DataService_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../DataService/data.service */ 16637);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);







class OrderListService {
    /**
     * The Requirements For The Construction Of The service
     * @param dataService for managing Http methods
     * @param router for routing
     */
    constructor(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.orderListOBJ = { requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_0__.ERequestTypes.VIEW, services: [] };
        this.orderListPaginationOBJ = { requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_0__.ERequestTypes.GET_ORDER_NUMBER, services: [] };
        this.orderByIdOBJ = { requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_0__.ERequestTypes.VIEW, services: [] };
        this.gfmrByIdOBJ = { requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_0__.ERequestTypes.VIEW, services: [] };
        this.advancedSearchOBJ = { requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_0__.ERequestTypes.VIEW, services: [] };
        this.searchObj = { requestType: _Models_Enums_RequestTypes_RequestTypes__WEBPACK_IMPORTED_MODULE_0__.ERequestTypes.VIEW, services: [] };
        this.pageNumber = 0;
        this.pageSize = 21;
        this.orderList = [];
        this.pageOffset = 0;
        this.showShorMoreBtn = true;
        this.firstOrders = 0;
        this.viewOrders = false;
        this.filter = false;
        this.getAllOrders = true;
        this.searchPatient = false;
        this.layOut = 'grid';
        this.showOrderDetails = false;
        this.ordersCount = 0;
        this.filteredPageNumber = 0;
        this.uploadingId = new Set();
    }
    /**
     * get order list
     * @return Observable<IMainResponse>
     */
    getOrderList() {
        this.orderListOBJ.services[0] = {
            serviceName: _shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_1__.ServiceNameEnum.VIEW_ORDER_ALL,
            ordersOwnerId: Number(localStorage.getItem('userCNId')),
            pageNumber: this.pageNumber,
            pageSize: this.pageSize,
            sortedByColumnsIndices: [0],
            has: false,
            columns: [
                'orderId',
                'guideSupportEnumId',
                'guideSupport',
                'miscID',
                'typeTxtMisc',
                'typeMisc',
                'CostMisc',
                'orderEntityCostMisc',
                'timeSentMisc',
                'statusId',
                'OrderIdOrtho',
                'orderCommonId',
                'StatusIdOrtho',
                'orderEnum',
                'patientName',
                'softwareEnumId',
                'softwareEnum',
                'formatEnumId',
                'formatEnum',
                'doctorFirstName',
                'doctorLastName',
                'scanningCenterFirstName',
                'scanningCenterLastName',
                'maxillaEnum',
                'mandibleEnum',
                'statusId',
                'orderEntityCost',
                'orderEntityCostDiff',
                'timeSent',
                'timeEnd',
                'timeUpdate',
                'userCNComment',
                'userCPComment',
                'timeBilled',
                'operatorId',
                'isLaserScan',
                'implantsSites',
                'teethExtract',
                'teethMissed',
                'currencyEnum',
                'operatorFirstName',
                'operatorLastName',
                'scanningCenterId',
                'doctorId',
                'fileName',
                'xFileName',
                'serviceProviderId',
                'trackNumber',
                'orderEnumId',
                'hasIntraoralScans',
                'mandibleSegmentationEnum',
                'maxillaSegmentationEnum',
                'clientToBeBilled',
                'pendingReason',
                'pendingDescription',
                'portableFileName',
                'scansNeeded',
                'serviceProvider',
                'canDownload',
                'commonOrderVoucherHistory',
                'miscId',
                'restorationType',
                'isExpress'
            ],
            ConditionsAnded: false
        };
        return this.dataService.post(_shared_API_APIName__WEBPACK_IMPORTED_MODULE_2__.APIName.orderList.list, this.orderListOBJ);
    }
    /**
     * get order list pagination orders
     * @return Observable<IMainResponse>
     */
    getOrderListPagination() {
        if (!this.filter && !this.searchPatient) {
            this.orderListPaginationOBJ.services[0] = {
                serviceName: _shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_1__.ServiceNameEnum.VIEW_ORDER_ALL,
                ordersOwnerId: Number(localStorage.getItem('userCNId')),
                pageNumber: 0,
                pageSize: 0,
                sortedByColumnsIndices: [0],
                has: false,
                columns: [
                    'orderId',
                    'guideSupportEnumId',
                    'guideSupport',
                    'miscID',
                    'typeTxtMisc',
                    'typeMisc',
                    'CostMisc',
                    'orderEntityCostMisc',
                    'timeSentMisc',
                    'statusId',
                    'OrderIdOrtho',
                    'orderCommonId',
                    'StatusIdOrtho',
                    'orderEnum',
                    'patientName',
                    'softwareEnumId',
                    'softwareEnum',
                    'formatEnumId',
                    'formatEnum',
                    'doctorFirstName',
                    'doctorLastName',
                    'scanningCenterFirstName',
                    'scanningCenterLastName',
                    'maxillaEnum',
                    'mandibleEnum',
                    'statusId',
                    'orderEntityCost',
                    'orderEntityCostDiff',
                    'timeSent',
                    'timeEnd',
                    'timeUpdate',
                    'userCNComment',
                    'userCPComment',
                    'timeBilled',
                    'operatorId',
                    'isLaserScan',
                    'implantsSites',
                    'teethExtract',
                    'teethMissed',
                    'currencyEnum',
                    'operatorFirstName',
                    'operatorLastName',
                    'scanningCenterId',
                    'doctorId',
                    'fileName',
                    'xFileName',
                    'serviceProviderId',
                    'trackNumber',
                    'orderEnumId',
                    'hasIntraoralScans',
                    'mandibleSegmentationEnum',
                    'maxillaSegmentationEnum',
                    'clientToBeBilled',
                    'pendingReason',
                    'pendingDescription',
                    'portableFileName',
                    'scansNeeded',
                    'serviceProvider',
                    'canDownload',
                    'commonOrderVoucherHistory',
                    'miscId',
                    'restorationType',
                    'isExpress'
                ],
                ConditionsAnded: false
            };
        }
        else {
            if (this.filter) {
                this.orderListPaginationOBJ.services[0] = Object.assign({}, this.advancedSearchOBJ.services[0]);
            }
            else if (this.searchPatient) {
                this.orderListPaginationOBJ.services[0] = Object.assign({}, this.searchObj.services[0]);
            }
            this.orderListPaginationOBJ.services[0].pageSize = 0;
            this.orderListPaginationOBJ.services[0].pageNumber = 0;
        }
        return this.dataService.post(_shared_API_APIName__WEBPACK_IMPORTED_MODULE_2__.APIName.orderList.list, this.orderListPaginationOBJ);
    }
    /**
     * get patients names
     * @return Observable<IMainResponse>
     */
    getPatientName() {
        this.orderListOBJ.services[0] = {
            serviceName: _shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_1__.ServiceNameEnum.VIEW_ALL_PATIENTS,
            ordersOwnerId: Number(localStorage.getItem('userCNId')),
            pageNumber: 0,
            pageSize: 0,
            sortedByColumnsIndices: [0],
            has: false,
            columns: [],
            ConditionsAnded: false
        };
        return this.dataService.post(_shared_API_APIName__WEBPACK_IMPORTED_MODULE_2__.APIName.orderList.list, this.orderListOBJ);
    }
    /**
     * reload order list
     * @return void
     */
    onReload() {
        this.getAllOrders = true;
        this.filter = false;
        this.searchPatient = false;
        this.orderListOBJ.services[0] = {
            serviceName: _shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_1__.ServiceNameEnum.VIEW_ORDER_ALL,
            ordersOwnerId: Number(localStorage.getItem('userCNId')),
            pageNumber: 0,
            pageSize: 21,
            sortedByColumnsIndices: [0],
            has: false,
            columns: [
                'orderId',
                'guideSupportEnumId',
                'guideSupport',
                'miscID',
                'typeTxtMisc',
                'typeMisc',
                'CostMisc',
                'orderEntityCostMisc',
                'timeSentMisc',
                'statusId',
                'OrderIdOrtho',
                'orderCommonId',
                'StatusIdOrtho',
                'orderEnum',
                'patientName',
                'softwareEnumId',
                'softwareEnum',
                'formatEnumId',
                'formatEnum',
                'doctorFirstName',
                'doctorLastName',
                'scanningCenterFirstName',
                'scanningCenterLastName',
                'maxillaEnum',
                'mandibleEnum',
                'statusId',
                'orderEntityCost',
                'orderEntityCostDiff',
                'timeSent',
                'timeEnd',
                'timeUpdate',
                'userCNComment',
                'userCPComment',
                'timeBilled',
                'operatorId',
                'isLaserScan',
                'implantsSites',
                'teethExtract',
                'teethMissed',
                'currencyEnum',
                'operatorFirstName',
                'operatorLastName',
                'scanningCenterId',
                'doctorId',
                'fileName',
                'xFileName',
                'serviceProviderId',
                'trackNumber',
                'orderEnumId',
                'hasIntraoralScans',
                'mandibleSegmentationEnum',
                'maxillaSegmentationEnum',
                'clientToBeBilled',
                'pendingReason',
                'pendingDescription',
                'portableFileName',
                'scansNeeded',
                'serviceProvider',
                'canDownload',
                'commonOrderVoucherHistory',
                'miscId',
                'restorationType',
                'isExpress'
            ],
            ConditionsAnded: false
        };
        this.dataService.post(_shared_API_APIName__WEBPACK_IMPORTED_MODULE_2__.APIName.orderList.list, this.orderListOBJ).subscribe(res => {
            if (res.responsCode === shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_3__.ResponseCodeEnum.OK) {
                this.orderList = res.data.VIEW_ORDER_ALL;
            }
        });
    }
    /**
     * get order by id
     * @param id order id
     * @return Observable<IMainResponse>
     */
    getOrderById(id) {
        this.orderByIdOBJ.services[0] = {
            serviceName: _shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_1__.ServiceNameEnum.VIEW_ORDER_ALL,
            has: false,
            columns: [
                'orderId',
                'guideSupportEnumId',
                'guideSupport',
                'miscID',
                'typeTxtMisc',
                'typeMisc',
                'CostMisc',
                'orderEntityCostMisc',
                'timeSentMisc',
                'statusId',
                'OrderIdOrtho',
                'orderCommonId',
                'StatusIdOrtho',
                'orderEnum',
                'patientName',
                'softwareEnumId',
                'softwareEnum',
                'formatEnumId',
                'formatEnum',
                'doctorFirstName',
                'doctorLastName',
                'scanningCenterFirstName',
                'scanningCenterLastName',
                'maxillaEnum',
                'mandibleEnum',
                'statusId',
                'orderEntityCost',
                'orderEntityCostDiff',
                'timeSent',
                'timeEnd',
                'timeUpdate',
                'userCNComment',
                'userCPComment',
                'timeBilled',
                'operatorId',
                'isLaserScan',
                'implantsSites',
                'teethExtract',
                'teethMissed',
                'currencyEnum',
                'operatorFirstName',
                'operatorLastName',
                'scanningCenterId',
                'doctorId',
                'fileName',
                'xFileName',
                'serviceProviderId',
                'trackNumber',
                'orderEnumId',
                'hasIntraoralScans',
                'mandibleSegmentationEnum',
                'maxillaSegmentationEnum',
                'clientToBeBilled',
                'pendingReason',
                'pendingDescription',
                'portableFileName',
                'scansNeeded',
                'serviceProvider',
                'canDownload',
                'commonOrderVoucherHistory',
                'miscId',
                'restorationType',
                'isExpress'
            ],
            ConditionsAnded: true,
            ordersOwnerId: Number(localStorage.getItem('userCNId')),
            pageNumber: -1,
            pageSize: -1,
            sortedByColumnsIndices: [0],
            condition: {
                argumentName: 'orderId',
                argumentValue: id.toString(),
                argumentValueEnd: null,
                firstCondtion: null,
                like: false,
                not: false,
                inBetween: false,
                secondCondtion: null
            }
        };
        return this.dataService.post(_shared_API_APIName__WEBPACK_IMPORTED_MODULE_2__.APIName.orderList.sendToFriends, this.orderByIdOBJ);
    }
    /**
     * send order to friend
     * @param order sent order
     * @return Observable<IMainResponse>
     */
    sendOrderToFriend(order) {
        return this.dataService.post(_shared_API_APIName__WEBPACK_IMPORTED_MODULE_2__.APIName.orderList.sendToFriends, order);
    }
    /**
     * advanced search
     * @param advancedSearchOBJ search object
     * @return Observable<IMainResponse>
     */
    advancedSearch(advancedSearchOBJ) {
        return this.dataService.post(_shared_API_APIName__WEBPACK_IMPORTED_MODULE_2__.APIName.orderList.advancedSearch, advancedSearchOBJ);
    }
    /**
     * get gfmr order data
     * @param id order's id
     * @return Observable<IMainResponse>
     */
    getGfmrData(id) {
        this.gfmrByIdOBJ.services[0] = {
            serviceName: _shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_1__.ServiceNameEnum.VIEW_ORDER_RESTORATION_GFMR,
            orderID: id,
            columns: [],
            ConditionsAnded: false
        };
        return this.dataService.post(_shared_API_APIName__WEBPACK_IMPORTED_MODULE_2__.APIName.orderList.getGFMRorderDetails, this.gfmrByIdOBJ);
    }
    /**
     * filter orders
     * @param event filter obj
     * @return Observable<IMainResponse>
     */
    onFilterOrder(event) {
        this.searchData = event;
        this.getAllOrders = false;
        this.filter = true;
        this.searchPatient = false;
        if (event.dateStart === 'NaN') {
            event.dateStart = null;
        }
        if (event.dateEnd === 'NaN') {
            event.dateEnd = null;
        }
        this.advancedSearchOBJ.services[0] = {
            ConditionsAnded: true,
            asc: false,
            has: false,
            ordersOwnerId: Number(localStorage.getItem('userCNId')),
            pageNumber: this.pageNumber,
            pageSize: this.pageSize,
            serviceName: _shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_1__.ServiceNameEnum.ADVANCED_SEARCH,
            sortedByColumnsIndices: [0],
            columns: [
                'orderId',
                'guideSupportEnumId',
                'guideSupport',
                'miscID',
                'typeTxtMisc',
                'typeMisc',
                'CostMisc',
                'orderEntityCostMisc',
                'timeSentMisc',
                'statusId',
                'OrderIdOrtho',
                'orderCommonId',
                'StatusIdOrtho',
                'orderEnum',
                'patientName',
                'softwareEnumId',
                'softwareEnum',
                'formatEnumId',
                'formatEnum',
                'doctorFirstName',
                'doctorLastName',
                'scanningCenterFirstName',
                'scanningCenterLastName',
                'maxillaEnum',
                'mandibleEnum',
                'statusId',
                'orderEntityCost',
                'orderEntityCostDiff',
                'timeSent',
                'timeEnd',
                'timeUpdate',
                'userCNComment',
                'userCPComment',
                'timeBilled',
                'operatorId',
                'isLaserScan',
                'implantsSites',
                'teethExtract',
                'teethMissed',
                'currencyEnum',
                'operatorFirstName',
                'operatorLastName',
                'scanningCenterId',
                'doctorId',
                'fileName',
                'xFileName',
                'serviceProviderId',
                'trackNumber',
                'orderEnumId',
                'hasIntraoralScans',
                'mandibleSegmentationEnum',
                'maxillaSegmentationEnum',
                'clientToBeBilled',
                'pendingReason',
                'pendingDescription',
                'portableFileName',
                'scansNeeded',
                'serviceProvider',
                'canDownload',
                'commonOrderVoucherHistory',
                'miscId',
                'restorationType',
                'doctorName',
                'scanningCenterName',
                'isExpress'
            ],
            condition: {
                anded: true,
                argumentName: '',
                argumentValue: '',
                argumentValueEnd: null,
                firstCondtion: null,
                inBetween: false,
                like: false,
                not: false,
                secondCondtion: {
                    anded: true,
                    argumentName: '',
                    argumentValue: '',
                    argumentValueEnd: null,
                    firstCondtion: event.patientName ? {
                        argumentName: 'patientName',
                        argumentValue: event.patientName,
                        argumentValueEnd: null,
                        firstCondtion: null,
                        inBetween: false,
                        like: true,
                        anded: false,
                        not: false,
                    } : null,
                    inBetween: false,
                    like: false,
                    not: false,
                    secondCondtion: {
                        anded: true,
                        argumentName: '',
                        argumentValue: '',
                        argumentValueEnd: null,
                        firstCondtion: event.scanningCenter ? {
                            argumentName: 'scanningCenterName',
                            argumentValue: event.scanningCenter,
                            argumentValueEnd: null,
                            firstCondtion: null,
                            inBetween: false,
                            like: true,
                            anded: false,
                            not: false,
                        } : null,
                        inBetween: false,
                        like: false,
                        not: false,
                        secondCondtion: {
                            anded: true,
                            argumentName: '',
                            argumentValue: '',
                            argumentValueEnd: null,
                            firstCondtion: event.doctorName ? {
                                argumentName: 'doctorName',
                                argumentValue: event.doctorName,
                                argumentValueEnd: null,
                                firstCondtion: null,
                                inBetween: false,
                                like: true,
                                anded: false,
                                not: false,
                            } : null,
                            inBetween: false,
                            like: false,
                            not: false,
                            secondCondtion: {
                                anded: true,
                                argumentName: '',
                                argumentValue: '',
                                argumentValueEnd: null,
                                firstCondtion: event.orderType ? {
                                    argumentName: 'orderEnumId',
                                    argumentValue: String(event.orderType),
                                    argumentValueEnd: null,
                                    firstCondtion: null,
                                    inBetween: false,
                                    like: false,
                                    not: false,
                                    secondCondtion: null,
                                } : null,
                                inBetween: false,
                                like: false,
                                not: false,
                                secondCondtion: (event.dateStart || event.dateEnd) ? {
                                    argumentName: 'timeSent',
                                    argumentValue: event.dateStart,
                                    argumentValueEnd: event.dateEnd,
                                    firstCondtion: null,
                                    inBetween: true,
                                    like: false,
                                    not: false,
                                    secondCondtion: null
                                } : null
                            }
                        }
                    }
                }
            }
        };
        return this.advancedSearch(this.advancedSearchOBJ);
    }
    ;
    /**
     * patient name search
     * @return Observable<IMainResponse>
     */
    patientSearch() {
        this.patientName = this.patientName ? this.patientName : this.searchValue;
        this.searchObj.services[0] = {
            ConditionsAnded: true,
            asc: false,
            has: false,
            ordersOwnerId: Number(localStorage.getItem('userCNId')),
            pageNumber: this.pageNumber,
            pageSize: this.pageSize,
            serviceName: _shared_shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_1__.ServiceNameEnum.ADVANCED_SEARCH,
            sortedByColumnsIndices: [0],
            columns: [
                'orderId',
                'guideSupportEnumId',
                'guideSupport',
                'miscID',
                'typeTxtMisc',
                'typeMisc',
                'CostMisc',
                'orderEntityCostMisc',
                'timeSentMisc',
                'statusId',
                'OrderIdOrtho',
                'orderCommonId',
                'StatusIdOrtho',
                'orderEnum',
                'patientName',
                'softwareEnumId',
                'softwareEnum',
                'formatEnumId',
                'formatEnum',
                'doctorFirstName',
                'doctorLastName',
                'scanningCenterFirstName',
                'scanningCenterLastName',
                'maxillaEnum',
                'mandibleEnum',
                'statusId',
                'orderEntityCost',
                'orderEntityCostDiff',
                'timeSent',
                'timeEnd',
                'timeUpdate',
                'userCNComment',
                'userCPComment',
                'timeBilled',
                'operatorId',
                'isLaserScan',
                'implantsSites',
                'teethExtract',
                'teethMissed',
                'currencyEnum',
                'operatorFirstName',
                'operatorLastName',
                'scanningCenterId',
                'doctorId',
                'fileName',
                'xFileName',
                'serviceProviderId',
                'trackNumber',
                'orderEnumId',
                'hasIntraoralScans',
                'mandibleSegmentationEnum',
                'maxillaSegmentationEnum',
                'clientToBeBilled',
                'pendingReason',
                'pendingDescription',
                'portableFileName',
                'scansNeeded',
                'serviceProvider',
                'canDownload',
                'commonOrderVoucherHistory',
                'miscId',
                'restorationType',
                'isExpress'
            ],
            condition: {
                anded: true,
                argumentName: '',
                argumentValue: '',
                argumentValueEnd: null,
                firstCondtion: null,
                inBetween: false,
                like: false,
                not: false,
                secondCondtion: {
                    anded: true,
                    argumentName: '',
                    argumentValue: '',
                    argumentValueEnd: null,
                    firstCondtion: {
                        argumentName: 'patientName',
                        argumentValue: this.patientName,
                        argumentValueEnd: null,
                        firstCondtion: null,
                        inBetween: false,
                        like: true,
                        anded: false,
                        not: false,
                    },
                    inBetween: false,
                    like: false,
                    not: false,
                }
            }
        };
        return this.advancedSearch(this.searchObj);
    }
    /**
     * get orders for pagination by resolver
     * @return Observable<IMainResponse>
     */
    paginationOrderResolver() {
        if (!this.filter && !this.searchPatient) {
            this.getAllOrders = true;
            return this.getOrderList();
        }
        else if (this.filter) {
            this.filter = true;
            this.searchPatient = false;
            return this.onFilterOrder(this.searchData);
        }
        else if (this.searchPatient) {
            this.filter = false;
            this.searchPatient = true;
            return this.patientSearch();
        }
        else {
            return;
        }
    }
    /**
     * clear search data
     * @return void
     */
    clearSearchData() {
        this.filter = false;
        this.searchPatient = false;
        this.getAllOrders = true;
        this.patientName = '';
        this.searchValue = '';
        this.viewOrders = false;
        this.showOrderDetails = false;
        this.layOut = 'grid';
    }
    /**
     * return to first page
     * @return void
     */
    returnToFirstPage() {
        this.pageNumber = 0;
        this.pageOffset = 0;
        this.firstOrders = 0;
        localStorage.setItem('pageNumber', String(this.pageNumber));
    }
    /**
     * reload order list
     * @return void
     */
    reloadOrderList() {
        this.viewOrders = false;
        this.getOrderList().subscribe(res => {
            if (res.responsCode === shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_3__.ResponseCodeEnum.OK) {
                this.orderList = res.data.VIEW_ORDER_ALL;
                this.getOrderListPagination().subscribe(res => {
                    if (res.responsCode === shared_shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_3__.ResponseCodeEnum.OK) {
                        this.ordersCount = res.data.VIEW_ORDER_ALL[0].ordersCount;
                        this.viewOrders = true;
                    }
                });
            }
        });
    }
    /**
     * remove upload id
     * @param orderID order id
     * @param type order upload type
     * @return void
     */
    removeUploadId(orderID, type) {
        this.uploadingId.forEach((res) => {
            const uploadingFile = JSON.parse(res);
            if (uploadingFile.id === orderID && uploadingFile.type === type) {
                this.uploadingId.delete(res);
            }
        });
    }
}
OrderListService.ɵfac = function OrderListService_Factory(t) { return new (t || OrderListService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_DataService_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
OrderListService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: OrderListService, factory: OrderListService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 71273:
/*!***************************************************************************!*\
  !*** ./projects/connect/src/app/Services/UploadService/upload.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadService": () => (/* binding */ UploadService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 75514);
/* harmony import */ var _shared_API_APIName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/API/APIName */ 93645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);






class UploadService {
    /**
     * The Requirements For The Construction Of The service
     * @param httpClient for using Http methods
     */
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.index = -1;
        this.uploadData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.progress = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.calculatedTime = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.subScribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.uploadDataNew = [];
    }
    /**
     * upload files
     * @param data form data
     * @param userId user id
     * @param orderId order id
     * @param subOrderDetails sub order details
     * @param fileName file name
     * @return Observable<any>
     */
    onUploadFile(data, userId, orderId, subOrderDetails, fileName, OrderId2) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('userID', userId);
        params = params.append('orderID', orderId);
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpRequest('POST', _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.cpRootURL + _shared_API_APIName__WEBPACK_IMPORTED_MODULE_1__.APIName.uploadFile, data, {
            reportProgress: true,
            responseType: 'json',
            params
        });
        this.uploadDataNew.push({
            userId,
            orderId,
            subOrderDetails,
            fileName,
            showCancel: true,
            progress: this.progress,
            calculatedTime: this.calculatedTime,
            subScribe: this.subScribe,
            OrderId2: OrderId2,
        });
        return this.httpClient.request(req);
    }
    /**
     * get upload data
     * @return Observable<IUpload[]>
     */
    getUploadData() {
        return this.uploadData.asObservable();
    }
    /**
     * set upload data
     * @param uploadData upload data
     * @return void
     */
    setUploadData(uploadData) {
        if (uploadData != null) {
            this.uploadData.next(uploadData);
        }
    }
}
UploadService.ɵfac = function UploadService_Factory(t) { return new (t || UploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
UploadService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: UploadService, factory: UploadService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 10273:
/*!************************************************************************************!*\
  !*** ./projects/connect/src/app/Widgets/Components/progress/progress.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressComponent": () => (/* binding */ ProgressComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _shared_shared_static_id_shared_static_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../shared/shared-static-id/shared-static-id */ 9470);
/* harmony import */ var _shared_shared_static_data_SubOrderType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../shared/shared-static-data/SubOrderType */ 43337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _Services_UploadService_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/UploadService/upload.service */ 71273);
/* harmony import */ var _shared_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/shared-services/toastr.service */ 55325);
/* harmony import */ var _Services_OrderServices_OrderListService_order_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/OrderServices/OrderListService/order-list.service */ 86540);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 42118);












function ProgressComponent_ng_container_9_mat_card_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](file_r2.OrderId2);
} }
function ProgressComponent_ng_container_9_mat_card_1_mat_card_subtitle_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Remaining Time : ", file_r2.calculatedTime, " For ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](file_r2.fileName);
} }
function ProgressComponent_ng_container_9_mat_card_1_mat_card_subtitle_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card-subtitle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Uploaded ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " File Successfully ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](file_r2.fileName);
} }
function ProgressComponent_ng_container_9_mat_card_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProgressComponent_ng_container_9_mat_card_1_div_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const file_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r13.cancelSubScribe(file_r2.subScribe, file_r2.orderId, file_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", ctx_r7.htmlID.Button + "cancel");
} }
function ProgressComponent_ng_container_9_mat_card_1_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", file_r2.progress < 100 ? "text-warning" : "text-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](file_r2.progress < 100 ? "uploading" : "Finished");
} }
function ProgressComponent_ng_container_9_mat_card_1_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "canceled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "col-md-10": a0, "col-md-12": a1 }; };
function ProgressComponent_ng_container_9_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ProgressComponent_ng_container_9_mat_card_1_span_3_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ProgressComponent_ng_container_9_mat_card_1_mat_card_subtitle_4_Template, 5, 2, "mat-card-subtitle", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ProgressComponent_ng_container_9_mat_card_1_mat_card_subtitle_5_Template, 5, 1, "mat-card-subtitle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ProgressComponent_ng_container_9_mat_card_1_div_12_Template, 4, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Upload Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ProgressComponent_ng_container_9_mat_card_1_span_15_Template, 2, 2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ProgressComponent_ng_container_9_mat_card_1_span_16_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](file_r2.subOrderDetails.textColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", file_r2.subOrderDetails.subOrderName, " For Order ID: ", file_r2.orderId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", file_r2.OrderId2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", file_r2.calculatedTime !== "0 Seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", file_r2.calculatedTime === "0 Seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](14, _c0, file_r2.calculatedTime !== "0 Seconds", file_r2.calculatedTime === "0 Seconds"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", file_r2.progress + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", file_r2.progress, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", file_r2.calculatedTime !== "0 Seconds" && file_r2.showCancel === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", file_r2.showCancel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !file_r2.showCancel);
} }
function ProgressComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProgressComponent_ng_container_9_mat_card_1_Template, 17, 17, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const file_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", file_r2.calculatedTime !== "0 Seconds");
} }
function ProgressComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " No Files Uploaded ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class ProgressComponent {
    /**
     * The Requirements For The Construction Of The component
     * @param dialogRef for dialog reference
     * @param data for dialog data
     * @param uploadService for using UploadService
     * @param toastService for showing requests notification
     */
    constructor(dialogRef, data, uploadService, toastService, orderService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.uploadService = uploadService;
        this.toastService = toastService;
        this.orderService = orderService;
        this.htmlID = _shared_shared_static_id_shared_static_id__WEBPACK_IMPORTED_MODULE_0__.CStaticIds;
    }
    ngOnInit() {
        // this.uploadService.uploadDataNew.forEach(res => {
        //   if (res.calculatedTime !== '0 Seconds') {
        //     this.orderService.getOrderList().subscribe(res => {
        //       if (res.responsCode === ResponseCodeEnum.OK) {
        //         this.orderService.orderList = res.data.VIEW_ORDER_ALL;
        //       }
        //     })
        //   }
        // })
    }
    /**
     * canceling subscribe
     * @param subscribe for subscription
     * @param orderID order id
     * @param file uploaded file subOrderDetails uploadType
     * @return void
     */
    cancelSubScribe(subscribe, orderID, file) {
        subscribe.unsubscribe();
        file.showCancel = !file.showCancel;
        this.toastService.errorAlert(`Order Id ${orderID} Upload File Canceled`, 'Upload File');
        this.removeUpload(file.subOrderDetails.uploadType, orderID);
    }
    removeUpload(uploadType, orderID) {
        switch (uploadType) {
            case _shared_shared_static_data_SubOrderType__WEBPACK_IMPORTED_MODULE_1__.SubOrderType.GFMR.uploadType:
                this.orderService.removeUploadId(orderID, _shared_shared_static_data_SubOrderType__WEBPACK_IMPORTED_MODULE_1__.SubOrderType.GFMR.uploadType);
                break;
            case _shared_shared_static_data_SubOrderType__WEBPACK_IMPORTED_MODULE_1__.SubOrderType.CONVERSION.uploadType:
                this.orderService.removeUploadId(orderID, _shared_shared_static_data_SubOrderType__WEBPACK_IMPORTED_MODULE_1__.SubOrderType.CONVERSION.uploadType);
                break;
            case _shared_shared_static_data_SubOrderType__WEBPACK_IMPORTED_MODULE_1__.SubOrderType.INTRAORAL_SCAN.uploadType:
                this.orderService.removeUploadId(orderID, _shared_shared_static_data_SubOrderType__WEBPACK_IMPORTED_MODULE_1__.SubOrderType.INTRAORAL_SCAN.uploadType);
                break;
            case _shared_shared_static_data_SubOrderType__WEBPACK_IMPORTED_MODULE_1__.SubOrderType.RESTORATION.uploadType:
                this.orderService.removeUploadId(orderID, _shared_shared_static_data_SubOrderType__WEBPACK_IMPORTED_MODULE_1__.SubOrderType.RESTORATION.uploadType);
                break;
        }
    }
}
ProgressComponent.ɵfac = function ProgressComponent_Factory(t) { return new (t || ProgressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_Services_UploadService_upload_service__WEBPACK_IMPORTED_MODULE_2__.UploadService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_Services_OrderServices_OrderListService_order_list_service__WEBPACK_IMPORTED_MODULE_4__.OrderListService)); };
ProgressComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProgressComponent, selectors: [["app-progress"]], decls: 11, vars: 5, consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "col-12"], [1, "logo", 3, "src", "id"], ["mat-mini-fab", "", "aria-label", "Example icon button with a home icon", 1, "bg-danger", "float-end", 3, "id", "click"], [4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], ["class", "mb-2", 4, "ngIf"], [1, "mb-2"], [4, "ngIf"], ["class", "text-success", 4, "ngIf"], [3, "ngClass"], [1, "progress", "mt-2"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated"], ["class", "col-md-2 text-center", 4, "ngIf"], [1, "mt-2"], [3, "ngClass", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [1, "text-success"], [1, "col-md-2", "text-center"], ["mat-mini-fab", "", "aria-label", "Example icon button with a home icon", 1, "bg-danger", 3, "id", "click"], [1, "text-danger"], ["role", "alert", 1, "alert", "text-center", "alert-danger"]], template: function ProgressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProgressComponent_Template_button_click_6_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ProgressComponent_ng_container_9_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ProgressComponent_div_10_Template, 4, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.data.logo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("id", ctx.htmlID.Image + "logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", ctx.htmlID.Button + "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.uploadService.uploadDataNew);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.uploadService.uploadDataNew.length === 0);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardSubtitle], styles: [".logo[_ngcontent-%COMP%] {\n  height: 36px;\n  width: 228px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkIiwiZmlsZSI6InByb2dyZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gIGhlaWdodDogMzZweDtcbiAgd2lkdGg6IDIyOHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 35636:
/*!************************************************************!*\
  !*** ./projects/connect/src/app/Widgets/widgets.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetsModule": () => (/* binding */ WidgetsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _Components_progress_progress_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/progress/progress.component */ 10273);
/* harmony import */ var _shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/shared-modules/angular-material.module */ 20793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class WidgetsModule {
}
WidgetsModule.ɵfac = function WidgetsModule_Factory(t) { return new (t || WidgetsModule)(); };
WidgetsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WidgetsModule });
WidgetsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_1__.AngularMaterialModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WidgetsModule, { declarations: [_Components_progress_progress_component__WEBPACK_IMPORTED_MODULE_0__.ProgressComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_1__.AngularMaterialModule], exports: [_Components_progress_progress_component__WEBPACK_IMPORTED_MODULE_0__.ProgressComponent] }); })();


/***/ }),

/***/ 83023:
/*!********************************************************!*\
  !*** ./projects/connect/src/app/app-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _shared_shared_guards_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/shared-guards/auth-guard/auth.guard */ 64765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: 'auth',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-shared_shared-components_shared-components_module_ts"), __webpack_require__.e("projects_connect_src_app_Pages_AuthPage_auth-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/AuthPage/auth-page.module */ 89388)).then(m => m.AuthPageModule)
    },
    {
        path: 'connect-modules',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-shared_shared-components_shared-components_module_ts"), __webpack_require__.e("projects_connect_src_app_Pages_ConnectModules_connect-modules_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/ConnectModules/connect-modules.module */ 73079)).then(m => m.ConnectModulesModule),
        canActivate: [_shared_shared_guards_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    },
    {
        path: '',
        redirectTo: 'auth/sign-in',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'auth/sign-in',
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5447:
/*!***************************************************!*\
  !*** ./projects/connect/src/app/app.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _shared_shared_static_id_shared_static_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/shared-static-id/shared-static-id */ 9470);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/shared-services/loader.service */ 40940);
/* harmony import */ var _shared_shared_services_lang_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/shared-services/lang.service */ 95255);
/* harmony import */ var _Services_AuthServices_LoginService_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/AuthServices/LoginService/login.service */ 2691);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 85991);








class AppComponent {
    /**
     * The Requirements For The Construction Of The app component
     * @param router for routing
     * @param loaderService for using LoaderService
     * @param langService for using LangService
     * @param loginService for using LogInService
     */
    constructor(router, loaderService, langService, loginService) {
        this.router = router;
        this.loaderService = loaderService;
        this.langService = langService;
        this.loginService = loginService;
        this.title = 'connect';
        this.currentUrl = '';
        this.lang = localStorage.getItem('language');
        this.htmlID = _shared_shared_static_id_shared_static_id__WEBPACK_IMPORTED_MODULE_0__.CStaticIds;
        if (!localStorage.getItem('language')) {
            localStorage.setItem('language', 'en');
        }
        this.langService.changeLanguage(this.lang);
        let name = localStorage.getItem('fName');
        let id = localStorage.getItem('userCNId');
        const expiredPass = localStorage.getItem('newPass');
        if (name && id && !expiredPass) {
            localStorage.setItem('userCNId', id);
            this.router.navigate(['connect-modules', 'View-Orders-page']);
        }
        if (localStorage.getItem('rememberUser') === 'true' || null) {
            this.router.navigate(['connect-modules', 'View-Orders-page']);
        }
    }
    ngOnInit() {
        this.router.events.subscribe((routerEvent) => {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationStart) {
                this.loaderService.show();
                this.currentUrl = routerEvent.url.substring(routerEvent.url.lastIndexOf('/') + 1);
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
                this.loaderService.hide();
            }
            window.scrollTo(0, 0);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_1__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_shared_services_lang_service__WEBPACK_IMPORTED_MODULE_2__.LangService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_Services_AuthServices_LoginService_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [["bdColor", "rgba(247, 145, 60, 0.5)", "size", "medium", "color", "#377FAE", "type", "square-loader", 3, "id", "fullScreen"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ngx-spinner", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", ctx.htmlID.Spinner + "app")("fullScreen", true);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerComponent], styles: [".cdk-overlay-container {\n  z-index: 1000000 !important;\n}\n\n  snack-bar-container.alert-success {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n}\n\n  snack-bar-container.alert-info {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n}\n\n  snack-bar-container.alert-danger {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n}\n\n  snack-bar-container.error-message {\n  color: #f5c6cb;\n  background-color: #721c24;\n  border-color: #721c24;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDEwMDAwMDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIHNuYWNrLWJhci1jb250YWluZXIuYWxlcnQtc3VjY2VzcyB7XG4gIGNvbG9yOiAjMTU1NzI0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlZGRhO1xuICBib3JkZXItY29sb3I6ICNjM2U2Y2I7XG59XG5cbjo6bmctZGVlcCBzbmFjay1iYXItY29udGFpbmVyLmFsZXJ0LWluZm8ge1xuICBjb2xvcjogIzBjNTQ2MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxZWNmMTtcbiAgYm9yZGVyLWNvbG9yOiAjYmVlNWViO1xufVxuXG46Om5nLWRlZXAgc25hY2stYmFyLWNvbnRhaW5lci5hbGVydC1kYW5nZXIge1xuICBjb2xvcjogIzcyMWMyNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgYm9yZGVyLWNvbG9yOiAjZjVjNmNiO1xufVxuXG46Om5nLWRlZXAgc25hY2stYmFyLWNvbnRhaW5lci5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6ICNmNWM2Y2I7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MjFjMjQ7XG4gIGJvcmRlci1jb2xvcjogIzcyMWMyNDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 94844:
/*!************************************************!*\
  !*** ./projects/connect/src/app/app.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 83023);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5447);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 20718);
/* harmony import */ var shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/shared-modules/angular-material.module */ 20793);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _shared_shared_interceptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/shared-interceptors */ 13190);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 85991);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _Interceptors_APis_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Interceptors/APis.interceptor */ 24025);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ 75347);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _Widgets_widgets_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Widgets/widgets.module */ 35636);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 954);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tabview */ 46304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);

















function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [_shared_shared_interceptors__WEBPACK_IMPORTED_MODULE_3__.httpInterceptorProviders, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe,
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS, useClass: _Interceptors_APis_interceptor__WEBPACK_IMPORTED_MODULE_4__.APIsInterceptor, multi: true
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
            shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_2__.AngularMaterialModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonModule,
            _Widgets_widgets_module__WEBPACK_IMPORTED_MODULE_5__.WidgetsModule,
            primeng_tabview__WEBPACK_IMPORTED_MODULE_14__.TabViewModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        shared_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_2__.AngularMaterialModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonModule,
        _Widgets_widgets_module__WEBPACK_IMPORTED_MODULE_5__.WidgetsModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_14__.TabViewModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule] }); })();


/***/ }),

/***/ 75514:
/*!**********************************************************!*\
  !*** ./projects/connect/src/environments/environment.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    connectLogo: './assets/Images/connectLog-transparent.png',
    bannerNewUrl: './assets/banner.properties',
    // cpRootURL: 'https://stg3.3ddx.net/',
    cpRootURL: 'https://preprod2.3ddx.net/',
    dateFormat: 'EEE MMM d yy h:mm a',
    dateTimeZone: 'EST',
    ordersPageRoute: '/connect-modules/View-Orders-page',
    bannerImage: 'https://3ddiagnostix.com/newconnect-ui/VAADIN/themes/ovTheme/banner_v1.gif',
    tutorial: 'https://3ddiagnostix.com/NewConnectDEMO2023.mp4'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 86853:
/*!**************************************!*\
  !*** ./projects/connect/src/main.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 94844);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 75514);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 93645:
/*!*******************************!*\
  !*** ./shared/API/APIName.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIName": () => (/* binding */ APIName)
/* harmony export */ });
const APIName = {
    login: 'ov-connect-webService-auth-olddb/resources/Users.Auth',
    forgetPassword: 'ov-connect-webService-auth-olddb/resources/Users.Auth',
    register: 'ov-connect-webService-userscn-olddb/resources/Users',
    ORDERS: 'ov-connect-webservice-orders-olddb/resources/Orders',
    getUserShippingLabel: 'ov-connect-webService-userscn-olddb/resources/Users',
    addShippingLabel: 'ov-connect-webservice-orders-olddb/resources/Orders',
    downloadFile: 'ov-connect-webservice-orders-olddb/resources/DownloadFiles',
    changePassword: 'ov-connect-webService-userscn-olddb/resources/Users',
    feedback: 'ov-connect-webService-feedback-olddb/resources/feedback',
    doctors: 'ov-connect-webservice-orders-olddb/resources/Orders',
    orderList: {
        list: 'ov-connect-webservice-orders-olddb/resources/Orders',
        sendToFriends: 'ov-connect-webservice-orders-olddb/resources/Orders',
        getOrderById: 'ov-connect-webservice-orders-olddb/resources/Orders',
        advancedSearch: 'ov-connect-webservice-orders-olddb/resources/Orders',
        getGFMRorderDetails: 'ov-connect-webservice-orders-olddb/resources/Orders',
        voucher: 'ov-connect-webservice-orders-olddb/resources/Orders'
    },
    orderDetailsActions: {
        trackNumber: 'ov-connect-webservice-orders-olddb/resources/Orders',
        downloadFile: 'ov-connect-webservice-orders-olddb/resources/DownloadFiles',
        getSurgicalGuide: 'ov-connect-webservice-orders-olddb/resources/Orders',
        confirmSurgicalGuide: 'ov-connect-webservice-orders-olddb/resources/Orders',
        acceptRejectRestorationGFMR: 'ov-connect-webservice-orders-olddb/resources/Orders'
    },
    editprofile: 'ov-connect-webService-userscn-olddb/resources/Users',
    uploadFile: 'ov-connect-webservice-orders-olddb/ScanUpload',
    calculateCost: 'ov-connect-webService-costCalculation-olddb/resources/CostCalculator',
    createNewPassword: 'CP-BackEnd/passManagement/changePassword',
    adddoctor: 'ov-connect-webService-userscn-olddb/resources/Users'
};


/***/ }),

/***/ 31580:
/*!*************************************************!*\
  !*** ./shared/shared-enums/ResponseCodeEnum.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResponseCodeEnum": () => (/* binding */ ResponseCodeEnum)
/* harmony export */ });
var ResponseCodeEnum;
(function (ResponseCodeEnum) {
    ResponseCodeEnum[ResponseCodeEnum["OK"] = 0] = "OK";
    ResponseCodeEnum[ResponseCodeEnum["NOT_IMPLEMENTED"] = 1000] = "NOT_IMPLEMENTED";
    ResponseCodeEnum[ResponseCodeEnum["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    ResponseCodeEnum[ResponseCodeEnum["Invalid_Parameter"] = 1005] = "Invalid_Parameter";
    ResponseCodeEnum[ResponseCodeEnum["Registeration_Failed_Email_Exist"] = 1004] = "Registeration_Failed_Email_Exist";
    ResponseCodeEnum[ResponseCodeEnum["Credit_Card_Invalid"] = 1003] = "Credit_Card_Invalid";
    ResponseCodeEnum[ResponseCodeEnum["Incomplete_Parameters"] = 1001] = "Incomplete_Parameters";
    ResponseCodeEnum[ResponseCodeEnum["LOGIN_FAILD_INVALID_TOKEN"] = 1006] = "LOGIN_FAILD_INVALID_TOKEN";
    ResponseCodeEnum[ResponseCodeEnum["FAILED_TO_SEND_NOTIFICATION"] = 1011] = "FAILED_TO_SEND_NOTIFICATION";
    ResponseCodeEnum[ResponseCodeEnum["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    ResponseCodeEnum[ResponseCodeEnum["Account_Deactivated"] = 1102] = "Account_Deactivated";
    ResponseCodeEnum[ResponseCodeEnum["Wrong_Password"] = 1202] = "Wrong_Password";
    ResponseCodeEnum[ResponseCodeEnum["TOO_MANY_LOGIN_FAILED_ATTEMPTS"] = 1203] = "TOO_MANY_LOGIN_FAILED_ATTEMPTS";
    ResponseCodeEnum[ResponseCodeEnum["Email_Not_Registered"] = 1302] = "Email_Not_Registered";
    ResponseCodeEnum[ResponseCodeEnum["ORDER_ACCESS_DENIED"] = 1012] = "ORDER_ACCESS_DENIED";
    ResponseCodeEnum[ResponseCodeEnum["NO_DOWNLOADS_FOR_REQUESTED_SUBORDER"] = 1013] = "NO_DOWNLOADS_FOR_REQUESTED_SUBORDER";
    ResponseCodeEnum[ResponseCodeEnum["FILE_NOT_FOUND"] = 1014] = "FILE_NOT_FOUND";
    ResponseCodeEnum[ResponseCodeEnum["DOWNLOAD_UNAUTHORIZED_INVALID_BILLING"] = 1015] = "DOWNLOAD_UNAUTHORIZED_INVALID_BILLING";
    ResponseCodeEnum[ResponseCodeEnum["FAILED_TO_SEND_SHIPPING_LABEL"] = 1016] = "FAILED_TO_SEND_SHIPPING_LABEL";
    ResponseCodeEnum[ResponseCodeEnum["INTERNAL_SERVER_ERROR"] = 1010] = "INTERNAL_SERVER_ERROR";
    ResponseCodeEnum[ResponseCodeEnum["NOT_AUTHORIZED"] = 1002] = "NOT_AUTHORIZED";
    ResponseCodeEnum[ResponseCodeEnum["GENERIC_ERROR"] = -1] = "GENERIC_ERROR";
})(ResponseCodeEnum || (ResponseCodeEnum = {}));


/***/ }),

/***/ 4946:
/*!************************************************!*\
  !*** ./shared/shared-enums/ServiceNameEnum.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceNameEnum": () => (/* binding */ ServiceNameEnum)
/* harmony export */ });
var ServiceNameEnum;
(function (ServiceNameEnum) {
    ServiceNameEnum["CONNECT_BILLING"] = "CONNECT_BILLING";
    ServiceNameEnum["VUsersCN"] = "VUsersCN";
    ServiceNameEnum["ORDER_ADD_SHIPPING_LABEL"] = "ORDER_ADD_SHIPPING_LABEL";
    ServiceNameEnum["CONNECT_BILLING_SINGLE_SUBORDER"] = "CONNECT_BILLING_SINGLE_SUBORDER";
    ServiceNameEnum["CONNECT_BILLING_CHARGED_RECEIPT"] = "CONNECT_BILLING_CHARGED_RECEIPT";
    ServiceNameEnum["DOWNLOAD_FILE"] = "DOWNLOAD_FILE";
    ServiceNameEnum["CHANGE_PASSWORD"] = "ChangePassword";
    ServiceNameEnum["REGISTER_REQUEST"] = "VUsersCN";
    ServiceNameEnum["FEEDBACK"] = "";
    ServiceNameEnum["VIEW_ORDER_ALL"] = "VIEW_ORDER_ALL";
    ServiceNameEnum["SEND_TO_FRIEND"] = "SendToFriend";
    ServiceNameEnum["TRACKING_NUMBER_RESTORATION"] = "orderRestorationAddTrackingNumber";
    ServiceNameEnum["TRACKING_NUMBER_APPLIANCE"] = "orderApplinceAddTrackingNumber";
    ServiceNameEnum["VIEW_ORDER_SURGICALGUIDE"] = "VIEW_ORDER_SURGICALGUIDE";
    ServiceNameEnum["CONFIRM_SURGICAL_GUIDE"] = "orderSurgicalGuideConfirm";
    ServiceNameEnum["CostCalculate"] = "CostCalculate";
    ServiceNameEnum["ADVANCED_SEARCH"] = "VIEW_ORDER_ALL";
    ServiceNameEnum["ACCEPT_REJECT_RESTORATION"] = "orderRestorationGFMRApproveOrReject";
    ServiceNameEnum["ADD_Doctor"] = "InsertNewDoctor";
    ServiceNameEnum["VIEW_ALL_PATIENTS"] = "VIEW_ALL_PATIENTS";
    ServiceNameEnum["VIEW_ORDER_RESTORATION_GFMR"] = "VIEW_ORDER_RESTORATION_GFMR";
    ServiceNameEnum["VIEW_VOUCHER_HISTORY"] = "VIEW_VOUCHER_HISTORY";
})(ServiceNameEnum || (ServiceNameEnum = {}));


/***/ }),

/***/ 64765:
/*!*******************************************************!*\
  !*** ./shared/shared-guards/auth-guard/auth.guard.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);


class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        const token = localStorage.getItem('token');
        const fName = localStorage.getItem('fName');
        const auth = token ? token : fName;
        if (auth) {
            return true;
        }
        else {
            this.router.navigate(['auth', 'sign-in']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 80855:
/*!***************************************************************************!*\
  !*** ./shared/shared-interceptors/error-interceptor/error.interceptor.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 98636);
/* harmony import */ var _shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared-enums/ResponseCodeEnum */ 31580);
/* harmony import */ var _shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared-enums/ServiceNameEnum */ 4946);
/* harmony import */ var _API_APIName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../API/APIName */ 93645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared-services/toastr.service */ 55325);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);








class ErrorInterceptor {
    constructor(toastService, router) {
        this.toastService = toastService;
        this.router = router;
    }
    intercept(req, next) {
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((event) => {
            var _a, _b, _c;
            if (!req.url.includes('.json') && !req.url.includes(_API_APIName__WEBPACK_IMPORTED_MODULE_2__.APIName.uploadFile) && !req.url.includes(_API_APIName__WEBPACK_IMPORTED_MODULE_2__.APIName.createNewPassword) && !req.url.includes('/assets/banner.properties')) {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse) {
                    if (event.body.responsCode === 0) {
                        event.body.responsCode = _shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.OK;
                    }
                    if (req.body.services[0].serviceName === _shared_enums_ServiceNameEnum__WEBPACK_IMPORTED_MODULE_1__.ServiceNameEnum.CHANGE_PASSWORD) {
                        if (event.body.reponses[0]) {
                            this.toastService.errorAlert(this.onGenerateErrorHandler(event.body.reponses[0].responsCode), 'Error');
                        }
                        if (event.body.reponses[0].responsCode === 0) {
                            event.body.responsCode = _shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.OK;
                        }
                    }
                    else if (event.body.responsCode) {
                        if (event.body.responsCode !== _shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.OK) {
                            if (event.body.reponses) {
                                this.toastService.errorAlert(this.onGenerateErrorHandler(event.body.responsCode, (_b = (_a = event.body) === null || _a === void 0 ? void 0 : _a.reponses[0]) === null || _b === void 0 ? void 0 : _b.responsString), 'Error');
                            }
                            else {
                                this.toastService.errorAlert(this.onGenerateErrorHandler(event.body.responsCode, (_c = event.body) === null || _c === void 0 ? void 0 : _c.responsString), 'Error');
                            }
                        }
                    }
                }
            }
            return event;
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => {
        }, err => {
            var _a;
            (_a = err.error) === null || _a === void 0 ? void 0 : _a.text().then((c) => {
                const error = JSON.parse(c);
                this.toastService.errorAlert(this.onGenerateErrorHandler(error.responsCode), 'Error');
            });
        }));
    }
    onGenerateErrorHandler(responseCode, responsString) {
        switch (responseCode) {
            case _shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.NOT_IMPLEMENTED:
                return 'Not Supported Yet';
            case _shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.Invalid_Parameter:
                return 'Error Invalid Parameter';
            case _shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.Registeration_Failed_Email_Exist:
                return 'Registration Failed: Email Exist';
            case _shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.Credit_Card_Invalid:
                return 'Credit Card Invalid';
            case _shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.Incomplete_Parameters:
                return 'Incomplete parameters';
            case _shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.LOGIN_FAILD_INVALID_TOKEN:
                const myLanguages = localStorage.getItem('language') || '';
                localStorage.clear();
                localStorage.setItem('language', myLanguages);
                this.router.navigate(['auth', 'sign-in']);
                return 'Token not found or expired, please login again';
            case _shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.FAILED_TO_SEND_NOTIFICATION:
                return 'Failed To Send Notification';
            case _shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.UNAUTHORIZED:
                return 'Unauthorized: Authorization failed';
            case _shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.Account_Deactivated:
                return 'Unauthorized: Account Deactivated';
            case _shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.NOT_AUTHORIZED:
                const myLanguage = localStorage.getItem('language') || '';
                localStorage.clear();
                localStorage.setItem('language', myLanguage);
                this.router.navigate(['auth', 'sign-in']);
                return 'Unauthorized: InValid Token';
            case _shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.Wrong_Password:
                return 'Unauthorized: Wrong Password';
            case _shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.TOO_MANY_LOGIN_FAILED_ATTEMPTS:
                return 'Too many failed login requests, for the security of the acccount you will have to wait 5 minutes before you can try again';
            case _shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.Email_Not_Registered:
                return 'Unauthorized: Email Not Registered';
            case _shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.NO_DOWNLOADS_FOR_REQUESTED_SUBORDER:
                return 'No downloads for requested suborder';
            case _shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.FILE_NOT_FOUND:
                return 'File not found';
            case _shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.DOWNLOAD_UNAUTHORIZED_INVALID_BILLING:
                return 'Your credit card information is not correct, you can continue using your Connect account but you will not be able to download completed cases until you correct your billing info';
            case _shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.FAILED_TO_SEND_SHIPPING_LABEL:
                return responsString;
            case _shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.INTERNAL_SERVER_ERROR:
                return 'Internal Server Error';
            case _shared_enums_ResponseCodeEnum__WEBPACK_IMPORTED_MODULE_0__.ResponseCodeEnum.ORDER_ACCESS_DENIED:
                return 'Access Denied';
            default:
                return 'Error Happened';
        }
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router)); };
ErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });


/***/ }),

/***/ 13190:
/*!*********************************************!*\
  !*** ./shared/shared-interceptors/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "httpInterceptorProviders": () => (/* binding */ httpInterceptorProviders)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _error_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-interceptor/error.interceptor */ 80855);
/* harmony import */ var _loader_interceptor_loader_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader-interceptor/loader.interceptor */ 94939);



const httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS, useClass: _error_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_0__.ErrorInterceptor, multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS, useClass: _loader_interceptor_loader_interceptor__WEBPACK_IMPORTED_MODULE_1__.LoaderInterceptor, multi: true },
];


/***/ }),

/***/ 94939:
/*!*****************************************************************************!*\
  !*** ./shared/shared-interceptors/loader-interceptor/loader.interceptor.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderInterceptor": () => (/* binding */ LoaderInterceptor)
/* harmony export */ });
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared-services/loader.service */ 40940);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 71435);
/* harmony import */ var _API_APIName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../API/APIName */ 93645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




class LoaderInterceptor {
    /**
     * The Requirements For The Construction Of The Interceptor
     * @param {Injector} injector For The Injector
     */
    constructor(injector) {
        this.injector = injector;
    }
    /**
     * The Requirements For The Intercept To Initialize And Hide The Loader
     * @param {HttpRequest<any>} request For The Request
     * @param {HttpHandler} next For The handling
     * @return Observable<HttpEvent<any>>
     */
    intercept(request, next) {
        const loaderService = this.injector.get(_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService);
        if (!request.url.includes(_API_APIName__WEBPACK_IMPORTED_MODULE_1__.APIName.uploadFile)) {
            loaderService.show();
        }
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => loaderService.hide()));
    }
}
LoaderInterceptor.ɵfac = function LoaderInterceptor_Factory(t) { return new (t || LoaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector)); };
LoaderInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LoaderInterceptor, factory: LoaderInterceptor.ɵfac });


/***/ }),

/***/ 20793:
/*!**********************************************************!*\
  !*** ./shared/shared-modules/angular-material.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularMaterialModule": () => (/* binding */ AngularMaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 68456);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 37007);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 80221);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/stepper */ 48210);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 74058);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ 15644);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ 22323);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 76322);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ 28417);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ 86608);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 42937);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 32220);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 50298);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/badge */ 90330);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/toolbar */ 64106);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tree */ 75473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 2316);
























const angularMaterialModule = [
    _angular_material_input__WEBPACK_IMPORTED_MODULE_0__.MatInputModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule,
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTabsModule,
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBarModule,
    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
    _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule,
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuModule,
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__.MatStepperModule,
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule,
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule,
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule,
    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__.MatBottomSheetModule,
    _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatListModule,
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__.MatSidenavModule,
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule,
    _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatNativeDateModule,
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule,
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_20__.MatBadgeModule,
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule,
    _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatRippleModule,
    _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__.MatTreeModule
];
class AngularMaterialModule {
}
AngularMaterialModule.ɵfac = function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); };
AngularMaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ imports: [[
            angularMaterialModule
        ], _angular_material_input__WEBPACK_IMPORTED_MODULE_0__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTabsModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__.MatStepperModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__.MatBottomSheetModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatListModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__.MatSidenavModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatNativeDateModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_20__.MatBadgeModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatRippleModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__.MatTreeModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](AngularMaterialModule, { imports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_0__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTabsModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__.MatStepperModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__.MatBottomSheetModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatListModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__.MatSidenavModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatNativeDateModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_20__.MatBadgeModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatRippleModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__.MatTreeModule], exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_0__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTabsModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__.MatStepperModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__.MatBottomSheetModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatListModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__.MatSidenavModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatNativeDateModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_20__.MatBadgeModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatRippleModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__.MatTreeModule] }); })();


/***/ }),

/***/ 95255:
/*!************************************************!*\
  !*** ./shared/shared-services/lang.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LangService": () => (/* binding */ LangService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 70325);



class LangService {
    constructor(translateService) {
        this.translateService = translateService;
        this.lang = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
    }
    getLang() {
        return this.lang.asObservable();
    }
    setLang(lang) {
        if (lang != null) {
            this.lang.next(lang);
        }
    }
    changeLanguage(lang) {
        if (typeof lang === 'string') {
            localStorage.setItem('language', lang);
        }
        if (lang != null) {
            this.translateService.use(lang);
        }
        this.setLang(lang);
    }
}
LangService.ɵfac = function LangService_Factory(t) { return new (t || LangService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService)); };
LangService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LangService, factory: LangService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 40940:
/*!**************************************************!*\
  !*** ./shared/shared-services/loader.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ 85991);


class LoaderService {
    constructor(spinner) {
        this.spinner = spinner;
    }
    show() {
        this.spinner.show();
    }
    hide() {
        this.spinner.hide();
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__.NgxSpinnerService)); };
LoaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 55325:
/*!**************************************************!*\
  !*** ./shared/shared-services/toastr.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastrService": () => (/* binding */ ToastrService)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ 68456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class ToastrService {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.tutorial = false;
    }
    addAlert(message, title, horizontalPosition) {
        const config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarConfig();
        config.panelClass = ['alert-success'];
        config.duration = 2000;
        config.horizontalPosition = horizontalPosition;
        config.verticalPosition = 'top';
        this.snackBar.open(message, title, config);
    }
    updateAlert(message, title, horizontalPosition) {
        const config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarConfig();
        config.panelClass = ['alert-info'];
        config.duration = 2000;
        config.horizontalPosition = horizontalPosition;
        config.verticalPosition = 'top';
        this.snackBar.open(message, title, config);
    }
    deleteAlert(message, title, horizontalPosition) {
        const config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarConfig();
        config.panelClass = ['alert-danger'];
        config.duration = 2000;
        config.horizontalPosition = horizontalPosition;
        config.verticalPosition = 'top';
        this.snackBar.open(message, title, config);
    }
    errorAlert(message, title) {
        const config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarConfig();
        config.panelClass = ['error-message'];
        config.duration = 2000;
        config.horizontalPosition = 'center';
        config.verticalPosition = 'top';
        this.snackBar.open(message, title, config);
    }
}
ToastrService.ɵfac = function ToastrService_Factory(t) { return new (t || ToastrService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBar)); };
ToastrService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ToastrService, factory: ToastrService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 43337:
/*!***************************************************!*\
  !*** ./shared/shared-static-data/SubOrderType.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubOrderType": () => (/* binding */ SubOrderType)
/* harmony export */ });
const SubOrderType = {
    LASER_SCAN: { name: 'Laser Scan', value: 1, uploadType: 'IOS' },
    CONVERSION: { name: 'Conversion', value: 2, uploadType: 'DICOM' },
    TREATMENT_PLAN: { name: 'Treatment Plan', value: 3, uploadType: 'DICOM' },
    SURGICAL_GUIDE: { name: 'Surgical Guide', value: 4, uploadType: '' },
    REPORT: { name: 'Report', value: 5, uploadType: 'DICOM' },
    TRAINING: { name: 'Training', value: 7, uploadType: '' },
    VOUCHER: { name: 'Voucher', value: 8, uploadType: '' },
    SOFTWARE: { name: 'Software', value: 9, uploadType: '' },
    RESTORATION: { name: 'Restoration', value: 11, uploadType: 'REST' },
    MISC: { name: 'Misc', value: 12, uploadType: '' },
    INTRAORAL_SCAN: { name: 'Intraoral Scan', value: 10, uploadType: 'IOS' },
    GFMR: { name: 'Restoration (GFMR)', value: 15, uploadType: 'GFMR' }
};


/***/ }),

/***/ 9470:
/*!*****************************************************!*\
  !*** ./shared/shared-static-id/shared-static-id.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CStaticIds": () => (/* binding */ CStaticIds)
/* harmony export */ });
const CStaticIds = {
    Button: 'btn-',
    CheckBox: 'chk-',
    ComboBox: 'cbo-',
    Dialog: 'dlg-',
    DatePicker: 'dtp-',
    DropDownList: 'ddl-',
    Select: 'sl-',
    Form: 'frm-',
    Frame: 'fra-',
    Image: 'img-',
    Label: 'lbl-',
    AnchorTags: 'lbk-',
    List: 'lst-',
    Menu: 'mnu-',
    RadioButton: 'rdo-',
    RichTextBox: 'rtf-',
    Table: 'tbl-',
    TabStrip: 'tab-',
    TextArea: 'txa-',
    Input: 'txt-',
    Chevron: 'chv-',
    DataGrid: 'dgd-',
    DataList: 'dbl-',
    DirectoryListBox: 'dir-',
    DriveListBox: 'drv-',
    FileListBox: 'fil-',
    Panel: 'pnl-',
    ProgressBar: 'prg-',
    Slider: 'sld-',
    Spinner: 'spn-',
    StatusBar: 'sta-',
    Timer: 'tmr-',
    Toolbar: 'tlb-',
    TreeView: 'tre-',
};


/***/ }),

/***/ 52829:
/*!************************************************************************!*\
  !*** ./projects/connect/$_lazy_route_resources/ lazy namespace object ***!
  \************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 52829;
module.exports = webpackEmptyAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(86853)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map