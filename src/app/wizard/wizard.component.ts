import { Component, OnInit } from '@angular/core';

import * as fromApp from '../store/app.reducer';
import { fetchSelectedPost } from '../overview-post/store/overview-post.actions';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../shared/post.model';
import { map } from 'rxjs/operators';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Wizard } from './model/wizard.model';
import { WizardOverviewComponent } from './wizard-overview/wizard-overview.component';
import { WizardWhat } from './model/wizard-what.model';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

  selectedPost: Post | undefined = undefined;
  
  total_steps = 0;
  currentStep = 0;

  model: Wizard;

  wizardIsValid: boolean = false;

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
    this.model = new Wizard();
    this.model.who = { firstName: "", lastName: "" };
    this.model.what = { what: "" };
    this.model.when = { when: "" };
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