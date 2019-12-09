import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  token: any;
  API_URL = 'http://localhost:3000';
  constructor(private http: HttpClient,
              private storage: NativeStorage) {

   }

   login(email: string , password: string) {
    return this.http.post(this.API_URL + '/login',{email, passWord: password}
    ).pipe(
      tap(data => {
         return data;
      }),
    );

   }

   register(username: string, email: string , password: string) {
    return this.http.post(this.API_URL + '/register', {userName: username, email, passWord: password}
    ).pipe(
      tap(data => {
         return data;
      }),
    );

   }
}
