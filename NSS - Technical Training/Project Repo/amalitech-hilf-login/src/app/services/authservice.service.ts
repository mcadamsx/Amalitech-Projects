import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthInterface} from "../interface/auth-interface";
import {Observable} from "rxjs";
import {env} from "../env/env";

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {


  constructor(private http:HttpClient) { }

  loginCredentials(userDetails:AuthInterface):Observable<AuthInterface[]>{
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Add any other headers if needed
      }),
      mode: 'no-cors' // Set the mode to 'no-cors'
    };

    return this.http.post<AuthInterface[]>(`${env.endPoint}`, userDetails, requestOptions)


  }
}
