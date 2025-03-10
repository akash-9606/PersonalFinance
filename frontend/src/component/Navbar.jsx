import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-semibold">Finance Manager</h1>
      <div className="space-x-6">
        <Link className="hover:text-gray-300 transition" to="/dashboard">Dashboard</Link>
        <Link className="hover:text-gray-300 transition" to="/transactions">Transactions</Link>
        <Link className="hover:text-gray-300 transition" to="/budgets">Budgets</Link>
      </div>
    </nav>
  );
}

export default Navbar;
