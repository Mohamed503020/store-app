import { NotfoundComponent } from './core/components/notfound/notfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './core/components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {path:"",redirectTo:"/main/home",pathMatch:"full"},
  {path:'main',component:MainLayoutComponent,children:[
    {path:'',redirectTo:"home",pathMatch:"full"},
    {
      path: "home",
      loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule)
    },


  ]},
  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
