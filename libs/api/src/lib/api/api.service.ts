import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private token$ = signal<string | null>(null);
  private readonly STORAGE_KEY = 'sessionToken';
  private apiUrl = 'https://api.madhareconsulting.com'; // prod


  constructor(private http: HttpClient) {}

  async init(siteId: string) {
    const existing = localStorage.getItem(this.STORAGE_KEY);
    if (existing) {
      this.token$.set(existing);
      return;
    }

    const { token } = await firstValueFrom(
      this.http.post<{ token: string }>(`/session/start/${ siteId }`, {})
    );
    this.token$.set(token);
    localStorage.setItem(this.STORAGE_KEY, token);
  }

  getToken(): string | null {
    return this.token$() ?? localStorage.getItem(this.STORAGE_KEY);
  }


  sendForm(data: any): Observable<object> {
    console.log('Sending data to API:', data);
    return this.http.post(`${this.apiUrl}/contact/form/submit/`, data)

    }
}
