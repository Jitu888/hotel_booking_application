import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswardComponent } from './auth/forget-passward/forget-passward.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { HotelsComponent } from './hotels/hotels.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'', component:WelcomeComponent},
  {path:'book',component:BookingPageComponent},
  {path:'hotels',component:HotelsComponent},
  {path:'auth/signin',component:SigninComponent},
  {path:'auth/signup',component:SignupComponent},
  {path:'auth/forget',component:ForgetPasswardComponent},
  {path:'details',component:MoreDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
