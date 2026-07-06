import type { Expense } from "../types/Expense";
import { formatCurrency } from "../utils/formatCurrency";
import { formatDate } from "../utils/formatDate";

interface Props {
  expenses: Expense[];
  deleteExpense: (id: string) => void;
}

function ExpenseList({
  expenses,
  deleteExpense,
}: Props) {
  if (expenses.length === 0) {
    return (
      <div className="card shadow-sm rounded-4">
        <div className="card-body text-center py-5">
          <h4>No expenses found</h4>
        </div>
      </div>
    );
  }

  return (
    <div className="card shadow-sm rounded-4">
      <div className="card-body">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.title}</td>
                <td>
                <span className="badge bg-warning text-dark px-3 py-2">

                {expense.category}

                </span>
                </td>
                <td>{formatCurrency(expense.amount)}</td>
                <td>{formatDate(expense.date)}</td>
                <td>
                    <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => {

                    if(window.confirm("Delete this expense?")){

                    deleteExpense(expense.id);

                    }

                    }}
                    >

                    <i className="bi bi-trash"></i>

                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExpenseList;