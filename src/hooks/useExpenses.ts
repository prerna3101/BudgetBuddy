import { useEffect, useState } from "react";
import type { Expense } from "../types/Expense";
import { loadExpenses, saveExpenses } from "../utils/localStorage";

export const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>(loadExpenses());

  useEffect(() => {
    saveExpenses(expenses);
  }, [expenses]);

  const addExpense = (expense: Expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const deleteExpense = (id: string) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  return {
    expenses,
    addExpense,
    deleteExpense,
  };
};