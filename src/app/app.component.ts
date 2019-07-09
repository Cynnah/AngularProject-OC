import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  appareilsArray = [
    {
      name: 'Téléphone',
      status: 'allumé'
    },
    {
      name: 'Machine à pain',
      status: 'éteint'
    },
    {
      name: 'Robot de cuisine',
      status: 'allumé'
    }
  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  onAllumer() {
    console.log('On allume tout !!!')
  }
}
