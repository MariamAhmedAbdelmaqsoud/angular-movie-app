import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, InputTextModule, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  searchQuery = '';
  private router = inject(Router);
  menuOpen = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  goToSearch() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/search'], {
        queryParams: { query: this.searchQuery.trim() },
      });
      this.searchQuery = '';
    }
  }
}
