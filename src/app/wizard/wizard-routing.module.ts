import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WizardOverviewComponent } from "./wizard-overview/wizard-overview.component";
import { WizardWhatComponent } from "./wizard-what/wizard-what.component";
import { WizardWhenComponent } from "./wizard-when/wizard-when.component";
import { WizardWhoComponent } from "./wizard-who/wizard-who.component";
import { WizardComponent } from "./wizard.component";

const routes: Routes = [
    {
        path:'',
        redirectTo: '/overviewposts',
        pathMatch: 'full',
    },
    {
        path: ':id',
        component: WizardComponent,
        children: [
            {
                path: '',
                redirectTo: 'who',
                pathMatch: 'full'
            },
            {
              path: 'who',
              component: WizardWhoComponent,
            },
            {
              path: 'what',
              component: WizardWhatComponent,
            },
            {
              path: 'when',
              component: WizardWhenComponent,
            },
            {
              path: 'overview',
              component: WizardOverviewComponent,
            }
          ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WizardRoutingModule{}