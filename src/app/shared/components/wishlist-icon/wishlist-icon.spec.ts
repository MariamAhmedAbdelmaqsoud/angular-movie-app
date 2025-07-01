import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistIcon } from './wishlist-icon';

describe('WishlistIcon', () => {
  let component: WishlistIcon;
  let fixture: ComponentFixture<WishlistIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishlistIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishlistIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
