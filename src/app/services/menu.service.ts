import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    /** API url with CORS solution */
    url: string = "api/dish/all";

    /** JSON url conection */
    urlFirst: string = "http://localhost:3000/First";

    /** JSON url conection */
    urlSecond: string = "http://localhost:3000/Second";

    /** JSON url conection */
    urlPoke: string = "http://localhost:3000/Poke";

    /**
     * Component constructor
     * @param httpClient 
     */
    constructor(private httpClient: HttpClient) { }

    /** Get API data using API url */
    getDataMenu(): Observable<any> {
        return this.httpClient.get<any>(this.url);
    }

    /** Get JSON data using urlFirst */
    getDataFirst(): Observable<any> {
        return this.httpClient.get<any>(this.urlFirst);
    }

    /** Get JSON data using urlSecond */
    getDataSecond(): Observable<any> {
        return this.httpClient.get<any>(this.urlSecond);
    }

    /** Get JSON data using urlPoke */
    getDataPoke(): Observable<any> {
        return this.httpClient.get<any>(this.urlPoke);
    }
}
