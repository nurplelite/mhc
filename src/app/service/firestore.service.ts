import { Injectable } from '@angular/core';

/**
 * Service to handle Firestore-related operations.
 */
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor() { }

  fetchDocument(): void {
    console.log('Fetching document...')
  }
}
