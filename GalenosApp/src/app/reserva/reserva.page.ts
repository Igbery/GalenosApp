import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToLogin(){
    this.router.navigateByUrl('./login');
  }

}
