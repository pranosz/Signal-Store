import { Component, effect, inject } from '@angular/core';
import { PagesStore } from '../pages.store';
import { getState } from '@ngrx/signals';

@Component({
    selector: 'app-page-1',
    templateUrl: './page-1.component.html',
    styleUrls: ['./page-1.component.scss'],
    standalone: true
})
export class Page1Component {
  readonly store = inject(PagesStore);

  constructor() {
    effect(() => {
      // 👇 The effect will be re-executed whenever the state changes.
      const state = getState(this.store);
      console.log('books state changed', state);
    });
  }

  onClick(){
    this.store.updateName('new name pages 1 --- ');
  }
}
