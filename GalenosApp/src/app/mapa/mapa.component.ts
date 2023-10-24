import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent  implements OnInit {

  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: any;

  constructor() { }

  ngOnInit() {}

  ionViewdidEnter(){
    this.showMap();
  }

  showMap(){
    const location = new google.map.LatLng(-17.824858, 31.053028);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

}
