import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../core/services/movie';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'app-movie-details',
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    RatingModule,
    FormsModule,
    TagModule,
    CarouselModule,
  ],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss',
})
export class MovieDetails {
  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: '991px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  private route = inject(ActivatedRoute);
  private movieService = inject(Movie);
  movie = signal<any>(null);
  recommendations = signal<any[]>([]);
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieService
        .getMovieDetails(id)
        .subscribe((res) => this.movie.set(res));
      this.movieService.getRecommendations(id).subscribe((res: any) => {
        console.log(res);
        this.recommendations.set(res.results);
      });
    }
  }
}
