import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpFormComponent } from './sign-up-form.component';
import {Router} from "@angular/router";
import {UserRegisterService} from "../../core/services/user-register.service";
import {throwError} from "rxjs";

describe('SignUpFormComponent', () => {
  let component: SignUpFormComponent;
  let fixture: ComponentFixture<SignUpFormComponent>;
  let userRegisterServiceMock: jasmine.SpyObj<UserRegisterService>;
  let routerMock: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    userRegisterServiceMock = jasmine.createSpyObj('UserRegisterService', ['execute']);
    routerMock = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [SignUpFormComponent],
      providers: [
        { provide: UserRegisterService, useValue: userRegisterServiceMock },
        { provide: Router, useValue: routerMock },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have invalid form when empty', () => {
    expect(component.signupForm.invalid).toBeTrue();
  })

  it('should not call register method if form is invalid', () => {
    component.signupForm.setValue({
      email: '',
      username:  '',
      firstName:  '',
      lastName:  '',
      country: '',
      department: '',
      city: '',
      passwords: {
        password: '',
        passwordConfirm: ''
      }
    });
    component.onSubmit();
    expect(userRegisterServiceMock.execute).not.toHaveBeenCalled();
  })

  it('should set failedRegister on error', () => {
    userRegisterServiceMock.execute.and.returnValue(
      throwError(() => new Error('Invalid'))
    );

    // force le formulaire à être valide peu importe les validators
    spyOnProperty(component.signupForm, 'valid', 'get').and.returnValue(true);
    spyOnProperty(component.signupForm, 'invalid', 'get').and.returnValue(false);

    component.onSubmit();

    expect(component.failedRegister).toBeTrue();
  });
});
