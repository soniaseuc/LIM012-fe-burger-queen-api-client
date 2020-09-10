(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'LIM012-fe-burger-queen-api-client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_services_auth_config_controller_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/services/auth/config-controller-auth.service */ "./src/app/services/auth/config-controller-auth.service.ts");
/* harmony import */ var _router_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./router–routing.module */ "./src/app/router–routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/page404/page404.component */ "./src/app/components/page404/page404.component.ts");
/* harmony import */ var _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/orders/orders.component */ "./src/app/components/orders/orders.component.ts");
/* harmony import */ var _components_milogo_milogo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/milogo/milogo.component */ "./src/app/components/milogo/milogo.component.ts");
/* harmony import */ var _components_food_orders_food_orders_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/food-orders/food-orders.component */ "./src/app/components/food-orders/food-orders.component.ts");
/* harmony import */ var _components_date_date_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/date/date.component */ "./src/app/components/date/date.component.ts");
/* harmony import */ var _components_bill_orders_bill_orders_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/bill-orders/bill-orders.component */ "./src/app/components/bill-orders/bill-orders.component.ts");
/* harmony import */ var _components_menu_list_products_menu_list_products_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/menu-list-products/menu-list-products.component */ "./src/app/components/menu-list-products/menu-list-products.component.ts");





// routes

