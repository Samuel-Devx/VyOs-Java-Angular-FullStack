import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HideDivider } from './hide-divider';

describe('HideDivider', () => {
  let component: HideDivider;
  let fixture: ComponentFixture<HideDivider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HideDivider],
    }).compileComponents();

    fixture = TestBed.createComponent(HideDivider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
