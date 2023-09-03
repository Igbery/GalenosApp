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
    { title: 'Login', url: './login', icon: 'accessibility' },
    { title: 'Register', url: './register', icon: 'add-circle' }
  ];
  constructor(private menu: MenuController, public router: Router) {
    this.initializeApp();
  }
  initializeApp(){
    this.router.navigateByUrl('splash');
  }
  ngOnInit(){
    this.openMenu();
  }
  openMenu(){
    this.menu.open();
  }
  closeMenu(){
    this.menu.close();
  }
}
