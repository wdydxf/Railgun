import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderNavItemComponent } from './sider-nav-item.component';

describe('SiderNavItemComponent', () => {
  let component: SiderNavItemComponent;
  let fixture: ComponentFixture<SiderNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SiderNavItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiderNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
