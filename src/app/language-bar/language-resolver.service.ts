import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import * as fromApp from '../store/app.reducer';
import * as LanguagesActions from '../language-bar/store/language.actions';
import { Store } from "@ngrx/store";
import { Actions, ofType } from "@ngrx/effects";
import { map, switchMap, take } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LanguagesResolverService implements Resolve<string[]> {

    constructor(
        private store: Store<fromApp.AppState>,
        private actions$: Actions
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.select('language').pipe(
            take(1),
            map(languageState => {
                return languageState.supportedLanguages;
            }),
            switchMap(languages => {
                if(languages.length === 0) {
                    this.store.dispatch(LanguagesActions.fetchLanguages());
                }
                return of(languages);
            })
        );
    }
}

@Injectable({
    providedIn: 'root'
})
export class SelectedLanguageResolverService implements Resolve<string> {

    constructor(
        private store: Store<fromApp.AppState>,
        private actions$: Actions
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.select('language').pipe(
            take(1),
            map(languageState => {
                return languageState.selectedLanguage;
            }),
            switchMap(selectedLanguage => {
                if(selectedLanguage.length === 0) {
                    this.store.dispatch(LanguagesActions.fetchSelectedLanguage());
                }
                return of(selectedLanguage);
            })
        );
    }
}