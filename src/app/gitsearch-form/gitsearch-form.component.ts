import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GitsearchService } from "../gitsearch-service/gitsearch.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-gitsearch-form',
  templateUrl: './gitsearch-form.component.html',
  styleUrls: ['./gitsearch-form.component.css']
})
export class GitsearchFormComponent implements OnInit {
  // goToUrl(){
  //   this.router.navigate(['/user'])
  // }

  user:any=[];
  username:string
  constructor(private Http:HttpClient, public GitsearchService: GitsearchService) { 
    this.GitsearchService.lethalinfo().subscribe(result=>{this.user=result})
  }

  ngOnInit(): void {
  }

}
