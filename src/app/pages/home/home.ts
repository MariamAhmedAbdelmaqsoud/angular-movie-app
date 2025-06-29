import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from '../../core/services/movie';
import { CommonModule } from '@angular/common';
import { Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { signal } from '@angular/core';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
  private movieService = Inject(Movie);
  movies = signal<any[]>([]);
  constructor(private movie: Movie) {}
  subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = this.movieService.getMovies().subscribe((res: any) => {
      this.movies.set(res.results);
      console.log(res.results);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
