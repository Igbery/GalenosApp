import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(public activeroute: ActivatedRoute, private router: Router) { 
    this.activeroute.queryParams.suscribe(params => {
      console.log(router.getCurrentNavigation()?.extras.state)
      if (this.router.getCurrentNavigation()?.extras.state){
        console.log(this.data=thisdata.ValorEnviar.usuario)
      }else{this.router.navigate(["'/login"])}
    });
  }

  ngOnInit() {
  }

}
