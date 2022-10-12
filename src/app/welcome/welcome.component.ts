
import { Component,  Inject,  InjectionToken,  OnInit,Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MAT_DATEPICKER_VALIDATORS } from '@angular/material/datepicker';







@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent{
  
 dateRange = new FormGroup({
  startDate: new FormControl('',[Validators.required]),
  endDate: new FormControl('',[Validators.required])

 })

  toast:boolean = false;
  result:any=''
  stateCtrl = new FormControl('',[Validators.required,]);
  filteredStates: Observable<any[]>;
  @Output() msgToSibling = new EventEmitter<any>();

  states: any = [
    {
      name: 'New Delhi',
   
    },
    {
      name: 'Rajasthan',
     
    },
    {
      name: 'Uttar Pradesh',
    
    },
    {
      name: 'Mumbai',
    
    },
    {
      name:'Shimla'
    }
  ];

  constructor(private http:HttpClient, private route:Router) {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice())),
    );
  }

  private _filterStates(value: string) {
    const filterValue = value.toLowerCase();

    return this.states.filter((state: { name: string; }) => state.name.toLowerCase().includes(filterValue));
  }
  
  msgToSib() { this.msgToSibling.emit(this.stateCtrl.value)}

  searchBtn(){
       console.log()
     if(this.dateRange.value.startDate && this.dateRange.value.endDate && this.stateCtrl.value){
    this.route.navigate(['hotels'],{queryParams:{data:this.stateCtrl.value,startDate:this.dateRange.value.startDate,endDate:this.dateRange.value.endDate}})
     }
     else{
      
       this.toast = true;
     }
  }

  
 
  

 
}









