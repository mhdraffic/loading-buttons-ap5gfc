import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
  button = 'Submit';
  isLoading = false;
  buttons = {
    button1: {
      name: 'Button 1',
      loading: false
    },
    button2: {
      name: 'Button 2',
      loading: false
    },
    button3: {
      name: 'Button 3',
      loading: false
    },
  }

  constructor() {

  }

  click() {
    this.isLoading = true;
    this.button = 'Processing';

    setTimeout(() => {
      this.isLoading = false;
      this.button = 'Submit';
      alert('Done loading');
    }, 8000)
  }

  clickMulti(name: string) {
    this.buttons[name]['name'] = 'Processing';
    this.buttons[name]['loading'] = true;
    setTimeout(() => {
      this.buttons[name]['name'] = 'Submit';
    this.buttons[name]['loading'] = false;
      alert('Done loading' + name);
    }, 8000)
  }
}
