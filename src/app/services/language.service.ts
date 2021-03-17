import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const supportedLanguages : string[] = [
  'en'
  ,'nl'
  ,'fr'
  ,'de'
  ,'es'
]

const defaultLanguage : string = 'en';

const supportedLanguagesForPost = [
  { postId: '1', supportedLanguages: ['en','nl'] }
  , { postId: '2', supportedLanguages: ['fr','de'] }
  , { postId: '3', supportedLanguages: ['es','nl'] }
  , { postId: '4', supportedLanguages: ['fr','nl'] }
  , { postId: '5', supportedLanguages: ['en','fr'] }
  , { postId: '6', supportedLanguages: ['fr','de'] }
  , { postId: '7', supportedLanguages: ['en','nl'] }
  , { postId: '8', supportedLanguages: ['en','fr'] }
  , { postId: '9', supportedLanguages: ['de','nl'] }
  , { postId: '10', supportedLanguages: ['de','fr'] }
]

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  getSupportedLanguages() : Observable<string[]> {
    return of(supportedLanguages);
  }

  getSupportedLanguagesForPost(postId: string) : Observable<string[]> {
    const supportedForPost = supportedLanguagesForPost.find((item) => item.postId === postId);
    if(supportedForPost)
      return of(supportedForPost.supportedLanguages);
    return of(supportedLanguages);
  }

  getDefaultLanguage() : Observable<string> {
    return of(defaultLanguage);
  }

}
