import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreferitiPageComponent } from './components/preferiti-page/preferiti-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'preferiti',
    component: PreferitiPageComponent
  },
  {
    path:'cart',
    component: CartPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
