import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEditarComponent } from './todo-editar.component';

describe('TodoEditarComponent', () => {
  let component: TodoEditarComponent;
  let fixture: ComponentFixture<TodoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
