import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCutomersComponent } from './list-cutomers.component';

describe('ListCutomersComponent', () => {
  let component: ListCutomersComponent;
  let fixture: ComponentFixture<ListCutomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCutomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCutomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
