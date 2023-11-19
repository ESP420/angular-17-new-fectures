import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TitleComponent } from '@shared';

type Grade = "A" | "B" | "C";
@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, FormsModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public note: number = 100;
  public frameworks = signal(['Angular', 'Qwik', 'Svelte', 'React', 'vue'])
  public frameworksEmpty = signal([])
  /**
   * toggleContent
   */
  public toggleContent() {
    this.showContent.update((value) => !value)
  }
  public calculateNote(note: number) {
    console.log(note)
    switch (true) {
      case note >= 90:
        this.grade.update((value) => 'A')
        break;
      case note >= 70:
        this.grade.update((value) => 'B')
        break;
      case note < 70:
        this.grade.update((value) => 'C')
        break;
      default:
        break;
    }
  }
}
