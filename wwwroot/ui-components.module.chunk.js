webpackJsonp(["ui-components.module"],{

/***/ "../../../../../src/app/components/bootstrap/accordion/accordion.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Accordion Starts-->\r\n<section id=\"accordion\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Accordion</div>\r\n      <p class=\"content-sub-header\"></p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <h4 class=\"mt-3\">Basic Accordion</h4>\r\n      <!--Basic Accordion Starts-->\r\n      <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\r\n        <ngb-panel title=\"Simple\">\r\n          <ng-template ngbPanelContent>\r\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't\r\n            heard of them accusamus labore sustainable VHS.</p>\r\n          </ng-template>\r\n        </ngb-panel>\r\n        <ngb-panel>\r\n          <ng-template ngbPanelTitle>\r\n            <span>&#9733; <b>Fancy</b> title &#9733;</span>\r\n          </ng-template>\r\n          <ng-template ngbPanelContent>\r\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't\r\n            heard of them accusamus labore sustainable VHS.</p>\r\n          </ng-template>\r\n        </ngb-panel>\r\n        <ngb-panel title=\"Disabled\" [disabled]=\"true\">\r\n          <ng-template ngbPanelContent>\r\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't\r\n            heard of them accusamus labore sustainable VHS.</p>\r\n          </ng-template>\r\n        </ngb-panel>\r\n      </ngb-accordion>\r\n      <!--Basic Accordion Ends-->      \r\n    </div>\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <h4 class=\"mt-3\">One open panel at a time</h4>\r\n      <!--One open panel at a time Starts-->\r\n      <ngb-accordion [closeOthers]=\"true\" activeIds=\"1\">\r\n        <ngb-panel id=\"1\" title=\"Simple\">\r\n          <ng-template ngbPanelContent>\r\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't\r\n            heard of them accusamus labore sustainable VHS.</p>\r\n          </ng-template>\r\n        </ngb-panel>\r\n        <ngb-panel id=\"2\">\r\n          <ng-template ngbPanelTitle>\r\n            <span>&#9733; <b>Fancy</b> title &#9733;</span>\r\n          </ng-template>\r\n          <ng-template ngbPanelContent>\r\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't\r\n            heard of them accusamus labore sustainable VHS.</p>\r\n          </ng-template>\r\n        </ngb-panel>\r\n        <ngb-panel id=\"3\" title=\"Disabled\" [disabled]=\"true\">\r\n          <ng-template ngbPanelContent>\r\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't\r\n            heard of them accusamus labore sustainable VHS.</p>\r\n          </ng-template>\r\n        </ngb-panel>\r\n      </ngb-accordion>\r\n      <!--One open panel at a time Ends-->\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <h4 class=\"mt-5\">Toggle panels</h4>\r\n      <!--Toggle panels Starts-->\r\n      <ngb-accordion #acc=\"ngbAccordion\">\r\n        <ngb-panel id=\"1\" title=\"First panel\">\r\n          <ng-template ngbPanelContent>\r\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't\r\n            heard of them accusamus labore sustainable VHS.</p>\r\n          </ng-template>\r\n        </ngb-panel>\r\n        <ngb-panel id=\"2\" title=\"Second\">\r\n          <ng-template ngbPanelContent>\r\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't\r\n            heard of them accusamus labore sustainable VHS.</p>\r\n          </ng-template>\r\n        </ngb-panel>\r\n        <ngb-panel title=\"Disabled\" [disabled]=\"true\">\r\n          <ng-template ngbPanelContent>\r\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't\r\n            heard of them accusamus labore sustainable VHS.</p>\r\n          </ng-template>\r\n        </ngb-panel>\r\n      </ngb-accordion>\r\n      <p class=\"mt-2\">\r\n        <button class=\"btn btn-secondary\" (click)=\"acc.toggle('1')\">Toggle first</button>\r\n        <button class=\"btn btn-secondary\" (click)=\"acc.toggle('2')\">Toggle second</button>\r\n      </p>\r\n      <!--Toggle panels Ends-->      \r\n    </div>\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <h4 class=\"mt-5\">Prevent panel toggle</h4>\r\n      <!--Prevent panel toggle starts-->\r\n      <ngb-accordion (panelChange)=\"beforeChange($event)\">\r\n        <ngb-panel id=\"1\" title=\"Simple\">\r\n          <ng-template ngbPanelContent>\r\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't\r\n            heard of them accusamus labore sustainable VHS.</p>\r\n          </ng-template>\r\n        </ngb-panel>\r\n        <ngb-panel id=\"2\" title=\"I can't be toggled...\">\r\n          <ng-template ngbPanelContent>\r\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't\r\n            heard of them accusamus labore sustainable VHS.</p>\r\n          </ng-template>\r\n        </ngb-panel>\r\n        <ngb-panel id=\"3\" title=\"I can be opened, but not closed...\">\r\n          <ng-template ngbPanelContent>\r\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't\r\n            heard of them accusamus labore sustainable VHS.</p>\r\n          </ng-template>\r\n        </ngb-panel>\r\n      </ngb-accordion>\r\n      <!--Prevent panel toggle ends-->\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Accordion Ends-->"

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/accordion/accordion.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/accordion/accordion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AccordionComponent = (function () {
    function AccordionComponent() {
    }
    // Prevent panel toggle code
    AccordionComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === '2') {
            $event.preventDefault();
        }
        if ($event.panelId === '3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    ;
    AccordionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-accordion',
            template: __webpack_require__("../../../../../src/app/components/bootstrap/accordion/accordion.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bootstrap/accordion/accordion.component.scss")]
        })
    ], AccordionComponent);
    return AccordionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bootstrap/alerts/alerts.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"alert\">\r\n    <div class=\"row match-height\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Alerts</div>\r\n            <p class=\"content-sub-header\">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>\r\n        </div>\r\n    </div>\r\n    <!--Alert States Starts-->\r\n    <div class=\"row match-height\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Alert States</h4>\r\n                    <p>Wrap any text and an optional dismiss button in <code>.alert</code> and one of the four contextual classes (e.g., <code>.alert-COLOR</code>) for basic colored alert messages.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <ngb-alert type=\"primary\" [dismissible]=\"false\">\r\n                            <strong>Primary!</strong> Better check yourself, you're not looking too good.\r\n                        </ngb-alert>\r\n                        <ngb-alert type=\"secondary\" [dismissible]=\"false\">\r\n                            <strong>Secondary!</strong> Better check yourself, you're not looking too good.\r\n                        </ngb-alert>\r\n                        <ngb-alert type=\"success\" [dismissible]=\"false\">\r\n                            <strong>Success!</strong> Better check yourself, you're not looking too good.\r\n                        </ngb-alert>\r\n                        <ngb-alert type=\"danger\" [dismissible]=\"false\">\r\n                            <strong>Danger!</strong> Better check yourself, you're not looking too good.\r\n                        </ngb-alert>\r\n                        <ngb-alert type=\"info\" [dismissible]=\"false\">\r\n                            <strong>Info!</strong> Better check yourself, you're not looking too good.\r\n                        </ngb-alert>\r\n                        <ngb-alert [dismissible]=\"false\">\r\n                            <strong>Warning!</strong> Better check yourself, you're not looking too good.\r\n                        </ngb-alert>\r\n                        <ngb-alert type=\"light\" [dismissible]=\"false\">\r\n                            <strong>Light!</strong> Better check yourself, you're not looking too good.\r\n                        </ngb-alert>\r\n                        <ngb-alert type=\"dark\" [dismissible]=\"false\">\r\n                            <strong>Dark!</strong> Better check yourself, you're not looking too good.\r\n                        </ngb-alert>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--Alert States Ends-->\r\n    \r\n    <!--Closable Alert Starts-->\r\n    <div class=\"row match-height\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Closable Alert</h4>\r\n                    <p></p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div *ngFor=\"let alert of alerts\">\r\n                            <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\">{{ alert.message }}</ngb-alert>\r\n                        </div>\r\n                        <p>\r\n                            <button type=\"button\" class=\"btn btn-primary btn-raised\" (click)=\"reset()\">Reset</button>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--Closable Alert Ends-->\r\n    \r\n    <!--Self-Closing Alert Section starts-->\r\n    <div class=\"row match-height\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Self-Closing Alert</h4>\r\n                    <p>Static self-closing alert that disappears after 20 seconds (refresh the page if it has already disappeared)</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <ngb-alert *ngIf=\"!staticAlertClosed\" (close)=\"staticAlertClosed = true\">Check out our awesome new features!</ngb-alert>\r\n\r\n                        <hr/>\r\n\r\n                        <p>Show a self-closing success message that disappears after 5 seconds.</p>\r\n                        <ngb-alert *ngIf=\"successMessage\" type=\"success\" (close)=\"successMessage = null\">{{ successMessage }}</ngb-alert>\r\n                        <p>\r\n                            <button class=\"btn btn-primary btn-raised\" (click)=\"changeSuccessMessage()\">Change message</button>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--Self-Closing Alert Section Ends-->\r\n    \r\n    <!--Custom Alert Starts-->\r\n    <div class=\"row match-height\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Custom Alert</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <p>\r\n                            <ngb-alert type=\"custom\" [dismissible]=\"false\"><strong>Whoa!</strong> This is a custom alert.</ngb-alert>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--Custom Alert Ends-->    \r\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/alerts/alerts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .alert-custom {\n  color: #99004d;\n  background-color: #f169b4;\n  border-color: #800040; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/alerts/alerts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertsComponent = (function () {
    // Closable Alert's code
    function AlertsComponent() {
        this.alerts = [];
        this._success = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.staticAlertClosed = false;
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is a success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
        }, {
            id: 5,
            type: 'primary',
            message: 'This is a primary alert',
        }, {
            id: 6,
            type: 'secondary',
            message: 'This is a secondary alert',
        }, {
            id: 7,
            type: 'light',
            message: 'This is a light alert',
        }, {
            id: 8,
            type: 'dark',
            message: 'This is a dark alert',
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    // Close Alert on close icon click
    AlertsComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    // Reset all the alerts on click of reset button
    AlertsComponent.prototype.reset = function () {
        this.alerts = this.backup.map(function (alert) { return Object.assign({}, alert); });
    };
    AlertsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Auto close alert timer
        setTimeout(function () { return _this.staticAlertClosed = true; }, 20000);
        // Success message
        this._success.subscribe(function (message) { return _this.successMessage = message; });
        // Subscribe section code
        this._success.debounceTime(5000).subscribe(function () { return _this.successMessage = null; });
    };
    // Self closing alert's message change code
    AlertsComponent.prototype.changeSuccessMessage = function () {
        this._success.next(new Date() + " - Message successfully changed.");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], AlertsComponent.prototype, "alerts", void 0);
    AlertsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alerts',
            template: __webpack_require__("../../../../../src/app/components/bootstrap/alerts/alerts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bootstrap/alerts/alerts.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], AlertsComponent);
    return AlertsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bootstrap/badges/badges.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Basic Badges Starts-->\r\n<section id=\"basic-badges\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Badges</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Primary Badge</h4>\r\n                    <p>Use <code>.badge</code> class to get badge. For Primary, colored badge use <code>.badge-primary</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-primary\">Primary</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Secondary Badge</h4>\r\n                    <p>Use <code>.badge</code> class to get badge. For Secondary, colored badge use <code>.badge-secondary</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-secondary\">Secondary</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Success Badge</h4>\r\n                    <p>Use <code>.badge</code> class to get badge. For Success, colored badge use <code>.badge-success</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-success\">Success</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Danger Badge</h4>\r\n                    <p>Use <code>.badge</code> class to get badge. For Danger, colored badge use <code>.badge-danger</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-danger\">Danger</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Info Badge</h4>\r\n                    <p>Use <code>.badge</code> class to get badge. For Info, colored badge use <code>.badge-info</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-info\">Info</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Warning Badge</h4>\r\n                    <p>Use <code>.badge</code> class to get badge. For Warning, colored badge use <code>.badge-warning</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-warning\">Warning</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Light Badge</h4>\r\n                    <p>Use <code>.badge</code> class to get badge. For Light, colored badge use <code>.badge-light</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-light\">Light</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Dark Badge</h4>\r\n                    <p>Use <code>.badge</code> class to get badge. For Dark, colored badge use <code>.badge-dark</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-dark\">Dark</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Basic Badges Starts-->\r\n\r\n<!--Badge With Components Starts-->\r\n<section id=\"component-badges\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Badge With Components</div>\r\n            <p class=\"content-sub-header\">Easily highlight new or unread items by adding a <code>&lt;span class=\"badge\"&gt;</code> to links, Bootstrap navs, and more.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <div class=\"col-12 col-sm-6 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Badge with Link</h4>\r\n                    <p>Use badge class in anchor tag for badge with link.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <a>Inbox <span class=\"badge badge-secondary\">42</span></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Badge with button</h4>\r\n                    <p>Use badge class in button tag for badge with button.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <button class=\"btn btn-danger btn-raised\" type=\"button\">\r\n                            Messages <span class=\"badge badge-light\">4</span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-12 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Adapts to active nav states</h4>\r\n                    <p>Built-in styles are included for placing badges in active states in pill navigations.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <ul class=\"nav nav-pills\" role=\"tablist\">\r\n                            <li role=\"presentation\" class=\"nav-item\"><a class=\"nav-link active\">Home <span class=\"badge badge-success\">42</span></a></li>\r\n                            <li role=\"presentation\" class=\"nav-item\"><a class=\"nav-link\">Profile</a></li>\r\n                            <li role=\"presentation\" class=\"nav-item\"><a class=\"nav-link\">Messages <span class=\"badge badge-warning\">3</span></a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Badge With Components Starts-->\r\n\r\n<!--Pill Badges Starts-->\r\n<section id=\"pill-badges\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Pill Badges</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Primary Badge</h4>\r\n                    <p>Use <code>.badge-pill</code> class to get badge pill. For Primary, colored badge use <code>.badge-primary</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-pill badge-primary\">25</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Secondary Badge</h4>\r\n                    <p>Use <code>.badge-pill</code> class to get badge pill. For Secondary, colored badge use <code>.badge-secondary</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-pill badge-secondary\">85</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Success Badge</h4>\r\n                    <p>Use <code>.badge-pill</code> class to get badge pill. For Success, colored badge use <code>.badge-success</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-pill badge-success\">41</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Danger Badge</h4>\r\n                    <p>Use <code>.badge-pill</code> class to get badge pill. For Danger, colored badge use <code>.badge-danger</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-pill badge-danger\">36</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Info Badge</h4>\r\n                    <p>Use <code>.badge-pill</code> class to get badge pill. For Info, colored badge use <code>.badge-info</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-pill badge-info\">77</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Warning Badge</h4>\r\n                    <p>Use <code>.badge-pill</code> class to get badge pill. For Warning, colored badge use <code>.badge-warning</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-pill badge-warning\">30</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Light Badge</h4>\r\n                    <p>Use <code>.badge-pill</code> class to get badge pill. For Light, colored badge use <code>.badge-light</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-pill badge-light\">45</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Dark Badge</h4>\r\n                    <p>Use <code>.badge-pill</code> class to get badge pill. For Dark, colored badge use <code>.badge-dark</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-pill badge-dark\">37</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Pill Badges Starts-->"

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/badges/badges.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/badges/badges.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BadgesComponent = (function () {
    function BadgesComponent() {
    }
    BadgesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-badges',
            template: __webpack_require__("../../../../../src/app/components/bootstrap/badges/badges.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bootstrap/badges/badges.component.scss")]
        })
    ], BadgesComponent);
    return BadgesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bootstrap/buttons/buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Basic button starts -->\r\n<section id=\"buttons\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 mt-2\">\r\n            <div class=\"content-header\">Buttons</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Flat Buttons Starts -->\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Flat Buttons</h4>\r\n                    <p>Use class <code>.btn-flat</code> for flat buttons.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">Primary</a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-success\">Success</a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-info\">Info</a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-warning\">Warning</a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-danger\">Danger</a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-link\">Link</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Flat Buttons Ends -->\r\n\r\n        <!--Flat Button Group Starts -->\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Button groups</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div ngbDropdown>\r\n                            <button class=\"btn btn-primary btn-flat\" id=\"dropdownBasic1\" ngbDropdownToggle>Primary</button>\r\n                            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n                                <button class=\"dropdown-item\">Action</button>\r\n                                <button class=\"dropdown-item\">Another Action</button>\r\n                                <button class=\"dropdown-item\">Something else is here</button>\r\n                            </div>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-success btn-flat\" id=\"dropdownBasic2\" ngbDropdownToggle>Success</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic2\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-danger btn-flat\" id=\"dropdownBasic3\" ngbDropdownToggle>Danger</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic3\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-info btn-flat\" id=\"dropdownBasic4\" ngbDropdownToggle>Info</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic4\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-warning btn-flat\" id=\"dropdownBasic5\" ngbDropdownToggle>Warning</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic5\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Flat Button Group Ends -->\r\n        \r\n        <!--Raised Button Starts -->\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Raised buttons</h4>\r\n                    <p>Use <code>.btn-raised</code> class for raised buttons.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <p>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised active\"><code>.active</code></a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-secondary\">Secondary</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-primary\">Primary</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-success\">Success</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-info\">Info</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-warning\">Warning</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-danger\">Danger</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-link\">Link</a>\r\n                        </p>\r\n                        <h4>Buttons with Shadow <code>.shadow-z-2</code></h4>\r\n                        <p>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised shadow-z-2 btn-secondary\">Secondary</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised shadow-z-2 btn-primary\">Primary</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised shadow-z-2 btn-success\">Success</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised shadow-z-2 btn-info\">Info</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised shadow-z-2 btn-warning\">Warning</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised shadow-z-2 btn-danger\">Danger</a>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Raised Button Ends -->\r\n        \r\n        <!--Raised Gradient Button Starts -->\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6 col-sm-12\">\r\n                        <div class=\"card-header\">\r\n                            <h4 class=\"card-title\">Gradient Raised buttons</h4>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"card-block\">\r\n                                <div class=\"mb-3\"> \r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised gradient-purple-bliss white\">Button</a> \r\n                                    <span class=\"ml-2\">.gradient-purple-bliss</span>\r\n                                </div>\r\n                                <div class=\"mb-3\"> \r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised gradient-mint white\">Button</a> \r\n                                    <span class=\"ml-2\">.gradient-mint</span>\r\n                                </div>\r\n                                <div class=\"mb-3\"> \r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised gradient-pomegranate white\">Button</a> \r\n                                    <span class=\"ml-2\">.gradient-pomegranate</span>\r\n                                </div>\r\n                                <div class=\"mb-3\"> \r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised gradient-crystal-clear white\">Button</a> \r\n                                    <span class=\"ml-2\">.gradient-crystal-clear</span>\r\n                                </div>\r\n                                <div class=\"mb-3\"> \r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised gradient-ibiza-sunset white\">Button</a> \r\n                                    <span class=\"ml-2\">.gradient-ibiza-sunset</span>\r\n                                </div>\r\n                                <div class=\"mb-3\"> \r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised gradient-nepal white\">Button</a> \r\n                                    <span class=\"ml-2\">.gradient-nepal</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6 col-sm-12\">\r\n                        <div class=\"card-header\">\r\n                            <h4 class=\"card-title\">Gradient Raised Button With Shadow</h4>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"card-block\">\r\n                                <div class=\"mb-3\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised gradient-purple-bliss white shadow-z-1-hover\">Buttons with Shadow</a>\r\n                                    <span class=\"ml-2\">.shadow-z-1-hover</span>\r\n                                </div>\r\n                                <div class=\"mb-3\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised gradient-mint white shadow-z-4\">Buttons with Shadow</a>\r\n                                    <span class=\"ml-2\">.shadow-z-4</span>\r\n                                </div>\r\n                                <div class=\"mb-3\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised gradient-pomegranate white big-shadow\">Buttons with Shadow</a>\r\n                                    <span class=\"ml-2\">.big-shadow</span>\r\n                                </div>\r\n                                <div class=\"mb-3\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised gradient-crystal-clear white shadow-big-navbar\">Buttons with Shadow</a>\r\n                                    <span class=\"ml-2\">.shadow-big-navbar</span>\r\n                                </div>\r\n                                <div class=\"mb-3\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised gradient-ibiza-sunset white sidebar-shadow\">Buttons with Shadow</a>\r\n                                    <span class=\"ml-2\">.sidebar-shadow</span>\r\n                                </div>\r\n                                <div class=\"mb-3\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised gradient-nepal white card-shadow\">Buttons with Shadow</a>\r\n                                    <span class=\"ml-2\">.card-shadow</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Raised Gradient Button Ends -->\r\n\r\n        <!--Raised Round Button Starts -->\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Round Raised buttons</h4>\r\n                    <p>Use <code>.btn-round</code> class with <code>.btn-raised</code> for raised round buttons.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <p>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-secondary\">Secondary</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-primary\">Primary</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-success\">Success</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-info\">Info</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-warning\">Warning</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-danger\">Danger</a>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Raised Round Button Ends -->\r\n\r\n        <!--Raised Button Group Starts -->\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Button groups</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div ngbDropdown>\r\n                            <button class=\"btn btn-secondary btn-raised mr-1\" id=\"dropdownRaised1\" ngbDropdownToggle>Secondary</button>\r\n                            <div ngbDropdownMenu aria-labelledby=\"dropdownRaised1\">\r\n                                <button class=\"dropdown-item\">Action</button>\r\n                                <button class=\"dropdown-item\">Another Action</button>\r\n                                <button class=\"dropdown-item\">Something else is here</button>\r\n                            </div>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-primary btn-raised mr-1\" id=\"dropdownRaised2\" ngbDropdownToggle>Primary</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownRaised2\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-success btn-raised mr-1\" id=\"dropdownRaised3\" ngbDropdownToggle>Success</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownRaised3\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-danger btn-raised mr-1\" id=\"dropdownRaised4\" ngbDropdownToggle>Danger</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownRaised4\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-info btn-raised mr-1\" id=\"dropdownRaised5\" ngbDropdownToggle>Info</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownRaised5\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-warning btn-raised mr-1\" id=\"dropdownRaised6\" ngbDropdownToggle>Warning</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownRaised6\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Raised Button Group Ends -->\r\n        \r\n        <!--Raised Round Button Group Starts -->\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Round Button groups</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div ngbDropdown>\r\n                            <button class=\"btn btn-secondary btn-raised btn-round mr-1\" id=\"dropdownRaisedRound1\" ngbDropdownToggle>Secondary</button>\r\n                            <div ngbDropdownMenu aria-labelledby=\"dropdownRaisedRound1\">\r\n                                <button class=\"dropdown-item\">Action</button>\r\n                                <button class=\"dropdown-item\">Another Action</button>\r\n                                <button class=\"dropdown-item\">Something else is here</button>\r\n                            </div>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-primary btn-raised btn-round mr-1\" id=\"dropdownRaisedRound2\" ngbDropdownToggle>Primary</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownRaisedRound2\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-success btn-raised btn-round mr-1\" id=\"dropdownRaisedRound3\" ngbDropdownToggle>Success</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownRaisedRound3\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-danger btn-raised btn-round mr-1\" id=\"dropdownRaisedRound4\" ngbDropdownToggle>Danger</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownRaisedRound4\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-info btn-raised btn-round mr-1\" id=\"dropdownRaisedRound5\" ngbDropdownToggle>Info</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownRaisedRound5\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-warning btn-raised btn-round mr-1\" id=\"dropdownRaisedRound6\" ngbDropdownToggle>Warning</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownRaisedRound6\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Raised Round Button Group Ends -->\r\n\r\n        <!--Disabled Button Group Starts -->\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Disabled Button</h4>\r\n                    <p>For Flat buttons <code>.btn-flat</code> and for raised buttons <code>.btn-raised</code> class needed</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <fieldset disabled>\r\n                            <p>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat\"><code>btn</code> only</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">Primary</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-success\">Success</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-info\">Info</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-warning\">Warning</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-danger\">Danger</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-link\">Link</a>\r\n                            </p>\r\n\r\n                            <p>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-secondary\">Secondary</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-primary\">Primary</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-success\">Success</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-info\">Info</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-warning\">Warning</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-danger\">Danger</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-link\">Link</a>\r\n                            </p>\r\n                        </fieldset>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Disabled Button Group Ends -->\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Button Sizes Starts -->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Button sizes</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-lg btn-danger\">Large button</a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-primary btn-lg\">Large button</a><br>\r\n                        <p class=\"mt-1 mb-5\">Use class <code>.btn-lg</code> for large button.</p>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-danger\">Default button</a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-raised\">Default button</a><br>\r\n                        <p class=\"mt-1 mb-5\">Default button</p>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-sm btn-danger\">Small button</a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-primary btn-sm\">Small button</a><br>\r\n                        <p class=\"mt-1 mb-5\">Use class <code>.btn-sm</code> for Small button.</p>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-xs btn-danger\">xs button</a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-primary btn-xs\">xs button</a>\r\n                        <p class=\"mt-1 mb-5\">Use class <code>.btn-xs</code> for Extra Small button.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Button Sizes Ends -->\r\n\r\n        <!--Round Button Sizes Starts -->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Round Button sizes</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-lg btn-danger\">Large button</a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-primary btn-lg\">Large button</a><br>\r\n                        <p class=\"mt-1 mb-5\">Use class <code>.btn-lg</code> for large button.</p>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-danger\">Default button</a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-round btn-raised\">Default button</a><br>\r\n                        <p class=\"mt-1 mb-5\">Default button</p>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-sm btn-danger\">Small button</a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-primary btn-sm\">Small button</a><br>\r\n                        <p class=\"mt-1 mb-5\">Use class <code>.btn-sm</code> for Small button.</p>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-xs btn-danger\">xs button</a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-primary btn-xs\">xs button</a>\r\n                        <p class=\"mt-1 mb-5\">Use class <code>.btn-xs</code> for Extra Small button.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Round Button Sizes Ends -->\r\n    </div>\r\n\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Floating action buttons Starts -->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Floating action buttons <small>a.k.a fab</small></h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"floating-btn\">\r\n                            <p>Use <code>.btn-fab</code> class with button classes for floating buttons.</p>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-secondary btn-fab\"><i class=\"fa fa-star-o\"></i></a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-fab\"><i class=\"fa fa-user-o\"></i></a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-success btn-fab\"><i class=\"fa fa-search\"></i></a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-info btn-fab\"><i class=\"fa fa-camera\"></i></a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-fab\"><i class=\"fa fa-camera\"></i></a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-danger btn-fab\"><i class=\"fa fa-smile-o\"></i></a>\r\n                        </div>\r\n                        <div class=\"floating-btn-small pt-2\">\r\n                            <p>Use <code>.btn-sm</code> classes for small floating buttons.</p>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-secondary btn-fab btn-sm\"><i class=\"fa fa-star-o\"></i></a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-fab btn-sm\"><i class=\"fa fa-user-o\"></i></a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-success btn-fab btn-sm\"><i class=\"fa fa-search\"></i></a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-info btn-fab btn-sm\"><i class=\"fa fa-camera\"></i></a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-fab btn-sm\"><i class=\"fa fa-camera\"></i></a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-danger btn-fab btn-sm\"><i class=\"fa fa-smile-o\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Floating action buttons Ends -->\r\n\r\n        <!--Vertical Button Groups starts -->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Vertical Button Groups</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <p>Use <code>.btn-group-vertical</code> class for vertical button group.</p>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12 col-lg-6\">\r\n                                <div class=\"btn-group-vertical\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised\">Button</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised\">Button</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised\">Button</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised\">Button</a>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-12 col-lg-6\">\r\n                                <div class=\"btn-group-vertical\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-secondary\">Button</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-primary\">Button</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-info\">Button</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-danger\">Button</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>       \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Vertical Button Groups Ends -->\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Justified Button Groups Starts -->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Justified Button Groups</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xl-6 col-lg-12\">\r\n                                <div class=\"btn-group btn-group-justified btn-group-raised\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised\">Left</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised\">Middle</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised\">Right</a>\r\n                                </div>\r\n                                <p><code>btn-group.btn-group-justified.btn-group-raised</code></p>\r\n                                <div class=\"btn-group btn-group-justified btn-group-raised\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-primary\">Left</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-success\">Middle</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-danger\">Right</a>\r\n                                </div>\r\n                                <p>Use <code>.btn-COLOR</code> class for colored buttons for colored buttons.</p>\r\n                                <fieldset disabled>\r\n                                    <div class=\"btn-group btn-group-justified btn-group-raised\">\r\n                                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-primary\">Left</a>\r\n                                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-success\">Middle</a>\r\n                                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-danger\">Right</a>\r\n                                    </div>\r\n                                </fieldset>\r\n                                <p>disabled <code>btn-group.btn-group-justified.btn-group-raised</code></p>\r\n                            </div>\r\n                            <div class=\"col-xl-6 col-lg-12\">\r\n                                <div class=\"btn-group btn-group-justified btn-group-raised btn-round\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-round\">Left</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-round\">Middle</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-round\">Right</a>\r\n                                </div>\r\n                                <p><code>btn-group.btn-group-justified.btn-group-raised.btn-round</code></p>\r\n                                <div class=\"btn-group btn-group-justified btn-group-raised btn-round\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-round btn-primary\">Left</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-round btn-success\">Middle</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-round btn-danger\">Right</a>\r\n                                </div>\r\n                                <p>Use <code>.btn-COLOR</code> with <code>.btn-round</code> class for colored round buttons for colored buttons.</p>\r\n                                <fieldset disabled>\r\n                                    <div class=\"btn-group btn-group-justified btn-group-raised btn-round\">\r\n                                        <a href=\"javascript:void(0)\" class=\"btn btn-round btn-primary\">Left</a>\r\n                                        <a href=\"javascript:void(0)\" class=\"btn btn-round btn-success\">Middle</a>\r\n                                        <a href=\"javascript:void(0)\" class=\"btn btn-round btn-danger\">Right</a>\r\n                                    </div>\r\n                                </fieldset>\r\n                                <p>disabled <code>btn-group.btn-group-justified.btn-group-raised.btn-round</code></p>\r\n                            </div>                            \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Justified Button Groups Ends -->\r\n\r\n        <!--Block Button Starts -->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Block Button</h4>\r\n                    <p>For raised block button, use <code>.btn-block.btn-raised</code> classes.<br>\r\n                    Block buttons can be used with diffrent size classes too.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"block-button\">\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-secondary btn-lg btn-block btn-raised\">Block level button</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-lg btn-block btn-raised\">Block level button</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-success btn-lg btn-block btn-raised\">Block level button</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-danger btn-lg btn-block btn-raised\">Block level button</a>\r\n                            <fieldset disabled>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-secondary mt-2 btn-lg btn-block btn-raised\">Block level button disabled</a>\r\n                            </fieldset>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Block Button Ends -->\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Button Toolbar Starts -->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Button Toolbar</h4>\r\n                    <p>To create button toolbar, use <code>.btn-toolbar</code> class as wrapper of <code>.btn-group</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"btn-toolbar mb-2\">\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat\">1</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat\">2</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat\">3</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised\">4</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised\">5</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised\">6</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-primary\">7</a>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-primary btn-raised\" id=\"dropdownBasic1\" ngbDropdownToggle>Dropdown</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic1\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"btn-toolbar mb-2\">\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">1</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">2</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">3</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-primary\">4</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-primary\">5</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-primary\">6</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-primary\">7</a>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-primary btn-raised\" id=\"dropdownBasic2\" ngbDropdownToggle>Dropdown</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic2\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"btn-toolbar mb-2\">\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">1</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">2</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">3</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised\">4</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-info\">5</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised\">6</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-info\">7</a>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-warning btn-raised\" id=\"dropdownBasic3\" ngbDropdownToggle>Dropdown</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic3\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <fieldset disabled>\r\n                            <div class=\"btn-toolbar mb-2\">\r\n                                <div class=\"btn-group mr-2\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn\">1</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn\">2</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn\">3</a>\r\n                                </div>\r\n\r\n                                <div class=\"btn-group mr-2\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised\">4</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised\">5</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised\">6</a>\r\n                                </div>\r\n\r\n                                <div class=\"btn-group mr-2\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-info btn-raised\">7</a>\r\n                                    <span ngbDropdown>\r\n                                        <button class=\"btn btn-warning btn-raised\" id=\"dropdownBasic4\" ngbDropdownToggle>Dropdown</button>\r\n                                        <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic4\">\r\n                                            <button class=\"dropdown-item\">Action</button>\r\n                                            <button class=\"dropdown-item\">Another Action</button>\r\n                                            <button class=\"dropdown-item\">Something else is here</button>\r\n                                        </div>\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Button Toolbar Ends -->\r\n\r\n        <!--Round Button Toolbar Starts -->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Round Button Toolbar</h4>\r\n                    <p>To create round button toolbar, use <code>.btn-round</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"btn-toolbar mb-3\">\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-round\">1</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-round\">2</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-round\">3</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round\">4</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round\">5</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round\">6</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-primary btn-round\">7</a>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-primary btn-raised btn-round\" id=\"dropdownBasic5\" ngbDropdownToggle>Dropdown</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic5\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"btn-toolbar mb-3\">\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary btn-round\">1</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary btn-round\">2</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary btn-round\">3</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-primary\">4</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-primary\">5</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-primary\">6</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-primary\">7</a>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-primary btn-raised btn-round\" id=\"dropdownBasic6\" ngbDropdownToggle>Dropdown</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic6\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"btn-toolbar mb-3\">\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-flat btn-round\">1</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-flat btn-round\">2</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-flat btn-round\">3</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round\">4</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-info\">5</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round\">6</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-info\">7</a>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-warning btn-round btn-raised\" id=\"dropdownBasic7\" ngbDropdownToggle>Dropdown</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic7\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <fieldset disabled>\r\n                            <div class=\"btn-toolbar mb-3\">\r\n                                <div class=\"btn-group mr-2\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn\">1</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn\">2</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn\">3</a>\r\n                                </div>\r\n\r\n                                <div class=\"btn-group mr-2\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised\">4</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised\">5</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised\">6</a>\r\n                                </div>\r\n\r\n                                <div class=\"btn-group mr-2\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-round btn-info btn-raised\">7</a>\r\n                                    <span ngbDropdown>\r\n                                        <button class=\"btn btn-warning btn-round btn-raised\" id=\"dropdownBasic8\" ngbDropdownToggle>Dropdown</button>\r\n                                        <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic8\">\r\n                                            <button class=\"dropdown-item\">Action</button>\r\n                                            <button class=\"dropdown-item\">Another Action</button>\r\n                                            <button class=\"dropdown-item\">Something else is here</button>\r\n                                        </div>\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Round Button Toolbar Ends -->\r\n    </div>\r\n</section>\r\n<!--Basic button ends -->\r\n\r\n<!--Outline button starts -->\r\n<section id=\"outline-buttons\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 mt-2\">\r\n            <div class=\"content-header\">Outline Buttons</div>\r\n            <p class=\"content-sub-header\">Use <code>.btn-outline-COLOR</code> class for outline buttons.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Outline Buttons Starts-->\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Outline Buttons</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"flat-outline mb-2\">\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary\">Primary</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-success\">Success</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-info\">Info</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-warning\">Warning</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-danger\">Danger</a>\r\n                        </div>\r\n                        <div class=\"flat-group-outline\">\r\n                            <div ngbDropdown>\r\n                                <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Primary</button>\r\n                                <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-outline-success\" id=\"dropdownBasic2\" ngbDropdownToggle>Success</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic2\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-outline-danger\" id=\"dropdownBasic3\" ngbDropdownToggle>Danger</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic3\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-outline-info\" id=\"dropdownBasic4\" ngbDropdownToggle>Info</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic4\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-outline-warning\" id=\"dropdownBasic5\" ngbDropdownToggle>Warning</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic5\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Outline Buttons Ends-->\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Round Outline Buttons Starts-->\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Round outline Buttons</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"flat-outline mb-2\">\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary btn-round\">Primary</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-success btn-round\">Success</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-info btn-round\">Info</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-warning btn-round\">Warning</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-danger btn-round\">Danger</a>\r\n                        </div>\r\n                        <div class=\"flat-group-outline\">\r\n                            <div ngbDropdown>\r\n                                <button class=\"btn btn-outline-primary btn-round\" id=\"dropdownBasic1\" ngbDropdownToggle>Primary</button>\r\n                                <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-outline-success btn-round\" id=\"dropdownBasic2\" ngbDropdownToggle>Success</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic2\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-outline-danger btn-round\" id=\"dropdownBasic3\" ngbDropdownToggle>Danger</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic3\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-outline-info btn-round\" id=\"dropdownBasic4\" ngbDropdownToggle>Info</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic4\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-outline-warning btn-round\" id=\"dropdownBasic5\" ngbDropdownToggle>Warning</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic5\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Round Outline Buttons Ends-->\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Floating Buttons Starts-->\r\n        <div class=\"col-md-12 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Floating Buttons</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"floating-btn mb-2\">\r\n                            <a class=\"btn btn-outline-primary\" href=\"javascript:void(0)\"><i class=\"fa fa-star-o\"></i></a>\r\n                            <a class=\"btn btn-outline-success\" href=\"javascript:void(0)\"><i class=\"fa fa-user-o\"></i></a>\r\n                            <a class=\"btn btn-outline-info\" href=\"javascript:void(0)\"><i class=\"fa fa-search\"></i></a>\r\n                            <a class=\"btn btn-outline-warning\" href=\"javascript:void(0)\"><i class=\"fa fa-camera\"></i></a>\r\n                            <a class=\"btn btn-outline-danger\" href=\"javascript:void(0)\"><i class=\"fa fa-smile-o\"></i></a>\r\n                        </div>\r\n                        <div class=\"floating-btn\">\r\n                            <a class=\"btn btn-outline-primary btn-fab\" href=\"javascript:void(0)\"><i class=\"fa fa-star-o\"></i></a>\r\n                            <a class=\"btn btn-outline-success btn-fab\" href=\"javascript:void(0)\"><i class=\"fa fa-user-o\"></i></a>\r\n                            <a class=\"btn btn-outline-info btn-fab\" href=\"javascript:void(0)\"><i class=\"fa fa-search\"></i></a>\r\n                            <a class=\"btn btn-outline-warning btn-fab\" href=\"javascript:void(0)\"><i class=\"fa fa-camera\"></i></a>\r\n                            <a class=\"btn btn-outline-danger btn-fab\" href=\"javascript:void(0)\"><i class=\"fa fa-smile-o\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Floating Buttons Ends-->\r\n        \r\n        <!--Block Buttons Starts-->\r\n        <div class=\"col-md-12 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Block Buttons</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"block-button\">\r\n                            <a class=\"btn btn-outline-success btn-lg btn-block\" href=\"javascript:void(0)\">Block button</a>\r\n                            <a class=\"btn btn-outline-danger btn-lg btn-block btn-round\" href=\"javascript:void(0)\">Block button</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Block Buttons Ends-->\r\n\r\n        <!--Vertical Buttons Starts-->\r\n        <div class=\"col-md-12 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Vertical Buttons</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"btn-group-vertical\">\r\n                            <a class=\"btn btn-outline-primary\" href=\"javascript:void(0)\">Button</a>\r\n                            <a class=\"btn btn-outline-danger\" href=\"javascript:void(0)\">Button</a>\r\n                            <a class=\"btn btn-outline-info\" href=\"javascript:void(0)\">Button</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Vertical Buttons Ends-->\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Outline Button Groups Starts-->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Outline Button Groups</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"btn-group btn-group-justified btn-group-raised mb-2\">\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary\">Left</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary\">Middle</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary\">Right</a>\r\n                        </div>\r\n                        <br>\r\n                        <div class=\"btn-group btn-group-justified btn-group-raised\">\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary\">Left</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-success\">Middle</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-danger\">Right</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Outline Button Groups Ends-->\r\n\r\n        <!--Round Outline Button Groups Starts-->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Round Outline Button Groups</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"btn-group btn-group-justified btn-group-raised btn-round mb-2\">\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary btn-round\">Left</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary btn-round\">Middle</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary btn-round\">Right</a>\r\n                        </div>\r\n                        <br>\r\n                        <div class=\"btn-group btn-group-justified btn-group-raised btn-round\">\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary btn-round\">Left</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-success btn-round\">Middle</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-danger btn-round\">Right</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Round Outline Button Groups Ends-->\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Outline Toolbar Buttons Starts-->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Outline Toolbar Buttons</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"btn-toolbar mb-2\">\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">1</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">2</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">3</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary\">4</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary\">5</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary\">6</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary\">7</a>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-outline-primary btn-raised\" id=\"dropdownBasic1\" ngbDropdownToggle>Dropdown</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic1\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"btn-toolbar\">\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">1</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">2</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">3</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-success\">4</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-info\">5</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-warning\">6</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-danger\">7</a>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-outline-primary btn-raised\" id=\"dropdownBasic1\" ngbDropdownToggle>Dropdown</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic1\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Outline Toolbar Buttons Ends-->\r\n\r\n        <!--Round Outline Toolbar Buttons Starts-->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Round Outline Toolbar Buttons</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"btn-toolbar mb-2\">\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary btn-round\">1</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary btn-round\">2</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary btn-round\">3</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary btn-round\">4</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary btn-round\">5</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary btn-round\">6</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary btn-round\">7</a>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-outline-primary btn-round\" id=\"dropdownBasic1\" ngbDropdownToggle>Dropdown</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic1\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"btn-toolbar\">\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-flat btn-round\">1</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-flat btn-round\">2</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-flat btn-round\">3</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-success btn-round\">4</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-info btn-round\">5</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-warning btn-round\">6</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-danger btn-round\">7</a>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-outline-primary btn-round\" id=\"dropdownBasic1\" ngbDropdownToggle>Dropdown</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic1\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Round Outline Toolbar Buttons Ends-->\r\n    </div>\r\n</section>\r\n<!--Outline button Ends -->\r\n\r\n<!--Social Media button starts -->\r\n<section id=\"social-buttons\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 mt-2\">\r\n            <div class=\"content-header\">Social Media Buttons</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Basic Social Buttons Starts-->\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Basic Social Buttons</h4>\r\n                    <p>Use <code>.btn-social</code> class with <code>.btn-SOCIAL_NAME</code> class like <code>.btn-facebook</code> for social buttons with icons.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-adn\"><span class=\"fa fa-adn\"></span> App.net</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-bitbucket\"><span class=\"fa fa-bitbucket\"></span> Bitbucket</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-dropbox\"><span class=\"fa fa-dropbox\"></span> Dropbox</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-facebook\"><span class=\"fa fa-facebook\"></span> Facebook</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-flickr\"><span class=\"fa fa-flickr\"></span> Flickr</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-foursquare\"><span class=\"fa fa-foursquare\"></span> Foursquare</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-github\"><span class=\"fa fa-github\"></span> GitHub</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-google\"><span class=\"fa fa-google\"></span> Google</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-instagram\"><span class=\"fa fa-instagram\"></span> Instagram</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-linkedin\"><span class=\"fa fa-linkedin\"></span> LinkedIn</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-microsoft\"><span class=\"fa fa-windows\"></span> Microsoft</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-odnoklassniki\"><span class=\"fa fa-odnoklassniki\"></span> Odnoklassniki</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-openid\"><span class=\"fa fa-openid\"></span> OpenID</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-pinterest\"><span class=\"fa fa-pinterest\"></span> Pinterest</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-reddit\"><span class=\"fa fa-reddit\"></span> Reddit</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-soundcloud\"><span class=\"fa fa-soundcloud\"></span> SoundCloud</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-tumblr\"><span class=\"fa fa-tumblr\"></span> Tumblr</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-twitter\"><span class=\"fa fa-twitter\"></span> Twitter</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-vimeo\"><span class=\"fa fa-vimeo-square\"></span> Vimeo</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-vk\"><span class=\"fa fa-vk\"></span> VK</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-yahoo\"><span class=\"fa fa-yahoo\"></span> Yahoo!</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Basic Social Buttons Ends-->\r\n\r\n        <!--Round Social Buttons Starts-->\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Round Social Buttons</h4>\r\n                    <p>Use <code>.btn-social</code> class with <code>.btn-SOCIAL_NAME</code> class like <code>.btn-facebook</code> for social buttons with icons.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-adn\"><span class=\"fa fa-adn\"></span> App.net</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-bitbucket\"><span class=\"fa fa-bitbucket\"></span> Bitbucket</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-dropbox\"><span class=\"fa fa-dropbox\"></span> Dropbox</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-facebook\"><span class=\"fa fa-facebook\"></span> Facebook</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-flickr\"><span class=\"fa fa-flickr\"></span> Flickr</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-foursquare\"><span class=\"fa fa-foursquare\"></span> Foursquare</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-github\"><span class=\"fa fa-github\"></span> GitHub</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-google\"><span class=\"fa fa-google\"></span> Google</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-instagram\"><span class=\"fa fa-instagram\"></span> Instagram</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-linkedin\"><span class=\"fa fa-linkedin\"></span> LinkedIn</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-microsoft\"><span class=\"fa fa-windows\"></span> Microsoft</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-odnoklassniki\"><span class=\"fa fa-odnoklassniki\"></span> Odnoklassniki</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-openid\"><span class=\"fa fa-openid\"></span> OpenID</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-pinterest\"><span class=\"fa fa-pinterest\"></span> Pinterest</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-reddit\"><span class=\"fa fa-reddit\"></span> Reddit</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-soundcloud\"><span class=\"fa fa-soundcloud\"></span> SoundCloud</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-tumblr\"><span class=\"fa fa-tumblr\"></span> Tumblr</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-twitter\"><span class=\"fa fa-twitter\"></span> Twitter</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-vimeo\"><span class=\"fa fa-vimeo-square\"></span> Vimeo</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-vk\"><span class=\"fa fa-vk\"></span> VK</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-yahoo\"><span class=\"fa fa-yahoo\"></span> Yahoo!</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Round Social Buttons Ends-->\r\n\r\n        <!--Social Outline Buttons Starts-->\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Social Outline Buttons</h4>\r\n                    <p>Use <code>.btn-outline-SOCIAL_NAME</code> class like <code>.btn-outline-facebook</code> for social outline buttons.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-adn\"><span class=\"fa fa-adn\"></span> App.net</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-bitbucket\"><span class=\"fa fa-bitbucket\"></span> Bitbucket</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-dropbox\"><span class=\"fa fa-dropbox\"></span> Dropbox</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-facebook\"><span class=\"fa fa-facebook\"></span> Facebook</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-flickr\"><span class=\"fa fa-flickr\"></span> Flickr</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-foursquare\"><span class=\"fa fa-foursquare\"></span> Foursquare</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-github\"><span class=\"fa fa-github\"></span> GitHub</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-google\"><span class=\"fa fa-google\"></span> Google</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-instagram\"><span class=\"fa fa-instagram\"></span> Instagram</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-linkedin\"><span class=\"fa fa-linkedin\"></span> LinkedIn</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-microsoft\"><span class=\"fa fa-windows\"></span> Microsoft</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-odnoklassniki\"><span class=\"fa fa-odnoklassniki\"></span> Odnoklassniki</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-openid\"><span class=\"fa fa-openid\"></span> OpenID</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-pinterest\"><span class=\"fa fa-pinterest\"></span> Pinterest</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-reddit\"><span class=\"fa fa-reddit\"></span> Reddit</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-soundcloud\"><span class=\"fa fa-soundcloud\"></span> SoundCloud</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-tumblr\"><span class=\"fa fa-tumblr\"></span> Tumblr</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-twitter\"><span class=\"fa fa-twitter\"></span> Twitter</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-vimeo\"><span class=\"fa fa-vimeo-square\"></span> Vimeo</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-vk\"><span class=\"fa fa-vk\"></span> VK</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-yahoo\"><span class=\"fa fa-yahoo\"></span> Yahoo!</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Social Outline Buttons Ends-->\r\n\r\n        <!--Social Round Outline Buttons Starts-->\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Social Round Outline Buttons</h4>\r\n                    <p>Use <code>.btn-outline-SOCIAL_NAME</code> class like <code>.btn-outline-facebook</code> for social outline buttons.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-adn\"><span class=\"fa fa-adn\"></span> App.net</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket\"><span class=\"fa fa-bitbucket\"></span> Bitbucket</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-dropbox\"><span class=\"fa fa-dropbox\"></span> Dropbox</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-facebook\"><span class=\"fa fa-facebook\"></span> Facebook</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-flickr\"><span class=\"fa fa-flickr\"></span> Flickr</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-foursquare\"><span class=\"fa fa-foursquare\"></span> Foursquare</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-github\"><span class=\"fa fa-github\"></span> GitHub</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-google\"><span class=\"fa fa-google\"></span> Google</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-instagram\"><span class=\"fa fa-instagram\"></span> Instagram</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-linkedin\"><span class=\"fa fa-linkedin\"></span> LinkedIn</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-microsoft\"><span class=\"fa fa-windows\"></span> Microsoft</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-odnoklassniki\"><span class=\"fa fa-odnoklassniki\"></span> Odnoklassniki</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-openid\"><span class=\"fa fa-openid\"></span> OpenID</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-pinterest\"><span class=\"fa fa-pinterest\"></span> Pinterest</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-reddit\"><span class=\"fa fa-reddit\"></span> Reddit</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-soundcloud\"><span class=\"fa fa-soundcloud\"></span> SoundCloud</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-tumblr\"><span class=\"fa fa-tumblr\"></span> Tumblr</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-twitter\"><span class=\"fa fa-twitter\"></span> Twitter</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-vimeo\"><span class=\"fa fa-vimeo-square\"></span> Vimeo</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-vk\"><span class=\"fa fa-vk\"></span> VK</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-yahoo\"><span class=\"fa fa-yahoo\"></span> Yahoo!</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Social Round Outline Buttons Ends-->\r\n\r\n        <!--Flat Social Buttons Starts-->\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Flat Social Buttons</h4>\r\n                    <p>Use <code>.btn-SOCIAL_NAME-flat</code> class like <code>.btn-facebook-flat</code> class for flat social buttons.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <a class=\"btn btn-social btn-min-width btn-adn-flat mr-2 mb-2 btn-adn\"><span class=\"fa fa-adn\"></span> App.net</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-bitbucket-flat mr-2 mb-2 btn-bitbucket\"><span class=\"fa fa-bitbucket\"></span> Bitbucket</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-dropbox-flat mr-2 mb-2 btn-dropbox\"><span class=\"fa fa-dropbox\"></span> Dropbox</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-facebook-flat mr-2 mb-2 btn-facebook\"><span class=\"fa fa-facebook\"></span> Facebook</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-flickr-flat mr-2 mb-2 btn-flickr\"><span class=\"fa fa-flickr\"></span> Flickr</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-foursquare-flat mr-2 mb-2 btn-foursquare\"><span class=\"fa fa-foursquare\"></span> Foursquare</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-github-flat mr-2 mb-2 btn-github\"><span class=\"fa fa-github\"></span> GitHub</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-google-flat mr-2 mb-2 btn-google\"><span class=\"fa fa-google\"></span> Google</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-instagram-flat mr-2 mb-2 btn-instagram\"><span class=\"fa fa-instagram\"></span> Instagram</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-linkedin-flat mr-2 mb-2 btn-linkedin\"><span class=\"fa fa-linkedin\"></span> LinkedIn</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-microsoft-flat mr-2 mb-2 btn-microsoft\"><span class=\"fa fa-windows\"></span> Microsoft</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-odnoklassniki-flat mr-2 mb-2 btn-odnoklassniki\"><span class=\"fa fa-odnoklassniki\"></span> Odnoklassniki</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-openid-flat mr-2 mb-2 btn-openid\"><span class=\"fa fa-openid\"></span> OpenID</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-pinterest-flat mr-2 mb-2 btn-pinterest\"><span class=\"fa fa-pinterest\"></span> Pinterest</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-reddit-flat mr-2 mb-2 btn-reddit\"><span class=\"fa fa-reddit\"></span> Reddit</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-soundcloud-flat mr-2 mb-2 btn-soundcloud\"><span class=\"fa fa-soundcloud\"></span> SoundCloud</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-tumblr-flat mr-2 mb-2 btn-tumblr\"><span class=\"fa fa-tumblr\"></span> Tumblr</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-twitter-flat mr-2 mb-2 btn-twitter\"><span class=\"fa fa-twitter\"></span> Twitter</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-vimeo-flat mr-2 mb-2 btn-vimeo\"><span class=\"fa fa-vimeo-square\"></span> Vimeo</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-vk-flat mr-2 mb-2 btn-vk\"><span class=\"fa fa-vk\"></span> VK</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-yahoo-flat mr-2 mb-2 btn-yahoo\"><span class=\"fa fa-yahoo\"></span> Yahoo!</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Flat Social Buttons Ends-->\r\n\r\n        <!--Social Icon Buttons Starts-->\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Social Icon Buttons</h4>\r\n                    <p>Use <code>.btn-social-icon</code> class for social icon buttons.</p>\r\n                    <p>Use <code>.btn-round</code> class for round buttons.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"social-icon-square\">\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-adn\"><span class=\"fa fa-adn\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-bitbucket\"><span class=\"fa fa-bitbucket\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-dropbox\"><span class=\"fa fa-dropbox\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-facebook\"><span class=\"fa fa-facebook\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-flickr\"><span class=\"fa fa-flickr\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-foursquare\"><span class=\"fa fa-foursquare\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-github\"><span class=\"fa fa-github\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-google\"><span class=\"fa fa-google\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-instagram\"><span class=\"fa fa-instagram\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-linkedin\"><span class=\"fa fa-linkedin\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-microsoft\"><span class=\"fa fa-windows\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-odnoklassniki\"><span class=\"fa fa-odnoklassniki\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-openid\"><span class=\"fa fa-openid\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-pinterest\"><span class=\"fa fa-pinterest\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-reddit\"><span class=\"fa fa-reddit\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-soundcloud\"><span class=\"fa fa-soundcloud\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-tumblr\"><span class=\"fa fa-tumblr\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-twitter\"><span class=\"fa fa-twitter\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-vimeo\"><span class=\"fa fa-vimeo-square\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-vk\"><span class=\"fa fa-vk\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-yahoo\"><span class=\"fa fa-yahoo\"></span></a>\r\n                        </div>\r\n                        <div class=\"social-icon-round\">\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-adn\"><span class=\"fa fa-adn\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-bitbucket\"><span class=\"fa fa-bitbucket\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-dropbox\"><span class=\"fa fa-dropbox\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-facebook\"><span class=\"fa fa-facebook\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-flickr\"><span class=\"fa fa-flickr\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-foursquare\"><span class=\"fa fa-foursquare\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-github\"><span class=\"fa fa-github\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-google\"><span class=\"fa fa-google\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-instagram\"><span class=\"fa fa-instagram\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-linkedin\"><span class=\"fa fa-linkedin\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-microsoft\"><span class=\"fa fa-windows\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-odnoklassniki\"><span class=\"fa fa-odnoklassniki\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-openid\"><span class=\"fa fa-openid\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-pinterest\"><span class=\"fa fa-pinterest\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-reddit\"><span class=\"fa fa-reddit\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-soundcloud\"><span class=\"fa fa-soundcloud\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-tumblr\"><span class=\"fa fa-tumblr\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-twitter\"><span class=\"fa fa-twitter\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-vimeo\"><span class=\"fa fa-vimeo-square\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-vk\"><span class=\"fa fa-vk\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-yahoo\"><span class=\"fa fa-yahoo\"></span></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Social Icon Buttons Ends-->\r\n        \r\n        <!--Social Icon and Round Outline Buttons Starts-->\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Social Icon and Round Outline Buttons</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"social-icon-square\">\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-adn\"><span class=\"fa fa-adn\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-bitbucket\"><span class=\"fa fa-bitbucket\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-dropbox\"><span class=\"fa fa-dropbox\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-facebook\"><span class=\"fa fa-facebook\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-flickr\"><span class=\"fa fa-flickr\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-foursquare\"><span class=\"fa fa-foursquare\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-github\"><span class=\"fa fa-github\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-google\"><span class=\"fa fa-google\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-instagram\"><span class=\"fa fa-instagram\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-linkedin\"><span class=\"fa fa-linkedin\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-microsoft\"><span class=\"fa fa-windows\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-odnoklassniki\"><span class=\"fa fa-odnoklassniki\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-openid\"><span class=\"fa fa-openid\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-pinterest\"><span class=\"fa fa-pinterest\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-reddit\"><span class=\"fa fa-reddit\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-soundcloud\"><span class=\"fa fa-soundcloud\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-tumblr\"><span class=\"fa fa-tumblr\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-twitter\"><span class=\"fa fa-twitter\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-vimeo\"><span class=\"fa fa-vimeo-square\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-vk\"><span class=\"fa fa-vk\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-yahoo\"><span class=\"fa fa-yahoo\"></span></a>\r\n                        </div>\r\n                        <div class=\"social-icon-round\">\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-adn\"><span class=\"fa fa-adn\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-bitbucket\"><span class=\"fa fa-bitbucket\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-dropbox\"><span class=\"fa fa-dropbox\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-facebook\"><span class=\"fa fa-facebook\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-flickr\"><span class=\"fa fa-flickr\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-foursquare\"><span class=\"fa fa-foursquare\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-github\"><span class=\"fa fa-github\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-google\"><span class=\"fa fa-google\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-instagram\"><span class=\"fa fa-instagram\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-linkedin\"><span class=\"fa fa-linkedin\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-microsoft\"><span class=\"fa fa-windows\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-odnoklassniki\"><span class=\"fa fa-odnoklassniki\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-openid\"><span class=\"fa fa-openid\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-pinterest\"><span class=\"fa fa-pinterest\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-reddit\"><span class=\"fa fa-reddit\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-soundcloud\"><span class=\"fa fa-soundcloud\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-tumblr\"><span class=\"fa fa-tumblr\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-twitter\"><span class=\"fa fa-twitter\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-vimeo\"><span class=\"fa fa-vimeo-square\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-vk\"><span class=\"fa fa-vk\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-yahoo\"><span class=\"fa fa-yahoo\"></span></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Social Icon and Round Outline Buttons Ends-->\r\n        \r\n        <!--Social Block Buttons Starts-->\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Social Block Buttons</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"social-buttons-block\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-12 col-sm-4\">\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-adn\">\r\n                                        <span class=\"fa fa-adn\"></span> Sign in with App.net\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-bitbucket\">\r\n                                        <span class=\"fa fa-bitbucket\"></span> Sign in with Bitbucket\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-dropbox\">\r\n                                        <span class=\"fa fa-dropbox\"></span> Sign in with Dropbox\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-facebook\">\r\n                                        <span class=\"fa fa-facebook\"></span> Sign in with Facebook\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-flickr\">\r\n                                        <span class=\"fa fa-flickr\"></span> Sign in with Flickr\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-foursquare\">\r\n                                        <span class=\"fa fa-foursquare\"></span> Sign in with Foursquare\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-github\">\r\n                                        <span class=\"fa fa-github\"></span> Sign in with GitHub\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"col-12 col-sm-4\">\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-google\">\r\n                                        <span class=\"fa fa-google\"></span> Sign in with Google\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-instagram\">\r\n                                        <span class=\"fa fa-instagram\"></span> Sign in with Instagram\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-linkedin\">\r\n                                        <span class=\"fa fa-linkedin\"></span> Sign in with LinkedIn\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-microsoft\">\r\n                                        <span class=\"fa fa-windows\"></span> Sign in with Microsoft\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-odnoklassniki\">\r\n                                        <span class=\"fa fa-odnoklassniki\"></span> Sign in with Odnoklassniki\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-openid\">\r\n                                        <span class=\"fa fa-openid\"></span> Sign in with OpenID\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-pinterest\">\r\n                                        <span class=\"fa fa-pinterest\"></span> Sign in with Pinterest\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"col-12 col-sm-4\">\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-reddit\">\r\n                                        <span class=\"fa fa-reddit\"></span> Sign in with Reddit\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-soundcloud\">\r\n                                        <span class=\"fa fa-soundcloud\"></span> Sign in with SoundCloud\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-tumblr\">\r\n                                        <span class=\"fa fa-tumblr\"></span> Sign in with Tumblr\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-twitter\">\r\n                                        <span class=\"fa fa-twitter\"></span> Sign in with Twitter\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-vimeo\">\r\n                                        <span class=\"fa fa-vimeo-square\"></span> Sign in with Vimeo\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-vk\">\r\n                                        <span class=\"fa fa-vk\"></span> Sign in with VK\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-yahoo\">\r\n                                        <span class=\"fa fa-yahoo\"></span> Sign in with Yahoo!\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Social Block Buttons Ends-->\r\n    </div>\r\n</section>\r\n<!--Social Media button Ends -->"

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/buttons/buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/buttons/buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonsComponent = (function () {
    function ButtonsComponent() {
    }
    ButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__("../../../../../src/app/components/bootstrap/buttons/buttons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bootstrap/buttons/buttons.component.scss")]
        })
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bootstrap/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Carousel Starts-->\r\n<section id=\"carousel\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Carousel</div>\r\n      <p class=\"content-sub-header\">Directive to easily create carousels based on Bootstrap's markup.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Basic Carousel Starts-->\r\n    <div class=\"col-lg-12 col-xl-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Basic Carousel</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-carousel>\r\n              <ng-template ngbSlide>\r\n                <img src=\"assets/img/photos/12.jpg\" alt=\"Random first slide\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3 class=\"ff-serif text-uppercase\">First slide label</h3>\r\n                  <p class=\"mb-0\">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n                </div>\r\n              </ng-template>\r\n              <ng-template ngbSlide>\r\n                <img src=\"assets/img/photos/13.jpg\" alt=\"Random second slide\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3 class=\"ff-serif text-uppercase\">Second slide label</h3>\r\n                  <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n                </div>\r\n              </ng-template>\r\n              <ng-template ngbSlide>\r\n                <img src=\"assets/img/photos/14.jpg\" alt=\"Random third slide\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3 class=\"ff-serif text-uppercase\">Third slide label</h3>\r\n                  <p class=\"mb-0\">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-carousel>\r\n            <h5 class=\"mt-5 mb-4 text-bold-500\">Basic Code :</h5>\r\n            <pre class=\"language-typescript\">\r\n<code class=\"language-typescript\">\r\n  import &#123;Component&#125; from '@angular/core';\r\n  @Component(&#123;\r\n    selector: 'ngbd-carousel-basic',\r\n    templateUrl: './carousel-basic.html'\r\n  &#125;)\r\n  export class NgbdCarouselBasic &#123;\r\n  &#125;</code> \r\n          </pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Basic Carousel Ends-->\r\n\r\n    <!--Global configuration of carousels Starts-->\r\n    <div class=\"col-lg-12 col-xl-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Global configuration of carousels</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-carousel>\r\n              <ng-template ngbSlide>\r\n                <img src=\"assets/img/photos/15.jpg\" alt=\"Random first slide\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3>10 seconds between slides...</h3>\r\n                  <p>This carousel uses customized default values.</p>\r\n                </div>\r\n              </ng-template>\r\n              <ng-template ngbSlide>\r\n                <img src=\"assets/img/photos/16.jpg\" alt=\"Random second slide\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3>No keyboard...</h3>\r\n                  <p>This carousel uses customized default values.</p>\r\n                </div>\r\n              </ng-template>\r\n              <ng-template ngbSlide>\r\n                <img src=\"assets/img/photos/17.jpg\" alt=\"Random third slide\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3>And no wrap after last slide.</h3>\r\n                  <p>This carousel uses customized default values.</p>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-carousel>\r\n            <h5 class=\"mt-5 mb-4 text-bold-500\">Configuration Code :</h5>\r\n            <pre class=\"language-typescript\">\r\n<code class=\"language-typescript\">\r\n  import &#123;Component&#125; from '@angular/core';\r\n  import &#123;NgbCarouselConfig&#125; from '@ng-bootstrap/ng-bootstrap';\r\n\r\n  @Component(&#123;\r\n    selector: 'ngbd-carousel-config',\r\n    templateUrl: './carousel-config.html',\r\n    providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers\r\n  &#125;)\r\n  export class NgbdCarouselConfig &#123;\r\n    constructor(config: NgbCarouselConfig) &#123;\r\n      \r\n      config.interval = 10000;\r\n      config.wrap = false;\r\n      config.keyboard = false;\r\n    &#125;\r\n  &#125;</code> \r\n            </pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Global configuration of carousels Starts-->\r\n  </div>\r\n</section>\r\n<!--Carousel Ends-->"

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/carousel/carousel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselComponent = (function () {
    function CarouselComponent(config) {
        // customize default values of carousels used by this component tree
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
    }
    CarouselComponent.prototype.ngOnInit = function () {
        //  Code formatting script
        $.getScript('./assets/js/prism.min.js');
    };
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__("../../../../../src/app/components/bootstrap/carousel/carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bootstrap/carousel/carousel.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbCarouselConfig */]] // add NgbCarouselConfig to the component providers
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbCarouselConfig */]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bootstrap/collapse/collapse.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Collapse on toggle starts-->\r\n<section id=\"collapse\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"content-header\">Collapse</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <div>\r\n              <button type=\"button\" class=\"btn btn-outline-primary mt-2\" (click)=\"isCollapsed = !isCollapsed\"\r\n                      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\r\n                Toggle\r\n              </button>\r\n            </div>\r\n            <div id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\r\n              <br>\r\n              <p>Jelly-o cake chocolate bar. Ice cream gummi bears candy canes cookie toffee halvah marzipan. Gummies dessert powder biscuit sweet roll. Biscuit muffin jujubes. Tiramisu pie danish muffin oat cake. Apple pie cupcake apple pie cotton candy toffee biscuit pie. Lemon drops dessert marshmallow. Jelly-o soufflé muffin muffin. Tootsie roll carrot cake sugar plum brownie chocolate cake croissant cotton candy lemon drops toffee.</p>\r\n              <p>Sweet roll cotton candy jelly-o tootsie roll candy canes liquorice tart cotton candy tiramisu. Powder sesame snaps chocolate liquorice pudding jelly cake pie. Lemon drops ice cream chocolate bar pudding dragée. Pastry cake cheesecake chocolate cake. Toffee bonbon fruitcake candy canes biscuit. Jelly chocolate cake danish tart jelly-o candy jelly powder. Brownie gummi bears brownie bear claw brownie bear claw croissant marshmallow. Pudding cake icing gummies pudding candy gingerbread macaroon. Chupa chups pastry tiramisu liquorice tiramisu marshmallow gummies brownie candy canes.</p>\r\n              <p>Jelly beans halvah brownie macaroon powder. Wafer gingerbread caramels candy tootsie roll powder chupa chups. Marshmallow candy caramels chocolate cake oat cake caramels. Ice cream jelly liquorice danish toffee caramels. Danish icing topping. Carrot cake cupcake marshmallow donut sugar plum gingerbread sweet jelly. Pastry chocolate carrot cake sweet macaroon sweet roll jelly beans topping. Biscuit lollipop jelly-o tart halvah muffin. Caramels topping gummies pastry sweet. Lollipop candy canes bonbon sesame snaps.</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Collapse on toggle ends-->"

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/collapse/collapse.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/collapse/collapse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CollapseComponent = (function () {
    function CollapseComponent() {
        this.isCollapsed = false;
    }
    CollapseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-collapse',
            template: __webpack_require__("../../../../../src/app/components/bootstrap/collapse/collapse.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bootstrap/collapse/collapse.component.scss")]
        })
    ], CollapseComponent);
    return CollapseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bootstrap/datepicker/datepicker.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"datepicker\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n     <div class=\"content-header\">Datepicker</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Simple datepicker starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Simple datepicker</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\"></ngb-datepicker>\r\n\r\n            <div class=\"block mt-3 mb-3\">\r\n              <button class=\"btn btn-sm btn-outline-primary\" (click)=\"dp.navigateTo({year: 2013, month: 2})\">To Feb 2013</button>\r\n              <button class=\"btn btn-sm btn-outline-primary\" (click)=\"dp.navigateTo()\">To current month</button>\r\n              <button class=\"btn btn-sm btn-outline-primary\" (click)=\"selectToday()\">Select Today</button>\r\n            </div>\r\n\r\n            <p>Month: {{ date.month }}.{{ date.year }}</p>\r\n            <p>Model: {{ model | json }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Simple datepicker Ends-->\r\n    \r\n    <!--Disabled/Enabled datepicker starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Disabled datepicker</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-datepicker [(ngModel)]=\"disabledModel\" [disabled]=\"disabled\"></ngb-datepicker>\r\n\r\n            <div class=\"block mt-3\">\r\n              <button class=\"btn btn-sm btn-outline-{{disabled ? 'danger' : 'success'}}\" (click)=\"disabled = !disabled\">\r\n              {{ disabled ? \"disabled\" : \"enabled\"}}\r\n            </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Disabled/Enabled datepicker ends-->\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Datepicker in a popup starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Datepicker in a popup</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <form class=\"form-inline\">\r\n              <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"popupModel\" ngbDatepicker #d2=\"ngbDatepicker\">\r\n                  <div class=\"input-group-addon\" (click)=\"d2.toggle()\">\r\n                    <i class=\"fa fa-calendar\" style=\"cursor: pointer;\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n            <p class=\"mt-4\">Model: {{ popupModel | json }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Datepicker in a popup ends-->\r\n\r\n    <!--Custom day view starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Custom day view</h4>\r\n          <p>This datepicker uses a custom template to display days. All week-ends are displayed with an orange background.</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <form class=\"form-inline\">\r\n              <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker [dayTemplate]=\"customDay\"\r\n                    [markDisabled]=\"isDisabled\" #d3=\"ngbDatepicker\">\r\n                  <div class=\"input-group-addon\" (click)=\"d3.toggle()\">\r\n                    <i class=\"fa fa-calendar\" style=\"cursor: pointer;\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n\r\n            <ng-template #customDay let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\">\r\n              <span class=\"custom-day\" [class.weekend]=\"isWeekend(date)\" [class.bg-primary]=\"selected\" [class.hidden]=\"date.month !== currentMonth\"\r\n                [class.text-muted]=\"disabled\">\r\n              {{ date.day }}\r\n            </span>\r\n            </ng-template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Custom day view ends-->\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Multiple months datepickers starts-->\r\n    <div class=\"col-lg-12 col-xl-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Multiple months</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-datepicker [displayMonths]=\"displayMonths\" [navigation]=\"navigation\"></ngb-datepicker>\r\n\r\n            <p class=\"pt-3\">Inline</p>\r\n\r\n            <form class=\"form-inline\">\r\n              <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [displayMonths]=\"displayMonths\" [navigation]=\"navigation\"\r\n                    ngbDatepicker #d=\"ngbDatepicker\">\r\n                  <div class=\"input-group-addon\" (click)=\"d.toggle()\">\r\n                    <i class=\"fa fa-calendar\" style=\"cursor: pointer;\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n\r\n            <p class=\"pt-3\">Options</p>\r\n\r\n            <select class=\"custom-select\" [(ngModel)]=\"displayMonths\">\r\n            <option [ngValue]=\"1\">One month</option>\r\n            <option [ngValue]=\"2\">Two months</option>\r\n          </select>\r\n\r\n            <select class=\"custom-select\" [(ngModel)]=\"navigation\">\r\n            <option value=\"none\">Without navigation</option>\r\n            <option value=\"select\">With select boxes</option>\r\n            <option value=\"arrows\">Without select boxes</option>\r\n          </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Multiple months datepickers ends-->\r\n\r\n    <!--Range selection datepickers starts-->\r\n    <div class=\"col-lg-12 col-xl-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Range selection</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-datepicker #dp1 ngModel (ngModelChange)=\"onDateChange($event)\" [displayMonths]=\"2\" [dayTemplate]=\"t\">\r\n            </ngb-datepicker>\r\n\r\n            <ng-template #t let-date=\"date\" let-focused=\"focused\">\r\n              <span class=\"custom-day\"\r\n                    [class.focused]=\"focused\"\r\n                    [class.range]=\"isFrom(date) || isTo(date) || isInside(date) || isHovered(date)\"\r\n                    [class.faded]=\"isHovered(date) || isInside(date)\"\r\n                    (mouseenter)=\"hoveredDate = date\"\r\n                    (mouseleave)=\"hoveredDate = null\">\r\n                {{ date.day }}\r\n              </span>\r\n            </ng-template>\r\n\r\n            <hr>\r\n            <div class=\"row\">\r\n              <div class=\"col-12 col-md-6\">\r\n                <p>From: {{ fromDate | json }} </p>\r\n              </div>\r\n              <div class=\"col-12 col-md-6\">\r\n                <p>To: {{ toDate | json }} </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Range selection datepickers ends-->\r\n  </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/datepicker/datepicker.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem; }\n\n.custom-day.focused {\n  background-color: #e6e6e6; }\n\n.custom-day.range, .custom-day:hover {\n  background-color: #0275d8;\n  color: white; }\n\n.faded {\n  opacity: 0.5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/datepicker/datepicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatepickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var now = new Date();
var I18N_VALUES = {
    en: {
        weekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
};
// Range datepicker Start 
var equals = function (one, two) {
    return one && two && two.year === one.year && two.month === one.month && two.day === one.day;
};
var before = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day < two.day : one.month < two.month : one.year < two.year;
};
var after = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day > two.day : one.month > two.month : one.year > two.year;
};
// Range datepicker Ends
var DatepickerComponent = (function () {
    function DatepickerComponent() {
        var _this = this;
        this.displayMonths = 2;
        this.navigation = 'select';
        this.disabledModel = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
        this.disabled = true;
        this.isHovered = function (date) { return _this.fromDate && !_this.toDate && _this.hoveredDate && after(date, _this.fromDate) && before(date, _this.hoveredDate); };
        this.isInside = function (date) { return after(date, _this.fromDate) && before(date, _this.toDate); };
        this.isFrom = function (date) { return equals(date, _this.fromDate); };
        this.isTo = function (date) { return equals(date, _this.toDate); };
    }
    // Range datepicker starts
    DatepickerComponent.prototype.onDateChange = function (date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    };
    // Range datepicker ends
    // Selects today's date
    DatepickerComponent.prototype.selectToday = function () {
        this.model = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
    };
    // Custom Day View Starts
    DatepickerComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    DatepickerComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    // Custom Day View Ends  
    DatepickerComponent.prototype.ngOnInit = function () {
        this.selectToday();
    };
    DatepickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-datepicker',
            template: __webpack_require__("../../../../../src/app/components/bootstrap/datepicker/datepicker.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bootstrap/datepicker/datepicker.component.scss")],
        })
    ], DatepickerComponent);
    return DatepickerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bootstrap/dropdowns/dropdowns.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Dropdown section starts-->\r\n<section id=\"dropdown\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Dropdown</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Toggle dropdown starts-->\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Toggle dropdown</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div ngbDropdown>\r\n                            <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Toggle dropdown</button>\r\n                            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n                                <button class=\"dropdown-item\">Action - 1</button>\r\n                                <button class=\"dropdown-item\">Another Action</button>\r\n                                <button class=\"dropdown-item\">Something else is here</button>\r\n                            </div>\r\n                            <span ngbDropdown placement=\"top-right\">\r\n                                <button class=\"btn btn-outline-primary\" id=\"dropdownBasic2\" ngbDropdownToggle>Toggle dropup</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic2\">\r\n                                    <button class=\"dropdown-item\">Action - 1</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Toggle dropdown ends-->\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Manual triggers starts-->\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Manual triggers</h4>\r\n                    <p>You can easily control dropdowns programmatically using the exported dropdown instance.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div ngbDropdown #myDrop1=\"ngbDropdown\">\r\n                            <button class=\"btn btn-outline-primary\" id=\"dropdownMenu2\" ngbDropdownToggle>Toggle dropdown</button>\r\n                            <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\r\n                                <button class=\"dropdown-item\">Action - 1</button>\r\n                                <button class=\"dropdown-item\">Another Action</button>\r\n                                <button class=\"dropdown-item\">Something else is here</button>\r\n                            </div>\r\n                            <button class=\"btn btn-outline-success\" (click)=\"$event.stopPropagation(); myDrop1.open();\">Open from outside</button>\r\n                            <button class=\"btn btn-outline-danger\" (click)=\"$event.stopPropagation(); myDrop1.close();\">Close from outside</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Manual triggers ends-->\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Button groups and split buttons starts-->\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Button groups and split buttons</h4>\r\n                    <p>Bootstrap split buttons and dropdowns on button groups are supported with the existing dropdown directives.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"dropdown btn-group dropup mr-1 mb-1\" ngbDropdown>\r\n                            <button type=\"button\" class=\"btn btn-danger btn-raised\">Action</button>\r\n                            <button type=\"button\" class=\"btn btn-danger btn-raised dropdown-toggle\" ngbDropdownToggle aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                <span class=\"sr-only\">Toggle Dropdown</span>\r\n                            </button>\r\n                            <div ngbDropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                                <a class=\"dropdown-item\">Action</a>\r\n                                <a class=\"dropdown-item\">Another action</a>\r\n                                <a class=\"dropdown-item\">Something else here</a>\r\n                                <div class=\"dropdown-divider\"></div>\r\n                                <a class=\"dropdown-item\">Separated link</a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"dropdown btn-group dropup mr-1 mb-1\" ngbDropdown>\r\n                            <button type=\"button\" class=\"btn btn-outline-danger\">Action</button>\r\n                            <button type=\"button\" class=\"btn btn-outline-danger dropdown-toggle\" ngbDropdownToggle aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                <span class=\"sr-only\">Toggle Dropdown</span>\r\n                            </button>\r\n                            <div ngbDropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                                <a class=\"dropdown-item\">Action</a>\r\n                                <a class=\"dropdown-item\">Another action</a>\r\n                                <a class=\"dropdown-item\">Something else here</a>\r\n                                <div class=\"dropdown-divider\"></div>\r\n                                <a class=\"dropdown-item\">Separated link</a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"dropdown btn-group mr-1 mb-1\" ngbDropdown>\r\n                            <button type=\"button\" class=\"btn btn-info btn-raised dropdown-toggle\" ngbDropdownToggle>\r\n                                Dropdown\r\n                                <span class=\"caret\"></span>\r\n                            </button>\r\n                            <div ngbDropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                                <a class=\"dropdown-item\">Action</a>\r\n                                <a class=\"dropdown-item\">Another action</a>\r\n                                <a class=\"dropdown-item\">Something else here</a>\r\n                                <div class=\"dropdown-divider\"></div>\r\n                                <a class=\"dropdown-item\">Separated link</a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"dropdown btn-group mr-1 mb-1\" ngbDropdown>\r\n                            <button type=\"button\" class=\"btn btn-outline-info dropdown-toggle\" ngbDropdownToggle>\r\n                                Dropdown\r\n                                <span class=\"caret\"></span>\r\n                            </button>\r\n                            <div ngbDropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                                <a class=\"dropdown-item\">Action</a>\r\n                                <a class=\"dropdown-item\">Another action</a>\r\n                                <a class=\"dropdown-item\">Something else here</a>\r\n                                <div class=\"dropdown-divider\"></div>\r\n                                <a class=\"dropdown-item\">Separated link</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Button groups and split buttons ends-->\r\n    </div>\r\n</section>\r\n<!--Dropdown section ends-->"

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/dropdowns/dropdowns.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/dropdowns/dropdowns.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DropdownsComponent = (function () {
    function DropdownsComponent() {
    }
    DropdownsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dropdowns',
            template: __webpack_require__("../../../../../src/app/components/bootstrap/dropdowns/dropdowns.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bootstrap/dropdowns/dropdowns.component.scss")],
        })
    ], DropdownsComponent);
    return DropdownsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bootstrap/input-groups/input-groups.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Input Group Starts-->\r\n<section id=\"input-groups\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Input groups</div>\r\n            <p class=\"content-sub-header\">Extend form controls by adding text or buttons before, after, or on both sides of any text-based <code>&lt;input&gt;</code>. Use <code>.input-group</code> with an <code>.input-group-addon</code> or <code>.input-group-btn</code> to prepend or append elements to a single <code>.form-control</code>.</p>\r\n        </div>\r\n    </div>\r\n    <!--Basic Input Groups Starts-->\r\n    <section id=\"basic-input-group\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">Basic Input Groups</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\" id=\"basic-addon1\">@</span>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n                            </div>\r\n                            <br>\r\n                            <div class=\"input-group\">\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Recipient's username\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n                                <span class=\"input-group-addon\" id=\"basic-addon2\">@example.com</span>\r\n                            </div>\r\n                            <br>\r\n                            <label for=\"basic-url\">Your vanity URL</label>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\" id=\"basic-addon3\">https://example.com/users/</span>\r\n                                <input type=\"text\" class=\"form-control\" id=\"basic-url\" aria-describedby=\"basic-addon3\">\r\n                            </div>\r\n                            <br>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">$</span>\r\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\">\r\n                                <span class=\"input-group-addon\">.00</span>\r\n                            </div>\r\n                            <br>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">$</span>\r\n                                <span class=\"input-group-addon\">0.00</span>\r\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!--Basic Input Groups Ends-->\r\n\r\n    <!--Input Groups Sizing Starts-->\r\n    <section id=\"input-group-sizing\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">Input Groups Sizing</h4>\r\n                        <p>Add the relative form sizing classes to the <code>.input-group</code> itself and contents within will automatically resize—no need for repeating the form control size classes on each element.</p>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <div class=\"input-group input-group-lg mb-3\">\r\n                                <span class=\"input-group-addon\" id=\"sizing-addon1\">@</span>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"sizing-addon1\">\r\n                            </div>\r\n\r\n                            <div class=\"input-group mb-3\">\r\n                                <span class=\"input-group-addon\" id=\"sizing-addon2\">@</span>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"sizing-addon2\">\r\n                            </div>\r\n\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <span class=\"input-group-addon\" id=\"sizing-addon3\">@</span>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"sizing-addon3\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!--Input Groups Sizing Ends-->\r\n\r\n    <!--Checkboxes addons Starts-->\r\n    <section id=\"checkbox-radio\">\r\n        <div class=\"row match-height\">\r\n            <div class=\"col-md-12 col-lg-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">Checkboxes addons</h4>\r\n                        <p>Place any checkbox option within an input group's addon instead of text.</p>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                    <div class=\"row-action-primary\">\r\n                                        <label class=\"custom-control custom-checkbox mr-0 mb-0\">\r\n                                            <input type=\"checkbox\" class=\"custom-control-input\" checked>\r\n                                            <span class=\"custom-control-indicator\"></span>\r\n                                        </label>\r\n                                    </div>\r\n                                </span>\r\n                                <input type=\"text\" class=\"form-control\">\r\n                            </div><!-- /input-group -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12 col-lg-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">Radio addons</h4>\r\n                        <p>Place any radio option within an input group's addon instead of text.</p>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                    <div class=\"row-action-primary\">\r\n                                        <label class=\"custom-control custom-radio mr-0 mb-0\">\r\n                                            <input type=\"radio\" class=\"custom-control-input\">\r\n                                            <span class=\"custom-control-indicator\"></span>\r\n                                        </label>\r\n                                    </div>\r\n                                </span>\r\n                                <input type=\"text\" class=\"form-control\">\r\n                            </div><!-- /input-group -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!--Checkboxes addons Ends-->\r\n\r\n    <!--Button addons Starts-->\r\n    <section id=\"buttons-addons\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">Button addons</h4>\r\n                        <p>Buttons in input groups are a bit different and require one extra level of nesting. Instead of <code>.input-group-addon</code>, you'll need to use <code>.input-group-btn</code> to wrap the buttons. This is required due to default browser styles that cannot be overridden.</p>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-btn\">\r\n                                            <button class=\"btn btn-outline-primary\" type=\"button\">Go!</button>\r\n                                        </span>\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\r\n                                    </div><!-- /input-group -->\r\n                                </div><!-- /.col-lg-6 -->\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\r\n                                        <span class=\"input-group-btn\">\r\n                                            <button class=\"btn btn-raised btn-primary\" type=\"button\">Go!</button>\r\n                                        </span>\r\n                                    </div><!-- /input-group -->\r\n                                </div><!-- /.col-lg-6 -->\r\n                            </div><!-- /.row -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!--Button addons Ends-->\r\n\r\n    <!--Buttons with dropdowns Starts-->\r\n    <section id=\"buttons-dropdown\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">Buttons with dropdowns</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                        <span ngbDropdown>\r\n                                            <button class=\"btn btn-outline-danger btn-raised\" id=\"dropdownBasic2\" ngbDropdownToggle>Action</button>\r\n                                            <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic2\">\r\n                                                <button class=\"dropdown-item\">Action</button>\r\n                                                <button class=\"dropdown-item\">Another Action</button>\r\n                                                <button class=\"dropdown-item\">Something else is here</button>\r\n                                            </div>\r\n                                        </span>\r\n                                    </div><!-- /input-group -->\r\n                                </div><!-- /.col-lg-6 -->\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <span ngbDropdown>\r\n                                            <button class=\"btn btn-success btn-raised\" id=\"dropdownBasic2\" ngbDropdownToggle>Action</button>\r\n                                            <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic2\">\r\n                                                <button class=\"dropdown-item\">Action</button>\r\n                                                <button class=\"dropdown-item\">Another Action</button>\r\n                                                <button class=\"dropdown-item\">Something else is here</button>\r\n                                            </div>\r\n                                        </span>\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div><!-- /input-group -->\r\n                                </div><!-- /.col-lg-6 -->\r\n                            </div><!-- /.row -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!--Buttons with dropdowns Ends-->\r\n\r\n    <!--Multiple buttons Starts-->\r\n    <section id=\"multiple-buttons\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">Multiple buttons</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <div class=\"input-group-btn\">\r\n                                            <button type=\"button\" class=\"btn btn-raised btn-success\" aria-label=\"Add\">\r\n                                                <i class=\"ft-plus\"></i>\r\n                                            </button>\r\n                                            <button type=\"button\" class=\"btn btn-raised btn-danger\" aria-label=\"Edit\">\r\n                                                <i class=\"ft-edit-2\"></i>\r\n                                            </button>\r\n                                        </div>\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                        <div class=\"input-group-btn\">\r\n                                            <button type=\"button\" class=\"btn btn-raised btn-warning\" aria-label=\"Copy\">\r\n                                                <i class=\"ft-copy\"></i>\r\n                                            </button>\r\n                                            <button type=\"button\" class=\"btn btn-raised btn-info\" aria-label=\"Paste\">\r\n                                                <i class=\"icon-docs\"></i>\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!--Multiple buttons Ends-->\r\n</section>\r\n<!--Input Group Ends-->"

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/input-groups/input-groups.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/input-groups/input-groups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputGroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InputGroupsComponent = (function () {
    function InputGroupsComponent() {
    }
    InputGroupsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-input-groups',
            template: __webpack_require__("../../../../../src/app/components/bootstrap/input-groups/input-groups.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bootstrap/input-groups/input-groups.component.scss")]
        })
    ], InputGroupsComponent);
    return InputGroupsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bootstrap/lists/lists.component.html":
/***/ (function(module, exports) {

module.exports = "<!--List Group starts-->\r\n<section id=\"list\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">List</div>\r\n            <p class=\"content-sub-header\">List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Basic List Group Starts-->\r\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Basic example</h4>\r\n                    <p>The most basic list group is simply an unordered list with list items, and the proper classes. </p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item\">Cras justo odio</li>\r\n                            <li class=\"list-group-item\">Dapibus ac facilisis in</li>\r\n                            <li class=\"list-group-item\">Morbi leo risus</li>\r\n                            <li class=\"list-group-item\">Porta ac consectetur ac</li>\r\n                            <li class=\"list-group-item\">Vestibulum at eros</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Basic List Group Ends-->\r\n\r\n        <!--List Group with badges Starts-->\r\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Badges</h4>\r\n                    <p>Add the badges component to any list group item and it will automatically be positioned on the right.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item\">\r\n                                <span class=\"badge badge-primary mr-2\">7</span> Cras justo odio\r\n                            </li>\r\n                            <li class=\"list-group-item\">\r\n                                <span class=\"badge badge-danger mr-2\">2</span> Dapibus ac facilisis in\r\n                            </li>\r\n                            <li class=\"list-group-item\">\r\n                                <span class=\"badge badge-success mr-2\">1</span> Morbi leo risus\r\n                            </li>\r\n                            <li class=\"list-group-item\">\r\n                                <span class=\"badge badge-warning mr-2\">4</span> Porta ac consectetur ac\r\n                            </li>\r\n                            <li class=\"list-group-item\">\r\n                                <span class=\"badge badge-info mr-2\">8</span> Vestibulum at eros\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--List Group with badges Ends-->\r\n        \r\n        <!--List Group with Linked items Starts-->\r\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Linked items</h4>\r\n                    <p>Linkify list group items by using anchor tags instead of list items. No need for individual parents around each element.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item active\">Cras justo odio</li>\r\n                            <li class=\"list-group-item\">Dapibus ac facilisis in</li>\r\n                            <li class=\"list-group-item\">Morbi leo risus</li>\r\n                            <li class=\"list-group-item\">Porta ac consectetur ac</li>\r\n                            <li class=\"list-group-item\">Vestibulum at eros</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--List Group with Linked items Ends-->\r\n    \r\n        <!--List Group with Button items Starts-->\r\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Button items</h4>\r\n                    <p>List group items may be buttons instead of list items. No need for individual parents around each element. <b>Don't use the standard <code>.btn</code> classes here.</b></p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"list-group\">\r\n                            <button type=\"button\" class=\"list-group-item\">Cras justo odio</button>\r\n                            <button type=\"button\" class=\"list-group-item\">Dapibus ac facilisis in</button>\r\n                            <button type=\"button\" class=\"list-group-item\">Morbi leo risus</button>\r\n                            <button type=\"button\" class=\"list-group-item\">Porta ac consectetur ac</button>\r\n                            <button type=\"button\" class=\"list-group-item\">Vestibulum at eros</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--List Group with Button items Ends-->\r\n\r\n        <!--List Group with Disabled list items Starts-->\r\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Disabled items</h4>\r\n                    <p>Add <code>.disabled</code> to a <code>.list-group-item</code> to gray it out to appear disabled.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item disabled\">Cras justo odio</li>\r\n                            <li class=\"list-group-item\">Dapibus ac facilisis in</li>\r\n                            <li class=\"list-group-item\">Morbi leo risus</li>\r\n                            <li class=\"list-group-item\">Porta ac consectetur ac</li>\r\n                            <li class=\"list-group-item\">Vestibulum at eros</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--List Group with Disabled list items Ends-->\r\n\r\n        <!--Contextual classes Starts-->\r\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Contextual classes</h4>\r\n                    <p>Use contextual classes to style list items, default or linked. Also includes <code>.active</code> state.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item list-group-item-primary\">Porta ac consectetur ac</li>\r\n                            <li class=\"list-group-item list-group-item-success\">Dapibus ac facilisis in</li>\r\n                            <li class=\"list-group-item list-group-item-info\">Cras sit amet nibh libero</li>\r\n                            <li class=\"list-group-item list-group-item-warning\">Porta ac consectetur ac</li>\r\n                            <li class=\"list-group-item list-group-item-danger\">Vestibulum at eros</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Contextual classes Ends-->\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Custom content Starts-->\r\n        <div class=\"col-sm-12 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Custom content</h4>\r\n                    <p>Add nearly any HTML within, even for linked list groups like the one below.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item list-group-item-action flex-column align-items-start active\">\r\n                                <div class=\"d-flex w-100 justify-content-between\">\r\n                                <h5 class=\"mb-3\">List group item heading</h5>\r\n                                <small>3 days ago</small>\r\n                                </div>\r\n                                <p class=\"mb-3\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\r\n                                <small>Donec id elit non mi porta.</small>\r\n                            </li>\r\n                            <li class=\"list-group-item list-group-item-action flex-column align-items-start\">\r\n                                <div class=\"d-flex w-100 justify-content-between\">\r\n                                <h5 class=\"mb-3\">List group item heading</h5>\r\n                                <small class=\"text-muted\">3 days ago</small>\r\n                                </div>\r\n                                <p class=\"mb-3\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\r\n                                <small class=\"text-muted\">Donec id elit non mi porta.</small>\r\n                            </li>\r\n                            <li class=\"list-group-item list-group-item-action flex-column align-items-start\">\r\n                                <div class=\"d-flex w-100 justify-content-between\">\r\n                                <h5 class=\"mb-3\">List group item heading</h5>\r\n                                <small class=\"text-muted\">3 days ago</small>\r\n                                </div>\r\n                                <p class=\"mb-3\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\r\n                                <small class=\"text-muted\">Donec id elit non mi porta.</small>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>        \r\n        </div>\r\n        <!--Custom content Ends-->\r\n\r\n        <!--Contextual Action Starts-->\r\n        <div class=\"col-sm-12 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Contextual Action</h4>\r\n                    <p>Contextual classes also work with <code>.list-group-item-action</code>.Also supported is the <code>.active</code> state; apply it to indicate an active selection on a contextual list group item.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item list-group-item-action\">Dapibus ac facilisis in</li>\r\n                            <li class=\"list-group-item list-group-item-action list-group-item-primary\">This is a primary list group item</li>\r\n                            <li class=\"list-group-item list-group-item-action list-group-item-secondary\">This is a secondary list group item</li>\r\n                            <li class=\"list-group-item list-group-item-action list-group-item-success\">This is a success list group item</li>\r\n                            <li class=\"list-group-item list-group-item-action list-group-item-danger\">This is a danger list group item</li>\r\n                            <li class=\"list-group-item list-group-item-action list-group-item-warning\">This is a warning list group item</li>\r\n                            <li class=\"list-group-item list-group-item-action list-group-item-info\">This is a info list group item</li>\r\n                            <li class=\"list-group-item list-group-item-action list-group-item-light\">This is a light list group item</li>\r\n                            <li class=\"list-group-item list-group-item-action list-group-item-dark\">This is a dark list group item</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Contextual Action Starts-->        \r\n    </div>\r\n</section>\r\n<!--List Group starts-->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/lists/lists.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/lists/lists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ListsComponent = (function () {
    function ListsComponent() {
    }
    ListsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lists',
            template: __webpack_require__("../../../../../src/app/components/bootstrap/lists/lists.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bootstrap/lists/lists.component.scss")]
        })
    ], ListsComponent);
    return ListsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bootstrap/media-objects/media-objects.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Media Object start -->\r\n<section id=\"bordered-media-object d-flex mr-3\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"content-header\">Media object</div>\r\n\t\t\t<p class=\"content-sub-header\">Abstract object styles for building various types of components that feature a left- or right-aligned image alongside\r\n\t\t\t\ttextual content.</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\" matchHeight =\"card\">\r\n\t\t<!--Left Aligned Media Starts-->\r\n\t\t<div class=\"col-md-12 col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Left media</h4>\r\n\t\t\t\t\t<p>Default media element to left of the content.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t<a> \r\n\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-12.png\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Media heading</h4>\r\n\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,\r\n\t\t\t\t\t\t\t\t\tvestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia\r\n\t\t\t\t\t\t\t\t\tcongue felis in faucibus. </p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t<a> \r\n\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-11.png\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Media heading</h4>\r\n\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,\r\n\t\t\t\t\t\t\t\t\tvestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia\r\n\t\t\t\t\t\t\t\t\tcongue felis in faucibus. </p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t<a> \r\n\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-3.png\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Media heading</h4>\r\n\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,\r\n\t\t\t\t\t\t\t\t\tvestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia\r\n\t\t\t\t\t\t\t\t\tcongue felis in faucibus. </p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Left Aligned Media Ends-->\r\n\r\n\t\t<!--Right Aligned Media Starts-->\r\n\t\t<div class=\"col-md-12 col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Right media</h4>\r\n\t\t\t\t\t<p>switch image to right of the content.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Media heading</h4>\r\n\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,\r\n\t\t\t\t\t\t\t\t\tvestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia\r\n\t\t\t\t\t\t\t\t\tcongue felis in faucibus. </p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a> \r\n\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-18.png\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Media heading</h4>\r\n\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,\r\n\t\t\t\t\t\t\t\t\tvestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia\r\n\t\t\t\t\t\t\t\t\tcongue felis in faucibus. </p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a> \r\n\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-7.png\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Media heading</h4>\r\n\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,\r\n\t\t\t\t\t\t\t\t\tvestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia\r\n\t\t\t\t\t\t\t\t\tcongue felis in faucibus. </p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-14.png\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Right Aligned Media Ends-->\r\n\t</div>\r\n\t<div class=\"row\" matchHeight =\"card\">\r\n\t\t<!--Left Media With Right Text Starts-->\r\n\t\t<div class=\"col-md-12 col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Left Media With Right Text</h4>\r\n\t\t\t\t\t<p>Use <code>.text-right</code> class to the content.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<div class=\"media-list\">\r\n\t\t\t\t\t\t\t<div class=\"media pb-3\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-13.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Oat cake </h4>\r\n\t\t\t\t\t\t\t\t\t<p>Oat cake topping oat cake jelly soufflé donut jelly-o tootsie roll. Candy sweet cake. Tiramisu cookie toffee donut.\r\n\t\t\t\t\t\t\t\t\t\tChocolate pie croissant gummi bears muffin dessert.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media pb-3\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-6.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Jelly chocolate cake</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Jelly chocolate cake lemon drops halvah dragée caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame snaps.Jelly\r\n\t\t\t\t\t\t\t\t\t\tbeans cake chocolate cake gummi bears lollipop.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media pb-3\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-18.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Pudding marshmallow</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Pudding marshmallow cheesecake. Chocolate cake apple pie jelly-o bear claw ice cream sugar plum biscuit. Lemon drops\r\n\t\t\t\t\t\t\t\t\t\tbrownie biscuit jelly-o biscuit gummies.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Left Media With Right Text Ends-->\r\n\r\n\t\t<!--Right Media With Right Text Starts-->\r\n\t\t<div class=\"col-md-12 col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Right media With Right Text</h4>\r\n\t\t\t\t\t<p>Use <code>.text-right</code>to the content for right align text.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<div class=\"media-list\">\r\n\t\t\t\t\t\t\t<div class=\"media pb-3\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Chupa chups candy</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Oat cake topping oat cake jelly soufflé donut jelly-o tootsie roll. Candy sweet cake. Tiramisu cookie toffee donut.\r\n\t\t\t\t\t\t\t\t\t\tChocolate pie croissant gummi bears muffin dessert.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-3.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media pb-3\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Chocolate pudding</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Jelly chocolate cake lemon drops halvah dragée caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame snaps.Jelly\r\n\t\t\t\t\t\t\t\t\t\tbeans cake chocolate cake gummi bears lollipop.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-9.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media pb-3\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Cotton candy jelly</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Pudding marshmallow cheesecake. Chocolate cake apple pie jelly-o bear claw ice cream sugar plum biscuit. Lemon drops\r\n\t\t\t\t\t\t\t\t\t\tbrownie biscuit jelly-o biscuit gummies.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-8.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Right Media With Right Text Ends-->\r\n\t</div>\r\n</section>\r\n<!-- Media Object end -->\r\n\r\n<!-- Bordered Media Object start -->\r\n<section id=\"bordered-media-object d-flex mr-3\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"content-header\">Bordered Media Object</div>\r\n\t\t\t<p class=\"content-sub-header\">Wrap media list using <code>.media-bordered</code> class for bordered Media Object.</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\" matchHeight =\"card\">\r\n\t\t<!--Left Aligned Media Bordered Starts-->\r\n\t\t<div class=\"col-md-12 col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Left Aligned Media Bordered</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<div class=\"media-list media-bordered\">\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-18.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Cookie candy</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Cookie candy dragée marzipan gingerbread pie pudding. Brownie fruitcake wafer bonbon gummi bears apple pie. Brownie\r\n\t\t\t\t\t\t\t\t\t\tlemon drops chocolate cake donut croissant candy.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media pt-4\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-9.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Tootsie roll dessert </h4>\r\n\t\t\t\t\t\t\t\t\t<p>Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah. Biscuit\r\n\t\t\t\t\t\t\t\t\t\ticing pastry tootsie roll gingerbread croissant chupa chups. </p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media pt-4\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-3.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Lemon drops ice cream</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Lemon drops ice cream chocolate cake marzipan ice cream. Gummi bears cotton candy cheesecake tootsie roll. Candy\r\n\t\t\t\t\t\t\t\t\t\tsweet cake. Tiramisu cookie toffee donut.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Left Aligned Media Bordered Ends-->\r\n\r\n\t\t<!--Right Aligned Media Bordered Starts-->\r\n\t\t<div class=\"col-md-12 col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Bordered Media</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<div class=\"media-list media-bordered\">\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Chupa chups candy</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Oat cake topping oat cake jelly soufflé donut jelly-o tootsie roll. Candy sweet cake. Tiramisu cookie toffee donut.\r\n\t\t\t\t\t\t\t\t\t\tChocolate pie croissant gummi bears muffin chocolate.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-11.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media pt-4\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Chocolate pudding</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Jelly chocolate cake lemon drops halvah dragée caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame snaps.Jelly\r\n\t\t\t\t\t\t\t\t\t\tbeans cake chocolate cake gummi bears lollipop.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-14.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media pt-4\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Cotton candy jelly</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Pudding marshmallow cheesecake. Chocolate cake apple pie jelly-o bear claw ice cream sugar plum biscuit. Lemon drops\r\n\t\t\t\t\t\t\t\t\t\tbrownie biscuit jelly-o biscuit gummies.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-12.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Right Aligned Media Bordered Ends-->\r\n\t</div>\r\n</section>\r\n<!-- Bordered Media Object end -->\r\n\r\n\r\n<!-- Round Media Object start -->\r\n<section id=\"round-media-object\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"content-header\">Round Media Object</div>\r\n\t\t\t<p class=\"content-sub-header\">Add <code>.round-media</code> class to image for round media object.</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\" matchHeight =\"card\">\r\n\t\t<!--Left Round Media Starts-->\r\n\t\t<div class=\"col-md-12 col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Left Round Media Objects</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<div class=\"media-list\">\r\n\t\t\t\t\t\t\t<div class=\"media pb-3\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 round-media\" src=\"assets/img/portrait/small/avatar-s-14.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Cookie candy</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Cookie candy dragée marzipan gingerbread pie pudding. Brownie fruitcake wafer bonbon gummi bears apple pie. Brownie\r\n\t\t\t\t\t\t\t\t\t\tlemon drops chocolate cake donut croissant candy.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media pb-3\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 round-media\" src=\"assets/img/portrait/small/avatar-s-7.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Tootsie roll dessert </h4>\r\n\t\t\t\t\t\t\t\t\t<p>Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah. Biscuit\r\n\t\t\t\t\t\t\t\t\t\ticing pastry tootsie roll gingerbread croissant chupa chups. </p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 round-media\" src=\"assets/img/portrait/small/avatar-s-24.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Lemon drops ice cream</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Lemon drops ice cream chocolate cake marzipan ice cream. Gummi bears cotton candy cheesecake tootsie roll. Candy\r\n\t\t\t\t\t\t\t\t\t\tsweet cake. Tiramisu cookie toffee donut.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Left Round Media Ends-->\r\n\r\n\t\t<!--Right Round Media Starts-->\r\n\t\t<div class=\"col-md-12 col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Right Round Media</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<div class=\"media-list\">\r\n\t\t\t\t\t\t\t<div class=\"media pb-3\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Oat cake </h4>\r\n\t\t\t\t\t\t\t\t\t<p>Oat cake topping oat cake jelly soufflé donut jelly-o tootsie roll. Candy sweet cake. Tiramisu cookie toffee donut.\r\n\t\t\t\t\t\t\t\t\t\tChocolate pie croissant gummi bears muffin chocolate.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 round-media\" src=\"assets/img/portrait/small/avatar-s-13.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media pb-3\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Jelly chocolate cake</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Jelly chocolate cake lemon drops halvah dragée caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame snaps.Jelly\r\n\t\t\t\t\t\t\t\t\t\tbeans cake chocolate cake gummi bears lollipop.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 round-media\" src=\"assets/img/portrait/small/avatar-s-6.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Pudding marshmallow</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Pudding marshmallow cheesecake. Chocolate cake apple pie jelly-o bear claw ice cream sugar plum biscuit. Lemon drops\r\n\t\t\t\t\t\t\t\t\t\tbrownie biscuit jelly-o biscuit gummies.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 round-media\" src=\"assets/img/portrait/small/avatar-s-18.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Right Round Media Ends-->\r\n\t</div>\r\n</section>\r\n<!-- Round Media Object end -->\r\n\r\n\r\n<!-- Bordered Round Media Object start -->\r\n<section id=\"bordered-round-media-object d-flex mr-3\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"content-header\">Bordered Round Media Object</div>\r\n\t\t\t<p class=\"content-sub-header\">Wrap media list using <code>.media-bordered</code> class for bordered Media Object.</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\" matchHeight =\"card\">\r\n\t\t<!--Bordered Right Round Media Starts-->\r\n\t\t<div class=\"col-md-12 col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Bordered Round Media Objects</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<div class=\"media-list media-bordered\">\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 round-media\" src=\"assets/img/portrait/small/avatar-s-24.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Cookie candy</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Cookie candy dragée marzipan gingerbread pie pudding. Brownie fruitcake wafer bonbon gummi bears apple pie. Brownie\r\n\t\t\t\t\t\t\t\t\t\tlemon drops chocolate cake donut croissant candy.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 round-media\" src=\"assets/img/portrait/small/avatar-s-9.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Tootsie roll dessert </h4>\r\n\t\t\t\t\t\t\t\t\t<p>Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah. Biscuit\r\n\t\t\t\t\t\t\t\t\t\ticing pastry tootsie roll gingerbread croissant chupa chups. </p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 round-media\" src=\"assets/img/portrait/small/avatar-s-18.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Lemon drops ice cream</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Lemon drops ice cream chocolate cake marzipan ice cream. Gummi bears cotton candy cheesecake tootsie roll. Candy\r\n\t\t\t\t\t\t\t\t\t\tsweet cake. Tiramisu cookie toffee donut.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Bordered Right Round Media Starts-->\r\n\r\n\t\t<!--Bordered Round Media With Right Align Starts-->\r\n\t\t<div class=\"col-md-12 col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Bordered Round Media With Right Align</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<div class=\"media-list media-bordered\">\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Oat cake </h4>\r\n\t\t\t\t\t\t\t\t\t<p>Oat cake topping oat cake jelly soufflé donut jelly-o tootsie roll. Candy sweet cake. Tiramisu cookie toffee donut.\r\n\t\t\t\t\t\t\t\t\t\tChocolate pie croissant gummi bears muffin chocolate.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 round-media\" src=\"assets/img/portrait/small/avatar-s-7.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Jelly chocolate cake</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Jelly chocolate cake lemon drops halvah dragée caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame snaps.Jelly\r\n\t\t\t\t\t\t\t\t\t\tbeans cake chocolate cake gummi bears lollipop.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 round-media\" src=\"assets/img/portrait/small/avatar-s-8.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Pudding marshmallow</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Pudding marshmallow cheesecake. Chocolate cake apple pie jelly-o bear claw ice cream sugar plum biscuit. Lemon drops\r\n\t\t\t\t\t\t\t\t\t\tbrownie biscuit jelly-o biscuit gummies.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 round-media\" src=\"assets/img/portrait/small/avatar-s-6.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Bordered Round Media With Right Align Ends-->\r\n\t</div>\r\n</section>\r\n<!-- Bordered Round Media Object end -->\r\n\r\n<!-- Media List start -->\r\n<section id=\"media-list\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"content-header\">Nested Media list</div>\r\n\t\t\t<p class=\"content-sub-header\">With a bit of extra markup, you can use media inside list (useful for comment threads or articles lists).</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\" matchHeight =\"card\">\r\n\t\t<!--Media Aligned Left Starts-->\r\n\t\t<div class=\"col-lg-12 col-xl-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Media Aligned Left</h4>\r\n\t\t\t\t\t<p>With a bit of extra markup, you can use media inside list (useful for comment threads or articles lists).</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<ul class=\"media-list media-bordered pl-0\">\r\n\t\t\t\t\t\t\t<li class=\"media\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" data-src=\"holder.js/96x96\" src=\"assets/img/portrait/small/avatar-s-8.png\" data-holder-rendered=\"true\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Media heading</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,\r\n\t\t\t\t\t\t\t\t\t\tvestibulum in vulputate at, tempus viverra turpis.Candy biscuit sweet roll pudding topping candy canes jujubes\r\n\t\t\t\t\t\t\t\t\t\tlemon drops jelly-o.</p>\r\n\t\t\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" data-src=\"holder.js/96x96\" src=\"assets/img/portrait/small/avatar-s-7.png\" data-holder-rendered=\"true\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Nested media heading</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus\r\n\t\t\t\t\t\t\t\t\t\t\t\todio, vestibulum in vulputate at, tempus viverra turpis.Candy biscuit sweet roll pudding topping candy canes\r\n\t\t\t\t\t\t\t\t\t\t\t\tjujubes lemon drops jelly-o. </p>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" data-src=\"holder.js/96x96\" src=\"assets/img/portrait/small/avatar-s-12.png\" data-holder-rendered=\"true\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Nested media heading</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\todio, vestibulum in vulputate at, tempus viverra turpis.Candy biscuit sweet roll pudding topping candy canes\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tjujubes lemon drops jelly-o.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" data-src=\"holder.js/96x96\" src=\"assets/img/portrait/small/avatar-s-6.png\" data-holder-rendered=\"true\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Nested media heading</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus\r\n\t\t\t\t\t\t\t\t\t\t\t\todio, vestibulum in vulputate at, tempus viverra turpis.Candy biscuit sweet roll pudding topping candy canes\r\n\t\t\t\t\t\t\t\t\t\t\t\tjujubes lemon drops jelly-o. </p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"media\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" data-src=\"holder.js/96x96\" src=\"assets/img/portrait/small/avatar-s-24.png\" data-holder-rendered=\"true\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Nested media heading</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,\r\n\t\t\t\t\t\t\t\t\t\tvestibulum in vulputate at, tempus viverra turpis.Candy biscuit sweet roll pudding topping candy canes jujubes\r\n\t\t\t\t\t\t\t\t\t\tlemon drops jelly-o.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Media Aligned Left Ends-->\r\n\r\n\t\t<!--Media Aligned Right Starts-->\r\n\t\t<div class=\"col-lg-12 col-xl-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Media Aligned Right</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<ul class=\"media-list media-bordered pl-0\">\r\n\t\t\t\t\t\t\t<li class=\"media\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Media heading</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,\r\n\t\t\t\t\t\t\t\t\t\tvestibulum in vulputate at, tempus viverra turpis.Candy biscuit sweet roll pudding topping candy canes jujubes\r\n\t\t\t\t\t\t\t\t\t\tlemon drops jelly-o.</p>\r\n\t\t\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Nested media heading</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus\r\n\t\t\t\t\t\t\t\t\t\t\t\todio, vestibulum in vulputate at, tempus viverra turpis.Candy biscuit sweet roll pudding topping candy canes\r\n\t\t\t\t\t\t\t\t\t\t\t\tjujubes lemon drops jelly-o.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Nested media heading</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\todio, vestibulum in vulputate at, tempus viverra turpis.Candy biscuit sweet roll pudding topping candy canes\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tjujubes lemon drops jelly-o.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" data-src=\"holder.js/96x96\" src=\"assets/img/portrait/small/avatar-s-9.png\" data-holder-rendered=\"true\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" data-src=\"holder.js/96x96\" src=\"assets/img/portrait/small/avatar-s-11.png\" data-holder-rendered=\"true\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Nested media heading</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus\r\n\t\t\t\t\t\t\t\t\t\t\t\todio, vestibulum in vulputate at, tempus viverra turpis.Candy biscuit sweet roll pudding topping candy canes\r\n\t\t\t\t\t\t\t\t\t\t\t\tjujubes lemon drops jelly-o.</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" data-src=\"holder.js/96x96\" src=\"assets/img/portrait/small/avatar-s-13.png\" data-holder-rendered=\"true\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" data-src=\"holder.js/96x96\" src=\"assets/img/portrait/small/avatar-s-18.png\" data-holder-rendered=\"true\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"media\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Nested media heading</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,\r\n\t\t\t\t\t\t\t\t\t\tvestibulum in vulputate at, tempus viverra turpis.Candy biscuit sweet roll pudding topping candy canes jujubes\r\n\t\t\t\t\t\t\t\t\t\tlemon drops jelly-o.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" data-src=\"holder.js/96x96\" src=\"assets/img/portrait/small/avatar-s-12.png\" data-holder-rendered=\"true\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Media Aligned Right Ends-->\r\n\t</div>\r\n</section>\r\n<!-- Media List end -->\r\n\r\n<!-- Media Alignment start -->\r\n<section id=\"media-alignment\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"content-header\">Media Alignment</div>\r\n\t\t\t<p class=\"content-sub-header\">The images or other media can be aligned top, middle, or bottom. The default is top aligned.<br> Now, for vertical align,\r\n\t\t\t\tTop alignment use <code>.align-self-start</code> class. For Middle alignment, use <code>.align-self-center</code> and\r\n\t\t\t\tFor Bottom alignment, use <code>.align-self-end</code> with left or right aligned class.</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\" matchHeight =\"card\">\r\n\t\t<!--Left Media vertical Aligned Starts-->\r\n\t\t<div class=\"col-md-12 col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Media Aligned Left</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<div class=\"media-list media-bordered\">\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<a class=\"align-self-start\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-4.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Top Aligned Media</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Chocolate bar apple pie lollipop pastry candy canes. Candy soufflé brownie toffee tootsie roll. Brownie lemon drops\r\n\t\t\t\t\t\t\t\t\t\tchocolate cake donut croissant cotton candy ice cream. Cookie caramels brownie carrot cake macaroon brownie pastry.\r\n\t\t\t\t\t\t\t\t\t\tDonut powder croissant tootsie roll cake cupcake. Cake tart icing jelly-o ice cream tootsie roll bear claw toffee\r\n\t\t\t\t\t\t\t\t\t\tbrownie. Sugar plum danish muffin gummi bears.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<a class=\"align-self-center\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-12.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Middle Aligned Media</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Dragée topping chocolate dragée icing gingerbread. Ice cream jujubes pie sweet roll sweet roll marshmallow powder.\r\n\t\t\t\t\t\t\t\t\t\tCotton candy dessert apple pie chocolate cake dessert lemon drops topping gingerbread biscuit. Topping halvah wafer\r\n\t\t\t\t\t\t\t\t\t\tcroissant jelly tootsie roll. Candy jujubes gummi bears sweet roll dessert. Apple pie jelly gummies tiramisu macaroon\r\n\t\t\t\t\t\t\t\t\t\ttiramisu oat cake. Apple pie tiramisu cake chocolate cake topping danish sweet apple pie sugar plum.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<a class=\"align-self-end\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-19.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Bottom Aligned Media</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Sweet sesame snaps dragée chocolate tiramisu cotton candy sweet roll bonbon dessert. Chocolate cake tiramisu dragée.\r\n\t\t\t\t\t\t\t\t\t\tCarrot cake pudding marshmallow fruitcake carrot cake. Brownie cupcake bonbon sweet lemon drops. Lollipop danish\r\n\t\t\t\t\t\t\t\t\t\tjelly beans cotton candy marshmallow brownie. Brownie pastry tiramisu candy oat cake tiramisu halvah cookie tart.\r\n\t\t\t\t\t\t\t\t\t\tCotton candy danish gingerbread powder liquorice.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Left Media vertical Aligned Ends-->\r\n\r\n\t\t<!--Right Media vertical Aligned Starts-->\r\n\t\t<div class=\"col-md-12 col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Right Aligned Media</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<div class=\"media-list media-bordered\">\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Top Aligned Media</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Gummi bears marshmallow sweet roll. Chocolate bar halvah candy tart tart chocolate tart muffin. Cheesecake chocolate\r\n\t\t\t\t\t\t\t\t\t\tbar gummi bears. Cookie topping chocolate biscuit jujubes. Cheesecake muffin danish candy chocolate sweet roll\r\n\t\t\t\t\t\t\t\t\t\tcandy jelly powder. Chocolate marzipan dragée. Biscuit oat cake jelly beans brownie donut ice cream biscuit. Soufflé\r\n\t\t\t\t\t\t\t\t\t\tsoufflé dessert cotton candy chupa chups lemon drops. </p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a class=\"align-self-start\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-11.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Middle Aligned Media</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Powder jelly topping pastry chocolate icing bonbon powder. Lollipop brownie sugar plum sugar plum carrot cake donut.\r\n\t\t\t\t\t\t\t\t\t\tPastry sugar plum apple pie sesame snaps. Tart brownie gummi bears pie cheesecake cake. Tootsie roll lemon drops\r\n\t\t\t\t\t\t\t\t\t\toat cake muffin danish halvah cookie chocolate croissant. Apple pie oat cake liquorice sesame snaps. Jelly-o jelly-o\r\n\t\t\t\t\t\t\t\t\t\tdragée topping. Sugar plum danish muffin gummi bears.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a class=\"align-self-center\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-9.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Bottom Aligned Media</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Ice cream lemon drops marshmallow sweet carrot cake marshmallow candy macaroon cupcake. Tart carrot cake fruitcake.\r\n\t\t\t\t\t\t\t\t\t\tMarzipan liquorice gummies oat cake. Danish jelly beans dessert sweet roll chupa chups candy canes gummies jujubes\r\n\t\t\t\t\t\t\t\t\t\tsoufflé. Cheesecake sweet roll candy muffin halvah dessert candy soufflé. Donut cupcake caramels pastry.Candy carrot\r\n\t\t\t\t\t\t\t\t\t\tcake liquorice chocolate bar gummi bears brownie donut. </p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a class=\"align-self-end\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-24.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Right Media vertical Aligned Ends-->\r\n\t</div>\r\n</section>\r\n<!-- Media Alignment ends -->"

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/media-objects/media-objects.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/media-objects/media-objects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaObjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MediaObjectsComponent = (function () {
    function MediaObjectsComponent() {
    }
    MediaObjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-media-objects',
            template: __webpack_require__("../../../../../src/app/components/bootstrap/media-objects/media-objects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bootstrap/media-objects/media-objects.component.scss")]
        })
    ], MediaObjectsComponent);
    return MediaObjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bootstrap/modals/modals.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Modal starts-->\r\n<section id=\"modals\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Modals</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Modal with Default options starts-->\r\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Modal with Default options</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n                            <div class=\"modal-header\">\r\n                                <h4 class=\"modal-title\">Modal title</h4>\r\n                                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                                <span aria-hidden=\"true\">&times;</span>\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"modal-body\">\r\n                                <p>One fine body&hellip;</p>\r\n                            </div>\r\n                            <div class=\"modal-footer\">\r\n                                <button type=\"button\" class=\"btn btn-secondary btn-raised\" (click)=\"c('Close click')\">Close</button>\r\n                            </div>\r\n                        </ng-template>\r\n\r\n                        <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Launch demo modal</button>\r\n\r\n                        <hr>\r\n                        <p>Action : {{closeResult}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Modal with Default options ends-->\r\n        \r\n        <!--Components as content starts-->\r\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Components as content</h4>\r\n                    <p>You can pass an existing component as content of the modal window. In this case remember to add content component as an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <button class=\"btn btn-lg btn-outline-primary\" (click)=\"openContent()\">Launch demo modal</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Components as content ends-->\r\n        \r\n        <!--Modal with custom class starts-->\r\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Modal with custom class</h4>\r\n                    <p>With some style and dark window modal.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <ng-template #customContent let-c=\"close\" let-d=\"dismiss\">\r\n                        <div class=\"modal-header\">\r\n                            <h4 class=\"modal-title\">Modal title</h4>\r\n                            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            <p>Find me here</p>\r\n                        </div>\r\n                        <div class=\"modal-footer\">\r\n                            <button type=\"button\" class=\"btn btn-secondary btn-raised\" (click)=\"c('Close click')\">Close</button>\r\n                        </div>\r\n                        </ng-template>\r\n                        <button class=\"btn btn-lg btn-outline-primary\" (click)=\"openModal(customContent)\">Launch demo modal</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Modal with custom class ends-->\r\n    </div>\r\n</section>\r\n<!--Modal ends-->"

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/modals/modals.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dark-modal .modal-content {\n  background-color: #292b2c;\n  color: white; }\n\n.dark-modal .close {\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/modals/modals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalContent = (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    NgbdModalContent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngbd-modal-content',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Hi there!</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Hello, {{name}}!</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary btn-raised\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var ModalsComponent = (function () {
    function ModalsComponent(modalService) {
        this.modalService = modalService;
    }
    // Open default modal
    ModalsComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // This function is used in open
    ModalsComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    // Open modal with dark section
    ModalsComponent.prototype.openModal = function (customContent) {
        this.modalService.open(customContent, { windowClass: 'dark-modal' });
    };
    // Open content with dark section
    ModalsComponent.prototype.openContent = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    ModalsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modals',
            template: __webpack_require__("../../../../../src/app/components/bootstrap/modals/modals.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bootstrap/modals/modals.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["d" /* NgbModal */]])
    ], ModalsComponent);
    return ModalsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bootstrap/ng-buttons/ng-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"ng-buttons\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 mt-2\">\r\n            <div class=\"content-header\">Ngb-Buttons</div>\r\n            <p class=\"content-sub-header\">Easily create Bootstrap-style checkbox buttons. A value of a checked button is bound to a variable specified\r\n                via <code>ngModel</code>.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Checkbox ng-buttons Starts-->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Checkbox buttons</h4>\r\n                    <p>Easily create Bootstrap-style checkbox buttons.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"btn-group\" data-toggle=\"buttons\">\r\n                            <label class=\"btn-raised btn-primary\" ngbButtonLabel>\r\n                                <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.left\"> Left (pre-checked)\r\n                            </label>\r\n                            <label class=\"btn-raised btn-primary\" ngbButtonLabel>\r\n                                <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.middle\"> Middle\r\n                            </label>\r\n                            <label class=\"btn-raised btn-primary\" ngbButtonLabel>\r\n                                <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.right\"> Right\r\n                            </label>\r\n                        </div>\r\n                        <hr>\r\n                        <p>{{model | json}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Checkbox ng-buttons Ends-->\r\n\r\n        <!--Checkbox Reactive buttons Starts-->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Checkbox buttons (Reactive Forms)</h4>\r\n                    <p>A value of a checked button is bound to a variable specified via ngModel.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <form [formGroup]=\"checkboxGroupForm\">\r\n                            <div class=\"btn-group\" data-toggle=\"buttons\">\r\n                                <label class=\"btn-raised btn-primary\" ngbButtonLabel>\r\n                                    <input type=\"checkbox\" formControlName=\"left\" ngbButton> Left (pre-checked)\r\n                                </label>\r\n                                <label class=\"btn-raised btn-primary\" ngbButtonLabel>\r\n                                    <input type=\"checkbox\" formControlName=\"middle\" ngbButton> Middle\r\n                                </label>\r\n                                <label class=\"btn-raised btn-primary\" ngbButtonLabel>\r\n                                    <input type=\"checkbox\" formControlName=\"right\" ngbButton> Right\r\n                                </label>\r\n                            </div>\r\n                        </form>\r\n                        <hr>\r\n                        <p>{{checkboxGroupForm.value | json}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Checkbox Reactive buttons Ends-->\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Radio buttons Starts-->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Radio buttons</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"btn-group\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"modelRadio\">\r\n                            <label ngbButtonLabel class=\"btn-raised btn-primary\">\r\n                                <input ngbButton type=\"radio\" [value]=\"1\"> Left (pre-checked)\r\n                            </label>\r\n                            <label ngbButtonLabel class=\"btn-raised btn-primary\">\r\n                                <input ngbButton type=\"radio\" value=\"2\"> Middle\r\n                            </label>\r\n                            <label ngbButtonLabel class=\"btn-raised btn-primary\">\r\n                                <input ngbButton type=\"radio\" [value]=\"3\"> Right\r\n                            </label>\r\n                        </div>\r\n                        <hr>\r\n                        <p>{{modelRadio}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Radio buttons Ends-->\r\n\r\n        <!--Radio Reactive buttons Starts-->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Checkbox buttons (Reactive Forms)</h4>\r\n                    <p>A value of a checked button is bound to a variable specified via ngModel.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <form [formGroup]=\"radioGroupForm\">\r\n                            <div class=\"btn-group\" ngbRadioGroup name=\"radioBasic\" formControlName=\"modelRadioForm\">\r\n                                <label ngbButtonLabel class=\"btn-raised btn-primary\">\r\n                                <input ngbButton type=\"radio\" value=\"Left\"> Left (pre-checked)\r\n                                </label>\r\n                                <label ngbButtonLabel class=\"btn-raised btn-primary\">\r\n                                <input ngbButton type=\"radio\" value=\"Middle\"> Middle\r\n                                </label>\r\n                                <label ngbButtonLabel class=\"btn-raised btn-primary\">\r\n                                <input ngbButton type=\"radio\" value=\"Right\"> Right\r\n                                </label>\r\n                            </div>\r\n                        </form>\r\n                        <hr>\r\n                        <p>{{radioGroupForm.value['modelRadioForm']}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Radio Reactive buttons Ends-->\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/ng-buttons/ng-buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/ng-buttons/ng-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgButtonsComponent = (function () {
    function NgButtonsComponent(formBuilder) {
        this.formBuilder = formBuilder;
        // Checkbox Buttons
        this.model = {
            left: true,
            middle: false,
            right: false
        };
        // Radio Buttons
        this.modelRadio = 1;
    }
    NgButtonsComponent.prototype.ngOnInit = function () {
        this.checkboxGroupForm = this.formBuilder.group({
            left: true,
            middle: false,
            right: false
        });
        this.radioGroupForm = this.formBuilder.group({
            'modelRadioForm': 'Left'
        });
    };
    NgButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ng-buttons',
            template: __webpack_require__("../../../../../src/app/components/bootstrap/ng-buttons/ng-buttons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bootstrap/ng-buttons/ng-buttons.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], NgButtonsComponent);
    return NgButtonsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bootstrap/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Basic Pagination Starts-->\r\n<section id=\"basic-pagination\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Pagination</div>\r\n            <p class=\"content-sub-header\">Provide pagination links for your site or app with the multi-page pagination component, or the simpler pager alternative.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Basic Pagination Starts-->\r\n        <div class=\"col-xl-6 col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Basic Pagination</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <h5 class=\"mb-2 mt-4 text-bold-400\">Default pagination</h5>\r\n                        <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\"></ngb-pagination>\r\n                        <h5 class=\"mb-2 mt-4 text-bold-400\">directionLinks = false</h5>\r\n                        <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page1\" [directionLinks]=\"false\"></ngb-pagination>\r\n                        <h5 class=\"mb-2 mt-4 text-bold-400\">boundaryLinks = true</h5>\r\n                        <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page2\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                        <hr>\r\n                        <p>Current page: {{page2}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Basic Pagination Ends-->\r\n\r\n        <!--Advanced Pagination Starts-->\r\n        <div class=\"col-xl-6 col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Advanced Pagination</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <h5 class=\"mb-2 mt-4 text-bold-400\">maxSize = 5, rotate = false</h5>\r\n                        <ngb-pagination [collectionSize]=\"120\" [(page)]=\"page3\" [maxSize]=\"5\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                        <h5 class=\"mb-2 mt-4 text-bold-400\">maxSize = 5, rotate = true</h5>\r\n                        <ngb-pagination [collectionSize]=\"120\" [(page)]=\"page4\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                        <h5 class=\"mb-2 mt-4 text-bold-400\">maxSize = 5, rotate = true, ellipses = false</h5>\r\n                        <ngb-pagination [collectionSize]=\"120\" [(page)]=\"page5\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                        <hr>\r\n                        <p>Current page: {{page5}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Advanced Pagination Ends-->\r\n    </div>\r\n</section>\r\n<section id=\"pagination-option\">\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Pagination Sizes Starts-->\r\n        <div class=\"col-xl-6 col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Pagination Sizes</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <h5 class=\"mb-2 mt-4 text-bold-400\">Large Pagination</h5>\r\n                        <ngb-pagination [collectionSize]=\"30\" [(page)]=\"currentPage\" size=\"lg\"></ngb-pagination>\r\n                        <h5 class=\"mb-2 mt-4 text-bold-400\">Default Pagination</h5>\r\n                        <ngb-pagination [collectionSize]=\"30\" [(page)]=\"currentPage1\"></ngb-pagination>\r\n                        <h5 class=\"mb-2 mt-4 text-bold-400\">Small Pagination</h5>\r\n                        <ngb-pagination [collectionSize]=\"30\" [(page)]=\"currentPage2\" size=\"sm\"></ngb-pagination>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Pagination Sizes Ends-->\r\n\r\n        <!--Pagination Options Starts-->\r\n        <div class=\"col-xl-6 col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Pagination Options</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <h5 class=\"mb-2 mt-4 text-bold-400\">Pagination control can be disabled</h5>\r\n                        <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page6\" [disabled]='isDisabled'></ngb-pagination>\r\n                        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"toggleDisabled()\">\r\n                            Toggle disabled\r\n                        </button>\r\n                        \r\n                        <h5 class=\"mb-2 mt-4 text-bold-400\">This pagination uses custom default values</h5>\r\n                        <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page7\"></ngb-pagination>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Pagination Options Ends-->\r\n    </div>\r\n</section>\r\n<!--Basic Pagination Ends-->"

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/pagination/pagination.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .page-link {\n  margin-right: 0;\n  border-radius: 0;\n  border-width: 1px; }\n\n:host /deep/ .page-item:first-child .page-link {\n  border-top-left-radius: 0.3em;\n  border-bottom-left-radius: 0.3em; }\n\n:host /deep/ .page-item:last-child .page-link {\n  border-top-right-radius: 0.3em;\n  border-bottom-right-radius: 0.3em; }\n\n:host /deep/ .pagination-lg .page-item:first-child .page-link, .pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.3em;\n  border-bottom-left-radius: 0.3em; }\n\n:host /deep/ .pagination-lg .page-item:last-child .page-link, .pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.3em;\n  border-bottom-right-radius: 0.3em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginationComponent = (function () {
    function PaginationComponent(config) {
        // Variable Declaration
        this.page = 4;
        this.page1 = 4;
        this.page2 = 4;
        this.page3 = 4;
        this.page4 = 4;
        this.page5 = 4;
        this.page6 = 4;
        this.page7 = 4;
        this.currentPage = 2;
        this.currentPage1 = 2;
        this.currentPage2 = 2;
        this.isDisabled = true;
        // customize default values of paginations used by this component tree
        config.boundaryLinks = true;
    }
    // Toggle Disabled
    PaginationComponent.prototype.toggleDisabled = function () {
        this.isDisabled = !this.isDisabled;
    };
    PaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__("../../../../../src/app/components/bootstrap/pagination/pagination.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bootstrap/pagination/pagination.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["g" /* NgbPaginationConfig */]] // add NgbPaginationConfig to the component providers
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["g" /* NgbPaginationConfig */]])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bootstrap/popover/popover.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Popover Starts-->\r\n<section id=\"popovers\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Popovers</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Quick and easy popovers Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Quick and easy popovers</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <button type=\"button\" class=\"btn btn-outline-primary mr-1 mb-1\" placement=\"right\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              popoverTitle=\"Popover on right\">\r\n            Popover on right\r\n          </button>\r\n\r\n            <button type=\"button\" class=\"btn btn-outline-danger mr-1 mb-1\" placement=\"top\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              popoverTitle=\"Popover on top\">\r\n            Popover on top\r\n          </button>\r\n\r\n            <button type=\"button\" class=\"btn btn-outline-info mr-1 mb-1\" placement=\"bottom\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              popoverTitle=\"Popover on bottom\">\r\n            Popover on bottom\r\n          </button>\r\n\r\n            <button type=\"button\" class=\"btn btn-outline-warning mr-1 mb-1\" placement=\"left\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              popoverTitle=\"Popover on left\">\r\n            Popover on left\r\n          </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Quick and easy popovers Ends-->\r\n\r\n    <!--HTML and bindings in popovers Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">HTML and bindings in popovers</h4>\r\n          <p>Popovers can contain any arbitrary HTML, Angular bindings and even directives! Simply enclose desired content in\r\n            a <code>&lt;template&gt;</code> element.</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ng-template #popContent>Hello, <b>{{name}}</b>!</ng-template>\r\n            <button type=\"button\" class=\"btn btn-outline-success btn-sm\" [ngbPopover]=\"popContent\" popoverTitle=\"Fancy content\">\r\n            I've got markup and bindings in my popover!\r\n          </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--HTML and bindings in popovers Ends-->\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Custom and manual triggers Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Custom and manual triggers</h4>\r\n          <p>You can easily override open and close triggers by specifying event names (separated by <code>:</code>) in the\r\n            <code>triggers</code> property.</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <button type=\"button\" class=\"btn btn-outline-primary\" ngbPopover=\"You see, I show up on hover!\" triggers=\"mouseenter:mouseleave\"\r\n              popoverTitle=\"Pop title\">\r\n            Hover over me!\r\n          </button>\r\n            <p class=\"pt-3\">\r\n              Alternatively you can take full manual control over popover opening / closing events.\r\n            </p>\r\n            <button type=\"button\" class=\"btn btn-outline-info mr-1\" ngbPopover=\"What a great tip!\" triggers=\"manual\" #p=\"ngbPopover\"\r\n              (click)=\"p.open()\" popoverTitle=\"Pop title\">\r\n            Click me to open a popover\r\n          </button>\r\n            <button type=\"button\" class=\"btn btn-outline-warning\" (click)=\"p.close()\">\r\n            Click me to close a popover\r\n          </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Custom and manual triggers Ends-->\r\n\r\n    <!--Append popover in the body Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Append popover in the body</h4>\r\n          <p> Set the <code>container</code> property to \"body\" to have the popover be appended to the body instead of the triggering\r\n            element's parent. This option is useful if the element triggering the popover is inside an element that clips\r\n            its contents (i.e. <code>overflow: hidden</code>).</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <div class=\"mb-0\" style=\"padding: 20px 0; text-align: center; overflow:hidden\">\r\n              <button type=\"button\" class=\"btn btn-outline-success btn-sm mr-1\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n                container=\"body\">\r\n                Popover appended to body\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\r\n                Default popover\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Append popover in the body Ends-->\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Context and manual triggers Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Context and manual triggers</h4>\r\n          <p> You can optionally pass in a context when manually triggering a popover.</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ng-template #popContent let-greeting=\"greeting\">{{greeting}}, <b>{{name}}</b>!</ng-template>\r\n            <p>\r\n              How would you like to greet <strong [ngbPopover]=\"popContent\" popoverTitle=\"Greeting\" #x=\"ngbPopover\" triggers=\"manual\">me</strong>?\r\n            </p>\r\n            <button type=\"button\" class=\"btn btn-outline-warning mr-1\" (click)=\"changeGreeting({ greeting: 'Bonjour' })\">\r\n            French\r\n          </button>\r\n            <button type=\"button\" class=\"btn btn-outline-info mr-1\" (click)=\"changeGreeting({ greeting: 'Gutentag' })\">\r\n            German\r\n          </button>\r\n            <button type=\"button\" class=\"btn btn-outline-danger mr-1\" (click)=\"changeGreeting({ greeting: 'Hello' })\">\r\n            English\r\n          </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Context and manual triggers Ends-->\r\n\r\n    <!--Popover visibility events Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Popover visibility events</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <button type=\"button\" class=\"btn btn-outline-primary\" placement=\"top\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              popoverTitle=\"Popover on top\" #popover=\"ngbPopover\">\r\n            Open Popover\r\n          </button>\r\n\r\n            <p class=\"pt-3\">\r\n              Popover is currently: <code>{{ popover.isOpen() ? 'open' : 'closed' }}</code>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Popover visibility events Ends-->\r\n  </div>\r\n</section>\r\n<!--Popover Starts-->"

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/popover/popover.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/popover/popover.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverComponent = (function () {
    function PopoverComponent() {
        this.greeting = {};
        this.name = 'World';
    }
    PopoverComponent.prototype.changeGreeting = function (greeting) {
        var isOpen = this.popover.isOpen();
        this.popover.close();
        if (greeting !== this.greeting || !isOpen) {
            this.greeting = greeting;
            this.popover.open(greeting);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('x'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["h" /* NgbPopover */])
    ], PopoverComponent.prototype, "popover", void 0);
    PopoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-popover',
            template: __webpack_require__("../../../../../src/app/components/bootstrap/popover/popover.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bootstrap/popover/popover.component.scss")]
        })
    ], PopoverComponent);
    return PopoverComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bootstrap/progress/progress.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Progress Bar Starts-->\r\n<section id=\"basic-progress\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Progress Bars</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Contextual progress bars Starts-->\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Contextual progress bars</h4>\r\n                    <p>Stylize the HTML5 <code>progress</code> element with a few extra classes and some crafty browser-specific\r\n                        CSS. Be sure to read up on the browser support.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <p>\r\n                            <ngb-progressbar type=\"success\" [value]=\"25\"></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar type=\"info\" [value]=\"50\"></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar type=\"warning\" [value]=\"75\"></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar type=\"danger\" [value]=\"100\"></ngb-progressbar>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Contextual progress bars Ends-->\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Progress bars with current value labels Starts-->\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Progress bars with current value labels</h4>\r\n                    <p>Add labels to your progress bars by placing text within the <code class=\"highlighter-rouge\">.progress-bar</code>.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <p>\r\n                            <ngb-progressbar showValue=\"true\" type=\"success\" [value]=\"25\"></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar [showValue]=\"true\" type=\"info\" [value]=\"50\"></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar showValue=\"true\" type=\"warning\" [value]=\"150\" [max]=\"200\"></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar [showValue]=\"true\" type=\"danger\" [value]=\"150\" [max]=\"150\"></ngb-progressbar>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Progress bars with current value labels Ends-->\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Striped progress bars Starts-->\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Striped progress bars</h4>\r\n                    <p>Uses a gradient to create a striped effect.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <p>\r\n                            <ngb-progressbar type=\"success\" [value]=\"25\" [striped]=\"true\"></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar type=\"info\" [value]=\"50\" [striped]=\"true\"></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\"></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\"></ngb-progressbar>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Striped progress bars Ends-->\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Progress bars with custom labels Starts-->\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Progress bars with custom labels</h4>\r\n                    <p></p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <p>\r\n                            <ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar type=\"info\" [value]=\"50\">Copying file <b>2 of 4</b>...</ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"><i>50%</i></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Progress bars with custom labels Ends-->\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Progress bars Sizes Starts-->\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Progress bars Sizes</h4>\r\n                    <p></p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <h5 class=\"mb-4\">Default Progress Bar <small>No extra class needed.</small></h5>\r\n                        <p>\r\n                            <ngb-progressbar type=\"info\" [value]=\"30\"></ngb-progressbar>\r\n                        </p>\r\n                        <h5 class=\"mb-4\">Medium Progress Bar <small>Use <code>.progress-bar-md</code> class</small></h5>\r\n                        <p>\r\n                            <ngb-progressbar type=\"warning\" [value]=\"50\" [striped]=\"true\" class=\"progress-bar-md\"></ngb-progressbar>\r\n                        </p>\r\n                        <h5 class=\"mb-4\">Small Progress Bar <small> Use <code>.progress-bar-sm</code> class</small></h5>\r\n                        <p>\r\n                            <ngb-progressbar type=\"danger\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\" class=\"progress-bar-sm\"></ngb-progressbar>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Progress bars Sizes Ends-->\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Global configuration of progress bars Starts-->\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Global configuration of progress bars</h4>\r\n                    <p></p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <p>\r\n                            <ngb-progressbar type=\"primary\" [value]=\"20\"  [striped]=\"true\" [animated]=\"true\"></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar type=\"success\" [value]=\"40\"  [striped]=\"true\" [animated]=\"true\"></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar type=\"info\" [value]=\"60\"  [striped]=\"true\" [animated]=\"true\"></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar type=\"danger\" [value]=\"90\" [striped]=\"true\" [animated]=\"true\"></ngb-progressbar>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Global configuration of progress bars Ends-->\r\n    </div>\r\n</section>\r\n<!-- Progress Bar Ends-->"

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/progress/progress.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/progress/progress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProgressBarsComponent = (function () {
    function ProgressBarsComponent() {
    }
    ProgressBarsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-progress',
            template: __webpack_require__("../../../../../src/app/components/bootstrap/progress/progress.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bootstrap/progress/progress.component.scss")]
        })
    ], ProgressBarsComponent);
    return ProgressBarsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bootstrap/rating/rating.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Rating Starts-->\r\n<section id=\"rating\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Rating</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Basic Rating Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Basic Rating</h4>\r\n          <p>Rating directive that will take care of visualising a star rating bar.</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-rating [(rate)]=\"currentRate\"></ngb-rating>\r\n            <p>Rate: <b>{{currentRate}}</b></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Basic Rating Ends-->\r\n\r\n    <!--Custom star template Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Custom star template</h4>\r\n          <p>Custom rating template provided as child element</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-rating [(rate)]=\"currentRating\">\r\n              <ng-template let-fill=\"fill\">\r\n                <span class=\"star\" [class.filled]=\"fill === 100\">&#9733;</span>\r\n              </ng-template>\r\n            </ngb-rating>\r\n            <p>Rate: <b>{{currentRating}}</b></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Custom star template Ends-->\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Events and readonly ratings Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Events and readonly ratings</h4>\r\n          <p>Readonly and editable rating events.</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-rating [(rate)]=\"selected\" (hover)=\"hovered=$event\" (leave)=\"hovered=0\" [readonly]=\"readonly\"></ngb-rating>\r\n            <p>Selected: <b>{{selected}}</b> Hovered: <b>{{hovered}}</b>\r\n            </p>\r\n            <button class=\"btn btn-sm btn-outline-{{readonly ? 'danger' : 'success'}}\" (click)=\"readonly = !readonly\">\r\n            {{ readonly ? \"readonly\" : \"editable\"}}\r\n          </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Events and readonly ratings Ends-->\r\n\r\n    <!--Form integration Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Form integration</h4>\r\n          <p>NgModel and reactive forms can be used without the 'rate' binding</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n\r\n            <div class=\"form-group\" [class.has-success]=\"ctrl.valid\" [class.has-danger]=\"ctrl.invalid\">\r\n              <ngb-rating [formControl]=\"ctrl\"></ngb-rating>\r\n              <div class=\"form-control-feedback\">\r\n                <div *ngIf=\"ctrl.valid\">Thanks!</div>\r\n                <div *ngIf=\"ctrl.errors\">Please rate us</div>\r\n              </div>\r\n            </div>\r\n\r\n            <p>Model: <b>{{ ctrl.value }}</b></p>\r\n            <button class=\"btn btn-sm btn-outline-{{ ctrl.disabled ? 'danger' : 'success'}}\" (click)=\"toggle()\">\r\n            {{ ctrl.disabled ? \"control disabled\" : \" control enabled\" }}\r\n          </button>\r\n            <button class=\"btn btn-sm btn-outline-primary\" (click)=\"ctrl.setValue(null)\">Clear</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Form integration Ends-->\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Custom decimal rating Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Custom decimal rating</h4>\r\n          <p>Custom rating template provided via a variable. Shows fine-grained rating display</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ng-template #t let-fill=\"fill\">\r\n              <span *ngIf=\"fill === 100\" class=\"star full\">&hearts;</span>\r\n              <span *ngIf=\"fill === 0\" class=\"star\">&hearts;</span>\r\n              <span *ngIf=\"fill < 100 && fill > 0\" class=\"star\">\r\n              <span class=\"half\" [style.width.%]=\"fill\">&hearts;</span>&hearts;\r\n              </span>\r\n            </ng-template>\r\n\r\n            <ngb-rating [(rate)]=\"decimalCurrentRate\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\r\n            <p>Rate: <b>{{decimalCurrentRate}}</b></p>\r\n            <button class=\"btn btn-sm btn-outline-primary\" (click)=\"decimalCurrentRate = 1.35\">1.35</button>\r\n            <button class=\"btn btn-sm btn-outline-primary\" (click)=\"decimalCurrentRate = 4.72\">4.72</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Custom decimal rating Ends-->\r\n  </div>\r\n</section>\r\n<!--Rating Ends-->"

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/rating/rating.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ ngb-rating span {\n  font-size: 1.5rem; }\n\n:host /deep/ .star {\n  font-size: 1.5rem;\n  color: #b0c4de; }\n  :host /deep/ .star.filled {\n    color: #FF8D60; }\n  :host /deep/ .star.full {\n    color: #FF586B; }\n  :host /deep/ .star .half {\n    position: absolute;\n    display: inline-block;\n    overflow: hidden;\n    color: #FF586B;\n    font-size: 2rem; }\n\n:host /deep/ .star {\n  position: relative;\n  display: inline-block;\n  font-size: 2rem;\n  color: #d3d3d3; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/rating/rating.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RatingComponent = (function () {
    function RatingComponent() {
        // Variable Declaration
        this.currentRate = 8;
        this.currentRating = 6;
        this.selected = 0;
        this.hovered = 0;
        this.readonly = false;
        this.decimalCurrentRate = 3.14;
        // Form integration
        this.ctrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
    }
    RatingComponent.prototype.toggle = function () {
        if (this.ctrl.disabled) {
            this.ctrl.enable();
        }
        else {
            this.ctrl.disable();
        }
    };
    RatingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rating',
            template: __webpack_require__("../../../../../src/app/components/bootstrap/rating/rating.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bootstrap/rating/rating.component.scss")]
        })
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bootstrap/tabs/tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Tabs Starts-->\r\n<section id=\"tabs\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Tabs</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <!--Tabset Starts-->\r\n    <div class=\"col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Tabset</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-tabset>\r\n              <ngb-tab title=\"Simple\">\r\n                <ng-template ngbTabContent><p>Lemon drops pastry chocolate. Jujubes sweet roll tootsie roll. Oat cake donut bonbon chocolate croissant candy candy brownie. Wafer jelly beans jelly ice cream caramels. Cookie bonbon lemon drops cheesecake brownie cake macaroon sweet. Toffee pie icing candy ice cream croissant caramels jelly.\r\n                Muffin jelly gummies icing cheesecake chocolate cake. Sweet chupa chups croissant pudding sesame snaps soufflé. Marzipan cotton candy jujubes halvah cheesecake. Cupcake wafer gummies croissant candy brownie jelly. Sweet wafer chocolate halvah. Danish sweet roll cheesecake candy canes marzipan liquorice. Sugar plum halvah lemon drops donut sesame snaps lollipop oat cake.\r\n                Cake dessert topping tiramisu jelly beans. Gummies oat cake sugar plum cookie carrot cake halvah powder sesame snaps. Bear claw gummi bears marzipan powder pudding lemon drops cotton candy sweet roll chupa chups. Marzipan tootsie roll tart lemon drops gummies. Cheesecake wafer carrot cake chocolate jelly beans candy liquorice fruitcake pastry. Gummi bears cheesecake macaroon jelly beans wafer cookie. Gingerbread chocolate bar icing. Candy canes donut icing macaroon cupcake. Ice cream ice cream cake pudding gummi bears.</p></ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\r\n                <ng-template ngbTabContent><p>Jelly-o cake chocolate bar. Ice cream gummi bears candy canes cookie toffee halvah marzipan. Gummies dessert powder biscuit sweet roll. Biscuit muffin jujubes. Tiramisu pie danish muffin oat cake. Apple pie cupcake apple pie cotton candy toffee biscuit pie. Lemon drops dessert marshmallow. Jelly-o soufflé muffin muffin. Tootsie roll carrot cake sugar plum brownie chocolate cake croissant cotton candy lemon drops toffee.\r\n                Sweet roll cotton candy jelly-o tootsie roll candy canes liquorice tart cotton candy tiramisu. Powder sesame snaps chocolate liquorice pudding jelly cake pie. Lemon drops ice cream chocolate bar pudding dragée. Pastry cake cheesecake chocolate cake. Toffee bonbon fruitcake candy canes biscuit. Jelly chocolate cake danish tart jelly-o candy jelly powder. Brownie gummi bears brownie bear claw brownie bear claw croissant marshmallow. Pudding cake icing gummies pudding candy gingerbread macaroon. Chupa chups pastry tiramisu liquorice tiramisu marshmallow gummies brownie candy canes.</p></ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Disabled\" [disabled]=\"true\">\r\n                <ng-template ngbTabContent><p>Jelly beans halvah brownie macaroon powder. Wafer gingerbread caramels candy tootsie roll powder chupa chups. Marshmallow candy caramels chocolate cake oat cake caramels. Ice cream jelly liquorice danish toffee caramels. Danish icing topping. Carrot cake cupcake marshmallow donut sugar plum gingerbread sweet jelly. Pastry chocolate carrot cake sweet macaroon sweet roll jelly beans topping. Biscuit lollipop jelly-o tart halvah muffin. Caramels topping gummies pastry sweet. Lollipop candy canes bonbon sesame snaps.\r\n                Tart tootsie roll donut biscuit cake. Biscuit jelly beans soufflé powder. Wafer macaroon candy canes. Cake caramels tart lemon drops cupcake chocolate dessert. Fruitcake jujubes pie candy apple pie cheesecake. Oat cake donut oat cake gummies cookie powder. Apple pie tart chupa chups jelly marshmallow liquorice wafer gummi bears.\r\n                Jelly sugar plum bear claw macaroon danish chocolate cake apple pie sweet roll cake. Tiramisu wafer caramels icing candy soufflé fruitcake tart candy canes. Jelly carrot cake sweet. Cake chocolate pastry fruitcake sugar plum soufflé. Pie bear claw cake donut jelly-o cake cupcake dessert. Cake candy canes liquorice oat cake chocolate.</p></ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Tabset Ends-->    \r\n  </div>\r\n  <div class=\"row\">\r\n    <!--Pills Starts-->\r\n    <div class=\"col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Pills</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-tabset type=\"pills\">\r\n              <ngb-tab title=\"Simple\">\r\n                <ng-template ngbTabContent><p>Lemon drops pastry chocolate. Jujubes sweet roll tootsie roll. Oat cake donut bonbon chocolate croissant candy candy brownie. Wafer jelly beans jelly ice cream caramels. Cookie bonbon lemon drops cheesecake brownie cake macaroon sweet. Toffee pie icing candy ice cream croissant caramels jelly.\r\n                Muffin jelly gummies icing cheesecake chocolate cake. Sweet chupa chups croissant pudding sesame snaps soufflé. Marzipan cotton candy jujubes halvah cheesecake. Cupcake wafer gummies croissant candy brownie jelly. Sweet wafer chocolate halvah. Danish sweet roll cheesecake candy canes marzipan liquorice. Sugar plum halvah lemon drops donut sesame snaps lollipop oat cake.\r\n                Cake dessert topping tiramisu jelly beans. Gummies oat cake sugar plum cookie carrot cake halvah powder sesame snaps. Bear claw gummi bears marzipan powder pudding lemon drops cotton candy sweet roll chupa chups. Marzipan tootsie roll tart lemon drops gummies. Cheesecake wafer carrot cake chocolate jelly beans candy liquorice fruitcake pastry. Gummi bears cheesecake macaroon jelly beans wafer cookie. Gingerbread chocolate bar icing. Candy canes donut icing macaroon cupcake. Ice cream ice cream cake pudding gummi bears.</p></ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\r\n                <ng-template ngbTabContent><p>Jelly-o cake chocolate bar. Ice cream gummi bears candy canes cookie toffee halvah marzipan. Gummies dessert powder biscuit sweet roll. Biscuit muffin jujubes. Tiramisu pie danish muffin oat cake. Apple pie cupcake apple pie cotton candy toffee biscuit pie. Lemon drops dessert marshmallow. Jelly-o soufflé muffin muffin. Tootsie roll carrot cake sugar plum brownie chocolate cake croissant cotton candy lemon drops toffee.\r\n                Sweet roll cotton candy jelly-o tootsie roll candy canes liquorice tart cotton candy tiramisu. Powder sesame snaps chocolate liquorice pudding jelly cake pie. Lemon drops ice cream chocolate bar pudding dragée. Pastry cake cheesecake chocolate cake. Toffee bonbon fruitcake candy canes biscuit. Jelly chocolate cake danish tart jelly-o candy jelly powder. Brownie gummi bears brownie bear claw brownie bear claw croissant marshmallow. Pudding cake icing gummies pudding candy gingerbread macaroon. Chupa chups pastry tiramisu liquorice tiramisu marshmallow gummies brownie candy canes.</p></ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Disabled\" [disabled]=\"true\">\r\n                <ng-template ngbTabContent><p>Jelly beans halvah brownie macaroon powder. Wafer gingerbread caramels candy tootsie roll powder chupa chups. Marshmallow candy caramels chocolate cake oat cake caramels. Ice cream jelly liquorice danish toffee caramels. Danish icing topping. Carrot cake cupcake marshmallow donut sugar plum gingerbread sweet jelly. Pastry chocolate carrot cake sweet macaroon sweet roll jelly beans topping. Biscuit lollipop jelly-o tart halvah muffin. Caramels topping gummies pastry sweet. Lollipop candy canes bonbon sesame snaps.\r\n                Tart tootsie roll donut biscuit cake. Biscuit jelly beans soufflé powder. Wafer macaroon candy canes. Cake caramels tart lemon drops cupcake chocolate dessert. Fruitcake jujubes pie candy apple pie cheesecake. Oat cake donut oat cake gummies cookie powder. Apple pie tart chupa chups jelly marshmallow liquorice wafer gummi bears.\r\n                Jelly sugar plum bear claw macaroon danish chocolate cake apple pie sweet roll cake. Tiramisu wafer caramels icing candy soufflé fruitcake tart candy canes. Jelly carrot cake sweet. Cake chocolate pastry fruitcake sugar plum soufflé. Pie bear claw cake donut jelly-o cake cupcake dessert. Cake candy canes liquorice oat cake chocolate.</p></ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Pills Ends-->\r\n  </div>\r\n  <div class=\"row\">\r\n    <!--Select an active tab by id Starts-->\r\n    <div class=\"col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Select an active tab by id</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-tabset #t=\"ngbTabset\">\r\n              <ngb-tab title=\"Simple\" id=\"foo\">\r\n                <ng-template ngbTabContent><p>Lemon drops pastry chocolate. Jujubes sweet roll tootsie roll. Oat cake donut bonbon chocolate croissant candy candy brownie. Wafer jelly beans jelly ice cream caramels. Cookie bonbon lemon drops cheesecake brownie cake macaroon sweet. Toffee pie icing candy ice cream croissant caramels jelly.\r\n                Muffin jelly gummies icing cheesecake chocolate cake. Sweet chupa chups croissant pudding sesame snaps soufflé. Marzipan cotton candy jujubes halvah cheesecake. Cupcake wafer gummies croissant candy brownie jelly. Sweet wafer chocolate halvah. Danish sweet roll cheesecake candy canes marzipan liquorice. Sugar plum halvah lemon drops donut sesame snaps lollipop oat cake.\r\n                Cake dessert topping tiramisu jelly beans. Gummies oat cake sugar plum cookie carrot cake halvah powder sesame snaps. Bear claw gummi bears marzipan powder pudding lemon drops cotton candy sweet roll chupa chups. Marzipan tootsie roll tart lemon drops gummies. Cheesecake wafer carrot cake chocolate jelly beans candy liquorice fruitcake pastry. Gummi bears cheesecake macaroon jelly beans wafer cookie. Gingerbread chocolate bar icing. Candy canes donut icing macaroon cupcake. Ice cream ice cream cake pudding gummi bears.</p></ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab id=\"bar\">\r\n                <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\r\n                <ng-template ngbTabContent><p>Jelly-o cake chocolate bar. Ice cream gummi bears candy canes cookie toffee halvah marzipan. Gummies dessert powder biscuit sweet roll. Biscuit muffin jujubes. Tiramisu pie danish muffin oat cake. Apple pie cupcake apple pie cotton candy toffee biscuit pie. Lemon drops dessert marshmallow. Jelly-o soufflé muffin muffin. Tootsie roll carrot cake sugar plum brownie chocolate cake croissant cotton candy lemon drops toffee.\r\n                Sweet roll cotton candy jelly-o tootsie roll candy canes liquorice tart cotton candy tiramisu. Powder sesame snaps chocolate liquorice pudding jelly cake pie. Lemon drops ice cream chocolate bar pudding dragée. Pastry cake cheesecake chocolate cake. Toffee bonbon fruitcake candy canes biscuit. Jelly chocolate cake danish tart jelly-o candy jelly powder. Brownie gummi bears brownie bear claw brownie bear claw croissant marshmallow. Pudding cake icing gummies pudding candy gingerbread macaroon. Chupa chups pastry tiramisu liquorice tiramisu marshmallow gummies brownie candy canes.</p></ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n            <p>\r\n              <button class=\"btn btn-outline-primary\" (click)=\"t.select('bar')\">Selected tab with \"bar\" id</button>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Select an active tab by id Ends-->\r\n  </div>\r\n  <div class=\"row\">\r\n    <!--Prevent tab change Starts-->\r\n    <div class=\"col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Prevent tab change</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-tabset (tabChange)=\"beforeChange($event)\">\r\n              <ngb-tab title=\"Simple\" id=\"foo\">\r\n                <ng-template ngbTabContent><p>Lemon drops pastry chocolate. Jujubes sweet roll tootsie roll. Oat cake donut bonbon chocolate croissant candy candy brownie. Wafer jelly beans jelly ice cream caramels. Cookie bonbon lemon drops cheesecake brownie cake macaroon sweet. Toffee pie icing candy ice cream croissant caramels jelly.\r\n                Muffin jelly gummies icing cheesecake chocolate cake. Sweet chupa chups croissant pudding sesame snaps soufflé. Marzipan cotton candy jujubes halvah cheesecake. Cupcake wafer gummies croissant candy brownie jelly. Sweet wafer chocolate halvah. Danish sweet roll cheesecake candy canes marzipan liquorice. Sugar plum halvah lemon drops donut sesame snaps lollipop oat cake.\r\n                Cake dessert topping tiramisu jelly beans. Gummies oat cake sugar plum cookie carrot cake halvah powder sesame snaps. Bear claw gummi bears marzipan powder pudding lemon drops cotton candy sweet roll chupa chups. Marzipan tootsie roll tart lemon drops gummies. Cheesecake wafer carrot cake chocolate jelly beans candy liquorice fruitcake pastry. Gummi bears cheesecake macaroon jelly beans wafer cookie. Gingerbread chocolate bar icing. Candy canes donut icing macaroon cupcake. Ice cream ice cream cake pudding gummi bears.</p></ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab id=\"bar\" title=\"I can't be selected...\">\r\n                <ng-template ngbTabContent><p>I can't be selected content</p></ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"But I can!\">\r\n                <ng-template ngbTabContent><p>Apple pie muffin apple pie gummi bears topping biscuit. Liquorice cookie cookie halvah dragée dessert marshmallow macaroon. Muffin sesame snaps chocolate bar dragée cookie lemon drops. Danish apple pie macaroon brownie bear claw chocolate cake gummi bears wafer wafer. Soufflé danish sweet liquorice jelly-o bonbon. Halvah marzipan halvah fruitcake jujubes cheesecake liquorice sesame snaps. Biscuit chocolate candy sugar plum powder cupcake candy canes cheesecake cake. Tart apple pie lemon drops.\r\n                Muffin oat cake marzipan fruitcake donut. Tootsie roll dessert macaroon tart cake cheesecake wafer chupa chups dragée. Muffin oat cake cookie chocolate gingerbread chocolate bar powder. Muffin lollipop bonbon wafer chocolate cupcake toffee croissant cotton candy. Jelly candy macaroon oat cake carrot cake. Chupa chups gummies tootsie roll cotton candy. Gummi bears lemon drops chocolate topping lollipop marshmallow gummies icing brownie. Bear claw cake ice cream candy canes sweet liquorice icing. Candy cake chocolate cake candy canes ice cream fruitcake fruitcake jujubes halvah.</p></ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Prevent tab change Ends-->\r\n  </div>\r\n  <div class=\"row\">\r\n    <!--Nav justification Starts-->\r\n    <div class=\"col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Nav justification</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-tabset [justify]=\"currentJustify\">\r\n              <ngb-tab title=\"Simple\">\r\n                <ng-template ngbTabContent>\r\n                  <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                  master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                  dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                  iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\r\n                <ng-template ngbTabContent><p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\r\n                  Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\r\n                  craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\r\n                  cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\r\n                  yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\r\n                  shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\r\n                  sint qui sapiente accusamus tattooed echo park.</p>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"A very long nav title\">\r\n                <ng-template ngbTabContent>\r\n                  <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                  master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                  dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                  iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n\r\n            <div class=\"btn-group\" ngbRadioGroup [(ngModel)]=\"currentJustify\">\r\n              <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"start\">Start\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"center\">Center\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"end\">End\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"fill\">Fill\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"justified\">Justified\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Nav justification Ends-->\r\n  </div>\r\n  <div class=\"row\">\r\n    <!--Nav orientation Starts-->\r\n    <div class=\"col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Nav orientation</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-tabset type=\"pills\" [orientation]=\"currentOrientation\">\r\n              <ngb-tab title=\"Simple\">\r\n                <ng-template ngbTabContent>\r\n                  <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                  master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                  dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                  iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\r\n                <ng-template ngbTabContent><p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\r\n                  Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\r\n                  craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\r\n                  cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\r\n                  yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\r\n                  shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\r\n                  sint qui sapiente accusamus tattooed echo park.</p>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Disabled\" [disabled]=\"true\">\r\n                <ng-template ngbTabContent>\r\n                  <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                  master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                  dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                  iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n\r\n            <div class=\"btn-group\" ngbRadioGroup [(ngModel)]=\"currentOrientation\">\r\n              <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"horizontal\">Horizontal\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"vertical\">Vertical\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Nav orientation Ends-->\r\n  </div>\r\n</section>\r\n<!--Tabs Starts-->"

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/tabs/tabs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/tabs/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TabsComponent = (function () {
    function TabsComponent() {
        this.currentJustify = 'start';
        this.currentOrientation = 'horizontal';
    }
    TabsComponent.prototype.beforeChange = function ($event) {
        if ($event.nextId === 'bar') {
            $event.preventDefault();
        }
    };
    ;
    TabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__("../../../../../src/app/components/bootstrap/tabs/tabs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bootstrap/tabs/tabs.component.scss")],
        })
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bootstrap/timepicker/timepicker.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Timepicker Starts-->\r\n<section id=\"timepicker\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Timepicker</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Basic Timepicker Starts-->\r\n    <div class=\"col-md-4 col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Basic Timepicker</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-timepicker [(ngModel)]=\"time\"></ngb-timepicker>\r\n            <button class=\"btn mb-3 mt-3\" style=\"opacity: 0;\">&nbsp;</button>\r\n            <hr>\r\n            <p>Selected time: {{time | json}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Basic Timepicker Ends-->\r\n\r\n    <!--Meridian Timepicker Starts-->\r\n    <div class=\"col-md-4 col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Meridian</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-timepicker [(ngModel)]=\"meridianTime\" [meridian]=\"meridian\"></ngb-timepicker>\r\n            <button class=\"btn btn-outline-{{meridian ? 'success' : 'danger'}} mb-3 mt-3\" (click)=\"toggleMeridian()\">\r\n              Meridian - {{meridian ? \"ON\" : \"OFF\"}}\r\n          </button>\r\n            <hr>\r\n            <p>Selected time: {{meridianTime | json}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Meridian Timepicker Ends-->\r\n\r\n    <!--Seconds Timepicker Starts-->\r\n    <div class=\"col-md-4 col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Seconds</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-timepicker [(ngModel)]=\"secondsTime\" [seconds]=\"seconds\"></ngb-timepicker>\r\n            <button class=\"btn btn-outline-{{seconds ? 'success' : 'danger'}} mb-3 mt-3\" (click)=\"toggleSeconds()\">\r\n              Seconds - {{seconds ? \"ON\" : \"OFF\"}}\r\n          </button>\r\n            <hr>\r\n            <p>Selected time: {{secondsTime | json}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Seconds Timepicker Ends-->\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Spinners Timepicker Starts-->\r\n    <div class=\"col-md-4 col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Spinners</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-timepicker [(ngModel)]=\"spinnersTime\" [spinners]=\"spinners\"></ngb-timepicker>\r\n\r\n            <button class=\"m-t-1 btn btn-outline-{{spinners ? 'success' : 'danger'}} mb-3 mt-3\" (click)=\"toggleSpinners()\">\r\n              Spinners - {{spinners ? \"ON\" : \"OFF\"}}\r\n          </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Spinners Timepicker Ends-->\r\n\r\n    <!--Custom steps for Timepicker Starts-->\r\n    <div class=\"col-md-4 col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Custom steps</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-timepicker [(ngModel)]=\"stepsTime\" [seconds]=\"true\" [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [secondStep]=\"secondStep\"></ngb-timepicker>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-3\">\r\n                <label for=\"changeHourStep\">Hour Step</label>\r\n                <input type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"hourStep\" />\r\n              </div>\r\n              <div class=\"col-sm-3\">\r\n                <label for=\"changeMinuteStep\">Minute Step</label>\r\n                <input type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"minuteStep\" />\r\n              </div>\r\n              <div class=\"col-sm-4\">\r\n                <label for=\"changeSecondStep\">Second Step</label>\r\n                <input type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"secondStep\" />\r\n              </div>\r\n            </div>\r\n            <hr>\r\n            <p>Selected time: {{stepsTime | json}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Custom steps for Timepicker Ends-->\r\n\r\n    <!--Timepicker Custom validation Starts-->\r\n    <div class=\"col-md-4 col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Custom validation</h4>\r\n          <p>Illustrates custom validation, you have to select time between 12:00 and 13:59</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\" [class.has-success]=\"ctrl.valid\" [class.has-danger]=\"!ctrl.valid\">\r\n              <ngb-timepicker [(ngModel)]=\"validationTime\" [formControl]=\"ctrl\" required></ngb-timepicker>\r\n              <div class=\"form-control-feedback\">\r\n                <div *ngIf=\"ctrl.valid\">Great choice</div>\r\n                <div *ngIf=\"ctrl.errors && ctrl.errors['required']\">Select some time during lunchtime</div>\r\n                <div *ngIf=\"ctrl.errors && ctrl.errors['tooLate']\">Oh no, it's way too late</div>\r\n                <div *ngIf=\"ctrl.errors && ctrl.errors['tooEarly']\">It's a bit too early</div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n            <p>Selected time: {{validationTime | json}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Timepicker Custom validation Ends-->\r\n  </div>\r\n</section>\r\n<!--Timepicker Starts-->"

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/timepicker/timepicker.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/timepicker/timepicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimepickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TimepickerComponent = (function () {
    function TimepickerComponent() {
        // Variable Declaration
        this.meridian = true;
        this.time = { hour: 13, minute: 30, second: 30 };
        this.meridianTime = { hour: 13, minute: 30, second: 30 };
        this.secondsTime = { hour: 13, minute: 30, second: 30 };
        this.spinnersTime = { hour: 13, minute: 30, second: 30 };
        this.stepsTime = { hour: 13, minute: 30, second: 30 };
        this.validationTime = { hour: 13, minute: 30, second: 30 };
        this.seconds = true;
        this.spinners = true;
        this.hourStep = 1;
        this.minuteStep = 15;
        this.secondStep = 30;
        this.ctrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', function (control) {
            var value = control.value;
            if (!value) {
                return null;
            }
            if (value.hour < 12) {
                return { tooEarly: true };
            }
            if (value.hour > 13) {
                return { tooLate: true };
            }
            return null;
        });
    }
    // Using for Meridian
    TimepickerComponent.prototype.toggleMeridian = function () {
        this.meridian = !this.meridian;
    };
    // Using for Seconds  
    TimepickerComponent.prototype.toggleSeconds = function () {
        this.seconds = !this.seconds;
    };
    // Using for Spinners
    TimepickerComponent.prototype.toggleSpinners = function () {
        this.spinners = !this.spinners;
    };
    TimepickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-timepicker',
            template: __webpack_require__("../../../../../src/app/components/bootstrap/timepicker/timepicker.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bootstrap/timepicker/timepicker.component.scss")]
        })
    ], TimepickerComponent);
    return TimepickerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bootstrap/tooltip/tooltip.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Tooltip Starts-->\r\n<section id=\"tooltio\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Tooltips</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <!--Quick and easy tooltips Starts-->\r\n    <div class=\"col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Quick and easy tooltips</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <button type=\"button\" class=\"btn btn-outline-primary mr-1 mb-1\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\r\n            Tooltip on top\r\n          </button>\r\n            <button type=\"button\" class=\"btn btn-outline-warning mr-1 mb-1\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\r\n            Tooltip on right\r\n          </button>\r\n            <button type=\"button\" class=\"btn btn-outline-success mr-1 mb-1\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\r\n            Tooltip on bottom\r\n          </button>\r\n            <button type=\"button\" class=\"btn btn-outline-danger mr-1 mb-1\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\r\n            Tooltip on left\r\n          </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Quick and easy tooltips Ends-->\r\n  </div>\r\n  <div class=\"row\">\r\n    <!--HTML and bindings in tooltips Starts-->\r\n    <div class=\"col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">HTML and bindings in tooltips</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <p>Tooltips can contain any arbitrary HTML, Angular bindings and even directives! Simply enclose desired content in\r\n              a <code>&lt;template&gt;</code> element.</p>\r\n\r\n            <ng-template #tipContent>Hello, <b>{{name}}</b>!</ng-template>\r\n            <button type=\"button\" class=\"btn btn-outline-primary\" [ngbTooltip]=\"tipContent\">\r\n            I've got markup and bindings in my tooltip!\r\n          </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--HTML and bindings in tooltips Ends-->\r\n  </div>\r\n  <div class=\"row\">\r\n    <!--Custom and manual triggers Starts-->\r\n    <div class=\"col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Custom and manual triggers</h4>\r\n          <p> You can easily override open and close triggers by specifying event names (separated by <code>:</code>) in the <code>triggers</code>          property.</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <button type=\"button\" class=\"btn btn-outline-success\" ngbTooltip=\"You see, I show up on click!\" triggers=\"click:blur\">\r\n              Click me!\r\n            </button>\r\n\r\n            <p class=\"pt-3\">\r\n              Alternatively you can take full manual control over tooltip opening / closing events.\r\n            </p>\r\n\r\n            <button type=\"button\" class=\"btn btn-outline-info mr-2\" ngbTooltip=\"What a great tip!\" triggers=\"manual\" #t=\"ngbTooltip\"\r\n              (click)=\"t.open()\">\r\n              Click me to open a tooltip\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-outline-warning\" (click)=\"t.close()\">\r\n              Click me to close a tooltip\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Custom and manual triggers Ends-->\r\n  </div>\r\n  <div class=\"row\">\r\n    <!--Context and manual triggers Starts-->\r\n    <div class=\"col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Context and manual triggers</h4>\r\n          <p> You can optionally pass in a context when manually triggering a popover.</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ng-template #tipContent let-greeting=\"greeting\">{{greeting}}, <b>{{name}}</b>!</ng-template>\r\n            <p>\r\n              How would you like to greet <strong [ngbTooltip]=\"tipContent\" #x=\"ngbTooltip\" triggers=\"manual\">me</strong>?\r\n            </p>\r\n            <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"changeGreeting({ greeting: 'Bonjour' })\">\r\n            French\r\n          </button>\r\n            <button type=\"button\" class=\"btn btn-outline-warning\" (click)=\"changeGreeting({ greeting: 'Gutentag' })\">\r\n            German\r\n          </button>\r\n            <button type=\"button\" class=\"btn btn-outline-info\" (click)=\"changeGreeting({ greeting: 'Hello' })\">\r\n            English\r\n          </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Context and manual triggers Ends-->\r\n  </div>\r\n  <div class=\"row\">\r\n    <!--Append tooltip in the body Starts-->\r\n    <div class=\"col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Append tooltip in the body</h4>\r\n          <p>Set the <code>container</code> property to \"body\" to have the tooltip be appended to the body instead of the triggering\r\n            element's parent. This option is useful if the element triggering the tooltip is inside an element that clips its\r\n            contents (i.e. <code>overflow: hidden</code>).</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\" style=\"padding: 50px 0; text-align: center; overflow:hidden\">\r\n            <button type=\"button\" class=\"btn btn-outline-success\" ngbTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\r\n                Default tooltip\r\n              </button>\r\n            <button type=\"button\" class=\"btn btn-outline-danger\" ngbTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              container=\"body\">\r\n                Tooltip appended to body\r\n              </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Append tooltip in the body Ends-->\r\n  </div>\r\n</section>\r\n<!--Tooltip Ends-->"

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/tooltip/tooltip.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/tooltip/tooltip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TooltipComponent = (function () {
    function TooltipComponent() {
        this.greeting = {};
        this.name = 'World';
    }
    TooltipComponent.prototype.changeGreeting = function (greeting) {
        var isOpen = this.tooltip.isOpen();
        this.tooltip.close();
        if (greeting !== this.greeting || !isOpen) {
            this.greeting = greeting;
            this.tooltip.open(greeting);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('x'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["i" /* NgbTooltip */])
    ], TooltipComponent.prototype, "tooltip", void 0);
    TooltipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tooltip',
            template: __webpack_require__("../../../../../src/app/components/bootstrap/tooltip/tooltip.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bootstrap/tooltip/tooltip.component.scss")]
        })
    ], TooltipComponent);
    return TooltipComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bootstrap/typeahead/typeahead.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Typeahead Starts-->\r\n<section id=\"typeahead\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Typeahead</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Basic Typeahead Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Simple Typeahead</h4>\r\n          <p> A typeahead example that gets values from a static <code>string[]</code></p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ul>\r\n              <li><code>debounceTime</code> operator</li>\r\n              <li>kicks in only if 2+ characters typed</li>\r\n              <li>limits to 10 results</li>\r\n            </ul>\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" class=\"form-control mb-3\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" placeholder=\"Search for alabama\" />\r\n            </div>\r\n            <p>Model: {{ model | json }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Basic Typeahead Ends-->\r\n\r\n    <!--Wikipedia search Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Wikipedia search</h4>\r\n          <p> A typeahead example that gets values from the <code>WikipediaService</code></p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ul>\r\n              <li>remote data retrieval</li>\r\n              <li><code>debounceTime</code> operator</li>\r\n              <li><code>do</code> operator</li>\r\n              <li><code>distinctUntilChanged</code> operator</li>\r\n              <li><code>switchMap</code> operator</li>\r\n              <li><code>catch</code> operator to display an error message in case of connectivity issue</li>\r\n            </ul>\r\n\r\n            <div class=\"form-group\" [class.has-danger]=\"searchFailed\">\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelWiki\" [ngbTypeahead]=\"searchWiki\" placeholder=\"Search for alabama\"\r\n              />\r\n              <span *ngIf=\"searching\">searching...</span>\r\n              <div class=\"form-control-feedback\" *ngIf=\"searchFailed\">Sorry, suggestions could not be loaded.</div>\r\n            </div>\r\n\r\n            <p>Model: {{ modelWiki | json }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Wikipedia search Ends-->\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Formatted results Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Formatted results</h4>\r\n          <p>A typeahead example that uses a formatter function for string results</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" class=\"form-control format mb-3\" [(ngModel)]=\"modelFormat\" [ngbTypeahead]=\"search\" [resultFormatter]=\"formatter\"\r\n              placeholder=\"Search for alabama\" />\r\n            </div>\r\n            <p>Model: {{ modelFormat | json }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Formatted results Ends-->\r\n\r\n    <!--Template for results Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Template for results</h4>\r\n          <p>A typeahead example that uses custom template for results display and uses object as a model</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ng-template #rt let-r=\"result\" let-t=\"term\">\r\n              <img [src]=\"'https://upload.wikimedia.org/wikipedia/commons/thumb/' + r.flag\" width=\"16\"> {{ r.name}}\r\n            </ng-template>\r\n            <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control mb-3\" [(ngModel)]=\"modelTemp\" [ngbTypeahead]=\"searchFlags\" [resultTemplate]=\"rt\" [inputFormatter]=\"formatter1\"\r\n              placeholder=\"Search for alabama\" />\r\n            </div>\r\n            <p>Model: {{ modelTemp | json }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Template for results Ends-->\r\n  </div>\r\n</section>\r\n<!--Typeahead Ends-->"

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/typeahead/typeahead.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control.format {\n  width: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bootstrap/typeahead/typeahead.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export WikipediaService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeaheadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// State constant declaration
var states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
// State Flags constant declaration
var statesWithFlags = [
    { 'name': 'Alabama', 'flag': '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png' },
    { 'name': 'Alaska', 'flag': 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png' },
    { 'name': 'Arizona', 'flag': '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png' },
    { 'name': 'Arkansas', 'flag': '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png' },
    { 'name': 'California', 'flag': '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png' },
    { 'name': 'Colorado', 'flag': '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png' },
    { 'name': 'Connecticut', 'flag': '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png' },
    { 'name': 'Delaware', 'flag': 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png' },
    { 'name': 'Florida', 'flag': 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png' },
    { 'name': 'Georgia', 'flag': '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png' },
    { 'name': 'Hawaii', 'flag': 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png' },
    { 'name': 'Idaho', 'flag': 'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png' },
    { 'name': 'Illinois', 'flag': '0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png' },
    { 'name': 'Indiana', 'flag': 'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png' },
    { 'name': 'Iowa', 'flag': 'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png' },
    { 'name': 'Kansas', 'flag': 'd/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png' },
    { 'name': 'Kentucky', 'flag': '8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png' },
    { 'name': 'Louisiana', 'flag': 'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png' },
    { 'name': 'Maine', 'flag': '3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png' },
    { 'name': 'Maryland', 'flag': 'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png' },
    { 'name': 'Massachusetts', 'flag': 'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png' },
    { 'name': 'Michigan', 'flag': 'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png' },
    { 'name': 'Minnesota', 'flag': 'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png' },
    { 'name': 'Mississippi', 'flag': '4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png' },
    { 'name': 'Missouri', 'flag': '5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png' },
    { 'name': 'Montana', 'flag': 'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png' },
    { 'name': 'Nebraska', 'flag': '4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png' },
    { 'name': 'Nevada', 'flag': 'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png' },
    { 'name': 'New Hampshire', 'flag': '2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png' },
    { 'name': 'New Jersey', 'flag': '9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png' },
    { 'name': 'New Mexico', 'flag': 'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png' },
    { 'name': 'New York', 'flag': '1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png' },
    { 'name': 'North Carolina', 'flag': 'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png' },
    { 'name': 'North Dakota', 'flag': 'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png' },
    { 'name': 'Ohio', 'flag': '4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png' },
    { 'name': 'Oklahoma', 'flag': '6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png' },
    { 'name': 'Oregon', 'flag': 'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png' },
    { 'name': 'Pennsylvania', 'flag': 'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png' },
    { 'name': 'Rhode Island', 'flag': 'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png' },
    { 'name': 'South Carolina', 'flag': '6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png' },
    { 'name': 'South Dakota', 'flag': '1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png' },
    { 'name': 'Tennessee', 'flag': '9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png' },
    { 'name': 'Texas', 'flag': 'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png' },
    { 'name': 'Utah', 'flag': 'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png' },
    { 'name': 'Vermont', 'flag': '4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png' },
    { 'name': 'Virginia', 'flag': '4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png' },
    { 'name': 'Washington', 'flag': '5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png' },
    { 'name': 'West Virginia', 'flag': '2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png' },
    { 'name': 'Wisconsin', 'flag': '2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png' },
    { 'name': 'Wyoming', 'flag': 'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png' }
];
var WikipediaService = (function () {
    function WikipediaService(_jsonp) {
        this._jsonp = _jsonp;
    }
    // Typeahead Search 
    WikipediaService.prototype.search = function (term) {
        if (term === '') {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]);
        }
        var wikiUrl = 'https://en.wikipedia.org/w/api.php';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        params.set('search', term);
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        return this._jsonp
            .get(wikiUrl, { search: params })
            .map(function (response) { return response.json()[1]; });
    };
    WikipediaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */]])
    ], WikipediaService);
    return WikipediaService;
}());

var TypeaheadComponent = (function () {
    function TypeaheadComponent(_service) {
        var _this = this;
        this._service = _service;
        this.searching = false;
        this.searchFailed = false;
        // Default Search
        this.search = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 2 ? []
                : states.filter(function (v) { return new RegExp(term, 'gi').test(v); }).splice(0, 10); });
        };
        // Wiki Search
        this.searchWiki = function (text$) {
            return text$
                .debounceTime(300)
                .distinctUntilChanged()
                .do(function () { return _this.searching = true; })
                .switchMap(function (term) {
                return _this._service.search(term)
                    .do(function () { return _this.searchFailed = false; })
                    .catch(function () {
                    _this.searchFailed = true;
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]);
                });
            })
                .do(function () { return _this.searching = false; });
        };
        // Formatter 
        this.formatter = function (result) { return result.toUpperCase(); };
        this.formatter1 = function (x) { return x.name; };
        // Flag search
        this.searchFlags = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term === '' ? []
                : statesWithFlags.filter(function (v) { return v.name.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); });
        };
    }
    TypeaheadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-typeahead',
            template: __webpack_require__("../../../../../src/app/components/bootstrap/typeahead/typeahead.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bootstrap/typeahead/typeahead.component.scss")],
            providers: [WikipediaService]
        }),
        __metadata("design:paramtypes", [WikipediaService])
    ], TypeaheadComponent);
    return TypeaheadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/extra/drag-drop/drag-drop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"content-header\">Drag and Drop</div>\r\n    <p class=\"content-sub-header\">Simple angular drag and drop with dragula.</p>\r\n  </div>\r\n</div>\r\n<!-- Drap and Drop Starts -->\r\n<section id=\"dragndrop\">\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n\r\n      <h4>Basic Drag and Drop</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <div class='parent'>\r\n            <label for='hy'>Move stuff between these two containers. Note how the stuff gets inserted near the mouse pointer? Great stuff.</label>\r\n            <div class='drag-drop-wrapper'>\r\n              <div class='drag-drop-container' [dragula]='\"first-bag\"'>\r\n                <div>You can move these elements between these two containers</div>\r\n                <div>Moving them anywhere else isn't quite possible</div>\r\n                <div>There's also the possibility of moving elements around in the same container, changing their position\r\n                </div>\r\n              </div>\r\n              <div class='drag-drop-container' [dragula]='\"first-bag\"'>\r\n                <div>This is the default use case. You only need to specify the containers you want to use</div>\r\n                <div>More interactive use cases lie ahead</div>\r\n                <div>Make sure to check out the\r\n                  <a href='https://github.com/bevacqua/dragula#readme'>documentation on GitHub!\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4>Sort the items</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <div class='parent'>\r\n            <label for='hy'>Need to be able to quickly delete stuff when it spills out of the chosen containers? Note how you can easily\r\n              sort the items in any containers by just dragging and dropping.</label>\r\n            <div class='drag-drop-wrapper'>\r\n              <div class='drag-drop-container' [dragula]='\"third-bag\"' [dragulaOptions]=\"thirdOptions\">\r\n                <div>Banana Boat</div>\r\n                <div>Orange Juice</div>\r\n                <div>Cuban Cigar</div>\r\n                <div>Terrible Comedian</div>\r\n                <div>Anxious Cab Driver</div>\r\n                <div>Thriving Venture</div>\r\n                <div>Calm Clam</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4>Drag and Drop Events</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <div class=\"parent\">\r\n            <label for=\"hy\">There are plenty of events along the lifetime of a drag event.\r\n              <a href=\"https://github.com/bevacqua/dragula#drakeon-events\">all of them</a> in the docs!</label>\r\n            <div class=\"drag-drop-wrapper\">\r\n              <div class=\"drag-drop-container\" [dragula]=\"'second-bag'\">\r\n                <div>As soon as you start dragging an element, a\r\n                  <code>drag</code> event is fired</div>\r\n                <div>Whenever an element is cloned because\r\n                  <code>copy: true</code>, a\r\n                  <code>cloned</code> event fires</div>\r\n                <div>The\r\n                  <code>shadow</code> event fires whenever the placeholder showing where an element would be dropped is moved\r\n                  to a different container or position</div>\r\n                <div>A\r\n                  <code>drop</code> event is fired whenever an element is dropped anywhere other than its origin\r\n                  <em>(where it was initially dragged from)</em>\r\n                </div>\r\n              </div>\r\n              <div class=\"drag-drop-container\" [dragula]=\"'second-bag'\">\r\n                <div>If the element gets removed from the DOM as a result of dropping outside of any containers, a\r\n                  <code>remove</code> event gets fired</div>\r\n                <div>A\r\n                  <code>cancel</code> event is fired when an element would be dropped onto an invalid target, but retains\r\n                  its original placement instead\r\n                </div>\r\n                <div>The\r\n                  <code>over</code> event fires when you drag something over a container, and\r\n                  <code>out</code> fires when you drag it away from the container</div>\r\n                <div>Lastly, a\r\n                  <code>dragend</code> event is fired whenever a drag operation ends, regardless of whether it ends in a\r\n                  cancellation, removal, or drop</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4>Drag and Drop using Handle</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <div class='parent'>\r\n            <label for='hy'>Drag handles float your cruise?</label>\r\n            <div class='drag-drop-wrapper'>\r\n              <div class='drag-drop-container' [dragula]='\"sixth-bag\"' [dragulaOptions]=\"sixthOptions\">\r\n                <div>\r\n                  <span class='handle'>+</span>Move me, but you can use the plus sign to drag me around.</div>\r\n                <div>\r\n                  <span class='handle'>+</span>Note that\r\n                  <code>handle</code> element in the\r\n                  <code>moves</code> handler is just the original event target.\r\n                </div>\r\n              </div>\r\n              <div class='drag-drop-container' [dragula]='\"sixth-bag\"' [dragulaOptions]=\"sixthOptions\">\r\n                <div>\r\n                  <span class='handle'>+</span>This might also be useful if you want multiple children of an element to be\r\n                  able to trigger a drag event.\r\n                </div>\r\n                <div>\r\n                  <span class='handle'>+</span>You can also use the\r\n                  <code>moves</code> option to determine whether an element can be dragged at all from a container,\r\n                  <em>drag handle or not</em>.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div>There are a few similar mechanisms to determine whether an element can be dragged from a certain container\r\n              <a href='https://github.com/bevacqua/dragula#optionsmoves'>(\r\n                <code>moves</code>)</a>, whether an element can be dropped into a certain container at a certain\r\n              position\r\n              <a href='https://github.com/bevacqua/dragula#optionsaccepts'>(\r\n                  <code>accepts</code>)</a>, and whether an element is able to originate a drag event\r\n              <a href='https://github.com/bevacqua/dragula#optionsinvalid'>(\r\n                  <code>invalid</code>)</a>.\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4>Angular Specific</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <div class='parent'>\r\n            <label for='hy'>\r\n              <strong>Angular-specific example.</strong> Fancy some nested\r\n              <code>ngFor</code>?</label>\r\n            <div class='drag-drop-wrapper'>\r\n              <div class='drag-drop-container text-center' *ngFor='let group of groups' [dragula]=\"'nested-bag'\">\r\n                <span>{{group.name}}</span>\r\n                <div *ngFor='let item of group.items' [innerHtml]='item.name'></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4>Angular Specific With Output</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <div class='parent'>\r\n            <label for='hy'>\r\n              <strong>Angular-specific example.</strong> Fancy some\r\n              <code>ngFor</code>?</label>\r\n            <div class='drag-drop-wrapper'>\r\n              <div class='drag-drop-container' [dragula]='\"another-bag\"' [dragulaModel]='many'>\r\n                <div *ngFor='let text of many' [innerHtml]='text'></div>\r\n              </div>\r\n              <div class='drag-drop-container' [dragula]='\"another-bag\"' [dragulaModel]='many2'>\r\n                <div *ngFor='let text of many2' [innerHtml]='text'></div>\r\n              </div>\r\n            </div>\r\n            <p class=\"mt-3\">Output :</p>\r\n            <div class='drag-drop-wrapper'>\r\n              <div class='drag-drop-container'>\r\n                <pre>{{many | json}}</pre>\r\n              </div>\r\n              <div class='drag-drop-container'>\r\n                <pre>{{many2 | json}}</pre>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4>Revert On Spill</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <div class='parent'>\r\n            <label for='hy'>By default, dropping an element outside of any known containers will keep the element in the last place it went\r\n              over. You can make elements go back to origin if they're dropped outside of known containers, too.\r\n            </label>\r\n            <div class='drag-drop-wrapper'>\r\n              <div class='drag-drop-container' [dragula]='\"fourth-bag\"' [dragulaOptions]=\"fourthOptions\">\r\n                <div>Moving items between containers works as usual</div>\r\n                <div>If you try to drop an item outside of any containers, though, it'll retain its original position</div>\r\n                <div>When that happens, a\r\n                  <code>cancel</code> event will be raised</div>\r\n              </div>\r\n              <div class='drag-drop-container' [dragula]='\"fourth-bag\"' [dragulaOptions]=\"fourthOptions\">\r\n                <div>Note that the dragged element will go back to the place you originally dragged it from, even if you move\r\n                  it over other containers\r\n                </div>\r\n                <div>This is useful if you want to ensure drop events only happen when the user intends for them to happen explicitly,\r\n                  avoiding surprises\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4>Copy Dragged Element</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <div class='parent'>\r\n            <label for='hy'>Copying stuff is common too, so we made it easy for you.</label>\r\n            <div class='drag-drop-wrapper'>\r\n              <div class='drag-drop-container' [dragula]='\"fifth-bag\"' [dragulaOptions]=\"fifthOptions\">\r\n                <div>When elements are copyable, they can't be sorted in their origin container</div>\r\n                <div>Copying prevents original elements from being dragged. A copy gets created and\r\n                  <em>that</em> gets dragged instead\r\n                </div>\r\n                <div>Whenever that happens, a\r\n                  <code>cloned</code> event is raised</div>\r\n              </div>\r\n              <div class='drag-drop-container' [dragula]='\"fifth-bag\"' [dragulaOptions]=\"fifthOptions\">\r\n                <div>Note that the clones get destroyed if they're not dropped into another container</div>\r\n                <div>You'll be dragging a copy, so when they're dropped into another container you'll see the duplication.\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4>Click or Drag</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <div class='parent'>\r\n            <label>\r\n              <strong>Click or Drag!</strong> Fires a click when the mouse button is released before a\r\n              <code>mousemove</code> event, otherwise a drag event is fired. No extra configuration is necessary.</label>\r\n            <div class='drag-drop-wrapper'>\r\n              <div class='drag-drop-container' [dragula]='\"seventh-bag\"'>\r\n                <div (click)='onclick(\"one\")'>{{clicked.one ? \"Clicked!\" : \"Clicking on these elements triggers a regular click event you can listen to.\"}}</div>\r\n                <div (click)='onclick(\"two\")'>{{clicked.two ? \"Clicked!\" : \"Try dragging or clicking on this element.\"}}</div>\r\n                <div (click)='onclick(\"three\")'>{{clicked.three ? \"Clicked!\" : \"Note how you can click normally?\"}}</div>\r\n                <div (click)='onclick(\"four\")'>{{clicked.four ? \"Clicked!\" : \"Drags don't trigger click events.\"}}</div>\r\n                <div (click)='onclick(\"five\")'>{{clicked.five ? \"Clicked!\" : \"Clicks don't end up in a drag, either.\"}}</div>\r\n                <div (click)='onclick(\"six\")'>{{clicked.six ? \"Clicked!\" : \"This is useful if you have elements that can be both clicked or dragged.\"}}</div>\r\n                <div (click)='onclick(\"seven\")'>{{clicked.seven ? \"ZOMG, THAT TICKLES! PLEASE. STOP.\" : \"Business as usual.\"}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- Drap and Drop Ends -->"

/***/ }),

/***/ "../../../../../src/app/components/extra/drag-drop/drag-drop.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gh-fork {\n  position: fixed;\n  top: 0;\n  right: 0;\n  border: 0; }\n\n/* dragula-specific example page styles */\n.drag-drop-wrapper {\n  display: table; }\n\n.drag-drop-container {\n  display: table-cell;\n  width: 48%;\n  border: 1px solid; }\n\n/*\r\n   * note that styling gu-mirror directly is a bad practice because it's too generic.\r\n   * you're better off giving the draggable elements a unique class and styling that directly!\r\n   */\n.drag-drop-container > div,\n.gu-mirror {\n  margin: 10px;\n  padding: 10px;\n  background-color: rgba(0, 157, 160, 0.8);\n  color: #fff;\n  transition: opacity 0.4s ease-in-out; }\n\n.drag-drop-container > div {\n  cursor: move;\n  cursor: grab;\n  cursor: -webkit-grab; }\n  .drag-drop-container > div a {\n    color: #000; }\n\n.gu-mirror {\n  cursor: grabbing;\n  cursor: -webkit-grabbing; }\n\n.drag-drop-container .ex-moved {\n  background-color: rgba(255, 88, 107, 0.8); }\n\n.drag-drop-container.ex-over {\n  background-color: rgba(255, 255, 255, 0.3); }\n\n#left-lovehandles > div,\n#right-lovehandles > div {\n  cursor: initial; }\n\n.handle {\n  padding: 0 5px;\n  margin-right: 5px;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: move; }\n\n.image-thing {\n  margin: 20px 0;\n  display: block;\n  text-align: center; }\n\n.slack-join {\n  position: absolute;\n  font-weight: normal;\n  font-size: 14px;\n  right: 10px;\n  top: 50%;\n  margin-top: -8px;\n  line-height: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/extra/drag-drop/drag-drop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_dragula__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DragDropComponent = (function () {
    function DragDropComponent(dragulaService) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.many = ['The', 'possibilities', 'are', 'endless!'];
        this.many2 = ['Explore', 'them'];
        this.groups = [
            {
                name: 'Group A',
                items: [{ name: 'Item A' }, { name: 'Item B' }, { name: 'Item C' }, { name: 'Item D' }]
            },
            {
                name: 'Group B',
                items: [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }, { name: 'Item 4' }]
            }
        ];
        this.thirdOptions = {
            removeOnSpill: true
        };
        this.fourthOptions = {
            revertOnSpill: true
        };
        this.fifthOptions = {
            copy: true
        };
        this.sixthOptions = {
            moves: function (el, container, handle) {
                // console.log(el, container);
                return handle.className === 'handle';
            }
        };
        this.clicked = {
            'one': false,
            'two': false,
            'three': false,
            'four': false,
            'five': false,
            'six': false,
            'seven': false
        };
        dragulaService.drag.subscribe(function (value) {
            _this.onDrag(value.slice(1));
        });
        dragulaService.drop.subscribe(function (value) {
            _this.onDrop(value.slice(1));
        });
        dragulaService.over.subscribe(function (value) {
            // console.log(`over: ${value[0]}`);
            _this.onOver(value.slice(1));
        });
        dragulaService.out.subscribe(function (value) {
            _this.onOut(value.slice(1));
        });
        dragulaService.dropModel.subscribe(function (value) {
            _this.onDropModel(value.slice(1));
        });
        dragulaService.removeModel.subscribe(function (value) {
            _this.onRemoveModel(value.slice(1));
        });
    }
    DragDropComponent.prototype.hasClass = function (el, name) {
        return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
    };
    DragDropComponent.prototype.addClass = function (el, name) {
        if (!this.hasClass(el, name)) {
            el.className = el.className ? [el.className, name].join(' ') : name;
        }
    };
    DragDropComponent.prototype.removeClass = function (el, name) {
        if (this.hasClass(el, name)) {
            el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
        }
    };
    DragDropComponent.prototype.onDrag = function (args) {
        var e = args[0];
        this.removeClass(e, 'ex-moved');
    };
    DragDropComponent.prototype.onDrop = function (args) {
        var e = args[0];
        this.addClass(e, 'ex-moved');
    };
    DragDropComponent.prototype.onOver = function (args) {
        var el = args[0];
        this.addClass(el, 'ex-over');
    };
    DragDropComponent.prototype.onOut = function (args) {
        var el = args[0];
        this.removeClass(el, 'ex-over');
    };
    DragDropComponent.prototype.onclick = function (key) {
        var _this = this;
        this.clicked[key] = true;
        setTimeout(function () {
            _this.clicked[key] = false;
        }, 2000);
    };
    DragDropComponent.prototype.onDropModel = function (args) {
        var el = args[0], target = args[1], source = args[2];
    };
    DragDropComponent.prototype.onRemoveModel = function (args) {
        var el = args[0], source = args[1];
    };
    DragDropComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-drag-drop',
            template: __webpack_require__("../../../../../src/app/components/extra/drag-drop/drag-drop.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/extra/drag-drop/drag-drop.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_dragula__["DragulaService"]])
    ], DragDropComponent);
    return DragDropComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/extra/editor/counter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//interface ends
var Counter = (function () {
    function Counter(quill, options) {
        var _this = this;
        this.quill = quill;
        this.options = options;
        var container = document.querySelector(this.options.container);
        this.quill.on('text-change', function () {
            var length = _this.calculate();
            container.innerHTML = length + ' ' + _this.options.unit + 's';
        });
    }
    //caculate words typed
    Counter.prototype.calculate = function () {
        var text = this.quill.getText().trim();
        if (this.options.unit === 'word') {
            return !text ? 0 : text.split(/\s+/).length;
        }
        return text.length;
    };
    return Counter;
}());
/* harmony default export */ __webpack_exports__["a"] = (Counter);


/***/ }),

/***/ "../../../../../src/app/components/extra/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"content-header\">Quill Editor</div>\r\n    <p class=\"content-sub-header\">quill editor with angular and TypeScript. ngx-quill is the new angular 2 and beyond implementation of ngQuill.</p>\r\n  </div>\r\n</div>\r\n<!-- Default Quill Editor starts -->\r\n<section id=\"quill-editor\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4>Default editor</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <quill-editor [style]=\"{height: '200px'}\" (onEditorCreated)=\"setFocus($event)\"></quill-editor>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Default Quill Editor Ends -->\r\n\r\n  <!-- Reactive forms Quill Editor starts -->\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4>Reactive Forms and patch value</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <form [formGroup]=\"form\">\r\n            <div class=\"mb-2\">\r\n              <button type=\"button\" class=\"btn btn-raised btn-primary\" (click)=\"hide=!(!!hide)\">hide / show</button>\r\n              <button type=\"button\" class=\"btn btn-raised btn-primary\" (click)=\"patchValue()\">patchValue</button>\r\n            </div>\r\n            <quill-editor #editor [style.display]=\"hide ? 'none' : 'block'\" formControlName=\"editor\"></quill-editor>\r\n            <p class=\"mt-2\">\r\n              Output : {{form.controls.editor.value}}\r\n            </p>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Reactive forms Quill Editor ends -->\r\n\r\n  <!-- Quill Editor without toolbar starts -->\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4>Editor without toolbar + required and ngModule</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <div class=\"mb-2\">\r\n            <button (click)=\"toggleReadOnly()\" class=\"btn btn-raised btn-primary\">Toggle ReadOnly</button>\r\n          </div>\r\n          <quill-editor [(ngModel)]=\"title\" [maxLength]=\"5\" [minLength]=\"3\" [required]=\"true\" [readOnly]=\"isReadOnly\" [modules]=\"{toolbar: false}\"\r\n            (onContentChanged)=\"logChange($event);\" (onSelectionChanged)=\"logSelection($event);\"></quill-editor>\r\n          <p class=\"mt-2\">\r\n            isReadOnly : {{isReadOnly}} <br> Title : {{title}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Quill Editor without toolbar ends -->\r\n\r\n  <!-- Quill Editor with custom toolbar and word counter starts -->\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4>Custom Toolbar with toolbar title-attributes + Word counter</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <quill-editor [modules]=\"{ counter: { container: '#counter', unit: 'word' } }\">\r\n            <div quill-editor-toolbar>\r\n              <span class=\"ql-formats\">\r\n              <select class=\"ql-font\">\r\n                <option value=\"aref\">Aref Ruqaa</option>\r\n                <option value=\"mirza\">Mirza</option>\r\n                <option selected>Roboto</option>\r\n              </select>\r\n              <select class=\"ql-align\" [title]=\"'Aligment'\">\r\n                <option selected></option>\r\n                <option value=\"center\"></option>\r\n                <option value=\"right\"></option>\r\n                <option value=\"justify\"></option>\r\n              </select>\r\n              <select class=\"ql-align\" [title]=\"'Aligment2'\">\r\n                <option selected></option>\r\n                <option value=\"center\"></option>\r\n                <option value=\"right\"></option>\r\n                <option value=\"justify\"></option>\r\n              </select>\r\n            </span>\r\n              <span class=\"ql-formats\">\r\n              <div id=\"counter\"></div>\r\n            </span>\r\n            </div>\r\n          </quill-editor>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Quill Editor with custom toolbar and word counter ends -->\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/extra/editor/editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "quill-editor {\n  display: block; }\n\n.ng-invalid {\n  border: 1px dashed red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/extra/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_quill_src_quill_editor_component__ = __webpack_require__("../../../../ngx-quill/src/quill-editor.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_quill__ = __webpack_require__("../../../../quill/dist/quill.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_quill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_quill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__counter__ = __webpack_require__("../../../../../src/app/components/extra/editor/counter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// override p with div tag

var Parchment = __WEBPACK_IMPORTED_MODULE_3_quill___default.a.import('parchment');
var Block = Parchment.query('block');
Block.tagName = 'DIV';
// or class NewBlock extends Block {}; NewBlock.tagName = 'DIV';
__WEBPACK_IMPORTED_MODULE_3_quill___default.a.register(Block /* or NewBlock */, true);

__WEBPACK_IMPORTED_MODULE_3_quill___default.a.register('modules/counter', __WEBPACK_IMPORTED_MODULE_4__counter__["a" /* default */]);
var EditorComponent = (function () {
    function EditorComponent(fb) {
        //declarations
        this.title = 'Quill works!';
        this.hide = false;
        this.isReadOnly = false;
        this.form = fb.group({
            editor: ['test']
        });
    }
    EditorComponent.prototype.ngOnInit = function () {
        this.form
            .controls
            .editor
            .valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(function (data) {
            //your code here
        });
        this.editor
            .onContentChanged.debounceTime(400)
            .distinctUntilChanged()
            .subscribe(function (data) {
            //your code here
        });
    };
    //events starts
    EditorComponent.prototype.setFocus = function ($event) {
        $event.focus();
    };
    EditorComponent.prototype.patchValue = function () {
        this.form.controls['editor'].patchValue(this.form.controls['editor'].value + " patched!");
    };
    EditorComponent.prototype.toggleReadOnly = function () {
        this.isReadOnly = !this.isReadOnly;
    };
    EditorComponent.prototype.logChange = function ($event) {
        //your code here
    };
    EditorComponent.prototype.logSelection = function ($event) {
        //your code here
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editor'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ngx_quill_src_quill_editor_component__["a" /* QuillEditorComponent */])
    ], EditorComponent.prototype, "editor", void 0);
    EditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__("../../../../../src/app/components/extra/editor/editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/extra/editor/editor.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/extra/nouislider/nouislider.component.html":
/***/ (function(module, exports) {

module.exports = "<!--NoUI Slider Starts-->\r\n<section id=\"slider-values\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">NoUI Slider Options</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Single Value NoUI Slider Starts-->\r\n        <div class=\"col-sm-12 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Single Value</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <div class=\"form-group\">\r\n                            <nouislider [min]=\"someMin\" [max]=\"someMax\" [step]=\"0.05\" [(ngModel)]=\"someValue\"  [disabled]=\"disabled\"></nouislider>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Single Value NoUI Slider Ends-->\r\n        \r\n        <!--Single Value NoUI Slider in form Starts-->\r\n        <div class=\"col-sm-12 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Single value (in &lt;form&gt;)</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <div class=\"form-group\">\r\n                            <form [formGroup]=\"form1\">\r\n                                <nouislider [min]=\"0\" [max]=\"20\" [step]=\"0.5\" [formControl]=\"form1.controls.single\"></nouislider>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Single Value NoUI Slider in form Ends-->\r\n\r\n        <!--Range NoUI Slider Starts-->\r\n        <div class=\"col-sm-12 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Range</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <div class=\"form-group\">\r\n                            <nouislider [connect]=\"true\" [min]=\"0\" [max]=\"15\" [step]=\"1\" [(ngModel)]=\"someRange\"></nouislider>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>   \r\n        <!--Range NoUI Slider Ends-->\r\n\r\n        <!--Range NoUI Slider in form Starts-->\r\n        <div class=\"col-sm-12 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Range (in &lt;form&gt;)</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <div class=\"form-group\">\r\n                            <form [formGroup]=\"form2\">\r\n                                <nouislider [connect]=\"true\" [min]=\"0\" [max]=\"10\" [step]=\"1\" [formControl]=\"form2.controls.range\"></nouislider>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Range NoUI Slider in form Ends-->\r\n\r\n        <!--Range NoUI Slider with config Starts-->\r\n        <div class=\"col-sm-12 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Range with config</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center mb-3\">\r\n                        <div class=\"form-group\">\r\n                            <nouislider [config]=\"someRange2config\" [limit]=\"10\" [(ngModel)]=\"someRange2\"></nouislider>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Range NoUI Slider with config Ends-->\r\n\r\n        <!--Keyboard support Starts-->\r\n        <div class=\"col-sm-12 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Keyboard support</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center mb-3\">\r\n                        <div class=\"form-group\">\r\n                            <nouislider [config]=\"someKeyboardConfig\" [(ngModel)]=\"someKeyboard\"></nouislider>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Keyboard support Ends-->\r\n\r\n        <!--With Custom Key Handler Starts-->\r\n        <div class=\"col-sm-12 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">With Custom Key Handler</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center mb-3\">\r\n                        <div class=\"form-group\">\r\n                            <nouislider [config]=\"someKeyboardConfig2\" [(ngModel)]=\"someKeyboard2\"></nouislider>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--With Custom Key Handler Ends-->\r\n\r\n        <!--NoUI Slider with Tooltip Starts-->\r\n        <div class=\"col-sm-12 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Tooltips</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <div class=\"form-group\">\r\n                            <nouislider [min]=\"0\" [max]=\"10\" [step]=\"0.05\" [(ngModel)]=\"someRange3\" [tooltips]=\"[ false, true ]\" style=\"margin-top: 4em;\"></nouislider>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--NoUI Slider with Tooltip Ends-->\r\n\r\n        <!--NoUI Slider with Tooltip custom formatting Starts-->\r\n        <div class=\"col-sm-12 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">With custom formatting</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <div class=\"form-group\">\r\n                            <nouislider [config]=\"someTimeConfig\" [(ngModel)]=\"someTime\" style=\"margin-bottom: 5rem\"></nouislider>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--NoUI Slider with Tooltip custom formatting Ends-->\r\n    </div>\r\n</section>\r\n<!-- // Slider values section end -->"

/***/ }),

/***/ "../../../../../src/app/components/extra/nouislider/nouislider.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/extra/nouislider/nouislider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TimeFormatter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NouiSliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimeFormatter = (function () {
    function TimeFormatter() {
    }
    TimeFormatter.prototype.to = function (value) {
        var h = Math.floor(value / 3600);
        var m = Math.floor(value % 3600 / 60);
        var s = value - 60 * m - 3600 * h;
        var values = [h, m, s];
        var timeString = '';
        var i = 0;
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var v = values_1[_i];
            if (values[i] < 10)
                timeString += '0';
            timeString += values[i].toFixed(0);
            if (i < 2) {
                timeString += ':';
            }
            i++;
        }
        return timeString;
    };
    ;
    TimeFormatter.prototype.from = function (value) {
        var v = value.split(':').map(parseInt);
        var time = 0;
        time += v[0] * 3600;
        time += v[1] * 60;
        time += v[2];
        return time;
    };
    return TimeFormatter;
}());

var NouiSliderComponent = (function () {
    function NouiSliderComponent(formBuilder) {
        var _this = this;
        this.formBuilder = formBuilder;
        // Variable Declaration
        this.disabled = false;
        this.keyupLabelOn = false;
        this.keydownLabelOn = false;
        this.someValue = 5;
        this.someMin = -10;
        this.someMax = 10;
        this.someRange = [3, 7];
        this.someRange2 = [10, 15];
        this.someRange3 = [2, 8];
        this.someTime = 0;
        this.someRange2config = {
            behaviour: 'drag',
            connect: true,
            margin: 1,
            limit: 5,
            range: {
                min: 0,
                max: 20
            },
            pips: {
                mode: 'steps',
                density: 5
            }
        };
        // Keyboard Support
        this.someKeyboard = [1, 3];
        // Keyboard Support Configuration
        this.someKeyboardConfig = {
            behaviour: 'drag',
            connect: true,
            start: [0, 5],
            keyboard: true,
            step: 0.1,
            pageSteps: 10,
            range: {
                min: 0,
                max: 5
            },
            pips: {
                mode: 'count',
                density: 2,
                values: 6,
                stepped: true
            }
        };
        // With Custom Key Handler
        this.someKeyboard2 = [1, 3];
        // With Custom Key Handler Support
        this.someTimeConfig = {
            start: 86400 / 2,
            range: {
                min: 0,
                max: 86399
            },
            tooltips: new TimeFormatter(),
            step: 1
        };
        // EventHandler
        this.someKeyboard2EventHandler = function (e) {
            //your code here
            // determine which handle triggered the event
            var index = parseInt(e.target.getAttribute('data-handle'));
            var multiplier = 0;
            var stepSize = 0.1;
            switch (e.which) {
                case 40: // ArrowDown
                case 37:// ArrowLeft
                    multiplier = -2;
                    e.preventDefault();
                    break;
                case 38: // ArrowUp
                case 39:// ArrowRight
                    multiplier = 3;
                    e.preventDefault();
                    break;
                default:
                    break;
            }
            var delta = multiplier * stepSize;
            var newValue = [].concat(_this.someKeyboard2);
            newValue[index] += delta;
            _this.someKeyboard2 = newValue;
        };
        this.someKeyboardConfig2 = {
            behaviour: 'drag',
            connect: true,
            start: [0, 5],
            step: 0.1,
            range: {
                min: 0,
                max: 5
            },
            pips: {
                mode: 'count',
                density: 2,
                values: 6,
                stepped: true
            },
            keyboard: true,
            onKeydown: this.someKeyboard2EventHandler,
        };
    }
    NouiSliderComponent.prototype.ngOnInit = function () {
        this.form1 = this.formBuilder.group({ 'single': [10] });
        this.form2 = this.formBuilder.group({ 'range': [[2, 8]] });
    };
    NouiSliderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nouislider',
            template: __webpack_require__("../../../../../src/app/components/extra/nouislider/nouislider.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/extra/nouislider/nouislider.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], NouiSliderComponent);
    return NouiSliderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/extra/sweet-alerts/sweet-alerts.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- // Basic example section Starts -->\r\n<section id=\"basic-examples\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 mt-3 mb-1\">\r\n            <div class=\"content-header\">SweetAlert</div>\r\n            <p class=\"content-sub-header\">SweetAlert automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. It's even highly customizable, as you can see below!</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n                <div class=\"row mt-1\">\r\n                    <div class=\"col-md-4 col-sm-6 col-12\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-raised btn-block\" id=\"basic-alert\" (click)=\"basicAlert()\">Basic</button>\r\n                    </div>\r\n                    <div class=\"col-md-4 col-sm-6 col-12\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-raised btn-block\" id=\"with-title\" (click)=\"withTitle()\">With Title</button>\r\n                    </div>\r\n                    <div class=\"col-md-4 col-sm-12\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-raised btn-block\" id=\"html-alert\" (click)=\"htmlAlert()\">HTML</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- // Basic example section end -->\r\n\r\n<!-- Types section start -->\r\n<section id=\"types\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 mt-3 mb-1\">\r\n            <div class=\"content-header\">Types</div>\r\n            <p class=\"content-sub-header\">The type of the modal. SweetAlert comes with 5 built-in types which will show a corresponding icon animation: \"warning\", \"error\", \"success\" \"info\" and \"question\". You can also set it as \"input\" to get a prompt modal. It can either be put in the object under the key \"type\" or passed as the third parameter of the function.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n                <div class=\"row mt-1\">\r\n                    <div class=\"col-md-4 col-sm-6 col-12\">\r\n                        <button type=\"button\" class=\"btn btn-secondary btn-raised btn-block mb-5\" id=\"type-question\" (click)=\"typeQuestion()\">Question</button>\r\n                    </div>\r\n                    <div class=\"col-md-4 col-sm-6 col-12\">\r\n                        <button type=\"button\" class=\"btn btn-success btn-raised btn-block mb-5\" id=\"type-success\" (click)=\"typeSuccess()\">Success</button>\r\n                    </div>\r\n                    <div class=\"col-md-4 col-sm-6 col-12\">\r\n                        <button type=\"button\" class=\"btn btn-info btn-raised btn-block mb-5\" id=\"type-info\" (click)=\"typeInfo()\">Info</button>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-12\">\r\n                        <button type=\"button\" class=\"btn btn-warning btn-raised btn-block mb-5\" id=\"type-warning\" (click)=\"typeWarning()\">Warning</button>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-12\">\r\n                        <button type=\"button\" class=\"btn btn-danger btn-raised btn-block mb-5\" id=\"type-error\" (click)=\"typeError()\">Error</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- // Types section end -->\r\n\r\n\r\n<!-- Options section start -->\r\n<section id=\"options\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 mt-3 mb-1\">\r\n            <div class=\"content-header\">Options</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n                <div class=\"row mt-1\">\r\n                    <div class=\"col-lg-4 col-sm-6 col-12\">\r\n                        <h5 class=\"mt-4\">Custom Icon</h5>\r\n                        <p><code>imageUrl</code> is used to add a customized icon for the modal. Should contain a string with the path to the image.</p>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-raised btn-block\" id=\"custom-icon\" (click)=\"customIcon()\">Custom Icon</button>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-sm-6 col-12\">\r\n                        <h5 class=\"mt-4\">Auto Close Timer</h5>\r\n                        <p>A message with auto close timer. <code>timer</code> is default set to <code>null</code>. You can set timer in ms (milliseconds).</p>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-raised btn-block\" id=\"auto-close\" (click)=\"autoClose()\">Auto Close</button>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-sm-6 col-12\">\r\n                        <h5 class=\"mt-4\">Allow Outside Click</h5>\r\n                        <p>If <code>allowOutsideClick</code> is set to <code>true</code>, the user can dismiss the modal by clicking outside it.</p>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-raised btn-block\" id=\"outside-click\" (click)=\"outsideClick()\">Click Outside</button>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-sm-6 col-12\">\r\n                        <h5 class=\"mt-4\">Ajax Request</h5>\r\n                        <p>Set <code>showLoaderOnConfirm</code> to true to disable the buttons and show that something is loading. AJAX request for example.</p>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-raised btn-block\" id=\"ajax-request\" (click)=\"ajaxRequest()\">Ajax</button>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-sm-6 col-12\">\r\n                        <h5 class=\"mt-4\">Button Options</h5>\r\n                        <p>Custom HTML description and buttons</p>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-raised btn-block\" id=\"custom-button\" (click)=\"customButton()\">Custom HTML and buttons</button>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-sm-6 col-12\">\r\n                        <h5 class=\"mt-4\">Prompt Function</h5>\r\n                        <p>A replacement for the \"prompt\" function. You can set <code>type</code> as \"input\" to get a prompt modal.</p>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-raised btn-block\" id=\"prompt-function\" (click)=\"promptFunction()\">Prompt</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- // Options section end -->\r\n\r\n<!-- Button Action option section start -->\r\n<section id=\"action-option\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 mt-3 mb-1\">\r\n            <div class=\"content-header\">Button Actions</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n                <div class=\"row mt-1\">\r\n                    <div class=\"col-lg-4 col-sm-6 col-12\">\r\n                        <h5 class=\"mt-4\">Confirm Button Action</h5>\r\n                        <p>A warning message, with a function attached to the \"Confirm\"-button.</p>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-raised btn-block\" id=\"confirm-text\" (click)=\"confirmText()\">Confirm Text</button>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-sm-6 col-12\">\r\n                        <h5 class=\"mt-4\">Confirm &amp; Cancel Button</h5>\r\n                        <p>Confirm and cancel button excecution options.</p>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-raised btn-block\" id=\"confirm-cancel\" (click)=\"confirmCancelButton()\">Buttons Actions</button>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-sm-6 col-12\">\r\n                        <h5 class=\"mt-4\">Chaining modals</h5>\r\n                        <p>Changing modal on next button.</p>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-raised btn-block\" id=\"steps\" (click)=\"steps()\">Steps</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- // Button Confirm option section end -->"

/***/ }),

/***/ "../../../../../src/app/components/extra/sweet-alerts/sweet-alerts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/extra/sweet-alerts/sweet-alerts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SweetAlertsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_sweet_alerts__ = __webpack_require__("../../../../../src/app/shared/data/sweet-alerts.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SweetAlertsComponent = (function () {
    function SweetAlertsComponent() {
    }
    // Simple Alert
    SweetAlertsComponent.prototype.basicAlert = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_data_sweet_alerts__["c" /* basicAlert */]();
    };
    // Alert with Title
    SweetAlertsComponent.prototype.withTitle = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_data_sweet_alerts__["q" /* withTitle */]();
    };
    //  HTML Alert
    SweetAlertsComponent.prototype.htmlAlert = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_data_sweet_alerts__["h" /* htmlAlert */]();
    };
    // Question Type Alert
    SweetAlertsComponent.prototype.typeQuestion = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_data_sweet_alerts__["n" /* typeQuestion */]();
    };
    // Success Type Alert
    SweetAlertsComponent.prototype.typeSuccess = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_data_sweet_alerts__["o" /* typeSuccess */]();
    };
    // Info Type Alert
    SweetAlertsComponent.prototype.typeInfo = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_data_sweet_alerts__["m" /* typeInfo */]();
    };
    // Warning Type Alert
    SweetAlertsComponent.prototype.typeWarning = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_data_sweet_alerts__["p" /* typeWarning */]();
    };
    // Error Type Alert
    SweetAlertsComponent.prototype.typeError = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_data_sweet_alerts__["l" /* typeError */]();
    };
    // Custom Icon 
    SweetAlertsComponent.prototype.customIcon = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_data_sweet_alerts__["g" /* customIcon */]();
    };
    // Auto close timer
    SweetAlertsComponent.prototype.autoClose = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_data_sweet_alerts__["b" /* autoClose */]();
    };
    // Allow Outside Click
    SweetAlertsComponent.prototype.outsideClick = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_data_sweet_alerts__["i" /* outsideClick */]();
    };
    // Ajax Request
    SweetAlertsComponent.prototype.ajaxRequest = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_data_sweet_alerts__["a" /* ajaxRequest */]();
    };
    // Button Options
    SweetAlertsComponent.prototype.customButton = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_data_sweet_alerts__["f" /* customButton */]();
    };
    // Prompt Function
    SweetAlertsComponent.prototype.promptFunction = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_data_sweet_alerts__["j" /* promptFunction */]();
    };
    // Confirm Button Action
    SweetAlertsComponent.prototype.confirmText = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_data_sweet_alerts__["e" /* confirmText */]();
    };
    // Confirm & Cancel Button
    SweetAlertsComponent.prototype.confirmCancelButton = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_data_sweet_alerts__["d" /* confirmCancelButton */]();
    };
    // Chaining modals / Steps
    SweetAlertsComponent.prototype.steps = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_data_sweet_alerts__["k" /* steps */]();
    };
    SweetAlertsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sweet-alerts',
            template: __webpack_require__("../../../../../src/app/components/extra/sweet-alerts/sweet-alerts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/extra/sweet-alerts/sweet-alerts.component.scss")]
        })
    ], SweetAlertsComponent);
    return SweetAlertsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/extra/toastr/toastr.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Toastr Starts-->\r\n<section id=\"toastr\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 mt-3 mb-1\">\r\n            <div class=\"content-header\">Toastr</div>\r\n            <p class=\"content-sub-header\">By default, the toastr will show up at top right corner of the page view, and will automatically dismiss in 3 seconds. You can configure the toasts using ToastOptions class.</p>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Types section start -->\r\n    <section id=\"types\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <div class=\"card-title\">Types</div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"row mt-1\">\r\n                        <div class=\"col-md-4 col-sm-12 text-center\">\r\n                            <button type=\"button\" class=\"btn btn-success btn-block btn-raised mb-5\" id=\"type-success\" (click)=\"typeSuccess()\">Success</button>\r\n                        </div>\r\n                        <div class=\"col-md-4 col-sm-12 text-center\">\r\n                            <button type=\"button\" class=\"btn btn-danger btn-block btn-raised mb-5\" id=\"type-error\" (click)=\"typeError()\">Error</button>\r\n                        </div>\r\n                        <div class=\"col-md-4 col-sm-12 text-center\">\r\n                            <button type=\"button\" class=\"btn btn-info btn-block btn-raised mb-5\" id=\"type-info\" (click)=\"typeInfo()\">Info</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4 col-md-offset-1 text-center\">\r\n                            <button type=\"button\" class=\"btn btn-warning btn-block btn-raised mb-5\" id=\"type-warning\" (click)=\"typeWarning()\">Warning</button>\r\n                        </div>\r\n                        <div class=\"col-md-4 col-md-offset-1 text-center\">\r\n                            <button type=\"button\" class=\"btn btn-secondary btn-block btn-raised mb-5\" id=\"type-custom\" (click)=\"typeCustom()\">Custom</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!-- // Types section end -->\r\n\r\n    <!-- Duration & Timeout section start -->\r\n    <section id=\"duration-timeout\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12 mt-3 mb-1\">\r\n                <div class=\"content-header\">Dissmiss Options</div>\r\n                <p class=\"content-sub-header\">Determine how a displayed toaster can be dismissed. Allowed values are: 'auto', 'click', 'controlled'.</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4 col-sm-12\">\r\n                            <h5>Auto</h5>\r\n                            <p>Toaster will auto dismiss in miliseconds.</p>\r\n                            <button type=\"button\" class=\"btn btn-primary btn-block btn-raised\" id=\"timeout\" (click)=\"timeout()\">Show Toast</button>\r\n                        </div>\r\n                        <div class=\"col-md-4 col-sm-12\">\r\n                            <h5>Click</h5>\r\n                            <p>Toaster will be dismissed when user click on it.</p>\r\n                            <button type=\"button\" class=\"btn btn-primary btn-block btn-raised\" id=\"show-clear-toast\" (click)=\"dismissToastOnClick()\">Clear Toast on Click</button>\r\n                        </div>\r\n                        <div class=\"col-md-4 col-sm-12\">\r\n                            <h5>Controlled</h5>\r\n                            <p>Toaster will be dismissed based on specific logic.</p>\r\n                            <button type=\"button\" class=\"btn btn-primary btn-block btn-raised\" id=\"show-clear-toast\" (click)=\"dismissToastControlled()\">Clear Toast Controlled</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!-- // Duration & Timeout section end -->\r\n\r\n    <!-- Clear toasts section start -->\r\n    <section id=\"clear-toasts\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12 mt-3 mb-1\">\r\n                <div class=\"content-header\">Toast Options</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"row mt-1\">\r\n                        <div class=\"col-md-4 col-sm-12\">\r\n                            <h5 class=\"mt-4\">Show Close Button</h5>\r\n                            <p>Determines whether toast should include 'x' close button. Defaults to false.</p>\r\n                            <button type=\"button\" class=\"btn btn-primary btn-block btn-raised\" id=\"close-button\" (click)=\"showCloseButton()\">With Close Icon</button>\r\n                        </div>\r\n                        <div class=\"col-md-4 col-sm-12\">\r\n                            <h5 class=\"mt-4\">Title Class</h5>\r\n                            <p>CSS class for title within toast.Adding <code>h3</code> class to title.</p>\r\n                            <button type=\"button\" class=\"btn btn-primary btn-block btn-raised\" id=\"title-class\" (click)=\"titleClass()\">Title Class</button>\r\n                        </div>\r\n                        <div class=\"col-md-4 col-sm-12\">\r\n                            <h5 class=\"mt-4\">Message Class</h5>\r\n                            <p>CSS class for message within toast. Adding <code>text-uppercase</code> class to message.</p>\r\n                            <button type=\"button\" class=\"btn btn-primary btn-block btn-raised\" id=\"message-class\" (click)=\"messageClass()\">Message Class</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row mt-1\">                \r\n                        <div class=\"col-md-4 col-sm-12\">\r\n                            <h5 class=\"mt-4\">Enable HTML</h5>\r\n                            <p>Allow input of message to be HTML. Default to false.</p>\r\n                            <button type=\"button\" class=\"btn btn-primary btn-block btn-raised\" id=\"html-toast\" (click)=\"enableHtml()\">HTML Enabled</button>\r\n                        </div>\r\n                        <div class=\"col-md-4 col-sm-12\">\r\n                            <h5 class=\"mt-4\">Clear</h5>\r\n                            <p>Remove current toasts</p>\r\n                            <button type=\"button\" class=\"btn btn-primary btn-block btn-raised\" id=\"show-clear-toast\" (click)=\"clearToast()\">Clear Toast</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!-- // Clear toasts section end -->\r\n</section>\r\n<!--Toastr Ends-->"

/***/ }),

/***/ "../../../../../src/app/components/extra/toastr/toastr.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/extra/toastr/toastr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toastr_service__ = __webpack_require__("../../../../../src/app/components/extra/toastr/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// let style = require("../../../../../src/assets/css/ng2-toastr.min.css");
var ToastrComponent = (function () {
    function ToastrComponent(service) {
        this.service = service;
    }
    // Success Type
    ToastrComponent.prototype.typeSuccess = function () {
        this.service.typeSuccess();
    };
    // Success Type
    ToastrComponent.prototype.typeInfo = function () {
        this.service.typeInfo();
    };
    // Success Type
    ToastrComponent.prototype.typeWarning = function () {
        this.service.typeWarning();
    };
    // Success Type
    ToastrComponent.prototype.typeError = function () {
        this.service.typeError();
    };
    // Custom Type
    ToastrComponent.prototype.typeCustom = function () {
        this.service.typeCustom();
    };
    // Remove current toasts using animation
    ToastrComponent.prototype.clearToast = function () {
        this.service.clearToast();
    };
    // Show close button
    ToastrComponent.prototype.showCloseButton = function () {
        this.service.showCloseButton();
    };
    //Dismiss toastr on Click
    ToastrComponent.prototype.dismissToastOnClick = function () {
        this.service.dismissToastOnClick();
    };
    //Dismiss toastr Controlled
    ToastrComponent.prototype.dismissToastControlled = function () {
        this.service.dismissToastControlled();
    };
    // Timeout
    ToastrComponent.prototype.timeout = function () {
        this.service.timeout();
    };
    // Enable HTML
    ToastrComponent.prototype.enableHtml = function () {
        this.service.enableHtml();
    };
    // Title Class
    ToastrComponent.prototype.titleClass = function () {
        this.service.titleClass();
    };
    // Message Class
    ToastrComponent.prototype.messageClass = function () {
        this.service.messageClass();
    };
    ToastrComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-toastr',
            template: __webpack_require__("../../../../../src/app/components/extra/toastr/toastr.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/extra/toastr/toastr.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__toastr_service__["a" /* ToastrService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__toastr_service__["a" /* ToastrService */]])
    ], ToastrComponent);
    return ToastrComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/extra/toastr/toastr.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastrService = (function () {
    function ToastrService(toastr) {
        this.toastr = toastr;
    }
    // Success Type
    ToastrService.prototype.typeSuccess = function () {
        this.toastr.success('You are awesome!', 'Success!');
    };
    // Success Type
    ToastrService.prototype.typeInfo = function () {
        this.toastr.info('We do have the Kapua suite available.', 'Turtle Bay Resort');
    };
    // Success Type
    ToastrService.prototype.typeWarning = function () {
        this.toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!');
    };
    // Success Type
    ToastrService.prototype.typeError = function () {
        this.toastr.error('I do not think that word means what you think it means.', 'Inconceivable!');
    };
    // Custom Type
    ToastrService.prototype.typeCustom = function () {
        this.toastr.custom('<span style="color: red">Message in red.</span>', null, { enableHTML: true });
    };
    // Timeout
    ToastrService.prototype.timeout = function () {
        this.toastr.error('I do not think that word means what you think it means.', 'Timeout!', { "toastLife": 2000 });
    };
    //Dismiss toastr on Click
    ToastrService.prototype.dismissToastOnClick = function () {
        this.toastr.info('We do have the Kapua suite available.', 'Turtle Bay Resort', { dismiss: 'click' });
    };
    // Dismiss Toast controlled code
    ToastrService.prototype.dismissToastControlled = function () {
        var _this = this;
        this.toastr.success('You are awesome!', 'Success!', { dismiss: 'controlled' })
            .then(function (toast) {
            setTimeout(function () {
                _this.toastr.dismissToast(toast);
            }, 10000);
        });
    };
    // Remove current toasts using animation
    ToastrService.prototype.clearToast = function () {
        this.toastr.clearAllToasts();
    };
    // Show close button
    ToastrService.prototype.showCloseButton = function () {
        this.toastr.info('Have fun storming the castle!', 'Miracle Max Says', { showCloseButton: true });
    };
    // Enable  HTML
    ToastrService.prototype.enableHtml = function () {
        this.toastr.info('<i>Have fun <b>storming</b> the castle!</i>', 'Miracle Max Says', { enableHTML: true });
    };
    // Title Class
    ToastrService.prototype.titleClass = function () {
        this.toastr.info('Have fun storming the castle!', 'Miracle Max Says', { titleClass: 'h3' });
    };
    // Message Class
    ToastrService.prototype.messageClass = function () {
        this.toastr.info('Have fun storming the castle!', 'Miracle Max Says', { messageClass: 'text-uppercase' });
    };
    ToastrService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ng2_toastr_ng2_toastr__["ToastsManager"]])
    ], ToastrService);
    return ToastrService;
}());



/***/ }),

/***/ "../../../../../src/app/components/extra/tour/tour.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"content-header\">Tour</div>\r\n    <p class=\"content-sub-header\">Apex template tour</p>\r\n  </div>\r\n</div>\r\n<!-- Apex template tour starts -->\r\n<section id=\"quill-editor\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>User Tour</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div>\r\n            <p>Click this button to start a demo user Tour.</p>\r\n            <button id=\"btnStartTour\" class=\"btn btn-primary btn-raised\">Start Tour</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>Define Your Steps</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div>\r\n            <pre class=\"language-javascript\">\r\n<code class=\"language-javascript\">steps: [  \r\n    &#123;\r\n        title: \"Customizer\",\r\n        content: \"This is the customizer\",\r\n        target: \"customizer-toggle-icon\",\r\n        placement: \"left\"\r\n    },\r\n    &#123;\r\n        ...\r\n    }     \r\n]</code></pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>Initialize Tour</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div>\r\n            <pre class=\"language-javascript\">\r\n<code class=\"language-javascript\">hopscotch.startTour(tour);</code></pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Apex template tour Ends -->\r\n\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/extra/tour/tour.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/extra/tour/tour.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TourComponent = (function () {
    function TourComponent() {
    }
    TourComponent.prototype.ngOnInit = function () {
        $.getScript('./assets/js/hopscotch.min.js');
        $.getScript('./assets/js/tour.js');
        $.getScript('./assets/js/prism.min.js');
    };
    TourComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tour',
            template: __webpack_require__("../../../../../src/app/components/extra/tour/tour.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/extra/tour/tour.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TourComponent);
    return TourComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/extra/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "<!--File Upload Starts-->\r\n<section id=\"file-upload\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Angular2 File Upload</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-6\">\r\n          <div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\"\r\n            class=\"py-5 mb-3 text-center font-medium-5 text-uppercase grey my-drop-zone\">\r\n            Base dropzone\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12 col-lg-6\">\r\n          <div ng2FileDrop [ngClass]=\"{'another-file-over-class': hasAnotherDropZoneOver}\" (fileOver)=\"fileOverAnother($event)\" [uploader]=\"uploader\"\r\n            class=\"py-5 mb-3 text-center font-medium-5 text-uppercase grey my-drop-zone\">\r\n            Another dropzone\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n          <h4>Select files</h4>\r\n          <div>Multiple</div>\r\n          <label class=\"custom-file mb-3\">\r\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple class=\"custom-file-input\">\r\n            <span class=\"custom-file-control\"></span>\r\n          </label>\r\n\r\n          <div>Single</div>\r\n          <label class=\"custom-file\">\r\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" class=\"custom-file-input\">\r\n            <span class=\"custom-file-control\"></span>\r\n          </label>\r\n        </div>\r\n\r\n        <div class=\"col-md-9\">\r\n          <h4>Upload queue</h4>\r\n          <p>Queue length: {{ uploader?.queue?.length }}</p>\r\n\r\n          <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th width=\"50%\">Name</th>\r\n                <th>Size</th>\r\n                <th>Progress</th>\r\n                <th>Status</th>\r\n                <th>Actions</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let item of uploader.queue\">\r\n                <td><strong>{{ item?.file?.name }}</strong></td>\r\n                <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n                <td *ngIf=\"uploader.isHTML5\">\r\n                  <div class=\"progress\" style=\"margin-bottom: 0;\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <span *ngIf=\"item.isSuccess\"><i class=\"fa fa-ok\"></i></span>\r\n                  <span *ngIf=\"item.isCancel\"><i class=\"fa fa-ban\"></i></span>\r\n                  <span *ngIf=\"item.isError\"><i class=\"fa fa-remove\"></i></span>\r\n                </td>\r\n                <td nowrap>\r\n                  <button type=\"button\" class=\"btn btn-raised btn-success btn-sm\" (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\r\n                  <span class=\"fa fa-upload\"></span> Upload\r\n                </button>\r\n                  <button type=\"button\" class=\"btn btn-raised btn-warning btn-sm\" (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\r\n                  <span class=\"fa fa-ban\"></span> Cancel\r\n                </button>\r\n                  <button type=\"button\" class=\"btn btn-raised btn-danger btn-sm\" (click)=\"item.remove()\">\r\n                  <span class=\"fa fa-trash\"></span> Remove\r\n                </button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n\r\n          <div>\r\n            <p>Queue progress:\r\n              <ngb-progressbar type=\"primary\" [value]=\"uploader.progress\"></ngb-progressbar>\r\n            </p>\r\n            <button type=\"button\" class=\"btn btn-raised btn-success\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n              <span class=\"fa fa-upload\"></span> Upload all\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-raised btn-warning\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\r\n              <span class=\"fa fa-ban\"></span> Cancel all\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-raised btn-danger\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\r\n              <span class=\"fa fa-trash\"></span> Remove all\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--File Upload Ends-->"

/***/ }),

/***/ "../../../../../src/app/components/extra/upload/upload.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-drop-zone {\n  border: dotted 3px lightgray;\n  background-color: #f5f7fa !important; }\n\n.nv-file-over {\n  border: dotted 3px red; }\n\n/* Default class applied to drop zones on over */\n.another-file-over-class {\n  border: dotted 3px green; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/extra/upload/upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var UploadComponent = (function () {
    function UploadComponent() {
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__["FileUploader"]({
            url: URL,
            isHTML5: true
        });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    // Angular2 File Upload
    UploadComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    UploadComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    UploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__("../../../../../src/app/components/extra/upload/upload.component.html"),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__("../../../../../src/app/components/extra/upload/upload.component.scss")]
        })
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/ui-components-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIComponentsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bootstrap_buttons_buttons_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bootstrap_lists_lists_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/lists/lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bootstrap_alerts_alerts_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/alerts/alerts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__extra_sweet_alerts_sweet_alerts_component__ = __webpack_require__("../../../../../src/app/components/extra/sweet-alerts/sweet-alerts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__extra_toastr_toastr_component__ = __webpack_require__("../../../../../src/app/components/extra/toastr/toastr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__extra_nouislider_nouislider_component__ = __webpack_require__("../../../../../src/app/components/extra/nouislider/nouislider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bootstrap_badges_badges_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/badges/badges.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bootstrap_dropdowns_dropdowns_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/dropdowns/dropdowns.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bootstrap_input_groups_input_groups_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/input-groups/input-groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bootstrap_media_objects_media_objects_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/media-objects/media-objects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__bootstrap_pagination_pagination_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__bootstrap_progress_progress_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/progress/progress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__bootstrap_modals_modals_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/modals/modals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__bootstrap_collapse_collapse_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/collapse/collapse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__bootstrap_accordion_accordion_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/accordion/accordion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__bootstrap_carousel_carousel_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__bootstrap_datepicker_datepicker_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/datepicker/datepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__bootstrap_popover_popover_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/popover/popover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__bootstrap_rating_rating_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/rating/rating.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__bootstrap_tabs_tabs_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__bootstrap_timepicker_timepicker_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/timepicker/timepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__bootstrap_tooltip_tooltip_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/tooltip/tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__bootstrap_typeahead_typeahead_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/typeahead/typeahead.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__bootstrap_ng_buttons_ng_buttons_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/ng-buttons/ng-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__extra_upload_upload_component__ = __webpack_require__("../../../../../src/app/components/extra/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__extra_editor_editor_component__ = __webpack_require__("../../../../../src/app/components/extra/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__extra_drag_drop_drag_drop_component__ = __webpack_require__("../../../../../src/app/components/extra/drag-drop/drag-drop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__extra_tour_tour_component__ = __webpack_require__("../../../../../src/app/components/extra/tour/tour.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var routes = [
    {
        path: '',
        children: [
            {
                path: 'buttons',
                component: __WEBPACK_IMPORTED_MODULE_2__bootstrap_buttons_buttons_component__["a" /* ButtonsComponent */],
                data: {
                    title: 'Buttons'
                }
            },
            {
                path: 'lists',
                component: __WEBPACK_IMPORTED_MODULE_3__bootstrap_lists_lists_component__["a" /* ListsComponent */],
                data: {
                    title: 'Lists'
                }
            },
            {
                path: 'alerts',
                component: __WEBPACK_IMPORTED_MODULE_4__bootstrap_alerts_alerts_component__["a" /* AlertsComponent */],
                data: {
                    title: 'Alerts'
                }
            },
            {
                path: 'sweetalerts',
                component: __WEBPACK_IMPORTED_MODULE_5__extra_sweet_alerts_sweet_alerts_component__["a" /* SweetAlertsComponent */],
                data: {
                    title: 'Sweet Alerts'
                }
            },
            {
                path: 'toastr',
                component: __WEBPACK_IMPORTED_MODULE_6__extra_toastr_toastr_component__["a" /* ToastrComponent */],
                data: {
                    title: 'Toastr'
                }
            },
            {
                path: 'nouislider',
                component: __WEBPACK_IMPORTED_MODULE_7__extra_nouislider_nouislider_component__["a" /* NouiSliderComponent */],
                data: {
                    title: 'NoUI Slider'
                }
            },
            {
                path: 'editor',
                component: __WEBPACK_IMPORTED_MODULE_27__extra_editor_editor_component__["a" /* EditorComponent */],
                data: {
                    title: 'Quill Editor'
                }
            },
            {
                path: 'upload',
                component: __WEBPACK_IMPORTED_MODULE_26__extra_upload_upload_component__["a" /* UploadComponent */],
                data: {
                    title: 'Upload'
                }
            },
            {
                path: 'dragndrop',
                component: __WEBPACK_IMPORTED_MODULE_28__extra_drag_drop_drag_drop_component__["a" /* DragDropComponent */],
                data: {
                    title: 'Drag and Drop'
                }
            },
            {
                path: 'tour',
                component: __WEBPACK_IMPORTED_MODULE_29__extra_tour_tour_component__["a" /* TourComponent */],
                data: {
                    title: 'Tour'
                }
            },
            {
                path: 'badges',
                component: __WEBPACK_IMPORTED_MODULE_8__bootstrap_badges_badges_component__["a" /* BadgesComponent */],
                data: {
                    title: 'Badges'
                }
            },
            {
                path: 'dropdowns',
                component: __WEBPACK_IMPORTED_MODULE_9__bootstrap_dropdowns_dropdowns_component__["a" /* DropdownsComponent */],
                data: {
                    title: 'Dropdowns'
                }
            },
            {
                path: 'inputgroups',
                component: __WEBPACK_IMPORTED_MODULE_10__bootstrap_input_groups_input_groups_component__["a" /* InputGroupsComponent */],
                data: {
                    title: 'Input Groups'
                }
            },
            {
                path: 'media',
                component: __WEBPACK_IMPORTED_MODULE_11__bootstrap_media_objects_media_objects_component__["a" /* MediaObjectsComponent */],
                data: {
                    title: 'Media Objects'
                }
            },
            {
                path: 'pagination',
                component: __WEBPACK_IMPORTED_MODULE_12__bootstrap_pagination_pagination_component__["a" /* PaginationComponent */],
                data: {
                    title: 'Pagination'
                }
            },
            {
                path: 'progress',
                component: __WEBPACK_IMPORTED_MODULE_13__bootstrap_progress_progress_component__["a" /* ProgressBarsComponent */],
                data: {
                    title: 'Progress Bars'
                }
            },
            {
                path: 'models',
                component: __WEBPACK_IMPORTED_MODULE_14__bootstrap_modals_modals_component__["a" /* ModalsComponent */],
                data: {
                    title: 'Models'
                }
            },
            {
                path: 'collapse',
                component: __WEBPACK_IMPORTED_MODULE_15__bootstrap_collapse_collapse_component__["a" /* CollapseComponent */],
                data: {
                    title: 'Collapse'
                }
            },
            {
                path: 'accordion',
                component: __WEBPACK_IMPORTED_MODULE_16__bootstrap_accordion_accordion_component__["a" /* AccordionComponent */],
                data: {
                    title: 'Accordion'
                }
            },
            {
                path: 'carousel',
                component: __WEBPACK_IMPORTED_MODULE_17__bootstrap_carousel_carousel_component__["a" /* CarouselComponent */],
                data: {
                    title: 'Carousel'
                }
            },
            {
                path: 'datepicker',
                component: __WEBPACK_IMPORTED_MODULE_18__bootstrap_datepicker_datepicker_component__["a" /* DatepickerComponent */],
                data: {
                    title: 'Datepicker'
                }
            },
            {
                path: 'popover',
                component: __WEBPACK_IMPORTED_MODULE_19__bootstrap_popover_popover_component__["a" /* PopoverComponent */],
                data: {
                    title: 'Popovers'
                }
            },
            {
                path: 'rating',
                component: __WEBPACK_IMPORTED_MODULE_20__bootstrap_rating_rating_component__["a" /* RatingComponent */],
                data: {
                    title: 'Rating'
                }
            },
            {
                path: 'tabs',
                component: __WEBPACK_IMPORTED_MODULE_21__bootstrap_tabs_tabs_component__["a" /* TabsComponent */],
                data: {
                    title: 'Tabs'
                }
            },
            {
                path: 'timepicker',
                component: __WEBPACK_IMPORTED_MODULE_22__bootstrap_timepicker_timepicker_component__["a" /* TimepickerComponent */],
                data: {
                    title: 'Timepicker'
                }
            },
            {
                path: 'tooltip',
                component: __WEBPACK_IMPORTED_MODULE_23__bootstrap_tooltip_tooltip_component__["a" /* TooltipComponent */],
                data: {
                    title: 'Tooltips'
                }
            },
            {
                path: 'typeahead',
                component: __WEBPACK_IMPORTED_MODULE_24__bootstrap_typeahead_typeahead_component__["a" /* TypeaheadComponent */],
                data: {
                    title: 'Typeahead'
                }
            },
            {
                path: 'ng-buttons',
                component: __WEBPACK_IMPORTED_MODULE_25__bootstrap_ng_buttons_ng_buttons_component__["a" /* NgButtonsComponent */],
                data: {
                    title: 'Ngb-Bootstrap'
                }
            },
        ]
    }
];
var UIComponentsRoutingModule = (function () {
    function UIComponentsRoutingModule() {
    }
    UIComponentsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]],
        })
    ], UIComponentsRoutingModule);
    return UIComponentsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/ui-components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIComponentsModule", function() { return UIComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_components_routing_module__ = __webpack_require__("../../../../../src/app/components/ui-components-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider_src_nouislider__ = __webpack_require__("../../../../ng2-nouislider/src/nouislider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider_src_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_nouislider_src_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_quill__ = __webpack_require__("../../../../ngx-quill/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_directives_match_height_directive__ = __webpack_require__("../../../../../src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bootstrap_buttons_buttons_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__bootstrap_lists_lists_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/lists/lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__bootstrap_alerts_alerts_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/alerts/alerts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__extra_sweet_alerts_sweet_alerts_component__ = __webpack_require__("../../../../../src/app/components/extra/sweet-alerts/sweet-alerts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__extra_toastr_toastr_component__ = __webpack_require__("../../../../../src/app/components/extra/toastr/toastr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__extra_nouislider_nouislider_component__ = __webpack_require__("../../../../../src/app/components/extra/nouislider/nouislider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__bootstrap_badges_badges_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/badges/badges.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__bootstrap_dropdowns_dropdowns_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/dropdowns/dropdowns.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__bootstrap_input_groups_input_groups_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/input-groups/input-groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__bootstrap_media_objects_media_objects_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/media-objects/media-objects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__bootstrap_pagination_pagination_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__bootstrap_progress_progress_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/progress/progress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__bootstrap_modals_modals_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/modals/modals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__bootstrap_collapse_collapse_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/collapse/collapse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__bootstrap_accordion_accordion_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/accordion/accordion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__bootstrap_carousel_carousel_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__bootstrap_datepicker_datepicker_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/datepicker/datepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__bootstrap_popover_popover_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/popover/popover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__bootstrap_rating_rating_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/rating/rating.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__bootstrap_tabs_tabs_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__bootstrap_timepicker_timepicker_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/timepicker/timepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__bootstrap_tooltip_tooltip_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/tooltip/tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__bootstrap_typeahead_typeahead_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/typeahead/typeahead.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__bootstrap_ng_buttons_ng_buttons_component__ = __webpack_require__("../../../../../src/app/components/bootstrap/ng-buttons/ng-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__extra_upload_upload_component__ = __webpack_require__("../../../../../src/app/components/extra/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__extra_editor_editor_component__ = __webpack_require__("../../../../../src/app/components/extra/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__extra_drag_drop_drag_drop_component__ = __webpack_require__("../../../../../src/app/components/extra/drag-drop/drag-drop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__extra_tour_tour_component__ = __webpack_require__("../../../../../src/app/components/extra/tour/tour.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































var UIComponentsModule = (function () {
    function UIComponentsModule() {
    }
    UIComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__ui_components_routing_module__["a" /* UIComponentsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider_src_nouislider__["NouisliderModule"],
                __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["e" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_quill__["a" /* QuillModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng2_dragula__["DragulaModule"],
                __WEBPACK_IMPORTED_MODULE_10__shared_directives_match_height_directive__["a" /* MatchHeightModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__bootstrap_buttons_buttons_component__["a" /* ButtonsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__bootstrap_lists_lists_component__["a" /* ListsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__bootstrap_alerts_alerts_component__["a" /* AlertsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__extra_sweet_alerts_sweet_alerts_component__["a" /* SweetAlertsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__extra_toastr_toastr_component__["a" /* ToastrComponent */],
                __WEBPACK_IMPORTED_MODULE_16__extra_nouislider_nouislider_component__["a" /* NouiSliderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__bootstrap_badges_badges_component__["a" /* BadgesComponent */],
                __WEBPACK_IMPORTED_MODULE_18__bootstrap_dropdowns_dropdowns_component__["a" /* DropdownsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__bootstrap_input_groups_input_groups_component__["a" /* InputGroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__bootstrap_media_objects_media_objects_component__["a" /* MediaObjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__bootstrap_pagination_pagination_component__["a" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_22__bootstrap_progress_progress_component__["a" /* ProgressBarsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__bootstrap_modals_modals_component__["a" /* ModalsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__bootstrap_collapse_collapse_component__["a" /* CollapseComponent */],
                __WEBPACK_IMPORTED_MODULE_25__bootstrap_accordion_accordion_component__["a" /* AccordionComponent */],
                __WEBPACK_IMPORTED_MODULE_26__bootstrap_carousel_carousel_component__["a" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_27__bootstrap_datepicker_datepicker_component__["a" /* DatepickerComponent */],
                __WEBPACK_IMPORTED_MODULE_28__bootstrap_popover_popover_component__["a" /* PopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_29__bootstrap_rating_rating_component__["a" /* RatingComponent */],
                __WEBPACK_IMPORTED_MODULE_30__bootstrap_tabs_tabs_component__["a" /* TabsComponent */],
                __WEBPACK_IMPORTED_MODULE_31__bootstrap_timepicker_timepicker_component__["a" /* TimepickerComponent */],
                __WEBPACK_IMPORTED_MODULE_32__bootstrap_tooltip_tooltip_component__["a" /* TooltipComponent */],
                __WEBPACK_IMPORTED_MODULE_33__bootstrap_typeahead_typeahead_component__["a" /* TypeaheadComponent */],
                __WEBPACK_IMPORTED_MODULE_23__bootstrap_modals_modals_component__["b" /* NgbdModalContent */],
                __WEBPACK_IMPORTED_MODULE_34__bootstrap_ng_buttons_ng_buttons_component__["a" /* NgButtonsComponent */],
                __WEBPACK_IMPORTED_MODULE_35__extra_upload_upload_component__["a" /* UploadComponent */],
                __WEBPACK_IMPORTED_MODULE_36__extra_editor_editor_component__["a" /* EditorComponent */],
                __WEBPACK_IMPORTED_MODULE_37__extra_drag_drop_drag_drop_component__["a" /* DragDropComponent */],
                __WEBPACK_IMPORTED_MODULE_38__extra_tour_tour_component__["a" /* TourComponent */]
            ],
            providers: [],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_23__bootstrap_modals_modals_component__["b" /* NgbdModalContent */]]
        })
    ], UIComponentsModule);
    return UIComponentsModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/data/sweet-alerts.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = basicAlert;
/* harmony export (immutable) */ __webpack_exports__["q"] = withTitle;
/* harmony export (immutable) */ __webpack_exports__["h"] = htmlAlert;
/* harmony export (immutable) */ __webpack_exports__["n"] = typeQuestion;
/* harmony export (immutable) */ __webpack_exports__["o"] = typeSuccess;
/* harmony export (immutable) */ __webpack_exports__["m"] = typeInfo;
/* harmony export (immutable) */ __webpack_exports__["p"] = typeWarning;
/* harmony export (immutable) */ __webpack_exports__["l"] = typeError;
/* harmony export (immutable) */ __webpack_exports__["g"] = customIcon;
/* harmony export (immutable) */ __webpack_exports__["b"] = autoClose;
/* harmony export (immutable) */ __webpack_exports__["i"] = outsideClick;
/* harmony export (immutable) */ __webpack_exports__["a"] = ajaxRequest;
/* harmony export (immutable) */ __webpack_exports__["f"] = customButton;
/* harmony export (immutable) */ __webpack_exports__["j"] = promptFunction;
/* harmony export (immutable) */ __webpack_exports__["e"] = confirmText;
/* harmony export (immutable) */ __webpack_exports__["d"] = confirmCancelButton;
/* harmony export (immutable) */ __webpack_exports__["k"] = steps;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sweetalert2__);

// Simple Alert
function basicAlert() {
    __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default()("Here's a message!").catch(__WEBPACK_IMPORTED_MODULE_0_sweetalert2___default.a.noop); // Use ".catch(swal.noop)" for overlay click close error.
}
// Alert with Title
function withTitle() {
    __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default()("Here's a message!", "It's pretty, isn't it?");
}
//  HTML Alert
function htmlAlert() {
    __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default()({
        title: 'HTML <small>Title</small>!',
        text: 'A custom <span style="color:#F6BB42">html<span> message.',
        html: true
    });
}
// Question Type Alert
function typeQuestion() {
    __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default()("Question", "Are You Sure?", "question");
}
// Success Type Alert
function typeSuccess() {
    __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default()("Good job!", "You clicked the button!", "success");
}
// Info Type Alert
function typeInfo() {
    __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default()("Info!", "You clicked the button!", "info");
}
// Warning Type Alert
function typeWarning() {
    __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default()("Warning!", "You clicked the button!", "warning");
}
// Error Type Alert
function typeError() {
    __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default()("Error!", "You clicked the button!", "error");
}
// Custom Icon 
function customIcon() {
    __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default()({ title: "Sweet!", text: "Here's a custom image.", imageUrl: "./assets/img/portrait/avatars/avatar-08.png" });
}
// Auto close timer
function autoClose() {
    __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default()({ title: "Auto close alert!", text: "I will close in 2 seconds.", timer: 2000, showConfirmButton: false });
}
// Allow Outside Click
function outsideClick() {
    __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default()({
        title: 'Click outside to close!',
        text: 'This is a cool message!',
        allowOutsideClick: true
    });
}
// Ajax Request
function ajaxRequest() {
    __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default()({
        title: 'Submit email to run ajax request',
        input: 'email',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        showLoaderOnConfirm: true,
        preConfirm: function () {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve();
                }, 2000);
            });
        },
        allowOutsideClick: false
    }).then(function (email) {
        if (email) {
            __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default()({
                type: 'success',
                title: 'Ajax request finished!',
                html: 'Submitted email: ' + email
            });
        }
    });
}
// Button Options
function customButton() {
    __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default()({
        title: '<i>HTML</i> <u>example</u>',
        type: 'info',
        html: 'You can use <b>bold text</b>, ' +
            '<a href="//github.com">links</a> ' +
            'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        cancelButtonText: '<i class="fa fa-thumbs-down"></i> Opps!'
    });
}
// Prompt Function
function promptFunction() {
    __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default()({
        title: "An input!",
        text: "Write something interesting:",
        input: "text",
        showCancelButton: true,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: "Write something"
    }).then(function (inputValue) {
        if (inputValue === false)
            return false;
        if (inputValue === "") {
            __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default.a.showInputError("You need to write something!");
            return false;
        }
        __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default()("Nice!", "You wrote: " + inputValue, "success");
    });
}
// Confirm Button Action
function confirmText() {
    __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default()({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0CC27E',
        cancelButtonColor: '#FF586B',
        confirmButtonText: 'Text Changed',
        cancelButtonText: "No, cancel"
    }).then(function (isConfirm) {
        if (isConfirm) {
            __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default()('Changed!', 'Confirm button text was changed!!', 'success');
        }
    }).catch(__WEBPACK_IMPORTED_MODULE_0_sweetalert2___default.a.noop);
}
// Confirm & Cancel Button
function confirmCancelButton() {
    __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default()({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0CC27E',
        cancelButtonColor: '#FF586B',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonClass: 'btn btn-success btn-raised mr-5',
        cancelButtonClass: 'btn btn-danger btn-raised',
        buttonsStyling: false
    }).then(function () {
        __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default()('Deleted!', 'Your imaginary file has been deleted.', 'success');
    }, function (dismiss) {
        // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
        if (dismiss === 'cancel') {
            __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default()('Cancelled', 'Your imaginary file is safe :)', 'error');
        }
    });
}
// Chaining modals / Steps
function steps() {
    __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default.a.setDefaults({
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        cancelButtonColor: '#FF586B',
        animation: false
    });
    var steps = [
        {
            title: 'Step 1',
            text: 'Chaining modals is easy with Step 1'
        },
        {
            title: 'Step 2',
            text: 'Chaining modals is easy with Step 2'
        },
        {
            title: 'Step 3',
            text: 'Chaining modals is easy with Step 3'
        },
    ];
    __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default.a.queue(steps).then(function () {
        __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default()({
            title: 'All done!',
            text: 'Great job :)',
            confirmButtonText: 'Lovely!',
            showCancelButton: false
        });
    }).then(function () {
        __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default.a.resetDefaults();
    }).catch(__WEBPACK_IMPORTED_MODULE_0_sweetalert2___default.a.noop);
}


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-drop.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var file_uploader_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-uploader.class.js");
var FileDropDirective = (function () {
    function FileDropDirective(element) {
        this.fileOver = new core_1.EventEmitter();
        this.onFileDrop = new core_1.EventEmitter();
        this.element = element;
    }
    FileDropDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileDropDirective.prototype.getFilters = function () {
        return {};
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        var options = this.getOptions();
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        if (this.element) {
            if (event.currentTarget === this.element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    FileDropDirective.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileDropDirective.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    return FileDropDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileDropDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "fileOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "onFileDrop", void 0);
__decorate([
    core_1.HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDrop", null);
__decorate([
    core_1.HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDragOver", null);
__decorate([
    core_1.HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FileDropDirective.prototype, "onDragLeave", null);
FileDropDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileDrop]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileDropDirective);
exports.FileDropDirective = FileDropDirective;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-item.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-like-object.class.js");
var FileItem = (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new file_like_object_class_1.FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    FileItem.prototype.upload = function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    FileItem.prototype.cancel = function () {
        this.uploader.cancelItem(this);
    };
    FileItem.prototype.remove = function () {
        this.uploader.removeFromQueue(this);
    };
    FileItem.prototype.onBeforeUpload = function () {
        return void 0;
    };
    FileItem.prototype.onBuildForm = function (form) {
        return { form: form };
    };
    FileItem.prototype.onProgress = function (progress) {
        return { progress: progress };
    };
    FileItem.prototype.onSuccess = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onError = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onCancel = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onComplete = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype._onBeforeUpload = function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    FileItem.prototype._onBuildForm = function (form) {
        this.onBuildForm(form);
    };
    FileItem.prototype._onProgress = function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    FileItem.prototype._onSuccess = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    FileItem.prototype._onError = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    FileItem.prototype._onCancel = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    FileItem.prototype._onComplete = function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    FileItem.prototype._prepareToUploading = function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
exports.FileItem = FileItem;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-like-object.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = (function () {
    function FileLikeObject(fileOrInput) {
        this.rawFile = fileOrInput;
        var isInput = isElement(fileOrInput);
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        var method = '_createFrom' + postfix;
        this[method](fakePathOrObject);
    }
    FileLikeObject.prototype._createFromFakePath = function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    FileLikeObject.prototype._createFromObject = function (object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
exports.FileLikeObject = FileLikeObject;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-select.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var file_uploader_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-uploader.class.js");
var FileSelectDirective = (function () {
    function FileSelectDirective(element) {
        this.onFileSelected = new core_1.EventEmitter();
        this.element = element;
    }
    FileSelectDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileSelectDirective.prototype.getFilters = function () {
        return {};
    };
    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    FileSelectDirective.prototype.onChange = function () {
        var files = this.element.nativeElement.files;
        var options = this.getOptions();
        var filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    };
    return FileSelectDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileSelectDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileSelectDirective.prototype, "onFileSelected", void 0);
__decorate([
    core_1.HostListener('change'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FileSelectDirective.prototype, "onChange", null);
FileSelectDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileSelect]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileSelectDirective);
exports.FileSelectDirective = FileSelectDirective;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-type.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FileType = (function () {
    function FileType() {
    }
    FileType.getMimeClass = function (file) {
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    FileType.fileTypeDetection = function (inputFilename) {
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    return FileType;
}());
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream'
];
exports.FileType = FileType;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-upload.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var file_drop_directive_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-drop.directive.js");
var file_select_directive_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-select.directive.js");
var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    return FileUploadModule;
}());
FileUploadModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective],
        exports: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective]
    })
], FileUploadModule);
exports.FileUploadModule = FileUploadModule;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-uploader.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/esm5/core.js");
var file_like_object_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-like-object.class.js");
var file_item_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-item.class.js");
var file_type_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-type.class.js");
function isFile(value) {
    return (File && value instanceof File);
}
var FileUploader = (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction: function (item) { return item._file; },
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new core_1.EventEmitter();
    }
    FileUploader.prototype.setOptions = function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    };
    FileUploader.prototype.addToQueue = function (files, options, filters) {
        var _this = this;
        var list = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            list.push(file);
        }
        var arrayOfFilters = this._getFilters(filters);
        var count = this.queue.length;
        var addedFileItems = [];
        list.map(function (some) {
            if (!options) {
                options = _this.options;
            }
            var temp = new file_like_object_class_1.FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                var fileItem = new file_item_class_1.FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        });
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    FileUploader.prototype.removeFromQueue = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    FileUploader.prototype.clearQueue = function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    FileUploader.prototype.uploadItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        this[transport](item);
    };
    FileUploader.prototype.cancelItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    FileUploader.prototype.uploadAll = function () {
        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
        if (!items.length) {
            return;
        }
        items.map(function (item) { return item._prepareToUploading(); });
        items[0].upload();
    };
    FileUploader.prototype.cancelAll = function () {
        var items = this.getNotUploadedItems();
        items.map(function (item) { return item.cancel(); });
    };
    FileUploader.prototype.isFile = function (value) {
        return isFile(value);
    };
    FileUploader.prototype.isFileLikeObject = function (value) {
        return value instanceof file_like_object_class_1.FileLikeObject;
    };
    FileUploader.prototype.getIndexOfItem = function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    FileUploader.prototype.getNotUploadedItems = function () {
        return this.queue.filter(function (item) { return !item.isUploaded; });
    };
    FileUploader.prototype.getReadyItems = function () {
        return this.queue
            .filter(function (item) { return (item.isReady && !item.isUploading); })
            .sort(function (item1, item2) { return item1.index - item2.index; });
    };
    FileUploader.prototype.destroy = function () {
        return void 0;
    };
    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
        return { fileItems: fileItems };
    };
    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    FileUploader.prototype.onProgressAll = function (progress) {
        return { progress: progress };
    };
    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteAll = function () {
        return void 0;
    };
    FileUploader.prototype._mimeTypeFilter = function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    FileUploader.prototype._fileSizeFilter = function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    FileUploader.prototype._fileTypeFilter = function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(file_type_class_1.FileType.getMimeClass(item)) === -1);
    };
    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    FileUploader.prototype._headersGetter = function (parsedHeaders) {
        return function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        };
    };
    FileUploader.prototype._xhrTransport = function (item) {
        var _this = this;
        var that = this;
        var xhr = item._xhr = new XMLHttpRequest();
        var sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            var appendFile = function () { return sendable.append(item.alias, item._file, item.file.name); };
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(function (key) {
                    var paramVal = _this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                });
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = function (event) {
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        };
        xhr.onload = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            var method = '_on' + gist + 'Item';
            _this[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (var _b = 0, _c = item.headers; _b < _c.length; _b++) {
                var header = _c[_b];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        };
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then(function (result) { return xhr.send(JSON.stringify(result)); });
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    };
    FileUploader.prototype._getTotalProgress = function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        var notUploaded = this.getNotUploadedItems().length;
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        var ratio = 100 / this.queue.length;
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    FileUploader.prototype._getFilters = function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
        }
        return this.options.filters;
    };
    FileUploader.prototype._render = function () {
        return void 0;
    };
    FileUploader.prototype._queueLimitFilter = function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    FileUploader.prototype._isValidFile = function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every(function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        });
    };
    FileUploader.prototype._isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    FileUploader.prototype._transformResponse = function (response, headers) {
        return response;
    };
    FileUploader.prototype._parseHeaders = function (headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map(function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    };
    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    FileUploader.prototype._onAfterAddingFile = function (item) {
        this.onAfterAddingFile(item);
    };
    FileUploader.prototype._onAfterAddingAll = function (items) {
        this.onAfterAddingAll(items);
    };
    FileUploader.prototype._onBeforeUploadItem = function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    FileUploader.prototype._onBuildItemForm = function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    FileUploader.prototype._onProgressItem = function (item, progress) {
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
exports.FileUploader = FileUploader;


/***/ }),

/***/ "../../../../ng2-file-upload/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-select.directive.js"));
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-drop.directive.js"));
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-uploader.class.js"));
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-item.class.js"));
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-like-object.class.js"));
var file_upload_module_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-upload.module.js");
exports.FileUploadModule = file_upload_module_1.FileUploadModule;


/***/ }),

/***/ "../../../../ng2-file-upload/ng2-file-upload.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("../../../../ng2-file-upload/index.js"));


/***/ }),

/***/ "../../../../ng2-nouislider/src/nouislider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var noUiSlider = __webpack_require__("../../../../nouislider/distribute/nouislider.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var DefaultFormatter = (function () {
    function DefaultFormatter() {
    }
    DefaultFormatter.prototype.to = function (value) {
        // formatting with http://stackoverflow.com/a/26463364/478584
        return String(parseFloat(parseFloat(String(value)).toFixed(2)));
    };
    ;
    DefaultFormatter.prototype.from = function (value) {
        return parseFloat(value);
    };
    return DefaultFormatter;
}());
exports.DefaultFormatter = DefaultFormatter;
var NouisliderComponent = (function () {
    function NouisliderComponent(el) {
        var _this = this;
        this.el = el;
        this.config = {};
        this.change = new core_1.EventEmitter(true);
        this.update = new core_1.EventEmitter(true);
        this.slide = new core_1.EventEmitter(true);
        this.set = new core_1.EventEmitter(true);
        this.start = new core_1.EventEmitter(true);
        this.end = new core_1.EventEmitter(true);
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.eventHandler = function (emitter, values, handle, unencoded) {
            var v = _this.toValues(values);
            var emitEvents = false;
            if (_this.value === undefined) {
                _this.value = v;
                return;
            }
            if (Array.isArray(v) && _this.value[handle] != v[handle]) {
                emitEvents = true;
            }
            if (!Array.isArray(v) && _this.value != v) {
                emitEvents = true;
            }
            if (emitEvents) {
                emitter.emit(v);
                _this.onChange(v);
            }
            if (Array.isArray(v)) {
                _this.value[handle] = v[handle];
            }
            else {
                _this.value = v;
            }
        };
        this.defaultKeyHandler = function (e) {
            var stepSize = _this.slider.steps();
            var index = parseInt(e.target.getAttribute('data-handle'));
            var sign = 1;
            var multiplier = 1;
            var step = 0;
            var delta = 0;
            switch (e.which) {
                case 34:// PageDown
                    multiplier = _this.config.pageSteps;
                case 40: // ArrowDown
                case 37:// ArrowLeft
                    sign = -1;
                    step = stepSize[index][0];
                    e.preventDefault();
                    break;
                case 33:// PageUp
                    multiplier = _this.config.pageSteps;
                case 38: // ArrowUp
                case 39:// ArrowRight
                    step = stepSize[index][1];
                    e.preventDefault();
                    break;
                default:
                    break;
            }
            delta = sign * multiplier * step;
            var newValue;
            if (Array.isArray(_this.value)) {
                newValue = [].concat(_this.value);
                newValue[index] = newValue[index] + delta;
            }
            else {
                newValue = _this.value + delta;
            }
            _this.slider.set(newValue);
        };
    }
    NouisliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var inputsConfig = JSON.parse(JSON.stringify({
            behaviour: this.behaviour,
            connect: this.connect,
            limit: this.limit,
            start: this.formControl !== undefined ? this.formControl.value : this.ngModel,
            step: this.step,
            pageSteps: this.pageSteps,
            keyboard: this.keyboard,
            onKeydown: this.onKeydown,
            range: this.config.range || { min: this.min, max: this.max },
            tooltips: this.tooltips,
        }));
        inputsConfig.format = this.format || this.config.format || new DefaultFormatter();
        this.slider = noUiSlider.create(this.el.nativeElement.querySelector('div'), Object.assign(this.config, inputsConfig));
        this.handles = [].slice.call(this.el.nativeElement.querySelectorAll('.noUi-handle'));
        if (this.config.keyboard) {
            if (this.config.pageSteps === undefined) {
                this.config.pageSteps = 10;
            }
            var _loop_1 = function (handle) {
                handle.setAttribute('tabindex', 0);
                handle.addEventListener('click', function () {
                    handle.focus();
                });
                if (this_1.config.onKeydown === undefined) {
                    handle.addEventListener('keydown', this_1.defaultKeyHandler);
                }
                else {
                    handle.addEventListener('keydown', this_1.config.onKeydown);
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = this.handles; _i < _a.length; _i++) {
                var handle = _a[_i];
                _loop_1(handle);
            }
        }
        this.slider.on('set', function (values, handle, unencoded) {
            _this.eventHandler(_this.set, values, handle, unencoded);
        });
        this.slider.on('update', function (values, handle, unencoded) {
            _this.update.emit(_this.toValues(values));
        });
        this.slider.on('change', function (values, handle, unencoded) {
            _this.change.emit(_this.toValues(values));
        });
        this.slider.on('slide', function (values, handle, unencoded) {
            _this.eventHandler(_this.slide, values, handle, unencoded);
        });
        this.slider.on('start', function (values, handle, unencoded) {
            _this.start.emit(_this.toValues(values));
        });
        this.slider.on('end', function (values, handle, unencoded) {
            _this.end.emit(_this.toValues(values));
        });
    };
    NouisliderComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.slider && (changes.min || changes.max || changes.step)) {
            setTimeout(function () {
                _this.slider.updateOptions({
                    range: {
                        min: _this.min,
                        max: _this.max
                    },
                    step: _this.step
                });
            });
        }
    };
    NouisliderComponent.prototype.toValues = function (values) {
        var v = values.map(this.config.format.from);
        return (v.length == 1 ? v[0] : v);
    };
    NouisliderComponent.prototype.writeValue = function (value) {
        if (this.slider) {
            this.slider.set(value);
        }
    };
    NouisliderComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NouisliderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NouisliderComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'nouislider',
                    host: {
                        '[class.ng2-nouislider]': 'true'
                    },
                    template: '<div [attr.disabled]="disabled ? true : undefined"></div>',
                    styles: ["\n    :host {\n      display: block;\n      margin-top: 1rem;\n      margin-bottom: 1rem;\n    }\n  "],
                    providers: [
                        {
                            provide: forms_1.NG_VALUE_ACCESSOR,
                            useExisting: core_1.forwardRef(function () { return NouisliderComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    NouisliderComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    NouisliderComponent.propDecorators = {
        'disabled': [{ type: core_1.Input },],
        'behaviour': [{ type: core_1.Input },],
        'connect': [{ type: core_1.Input },],
        'limit': [{ type: core_1.Input },],
        'min': [{ type: core_1.Input },],
        'max': [{ type: core_1.Input },],
        'step': [{ type: core_1.Input },],
        'format': [{ type: core_1.Input },],
        'pageSteps': [{ type: core_1.Input },],
        'config': [{ type: core_1.Input },],
        'ngModel': [{ type: core_1.Input },],
        'keyboard': [{ type: core_1.Input },],
        'onKeydown': [{ type: core_1.Input },],
        'formControl': [{ type: core_1.Input },],
        'tooltips': [{ type: core_1.Input },],
        'change': [{ type: core_1.Output },],
        'update': [{ type: core_1.Output },],
        'slide': [{ type: core_1.Output },],
        'set': [{ type: core_1.Output },],
        'start': [{ type: core_1.Output },],
        'end': [{ type: core_1.Output },],
    };
    return NouisliderComponent;
}());
exports.NouisliderComponent = NouisliderComponent;
var NouisliderModule = (function () {
    function NouisliderModule() {
    }
    NouisliderModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [],
                    exports: [NouisliderComponent],
                    declarations: [NouisliderComponent],
                },] },
    ];
    /** @nocollapse */
    NouisliderModule.ctorParameters = function () { return []; };
    return NouisliderModule;
}());
exports.NouisliderModule = NouisliderModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdWlzbGlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBeUM7QUFDekMsc0NBVXVCO0FBQ3ZCLHdDQUl3QjtBQU94QjtJQUFBO0lBU0EsQ0FBQztJQVJDLDZCQUFFLEdBQUYsVUFBRyxLQUFhO1FBQ2QsNkRBQTZEO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFBQSxDQUFDO0lBRUYsK0JBQUksR0FBSixVQUFLLEtBQWE7UUFDaEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLDRDQUFnQjtBQVk3QjtJQTZCRSw2QkFBb0IsRUFBYztRQUFsQyxpQkFBdUM7UUFBbkIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQWhCMUIsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQU1qQixXQUFNLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxXQUFNLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxVQUFLLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxRQUFHLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxVQUFLLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxRQUFHLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoRCxhQUFRLEdBQVEsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxjQUFTLEdBQVEsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQXNHcEMsaUJBQVksR0FBRyxVQUFDLE9BQTBCLEVBQUUsTUFBZ0IsRUFBRSxNQUFjLEVBQUUsU0FBbUI7WUFDdkcsSUFBSSxDQUFDLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDdkIsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDZixNQUFNLENBQUM7WUFDVCxDQUFDO1lBQ0QsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZELFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDcEIsQ0FBQztZQUNELEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDcEIsQ0FBQztZQUNELEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDO1lBQ0QsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNqQixDQUFDO1FBQ0gsQ0FBQyxDQUFBO1FBRU8sc0JBQWlCLEdBQUcsVUFBQyxDQUFnQjtZQUMzQyxJQUFJLFFBQVEsR0FBVSxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzFDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBZSxDQUFDLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQzFFLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNiLElBQUksVUFBVSxHQUFXLENBQUMsQ0FBQztZQUMzQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7WUFDYixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7WUFFZCxNQUFNLENBQUMsQ0FBRSxDQUFDLENBQUMsS0FBTSxDQUFDLENBQUMsQ0FBQztnQkFDbEIsS0FBSyxFQUFFLENBQUcsV0FBVztvQkFDbkIsVUFBVSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUNyQyxLQUFLLEVBQUUsQ0FBQyxDQUFFLFlBQVk7Z0JBQ3RCLEtBQUssRUFBRSxDQUFHLFlBQVk7b0JBQ3BCLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDVixJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ25CLEtBQUssQ0FBQztnQkFFUixLQUFLLEVBQUUsQ0FBRyxTQUFTO29CQUNqQixVQUFVLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQ3JDLEtBQUssRUFBRSxDQUFDLENBQUUsVUFBVTtnQkFDcEIsS0FBSyxFQUFFLENBQUcsYUFBYTtvQkFDckIsSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUNuQixLQUFLLENBQUM7Z0JBRVI7b0JBQ0UsS0FBSyxDQUFDO1lBQ1YsQ0FBQztZQUVELEtBQUssR0FBRyxJQUFJLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQztZQUNqQyxJQUFJLFFBQTJCLENBQUM7WUFFaEMsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzVDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixRQUFRLEdBQUcsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDaEMsQ0FBQztZQUVELEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQTtJQXJLcUMsQ0FBQztJQUV2QyxzQ0FBUSxHQUFSO1FBQUEsaUJBK0RDO1FBOURDLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMzQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU87WUFDN0UsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUM7WUFDMUQsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBRUosWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUVsRixJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQzdCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFDMUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUN6QyxDQUFDO1FBRUYsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBRXJGLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN4QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDN0IsQ0FBQztvQ0FDTyxNQUFNO2dCQUNaLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO29CQUMvQixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQyxDQUFDO2dCQUNILEVBQUUsQ0FBQSxDQUFDLE9BQUssTUFBTSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUN2QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE9BQUssaUJBQWlCLENBQUMsQ0FBQztnQkFDN0QsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE9BQUssTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO1lBQ0gsQ0FBQzs7WUFWRCxHQUFHLENBQUEsQ0FBZSxVQUFZLEVBQVosS0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLGNBQVksRUFBWixJQUFZO2dCQUExQixJQUFJLE1BQU0sU0FBQTt3QkFBTixNQUFNO2FBVWI7UUFDSCxDQUFDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQUMsTUFBZ0IsRUFBRSxNQUFjLEVBQUUsU0FBbUI7WUFDMUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxNQUFnQixFQUFFLE1BQWMsRUFBRSxTQUFtQjtZQUM3RSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxNQUFnQixFQUFFLE1BQWMsRUFBRSxTQUFtQjtZQUM3RSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQyxNQUFnQixFQUFFLE1BQWMsRUFBRSxTQUFtQjtZQUM1RSxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLE1BQWdCLEVBQUUsTUFBYyxFQUFFLFNBQW1CO1lBQzVFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFDLE1BQWdCLEVBQUUsTUFBYyxFQUFFLFNBQW1CO1lBQzFFLEtBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx5Q0FBVyxHQUFYLFVBQVksT0FBWTtRQUF4QixpQkFZQztRQVhDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRSxVQUFVLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7b0JBQ3hCLEtBQUssRUFBRTt3QkFDTCxHQUFHLEVBQUUsS0FBSSxDQUFDLEdBQUc7d0JBQ2IsR0FBRyxFQUFFLEtBQUksQ0FBQyxHQUFHO3FCQUNkO29CQUNELElBQUksRUFBRSxLQUFJLENBQUMsSUFBSTtpQkFDaEIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVELHNDQUFRLEdBQVIsVUFBUyxNQUFnQjtRQUN2QixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsd0NBQVUsR0FBVixVQUFXLEtBQVU7UUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7SUFFRCw4Q0FBZ0IsR0FBaEIsVUFBaUIsRUFBd0I7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELCtDQUFpQixHQUFqQixVQUFrQixFQUFZO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFvRUksOEJBQVUsR0FBMEI7UUFDM0MsRUFBRSxJQUFJLEVBQUUsZ0JBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztvQkFDeEIsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLElBQUksRUFBRTt3QkFDSix3QkFBd0IsRUFBRSxNQUFNO3FCQUNqQztvQkFDRCxRQUFRLEVBQUUsMkRBQTJEO29CQUNyRSxNQUFNLEVBQUUsQ0FBQyxzR0FNUixDQUFDO29CQUNGLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUseUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsaUJBQVUsQ0FBQyxjQUFNLE9BQUEsbUJBQW1CLEVBQW5CLENBQW1CLENBQUM7NEJBQ2xELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGLEVBQUcsRUFBRTtLQUNMLENBQUM7SUFDRixrQkFBa0I7SUFDWCxrQ0FBYyxHQUFtRSxjQUFNLE9BQUE7UUFDOUYsRUFBQyxJQUFJLEVBQUUsaUJBQVUsR0FBRztLQUNuQixFQUY2RixDQUU3RixDQUFDO0lBQ0ssa0NBQWMsR0FBMkM7UUFDaEUsVUFBVSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDOUIsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDL0IsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDN0IsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDM0IsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDekIsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDekIsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDMUIsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDNUIsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDL0IsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDNUIsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDN0IsVUFBVSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDOUIsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDL0IsYUFBYSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDakMsVUFBVSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDOUIsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBTSxFQUFFLEVBQUU7UUFDN0IsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBTSxFQUFFLEVBQUU7UUFDN0IsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBTSxFQUFFLEVBQUU7UUFDNUIsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBTSxFQUFFLEVBQUU7UUFDMUIsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBTSxFQUFFLEVBQUU7UUFDNUIsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBTSxFQUFFLEVBQUU7S0FDekIsQ0FBQztJQUNGLDBCQUFDO0NBclBELEFBcVBDLElBQUE7QUFyUFksa0RBQW1CO0FBeVBoQztJQUFBO0lBVUEsQ0FBQztJQVZzQywyQkFBVSxHQUEwQjtRQUMzRSxFQUFFLElBQUksRUFBRSxlQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxFQUFFO29CQUNYLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUM5QixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDcEMsRUFBRyxFQUFFO0tBQ0wsQ0FBQztJQUNGLGtCQUFrQjtJQUNYLCtCQUFjLEdBQW1FLGNBQU0sT0FBQSxFQUM3RixFQUQ2RixDQUM3RixDQUFDO0lBQ0YsdUJBQUM7Q0FWRCxBQVVDLElBQUE7QUFWWSw0Q0FBZ0IiLCJmaWxlIjoibm91aXNsaWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBub1VpU2xpZGVyIGZyb20gJ25vdWlzbGlkZXInO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBOZ01vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgRm9ybUNvbnRyb2wsXG4gIE5HX1ZBTFVFX0FDQ0VTU09SXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGludGVyZmFjZSBOb3VpRm9ybWF0dGVyIHtcbiAgdG8odmFsdWU6IG51bWJlcik6IHN0cmluZztcbiAgZnJvbSh2YWx1ZTogc3RyaW5nKTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgRGVmYXVsdEZvcm1hdHRlciBpbXBsZW1lbnRzIE5vdWlGb3JtYXR0ZXIge1xuICB0byh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAvLyBmb3JtYXR0aW5nIHdpdGggaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY0NjMzNjQvNDc4NTg0XG4gICAgcmV0dXJuIFN0cmluZyhwYXJzZUZsb2F0KHBhcnNlRmxvYXQoU3RyaW5nKHZhbHVlKSkudG9GaXhlZCgyKSkpO1xuICB9O1xuXG4gIGZyb20odmFsdWU6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIE5vdWlzbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIHB1YmxpYyBzbGlkZXI6IGFueTtcbiAgcHVibGljIGhhbmRsZXM6IGFueVtdO1xuICAgcHVibGljIGRpc2FibGVkOiBib29sZWFuOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICBwdWJsaWMgYmVoYXZpb3VyOiBzdHJpbmc7XG4gICBwdWJsaWMgY29ubmVjdDogYm9vbGVhbltdO1xuICAgcHVibGljIGxpbWl0OiBudW1iZXI7XG4gICBwdWJsaWMgbWluOiBudW1iZXI7XG4gICBwdWJsaWMgbWF4OiBudW1iZXI7XG4gICBwdWJsaWMgc3RlcDogbnVtYmVyO1xuICAgcHVibGljIGZvcm1hdDogTm91aUZvcm1hdHRlcjtcbiAgIHB1YmxpYyBwYWdlU3RlcHM6IG51bWJlcjtcbiAgIHB1YmxpYyBjb25maWc6IGFueSA9IHt9O1xuICAgcHVibGljIG5nTW9kZWw6IG51bWJlciB8IG51bWJlcltdO1xuICAgcHVibGljIGtleWJvYXJkOiBib29sZWFuO1xuICAgcHVibGljIG9uS2V5ZG93bjogYW55O1xuICAgcHVibGljIGZvcm1Db250cm9sOiBGb3JtQ29udHJvbDtcbiAgIHB1YmxpYyB0b29sdGlwczogQXJyYXk8YW55PjtcbiAgIHB1YmxpYyBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcbiAgIHB1YmxpYyB1cGRhdGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcbiAgIHB1YmxpYyBzbGlkZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICAgcHVibGljIHNldDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICAgcHVibGljIHN0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG4gICBwdWJsaWMgZW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG4gIHByaXZhdGUgdmFsdWU6IGFueTtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwcml2YXRlIG9uVG91Y2hlZDogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGxldCBpbnB1dHNDb25maWcgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGJlaGF2aW91cjogdGhpcy5iZWhhdmlvdXIsXG4gICAgICBjb25uZWN0OiB0aGlzLmNvbm5lY3QsXG4gICAgICBsaW1pdDogdGhpcy5saW1pdCxcbiAgICAgIHN0YXJ0OiB0aGlzLmZvcm1Db250cm9sICE9PSB1bmRlZmluZWQgPyB0aGlzLmZvcm1Db250cm9sLnZhbHVlIDogdGhpcy5uZ01vZGVsLFxuICAgICAgc3RlcDogdGhpcy5zdGVwLFxuICAgICAgcGFnZVN0ZXBzOiB0aGlzLnBhZ2VTdGVwcyxcbiAgICAgIGtleWJvYXJkOiB0aGlzLmtleWJvYXJkLFxuICAgICAgb25LZXlkb3duOiB0aGlzLm9uS2V5ZG93bixcbiAgICAgIHJhbmdlOiB0aGlzLmNvbmZpZy5yYW5nZSB8fCB7bWluOiB0aGlzLm1pbiwgbWF4OiB0aGlzLm1heH0sXG4gICAgICB0b29sdGlwczogdGhpcy50b29sdGlwcyxcbiAgICB9KSk7XG5cbiAgICBpbnB1dHNDb25maWcuZm9ybWF0ID0gdGhpcy5mb3JtYXQgfHwgdGhpcy5jb25maWcuZm9ybWF0IHx8IG5ldyBEZWZhdWx0Rm9ybWF0dGVyKCk7XG5cbiAgICB0aGlzLnNsaWRlciA9IG5vVWlTbGlkZXIuY3JlYXRlKFxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpLFxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZywgaW5wdXRzQ29uZmlnKVxuICAgICk7XG5cbiAgICB0aGlzLmhhbmRsZXMgPSBbXS5zbGljZS5jYWxsKHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubm9VaS1oYW5kbGUnKSk7XG5cbiAgICBpZih0aGlzLmNvbmZpZy5rZXlib2FyZCkge1xuICAgICAgaWYodGhpcy5jb25maWcucGFnZVN0ZXBzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5jb25maWcucGFnZVN0ZXBzID0gMTA7XG4gICAgICB9XG4gICAgICBmb3IobGV0IGhhbmRsZSBvZiB0aGlzLmhhbmRsZXMpIHtcbiAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcbiAgICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGhhbmRsZS5mb2N1cygpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYodGhpcy5jb25maWcub25LZXlkb3duID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuZGVmYXVsdEtleUhhbmRsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5jb25maWcub25LZXlkb3duKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2xpZGVyLm9uKCdzZXQnLCAodmFsdWVzOiBzdHJpbmdbXSwgaGFuZGxlOiBudW1iZXIsIHVuZW5jb2RlZDogbnVtYmVyW10pID0+IHtcbiAgICAgIHRoaXMuZXZlbnRIYW5kbGVyKHRoaXMuc2V0LCB2YWx1ZXMsIGhhbmRsZSwgdW5lbmNvZGVkKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2xpZGVyLm9uKCd1cGRhdGUnLCAodmFsdWVzOiBzdHJpbmdbXSwgaGFuZGxlOiBudW1iZXIsIHVuZW5jb2RlZDogbnVtYmVyW10pID0+IHtcbiAgICAgIHRoaXMudXBkYXRlLmVtaXQodGhpcy50b1ZhbHVlcyh2YWx1ZXMpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2xpZGVyLm9uKCdjaGFuZ2UnLCAodmFsdWVzOiBzdHJpbmdbXSwgaGFuZGxlOiBudW1iZXIsIHVuZW5jb2RlZDogbnVtYmVyW10pID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy50b1ZhbHVlcyh2YWx1ZXMpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2xpZGVyLm9uKCdzbGlkZScsICh2YWx1ZXM6IHN0cmluZ1tdLCBoYW5kbGU6IG51bWJlciwgdW5lbmNvZGVkOiBudW1iZXJbXSkgPT4ge1xuICAgICAgdGhpcy5ldmVudEhhbmRsZXIodGhpcy5zbGlkZSwgdmFsdWVzLCBoYW5kbGUsIHVuZW5jb2RlZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNsaWRlci5vbignc3RhcnQnLCAodmFsdWVzOiBzdHJpbmdbXSwgaGFuZGxlOiBudW1iZXIsIHVuZW5jb2RlZDogbnVtYmVyW10pID0+IHtcbiAgICAgIHRoaXMuc3RhcnQuZW1pdCh0aGlzLnRvVmFsdWVzKHZhbHVlcykpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zbGlkZXIub24oJ2VuZCcsICh2YWx1ZXM6IHN0cmluZ1tdLCBoYW5kbGU6IG51bWJlciwgdW5lbmNvZGVkOiBudW1iZXJbXSkgPT4ge1xuICAgICAgdGhpcy5lbmQuZW1pdCh0aGlzLnRvVmFsdWVzKHZhbHVlcykpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KSB7XG4gICAgaWYgKHRoaXMuc2xpZGVyICYmIChjaGFuZ2VzLm1pbiB8fCBjaGFuZ2VzLm1heCB8fCBjaGFuZ2VzLnN0ZXApKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zbGlkZXIudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgICAgcmFuZ2U6IHtcbiAgICAgICAgICAgIG1pbjogdGhpcy5taW4sXG4gICAgICAgICAgICBtYXg6IHRoaXMubWF4XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdGVwOiB0aGlzLnN0ZXBcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB0b1ZhbHVlcyh2YWx1ZXM6IHN0cmluZ1tdKTogYW55IHwgYW55W10ge1xuICAgIGxldCB2ID0gdmFsdWVzLm1hcCh0aGlzLmNvbmZpZy5mb3JtYXQuZnJvbSk7XG4gICAgcmV0dXJuICh2Lmxlbmd0aCA9PSAxID8gdlswXSA6IHYpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2xpZGVyKSB7XG4gICAgICB0aGlzLnNsaWRlci5zZXQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHByaXZhdGUgZXZlbnRIYW5kbGVyID0gKGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+LCB2YWx1ZXM6IHN0cmluZ1tdLCBoYW5kbGU6IG51bWJlciwgdW5lbmNvZGVkOiBudW1iZXJbXSkgPT4ge1xuICAgIGxldCB2ID0gdGhpcy50b1ZhbHVlcyh2YWx1ZXMpO1xuICAgIGxldCBlbWl0RXZlbnRzID0gZmFsc2U7XG4gICAgaWYodGhpcy52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYoQXJyYXkuaXNBcnJheSh2KSAmJiB0aGlzLnZhbHVlW2hhbmRsZV0gIT0gdltoYW5kbGVdKSB7XG4gICAgICBlbWl0RXZlbnRzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYoIUFycmF5LmlzQXJyYXkodikgJiYgdGhpcy52YWx1ZSAhPSB2KSB7XG4gICAgICBlbWl0RXZlbnRzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYoZW1pdEV2ZW50cykge1xuICAgICAgZW1pdHRlci5lbWl0KHYpO1xuICAgICAgdGhpcy5vbkNoYW5nZSh2KTtcbiAgICB9XG4gICAgaWYoQXJyYXkuaXNBcnJheSh2KSkge1xuICAgICAgdGhpcy52YWx1ZVtoYW5kbGVdID0gdltoYW5kbGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRlZmF1bHRLZXlIYW5kbGVyID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBsZXQgc3RlcFNpemU6IGFueVtdID0gdGhpcy5zbGlkZXIuc3RlcHMoKTtcbiAgICBsZXQgaW5kZXggPSBwYXJzZUludCgoPEhUTUxFbGVtZW50PmUudGFyZ2V0KS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGFuZGxlJykpO1xuICAgIGxldCBzaWduID0gMTtcbiAgICBsZXQgbXVsdGlwbGllcjogbnVtYmVyID0gMTtcbiAgICBsZXQgc3RlcCA9IDA7XG4gICAgbGV0IGRlbHRhID0gMDtcblxuICAgIHN3aXRjaCAoIGUud2hpY2ggKSB7XG4gICAgICBjYXNlIDM0OiAgLy8gUGFnZURvd25cbiAgICAgICAgbXVsdGlwbGllciA9IHRoaXMuY29uZmlnLnBhZ2VTdGVwcztcbiAgICAgIGNhc2UgNDA6ICAvLyBBcnJvd0Rvd25cbiAgICAgIGNhc2UgMzc6ICAvLyBBcnJvd0xlZnRcbiAgICAgICAgc2lnbiA9IC0xO1xuICAgICAgICBzdGVwID0gc3RlcFNpemVbaW5kZXhdWzBdO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDMzOiAgLy8gUGFnZVVwXG4gICAgICAgIG11bHRpcGxpZXIgPSB0aGlzLmNvbmZpZy5wYWdlU3RlcHM7XG4gICAgICBjYXNlIDM4OiAgLy8gQXJyb3dVcFxuICAgICAgY2FzZSAzOTogIC8vIEFycm93UmlnaHRcbiAgICAgICAgc3RlcCA9IHN0ZXBTaXplW2luZGV4XVsxXTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVsdGEgPSBzaWduICogbXVsdGlwbGllciAqIHN0ZXA7XG4gICAgbGV0IG5ld1ZhbHVlOiBudW1iZXIgfCBudW1iZXJbXTtcblxuICAgIGlmKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgIG5ld1ZhbHVlID0gW10uY29uY2F0KHRoaXMudmFsdWUpO1xuICAgICAgbmV3VmFsdWVbaW5kZXhdID0gbmV3VmFsdWVbaW5kZXhdICsgZGVsdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbHVlID0gdGhpcy52YWx1ZSArIGRlbHRhO1xuICAgIH1cblxuICAgIHRoaXMuc2xpZGVyLnNldChuZXdWYWx1ZSk7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcbiAgc2VsZWN0b3I6ICdub3Vpc2xpZGVyJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MubmcyLW5vdWlzbGlkZXJdJzogJ3RydWUnXG4gIH0sXG4gIHRlbXBsYXRlOiAnPGRpdiBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZCA/IHRydWUgOiB1bmRlZmluZWRcIj48L2Rpdj4nLFxuICBzdHlsZXM6IFtgXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG4gIGBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdWlzbGlkZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ2Rpc2FibGVkJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2JlaGF2aW91cic6IFt7IHR5cGU6IElucHV0IH0sXSxcbidjb25uZWN0JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2xpbWl0JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ21pbic6IFt7IHR5cGU6IElucHV0IH0sXSxcbidtYXgnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nc3RlcCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidmb3JtYXQnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4ncGFnZVN0ZXBzJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2NvbmZpZyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiduZ01vZGVsJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2tleWJvYXJkJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ29uS2V5ZG93bic6IFt7IHR5cGU6IElucHV0IH0sXSxcbidmb3JtQ29udHJvbCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbid0b29sdGlwcyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidjaGFuZ2UnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ3VwZGF0ZSc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nc2xpZGUnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ3NldCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nc3RhcnQnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ2VuZCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG59O1xufVxuXG5cblxuZXhwb3J0IGNsYXNzIE5vdWlzbGlkZXJNb2R1bGUgeyBzdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBOZ01vZHVsZSwgYXJnczogW3tcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IFtOb3Vpc2xpZGVyQ29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbTm91aXNsaWRlckNvbXBvbmVudF0sXG59LCBdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xuXTtcbn1cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuIl19

/***/ }),

/***/ "../../../../nouislider/distribute/nouislider.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! nouislider - 10.1.0 - 2017-07-28 17:11:18 */

(function (factory) {

    if ( true ) {

        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

    } else if ( typeof exports === 'object' ) {

        // Node/CommonJS
        module.exports = factory();

    } else {

        // Browser globals
        window.noUiSlider = factory();
    }

}(function( ){

	'use strict';

	var VERSION = '10.1.0';


	function isValidFormatter ( entry ) {
		return typeof entry === 'object' && typeof entry.to === 'function' && typeof entry.from === 'function';
	}

	function removeElement ( el ) {
		el.parentElement.removeChild(el);
	}

	// Bindable version
	function preventDefault ( e ) {
		e.preventDefault();
	}

	// Removes duplicates from an array.
	function unique ( array ) {
		return array.filter(function(a){
			return !this[a] ? this[a] = true : false;
		}, {});
	}

	// Round a value to the closest 'to'.
	function closest ( value, to ) {
		return Math.round(value / to) * to;
	}

	// Current position of an element relative to the document.
	function offset ( elem, orientation ) {

		var rect = elem.getBoundingClientRect();
		var doc = elem.ownerDocument;
		var docElem = doc.documentElement;
		var pageOffset = getPageOffset(doc);

		// getBoundingClientRect contains left scroll in Chrome on Android.
		// I haven't found a feature detection that proves this. Worst case
		// scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
		if ( /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) ) {
			pageOffset.x = 0;
		}

		return orientation ? (rect.top + pageOffset.y - docElem.clientTop) : (rect.left + pageOffset.x - docElem.clientLeft);
	}

	// Checks whether a value is numerical.
	function isNumeric ( a ) {
		return typeof a === 'number' && !isNaN( a ) && isFinite( a );
	}

	// Sets a class and removes it after [duration] ms.
	function addClassFor ( element, className, duration ) {
		if (duration > 0) {
		addClass(element, className);
			setTimeout(function(){
				removeClass(element, className);
			}, duration);
		}
	}

	// Limits a value to 0 - 100
	function limit ( a ) {
		return Math.max(Math.min(a, 100), 0);
	}

	// Wraps a variable as an array, if it isn't one yet.
	// Note that an input array is returned by reference!
	function asArray ( a ) {
		return Array.isArray(a) ? a : [a];
	}

	// Counts decimals
	function countDecimals ( numStr ) {
		numStr = String(numStr);
		var pieces = numStr.split(".");
		return pieces.length > 1 ? pieces[1].length : 0;
	}

	// http://youmightnotneedjquery.com/#add_class
	function addClass ( el, className ) {
		if ( el.classList ) {
			el.classList.add(className);
		} else {
			el.className += ' ' + className;
		}
	}

	// http://youmightnotneedjquery.com/#remove_class
	function removeClass ( el, className ) {
		if ( el.classList ) {
			el.classList.remove(className);
		} else {
			el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}

	// https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
	function hasClass ( el, className ) {
		return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
	}

	// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
	function getPageOffset ( doc ) {

		var supportPageOffset = window.pageXOffset !== undefined;
		var isCSS1Compat = ((doc.compatMode || "") === "CSS1Compat");
		var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
		var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;

		return {
			x: x,
			y: y
		};
	}

	// we provide a function to compute constants instead
	// of accessing window.* as soon as the module needs it
	// so that we do not compute anything if not needed
	function getActions ( ) {

		// Determine the events to bind. IE11 implements pointerEvents without
		// a prefix, which breaks compatibility with the IE10 implementation.
		return window.navigator.pointerEnabled ? {
			start: 'pointerdown',
			move: 'pointermove',
			end: 'pointerup'
		} : window.navigator.msPointerEnabled ? {
			start: 'MSPointerDown',
			move: 'MSPointerMove',
			end: 'MSPointerUp'
		} : {
			start: 'mousedown touchstart',
			move: 'mousemove touchmove',
			end: 'mouseup touchend'
		};
	}

	// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
	// Issue #785
	function getSupportsPassive ( ) {

		var supportsPassive = false;

		try {

			var opts = Object.defineProperty({}, 'passive', {
				get: function() {
					supportsPassive = true;
				}
			});

			window.addEventListener('test', null, opts);

		} catch (e) {}

		return supportsPassive;
	}

	function getSupportsTouchActionNone ( ) {
		return window.CSS && CSS.supports && CSS.supports('touch-action', 'none');
	}


// Value calculation

	// Determine the size of a sub-range in relation to a full range.
	function subRangeRatio ( pa, pb ) {
		return (100 / (pb - pa));
	}

	// (percentage) How many percent is this value of this range?
	function fromPercentage ( range, value ) {
		return (value * 100) / ( range[1] - range[0] );
	}

	// (percentage) Where is this value on this range?
	function toPercentage ( range, value ) {
		return fromPercentage( range, range[0] < 0 ?
			value + Math.abs(range[0]) :
				value - range[0] );
	}

	// (value) How much is this percentage on this range?
	function isPercentage ( range, value ) {
		return ((value * ( range[1] - range[0] )) / 100) + range[0];
	}


// Range conversion

	function getJ ( value, arr ) {

		var j = 1;

		while ( value >= arr[j] ){
			j += 1;
		}

		return j;
	}

	// (percentage) Input a value, find where, on a scale of 0-100, it applies.
	function toStepping ( xVal, xPct, value ) {

		if ( value >= xVal.slice(-1)[0] ){
			return 100;
		}

		var j = getJ( value, xVal ), va, vb, pa, pb;

		va = xVal[j-1];
		vb = xVal[j];
		pa = xPct[j-1];
		pb = xPct[j];

		return pa + (toPercentage([va, vb], value) / subRangeRatio (pa, pb));
	}

	// (value) Input a percentage, find where it is on the specified range.
	function fromStepping ( xVal, xPct, value ) {

		// There is no range group that fits 100
		if ( value >= 100 ){
			return xVal.slice(-1)[0];
		}

		var j = getJ( value, xPct ), va, vb, pa, pb;

		va = xVal[j-1];
		vb = xVal[j];
		pa = xPct[j-1];
		pb = xPct[j];

		return isPercentage([va, vb], (value - pa) * subRangeRatio (pa, pb));
	}

	// (percentage) Get the step that applies at a certain value.
	function getStep ( xPct, xSteps, snap, value ) {

		if ( value === 100 ) {
			return value;
		}

		var j = getJ( value, xPct ), a, b;

		// If 'snap' is set, steps are used as fixed points on the slider.
		if ( snap ) {

			a = xPct[j-1];
			b = xPct[j];

			// Find the closest position, a or b.
			if ((value - a) > ((b-a)/2)){
				return b;
			}

			return a;
		}

		if ( !xSteps[j-1] ){
			return value;
		}

		return xPct[j-1] + closest(
			value - xPct[j-1],
			xSteps[j-1]
		);
	}


// Entry parsing

	function handleEntryPoint ( index, value, that ) {

		var percentage;

		// Wrap numerical input in an array.
		if ( typeof value === "number" ) {
			value = [value];
		}

		// Reject any invalid input, by testing whether value is an array.
		if ( Object.prototype.toString.call( value ) !== '[object Array]' ){
			throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.");
		}

		// Covert min/max syntax to 0 and 100.
		if ( index === 'min' ) {
			percentage = 0;
		} else if ( index === 'max' ) {
			percentage = 100;
		} else {
			percentage = parseFloat( index );
		}

		// Check for correct input.
		if ( !isNumeric( percentage ) || !isNumeric( value[0] ) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.");
		}

		// Store values.
		that.xPct.push( percentage );
		that.xVal.push( value[0] );

		// NaN will evaluate to false too, but to keep
		// logging clear, set step explicitly. Make sure
		// not to override the 'step' setting with false.
		if ( !percentage ) {
			if ( !isNaN( value[1] ) ) {
				that.xSteps[0] = value[1];
			}
		} else {
			that.xSteps.push( isNaN(value[1]) ? false : value[1] );
		}

		that.xHighestCompleteStep.push(0);
	}

	function handleStepPoint ( i, n, that ) {

		// Ignore 'false' stepping.
		if ( !n ) {
			return true;
		}

		// Factor to range ratio
		that.xSteps[i] = fromPercentage([
			 that.xVal[i]
			,that.xVal[i+1]
		], n) / subRangeRatio (
			that.xPct[i],
			that.xPct[i+1] );

		var totalSteps = (that.xVal[i+1] - that.xVal[i]) / that.xNumSteps[i];
		var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
		var step = that.xVal[i] + (that.xNumSteps[i] * highestStep);

		that.xHighestCompleteStep[i] = step;
	}


// Interface

	function Spectrum ( entry, snap, singleStep ) {

		this.xPct = [];
		this.xVal = [];
		this.xSteps = [ singleStep || false ];
		this.xNumSteps = [ false ];
		this.xHighestCompleteStep = [];

		this.snap = snap;

		var index, ordered = [ /* [0, 'min'], [1, '50%'], [2, 'max'] */ ];

		// Map the object keys to an array.
		for ( index in entry ) {
			if ( entry.hasOwnProperty(index) ) {
				ordered.push([entry[index], index]);
			}
		}

		// Sort all entries by value (numeric sort).
		if ( ordered.length && typeof ordered[0][0] === "object" ) {
			ordered.sort(function(a, b) { return a[0][0] - b[0][0]; });
		} else {
			ordered.sort(function(a, b) { return a[0] - b[0]; });
		}


		// Convert all entries to subranges.
		for ( index = 0; index < ordered.length; index++ ) {
			handleEntryPoint(ordered[index][1], ordered[index][0], this);
		}

		// Store the actual step values.
		// xSteps is sorted in the same order as xPct and xVal.
		this.xNumSteps = this.xSteps.slice(0);

		// Convert all numeric steps to the percentage of the subrange they represent.
		for ( index = 0; index < this.xNumSteps.length; index++ ) {
			handleStepPoint(index, this.xNumSteps[index], this);
		}
	}

	Spectrum.prototype.getMargin = function ( value ) {

		var step = this.xNumSteps[0];

		if ( step && ((value / step) % 1) !== 0 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'limit', 'margin' and 'padding' must be divisible by step.");
		}

		return this.xPct.length === 2 ? fromPercentage(this.xVal, value) : false;
	};

	Spectrum.prototype.toStepping = function ( value ) {

		value = toStepping( this.xVal, this.xPct, value );

		return value;
	};

	Spectrum.prototype.fromStepping = function ( value ) {

		return fromStepping( this.xVal, this.xPct, value );
	};

	Spectrum.prototype.getStep = function ( value ) {

		value = getStep(this.xPct, this.xSteps, this.snap, value );

		return value;
	};

	Spectrum.prototype.getNearbySteps = function ( value ) {

		var j = getJ(value, this.xPct);

		return {
			stepBefore: { startValue: this.xVal[j-2], step: this.xNumSteps[j-2], highestStep: this.xHighestCompleteStep[j-2] },
			thisStep: { startValue: this.xVal[j-1], step: this.xNumSteps[j-1], highestStep: this.xHighestCompleteStep[j-1] },
			stepAfter: { startValue: this.xVal[j-0], step: this.xNumSteps[j-0], highestStep: this.xHighestCompleteStep[j-0] }
		};
	};

	Spectrum.prototype.countStepDecimals = function () {
		var stepDecimals = this.xNumSteps.map(countDecimals);
		return Math.max.apply(null, stepDecimals);
 	};

	// Outside testing
	Spectrum.prototype.convert = function ( value ) {
		return this.getStep(this.toStepping(value));
	};

/*	Every input option is tested and parsed. This'll prevent
	endless validation in internal methods. These tests are
	structured with an item for every option available. An
	option can be marked as required by setting the 'r' flag.
	The testing function is provided with three arguments:
		- The provided value for the option;
		- A reference to the options object;
		- The name for the option;

	The testing function returns false when an error is detected,
	or true when everything is OK. It can also modify the option
	object, to make sure all values can be correctly looped elsewhere. */

	var defaultFormatter = { 'to': function( value ){
		return value !== undefined && value.toFixed(2);
	}, 'from': Number };

	function validateFormat ( entry ) {

		// Any object with a to and from method is supported.
		if ( isValidFormatter(entry) ) {
			return true;
		}

		throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.");
	}

	function testStep ( parsed, entry ) {

		if ( !isNumeric( entry ) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.");
		}

		// The step option can still be used to set stepping
		// for linear sliders. Overwritten if set in 'range'.
		parsed.singleStep = entry;
	}

	function testRange ( parsed, entry ) {

		// Filter incorrect input.
		if ( typeof entry !== 'object' || Array.isArray(entry) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.");
		}

		// Catch missing start or end.
		if ( entry.min === undefined || entry.max === undefined ) {
			throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.");
		}

		// Catch equal start or end.
		if ( entry.min === entry.max ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.");
		}

		parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.singleStep);
	}

	function testStart ( parsed, entry ) {

		entry = asArray(entry);

		// Validate input. Values aren't tested, as the public .val method
		// will always provide a valid location.
		if ( !Array.isArray( entry ) || !entry.length ) {
			throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.");
		}

		// Store the number of handles.
		parsed.handles = entry.length;

		// When the slider is initialized, the .val method will
		// be called with the start options.
		parsed.start = entry;
	}

	function testSnap ( parsed, entry ) {

		// Enforce 100% stepping within subranges.
		parsed.snap = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.");
		}
	}

	function testAnimate ( parsed, entry ) {

		// Enforce 100% stepping within subranges.
		parsed.animate = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.");
		}
	}

	function testAnimationDuration ( parsed, entry ) {

		parsed.animationDuration = entry;

		if ( typeof entry !== 'number' ){
			throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.");
		}
	}

	function testConnect ( parsed, entry ) {

		var connect = [false];
		var i;

		// Map legacy options
		if ( entry === 'lower' ) {
			entry = [true, false];
		}

		else if ( entry === 'upper' ) {
			entry = [false, true];
		}

		// Handle boolean options
		if ( entry === true || entry === false ) {

			for ( i = 1; i < parsed.handles; i++ ) {
				connect.push(entry);
			}

			connect.push(false);
		}

		// Reject invalid input
		else if ( !Array.isArray( entry ) || !entry.length || entry.length !== parsed.handles + 1 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.");
		}

		else {
			connect = entry;
		}

		parsed.connect = connect;
	}

	function testOrientation ( parsed, entry ) {

		// Set orientation to an a numerical value for easy
		// array selection.
		switch ( entry ){
		  case 'horizontal':
			parsed.ort = 0;
			break;
		  case 'vertical':
			parsed.ort = 1;
			break;
		  default:
			throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.");
		}
	}

	function testMargin ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.");
		}

		// Issue #582
		if ( entry === 0 ) {
			return;
		}

		parsed.margin = parsed.spectrum.getMargin(entry);

		if ( !parsed.margin ) {
			throw new Error("noUiSlider (" + VERSION + "): 'margin' option is only supported on linear sliders.");
		}
	}

	function testLimit ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.");
		}

		parsed.limit = parsed.spectrum.getMargin(entry);

		if ( !parsed.limit || parsed.handles < 2 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
		}
	}

	function testPadding ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric.");
		}

		if ( entry === 0 ) {
			return;
		}

		parsed.padding = parsed.spectrum.getMargin(entry);

		if ( !parsed.padding ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option is only supported on linear sliders.");
		}

		if ( parsed.padding < 0 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number.");
		}

		if ( parsed.padding >= 50 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be less than half the range.");
		}
	}

	function testDirection ( parsed, entry ) {

		// Set direction as a numerical value for easy parsing.
		// Invert connection for RTL sliders, so that the proper
		// handles get the connect/background classes.
		switch ( entry ) {
		  case 'ltr':
			parsed.dir = 0;
			break;
		  case 'rtl':
			parsed.dir = 1;
			break;
		  default:
			throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.");
		}
	}

	function testBehaviour ( parsed, entry ) {

		// Make sure the input is a string.
		if ( typeof entry !== 'string' ) {
			throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.");
		}

		// Check if the string contains any keywords.
		// None are required.
		var tap = entry.indexOf('tap') >= 0;
		var drag = entry.indexOf('drag') >= 0;
		var fixed = entry.indexOf('fixed') >= 0;
		var snap = entry.indexOf('snap') >= 0;
		var hover = entry.indexOf('hover') >= 0;

		if ( fixed ) {

			if ( parsed.handles !== 2 ) {
				throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles");
			}

			// Use margin to enforce fixed state
			testMargin(parsed, parsed.start[1] - parsed.start[0]);
		}

		parsed.events = {
			tap: tap || snap,
			drag: drag,
			fixed: fixed,
			snap: snap,
			hover: hover
		};
	}

	function testMultitouch ( parsed, entry ) {
		parsed.multitouch = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider (" + VERSION + "): 'multitouch' option must be a boolean.");
		}
	}

	function testTooltips ( parsed, entry ) {

		if ( entry === false ) {
			return;
		}

		else if ( entry === true ) {

			parsed.tooltips = [];

			for ( var i = 0; i < parsed.handles; i++ ) {
				parsed.tooltips.push(true);
			}
		}

		else {

			parsed.tooltips = asArray(entry);

			if ( parsed.tooltips.length !== parsed.handles ) {
				throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.");
			}

			parsed.tooltips.forEach(function(formatter){
				if ( typeof formatter !== 'boolean' && (typeof formatter !== 'object' || typeof formatter.to !== 'function') ) {
					throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.");
				}
			});
		}
	}

	function testAriaFormat ( parsed, entry ) {
		parsed.ariaFormat = entry;
		validateFormat(entry);
	}

	function testFormat ( parsed, entry ) {
		parsed.format = entry;
		validateFormat(entry);
	}

	function testCssPrefix ( parsed, entry ) {

		if ( entry !== undefined && typeof entry !== 'string' && entry !== false ) {
			throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.");
		}

		parsed.cssPrefix = entry;
	}

	function testCssClasses ( parsed, entry ) {

		if ( entry !== undefined && typeof entry !== 'object' ) {
			throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.");
		}

		if ( typeof parsed.cssPrefix === 'string' ) {
			parsed.cssClasses = {};

			for ( var key in entry ) {
				if ( !entry.hasOwnProperty(key) ) { continue; }

				parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
			}
		} else {
			parsed.cssClasses = entry;
		}
	}

	function testUseRaf ( parsed, entry ) {
		if ( entry === true || entry === false ) {
			parsed.useRequestAnimationFrame = entry;
		} else {
			throw new Error("noUiSlider (" + VERSION + "): 'useRequestAnimationFrame' option should be true (default) or false.");
		}
	}

	// Test all developer settings and parse to assumption-safe values.
	function testOptions ( options ) {

		// To prove a fix for #537, freeze options here.
		// If the object is modified, an error will be thrown.
		// Object.freeze(options);

		var parsed = {
			margin: 0,
			limit: 0,
			padding: 0,
			animate: true,
			animationDuration: 300,
			ariaFormat: defaultFormatter,
			format: defaultFormatter
		};

		// Tests are executed in the order they are presented here.
		var tests = {
			'step': { r: false, t: testStep },
			'start': { r: true, t: testStart },
			'connect': { r: true, t: testConnect },
			'direction': { r: true, t: testDirection },
			'snap': { r: false, t: testSnap },
			'animate': { r: false, t: testAnimate },
			'animationDuration': { r: false, t: testAnimationDuration },
			'range': { r: true, t: testRange },
			'orientation': { r: false, t: testOrientation },
			'margin': { r: false, t: testMargin },
			'limit': { r: false, t: testLimit },
			'padding': { r: false, t: testPadding },
			'behaviour': { r: true, t: testBehaviour },
			'multitouch': { r: true, t: testMultitouch },
			'ariaFormat': { r: false, t: testAriaFormat },
			'format': { r: false, t: testFormat },
			'tooltips': { r: false, t: testTooltips },
			'cssPrefix': { r: false, t: testCssPrefix },
			'cssClasses': { r: false, t: testCssClasses },
			'useRequestAnimationFrame': { r: false, t: testUseRaf }
		};

		var defaults = {
			'connect': false,
			'direction': 'ltr',
			'behaviour': 'tap',
			'multitouch': false,
			'orientation': 'horizontal',
			'cssPrefix' : 'noUi-',
			'cssClasses': {
				target: 'target',
				base: 'base',
				origin: 'origin',
				handle: 'handle',
				handleLower: 'handle-lower',
				handleUpper: 'handle-upper',
				horizontal: 'horizontal',
				vertical: 'vertical',
				background: 'background',
				connect: 'connect',
				ltr: 'ltr',
				rtl: 'rtl',
				draggable: 'draggable',
				drag: 'state-drag',
				tap: 'state-tap',
				active: 'active',
				tooltip: 'tooltip',
				pips: 'pips',
				pipsHorizontal: 'pips-horizontal',
				pipsVertical: 'pips-vertical',
				marker: 'marker',
				markerHorizontal: 'marker-horizontal',
				markerVertical: 'marker-vertical',
				markerNormal: 'marker-normal',
				markerLarge: 'marker-large',
				markerSub: 'marker-sub',
				value: 'value',
				valueHorizontal: 'value-horizontal',
				valueVertical: 'value-vertical',
				valueNormal: 'value-normal',
				valueLarge: 'value-large',
				valueSub: 'value-sub'
			},
			'useRequestAnimationFrame': true
		};

		// AriaFormat defaults to regular format, if any.
		if ( options.format && !options.ariaFormat ) {
			options.ariaFormat = options.format;
		}

		// Run all options through a testing mechanism to ensure correct
		// input. It should be noted that options might get modified to
		// be handled properly. E.g. wrapping integers in arrays.
		Object.keys(tests).forEach(function( name ){

			// If the option isn't set, but it is required, throw an error.
			if ( options[name] === undefined && defaults[name] === undefined ) {

				if ( tests[name].r ) {
					throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.");
				}

				return true;
			}

			tests[name].t( parsed, options[name] === undefined ? defaults[name] : options[name] );
		});

		// Forward pips options
		parsed.pips = options.pips;

		var styles = [['left', 'top'], ['right', 'bottom']];

		// Pre-define the styles.
		parsed.style = styles[parsed.dir][parsed.ort];
		parsed.styleOposite = styles[parsed.dir?0:1][parsed.ort];

		return parsed;
	}


function closure ( target, options, originalOptions ){

	var actions = getActions();
	var supportsTouchActionNone = getSupportsTouchActionNone();
	var supportsPassive = supportsTouchActionNone && getSupportsPassive();

	// All variables local to 'closure' are prefixed with 'scope_'
	var scope_Target = target;
	var scope_Locations = [];
	var scope_Base;
	var scope_Handles;
	var scope_HandleNumbers = [];
	var scope_ActiveHandlesCount = 0;
	var scope_Connects;
	var scope_Spectrum = options.spectrum;
	var scope_Values = [];
	var scope_Events = {};
	var scope_Self;
	var scope_Pips;
	var scope_Document = target.ownerDocument;
	var scope_DocumentElement = scope_Document.documentElement;
	var scope_Body = scope_Document.body;


	// Creates a node, adds it to target, returns the new node.
	function addNodeTo ( target, className ) {

		var div = scope_Document.createElement('div');

		if ( className ) {
			addClass(div, className);
		}

		target.appendChild(div);

		return div;
	}

	// Append a origin to the base
	function addOrigin ( base, handleNumber ) {

		var origin = addNodeTo(base, options.cssClasses.origin);
		var handle = addNodeTo(origin, options.cssClasses.handle);

		handle.setAttribute('data-handle', handleNumber);

		// https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
		// 0 = focusable and reachable
		handle.setAttribute('tabindex', '0');
		handle.setAttribute('role', 'slider');
		handle.setAttribute('aria-orientation', options.ort ? 'vertical' : 'horizontal');

		if ( handleNumber === 0 ) {
			addClass(handle, options.cssClasses.handleLower);
		}

		else if ( handleNumber === options.handles - 1 ) {
			addClass(handle, options.cssClasses.handleUpper);
		}

		return origin;
	}

	// Insert nodes for connect elements
	function addConnect ( base, add ) {

		if ( !add ) {
			return false;
		}

		return addNodeTo(base, options.cssClasses.connect);
	}

	// Add handles to the slider base.
	function addElements ( connectOptions, base ) {

		scope_Handles = [];
		scope_Connects = [];

		scope_Connects.push(addConnect(base, connectOptions[0]));

		// [::::O====O====O====]
		// connectOptions = [0, 1, 1, 1]

		for ( var i = 0; i < options.handles; i++ ) {
			// Keep a list of all added handles.
			scope_Handles.push(addOrigin(base, i));
			scope_HandleNumbers[i] = i;
			scope_Connects.push(addConnect(base, connectOptions[i + 1]));
		}
	}

	// Initialize a single slider.
	function addSlider ( target ) {

		// Apply classes and data to the target.
		addClass(target, options.cssClasses.target);

		if ( options.dir === 0 ) {
			addClass(target, options.cssClasses.ltr);
		} else {
			addClass(target, options.cssClasses.rtl);
		}

		if ( options.ort === 0 ) {
			addClass(target, options.cssClasses.horizontal);
		} else {
			addClass(target, options.cssClasses.vertical);
		}

		scope_Base = addNodeTo(target, options.cssClasses.base);
	}


	function addTooltip ( handle, handleNumber ) {

		if ( !options.tooltips[handleNumber] ) {
			return false;
		}

		return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
	}

	// The tooltips option is a shorthand for using the 'update' event.
	function tooltips ( ) {

		// Tooltips are added with options.tooltips in original order.
		var tips = scope_Handles.map(addTooltip);

		bindEvent('update', function(values, handleNumber, unencoded) {

			if ( !tips[handleNumber] ) {
				return;
			}

			var formattedValue = values[handleNumber];

			if ( options.tooltips[handleNumber] !== true ) {
				formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
			}

			tips[handleNumber].innerHTML = formattedValue;
		});
	}


	function aria ( ) {

		bindEvent('update', function ( values, handleNumber, unencoded, tap, positions ) {

			// Update Aria Values for all handles, as a change in one changes min and max values for the next.
			scope_HandleNumbers.forEach(function( handleNumber ){

				var handle = scope_Handles[handleNumber];

				var min = checkHandlePosition(scope_Locations, handleNumber, 0, true, true, true);
				var max = checkHandlePosition(scope_Locations, handleNumber, 100, true, true, true);

				var now = positions[handleNumber];
				var text = options.ariaFormat.to(unencoded[handleNumber]);

				handle.children[0].setAttribute('aria-valuemin', min.toFixed(1));
				handle.children[0].setAttribute('aria-valuemax', max.toFixed(1));
				handle.children[0].setAttribute('aria-valuenow', now.toFixed(1));
				handle.children[0].setAttribute('aria-valuetext', text);
			});
		});
	}


	function getGroup ( mode, values, stepped ) {

		// Use the range.
		if ( mode === 'range' || mode === 'steps' ) {
			return scope_Spectrum.xVal;
		}

		if ( mode === 'count' ) {

			if ( !values ) {
				throw new Error("noUiSlider (" + VERSION + "): 'values' required for mode 'count'.");
			}

			// Divide 0 - 100 in 'count' parts.
			var spread = ( 100 / (values - 1) );
			var v;
			var i = 0;

			values = [];

			// List these parts and have them handled as 'positions'.
			while ( (v = i++ * spread) <= 100 ) {
				values.push(v);
			}

			mode = 'positions';
		}

		if ( mode === 'positions' ) {

			// Map all percentages to on-range values.
			return values.map(function( value ){
				return scope_Spectrum.fromStepping( stepped ? scope_Spectrum.getStep( value ) : value );
			});
		}

		if ( mode === 'values' ) {

			// If the value must be stepped, it needs to be converted to a percentage first.
			if ( stepped ) {

				return values.map(function( value ){

					// Convert to percentage, apply step, return to value.
					return scope_Spectrum.fromStepping( scope_Spectrum.getStep( scope_Spectrum.toStepping( value ) ) );
				});

			}

			// Otherwise, we can simply use the values.
			return values;
		}
	}

	function generateSpread ( density, mode, group ) {

		function safeIncrement(value, increment) {
			// Avoid floating point variance by dropping the smallest decimal places.
			return (value + increment).toFixed(7) / 1;
		}

		var indexes = {};
		var firstInRange = scope_Spectrum.xVal[0];
		var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length-1];
		var ignoreFirst = false;
		var ignoreLast = false;
		var prevPct = 0;

		// Create a copy of the group, sort it and filter away all duplicates.
		group = unique(group.slice().sort(function(a, b){ return a - b; }));

		// Make sure the range starts with the first element.
		if ( group[0] !== firstInRange ) {
			group.unshift(firstInRange);
			ignoreFirst = true;
		}

		// Likewise for the last one.
		if ( group[group.length - 1] !== lastInRange ) {
			group.push(lastInRange);
			ignoreLast = true;
		}

		group.forEach(function ( current, index ) {

			// Get the current step and the lower + upper positions.
			var step;
			var i;
			var q;
			var low = current;
			var high = group[index+1];
			var newPct;
			var pctDifference;
			var pctPos;
			var type;
			var steps;
			var realSteps;
			var stepsize;

			// When using 'steps' mode, use the provided steps.
			// Otherwise, we'll step on to the next subrange.
			if ( mode === 'steps' ) {
				step = scope_Spectrum.xNumSteps[ index ];
			}

			// Default to a 'full' step.
			if ( !step ) {
				step = high-low;
			}

			// Low can be 0, so test for false. If high is undefined,
			// we are at the last subrange. Index 0 is already handled.
			if ( low === false || high === undefined ) {
				return;
			}

			// Make sure step isn't 0, which would cause an infinite loop (#654)
			step = Math.max(step, 0.0000001);

			// Find all steps in the subrange.
			for ( i = low; i <= high; i = safeIncrement(i, step) ) {

				// Get the percentage value for the current step,
				// calculate the size for the subrange.
				newPct = scope_Spectrum.toStepping( i );
				pctDifference = newPct - prevPct;

				steps = pctDifference / density;
				realSteps = Math.round(steps);

				// This ratio represents the ammount of percentage-space a point indicates.
				// For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-devided.
				// Round the percentage offset to an even number, then divide by two
				// to spread the offset on both sides of the range.
				stepsize = pctDifference/realSteps;

				// Divide all points evenly, adding the correct number to this subrange.
				// Run up to <= so that 100% gets a point, event if ignoreLast is set.
				for ( q = 1; q <= realSteps; q += 1 ) {

					// The ratio between the rounded value and the actual size might be ~1% off.
					// Correct the percentage offset by the number of points
					// per subrange. density = 1 will result in 100 points on the
					// full range, 2 for 50, 4 for 25, etc.
					pctPos = prevPct + ( q * stepsize );
					indexes[pctPos.toFixed(5)] = ['x', 0];
				}

				// Determine the point type.
				type = (group.indexOf(i) > -1) ? 1 : ( mode === 'steps' ? 2 : 0 );

				// Enforce the 'ignoreFirst' option by overwriting the type for 0.
				if ( !index && ignoreFirst ) {
					type = 0;
				}

				if ( !(i === high && ignoreLast)) {
					// Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
					indexes[newPct.toFixed(5)] = [i, type];
				}

				// Update the percentage count.
				prevPct = newPct;
			}
		});

		return indexes;
	}

	function addMarking ( spread, filterFunc, formatter ) {

		var element = scope_Document.createElement('div');

		var valueSizeClasses = [
			options.cssClasses.valueNormal,
			options.cssClasses.valueLarge,
			options.cssClasses.valueSub
		];
		var markerSizeClasses = [
			options.cssClasses.markerNormal,
			options.cssClasses.markerLarge,
			options.cssClasses.markerSub
		];
		var valueOrientationClasses = [
			options.cssClasses.valueHorizontal,
			options.cssClasses.valueVertical
		];
		var markerOrientationClasses = [
			options.cssClasses.markerHorizontal,
			options.cssClasses.markerVertical
		];

		addClass(element, options.cssClasses.pips);
		addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

		function getClasses( type, source ){
			var a = source === options.cssClasses.value;
			var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
			var sizeClasses = a ? valueSizeClasses : markerSizeClasses;

			return source + ' ' + orientationClasses[options.ort] + ' ' + sizeClasses[type];
		}

		function addSpread ( offset, values ){

			// Apply the filter function, if it is set.
			values[1] = (values[1] && filterFunc) ? filterFunc(values[0], values[1]) : values[1];

			// Add a marker for every point
			var node = addNodeTo(element, false);
				node.className = getClasses(values[1], options.cssClasses.marker);
				node.style[options.style] = offset + '%';

			// Values are only appended for points marked '1' or '2'.
			if ( values[1] ) {
				node = addNodeTo(element, false);
				node.className = getClasses(values[1], options.cssClasses.value);
				node.style[options.style] = offset + '%';
				node.innerText = formatter.to(values[0]);
			}
		}

		// Append all points.
		Object.keys(spread).forEach(function(a){
			addSpread(a, spread[a]);
		});

		return element;
	}

	function removePips ( ) {
		if ( scope_Pips ) {
			removeElement(scope_Pips);
			scope_Pips = null;
		}
	}

	function pips ( grid ) {

		// Fix #669
		removePips();

		var mode = grid.mode;
		var density = grid.density || 1;
		var filter = grid.filter || false;
		var values = grid.values || false;
		var stepped = grid.stepped || false;
		var group = getGroup( mode, values, stepped );
		var spread = generateSpread( density, mode, group );
		var format = grid.format || {
			to: Math.round
		};

		scope_Pips = scope_Target.appendChild(addMarking(
			spread,
			filter,
			format
		));

		return scope_Pips;
	}


	// Shorthand for base dimensions.
	function baseSize ( ) {
		var rect = scope_Base.getBoundingClientRect(), alt = 'offset' + ['Width', 'Height'][options.ort];
		return options.ort === 0 ? (rect.width||scope_Base[alt]) : (rect.height||scope_Base[alt]);
	}

	// Handler for attaching events trough a proxy.
	function attachEvent ( events, element, callback, data ) {

		// This function can be used to 'filter' events to the slider.
		// element is a node, not a nodeList

		var method = function ( e ){

			if ( scope_Target.hasAttribute('disabled') ) {
				return false;
			}

			// Stop if an active 'tap' transition is taking place.
			if ( hasClass(scope_Target, options.cssClasses.tap) ) {
				return false;
			}

			e = fixEvent(e, data.pageOffset, data.target || element);

			// Handle reject of multitouch
			if ( !e ) {
				return false;
			}

			// Ignore right or middle clicks on start #454
			if ( events === actions.start && e.buttons !== undefined && e.buttons > 1 ) {
				return false;
			}

			// Ignore right or middle clicks on start #454
			if ( data.hover && e.buttons ) {
				return false;
			}

			// 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
			// iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
			// touch-action: manipulation, but that allows panning, which breaks
			// sliders after zooming/on non-responsive pages.
			// See: https://bugs.webkit.org/show_bug.cgi?id=133112
			if ( !supportsPassive ) {
				e.preventDefault();
			}

			e.calcPoint = e.points[ options.ort ];

			// Call the event handler with the event [ and additional data ].
			callback ( e, data );
		};

		var methods = [];

		// Bind a closure on the target for every event type.
		events.split(' ').forEach(function( eventName ){
			element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
			methods.push([eventName, method]);
		});

		return methods;
	}

	// Provide a clean event with standardized offset values.
	function fixEvent ( e, pageOffset, target ) {

		// Filter the event to register the type, which can be
		// touch, mouse or pointer. Offset changes need to be
		// made on an event specific basis.
		var touch = e.type.indexOf('touch') === 0;
		var mouse = e.type.indexOf('mouse') === 0;
		var pointer = e.type.indexOf('pointer') === 0;

		var x;
		var y;

		// IE10 implemented pointer events with a prefix;
		if ( e.type.indexOf('MSPointer') === 0 ) {
			pointer = true;
		}


		// In the event that multitouch is activated, the only thing one handle should be concerned
		// about is the touches that originated on top of it.
		if ( touch && options.multitouch ) {
			// Returns true if a touch originated on the target.
			var isTouchOnTarget = function (touch) {
				return touch.target === target || target.contains(touch.target);
			};
			// In the case of touchstart events, we need to make sure there is still no more than one
			// touch on the target so we look amongst all touches.
			if (e.type === 'touchstart') {
				var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
				// Do not support more than one touch per handle.
				if ( targetTouches.length > 1 ) {
					return false;
				}
				x = targetTouches[0].pageX;
				y = targetTouches[0].pageY;
			} else {
			// In the other cases, find on changedTouches is enough.
				var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
				// Cancel if the target touch has not moved.
				if ( !targetTouch ) {
					return false;
				}
				x = targetTouch.pageX;
				y = targetTouch.pageY;
			}
		} else if ( touch ) {
			// Fix bug when user touches with two or more fingers on mobile devices.
			// It's useful when you have two or more sliders on one page,
			// that can be touched simultaneously.
			// #649, #663, #668
			if ( e.touches.length > 1 ) {
				return false;
			}

			// noUiSlider supports one movement at a time,
			// so we can select the first 'changedTouch'.
			x = e.changedTouches[0].pageX;
			y = e.changedTouches[0].pageY;
		}

		pageOffset = pageOffset || getPageOffset(scope_Document);

		if ( mouse || pointer ) {
			x = e.clientX + pageOffset.x;
			y = e.clientY + pageOffset.y;
		}

		e.pageOffset = pageOffset;
		e.points = [x, y];
		e.cursor = mouse || pointer; // Fix #435

		return e;
	}

	// Translate a coordinate in the document to a percentage on the slider
	function calcPointToPercentage ( calcPoint ) {
		var location = calcPoint - offset(scope_Base, options.ort);
		var proposal = ( location * 100 ) / baseSize();
		return options.dir ? 100 - proposal : proposal;
	}

	// Find handle closest to a certain percentage on the slider
	function getClosestHandle ( proposal ) {

		var closest = 100;
		var handleNumber = false;

		scope_Handles.forEach(function(handle, index){

			// Disabled handles are ignored
			if ( handle.hasAttribute('disabled') ) {
				return;
			}

			var pos = Math.abs(scope_Locations[index] - proposal);

			if ( pos < closest ) {
				handleNumber = index;
				closest = pos;
			}
		});

		return handleNumber;
	}

	// Moves handle(s) by a percentage
	// (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
	function moveHandles ( upward, proposal, locations, handleNumbers ) {

		var proposals = locations.slice();

		var b = [!upward, upward];
		var f = [upward, !upward];

		// Copy handleNumbers so we don't change the dataset
		handleNumbers = handleNumbers.slice();

		// Check to see which handle is 'leading'.
		// If that one can't move the second can't either.
		if ( upward ) {
			handleNumbers.reverse();
		}

		// Step 1: get the maximum percentage that any of the handles can move
		if ( handleNumbers.length > 1 ) {

			handleNumbers.forEach(function(handleNumber, o) {

				var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false);

				// Stop if one of the handles can't move.
				if ( to === false ) {
					proposal = 0;
				} else {
					proposal = to - proposals[handleNumber];
					proposals[handleNumber] = to;
				}
			});
		}

		// If using one handle, check backward AND forward
		else {
			b = f = [true];
		}

		var state = false;

		// Step 2: Try to set the handles with the found percentage
		handleNumbers.forEach(function(handleNumber, o) {
			state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
		});

		// Step 3: If a handle moved, fire events
		if ( state ) {
			handleNumbers.forEach(function(handleNumber){
				fireEvent('update', handleNumber);
				fireEvent('slide', handleNumber);
			});
		}
	}

	// External event handling
	function fireEvent ( eventName, handleNumber, tap ) {

		Object.keys(scope_Events).forEach(function( targetEvent ) {

			var eventType = targetEvent.split('.')[0];

			if ( eventName === eventType ) {
				scope_Events[targetEvent].forEach(function( callback ) {

					callback.call(
						// Use the slider public API as the scope ('this')
						scope_Self,
						// Return values as array, so arg_1[arg_2] is always valid.
						scope_Values.map(options.format.to),
						// Handle index, 0 or 1
						handleNumber,
						// Unformatted slider values
						scope_Values.slice(),
						// Event is fired by tap, true or false
						tap || false,
						// Left offset of the handle, in relation to the slider
						scope_Locations.slice()
					);
				});
			}
		});
	}


	// Fire 'end' when a mouse or pen leaves the document.
	function documentLeave ( event, data ) {
		if ( event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null ){
			eventEnd (event, data);
		}
	}

	// Handle movement on document for handle and range drag.
	function eventMove ( event, data ) {

		// Fix #498
		// Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
		// https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
		// IE9 has .buttons and .which zero on mousemove.
		// Firefox breaks the spec MDN defines.
		if ( navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0 ) {
			return eventEnd(event, data);
		}

		// Check if we are moving up or down
		var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);

		// Convert the movement into a percentage of the slider width/height
		var proposal = (movement * 100) / data.baseSize;

		moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
	}

	// Unbind move events on document, call callbacks.
	function eventEnd ( event, data ) {

		// The handle is no longer active, so remove the class.
		if ( data.handle ) {
			removeClass(data.handle, options.cssClasses.active);
			scope_ActiveHandlesCount -= 1;
		}

		// Unbind the move and end events, which are added on 'start'.
		data.listeners.forEach(function( c ) {
			scope_DocumentElement.removeEventListener(c[0], c[1]);
		});

		if ( scope_ActiveHandlesCount === 0 ) {
			// Remove dragging class.
			removeClass(scope_Target, options.cssClasses.drag);
			setZindex();

			// Remove cursor styles and text-selection events bound to the body.
			if ( event.cursor ) {
				scope_Body.style.cursor = '';
				scope_Body.removeEventListener('selectstart', preventDefault);
			}
		}

		data.handleNumbers.forEach(function(handleNumber){
			fireEvent('change', handleNumber);
			fireEvent('set', handleNumber);
			fireEvent('end', handleNumber);
		});
	}

	// Bind move events on document.
	function eventStart ( event, data ) {

		var handle;
		if ( data.handleNumbers.length === 1 ) {

			var handleOrigin = scope_Handles[data.handleNumbers[0]];

			// Ignore 'disabled' handles
			if ( handleOrigin.hasAttribute('disabled') ) {
				return false;
			}

			handle = handleOrigin.children[0];
			scope_ActiveHandlesCount += 1;

			// Mark the handle as 'active' so it can be styled.
			addClass(handle, options.cssClasses.active);
		}

		// A drag should never propagate up to the 'tap' event.
		event.stopPropagation();

		// Record the event listeners.
		var listeners = [];

		// Attach the move and end events.
		var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
			// The event target has changed so we need to propagate the original one so that we keep
			// relying on it to extract target touches.
			target: event.target,
			handle: handle,
			listeners: listeners,
			startCalcPoint: event.calcPoint,
			baseSize: baseSize(),
			pageOffset: event.pageOffset,
			handleNumbers: data.handleNumbers,
			buttonsProperty: event.buttons,
			locations: scope_Locations.slice()
		});

		var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
			target: event.target,
			handle: handle,
			listeners: listeners,
			handleNumbers: data.handleNumbers
		});

		var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
			target: event.target,
			handle: handle,
			listeners: listeners,
			handleNumbers: data.handleNumbers
		});

		// We want to make sure we pushed the listeners in the listener list rather than creating
		// a new one as it has already been passed to the event handlers.
		listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));

		// Text selection isn't an issue on touch devices,
		// so adding cursor styles can be skipped.
		if ( event.cursor ) {

			// Prevent the 'I' cursor and extend the range-drag cursor.
			scope_Body.style.cursor = getComputedStyle(event.target).cursor;

			// Mark the target with a dragging state.
			if ( scope_Handles.length > 1 ) {
				addClass(scope_Target, options.cssClasses.drag);
			}

			// Prevent text selection when dragging the handles.
			// In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
			// which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
			// meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
			// The 'cursor' flag is false.
			// See: http://caniuse.com/#search=selectstart
			scope_Body.addEventListener('selectstart', preventDefault, false);
		}

		data.handleNumbers.forEach(function(handleNumber){
			fireEvent('start', handleNumber);
		});
	}

	// Move closest handle to tapped location.
	function eventTap ( event ) {

		// The tap event shouldn't propagate up
		event.stopPropagation();

		var proposal = calcPointToPercentage(event.calcPoint);
		var handleNumber = getClosestHandle(proposal);

		// Tackle the case that all handles are 'disabled'.
		if ( handleNumber === false ) {
			return false;
		}

		// Flag the slider as it is now in a transitional state.
		// Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
		if ( !options.events.snap ) {
			addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
		}

		setHandle(handleNumber, proposal, true, true);

		setZindex();

		fireEvent('slide', handleNumber, true);
		fireEvent('update', handleNumber, true);
		fireEvent('change', handleNumber, true);
		fireEvent('set', handleNumber, true);

		if ( options.events.snap ) {
			eventStart(event, { handleNumbers: [handleNumber] });
		}
	}

	// Fires a 'hover' event for a hovered mouse/pen position.
	function eventHover ( event ) {

		var proposal = calcPointToPercentage(event.calcPoint);

		var to = scope_Spectrum.getStep(proposal);
		var value = scope_Spectrum.fromStepping(to);

		Object.keys(scope_Events).forEach(function( targetEvent ) {
			if ( 'hover' === targetEvent.split('.')[0] ) {
				scope_Events[targetEvent].forEach(function( callback ) {
					callback.call( scope_Self, value );
				});
			}
		});
	}

	// Attach events to several slider parts.
	function bindSliderEvents ( behaviour ) {

		// Attach the standard drag event to the handles.
		if ( !behaviour.fixed ) {

			scope_Handles.forEach(function( handle, index ){

				// These events are only bound to the visual handle
				// element, not the 'real' origin element.
				attachEvent ( actions.start, handle.children[0], eventStart, {
					handleNumbers: [index]
				});
			});
		}

		// Attach the tap event to the slider base.
		if ( behaviour.tap ) {
			attachEvent (actions.start, scope_Base, eventTap, {});
		}

		// Fire hover events
		if ( behaviour.hover ) {
			attachEvent (actions.move, scope_Base, eventHover, { hover: true });
		}

		// Make the range draggable.
		if ( behaviour.drag ){

			scope_Connects.forEach(function( connect, index ){

				if ( connect === false || index === 0 || index === scope_Connects.length - 1 ) {
					return;
				}

				var handleBefore = scope_Handles[index - 1];
				var handleAfter = scope_Handles[index];
				var eventHolders = [connect];

				addClass(connect, options.cssClasses.draggable);

				// When the range is fixed, the entire range can
				// be dragged by the handles. The handle in the first
				// origin will propagate the start event upward,
				// but it needs to be bound manually on the other.
				if ( behaviour.fixed ) {
					eventHolders.push(handleBefore.children[0]);
					eventHolders.push(handleAfter.children[0]);
				}

				eventHolders.forEach(function( eventHolder ) {
					attachEvent ( actions.start, eventHolder, eventStart, {
						handles: [handleBefore, handleAfter],
						handleNumbers: [index - 1, index]
					});
				});
			});
		}
	}


	// Split out the handle positioning logic so the Move event can use it, too
	function checkHandlePosition ( reference, handleNumber, to, lookBackward, lookForward, getValue ) {

		// For sliders with multiple handles, limit movement to the other handle.
		// Apply the margin option by adding it to the handle positions.
		if ( scope_Handles.length > 1 ) {

			if ( lookBackward && handleNumber > 0 ) {
				to = Math.max(to, reference[handleNumber - 1] + options.margin);
			}

			if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
				to = Math.min(to, reference[handleNumber + 1] - options.margin);
			}
		}

		// The limit option has the opposite effect, limiting handles to a
		// maximum distance from another. Limit must be > 0, as otherwise
		// handles would be unmoveable.
		if ( scope_Handles.length > 1 && options.limit ) {

			if ( lookBackward && handleNumber > 0 ) {
				to = Math.min(to, reference[handleNumber - 1] + options.limit);
			}

			if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
				to = Math.max(to, reference[handleNumber + 1] - options.limit);
			}
		}

		// The padding option keeps the handles a certain distance from the
		// edges of the slider. Padding must be > 0.
		if ( options.padding ) {

			if ( handleNumber === 0 ) {
				to = Math.max(to, options.padding);
			}

			if ( handleNumber === scope_Handles.length - 1 ) {
				to = Math.min(to, 100 - options.padding);
			}
		}

		to = scope_Spectrum.getStep(to);

		// Limit percentage to the 0 - 100 range
		to = limit(to);

		// Return false if handle can't move
		if ( to === reference[handleNumber] && !getValue ) {
			return false;
		}

		return to;
	}

	function toPct ( pct ) {
		return pct + '%';
	}

	// Updates scope_Locations and scope_Values, updates visual state
	function updateHandlePosition ( handleNumber, to ) {

		// Update locations.
		scope_Locations[handleNumber] = to;

		// Convert the value to the slider stepping/range.
		scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);

		// Called synchronously or on the next animationFrame
		var stateUpdate = function() {
			scope_Handles[handleNumber].style[options.style] = toPct(to);
			updateConnect(handleNumber);
			updateConnect(handleNumber + 1);
		};

		// Set the handle to the new position.
		// Use requestAnimationFrame for efficient painting.
		// No significant effect in Chrome, Edge sees dramatic performace improvements.
		// Option to disable is useful for unit tests, and single-step debugging.
		if ( window.requestAnimationFrame && options.useRequestAnimationFrame ) {
			window.requestAnimationFrame(stateUpdate);
		} else {
			stateUpdate();
		}
	}

	function setZindex ( ) {

		scope_HandleNumbers.forEach(function(handleNumber){
			// Handles before the slider middle are stacked later = higher,
			// Handles after the middle later is lower
			// [[7] [8] .......... | .......... [5] [4]
			var dir = (scope_Locations[handleNumber] > 50 ? -1 : 1);
			var zIndex = 3 + (scope_Handles.length + (dir * handleNumber));
			scope_Handles[handleNumber].childNodes[0].style.zIndex = zIndex;
		});
	}

	// Test suggested values and apply margin, step.
	function setHandle ( handleNumber, to, lookBackward, lookForward ) {

		to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);

		if ( to === false ) {
			return false;
		}

		updateHandlePosition(handleNumber, to);

		return true;
	}

	// Updates style attribute for connect nodes
	function updateConnect ( index ) {

		// Skip connects set to false
		if ( !scope_Connects[index] ) {
			return;
		}

		var l = 0;
		var h = 100;

		if ( index !== 0 ) {
			l = scope_Locations[index - 1];
		}

		if ( index !== scope_Connects.length - 1 ) {
			h = scope_Locations[index];
		}

		scope_Connects[index].style[options.style] = toPct(l);
		scope_Connects[index].style[options.styleOposite] = toPct(100 - h);
	}

	// ...
	function setValue ( to, handleNumber ) {

		// Setting with null indicates an 'ignore'.
		// Inputting 'false' is invalid.
		if ( to === null || to === false ) {
			return;
		}

		// If a formatted number was passed, attemt to decode it.
		if ( typeof to === 'number' ) {
			to = String(to);
		}

		to = options.format.from(to);

		// Request an update for all links if the value was invalid.
		// Do so too if setting the handle fails.
		if ( to !== false && !isNaN(to) ) {
			setHandle(handleNumber, scope_Spectrum.toStepping(to), false, false);
		}
	}

	// Set the slider value.
	function valueSet ( input, fireSetEvent ) {

		var values = asArray(input);
		var isInit = scope_Locations[0] === undefined;

		// Event fires by default
		fireSetEvent = (fireSetEvent === undefined ? true : !!fireSetEvent);

		values.forEach(setValue);

		// Animation is optional.
		// Make sure the initial values were set before using animated placement.
		if ( options.animate && !isInit ) {
			addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
		}

		// Now that all base values are set, apply constraints
		scope_HandleNumbers.forEach(function(handleNumber){
			setHandle(handleNumber, scope_Locations[handleNumber], true, false);
		});

		setZindex();

		scope_HandleNumbers.forEach(function(handleNumber){

			fireEvent('update', handleNumber);

			// Fire the event only for handles that received a new value, as per #579
			if ( values[handleNumber] !== null && fireSetEvent ) {
				fireEvent('set', handleNumber);
			}
		});
	}

	// Reset slider to initial values
	function valueReset ( fireSetEvent ) {
		valueSet(options.start, fireSetEvent);
	}

	// Get the slider value.
	function valueGet ( ) {

		var values = scope_Values.map(options.format.to);

		// If only one handle is used, return a single value.
		if ( values.length === 1 ){
			return values[0];
		}

		return values;
	}

	// Removes classes from the root and empties it.
	function destroy ( ) {

		for ( var key in options.cssClasses ) {
			if ( !options.cssClasses.hasOwnProperty(key) ) { continue; }
			removeClass(scope_Target, options.cssClasses[key]);
		}

		while (scope_Target.firstChild) {
			scope_Target.removeChild(scope_Target.firstChild);
		}

		delete scope_Target.noUiSlider;
	}

	// Get the current step size for the slider.
	function getCurrentStep ( ) {

		// Check all locations, map them to their stepping point.
		// Get the step point, then find it in the input list.
		return scope_Locations.map(function( location, index ){

			var nearbySteps = scope_Spectrum.getNearbySteps( location );
			var value = scope_Values[index];
			var increment = nearbySteps.thisStep.step;
			var decrement = null;

			// If the next value in this step moves into the next step,
			// the increment is the start of the next step - the current value
			if ( increment !== false ) {
				if ( value + increment > nearbySteps.stepAfter.startValue ) {
					increment = nearbySteps.stepAfter.startValue - value;
				}
			}


			// If the value is beyond the starting point
			if ( value > nearbySteps.thisStep.startValue ) {
				decrement = nearbySteps.thisStep.step;
			}

			else if ( nearbySteps.stepBefore.step === false ) {
				decrement = false;
			}

			// If a handle is at the start of a step, it always steps back into the previous step first
			else {
				decrement = value - nearbySteps.stepBefore.highestStep;
			}


			// Now, if at the slider edges, there is not in/decrement
			if ( location === 100 ) {
				increment = null;
			}

			else if ( location === 0 ) {
				decrement = null;
			}

			// As per #391, the comparison for the decrement step can have some rounding issues.
			var stepDecimals = scope_Spectrum.countStepDecimals();

			// Round per #391
			if ( increment !== null && increment !== false ) {
				increment = Number(increment.toFixed(stepDecimals));
			}

			if ( decrement !== null && decrement !== false ) {
				decrement = Number(decrement.toFixed(stepDecimals));
			}

			return [decrement, increment];
		});
	}

	// Attach an event to this slider, possibly including a namespace
	function bindEvent ( namespacedEvent, callback ) {
		scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
		scope_Events[namespacedEvent].push(callback);

		// If the event bound is 'update,' fire it immediately for all handles.
		if ( namespacedEvent.split('.')[0] === 'update' ) {
			scope_Handles.forEach(function(a, index){
				fireEvent('update', index);
			});
		}
	}

	// Undo attachment of event
	function removeEvent ( namespacedEvent ) {

		var event = namespacedEvent && namespacedEvent.split('.')[0];
		var namespace = event && namespacedEvent.substring(event.length);

		Object.keys(scope_Events).forEach(function( bind ){

			var tEvent = bind.split('.')[0],
				tNamespace = bind.substring(tEvent.length);

			if ( (!event || event === tEvent) && (!namespace || namespace === tNamespace) ) {
				delete scope_Events[bind];
			}
		});
	}

	// Updateable: margin, limit, padding, step, range, animate, snap
	function updateOptions ( optionsToUpdate, fireSetEvent ) {

		// Spectrum is created using the range, snap, direction and step options.
		// 'snap' and 'step' can be updated.
		// If 'snap' and 'step' are not passed, they should remain unchanged.
		var v = valueGet();

		var updateAble = ['margin', 'limit', 'padding', 'range', 'animate', 'snap', 'step', 'format'];

		// Only change options that we're actually passed to update.
		updateAble.forEach(function(name){
			if ( optionsToUpdate[name] !== undefined ) {
				originalOptions[name] = optionsToUpdate[name];
			}
		});

		var newOptions = testOptions(originalOptions);

		// Load new options into the slider state
		updateAble.forEach(function(name){
			if ( optionsToUpdate[name] !== undefined ) {
				options[name] = newOptions[name];
			}
		});

		scope_Spectrum = newOptions.spectrum;

		// Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
		options.margin = newOptions.margin;
		options.limit = newOptions.limit;
		options.padding = newOptions.padding;

		// Update pips, removes existing.
		if ( options.pips ) {
			pips(options.pips);
		}

		// Invalidate the current positioning so valueSet forces an update.
		scope_Locations = [];
		valueSet(optionsToUpdate.start || v, fireSetEvent);
	}

	// Throw an error if the slider was already initialized.
	if ( scope_Target.noUiSlider ) {
		throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.");
	}

	// Create the base element, initialise HTML and set classes.
	// Add handles and connect elements.
	addSlider(scope_Target);
	addElements(options.connect, scope_Base);

	scope_Self = {
		destroy: destroy,
		steps: getCurrentStep,
		on: bindEvent,
		off: removeEvent,
		get: valueGet,
		set: valueSet,
		reset: valueReset,
		// Exposed for unit testing, don't use this in your application.
		__moveHandles: function(a, b, c) { moveHandles(a, b, scope_Locations, c); },
		options: originalOptions, // Issue #600, #678
		updateOptions: updateOptions,
		target: scope_Target, // Issue #597
		removePips: removePips,
		pips: pips // Issue #594
	};

	// Attach user events.
	bindSliderEvents(options.events);

	// Use the public value method to set the start values.
	valueSet(options.start);

	if ( options.pips ) {
		pips(options.pips);
	}

	if ( options.tooltips ) {
		tooltips();
	}

	aria();

	return scope_Self;

}


	// Run the standard initializer
	function initialize ( target, originalOptions ) {

		if ( !target || !target.nodeName ) {
			throw new Error("noUiSlider (" + VERSION + "): create requires a single element, got: " + target);
		}

		// Test the options and create the slider environment;
		var options = testOptions( originalOptions, target );
		var api = closure( target, options, originalOptions );

		target.noUiSlider = api;

		return api;
	}

	// Use an object instead of a function for future expansibility;
	return {
		version: VERSION,
		create: initialize
	};

}));

/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/of.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_of PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["Observable"].of = __WEBPACK_IMPORTED_MODULE_1__observable_of__["a" /* of */];
//# sourceMappingURL=of.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/switchMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/operator/switchMap.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_switchMap PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["Observable"].prototype.switchMap = __WEBPACK_IMPORTED_MODULE_1__operator_switchMap__["a" /* switchMap */];
//# sourceMappingURL=switchMap.js.map 


/***/ }),

/***/ "../../../../sweetalert2/dist/sweetalert2.js":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * sweetalert2 v5.3.8
 * Released under the MIT License.
 */
(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Sweetalert2 = factory());
}(this, function () { 'use strict';

  var swalPrefix = 'swal2-'

  var prefix = function (items) {
    var result = {}
    for (var i in items) {
      result[items[i]] = swalPrefix + items[i]
    }
    return result
  }

  var swalClasses = prefix([
    'container',
    'in',
    'iosfix',
    'modal',
    'overlay',
    'fade',
    'show',
    'hide',
    'noanimation',
    'close',
    'content',
    'spacer',
    'confirm',
    'cancel',
    'icon',
    'image',
    'input',
    'file',
    'range',
    'select',
    'radio',
    'checkbox',
    'textarea',
    'inputerror',
    'validationerror',
    'progresssteps',
    'activeprogressstep',
    'progresscircle',
    'progressline',
    'loading',
    'styled'
  ])

  var iconTypes = prefix([
    'success',
    'warning',
    'info',
    'question',
    'error'
  ])

  var defaultParams = {
    title: '',
    text: '',
    html: '',
    type: null,
    customClass: '',
    animation: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    showConfirmButton: true,
    showCancelButton: false,
    preConfirm: null,
    confirmButtonText: 'OK',
    confirmButtonColor: '#3085d6',
    confirmButtonClass: null,
    cancelButtonText: 'Cancel',
    cancelButtonColor: '#aaa',
    cancelButtonClass: null,
    buttonsStyling: true,
    reverseButtons: false,
    focusCancel: false,
    showCloseButton: false,
    showLoaderOnConfirm: false,
    imageUrl: null,
    imageWidth: null,
    imageHeight: null,
    imageClass: null,
    timer: null,
    width: 500,
    padding: 20,
    background: '#fff',
    input: null,
    inputPlaceholder: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputClass: null,
    inputAttributes: {},
    inputValidator: null,
    progressSteps: [],
    currentProgressStep: null,
    progressStepsDistance: '40px',
    onOpen: null,
    onClose: null
  }

  var sweetHTML = '<div class="' + swalClasses.modal + '" style="display: none" tabIndex="-1">' +
      '<ul class="' + swalClasses.progresssteps + '"></ul>' +
      '<div class="' + swalClasses.icon + ' ' + iconTypes.error + '">' +
        '<span class="x-mark"><span class="line left"></span><span class="line right"></span></span>' +
      '</div>' +
      '<div class="' + swalClasses.icon + ' ' + iconTypes.question + '">?</div>' +
      '<div class="' + swalClasses.icon + ' ' + iconTypes.warning + '">!</div>' +
      '<div class="' + swalClasses.icon + ' ' + iconTypes.info + '">i</div>' +
      '<div class="' + swalClasses.icon + ' ' + iconTypes.success + '">' +
        '<span class="line tip"></span> <span class="line long"></span>' +
        '<div class="placeholder"></div> <div class="fix"></div>' +
      '</div>' +
      '<img class="' + swalClasses.image + '">' +
      '<h2></h2>' +
      '<div class="' + swalClasses.content + '"></div>' +
      '<input class="' + swalClasses.input + '">' +
      '<input type="file" class="' + swalClasses.file + '">' +
      '<div class="' + swalClasses.range + '">' +
        '<output></output>' +
        '<input type="range">' +
      '</div>' +
      '<select class="' + swalClasses.select + '"></select>' +
      '<div class="' + swalClasses.radio + '"></div>' +
      '<label for="' + swalClasses.checkbox + '" class="' + swalClasses.checkbox + '">' +
        '<input type="checkbox">' +
      '</label>' +
      '<textarea class="' + swalClasses.textarea + '"></textarea>' +
      '<div class="' + swalClasses.validationerror + '"></div>' +
      '<hr class="' + swalClasses.spacer + '">' +
      '<button type="button" class="' + swalClasses.confirm + '">OK</button>' +
      '<button type="button" class="' + swalClasses.cancel + '">Cancel</button>' +
      '<span class="' + swalClasses.close + '">&times;</span>' +
    '</div>'

  var sweetContainer

  var existingSweetContainers = document.getElementsByClassName(swalClasses.container)

  if (existingSweetContainers.length) {
    sweetContainer = existingSweetContainers[0]
  } else {
    sweetContainer = document.createElement('div')
    sweetContainer.className = swalClasses.container
    sweetContainer.innerHTML = sweetHTML
  }

  var extend = function (a, b) {
    for (var key in b) {
      if (b.hasOwnProperty(key)) {
        a[key] = b[key]
      }
    }

    return a
  }

  /*
   * Set hover, active and focus-states for buttons (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
   */
  var colorLuminance = function (hex, lum) {
    // Validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '')
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
    }
    lum = lum || 0

    // Convert to decimal and change luminosity
    var rgb = '#'
    for (var i = 0; i < 3; i++) {
      var c = parseInt(hex.substr(i * 2, 2), 16)
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16)
      rgb += ('00' + c).substr(c.length)
    }

    return rgb
  }

  // Remember state in cases where opening and handling a modal will fiddle with it.
  var states = {
    previousWindowKeyDown: null,
    previousActiveElement: null,
    previousBodyPadding: null
  }

  /*
   * Add modal + overlay to DOM
   */
  var init = function () {
    if (typeof document === 'undefined') {
      console.error('SweetAlert2 requires document to initialize')
      return
    } else if (document.getElementsByClassName(swalClasses.container).length) {
      return
    }

    document.body.appendChild(sweetContainer)

    var modal = getModal()
    var input = getChildByClass(modal, swalClasses.input)
    var file = getChildByClass(modal, swalClasses.file)
    var range = modal.querySelector('.' + swalClasses.range + ' input')
    var select = getChildByClass(modal, swalClasses.select)
    var checkbox = modal.querySelector('.' + swalClasses.checkbox + ' input')
    var textarea = getChildByClass(modal, swalClasses.textarea)

    input.oninput = function () {
      sweetAlert.resetValidationError()
    }

    input.onkeydown = function (event) {
      setTimeout(function () {
        if (event.keyCode === 13) {
          event.stopPropagation()
          sweetAlert.clickConfirm()
        }
      }, 0)
    }

    file.onchange = function () {
      sweetAlert.resetValidationError()
    }

    range.oninput = function () {
      sweetAlert.resetValidationError()
      range.previousSibling.value = range.value
    }

    range.onchange = function () {
      sweetAlert.resetValidationError()
      range.previousSibling.value = range.value
    }

    select.onchange = function () {
      sweetAlert.resetValidationError()
    }

    checkbox.onchange = function () {
      sweetAlert.resetValidationError()
    }

    textarea.oninput = function () {
      sweetAlert.resetValidationError()
    }

    return modal
  }

  /*
   * Manipulate DOM
   */
  var elementByClass = function (className) {
    return sweetContainer.querySelector('.' + className)
  }

  var getModal = function () {
    return document.body.querySelector('.' + swalClasses.modal) || init()
  }

  var getIcons = function () {
    var modal = getModal()
    return modal.querySelectorAll('.' + swalClasses.icon)
  }

  var getSpacer = function () {
    return elementByClass(swalClasses.spacer)
  }

  var getProgressSteps = function () {
    return elementByClass(swalClasses.progresssteps)
  }

  var getValidationError = function () {
    return elementByClass(swalClasses.validationerror)
  }

  var getConfirmButton = function () {
    return elementByClass(swalClasses.confirm)
  }

  var getCancelButton = function () {
    return elementByClass(swalClasses.cancel)
  }

  var getCloseButton = function () {
    return elementByClass(swalClasses.close)
  }

  var getFocusableElements = function (focusCancel) {
    var buttons = [getConfirmButton(), getCancelButton()]
    if (focusCancel) {
      buttons.reverse()
    }
    return buttons.concat(Array.prototype.slice.call(
      getModal().querySelectorAll('button:not([class^=' + swalPrefix + ']), input:not([type=hidden]), textarea, select')
    ))
  }

  var hasClass = function (elem, className) {
    return elem.classList.contains(className)
  }

  var focusInput = function (input) {
    input.focus()

    // place cursor at end of text in text input
    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915/1331425
      var val = input.value
      input.value = ''
      input.value = val
    }
  }

  var addClass = function (elem, className) {
    if (!elem || !className) {
      return
    }
    var classes = className.split(/\s+/)
    classes.forEach(function (className) {
      elem.classList.add(className)
    })
  }

  var removeClass = function (elem, className) {
    if (!elem || !className) {
      return
    }
    var classes = className.split(/\s+/)
    classes.forEach(function (className) {
      elem.classList.remove(className)
    })
  }

  var getChildByClass = function (elem, className) {
    for (var i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i]
      }
    }
  }

  var show = function (elem, display) {
    if (!display) {
      display = 'block'
    }
    elem.style.opacity = ''
    elem.style.display = display
  }

  var hide = function (elem) {
    elem.style.opacity = ''
    elem.style.display = 'none'
  }

  var empty = function (elem) {
    while (elem.firstChild) {
      elem.removeChild(elem.firstChild)
    }
  }

  // borrowed from jqeury $(elem).is(':visible') implementation
  var isVisible = function (elem) {
    return elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length
  }

  var removeStyleProperty = function (elem, property) {
    if (elem.style.removeProperty) {
      elem.style.removeProperty(property)
    } else {
      elem.style.removeAttribute(property)
    }
  }

  var fireClick = function (node) {
    // Taken from http://www.nonobtrusive.com/2011/11/29/programatically-fire-crossbrowser-click-event-with-javascript/
    // Then fixed for today's Chrome browser.
    if (typeof MouseEvent === 'function') {
      // Up-to-date approach
      var mevt = new MouseEvent('click', {
        view: window,
        bubbles: false,
        cancelable: true
      })
      node.dispatchEvent(mevt)
    } else if (document.createEvent) {
      // Fallback
      var evt = document.createEvent('MouseEvents')
      evt.initEvent('click', false, false)
      node.dispatchEvent(evt)
    } else if (document.createEventObject) {
      node.fireEvent('onclick')
    } else if (typeof node.onclick === 'function') {
      node.onclick()
    }
  }

  var stopEventPropagation = function (e) {
    // In particular, make sure the space bar doesn't scroll the main window.
    if (typeof e.stopPropagation === 'function') {
      e.stopPropagation()
      e.preventDefault()
    } else if (window.event && window.event.hasOwnProperty('cancelBubble')) {
      window.event.cancelBubble = true
    }
  }

  var animationEndEvent = (function () {
    var testEl = document.createElement('div')
    var transEndEventNames = {
      'WebkitAnimation': 'webkitAnimationEnd',
      'OAnimation': 'oAnimationEnd oanimationend',
      'msAnimation': 'MSAnimationEnd',
      'animation': 'animationend'
    }
    for (var i in transEndEventNames) {
      if (transEndEventNames.hasOwnProperty(i) &&
        testEl.style[i] !== undefined) {
        return transEndEventNames[i]
      }
    }

    return false
  })()

  // Reset the page to its previous state
  var resetPrevState = function () {
    var modal = getModal()
    window.onkeydown = states.previousWindowKeyDown
    if (states.previousActiveElement && states.previousActiveElement.focus) {
      states.previousActiveElement.focus()
    }
    clearTimeout(modal.timeout)
  }

  // Measure width of scrollbar
  // https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
  var measureScrollbar = function () {
    var scrollDiv = document.createElement('div')
    scrollDiv.style.width = '50px'
    scrollDiv.style.height = '50px'
    scrollDiv.style.overflow = 'scroll'
    document.body.appendChild(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    document.body.removeChild(scrollDiv)
    return scrollbarWidth
  }

  // JavaScript Debounce Function
  // https://davidwalsh.name/javascript-debounce-function
  var debounce = function (func, wait, immediate) {
    var timeout
    return function () {
      var context = this
      var args = arguments
      var later = function () {
        timeout = null
        if (!immediate) func.apply(context, args)
      }
      var callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

  var modalParams = extend({}, defaultParams)
  var queue = []
  var swal2Observer

  /*
   * Set type, text and actions on modal
   */
  var setParameters = function (params) {
    var modal = getModal()

    for (var param in params) {
      if (!defaultParams.hasOwnProperty(param) && param !== 'extraParams') {
        console.warn('SweetAlert2: Unknown parameter "' + param + '"')
      }
    }

    // set modal width and margin-left
    modal.style.width = (typeof params.width === 'number') ? params.width + 'px' : params.width

    modal.style.padding = params.padding + 'px'
    modal.style.background = params.background

    var $title = modal.querySelector('h2')
    var $content = modal.querySelector('.' + swalClasses.content)
    var $confirmBtn = getConfirmButton()
    var $cancelBtn = getCancelButton()
    var $closeButton = modal.querySelector('.' + swalClasses.close)

    // Title
    $title.innerHTML = params.title.split('\n').join('<br>')

    // Content
    var i
    if (params.text || params.html) {
      if (typeof params.html === 'object') {
        $content.innerHTML = ''
        if (0 in params.html) {
          for (i = 0; i in params.html; i++) {
            $content.appendChild(params.html[i].cloneNode(true))
          }
        } else {
          $content.appendChild(params.html.cloneNode(true))
        }
      } else {
        $content.innerHTML = params.html || (params.text.split('\n').join('<br>'))
      }
      show($content)
    } else {
      hide($content)
    }

    // Close button
    if (params.showCloseButton) {
      show($closeButton)
    } else {
      hide($closeButton)
    }

    // Custom Class
    modal.className = swalClasses.modal
    if (params.customClass) {
      addClass(modal, params.customClass)
    }

    // Progress steps
    var progressStepsContainer = getProgressSteps()
    var currentProgressStep = parseInt(params.currentProgressStep === null ? sweetAlert.getQueueStep() : params.currentProgressStep, 10)
    if (params.progressSteps.length) {
      show(progressStepsContainer)
      empty(progressStepsContainer)
      if (currentProgressStep >= params.progressSteps.length) {
        console.warn(
          'SweetAlert2: Invalid currentProgressStep parameter, it should be less than progressSteps.length ' +
          '(currentProgressStep like JS arrays starts from 0)'
        )
      }
      params.progressSteps.forEach(function (step, index) {
        var circle = document.createElement('li')
        addClass(circle, swalClasses.progresscircle)
        circle.innerHTML = step
        if (index === currentProgressStep) {
          addClass(circle, swalClasses.activeprogressstep)
        }
        progressStepsContainer.appendChild(circle)
        if (index !== params.progressSteps.length - 1) {
          var line = document.createElement('li')
          addClass(line, swalClasses.progressline)
          line.style.width = params.progressStepsDistance
          progressStepsContainer.appendChild(line)
        }
      })
    } else {
      hide(progressStepsContainer)
    }

    // Icon
    var icons = getIcons()
    for (i = 0; i < icons.length; i++) {
      hide(icons[i])
    }
    if (params.type) {
      var validType = false
      for (var iconType in iconTypes) {
        if (params.type === iconType) {
          validType = true
          break
        }
      }
      if (!validType) {
        console.error('SweetAlert2: Unknown alert type: ' + params.type)
        return false
      }
      var $icon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes[params.type])
      show($icon)

      // Animate icon
      switch (params.type) {
        case 'success':
          addClass($icon, 'animate')
          addClass($icon.querySelector('.tip'), 'animate-success-tip')
          addClass($icon.querySelector('.long'), 'animate-success-long')
          break
        case 'error':
          addClass($icon, 'animate-error-icon')
          addClass($icon.querySelector('.x-mark'), 'animate-x-mark')
          break
        case 'warning':
          addClass($icon, 'pulse-warning')
          break
        default:
          break
      }
    }

    // Custom image
    var $customImage = modal.querySelector('.' + swalClasses.image)
    if (params.imageUrl) {
      $customImage.setAttribute('src', params.imageUrl)
      show($customImage)

      if (params.imageWidth) {
        $customImage.setAttribute('width', params.imageWidth)
      } else {
        $customImage.removeAttribute('width')
      }

      if (params.imageHeight) {
        $customImage.setAttribute('height', params.imageHeight)
      } else {
        $customImage.removeAttribute('height')
      }

      $customImage.className = swalClasses.image
      if (params.imageClass) {
        addClass($customImage, params.imageClass)
      }
    } else {
      hide($customImage)
    }

    // Cancel button
    if (params.showCancelButton) {
      $cancelBtn.style.display = 'inline-block'
    } else {
      hide($cancelBtn)
    }

    // Confirm button
    if (params.showConfirmButton) {
      removeStyleProperty($confirmBtn, 'display')
    } else {
      hide($confirmBtn)
    }

    // Buttons spacer
    var spacer = getSpacer()
    if (!params.showConfirmButton && !params.showCancelButton) {
      hide(spacer)
    } else {
      show(spacer)
    }

    // Edit text on cancel and confirm buttons
    $confirmBtn.innerHTML = params.confirmButtonText
    $cancelBtn.innerHTML = params.cancelButtonText

    // Set buttons to selected background colors
    if (params.buttonsStyling) {
      $confirmBtn.style.backgroundColor = params.confirmButtonColor
      $cancelBtn.style.backgroundColor = params.cancelButtonColor
    }

    // Add buttons custom classes
    $confirmBtn.className = swalClasses.confirm
    addClass($confirmBtn, params.confirmButtonClass)
    $cancelBtn.className = swalClasses.cancel
    addClass($cancelBtn, params.cancelButtonClass)

    // Buttons styling
    if (params.buttonsStyling) {
      addClass($confirmBtn, swalClasses.styled)
      addClass($cancelBtn, swalClasses.styled)
    } else {
      removeClass($confirmBtn, swalClasses.styled)
      removeClass($cancelBtn, swalClasses.styled)

      $confirmBtn.style.backgroundColor = $confirmBtn.style.borderLeftColor = $confirmBtn.style.borderRightColor = ''
      $cancelBtn.style.backgroundColor = $cancelBtn.style.borderLeftColor = $cancelBtn.style.borderRightColor = ''
    }

    // CSS animation
    if (params.animation === true) {
      removeClass(modal, swalClasses.noanimation)
    } else {
      addClass(modal, swalClasses.noanimation)
    }
  }

  /*
   * Animations
   */
  var openModal = function (animation, onComplete) {
    var modal = getModal()
    if (animation) {
      addClass(modal, swalClasses.show)
      addClass(sweetContainer, swalClasses.fade)
      removeClass(modal, swalClasses.hide)
    } else {
      removeClass(modal, swalClasses.fade)
    }
    show(modal)

    // scrolling is 'hidden' until animation is done, after that 'auto'
    sweetContainer.style.overflowY = 'hidden'
    if (animationEndEvent && !hasClass(modal, swalClasses.noanimation)) {
      modal.addEventListener(animationEndEvent, function swalCloseEventFinished () {
        modal.removeEventListener(animationEndEvent, swalCloseEventFinished)
        sweetContainer.style.overflowY = 'auto'
      })
    } else {
      sweetContainer.style.overflowY = 'auto'
    }

    addClass(sweetContainer, swalClasses.in)
    addClass(document.body, swalClasses.in)
    fixScrollbar()
    iOSfix()
    states.previousActiveElement = document.activeElement
    if (onComplete !== null && typeof onComplete === 'function') {
      onComplete.call(this, modal)
    }
  }

  function fixScrollbar () {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return
    }
    // if the body has overflow
    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = document.body.style.paddingRight
      document.body.style.paddingRight = measureScrollbar() + 'px'
    }
  }

  function undoScrollbar () {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = states.previousBodyPadding
      states.previousBodyPadding = null
    }
  }

  // Fix iOS scrolling http://stackoverflow.com/q/39626302/1331425
  function iOSfix () {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      var offset = document.body.scrollTop
      document.body.style.top = (offset * -1) + 'px'
      addClass(document.body, swalClasses.iosfix)
    }
  }

  function undoIOSfix () {
    if (hasClass(document.body, swalClasses.iosfix)) {
      var offset = parseInt(document.body.style.top, 10)
      removeClass(document.body, swalClasses.iosfix)
      document.body.scrollTop = (offset * -1)
    }
  }

  function modalDependant () {
    if (arguments[0] === undefined) {
      console.error('SweetAlert2 expects at least 1 attribute!')
      return false
    }

    var params = extend({}, modalParams)

    switch (typeof arguments[0]) {

      case 'string':
        params.title = arguments[0]
        params.text = arguments[1] || ''
        params.type = arguments[2] || ''

        break

      case 'object':
        extend(params, arguments[0])
        params.extraParams = arguments[0].extraParams

        if (params.input === 'email' && params.inputValidator === null) {
          params.inputValidator = function (email) {
            return new Promise(function (resolve, reject) {
              var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
              if (emailRegex.test(email)) {
                resolve()
              } else {
                reject('Invalid email address')
              }
            })
          }
        }

        break

      default:
        console.error('SweetAlert2: Unexpected type of argument! Expected "string" or "object", got ' + typeof arguments[0])
        return false
    }

    setParameters(params)

    // Modal interactions
    var modal = getModal()

    return new Promise(function (resolve, reject) {
      // Close on timer
      if (params.timer) {
        modal.timeout = setTimeout(function () {
          sweetAlert.closeModal(params.onClose)
          reject('timer')
        }, params.timer)
      }

      // Get input element by specified type or, if type isn't specified, by params.input
      var getInput = function (inputType) {
        inputType = inputType || params.input
        switch (inputType) {
          case 'select':
          case 'textarea':
          case 'file':
            return getChildByClass(modal, swalClasses[inputType])
          case 'checkbox':
            return modal.querySelector('.' + swalClasses.checkbox + ' input')
          case 'radio':
            return modal.querySelector('.' + swalClasses.radio + ' input:checked') ||
              modal.querySelector('.' + swalClasses.radio + ' input:first-child')
          case 'range':
            return modal.querySelector('.' + swalClasses.range + ' input')
          default:
            return getChildByClass(modal, swalClasses.input)
        }
      }

      // Get the value of the modal input
      var getInputValue = function () {
        var input = getInput()
        if (!input) {
          return null
        }
        switch (params.input) {
          case 'checkbox':
            return input.checked ? 1 : 0
          case 'radio':
            return input.checked ? input.value : null
          case 'file':
            return input.files.length ? input.files[0] : null
          default:
            return params.inputAutoTrim ? input.value.trim() : input.value
        }
      }

      // input autofocus
      if (params.input) {
        setTimeout(function () {
          var input = getInput()
          if (input) {
            focusInput(input)
          }
        }, 0)
      }

      var confirm = function (value) {
        if (params.showLoaderOnConfirm) {
          sweetAlert.showLoading()
        }

        if (params.preConfirm) {
          params.preConfirm(value, params.extraParams).then(
            function (preConfirmValue) {
              sweetAlert.closeModal(params.onClose)
              resolve(preConfirmValue || value)
            },
            function (error) {
              sweetAlert.hideLoading()
              if (error) {
                sweetAlert.showValidationError(error)
              }
            }
          )
        } else {
          sweetAlert.closeModal(params.onClose)
          resolve(value)
        }
      }

      // Mouse interactions
      var onButtonEvent = function (event) {
        var e = event || window.event
        var target = e.target || e.srcElement
        var confirmBtn = getConfirmButton()
        var cancelBtn = getCancelButton()
        var targetedConfirm = confirmBtn === target || confirmBtn.contains(target)
        var targetedCancel = cancelBtn === target || cancelBtn.contains(target)

        switch (e.type) {
          case 'mouseover':
          case 'mouseup':
            if (params.buttonsStyling) {
              if (targetedConfirm) {
                confirmBtn.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.1)
              } else if (targetedCancel) {
                cancelBtn.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.1)
              }
            }
            break
          case 'mouseout':
            if (params.buttonsStyling) {
              if (targetedConfirm) {
                confirmBtn.style.backgroundColor = params.confirmButtonColor
              } else if (targetedCancel) {
                cancelBtn.style.backgroundColor = params.cancelButtonColor
              }
            }
            break
          case 'mousedown':
            if (params.buttonsStyling) {
              if (targetedConfirm) {
                confirmBtn.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.2)
              } else if (targetedCancel) {
                cancelBtn.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.2)
              }
            }
            break
          case 'click':
            // Clicked 'confirm'
            if (targetedConfirm && sweetAlert.isVisible()) {
              if (params.input) {
                var inputValue = getInputValue()

                if (params.inputValidator) {
                  sweetAlert.disableInput()
                  params.inputValidator(inputValue, params.extraParams).then(
                    function () {
                      sweetAlert.enableInput()
                      confirm(inputValue)
                    },
                    function (error) {
                      sweetAlert.enableInput()
                      if (error) {
                        sweetAlert.showValidationError(error)
                      }
                    }
                  )
                } else {
                  confirm(inputValue)
                }
              } else {
                confirm(true)
              }

            // Clicked 'cancel'
            } else if (targetedCancel && sweetAlert.isVisible()) {
              sweetAlert.closeModal(params.onClose)
              reject('cancel')
            }

            break
          default:
        }
      }

      var $buttons = modal.querySelectorAll('button')
      var i
      for (i = 0; i < $buttons.length; i++) {
        $buttons[i].onclick = onButtonEvent
        $buttons[i].onmouseover = onButtonEvent
        $buttons[i].onmouseout = onButtonEvent
        $buttons[i].onmousedown = onButtonEvent
      }

      // Closing modal by close button
      getCloseButton().onclick = function () {
        sweetAlert.closeModal(params.onClose)
        reject('close')
      }

      // Closing modal by overlay click
      sweetContainer.onclick = function (e) {
        if (e.target !== sweetContainer) {
          return
        }
        if (params.allowOutsideClick) {
          sweetAlert.closeModal(params.onClose)
          reject('overlay')
        }
      }

      var $confirmButton = getConfirmButton()
      var $cancelButton = getCancelButton()

      // Reverse buttons if neede d
      if (params.reverseButtons) {
        $confirmButton.parentNode.insertBefore($cancelButton, $confirmButton)
      } else {
        $confirmButton.parentNode.insertBefore($confirmButton, $cancelButton)
      }

      // Focus handling
      function setFocus (index, increment) {
        var focusableElements = getFocusableElements(params.focusCancel)
        // search for visible elements and select the next possible match
        for (var i = 0; i < focusableElements.length; i++) {
          index = index + increment

          // rollover to first item
          if (index === focusableElements.length) {
            index = 0

          // go to last item
          } else if (index === -1) {
            index = focusableElements.length - 1
          }

          // determine if element is visible
          var el = focusableElements[index]
          if (isVisible(el)) {
            return el.focus()
          }
        }
      }

      function handleKeyDown (event) {
        var e = event || window.event
        var keyCode = e.keyCode || e.which

        if ([9, 13, 32, 27].indexOf(keyCode) === -1) {
          // Don't do work on keys we don't care about.
          return
        }

        var $targetElement = e.target || e.srcElement

        var focusableElements = getFocusableElements(params.focusCancel)
        var btnIndex = -1 // Find the button - note, this is a nodelist, not an array.
        for (var i = 0; i < focusableElements.length; i++) {
          if ($targetElement === focusableElements[i]) {
            btnIndex = i
            break
          }
        }

        // TAB
        if (keyCode === 9) {
          if (!e.shiftKey) {
            // Cycle to the next button
            setFocus(btnIndex, 1)
          } else {
            // Cycle to the prev button
            setFocus(btnIndex, -1)
          }

          stopEventPropagation(e)
        } else {
          if (keyCode === 13 || keyCode === 32) {
            if (btnIndex === -1) {
              // ENTER/SPACE clicked outside of a button.
              if (params.focusCancel) {
                fireClick($cancelButton, e)
              } else {
                fireClick($confirmButton, e)
              }
            }
          } else if (keyCode === 27 && params.allowEscapeKey === true) {
            sweetAlert.closeModal(params.onClose)
            reject('esc')
          }
        }
      }

      states.previousWindowKeyDown = window.onkeydown
      window.onkeydown = handleKeyDown

      // Loading state
      if (params.buttonsStyling) {
        $confirmButton.style.borderLeftColor = params.confirmButtonColor
        $confirmButton.style.borderRightColor = params.confirmButtonColor
      }

      /**
       * Show spinner instead of Confirm button and disable Cancel button
       */
      sweetAlert.showLoading = sweetAlert.enableLoading = function () {
        show(getSpacer())
        show($confirmButton, 'inline-block')
        addClass($confirmButton, swalClasses.loading)
        addClass(modal, swalClasses.loading)
        $confirmButton.disabled = true
        $cancelButton.disabled = true
      }

      /**
       * Show spinner instead of Confirm button and disable Cancel button
       */
      sweetAlert.hideLoading = sweetAlert.disableLoading = function () {
        if (!params.showConfirmButton) {
          hide($confirmButton)
          if (!params.showCancelButton) {
            hide(getSpacer())
          }
        }
        removeClass($confirmButton, swalClasses.loading)
        removeClass(modal, swalClasses.loading)
        $confirmButton.disabled = false
        $cancelButton.disabled = false
      }

      sweetAlert.enableButtons = function () {
        $confirmButton.disabled = false
        $cancelButton.disabled = false
      }

      sweetAlert.disableButtons = function () {
        $confirmButton.disabled = true
        $cancelButton.disabled = true
      }

      sweetAlert.enableConfirmButton = function () {
        $confirmButton.disabled = false
      }

      sweetAlert.disableConfirmButton = function () {
        $confirmButton.disabled = true
      }

      sweetAlert.enableInput = function () {
        var input = getInput()
        if (!input) {
          return false
        }
        if (input.type === 'radio') {
          var radiosContainer = input.parentNode.parentNode
          var radios = radiosContainer.querySelectorAll('input')
          for (var i = 0; i < radios.length; i++) {
            radios[i].disabled = false
          }
        } else {
          input.disabled = false
        }
      }

      sweetAlert.disableInput = function () {
        var input = getInput()
        if (!input) {
          return false
        }
        if (input && input.type === 'radio') {
          var radiosContainer = input.parentNode.parentNode
          var radios = radiosContainer.querySelectorAll('input')
          for (var i = 0; i < radios.length; i++) {
            radios[i].disabled = true
          }
        } else {
          input.disabled = true
        }
      }

      // Set modal min-height to disable scrolling inside the modal
      sweetAlert.recalculateHeight = debounce(function () {
        var modal = getModal()
        var prevState = modal.style.display
        modal.style.minHeight = ''
        show(modal)
        modal.style.minHeight = (modal.scrollHeight + 1) + 'px'
        modal.style.display = prevState
      }, 50)

      // Show block with validation error
      sweetAlert.showValidationError = function (error) {
        var validationError = getValidationError()
        validationError.innerHTML = error
        show(validationError)

        var input = getInput()
        focusInput(input)
        addClass(input, swalClasses.inputerror)
      }

      // Hide block with validation error
      sweetAlert.resetValidationError = function () {
        var validationError = getValidationError()
        hide(validationError)
        sweetAlert.recalculateHeight()

        var input = getInput()
        if (input) {
          removeClass(input, swalClasses.inputerror)
        }
      }

      sweetAlert.getProgressSteps = function () {
        return params.progressSteps
      }

      sweetAlert.setProgressSteps = function (progressSteps) {
        params.progressSteps = progressSteps
        setParameters(params)
      }

      sweetAlert.showProgressSteps = function () {
        show(getProgressSteps())
      }

      sweetAlert.hideProgressSteps = function () {
        hide(getProgressSteps())
      }

      sweetAlert.enableButtons()
      sweetAlert.hideLoading()
      sweetAlert.resetValidationError()

      // inputs
      var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea']
      var input
      for (i = 0; i < inputTypes.length; i++) {
        var inputClass = swalClasses[inputTypes[i]]
        var inputContainer = getChildByClass(modal, inputClass)
        input = getInput(inputTypes[i])

        // set attributes
        if (input) {
          for (var j in input.attributes) {
            if (input.attributes.hasOwnProperty(j)) {
              var attrName = input.attributes[j].name
              if (attrName !== 'type' && attrName !== 'value') {
                input.removeAttribute(attrName)
              }
            }
          }
          for (var attr in params.inputAttributes) {
            input.setAttribute(attr, params.inputAttributes[attr])
          }
        }

        // set class
        inputContainer.className = inputClass
        if (params.inputClass) {
          addClass(inputContainer, params.inputClass)
        }

        hide(inputContainer)
      }

      var populateInputOptions
      switch (params.input) {
        case 'text':
        case 'email':
        case 'password':
        case 'number':
        case 'tel':
          input = getChildByClass(modal, swalClasses.input)
          input.value = params.inputValue
          input.placeholder = params.inputPlaceholder
          input.type = params.input
          show(input)
          break
        case 'file':
          input = getChildByClass(modal, swalClasses.file)
          input.placeholder = params.inputPlaceholder
          input.type = params.input
          show(input)
          break
        case 'range':
          var range = getChildByClass(modal, swalClasses.range)
          var rangeInput = range.querySelector('input')
          var rangeOutput = range.querySelector('output')
          rangeInput.value = params.inputValue
          rangeInput.type = params.input
          rangeOutput.value = params.inputValue
          show(range)
          break
        case 'select':
          var select = getChildByClass(modal, swalClasses.select)
          select.innerHTML = ''
          if (params.inputPlaceholder) {
            var placeholder = document.createElement('option')
            placeholder.innerHTML = params.inputPlaceholder
            placeholder.value = ''
            placeholder.disabled = true
            placeholder.selected = true
            select.appendChild(placeholder)
          }
          populateInputOptions = function (inputOptions) {
            for (var optionValue in inputOptions) {
              var option = document.createElement('option')
              option.value = optionValue
              option.innerHTML = inputOptions[optionValue]
              if (params.inputValue === optionValue) {
                option.selected = true
              }
              select.appendChild(option)
            }
            show(select)
            select.focus()
          }
          break
        case 'radio':
          var radio = getChildByClass(modal, swalClasses.radio)
          radio.innerHTML = ''
          populateInputOptions = function (inputOptions) {
            for (var radioValue in inputOptions) {
              var id = 1
              var radioInput = document.createElement('input')
              var radioLabel = document.createElement('label')
              var radioLabelSpan = document.createElement('span')
              radioInput.type = 'radio'
              radioInput.name = swalClasses.radio
              radioInput.value = radioValue
              radioInput.id = swalClasses.radio + '-' + (id++)
              if (params.inputValue === radioValue) {
                radioInput.checked = true
              }
              radioLabelSpan.innerHTML = inputOptions[radioValue]
              radioLabel.appendChild(radioInput)
              radioLabel.appendChild(radioLabelSpan)
              radioLabel.for = radioInput.id
              radio.appendChild(radioLabel)
            }
            show(radio)
            var radios = radio.querySelectorAll('input')
            if (radios.length) {
              radios[0].focus()
            }
          }
          break
        case 'checkbox':
          var checkbox = getChildByClass(modal, swalClasses.checkbox)
          var checkboxInput = getInput('checkbox')
          checkboxInput.type = 'checkbox'
          checkboxInput.value = 1
          checkboxInput.id = swalClasses.checkbox
          checkboxInput.checked = Boolean(params.inputValue)
          var label = checkbox.getElementsByTagName('span')
          if (label.length) {
            checkbox.removeChild(label[0])
          }
          label = document.createElement('span')
          label.innerHTML = params.inputPlaceholder
          checkbox.appendChild(label)
          show(checkbox)
          break
        case 'textarea':
          var textarea = getChildByClass(modal, swalClasses.textarea)
          textarea.value = params.inputValue
          textarea.placeholder = params.inputPlaceholder
          show(textarea)
          break
        case null:
          break
        default:
          console.error('SweetAlert2: Unexpected type of input! Expected "text" or "email" or "password", "select", "checkbox", "textarea" or "file", got "' + params.input + '"')
          break
      }

      if (params.input === 'select' || params.input === 'radio') {
        if (params.inputOptions instanceof Promise) {
          sweetAlert.showLoading()
          params.inputOptions.then(function (inputOptions) {
            sweetAlert.hideLoading()
            populateInputOptions(inputOptions)
          })
        } else if (typeof params.inputOptions === 'object') {
          populateInputOptions(params.inputOptions)
        } else {
          console.error('SweetAlert2: Unexpected type of inputOptions! Expected object or Promise, got ' + typeof params.inputOptions)
        }
      }

      openModal(params.animation, params.onOpen)

      // Focus the first element (input or button)
      setFocus(-1, 1)

      // fix scroll
      sweetContainer.scrollTop = 0

      // Observe changes inside the modal and adjust height
      if (typeof MutationObserver !== 'undefined' && !swal2Observer) {
        swal2Observer = new MutationObserver(sweetAlert.recalculateHeight)
        swal2Observer.observe(modal, {childList: true, characterData: true, subtree: true})
      }
    })
  }

  // SweetAlert function
  function sweetAlert () {
    // Copy arguments to the local args variable
    var args = arguments

    if (sweetAlert.isVisible()) {
      sweetAlert.close()
    }

    return modalDependant.apply(this, args)
  }

  /*
   * Global function to determine if swal2 modal is visible
   */
  sweetAlert.isVisible = function () {
    var modal = getModal()
    return isVisible(modal)
  }

  /*
   * Global function for chaining sweetAlert modals
   */
  sweetAlert.queue = function (steps) {
    queue = steps
    var modal = getModal()
    var resetQueue = function () {
      queue = []
      modal.removeAttribute('data-queue-step')
    }
    var queueResult = []
    return new Promise(function (resolve, reject) {
      (function step (i, callback) {
        if (i < queue.length) {
          modal.setAttribute('data-queue-step', i)

          sweetAlert(queue[i]).then(function (result) {
            queueResult.push(result)
            step(i + 1, callback)
          }, function (dismiss) {
            resetQueue()
            reject(dismiss)
          })
        } else {
          resetQueue()
          resolve(queueResult)
        }
      })(0)
    })
  }

  /*
   * Global function for getting the index of current modal in queue
   */
  sweetAlert.getQueueStep = function () {
    return getModal().getAttribute('data-queue-step')
  }

  /*
   * Global function for inserting a modal to the queue
   */
  sweetAlert.insertQueueStep = function (step, index) {
    if (index && index < queue.length) {
      return queue.splice(index, 0, step)
    }
    return queue.push(step)
  }

  /*
   * Global function for deleting a modal from the queue
   */
  sweetAlert.deleteQueueStep = function (index) {
    if (typeof queue[index] !== 'undefined') {
      queue.splice(index, 1)
    }
  }

  /*
   * Global function to close sweetAlert
   */
  sweetAlert.close = sweetAlert.closeModal = function (onComplete) {
    var modal = getModal()
    removeClass(modal, swalClasses.show)
    addClass(modal, swalClasses.hide)

    // Reset icon animations
    var $successIcon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes.success)
    removeClass($successIcon, 'animate')
    removeClass($successIcon.querySelector('.tip'), 'animate-success-tip')
    removeClass($successIcon.querySelector('.long'), 'animate-success-long')

    var $errorIcon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes.error)
    removeClass($errorIcon, 'animate-error-icon')
    removeClass($errorIcon.querySelector('.x-mark'), 'animate-x-mark')

    var $warningIcon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes.warning)
    removeClass($warningIcon, 'pulse-warning')

    resetPrevState()

    var hideModalAndResetState = function () {
      hide(modal)
      modal.style.minHeight = ''
      removeClass(sweetContainer, swalClasses.in)
      removeClass(document.body, swalClasses.in)
      undoScrollbar()
      undoIOSfix()
    }

    // If animation is supported, animate
    if (animationEndEvent && !hasClass(modal, swalClasses.noanimation)) {
      modal.addEventListener(animationEndEvent, function swalCloseEventFinished () {
        modal.removeEventListener(animationEndEvent, swalCloseEventFinished)
        if (hasClass(modal, swalClasses.hide)) {
          hideModalAndResetState()
        }
      })
    } else {
      // Otherwise, hide immediately
      hideModalAndResetState()
    }
    if (onComplete !== null && typeof onComplete === 'function') {
      onComplete.call(this, modal)
    }
  }

  /*
   * Global function to click 'Confirm' button
   */
  sweetAlert.clickConfirm = function () {
    getConfirmButton().click()
  }

  /*
   * Global function to click 'Cancel' button
   */
  sweetAlert.clickCancel = function () {
    getCancelButton().click()
  }

  /**
   * Set default params for each popup
   * @param {Object} userParams
   */
  sweetAlert.setDefaults = function (userParams) {
    if (!userParams) {
      throw new Error('userParams is required')
    }
    if (typeof userParams !== 'object') {
      throw new Error('userParams has to be a object')
    }

    extend(modalParams, userParams)
  }

  /**
   * Reset default params for each popup
   */
  sweetAlert.resetDefaults = function () {
    modalParams = extend({}, defaultParams)
  }

  sweetAlert.noop = function () { }

  sweetAlert.version = '5.3.8'

  if (typeof Promise === 'function') {
    Promise.prototype.done = Promise.prototype.done || function () { // eslint-disable-line
      return this.catch(function () {
        // Catch promise rejections silently.
        // https://github.com/limonte/sweetalert2/issues/177
      })
    }
  } else {
    console.warn('SweetAlert2: Please inlude Promise polyfill BEFORE including sweetalert2.js if IE10+ support needed.')
  }

  return sweetAlert;

}));
if (window.Sweetalert2) window.sweetAlert = window.swal = window.Sweetalert2;

/***/ })

});
//# sourceMappingURL=ui-components.module.chunk.js.map