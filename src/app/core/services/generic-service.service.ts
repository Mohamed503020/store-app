import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { APIResponseModel } from '../models/APIResponseModel';

@Injectable({
  providedIn: 'root'
})
export class GenericServiceService {
  httpOptions;
  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // ,Authorization: 'my-auth-token'
      })
    };
   }

  private setHeaders(key: string, value: string)
  {
    this.httpOptions.headers.set(key, value);
  }

  private handleError(error: HttpErrorResponse) {
    // Generic Error handler
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Write error details in Generic error log

    // Return an observable with a user-facing error message.
    return throwError(
      ()=>new Error('Error occured, please try again')
    )
  }

  getAll( APIRoute: string): Observable<APIResponseModel>
  {
    return this.httpClient.get <APIResponseModel>(`${APIRoute}`,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }



  getByID(id:number,APIRoute: string):  Observable<APIResponseModel>
  {
    return this.httpClient.get <APIResponseModel>(`${APIRoute}/${id}`,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  post (newObject: any,APIRoute: string):Observable<APIResponseModel>
  {
    return this.httpClient.post <APIResponseModel>(`${APIRoute}`,newObject,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  put(id:number, newObject: any,APIRoute: string):  Observable<APIResponseModel>
  {
    return this.httpClient.put <APIResponseModel>(`${APIRoute}/${id}`,newObject,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  delete (id: any,APIRoute: string): Observable<APIResponseModel>
  {
    return this.httpClient.delete <APIResponseModel>(`${APIRoute}/${id}`,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
}
