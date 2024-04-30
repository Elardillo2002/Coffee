import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    /**
     * Component constructor
     * @param router 
     */
    constructor(private router: Router) { }

    /** Method for users login */
    login(user: string, password: string): Observable<boolean> {
        /** Admin's account */
        let accountAdmin = {
            user: "admin",
            password: "admin"
        };

        /** Test user's account */
        let accountPrueba = {
            user: "prueba",
            password: "prueba"
        }

        /** Expire time for cookie */
        const date = new Date();
        date.setTime(date.getTime() + (24 * 60 * 60 * 1000));

        /** If login is successful, creates a cookie and redirects to editable-menu or menu */
        if (user == accountAdmin.user && password == accountAdmin.password) {
            document.cookie = `admin = true; path = /; expires = ${date}`;
            this.router.navigate(["/emenu"]);

            return of(true);

        } else if (user == accountPrueba.user && password == accountPrueba.password) {
            document.cookie = `prueba = true; path = /; expires = ${date}`;
            this.router.navigate(["/menu"]);

            return of(true);

        } else {
            return of(false);
        }
    }
}