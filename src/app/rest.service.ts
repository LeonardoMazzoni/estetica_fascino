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
}