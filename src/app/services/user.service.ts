import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UserResponse, UsersResponse } from '@interfaces/req-response';
import { delay, map } from 'rxjs';

interface State {
  users: User[]
  loading: boolean
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  #http = inject(HttpClient)
  //#===private
  #state = signal<State>({ users: [], loading: true })

  public users = computed(() => this.#state().users)
  public loading = computed(() => this.#state().loading)
  constructor() {
    this.#http.get<UsersResponse>('https://reqres.in/api/users?page=1').pipe(delay(2000)).subscribe(response => {
      console.log(response)
      this.#state.set({ users: response.data, loading: false })
      console.log(this.users())
    })
  }
  getUserById(id: string) {
    return this.#http.get<UserResponse>(`https://reqres.in/api/users/${id}`).pipe(delay(2000), map(res => res.data))
  }
}
