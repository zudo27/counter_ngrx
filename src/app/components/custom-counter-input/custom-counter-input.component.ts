import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customInput } from 'src/app/state/counter.actions';
import { counterState } from 'src/app/state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent {
  public value: number = 0;

  constructor(private store: Store<{counter: counterState}>){}

  onAdd(){
    this.store.dispatch(customInput({value: +this.value}))

  }

}
