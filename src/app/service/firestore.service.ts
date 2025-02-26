import { Injectable, inject, NgZone } from '@angular/core'
import { Firestore, doc, docData, setDoc, updateDoc, collection, getDoc, DocumentReference, CollectionReference } from '@angular/fire/firestore'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class FirestoreService {
  private firestore = inject(Firestore)
  private zone = inject(NgZone)

  private getCollection<T>(collectionName: string): CollectionReference<T> {
    return collection(this.firestore, collectionName) as CollectionReference<T>
  }

  private getDocumentRef<T>(collectionName: string, docId: string): DocumentReference<T> {
    return doc(this.getCollection<T>(collectionName), docId) as DocumentReference<T>
  }

  getDocument<T>(collectionName: string, docId: string): Observable<T | null> {
    try {
      const docRef = this.getDocumentRef<T>(collectionName, docId)
      return docData(docRef) as Observable<T | null>
    } catch (error) {
      console.error(`Failed to get document: ${collectionName}/${docId}`, error)
      throw error
    }
  }

  async createDocument<T>(collectionName: string, docId: string, data: T): Promise<void> {
    try {
      const docRef = this.getDocumentRef<T>(collectionName, docId)
      await this.zone.run(() => setDoc(docRef, JSON.parse(JSON.stringify(data))))
      console.log(`Document created: ${collectionName}/${docId}`)
    } catch (error) {
      console.error(`Failed to create document: ${collectionName}/${docId}`, error)
      throw error
    }
  }

  async updateDocument<T>(collectionName: string, docId: string, data: Partial<T>): Promise<void> {
    try {
      const docRef = this.getDocumentRef<T>(collectionName, docId)
      await this.zone.run(() => updateDoc(docRef, JSON.parse(JSON.stringify(data))))
      console.log(`Document updated: ${collectionName}/${docId}`)
    } catch (error) {
      console.error(`Failed to update document: ${collectionName}/${docId}`, error)
      throw error
    }
  }
}
