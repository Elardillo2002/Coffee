import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Coffee';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es', 'ru']);
    const lang = this.translate.getBrowserLang();
    if (lang != 'en' && lang != 'es' && lang != 'ru') {
      this.translate.setDefaultLang('es');
    } else {
      this.translate.use(lang);
    }
  }
}