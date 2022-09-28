import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeaderComponent } from './geader.component';

describe('GeaderComponent', () => {
  let component: GeaderComponent;
  let fixture: ComponentFixture<GeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
