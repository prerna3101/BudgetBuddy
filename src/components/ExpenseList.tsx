function ExpenseList(){

return(

<div className="card rounded-4 shadow-sm">

<div className="card-body text-center py-5">

<i
className="bi bi-wallet2"
style={{fontSize:"60px",color:"var(--primary)"}}
></i>

<h4 className="mt-3">

No expenses yet!

</h4>

<p>

Start by adding your first expense.

</p>

</div>

</div>

);

}

export default ExpenseList;