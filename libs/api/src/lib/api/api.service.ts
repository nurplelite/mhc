// === api.service.ts ===
import { Injectable, signal } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { firstValueFrom, Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class ApiService {
  private token$ = signal<string | null>(null)
  private readonly STORAGE_KEY = 'sessionToken'
  private apiUrl = 'http://localhost:3000'// Local API URL
  // private apiUrl = 'https://api.madhareconsulting.com' // Production API URL
  private accountId = 'djps'

  constructor(private http: HttpClient) {}

  async init(siteId: string, accountId: string): Promise<void> {
    console.log('Initializing API service with siteId:', siteId, 'and accountId:', accountId)

    if (typeof window === 'undefined'){
      console.log('Running on server, skipping API initialization')
      return; // SSR guard
    } // SSR guard
    this.accountId = accountId
    const existing = localStorage.getItem(this.STORAGE_KEY);
    console.log('Existing token:', existing)
    if (existing) {
      this.token$.set(existing)
      return;
    }
    try{
    const { token } = await firstValueFrom(
      this.http.post<{ token: string }>(`${this.apiUrl}/session/start/${siteId}`, {})
    );
    this.token$.set(token)
    console.log('New token:', token)
    // Set the token in local storage
    localStorage.setItem(this.STORAGE_KEY, token)
  }catch (error) {
      console.error('Error initializing API service:', error)
      throw error
    }
  }

  getToken(): string | null {
    return this.token$() ?? localStorage.getItem(this.STORAGE_KEY)
  }

  submitForm(data: any): Observable<object> {
    return this.http.post(`${this.apiUrl}/form/submit/${this.accountId}`, data)
  }
}
