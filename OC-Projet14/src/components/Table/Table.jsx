import React, { useMemo, useState, useEffect } from "react";
import {
	useTable,
	useSortBy,
	useGlobalFilter,
	usePagination,
} from "react-table";
// import MOCK_DATA from "../../data/MOCK_DATA.json";
import { COLUMNS } from "./columns";
import { GlobalFilter } from "./GlobalFilter";

/**
 * This function displays the table of all employees.
 * @returns JSX element
 */
export const Table = () => {
	const columns = useMemo(() => COLUMNS, []);
	// const data = useMemo(() => MOCK_DATA, []);

	const [data, setData] = useState([]);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("items"));
		if (data) {
			setData(data);
		}
	}, []);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		previousPage,
		nextPage,
		canPreviousPage,
		canNextPage,
		pageOptions,
		gotoPage,
		pageCount,
		setPageSize,
		prepareRow,
		state,
		setGlobalFilter,
	} = useTable(
		{
			columns,
			data,
			initialState: { pageIndex: 0 },
		},
		useGlobalFilter,
		useSortBy,
		usePagination
	);

	const { globalFilter } = state;
	const { pageIndex, pageSize } = state;

	return (
		<>
			<div className="show-input-container">
				<select value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
					{[10, 25, 50].map((pageSize) => (
						<option key={pageSize} value={pageSize}>
							Show {pageSize}
						</option>
					))}
				</select>
				<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
			</div>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps(column.getSortByToggleProps())}>
									{column.render("Header")}
									<span>
										{column.isSorted
											? column.isSortedDesc
												? " 🔽"
												: " 🔼"
											: ""}
									</span>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			<div>
				<div className="button-container">
					<button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
						{"<<"}
					</button>
					<button onClick={() => previousPage()} disabled={!canPreviousPage}>
						Previous
					</button>
					<span className="gotoPage">
						<input
							type="number"
							defaultValue={pageIndex + 1}
							onChange={(e) => {
								const pageNumber = e.target.value
									? Number(e.target.value) - 1
									: 0;
								gotoPage(pageNumber);
							}}
							style={{ width: "50px" }}
						/>
					</span>
					<button onClick={() => nextPage()} disabled={!canNextPage}>
						Next
					</button>
					<button
						onClick={() => gotoPage(pageCount - 1)}
						disabled={!canNextPage}
					>
						{">>"}
					</button>
				</div>
				<div className="show-container">
					<span className="page-index">
						Page{" "}
						<strong>
							{pageIndex + 1} of {pageOptions.length}
						</strong>{" "}
					</span>
				</div>
			</div>
		</>
	);
};
