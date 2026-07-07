import type { Expense } from "../../types/Expense";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface Props {
  expenses: Expense[];
}

const COLORS = [
  "#F97316",
  "#FF7F50",
  "#FDBA74",
  "#FB923C",
  "#EA580C",
  "#F59E0B",
];

function CategoryPieChart({ expenses }: Props) {
  const data = Object.values(
    expenses.reduce((acc: any, expense) => {
      if (!acc[expense.category]) {
        acc[expense.category] = {
          name: expense.category,
          value: 0,
        };
      }

      acc[expense.category].value += expense.amount;

      return acc;
    }, {})
  );

  return (
    <div className="card shadow rounded-4 p-3 h-100">
      <h5 className="mb-3">Expenses by Category</h5>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CategoryPieChart;