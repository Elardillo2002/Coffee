import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})

export class LanguageComponent {
    /** Language transalation options */
    options = [
        {value: 'es', display: 'Español'},
        {value: 'en', display: 'English'},
        {value: 'ru', display: 'Русский'},
    ];

    /**
     * Component constructor
     * @param {TranslateService} translate Translates all the pages
     */
    constructor(private translate: TranslateService) {}

    /** Changes language for translation */
    onChange = (event: Event) => {
        const lang = (event.target as HTMLSelectElement).value;
        this.translate.use(lang);
    }
}
