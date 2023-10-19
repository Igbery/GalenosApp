import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from '../service/firestore.service';
import { FormControl, FormGroup, Validator } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formulario: FormGroup

  constructor(private router: Router, private firestore: FirestoreService) {

    this.formulario = new FormGroup({
      
      rut: new FormControl(''),
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      email: new FormControl(''),
      contrasena: new FormControl('')
  
    });

   }

  ngOnInit() {
  }

  navigateToLogin(){
    this.router.navigateByUrl('/login');
  }

  async onSubmit(){
    console.log(this.formulario.value)
    const response = await this.firestore.addUser(this.formulario.value)
    console.log(response)
  }

  async createUser(){
    if(this.formulario.valid){
      
    }
  }

}
