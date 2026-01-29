import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  counter = 10;
  counterSignal = signal(10);

  increaseBy(value:number){
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  resetCounter(){
    this.counter = 0;
    this.counterSignal.set(0);
  }

}
