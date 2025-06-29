import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Movie {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=0c187896e59c9f749194d86c1349c3b0`
    );
  }
}
