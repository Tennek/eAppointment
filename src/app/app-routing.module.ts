import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LanguagesResolverService, SelectedLanguageResolverService } from './language-bar/language-resolver.service';
import { OverviewPostResolverService } from './overview-post/overview-post-resolver.service';
import { OverviewPostComponent } from './overview-post/overview-post.component';

import { WizardModule } from './wizard/wizard.module';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/overviewposts',
    pathMatch: 'full',
  },
  {
    path:'overviewposts',
    component: OverviewPostComponent,
    resolve: {
      LanguagesResolverService,
      SelectedLanguageResolverService,
      posts: OverviewPostResolverService
    }
  },
  {
    path:'wizard',
    loadChildren: () => WizardModule,
    resolve: {
      LanguagesResolverService,
      SelectedLanguageResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
