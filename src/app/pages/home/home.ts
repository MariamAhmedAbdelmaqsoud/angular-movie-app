import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Movie } from '../../core/services/movie';
import { Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { RouterModule } from '@angular/router';
import { Hero } from '../../shared/components/hero/hero';
import { Wishlist } from '../../core/services/wishlist';
import { WishlistIcon } from '../../shared/components/wishlist-icon/wishlist-icon';
@Component({
  selector: 'app-home',
  imports: [CommonModule, CarouselModule, RouterModule, Hero, WishlistIcon],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
  //   private movieService = Inject(Movie);
  wishlistService = inject(Wishlist);
  movies = signal<any[]>([]);
  subscription!: Subscription;
  // responsiveOptions
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  constructor(private movieService: Movie) {}
  ngOnInit(): void {
    this.subscription = this.movieService.getMovies().subscribe((res: any) => {
      console.log(res.results);
      this.movies.set(res.results);
    });
  }
  isInWishlist(item: any) {
    return !!item?.id && this.wishlistService.isInWishlist(item.id);
  }

  toggleWishlist(item: any) {
    if (item?.id != null) this.wishlistService.toggle(item);
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
