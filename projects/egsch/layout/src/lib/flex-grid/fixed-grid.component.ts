import {Component, HostBinding, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'egsch-fixed-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fixed-grid.component.html',
  styleUrls: ['./fixed-grid.component.scss']
})
export class FixedGridComponent {

  @Input()
  @HostBinding('style.--min-width')
  public minWidth: `${number}rem` = "10rem";
}
