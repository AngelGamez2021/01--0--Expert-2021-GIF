import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsComponent } from './gifs/gifs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FilterGifsComponent } from './gifs/filter-gifs/filter-gifs.component';
import { ContainerGifsComponent } from './gifs/container-gifs/container-gifs.component';



@NgModule({
  declarations: [
    GifsComponent,
    SidebarComponent,
    FilterGifsComponent,
    ContainerGifsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifsComponent,
    SidebarComponent
  ]
})
export class GifsModule { }
