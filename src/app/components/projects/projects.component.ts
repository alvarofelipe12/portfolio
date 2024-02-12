import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
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
    autoplayTimeout: 3000
  }

  projects = [
    {
      title: "Full Stack Course Project - Music Festival",
      description: "Frontend for Music festival website including a payment section including HTML form validations for the payment section.",
      imgs: [
      ],
      ghLink: null,
      demoLink: null,
      technologies: ["JavaScript", "CSS", "HTML"],
      youtubeURL: this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/cGaM9MQ47_Q")
    },
    {
      title: "Full Stack Course Project - Book Store",
      description: "Server side rendered application of a book store that filters results from a defined object as DB. On top of that, the application let the user filter by Author, Title or just Show all books",
      imgs: [
      ],
      ghLink: null,
      demoLink: null,
      technologies: ["JavaScript", "CSS", "HTML", "Express.js", "Handlebars.js"],
      youtubeURL: this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/mb-zAeOQyEk?si=hnjCBHcv41Uffx5h")
    },
    {
      title: "Full Stack Course Project - Zelda Items",
      description: "In this application, we have a two screen web application that enables users to search for items in an items database and add or remove items from the Favorites page",
      imgs: [
      ],
      ghLink: null,
      demoLink: null,
      technologies: ["JavaScript", "CSS", "HTML", "Express.js", "Handlebars.js", "MongoDB"],
      youtubeURL: this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/oZ-YvOZQtPk?si=abKc0sIxCxzfHF3z")
    },
  ];

  @ViewChild('imgContainer')
  imgContainer!: ElementRef;

  constructor(private _sanitizer: DomSanitizer) {
  }

  debug() {

    this.imgContainer.nativeElement.scroll({
      top: this.imgContainer.nativeElement.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

}
