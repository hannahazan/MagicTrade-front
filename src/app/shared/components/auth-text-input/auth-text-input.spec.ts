import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthTextInputComponent } from './auth-text-input.component';

describe('AuthTextInputComponent', () => {
  let component: AuthTextInputComponent;
  let fixture: ComponentFixture<AuthTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthTextInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
