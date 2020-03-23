/**
 * @fileoverview added by tsickle
 * Generated from: lib/ionic4-datepicker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, Input, ElementRef, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Ionic4DatepickerModalComponent } from './ionic4-datepicker-modal/ionic4-datepicker-modal.component';
import * as moment_ from 'moment';
/** @type {?} */
var moment = moment_;
/** @type {?} */
var noop = (/**
 * @return {?}
 */
function () {
});
var ɵ0 = noop;
/** @type {?} */
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return Ionic4DatepickerComponent; })),
    multi: true
};
var Ionic4DatepickerComponent = /** @class */ (function () {
    function Ionic4DatepickerComponent(modalCtrl, el, renderer2) {
        this.modalCtrl = modalCtrl;
        this.el = el;
        this.renderer2 = renderer2;
        this.selectedDate = {};
        this.innerValue = '';
        // Placeholders for the callbacks which are later provided
        // by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    /**
     * @return {?}
     */
    Ionic4DatepickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.inputDateConfig.clearButton !== false) {
            this.closeIcon = document.createElement('ion-icon');
            this.closeIcon.name = 'close-circle';
            this.closeIcon.className = 'clearButton';
            this.closeIcon.style.position = 'absolute';
            this.closeIcon.style.right = '8px';
            this.closeIcon.style.bottom = '0px';
            this.closeIcon.style.fontSize = '18px';
            this.closeIcon.style.color = '#A9A9A9';
            this.closeIcon.style.zIndex = '5';
            if (this.el.nativeElement.parentNode.nodeName === 'ION-ITEM') {
                this.closeIcon.style.bottom = '30%';
            }
            this.el.nativeElement.setAttribute('style', 'position: relative; width: 100%;');
            this.el.nativeElement.appendChild(this.closeIcon);
            this.renderer2.listen(this.closeIcon, 'click', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                // Do something with 'event'
                // console.log('button clicks');
                _this.selectedDate = new Date();
                _this.value = '';
            }));
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    Ionic4DatepickerComponent.prototype.onChangeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // console.log('onChangeValue =>' , value);
        if (this.inputDateConfig.clearButton !== false) {
            if (!value) {
                this.closeIcon.style.visibility = 'hidden';
            }
            else {
                this.closeIcon.style.visibility = 'visible';
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    Ionic4DatepickerComponent.prototype.openDatePicker = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var datePickerModal;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // console.log('openDatePicker');
                        if (value) {
                            this.selectedDate.date = value;
                        }
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
                            // console.log(data);
                            if (data.data && data.data.date && data.data.date !== 'Invalid date') {
                                _this.selectedDate.date = data.data.date;
                                _this.value = data.data.date;
                            }
                        }));
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(Ionic4DatepickerComponent.prototype, "value", {
        // get accessor
        get: 
        // get accessor
        /**
         * @return {?}
         */
        function () {
            return this.innerValue;
        },
        // set accessor including call the onchange callback
        set: 
        // set accessor including call the onchange callback
        /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
            this.onChangeValue(v);
        },
        enumerable: true,
        configurable: true
    });
    // Set touched on blur
    // Set touched on blur
    /**
     * @return {?}
     */
    Ionic4DatepickerComponent.prototype.onBlur = 
    // Set touched on blur
    /**
     * @return {?}
     */
    function () {
        this.onTouchedCallback();
    };
    // From ControlValueAccessor interface
    // From ControlValueAccessor interface
    /**
     * @param {?} value
     * @return {?}
     */
    Ionic4DatepickerComponent.prototype.writeValue = 
    // From ControlValueAccessor interface
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
        this.onChangeValue(value);
    };
    // From ControlValueAccessor interface
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    Ionic4DatepickerComponent.prototype.registerOnChange = 
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    // From ControlValueAccessor interface
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    Ionic4DatepickerComponent.prototype.registerOnTouched = 
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    Ionic4DatepickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'li-ionic4-datepicker',
                    template: "<input type=\"text\" class=\"li-dp-input\" (focus)=\"$event.preventDefault()\" (click)=\"openDatePicker(value)\" readonly\n    [(ngModel)]=\"value\" start />",
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    styles: [":host input{font-size:16px;margin:6px 0;border:0;border-bottom:1px solid #ccc;width:100%;padding:12px}@media (min-width:768px){:host input{font-size:18px}}:host input.has-focus,:host input:focus{outline:0;box-shadow:unset}"]
                }] }
    ];
    /** @nocollapse */
    Ionic4DatepickerComponent.ctorParameters = function () { return [
        { type: ModalController },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    Ionic4DatepickerComponent.propDecorators = {
        inputDateConfig: [{ type: Input }]
    };
    return Ionic4DatepickerComponent;
}());
export { Ionic4DatepickerComponent };
if (false) {
    /** @type {?} */
    Ionic4DatepickerComponent.prototype.inputDateConfig;
    /** @type {?} */
    Ionic4DatepickerComponent.prototype.closeIcon;
    /** @type {?} */
    Ionic4DatepickerComponent.prototype.selectedDate;
    /**
     * @type {?}
     * @private
     */
    Ionic4DatepickerComponent.prototype.innerValue;
    /**
     * @type {?}
     * @private
     */
    Ionic4DatepickerComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    Ionic4DatepickerComponent.prototype.onChangeCallback;
    /**
     * @type {?}
     * @private
     */
    Ionic4DatepickerComponent.prototype.modalCtrl;
    /** @type {?} */
    Ionic4DatepickerComponent.prototype.el;
    /** @type {?} */
    Ionic4DatepickerComponent.prototype.renderer2;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWM0LWRhdGVwaWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdvb2dscHJveGVyL2lvbmljNS1kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2lvbmljNC1kYXRlcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUUsaUJBQWlCLEVBQWlDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQzdHLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOztJQUU1QixNQUFNLEdBQUcsT0FBTzs7SUFFaEIsSUFBSTs7O0FBQUc7QUFDYixDQUFDLENBQUE7OztBQUVELE1BQU0sS0FBTyxtQ0FBbUMsR0FBUTtJQUN0RCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEseUJBQXlCLEVBQXpCLENBQXlCLEVBQUM7SUFDeEQsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQUNEO0lBbUJFLG1DQUNVLFNBQTBCLEVBQzNCLEVBQWMsRUFDZCxTQUFvQjtRQUZuQixjQUFTLEdBQVQsU0FBUyxDQUFpQjtRQUMzQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsY0FBUyxHQUFULFNBQVMsQ0FBVztRQVg3QixpQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUNmLGVBQVUsR0FBUSxFQUFFLENBQUM7OztRQUlyQixzQkFBaUIsR0FBZSxJQUFJLENBQUM7UUFDckMscUJBQWdCLEdBQXFCLElBQUksQ0FBQztJQU05QyxDQUFDOzs7O0lBRUwsNENBQVE7OztJQUFSO1FBQUEsaUJBMkJDO1FBekJDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEtBQUssS0FBSyxFQUFFO1lBRTlDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7WUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7WUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7WUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBRWxDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFFBQVEsS0FBSyxVQUFVLEVBQUU7Z0JBQzVELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDckM7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGtDQUFrQyxDQUFDLENBQUM7WUFDaEYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUVsRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU87Ozs7WUFBRSxVQUFDLEtBQUs7Z0JBQ25ELDRCQUE0QjtnQkFDNUIsZ0NBQWdDO2dCQUNoQyxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUVELGlEQUFhOzs7O0lBQWIsVUFBYyxLQUFLO1FBQ2pCLDJDQUEyQztRQUMzQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxLQUFLLEtBQUssRUFBRTtZQUM5QyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7YUFDNUM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQzthQUM3QztTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFSyxrREFBYzs7OztJQUFwQixVQUFxQixLQUFLOzs7Ozs7O3dCQUN4QixpQ0FBaUM7d0JBQ2pDLElBQUksS0FBSyxFQUFFOzRCQUNULElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQzt5QkFDaEM7d0JBRXVCLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO2dDQUNsRCxTQUFTLEVBQUUsOEJBQThCO2dDQUN6QyxRQUFRLEVBQUUsc0JBQXNCO2dDQUNoQyxjQUFjLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUc7NkJBQy9GLENBQUMsRUFBQTs7d0JBSkksZUFBZSxHQUFHLFNBSXRCO3dCQUNGLHFCQUFNLGVBQWUsQ0FBQyxPQUFPLEVBQUUsRUFBQTs7d0JBQS9CLFNBQStCLENBQUM7d0JBRWhDLGVBQWUsQ0FBQyxZQUFZLEVBQUU7NkJBQzNCLElBQUk7Ozs7d0JBQUMsVUFBQyxJQUFJOzRCQUNULHFCQUFxQjs0QkFDckIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLGNBQWMsRUFBRTtnQ0FDcEUsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0NBQ3hDLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7NkJBQzdCO3dCQUNILENBQUMsRUFBQyxDQUFDOzs7OztLQUNOO0lBR0Qsc0JBQUksNENBQUs7UUFEVCxlQUFlOzs7Ozs7UUFDZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDO1FBRUQsb0RBQW9EOzs7Ozs7O1FBQ3BELFVBQVUsQ0FBTTtZQUNkLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDMUI7WUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLENBQUM7OztPQVRBO0lBV0Qsc0JBQXNCOzs7OztJQUN0QiwwQ0FBTTs7Ozs7SUFBTjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxzQ0FBc0M7Ozs7OztJQUN0Qyw4Q0FBVTs7Ozs7O0lBQVYsVUFBVyxLQUFVO1FBQ25CLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxzQ0FBc0M7Ozs7OztJQUN0QyxvREFBZ0I7Ozs7OztJQUFoQixVQUFpQixFQUFPO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELHNDQUFzQzs7Ozs7O0lBQ3RDLHFEQUFpQjs7Ozs7O0lBQWpCLFVBQWtCLEVBQU87UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDOztnQkEzSEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLHlLQUFpRDtvQkFFakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7O2lCQUNqRDs7OztnQkFuQlEsZUFBZTtnQkFGdUIsVUFBVTtnQkFBRSxTQUFTOzs7a0NBd0JqRSxLQUFLOztJQW9IUixnQ0FBQztDQUFBLEFBNUhELElBNEhDO1NBdEhZLHlCQUF5Qjs7O0lBRXBDLG9EQUE4Qjs7SUFFOUIsOENBQVU7O0lBQ1YsaURBQXVCOzs7OztJQUN2QiwrQ0FBNkI7Ozs7O0lBSTdCLHNEQUE2Qzs7Ozs7SUFDN0MscURBQWtEOzs7OztJQUdoRCw4Q0FBa0M7O0lBQ2xDLHVDQUFxQjs7SUFDckIsOENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIGZvcndhcmRSZWYsIElucHV0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1vZGFsQ29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IElvbmljNERhdGVwaWNrZXJNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vaW9uaWM0LWRhdGVwaWNrZXItbW9kYWwvaW9uaWM0LWRhdGVwaWNrZXItbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcblxuY29uc3QgbW9tZW50ID0gbW9tZW50XztcblxuY29uc3Qgbm9vcCA9ICgpID0+IHtcbn07XG5cbmV4cG9ydCBjb25zdCBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW9uaWM0RGF0ZXBpY2tlckNvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGktaW9uaWM0LWRhdGVwaWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaW9uaWM0LWRhdGVwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pb25pYzQtZGF0ZXBpY2tlci5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgSW9uaWM0RGF0ZXBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIEBJbnB1dCgpIGlucHV0RGF0ZUNvbmZpZzogYW55O1xuXG4gIGNsb3NlSWNvbjtcbiAgc2VsZWN0ZWREYXRlOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBpbm5lclZhbHVlOiBhbnkgPSAnJztcblxuICAvLyBQbGFjZWhvbGRlcnMgZm9yIHRoZSBjYWxsYmFja3Mgd2hpY2ggYXJlIGxhdGVyIHByb3ZpZGVkXG4gIC8vIGJ5IHRoZSBDb250cm9sIFZhbHVlIEFjY2Vzc29yXG4gIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSBub29wO1xuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSBub29wO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXIsXG4gICAgcHVibGljIGVsOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyByZW5kZXJlcjI6IFJlbmRlcmVyMlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgaWYgKHRoaXMuaW5wdXREYXRlQ29uZmlnLmNsZWFyQnV0dG9uICE9PSBmYWxzZSkge1xuXG4gICAgICB0aGlzLmNsb3NlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lvbi1pY29uJyk7XG4gICAgICB0aGlzLmNsb3NlSWNvbi5uYW1lID0gJ2Nsb3NlLWNpcmNsZSc7XG4gICAgICB0aGlzLmNsb3NlSWNvbi5jbGFzc05hbWUgPSAnY2xlYXJCdXR0b24nO1xuICAgICAgdGhpcy5jbG9zZUljb24uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgdGhpcy5jbG9zZUljb24uc3R5bGUucmlnaHQgPSAnOHB4JztcbiAgICAgIHRoaXMuY2xvc2VJY29uLnN0eWxlLmJvdHRvbSA9ICcwcHgnO1xuICAgICAgdGhpcy5jbG9zZUljb24uc3R5bGUuZm9udFNpemUgPSAnMThweCc7XG4gICAgICB0aGlzLmNsb3NlSWNvbi5zdHlsZS5jb2xvciA9ICcjQTlBOUE5JztcbiAgICAgIHRoaXMuY2xvc2VJY29uLnN0eWxlLnpJbmRleCA9ICc1JztcblxuICAgICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLm5vZGVOYW1lID09PSAnSU9OLUlURU0nKSB7XG4gICAgICAgIHRoaXMuY2xvc2VJY29uLnN0eWxlLmJvdHRvbSA9ICczMCUnO1xuICAgICAgfVxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncG9zaXRpb246IHJlbGF0aXZlOyB3aWR0aDogMTAwJTsnKTtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNsb3NlSWNvbik7XG5cbiAgICAgIHRoaXMucmVuZGVyZXIyLmxpc3Rlbih0aGlzLmNsb3NlSWNvbiwgJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIERvIHNvbWV0aGluZyB3aXRoICdldmVudCdcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2J1dHRvbiBjbGlja3MnKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZVZhbHVlKHZhbHVlKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uQ2hhbmdlVmFsdWUgPT4nICwgdmFsdWUpO1xuICAgIGlmICh0aGlzLmlucHV0RGF0ZUNvbmZpZy5jbGVhckJ1dHRvbiAhPT0gZmFsc2UpIHtcbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgdGhpcy5jbG9zZUljb24uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbG9zZUljb24uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBvcGVuRGF0ZVBpY2tlcih2YWx1ZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvcGVuRGF0ZVBpY2tlcicpO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zZWxlY3RlZERhdGUuZGF0ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGVQaWNrZXJNb2RhbCA9IGF3YWl0IHRoaXMubW9kYWxDdHJsLmNyZWF0ZSh7XG4gICAgICBjb21wb25lbnQ6IElvbmljNERhdGVwaWNrZXJNb2RhbENvbXBvbmVudCxcbiAgICAgIGNzc0NsYXNzOiAnbGktaW9uaWM0LWRhdGVQaWNrZXInLFxuICAgICAgY29tcG9uZW50UHJvcHM6IHsgJ29iakNvbmZpZyc6IHRoaXMuaW5wdXREYXRlQ29uZmlnLCAnc2VsZWN0ZWREYXRlJzogdGhpcy5zZWxlY3RlZERhdGUuZGF0ZSAgfVxuICAgIH0pO1xuICAgIGF3YWl0IGRhdGVQaWNrZXJNb2RhbC5wcmVzZW50KCk7XG5cbiAgICBkYXRlUGlja2VyTW9kYWwub25EaWREaXNtaXNzKClcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBpZiAoZGF0YS5kYXRhICYmIGRhdGEuZGF0YS5kYXRlICYmIGRhdGEuZGF0YS5kYXRlICE9PSAnSW52YWxpZCBkYXRlJykge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlLmRhdGUgPSBkYXRhLmRhdGEuZGF0ZTtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gZGF0YS5kYXRhLmRhdGU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgLy8gZ2V0IGFjY2Vzc29yXG4gIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmlubmVyVmFsdWU7XG4gIH1cblxuICAvLyBzZXQgYWNjZXNzb3IgaW5jbHVkaW5nIGNhbGwgdGhlIG9uY2hhbmdlIGNhbGxiYWNrXG4gIHNldCB2YWx1ZSh2OiBhbnkpIHtcbiAgICBpZiAodiAhPT0gdGhpcy5pbm5lclZhbHVlKSB7XG4gICAgICB0aGlzLmlubmVyVmFsdWUgPSB2O1xuICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHYpO1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlVmFsdWUodik7XG4gIH1cblxuICAvLyBTZXQgdG91Y2hlZCBvbiBibHVyXG4gIG9uQmx1cigpIHtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrKCk7XG4gIH1cblxuICAvLyBGcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuaW5uZXJWYWx1ZSkge1xuICAgICAgdGhpcy5pbm5lclZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2VWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICAvLyBGcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgfVxuXG4gIC8vIEZyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gIH1cbn1cbiJdfQ==