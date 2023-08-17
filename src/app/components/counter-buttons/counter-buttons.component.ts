import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/state/counter.actions';
import { counterState } from 'src/app/state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit{ 
  constructor(private store: Store<{counter: counterState}>) {}
  ngOnInit(): void {
    
  }
  onIncrement() {
    this.store.dispatch(increment());

  }
  onDecrement() {
    this.store.dispatch(decrement()); 
  }
  onReset() {
    this.store.dispatch(reset());
  }

}
