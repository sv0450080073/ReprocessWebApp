
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClassComponent } from './class/class.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { LoaderComponent } from './loader/loader.component';
import { MetricReprocessComponent } from './metric-reprocess/metric-reprocess.component';
import { LoginComponent } from './user/login/login.component';
import { IndexComponent } from './index/index.component';
import { UserComponent } from './user/user.component';
import { AddEditUserComponent } from './user/add_editUser/add-edit-user/add-edit-user.component';
import { RoleComponent } from './role/role.component';
import { AddEditRoleComponent } from './role/add_editRole/add-edit-role/add-edit-role.component';
import { ErrorInterceptor } from './Interceptor/ErrorInterceptor';
import { httpInterceptor } from './Interceptor/httpInterceptor';
import { UrlSerializer } from '@angular/router';
import { lowerCaseUrlSerializer } from './Url/LowerCaseUrlSerializer';
import { UniqueRoleValidatorDirective } from './Directive/unique-role-validator.directive';
import { RoutingReprocessComponent } from './routing-reprocess/routing-reprocess.component';
import { ErrorCodeComponent } from 'src/app/error-code/error-code.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ClassComponent,
    LoaderComponent,
    MetricReprocessComponent,
 LoginComponent,
 IndexComponent,
 UserComponent,
 AddEditUserComponent,
 RoleComponent,
 AddEditRoleComponent,
 UniqueRoleValidatorDirective,
    RoutingReprocessComponent,
    ErrorCodeComponent
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
      positionClass:'toast-top-right',
      preventDuplicates:false,
     }),
NgxPaginationModule

  ],
  providers: [ { provide: APP_BASE_HREF, useValue: "/" },
  //{ provide: UrlSerializer, useValue: lowerCaseUrlSerializer },
  { provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true }

 // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

],
  bootstrap: [AppComponent]
})
export class AppModule { }
