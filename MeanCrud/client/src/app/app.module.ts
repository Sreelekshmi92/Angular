import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SamplecompComponent } from './samplecomp/samplecomp.component';

//for connecting with server
import {HttpClientModule} from '@angular/common/http';
import { EmpcompComponent } from './empcomp/empcomp.component'

@NgModule({
  declarations: [
    AppComponent,
    SamplecompComponent,
    EmpcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
