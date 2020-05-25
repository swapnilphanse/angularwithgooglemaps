import { Component, OnInit, ViewChild } from "@angular/core";
import { GoogleMap, MapInfoWindow, MapMarker } from "@angular/google-maps";
import data from "./demo.json";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;

  zoom = 18;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    mapTypeId: "hybrid"
  };

  markers = [];
  infoContent = "";

  Users;
  selectedLocation: string;

  onselectedLocation() {

    this.location(this.selectedLocation);
  }

  ngOnInit() {
   
    this.Users = data

      
    navigator.geolocation.getCurrentPosition( () => {
     
      this.center = {
        lat: this.Users[0].latitude,
        lng: this.Users[0].longitude
      };

      this.markers.push({
        position: {

          lat: this.Users[0].latitude,
          lng: this.Users[0].longitude
        },
        label: {
          color: "transparent",
          text: ""

        },
       
        title: "Marker Title",
        info: this.Users[0].speech,
        image: this.Users[0].imageFile,
        
        options: {
           animation: google.maps.Animation.BOUNCE
        }
      });
    });
  
}


location (test: any) {
  this.markers = [];

if(this.Users) {

let d1 = this.Users.find(user => user.created == test);
    
    navigator.geolocation.getCurrentPosition( () => {
     
      this.center = {
        lat: d1.latitude,
        lng: d1.longitude
      };

      this.markers.push({
        position: {

          lat: d1.latitude,
          lng: d1.longitude
        },
        label: {
          color: "transparent",
          text: ""

        },
       
        title: "Marker Title",
        info: d1.speech,
        image: d1.imageFile,
        
        options: {
           animation: google.maps.Animation.BOUNCE
        }
      });
    });
  
}
}

  openInfo(marker: MapMarker, info, image) {
    this.infoContent = info +image;
    this.info.open(marker);

  }

}