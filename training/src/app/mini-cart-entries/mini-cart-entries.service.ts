import { Injectable } from '@angular/core';
import { ActiveCartService, StateWithMultiCart, AuthService, MultiCartService, Cart } from '@spartacus/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiniCartEntriesService extends ActiveCartService {

  constructor(
    protected store: Store<StateWithMultiCart>,
    protected authService: AuthService,
    protected multiCartService: MultiCartService
  ) {
    super(store, authService, multiCartService);
  }

  getNumEntries(): Observable<number> {
    return this.getActive().pipe(
      map((cart: Cart) => cart.totalItems)
    );
  }
}
