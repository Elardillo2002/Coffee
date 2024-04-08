import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CookieService {
    constructor() { }

    // Checks for "name" cookie and returns true or false
    checkCookie(name: string): boolean {
        return document.cookie.split(';').some((item) => 
            item.trim().startsWith(name + '=')
        );
    }
}
