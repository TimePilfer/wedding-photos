import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParseImagesComponent } from './parse-images/parse-images.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoGalleryModule } from '@twogate/ngx-photo-gallery'

@NgModule({
  declarations: [
    AppComponent, ParseImagesComponent
  ],
  imports: [
    PhotoGalleryModule.forRoot({
      defaultOptions: {
        arrowEl: true,
        indexIndicatorSep: '-'
      }
    }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
