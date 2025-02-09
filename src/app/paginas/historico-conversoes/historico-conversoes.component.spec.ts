import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoComponent } from './historico-conversoes.component';

describe('HistoricoConversoesComponent', () => {
  let component: HistoricoComponent;
  let fixture: ComponentFixture<HistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoricoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});