import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClassComponent } from './class/class.component';
import { ToastrModule } from 'ngx-toastr';
import { LoaderComponent } from './loader/loader.component';
import { MetricReprocessComponent } from './metric-reprocess/metric-reprocess.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                AboutComponent,
                ClassComponent,
                LoaderComponent,
                MetricReprocessComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpClientModule,
                BrowserAnimationsModule,
                AppRoutingModule,
                ReactiveFormsModule,
                ToastrModule.forRoot({
                    timeOut: 1000,
                    positionClass: 'toast-top-right',
                    preventDuplicates: false,
                }),
            ],
            providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map