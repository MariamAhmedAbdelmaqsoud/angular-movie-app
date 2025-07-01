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
  getMovieDetails(id: string) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=0c187896e59c9f749194d86c1349c3b0`
    );
  }
  getRecommendations(id: string) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=0c187896e59c9f749194d86c1349c3b0`
    );
  }
  getTvShows() {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=0c187896e59c9f749194d86c1349c3b0`
    );
  }
  getTvShowDetails(id: string) {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=0c187896e59c9f749194d86c1349c3b0`
    );
  }

  getTvRecommendations(id: string) {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=0c187896e59c9f749194d86c1349c3b0`
    );
  }
  searchMulti(query: string) {
    return this.http.get(
      `https://api.themoviedb.org/3/search/multi?api_key=0c187896e59c9f749194d86c1349c3b0&query=${query}`
    );
  }
}
