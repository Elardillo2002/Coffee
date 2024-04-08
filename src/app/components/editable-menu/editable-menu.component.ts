import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';

interface MenuItem {
    name: string,
    price: number,
    date: string
}

interface MenuType {
    First: MenuItem[];
    Second: MenuItem[];
    Poke: MenuItem[];
}

@Component({
  selector: 'app-editable-menu',
  templateUrl: './editable-menu.component.html',
  styleUrls: ['./editable-menu.component.css']
})

export class EditableMenuComponent implements OnInit {
    adminCookie: boolean = false;
    editMode: boolean = true;
    editItem: MenuItem | null = null;

    urlFirst: string = "http://localhost:3000/First";
    urlSecond: string = "http://localhost:3000/Second";
    urlPoke: string = "http://localhost:3000/Poke";

    menu: MenuType = {
        First: [],
        Second: [],
        Poke: []
      };    

    constructor(
        private cookieService: CookieService
    ) { }

    ngOnInit(): void {
        this.adminCookie = this.cookieService.checkCookie("admin");

        if (this.adminCookie) {
            this.loadData(this.urlFirst)
                .then(menuItems => {
                    this.menu.First = menuItems;
                });

            this.loadData(this.urlSecond)
                .then(menuItems => {
                    this.menu.Second = menuItems;
                });

            this.loadData(this.urlPoke)
                .then(menuItems => {
                    this.menu.Poke = menuItems;
                });
        }
    }

    loadData(url: string): Promise<MenuItem[]> {
        return new Promise((resolve) => {
            const conection = new XMLHttpRequest();

            conection.addEventListener("load", () => {
                if (conection.status >= 200 && conection.status < 300) {
                    const menu = JSON.parse(conection.response) as MenuItem[];
                    resolve(menu);
                }
            });

            conection.open("GET", url, true);
            conection.send();
        });
    }

    edit() {
        this.editMode = !this.editMode;
    }

    saveChanges() {
        this.editMode = !this.editMode;
    }

    cancelEdit() {
        this.editMode = !this.editMode;
    }
}