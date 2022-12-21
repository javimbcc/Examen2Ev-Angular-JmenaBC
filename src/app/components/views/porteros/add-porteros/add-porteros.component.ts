import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PorterosService } from 'src/app/services/porteros.service';

@Component({
  selector: 'app-add-porteros',
  templateUrl: './add-porteros.component.html',
  styleUrls: ['./add-porteros.component.css']
})
export class AddPorterosComponent {
  coleccion="Porteros";

  constructor(private fb: FormBuilder,
    private ruta: ActivatedRoute,
    private firestore: PorterosService) {

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

  crearPortero() {
    this.firestore.Crear(this.coleccion,this.formPorteros.value);
  }

  ngOnInit() {
  }
}
