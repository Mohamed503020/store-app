import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent {
  jobs:any=[
    {
      id:'1',
      name:'الموارد البشرية',
      link:'/applyJob/1',
      icon:''
    },
    {
      id:'2',
      name:'Teacher',
      link:'applyJob/2',
      icon:''
    },
    {
      id:'3',
      name:'driver',
      link:'/applyJob/3',
      icon:''
    },
     {
      id:'1',
      name:'HR',
      link:'/applyJob/1',
      icon:''
    },
    {
      id:'2',
      name:'Teacher',
      link:'applyJob/2',
      icon:''
    },
    {
      id:'3',
      name:'driver',
      link:'/applyJob/3',
      icon:''
    }
  ]
  constructor(private router :Router) {


  }

  routeToPage(job:any){
    let jobInfo =job
    this.router.navigateByUrl(job.link, { state: { jobInfo } });  }
}
