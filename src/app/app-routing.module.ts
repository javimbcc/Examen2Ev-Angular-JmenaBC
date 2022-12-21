import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddPorterosComponent } from './components/views/porteros/add-porteros/add-porteros.component';

const routes: Routes = [
  {
    path: 'porteros', loadChildren: () => import('./components/views/porteros/porteros.module').
      then(m => m.PorterosModule)
  },
  {
    path: '**', redirectTo: '/', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
