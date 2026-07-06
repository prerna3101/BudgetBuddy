import Navbar from "./components/Navbar";
import SummaryCards from "./components/SummaryCards";
import AddExpenseForm from "./components/AddExpenseForm";
import CategoryFilter from "./components/CategoryFilter";
import ExpenseList from "./components/ExpenseList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main className="container py-4">

        <SummaryCards />

        <AddExpenseForm />

        <CategoryFilter />

        <ExpenseList />

      </main>

      <Footer />
    </>
  );
}

export default App;