import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteLoginComponent } from './teste-login.component';

describe('TesteLoginComponent', () => {
  let component: TesteLoginComponent;
  let fixture: ComponentFixture<TesteLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TesteLoginComponent]
    });
    fixture = TestBed.createComponent(TesteLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
