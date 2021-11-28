import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs"
import { tap, catchError } from "rxjs/operators"
import { environment } from 'src/environments/environment';

let urlApi = '';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  notifyError:any = null;

  constructor(private http: HttpClient) { 
    urlApi = environment.urlApi;
  }

  get (uri: any): Observable<any> {
    const url = `${urlApi}/${uri}`;

    const observable = this.http.get(url).pipe(
      // Success
      tap(() => {}),
      // Failed
      catchError((error: any) => {
        return this.handleError(error);
      })
    );

    return observable;
  }

  post (uri: any, data: any): Observable<any> {
    const url = `${urlApi}/${uri}`;

    const observable = this.http.post(url, data).pipe(
      // Success
      tap(() => {}),
      // Failed
      catchError((error: any) => {
        return this.handleError(error);
      })
    );

    return observable;
  }

  put (uri: any, data: any): Observable<any> {
    const url = `${urlApi}/${uri}`;

    const observable = this.http.put(url, data).pipe(
      // Success
      tap(() => {}),
      // Failed
      catchError((error: any) => {
        return this.handleError(error);
      })
    );

    return observable;
  }


  handleError(error: any) {
    switch (error.status) {
      case 300:
        break;
      
      case 400:
        break;
      
      case 500:
        break;
      
      default:
        break;
    }

    return throwError(error);
  }
}
