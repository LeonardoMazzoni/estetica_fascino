import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) { }

  // get 
  get(apiURL : string) : Observable<Object> {
    return this.http.get<Object>(apiURL).pipe()
  }

  // delete
  delete(apiURL : string) {
    return this.http.delete(apiURL).pipe()
  }

  // post
  add(apiURL : string, o: Object) : Observable<Object> {
    return this.http.post<Object>(apiURL, JSON.stringify(o)).pipe()
  }

  // put
  update(apiURL : string, o: Object) {
    return this.http.put(apiURL, JSON.stringify(o)).pipe()
  }
  
}