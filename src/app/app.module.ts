import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
import { JsonReaderComponent } from './components/json-reader/json-reader.component';
import { CoffeeCardComponent } from './components/coffee-card/coffee-card.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { FormsModule } from '@angular/forms';
import { EditableMenuComponent } from './components/editable-menu/editable-menu.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LanguageComponent } from './components/language/language.component';
import { ClientsAccessComponent } from './components/clients-access/clients-access.component';

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
    JsonReaderComponent,
    CoffeeCardComponent,
    ContactComponent,
    NotFoundPageComponent,
    EditableMenuComponent,
    LogoutComponent,
    LanguageComponent,
    ClientsAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // For ngModel use
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/languages/', '.json');
}
