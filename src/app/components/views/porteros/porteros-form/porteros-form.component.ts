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
    nombre: [],
    apellidos: [],
    ciudad: [],
    email: [],
    telefono: [],
    disponibilidad: [],
    pais: ['']
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
  //Metodo para actualizar los datos del portero
  ActualizarDatos() {
    this.documentId = this.ruta.snapshot.paramMap.get('idPortero')!;
    this.firebase.Actualizar(this.coleccion, this.documentId, this.formPorteros.value)

  }

  darDebaja() {
    this.documentId = this.ruta.snapshot.paramMap.get('idPortero')!;
    this.firebase.Eliminar(this.coleccion, this.documentId);
  }
  //No nos hace falta añadir el delete en el onInit porque si lo añadimos se nos pondran todos los valores a 0
  //debido que al iniciase el componente se ejecutara el cambio de valores
  //Sin embargo el EditarDatos si porque es el metodo que carga los datos ya escritos en nuestro formulario para
  //ver los datoa que ya existian anteriormente
  ngOnInit() {
    this.EditarDatos();

  }
}
