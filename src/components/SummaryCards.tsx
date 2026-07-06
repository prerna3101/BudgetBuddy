import type { Expense } from "../types/Expense";
import { calculateTotals } from "../utils/calculateTotals";
import { formatCurrency } from "../utils/formatCurrency";

interface Props {
  expenses: Expense[];
}

function SummaryCards({ expenses }: Props) {
  const totals = calculateTotals(expenses);

  return (
    <div className="row g-3 mb-4">
      <div className="col-md-3">
        <div className="card rounded-4 shadow-sm">
          <div className="card-body">
            <h6>Total Expense</h6>
            <h4>{formatCurrency(totals.totalExpense)}</h4>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card rounded-4 shadow-sm">
          <div className="card-body">
            <h6>Highest Expense</h6>
            <h4>{formatCurrency(totals.highestExpense)}</h4>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card rounded-4 shadow-sm">
          <div className="card-body">
            <h6>Transactions</h6>
            <h4>{totals.totalTransactions}</h4>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card rounded-4 shadow-sm">
          <div className="card-body">
            <h6>Categories</h6>
            <h4>{totals.uniqueCategories}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryCards;