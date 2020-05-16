import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs-compat";
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GitsearchService {

  constructor(private Http:HttpClient) { 

  }
}
