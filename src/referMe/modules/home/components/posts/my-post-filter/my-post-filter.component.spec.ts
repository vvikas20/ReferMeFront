import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPostFilterComponent } from './my-post-filter.component';

describe('MyPostFilterComponent', () => {
  let component: MyPostFilterComponent;
  let fixture: ComponentFixture<MyPostFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPostFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPostFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
