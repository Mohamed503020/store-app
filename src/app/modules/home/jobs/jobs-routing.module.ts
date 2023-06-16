import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsLandpageComponent } from './components/jobs-landpage/jobs-landpage.component';

const routes: Routes = [
  {path:"",component:JobsLandpageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
