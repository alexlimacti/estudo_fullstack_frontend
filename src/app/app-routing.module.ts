import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginUserComponent } from "./components/login-user/login-user.component";
import { RegisterUserComponent } from "./components/register-user/register-user.component";
import { ResendRegistrationTokenComponent } from "./components/resend-registration-token/resend-registration-token.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { ListUserComponent } from "./components/list-user/list-user.component";
import { EditUserComponent } from "./components/edit-user/edit-user.component";
import { AuthGuard } from "./core/guards/auth.guard";
import { HomeComponent } from "./components/home/home.component";
import { VirtualTableComponent } from "./components/virtual-table/virtual-table.component";
import { DocumentComposeComponent } from "./components/document-compose/document-compose.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { UsersReportComponent } from './components/users-report/users-report.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginUserComponent },
  { path: "register-user", component: RegisterUserComponent },
  {
    path: "resend-register-token",
    component: ResendRegistrationTokenComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: "virtual-table",
    component: VirtualTableComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: "document-compose",
    component: DocumentComposeComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: "welcome",
    component: WelcomeComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: "list-user",
    component: ListUserComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'users',
    component: UsersReportComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "edit-user/:id",
    component: EditUserComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
