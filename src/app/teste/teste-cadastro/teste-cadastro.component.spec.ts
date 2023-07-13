import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteCadastroComponent } from './teste-cadastro.component';

describe('TesteCadastroComponent', () => {
  let component: TesteCadastroComponent;
  let fixture: ComponentFixture<TesteCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TesteCadastroComponent]
    });
    fixture = TestBed.createComponent(TesteCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
