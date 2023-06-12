import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

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