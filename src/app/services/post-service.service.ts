import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PostService } from '../shared/post-service.model';

const dummyPostServices : PostService[] = [
    {id: '1', postId: '1', serviceTypeId: '1'}
    ,{id: '2', postId: '1', serviceTypeId: '2'}
    ,{id: '3', postId: '2', serviceTypeId: '3'}
    ,{id: '4', postId: '2', serviceTypeId: '4'}
    ,{id: '5', postId: '3', serviceTypeId: '5'}
    ,{id: '6', postId: '3', serviceTypeId: '1'}
    ,{id: '7', postId: '4', serviceTypeId: '2'}
    ,{id: '8', postId: '4', serviceTypeId: '3'}
    ,{id: '9', postId: '5', serviceTypeId: '4'}
    ,{id: '10', postId: '5', serviceTypeId: '5'}
    ,{id: '11', postId: '6', serviceTypeId: '1'}
    ,{id: '12', postId: '6', serviceTypeId: '2'}
    ,{id: '13', postId: '7', serviceTypeId: '3'}
    ,{id: '14', postId: '7', serviceTypeId: '4'}
    ,{id: '15', postId: '8', serviceTypeId: '5'}
    ,{id: '16', postId: '8', serviceTypeId: '1'}
    ,{id: '17', postId: '9', serviceTypeId: '2'}
    ,{id: '18', postId: '9', serviceTypeId: '3'}
    ,{id: '19', postId: '10', serviceTypeId: '4'}
    ,{id: '20', postId: '10', serviceTypeId: '5'}
]

@Injectable({
    providedIn: 'root'
  })
  export class PostServiceService {
  
    constructor() { }
  
    getPostServices() : Observable<PostService[]> {
        return of(dummyPostServices);
    }

    getPostServiceById(id: string) : Observable<PostService | undefined> {
        const filtered = dummyPostServices.find((type) => { return type.id === id });
        return of(filtered);
    }

    getPostServiceByPostId(postId: string) : Observable<PostService | undefined> {
        const filtered = dummyPostServices.find((type) => { return type.postId === postId });
        return of(filtered);
    }
  }