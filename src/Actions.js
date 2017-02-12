export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

import {v4} from 'uuid'

export const addTodo = text => ({
    type: ADD_TODO,
    text,
    // generate random id
    id: v4(),
    created: Date.now()
})

export const toggleTodo = index => ({
    type: TOGGLE_TODO,
    index
})

export const deleteTodo = index => ({
    type: REMOVE_TODO,
    index
})

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
})

