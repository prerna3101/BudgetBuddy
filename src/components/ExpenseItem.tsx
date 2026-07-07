import { categoryIcons } from "../data/CategoryIcons";
import type { Expense } from "../types/Expense";
import { formatCurrency } from "../utils/formatCurrency";
import { formatDate } from "../utils/formatDate";
import { toast } from "react-toastify";

interface Props {
  expense: Expense;
  deleteExpense: (id: string) => void;
  setEditingExpense: (expense: Expense) => void;
}

function ExpenseItem({
  expense,
  deleteExpense,
  setEditingExpense,
}: Props) {
  const handleDelete = () => {
    if (window.confirm("Delete this expense?")) {
      deleteExpense(expense.id);
      toast.error("Expense Deleted 🗑️");
    }
  };

  return (
    <tr>
      <td>{expense.title}</td>

      <td>
        <span className="badge bg-warning text-dark px-3 py-2">
          {categoryIcons[
            expense.category as keyof typeof categoryIcons
          ]}{" "}
          {expense.category}
        </span>
      </td>

      <td>{formatCurrency(expense.amount)}</td>

      <td>{formatDate(expense.date)}</td>

      <td>
        <button
          className="btn btn-outline-primary btn-sm me-2"
          onClick={() => setEditingExpense(expense)}
          title="Edit Expense"
        >
          <i className="bi bi-pencil-square"></i>
        </button>

        <button
          className="btn btn-outline-danger btn-sm"
          onClick={handleDelete}
          title="Delete Expense"
        >
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
}

export default ExpenseItem;