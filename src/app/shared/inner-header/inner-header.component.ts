import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inner-header',
  templateUrl: './inner-header.component.html',
  styleUrls: ['./inner-header.component.scss']
})
export class InnerHeaderComponent {
  @Input() title?: string;
  @Input() paragraph?: string;
}
