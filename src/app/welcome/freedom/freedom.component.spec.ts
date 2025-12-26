import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreedomComponent } from './freedom.component';

describe('FreedomComponent', () => {
  let component: FreedomComponent;
  let fixture: ComponentFixture<FreedomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreedomComponent]
    });
    fixture = TestBed.createComponent(FreedomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
