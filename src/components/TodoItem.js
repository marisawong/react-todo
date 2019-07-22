import React, { Component } from 'react';
import PropTypes from 'prop-types'; 


class TodoItem extends Component {
	getStyle = () => {
		// Long-way of doing this 
		// if (this.props.todo.completed) {
		// 	return {
		// 		textDecoration: 'line-through'
		// 	}
		// } else {
		// 	return {
		// 		textDecoration: 'none'
		// 	}
		// }
		// Ternary operations --> boolean condition ? do_this_if_true : else_do_that
		return {
			backgroundColor: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		}
	}

	// Reason why we use arrow functions - to not have to bind shit
	// If is an event, pass in e, which is an event parameter
	// markComplete (e) {
		// console.log(this.props) 
		// this is actually undefined, therefore have the option to bind 
		// Below would be: onChange={this.markComplete.bind(this)}
		// Doesn't have access to this because it is a custom method
	// }

	// markComplete = (e) => {
	// 	console.log(this.props)
	// }

	render() {
		const { id, title } = this.props.todo; // Destructing 
		return (
			<div style={ this.getStyle() }>
				<p> 
					<input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '} 
					{ title } 
					<button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>x</button>
				</p> 
			</div>
		)
	}
}

// PropTypes
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
}


const itemStyle = {
	backgroundColor: '#f4f4f4'
}

const btnStyle = {
	backgroundColor: "#ff0000",
	color: "#fff",
	border: 'none',
	padding: '5px 8px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
}

export default TodoItem;