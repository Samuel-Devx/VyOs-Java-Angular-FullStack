import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CLientes } from './clientes';

describe('CLientes', () => {
  let component: CLientes;
  let fixture: ComponentFixture<CLientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CLientes],
    }).compileComponents();

    fixture = TestBed.createComponent(CLientes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
