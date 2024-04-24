import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    accountActive = false;

    constructor(private router: Router) { }

    login(user: string, password: string, errorMessage: string): Observable<string> {
        // Valid account
        let accountAdmin = {
            user: "admin",
            password: "admin"
        };

        let accountPrueba = {
            user: "prueba",
            password: "prueba"
        }

        // Expire time for cookie
        const date = new Date();
        date.setTime(date.getTime() + (24 * 60 * 60 * 1000));

        // If login is successful, creates a cookie and redirects to editable-menu
        if (user == accountAdmin.user && password == accountAdmin.password) {
            document.cookie = `admin = true; path = /; expires = ${date}`;
            this.router.navigate(["/emenu"]);

            return of("true");
        } else if (user == accountPrueba.user && password == accountPrueba.password) {
            document.cookie = `prueba = true; path = /; expires = ${date}`;
            this.router.navigate(["/menu"]);

            return of("true");

        } else {
            errorMessage = "Las credenciales son incorrectas."
            return of(errorMessage);
        }
    }
}