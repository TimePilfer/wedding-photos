import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParseImagesComponent } from './parse-images.component';

describe('ParseImagesComponent', () => {
  let component: ParseImagesComponent;
  let fixture: ComponentFixture<ParseImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParseImagesComponent]
    });
    fixture = TestBed.createComponent(ParseImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
