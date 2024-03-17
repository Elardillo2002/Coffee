import { Component, Input, OnInit } from '@angular/core';

interface Menu {
    id_menu: number;
    date: string;
    dish: { name: string, price: number }[];
  }

@Component({
  selector: 'app-json-reader',
  templateUrl: './json-reader.component.html',
  styleUrls: ['./json-reader.component.css']
})

export class JsonReaderComponent implements OnInit {
    menu: Menu = {
        id_menu: 0,
        date: '',
        dish: []
      };    

    ngOnInit() {
        this.loadData()
            .then(menu => {
                this.menu = menu;
            });
    }

    loadData(): Promise<Menu> {
        return new Promise((resolve, reject) => {
            const conection = new XMLHttpRequest();

            conection.addEventListener("load", () => {
                if (conection.status >= 200 && conection.status < 300) {
                    const menu = JSON.parse(conection.response) as Menu;
                    resolve(menu);
                }
            });

            conection.addEventListener("error", (error) => {
                reject(error);
            });

            conection.open("GET", "http://localhost:3000/menu", true);
            conection.send();
        });
    }
}