import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

import { Observable } from 'rxjs';
import { UserProfile } from './user-profile.interface';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Reserva de Horas', url: './login', icon: 'accessibility' },
    { title: 'Pago en linea', url: './register', icon: 'add-circle' },
    { title: 'Tus Horas', url:'./horas', icon:'bag.add'},
    { title: 'Salir', url:'./login', icon:''}
  ];

  private firestore: Firestore = inject(Firestore);
  users$: Observable<UserProfile[]>;
  constructor(private menu: MenuController, public router: Router) {
    this.initializeApp();
    const userProfileCollection = collection(this.firestore, 'Usuarios');
    this.users$ = collectionData(userProfileCollection) as Observable<UserProfile[]>;
  }
  initializeApp(){
    this.router.navigateByUrl('splash');
  }
  ngOnInit(){}
}
