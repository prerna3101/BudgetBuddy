function AddExpenseForm(){

return(

<div className="card shadow rounded-4 mb-4">

<div className="card-body">

<h4 className="mb-4">

Add Expense

</h4>

<div className="row g-3">

<div className="col-md-4">

<input
type="text"
className="form-control"
placeholder="Expense title"
/>

</div>

<div className="col-md-2">

<input
type="number"
className="form-control"
placeholder="Amount"
/>

</div>

<div className="col-md-3">

<select className="form-select">

<option>Food</option>

<option>Travel</option>

<option>Shopping</option>

</select>

</div>

<div className="col-md-3">

<input
type="date"
className="form-control"
/>

</div>

</div>

<button
className="btn mt-4 text-white"
style={{background:"var(--primary)"}}
>

<i className="bi bi-plus-circle me-2"></i>

Add Expense

</button>

</div>

</div>

);

}

export default AddExpenseForm;