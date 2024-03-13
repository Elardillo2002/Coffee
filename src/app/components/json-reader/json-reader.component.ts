import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-reader',
  templateUrl: './json-reader.component.html',
  styleUrls: ['./json-reader.component.css']
})

export class JsonReaderComponent {
    menu: any;
    

    ngOnInit() {
        console.log("hola");
        this.ajax();
    }

    ajax() {
        var success: (data: any) => void;
        var data: any;
        const conexion = new XMLHttpRequest();

        success = (response: any) => {
            console.log("Respuesta exitosa: ", response);
            this.menu = response.menu;
        }

        conexion.addEventListener("load", () => {
            if (conexion.status >= 200 && conexion.status < 300) {
                success(JSON.parse(conexion.response));
            }
        });

        conexion.open("GET", "http://localhost:3000/", true);
        conexion.send(JSON.stringify(data));
    }
}