import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GitsearchService } from "../gitsearch-service/gitsearch.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {

  // goToUrl(user){
  //   this.router.navigate(['/user'])
  // }

  user:any=[];
  repos: any = [];
  username:string
  constructor(private Http:HttpClient, public GitsearchService: GitsearchService) { 
    // this.GitsearchService.lethalinfo().subscribe(result=>{this.user=result})
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
