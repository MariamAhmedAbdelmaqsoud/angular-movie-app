import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class Movie {
  private apiKey = '0c187896e59c9f749194d86c1349c3b0';
  private baseUrl = 'https://api.themoviedb.org/3';
  private get lang() {
    return localStorage.getItem('lang') || 'en';
  }

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get(
      `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&language=${this.lang}`
    );
  }

  getMovieDetails(id: string) {
    return this.http.get(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&language=${this.lang}`
    );
  }

  getRecommendations(id: string) {
    return this.http.get(
      `${this.baseUrl}/movie/${id}/recommendations?api_key=${this.apiKey}&language=${this.lang}`
    );
  }

  getTvShows() {
    return this.http.get(
      `${this.baseUrl}/tv/popular?api_key=${this.apiKey}&language=${this.lang}`
    );
  }

  getTvShowDetails(id: string) {
    return this.http.get(
      `${this.baseUrl}/tv/${id}?api_key=${this.apiKey}&language=${this.lang}`
    );
  }

  getTvRecommendations(id: string) {
    return this.http.get(
      `${this.baseUrl}/tv/${id}/recommendations?api_key=${this.apiKey}&language=${this.lang}`
    );
  }

  searchMulti(query: string) {
    return this.http.get(
      `${this.baseUrl}/search/multi?api_key=${this.apiKey}&language=${this.lang}&query=${query}`
    );
  }
}
