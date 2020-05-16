import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GitsearchService } from "../gitsearch-service/gitsearch.service";

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  user:any=[];
  username:string
  constructor(private Http:HttpClient, public GitsearchService: GitsearchService) { 
    this.GitsearchService.lethalinfo().subscribe(result=>{this.user=result})
  }

  ngOnInit(): void {
  }

}
