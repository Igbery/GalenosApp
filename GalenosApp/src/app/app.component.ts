import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(public router: Router) {
    this.initializeApp();
  }
  initializeApp(){
    this.router.navigateByUrl('splash')
  };
}
