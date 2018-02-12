import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import {AUTH_PROVIDERS, AuthService} from './auth.service';
import { ProtectedComponent } from './protected/protected.component';
import {LoggedInGuard} from './logged-in.guard';


const routes: Routes = [
  // basic routes
  { path: '',             redirectTo: 'home',             pathMatch: 'full' },
  { path: 'home',         component: HomeComponent },
  { path: 'about',        component: AboutComponent },
  { path: 'contact',      component: ContactComponent },
  { path: 'contactus',    redirectTo: 'contact' },
  { path: 'product/:id',  component: ProductComponent },

  // authentication demo
  { path: 'login',      component: LoginComponent },
  { path: 'protected',  component: ProtectedComponent,    canActivate: [LoggedInGuard] }

  // nested
  // { path: 'products',   component: ProductComponent,   children: childRoutes }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    LoginComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    // { provide: LocationStrategy, useClass: HashLocationStrategy },
    // AUTH_PROVIDERS,
    AuthService,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
