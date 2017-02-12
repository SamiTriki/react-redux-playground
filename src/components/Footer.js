import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All the shit
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Still to do
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Shit that got done
    </FilterLink>
  </p>
)

export default Footer
