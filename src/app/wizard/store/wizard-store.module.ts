import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { wizardReducer } from './wizard.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('wizardStore', wizardReducer),
    ]
})
export class WizardStoreModule { }