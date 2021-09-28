import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import * as fromApp from './app.reducer';
import { LanguageEffects } from '../language-bar/store/language.effects';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot(fromApp.appReducer),
        EffectsModule.forRoot([LanguageEffects])
    ]
})
export class RootStoreModule { }