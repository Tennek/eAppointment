import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromWiz from '../store/wizard.reducer';
import * as wizActions from '../store/wizard.actions';
import { WizardWhen } from '../model/wizard-when.model';
import { getWhen } from '../store/wizard.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wizard-when',
  templateUrl: './wizard-when.component.html',
  styleUrls: ['./wizard-when.component.css']
})
export class WizardWhenComponent implements OnInit, AfterViewInit, OnDestroy {

  model: WizardWhen;

  @ViewChild("whenInput") whenInput!: NgModel;
  @Output() isValid: EventEmitter<boolean> = new EventEmitter();

  private storeSubscription: Subscription | undefined;

  constructor(private store: Store<fromWiz.State>) 
  { 
    this.model = new WizardWhen();
  }

  ngOnInit(): void {
    this.store.select(getWhen).subscribe((when: WizardWhen) => {
      this.model = {...when};
    });
  }

  ngAfterViewInit() {
    this.whenInput.statusChanges?.subscribe(() => this.formChanges());
  }

  ngOnDestroy(): void {
    this.store.dispatch(wizActions.setWizardWhen({payLoad: this.model}));

    if(this.storeSubscription)
      this.storeSubscription.unsubscribe();
  }

  private formChanges() {
    this.isValid.emit(!!(this.whenInput.valid));
  }

}
