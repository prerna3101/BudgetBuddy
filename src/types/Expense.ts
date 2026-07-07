import { categories } from "../data/categories";

export type Category = (typeof categories)[number];

export interface Expense {
  id: string;
  title: string;
  amount: number;
  category: Category;
  date: string;
}