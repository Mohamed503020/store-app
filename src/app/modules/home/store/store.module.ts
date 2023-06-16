import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreLandpageComponent } from './components/store-landpage/store-landpage.component';


@NgModule({
  declarations: [
    StoreLandpageComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
