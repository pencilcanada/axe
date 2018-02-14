import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingRegistrationComponent } from './account-setting-registration.component';

describe('AccountSettingComponent', () => {
  let component: AccountSettingRegistrationComponent;
  let fixture: ComponentFixture<AccountSettingRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSettingRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettingRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
