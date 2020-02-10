(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n<h1 align=\"center\">ระบบควบคุมความชื้น </h1> \n</ion-header>\n<ion-content>\n  \n  <div align=\"center\">\n    {{status}}\n    <h3><span style=\"color: red;\">สถานะ :</span>   {{ Sw_time == true ? \"เปิด\" : \"ปิด\" }}</h3>\n    <div align = \"center\">{{timeString}}</div>\n    <ion-toggle align=\"right\" color=\"success\" [(ngModel)]=\"Sw_time\" (ionChange)=\"Sw_on()\"></ion-toggle>\n\n<br><br><br>\n\n<ngx-gauge \n           [value]=\"gaugeValue\" \n           [label]=\"gaugeLabel\"  \n           [append]=\"gaugeAppendText\"\n           \n           thick=\"20\"\n           foregroundColor=\"rgb(220, 155, 8)\" \n           size=\"150\"\n           >\n</ngx-gauge>\n<ngx-gauge \n           [value]=\"tae1\" \n           [label]=\"tae2\"  \n           [append]=\"tae3\"\n           foregroundColor=\"rgb(10, 107, 231)\" \n           thick=\"20\"\n           size=\"150\" >\n</ngx-gauge>\n\n\n\n<!-- \n<ion-item>\n  <ion-toggle slot=\"start\" name=\"apple\" color=\"secondary\" checked></ion-toggle>\n  <ion-label>ช่วงที่ 2</ion-label>\n  <ion-datetime displayFormat=\"h:mm A\" minuteValues=\"0,15,30,45\"></ion-datetime>\n</ion-item>\n<ion-item>\n  <ion-toggle slot=\"start\" name=\"apple\" color=\"secondary\" checked></ion-toggle>\n  <ion-label>ช่วงที่ 3</ion-label>\n  <ion-datetime displayFormat=\"h:mm A\" minuteValues=\"0,15,30,45\"></ion-datetime>\n</ion-item>\n<ion-item>\n  <ion-toggle slot=\"start\" name=\"apple\" color=\"secondary\" checked></ion-toggle>\n  <ion-label>ช่วงที่ 4</ion-label>\n  <ion-datetime displayFormat=\"h:mm A\" minuteValues=\"0,15,30,45\"></ion-datetime>\n</ion-item> -->\n\n\n\n</div>\n</ion-content> "

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var ngx_gauge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-gauge */ "./node_modules/ngx-gauge/fesm5/ngx-gauge.js");








