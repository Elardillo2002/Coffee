import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    sidebar: boolean = false;
    adminCookie: boolean = false;
    pruebaCookie: boolean = false;

    constructor(private cookieService: CookieService) {}

    ngOnInit(): void {
        this.adminCookie = this.cookieService.checkCookie("admin");
        this.pruebaCookie = this.cookieService.checkCookie("prueba");
    }

    changeSidebar() {
        this.sidebar = !this.sidebar;
    }
}
