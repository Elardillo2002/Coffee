import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    /** Hamburger menu displayer */
    sidebar: boolean = false;

    /** Admin cookie checker */
    adminCookie: boolean = false;

    /** Test user cookie checker */
    pruebaCookie: boolean = false;

    /**
     * Component constructor
     * @param {CookieService} cookieService Checks admin cookies
     */
    constructor(private cookieService: CookieService) {}

    ngOnInit(): void {
        /** Searchs for admin's cookie */
        this.adminCookie = this.cookieService.checkCookie("admin");

        /** Searchs for test user's cookie */
        this.pruebaCookie = this.cookieService.checkCookie("prueba");
    }

    /** Method to activating / deactivating hamburger menu */
    changeSidebar() {
        this.sidebar = !this.sidebar;
    }
}
