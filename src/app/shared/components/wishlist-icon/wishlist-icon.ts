import { Component, Input, signal, inject } from '@angular/core';
import { Wishlist } from '../../../core/services/wishlist';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-wishlist-icon',
  imports: [CommonModule],
  templateUrl: './wishlist-icon.html',
  styleUrl: './wishlist-icon.scss',
})
export class WishlistIcon {
  @Input() item: any;
  wishlistService = inject(Wishlist);

  isInWishlist(item: any) {
    return this.wishlistService.isInWishlist(item.id);
  }

  toggle() {
    this.wishlistService.toggle(this.item);
  }
}
