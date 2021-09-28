import { Component, OnInit } from '@angular/core';

import * as fromApp from '../store/app.reducer';
import { fetchSelectedPost } from '../overview-post/store/overview-post.actions';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../shared/post.model';
import { map } from 'rxjs/operators';
import { getLanguage, getOverviewposts } from '../store/root-store.selectors';
import { setWizardWhat } from './store/wizard.actions';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

  selectedPost: Post | undefined = undefined;
  
  total_steps = 0;
  currentStep = 0;

  wizardIsValid: boolean = false;

  private readonly steps_flow = [
    'who',
    'what',
    'when',
    'overview',
  ]

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>
  ) { 
    this.total_steps = this.steps_flow.length;
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const postId = params['id'];
      this.store.dispatch(fetchSelectedPost({payLoad: postId}));
    })

    this.store.select(getOverviewposts)
    .pipe(
      map(overviewPostState => overviewPostState.selectedPost)
    )
    .subscribe((selectedPost: Post | undefined) => {
      this.selectedPost = selectedPost;
    });
  }

  isValid(value: boolean) {
    this.wizardIsValid = value;
  }

  back() {
    if(this.currentStep > 0) {
      this.currentStep--;
    }
  }

  next() {
    if(this.currentStep < this.total_steps - 1) {
      this.currentStep++;
    }
  }

  submit() {
    alert('submitted !');
  }
}