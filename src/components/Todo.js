import React, { PropTypes } from 'react'
import Radium from 'radium'

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

const getStyles = completed => ({
    base: {
        border: "0px",
        padding: "10px 0px",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: 700,
        color: "#555",
        display: 'block',
        textTransform: 'capitalize',
        ":hover": {
            backgroundColor: '#f1f1f1'
        }
    },
    completed: {
        textDecoration: 'line-through',
        opacity: .4,
    }
})

const Todo = ({ onClick, completed, text, created, onDelete}) => {
    const style = getStyles()

    return (
        <div onClick={onClick} style={[style.base, completed ? style.completed: {}]}>
            <span>
                {text}
                <span style={{fontSize: 12, color: "#CCC"}} > - {formatDate(created)}</span>
            </span>
        </div>
    )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Radium(Todo)
