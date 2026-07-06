import { useState } from "react";
import { categories } from "../data/categories";
import type { Expense } from "../types/Expense";

interface Props {
  addExpense: (expense: Expense) => void;
}

function AddExpenseForm({ addExpense }: Props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !amount || !date) return;

    addExpense({
      id: crypto.randomUUID(),
      title,
      amount: Number(amount),
      category,
      date,
    });

    setTitle("");
    setAmount("");
    setCategory(categories[0]);
    setDate("");
  };

  return (
    <div className="card shadow rounded-4 mb-4">
      <div className="card-body">
        <h4 className="mb-4">Add Expense</h4>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-4">
              <input
                className="form-control"
                placeholder="Expense title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="col-md-2">
              <input
                className="form-control"
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="col-md-3">
              <select
                className="form-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="col-md-3">
              <input
                className="form-control"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn mt-4 text-white"
            style={{ background: "var(--primary)" }}
            >
            Add Expense
        </button>
        </form>
      </div>
    </div>
  );
}

export default AddExpenseForm;