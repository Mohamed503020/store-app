import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthLandingComponent } from './auth-landing/auth-landing.component';

const routes: Routes = [

  {
    path:'',component:AuthLandingComponent,
    children:[
      {path:'',redirectTo:'login',pathMatch:"full"},

      {path:"login",component:LoginComponent},
      {path:"register",component:RegisterComponent}

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
