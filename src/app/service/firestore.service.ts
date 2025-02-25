import { Injectable, inject } from '@angular/core'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class FirestoreService {
  private firestore = inject(AngularFirestore)

  getDocument<T>(collection: string, docId: string): Observable<T | null> {
    return this.firestore.collection<T>(collection).doc(docId).get().pipe(
      map((doc) => (doc.exists ? (doc.data() as T) : null))
    )
  }

  async createDocument<T>(collection: string, docId: string, data: T): Promise<void> {
    await this.firestore.collection(collection).doc(docId).set(data)
  }

  async updateDocument<T>(collection: string, docId: string, data: Partial<T>): Promise<void> {
    await this.firestore.collection(collection).doc(docId).update(data)
  }
}
