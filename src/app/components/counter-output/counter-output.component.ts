import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { counterState } from 'src/app/state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})

export class CounterOutputComponent implements OnInit, OnDestroy{
  public counter !: number ;;
  public counter$ !: Observable<counterState>;
  private counterSubscription !: Subscription;

  constructor(private store: Store<{counter: counterState}>){
  }

  ngOnInit(): void {
    this.counterSubscription = this.store.select('counter').subscribe((data)=>{
      this.counter = data.counter;
    });

    //this.counter$ = this.store.select('counter');
  }

  ngOnDestroy(): void {
    if(this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }  
  }
}
