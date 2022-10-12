import { Component } from '@angular/core';
import { FormGroup, FormBuilder,FormControl } from '@angular/forms';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotel_app';
  
  currentMsgFromChild1ToChild2 : any;

  fwdMsgToSib2($event: any) { this.currentMsgFromChild1ToChild2 = $event; }
}
