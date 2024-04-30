import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';
import { MenuService } from 'src/app/services/menu.service';
import { MenuItem } from 'src/app/models/menu-item';
import { MenuType } from 'src/app/models/menu-type';

@Component({
  selector: 'app-editable-menu',
  templateUrl: './editable-menu.component.html',
  styleUrls: ['./editable-menu.component.css']
})

export class EditableMenuComponent implements OnInit {
    /** Admin cookie checker */
    adminCookie: boolean = false;

    /** Variable for edit mode */
    editMode: boolean = false;

    /** Original menu before making changes
     * @type {first: Array, second: Array, poke: Array}
     */
    originalMenu: MenuType = {
        first: [],
        second: [],
        poke: []
    };

    /** 
     * Current menu displayed on the interface
     * @type {first: Array, second: Array, poke: Array}
     */
    menu: MenuType = {
        first: [],
        second: [],
        poke: []
      };    

    /**
     * Component constructor
     * @param {CookieService} cookieService Checks admin cookies
     * @param {MenuService} menuService Takes menu from API
     */
    constructor(
        private cookieService: CookieService,
        private menuService: MenuService
    ) { }

    ngOnInit(): void {
        /** Searchs for admin's cookie */
        this.adminCookie = this.cookieService.checkCookie("admin");

        /** Only if admin cookie exists */
        if (this.adminCookie) {
            /** Takes first dishes from the API and export to menu.first & originaMenu.first */
            this.menuService.getDataFirst().subscribe(data => {
                this.menu.first = data;
                this.originalMenu.first = data;
            });

            /** Takes first dishes from the API and export to menu.second & originaMenu.second */
            this.menuService.getDataSecond().subscribe(data => {
                this.menu.second = data;
                this.originalMenu.second = data;
            });
            
            /** Takes first dishes from the API and export to menu.poke & originaMenu.poke */
            this.menuService.getDataPoke().subscribe(data => {
                this.menu.poke = data;
                this.originalMenu.poke = data;
            });
        }
    }

    /** Method to activating / deactivating edit mode */
    edit(): void {
        this.editMode = !this.editMode;
        this.originalMenu = this.menu;
    }

    /** Method for change API data */
    saveChanges(): void {
        this.editMode = !this.editMode;
    }

    /** Method to cancel edit mode and restore the original menu */
    cancelEdit(): void {
        this.editMode = !this.editMode;
        this.menu = this.originalMenu;
    }
}