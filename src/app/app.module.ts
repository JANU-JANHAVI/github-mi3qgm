import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ProductsComponent } from './products/products.component';

import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [AppComponent, ProductsComponent],
  imports: [
    BrowserModule,
        HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
