import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ApiService {
  private collectionName = 'contacts';
  //private apiUrl = 'https://localhost:3000/api' // dev
  private apiUrl = 'https://api.madhareconsulting.com'; // prod


  constructor(private http: HttpClient) {}

  sendContactForm(data: FormGroup): Observable<object> {
    console.log('Sending data to API:', data.value);
    return this.http.post(`${this.apiUrl}/contact/form/submit/${this.collectionName}`,data.value)

    }
  }