// components













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _app_services_auth_config_controller_auth_service__WEBPACK_IMPORTED_MODULE_4__["ConfigcontrollerAuthService"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _router_routing_module__WEBPACK_IMPORTED_MODULE_5__["RouterRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
        _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
        _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_11__["Page404Component"],
        _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_12__["OrdersComponent"],
        _components_milogo_milogo_component__WEBPACK_IMPORTED_MODULE_13__["MilogoComponent"],
        _components_food_orders_food_orders_component__WEBPACK_IMPORTED_MODULE_14__["FoodOrdersComponent"],
        _components_date_date_component__WEBPACK_IMPORTED_MODULE_15__["DateComponent"],
        _components_bill_orders_bill_orders_component__WEBPACK_IMPORTED_MODULE_16__["BillOrdersComponent"],
        _components_menu_list_products_menu_list_products_component__WEBPACK_IMPORTED_MODULE_17__["MenuListProductsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _router_routing_module__WEBPACK_IMPORTED_MODULE_5__["RouterRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                    _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                    _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_11__["Page404Component"],
                    _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_12__["OrdersComponent"],
                    _components_milogo_milogo_component__WEBPACK_IMPORTED_MODULE_13__["MilogoComponent"],
                    _components_food_orders_food_orders_component__WEBPACK_IMPORTED_MODULE_14__["FoodOrdersComponent"],
                    _components_date_date_component__WEBPACK_IMPORTED_MODULE_15__["DateComponent"],
                    _components_bill_orders_bill_orders_component__WEBPACK_IMPORTED_MODULE_16__["BillOrdersComponent"],
                    _components_menu_list_products_menu_list_products_component__WEBPACK_IMPORTED_MODULE_17__["MenuListProductsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _router_routing_module__WEBPACK_IMPORTED_MODULE_5__["RouterRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: _app_services_auth_config_controller_auth_service__WEBPACK_IMPORTED_MODULE_4__["ConfigcontrollerAuthService"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/bill-orders/bill-orders.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/bill-orders/bill-orders.component.ts ***!
  \*****************************************************************/
/*! exports provided: BillOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillOrdersComponent", function() { return BillOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_counter_products_counter_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/counter-products/counter-products.service */ "./src/app/services/counter-products/counter-products.service.ts");
/* harmony import */ var _services_products_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/products/products.service */ "./src/app/services/products/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth-config.service */ "./src/app/services/auth-config.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function BillOrdersComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BillOrdersComponent_tr_14_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; return item_r1.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillOrdersComponent_tr_14_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.remove(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r1.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" S/", item_r1.price, "");
} }
class BillOrdersComponent {
    // total: number;
    constructor(counterProductService, productsService, router, authConfigService) {
        // this.counterProductService.currentDataCart.subscribe(item => this.counter = item);
        this.counterProductService = counterProductService;
        this.productsService = productsService;
        this.router = router;
        this.authConfigService = authConfigService;
        // total y products son para vaciar el resumen del pedido cuando envie pedido a cocina
        this.productInCar = [];
        // this.counterProductService.currentNumber.subscribe(numb => {
        //   this.counter = numb;
        // });
    }
    ngOnInit() {
        this.totalBill();
        this.resetBill();
        // this.subscription =
        // this.totalQuantity = productInCar.length;
        //   }
        // });
    }
    // disminuir(item: any): void {
    //   if (item.quantity === undefined){
    //             item.quantity = 0;
    //      } else if (item.quantity !== undefined && item.quantity > 0){
    //             --item.quantity;
    //      }
    //  }
    // ngOnChange(): void {
    //   this.counterProductService.currentDataCart.subscribe(productInCar => {
    //     if (productInCar) {
    //       this.items = productInCar;
    //       // this.totalQuantity = productInCar.length;
    //       this.totalPrice = productInCar.reduce((sum, current) => sum + (current.price * current.quantity), 0);
    //     }
    //   });
    // }
    //   changeQty(product): void {
    //   this.counterProductService.changeCart(product);
    //   console.log(product);
    // }
    remove(product) {
        this.counterProductService.removeElementCart(product);
    }
    totalBill() {
        this.counterProductService.currentDataCart.subscribe(productInCar => {
            if (productInCar) {
                this.items = productInCar;
                this.totalPrice = productInCar.reduce((sum, current) => sum + (current.price * current.quantity), 0);
            }
        });
    }
    resetBill() {
        this.totalPrice = 0;
        this.productInCar = [];
    }
    sendOrder(items) {
        const userEmail = sessionStorage.getItem('emailCurrentUser');
        this.authConfigService.getUser(userEmail).subscribe(userInfo => {
            // console.log(userInfo, 'hola mundo');
            this.order = {
                client: this.client,
                userId: userInfo._id,
                products: items.map(prod => {
                    const obj = {
                        qty: prod.quantity,
                        productId: prod._id,
                    };
                    // console.log(obj);
                    return obj;
                }),
            };
            console.log(this.order);
            // this.resetBill();
            this.productsService.sendOrder(this.order);
            this.counterProductService.cleanCart();
            // this.productsService.sendOrder(items);
            // this.router.navigate(['/orders']);
            // this.subscription.unsubscribe();
        });
        // products: obj.items
        // .map(item => {
        //   this.qty = item.quantity,
        //   this.productId = item._id;
        // }),
        // map para destructurar el obj
        // status: this.status,
        // dateEntry: this.dateEntry
        // console.log(this.order);
        // this.resetBill();
        // this.productsService.sendOrder(this.order);
        // // this.productsService.sendOrder(items);
        // this.router.navigate(['/orders']);
        // this.subscription.unsubscribe();
        // setTimeout(() => {
        //   this.subscription.unsubscribe();
        // }, 10000);
    }
}
BillOrdersComponent.ɵfac = function BillOrdersComponent_Factory(t) { return new (t || BillOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_counter_products_counter_products_service__WEBPACK_IMPORTED_MODULE_1__["CounterProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_config_service__WEBPACK_IMPORTED_MODULE_4__["AuthConfigService"])); };
BillOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BillOrdersComponent, selectors: [["app-bill-orders"]], inputs: { hijoBillOrders: "hijoBillOrders" }, decls: 21, vars: 4, consts: [[1, "yellow-section-right"], [1, "client-name-container"], ["placeholder", "Client Name", 1, "client-info-select", 3, "ngModel", "ngModelChange"], [1, "product-resume-total"], [1, "table-products"], [4, "ngFor", "ngForOf"], [1, "total-amount"], [1, "cancel-order"], ["type", "button", 1, "send-order", 3, "click"], [1, "product-name"], ["type", "number", 1, "input-product-name", 3, "ngModel", "ngModelChange"], [1, "product-price"], ["type", "button", 3, "click"], ["data-inline", "false", "data-icon", "ic:baseline-delete", 1, "iconify", "delete"]], template: function BillOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BillOrdersComponent_Template_input_ngModelChange_2_listener($event) { return ctx.client = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " PRODUCTOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " CANTIDAD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " PRECIOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BillOrdersComponent_tr_14_Template, 10, 3, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "CANCELAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillOrdersComponent_Template_button_click_19_listener() { return ctx.sendOrder(ctx.items); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "ENVIAR A COCINA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.client);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Precio total: S/.", ctx.totalPrice, "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"]], styles: [".yellow-section-right[_ngcontent-%COMP%] {\n  margin-top: 11%;\n  margin-left: 2%;\n  width: 49vw;\n  height: 65vh;\n  background: rgba(247, 182, 16, 0.5);\n  box-sizing: border-box;\n  border-radius: 0px 30px 30px 0px;\n}\n\n.client-name-container[_ngcontent-%COMP%] {\n  width: 43vw;\n  height: 10%;\n  margin-left: 5%;\n  background: rgba(227, 222, 213, 0.5);\n  box-sizing: border-box;\n  border-radius: 0px 30px 30px 0px;\n}\n\n.client-info-select[_ngcontent-%COMP%] {\n  padding: 2%;\n}\n\n.table-products[_ngcontent-%COMP%] {\n  table-layout: fixed;\n  width: 85%;\n  padding-left: 15%;\n}\n\n.input-product-name[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.product-resume-total[_ngcontent-%COMP%] {\n  width: 43vw;\n  height: 65%;\n  margin-left: 5%;\n  margin-top: 5%;\n  background: rgba(227, 222, 213, 0.5);\n  box-sizing: border-box;\n  border-radius: 0px 30px 30px 0px;\n}\n\n.total-amount[_ngcontent-%COMP%] {\n  width: 35%;\n  height: 7%;\n  margin-top: -10%;\n  margin-bottom: 5%;\n  margin-left: 30%;\n  background: rgba(227, 13, 44, 0.5);\n  border-radius: 0px 30px 30px 0px;\n  display: flex;\n  align-content: center;\n}\n\n.cancel-order[_ngcontent-%COMP%] {\n  width: 153px;\n  height: 64px;\n  margin-left: 15%;\n  margin-top: 2%;\n  background: #E30D2C;\n  border: 1px solid #E30D2C;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 50px;\n}\n\n.send-order[_ngcontent-%COMP%] {\n  width: 222px;\n  height: 64px;\n  margin-left: 15%;\n  margin-top: 2%;\n  background: #F7B610;\n  border: 20px solid #F7B610;\n  box-sizing: border-box;\n  border-radius: 30px;\n}\n\n.delete[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #1A1919;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iaWxsLW9yZGVycy9iaWxsLW9yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FaYztFQWFkLHNCQUFBO0VBQ0EsZ0NBQUE7QUFURjs7QUFZQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQWpCWTtFQWtCWixzQkFBQTtFQUNBLGdDQUFBO0FBVEY7O0FBWUE7RUFDQSxXQUFBO0FBVEE7O0FBWUE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQVRGOztBQVlBO0VBQ0UsVUFBQTtBQVRGOztBQVlBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUVBLG9DQTFDWTtFQTJDWixzQkFBQTtFQUNBLGdDQUFBO0FBVkY7O0FBYUE7RUFFRSxVQUFBO0VBQ0EsVUFBQTtFQUVBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQXpEVztFQTJEWCxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQWJGOztBQWdCQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBdEVLO0VBdUVMLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFwRk87RUFxRlAsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsZUFBQTtFQUNBLGNBdEZNO0FBeUVSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iaWxsLW9yZGVycy9iaWxsLW9yZGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibHVlOiAjMDcxNjg1O1xyXG4kYmx1ZVRyYW5zcGE6IHJnYmEoNywgMjIsIDEzMywgMC41KTtcclxuJHllbGxvdzogI0Y3QjYxMDtcclxuJHllbGxvd1RyYW5zcGE6IHJnYmEoMjQ3LCAxODIsIDE2LCAwLjUpO1xyXG4kcmVkOiAgI0UzMEQyQztcclxuJHJlZFRyYW5zcGE6IHJnYmEoMjI3LCAxMywgNDQsIDAuNSk7XHJcbiRncmF5OiAjRTNERUQ1O1xyXG4kZ3JheVRyYW5zcGE6IHJnYmEoMjI3LCAyMjIsIDIxMywgMC41KTtcclxuJG5lZ3JvOiAjMUExOTE5O1xyXG5cclxuLnllbGxvdy1zZWN0aW9uLXJpZ2h0IHtcclxuICBtYXJnaW4tdG9wOiAxMSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIHdpZHRoOiA0OXZ3O1xyXG4gIGhlaWdodDogNjV2aDtcclxuICBiYWNrZ3JvdW5kOiAkeWVsbG93VHJhbnNwYTsgIFxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDMwcHggMzBweCAwcHg7XHJcbn1cclxuXHJcbi5jbGllbnQtbmFtZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiA0M3Z3O1xyXG4gIGhlaWdodDogMTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBiYWNrZ3JvdW5kOiAkZ3JheVRyYW5zcGE7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMzBweCAzMHB4IDBweDtcclxufVxyXG5cclxuLmNsaWVudC1pbmZvLXNlbGVjdCB7XHJcbnBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4udGFibGUtcHJvZHVjdHN7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICB3aWR0aDogODUlO1xyXG4gIHBhZGRpbmctbGVmdDogMTUlO1xyXG59XHJcblxyXG4uaW5wdXQtcHJvZHVjdC1uYW1le1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5wcm9kdWN0LXJlc3VtZS10b3RhbCB7ICBcclxuICB3aWR0aDogNDN2dztcclxuICBoZWlnaHQ6IDY1JTtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcblxyXG4gIGJhY2tncm91bmQ6ICRncmF5VHJhbnNwYTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAzMHB4IDMwcHggMHB4O1xyXG59XHJcblxyXG4udG90YWwtYW1vdW50IHtcclxuICAvLyBib3R0b206MjAlO1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAgaGVpZ2h0OiA3JTtcclxuICAvLyBtYXJnaW4tdG9wOiA3NSU7XHJcbiAgbWFyZ2luLXRvcDogLTEwJTtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gIGJhY2tncm91bmQ6ICRyZWRUcmFuc3BhO1xyXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMzBweCAzMHB4IDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhbmNlbC1vcmRlciB7XHJcbiAgd2lkdGg6IDE1M3B4O1xyXG4gIGhlaWdodDogNjRweDtcclxuICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIGJhY2tncm91bmQ6ICRyZWQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHJlZDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuLnNlbmQtb3JkZXIge1xyXG4gIHdpZHRoOiAyMjJweDtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBiYWNrZ3JvdW5kOiAkeWVsbG93O1xyXG4gIGJvcmRlcjogMjBweCBzb2xpZCAkeWVsbG93O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxufVxyXG5cclxuLmRlbGV0ZXtcclxuICBmb250LXNpemU6IDMwcHg7IFxyXG4gIGNvbG9yOiRuZWdybztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BillOrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bill-orders',
                templateUrl: './bill-orders.component.html',
                styleUrls: ['./bill-orders.component.scss']
            }]
    }], function () { return [{ type: _services_counter_products_counter_products_service__WEBPACK_IMPORTED_MODULE_1__["CounterProductsService"] }, { type: _services_products_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_auth_config_service__WEBPACK_IMPORTED_MODULE_4__["AuthConfigService"] }]; }, { hijoBillOrders: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/date/date.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/date/date.component.ts ***!
  \***************************************************/
/*! exports provided: DateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateComponent", function() { return DateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class DateComponent {
    constructor() {
        this.today = Date.now();
    }
    ngOnInit() {
    }
}
DateComponent.ɵfac = function DateComponent_Factory(t) { return new (t || DateComponent)(); };
DateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DateComponent, selectors: [["app-date"]], inputs: { hijoDate: "hijoDate" }, decls: 4, vars: 4, consts: [[1, "date"]], template: function DateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx.today, "medium"));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".date[_ngcontent-%COMP%] {\n  margin-left: 67%;\n  font-size: small;\n  color: #494747;\n}\n\n@media (min-width: 400px) {\n  .date[_ngcontent-%COMP%] {\n    font-size: x-large;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXRlL2RhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FMSztBQUlSOztBQU9BO0VBQ0k7SUFDSSxrQkFBQTtFQUpOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RhdGUvZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwbG9tbzogIzQ5NDc0NztcclxuXHJcbi5kYXRle1xyXG4gICBtYXJnaW4tbGVmdDogNjclO1xyXG4gICBmb250LXNpemU6IHNtYWxsO1xyXG4gICBjb2xvcjogJHBsb21vO1xyXG5cclxufSBcclxuXHJcbiRsYXlvdXQtYnJlYWtwb2ludC10YWJsZXQ6IDQwMHB4O1xyXG4vLyBhcXVpIHRvZG8gbG8gbW9kaWZpY2FkbyBhZmVjdGEgbGEgdmlzdGEgdGFibGV0XHJcbkBtZWRpYSAobWluLXdpZHRoOiAkbGF5b3V0LWJyZWFrcG9pbnQtdGFibGV0KXtcclxuICAgIC5kYXRle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-date',
                templateUrl: './date.component.html',
                styleUrls: ['./date.component.scss'],
            }]
    }], function () { return []; }, { hijoDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/food-orders/food-orders.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/food-orders/food-orders.component.ts ***!
  \*****************************************************************/
/*! exports provided: FoodOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodOrdersComponent", function() { return FoodOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FoodOrdersComponent {
    constructor() { }
    ngOnInit() {
    }
}
FoodOrdersComponent.ɵfac = function FoodOrdersComponent_Factory(t) { return new (t || FoodOrdersComponent)(); };
FoodOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FoodOrdersComponent, selectors: [["app-food-orders"]], decls: 6, vars: 0, consts: [[1, "container-listado"], ["id", "colorp", 1, "letraListado"], ["id", "En progreso", "type", "checkbox", 1, "btn-post-order"], ["for", "En progreso", 1, "btn-post-order"]], template: function FoodOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "LISTADO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "En Progreso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container-listado[_ngcontent-%COMP%] {\n  width: 49vw;\n  height: 65vh;\n  margin-top: 15%;\n  margin-left: 1%;\n  margin-right: 0.5%;\n  background: rgba(7, 22, 133, 0.5);\n  box-sizing: border-box;\n  border-radius: 30px 0px 0px 30px;\n}\n\n.letraListado[_ngcontent-%COMP%] {\n  width: 172px;\n  height: 48px;\n  left: 166px;\n  top: 300%;\n  font-family: Bangers;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 60px;\n  line-height: 64px;\n  color: #F7B610;\n}\n\n.btn-post-order[_ngcontent-%COMP%] {\n  background-color: #F7B610;\n  color: #071685;\n  text-align: center;\n}\n\n.total-bill[_ngcontent-%COMP%] {\n  color: #E30D2C;\n  border: 2pt solid #E30D2C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb29kLW9yZGVycy9mb29kLW9yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQWJVO0VBY1Ysc0JBQUE7RUFDQSxnQ0FBQTtBQVBKOztBQVVBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFQQTs7QUFVQTtFQUNJLHlCQS9CSztFQWdDTCxjQWxDRztFQW1DSCxrQkFBQTtBQVBKOztBQVVBO0VBQ0ksY0FuQ0c7RUFvQ0gseUJBQUE7QUFQSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vZC1vcmRlcnMvZm9vZC1vcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmx1ZTogIzA3MTY4NTtcclxuJGJsdWVUcmFuc3BhOiByZ2JhKDcsIDIyLCAxMzMsIDAuNSk7XHJcbiR5ZWxsb3c6ICNGN0I2MTA7XHJcbiR3aGl0ZVRyYW5zcGE6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiRyZWQ6ICAjRTMwRDJDO1xyXG4keWVsbG93VHJhbnNwYTogcmdiYSgyNDcsIDE4MiwgMTYsIDAuNSk7XHJcbiRncmlzOiAjNDk0NzQ3O1xyXG5cclxuLmNvbnRhaW5lci1saXN0YWRveyAgICBcclxuICAgIHdpZHRoOiA0OXZ3O1xyXG4gICAgaGVpZ2h0OiA2NXZoO1xyXG4gICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjUlO1xyXG4gICAgYmFja2dyb3VuZDogJGJsdWVUcmFuc3BhO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMHB4IDBweCAzMHB4O1xyXG59XHJcblxyXG4ubGV0cmFMaXN0YWRve1xyXG53aWR0aDogMTcycHg7XHJcbmhlaWdodDogNDhweDtcclxubGVmdDogMTY2cHg7XHJcbnRvcDogMzAwJTtcclxuZm9udC1mYW1pbHk6IEJhbmdlcnM7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuZm9udC1zaXplOiA2MHB4O1xyXG5saW5lLWhlaWdodDogNjRweDtcclxuY29sb3I6ICNGN0I2MTA7XHJcbn1cclxuXHJcbi5idG4tcG9zdC1vcmRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR5ZWxsb3c7XHJcbiAgICBjb2xvcjogJGJsdWU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b3RhbC1iaWxse1xyXG4gICAgY29sb3I6ICRyZWQ7XHJcbiAgICBib3JkZXI6IDJwdCBzb2xpZCAkcmVkO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoodOrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-food-orders',
                templateUrl: './food-orders.component.html',
                styleUrls: ['./food-orders.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _date_date_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../date/date.component */ "./src/app/components/date/date.component.ts");
/* harmony import */ var _menu_list_products_menu_list_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu-list-products/menu-list-products.component */ "./src/app/components/menu-list-products/menu-list-products.component.ts");
/* harmony import */ var _bill_orders_bill_orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bill-orders/bill-orders.component */ "./src/app/components/bill-orders/bill-orders.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







// import { Router } from '@angular/router';
class HomeComponent {
    constructor() {
        this.padreNavbar = 'soy un header';
        this.padreDate = 'Date&HOurs';
        this.padreBillOrders = 'mensaje desde caja amarilla derecha';
        this.padreMenuListProducts = 'mensaje caja amarilla izquierda';
    }
    ngOnInit() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 4, consts: [[3, "hijoNavbar"], [3, "hijoDate"], [1, "breakfast-section-container"], [3, "hijoMenuListProducts"], [3, "hijoBillOrders"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-date", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-menu-list-products", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-bill-orders", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hijoNavbar", ctx.padreNavbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hijoDate", ctx.padreDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hijoMenuListProducts", ctx.padreMenuListProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hijoBillOrders", ctx.padreBillOrders);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _date_date_component__WEBPACK_IMPORTED_MODULE_2__["DateComponent"], _menu_list_products_menu_list_products_component__WEBPACK_IMPORTED_MODULE_3__["MenuListProductsComponent"], _bill_orders_bill_orders_component__WEBPACK_IMPORTED_MODULE_4__["BillOrdersComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: [".breakfast-section-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFSRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJsdWU6ICMwNzE2ODU7XHJcbiRibHVlVHJhbnNwYTogcmdiYSg3LCAyMiwgMTMzLCAwLjUpO1xyXG4keWVsbG93OiAjRjdCNjEwO1xyXG4keWVsbG93VHJhbnNwYTogcmdiYSgyNDcsIDE4MiwgMTYsIDAuNSk7XHJcbiRyZWQ6ICAjRTMwRDJDO1xyXG4kcmVkVHJhbnNwYTogcmdiYSgyMjcsIDEzLCA0NCwgMC41KTtcclxuJGdyYXk6ICNFM0RFRDU7XHJcbiRncmF5VHJhbnNwYTogcmdiYSgyMjcsIDIyMiwgMjEzLCAwLjUpO1xyXG5cclxuLmJyZWFrZmFzdC1zZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4kbGF5b3V0LWJyZWFrcG9pbnQtdGFibGV0OiA0MDBweDtcclxuLy8gYXF1aSB0b2RvIGxvIG1vZGlmaWNhZG8gYWZlY3RhIGxhIHZpc3RhIHRhYmxldFxyXG5AbWVkaWEgKG1pbi13aWR0aDogJGxheW91dC1icmVha3BvaW50LXRhYmxldCkge1xyXG4gIFxyXG5cclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/menu-list-products/menu-list-products.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/menu-list-products/menu-list-products.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MenuListProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListProductsComponent", function() { return MenuListProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_products_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/products/products.service */ "./src/app/services/products/products.service.ts");
/* harmony import */ var _services_counter_products_counter_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/counter-products/counter-products.service */ "./src/app/services/counter-products/counter-products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function MenuListProductsComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuListProductsComponent_tr_16_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const product_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.addCart(product_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" S/", product_r1.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/menu/", product_r1.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", product_r1.image);
} }
class MenuListProductsComponent {
    constructor(productsService, counterProductsService) {
        this.productsService = productsService;
        this.counterProductsService = counterProductsService;
        this.counterProductsService.currentNumber.subscribe(product => {
            this.counter = product;
        });
    }
    ngOnInit() {
        this.getProducts('breakfast');
    }
    getProducts(typeSelect) {
        this.productsService.getListProduct().subscribe(response => {
            this.products = response;
            const breakfast = this.products.filter(products => products.type === typeSelect);
            this.products = breakfast;
        });
    }
    // sum(id): void {
    //   const newNumber = this.counter + 1;
    //   this.counterProductsService.changeNumber(newNumber);
    // }
    addCart(product) {
        this.counterProductsService.changeCart(product);
    }
}
MenuListProductsComponent.ɵfac = function MenuListProductsComponent_Factory(t) { return new (t || MenuListProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_counter_products_counter_products_service__WEBPACK_IMPORTED_MODULE_2__["CounterProductsService"])); };
MenuListProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuListProductsComponent, selectors: [["app-menu-list-products"]], inputs: { hijoMenuListProducts: "hijoMenuListProducts" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_products_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]])], decls: 17, vars: 1, consts: [[1, "articleButton"], [1, "options-button", 3, "click"], ["routerLink", "/orders", "routerLinkActive", "active", 1, "options-button"], [1, "yellow-section-left"], [1, "menu"], [1, "table-products"], [1, ""], [1, "title-products"], [4, "ngFor", "ngForOf"], [1, "product-name"], [1, "product-price"], ["width", "50px", 1, "product-image", 3, "src", "alt"], ["type", "button", 1, "button-add-product", 3, "click"], ["data-inline", "false", "data-icon", "clarity:plus-circle-solid", 1, "iconify", "add-product"]], template: function MenuListProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuListProductsComponent_Template_button_click_1_listener() { return ctx.getProducts("breakfast"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Desayuno");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuListProductsComponent_Template_button_click_3_listener() { return ctx.getProducts("lunch"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Almuerzo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Pedidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "article", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "MENU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " PRODUCTOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " PRECIOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MenuListProductsComponent_tr_16_Template, 9, 4, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".options-button[_ngcontent-%COMP%] {\n  width: 157px;\n  height: 45px;\n}\n\n.options-button[_ngcontent-%COMP%] {\n  background: #F7B610;\n  background: rgba(247, 182, 16, 0.5);\n  border-radius: 20px 20px 0px 0px;\n  border-bottom: none;\n  font-size: large;\n}\n\n.articleButton[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n\n.yellow-section-left[_ngcontent-%COMP%] {\n  width: 49vw;\n  height: 65vh;\n  margin-left: 1%;\n  margin-right: 0.5%;\n  background: rgba(247, 182, 16, 0.5);\n  box-sizing: border-box;\n  border-radius: 30px 0px 0px 30px;\n}\n\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  width: 107px;\n  height: 54px;\n  left: 55%;\n  top: 214%;\n  margin-left: 40%;\n  font-family: \"Bangers\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 300%;\n  color: #E30D2C;\n}\n\n@media (min-width: 400px) {\n  .options-button[_ngcontent-%COMP%] {\n    margin-left: 4%;\n    margin-top: 4%;\n    font-size: xx-large;\n  }\n\n  .articleButton[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .table-products[_ngcontent-%COMP%] {\n    table-layout: fixed;\n    width: 85%;\n    padding-left: 15%;\n  }\n\n  .product-price[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .product-name[_ngcontent-%COMP%] {\n    font-size: x-large;\n  }\n\n  .add-product[_ngcontent-%COMP%] {\n    font-size: 30px;\n    color: #00C200;\n  }\n\n  .button-add-product[_ngcontent-%COMP%] {\n    background: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51LWxpc3QtcHJvZHVjdHMvbWVudS1saXN0LXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCQTtFQUpFLFlBS2dCO0VBSmhCLFlBSXVCO0FBZHpCOztBQWlCQTtFQUNFLG1CQW5CTztFQW9CUCxtQ0FuQmM7RUFvQmQsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBZEY7O0FBaUJBO0VBQ0UsbUJBQUE7QUFkRjs7QUFpQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQWxDYztFQW1DZCxzQkFBQTtFQUNBLGdDQUFBO0FBZEY7O0FBaUJBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQWpESztBQW1DUDs7QUFtQkE7RUFFQTtJQUNFLGVBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7RUFqQkE7O0VBb0JGO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0VBakJBOztFQW1CRjtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLGlCQUFBO0VBaEJBOztFQWtCRjtJQUNFLGtCQUFBO0VBZkE7O0VBaUJGO0lBQ0Usa0JBQUE7RUFkQTs7RUFnQkY7SUFDRSxlQUFBO0lBQ0EsY0ExRU07RUE2RE47O0VBZUY7SUFDRSxnQkFBQTtFQVpBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUtbGlzdC1wcm9kdWN0cy9tZW51LWxpc3QtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmx1ZTogIzA3MTY4NTtcclxuJGJsdWVUcmFuc3BhOiByZ2JhKDcsIDIyLCAxMzMsIDAuNSk7XHJcbiR5ZWxsb3c6ICNGN0I2MTA7XHJcbiR5ZWxsb3dUcmFuc3BhOiByZ2JhKDI0NywgMTgyLCAxNiwgMC41KTtcclxuJHJlZDogICNFMzBEMkM7XHJcbiRyZWRUcmFuc3BhOiByZ2JhKDIyNywgMTMsIDQ0LCAwLjUpO1xyXG4kZ3JheTogI0UzREVENTtcclxuJGdyYXlUcmFuc3BhOiByZ2JhKDIyNywgMjIyLCAyMTMsIDAuNSk7XHJcbiRuZWdybzogIzFBMTkxOTtcclxuJHZlcmRlOiAjMDBDMjAwO1xyXG5cclxuQG1peGluIGJ1dHRvbigkYW5jaG8sICRhbHRvKSB7XHJcbiAgd2lkdGg6ICRhbmNobztcclxuICBoZWlnaHQ6ICRhbHRvO1xyXG59XHJcbiAgICBcclxuLm9wdGlvbnMtYnV0dG9uIHtcclxuICBAaW5jbHVkZSBidXR0b24oMTU3cHgsIDQ1cHgpO1xyXG59XHJcblxyXG4ub3B0aW9ucy1idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6ICR5ZWxsb3c7XHJcbiAgYmFja2dyb3VuZDogJHllbGxvd1RyYW5zcGE7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4uYXJ0aWNsZUJ1dHRvbiB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLnllbGxvdy1zZWN0aW9uLWxlZnQge1xyXG4gIHdpZHRoOiA0OXZ3O1xyXG4gIGhlaWdodDogNjV2aDtcclxuICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjUlO1xyXG4gIGJhY2tncm91bmQ6ICR5ZWxsb3dUcmFuc3BhO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweCAwcHggMHB4IDMwcHg7XHJcbn1cclxuICAgIFxyXG4ubWVudXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDdweDtcclxuICBoZWlnaHQ6IDU0cHg7XHJcbiAgbGVmdDogNTUlO1xyXG4gIHRvcDogMjE0JTtcclxuICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gIGZvbnQtZmFtaWx5OiAnQmFuZ2Vycyc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAzMDAlO1xyXG4gIGNvbG9yOiAkcmVkOyAgICAgIFxyXG59XHJcblxyXG4kbGF5b3V0LWJyZWFrcG9pbnQtdGFibGV0OiA0MDBweDtcclxuLy8gYXF1aSB0b2RvIGxvIG1vZGlmaWNhZG8gYWZlY3RhIGxhIHZpc3RhIHRhYmxldFxyXG5AbWVkaWEgKG1pbi13aWR0aDogJGxheW91dC1icmVha3BvaW50LXRhYmxldCkge1xyXG5cclxuLm9wdGlvbnMtYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgbWFyZ2luLXRvcDogNCU7XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxufVxyXG5cclxuLmFydGljbGVCdXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG4udGFibGUtcHJvZHVjdHN7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICB3aWR0aDogODUlO1xyXG4gIHBhZGRpbmctbGVmdDogMTUlO1xyXG59XHJcbi5wcm9kdWN0LXByaWNle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucHJvZHVjdC1uYW1le1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG4uYWRkLXByb2R1Y3R7XHJcbiAgZm9udC1zaXplOiAzMHB4OyBcclxuICBjb2xvcjokdmVyZGU7XHJcbn1cclxuLmJ1dHRvbi1hZGQtcHJvZHVjdHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuListProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-list-products',
                templateUrl: './menu-list-products.component.html',
                styleUrls: ['./menu-list-products.component.scss'],
                providers: [_services_products_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]],
            }]
    }], function () { return [{ type: _services_products_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"] }, { type: _services_counter_products_counter_products_service__WEBPACK_IMPORTED_MODULE_2__["CounterProductsService"] }]; }, { hijoMenuListProducts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/milogo/milogo.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/milogo/milogo.component.ts ***!
  \*******************************************************/
/*! exports provided: MilogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MilogoComponent", function() { return MilogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MilogoComponent {
    constructor() { }
    ngOnInit() {
    }
}
MilogoComponent.ɵfac = function MilogoComponent_Factory(t) { return new (t || MilogoComponent)(); };
MilogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MilogoComponent, selectors: [["app-milogo"]], inputs: { hijoLogo: "hijoLogo" }, decls: 2, vars: 0, consts: [["alt", "Angular Logo", "src", "https://soniaseuc.github.io/LIM012-fe-burger-queen-api-client/assets/logo.png", 1, "logo"]], template: function MilogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".logo[_ngcontent-%COMP%] {\n  width: 362px;\n  height: 130px;\n  display: flex;\n  margin-top: 0;\n  padding: 2% 0 3% 2%;\n}\n\n@media (min-width: 400px) {\n  .logo[_ngcontent-%COMP%] {\n    width: 462px;\n    height: 200px;\n    display: flex;\n    margin-left: 1%;\n    margin-top: 0;\n    padding: 2% 0 2% 2%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9taWxvZ28vbWlsb2dvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBSkksWUFLbUI7RUFKbkIsYUFJMEI7RUFDMUIsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUhKOztBQVFBO0VBQ0U7SUFkRSxZQWVtQjtJQWRuQixhQWMwQjtJQUMxQixhQUFBO0lBQ0EsZUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtFQUpGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21pbG9nby9taWxvZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gY29udGFpbmVyKCRhbmNobywgJGFsdG8pIHtcclxuICAgIHdpZHRoOiAkYW5jaG87XHJcbiAgICBoZWlnaHQ6ICRhbHRvO1xyXG59XHJcbiAgXHJcbi5sb2dvIHtcclxuICAgIEBpbmNsdWRlIGNvbnRhaW5lcigzNjJweCwgMTMwcHgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBwYWRkaW5nOiAyJSAwIDMlIDIlO1xyXG59XHJcbiAgXHJcbiRsYXlvdXQtYnJlYWtwb2ludC10YWJsZXQ6IDQwMHB4O1xyXG4vLyB0b2RvIGxvIHF1ZSBjYW1iaWUgYXF1aSBtb2RpZmljYSBsYSB2aXN0YSB0YWJsZXRcclxuQG1lZGlhIChtaW4td2lkdGg6ICRsYXlvdXQtYnJlYWtwb2ludC10YWJsZXQpIHtcclxuICAubG9nbyB7XHJcbiAgICBAaW5jbHVkZSBjb250YWluZXIoNDYycHgsIDIwMHB4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgcGFkZGluZzogMiUgMCAyJSAyJTtcclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MilogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-milogo',
                templateUrl: './milogo.component.html',
                styleUrls: ['./milogo.component.scss']
            }]
    }], function () { return []; }, { hijoLogo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth-config.service */ "./src/app/services/auth-config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _milogo_milogo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../milogo/milogo.component */ "./src/app/components/milogo/milogo.component.ts");





class NavbarComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.padreLogo = 'mensaje desde el padre';
    }
    ngOnInit() {
    }
    logOut() {
        this.authService.logout();
        this.router.navigate(['']);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_config_service__WEBPACK_IMPORTED_MODULE_1__["AuthConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { hijoNavbar: "hijoNavbar" }, decls: 7, vars: 1, consts: [[3, "hijoLogo"], [1, "user-logout"], [1, "user-name"], [1, "logout", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-milogo", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "USUARIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_5_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "CERRAR SESI\u00D3N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hijoLogo", ctx.padreLogo);
    } }, directives: [_milogo_milogo_component__WEBPACK_IMPORTED_MODULE_3__["MilogoComponent"]], styles: ["header[_ngcontent-%COMP%] {\n  background: #071685;\n  background: rgba(7, 22, 133, 0.5);\n  display: flex;\n  flex-direction: row;\n}\n\n.logout[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #F7B610;\n  background-color: rgba(7, 22, 133, 0);\n}\n\n.user-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.user-logout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: 35%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsbUJBUEs7RUFRTCxpQ0FQWTtFQVFaLGFBQUE7RUFDQSxtQkFBQTtBQUxGOztBQVNBO0VBTUksZUFBQTtFQUNBLGNBakJNO0VBa0JOLHFDQUFBO0FBWEo7O0FBY0E7RUFJSSxlQUFBO0FBZEo7O0FBaUJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLGdCQUFBO0FBZkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmx1ZTogIzA3MTY4NTtcclxuJGJsdWVUcmFuc3BhOiByZ2JhKDcsIDIyLCAxMzMsIDAuNSk7XHJcbiRyZWQ6ICAjRTMwRDJDO1xyXG4kd2hpdGVUcmFuc3BhOiBSR0JBKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4keWVsbG93IDogI0Y3QjYxMDtcclxuXHJcbmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgYmFja2dyb3VuZDogJGJsdWVUcmFuc3BhO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4ubG9nb3V0IHtcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogNTEwJTtcclxuICAgIC8vIG1hcmdpbi10b3A6IDUwJTtcclxuICAgIC8vIHdpZHRoOiA4MHB4O1xyXG4gICAgLy8gaGVpZ2h0OiA2MnB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICR5ZWxsb3c7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcsIDIyLCAxMzMsIDApO1xyXG59XHJcblxyXG4udXNlci1uYW1lIHtcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMzAwJTtcclxuICAgIC8vIG1hcmdpbi10b3A6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi51c2VyLWxvZ291dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLy8gYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: src_app_services_auth_config_service__WEBPACK_IMPORTED_MODULE_1__["AuthConfigService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { hijoNavbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/orders/orders.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/orders/orders.component.ts ***!
  \*******************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_counter_products_counter_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/counter-products/counter-products.service */ "./src/app/services/counter-products/counter-products.service.ts");
/* harmony import */ var _services_products_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/products/products.service */ "./src/app/services/products/products.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _food_orders_food_orders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../food-orders/food-orders.component */ "./src/app/components/food-orders/food-orders.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function OrdersComponent_div_16_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r3.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r3.qty);
} }
function OrdersComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrdersComponent_div_16_div_3_Template, 5, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", order_r1.products);
} }
class OrdersComponent {
    // public product: any;
    constructor(counterProductService, productsService) {
        this.counterProductService = counterProductService;
        this.productsService = productsService;
        this.navbarPadre = 'mensaje desde el padre';
        this.foodordersPadre = 'mensaje desde el padre';
    }
    ngOnInit() {
        this.productsService.kitchenOrders().subscribe((data) => {
            this.orders = data;
            console.log(this.orders);
            /*this.showOrders = {
              order: data.forEach(element => {
                console.log(element);
                const obj = {
                  client: element.client,
                  id: element.id,
                  prod: element.products
                };
                console.log(obj.client);
                console.log(obj.prod[0].name);
                return obj;
              }),
            };*/
        });
    }
}
OrdersComponent.ɵfac = function OrdersComponent_Factory(t) { return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_counter_products_counter_products_service__WEBPACK_IMPORTED_MODULE_1__["CounterProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"])); };
OrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrdersComponent, selectors: [["app-orders"]], decls: 17, vars: 3, consts: [[3, "navbarHijo"], [1, "articleButton"], ["routerLink", "/home", "routerLinkActive", "active", 1, "options-button"], ["routerLink", "/orders", "routerLinkActive", "active", 1, "options-button"], [1, "box-container-orders"], [3, "foodordersHijo"], [1, "container-pedido"], ["id", "Entregado", "type", "checkbox", 1, "btn-post-order"], ["for", "Entregado", 1, "btn-post-order"], ["class", "paintOrders", 4, "ngFor", "ngForOf"], [1, "paintOrders"], [4, "ngFor", "ngForOf"]], template: function OrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Desayuno");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Almuerzo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pedidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-food-orders", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "article", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "PEDIDOS DE COCINA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "EN PROGRESO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, OrdersComponent_div_16_Template, 4, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navbarHijo", ctx.navbarPadre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("foodordersHijo", ctx.foodordersPadre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _food_orders_food_orders_component__WEBPACK_IMPORTED_MODULE_5__["FoodOrdersComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".box-container-orders[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.container-pedido[_ngcontent-%COMP%] {\n  margin-top: 7.2%;\n  margin-left: 1%;\n  width: 49vw;\n  height: 65vh;\n  background: rgba(7, 22, 133, 0.5);\n  box-sizing: border-box;\n  border-radius: 0px 30px 30px 0px;\n}\n\n.btn-post-order[_ngcontent-%COMP%] {\n  background-color: #F7B610;\n  color: #071685;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBTkY7O0FBU0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQWRZO0VBZVosc0JBQUE7RUFDQSxnQ0FBQTtBQU5GOztBQVNBO0VBQ0UseUJBdEJPO0VBdUJQLGNBeEJLO0VBeUJMLGtCQUFBO0FBTkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmx1ZTogIzA3MTY4NTtcclxuJHllbGxvdzogI0Y3QjYxMDtcclxuJHJlZDogICNFMzBEMkM7XHJcbiRibHVlVHJhbnNwYTogcmdiYSg3LCAyMiwgMTMzLCAwLjUpO1xyXG4kd2hpdGVUcmFuc3BhOiBSR0JBKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4kZ3JpczogIzQ5NDc0NztcclxuXHJcbi5ib3gtY29udGFpbmVyLW9yZGVycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uY29udGFpbmVyLXBlZGlkb3tcclxuICBtYXJnaW4tdG9wOiA3LjIlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxJTtcclxuICB3aWR0aDogNDl2dztcclxuICBoZWlnaHQ6IDY1dmg7XHJcbiAgYmFja2dyb3VuZDogJGJsdWVUcmFuc3BhOyAgXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMzBweCAzMHB4IDBweDtcclxufVxyXG5cclxuLmJ0bi1wb3N0LW9yZGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR5ZWxsb3c7XHJcbiAgY29sb3I6ICRibHVlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-orders',
                templateUrl: './orders.component.html',
                styleUrls: ['./orders.component.scss']
            }]
    }], function () { return [{ type: _services_counter_products_counter_products_service__WEBPACK_IMPORTED_MODULE_1__["CounterProductsService"] }, { type: _services_products_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/page404/page404.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/page404/page404.component.ts ***!
  \*********************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Page404Component {
    constructor() { }
    ngOnInit() {
    }
}
Page404Component.ɵfac = function Page404Component_Factory(t) { return new (t || Page404Component)(); };
Page404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 2, vars: 0, template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page404 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZTQwNC9wYWdlNDA0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page404',
                templateUrl: './page404.component.html',
                styleUrls: ['./page404.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/user/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth-config.service */ "./src/app/services/auth-config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_products_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/products/products.service */ "./src/app/services/products/products.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function LoginComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u26A0\uFE0F Por favor ingrese correctamente todos los campos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(authConfigService, router, productsService) {
        this.authConfigService = authConfigService;
        this.router = router;
        this.productsService = productsService;
        this.isError = false;
    }
    ngOnInit() {
    }
    login() {
        let userLogged = 'invalid_form';
        this.user = { email: this.email || '', password: this.password || '' };
        sessionStorage.setItem('emailCurrentUser', this.email);
        console.log(this.user);
        // const property = JSON.stringify(this.user);
        // console.log(property);
        this.authConfigService.login(this.user).subscribe(data => {
            console.log(data);
            // sessionStorage.setItem('token', data.token);
            this.authConfigService.setToken(data.token);
            userLogged = 'login_valid';
            this.router.navigate(['/home']);
            // this.menuListProductsComponent.getProducts('breakfast');
        }, error => {
            this.messageError();
            userLogged = 'login_invalid';
        });
        return userLogged;
    }
    messageError() {
        this.isError = true;
        setTimeout(() => {
            this.isError = false;
        }, 8000);
        console.log('Ops esto es un error');
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_config_service__WEBPACK_IMPORTED_MODULE_1__["AuthConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_products_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_auth_config_service__WEBPACK_IMPORTED_MODULE_1__["AuthConfigService"]])], decls: 8, vars: 3, consts: [["alt", "Angular Logo", "src", "https://carmenvictoriafarinez.github.io/LIM012-fe-burger-queen-api-client/assets/logo.png", 1, "logo"], [1, "loginForm"], ["class", "warning-validator", 4, "ngIf"], ["type", "email", "name", "email", "placeholder", "Email", "required", "required", 1, "inputLoginForm", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "placeholder", "Password", "required", "required", 1, "inputLoginForm", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "loginForm-button", 3, "click"], [1, "warning-validator"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_div_3_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_4_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_5_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_6_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ingresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".logo[_ngcontent-%COMP%] {\n  width: 362px;\n  height: 130px;\n  display: flex;\n  margin-top: 0;\n  padding: 1% 1% 0 0;\n}\n\n.loginForm[_ngcontent-%COMP%] {\n  font-family: \"Bangers\", cursive;\n  font-size: 100%;\n  margin-top: 20%;\n}\n\n.inputLoginForm[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 62px;\n}\n\n.inputLoginForm[_ngcontent-%COMP%] {\n  display: flex;\n  background: #F7B610;\n  border: 10px solid #F7B610;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 50px;\n  margin-top: 5%;\n  margin-left: 20%;\n  font-family: \"Bangers\", cursive;\n}\n\n.loginForm-button[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 62px;\n}\n\n.loginForm-button[_ngcontent-%COMP%] {\n  display: flex;\n  padding-top: 4%;\n  padding-left: 5%;\n  background: #F7B610;\n  border: 10px solid #F7B610;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 50px;\n  margin-top: 10%;\n  margin-left: 35%;\n  font-family: \"Bangers\", cursive;\n}\n\n.warning-validator[_ngcontent-%COMP%] {\n  color: red;\n  margin-top: 2%;\n  margin-left: 40%;\n}\n\n@media (min-width: 400px) {\n  .logo[_ngcontent-%COMP%] {\n    width: 462px;\n    height: 190px;\n    display: flex;\n    margin-left: 35%;\n    margin-top: 10%;\n  }\n\n  .loginForm[_ngcontent-%COMP%] {\n    margin-top: 5%;\n  }\n\n  .inputLoginForm[_ngcontent-%COMP%] {\n    margin-left: 33%;\n    margin-top: 2%;\n  }\n\n  .inputLoginForm[_ngcontent-%COMP%] {\n    width: 40%;\n    height: 62px;\n  }\n\n  .loginForm-button[_ngcontent-%COMP%] {\n    width: 10%;\n    height: 62px;\n  }\n\n  .loginForm-button[_ngcontent-%COMP%] {\n    margin-left: 49%;\n    margin-top: 5%;\n    padding-top: 1%;\n    padding-left: 2.5%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBSkUsWUFLbUI7RUFKbkIsYUFJMEI7RUFDMUIsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUhGOztBQVdBO0VBSkUsVUFLZTtFQUpmLFlBSW9CO0FBUHRCOztBQVVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUFQRjs7QUFVQTtFQW5CRSxVQW9CZTtFQW5CZixZQW1Cb0I7QUFOdEI7O0FBU0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBTkY7O0FBU0E7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBTkY7O0FBV0E7RUFDRTtJQWhFQSxZQWlFcUI7SUFoRXJCLGFBZ0U0QjtJQUMxQixhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0VBUEY7O0VBVUE7SUFDRSxjQUFBO0VBUEY7O0VBVUE7SUFDRSxnQkFBQTtJQUNBLGNBQUE7RUFQRjs7RUFTQTtJQTdEQSxVQThEaUI7SUE3RGpCLFlBNkRzQjtFQUx0Qjs7RUFRQTtJQWpFQSxVQWtFaUI7SUFqRWpCLFlBaUVzQjtFQUp0Qjs7RUFPQTtJQUNFLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQUpGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gY29udGFpbmVyKCRhbmNobywgJGFsdG8pIHtcclxuICB3aWR0aDogJGFuY2hvO1xyXG4gIGhlaWdodDogJGFsdG87XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBAaW5jbHVkZSBjb250YWluZXIoMzYycHgsIDEzMHB4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZzogMSUgMSUgMCAwO1xyXG59XHJcblxyXG4ubG9naW5Gb3JtIHtcclxuICBmb250LWZhbWlseTogJ0JhbmdlcnMnLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAyMCU7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dCgkYW5jaG8sICRhbHRvKSB7XHJcbiAgd2lkdGg6ICRhbmNobztcclxuICBoZWlnaHQ6ICRhbHRvO1xyXG59XHJcblxyXG4uaW5wdXRMb2dpbkZvcm0ge1xyXG4gIEBpbmNsdWRlIGlucHV0KDYwJSwgNjJweCk7XHJcbn1cclxuXHJcbi5pbnB1dExvZ2luRm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kOiAjRjdCNjEwO1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCAjRjdCNjEwO1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gIGZvbnQtZmFtaWx5OiAnQmFuZ2VycycsIGN1cnNpdmU7XHJcbn1cclxuXHJcbi5sb2dpbkZvcm0tYnV0dG9uIHtcclxuICBAaW5jbHVkZSBpbnB1dCgzMCUsIDYycHgpO1xyXG59XHJcblxyXG4ubG9naW5Gb3JtLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBiYWNrZ3JvdW5kOiAjRjdCNjEwO1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCAjRjdCNjEwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxuICBtYXJnaW4tbGVmdDogMzUlO1xyXG4gIGZvbnQtZmFtaWx5OiAnQmFuZ2VycycsIGN1cnNpdmU7XHJcbn1cclxuXHJcbi53YXJuaW5nLXZhbGlkYXRvcntcclxuICBjb2xvcjogcmVkO1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbn1cclxuXHJcbiRsYXlvdXQtYnJlYWtwb2ludC10YWJsZXQ6IDQwMHB4O1xyXG4vLyBhcXVpIHRvZG8gbG8gbW9kaWZpY2FkbyBhZmVjdGEgbGEgdmlzdGEgdGFibGV0XHJcbkBtZWRpYSAobWluLXdpZHRoOiAkbGF5b3V0LWJyZWFrcG9pbnQtdGFibGV0KSB7XHJcbiAgLmxvZ28ge1xyXG4gICAgQGluY2x1ZGUgY29udGFpbmVyKDQ2MnB4LCAxOTBweCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICB9XHJcblxyXG4gIC5sb2dpbkZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgfVxyXG5cclxuICAuaW5wdXRMb2dpbkZvcm0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMzJTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gIH1cclxuICAuaW5wdXRMb2dpbkZvcm0ge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQoNDAlLCA2MnB4KTtcclxuICB9XHJcblxyXG4gIC5sb2dpbkZvcm0tYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGlucHV0KDEwJSwgNjJweCk7XHJcbiAgfVxyXG5cclxuICAubG9naW5Gb3JtLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNDklO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNSU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss'],
                providers: [_services_auth_config_service__WEBPACK_IMPORTED_MODULE_1__["AuthConfigService"]],
            }]
    }], function () { return [{ type: _services_auth_config_service__WEBPACK_IMPORTED_MODULE_1__["AuthConfigService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_products_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 2, vars: 0, template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "register works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/router–routing.module.ts":
/*!******************************************!*\
  !*** ./src/app/router–routing.module.ts ***!
  \******************************************/
/*! exports provided: RouterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterRoutingModule", function() { return RouterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page404/page404.component */ "./src/app/components/page404/page404.component.ts");
/* harmony import */ var _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/orders/orders.component */ "./src/app/components/orders/orders.component.ts");



// components






const appRoutes = [
    { path: '', component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'orders', component: _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_6__["OrdersComponent"] },
    { path: '**', component: _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_5__["Page404Component"] },
];
class RouterRoutingModule {
}
RouterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RouterRoutingModule });
RouterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RouterRoutingModule_Factory(t) { return new (t || RouterRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RouterRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/auth-config.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/auth-config.service.ts ***!
  \*************************************************/
/*! exports provided: AuthConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthConfigService", function() { return AuthConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class AuthConfigService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    login(user) {
        return this.http.post(`${this.url}auth`, user); // create
    }
    setToken(token) {
        return sessionStorage.setItem('token', token);
    }
    getUser(idUser) {
        return this.http.get(`${this.url}users/${idUser}`); // read
    }
    // getToken(): string { // no se usa ahora
    //   return sessionStorage.get('token');
    // }
    // getUserLogged(): any { // no se usa ahora
    //   const token = this.getToken();
    //   // Aquí iría el endpoint para devolver el usuario para un token
    // }
    logout() {
        sessionStorage.removeItem('currentUser');
    }
}
AuthConfigService.ɵfac = function AuthConfigService_Factory(t) { return new (t || AuthConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AuthConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthConfigService, factory: AuthConfigService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth/config-controller-auth.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/auth/config-controller-auth.service.ts ***!
  \*****************************************************************/
/*! exports provided: ConfigcontrollerAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigcontrollerAuthService", function() { return ConfigcontrollerAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth-config.service */ "./src/app/services/auth-config.service.ts");



class ConfigcontrollerAuthService {
    constructor(authConfigService) {
        this.authConfigService = authConfigService;
    }
    intercept(req, next) {
        const idToken = sessionStorage.getItem('token');
        if (idToken) {
            const clones = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${idToken}`)
            });
            return next.handle(clones);
        }
        else {
            return next.handle(req);
        }
    }
}
ConfigcontrollerAuthService.ɵfac = function ConfigcontrollerAuthService_Factory(t) { return new (t || ConfigcontrollerAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_config_service__WEBPACK_IMPORTED_MODULE_1__["AuthConfigService"])); };
ConfigcontrollerAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigcontrollerAuthService, factory: ConfigcontrollerAuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigcontrollerAuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_config_service__WEBPACK_IMPORTED_MODULE_1__["AuthConfigService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/counter-products/counter-products.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/counter-products/counter-products.service.ts ***!
  \***********************************************************************/
/*! exports provided: CounterProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterProductsService", function() { return CounterProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { environment } from '../../../environments/environment';
class CounterProductsService {
    constructor() {
        // public products: any = [];
        this.cart = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]); // crea una instancia de Observable que sea un array vacio
        this.currentDataCart = this.cart.asObservable(); // Tenemos un observable con el valor actual del BehaviourSubject
        this.numberSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.currentNumber = this.numberSource.asObservable();
        // this.url = environment.apiUrl;
    }
    cleanCart() {
        this.cart.next([]);
    }
    // cuando seleccionas añadir: changeCart recibe el producto nuevo a añadir al carrito
    // Esta función se encarga de recibir el item que debemos agregar al carrito,
    // nos fijamos si ya existe aumentamos su cantidad,
    // sino lo agregamos y volvemos a enviar el valor a todos los observers
    changeCart(newProduct) {
        const listCart = this.cart.getValue(); // Obtenemos el valor actual
        const currentProductObj = {
            _id: newProduct._id,
            name: newProduct.name,
            price: newProduct.price,
            image: newProduct.image,
            type: newProduct.type,
            quantity: 1
        };
        if (listCart.length !== 0) { // Si no es el primer item del carrito. Si ya hay productos en el carrito
            const objIndex = listCart.findIndex((obj => obj._id === newProduct._id)); // Buscamos si ya cargamos ese item en el carrito
            if (objIndex !== -1) { // devuelve el indice si el producto ya esta en el array listCart
                const newArrOrder = listCart.map(productObj => {
                    if (productObj._id === currentProductObj._id) { // compara id de producto ya en cart con current product
                        currentProductObj.quantity = productObj.quantity + 1; // Si ya cargamos uno aumentamos su cantidad
                        return currentProductObj; // retornar nueva cant de producto ya existente
                    }
                    else {
                        return productObj; // los productos existentes que no variaron cantidad (se mantienen igual)
                    }
                });
                this.cart.next(newArrOrder); // Enviamos el array con la cant modificada a todos los Observers
            }
            else { // añadir nuevo producto a un carrito lleno
                const newProductInOlderList = listCart.concat(currentProductObj);
                this.cart.next(newProductInOlderList);
            }
        }
        else { // si no hay productos en el carrito, el producto actual se guarda en un nuevo arreglo
            const firstNewArr = listCart.concat(currentProductObj);
            this.cart.next(firstNewArr); // Enviamos el array a todos los Observers que estan escuchando nuestro Observable
        }
    }
    // Con esta función removemos un elemento del carrito y volvemos a envíar la lista de esos elementos
    // para que se propague entre los observer
    removeElementCart(newProduct) {
        const listCart = this.cart.getValue(); // Obtenemos el valor actual de carrito
        const objIndex = listCart.findIndex((obj => obj._id === newProduct._id)); // Buscamos el item del carrito para eliminar
        if (objIndex !== -1) { // si existe ese producto en el cart podemos borrarlo
            // si volvemos a agregarlo la cantidad no se reiniciará)
            listCart[objIndex].quantity = 1; // configurar la cantidad en 1 (ya que los array se modifican los valores por referencia,
            listCart.splice(objIndex, 1); // Eliminamos el item del array del carrito
        }
        this.cart.next(listCart); // Enviamos el valor a todos los Observers que estan escuchando nuestro Observable
    }
    // public changeQuantity(newProduct: Item): void{
    //   const listCart = this.cart.getValue(); // Obtenemos el valor actual
    //   const currentProductObj: Item = {
    //     _id: newProduct._id,
    //     name: newProduct.name,
    //     price: newProduct.price,
    //     image: newProduct.image,
    //     type: newProduct.type,
    //     quantity: 1
    // };
    //   if (listCart.length !== 0) {
    //   const objIndex = listCart.findIndex((obj => obj._id === newProduct._id)); // Buscamos si ya cargamos ese item en el carrito
    //   if (objIndex !== -1) { // devuelve el indice si el producto ya esta en el array listCart
    //     const newArrOrder = listCart.map(productObj => {
    //   if (productObj._id === currentProductObj._id) {
    //     currentProductObj.quantity = productObj.quantity - 1;
    //     }
    // });
    //   }}}
    changeNumber(value) {
        this.numberSource.next(value);
    }
}
CounterProductsService.ɵfac = function CounterProductsService_Factory(t) { return new (t || CounterProductsService)(); };
CounterProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CounterProductsService, factory: CounterProductsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/products/products.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/products/products.service.ts ***!
  \*******************************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ProductsService {
    // public products: any = [];
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    // private listProducts = new BehaviorSubject<Array<any>>([]);
    // public currentListProducts = this.listProducts.asObservable();
    // addListProducts(order) {
    //   const indexProduct = this.products.findIndex(product => product.name === order.name);
    //   if (indexProduct < 0 ) {
    //     const newOrder = {...order, quantity: 1};
    //     this.products.push(newOrder);
    //   } else {
    //     this.products[indexProduct].quantity += 1;
    //   }
    //   this.listProducts.next(this.products);
    // }
    sendOrder(order) {
        this.http.post('https://burguerqueen-sc.herokuapp.com/orders', order).subscribe(data => {
            console.log(data);
        });
    }
    getListProduct() {
        return this.http.get(`${this.url}products`);
    }
    kitchenOrders() {
        return this.http.get('https://burguerqueen-sc.herokuapp.com/orders');
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'https://burguerqueen-sc.herokuapp.com/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sonia\OneDrive\Documentos\Javascript\FRONT END\LIM012-fe-burger-queen-api-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map