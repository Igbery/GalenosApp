import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-restaurar',
  templateUrl: './restaurar.page.html',
  styleUrls: ['./restaurar.page.scss'],
})
export class RestaurarPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToLogin(){
    this.router.navigateByUrl('/login');
  }

  navigateToRegister(){
    this.router.navigateByUrl('/register')
  }

}
