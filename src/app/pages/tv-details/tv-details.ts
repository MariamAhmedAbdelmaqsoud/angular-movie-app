import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../core/services/movie';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tv-details',
  imports: [
    CommonModule,
    CardModule,
    RatingModule,
    TagModule,
    CarouselModule,
    RouterModule,
    FormsModule,
  ],
  templateUrl: './tv-details.html',
  styleUrl: './tv-details.scss',
})
export class TvDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private movieService = inject(Movie);
  tv = signal<any>(null);
  recommendations = signal<any[]>([]);
  responsiveOptions = [
    { breakpoint: '1199px', numVisible: 4, numScroll: 1 },
    { breakpoint: '991px', numVisible: 3, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '480px', numVisible: 1, numScroll: 1 },
  ];
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieService
        .getTvShowDetails(id)
        .subscribe((res) => this.tv.set(res));
      this.movieService
        .getTvRecommendations(id)
        .subscribe((res: any) => this.recommendations.set(res.results));
    }
  }
}
