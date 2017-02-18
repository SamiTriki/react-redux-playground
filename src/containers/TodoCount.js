import { connect } from 'react-redux'
import Count from '../components/Count'
import filter from 'lodash/fp/filter'

const getCount = (state, ownProps) => {
    if (!state.todos) return 0

    switch(ownProps.type) {
        case "ALL":
            return state.todos.length
        case "ACTIVE":
            return filter(t=> !t.completed)(state.todos).length
        case "DONE":
            return filter(t=> t.completed)(state.todos).length
        default:
            return 0
    }
}
const mapStateToProps = (state, ownProps) => ({
    number: getCount(state, ownProps)
})

const TodoCount = connect(
  mapStateToProps,
  undefined
)(Count)

export default TodoCount
