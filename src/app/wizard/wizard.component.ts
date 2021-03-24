import { Component, OnInit } from '@angular/core';

import * as fromApp from '../store/app.reducer';
import { fetchSelectedPost } from '../overview-post/store/overview-post.actions';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../shared/post.model';
import { map } from 'rxjs/operators';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

  selectedPost: Post | undefined = undefined;
  
  total_steps = 0;
  currentStep = 0;

  private readonly steps_flow = [
    'who',
    'what',
    'when',
    'overview',
  ]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) { 
    this.total_steps = this.steps_flow.length;
  }

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
    if(this.currentStep > 0) {
      this.currentStep--;
      this.navigateToStep();
    }
  }

  next() {
    if(this.currentStep < this.total_steps - 1) {
      this.currentStep++;
      this.navigateToStep();
    }
  }

  submit() {
    alert('submitted !');
  }

  private navigateToStep() {
    this.router.navigate([this.steps_flow[this.currentStep]], {relativeTo: this.route});
  }
}