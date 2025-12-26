import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyingComponent } from './spying.component';

describe('SpyingComponent', () => {
  let component: SpyingComponent;
  let fixture: ComponentFixture<SpyingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpyingComponent]
    });
    fixture = TestBed.createComponent(SpyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
