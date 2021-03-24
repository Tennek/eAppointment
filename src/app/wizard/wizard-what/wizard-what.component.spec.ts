import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardWhatComponent } from './wizard-what.component';

describe('WizardWhatComponent', () => {
  let component: WizardWhatComponent;
  let fixture: ComponentFixture<WizardWhatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardWhatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardWhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
