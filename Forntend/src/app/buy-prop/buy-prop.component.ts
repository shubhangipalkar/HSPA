import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-prop',
  templateUrl: './buy-prop.component.html',
  styleUrls: ['./buy-prop.component.css']
})
export class BuyPropComponent implements OnInit {
@ViewChild ('form') addprpform : NgForm;  //create varibale
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onBackClick(){
    this.route.navigate(['']);
  }

  // onSubmit(form : NgForm){ // when we pass argument from function
  onSubmit(){
    console.log('this has been sunmited');
    // console.log(form);  // when we pass argument from function
    console.log(this.addprpform);
  }



}
