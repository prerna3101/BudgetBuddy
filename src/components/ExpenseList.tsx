import ExpenseItem from "./ExpenseItem";
import type { Expense } from "../types/Expense";

interface Props {
  expenses: Expense[];
  deleteExpense: (id: string) => void;
  setEditingExpense: (expense: Expense) => void;
}

function ExpenseList({
  expenses,
  deleteExpense,
  setEditingExpense,
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
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {expenses.map((expense) => (
                <ExpenseItem
                  key={expense.id}
                  expense={expense}
                  deleteExpense={deleteExpense}
                  setEditingExpense={setEditingExpense}
                />
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}

export default ExpenseList;