import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Meta, SafeHtml, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private jsonld: any;
  public jsonLDStringSafeHTML!: SafeHtml;
  constructor(
    private meta: Meta,
    private title: Title,
    private domSanitizer: DomSanitizer,
    private googleTagManagerService: GoogleTagManagerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    AOS.init();
    this.setJsonldData();
    this.title.setTitle("Alvaro Garcia Portfolio's");
    this.setMetaTags();
    this.routeTracking();
  }

  private setMetaTags() {
    this.meta.addTags([
      {
        name: 'description',
        content:
          "Hi, I'm Alvaro Felipe Garcia Mendez, feel free to explore my projects showcasing my skills in web development, Angular, and more.",
      },
      {
        name: 'keywords',
        content:
          'Alvaro Felipe Garcia Mendez, projects, portfolio, Angular, web development, frontend, android, android developer, angular developer, frontend developer, web developer, html, css, ngrx, rxjs, retrofit, ios developer, Kotlin, Swift, JavaScript, TypeScript, HTML, HTML5, Cascading Style Sheets (CSS), SCSS, SASS, Angular, Spring Boot, MySQL, MongoDB, Scala, Docker, Git, PostgreSQL, Microsoft SQL Server, PHP, Symfony, NPM, Node.js, Python, Vue.js (VueJS), React (React.js), Debugging, Android Studio, XCode, VS Code, IntelliJ IDEA, SourceTree, GitHub Desktop, Microsoft Office, Microsoft Teams, Slack, Discord, Figma, Android, iOS, Ionic, React Native, Flutter',
      },
      { name: 'author', content: 'Alvaro Garcia' },
      { property: 'og:title', content: "Alvaro Garcia Portfolio's" },
      {
        property: 'og:description',
        content:
          "Hi, I'm Alvaro Felipe Garcia Mendez, feel free to explore my projects showcasing my skills in web development, Angular, and more.",
      },
      { property: 'og:image', content: 'assets/images/logo.png' },
      {
        property: 'og:url',
        content: 'https://alvarofelipe12.github.io/portfolio/',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
    ]);
  }

  private setJsonldData() {
    this.jsonld = {
      '@context': 'http://schema.org/',
      '@type': 'WebPage',
      name: "Alvaro Garcia's Portfolio",
      description:
        "Hi, I'm Alvaro Felipe Garcia Mendez, feel free to explore my projects showcasing my skills in web development, Angular, and more.",
      url: 'https://alvarofelipe12.github.io/portfolio/',
    };
    const jsonLDString =
      '<script type="application/ld+json">' +
      JSON.stringify(this.jsonld) +
      '</script>';
    this.jsonLDStringSafeHTML =
      this.domSanitizer.bypassSecurityTrustHtml(jsonLDString);
  }

  private routeTracking() {
    // push GTM data layer for every visited page
    this.router.events.forEach((item) => {
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          event: 'page',
          pageName: item.url,
        };

        this.googleTagManagerService.pushTag(gtmTag);
      }
    });
    // tags without pushing events
    this.googleTagManagerService.addGtmToDom();
  }
}
