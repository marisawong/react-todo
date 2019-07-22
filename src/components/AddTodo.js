import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
	state = {
		title: ''
	}

	// onChange = (e) => this.setState({ title: e.target.value }); 
	// Can use [e.target.name] if don't want to show that it's a password
	// As long as it matches the name in the input
	onChange = (e) => this.setState({ [e.target.name]: e.target.value }); 


	onSubmit = (e) => {
		e.preventDefault(); 
		this.props.addTodo(this.state.title);
		this.setState({ title: ''});
	}

	render() {
		return (
			<form 
				onSubmit={this.onSubmit}
				style={{ display: 'flex' }}>
				<input 
					type="text" 
					name="title" 
					style={{ flex: '10', padding: '5px' }}
					placeholder="Add Todo..."
					value={this.state.title}
					onChange={this.onChange}
				/>
				<input 
					type="submit"
					value="Submit"
					className="btn"
					style={{flex: '1'}}/>
			</form>

		)

	}
}

// PropTypes
TodoItem.propTypes = {
	addTodo: PropTypes.func.isRequired,
}

export default AddTodo;


