import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  location!: Location

  ngOnInit() {
      this.location = {
          latitude: -16.3268513,
          longitude: -48.942253,
          zoom: 18,
          markers: [
              {
                  lat: -16.3268513,
                  lng: -48.942253
              }
          ]
      }
  }

  addMarker(lat: number, lng: number) {
      this.location.markers.push({
          lat,
          lng
      })
  }
}

interface Marker {
  lat: number;
  lng: number;
}

interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
  markers: Array<Marker>;
}