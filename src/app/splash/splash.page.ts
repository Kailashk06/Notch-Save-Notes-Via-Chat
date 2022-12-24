import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'splash-home',
  templateUrl: 'splash.page.html',
  styleUrls: ['splash.page.scss'],
})
export class SplashPage {

  constructor(private router: Router) {}
  
  ngOnInit() {
    // do init at here for current route.

    setTimeout(() => {
        this.router.navigate(['/home']);
    }, 5000);  //5s
}
}
