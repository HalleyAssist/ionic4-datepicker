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
export class LiIonic4DatepickerDirective {
    /**
     * @param {?} modalCtrl
     * @param {?} ngModel
     * @param {?} control
     * @param {?} el
     * @param {?} renderer2
     * @param {?} datePickerService
     */
    constructor(modalCtrl, ngModel, control, el, renderer2, datePickerService) {
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
    ngOnInit() {
        // console.log('config.yearInAscending : ' + this.inputDateConfig.yearInAscending);
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
            (event) => {
                // Do something with 'event'
                // console.log('button clicks');
                this.selectedDate.date = new Date();
                this.control.control.setValue('');
                this.ngModel.update.emit('');
            }));
        }
        /** @type {?} */
        const self = this;
        this.ngModel.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            // console.log('ngModel value =>', value);
            self.selectedDate.date = value;
            if (this.inputDateConfig.clearButton !== false) {
                if (!value) {
                    this.closeIcon.style.visibility = 'hidden';
                }
                else {
                    this.closeIcon.style.visibility = 'visible';
                }
            }
        }));
        this.control.control.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            // console.log('formcontrol value =>', value);
            self.selectedDate.date = value;
            if (this.inputDateConfig.clearButton !== false) {
                if (!value) {
                    this.closeIcon.style.visibility = 'hidden';
                }
                else {
                    this.closeIcon.style.visibility = 'visible';
                }
            }
        }));
        if (this.control.control.value) {
            this.selectedDate.date = this.control.control.value;
        }
    }
    /**
     * @return {?}
     */
    onFocus() {
        if (this.datePickerService.isModalOpen) {
            return;
        }
        this.openDatePicker();
    }
    /**
     * @return {?}
     */
    openDatePicker() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // console.log('openDatePicker');
            // console.log('openDatePicker');
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
                if (data.data && data.data.date && data.data.date !== 'Invalid date') {
                    this.selectedDate.date = data.data.date;
                    this.control.control.setValue(data.data.date);
                    this.ngModel.update.emit(data.data.date);
                }
            }));
        });
    }
}
LiIonic4DatepickerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[liIonic4Datepicker]',
                exportAs: 'liIonic4Datepicker',
                providers: [NgModel],
            },] }
];
/** @nocollapse */
LiIonic4DatepickerDirective.ctorParameters = () => [
    { type: ModalController },
    { type: NgModel },
    { type: NgControl },
    { type: ElementRef },
    { type: Renderer2 },
    { type: Ionic4DatepickerService }
];
LiIonic4DatepickerDirective.propDecorators = {
    inputDateConfig: [{ type: Input, args: ['liIonic4Datepicker',] }],
    onFocus: [{ type: HostListener, args: ['ionFocus',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGktaW9uaWM0LWRhdGVwaWNrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdvb2dscHJveGVyL2lvbmljNS1kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2xpLWlvbmljNC1kYXRlcGlja2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDN0csT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdwRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQU90RSxNQUFNLE9BQU8sMkJBQTJCOzs7Ozs7Ozs7SUFRdEMsWUFDVSxTQUEwQixFQUMzQixPQUFnQixFQUNoQixPQUFrQixFQUNsQixFQUFjLEVBQ2QsU0FBb0IsRUFDcEIsaUJBQTBDO1FBTHpDLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBQzNCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUNsQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQXlCO1FBVG5ELGlCQUFZLEdBQVEsRUFBRSxDQUFDO1FBQ3ZCLGdCQUFXLEdBQVEsS0FBSyxDQUFDO0lBU3JCLENBQUM7Ozs7SUFFTCxRQUFRO1FBQ04sbUZBQW1GO1FBRW5GLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEtBQUssS0FBSyxFQUFFO1lBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFD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QUFDO0tBQUE7OztZQXhHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDO2FBQ3JCOzs7O1lBWFEsZUFBZTtZQUVmLE9BQU87WUFBRSxTQUFTO1lBSHNCLFVBQVU7WUFBRSxTQUFTO1lBTTdELHVCQUF1Qjs7OzhCQVM3QixLQUFLLFNBQUMsb0JBQW9CO3NCQXVFMUIsWUFBWSxTQUFDLFVBQVU7Ozs7SUF2RXhCLHNEQUFrRDs7SUFFbEQsZ0RBQVU7O0lBQ1YsbURBQXVCOztJQUN2QixrREFBeUI7Ozs7O0lBR3ZCLGdEQUFrQzs7SUFDbEMsOENBQXVCOztJQUN2Qiw4Q0FBeUI7O0lBQ3pCLHlDQUFxQjs7SUFDckIsZ0RBQTJCOztJQUMzQix3REFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbENvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBJb25pYzREYXRlcGlja2VyTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2lvbmljNC1kYXRlcGlja2VyLW1vZGFsL2lvbmljNC1kYXRlcGlja2VyLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ01vZGVsLCBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IElvbmljNERhdGVwaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9pb25pYzQtZGF0ZXBpY2tlci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2xpSW9uaWM0RGF0ZXBpY2tlcl0nLFxuICBleHBvcnRBczogJ2xpSW9uaWM0RGF0ZXBpY2tlcicsXG4gIHByb3ZpZGVyczogW05nTW9kZWxdLFxufSlcbmV4cG9ydCBjbGFzcyBMaUlvbmljNERhdGVwaWNrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgnbGlJb25pYzREYXRlcGlja2VyJykgaW5wdXREYXRlQ29uZmlnOiBhbnk7XG5cbiAgY2xvc2VJY29uO1xuICBzZWxlY3RlZERhdGU6IGFueSA9IHt9O1xuICBpc01vZGFsT3BlbjogYW55ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcixcbiAgICBwdWJsaWMgbmdNb2RlbDogTmdNb2RlbCxcbiAgICBwdWJsaWMgY29udHJvbDogTmdDb250cm9sLFxuICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgcmVuZGVyZXIyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIGRhdGVQaWNrZXJTZXJ2aWNlOiBJb25pYzREYXRlcGlja2VyU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjb25maWcueWVhckluQXNjZW5kaW5nIDogJyArIHRoaXMuaW5wdXREYXRlQ29uZmlnLnllYXJJbkFzY2VuZGluZyk7XG5cbiAgICBpZiAodGhpcy5pbnB1dERhdGVDb25maWcuY2xlYXJCdXR0b24gIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmNsb3NlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lvbi1pY29uJyk7XG4gICAgICB0aGlzLmNsb3NlSWNvbi5uYW1lID0gJ2Nsb3NlLWNpcmNsZSc7XG4gICAgICB0aGlzLmNsb3NlSWNvbi5jbGFzc05hbWUgPSAnY2xlYXJCdXR0b24nO1xuICAgICAgdGhpcy5jbG9zZUljb24uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgdGhpcy5jbG9zZUljb24uc3R5bGUucmlnaHQgPSAnOHB4JztcbiAgICAgIHRoaXMuY2xvc2VJY29uLnN0eWxlLmJvdHRvbSA9ICczMCUnO1xuICAgICAgdGhpcy5jbG9zZUljb24uc3R5bGUuZm9udFNpemUgPSAnMThweCc7XG4gICAgICB0aGlzLmNsb3NlSWNvbi5zdHlsZS5jb2xvciA9ICcjQTlBOUE5JztcbiAgICAgIHRoaXMuY2xvc2VJY29uLnN0eWxlLnpJbmRleCA9ICc1JztcbiAgICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5ub2RlTmFtZSA9PT0gJ0lPTi1JVEVNJykge1xuICAgICAgICB0aGlzLmNsb3NlSWNvbi5zdHlsZS5ib3R0b20gPSAnMTJweCc7XG4gICAgICB9XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNsb3NlSWNvbik7XG4gICAgICB0aGlzLnJlbmRlcmVyMi5saXN0ZW4odGhpcy5jbG9zZUljb24sICdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCAnZXZlbnQnXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdidXR0b24gY2xpY2tzJyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlLmRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLmNvbnRyb2wuY29udHJvbC5zZXRWYWx1ZSgnJyk7XG4gICAgICAgIHRoaXMubmdNb2RlbC51cGRhdGUuZW1pdCgnJyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICB0aGlzLm5nTW9kZWwudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCduZ01vZGVsIHZhbHVlID0+JywgdmFsdWUpO1xuICAgICAgc2VsZi5zZWxlY3RlZERhdGUuZGF0ZSA9IHZhbHVlO1xuICAgICAgaWYgKHRoaXMuaW5wdXREYXRlQ29uZmlnLmNsZWFyQnV0dG9uICE9PSBmYWxzZSkge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZUljb24uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2xvc2VJY29uLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuY29udHJvbC5jb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZm9ybWNvbnRyb2wgdmFsdWUgPT4nLCB2YWx1ZSk7XG4gICAgICBzZWxmLnNlbGVjdGVkRGF0ZS5kYXRlID0gdmFsdWU7XG4gICAgICBpZiAodGhpcy5pbnB1dERhdGVDb25maWcuY2xlYXJCdXR0b24gIT09IGZhbHNlKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlSWNvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jbG9zZUljb24uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuY29udHJvbC5jb250cm9sLnZhbHVlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRGF0ZS5kYXRlID0gdGhpcy5jb250cm9sLmNvbnRyb2wudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW9uRm9jdXMnKVxuICBwdWJsaWMgb25Gb2N1cygpIHtcbiAgICBpZiAodGhpcy5kYXRlUGlja2VyU2VydmljZS5pc01vZGFsT3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm9wZW5EYXRlUGlja2VyKCk7XG4gIH1cblxuICBhc3luYyBvcGVuRGF0ZVBpY2tlcigpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb3BlbkRhdGVQaWNrZXInKTtcblxuICAgIGNvbnN0IGRhdGVQaWNrZXJNb2RhbCA9IGF3YWl0IHRoaXMubW9kYWxDdHJsLmNyZWF0ZSh7XG4gICAgICBjb21wb25lbnQ6IElvbmljNERhdGVwaWNrZXJNb2RhbENvbXBvbmVudCxcbiAgICAgIGNzc0NsYXNzOiAnbGktaW9uaWM0LWRhdGVQaWNrZXInLFxuICAgICAgY29tcG9uZW50UHJvcHM6IHsgJ29iakNvbmZpZyc6IHRoaXMuaW5wdXREYXRlQ29uZmlnLCAnc2VsZWN0ZWREYXRlJzogdGhpcy5zZWxlY3RlZERhdGUuZGF0ZSB9XG4gICAgfSk7XG4gICAgYXdhaXQgZGF0ZVBpY2tlck1vZGFsLnByZXNlbnQoKTtcblxuICAgIGRhdGVQaWNrZXJNb2RhbC5vbkRpZERpc21pc3MoKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEuZGF0YSAmJiBkYXRhLmRhdGEuZGF0ZSAmJiBkYXRhLmRhdGEuZGF0ZSAhPT0gJ0ludmFsaWQgZGF0ZScpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZS5kYXRlID0gZGF0YS5kYXRhLmRhdGU7XG4gICAgICAgICAgdGhpcy5jb250cm9sLmNvbnRyb2wuc2V0VmFsdWUoZGF0YS5kYXRhLmRhdGUpO1xuICAgICAgICAgIHRoaXMubmdNb2RlbC51cGRhdGUuZW1pdChkYXRhLmRhdGEuZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG59XG5cbiJdfQ==