// === api.service.ts ===
import { Injectable, signal } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { firstValueFrom, Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class ApiService {
  private token$ = signal<string | null>(null)
  private readonly STORAGE_KEY = 'session'
  //private apiUrl = 'http://localhost:3000'// Local API URL
  private apiUrl = 'https://api.madhareconsulting.com' // Production API URL
  private accountId = 'djps'

  constructor(private http: HttpClient) {}

async init(siteId: string, accountId: string): Promise<void> {
  this.accountId = accountId;

  const existing = localStorage.getItem(this.STORAGE_KEY);
  if (existing) {
    this.token$.set(existing);
    return;
  }

  try {
    const { token } = await firstValueFrom(
      this.http.post<{ token: string }>(
        `${this.apiUrl}/session/start/${siteId}`,
        {},                     // body
        { withCredentials: true } // options
      )
    );
    this.token$.set(token);
    localStorage.setItem(this.STORAGE_KEY, token);
    console.log('New token:', token);
  } catch (error) {
    console.error('Error initializing API service:', error);
    throw error;
  }
}

  getToken(): string | null {
    return this.token$() ?? localStorage.getItem(this.STORAGE_KEY)
  }

  submitForm(data: any): Observable<object> {
    return this.http.post(`${this.apiUrl}/form/submit/${this.accountId}`, data, {withCredentials: true})
  }
}
