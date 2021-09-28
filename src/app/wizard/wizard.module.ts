import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { OverviewPostEffects } from "../overview-post/store/overview-post.effects";

import { WizardRoutingModule } from "./wizard-routing.module";
import { WizardComponent } from "./wizard.component";
import { WizardWhoComponent } from './wizard-who/wizard-who.component';
import { WizardWhatComponent } from './wizard-what/wizard-what.component';
import { WizardWhenComponent } from './wizard-when/wizard-when.component';
import { WizardOverviewComponent } from './wizard-overview/wizard-overview.component';
import { FormsModule } from '@angular/forms';
import { WizardStoreModule } from "./store/wizard-store.module";

@NgModule({
    declarations: [
        WizardComponent,
        WizardWhoComponent,
        WizardWhatComponent,
        WizardWhenComponent,
        WizardOverviewComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        WizardRoutingModule,
    ]
})
export class WizardModule{}