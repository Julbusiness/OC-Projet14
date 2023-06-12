import React, { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
import MOCK_DATA from '../../../public/MOCK_DATA.json'
import { COLUMNS } from './columns'
import { GlobalFilter } from './GlobalFilter'

export const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

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
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  const { globalFilter } = state
  const { pageIndex } = state

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>
        <span className="page-index">
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
      </div>
    </>
  )
}
