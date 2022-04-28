import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA2pxSg9mSQ5CgwHANlgAAk-WBM-Sp5h6Y',
      libraries: ["places", "geometry"]    
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }