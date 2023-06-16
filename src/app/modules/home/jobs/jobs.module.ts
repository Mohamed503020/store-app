import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsLandpageComponent } from './components/jobs-landpage/jobs-landpage.component';


@NgModule({
  declarations: [
    JobsLandpageComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule
  ]
})
export class JobsModule { }
