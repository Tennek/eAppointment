import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewPostComponent } from './overview-post.component';

describe('OverviewPostComponent', () => {
  let component: OverviewPostComponent;
  let fixture: ComponentFixture<OverviewPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
