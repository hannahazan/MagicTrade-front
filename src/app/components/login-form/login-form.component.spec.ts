import {ComponentFixture, TestBed} from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import {Router} from "@angular/router";
import {AuthService} from "../../core/services/auth.service";
import {throwError} from "rxjs";

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let authServiceMock: jasmine.SpyObj<AuthService>;
  let routerMock: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    authServiceMock = jasmine.createSpyObj('AuthService', ['login']);
    routerMock = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [LoginFormComponent],
      providers: [
        // injecte le mock dans le composant aulieu du service : pas besoin de provideHttpClient(), etc...
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have invalid form when empty', () => {
    expect(component.loginForm.invalid).toBeTrue();
  })

  it('should not call login if form is invalid', () => {
    component.loginForm.setValue({email: '', password: ''});
    component.onSubmit();
    expect(authServiceMock.login).not.toHaveBeenCalled();
  })

  it('should set failedLogin on error', () => {
    // Le spy retourne un Observable qui émet une erreur
    authServiceMock.login.and.returnValue(
      throwError(() => new Error('Invalid'))
    );

    component.loginForm.setValue({ email: 'test@test.com', password: 'wrong' });
    component.onSubmit();

    expect(component.failedLogin).toBeTrue();
  });
});
