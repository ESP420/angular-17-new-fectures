import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from "../../../shared/title/title.component";

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './view-transition.component.html',  
})
export default class ViewTransitionComponent {

}
