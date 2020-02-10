(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      ตั้งเวลาที่ต้องการ *ยกเว้น{{tae}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div align = \"center\">{{timeString}}</div>\n<!-- ************* ตัวจับเวลา 1 *************** -->\n<ion-card >\n  <ion-row>\n    <ion-col size=\"8\">\n      <ion-item lines=\"none\">\n        <ion-label>ตั้งเวลา 1</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"4\" style=\"text-align: center; margin-top:auto;\">\n      <ion-item lines=\"none\">\n        <section title=\".slideThree\" >\n         \n        </section>\n        <ion-toggle  [(ngModel)]=\"Sw_time1\" (ionChange)=\"Sw_on1()\"></ion-toggle>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"5\">\n      <!-- --detail-icon-font-size:0px; -->\n      <ion-item\n        lines=\"none\"\n        \n      >\n        <ion-label>&nbsp;&nbsp;&nbsp;{{ setTimeStart1 }}</ion-label>\n        <ion-datetime\n          style=\"width:0px;height:0px;padding:0px;\"\n          pickerFormat=\"HH:mm\"\n          #setTimeStart1_1\n          Attribute=\"backdrop-dismiss\"\n          displayFormat=\" \"\n          (ionChange)=\"getTimeStart1(setTimeStart1_1.value)\"\n        ></ion-datetime>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"2\">\n      <ion-item lines=\"none\">\n        <label style=\"font-size: 12px\">ถึง</label>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"5\">\n      <ion-item lines=\"none\" style=\"text-align: center\">\n        <ion-label>&nbsp;&nbsp;&nbsp;{{ setTimeEnd1 }}</ion-label>\n        <ion-datetime\n          style=\"width:0px;height:0px;padding:0px;\"\n          pickerFormat=\"HH:mm\"\n          #setTimeEnd1_2\n          displayFormat=\" \"\n          (ionChange)=\"getTimeEnd1(setTimeEnd1_2.value)\"\n        ></ion-datetime>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-card>\n<!-- ************* ตัวจับเวลา 1 จบ *************** -->\n<ion-card>\n    <ion-row>\n      <ion-col size=\"8\">\n        <ion-item lines=\"none\">\n          <ion-label>นับเวลาตัวที่ 2</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"4\" style=\"text-align: center; margin-top:auto;\">\n        <ion-item lines=\"none\">\n          <ion-toggle [(ngModel)]=\"Sw_time2\" (ionChange)=\"Sw_on2()\"></ion-toggle>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"5\">\n        <ion-item\n          lines=\"none\"\n          style=\"--detail-icon-font-size:0px;--padding-end:0px;text-align: center;\"\n        >\n          <ion-label>&nbsp;&nbsp;&nbsp;{{ setTimeStart2 }}</ion-label>\n          <ion-datetime\n            style=\"width:0px;height:0px;padding:0px;\"\n            pickerFormat=\"HH:mm\"\n            #setTimeStart2_1\n            displayFormat=\" \"\n            (ionChange)=\"getTimeStart2  (setTimeStart2_1.value)\"\n          ></ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-item lines=\"none\">\n          <label style=\"font-size: 12px\">ถึง</label>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"5\">\n        <ion-item lines=\"none\" style=\"text-align: center\">\n          <ion-label>&nbsp;&nbsp;&nbsp;{{ setTimeEnd2 }}</ion-label>\n          <ion-datetime\n            style=\"width:0px;height:0px;padding:0px;\"\n            pickerFormat=\"HH:mm\"\n            #setTimeEnd2_2\n            displayFormat=\" \"\n            (ionChange)=\"getTimeEnd2(setTimeEnd2_2.value)\"\n          ></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <!-- //////////////////////////3////////////////////////// -->\n  <ion-card>\n    <ion-row>\n      <ion-col size=\"8\">\n        <ion-item lines=\"none\">\n          <ion-label>นับเวลาตัวที่ 3</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"4\" style=\"text-align: center; margin-top:auto;\">\n        <ion-item lines=\"none\">\n          <ion-toggle [(ngModel)]=\"Sw_time3\" (ionChange)=\"Sw_on3()\"></ion-toggle>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"5\">\n        <ion-item\n          lines=\"none\"\n          style=\"--detail-icon-font-size:0px;--padding-end:0px;text-align: center;\"\n        >\n          <ion-label>&nbsp;&nbsp;&nbsp;{{ setTimeStart3 }}</ion-label>\n          <ion-datetime\n            style=\"width:0px;height:0px;padding:0px;\"\n            pickerFormat=\"HH:mm\"\n            #setTimeStart3_1\n            displayFormat=\" \"\n            (ionChange)=\"getTimeStart3  (setTimeStart3_1.value)\"\n          ></ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-item lines=\"none\">\n          <label style=\"font-size: 12px\">ถึง</label>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"5\">\n        <ion-item lines=\"none\" style=\"text-align: center\">\n          <ion-label>&nbsp;&nbsp;&nbsp;{{ setTimeEnd3 }}</ion-label>\n          <ion-datetime\n            style=\"width:0px;height:0px;padding:0px;\"\n            pickerFormat=\"HH:mm\"\n            #setTimeEnd3_2\n            displayFormat=\" \"\n            (ionChange)=\"getTimeEnd3(setTimeEnd3_2.value)\"\n          ></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <!-- /////////////////////////////////////////////4 -->\n  <ion-card>\n    <ion-row>\n      <ion-col size=\"8\">\n        <ion-item lines=\"none\">\n          <ion-label>นับเวลาตัวที่ 4</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"4\" style=\"text-align: center; margin-top:auto;\">\n        <ion-item lines=\"none\">\n          <ion-toggle [(ngModel)]=\"Sw_time4\" (ionChange)=\"Sw_on4()\"></ion-toggle>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"5\">\n        <ion-item\n          lines=\"none\"\n          style=\"--detail-icon-font-size:0px;--padding-end:0px;text-align: center;\"\n        >\n          <ion-label>&nbsp;&nbsp;&nbsp;{{ setTimeStart4 }}</ion-label>\n          <ion-datetime\n            style=\"width:0px;height:0px;padding:0px;\"\n            pickerFormat=\"HH:mm\"\n            #setTimeStart4_1\n            displayFormat=\" \"\n            (ionChange)=\"getTimeStart4(setTimeStart4_1.value)\"\n          ></ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-item lines=\"none\">\n          <label style=\"font-size: 12px\">ถึง</label>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"5\">\n        <ion-item lines=\"none\" style=\"text-align: center\">\n          <ion-label>&nbsp;&nbsp;&nbsp;{{ setTimeEnd4 }}</ion-label>\n          <ion-datetime\n            style=\"width:0px;height:0px;padding:0px;\"\n            pickerFormat=\"HH:mm\"\n            #setTimeEnd4_2\n            displayFormat=\" \"\n            (ionChange)=\"getTimeEnd4(setTimeEnd4_2.value)\"\n          ></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");



var Tab2Page = /** @class */ (function () {
    function Tab2Page(fd) {
        this.fd = fd;
        this.setTimeStart1 = '--:--';
        this.setTimeEnd1 = '--:--';
        this.Sw_time1 = false;
        this.setTimeStart2 = '--:--';
        this.setTimeEnd2 = '--:--';
        this.Sw_time2 = false;
        this.setTimeStart3 = '--:--';
        this.setTimeEnd3 = '--:--';
        this.Sw_time3 = false;
        this.setTimeStart4 = '--:--';
        this.setTimeEnd4 = '--:--';
        this.Sw_time4 = false;
        this.timenow();
    }
    Tab2Page.prototype.timenow = function () {
        var _this = this;
        setInterval(function () {
            var time = new Date();
            _this.timeString = _this.zero(time.getHours()) + ":" + _this.zero(time.getMinutes()) + ":" + _this.zero(time.getSeconds());
        }, 1000);
    };
    Tab2Page.prototype.zero = function (nr, base) {
        if (base === void 0) { base = 10; }
        var len = (String(base).length - String(nr).length) + 1;
        return len > 0 ? new Array(len).join('0') + nr : nr;
    };
    Tab2Page.prototype.ngOnInit = function () {
        var _this = this;
        this.tae = localStorage.getItem('gg');
        // localStorage.setItem("localdata",'localstorage');
        // sessionStorage.setItem("sessionData",'sessiostorage');
        // console.log('localdata');
        // console.log('sessionData');
        // *******************************************************************************
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
        // *************************************************************************************
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////// ตัวที่ 1
        this.fd
            .object("set/time1/timeStart1")
            .valueChanges()
            .subscribe(function (value) {
            console.log(value);
            _this.setTimeStart1 = value;
        });
        this.fd
            .object("set/time1/timeEnd1")
            .valueChanges()
            .subscribe(function (value) {
            console.log(value);
            _this.setTimeEnd1 = value;
        });
        this.fd
            .object("set/time1/sw1")
            .valueChanges()
            .subscribe(function (value) {
            console.log(value);
            _this.Sw_time1 = value;
        });
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////// ตัวที่ 2
        this.fd
            .object("set/time2/timeStart2")
            .valueChanges()
            .subscribe(function (value) {
            console.log(value);
            _this.setTimeStart2 = value;
        });
        this.fd
            .object("set/time2/timeEnd2")
            .valueChanges()
            .subscribe(function (value) {
            console.log(value);
            _this.setTimeEnd2 = value;
        });
        this.fd
            .object("set/time2/sw2")
            .valueChanges()
            .subscribe(function (value) {
            console.log(value);
            _this.Sw_time2 = value;
        });
        /////////////////////////////////////////////////////////////////////////////////
        ////////////////////////ตัวที่3
        this.fd
            .object("set/time3/timeStart3")
            .valueChanges()
            .subscribe(function (value) {
            console.log(value);
            _this.setTimeStart3 = value;
        });
        this.fd
            .object("set/time3/timeEnd3")
            .valueChanges()
            .subscribe(function (value) {
            console.log(value);
            _this.setTimeEnd3 = value;
        });
        this.fd
            .object("set/time3/sw3")
            .valueChanges()
            .subscribe(function (value) {
            console.log(value);
            _this.Sw_time3 = value;
        });
        ///////////////////////////////////////////////////////
        ///////////////////////ตัวที่4
        this.fd
            .object("set/time4/timeStart4")
            .valueChanges()
            .subscribe(function (value) {
            console.log(value);
            _this.setTimeStart4 = value;
        });
        this.fd
            .object("set/time4/timeEnd4")
            .valueChanges()
            .subscribe(function (value) {
            console.log(value);
            _this.setTimeEnd4 = value;
        });
        this.fd
            .object("set/time4/sw4")
            .valueChanges()
            .subscribe(function (value) {
            console.log(value);
            _this.Sw_time4 = value;
        });
        ////////////////////////////
    };
    Tab2Page.prototype.Sw_on1 = function () {
        this.fd
            .object("set/time1/sw1")
            .set(this.Sw_time1)
            .then(function () {
        });
        console.log("SW_1 = " + this.Sw_time1);
        this.fd
            .object("set/swall")
            .set(this.Sw_time + "," + this.Sw_time1 + "," + this.Sw_time2 + "," + this.Sw_time3 + "," + this.Sw_time4)
            .then(function () {
        });
    };
    Tab2Page.prototype.Sw_on2 = function () {
        this.fd
            .object("set/time2/sw2")
            .set(this.Sw_time2)
            .then(function () {
            // microgear.publish("/ionic/sw1", this.Sw_togle + "");
        });
        console.log("SW_2 = " + this.Sw_time2);
        this.fd
            .object("set/swall")
            .set(this.Sw_time + "," + this.Sw_time1 + "," + this.Sw_time2 + "," + this.Sw_time3 + "," + this.Sw_time4)
            .then(function () {
        });
    };
    Tab2Page.prototype.Sw_on3 = function () {
        this.fd
            .object("set/time3/sw3")
            .set(this.Sw_time3)
            .then(function () {
            // microgear.publish("/ionic/sw1", this.Sw_togle + "");
        });
        console.log("SW_3 = " + this.Sw_time3);
        this.fd
            .object("set/swall")
            .set(this.Sw_time + "," + this.Sw_time1 + "," + this.Sw_time2 + "," + this.Sw_time3 + "," + this.Sw_time4)
            .then(function () {
        });
    };
    Tab2Page.prototype.Sw_on4 = function () {
        this.fd
            .object("set/time4/sw4")
            .set(this.Sw_time4)
            .then(function () {
            // microgear.publish("/ionic/sw1", this.Sw_togle + "");
        });
        console.log("SW4 = " + this.Sw_time4);
        this.fd
            .object("set/swall")
            .set(this.Sw_time + "," + this.Sw_time1 + "," + this.Sw_time2 + "," + this.Sw_time3 + "," + this.Sw_time4)
            .then(function () {
        });
    };
    Tab2Page.prototype.Sw_on = function () {
        this.fd
            .object("/sw/ON-OFF")
            .set(this.Sw_time)
            .then(function () {
        });
        console.log("SW_ON/OFF = " + this.Sw_time);
        this.fd
            .object("set/swall")
            .set(this.Sw_time + "," + this.Sw_time1 + "," + this.Sw_time2 + "," + this.Sw_time3 + "," + this.Sw_time4)
            .then(function () {
        });
    };
    Tab2Page.prototype.getTimeStart1 = function (time) {
        this.setTimeStart1 = '';
        var dt = new Date(time);
        // console.log(dt.getHours() + " " + dt.getMinutes());
        console.log(this.setTimeStart1);
        var timeset = this.zeroPad(dt.getHours()) + ":" + this.zeroPad(dt.getMinutes());
        this.setTimeStart1 = timeset;
        this.fd
            .object("set/time1/timeStart1")
            .set(this.setTimeStart1)
            .then(function () {
            // microgear.publish("/ionic/sw1", this.Sw_togle + "");
        });
        this.fd
            .object("set/timeall")
            .set(this.setTimeStart1 + "," + this.setTimeEnd1 + "," + this.setTimeStart2 + "," + this.setTimeEnd2 + ","
            + this.setTimeStart3 + "," + this.setTimeEnd3 + "," + this.setTimeStart4 + "," + this.setTimeEnd4)
            .then(function () {
        });
        console.log(this.setTimeStart1);
    };
    Tab2Page.prototype.getTimeStart2 = function (time) {
        var dt = new Date(time);
        // console.log(dt.getHours() + " " + dt.getMinutes());
        console.log(this.setTimeStart2);
        var timeset = this.zeroPad(dt.getHours()) + ":" + this.zeroPad(dt.getMinutes());
        this.setTimeStart2 = timeset;
        this.fd
            .object("set/time2/timeStart2")
            .set(this.setTimeStart2)
            .then(function () {
            // microgear.publish("/ionic/sw1", this.Sw_togle + "");
        });
        console.log(this.setTimeStart2);
        this.fd
            .object("set/timeall")
            .set(this.setTimeStart1 + "," + this.setTimeEnd1 + "," + this.setTimeStart2 + "," + this.setTimeEnd2 + ","
            + this.setTimeStart3 + "," + this.setTimeEnd3 + "," + this.setTimeStart4 + "," + this.setTimeEnd4)
            .then(function () {
        });
    };
    Tab2Page.prototype.getTimeStart3 = function (time) {
        var dt = new Date(time);
        // console.log(dt.getHours() + " " + dt.getMinutes());
        console.log(this.setTimeStart3);
        var timeset = this.zeroPad(dt.getHours()) + ":" + this.zeroPad(dt.getMinutes());
        this.setTimeStart3 = timeset;
        this.fd
            .object("set/time3/timeStart3")
            .set(this.setTimeStart3)
            .then(function () {
            // microgear.publish("/ionic/sw1", this.Sw_togle + "");
        });
        console.log(this.setTimeStart3);
        this.fd
            .object("set/timeall")
            .set(this.setTimeStart1 + "," + this.setTimeEnd1 + "," + this.setTimeStart2 + "," + this.setTimeEnd2 + ","
            + this.setTimeStart3 + "," + this.setTimeEnd3 + "," + this.setTimeStart4 + "," + this.setTimeEnd4)
            .then(function () {
        });
    };
    Tab2Page.prototype.getTimeStart4 = function (time) {
        var dt = new Date(time);
        // console.log(dt.getHours() + " " + dt.getMinutes());
        console.log(this.setTimeStart4);
        var timeset = this.zeroPad(dt.getHours()) + ":" + this.zeroPad(dt.getMinutes());
        this.setTimeStart4 = timeset;
        this.fd
            .object("set/time4/timeStart4")
            .set(this.setTimeStart4)
            .then(function () {
            // microgear.publish("/ionic/sw1", this.Sw_togle + "");
        });
        console.log(this.setTimeStart4);
        this.fd
            .object("set/timeall")
            .set(this.setTimeStart1 + "," + this.setTimeEnd1 + "," + this.setTimeStart2 + "," + this.setTimeEnd2 + ","
            + this.setTimeStart3 + "," + this.setTimeEnd3 + "," + this.setTimeStart4 + "," + this.setTimeEnd4)
            .then(function () {
        });
    };
    Tab2Page.prototype.getTimeEnd1 = function (time) {
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
        this.fd
            .object("set/timeall")
            .set(this.setTimeStart1 + "," + this.setTimeEnd1 + "," + this.setTimeStart2 + "," + this.setTimeEnd2 + ","
            + this.setTimeStart3 + "," + this.setTimeEnd3 + "," + this.setTimeStart4 + "," + this.setTimeEnd4)
            .then(function () {
        });
    };
    Tab2Page.prototype.getTimeEnd2 = function (time) {
        var dt = new Date(time);
        // console.log(dt.getHours() + " " + dt.getMinutes());
        console.log(this.setTimeEnd2);
        var timeset = this.zeroPad(dt.getHours()) + ":" + this.zeroPad(dt.getMinutes());
        this.setTimeEnd2 = timeset;
        this.fd
            .object("set/time2/timeEnd2")
            .set(this.setTimeEnd2)
            .then(function () {
            // microgear.publish("/ionic/sw1", this.Sw_togle + "");
        });
        console.log(this.setTimeEnd2);
        this.fd
            .object("set/timeall")
            .set(this.setTimeStart1 + "," + this.setTimeEnd1 + "," + this.setTimeStart2 + "," + this.setTimeEnd2 + ","
            + this.setTimeStart3 + "," + this.setTimeEnd3 + "," + this.setTimeStart4 + "," + this.setTimeEnd4)
            .then(function () {
        });
    };
    Tab2Page.prototype.getTimeEnd3 = function (time) {
        var dt = new Date(time);
        // console.log(dt.getHours() + " " + dt.getMinutes());
        console.log(this.setTimeEnd3);
        var timeset = this.zeroPad(dt.getHours()) + ":" + this.zeroPad(dt.getMinutes());
        this.setTimeEnd3 = timeset;
        this.fd
            .object("set/time3/timeEnd3")
            .set(this.setTimeEnd3)
            .then(function () {
            // microgear.publish("/ionic/sw1", this.Sw_togle + "");
        });
        console.log(this.setTimeEnd3);
        this.fd
            .object("set/timeall")
            .set(this.setTimeStart1 + "," + this.setTimeEnd1 + "," + this.setTimeStart2 + "," + this.setTimeEnd2 + ","
            + this.setTimeStart3 + "," + this.setTimeEnd3 + "," + this.setTimeStart4 + "," + this.setTimeEnd4)
            .then(function () {
        });
    };
    Tab2Page.prototype.getTimeEnd4 = function (time) {
        var dt = new Date(time);
        // console.log(dt.getHours() + " " + dt.getMinutes());
        console.log(this.setTimeEnd4);
        var timeset = this.zeroPad(dt.getHours()) + ":" + this.zeroPad(dt.getMinutes());
        this.setTimeEnd4 = timeset;
        this.fd
            .object("set/time4/timeEnd4")
            .set(this.setTimeEnd4)
            .then(function () {
            // microgear.publish("/ionic/sw1", this.Sw_togle + "");
        });
        console.log(this.setTimeEnd4);
        this.fd
            .object("set/timeall")
            .set(this.setTimeStart1 + "," + this.setTimeEnd1 + "," + this.setTimeStart2 + "," + this.setTimeEnd2 + ","
            + this.setTimeStart3 + "," + this.setTimeEnd3 + "," + this.setTimeStart4 + "," + this.setTimeEnd4)
            .then(function () {
        });
    };
    Tab2Page.prototype.zeroPad = function (nr, base) {
        if (base === void 0) { base = 10; }
        return nr;
        var len = (String(base).length - String(nr).length) + 1;
        //return len > 0 ? new Array(len).join('0') + nr : nr;
    };
    Tab2Page.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map