import { Component, DestroyRef, OnInit } from '@angular/core';
import { ExpenseDataService } from '../../services/expense-data.service';
import { Expense } from '../../models/expense';
import { map, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.scss',
})
export class ExpenseListComponent implements OnInit {
  public expenses!: Expense[];

  constructor(
    private expenseService: ExpenseDataService,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.expenseService
      .getAllExpenses()
      .pipe(
        tap((x)=>console.log(x)),
        map((response: Expense[]) => this.expenses = response),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }
}
