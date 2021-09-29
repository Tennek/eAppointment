import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Post } from '../shared/post.model';

const dummyPosts : Post[] = [
  {id:'1',name:'Parijs'}
  , {id:'2',name:'Abu Dhabi'}
  , {id:'3',name:'Berlijn'}
  , {id:'4',name:'Canberra'}
  , {id:'5',name:'Kopenhagen'}
  , {id:'6',name:'Geneve'}
  , {id:'7',name:'Jeruzalem'}
  , {id:'8',name:'Hongkong'}
  , {id:'9',name:'Rijsel'}
  , {id:'10',name:'Lissabon'}
]

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts() : Observable<Post[]> {
    return of(dummyPosts);
  }

  getPostById(id: string) : Observable<Post | undefined> {
    const filteredPost = dummyPosts.find((post) => { return post.id === id });
    return of(filteredPost);
  }
}
