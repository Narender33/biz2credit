import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { IspComponent } from './components/isp/isp.component'
import { IspDetailsComponent } from './components/isp-details/isp-details.component';
import { ServiceService } from '../services/service.service'

@NgModule({
  declarations: [
    AppComponent,
    IspComponent,
    IspDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
