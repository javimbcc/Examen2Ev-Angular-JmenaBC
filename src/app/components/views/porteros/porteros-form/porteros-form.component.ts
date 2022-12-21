import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PorterosService } from 'src/app/services/porteros.service';

@Component({
  selector: 'app-porteros-form',
  templateUrl: './porteros-form.component.html',
  styleUrls: ['./porteros-form.component.css']
})
export class PorterosFormComponent {
  coleccion = "Porteros";
  constructor(private fb: FormBuilder,
    private ruta: ActivatedRoute,
    private firebase: PorterosService) {

  }
  //Declaramos nuestro formulario para editar los datos del portero
  formPorteros = this.fb.group({
    nombre: [''],
    apellidos: [''],
    ciudad: [''],
    email: [''],
    telefono: [''],
    disponibilidad: [''],
  });

  documentId: string = '';
  portero: any;
  //Metodo para editar los datos
  EditarDatos() {
    this.documentId = this.ruta.snapshot.paramMap.get('idPortero')!;
    this.firebase.cogerUno('Porteros', this.documentId).subscribe((resp: any) => {
      this.formPorteros.setValue(resp.payload.data());
    });
  }

  darDebaja() {
    this.documentId = this.ruta.snapshot.paramMap.get('idPortero')!;
    this.firebase.Eliminar(this.coleccion, this.documentId);
  }
  //ejecutamos la logica para poder editar los datos del portero
  ngOnInit() {
    this.EditarDatos();
  }
}
