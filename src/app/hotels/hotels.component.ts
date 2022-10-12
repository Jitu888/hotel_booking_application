import { Component, OnInit,Input } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';



import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  public city:any
  result:any=[]
  panelOpenState = false;
  isDivVisible = false
  i:any=[0,1,2,3,4,5,6,7,8,9,10,11,12,13]
  start_Date:any = '';
  end_Date:any = '';

  dateRange = new FormGroup({
    startDate: new FormControl('',[Validators.required]),
    endDate: new FormControl('',[Validators.required])
  
   })
  constructor(private http:HttpClient,private route:ActivatedRoute, private router:Router) 
  { 
     this.filteredStates = this.stateCtrl.valueChanges.pipe(
    startWith(''),
    map(state => (state ? this._filterStates(state) : this.states.slice())) );}

  ngOnInit(): void {

    this.route.queryParams.subscribe((params:any)=>{
        console.log(params.data)
        this.city = params.data
        const value1 = params.startDate.split(' ')
        const value2 = params.endDate.split(' ')
        console.log(value1,value2)
        this.start_Date = value1[1] + " "+ value1[2]
        this.end_Date = value2[1] +" "+ value2[2]
        console.log("hhhhhhhhhhhh",this.city)
    })

    this.http.get(`http://localhost:8080/get_hotel?city=${this.city}`).
    subscribe({
      next: (r: any) => { this.result = r; console.log(this.result) },
      error: (err: any) => {
        console.error('Observer got an error:', err)
      }
    })
   
  }
  stateCtrl = new FormControl('');
  filteredStates: Observable<any[]> | undefined;

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

 
  private _filterStates(value: string) {
    const filterValue = value.toLowerCase();

    return this.states.filter((state: { name: string; }) => state.name.toLowerCase().includes(filterValue));
  }

  bookBtn(foo:any){
    this.router.navigate(['book'],{queryParams:{data:foo}})
    console.log(foo)
  }
  

  searchBtn(){
    if(this.dateRange.value.startDate && this.dateRange.value.endDate && this.stateCtrl.value){
    this.http.get(`http://localhost:8080/get_hotel?city=${this.stateCtrl.value}`).
    subscribe({
      next: (r: any) => { this.result = r; console.log(this.result) },
      error: (err: any) => {
        console.error('Observer got an error:', err)
      }
    
    })
    }
  }
  




  foo(){
   this.router.navigate(['details'])
  
  }


}
