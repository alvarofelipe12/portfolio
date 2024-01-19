import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger("animateMenu", [
      transition(":enter", [
        query("*", [
          style({ opacity: 0, transform: "translateY(-50%)" }),
          stagger(50, [
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({ opacity: 1, transform: "none" }))
          ])
        ])
      ])
    ])
  ]
})
export class HeaderComponent {
  responsiveMenuVisible: Boolean = false;
  pageYPosition: number | undefined;
  languageFormControl: FormControl = new FormControl();
  cvName: string = "";

  constructor(
    private router: Router
  ) { }

  scroll(el: string) {
    if (document.getElementById(el)) {
      document.getElementById(el)!.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/home']).then(() => document.getElementById(el)!.scrollIntoView({ behavior: 'smooth' }));
    }
    this.responsiveMenuVisible = false;
  }

  downloadCV() {
    // this.languageService.translateService.get("Header.cvName").subscribe(val => {
    const val = "cvName";
    this.cvName = val
    console.log(val)
    // app url
    let url = window.location.href;

    // Open a new window with the CV
    window.open(url + "/../assets/cv/" + this.cvName, "_blank");
    // })

  }

  @HostListener('window:scroll', ['getScrollPosition($event)'])
  getScrollPosition() {
    this.pageYPosition = window.scrollY
  }

  changeLanguage(language: string) {
    this.languageFormControl.setValue(language);
  }
}
