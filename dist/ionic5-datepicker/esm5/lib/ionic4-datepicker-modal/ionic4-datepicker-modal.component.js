/**
 * @fileoverview added by tsickle
 * Generated from: lib/ionic4-datepicker-modal/ionic4-datepicker-modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { NavParams, ModalController, IonContent } from '@ionic/angular';
import * as moment_ from 'moment';
import { Ionic4DatepickerService } from '../ionic4-datepicker.service';
/** @type {?} */
var moment = moment_;
var Ionic4DatepickerModalComponent = /** @class */ (function () {
    function Ionic4DatepickerModalComponent(navParams, modalCtrl, datePickerService) {
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.datePickerService = datePickerService;
        // inputs
        this.mainObj = {};
        this.selectedDate = {};
        // component variables
        this.selctedDateEpoch = 0;
        this.disabledDates = [];
        this.highlightedDates = {};
        this.disableWeekdays = [];
        this.data = {
            currentMonth: '',
            currentYear: '',
            currentMonthSelected: ''
        };
        this.rows = [0, 7, 14, 21, 28, 35];
        this.cols = [0, 1, 2, 3, 4, 5, 6];
        this.monthsList = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        this.weeksList = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        this.yearsList = [];
        this.daysList = [];
        this.yearInAscending = false;
        this.momentLocale = 'en-US';
        // month year scroll variables
        this.isMonthYearSelectorOpen = false;
        this.scrollingMonthOrYearArray = [];
        this.isSelectedDateFound = false;
        this.today = this.resetHMSM(new Date()).getTime();
        if (this.navParams.get('selectedDate')) {
            // console.log('Selected date =>', this.navParams.get('selectedDate'));
            this.selectedDate.date = this.navParams.get('selectedDate');
            this.isSelectedDateFound = true;
        }
        this.mainObj = this.initDatePickerObj(this.navParams.get('objConfig'));
    }
    /**
     * @return {?}
     */
    Ionic4DatepickerModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.datePickerService.isModalOpen = true;
        this.initDatePicker();
    };
    /**
     * @return {?}
     */
    Ionic4DatepickerModalComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.datePickerService.isModalOpen = false;
    };
    // Reset the hours, minutes, seconds and milli seconds
    // Reset the hours, minutes, seconds and milli seconds
    /**
     * @param {?} currentDate
     * @return {?}
     */
    Ionic4DatepickerModalComponent.prototype.resetHMSM = 
    // Reset the hours, minutes, seconds and milli seconds
    /**
     * @param {?} currentDate
     * @return {?}
     */
    function (currentDate) {
        currentDate.setHours(0);
        currentDate.setMinutes(0);
        currentDate.setSeconds(0);
        currentDate.setMilliseconds(0);
        return currentDate;
    };
    // this method change month or year list to dateList
    // this method change month or year list to dateList
    /**
     * @return {?}
     */
    Ionic4DatepickerModalComponent.prototype.changeToDateList = 
    // this method change month or year list to dateList
    /**
     * @return {?}
     */
    function () {
        // console.log('changeToDateList');
        this.isMonthYearSelectorOpen = false;
    };
    // Virtual scroll create for select year and month
    // Virtual scroll create for select year and month
    /**
     * @param {?} isMonthSelect
     * @return {?}
     */
    Ionic4DatepickerModalComponent.prototype.selectMonthYear = 
    // Virtual scroll create for select year and month
    /**
     * @param {?} isMonthSelect
     * @return {?}
     */
    function (isMonthSelect) {
        // console.log('selectMonthYear', i);
        this.isMonthYearSelectorOpen = true;
        this.isMonthSelect = isMonthSelect;
        this.scrollingMonthOrYearArray = isMonthSelect ? this.mainObj.monthsList : this.yearsList;
        this.selectedYearOrMonth = isMonthSelect ? this.data.currentMonth : this.data.currentYear;
        /** @type {?} */
        var index = this.scrollingMonthOrYearArray.indexOf(this.selectedYearOrMonth);
        /** @type {?} */
        var iditem = index + 'list';
        setTimeout((/**
         * @return {?}
         */
        function () {
            document.getElementById(iditem).scrollIntoView();
        }), 100);
    };
    // select month or year
    // select month or year
    /**
     * @param {?} monthYear
     * @return {?}
     */
    Ionic4DatepickerModalComponent.prototype.onChangeMonthYear = 
    // select month or year
    /**
     * @param {?} monthYear
     * @return {?}
     */
    function (monthYear) {
        // console.log('onChangeMonthYear', monthYear);
        if (monthYear) {
            if (this.isMonthSelect) {
                this.data.currentMonth = monthYear;
                this.selectedYearOrMonth = this.data.currentMonth;
                /** @type {?} */
                var monthNumber = this.monthsList.indexOf(this.data.currentMonth);
                this.currentDate.setDate(1);
                this.currentDate.setMonth(monthNumber);
            }
            else {
                this.data.currentYear = monthYear;
                this.selectedYearOrMonth = this.data.currentYear;
                this.currentDate.setFullYear(this.data.currentYear);
                this.refreshDateList(this.currentDate);
            }
            this.refreshDateList(this.currentDate);
        }
        this.isMonthYearSelectorOpen = false;
    };
    // Previous month
    // Previous month
    /**
     * @return {?}
     */
    Ionic4DatepickerModalComponent.prototype.prevMonth = 
    // Previous month
    /**
     * @return {?}
     */
    function () {
        // console.log('prevNext', this.currentDate);
        /** @type {?} */
        var currentMonth = this.currentDate.getMonth();
        /** @type {?} */
        var currentYear = this.currentDate.getFullYear();
        if (currentYear <= this.yearsList[(this.yearsList.length - 1)] && currentMonth === 0) {
            return;
        }
        if (currentMonth === 1) {
            this.currentDate.setFullYear(currentYear);
        }
        this.currentDate.setMonth(currentMonth - 1);
        this.data.currentMonth = this.mainObj.monthsList[currentMonth];
        this.data.currentYear = currentYear;
        this.refreshDateList(this.currentDate);
        // this.changeDaySelected();
    };
    // Next month
    // Next month
    /**
     * @return {?}
     */
    Ionic4DatepickerModalComponent.prototype.nextMonth = 
    // Next month
    /**
     * @return {?}
     */
    function () {
        // console.log('nextNext', this.currentDate);
        /** @type {?} */
        var currentMonth = this.currentDate.getMonth();
        /** @type {?} */
        var currentYear = this.currentDate.getFullYear();
        if (currentYear >= this.yearsList[0] && currentMonth === 11) {
            return;
        }
        if (currentMonth === 11) {
            this.currentDate.setFullYear(currentYear);
        }
        this.currentDate.setDate(1);
        this.currentDate.setMonth(currentMonth + 1);
        this.data.currentMonth = this.mainObj.monthsList[currentMonth];
        this.data.currentYear = currentYear;
        this.refreshDateList(this.currentDate);
        // this.changeDaySelected();
    };
    // changeDaySelected ( day selection changes )
    // changeDaySelected ( day selection changes )
    /**
     * @return {?}
     */
    Ionic4DatepickerModalComponent.prototype.changeDaySelected = 
    // changeDaySelected ( day selection changes )
    /**
     * @return {?}
     */
    function () {
        // console.log('changeDaySelected');
        /** @type {?} */
        var newSelectedDate = new Date(this.selctedDateEpoch);
        newSelectedDate.setMonth(this.currentDate.getMonth());
        newSelectedDate.setYear(this.currentDate.getFullYear());
        this.selctedDateEpoch = newSelectedDate.getTime();
        this.selectedDateString = this.formatDate();
        // this.closeModal(this.selctedDateEpoch);
    };
    // Date selected
    // Date selected
    /**
     * @param {?} selectedDate
     * @return {?}
     */
    Ionic4DatepickerModalComponent.prototype.dateSelected = 
    // Date selected
    /**
     * @param {?} selectedDate
     * @return {?}
     */
    function (selectedDate) {
        // console.log('dateSelected =>', selectedDate);
        if (selectedDate && !selectedDate.disabled) {
            if (!selectedDate || Object.keys(selectedDate).length === 0) {
                return;
            }
            this.isSelectedDateFound = true;
            this.selctedDateEpoch = selectedDate.epoch;
            this.selectedDateString = this.formatDate();
            if (this.mainObj.closeOnSelect) {
                this.closeModal(this.selctedDateEpoch);
            }
        }
    };
    // Set today as date for the modal
    // Set today as date for the modal
    /**
     * @return {?}
     */
    Ionic4DatepickerModalComponent.prototype.setIonicDatePickerTodayDate = 
    // Set today as date for the modal
    /**
     * @return {?}
     */
    function () {
        // console.log('setIonicDatePickerTodayDate');
        /** @type {?} */
        var today = new Date(this.today);
        /** @type {?} */
        var today_obj = {
            date: today.getDate(),
            month: today.getMonth(),
            year: today.getFullYear(),
            day: today.getDay(),
            epoch: today.getTime(),
            disabled: false
        };
        this.dateSelected(today_obj);
        this.refreshDateList(new Date());
        this.selctedDateEpoch = this.resetHMSM(today).getTime();
        this.selectedDateString = this.formatDate();
        // this.closeModal(this.selctedDateEpoch);
    };
    // Set date for the modal
    // Set date for the modal
    /**
     * @return {?}
     */
    Ionic4DatepickerModalComponent.prototype.setIonicDatePickerDate = 
    // Set date for the modal
    /**
     * @return {?}
     */
    function () {
        // console.log('setIonicDatePickerDate');
        this.closeModal(this.selctedDateEpoch);
    };
    // Setting the disabled dates list.
    // Setting the disabled dates list.
    /**
     * @param {?} obj
     * @return {?}
     */
    Ionic4DatepickerModalComponent.prototype.setDisabledDates = 
    // Setting the disabled dates list.
    /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        // console.log('setDisabledDates =>', obj);
        if (!obj.disabledDates || obj.disabledDates.length === 0) {
            this.disabledDates = [];
        }
        else {
            this.disabledDates = [];
            for (var i = 0; i < obj.disabledDates.length; i++) {
                // val = resetHMSM(new Date(val));
                this.disabledDates.push(this.resetHMSM(new Date(obj.disabledDates[i])).getTime());
            }
        }
    };
    // Set hightlighted dates
    // Set hightlighted dates
    /**
     * @param {?} obj
     * @return {?}
     */
    Ionic4DatepickerModalComponent.prototype.setHightlightedDates = 
    // Set hightlighted dates
    /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (!obj.highlightedDates || obj.highlightedDates.length === 0) {
            this.highlightedDates = {};
        }
        else {
            this.highlightedDates = {};
            for (var i = 0; i < obj.highlightedDates.length; i++) {
                /** @type {?} */
                var hDate = obj.highlightedDates[i].date;
                /** @type {?} */
                var hColor = obj.highlightedDates[i].color;
                /** @type {?} */
                var hFontColor = obj.highlightedDates[i].fontColor;
                /** @type {?} */
                var hDateTime = this.resetHMSM(new Date(hDate)).getTime();
                this.highlightedDates[hDateTime] = { color: hColor, fontColor: hFontColor };
            }
        }
    };
    // Refresh the list of the dates of a month
    // Refresh the list of the dates of a month
    /**
     * @param {?} currentDate
     * @return {?}
     */
    Ionic4DatepickerModalComponent.prototype.refreshDateList = 
    // Refresh the list of the dates of a month
    /**
     * @param {?} currentDate
     * @return {?}
     */
    function (currentDate) {
        // console.log('refreshDateList =>', currentDate);
        currentDate = this.resetHMSM(currentDate);
        this.currentDate = currentDate;
        /** @type {?} */
        var firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDate();
        /** @type {?} */
        var lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        this.monthsList = [];
        if (this.mainObj.monthsList && this.mainObj.monthsList.length === 12) {
            this.monthsList = this.mainObj.monthsList;
        }
        else {
            this.monthsList = this.monthsList;
        }
        this.yearsList = this.getYearsList(this.mainObj.from, this.mainObj.to);
        this.daysList = [];
        /** @type {?} */
        var tempDate;
        /** @type {?} */
        var disabled;
        this.firstDayEpoch = this.resetHMSM(new Date(currentDate.getFullYear(), currentDate.getMonth(), firstDay)).getTime();
        this.lastDayEpoch = this.resetHMSM(new Date(currentDate.getFullYear(), currentDate.getMonth(), lastDay)).getTime();
        for (var i = firstDay; i <= lastDay; i++) {
            tempDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
            disabled = false;
            /** @type {?} */
            var day = tempDate.getDay();
            if (this.disableWeekdays.length > 0) {
                if (this.disableWeekdays.indexOf(day) >= 0) {
                    disabled = this.disableWeekdays.indexOf(day) >= 0;
                }
                else {
                    disabled = false;
                }
            }
            if (this.disabledDates.length > 0) {
                if (this.disabledDates.indexOf(tempDate.getTime()) >= 0) {
                    disabled = true;
                }
            }
            if (this.fromDate && !disabled) {
                disabled = (tempDate.getTime() < this.fromDate)
                    || this.mainObj.disableWeekDays.indexOf(tempDate.getDay()) >= 0;
            }
            if (this.toDate && !disabled) {
                disabled = (tempDate.getTime() > this.toDate)
                    || this.mainObj.disableWeekDays.indexOf(tempDate.getDay()) >= 0;
            }
            /** @type {?} */
            var hightLightDate = this.highlightedDates[tempDate.getTime()];
            /** @type {?} */
            var fontColor = null;
            if (tempDate.getDay() === 0 && this.mainObj.isSundayHighlighted && this.mainObj.isSundayHighlighted.fontColor) {
                fontColor = this.mainObj.isSundayHighlighted.fontColor;
            }
            else if (hightLightDate && hightLightDate.fontColor) {
                fontColor = hightLightDate.fontColor;
            }
            this.daysList.push({
                date: tempDate.getDate(),
                month: tempDate.getMonth(),
                year: tempDate.getFullYear(),
                day: tempDate.getDay(),
                epoch: tempDate.getTime(),
                disabled: disabled,
                color: hightLightDate && hightLightDate.color ? hightLightDate.color : null,
                fontColor: fontColor
                // fontColor: hightLightDate && hightLightDate.fontColor ? hightLightDate.fontColor : null
            });
        }
        // To set Monday as the first day of the week.
        /** @type {?} */
        var firstDayMonday = this.daysList[0].day - this.mainObj.mondayFirst;
        firstDayMonday = (firstDayMonday < 0) ? 6 : firstDayMonday;
        for (var j = 0; j < firstDayMonday; j++) {
            this.daysList.unshift({});
        }
        this.rows = [0, 7, 14, 21, 28, 35];
        this.cols = [0, 1, 2, 3, 4, 5, 6];
        this.data.currentMonth = this.mainObj.monthsList[currentDate.getMonth()];
        this.data.currentYear = currentDate.getFullYear();
        this.data.currentMonthSelected = this.data.currentMonth;
        this.currentYearSelected = this.data.currentYear;
        this.numColumns = 7;
    };
    // Setting up the initial object
    // Setting up the initial object
    /**
     * @param {?} ipObj
     * @return {?}
     */
    Ionic4DatepickerModalComponent.prototype.setInitialObj = 
    // Setting up the initial object
    /**
     * @param {?} ipObj
     * @return {?}
     */
    function (ipObj) {
        // console.log('setInitialObj =>', ipObj);
        this.mainObj = ipObj;
        if (this.isSelectedDateFound) {
            this.isSelectedDateFound = true;
            this.selctedDateEpoch = this.resetHMSM(this.mainObj.inputDate).getTime();
        }
        this.selectedDateString = this.formatDate();
        if (this.mainObj.weeksList && this.mainObj.weeksList.length === 7) {
            this.weeksList = this.mainObj.weeksList;
        }
        if (this.mainObj.mondayFirst) {
            this.weeksList.push(this.mainObj.weeksList.shift());
        }
        if (this.mainObj.yearInAscending) {
            this.yearInAscending = this.mainObj.yearInAscending;
        }
        if (this.mainObj.momentLocale) {
            this.momentLocale = this.mainObj.momentLocale;
        }
        this.disableWeekdays = this.mainObj.disableWeekDays;
        this.setDisabledDates(this.mainObj);
        this.refreshDateList(this.mainObj.inputDate);
    };
    // for dismiss modal
    // for dismiss modal
    /**
     * @param {?} selectedDate
     * @return {?}
     */
    Ionic4DatepickerModalComponent.prototype.closeModal = 
    // for dismiss modal
    /**
     * @param {?} selectedDate
     * @return {?}
     */
    function (selectedDate) {
        // console.log('closeModal => ', selectedDate);
        this.modalCtrl.getTop();
        /** @type {?} */
        var formattedDate = moment(selectedDate).format(this.mainObj.dateFormat);
        this.modalCtrl.dismiss({ 'date': formattedDate });
    };
    // close modal button
    // close modal button
    /**
     * @return {?}
     */
    Ionic4DatepickerModalComponent.prototype.closeIonicDatePickerModal = 
    // close modal button
    /**
     * @return {?}
     */
    function () {
        // console.log('closeIonicDatePickerModal');
        this.closeModal(null);
    };
    // get years list  ( GIVE HERE MIN OR MAX YEAR IN DATE_PICKER )
    // get years list  ( GIVE HERE MIN OR MAX YEAR IN DATE_PICKER )
    /**
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    Ionic4DatepickerModalComponent.prototype.getYearsList = 
    // get years list  ( GIVE HERE MIN OR MAX YEAR IN DATE_PICKER )
    /**
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    function (from, to) {
        // console.log('getYearsList =>', from, to);
        /** @type {?} */
        var yearsList = [];
        /** @type {?} */
        var minYear = 1950;
        /** @type {?} */
        var maxYear = new Date().getFullYear() + 1;
        minYear = from ? new Date(from).getFullYear() : minYear;
        maxYear = to ? new Date(to).getFullYear() : maxYear;
        // console.log('getYearsList: ', this.yearInAscending);
        if (this.yearInAscending) {
            for (var i = minYear; i <= maxYear; i++) {
                yearsList.push(i);
            }
        }
        else {
            for (var i = maxYear; i >= minYear; i--) {
                yearsList.push(i);
            }
        }
        return yearsList;
    };
    // Init Date-Picker
    // Init Date-Picker
    /**
     * @return {?}
     */
    Ionic4DatepickerModalComponent.prototype.initDatePicker = 
    // Init Date-Picker
    /**
     * @return {?}
     */
    function () {
        this.fromDate = '';
        this.toDate = '';
        // $scope.mainObj = angular.extend({}, config, ipObj);
        if (this.mainObj.from) {
            this.fromDate = this.resetHMSM(new Date(this.mainObj.from)).getTime();
        }
        if (this.mainObj.to) {
            this.toDate = this.resetHMSM(new Date(this.mainObj.to)).getTime();
        }
        // if (ipObj.disableWeekdays && this.config.disableWeekdays) {
        //   this.mainObj.disableWeekDays = ipObj.disableWeekdays.concat(this.config.disableWeekdays);
        // }
        this.setInitialObj(this.mainObj);
    };
    // Init DatePicker Object
    // Init DatePicker Object
    /**
     * @param {?} config
     * @return {?}
     */
    Ionic4DatepickerModalComponent.prototype.initDatePickerObj = 
    // Init DatePicker Object
    /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        // const config = this.mainObj;
        if (config.inputDate && !this.selectedDate.date) {
            this.isSelectedDateFound = true;
            this.selectedDate.date = config.inputDate;
        }
        /** @type {?} */
        var objConfig = {};
        objConfig.from = config.fromDate ? config.fromDate : '';
        objConfig.to = config.toDate ? config.toDate : '';
        objConfig.showTodayButton = config.showTodayButton === undefined ? true : config.showTodayButton;
        objConfig.closeOnSelect = config.closeOnSelect ? config.closeOnSelect : false;
        objConfig.disableWeekDays = config.disableWeekDays ? config.disableWeekDays : [];
        objConfig.mondayFirst = config.mondayFirst ? config.mondayFirst : false;
        objConfig.setLabel = config.setLabel ? config.setLabel : 'Set';
        objConfig.todayLabel = config.todayLabel ? config.todayLabel : 'Today';
        objConfig.closeLabel = config.closeLabel ? config.closeLabel : 'Close';
        objConfig.disabledDates = config.disabledDates ? config.disabledDates : [];
        objConfig.titleLabel = config.titleLabel ? config.titleLabel : null;
        objConfig.monthsList = config.monthsList ? config.monthsList : this.monthsList;
        objConfig.monthsList = tslib_1.__spread(objConfig.monthsList);
        objConfig.weeksList = config.weeksList ? config.weeksList : this.weeksList;
        objConfig.weeksList = tslib_1.__spread(objConfig.weeksList);
        objConfig.dateFormat = config.dateFormat ? config.dateFormat : 'DD MMM YYYY';
        // console.log(this.selectedDate.date, objConfig.dateFormat, moment.locale());
        objConfig.clearButton = config.clearButton ? config.clearButton : false;
        objConfig.yearInAscending = config.yearInAscending ? config.yearInAscending : false;
        objConfig.momentLocale = config.momentLocale ? config.momentLocale : 'en-US';
        moment.locale(objConfig.momentLocale);
        objConfig.inputDate = this.selectedDate.date ? moment(this.selectedDate.date, objConfig.dateFormat).toDate() : new Date();
        objConfig.btnCloseSetInReverse = config.btnCloseSetInReverse ? config.btnCloseSetInReverse : false;
        objConfig.btnProperties = {};
        if (config.btnProperties) {
            /** @type {?} */
            var btnProperties = config.btnProperties;
            objConfig.btnProperties.expand = btnProperties.expand ? btnProperties.expand : 'block';
            objConfig.btnProperties.fill = btnProperties.fill ? btnProperties.fill : 'solid';
            objConfig.btnProperties.size = btnProperties.size ? btnProperties.size : 'default';
            objConfig.btnProperties.color = btnProperties.color ? btnProperties.color : '';
            objConfig.btnProperties.disabled = btnProperties.disabled ? btnProperties.disabled : false;
            objConfig.btnProperties.strong = btnProperties.strong ? btnProperties.strong : false;
        }
        else {
            objConfig.btnProperties.expand = 'block';
            objConfig.btnProperties.fill = 'solid';
            objConfig.btnProperties.size = 'default';
            objConfig.btnProperties.disabled = false;
            objConfig.btnProperties.strong = false;
        }
        objConfig.arrowNextPrev = {};
        if (config.arrowNextPrev) {
            /** @type {?} */
            var arrowNextPrev = config.arrowNextPrev;
            objConfig.arrowNextPrev.nextArrowSrc = arrowNextPrev.nextArrowSrc ? arrowNextPrev.nextArrowSrc : false;
            objConfig.arrowNextPrev.prevArrowSrc = arrowNextPrev.prevArrowSrc ? arrowNextPrev.prevArrowSrc : false;
        }
        objConfig.highlightedDates = [];
        if (config.highlightedDates && config.highlightedDates.length > 0) {
            objConfig.highlightedDates = config.highlightedDates;
            this.setHightlightedDates(objConfig);
        }
        objConfig.isSundayHighlighted = {};
        if (config.isSundayHighlighted) {
            /** @type {?} */
            var isSundayHighlighted = config.isSundayHighlighted;
            objConfig.isSundayHighlighted.fontColor = isSundayHighlighted.fontColor ? isSundayHighlighted.fontColor : null;
        }
        // console.log('config =>', objConfig);
        return objConfig;
    };
    // Format date
    // Format date
    /**
     * @return {?}
     */
    Ionic4DatepickerModalComponent.prototype.formatDate = 
    // Format date
    /**
     * @return {?}
     */
    function () {
        // console.log('formatDate: ', this.selctedDateEpoch, new Date(this.selctedDateEpoch));
        return moment(this.selctedDateEpoch).format(this.mainObj.dateFormat);
    };
    Ionic4DatepickerModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'li-ionic4-datepicker-modal',
                    template: "<ion-header>\n  <ion-toolbar (click)=\"changeToDateList()\">\n    <ion-title>\n      <h1 *ngIf=\"mainObj?.titleLabel\"> {{mainObj?.titleLabel}} </h1>\n      {{selectedDateString}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content forceOverscroll=\"false\" class=\"no-padding\" class=\"ionic_datepicker_modal_content\">\n\n  <ion-grid class=\"dp-month-year-container\" class=\"no-padding\"\n    [ngClass]=\"isMonthYearSelectorOpen ? 'dp-virual-scroller-hide' : 'dp-virual-scroller-show'\">\n    <ion-row style=\"display: flex; justify-content: space-between;\">\n\n      <ion-button [ngClass]=\"{'pointer_events_none':((firstDayEpoch - 86400000) < fromDate)}\" (click)=\"prevMonth()\">\n        <ion-icon *ngIf=\"!mainObj?.arrowNextPrev?.prevArrowSrc\" name=\"arrow-back\"></ion-icon>\n        <ion-icon *ngIf=\"mainObj?.arrowNextPrev?.prevArrowSrc\" src=\"{{mainObj?.arrowNextPrev?.prevArrowSrc}}\">\n        </ion-icon>\n      </ion-button>\n\n      <ion-button class=\"dp-buttons\" (click)=\"selectMonthYear(true)\">\n        {{ data.currentMonth }}\n      </ion-button>\n      <ion-button class=\"dp-buttons\" (click)=\"selectMonthYear(false)\">\n        {{ data.currentYear }}\n      </ion-button>\n\n      <ion-button [ngClass]=\"{'pointer_events_none':((lastDayEpoch + 86400000)> toDate)}\" (click)=\"nextMonth()\">\n        <ion-icon *ngIf=\"!mainObj?.arrowNextPrev?.nextArrowSrc\" name=\"arrow-forward\"></ion-icon>\n        <ion-icon *ngIf=\"mainObj?.arrowNextPrev?.nextArrowSrc\" src=\"{{mainObj?.arrowNextPrev?.nextArrowSrc}}\">\n        </ion-icon>\n      </ion-button>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-grid class=\"dp-weeks-container\" *ngIf=\"daysList\"\n          [ngClass]=\"isMonthYearSelectorOpen ? 'dp-virual-scroller-hide' : 'dp-virual-scroller-show'\">\n          <ion-row class=\" dp-weeks-name\">\n            <ion-col *ngFor=\"let weekName of mainObj?.weeksList; let i = index\">\n              <!-- <div class=\"weeks\">{{weekName}} {{i}}</div> -->\n              <div class=\"weeks\" *ngIf=\"mainObj?.mondayFirst\"\n                [style.color]=\"mainObj?.isSundayHighlighted && i === 6 ? mainObj?.isSundayHighlighted.fontColor : ''\">\n                {{weekName}}</div>\n              <div class=\"weeks\" *ngIf=\"!mainObj?.mondayFirst\"\n                [style.color]=\"mainObj?.isSundayHighlighted && i === 0 ? mainObj?.isSundayHighlighted.fontColor : ''\">\n                {{weekName}}</div>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let row of rows;\" class=\"dp-days-list\">\n            <ion-col *ngFor=\"let col of cols; let i = index ;\" (click)=\"dateSelected(daysList[row + i])\"\n              [style.background-color]=\"(daysList[row + i]?.color) ? (daysList[row + i]?.color) : ''\"\n              [style.border-radius]=\"(daysList[row + i]?.color) ? '4px' : ''\" class=\"no-padding\" [ngClass]=\"{\n                'dp-selecteddate': (daysList[row + i]?.epoch === selctedDateEpoch),\n                'dp-today' : (daysList[row + i]?.epoch == today),\n                'disabled' : (daysList[row + i]?.disabled)}\">\n              <div class=\"days\" [style.color]=\"(daysList[row + i]?.fontColor) ? (daysList[row + i]?.fontColor) : ''\">\n                {{daysList[row + col]?.date}}\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list class=\"dp-month-year-scroll-container\"\n    [ngClass]=\"isMonthYearSelectorOpen ? 'dp-virual-scroller-show' : 'dp-virual-scroller-hide'\">\n    <ion-item *ngFor=\"let monthYear of scrollingMonthOrYearArray;let i=index;\" id=\"{{i +'list'}}\"\n      (click)=\"onChangeMonthYear(monthYear)\">\n      <ion-label [ngClass]=\"selectedYearOrMonth === monthYear ? 'dp-selected' : ''\">{{ monthYear }}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid class=\"no-padding\">\n      <ion-row class=\"no-padding\" [ngClass]=\"mainObj?.btnCloseSetInReverse ? 'dp-btn-set-close-in-reverse' : ''\">\n        <ion-col class=\"no-padding\">\n          <ion-button class=\"ion-button\" expand=\"{{mainObj?.btnProperties?.expand}}\"\n            fill=\"{{mainObj?.btnProperties?.fill}}\" size=\"{{mainObj?.btnProperties?.size}}\"\n            color=\"{{mainObj?.btnProperties?.color}}\" disabled=\"{{mainObj?.btnProperties?.disabled}}\"\n            strong=\"{{mainObj?.btnProperties?.strong}}\" (click)=\"closeIonicDatePickerModal()\">\n            {{mainObj?.closeLabel}}\n          </ion-button>\n        </ion-col>\n        <ion-col class=\"no-padding\" *ngIf=\"mainObj?.showTodayButton\">\n          <ion-button class=\"ion-button\" expand=\"{{mainObj?.btnProperties?.expand}}\"\n            fill=\"{{mainObj?.btnProperties?.fill}}\" size=\"{{mainObj?.btnProperties?.size}}\"\n            color=\"{{mainObj?.btnProperties?.color}}\" disabled=\"{{mainObj?.btnProperties?.disabled}}\"\n            strong=\"{{mainObj?.btnProperties?.strong}}\" (click)=\"setIonicDatePickerTodayDate()\">\n            {{mainObj?.todayLabel}}\n          </ion-button>\n        </ion-col>\n        <ion-col class=\"no-padding\" *ngIf=\"!mainObj?.closeOnSelect\">\n          <ion-button class=\"ion-button\" expand=\"{{mainObj?.btnProperties?.expand}}\"\n            fill=\"{{mainObj?.btnProperties?.fill}}\" size=\"{{mainObj?.btnProperties?.size}}\"\n            color=\"{{mainObj?.btnProperties?.color}}\"\n            disabled=\"{{mainObj?.btnProperties?.disabled || !isSelectedDateFound}}\"\n            strong=\"{{mainObj?.btnProperties?.strong}}\" (click)=\"setIonicDatePickerDate()\">\n            {{mainObj?.setLabel}}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>",
                    styles: [":host ion-header{height:60px}:host ion-header ion-toolbar{--background:var(--ion-color-primary);height:100%;align-items:center;display:flex;color:var(--ion-color-primary-contrast)}:host ion-header ion-toolbar ion-title{font-size:20px;font-weight:700;text-align:center;padding:0;display:flex;align-items:center;justify-content:center;height:100%;cursor:pointer}:host ion-header ion-toolbar ion-title h1{font-size:14px;margin:0 0 4px}:host .ionic_datepicker_modal_content .dp-month-year-container ion-col{display:flex;justify-content:center;align-items:center}:host .ionic_datepicker_modal_content .dp-month-year-container ion-col ion-grid{width:100%}:host .ionic_datepicker_modal_content .dp-month-year-container ion-col ion-grid .dp-select-month-year{border-bottom:1.5px solid;border-bottom-color:var(--ion-color-primary)}:host .ionic_datepicker_modal_content .dp-month-year-container ion-col ion-grid .dp-select-month-year .dp-buttons{width:100%;height:40px;margin:0;padding:0;color:var(--ion-color-primary);--background:transparent;--box-shadow:none}:host .ionic_datepicker_modal_content .dp-month-year-container ion-col ion-grid .dp-select-month-year .dp-buttons.activated{--background-activated:transparent;--color-activated:var(--ion-color-primary)}:host .ionic_datepicker_modal_content .dp-month-year-container ion-col ion-grid .dp-select-month-year .dp-down-arrow{position:absolute;width:16px;right:0;top:10px;color:var(--ion-color-primary)}:host .ionic_datepicker_modal_content .dp-month-year-container .dp-left-right-arrow ion-button{--background:transparent;--box-shadow:0;color:var(--ion-color-primary)}:host .ionic_datepicker_modal_content .dp-month-year-container .dp-left-right-arrow ion-button:focus{outline:0}:host .ionic_datepicker_modal_content .dp-month-year-container .dp-left-right-arrow ion-button.activated{--ion-color-primary-shade:transparent;--ion-color-primary-contrast:var(--ion-color-primary-tint)}:host .ionic_datepicker_modal_content .dp-weeks-container{margin:8px 0}:host .ionic_datepicker_modal_content .dp-weeks-container .dp-weeks-name ion-col{display:flex;justify-content:center}:host .ionic_datepicker_modal_content .dp-weeks-container .dp-weeks-name ion-col .weeks{width:14%;display:flex;justify-content:center;font-weight:700}:host .ionic_datepicker_modal_content .dp-weeks-container .dp-days-list ion-col{display:flex;justify-content:center;padding:10px;cursor:pointer}:host .ionic_datepicker_modal_content .dp-weeks-container .dp-days-list ion-col .days{width:14%;display:flex;justify-content:center}:host .ionic_datepicker_modal_content .dp-selecteddate{background:var(--ion-color-primary);color:var(--ion-color-primary-contrast);border-radius:4px;font-weight:500}:host .ionic_datepicker_modal_content .dp-today{border-radius:4px;font-weight:500;border:1px solid;border-color:var(--ion-color-primary)}:host .ionic_datepicker_modal_content .dp-month-year-scroll-container{position:absolute;top:0;bottom:0;left:0;right:0;margin:0;overflow-y:scroll}:host .ionic_datepicker_modal_content .dp-month-year-scroll-container ion-item{--padding-start:0;--inner-padding-end:0;--inner-border-width:0}:host .ionic_datepicker_modal_content .dp-month-year-scroll-container ion-item ion-label{text-align:center;margin:0;font-size:16px}:host .ionic_datepicker_modal_content .dp-month-year-scroll-container ion-item ion-label.dp-selected{color:var(--ion-color-primary);font-size:20px;font-weight:500}:host .disabled{color:#aaa}:host .dp-virual-scroller-show{transition:opacity .3s ease-in;opacity:1;visibility:visible}:host .dp-virual-scroller-hide{opacity:0;visibility:hidden;height:auto}:host ion-footer{height:55px}:host ion-footer ion-toolbar{height:100%;--border-width:0;--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px}:host ion-footer ion-toolbar .toolbar-container{height:100%}:host ion-footer ion-toolbar .dp-btn-set-close-in-reverse{flex-direction:row-reverse}:host ion-footer ion-toolbar ion-button{--border-radius:0;height:55px;margin:0}:host ion-footer ion-toolbar ion-button:focus{outline:0}:host ion-footer ion-toolbar ion-button.activated{--background-activated:var(--ion-color-primary-tint);--color-activated:var(--ion-color-primary-contrast)}:host .no-padding{padding:0}"]
                }] }
    ];
    /** @nocollapse */
    Ionic4DatepickerModalComponent.ctorParameters = function () { return [
        { type: NavParams },
        { type: ModalController },
        { type: Ionic4DatepickerService }
    ]; };
    Ionic4DatepickerModalComponent.propDecorators = {
        content: [{ type: ViewChild, args: [IonContent,] }]
    };
    return Ionic4DatepickerModalComponent;
}());
export { Ionic4DatepickerModalComponent };
if (false) {
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.content;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.currentDate;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.today;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.mainObj;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.selectedDate;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.selctedDateEpoch;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.firstDayEpoch;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.lastDayEpoch;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.disabledDates;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.highlightedDates;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.fromDate;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.toDate;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.disableWeekdays;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.data;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.currentYearSelected;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.numColumns;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.rows;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.cols;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.monthsList;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.weeksList;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.yearsList;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.daysList;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.yearInAscending;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.momentLocale;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.selectedDateString;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.isMonthYearSelectorOpen;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.selectedYearOrMonth;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.isMonthSelect;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.scrollingMonthOrYearArray;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.isSelectedDateFound;
    /**
     * @type {?}
     * @private
     */
    Ionic4DatepickerModalComponent.prototype.navParams;
    /**
     * @type {?}
     * @private
     */
    Ionic4DatepickerModalComponent.prototype.modalCtrl;
    /** @type {?} */
    Ionic4DatepickerModalComponent.prototype.datePickerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWM0LWRhdGVwaWNrZXItbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdvb2dscHJveGVyL2lvbmljNS1kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2lvbmljNC1kYXRlcGlja2VyLW1vZGFsL2lvbmljNC1kYXRlcGlja2VyLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RSxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQztBQUNsQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7SUFDakUsTUFBTSxHQUFHLE9BQU87QUFFdEI7SUFxREUsd0NBQ1UsU0FBb0IsRUFDcEIsU0FBMEIsRUFDM0IsaUJBQTBDO1FBRnpDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFDM0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF5Qjs7UUEzQ25ELFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIsaUJBQVksR0FBUSxFQUFFLENBQUM7O1FBR3ZCLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUlyQixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixxQkFBZ0IsR0FBUSxFQUFFLENBQUM7UUFJM0Isb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsU0FBSSxHQUFRO1lBQ1YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsV0FBVyxFQUFFLEVBQUU7WUFDZixvQkFBb0IsRUFBRSxFQUFFO1NBQ3pCLENBQUM7UUFJRixTQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLFNBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdCLGVBQVUsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekcsY0FBUyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDaEQsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixpQkFBWSxHQUFHLE9BQU8sQ0FBQzs7UUFJdkIsNEJBQXVCLEdBQUcsS0FBSyxDQUFDO1FBR2hDLDhCQUF5QixHQUFRLEVBQUUsQ0FBQztRQUVwQyx3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFPMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3RDLHVFQUF1RTtZQUN2RSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7O0lBRUQsaURBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDMUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxvREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QyxDQUFDO0lBRUQsc0RBQXNEOzs7Ozs7SUFDdEQsa0RBQVM7Ozs7OztJQUFULFVBQVUsV0FBVztRQUNuQixXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixXQUFXLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxvREFBb0Q7Ozs7O0lBQ3BELHlEQUFnQjs7Ozs7SUFBaEI7UUFDRSxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQztJQUN2QyxDQUFDO0lBRUQsa0RBQWtEOzs7Ozs7SUFDbEQsd0RBQWU7Ozs7OztJQUFmLFVBQWdCLGFBQWE7UUFDM0IscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUM7UUFFcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUYsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDOztZQUVwRixLQUFLLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7O1lBQ3hFLE1BQU0sR0FBRyxLQUFLLEdBQUcsTUFBTTtRQUU3QixVQUFVOzs7UUFBQztZQUNULFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkQsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELHVCQUF1Qjs7Ozs7O0lBQ3ZCLDBEQUFpQjs7Ozs7O0lBQWpCLFVBQWtCLFNBQVM7UUFDekIsK0NBQStDO1FBQy9DLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzs7b0JBQzVDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDbkUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3hDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUN4QztZQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQztJQUV2QyxDQUFDO0lBRUQsaUJBQWlCOzs7OztJQUNqQixrREFBUzs7Ozs7SUFBVDs7O1lBRVEsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFOztZQUMxQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUU7UUFDbEQsSUFBSSxXQUFXLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksWUFBWSxLQUFLLENBQUMsRUFBRTtZQUNwRixPQUFPO1NBQ1I7UUFDRCxJQUFJLFlBQVksS0FBSyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLDRCQUE0QjtJQUM5QixDQUFDO0lBRUQsYUFBYTs7Ozs7SUFDYixrREFBUzs7Ozs7SUFBVDs7O1lBRVEsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFOztZQUMxQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUU7UUFDbEQsSUFBSSxXQUFXLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxZQUFZLEtBQUssRUFBRSxFQUFFO1lBQzNELE9BQU87U0FDUjtRQUNELElBQUksWUFBWSxLQUFLLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMzQztRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDcEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkMsNEJBQTRCO0lBQzlCLENBQUM7SUFFRCw4Q0FBOEM7Ozs7O0lBQzlDLDBEQUFpQjs7Ozs7SUFBakI7OztZQUVRLGVBQWUsR0FBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDNUQsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDdEQsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzVDLDBDQUEwQztJQUM1QyxDQUFDO0lBRUQsZ0JBQWdCOzs7Ozs7SUFDaEIscURBQVk7Ozs7OztJQUFaLFVBQWEsWUFBWTtRQUN2QixnREFBZ0Q7UUFDaEQsSUFBSSxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO1lBQzFDLElBQUksQ0FBQyxZQUFZLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUFFLE9BQU87YUFBRTtZQUN4RSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQzNDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDNUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUN4QztTQUNGO0lBQ0gsQ0FBQztJQUVELGtDQUFrQzs7Ozs7SUFDbEMsb0VBQTJCOzs7OztJQUEzQjs7O1lBRVEsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7O1lBQzVCLFNBQVMsR0FBRztZQUNoQixJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNyQixLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUN2QixJQUFJLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUN6QixHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNuQixLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUN0QixRQUFRLEVBQUUsS0FBSztTQUNoQjtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM1QywwQ0FBMEM7SUFDNUMsQ0FBQztJQUVELHlCQUF5Qjs7Ozs7SUFDekIsK0RBQXNCOzs7OztJQUF0QjtRQUNFLHlDQUF5QztRQUN6QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxtQ0FBbUM7Ozs7OztJQUNuQyx5REFBZ0I7Ozs7OztJQUFoQixVQUFpQixHQUFHO1FBQ2xCLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsSUFBSSxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDeEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7U0FDekI7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1lBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakQsa0NBQWtDO2dCQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDbkY7U0FDRjtJQUNILENBQUM7SUFFRCx5QkFBeUI7Ozs7OztJQUN6Qiw2REFBb0I7Ozs7OztJQUFwQixVQUFxQixHQUFHO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLElBQUksR0FBRyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDOUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztTQUM1QjthQUFNO1lBQ0wsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztZQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7b0JBQzlDLEtBQUssR0FBRyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTs7b0JBQ3BDLE1BQU0sR0FBRyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSzs7b0JBQ3RDLFVBQVUsR0FBRyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7b0JBQzlDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO2dCQUMzRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQzthQUM3RTtTQUNGO0lBQ0gsQ0FBQztJQUVELDJDQUEyQzs7Ozs7O0lBQzNDLHdEQUFlOzs7Ozs7SUFBZixVQUFnQixXQUFXO1FBQ3pCLGtEQUFrRDtRQUNsRCxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQzs7WUFFekIsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFOztZQUNuRixPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUFFLFdBQVcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO1FBRTVGLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtZQUNwRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1NBQzNDO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDbkM7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV2RSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzs7WUFDZixRQUFROztZQUFFLFFBQVE7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNySCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUFFLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRW5ILEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUUsUUFBUSxHQUFHLEtBQUssQ0FBQzs7Z0JBQ1gsR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDN0IsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ25DLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUMxQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNuRDtxQkFBTTtvQkFDTCxRQUFRLEdBQUcsS0FBSyxDQUFDO2lCQUNsQjthQUNGO1lBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2pDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUN2RCxRQUFRLEdBQUcsSUFBSSxDQUFDO2lCQUNqQjthQUNGO1lBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUM5QixRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQzt1QkFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuRTtZQUNELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDNUIsUUFBUSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7dUJBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkU7O2dCQUVLLGNBQWMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDOztnQkFFNUQsU0FBUyxHQUFHLElBQUk7WUFFcEIsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUU7Z0JBQzdHLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQzthQUN4RDtpQkFBTSxJQUFJLGNBQWMsSUFBSSxjQUFjLENBQUMsU0FBUyxFQUFFO2dCQUNyRCxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQzthQUN0QztZQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUNqQixJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRTtnQkFDeEIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUU7Z0JBQzFCLElBQUksRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFO2dCQUM1QixHQUFHLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDdEIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3pCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixLQUFLLEVBQUUsY0FBYyxJQUFJLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQzNFLFNBQVMsRUFBRSxTQUFTO2dCQUNwQiwwRkFBMEY7YUFDM0YsQ0FBQyxDQUFDO1NBQ0o7OztZQUdHLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDcEUsY0FBYyxHQUFHLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztRQUMzRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3hELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNqRCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsZ0NBQWdDOzs7Ozs7SUFDaEMsc0RBQWE7Ozs7OztJQUFiLFVBQWMsS0FBSztRQUNqQiwwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztZQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzFFO1FBRUQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUU1QyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDakUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztTQUN6QztRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUNyRDtRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQztTQUNyRDtRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztTQUMvQztRQUNELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7UUFDcEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELG9CQUFvQjs7Ozs7O0lBQ3BCLG1EQUFVOzs7Ozs7SUFBVixVQUFXLFlBQVk7UUFDckIsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7O1lBQ2xCLGFBQWEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQzFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELHFCQUFxQjs7Ozs7SUFDckIsa0VBQXlCOzs7OztJQUF6QjtRQUNFLDRDQUE0QztRQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCwrREFBK0Q7Ozs7Ozs7SUFDL0QscURBQVk7Ozs7Ozs7SUFBWixVQUFhLElBQUksRUFBRSxFQUFFOzs7WUFFYixTQUFTLEdBQUcsRUFBRTs7WUFDaEIsT0FBTyxHQUFHLElBQUk7O1lBQ2QsT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQztRQUMxQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3hELE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDcEQsdURBQXVEO1FBQ3ZELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN2QyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25CO1NBQ0Y7YUFBTTtZQUNMLEtBQUssSUFBSSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3ZDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkI7U0FDRjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRCxtQkFBbUI7Ozs7O0lBQ25CLHVEQUFjOzs7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsc0RBQXNEO1FBQ3RELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN2RTtRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNuRTtRQUNELDhEQUE4RDtRQUM5RCw4RkFBOEY7UUFDOUYsSUFBSTtRQUNKLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCx5QkFBeUI7Ozs7OztJQUN6QiwwREFBaUI7Ozs7OztJQUFqQixVQUFrQixNQUFNO1FBQ3RCLCtCQUErQjtRQUUvQixJQUFJLE1BQU0sQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRTtZQUMvQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7U0FDM0M7O1lBRUssU0FBUyxHQUFRLEVBQUU7UUFDekIsU0FBUyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDeEQsU0FBUyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbEQsU0FBUyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsZUFBZSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQ2pHLFNBQVMsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzlFLFNBQVMsQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2pGLFNBQVMsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3hFLFNBQVMsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQy9ELFNBQVMsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3ZFLFNBQVMsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3ZFLFNBQVMsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzNFLFNBQVMsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRXBFLFNBQVMsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENB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Q0FBdUM7UUFDdkMsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELGNBQWM7Ozs7O0lBQ2QsbURBQVU7Ozs7O0lBQVY7UUFDRSx1RkFBdUY7UUFDdkYsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Z0JBcmZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0Qyw4c0xBQXVEOztpQkFFeEQ7Ozs7Z0JBVlEsU0FBUztnQkFBRSxlQUFlO2dCQUcxQix1QkFBdUI7OzswQkFVN0IsU0FBUyxTQUFDLFVBQVU7O0lBK2V2QixxQ0FBQztDQUFBLEFBdGZELElBc2ZDO1NBamZZLDhCQUE4Qjs7O0lBRXpDLGlEQUEyQzs7SUFFM0MscURBQVk7O0lBQ1osK0NBQU07O0lBR04saURBQWtCOztJQUNsQixzREFBdUI7O0lBR3ZCLDBEQUFxQjs7SUFDckIsdURBQWM7O0lBQ2Qsc0RBQWE7O0lBRWIsdURBQW1COztJQUNuQiwwREFBMkI7O0lBRTNCLGtEQUFTOztJQUNULGdEQUFPOztJQUNQLHlEQUFxQjs7SUFDckIsOENBSUU7O0lBQ0YsNkRBQW9COztJQUNwQixvREFBVzs7SUFFWCw4Q0FBOEI7O0lBQzlCLDhDQUE2Qjs7SUFDN0Isb0RBQXlHOztJQUN6RyxtREFBZ0Q7O0lBQ2hELG1EQUFlOztJQUNmLGtEQUFjOztJQUNkLHlEQUF3Qjs7SUFDeEIsc0RBQXVCOztJQUN2Qiw0REFBbUI7O0lBR25CLGlFQUFnQzs7SUFDaEMsNkRBQW9COztJQUNwQix1REFBYzs7SUFDZCxtRUFBb0M7O0lBRXBDLDZEQUE0Qjs7Ozs7SUFHMUIsbURBQTRCOzs7OztJQUM1QixtREFBa0M7O0lBQ2xDLDJEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2UGFyYW1zLCBNb2RhbENvbnRyb2xsZXIsIElvbkNvbnRlbnQgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IElvbmljNERhdGVwaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vaW9uaWM0LWRhdGVwaWNrZXIuc2VydmljZSc7XG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaS1pb25pYzQtZGF0ZXBpY2tlci1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pb25pYzQtZGF0ZXBpY2tlci1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lvbmljNC1kYXRlcGlja2VyLW1vZGFsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW9uaWM0RGF0ZXBpY2tlck1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBWaWV3Q2hpbGQoSW9uQ29udGVudCkgY29udGVudDogSW9uQ29udGVudDtcblxuICBjdXJyZW50RGF0ZTtcbiAgdG9kYXk7XG5cbiAgLy8gaW5wdXRzXG4gIG1haW5PYmo6IGFueSA9IHt9O1xuICBzZWxlY3RlZERhdGU6IGFueSA9IHt9O1xuXG4gIC8vIGNvbXBvbmVudCB2YXJpYWJsZXNcbiAgc2VsY3RlZERhdGVFcG9jaCA9IDA7XG4gIGZpcnN0RGF5RXBvY2g7XG4gIGxhc3REYXlFcG9jaDtcblxuICBkaXNhYmxlZERhdGVzID0gW107XG4gIGhpZ2hsaWdodGVkRGF0ZXM6IGFueSA9IHt9O1xuXG4gIGZyb21EYXRlO1xuICB0b0RhdGU7XG4gIGRpc2FibGVXZWVrZGF5cyA9IFtdO1xuICBkYXRhOiBhbnkgPSB7XG4gICAgY3VycmVudE1vbnRoOiAnJyxcbiAgICBjdXJyZW50WWVhcjogJycsXG4gICAgY3VycmVudE1vbnRoU2VsZWN0ZWQ6ICcnXG4gIH07XG4gIGN1cnJlbnRZZWFyU2VsZWN0ZWQ7XG4gIG51bUNvbHVtbnM7XG5cbiAgcm93cyA9IFswLCA3LCAxNCwgMjEsIDI4LCAzNV07XG4gIGNvbHMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNl07XG4gIG1vbnRoc0xpc3QgPSBbJ0phbicsICdGZWInLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWcnLCAnU2VwdCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xuICB3ZWVrc0xpc3QgPSBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXTtcbiAgeWVhcnNMaXN0ID0gW107XG4gIGRheXNMaXN0ID0gW107XG4gIHllYXJJbkFzY2VuZGluZyA9IGZhbHNlO1xuICBtb21lbnRMb2NhbGUgPSAnZW4tVVMnO1xuICBzZWxlY3RlZERhdGVTdHJpbmc7XG5cbiAgLy8gbW9udGggeWVhciBzY3JvbGwgdmFyaWFibGVzXG4gIGlzTW9udGhZZWFyU2VsZWN0b3JPcGVuID0gZmFsc2U7XG4gIHNlbGVjdGVkWWVhck9yTW9udGg7XG4gIGlzTW9udGhTZWxlY3Q7XG4gIHNjcm9sbGluZ01vbnRoT3JZZWFyQXJyYXk6IGFueSA9IFtdO1xuXG4gIGlzU2VsZWN0ZWREYXRlRm91bmQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5hdlBhcmFtczogTmF2UGFyYW1zLFxuICAgIHByaXZhdGUgbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXIsXG4gICAgcHVibGljIGRhdGVQaWNrZXJTZXJ2aWNlOiBJb25pYzREYXRlcGlja2VyU2VydmljZVxuICApIHtcbiAgICB0aGlzLnRvZGF5ID0gdGhpcy5yZXNldEhNU00obmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgIGlmICh0aGlzLm5hdlBhcmFtcy5nZXQoJ3NlbGVjdGVkRGF0ZScpKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnU2VsZWN0ZWQgZGF0ZSA9PicsIHRoaXMubmF2UGFyYW1zLmdldCgnc2VsZWN0ZWREYXRlJykpO1xuICAgICAgdGhpcy5zZWxlY3RlZERhdGUuZGF0ZSA9IHRoaXMubmF2UGFyYW1zLmdldCgnc2VsZWN0ZWREYXRlJyk7XG4gICAgICB0aGlzLmlzU2VsZWN0ZWREYXRlRm91bmQgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLm1haW5PYmogPSB0aGlzLmluaXREYXRlUGlja2VyT2JqKHRoaXMubmF2UGFyYW1zLmdldCgnb2JqQ29uZmlnJykpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5pc01vZGFsT3BlbiA9IHRydWU7XG4gICAgdGhpcy5pbml0RGF0ZVBpY2tlcigpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5pc01vZGFsT3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgLy8gUmVzZXQgdGhlIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIGFuZCBtaWxsaSBzZWNvbmRzXG4gIHJlc2V0SE1TTShjdXJyZW50RGF0ZSkge1xuICAgIGN1cnJlbnREYXRlLnNldEhvdXJzKDApO1xuICAgIGN1cnJlbnREYXRlLnNldE1pbnV0ZXMoMCk7XG4gICAgY3VycmVudERhdGUuc2V0U2Vjb25kcygwKTtcbiAgICBjdXJyZW50RGF0ZS5zZXRNaWxsaXNlY29uZHMoMCk7XG4gICAgcmV0dXJuIGN1cnJlbnREYXRlO1xuICB9XG5cbiAgLy8gdGhpcyBtZXRob2QgY2hhbmdlIG1vbnRoIG9yIHllYXIgbGlzdCB0byBkYXRlTGlzdFxuICBjaGFuZ2VUb0RhdGVMaXN0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VUb0RhdGVMaXN0Jyk7XG4gICAgdGhpcy5pc01vbnRoWWVhclNlbGVjdG9yT3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgLy8gVmlydHVhbCBzY3JvbGwgY3JlYXRlIGZvciBzZWxlY3QgeWVhciBhbmQgbW9udGhcbiAgc2VsZWN0TW9udGhZZWFyKGlzTW9udGhTZWxlY3QpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnc2VsZWN0TW9udGhZZWFyJywgaSk7XG4gICAgdGhpcy5pc01vbnRoWWVhclNlbGVjdG9yT3BlbiA9IHRydWU7XG5cbiAgICB0aGlzLmlzTW9udGhTZWxlY3QgPSBpc01vbnRoU2VsZWN0O1xuICAgIHRoaXMuc2Nyb2xsaW5nTW9udGhPclllYXJBcnJheSA9IGlzTW9udGhTZWxlY3QgPyB0aGlzLm1haW5PYmoubW9udGhzTGlzdCA6IHRoaXMueWVhcnNMaXN0O1xuICAgIHRoaXMuc2VsZWN0ZWRZZWFyT3JNb250aCA9IGlzTW9udGhTZWxlY3QgPyB0aGlzLmRhdGEuY3VycmVudE1vbnRoIDogdGhpcy5kYXRhLmN1cnJlbnRZZWFyO1xuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnNjcm9sbGluZ01vbnRoT3JZZWFyQXJyYXkuaW5kZXhPZih0aGlzLnNlbGVjdGVkWWVhck9yTW9udGgpO1xuICAgIGNvbnN0IGlkaXRlbSA9IGluZGV4ICsgJ2xpc3QnO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZGl0ZW0pLnNjcm9sbEludG9WaWV3KCk7XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIC8vIHNlbGVjdCBtb250aCBvciB5ZWFyXG4gIG9uQ2hhbmdlTW9udGhZZWFyKG1vbnRoWWVhcikge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbkNoYW5nZU1vbnRoWWVhcicsIG1vbnRoWWVhcik7XG4gICAgaWYgKG1vbnRoWWVhcikge1xuICAgICAgaWYgKHRoaXMuaXNNb250aFNlbGVjdCkge1xuICAgICAgICB0aGlzLmRhdGEuY3VycmVudE1vbnRoID0gbW9udGhZZWFyO1xuICAgICAgICB0aGlzLnNlbGVjdGVkWWVhck9yTW9udGggPSB0aGlzLmRhdGEuY3VycmVudE1vbnRoO1xuICAgICAgICBjb25zdCBtb250aE51bWJlciA9IHRoaXMubW9udGhzTGlzdC5pbmRleE9mKHRoaXMuZGF0YS5jdXJyZW50TW9udGgpO1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRlLnNldERhdGUoMSk7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGUuc2V0TW9udGgobW9udGhOdW1iZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXRhLmN1cnJlbnRZZWFyID0gbW9udGhZZWFyO1xuICAgICAgICB0aGlzLnNlbGVjdGVkWWVhck9yTW9udGggPSB0aGlzLmRhdGEuY3VycmVudFllYXI7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGUuc2V0RnVsbFllYXIodGhpcy5kYXRhLmN1cnJlbnRZZWFyKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoRGF0ZUxpc3QodGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlZnJlc2hEYXRlTGlzdCh0aGlzLmN1cnJlbnREYXRlKTtcbiAgICB9XG4gICAgdGhpcy5pc01vbnRoWWVhclNlbGVjdG9yT3BlbiA9IGZhbHNlO1xuXG4gIH1cblxuICAvLyBQcmV2aW91cyBtb250aFxuICBwcmV2TW9udGgoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3ByZXZOZXh0JywgdGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgY29uc3QgY3VycmVudE1vbnRoID0gdGhpcy5jdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gdGhpcy5jdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGlmIChjdXJyZW50WWVhciA8PSB0aGlzLnllYXJzTGlzdFsodGhpcy55ZWFyc0xpc3QubGVuZ3RoIC0gMSldICYmIGN1cnJlbnRNb250aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY3VycmVudE1vbnRoID09PSAxKSB7XG4gICAgICB0aGlzLmN1cnJlbnREYXRlLnNldEZ1bGxZZWFyKGN1cnJlbnRZZWFyKTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50RGF0ZS5zZXRNb250aChjdXJyZW50TW9udGggLSAxKTtcbiAgICB0aGlzLmRhdGEuY3VycmVudE1vbnRoID0gdGhpcy5tYWluT2JqLm1vbnRoc0xpc3RbY3VycmVudE1vbnRoXTtcbiAgICB0aGlzLmRhdGEuY3VycmVudFllYXIgPSBjdXJyZW50WWVhcjtcbiAgICB0aGlzLnJlZnJlc2hEYXRlTGlzdCh0aGlzLmN1cnJlbnREYXRlKTtcbiAgICAvLyB0aGlzLmNoYW5nZURheVNlbGVjdGVkKCk7XG4gIH1cblxuICAvLyBOZXh0IG1vbnRoXG4gIG5leHRNb250aCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnbmV4dE5leHQnLCB0aGlzLmN1cnJlbnREYXRlKTtcbiAgICBjb25zdCBjdXJyZW50TW9udGggPSB0aGlzLmN1cnJlbnREYXRlLmdldE1vbnRoKCk7XG4gICAgY29uc3QgY3VycmVudFllYXIgPSB0aGlzLmN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgaWYgKGN1cnJlbnRZZWFyID49IHRoaXMueWVhcnNMaXN0WzBdICYmIGN1cnJlbnRNb250aCA9PT0gMTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRNb250aCA9PT0gMTEpIHtcbiAgICAgIHRoaXMuY3VycmVudERhdGUuc2V0RnVsbFllYXIoY3VycmVudFllYXIpO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnREYXRlLnNldERhdGUoMSk7XG4gICAgdGhpcy5jdXJyZW50RGF0ZS5zZXRNb250aChjdXJyZW50TW9udGggKyAxKTtcbiAgICB0aGlzLmRhdGEuY3VycmVudE1vbnRoID0gdGhpcy5tYWluT2JqLm1vbnRoc0xpc3RbY3VycmVudE1vbnRoXTtcbiAgICB0aGlzLmRhdGEuY3VycmVudFllYXIgPSBjdXJyZW50WWVhcjtcbiAgICB0aGlzLnJlZnJlc2hEYXRlTGlzdCh0aGlzLmN1cnJlbnREYXRlKTtcbiAgICAvLyB0aGlzLmNoYW5nZURheVNlbGVjdGVkKCk7XG4gIH1cblxuICAvLyBjaGFuZ2VEYXlTZWxlY3RlZCAoIGRheSBzZWxlY3Rpb24gY2hhbmdlcyApXG4gIGNoYW5nZURheVNlbGVjdGVkKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VEYXlTZWxlY3RlZCcpO1xuICAgIGNvbnN0IG5ld1NlbGVjdGVkRGF0ZTogYW55ID0gbmV3IERhdGUodGhpcy5zZWxjdGVkRGF0ZUVwb2NoKTtcbiAgICBuZXdTZWxlY3RlZERhdGUuc2V0TW9udGgodGhpcy5jdXJyZW50RGF0ZS5nZXRNb250aCgpKTtcbiAgICBuZXdTZWxlY3RlZERhdGUuc2V0WWVhcih0aGlzLmN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgIHRoaXMuc2VsY3RlZERhdGVFcG9jaCA9IG5ld1NlbGVjdGVkRGF0ZS5nZXRUaW1lKCk7XG4gICAgdGhpcy5zZWxlY3RlZERhdGVTdHJpbmcgPSB0aGlzLmZvcm1hdERhdGUoKTtcbiAgICAvLyB0aGlzLmNsb3NlTW9kYWwodGhpcy5zZWxjdGVkRGF0ZUVwb2NoKTtcbiAgfVxuXG4gIC8vIERhdGUgc2VsZWN0ZWRcbiAgZGF0ZVNlbGVjdGVkKHNlbGVjdGVkRGF0ZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdkYXRlU2VsZWN0ZWQgPT4nLCBzZWxlY3RlZERhdGUpO1xuICAgIGlmIChzZWxlY3RlZERhdGUgJiYgIXNlbGVjdGVkRGF0ZS5kaXNhYmxlZCkge1xuICAgICAgaWYgKCFzZWxlY3RlZERhdGUgfHwgT2JqZWN0LmtleXMoc2VsZWN0ZWREYXRlKS5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG4gICAgICB0aGlzLmlzU2VsZWN0ZWREYXRlRm91bmQgPSB0cnVlO1xuICAgICAgdGhpcy5zZWxjdGVkRGF0ZUVwb2NoID0gc2VsZWN0ZWREYXRlLmVwb2NoO1xuICAgICAgdGhpcy5zZWxlY3RlZERhdGVTdHJpbmcgPSB0aGlzLmZvcm1hdERhdGUoKTtcbiAgICAgIGlmICh0aGlzLm1haW5PYmouY2xvc2VPblNlbGVjdCkge1xuICAgICAgICB0aGlzLmNsb3NlTW9kYWwodGhpcy5zZWxjdGVkRGF0ZUVwb2NoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTZXQgdG9kYXkgYXMgZGF0ZSBmb3IgdGhlIG1vZGFsXG4gIHNldElvbmljRGF0ZVBpY2tlclRvZGF5RGF0ZSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnc2V0SW9uaWNEYXRlUGlja2VyVG9kYXlEYXRlJyk7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSh0aGlzLnRvZGF5KTtcbiAgICBjb25zdCB0b2RheV9vYmogPSB7XG4gICAgICBkYXRlOiB0b2RheS5nZXREYXRlKCksXG4gICAgICBtb250aDogdG9kYXkuZ2V0TW9udGgoKSxcbiAgICAgIHllYXI6IHRvZGF5LmdldEZ1bGxZZWFyKCksXG4gICAgICBkYXk6IHRvZGF5LmdldERheSgpLFxuICAgICAgZXBvY2g6IHRvZGF5LmdldFRpbWUoKSxcbiAgICAgIGRpc2FibGVkOiBmYWxzZVxuICAgIH07XG4gICAgdGhpcy5kYXRlU2VsZWN0ZWQodG9kYXlfb2JqKTtcbiAgICB0aGlzLnJlZnJlc2hEYXRlTGlzdChuZXcgRGF0ZSgpKTtcbiAgICB0aGlzLnNlbGN0ZWREYXRlRXBvY2ggPSB0aGlzLnJlc2V0SE1TTSh0b2RheSkuZ2V0VGltZSgpO1xuICAgIHRoaXMuc2VsZWN0ZWREYXRlU3RyaW5nID0gdGhpcy5mb3JtYXREYXRlKCk7XG4gICAgLy8gdGhpcy5jbG9zZU1vZGFsKHRoaXMuc2VsY3RlZERhdGVFcG9jaCk7XG4gIH1cblxuICAvLyBTZXQgZGF0ZSBmb3IgdGhlIG1vZGFsXG4gIHNldElvbmljRGF0ZVBpY2tlckRhdGUoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3NldElvbmljRGF0ZVBpY2tlckRhdGUnKTtcbiAgICB0aGlzLmNsb3NlTW9kYWwodGhpcy5zZWxjdGVkRGF0ZUVwb2NoKTtcbiAgfVxuXG4gIC8vIFNldHRpbmcgdGhlIGRpc2FibGVkIGRhdGVzIGxpc3QuXG4gIHNldERpc2FibGVkRGF0ZXMob2JqKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3NldERpc2FibGVkRGF0ZXMgPT4nLCBvYmopO1xuICAgIGlmICghb2JqLmRpc2FibGVkRGF0ZXMgfHwgb2JqLmRpc2FibGVkRGF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmRpc2FibGVkRGF0ZXMgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNhYmxlZERhdGVzID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iai5kaXNhYmxlZERhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIHZhbCA9IHJlc2V0SE1TTShuZXcgRGF0ZSh2YWwpKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZERhdGVzLnB1c2godGhpcy5yZXNldEhNU00obmV3IERhdGUob2JqLmRpc2FibGVkRGF0ZXNbaV0pKS5nZXRUaW1lKCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFNldCBoaWdodGxpZ2h0ZWQgZGF0ZXNcbiAgc2V0SGlnaHRsaWdodGVkRGF0ZXMob2JqKSB7XG4gICAgaWYgKCFvYmouaGlnaGxpZ2h0ZWREYXRlcyB8fCBvYmouaGlnaGxpZ2h0ZWREYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuaGlnaGxpZ2h0ZWREYXRlcyA9IHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZ2hsaWdodGVkRGF0ZXMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqLmhpZ2hsaWdodGVkRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaERhdGUgPSBvYmouaGlnaGxpZ2h0ZWREYXRlc1tpXS5kYXRlO1xuICAgICAgICBjb25zdCBoQ29sb3IgPSBvYmouaGlnaGxpZ2h0ZWREYXRlc1tpXS5jb2xvcjtcbiAgICAgICAgY29uc3QgaEZvbnRDb2xvciA9IG9iai5oaWdobGlnaHRlZERhdGVzW2ldLmZvbnRDb2xvcjtcbiAgICAgICAgY29uc3QgaERhdGVUaW1lID0gdGhpcy5yZXNldEhNU00obmV3IERhdGUoaERhdGUpKS5nZXRUaW1lKCk7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0ZWREYXRlc1toRGF0ZVRpbWVdID0geyBjb2xvcjogaENvbG9yLCBmb250Q29sb3I6IGhGb250Q29sb3IgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBSZWZyZXNoIHRoZSBsaXN0IG9mIHRoZSBkYXRlcyBvZiBhIG1vbnRoXG4gIHJlZnJlc2hEYXRlTGlzdChjdXJyZW50RGF0ZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZWZyZXNoRGF0ZUxpc3QgPT4nLCBjdXJyZW50RGF0ZSk7XG4gICAgY3VycmVudERhdGUgPSB0aGlzLnJlc2V0SE1TTShjdXJyZW50RGF0ZSk7XG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IGN1cnJlbnREYXRlO1xuXG4gICAgY29uc3QgZmlyc3REYXkgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLCBjdXJyZW50RGF0ZS5nZXRNb250aCgpLCAxKS5nZXREYXRlKCk7XG4gICAgY29uc3QgbGFzdERheSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksIGN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyAxLCAwKS5nZXREYXRlKCk7XG5cbiAgICB0aGlzLm1vbnRoc0xpc3QgPSBbXTtcbiAgICBpZiAodGhpcy5tYWluT2JqLm1vbnRoc0xpc3QgJiYgdGhpcy5tYWluT2JqLm1vbnRoc0xpc3QubGVuZ3RoID09PSAxMikge1xuICAgICAgdGhpcy5tb250aHNMaXN0ID0gdGhpcy5tYWluT2JqLm1vbnRoc0xpc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9udGhzTGlzdCA9IHRoaXMubW9udGhzTGlzdDtcbiAgICB9XG5cbiAgICB0aGlzLnllYXJzTGlzdCA9IHRoaXMuZ2V0WWVhcnNMaXN0KHRoaXMubWFpbk9iai5mcm9tLCB0aGlzLm1haW5PYmoudG8pO1xuXG4gICAgdGhpcy5kYXlzTGlzdCA9IFtdO1xuICAgIGxldCB0ZW1wRGF0ZSwgZGlzYWJsZWQ7XG4gICAgdGhpcy5maXJzdERheUVwb2NoID0gdGhpcy5yZXNldEhNU00obmV3IERhdGUoY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSwgY3VycmVudERhdGUuZ2V0TW9udGgoKSwgZmlyc3REYXkpKS5nZXRUaW1lKCk7XG4gICAgdGhpcy5sYXN0RGF5RXBvY2ggPSB0aGlzLnJlc2V0SE1TTShuZXcgRGF0ZShjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLCBjdXJyZW50RGF0ZS5nZXRNb250aCgpLCBsYXN0RGF5KSkuZ2V0VGltZSgpO1xuXG4gICAgZm9yIChsZXQgaSA9IGZpcnN0RGF5OyBpIDw9IGxhc3REYXk7IGkrKykge1xuICAgICAgdGVtcERhdGUgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLCBjdXJyZW50RGF0ZS5nZXRNb250aCgpLCBpKTtcbiAgICAgIGRpc2FibGVkID0gZmFsc2U7XG4gICAgICBjb25zdCBkYXkgPSB0ZW1wRGF0ZS5nZXREYXkoKTtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVXZWVrZGF5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVXZWVrZGF5cy5pbmRleE9mKGRheSkgPj0gMCkge1xuICAgICAgICAgIGRpc2FibGVkID0gdGhpcy5kaXNhYmxlV2Vla2RheXMuaW5kZXhPZihkYXkpID49IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZERhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWREYXRlcy5pbmRleE9mKHRlbXBEYXRlLmdldFRpbWUoKSkgPj0gMCkge1xuICAgICAgICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mcm9tRGF0ZSAmJiAhZGlzYWJsZWQpIHtcbiAgICAgICAgZGlzYWJsZWQgPSAodGVtcERhdGUuZ2V0VGltZSgpIDwgdGhpcy5mcm9tRGF0ZSlcbiAgICAgICAgICB8fCB0aGlzLm1haW5PYmouZGlzYWJsZVdlZWtEYXlzLmluZGV4T2YodGVtcERhdGUuZ2V0RGF5KCkpID49IDA7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50b0RhdGUgJiYgIWRpc2FibGVkKSB7XG4gICAgICAgIGRpc2FibGVkID0gKHRlbXBEYXRlLmdldFRpbWUoKSA+IHRoaXMudG9EYXRlKVxuICAgICAgICAgIHx8IHRoaXMubWFpbk9iai5kaXNhYmxlV2Vla0RheXMuaW5kZXhPZih0ZW1wRGF0ZS5nZXREYXkoKSkgPj0gMDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGlnaHRMaWdodERhdGUgPSB0aGlzLmhpZ2hsaWdodGVkRGF0ZXNbdGVtcERhdGUuZ2V0VGltZSgpXTtcblxuICAgICAgbGV0IGZvbnRDb2xvciA9IG51bGw7XG5cbiAgICAgIGlmICh0ZW1wRGF0ZS5nZXREYXkoKSA9PT0gMCAmJiB0aGlzLm1haW5PYmouaXNTdW5kYXlIaWdobGlnaHRlZCAmJiB0aGlzLm1haW5PYmouaXNTdW5kYXlIaWdobGlnaHRlZC5mb250Q29sb3IpIHtcbiAgICAgICAgZm9udENvbG9yID0gdGhpcy5tYWluT2JqLmlzU3VuZGF5SGlnaGxpZ2h0ZWQuZm9udENvbG9yO1xuICAgICAgfSBlbHNlIGlmIChoaWdodExpZ2h0RGF0ZSAmJiBoaWdodExpZ2h0RGF0ZS5mb250Q29sb3IpIHtcbiAgICAgICAgZm9udENvbG9yID0gaGlnaHRMaWdodERhdGUuZm9udENvbG9yO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRheXNMaXN0LnB1c2goe1xuICAgICAgICBkYXRlOiB0ZW1wRGF0ZS5nZXREYXRlKCksXG4gICAgICAgIG1vbnRoOiB0ZW1wRGF0ZS5nZXRNb250aCgpLFxuICAgICAgICB5ZWFyOiB0ZW1wRGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICBkYXk6IHRlbXBEYXRlLmdldERheSgpLFxuICAgICAgICBlcG9jaDogdGVtcERhdGUuZ2V0VGltZSgpLFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgIGNvbG9yOiBoaWdodExpZ2h0RGF0ZSAmJiBoaWdodExpZ2h0RGF0ZS5jb2xvciA/IGhpZ2h0TGlnaHREYXRlLmNvbG9yIDogbnVsbCxcbiAgICAgICAgZm9udENvbG9yOiBmb250Q29sb3JcbiAgICAgICAgLy8gZm9udENvbG9yOiBoaWdodExpZ2h0RGF0ZSAmJiBoaWdodExpZ2h0RGF0ZS5mb250Q29sb3IgPyBoaWdodExpZ2h0RGF0ZS5mb250Q29sb3IgOiBudWxsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBUbyBzZXQgTW9uZGF5IGFzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgbGV0IGZpcnN0RGF5TW9uZGF5ID0gdGhpcy5kYXlzTGlzdFswXS5kYXkgLSB0aGlzLm1haW5PYmoubW9uZGF5Rmlyc3Q7XG4gICAgZmlyc3REYXlNb25kYXkgPSAoZmlyc3REYXlNb25kYXkgPCAwKSA/IDYgOiBmaXJzdERheU1vbmRheTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZpcnN0RGF5TW9uZGF5OyBqKyspIHtcbiAgICAgIHRoaXMuZGF5c0xpc3QudW5zaGlmdCh7fSk7XG4gICAgfVxuICAgIHRoaXMucm93cyA9IFswLCA3LCAxNCwgMjEsIDI4LCAzNV07XG4gICAgdGhpcy5jb2xzID0gWzAsIDEsIDIsIDMsIDQsIDUsIDZdO1xuICAgIHRoaXMuZGF0YS5jdXJyZW50TW9udGggPSB0aGlzLm1haW5PYmoubW9udGhzTGlzdFtjdXJyZW50RGF0ZS5nZXRNb250aCgpXTtcbiAgICB0aGlzLmRhdGEuY3VycmVudFllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHRoaXMuZGF0YS5jdXJyZW50TW9udGhTZWxlY3RlZCA9IHRoaXMuZGF0YS5jdXJyZW50TW9udGg7XG4gICAgdGhpcy5jdXJyZW50WWVhclNlbGVjdGVkID0gdGhpcy5kYXRhLmN1cnJlbnRZZWFyO1xuICAgIHRoaXMubnVtQ29sdW1ucyA9IDc7XG4gIH1cblxuICAvLyBTZXR0aW5nIHVwIHRoZSBpbml0aWFsIG9iamVjdFxuICBzZXRJbml0aWFsT2JqKGlwT2JqKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3NldEluaXRpYWxPYmogPT4nLCBpcE9iaik7XG4gICAgdGhpcy5tYWluT2JqID0gaXBPYmo7XG4gICAgaWYgKHRoaXMuaXNTZWxlY3RlZERhdGVGb3VuZCkge1xuICAgICAgdGhpcy5pc1NlbGVjdGVkRGF0ZUZvdW5kID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2VsY3RlZERhdGVFcG9jaCA9IHRoaXMucmVzZXRITVNNKHRoaXMubWFpbk9iai5pbnB1dERhdGUpLmdldFRpbWUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGVkRGF0ZVN0cmluZyA9IHRoaXMuZm9ybWF0RGF0ZSgpO1xuXG4gICAgaWYgKHRoaXMubWFpbk9iai53ZWVrc0xpc3QgJiYgdGhpcy5tYWluT2JqLndlZWtzTGlzdC5sZW5ndGggPT09IDcpIHtcbiAgICAgIHRoaXMud2Vla3NMaXN0ID0gdGhpcy5tYWluT2JqLndlZWtzTGlzdDtcbiAgICB9XG4gICAgaWYgKHRoaXMubWFpbk9iai5tb25kYXlGaXJzdCkge1xuICAgICAgdGhpcy53ZWVrc0xpc3QucHVzaCh0aGlzLm1haW5PYmoud2Vla3NMaXN0LnNoaWZ0KCkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5tYWluT2JqLnllYXJJbkFzY2VuZGluZykge1xuICAgICAgdGhpcy55ZWFySW5Bc2NlbmRpbmcgPSB0aGlzLm1haW5PYmoueWVhckluQXNjZW5kaW5nO1xuICAgIH1cbiAgICBpZiAodGhpcy5tYWluT2JqLm1vbWVudExvY2FsZSkge1xuICAgICAgdGhpcy5tb21lbnRMb2NhbGUgPSB0aGlzLm1haW5PYmoubW9tZW50TG9jYWxlO1xuICAgIH1cbiAgICB0aGlzLmRpc2FibGVXZWVrZGF5cyA9IHRoaXMubWFpbk9iai5kaXNhYmxlV2Vla0RheXM7XG4gICAgdGhpcy5zZXREaXNhYmxlZERhdGVzKHRoaXMubWFpbk9iaik7XG4gICAgdGhpcy5yZWZyZXNoRGF0ZUxpc3QodGhpcy5tYWluT2JqLmlucHV0RGF0ZSk7XG4gIH1cblxuICAvLyBmb3IgZGlzbWlzcyBtb2RhbFxuICBjbG9zZU1vZGFsKHNlbGVjdGVkRGF0ZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjbG9zZU1vZGFsID0+ICcsIHNlbGVjdGVkRGF0ZSk7XG4gICAgdGhpcy5tb2RhbEN0cmwuZ2V0VG9wKCk7XG4gICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IG1vbWVudChzZWxlY3RlZERhdGUpLmZvcm1hdCh0aGlzLm1haW5PYmouZGF0ZUZvcm1hdCk7XG4gICAgdGhpcy5tb2RhbEN0cmwuZGlzbWlzcyh7ICdkYXRlJzogZm9ybWF0dGVkRGF0ZSB9KTtcbiAgfVxuXG4gIC8vIGNsb3NlIG1vZGFsIGJ1dHRvblxuICBjbG9zZUlvbmljRGF0ZVBpY2tlck1vZGFsKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjbG9zZUlvbmljRGF0ZVBpY2tlck1vZGFsJyk7XG4gICAgdGhpcy5jbG9zZU1vZGFsKG51bGwpO1xuICB9XG5cbiAgLy8gZ2V0IHllYXJzIGxpc3QgICggR0lWRSBIRVJFIE1JTiBPUiBNQVggWUVBUiBJTiBEQVRFX1BJQ0tFUiApXG4gIGdldFllYXJzTGlzdChmcm9tLCB0bykge1xuICAgIC8vIGNvbnNvbGUubG9nKCdnZXRZZWFyc0xpc3QgPT4nLCBmcm9tLCB0byk7XG4gICAgY29uc3QgeWVhcnNMaXN0ID0gW107XG4gICAgbGV0IG1pblllYXIgPSAxOTUwO1xuICAgIGxldCBtYXhZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpICsgMTtcbiAgICBtaW5ZZWFyID0gZnJvbSA/IG5ldyBEYXRlKGZyb20pLmdldEZ1bGxZZWFyKCkgOiBtaW5ZZWFyO1xuICAgIG1heFllYXIgPSB0byA/IG5ldyBEYXRlKHRvKS5nZXRGdWxsWWVhcigpIDogbWF4WWVhcjtcbiAgICAvLyBjb25zb2xlLmxvZygnZ2V0WWVhcnNMaXN0OiAnLCB0aGlzLnllYXJJbkFzY2VuZGluZyk7XG4gICAgaWYgKHRoaXMueWVhckluQXNjZW5kaW5nKSB7XG4gICAgICBmb3IgKGxldCBpID0gbWluWWVhcjsgaSA8PSBtYXhZZWFyOyBpKyspIHtcbiAgICAgICAgeWVhcnNMaXN0LnB1c2goaSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSBtYXhZZWFyOyBpID49IG1pblllYXI7IGktLSkge1xuICAgICAgICB5ZWFyc0xpc3QucHVzaChpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHllYXJzTGlzdDtcbiAgfVxuXG4gIC8vIEluaXQgRGF0ZS1QaWNrZXJcbiAgaW5pdERhdGVQaWNrZXIoKSB7XG4gICAgdGhpcy5mcm9tRGF0ZSA9ICcnO1xuICAgIHRoaXMudG9EYXRlID0gJyc7XG4gICAgLy8gJHNjb3BlLm1haW5PYmogPSBhbmd1bGFyLmV4dGVuZCh7fSwgY29uZmlnLCBpcE9iaik7XG4gICAgaWYgKHRoaXMubWFpbk9iai5mcm9tKSB7XG4gICAgICB0aGlzLmZyb21EYXRlID0gdGhpcy5yZXNldEhNU00obmV3IERhdGUodGhpcy5tYWluT2JqLmZyb20pKS5nZXRUaW1lKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm1haW5PYmoudG8pIHtcbiAgICAgIHRoaXMudG9EYXRlID0gdGhpcy5yZXNldEhNU00obmV3IERhdGUodGhpcy5tYWluT2JqLnRvKSkuZ2V0VGltZSgpO1xuICAgIH1cbiAgICAvLyBpZiAoaXBPYmouZGlzYWJsZVdlZWtkYXlzICYmIHRoaXMuY29uZmlnLmRpc2FibGVXZWVrZGF5cykge1xuICAgIC8vICAgdGhpcy5tYWluT2JqLmRpc2FibGVXZWVrRGF5cyA9IGlwT2JqLmRpc2FibGVXZWVrZGF5cy5jb25jYXQodGhpcy5jb25maWcuZGlzYWJsZVdlZWtkYXlzKTtcbiAgICAvLyB9XG4gICAgdGhpcy5zZXRJbml0aWFsT2JqKHRoaXMubWFpbk9iaik7XG4gIH1cblxuICAvLyBJbml0IERhdGVQaWNrZXIgT2JqZWN0XG4gIGluaXREYXRlUGlja2VyT2JqKGNvbmZpZykge1xuICAgIC8vIGNvbnN0IGNvbmZpZyA9IHRoaXMubWFpbk9iajtcblxuICAgIGlmIChjb25maWcuaW5wdXREYXRlICYmICF0aGlzLnNlbGVjdGVkRGF0ZS5kYXRlKSB7XG4gICAgICB0aGlzLmlzU2VsZWN0ZWREYXRlRm91bmQgPSB0cnVlO1xuICAgICAgdGhpcy5zZWxlY3RlZERhdGUuZGF0ZSA9IGNvbmZpZy5pbnB1dERhdGU7XG4gICAgfVxuXG4gICAgY29uc3Qgb2JqQ29uZmlnOiBhbnkgPSB7fTtcbiAgICBvYmpDb25maWcuZnJvbSA9IGNvbmZpZy5mcm9tRGF0ZSA/IGNvbmZpZy5mcm9tRGF0ZSA6ICcnO1xuICAgIG9iakNvbmZpZy50byA9IGNvbmZpZy50b0RhdGUgPyBjb25maWcudG9EYXRlIDogJyc7XG4gICAgb2JqQ29uZmlnLnNob3dUb2RheUJ1dHRvbiA9IGNvbmZpZy5zaG93VG9kYXlCdXR0b24gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBjb25maWcuc2hvd1RvZGF5QnV0dG9uO1xuICAgIG9iakNvbmZpZy5jbG9zZU9uU2VsZWN0ID0gY29uZmlnLmNsb3NlT25TZWxlY3QgPyBjb25maWcuY2xvc2VPblNlbGVjdCA6IGZhbHNlO1xuICAgIG9iakNvbmZpZy5kaXNhYmxlV2Vla0RheXMgPSBjb25maWcuZGlzYWJsZVdlZWtEYXlzID8gY29uZmlnLmRpc2FibGVXZWVrRGF5cyA6IFtdO1xuICAgIG9iakNvbmZpZy5tb25kYXlGaXJzdCA9IGNvbmZpZy5tb25kYXlGaXJzdCA/IGNvbmZpZy5tb25kYXlGaXJzdCA6IGZhbHNlO1xuICAgIG9iakNvbmZpZy5zZXRMYWJlbCA9IGNvbmZpZy5zZXRMYWJlbCA/IGNvbmZpZy5zZXRMYWJlbCA6ICdTZXQnO1xuICAgIG9iakNvbmZpZy50b2RheUxhYmVsID0gY29uZmlnLnRvZGF5TGFiZWwgPyBjb25maWcudG9kYXlMYWJlbCA6ICdUb2RheSc7XG4gICAgb2JqQ29uZmlnLmNsb3NlTGFiZWwgPSBjb25maWcuY2xvc2VMYWJlbCA/IGNvbmZpZy5jbG9zZUxhYmVsIDogJ0Nsb3NlJztcbiAgICBvYmpDb25maWcuZGlzYWJsZWREYXRlcyA9IGNvbmZpZy5kaXNhYmxlZERhdGVzID8gY29uZmlnLmRpc2FibGVkRGF0ZXMgOiBbXTtcbiAgICBvYmpDb25maWcudGl0bGVMYWJlbCA9IGNvbmZpZy50aXRsZUxhYmVsID8gY29uZmlnLnRpdGxlTGFiZWwgOiBudWxsO1xuXG4gICAgb2JqQ29uZmlnLm1vbnRoc0xpc3QgPSBjb25maWcubW9udGhzTGlzdCA/IGNvbmZpZy5tb250aHNMaXN0IDogdGhpcy5tb250aHNMaXN0O1xuICAgIG9iakNvbmZpZy5tb250aHNMaXN0ID0gWy4uLm9iakNvbmZpZy5tb250aHNMaXN0XTtcblxuICAgIG9iakNvbmZpZy53ZWVrc0xpc3QgPSBjb25maWcud2Vla3NMaXN0ID8gY29uZmlnLndlZWtzTGlzdCA6IHRoaXMud2Vla3NMaXN0O1xuICAgIG9iakNvbmZpZy53ZWVrc0xpc3QgPSBbLi4ub2JqQ29uZmlnLndlZWtzTGlzdF07XG5cbiAgICBvYmpDb25maWcuZGF0ZUZvcm1hdCA9IGNvbmZpZy5kYXRlRm9ybWF0ID8gY29uZmlnLmRhdGVGb3JtYXQgOiAnREQgTU1NIFlZWVknO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWREYXRlLmRhdGUsIG9iakNvbmZpZy5kYXRlRm9ybWF0LCBtb21lbnQubG9jYWxlKCkpO1xuXG4gICAgb2JqQ29uZmlnLmNsZWFyQnV0dG9uID0gY29uZmlnLmNsZWFyQnV0dG9uID8gY29uZmlnLmNsZWFyQnV0dG9uIDogZmFsc2U7XG5cbiAgICBvYmpDb25maWcueWVhckluQXNjZW5kaW5nID0gY29uZmlnLnllYXJJbkFzY2VuZGluZyA/IGNvbmZpZy55ZWFySW5Bc2NlbmRpbmcgOiBmYWxzZTtcbiAgICBvYmpDb25maWcubW9tZW50TG9jYWxlID0gY29uZmlnLm1vbWVudExvY2FsZSA/IGNvbmZpZy5tb21lbnRMb2NhbGUgOiAnZW4tVVMnO1xuXG4gICAgbW9tZW50LmxvY2FsZShvYmpDb25maWcubW9tZW50TG9jYWxlKTtcbiAgICBvYmpDb25maWcuaW5wdXREYXRlID0gdGhpcy5zZWxlY3RlZERhdGUuZGF0ZSA/IG1vbWVudCh0aGlzLnNlbGVjdGVkRGF0ZS5kYXRlLCBvYmpDb25maWcuZGF0ZUZvcm1hdCkudG9EYXRlKCkgOiBuZXcgRGF0ZSgpO1xuXG4gICAgb2JqQ29uZmlnLmJ0bkNsb3NlU2V0SW5SZXZlcnNlID0gY29uZmlnLmJ0bkNsb3NlU2V0SW5SZXZlcnNlID8gY29uZmlnLmJ0bkNsb3NlU2V0SW5SZXZlcnNlIDogZmFsc2U7XG5cbiAgICBvYmpDb25maWcuYnRuUHJvcGVydGllcyA9IHt9O1xuICAgIGlmIChjb25maWcuYnRuUHJvcGVydGllcykge1xuICAgICAgY29uc3QgYnRuUHJvcGVydGllcyA9IGNvbmZpZy5idG5Qcm9wZXJ0aWVzO1xuICAgICAgb2JqQ29uZmlnLmJ0blByb3BlcnRpZXMuZXhwYW5kID0gYnRuUHJvcGVydGllcy5leHBhbmQgPyBidG5Qcm9wZXJ0aWVzLmV4cGFuZCA6ICdibG9jayc7XG4gICAgICBvYmpDb25maWcuYnRuUHJvcGVydGllcy5maWxsID0gYnRuUHJvcGVydGllcy5maWxsID8gYnRuUHJvcGVydGllcy5maWxsIDogJ3NvbGlkJztcbiAgICAgIG9iakNvbmZpZy5idG5Qcm9wZXJ0aWVzLnNpemUgPSBidG5Qcm9wZXJ0aWVzLnNpemUgPyBidG5Qcm9wZXJ0aWVzLnNpemUgOiAnZGVmYXVsdCc7XG4gICAgICBvYmpDb25maWcuYnRuUHJvcGVydGllcy5jb2xvciA9IGJ0blByb3BlcnRpZXMuY29sb3IgPyBidG5Qcm9wZXJ0aWVzLmNvbG9yIDogJyc7XG4gICAgICBvYmpDb25maWcuYnRuUHJvcGVydGllcy5kaXNhYmxlZCA9IGJ0blByb3BlcnRpZXMuZGlzYWJsZWQgPyBidG5Qcm9wZXJ0aWVzLmRpc2FibGVkIDogZmFsc2U7XG4gICAgICBvYmpDb25maWcuYnRuUHJvcGVydGllcy5zdHJvbmcgPSBidG5Qcm9wZXJ0aWVzLnN0cm9uZyA/IGJ0blByb3BlcnRpZXMuc3Ryb25nIDogZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iakNvbmZpZy5idG5Qcm9wZXJ0aWVzLmV4cGFuZCA9ICdibG9jayc7XG4gICAgICBvYmpDb25maWcuYnRuUHJvcGVydGllcy5maWxsID0gJ3NvbGlkJztcbiAgICAgIG9iakNvbmZpZy5idG5Qcm9wZXJ0aWVzLnNpemUgPSAnZGVmYXVsdCc7XG4gICAgICBvYmpDb25maWcuYnRuUHJvcGVydGllcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgb2JqQ29uZmlnLmJ0blByb3BlcnRpZXMuc3Ryb25nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb2JqQ29uZmlnLmFycm93TmV4dFByZXYgPSB7fTtcbiAgICBpZiAoY29uZmlnLmFycm93TmV4dFByZXYpIHtcbiAgICAgIGNvbnN0IGFycm93TmV4dFByZXYgPSBjb25maWcuYXJyb3dOZXh0UHJldjtcbiAgICAgIG9iakNvbmZpZy5hcnJvd05leHRQcmV2Lm5leHRBcnJvd1NyYyA9IGFycm93TmV4dFByZXYubmV4dEFycm93U3JjID8gYXJyb3dOZXh0UHJldi5uZXh0QXJyb3dTcmMgOiBmYWxzZTtcbiAgICAgIG9iakNvbmZpZy5hcnJvd05leHRQcmV2LnByZXZBcnJvd1NyYyA9IGFycm93TmV4dFByZXYucHJldkFycm93U3JjID8gYXJyb3dOZXh0UHJldi5wcmV2QXJyb3dTcmMgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBvYmpDb25maWcuaGlnaGxpZ2h0ZWREYXRlcyA9IFtdO1xuICAgIGlmIChjb25maWcuaGlnaGxpZ2h0ZWREYXRlcyAmJiBjb25maWcuaGlnaGxpZ2h0ZWREYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICBvYmpDb25maWcuaGlnaGxpZ2h0ZWREYXRlcyA9IGNvbmZpZy5oaWdobGlnaHRlZERhdGVzO1xuXG4gICAgICB0aGlzLnNldEhpZ2h0bGlnaHRlZERhdGVzKG9iakNvbmZpZyk7XG4gICAgfVxuXG4gICAgb2JqQ29uZmlnLmlzU3VuZGF5SGlnaGxpZ2h0ZWQgPSB7fTtcbiAgICBpZiAoY29uZmlnLmlzU3VuZGF5SGlnaGxpZ2h0ZWQpIHtcbiAgICAgIGNvbnN0IGlzU3VuZGF5SGlnaGxpZ2h0ZWQgPSBjb25maWcuaXNTdW5kYXlIaWdobGlnaHRlZDtcbiAgICAgIG9iakNvbmZpZy5pc1N1bmRheUhpZ2hsaWdodGVkLmZvbnRDb2xvciA9IGlzU3VuZGF5SGlnaGxpZ2h0ZWQuZm9udENvbG9yID8gaXNTdW5kYXlIaWdobGlnaHRlZC5mb250Q29sb3IgOiBudWxsO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKCdjb25maWcgPT4nLCBvYmpDb25maWcpO1xuICAgIHJldHVybiBvYmpDb25maWc7XG4gIH1cblxuICAvLyBGb3JtYXQgZGF0ZVxuICBmb3JtYXREYXRlKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdmb3JtYXREYXRlOiAnLCB0aGlzLnNlbGN0ZWREYXRlRXBvY2gsIG5ldyBEYXRlKHRoaXMuc2VsY3RlZERhdGVFcG9jaCkpO1xuICAgIHJldHVybiBtb21lbnQodGhpcy5zZWxjdGVkRGF0ZUVwb2NoKS5mb3JtYXQodGhpcy5tYWluT2JqLmRhdGVGb3JtYXQpO1xuICB9XG59XG5cbiJdfQ==