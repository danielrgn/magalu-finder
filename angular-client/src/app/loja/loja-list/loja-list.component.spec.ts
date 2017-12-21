import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaListComponent } from './loja-list.component';

describe('LojaListComponent', () => {
  let component: LojaListComponent;
  let fixture: ComponentFixture<LojaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LojaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LojaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
