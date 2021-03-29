import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { WizardWho } from '../model/wizard-who.model';

@Component({
  selector: 'app-wizard-who',
  templateUrl: './wizard-who.component.html',
  styleUrls: ['./wizard-who.component.css']
})
export class WizardWhoComponent implements OnInit, AfterViewInit {

  @Input() model: WizardWho;

  @ViewChild("firstNameInput") firstNameInput!: NgModel;
  @ViewChild("lastNameInput") lastNameInput!: NgModel;

  @Output() isValid: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    this.model = new WizardWho();
   }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.firstNameInput.statusChanges?.subscribe(() => this.formChanges());
    this.lastNameInput.statusChanges?.subscribe(() => this.formChanges());
  }

  private formChanges() {
    this.isValid.emit(!!(this.firstNameInput.valid && this.lastNameInput.valid));
  }

}
