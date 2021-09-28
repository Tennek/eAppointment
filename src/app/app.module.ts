import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewPostComponent } from './overview-post/overview-post.component';
import { LanguageBarComponent } from './language-bar/language-bar.component';
import { FooterComponent } from './footer/footer.component';

import { RootStoreModule } from './store/root-store.module';
import { WizardModule } from './wizard/wizard.module';
import { WizardStoreModule } from './wizard/store/wizard-store.module';

@NgModule({
  declarations: [
    AppComponent,
    OverviewPostComponent,
    LanguageBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    RootStoreModule,
    WizardStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
