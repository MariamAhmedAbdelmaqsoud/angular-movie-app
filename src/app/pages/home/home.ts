import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from '../../core/services/movie';
import { Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { RouterModule } from '@angular/router';
import { Hero} from '../../shared/components/hero/hero';
@Component({
  selector: 'app-home',
  imports: [CommonModule, CarouselModule, RouterModule,Hero],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
  //   private movieService = Inject(Movie);
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
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
