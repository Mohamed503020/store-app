import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsLandpageComponent } from './jobs-landpage/jobs-landpage.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { ApplayJobComponent } from './pages/applay-job/applay-job.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    JobsLandpageComponent,
    JobsComponent,
    ApplayJobComponent,
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class JobsModule { }
