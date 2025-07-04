import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../core/services/movie';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { RouterModule } from '@angular/router';
import { WishlistIcon } from '../../shared/components/wishlist-icon/wishlist-icon';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-movies',
  imports: [
    CommonModule,
    CardModule,
    RatingModule,
    RouterModule,
    WishlistIcon,
    TranslateModule,
  ],
  templateUrl: './movies.html',
  styleUrl: './movies.scss',
})
export class Movies implements OnInit {
  private movieService = inject(Movie);
  movies = signal<any[]>([]);

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((res: any) => {
      this.movies.set(res.results);
    });
  }
}
