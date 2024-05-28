import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentComponents } from './payment.component';


describe('PaymentComponent', () => {
  let component: PaymentComponents;
  let fixture: ComponentFixture<PaymentComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentComponents]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
