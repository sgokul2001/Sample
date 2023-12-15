import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';




const routes: Routes = [
  {path:'login' ,component:LoginComponent},
  {path:'main',component:MainComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
