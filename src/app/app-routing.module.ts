import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CafeteriaComponent } from './components/cafeteria/cafeteria.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "cafeteria", component: CafeteriaComponent },
  { path: "menu", component: MenuComponent },
  { path: "contacto", component: ContactoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
