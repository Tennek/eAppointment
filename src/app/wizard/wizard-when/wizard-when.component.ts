import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { WizardWhen } from '../model/wizard-when.model';

@Component({
  selector: 'app-wizard-when',
  templateUrl: './wizard-when.component.html',
  styleUrls: ['./wizard-when.component.css']
})
export class WizardWhenComponent implements OnInit, AfterViewInit {

  @Input() model: WizardWhen;

  @ViewChild("whenInput") whenInput!: NgModel;
  @Output() isValid: EventEmitter<boolean> = new EventEmitter();

  constructor() { 
    this.model = new WizardWhen();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.whenInput.statusChanges?.subscribe(() => this.formChanges());
  }

  private formChanges() {
    this.isValid.emit(!!(this.whenInput.valid));
  }

}
