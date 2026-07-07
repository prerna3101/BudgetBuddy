import type { Expense } from "../../types/Expense";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  expenses: Expense[];
}

function MonthlyExpenseChart({ expenses }: Props) {
  const monthlyData = Object.values(
    expenses.reduce((acc: any, expense) => {
      const month = new Date(expense.date).toLocaleString("default", {
        month: "short",
      });

      if (!acc[month]) {
        acc[month] = {
          month,
          amount: 0,
        };
      }

      acc[month].amount += expense.amount;

      return acc;
    }, {})
  );

  return (
    <div className="card shadow rounded-4 p-3 h-100">
      <h5 className="mb-3">Monthly Expenses</h5>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={monthlyData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="amount"
            stroke="#F97316"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MonthlyExpenseChart;