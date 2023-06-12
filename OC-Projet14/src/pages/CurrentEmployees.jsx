import { Link } from "react-router-dom";
import { PaginationTable } from "../components/Table/FilteringTable";

function CurrentEmployees() {
	return (
		<div className="container-table">
			<h1 className="title-page">Current Employees</h1>
      <Link to="/" className="links create">Create Employee</Link>
      <PaginationTable />
		</div>
	);
}

export default CurrentEmployees;
