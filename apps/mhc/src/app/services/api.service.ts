import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ApiService {
  private apiUrl = 'https://35.238.189.228/api/contact' // Replace with your API URL

  constructor(private http: HttpClient) {}

  sendContactForm(data: FormGroup): Observable<object> {
    console.log('Sending data to API:', data.value);
    return this.http.post(this.apiUrl, data);

    }
  }
