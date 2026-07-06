import { categories } from "../data/categories";

interface Props {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}: Props) {
  return (
    <div className="mb-4">
      <select
        className="form-select"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All Categories</option>

        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;