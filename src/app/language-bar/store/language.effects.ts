import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { map, mergeMap, tap } from 'rxjs/operators';

import * as LanguagesActions from './language.actions';
import { LanguageService } from 'src/app/services/language.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageEffects {

    fetchSupportedLanguages = createEffect(() => this.actions$.pipe(
      ofType(LanguagesActions.FETCH_LANGUAGES),
      mergeMap(() => {
        return this.languageService.getSupportedLanguages().pipe(
          map( supportedLanguages => ({ type: LanguagesActions.SET_LANGUAGES, payLoad: supportedLanguages }))
        )
      })
    ));

    fetchSelectedLanguage = createEffect(() => this.actions$.pipe(
      ofType(LanguagesActions.FETCH_SELECTEDLANGUAGE),
      mergeMap(() => {
        return this.languageService.getDefaultLanguage().pipe(
          map( selectedLanguage => ({ type: LanguagesActions.SET_SELECTEDLANGUAGE, payLoad: selectedLanguage }))
        )
      })
    ));

    setSelectedLanguage = createEffect(() => this.actions$.pipe(
        ofType(LanguagesActions.SET_SELECTEDLANGUAGE),
        tap(({payLoad}) => {
          this.translateService.use(payLoad);
        })
    ), {dispatch: false});

    constructor(
        private actions$: Actions,
        private languageService: LanguageService,
        private translateService: TranslateService
    ) {}
}