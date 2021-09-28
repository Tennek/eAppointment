import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromWiz from '../store/wizard.reducer';
import * as wizActions from '../store/wizard.actions';
import { WizardWhat } from '../model/wizard-what.model';
import { getWhat } from '../store/wizard.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wizard-what',
  templateUrl: './wizard-what.component.html',
  styleUrls: ['./wizard-what.component.css']
})
export class WizardWhatComponent implements OnInit, AfterViewInit, OnDestroy {

  model: WizardWhat;
  
  @ViewChild("whatInput") whatInput!: NgModel;
  @Output() isValid: EventEmitter<boolean> = new EventEmitter();
  
  private storeSubscription: Subscription | undefined;

  constructor(private store: Store<fromWiz.State>) 
  { 
    this.model = new WizardWhat();
  }

  ngOnInit(): void {
    this.storeSubscription = this.store.select(getWhat).subscribe((what: WizardWhat) => {
      this.model = {...what};
    });
  }

  ngAfterViewInit() {
    this.whatInput.statusChanges?.subscribe(() => this.formChanges());
  }

  ngOnDestroy(): void {
    this.store.dispatch(wizActions.setWizardWhat({payLoad: this.model}));

    if(this.storeSubscription)
      this.storeSubscription.unsubscribe();
  }

  private formChanges() {
    this.isValid.emit(!!(this.whatInput.valid));
  }

}
