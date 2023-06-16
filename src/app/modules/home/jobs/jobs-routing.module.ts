import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsLandpageComponent } from './jobs-landpage/jobs-landpage.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { ApplayJobComponent } from './pages/applay-job/applay-job.component';

const routes: Routes = [
  {
    path:'',component:JobsLandpageComponent,
    children:[

        {
          path:'',component:JobsComponent,
        },
        {
          path:'applyJob',component:ApplayJobComponent,
        }


    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
