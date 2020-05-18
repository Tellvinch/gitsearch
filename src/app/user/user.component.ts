import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GitsearchService } from "../gitsearch-service/gitsearch.service";
import { Router } from '@angular/router';
import { GitsearchComponent } from '../gitsearch/gitsearch.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:any=[];
  repos: any = [];
  username:string
  constructor(private Http:HttpClient, public GitsearchService: GitsearchService) { 
  }


 

  ngOnInit(){
    this.GitsearchService.lethalinfo().subscribe(res => {
      this.user = res;
    })
    this.GitsearchService.gitRepos()
      .subscribe(data => {
        this.repos = data;
      })
      this.GitsearchService.gitRepos()
      .subscribe(data => {
        this.repos = data;
      })
  }

}