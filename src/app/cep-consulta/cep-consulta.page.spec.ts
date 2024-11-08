import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CepConsultaPage } from './cep-consulta.page';

describe('CepConsultaPage', () => {
  let component: CepConsultaPage;
  let fixture: ComponentFixture<CepConsultaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CepConsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
