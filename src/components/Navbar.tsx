function Navbar() {

const today=new Date().toLocaleDateString();

return(

<nav
className="navbar shadow-sm"
style={{background:"white"}}
>

<div className="container">

<h2
className="fw-bold"
style={{color:"var(--primary)"}}
>

<i className="bi bi-wallet2 me-2"></i>

BudgetBuddy

</h2>

<span className="text-secondary">

{today}

</span>

</div>

</nav>

);

}

export default Navbar;