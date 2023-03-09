import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [MenuComponent, SidebarComponent],
  imports: [
    CommonModule
  ],
  exports: [MenuComponent, SidebarComponent]
})
export class SharedModule { }
