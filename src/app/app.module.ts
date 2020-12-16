import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {ContactComponent} from './contact/contact.component';
import {RouterModule, Routes} from '@angular/router';
import {BookingComponent} from './booking/booking.component';

const routes: Routes = [{
  component: HomeComponent,
  path: 'home'
}, {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  component: ContactComponent,
  path: 'contact'
}, {
  component: BookingComponent,
  path: 'booking'
}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
