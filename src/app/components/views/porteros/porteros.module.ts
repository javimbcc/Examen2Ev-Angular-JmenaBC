import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorterosListComponent } from './porteros-list/porteros-list.component';
import { PorterosFormComponent } from './porteros-form/porteros-form.component';
import { PorterosRoutingModule } from './porteros-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { AddPorterosComponent } from './add-porteros/add-porteros.component';
/*
Este sera el modulo que manejara nuestros porteros
@author Jmenabc
*/
@NgModule({
  declarations: [
    PorterosFormComponent,
    PorterosListComponent,
    AddPorterosComponent,
  ],
  imports: [
    CommonModule,
    PorterosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class PorterosModule { }
