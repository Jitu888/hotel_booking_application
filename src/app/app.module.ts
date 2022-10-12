import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatFormFieldModule,MatFormFieldControl} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { HotelsComponent } from './hotels/hotels.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { MatModule } from './matModules/mat.module';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ForgetPasswardComponent } from './auth/forget-passward/forget-passward.component';
import { MoreDetailsComponent } from './more-details/more-details.component';

 


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    HotelsComponent,
    BookingPageComponent,
    SigninComponent,
    SignupComponent,
    ForgetPasswardComponent,
    MoreDetailsComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    FormsModule,
    GooglePlaceModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatModule
   


    
    
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
