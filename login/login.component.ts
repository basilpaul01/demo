import { Component, OnInit } from '@angular/core';
import{FormBuilder, Validators} from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router) { }
  register = this.fb.group(
    {
      username : ['',[Validators.required,Validators.pattern("^[a-zA-Z0-9]{5,}$")]],
      password: ['',[Validators.required,Validators.minLength(5)]]
    }
  )
  validate = (redirect:any,user:string,password1:string) =>{
    if(user=='admin')
    {
      if(password1=='12345')
      {
        redirect();
      }
    }
    else
    {
      alert("Invalid username or password");
    }

  }
  redirect=()=>{
    this.router.navigate(['/todos']);
  }

  ngOnInit(): void {
  }

}
