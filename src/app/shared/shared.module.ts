import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [MenuComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MenuComponent, SidebarComponent]
})
export class SharedModule { }
