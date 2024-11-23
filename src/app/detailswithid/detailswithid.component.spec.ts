import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailswithidComponent } from './detailswithid.component';

describe('DetailswithidComponent', () => {
  let component: DetailswithidComponent;
  let fixture: ComponentFixture<DetailswithidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailswithidComponent]
    });
    fixture = TestBed.createComponent(DetailswithidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
