import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

//We need to declare our interface
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


const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  


@Injectable({
  providedIn: 'root'
})

export class ContactService {

    baseUrl = environment.ApiBaseUrl;
    newContactMessage: ContactMessage = { name:"testAngularName",email:"testAngularEmail",message:"testAngularMessage" } as ContactMessage;


    constructor(private httpService: HttpClient){}
    
    /** GET: get the all the people */
    public getPeople(){
      return this.httpService.get<Person[]>(this.baseUrl + 'api/People');
    }
    
    /** GET: get the all the messages */
    public getMessages(): Observable<ContactMessage[]>{
        return this.httpService.get<ContactMessage[]>(this.baseUrl + 'api/Message');
    }

    /** POST: add a new hero to the database */
    public addContactMessage(m: ContactMessage): Observable<ContactMessage>{
        console.log('Post Method: ' + 'name:' + m.name + ', email:'+ m.email + ', message:' + m.message);
        return this.httpService.post<ContactMessage>(this.baseUrl + 'api/Message', m, httpOptions);
    }
        
}





  
