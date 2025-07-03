import { Component, OnInit,signal,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../core/services/movie'; 
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-search-results',
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './search-results.html',
  styleUrl: './search-results.scss',
})
export class SearchResults implements OnInit {
  private route = inject(ActivatedRoute);
  private movieService = inject(Movie);
  results = signal<any[]>([]);
  query = signal<string>('');
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const search = params.get('query');
      if (search) {
        this.query.set(search);
        this.movieService.searchMulti(search).subscribe((res: any) => {
          this.results.set(res.results);
        });
      }
    });
  }
}
