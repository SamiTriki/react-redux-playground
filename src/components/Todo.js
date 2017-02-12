import React, { PropTypes } from 'react'

function formatDate(timestamp) {
    let date = new Date(timestamp);
    let year = date.getFullYear();
    let month = ("0"+(date.getMonth()+1)).substr(-2);
    let day = ("0"+date.getDate()).substr(-2);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();

    return  `${day}/${month}/${year} ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`
}

const Todo = ({ onClick, completed, text, created, onDelete}) => (
    <div>
        <span
            onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            {text}
            <span style={{fontSize: 12, color: "#CCC"}} > - {formatDate(created)}</span>
        </span>
        <span onClick={onDelete}> x</span>
    </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Todo
