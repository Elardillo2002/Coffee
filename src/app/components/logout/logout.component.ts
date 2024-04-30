import { Component } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})

export class LogoutComponent {
    /** Admin's cookie checker */
    adminCookie: boolean = false;

    /** Test user's cookie checker */
    pruebaCookie: boolean = false;

    /**
     * Component constructor
     * @param {CookieService} cookieService Checks admin cookies
     */
    constructor(
        private cookieService: CookieService
    ) {}

    ngOnInit(): void {
        /** Searchs for admin's cookie */
        this.adminCookie = this.cookieService.checkCookie("admin");

        /** Searchs for test user's cookie */
        this.pruebaCookie = this.cookieService.checkCookie("prueba");
    }

    /** Delete user's cookie and reload the page */
    logout() {
        if (this.adminCookie) {
            document.cookie = "admin=;Max-Age=-999999";
            location.reload();
        } else if (this.pruebaCookie) {
            document.cookie = "prueba=;Max-Age=-999999";
            location.reload();            
        }
    }
}
