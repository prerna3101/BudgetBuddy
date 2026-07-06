import { useState } from "react";
import Navbar from "./components/Navbar";
import SummaryCards from "./components/SummaryCards";
import AddExpenseForm from "./components/AddExpenseForm";
import CategoryFilter from "./components/CategoryFilter";
import ExpenseList from "./components/ExpenseList";
import Footer from "./components/Footer";
import { useExpenses } from "./hooks/useExpenses";
import SearchBar from "./components/SearchBar";
function App() {
  const { expenses, addExpense, deleteExpense } = useExpenses();

  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const [search, setSearch] = useState("");

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

  <SummaryCards expenses={expenses} />

  <AddExpenseForm addExpense={addExpense} />

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
  />

</main>

<Footer />
    </>
  );
}

export default App;