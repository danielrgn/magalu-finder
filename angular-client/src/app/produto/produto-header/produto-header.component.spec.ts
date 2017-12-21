import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoHeaderComponent } from './produto-header.component';

describe('ProdutoHeaderComponent', () => {
  let component: ProdutoHeaderComponent;
  let fixture: ComponentFixture<ProdutoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
