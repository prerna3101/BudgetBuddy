import { useState, useEffect, useRef } from "react";
import { categories } from "../data/categories";
import type { Expense } from "../types/Expense";
import { toast } from "react-toastify";

interface Props {
  addExpense: (expense: Expense) => void;
  updateExpense: (expense: Expense) => void;
  editingExpense: Expense | null;
  setEditingExpense: (expense: Expense | null) => void;
}

function AddExpenseForm({
  addExpense,
  updateExpense,
  editingExpense,
  setEditingExpense,
}: Props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState<Expense["category"]>(categories[0]);
  const [date, setDate] = useState("");

  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingExpense) {
      setTitle(editingExpense.title);
      setAmount(editingExpense.amount.toString());
      setCategory(editingExpense.category);
      setDate(editingExpense.date);
    }
  }, [editingExpense]);

  const clearForm = () => {
    setTitle("");
    setAmount("");
    setCategory(categories[0]);
    setDate("");
    titleRef.current?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !amount || !date) {
      toast.warning("Please fill all fields.");
      return;
    }

    if (Number(amount) <= 0) {
      toast.warning("Amount should be greater than 0.");
      return;
    }

    if (editingExpense) {
      updateExpense({
        ...editingExpense,
        title: title.trim(),
        amount: Number(amount),
        category,
        date,
      });

      toast.info("Expense Updated ✏️");
      setEditingExpense(null);
    } else {
      addExpense({
        id: crypto.randomUUID(),
        title: title.trim(),
        amount: Number(amount),
        category,
        date,
      });

      toast.success("Expense Added Successfully! 🎉");
    }

    clearForm();
  };

  return (
    <div className="card shadow rounded-4 mb-4">
      <div className="card-body">
        <h4 className="mb-4">
          {editingExpense ? "Edit Expense" : "Add Expense"}
        </h4>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-4">
              <input
                ref={titleRef}
                className="form-control"
                placeholder="Expense title"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="col-md-2">
              <input
                className="form-control"
                type="number"
                placeholder="Amount"
                value={amount}
                min="1"
                required
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="col-md-3">
              <select
                className="form-select"
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value as Expense["category"])
                }
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-3">
              <input
                className="form-control"
                type="date"
                value={date}
                required
                max={new Date().toISOString().split("T")[0]}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="btn text-white me-2"
              style={{ background: "var(--primary)" }}
            >
              {editingExpense ? "Update Expense" : "Add Expense"}
            </button>

            {editingExpense && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  clearForm();
                  setEditingExpense(null);
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddExpenseForm;