import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'contratos/listar', pathMatch: 'full' }, // Redirige a contratos/listar
  {
    path: 'contratos',
    loadChildren: () =>
      import('./contratos/contratos.module').then((m) => m.ContratosModule), // Lazy loading de ContratosModule
  },
  { path: '**', redirectTo: 'contratos/listar' }, // Redirige rutas no válidas a contratos/listar
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
