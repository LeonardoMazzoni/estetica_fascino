import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'admin' , component: AdminComponent},
  {path: 'signup' , component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }