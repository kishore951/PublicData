import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-public-data',
  templateUrl: './public-data.component.html',
  styleUrls: ['./public-data.component.css']
})
export class PublicDataComponent implements OnInit {

  constructor( private myapi:ApiService) { 
    this.fetchData()
  }


  fetchData=()=>{
    this.myapi.pubData().subscribe(
      (data)=>{
        this.pubData=data
      }
    )
  }
  pubData:any={}
  ngOnInit(): void {
  }

}
