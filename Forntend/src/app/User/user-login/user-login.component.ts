import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginform: FormGroup;

  constructor(private Fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginform = new FormGroup ({
      loginid: new FormControl (null, Validators.required),
      password: new FormControl (null, [Validators.required,Validators.minLength(8)])
    })


}
}
