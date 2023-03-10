import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


/*
En esta clase tendremos nuestro crud con firebase con todos los metodos necesarios
@author Jmenabc
*/
@Injectable({
  providedIn: 'root'
})
export class PorterosService {

  constructor(private firestore: AngularFirestore) { }
  //Metodo para mostrar todos los documentos de la base de datos
  cogerTodos(coleccion: string) {
    return this.firestore.collection(coleccion).snapshotChanges();
  }
  //Metodo para coger un documento de la base de datos
  cogerUno(coleccion: string, documentId: string) {
    return this.firestore.collection(coleccion).doc(documentId).snapshotChanges();
  }
  //Metodo para actualizar un documento de la base de datos
  Actualizar(coleccion: string, documentId: string, data: any) {
    return this.firestore.collection(coleccion).doc(documentId).update(data);
  }
  //Metodo para crear un documento de la base de datos
  Crear(coleccion: string, data: any) {
    return this.firestore.collection(coleccion).add(data);
  }
  //Metodo para eliminar un documento de la base de datos
  Eliminar(coleccion: string, documentId: string) {
    return this.firestore.collection(coleccion).doc(documentId).delete();
  }
}
