import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CafeteriaComponent } from './components/cafeteria/cafeteria.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { EditableMenuComponent } from './components/editable-menu/editable-menu.component';
import { UsersAccessComponent } from './components/users-access/users-access.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' }, // Principal page
  { path: "home", component: HomeComponent },
  { path: "cafeteria", component: CafeteriaComponent },
  { path: "menu", component: MenuComponent },
  { path: "contact", component: ContactComponent },
  { path: "access", component: UsersAccessComponent },
  { path: "emenu", component: EditableMenuComponent },
  { path: "notFound", component: NotFoundPageComponent },
  { path: "**", component: NotFoundPageComponent } // For not found pages (404)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
