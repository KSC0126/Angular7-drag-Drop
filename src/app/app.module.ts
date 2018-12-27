import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DDComponent } from './dd/dd.component';

@NgModule({
  declarations: [
    AppComponent,
    DragdropComponent,
    NavigationComponent,
    HomeComponent,
    DDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class AppModule { }
