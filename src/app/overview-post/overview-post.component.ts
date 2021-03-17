import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import { setSelectedPost } from '../overview-post/store/overview-post.actions';
import { Post } from '../shared/post.model';


@Component({
  selector: 'app-overview-post',
  templateUrl: './overview-post.component.html',
  styleUrls: ['./overview-post.component.css']
})
export class OverviewPostComponent implements OnInit {

  posts: Post[] = [];

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(setSelectedPost({payLoad: undefined}));

    this.route.data.subscribe((data) => {
      this.posts = data.posts;
      this.posts = this.posts.sort((a,b) => {
        if(a.name > b.name)
          return 1;
        if(a.name < b.name)
          return -1;
        return 0;
      });
    })
  }
}
