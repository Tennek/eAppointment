import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { OverviewPostEffects } from "../overview-post/store/overview-post.effects";

import { WizardRoutingModule } from "./wizard-routing.module";
import { WizardComponent } from "./wizard.component";

@NgModule({
    declarations: [
        WizardComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        WizardRoutingModule,
        EffectsModule.forFeature([OverviewPostEffects])
    ]
})
export class WizardModule{}