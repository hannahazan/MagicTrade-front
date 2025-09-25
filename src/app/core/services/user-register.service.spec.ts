import { TestBed } from '@angular/core/testing';

import { UserRegisterService } from './user-register.service';
import {HttpTestingController, provideHttpClientTesting} from "@angular/common/http/testing";
import {provideHttpClient} from "@angular/common/http";
import {UserRegister} from "../../models/user-register.model";
import {environment} from "../../../environments/environment";

describe('UserRegisterService', () => {
  let service: UserRegisterService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    });
    service = TestBed.inject(UserRegisterService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call POST /auth/register with user data', () => {
    const mockUser: UserRegister = {
      email: 'test@test.com',
      password: 'Password@123?',
      pseudo: 'john',
      firstName: 'John',
      lastName: 'Doe',
      country: 'FR',
      department: '75',
      city: 'Paris',
    };

    const mockResponse = { success: true };

    service.execute(mockUser).subscribe(response => {
      expect(response).toEqual(mockResponse);
    })

    const req = httpMock.expectOne(`${environment.magicTradeApiUrl}auth/register`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockUser);

    req.flush(mockResponse);
  })
});
