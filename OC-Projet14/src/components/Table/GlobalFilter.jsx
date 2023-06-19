/**
 * This function is used to manage the displayboard filter system.
 * @param {string} param0 
 * @returns 
 */
export const GlobalFilter = ({ filter, setFilter }) => {

  return (
    <span className="global-filter">
      Search : {' '}
      <input
        value={filter || ''}
        onChange={e => {
          setFilter(e.target.value)
        }}
      />
    </span>
  )
}