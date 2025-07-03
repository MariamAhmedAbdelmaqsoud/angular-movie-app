import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    RouterModule,
    InputTextModule,
    FormsModule,
    TranslateModule,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  searchQuery = '';
  language = 'en';
  private router = inject(Router);
  private translate = inject(TranslateService);
  menuOpen = false;
  ngOnInit(): void {
    const savedLang = localStorage.getItem('lang') || 'en';
    this.language = savedLang;
    document.documentElement.lang = this.language;
    document.documentElement.dir = this.language === 'ar' ? 'rtl' : 'ltr';
    this.translate.setDefaultLang('en');
    this.translate.use(this.language);
  }

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

  onLanguageChange() {
    document.documentElement.lang = this.language;
    document.documentElement.dir = this.language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', this.language);
    this.translate.use(this.language);
  }
}
