import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from '../services/post.service';

import { Post } from '../shared/post.model';

@Injectable({
  providedIn: 'root'
})
export class OverviewPostResolverService implements Resolve<Post[]>{

  constructor(
    private postService: PostService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Post[] | Observable<Post[]> | Promise<Post[]> {
    return this.postService.getPosts();
  }
}
