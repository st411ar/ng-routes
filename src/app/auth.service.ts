import { Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  localStorageKey = 'sessionUserName';

  signIn(login: string, password: string): boolean {
    if ( login === 'root' && password === 'rootpassword' ) {
      localStorage.setItem(this.localStorageKey, 'ololo user name');
      return true;
    }
    return false;
  }

  signOut(): any {
    localStorage.removeItem(this.localStorageKey);
  }

  getLocalStorageValue(): any {
    return localStorage.getItem(this.localStorageKey);
  }

  isSignedIn(): boolean {
    return this.getLocalStorageValue() !== null;
  }
}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
