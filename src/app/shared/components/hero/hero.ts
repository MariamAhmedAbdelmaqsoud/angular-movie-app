import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Movie } from '../../../core/services/movie';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-hero',
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit {
  private movieService = inject(Movie);
  featuredMovie = signal<any>(null);
  ngOnInit(): void {
    this.movieService.getMovies().subscribe((res:any) => {
      this.featuredMovie.set(res.results[9]);
    })
  }
}
