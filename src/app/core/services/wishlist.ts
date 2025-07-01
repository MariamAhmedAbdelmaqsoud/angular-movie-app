import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Wishlist {
  private storageKey = 'wishlist';

  private loadFromStorage(): any[] {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  private wishlist = signal<any[]>(this.loadFromStorage());

  constructor() {
    effect(() => {
      const data = this.wishlist();
      localStorage.setItem(this.storageKey, JSON.stringify(data));
    });
  }

  getWishlist() {
    return this.wishlist.asReadonly();
  }

  addToWishlist(item: any) {
    const current = this.wishlist();
    if (!current.find((i) => i.id === item.id)) {
      this.wishlist.set([...current, item]);
    }
  }

  removeFromWishlist(id: number) {
    const current = this.wishlist();
    this.wishlist.set(current.filter((item) => item.id !== id));
  }

  isInWishlist(id: number): boolean {
    return this.wishlist().some((item) => item.id === id);
  }

  toggle(item: any) {
    if (this.isInWishlist(item.id)) {
      this.removeFromWishlist(item.id);
    } else {
      this.addToWishlist(item);
    }
  }
}
