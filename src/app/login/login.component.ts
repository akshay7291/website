import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform : FormGroup;
  constructor() { }

  ngOnInit() {

    this.loginform = new FormGroup({
        'name' : new FormControl(null),
        'email' : new FormControl(null)
    });

  }

  onSubmit()
  {
    console.log(this.loginform);
  }

 

}
