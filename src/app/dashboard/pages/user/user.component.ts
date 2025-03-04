import { AfterContentInit, Component, computed, inject, Input, OnInit, signal, } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '@services/user.service';
import { User } from '@interfaces/req-response';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export default class UserComponent implements OnInit {
  #router = inject(ActivatedRoute);
  #usersService = inject(UserService);
  @Input() id!: string;

  protected user = toSignal(
    this.#router.params.pipe(
      switchMap(({ id }) => this.#usersService.getUserById(id)),
    )
  )
  protected title = computed(() => this.user() ? `${this.user()?.first_name} ${this.user()?.last_name} - Profile` : 'User Profile');
  ngOnInit(): void {
  }
}
