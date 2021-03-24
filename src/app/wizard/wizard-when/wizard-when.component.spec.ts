import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardWhenComponent } from './wizard-when.component';

describe('WizardWhenComponent', () => {
  let component: WizardWhenComponent;
  let fixture: ComponentFixture<WizardWhenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardWhenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardWhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
