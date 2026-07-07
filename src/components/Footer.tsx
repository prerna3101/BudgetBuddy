function Footer() {
  return (
    <footer
      className="mt-5 py-4 text-center"
      style={{
        borderTop: "1px solid var(--border)",
        color: "var(--text)",
      }}
    >
      <h5 className="fw-bold mb-1">
        <i className="bi bi-wallet2 text-warning me-2"></i>
        BudgetBuddy
      </h5>

      <p className="mb-2">
        Track Smart • Spend Wisely • Save More
      </p>

      <small className="text-muted">
        © 2026 BudgetBuddy
      </small>
    </footer>
  );
}

export default Footer;