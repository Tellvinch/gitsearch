import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GitsearchService } from "../gitsearch-service/gitsearch.service";

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

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