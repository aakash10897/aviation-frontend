import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryComponent } from './primary/primary.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { OverviewComponent } from './overview/overview.component';



@NgModule({
  declarations: [PrimaryComponent, NavbarComponent, BodyComponent, OverviewComponent],
  imports: [
    CommonModule
  ]
})
export class PrimaryModule { }
