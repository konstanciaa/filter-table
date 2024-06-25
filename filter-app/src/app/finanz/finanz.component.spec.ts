import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanzComponent } from './finanz.component';

describe('FinanzComponent', () => {
  let component: FinanzComponent;
  let fixture: ComponentFixture<FinanzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinanzComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
