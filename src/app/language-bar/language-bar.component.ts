import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as fromApp from '../store/app.reducer';
import { setSelectedLanguage } from './store/language.actions';

@Component({
  selector: 'app-language-bar',
  templateUrl: './language-bar.component.html',
  styleUrls: ['./language-bar.component.css']
})
export class LanguageBarComponent implements OnInit, OnDestroy {

  supportedLanguages: string[] | undefined;
  supportedLanguagesSub: Subscription | undefined;

  selectedLanguage: string | undefined;
  selectedLanguageSub: Subscription | undefined;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.supportedLanguagesSub = this.store.select('language')
      .pipe(
        map(languageState => languageState.supportedLanguages)
      )
      .subscribe(
        (supportedLanguages: string[]) => {
          this.supportedLanguages = supportedLanguages.slice().sort((a,b) => (a > b ? 1 : -1));
        }
      );

    this.selectedLanguageSub = this.store.select('language')
      .pipe(
        map(languageState => languageState.selectedLanguage)
      )
      .subscribe(
        (selectedLanguage: string) => {
          this.selectedLanguage = selectedLanguage;
        }
      );
  }

  ngOnDestroy() {
    if(this.supportedLanguagesSub)
      this.supportedLanguagesSub.unsubscribe();

    if(this.selectedLanguageSub)
      this.selectedLanguageSub.unsubscribe();
  }

  onSelectLanguage(selectLanguage: string) {
    this.store.dispatch(setSelectedLanguage({payLoad: selectLanguage}));
  }
}
