import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorterosListComponent } from './porteros-list/porteros-list.component';
import { PorterosFormComponent } from './porteros-form/porteros-form.component';
import { AddPorterosComponent } from './add-porteros/add-porteros.component';

/*
Este sera el enrutador de nuestro modulo porteros
@author Jmenabc
*/
const routes: Routes = [
  {
    path: 'porter', component: PorterosListComponent
  },
  {
    path: 'porter/editar/:idPortero', component: PorterosFormComponent
  },
  {
    path: 'porter/añadir', component: AddPorterosComponent
  },
  {
    path: '**', redirectTo: 'porter', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PorterosRoutingModule { }
