import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-users-access',
  templateUrl: './users-access.component.html',
  styleUrls: ['./users-access.component.css']
})
export class UsersAccessComponent {
    /** Email user variable. ngModel*/
    email: string = "";
    /** Password user variable. ngModel */
    password: string = "";

    /**
     * Component constructor
     * @param {LoginService} loginService 
     */
    constructor(private loginService: LoginService) {}

    /** Checks user data and redirect user */
    access() {
        this.loginService.login(this.email, this.password).subscribe(
            (response) => {
                if (response === false) {
                    let p: HTMLElement | null = document.querySelector("main p");
                    p!.style.color = "red";
                    p!.textContent = "Las credenciales son incorrectas";
                }
            }
        )
    }
}