import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoGalleryModule } from '@twogate/ngx-photo-gallery';

const routes: Routes = [];

@NgModule({
  imports: [PhotoGalleryModule.forRoot({
      defaultOptions: {
        arrowEl: true,
        indexIndicatorSep: '-'
      }
    }), 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
