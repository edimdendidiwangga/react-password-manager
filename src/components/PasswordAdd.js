import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class PasswordAdd extends React.Component{
	constructor(props){
		super(props)
	}

	render() {
	return (
		<div>
		<Form>
		 	<Form.Field>
				<label>URL</label>
				<input
				 name="url"
				 type="text"
				 onChange={ this.props.handleInputChange.bind(this) }
				/>
		 	</Form.Field>
		  <Form.Field>
				<label>Username</label>
				<input
					name="username"
					type="text"
					onChange={ this.props.handleInputChange.bind(this) }
				/>
		 	</Form.Field>
			<Form.Field>
				<label>Password</label>
				<input
				 name="password"
				 type="text"
				 onChange={ this.props.handleInputChange.bind(this) }
			 	/>
		 	</Form.Field>
		</Form>
		</div>
	)
}
}

export default PasswordAdd
