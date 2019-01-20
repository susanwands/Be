import { Injectable } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  windowResizeObservable: Observable<Event>;

  constructor() {
    this.windowResizeObservable = fromEvent(window, 'resize');
  }
}
