import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from "../../../shared/title/title.component";

@Component({
  selector: 'app-view-transition-2',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './view-transition-2.component.html',
})
export default class ViewTransition2Component {

}
