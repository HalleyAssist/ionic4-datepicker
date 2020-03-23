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
const moment = moment_;
/** @type {?} */
const noop = (/**
 * @return {?}
 */
() => {
});
const ɵ0 = noop;
/** @type {?} */
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => Ionic4DatepickerComponent)),
    multi: true
};
export class Ionic4DatepickerComponent {
    /**
     * @param {?} modalCtrl
     * @param {?} el
     * @param {?} renderer2
     */
    constructor(modalCtrl, el, renderer2) {
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
    ngOnInit() {
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
            (event) => {
                // Do something with 'event'
                // console.log('button clicks');
                this.selectedDate = new Date();
                this.value = '';
            }));
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onChangeValue(value) {
        // console.log('onChangeValue =>' , value);
        if (this.inputDateConfig.clearButton !== false) {
            if (!value) {
                this.closeIcon.style.visibility = 'hidden';
            }
            else {
                this.closeIcon.style.visibility = 'visible';
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    openDatePicker(value) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // console.log('openDatePicker');
            if (value) {
                this.selectedDate.date = value;
            }
            /** @type {?} */
            const datePickerModal = yield this.modalCtrl.create({
                component: Ionic4DatepickerModalComponent,
                cssClass: 'li-ionic4-datePicker',
                componentProps: { 'objConfig': this.inputDateConfig, 'selectedDate': this.selectedDate.date }
            });
            yield datePickerModal.present();
            datePickerModal.onDidDismiss()
                .then((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                // console.log(data);
                if (data.data && data.data.date && data.data.date !== 'Invalid date') {
                    this.selectedDate.date = data.data.date;
                    this.value = data.data.date;
                }
            }));
        });
    }
    // get accessor
    /**
     * @return {?}
     */
    get value() {
        return this.innerValue;
    }
    // set accessor including call the onchange callback
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
        this.onChangeValue(v);
    }
    // Set touched on blur
    /**
     * @return {?}
     */
    onBlur() {
        this.onTouchedCallback();
    }
    // From ControlValueAccessor interface
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
        this.onChangeValue(value);
    }
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
}
Ionic4DatepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'li-ionic4-datepicker',
                template: "<input type=\"text\" class=\"li-dp-input\" (focus)=\"$event.preventDefault()\" (click)=\"openDatePicker(value)\" readonly\n    [(ngModel)]=\"value\" start />",
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                styles: [":host input{font-size:16px;margin:6px 0;border:0;border-bottom:1px solid #ccc;width:100%;padding:12px}@media (min-width:768px){:host input{font-size:18px}}:host input.has-focus,:host input:focus{outline:0;box-shadow:unset}"]
            }] }
];
/** @nocollapse */
Ionic4DatepickerComponent.ctorParameters = () => [
    { type: ModalController },
    { type: ElementRef },
    { type: Renderer2 }
];
Ionic4DatepickerComponent.propDecorators = {
    inputDateConfig: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWM0LWRhdGVwaWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdvb2dscHJveGVyL2lvbmljNS1kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2lvbmljNC1kYXRlcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUUsaUJBQWlCLEVBQWlDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQzdHLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOztNQUU1QixNQUFNLEdBQUcsT0FBTzs7TUFFaEIsSUFBSTs7O0FBQUcsR0FBRyxFQUFFO0FBQ2xCLENBQUMsQ0FBQTs7O0FBRUQsTUFBTSxPQUFPLG1DQUFtQyxHQUFRO0lBQ3RELE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixFQUFDO0lBQ3hELEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFPRCxNQUFNLE9BQU8seUJBQXlCOzs7Ozs7SUFhcEMsWUFDVSxTQUEwQixFQUMzQixFQUFjLEVBQ2QsU0FBb0I7UUFGbkIsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFDM0IsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFYN0IsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFDZixlQUFVLEdBQVEsRUFBRSxDQUFDOzs7UUFJckIsc0JBQWlCLEdBQWUsSUFBSSxDQUFDO1FBQ3JDLHFCQUFnQixHQUFxQixJQUFJLENBQUM7SUFNOUMsQ0FBQzs7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Qyx5S0FBaUQ7Z0JBRWpELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDOzthQUNqRDs7OztZQW5CUSxlQUFlO1lBRnVCLFVBQVU7WUFBRSxTQUFTOzs7OEJBd0JqRSxLQUFLOzs7O0lBQU4sb0RBQThCOztJQUU5Qiw4Q0FBVTs7SUFDVixpREFBdUI7Ozs7O0lBQ3ZCLCtDQUE2Qjs7Ozs7SUFJN0Isc0RBQTZDOzs7OztJQUM3QyxxREFBa0Q7Ozs7O0lBR2hELDhDQUFrQzs7SUFDbEMsdUNBQXFCOztJQUNyQiw4Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgZm9yd2FyZFJlZiwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOZ01vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTW9kYWxDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgSW9uaWM0RGF0ZXBpY2tlck1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9pb25pYzQtZGF0ZXBpY2tlci1tb2RhbC9pb25pYzQtZGF0ZXBpY2tlci1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xuXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xuXG5jb25zdCBub29wID0gKCkgPT4ge1xufTtcblxuZXhwb3J0IGNvbnN0IENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJb25pYzREYXRlcGlja2VyQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWVcbn07XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaS1pb25pYzQtZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pb25pYzQtZGF0ZXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lvbmljNC1kYXRlcGlja2VyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW0NVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBJb25pYzREYXRlcGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgQElucHV0KCkgaW5wdXREYXRlQ29uZmlnOiBhbnk7XG5cbiAgY2xvc2VJY29uO1xuICBzZWxlY3RlZERhdGU6IGFueSA9IHt9O1xuICBwcml2YXRlIGlubmVyVmFsdWU6IGFueSA9ICcnO1xuXG4gIC8vIFBsYWNlaG9sZGVycyBmb3IgdGhlIGNhbGxiYWNrcyB3aGljaCBhcmUgbGF0ZXIgcHJvdmlkZWRcbiAgLy8gYnkgdGhlIENvbnRyb2wgVmFsdWUgQWNjZXNzb3JcbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9IG5vb3A7XG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IG5vb3A7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcixcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHJlbmRlcmVyMjogUmVuZGVyZXIyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICBpZiAodGhpcy5pbnB1dERhdGVDb25maWcuY2xlYXJCdXR0b24gIT09IGZhbHNlKSB7XG5cbiAgICAgIHRoaXMuY2xvc2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW9uLWljb24nKTtcbiAgICAgIHRoaXMuY2xvc2VJY29uLm5hbWUgPSAnY2xvc2UtY2lyY2xlJztcbiAgICAgIHRoaXMuY2xvc2VJY29uLmNsYXNzTmFtZSA9ICdjbGVhckJ1dHRvbic7XG4gICAgICB0aGlzLmNsb3NlSWNvbi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICB0aGlzLmNsb3NlSWNvbi5zdHlsZS5yaWdodCA9ICc4cHgnO1xuICAgICAgdGhpcy5jbG9zZUljb24uc3R5bGUuYm90dG9tID0gJzBweCc7XG4gICAgICB0aGlzLmNsb3NlSWNvbi5zdHlsZS5mb250U2l6ZSA9ICcxOHB4JztcbiAgICAgIHRoaXMuY2xvc2VJY29uLnN0eWxlLmNvbG9yID0gJyNBOUE5QTknO1xuICAgICAgdGhpcy5jbG9zZUljb24uc3R5bGUuekluZGV4ID0gJzUnO1xuXG4gICAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUubm9kZU5hbWUgPT09ICdJT04tSVRFTScpIHtcbiAgICAgICAgdGhpcy5jbG9zZUljb24uc3R5bGUuYm90dG9tID0gJzMwJSc7XG4gICAgICB9XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb3NpdGlvbjogcmVsYXRpdmU7IHdpZHRoOiAxMDAlOycpO1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY2xvc2VJY29uKTtcblxuICAgICAgdGhpcy5yZW5kZXJlcjIubGlzdGVuKHRoaXMuY2xvc2VJY29uLCAnY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gRG8gc29tZXRoaW5nIHdpdGggJ2V2ZW50J1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnYnV0dG9uIGNsaWNrcycpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlVmFsdWUodmFsdWUpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb25DaGFuZ2VWYWx1ZSA9PicgLCB2YWx1ZSk7XG4gICAgaWYgKHRoaXMuaW5wdXREYXRlQ29uZmlnLmNsZWFyQnV0dG9uICE9PSBmYWxzZSkge1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICB0aGlzLmNsb3NlSWNvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsb3NlSWNvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9wZW5EYXRlUGlja2VyKHZhbHVlKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29wZW5EYXRlUGlja2VyJyk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRGF0ZS5kYXRlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0ZVBpY2tlck1vZGFsID0gYXdhaXQgdGhpcy5tb2RhbEN0cmwuY3JlYXRlKHtcbiAgICAgIGNvbXBvbmVudDogSW9uaWM0RGF0ZXBpY2tlck1vZGFsQ29tcG9uZW50LFxuICAgICAgY3NzQ2xhc3M6ICdsaS1pb25pYzQtZGF0ZVBpY2tlcicsXG4gICAgICBjb21wb25lbnRQcm9wczogeyAnb2JqQ29uZmlnJzogdGhpcy5pbnB1dERhdGVDb25maWcsICdzZWxlY3RlZERhdGUnOiB0aGlzLnNlbGVjdGVkRGF0ZS5kYXRlICB9XG4gICAgfSk7XG4gICAgYXdhaXQgZGF0ZVBpY2tlck1vZGFsLnByZXNlbnQoKTtcblxuICAgIGRhdGVQaWNrZXJNb2RhbC5vbkRpZERpc21pc3MoKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIGlmIChkYXRhLmRhdGEgJiYgZGF0YS5kYXRhLmRhdGUgJiYgZGF0YS5kYXRhLmRhdGUgIT09ICdJbnZhbGlkIGRhdGUnKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUuZGF0ZSA9IGRhdGEuZGF0YS5kYXRlO1xuICAgICAgICAgIHRoaXMudmFsdWUgPSBkYXRhLmRhdGEuZGF0ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICAvLyBnZXQgYWNjZXNzb3JcbiAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJWYWx1ZTtcbiAgfVxuXG4gIC8vIHNldCBhY2Nlc3NvciBpbmNsdWRpbmcgY2FsbCB0aGUgb25jaGFuZ2UgY2FsbGJhY2tcbiAgc2V0IHZhbHVlKHY6IGFueSkge1xuICAgIGlmICh2ICE9PSB0aGlzLmlubmVyVmFsdWUpIHtcbiAgICAgIHRoaXMuaW5uZXJWYWx1ZSA9IHY7XG4gICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodik7XG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2VWYWx1ZSh2KTtcbiAgfVxuXG4gIC8vIFNldCB0b3VjaGVkIG9uIGJsdXJcbiAgb25CbHVyKCkge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIC8vIEZyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5pbm5lclZhbHVlKSB7XG4gICAgICB0aGlzLmlubmVyVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5vbkNoYW5nZVZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIC8vIEZyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgLy8gRnJvbSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgfVxufVxuIl19