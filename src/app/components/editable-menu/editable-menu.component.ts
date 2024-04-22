import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';

interface MenuItem {
    id: number,
    name: string,
    price: number,
    date: string
}

interface MenuType {
    first: MenuItem[];
    second: MenuItem[];
    poke: MenuItem[];
}

@Component({
  selector: 'app-editable-menu',
  templateUrl: './editable-menu.component.html',
  styleUrls: ['./editable-menu.component.css']
})

export class EditableMenuComponent implements OnInit {
    adminCookie: boolean = false;
    editMode: boolean = false;
    editItem: MenuItem | null = null;

    urlFirst: string = "http://localhost:3000/First";
    urlSecond: string = "http://localhost:3000/Second";
    urlPoke: string = "http://localhost:3000/Poke";

    originalMenu: MenuType = {
        first: [],
        second: [],
        poke: []
    };

    menu: MenuType = {
        first: [],
        second: [],
        poke: []
      };    

    constructor(private cookieService: CookieService) { }

    ngOnInit(): void {
        this.adminCookie = this.cookieService.checkCookie("admin");

        if (this.adminCookie) {
            this.loadData(this.urlFirst)
                .then(menuItems => {
                    this.menu.first = menuItems;
                });

            this.loadData(this.urlSecond)
                .then(menuItems => {
                    this.menu.second = menuItems;
                });

            this.loadData(this.urlPoke)
                .then(menuItems => {
                    this.menu.poke = menuItems;
                });
        }
    }

    // TODO: Mejorar el enlace con JSON
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

    edit(): void {
        this.editMode = !this.editMode;
        this.originalMenu = this.menu;
    }

    saveChanges(): void {
        this.editMode = !this.editMode;
    }

    cancelEdit(): void {
        this.editMode = !this.editMode;
        this.menu = this.originalMenu;
    }
}