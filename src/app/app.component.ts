import { Component, OnInit } from '@angular/core';
import { WindowService} from '../app/services/window/window-service.service';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showSidebar;

  constructor(private _router: Router, private windowService: WindowService) {}

  ngOnInit() {
    /* this.setMobileView();

    this.windowService.windowResizeObservable.subscribe(evt => {
      this.setMobileView();
    }); */

    this.showSidebar = false;
    this._router.events.subscribe(res => {

      const event = res;
      if (event instanceof NavigationStart) {
        console.log(event);
        this.toggleSidebar();
      }
    });
  }

toggleSidebar() {
  this.showSidebar = !this.showSidebar;
}

}
