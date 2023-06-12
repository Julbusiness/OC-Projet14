import { format } from 'date-fns'

export const COLUMNS = [
	{
		Header: "ID",
		accessor: "id_number",
	},
	{
		Header: "First Name",
		accessor: "first_name",
	},
	{
		Header: "Last Name",
		accessor: "last_name",
	},
	{
		Header: "Start Date",
		accessor: "start_date",
		Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy') }
	},
	{
		Header: "Department",
		accessor: "department",
	},
	{
		Header: "Date of birth",
		accessor: "date_of_birth",
	},
	{
		Header: "Street",
		accessor: "street",
	},
	{
		Header: "City",
		accessor: "city",
	},
	{
		Header: "State",
		accessor: "state",
	},
	{
		Header: "Zip Code",
		accessor: "zip_code",
	},
];
