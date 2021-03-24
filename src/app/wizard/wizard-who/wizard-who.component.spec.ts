import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardWhoComponent } from './wizard-who.component';

describe('WizardWhoComponent', () => {
  let component: WizardWhoComponent;
  let fixture: ComponentFixture<WizardWhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardWhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardWhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
