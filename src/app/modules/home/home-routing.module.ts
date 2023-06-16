import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLandpageComponent } from './components/home-landpage/home-landpage.component';

const routes: Routes = [
  {path:'',component:HomeLandpageComponent },
    {
      path: 'jobs',
      loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule)
    },
    {
      path: 'store',
      loadChildren: () => import('./store/store.module').then(m => m.StoreModule)
    },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
