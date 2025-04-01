import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationWeddingComponent } from './destination-wedding.component';

describe('DestinationWeddingComponent', () => {
  let component: DestinationWeddingComponent;
  let fixture: ComponentFixture<DestinationWeddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationWeddingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
