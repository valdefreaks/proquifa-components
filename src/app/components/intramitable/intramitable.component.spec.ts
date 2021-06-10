import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntramitableComponent } from './intramitable.component';

describe('IntramitableComponent', () => {
  let component: IntramitableComponent;
  let fixture: ComponentFixture<IntramitableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntramitableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntramitableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
