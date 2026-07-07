import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SummaryCards from "./components/SummaryCards";
import BudgetProgress from "./components/BudgetProgress";
import AddExpenseForm from "./components/AddExpenseForm";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ExpenseList from "./components/ExpenseList";
import Footer from "./components/Footer";
import CategoryPieChart from "./components/Charts/CategoryPieChart";
import MonthlyExpenseChart from "./components/Charts/MonthlyExpenseChart";

import { useExpenses } from "./hooks/useExpenses";
import type { Expense } from "./types/Expense";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const {
    expenses,
    addExpense,
    deleteExpense,
    updateExpense,
  } = useExpenses();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const [editingExpense, setEditingExpense] =
    useState<Expense | null>(null);

  const totalExpense = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const monthlyBudget = 15000;

  const filteredExpenses = expenses.filter((expense) => {
    const categoryMatch =
      selectedCategory === "All" ||
      expense.category === selectedCategory;

    const searchMatch = expense.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <>
      <Navbar />

      <main className="container py-4">

        <HeroSection />

        <SummaryCards expenses={expenses} />

        <BudgetProgress
          totalExpense={totalExpense}
          budget={monthlyBudget}
        />

        <AddExpenseForm
          addExpense={addExpense}
          updateExpense={updateExpense}
          editingExpense={editingExpense}
          setEditingExpense={setEditingExpense}
        />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ExpenseList
          expenses={filteredExpenses}
          deleteExpense={deleteExpense}
          setEditingExpense={setEditingExpense}
        />

        <div className="row mt-4">
          <div className="col-lg-6 mb-4">
            <CategoryPieChart expenses={expenses} />
          </div>

          <div className="col-lg-6 mb-4">
            <MonthlyExpenseChart expenses={expenses} />
          </div>
        </div>

      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        theme="colored"
      />
    </>
  );
}

export default App;