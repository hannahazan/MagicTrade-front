import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraderPreviewComponent } from './trader-preview.component';

describe('TraderComponent', () => {
  let component: TraderPreviewComponent;
  let fixture: ComponentFixture<TraderPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraderPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraderPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
