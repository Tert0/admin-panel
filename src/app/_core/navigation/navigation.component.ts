import {Component, HostBinding, Type} from '@angular/core';
import {NavigationService} from './navigation.service';
import {SlideOutDelegate} from './slide-out/slide-out-delegate';
import {slideFromRight} from '../animtaions';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [slideFromRight]
})
export class NavigationComponent {

  @HostBinding('class.visible')
  public visibility?: boolean;
  public title?: string;
  public slideOut?: Type<SlideOutDelegate>;

  constructor(
    private readonly navigationService: NavigationService
  ) {
    this.navigationService.title.subscribe(value => this.title = value);
    this.navigationService.visibility.subscribe(value => this.visibility = value);
    this.navigationService.slideOut.subscribe(value => this.slideOut = value);
  }
}
