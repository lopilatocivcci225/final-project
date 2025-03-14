import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  private currentNumber = 0;

  constructor() {}

  getRandomNumber(): number {
    this.currentNumber += 1;
    return this.currentNumber;
  }
}