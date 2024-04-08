import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-backOffice',
    templateUrl: './backOffice.component.html',
    styleUrls: ['./backOffice.component.css']
})

export class BackOfficeComponent {
    email: string = "";
    password: string = "";
    errorMessage: string = "";

    constructor(private loginService: LoginService) {}

    Access() {
        this.loginService.login(this.email, this.password, this.errorMessage).subscribe(
            (response) => {
                if (response != "true") {
                    let p: HTMLElement | null = document.querySelector("main p");
                    p!.style.color = "red";
                    p!.textContent = response;
                }
            }
        )
    }
}
