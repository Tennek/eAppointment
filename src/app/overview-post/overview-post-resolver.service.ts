import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { OfficeService } from '../services/office.service';

import { Post } from '../shared/post.model';

@Injectable({
  providedIn: 'root'
})
export class OverviewPostResolverService implements Resolve<Post[]>{

  constructor(
    private officeService: OfficeService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Post[] | Observable<Post[]> | Promise<Post[]> {
    return this.officeService.getPosts();
  }
}
