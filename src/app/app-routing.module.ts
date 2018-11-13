import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MiCompraComponent } from './components/mi-compra/mi-compra.component';

export const routes: Routes = [

  { path: '', component: ShoppingCartComponent },
  { path: 'finalizar', component: MiCompraComponent },

  { path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
