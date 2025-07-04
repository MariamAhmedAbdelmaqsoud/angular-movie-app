import { Component, OnInit, inject, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Movie } from '../../../core/services/movie';
import { TranslateModule } from '@ngx-translate/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-hero',
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit {
  private movieService = inject(Movie);
  featuredMovie = signal<any>(null);
  private intervalId: any;
  private movies: any[] = [];
  private currentIndex = 0;
  ngOnInit(): void {
    this.movieService.getMovies().subscribe((res: any) => {
      this.movies = res.results;
      this.featuredMovie.set(this.movies[this.currentIndex]);
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.movies.length;
        this.featuredMovie.set(this.movies[this.currentIndex]);
      }, 5000);
    });
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
