import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 700,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
  };

  projects = [
    {
      title: 'To-do List App',
      description:
        'Hybrid Ionic/Angular Application (iOS and Android) allowing the user to create new tasks, mark tasks as done, delete tasks, create categories, edit categories, delete categories, assign categories to tasks, and filter tasks per category. It utilizes the local storage to store the tasks. Additionally, it includes feature flags to change between dark theme and light theme via Remote Config (Firebase). This application was built using concepts like OOP, SOLID, Clean Architecture (feature-categories in the repo), and Clean Coding. Finally, it also demonstrates that Ionic is an agnostic framework enabling Cordova to be used with this application (feature-cordova branch in the repo).',
      imgs: [],
      ghLink:
        'https://github.com/alvarofelipe12/todo-app/tree/feature-categories',
      demoLink: null,
      technologies: [
        'Ionic',
        'Angular',
        'Capacitor',
        'Cordova',
        'HTML',
        'SCSS',
        'Firebase',
      ],
      youtubeURL: this._sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/4VD1-aAuDoc'
      ),
    },
    {
      title: 'Cat_alogue',
      description:
        'Hybrid Ionic/Angular Application (iOS and Android) to display cat breeds and their details using The Cat API. Posseses features like List of cat breeds with pagination, Search functionality to quickly find specific breeds, Detailed view for each breed, including an image and relevant information, and a fully responsive UI for mobile devices',
      imgs: [],
      ghLink: 'https://github.com/alvarofelipe12/cat-alogue',
      demoLink: null,
      technologies: [
        'Ionic',
        'Angular',
        'Capacitor',
        'HTML',
        'SCSS',
        'The Cat API',
      ],
      youtubeURL: this._sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/2Jy__Uz2z24'
      ),
    },
    {
      title: 'Alvaro\'s Car Rentals',
      description:
        'App to reserve a spot in a parking lot generating a receipt for the time required.',
      imgs: [],
      ghLink: null,
      demoLink: null,
      technologies: ['Android Studio', 'Kotlin'],
      youtubeURL: this._sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/kBfStQqTh20'
      ),
    },
    {
      title: 'Full Stack Course Project - Music Festival',
      description:
        'Frontend for Music festival website including a payment section including HTML form validations for the payment section.',
      imgs: [],
      ghLink: null,
      demoLink: null,
      technologies: ['JavaScript', 'CSS', 'HTML'],
      youtubeURL: this._sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/cGaM9MQ47_Q'
      ),
    },
    {
      title: 'Full Stack Course Project - Book Store',
      description:
        'Server side rendered application of a book store that filters results from a defined object as DB. On top of that, the application let the user filter by Author, Title or just Show all books',
      imgs: [],
      ghLink: null,
      demoLink: null,
      technologies: [
        'JavaScript',
        'CSS',
        'HTML',
        'Express.js',
        'Handlebars.js',
      ],
      youtubeURL: this._sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/mb-zAeOQyEk'
      ),
    },
    {
      title: 'Full Stack Course Project - Zelda Items',
      description:
        'In this application, we have a two screen web application that enables users to search for items in an items database and add or remove items from the Favorites page',
      imgs: [],
      ghLink: null,
      demoLink: null,
      technologies: [
        'JavaScript',
        'CSS',
        'HTML',
        'Express.js',
        'Handlebars.js',
        'MongoDB',
      ],
      youtubeURL: this._sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/oZ-YvOZQtPk'
      ),
    },
    {
      title: 'OpenMySpotify',
      description:
        'Angular Application consuming the Spotify API (from 2019), able to connect to your Spotify account, show information from your account like Name, Profile URL, Followers, ID, Type of account, URI, and Playlists. Additionally, let the use to explore their playlists and Track info. Finally in the video, in Spanish, you can see all the code necessary to run this application explained.',
      imgs: [],
      ghLink:
        'https://github.com/alvarofelipe12/todo-app/tree/feature-categories',
      demoLink: null,
      technologies: ['Angular', 'HTML', 'SCSS', 'Angular Material'],
      youtubeURL: this._sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/7InVeMX6k2Y'
      ),
    },
  ];

  @ViewChild('imgContainer')
  imgContainer!: ElementRef;

  constructor(private _sanitizer: DomSanitizer) {}

  debug() {
    this.imgContainer.nativeElement.scroll({
      top: this.imgContainer.nativeElement.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
}
