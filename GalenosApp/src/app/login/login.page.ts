import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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
    this.router.navigateByUrl('/main');
  }

  navigateToRestaurar(){
    this.router.navigateByUrl('/restaurar')
  }
  ingresar(){
    let navigationExtras: NavigationExtras ={
      state: {
        ValorEnviar: this.ValorEnviar
      }
    };
    this,router.navigate(['main'],navigationExtras);
  }

}
