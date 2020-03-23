/**
 * @fileoverview added by tsickle
 * Generated from: lib/li-ionic4-datepicker.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Ionic4DatepickerModalComponent } from './ionic4-datepicker-modal/ionic4-datepicker-modal.component';
import { NgModel, NgControl } from '@angular/forms';
import { Ionic4DatepickerService } from './ionic4-datepicker.service';
var LiIonic4DatepickerDirective = /** @class */ (function () {
    function LiIonic4DatepickerDirective(modalCtrl, ngModel, control, el, renderer2, datePickerService) {
        this.modalCtrl = modalCtrl;
        this.ngModel = ngModel;
        this.control = control;
        this.el = el;
        this.renderer2 = renderer2;
        this.datePickerService = datePickerService;
        this.selectedDate = {};
        this.isModalOpen = false;
    }
    /**
     * @return {?}
     */
    LiIonic4DatepickerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // console.log('config.yearInAscending : ' + this.inputDateConfig.yearInAscending);
        var _this = this;
        if (this.inputDateConfig.clearButton !== false) {
            this.closeIcon = document.createElement('ion-icon');
            this.closeIcon.name = 'close-circle';
            this.closeIcon.className = 'clearButton';
            this.closeIcon.style.position = 'absolute';
            this.closeIcon.style.right = '8px';
            this.closeIcon.style.bottom = '30%';
            this.closeIcon.style.fontSize = '18px';
            this.closeIcon.style.color = '#A9A9A9';
            this.closeIcon.style.zIndex = '5';
            if (this.el.nativeElement.parentNode.nodeName === 'ION-ITEM') {
                this.closeIcon.style.bottom = '12px';
            }
            this.el.nativeElement.parentNode.appendChild(this.closeIcon);
            this.renderer2.listen(this.closeIcon, 'click', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                // Do something with 'event'
                // console.log('button clicks');
                _this.selectedDate.date = new Date();
                _this.control.control.setValue('');
                _this.ngModel.update.emit('');
            }));
        }
        /** @type {?} */
        var self = this;
        this.ngModel.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // console.log('ngModel value =>', value);
            self.selectedDate.date = value;
            if (_this.inputDateConfig.clearButton !== false) {
                if (!value) {
                    _this.closeIcon.style.visibility = 'hidden';
                }
                else {
                    _this.closeIcon.style.visibility = 'visible';
                }
            }
        }));
        this.control.control.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // console.log('formcontrol value =>', value);
            self.selectedDate.date = value;
            if (_this.inputDateConfig.clearButton !== false) {
                if (!value) {
                    _this.closeIcon.style.visibility = 'hidden';
                }
                else {
                    _this.closeIcon.style.visibility = 'visible';
                }
            }
        }));
        if (this.control.control.value) {
            this.selectedDate.date = this.control.control.value;
        }
    };
    /**
     * @return {?}
     */
    LiIonic4DatepickerDirective.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        if (this.datePickerService.isModalOpen) {
            return;
        }
        this.openDatePicker();
    };
    /**
     * @return {?}
     */
    LiIonic4DatepickerDirective.prototype.openDatePicker = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var datePickerModal;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // console.log('openDatePicker');
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: Ionic4DatepickerModalComponent,
                                cssClass: 'li-ionic4-datePicker',
                                componentProps: { 'objConfig': this.inputDateConfig, 'selectedDate': this.selectedDate.date }
                            })];
                    case 1:
                        datePickerModal = _a.sent();
                        return [4 /*yield*/, datePickerModal.present()];
                    case 2:
                        _a.sent();
                        datePickerModal.onDidDismiss()
                            .then((/**
                         * @param {?} data
                         * @return {?}
                         */
                        function (data) {
                            if (data.data && data.data.date && data.data.date !== 'Invalid date') {
                                _this.selectedDate.date = data.data.date;
                                _this.control.control.setValue(data.data.date);
                                _this.ngModel.update.emit(data.data.date);
                            }
                        }));
                        return [2 /*return*/];
                }
            });
        });
    };
    LiIonic4DatepickerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[liIonic4Datepicker]',
                    exportAs: 'liIonic4Datepicker',
                    providers: [NgModel],
                },] }
    ];
    /** @nocollapse */
    LiIonic4DatepickerDirective.ctorParameters = function () { return [
        { type: ModalController },
        { type: NgModel },
        { type: NgControl },
        { type: ElementRef },
        { type: Renderer2 },
        { type: Ionic4DatepickerService }
    ]; };
    LiIonic4DatepickerDirective.propDecorators = {
        inputDateConfig: [{ type: Input, args: ['liIonic4Datepicker',] }],
        onFocus: [{ type: HostListener, args: ['ionFocus',] }]
    };
    return LiIonic4DatepickerDirective;
}());
export { LiIonic4DatepickerDirective };
if (false) {
    /** @type {?} */
    LiIonic4DatepickerDirective.prototype.inputDateConfig;
    /** @type {?} */
    LiIonic4DatepickerDirective.prototype.closeIcon;
    /** @type {?} */
    LiIonic4DatepickerDirective.prototype.selectedDate;
    /** @type {?} */
    LiIonic4DatepickerDirective.prototype.isModalOpen;
    /**
     * @type {?}
     * @private
     */
    LiIonic4DatepickerDirective.prototype.modalCtrl;
    /** @type {?} */
    LiIonic4DatepickerDirective.prototype.ngModel;
    /** @type {?} */
    LiIonic4DatepickerDirective.prototype.control;
    /** @type {?} */
    LiIonic4DatepickerDirective.prototype.el;
    /** @type {?} */
    LiIonic4DatepickerDirective.prototype.renderer2;
    /** @type {?} */
    LiIonic4DatepickerDirective.prototype.datePickerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGktaW9uaWM0LWRhdGVwaWNrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdvb2dscHJveGVyL2lvbmljNS1kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2xpLWlvbmljNC1kYXRlcGlja2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDN0csT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdwRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RTtJQWFFLHFDQUNVLFNBQTBCLEVBQzNCLE9BQWdCLEVBQ2hCLE9BQWtCLEVBQ2xCLEVBQWMsRUFDZCxTQUFvQixFQUNwQixpQkFBMEM7UUFMekMsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBQ2xCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBeUI7UUFUbkQsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBUSxLQUFLLENBQUM7SUFTckIsQ0FBQzs7OztJQUVMLDhDQUFROzs7SUFBUjtRQUNFLG1GQUFtRjtRQURyRixpQkFzREM7UUFuREMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsS0FBSyxLQUFLLEVBQUU7WUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFB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Qzs7Ozs7S0FDTjs7Z0JBeEdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7aUJBQ3JCOzs7O2dCQVhRLGVBQWU7Z0JBRWYsT0FBTztnQkFBRSxTQUFTO2dCQUhzQixVQUFVO2dCQUFFLFNBQVM7Z0JBTTdELHVCQUF1Qjs7O2tDQVM3QixLQUFLLFNBQUMsb0JBQW9COzBCQXVFMUIsWUFBWSxTQUFDLFVBQVU7O0lBMkIxQixrQ0FBQztDQUFBLEFBekdELElBeUdDO1NBcEdZLDJCQUEyQjs7O0lBRXRDLHNEQUFrRDs7SUFFbEQsZ0RBQVU7O0lBQ1YsbURBQXVCOztJQUN2QixrREFBeUI7Ozs7O0lBR3ZCLGdEQUFrQzs7SUFDbEMsOENBQXVCOztJQUN2Qiw4Q0FBeUI7O0lBQ3pCLHlDQUFxQjs7SUFDckIsZ0RBQTJCOztJQUMzQix3REFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbENvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBJb25pYzREYXRlcGlja2VyTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2lvbmljNC1kYXRlcGlja2VyLW1vZGFsL2lvbmljNC1kYXRlcGlja2VyLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ01vZGVsLCBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IElvbmljNERhdGVwaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9pb25pYzQtZGF0ZXBpY2tlci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2xpSW9uaWM0RGF0ZXBpY2tlcl0nLFxuICBleHBvcnRBczogJ2xpSW9uaWM0RGF0ZXBpY2tlcicsXG4gIHByb3ZpZGVyczogW05nTW9kZWxdLFxufSlcbmV4cG9ydCBjbGFzcyBMaUlvbmljNERhdGVwaWNrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgnbGlJb25pYzREYXRlcGlja2VyJykgaW5wdXREYXRlQ29uZmlnOiBhbnk7XG5cbiAgY2xvc2VJY29uO1xuICBzZWxlY3RlZERhdGU6IGFueSA9IHt9O1xuICBpc01vZGFsT3BlbjogYW55ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcixcbiAgICBwdWJsaWMgbmdNb2RlbDogTmdNb2RlbCxcbiAgICBwdWJsaWMgY29udHJvbDogTmdDb250cm9sLFxuICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgcmVuZGVyZXIyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIGRhdGVQaWNrZXJTZXJ2aWNlOiBJb25pYzREYXRlcGlja2VyU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjb25maWcueWVhckluQXNjZW5kaW5nIDogJyArIHRoaXMuaW5wdXREYXRlQ29uZmlnLnllYXJJbkFzY2VuZGluZyk7XG5cbiAgICBpZiAodGhpcy5pbnB1dERhdGVDb25maWcuY2xlYXJCdXR0b24gIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmNsb3NlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lvbi1pY29uJyk7XG4gICAgICB0aGlzLmNsb3NlSWNvbi5uYW1lID0gJ2Nsb3NlLWNpcmNsZSc7XG4gICAgICB0aGlzLmNsb3NlSWNvbi5jbGFzc05hbWUgPSAnY2xlYXJCdXR0b24nO1xuICAgICAgdGhpcy5jbG9zZUljb24uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgdGhpcy5jbG9zZUljb24uc3R5bGUucmlnaHQgPSAnOHB4JztcbiAgICAgIHRoaXMuY2xvc2VJY29uLnN0eWxlLmJvdHRvbSA9ICczMCUnO1xuICAgICAgdGhpcy5jbG9zZUljb24uc3R5bGUuZm9udFNpemUgPSAnMThweCc7XG4gICAgICB0aGlzLmNsb3NlSWNvbi5zdHlsZS5jb2xvciA9ICcjQTlBOUE5JztcbiAgICAgIHRoaXMuY2xvc2VJY29uLnN0eWxlLnpJbmRleCA9ICc1JztcbiAgICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5ub2RlTmFtZSA9PT0gJ0lPTi1JVEVNJykge1xuICAgICAgICB0aGlzLmNsb3NlSWNvbi5zdHlsZS5ib3R0b20gPSAnMTJweCc7XG4gICAgICB9XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNsb3NlSWNvbik7XG4gICAgICB0aGlzLnJlbmRlcmVyMi5saXN0ZW4odGhpcy5jbG9zZUljb24sICdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCAnZXZlbnQnXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdidXR0b24gY2xpY2tzJyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlLmRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLmNvbnRyb2wuY29udHJvbC5zZXRWYWx1ZSgnJyk7XG4gICAgICAgIHRoaXMubmdNb2RlbC51cGRhdGUuZW1pdCgnJyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICB0aGlzLm5nTW9kZWwudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCduZ01vZGVsIHZhbHVlID0+JywgdmFsdWUpO1xuICAgICAgc2VsZi5zZWxlY3RlZERhdGUuZGF0ZSA9IHZhbHVlO1xuICAgICAgaWYgKHRoaXMuaW5wdXREYXRlQ29uZmlnLmNsZWFyQnV0dG9uICE9PSBmYWxzZSkge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZUljb24uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2xvc2VJY29uLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuY29udHJvbC5jb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZm9ybWNvbnRyb2wgdmFsdWUgPT4nLCB2YWx1ZSk7XG4gICAgICBzZWxmLnNlbGVjdGVkRGF0ZS5kYXRlID0gdmFsdWU7XG4gICAgICBpZiAodGhpcy5pbnB1dERhdGVDb25maWcuY2xlYXJCdXR0b24gIT09IGZhbHNlKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlSWNvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jbG9zZUljb24uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuY29udHJvbC5jb250cm9sLnZhbHVlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRGF0ZS5kYXRlID0gdGhpcy5jb250cm9sLmNvbnRyb2wudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW9uRm9jdXMnKVxuICBwdWJsaWMgb25Gb2N1cygpIHtcbiAgICBpZiAodGhpcy5kYXRlUGlja2VyU2VydmljZS5pc01vZGFsT3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm9wZW5EYXRlUGlja2VyKCk7XG4gIH1cblxuICBhc3luYyBvcGVuRGF0ZVBpY2tlcigpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb3BlbkRhdGVQaWNrZXInKTtcblxuICAgIGNvbnN0IGRhdGVQaWNrZXJNb2RhbCA9IGF3YWl0IHRoaXMubW9kYWxDdHJsLmNyZWF0ZSh7XG4gICAgICBjb21wb25lbnQ6IElvbmljNERhdGVwaWNrZXJNb2RhbENvbXBvbmVudCxcbiAgICAgIGNzc0NsYXNzOiAnbGktaW9uaWM0LWRhdGVQaWNrZXInLFxuICAgICAgY29tcG9uZW50UHJvcHM6IHsgJ29iakNvbmZpZyc6IHRoaXMuaW5wdXREYXRlQ29uZmlnLCAnc2VsZWN0ZWREYXRlJzogdGhpcy5zZWxlY3RlZERhdGUuZGF0ZSB9XG4gICAgfSk7XG4gICAgYXdhaXQgZGF0ZVBpY2tlck1vZGFsLnByZXNlbnQoKTtcblxuICAgIGRhdGVQaWNrZXJNb2RhbC5vbkRpZERpc21pc3MoKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEuZGF0YSAmJiBkYXRhLmRhdGEuZGF0ZSAmJiBkYXRhLmRhdGEuZGF0ZSAhPT0gJ0ludmFsaWQgZGF0ZScpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZS5kYXRlID0gZGF0YS5kYXRhLmRhdGU7XG4gICAgICAgICAgdGhpcy5jb250cm9sLmNvbnRyb2wuc2V0VmFsdWUoZGF0YS5kYXRhLmRhdGUpO1xuICAgICAgICAgIHRoaXMubmdNb2RlbC51cGRhdGUuZW1pdChkYXRhLmRhdGEuZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG59XG5cbiJdfQ==