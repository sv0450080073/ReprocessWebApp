import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

import { MetricReprocessComponent } from './metric-reprocess/metric-reprocess.component';
import { RoleComponent } from './role/role.component';
import { AuthorizationCheck } from './Service/auth/authorizationCheck';
import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';
import { RoutingReprocessComponent } from './routing-reprocess/routing-reprocess.component';
import { ErrorCodeComponent } from 'src/app/error-code/error-code.component';

const routes: Routes = [

 { path: "", component: IndexComponent },
 { path: "MetricsReprocess", component: MetricReprocessComponent },
 { path: "Login", component: LoginComponent },
 { path: "login", component: LoginComponent },
 { path: "Login/Index", component: LoginComponent },
 { path: "User", component: UserComponent  },
 { path: "Role", component: RoleComponent },
  { path: "RoutingReprocess", component: RoutingReprocessComponent },
  { path: "ErrorCode", component: ErrorCodeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] , declarations:[]
})
export class AppRoutingModule { }

