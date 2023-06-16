import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applay-job',
  templateUrl: './applay-job.component.html',
  styleUrls: ['./applay-job.component.scss']
})
export class ApplayJobComponent {
  applyForm: FormGroup;
  // jobInfo:any
  constructor(
    private fb: FormBuilder,
    private router: Router
    ) {


      // const navigation = this.router.getCurrentNavigation();
      // const state:any = navigation?.extras?.state;
      // console.log("🚀 ~ state:", state.jobInfo)
// if(state)
// this.jobInfo =state.jobInfo

    this.applyForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      q_degree: ['', [Validators.required]],
      exp: ['', [Validators.required]],
      t5asos: ['', [Validators.required]],
      bdate: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      town: ['', [Validators.required]],
      address:["",Validators.required],
      attachment:["",Validators.required],
      jobs: ['', [Validators.required],]
    });

    this.applyForm.valueChanges.subscribe(res => {
      console.log("🚀 ~ constructor ~ res:", res)

    })
  }


  // get fbControls(){
  //   return  this.loginForm.controls
  // }
  onSubmit() {
    console.log('ggg')
  }
}
