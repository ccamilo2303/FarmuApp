import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlSlicerComponent } from './url-slicer.component';

describe('UrlSlicerComponent', () => {
  let component: UrlSlicerComponent;
  let fixture: ComponentFixture<UrlSlicerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlSlicerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlSlicerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
