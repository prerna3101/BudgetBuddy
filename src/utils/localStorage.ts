import type { Expense } from "../types/Expense";

const STORAGE_KEY = "budgetbuddy-expenses";

export const loadExpenses = (): Expense[] => {
  const data = localStorage.getItem(STORAGE_KEY);

  return data ? JSON.parse(data) : [];
};

export const saveExpenses = (expenses: Expense[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
};