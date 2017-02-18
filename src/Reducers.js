import { combineReducers } from 'redux'
import { VisibilityFilters } from './Actions'
import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, TODOS_REMOVECOMPLETED} from './Actions'
import map from 'lodash/map'
import reject from 'lodash/reject'

export const INITIAL_STATE = {
    VISIBILITY_FILTER: VisibilityFilters.SHOW_ALL,
    todos: []
}

function todo (state, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                created: action.created,
                completed: false
            }
        case TOGGLE_TODO:
            if (state.id !== action.index) return state

            return {
                ...state,
                completed: !state.completed
            }

        default:
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ]
        case TOGGLE_TODO:
            return map(state, t => todo(t, action))
        case TODOS_REMOVECOMPLETED:
            return reject(state, t => t.completed)
        default:
            return state
    }
}

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}
const todoApp = combineReducers({
    todos,
    visibilityFilter
})

export default todoApp
