import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {

  constructor(
    private router: Router
  ) { }

  scroll(el: string) {
    if (document.getElementById(el)) {
      document.getElementById(el)!.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/home']).then(() => document.getElementById(el)!.scrollIntoView({ behavior: 'smooth' }));
    }
  }

}
