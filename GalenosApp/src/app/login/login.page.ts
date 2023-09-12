import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  mensajeInput = 'Ingresar Nombre de Usuario';

  ValorEnviar={
    usuario:"",
    password:""
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToRegister(){
    this.router.navigateByUrl('/register')
  }

  navigateToMain(){
    let navigationExtras: NavigationExtras ={
      state: {
        ValorEnviar: this.ValorEnviar
      }
    };
    this.router.navigate(['main'],navigationExtras);
  }

  navigateToRestaurar(){
    this.router.navigateByUrl('/restaurar');
  }

}
