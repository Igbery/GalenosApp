import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

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
  constructor(private menu: MenuController, public router: Router) {
    this.initializeApp();
  }
  initializeApp(){
    this.router.navigateByUrl('splash');
  }
  ngOnInit(){}
}
