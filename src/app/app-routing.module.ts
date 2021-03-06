import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {
    path: 'home' , component: HomeComponent
  },
  {
    path: 'hero/:idHero' , component: HeroDetailComponent
  },
  {
    path: 'contact' , component: ContactComponent
  },
  {
    path: 'gallery' , component: GalleryComponent
  },
  {
    path: '' , redirectTo : '/home', pathMatch : 'full' 
  },
  {
    path: '**' ,  component: Page404Component 
  }
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }