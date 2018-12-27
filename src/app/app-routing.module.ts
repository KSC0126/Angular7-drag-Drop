import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { DDComponent } from './dd/dd.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent
},
{
  path:'todo',
  component:DragdropComponent
},
{
  path:'dd',
  component:DDComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
