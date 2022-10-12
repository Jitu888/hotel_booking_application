import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent implements OnInit {
  res: any = 1;
  resu:any=1;
  resul:any=1;
  disableBtn: Boolean = false;
  name:any=''

 
  firstFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    id: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder,private route:ActivatedRoute) {}


  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any)=>{
      console.log(params.data)
      this.name = params.data
  })
  }

  decrement() {
    
    this.res = this.res - 1
  }
  increment() {
    this.res = this.res + 1
   
  }
  dec() {
    
    this.resu = this.resu - 1
  }
  inc() {
    this.resu = this.resu + 1
   
  }
  

  dece() {
    
    this.resul = this.resul - 1
  }
  ince() {
    this.resul = this.resul + 1
   
  }


}
