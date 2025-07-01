import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../core/services/movie';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-tv-shows',
  imports: [CommonModule, CardModule, RatingModule, RouterModule],
  templateUrl: './tv-shows.html',
  styleUrl: './tv-shows.scss',
})
export class TvShows implements OnInit {
  private movieService = inject(Movie);
  tvShows = signal<any[]>([]);
  ngOnInit(): void {
    this.movieService.getTvShows().subscribe((res: any) => {
      this.tvShows.set(res.results);
    });
  }
}
