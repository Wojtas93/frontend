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
  path: 'home',
  pathMatch: 'full'
}, {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  component: MyProfileComponent,
  path: 'my-profile',
  pathMatch: 'full'
}, {
  component: MyReservationsComponent,
  path: 'my-reservations',
  pathMatch: 'full'
}, {
  component: ContactComponent,
  path: 'contact',
  pathMatch: 'full'
}, {
  component: BookingComponent,
  path: 'booking',
  pathMatch: 'full'
}, {
  component: RegisterComponent,
  path: 'register',
  pathMatch: 'full'
}, {
  component: LoginComponent,
  path: 'login',
  pathMatch: 'full'
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
