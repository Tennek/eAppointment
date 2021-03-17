import { Component, OnInit } from '@angular/core';

import * as fromApp from '../store/app.reducer';
import { fetchSelectedPost } from '../overview-post/store/overview-post.actions';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../shared/post.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

  selectedPost: Post | undefined = undefined;
  
  readonly TOTAL_STEPS = 4;
  currentStep = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const postId = params['id'];
      this.store.dispatch(fetchSelectedPost({payLoad: postId}));
    })

    this.store.select('overviewposts')
    .pipe(
      map(overviewPostState => overviewPostState.selectedPost)
    )
    .subscribe((selectedPost: Post | undefined) => {
      this.selectedPost = selectedPost;
    });
  }

  back() {
    if(this.currentStep > 0)
      this.currentStep--;
  }

  next() {
    if(this.currentStep < this.TOTAL_STEPS - 1)
      this.currentStep++;
  }

  finish() {
    alert('finished !');
  }
}