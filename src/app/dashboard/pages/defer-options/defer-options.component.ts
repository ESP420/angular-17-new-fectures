import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TitleComponent } from '@shared';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [CommonModule, TitleComponent, FormsModule],
  templateUrl: './defer-options.component.html',
  styleUrl: './defer-options.component.css'
})

export default class DeferOptionsComponent {
  public condition = signal(false);
  public changeCondition() {
    this.condition.update((value) => !value)
    console.log(this.condition());
  }
}
