import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'movies',
    loadComponent: () => import('./pages/movies/movies').then((m) => m.Movies),
  },
  {
    path: 'movie/:id',
    loadComponent: () =>
      import('./pages/movie-details/movie-details').then((m) => m.MovieDetails),
  },
  {
    path: 'tv',
    loadComponent: () =>
      import('./pages/tv-shows/tv-shows').then((m) => m.TvShows),
  },
  {
    path: 'tv/:id',
    loadComponent: () =>
      import('./pages/tv-details/tv-details').then((m) => m.TvDetails),
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./pages/search-results/search-results').then(
        (m) => m.SearchResults
      ),
  },
  {
    path: 'wishlist',
    loadComponent: () =>
      import('./pages/wishlist/wishlist').then((m) => m.WishlistPage),
  },
];