var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ngx_gauge__WEBPACK_IMPORTED_MODULE_7__["NgxGaugeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Sriracha&display=swap\");\n.welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n* {\n  font-family: \"Sriracha\", cursive;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXGtpdHRpXFxEb2N1bWVudHNcXGlvbmljXFxoZWxsby9zcmNcXGFwcFxcdGFiMVxcdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVEsNEVBQUE7QUFKUjtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNFRjtBRENBO0VBQ0UsZ0NBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNyaXJhY2hhJmRpc3BsYXk9c3dhcCcpO1xuKntcbiAgZm9udC1mYW1pbHk6ICdTcmlyYWNoYScsIGN1cnNpdmU7XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U3JpcmFjaGEmZGlzcGxheT1zd2FwXCIpO1xuLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiU3JpcmFjaGFcIiwgY3Vyc2l2ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "./node_modules/@ngx-pwa/local-storage/fesm5/ngx-pwa-local-storage.js");




var Tab1Page = /** @class */ (function () {
    function Tab1Page(fd, localStorage) {
        this.fd = fd;
        this.localStorage = localStorage;
        this.now = new Date();
        this.status = false;
        this.Sw_time = false;
        this.setTimeStart1 = '--:--';
        this.setTimeEnd1 = '--:--';
        this.Sw_time1 = false;
        this.gaugeType = "arch";
        this.gaugeLabel = "อุณหภูมิ";
        this.gaugeAppendText = "°C";
        this.tae = "arch";
        this.tae2 = "ความชื้น";
        this.tae3 = "%";
        this.timenow();
    }
    Tab1Page.prototype.timenow = function () {
        var _this = this;
        setInterval(function () {
            var time = new Date();
            _this.timeString = _this.zeroPad(time.getHours()) + ":" + _this.zeroPad(time.getMinutes()) + ":" + _this.zeroPad(time.getSeconds());
        }, 1000);
    };
    Tab1Page.prototype.zeroPad = function (nr, base) {
        if (base === void 0) { base = 10; }
        var len = (String(base).length - String(nr).length) + 1;
        return len > 0 ? new Array(len).join('0') + nr : nr;
    };
    Tab1Page.prototype.ngOnInit = function () {
        var _this = this;
        this.fd
            .object("/sw/ON-OFF")
            .valueChanges()
            .subscribe(function (value) {
            console.log(value);
            _this.Sw_time = value;
        });
        this.fd
            .object("sw/status")
            .valueChanges()
            .subscribe(function (value) {
            console.log(value);
            _this.status = value;
        });
        // this.tae=localStorage.getItem('localdata');
        // console.log(localStorage.getItem('localdata'));
        // console.log(sessionStorage.getItem('sessionData'));
        // ********************************* แสดงค่า ********************
        this.fd
            .object("/temp")
            .valueChanges()
            .subscribe(function (value) {
            _this.gaugeValue = value;
            _this.ta = value;
            console.log(_this.ta);
        });
        this.fd
            .object("/moisture")
            .valueChanges()
            .subscribe(function (value) {
            _this.tae1 = value;
            _this.tg = value;
            console.log(_this.tg);
        });
    };
    Tab1Page.prototype.getuser = function () {
        localStorage.setItem("kititpong", '');
    };
    Tab1Page.prototype.Sw_on1 = function () {
        this.fd
            .object("set/time1/sw1")
            .set(this.Sw_time1);
        console.log("SW_1 = " + this.Sw_time1);
        this.fd
            .object("set/swall")
            .set(this.Sw_time + "," + this.Sw_time1 + "," + this.Sw_time + "," + this.Sw_time + "," + this.Sw_time)
            .then(function () {
        });
    };
    Tab1Page.prototype.getTimeStart1 = function (time) {
        this.setTimeStart1 = '';
        var dt = new Date(time);
        // console.log(dt.getHours() + " " + dt.getMinutes());
        console.log(this.setTimeStart1);
        var timeset = this.zero(dt.getHours()) + ":" + this.zero(dt.getMinutes());
        this.setTimeStart1 = timeset;
        this.fd
            .object("set/time1/timeStart1")
            .set(this.setTimeStart1)
            .then(function () {
            // microgear.publish("/ionic/sw1", this.Sw_togle + "");
        });
        console.log(this.setTimeStart1);
    };
    Tab1Page.prototype.zero = function (nr, base) {
        if (base === void 0) { base = 10; }
        return nr;
        var len = (String(base).length - String(nr).length) + 1;
        //return len > 0 ? new Array(len).join('0') + nr : nr;
    };
    Tab1Page.prototype.getTimeEnd1 = function (time) {
        var dt = new Date(time);
        // console.log(dt.getHours() + " " + dt.getMinutes());
        console.log(this.setTimeEnd1);
        var timeset = this.zeroPad(dt.getHours()) + ":" + this.zeroPad(dt.getMinutes());
        this.setTimeEnd1 = timeset;
        this.fd
            .object("set/time1/timeEnd1")
            .set(this.setTimeEnd1)
            .then(function () {
            // microgear.publish("/ionic/sw1", this.Sw_togle + "");
        });
        console.log(this.setTimeEnd1);
        // this.fb
        //   .object("set/timeall")
        //   .set(this.setTimeStart1+","+this.setTimeEnd1+","+this.setTimeStart2+","+this.setTimeEnd2+","
        //   +this.setTimeStart3+","+this.setTimeEnd3+","+this.setTimeStart4+","+this.setTimeEnd4)
        //   .then(() => {
        //   });
    };
    Tab1Page.prototype.Sw_on = function () {
        var _this = this;
        this.fd
            .object("/sw/ON-OFF")
            .set(this.Sw_time)
            .then(function () {
            _this.gg = console.log(_this.Sw_time);
            localStorage.setItem("taee", _this.gg);
        });
        console.log("SW_ON/OFF = " + this.Sw_time);
        this.fd
            .object("set/swall")
            .set(this.Sw_time + ",")
            .then(function () {
        });
    };
    Tab1Page.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
        { type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"] }
    ]; };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map