import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-add',
  templateUrl: './property-add.component.html',
  styleUrls: ['./property-add.component.css']
})
export class PropertyAddComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
onBack()
{
  this.route.navigate['/'];
}
}
