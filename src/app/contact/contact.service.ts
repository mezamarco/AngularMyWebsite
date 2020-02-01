import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Observable, Subscribable } from 'rxjs';

//We need to declare the interface
interface Person {
    firstName: string;
    lastName: number;
    age: number;
}


interface ContactMessage{
    name:string
    email:string
    message:string
}


@Injectable({
  providedIn: 'root'
})
export class ContactService {

    baseUrl = environment.ApiBaseUrl;
    constructor(private httpService: HttpClient) { }

    public getPeople(){
      //In the constructor of the component that will make the API call and then display the data
      return this.httpService.get<Person[]>(this.baseUrl + 'api/People');
    }

    public saveContactMessage(message:ContactMessage){
      return this.httpService.post<ContactMessage>(this.baseUrl + 'api/toDo', message,{
        headers: new HttpHeaders({
          'Content-type':'application/json'
        })
      })
      .pipe(catchError(this.handleError));
    }

    private handleError(errorResponse: HttpErrorResponse) {
      if (errorResponse.error instanceof ErrorEvent) {
        console.error('Client Side Error :', errorResponse.error.message);
      } else {
        console.error('Server Side Error :', errorResponse);
      }
      // return an observable with a meaningful error message to the end user
      return new ErrorObservable(subscriber => {'There is a problem with the service. We are notified & working on it. Please try again later.'});
    }
}



