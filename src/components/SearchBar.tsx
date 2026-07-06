interface Props {
  search: string;
  setSearch: (value: string) => void;
}

function SearchBar({ search, setSearch }: Props) {
  return (
    <div className="mb-3">
      <input
        className="form-control"
        placeholder="Search expense..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;