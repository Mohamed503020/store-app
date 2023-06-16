import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreLandpageComponent } from './components/store-landpage/store-landpage.component';

const routes: Routes = [
  {path:'',component:StoreLandpageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
