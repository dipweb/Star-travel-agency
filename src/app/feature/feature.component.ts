import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  vehicleDetails: any = [
    {
      vehicleName: "Swift",
      vehicleUrl: "../../assets/images/swift.png",
      rate:12

    },
    {
      vehicleName: "Scorpio",
      vehicleUrl: "../../assets/images/Scorpio.png",
      rate:15

    },
    {
      vehicleName: "Innova",
      vehicleUrl: "../../assets/images/inova.jpg",
      rate:18
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
