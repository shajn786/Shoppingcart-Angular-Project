import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductViewAllComponent } from './product-view-all/product-view-all.component';

const myRoutes: Routes=
[
  {
    path:"",component:ProductAddComponent
  },
  {
    path:"viewall",component:ProductViewAllComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductViewAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
