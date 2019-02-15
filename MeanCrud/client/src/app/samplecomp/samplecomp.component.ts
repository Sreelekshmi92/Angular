import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-samplecomp',
  templateUrl: './samplecomp.component.html',
  styleUrls: ['./samplecomp.component.css']
})
export class SamplecompComponent implements OnInit {

  dt;
  List:any[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
  
  }

  get()
  {
    this.http.get("http://localhost:8000/msg").subscribe(data=>{
      console.log(data);
      this.dt=data;
    });
  }

  gettabledata()
  {
    console.log("fdfsft");
    this.http.get("http://localhost:8000/data").subscribe(data=>{
  
    this.List=Array.of(data)
  })
}


 

}
