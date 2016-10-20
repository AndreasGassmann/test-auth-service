import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthService {

  constructor(private http: Http, private storage: Storage) {
    console.log('Hello AuthService Provider');
    this.storage.set('test', 'test');
  }

  setConfig(options) {
    console.log('Setting options: ', options);
  }
}
