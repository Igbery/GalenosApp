import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { UserProfile } from '../user-profile.interface';
import { Observable } from 'rxjs';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  addUser(user: UserProfile){
    const userRef = collection(this.firestore, 'Usuarios');
    return addDoc(userRef, user);
  }

  //Crear usuario JC
  signUp(user : UserProfile){
    return createUserWithEmailAndPassword(getAuth(), user.email, user.contrasena);
  }

  getUser(): Observable<UserProfile[]>{
    const userRef = collection(this.firestore, 'Usuarios');
    return collectionData(userRef, {idField: 'id'}) as Observable<UserProfile[]>
  }
}
