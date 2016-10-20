import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
export declare class AuthService {
    private http;
    private storage;
    constructor(http: Http, storage: Storage);
    setConfig(options: any): void;
}
