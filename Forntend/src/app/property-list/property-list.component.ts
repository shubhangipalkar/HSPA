import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import {PropServService} from '../prop-serv.service';
import {IProperty} from './properties-interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  sellrent = 1;
  prop: IProperty[] ;

  constructor(private route: ActivatedRoute,private http:HttpClient, private serv:PropServService) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()){
      this.sellrent = 2; //means we are on rent property URL
    }
    this.serv.getAllProp(this.sellrent).subscribe(
      result => {
      this.prop = result;
      console.log(result)
      console.log("This is need to display",this.route.snapshot.url.toString());
    }, error =>{
      console.log(error);
    }

    );
  }

}
