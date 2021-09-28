import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild, OnDestroy  } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromWiz from '../store/wizard.reducer';
import * as wizActions from '../store/wizard.actions';
import { WizardWho } from '../model/wizard-who.model';
import { getWho } from '../store/wizard.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wizard-who',
  templateUrl: './wizard-who.component.html',
  styleUrls: ['./wizard-who.component.css']
})
export class WizardWhoComponent implements OnInit, AfterViewInit, OnDestroy  {

  model: WizardWho;

  @ViewChild("firstNameInput") firstNameInput!: NgModel;
  @ViewChild("lastNameInput") lastNameInput!: NgModel;

  @Output() isValid: EventEmitter<boolean> = new EventEmitter();

  private storeSubscription: Subscription | undefined;

  constructor(private store: Store<fromWiz.State>) 
  { 
    this.model = new WizardWho();
  }

  ngOnInit(): void {
    this.storeSubscription = this.store.select(getWho).subscribe((who: WizardWho) => {
      this.model = {...who};
    });
  }

  ngAfterViewInit() {
    this.firstNameInput.statusChanges?.subscribe(() => this.formChanges());
    this.lastNameInput.statusChanges?.subscribe(() => this.formChanges());
  }

  ngOnDestroy(): void {
    this.store.dispatch(wizActions.setWizardWho({payLoad: this.model}));

    if(this.storeSubscription)
      this.storeSubscription.unsubscribe();
  }

  private formChanges() {
    this.isValid.emit(!!(this.firstNameInput.valid && this.lastNameInput.valid));
  }

}
