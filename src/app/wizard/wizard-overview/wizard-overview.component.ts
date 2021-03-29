import { Component, Input, OnInit } from '@angular/core';
import { Wizard } from '../model/wizard.model';

@Component({
  selector: 'app-wizard-overview',
  templateUrl: './wizard-overview.component.html',
  styleUrls: ['./wizard-overview.component.css']
})
export class WizardOverviewComponent implements OnInit {

  @Input() model: Wizard | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
