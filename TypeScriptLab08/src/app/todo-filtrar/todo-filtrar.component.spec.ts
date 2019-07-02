import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFiltrarComponent } from './todo-filtrar.component';

describe('TodoFiltrarComponent', () => {
  let component: TodoFiltrarComponent;
  let fixture: ComponentFixture<TodoFiltrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoFiltrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFiltrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
