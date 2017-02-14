import React, { PropTypes } from 'react'
import Todo from './Todo'
import map from "lodash/map"
import reverse from "lodash/fp/reverse"
import sortBy from "lodash/fp/sortBy"
import flow from "lodash/fp/flow"

const TodoList = ({ todos, onTodoClick, onTodoDelete }) => {

    todos = flow(
        reverse,
        sortBy(todos)(t=>t.created),
    )(todos)

    return (
        <div>
            {
            map(todos, todo =>
                <Todo
                    key={todo.id}
                    {...todo}
                    onClick={() => onTodoClick(todo.id)}
                    onDelete={() => onTodoDelete(todo.id)}
                />

            )
            }
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
  onTodoDelete: PropTypes.func.isRequired

}

export default TodoList
