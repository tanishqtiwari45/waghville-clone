import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterparkComponent } from './waterpark.component';

describe('WaterparkComponent', () => {
  let component: WaterparkComponent;
  let fixture: ComponentFixture<WaterparkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterparkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterparkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
