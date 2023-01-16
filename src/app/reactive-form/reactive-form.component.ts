import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  loginForm = new FormGroup({
    email:new FormControl('',Validators.compose([Validators.required])),
    password:new FormControl(''),
  })
  loginUser(data:any){
    console.warn(data)
  }
  get email(){ return this.loginForm.get('email'Validators.compose() }
}

