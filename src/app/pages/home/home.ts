import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from '../../core/services/movie';
import { Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { signal } from '@angular/core';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
//   private movieService = Inject(Movie);
  movies = signal<any[]>([]);
  subscription!: Subscription;
  constructor(private movieService: Movie) {}
  ngOnInit(): void {
    this.subscription = this.movieService.getMovies().subscribe((res: any) => {
      console.log(res.results);
      this.movies.set(res.results);
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
