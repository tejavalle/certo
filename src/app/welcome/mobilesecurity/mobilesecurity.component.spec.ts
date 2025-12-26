import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilesecurityComponent } from './mobilesecurity.component';

describe('MobilesecurityComponent', () => {
  let component: MobilesecurityComponent;
  let fixture: ComponentFixture<MobilesecurityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobilesecurityComponent]
    });
    fixture = TestBed.createComponent(MobilesecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
