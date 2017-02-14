import React from 'react'
import FilterLink from '../containers/FilterLink'
import TodoCount from '../containers/TodoCount'

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All the shit (<TodoCount type="ALL"></TodoCount>)
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Still to do  (<TodoCount type="ACTIVE"></TodoCount>)
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Shit that got done  (<TodoCount type="DONE"></TodoCount>)
    </FilterLink>
  </p>
)

export default Footer
