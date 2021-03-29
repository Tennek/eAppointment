import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { WizardWhat } from '../model/wizard-what.model';

@Component({
  selector: 'app-wizard-what',
  templateUrl: './wizard-what.component.html',
  styleUrls: ['./wizard-what.component.css']
})
export class WizardWhatComponent implements OnInit, AfterViewInit {

  @Input() model: WizardWhat;
  
  @ViewChild("whatInput") whatInput!: NgModel;
  @Output() isValid: EventEmitter<boolean> = new EventEmitter();
  
  constructor() { 
    this.model = new WizardWhat();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.whatInput.statusChanges?.subscribe(() => this.formChanges());
  }

  private formChanges() {
    this.isValid.emit(!!(this.whatInput.valid));
  }

}
