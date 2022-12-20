import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResizeImageComponent } from './resize-image/resize-image.component';
import { UrlSlicerComponent } from './url-slicer/url-slicer.component';

const routes: Routes = [
  {
    path: "",
    component : HomeComponent,
    pathMatch: 'full'
  },
  {
    path: "resize-image",
    component : ResizeImageComponent
  },
  {
    path: "url-slicer",
    component : UrlSlicerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
