import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() imgSrc: string = ""
  @Input() imgAlt: string = ""
  @Input() vehicle: any = {}
  constructor() { }

  ngOnInit(): void {
    console.log(this.imgSrc)
    console.log(this.imgAlt)
    console.log(this.vehicle)

  }

}
