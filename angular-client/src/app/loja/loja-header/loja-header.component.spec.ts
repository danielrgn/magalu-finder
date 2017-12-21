import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaHeaderComponent } from './loja-header.component';

describe('LojaHeaderComponent', () => {
  let component: LojaHeaderComponent;
  let fixture: ComponentFixture<LojaHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LojaHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LojaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
