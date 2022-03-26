import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  list: string[];
  task: string;

  constructor() {
    this.list = [];
    this.task = '';
  }

  showTarefa() {
    return this.list;
  }

  save(): void {
    localStorage.setItem('tasks', JSON.stringify(this.list));
  }

  addTarefa() {
    this.list.push(this.task);
    this.task = '';
    this.save();
  }

  remove(taksX: number): void {
    this.list.splice(taksX, 1);
    this.save();
  }
}
