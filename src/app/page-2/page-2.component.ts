import { Component, effect, inject } from '@angular/core';
import { PagesStore } from '../pages.store';
import { getState } from '@ngrx/signals';

@Component({
    selector: 'app-page-2',
    templateUrl: './page-2.component.html',
    styleUrls: ['./page-2.component.scss'],
    standalone: true,
    providers: [PagesStore],
})
export class Page2Component {
  readonly store = inject(PagesStore);

  constructor() {
    effect(() => {
      const state = getState(this.store);
      console.log('Pages state changed', state);
    });
  }

  onClick(){
    this.store.updateName('new name pages 2');
  }
}
