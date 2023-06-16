import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLandpageComponent } from './home-landpage/home-landpage.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'',component:HomeLandpageComponent,children:[
    {path:"",component:HomeComponent},
    {
      path: 'jobs',
      loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule)
    },
    {
      path: 'store',
      loadChildren: () => import('./store/store.module').then(m => m.StoreModule)
    },
  ] },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
