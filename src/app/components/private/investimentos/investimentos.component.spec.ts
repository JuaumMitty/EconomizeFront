import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestimentosComponent } from './investimentos.component';

describe('InvestimentosComponent', () => {
  let component: InvestimentosComponent;
  let fixture: ComponentFixture<InvestimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestimentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
