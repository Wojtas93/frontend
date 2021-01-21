import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../../home/home.component';
import {ContactComponent} from '../../contact/contact.component';
import {BookingComponent} from '../../booking/booking.component';
import {RegisterComponent} from '../../register/register.component';
import {LoginComponent} from '../../login/login.component';
import {MyProfileComponent} from '../../my-profile/my-profile.component';
import {MyReservationsComponent} from '../../my-reservations/my-reservations.component';

const routes: Routes = [{
  component: HomeComponent,
  path: 'home'
}, {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  component: MyProfileComponent,
  path: 'my-profile'
}, {
  component: MyReservationsComponent,
  path: 'my-reservations'
}, {
  component: ContactComponent,
  path: 'contact'
}, {
  component: BookingComponent,
  path: 'booking'
}, {
  component: RegisterComponent,
  path: 'register'
}, {
  component: LoginComponent,
  path: 'login'
}, {
  component: ContactComponent,
  path: 'contact'
}];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {
}
