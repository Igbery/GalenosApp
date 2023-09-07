import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  data: any;

  constructor(public activeroute: ActivatedRoute, private router: Router) {
    // Se llama a la ruta activa y se obtiene sus parametros mediante una subscripcion
    this.activeroute.queryParams.subscribe(params => { // Utilizamos lambda
      console.log(router.getCurrentNavigation()?.extras.state)
      if (this.router.getCurrentNavigation()?.extras.state) { // Validamos que en la navegacion actual tenga extras
        this.data = this.router.getCurrentNavigation()?.extras.state; // Si tiene extra rescata lo enviado
        console.log(this.data.ValorEnviar.usuario) // Muestra por consola lo traido
      }else{this.router.navigate(["/login"])} // Si no tiene extra la navegacion actual navegar al login
    });
  }

  ngOnInit() {
  }

}
