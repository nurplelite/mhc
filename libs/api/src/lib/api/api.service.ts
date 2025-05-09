import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private token$ = signal<string | null>(null);
  private readonly STORAGE_KEY = 'sessionToken';
  private accountId = 'djps'
  private apiUrl = 'http://localhost:3000'; // dev
  //private apiUrl = 'https://api.madhareconsulting.com'; // prod


  constructor(private http: HttpClient) {}

  async init(siteId: string, accountId: string): Promise<void> {
    console.log('Initializing API service with siteId:', siteId, 'and accountId:', accountId);
    if( typeof window === 'undefined' ) {
      return;
    }
    this.accountId = accountId
    const existing = localStorage.getItem(this.STORAGE_KEY);
    if (existing) {
      this.token$.set(existing);
      return;
    }

    const { token } = await firstValueFrom(
      this.http.post<{ token: string }>(`${this.apiUrl}/session/start/${ siteId }`, {})
    );
    this.token$.set(token);
    localStorage.setItem(this.STORAGE_KEY, token);
    console.log('Token set in localStorage:', token);
    console.log('Token set in signal:', this.token$());
  }

  getToken(): string | null {
    console.log('Getting token from signal:', this.token$());
    return this.token$() ?? localStorage.getItem(this.STORAGE_KEY);
  }


  submitForm(data: any): Observable<object> {
    console.log('Sending data to API:',this.apiUrl, this.accountId, data);
    return this.http.post(`${this.apiUrl}/form/submit/${this.accountId}`, data).pipe(
      tap(() => console.log('📡 HTTP request fired!')))

    }
}
