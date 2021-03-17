import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Post } from '../shared/post.model';

const dummyPosts : Post[] = [
  new Post('1','Parijs')
  , new Post('2','Abu Dhabi')
  , new Post('3','Berlijn')
  , new Post('4','Canberra')
  , new Post('5','Kopenhagen')
  , new Post('6','Geneve')
  , new Post('7','Jeruzalem')
  , new Post('8','Hongkong')
  , new Post('9','Rijsel')
  , new Post('10','Lissabon')
]

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor() { }

  getPosts() : Observable<Post[]> {
    return of(dummyPosts);
  }

  getPostById(id: string) : Observable<Post | undefined> {
    const filteredPost = dummyPosts.find((post) => { return post.id === id });
    return of(filteredPost);
  }
}
