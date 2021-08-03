// import { TestBed, ComponentFixture } from '@angular/core/testing';
// import { AuthService } from '../services/auth.service';
// import { LoginComponent } from './login.component';

// describe('Component: Login', () => {

//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;
//   let authService: AuthService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [LoginComponent],
//       providers: [AuthService]
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     // create component and test fixture
//     fixture = TestBed.createComponent(LoginComponent);
//     // get test component from the fixture
//     component = fixture.componentInstance;
//     // UserService provided to the TestBed
//     authService = TestBed.inject(AuthService);

//   })


//   it('needsLogin returns true when the user has not been authenticated', () => {
//     spyOn(authService, 'isAuthenticated').and.returnValue(false);
//     expect(component.doLogin()).toBeTruthy();
//     expect(authService.isAuthenticated).toHaveBeenCalled();
//   });

//   it('needsLogin returns false when the user has been authenticated', () => {
//     spyOn(authService, 'isAuthenticated').and.returnValue(true);
//     expect(component.doLogin()).toBeFalsy();
//     expect(authService.isAuthenticated).toHaveBeenCalled();
//   });
// });
















// // import { AuthService } from './../services/auth.service';
// // import { LoginComponent } from './login.component';

// // describe('Component: Login', () => {

// //   let component: LoginComponent;
// //   let service: AuthService;

// //   beforeEach(() => {
// //     service = new AuthService();
// //     component = new LoginComponent(service);
// //   });

// //   afterEach(() => {
// //     localStorage.removeItem('token');
// //     // service = null;
// //     // component = null;
// //   });


// //   it('needsLogin returns true when the user has not been authenticated', () => {
// //     expect(component.doLogin()).toBeTruthy();
// //   });

// //   it('needsLogin returns false when the user has been authenticated', () => {
// //     localStorage.setItem('token', '12345');
// //     expect(component.doLogin()).toBeFalsy();
// //   });

// // });
