import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type PagesState = {
  name: string;
  isLoading: boolean;
  type: string;
};

const initialState: PagesState = {
  name: '3333333',
  isLoading: false,
  type: 'retro',
};

export const PagesStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store) => ({
        updateName(name: string): void {
          patchState(store, {name});
        },
        updateType(type: string): void {
          patchState(store, {type});
        },
      }))
);