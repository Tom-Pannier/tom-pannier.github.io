import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpRunComponent } from './jump-run.component';

describe('JumpRunComponent', () => {
  let component: JumpRunComponent;
  let fixture: ComponentFixture<JumpRunComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JumpRunComponent]
    });
    fixture = TestBed.createComponent(JumpRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
