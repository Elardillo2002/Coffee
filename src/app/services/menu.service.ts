import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    url: string = "http://localhost:9995";
    urlFirst: string = "http://localhost:3000/First";
    urlSecond: string = "http://localhost:3000/Second";
    urlPoke: string = "http://localhost:3000/Poke";

    constructor(private httpClient: HttpClient) { }

    getDataMenu(): Observable<any> {
        return this.httpClient.get<any>(this.url);
    }

    getDataFirst(): Observable<any> {
        return this.httpClient.get<any>(this.urlFirst);
    }

    getDataSecond(): Observable<any> {
        return this.httpClient.get<any>(this.urlSecond);
    }

    getDataPoke(): Observable<any> {
        return this.httpClient.get<any>(this.urlPoke);
    }
}
