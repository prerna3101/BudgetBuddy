import { formatCurrency } from "../utils/formatCurrency";

interface Props {
  totalExpense: number;
  budget: number;
}

function BudgetProgress({ totalExpense, budget }: Props) {
  const percentage = Math.min((totalExpense / budget) * 100, 100);

  let color = "bg-success";

  if (percentage >= 80) {
    color = "bg-danger";
  } else if (percentage >= 50) {
    color = "bg-warning";
  }

  return (
    <div className="card shadow rounded-4 mb-4">
      <div className="card-body">

        <div className="d-flex justify-content-between">

          <h5>Monthly Budget</h5>

          <h5>{formatCurrency(budget)}</h5>

        </div>

        <div
          className="progress mt-3"
          style={{ height: "15px" }}
        >
          <div
            className={`progress-bar ${color}`}
            style={{ width: `${percentage}%` }}
          >
            {percentage.toFixed(0)}%
          </div>
        </div>

        <p className="mt-3 mb-0">

          Spent {formatCurrency(totalExpense)} of{" "}
          {formatCurrency(budget)}

        </p>

      </div>
    </div>
  );
}

export default BudgetProgress;