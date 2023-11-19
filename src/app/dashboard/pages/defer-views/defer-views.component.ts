import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [CommonModule, TitleComponent, FormsModule],
  templateUrl: './defer-views.component.html',
  styleUrl: './defer-views.component.css'
})
export default class DeferViewsComponent {


}
