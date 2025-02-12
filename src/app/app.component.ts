import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ExpenseListComponent } from './features/expenses/components/expense-list/expense-list.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, ExpenseListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'expense-tracker';
}
