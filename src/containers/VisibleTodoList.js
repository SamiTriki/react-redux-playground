import { connect } from 'react-redux'
import { toggleTodo, clearCompletedTodos } from '../Actions'
import TodoList from '../components/TodoList'
import reverse from "lodash/fp/reverse"
import sortBy from "lodash/fp/sortBy"
import flow from "lodash/fp/flow"

const getVisibleTodos = (todos, filter) => {
    todos = flow(
        reverse,
        sortBy(todos)(t=>t.created),
    )(todos)

    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        default:
            return todos
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    onTodoClick: (id) => {
        dispatch(toggleTodo(id))
    },
        onClearCompletedTodos: _ => dispatch(clearCompletedTodos())
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList
