import { Link } from "react-router-dom";
import { Table } from "../components/Table/Table";

function CurrentEmployees() {
	return (
		<div className="container-table">
			<h1 className="title-page">Current Employees</h1>
      <Link to="/" className="links create">Create Employee</Link>
      <Table />
		</div>
	);
}

export default CurrentEmployees;
