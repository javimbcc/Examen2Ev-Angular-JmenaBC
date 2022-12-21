import { Component } from '@angular/core';
import { PorterosService } from 'src/app/services/porteros.service';

@Component({
  selector: 'app-porteros-list',
  templateUrl: './porteros-list.component.html',
  styleUrls: ['./porteros-list.component.css']
})
export class PorterosListComponent {
  constructor(private firebase: PorterosService) {

  }
  //Declaramos la coleccion en la que vamos a trabajar
  //Creamos una lista para meter los valores de firebase en ella y poder leerlos y editarlos
  coleccion = "Porteros";
  porterosLista: any[] = [];
  documentId: string = '';
  //Metodo para listar todos los porteros
  getTodosLosPorteros() {
    this.firebase.cogerTodos(this.coleccion).subscribe(
      (resp: any) => {
        this.porterosLista = [];
        resp.forEach((porterosSnapshot: any) => {
          this.porterosLista.push(
            {
              documentId: porterosSnapshot.payload.doc.id,
              data: porterosSnapshot.payload.doc.data()
            }
          )
        });
      })
    }

    ngOnInit() {
      this.getTodosLosPorteros();
    }
}


