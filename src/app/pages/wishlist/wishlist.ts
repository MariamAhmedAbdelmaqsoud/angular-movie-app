import { Component ,inject} from '@angular/core';
import { Wishlist } from '../../core/services/wishlist';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-wishlist',
  imports: [RouterModule],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.scss',
})
export class WishlistPage {
  private wishlistService = inject(Wishlist);
  items = this.wishlistService.getWishlist();
  remove(id: number) {
    this.wishlistService.removeFromWishlist(id);
  }
}
