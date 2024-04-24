import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-clients-access',
  templateUrl: './clients-access.component.html',
  styleUrls: ['./clients-access.component.css']
})
export class ClientsAccessComponent {
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
