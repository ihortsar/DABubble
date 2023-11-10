import { Injectable } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  constructor(private auth: Auth) {}

  async registerWithEmailAndPassword(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      console.log('user created', userCredential);
    } catch (err) {
      console.error(err);
    }
  }

  async loginWithEmailAndPassword(email: string, password: string) {
    console.log(email, password);

    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      console.log('login successfull:', userCredential);
    } catch (err) {
      console.error(err);
    }
  }
}