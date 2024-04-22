import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})

export class LanguageComponent {
    options = [
        {value: 'es', display: 'Español'},
        {value: 'en', display: 'English'},
        {value: 'ru', display: 'Русский'},
    ];

    constructor(private translate: TranslateService) {}

    onChange = (event: Event) => {
        const lang = (event.target as HTMLSelectElement).value;
        this.translate.use(lang);
    }
}
