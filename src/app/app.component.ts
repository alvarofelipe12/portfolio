import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    AOS.init();

    this.title.setTitle("Alvaro Garcia Portfolio's");
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Explore my projects showcasing my skills in web development, Angular, and more.',
      },
      {
        name: 'keywords',
        content:
          'projects, portfolio, Angular, web development, frontend, android, android developer, angular developer, frontend developer, web developer, html, css, ngrx, rxjs, retrofit',
      },
      { name: 'author', content: 'Your Name' },
      { property: 'og:title', content: "Alvaro Garcia Portfolio's" },
      {
        property: 'og:description',
        content:
          'Explore my projects showcasing my skills in web development, Angular, and more.',
      },
      { property: 'og:image', content: 'assets/images/logo.png' },
      {
        property: 'og:url',
        content: 'https://alvarofelipe12.github.io/portfolio/',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
    ]);
  }
}
