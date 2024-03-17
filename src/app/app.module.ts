import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { StickyPhotoComponent } from './components/sticky-photo/sticky-photo.component';
import { DescriptionComponent } from './components/description/description.component';
import { SecondaryDescriptionComponent } from './components/secondary-description/secondary-description.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CafeteriaComponent } from './components/cafeteria/cafeteria.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { JsonReaderComponent } from './components/json-reader/json-reader.component';
import { CoffeeCardComponent } from './components/coffee-card/coffee-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StickyPhotoComponent,
    DescriptionComponent,
    SecondaryDescriptionComponent,
    FooterComponent,
    HomeComponent,
    CafeteriaComponent,
    MenuComponent,
    ContactoComponent,
    JsonReaderComponent,
    CoffeeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
