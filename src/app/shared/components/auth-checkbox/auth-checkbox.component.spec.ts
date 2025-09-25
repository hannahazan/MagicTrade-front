import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCheckboxComponent } from './auth-checkbox.component';

describe('AuthCheckboxComponent', () => {
  let component: AuthCheckboxComponent;
  let fixture: ComponentFixture<AuthCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
