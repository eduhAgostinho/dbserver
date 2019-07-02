import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListarComponent } from './todo-listar.component';

describe('TodoListarComponent', () => {
  let component: TodoListarComponent;
  let fixture: ComponentFixture<TodoListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
