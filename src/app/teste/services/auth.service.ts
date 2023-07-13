import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn(): boolean {
    let storedValue = localStorage.getItem('autenticado');
    if(storedValue == 'true'){
        return true
    }
    else{
        return false
    }
  }
}
