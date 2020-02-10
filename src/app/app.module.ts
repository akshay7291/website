import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RouterModule , Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes : Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'cart',
    component : CartComponent
  },
  {
    path  : '**',
    component : PagenotfoundComponent 
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SectionComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    LoginComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing : true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
