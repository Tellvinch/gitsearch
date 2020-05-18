import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs-compat";
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GitsearchService {
private username:string
  constructor(private Http:HttpClient) { 
console.log("wachwach");
this.username="Tellvinch"

  }
  lethalinfo(){
    return this.Http.get(environment.apiurl + this.username + "?access_token=" + environment.apikey).map(result =>result)
  }
  gitRepos() {
    return this.Http.get(environment.apiurl + this.username + "/repos" + "?access_token=" + environment.apikey).map(result => result)
    }

  updateProfile(username:string){
      this.username = username
  
  }
  getProfileInfo(){
    interface ApiResponse{
    username: string;
}
  }
} 
