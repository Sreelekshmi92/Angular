import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-empcomp',
  templateUrl: './empcomp.component.html',
  styleUrls: ['./empcomp.component.css']
})
export class EmpcompComponent implements OnInit {
id;
name;
age;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  
  }

  newemp(){

    console.log(this.name);

    let emp={"id":this.id,"Name":this.name,"Age":this.age}
    this.http.post("http://localhost:8000/insert",{Employee:emp}).subscribe(data=>
      {
        console.log(data);
      })
  }
 
}
