import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) { }

  handleError:any;

  getDataRows(apiURL: string): Observable<Object> {
    return this.http.get<Object>(apiURL)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // get 
  get(apiURL : string) : Observable<Object> {
    return this.http.get<Object>(apiURL)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // delete
  delete(apiURL : string) {
    return this.http.delete(apiURL).pipe()
  }

  // post
  add(apiURL : string, o: Object) : Observable<Object> {
    return this.http.post<Object>(apiURL, JSON.stringify(o))
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // put
  update(apiURL : string, o: Object) {
    return this.http.put(apiURL, JSON.stringify(o))
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
}