import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private api:ApiService) { 
    this.api.addtodos().subscribe(
      (response)=>{
        this.data = response
      }
      )
      
  }
  data:any = []
  static count = 0;
  newfunction = (value:any,check:any) =>{
   if(value == false)
   {
    TodosComponent.count++;
    check.disabled = true;
    
   }
   var promise = new Promise((resolve,reject)=>{
    if(TodosComponent.count==5)
    {
      resolve("Congratulations! You have finished 5 tasks!");
    }
   })
   promise.then((str)=>{
    alert(str);
   })
  }
  

  ngOnInit(): void {
  }

}