import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { Page404Component } from './components/page404/page404.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ 
    AppComponent,
    NavComponent, 
    HomeComponent,
    ContactComponent,
    GalleryComponent,
  Page404Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
