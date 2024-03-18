import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { VentasComponent } from './componentes/ventas/ventas.component';
import { ComprasComponent } from './componentes/compras/compras.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'compras', component: ComprasComponent },
  { path: 'ventas', component: VentasComponent },
  {path:'**', pathMatch:'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
