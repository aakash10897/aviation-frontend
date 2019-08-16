import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PrimaryComponent } from './primary/primary/primary.component';


const routes: Routes = [{path:"main",component:MainComponent},{path:"primary",component:PrimaryComponent},{path:"",redirectTo:"/main",pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
