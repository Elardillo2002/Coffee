import { Component } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})

export class LogoutComponent {
    adminCookie: boolean = false;

    // Calls cookieService and check if exists
    constructor(
        private cookieService: CookieService
    ) {}

    ngOnInit(): void {
        this.adminCookie = this.cookieService.checkCookie("admin");
    }

    // Delete admin cookie and reload page
    logout() {
        document.cookie = "admin=;Max-Age=-999999";
        location.reload();
    }
}
