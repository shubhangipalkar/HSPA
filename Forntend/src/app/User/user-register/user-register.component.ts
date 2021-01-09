import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { User } from 'src/app/Model/user.interface';
import { UsersService } from 'src/app/Service/users.service';
import * as altertify from 'alertifyjs';
import { AlertifyService } from 'src/app/Service/alertify.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
registrationform: FormGroup;
notmatched = false;
user: User;
submitted: boolean;
  constructor(private fb: FormBuilder, private userserv: UsersService,
    private alertify: AlertifyService) { }

  ngOnInit(): void {
    // this.registrationform = new FormGroup({
    // userName: new FormControl(null,Validators.required),
    // Email: new FormControl(null,[Validators.required, Validators.email]),
    // Password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
    // Cnfmpassword: new FormControl(null,[Validators.required]),
    // Mobile: new FormControl(null,[Validators.required, Validators.maxLength(10),Validators.minLength(10)])
    // },this.pwdmatchingValidator)
    this.CreatFormBuilder();
  }

  //Validate form by using Form Builder
CreatFormBuilder(){
  this.registrationform = this.fb.group({
    userName: [null,Validators.required],
    Email: [null,[Validators.required, Validators.email]],
    Password: [null,[Validators.required,Validators.minLength(8)]],
    Cnfmpassword: [null,[Validators.required]],
    Mobile: [null,[Validators.required, Validators.maxLength(10),Validators.minLength(10)]]
    },{validators: this.pwdmatchingValidator})
  }

  pwdmatchingValidator(fg: FormGroup):Validators{
    return fg.get('Password').value === fg.get('Cnfmpassword').value ? null :
    {notmatched : true};
  }

  userData() : User{
 return this.user = {
   userName: this.userName.value,
   Email: this.Email.value,
   Password: this.Password.value,
   Cnfmpassword: this.Cnfmpassword.value,
   Mobile: this.Mobile.value
 }
  }
  //Getter methods for all variables
  get userName(){
    return this.registrationform.get('userName') as FormGroup;
  }

  get Email(){
    return this.registrationform.get('Email') as FormGroup;
  }

  get Password(){
    return this.registrationform.get('Password') as FormGroup;
  }

  get Cnfmpassword(){
    return this.registrationform.get('Cnfmpassword') as FormGroup;
  }

  get Mobile(){
    return this.registrationform.get('Mobile') as FormGroup;
  }

  onSubmit(){
    console.log(this.registrationform);
    this.submitted = true;

    if (this.registrationform.valid){
    //this.user = Object.assign(this.user, this.registrationform.value);
    this.userserv.addUser(this.userData());
    this.registrationform.reset();
    this.submitted = false;
    this.alertify.success('Congratulations you have registered successfully');
  }else{
    this.alertify.error('Please fill all fields with valid answer');
  }
  }
}
