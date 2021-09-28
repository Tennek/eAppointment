import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromWiz from '../store/wizard.reducer';
import { WizardWhat } from '../model/wizard-what.model';
import { WizardWhen } from '../model/wizard-when.model';
import { WizardWho } from '../model/wizard-who.model';
import { Wizard } from '../model/wizard.model';
import { getWhat, getWhen, getWho } from '../store/wizard.selectors';

@Component({
  selector: 'app-wizard-overview',
  templateUrl: './wizard-overview.component.html',
  styleUrls: ['./wizard-overview.component.css']
})
export class WizardOverviewComponent implements OnInit {

  who: WizardWho | undefined;
  what: WizardWhat | undefined;
  when: WizardWhen | undefined;

  constructor(private store: Store<fromWiz.State>) 
  { }

  ngOnInit(): void {
    this.store.select(getWho).subscribe((who: WizardWho) => {
      this.who = who;
    });
    this.store.select(getWhat).subscribe((what: WizardWhat) => {
      this.what = what;
    });
    this.store.select(getWhen).subscribe((when: WizardWhen) => {
      this.when = when;
    });
  }

}
