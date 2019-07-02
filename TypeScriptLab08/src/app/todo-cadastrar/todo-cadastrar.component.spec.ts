import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCadastrarComponent } from './todo-cadastrar.component';

describe('TodoCadastrarComponent', () => {
  let component: TodoCadastrarComponent;
  let fixture: ComponentFixture<TodoCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
