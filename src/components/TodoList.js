import React, { PropTypes } from 'react'
import Todo from './Todo'
import map from "lodash/map"
import reverse from "lodash/fp/reverse"
import sortBy from "lodash/fp/sortBy"
import flow from "lodash/fp/flow"

const TodoList = ({ todos, onTodoClick, onClearCompletedTodos }) => {

    todos = flow(
        reverse,
        sortBy(todos)(t=>t.created),
    )(todos)

    return (
        <div>
            <button onClick={onClearCompletedTodos}>Clear completed</button>
            <div>
                {
                map(todos, todo =>
                    <Todo
                        key={todo.id}
                        {...todo}
                        onClick={() => onTodoClick(todo.id)}
                    />

                )
                }
            </div>
        </div>

    )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onClearCompletedTodos: PropTypes.func.isRequired,
}

export default TodoList
