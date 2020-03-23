/**
 * @fileoverview added by tsickle
 * Generated from: lib/ionic4-datepicker.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LiIonic4DatepickerDirective } from './li-ionic4-datepicker.directive';
import { Ionic4DatepickerModalComponent } from './ionic4-datepicker-modal/ionic4-datepicker-modal.component';
import { IonicModule } from '@ionic/angular';
import { Ionic4DatepickerComponent } from './ionic4-datepicker.component';
var Ionic4DatepickerModule = /** @class */ (function () {
    function Ionic4DatepickerModule() {
    }
    Ionic4DatepickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        IonicModule
                    ],
                    declarations: [
                        Ionic4DatepickerComponent,
                        LiIonic4DatepickerDirective,
                        Ionic4DatepickerModalComponent
                    ],
                    exports: [
                        Ionic4DatepickerComponent,
                        LiIonic4DatepickerDirective,
                        Ionic4DatepickerModalComponent,
                        CommonModule,
                        FormsModule
                    ],
                    entryComponents: [
                        // Ionic4DatepickerComponent,
                        Ionic4DatepickerModalComponent
                    ],
                    providers: []
                },] }
    ];
    return Ionic4DatepickerModule;
}());
export { Ionic4DatepickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWM0LWRhdGVwaWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdvb2dscHJveGVyL2lvbmljNS1kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2lvbmljNC1kYXRlcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFMUU7SUFBQTtJQTBCc0MsQ0FBQzs7Z0JBMUJ0QyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxXQUFXO3FCQUNaO29CQUNELFlBQVksRUFBRTt3QkFDWix5QkFBeUI7d0JBQ3pCLDJCQUEyQjt3QkFDM0IsOEJBQThCO3FCQUMvQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AseUJBQXlCO3dCQUN6QiwyQkFBMkI7d0JBQzNCLDhCQUE4Qjt3QkFDOUIsWUFBWTt3QkFDWixXQUFXO3FCQUNaO29CQUNELGVBQWUsRUFBRTt3QkFDZiw2QkFBNkI7d0JBQzdCLDhCQUE4QjtxQkFDL0I7b0JBQ0QsU0FBUyxFQUFFLEVBRVY7aUJBQ0Y7O0lBQ3FDLDZCQUFDO0NBQUEsQUExQnZDLElBMEJ1QztTQUExQixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTGlJb25pYzREYXRlcGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9saS1pb25pYzQtZGF0ZXBpY2tlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWM0RGF0ZXBpY2tlck1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9pb25pYzQtZGF0ZXBpY2tlci1tb2RhbC9pb25pYzQtZGF0ZXBpY2tlci1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBJb25pYzREYXRlcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9pb25pYzQtZGF0ZXBpY2tlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIElvbmljTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIElvbmljNERhdGVwaWNrZXJDb21wb25lbnQsXG4gICAgTGlJb25pYzREYXRlcGlja2VyRGlyZWN0aXZlLFxuICAgIElvbmljNERhdGVwaWNrZXJNb2RhbENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgSW9uaWM0RGF0ZXBpY2tlckNvbXBvbmVudCxcbiAgICBMaUlvbmljNERhdGVwaWNrZXJEaXJlY3RpdmUsXG4gICAgSW9uaWM0RGF0ZXBpY2tlck1vZGFsQ29tcG9uZW50LFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAvLyBJb25pYzREYXRlcGlja2VyQ29tcG9uZW50LFxuICAgIElvbmljNERhdGVwaWNrZXJNb2RhbENvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcblxuICBdXG59KVxuZXhwb3J0IGNsYXNzIElvbmljNERhdGVwaWNrZXJNb2R1bGUgeyB9XG4iXX0=