import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faShoppingCart, faMinus } from '@fortawesome/free-solid-svg-icons'

import { HttpModule } from '@angular/http';
import { MiCompraComponent } from './components/mi-compra/mi-compra.component';

library.add(faPlus, faShoppingCart, faMinus)

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    MiCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
