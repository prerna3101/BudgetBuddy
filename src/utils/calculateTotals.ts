import type { Expense } from "../types/Expense";

export const calculateTotals = (expenses: Expense[]) => {
  const totalExpense = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const highestExpense =
    expenses.length > 0
      ? Math.max(...expenses.map((expense) => expense.amount))
      : 0;

  const totalTransactions = expenses.length;

  const uniqueCategories = new Set(
    expenses.map((expense) => expense.category)
  ).size;

  return {
    totalExpense,
    highestExpense,
    totalTransactions,
    uniqueCategories,
  };
};