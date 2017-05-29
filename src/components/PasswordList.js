import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PasswordAdd from './PasswordAdd'
import { fetchPasswords, deletePassword, addPassword } from '../actions/passwordAction'
import { Table, Button, Modal } from 'semantic-ui-react'

class PasswordList extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			form : {
				id: '',
				url : '',
				username : '',
				password : ''
			},
		}
	}

	componentWillMount() {
		this.props.fetchPasswords()
	}

	handleChange(e) {
		let { name, value } = e.target
		let { form } = this.state
		let newState = {
			form: {
				...form
			}
		}
		newState.form[name] = value
		this.setState(newState)
	}

	show = () => () => this.setState({ open: true })
  close = () => this.setState({ open: false })

	renderTBody() {
		return (
			<Table.Body>
				{ this.props.passwords.map(item => (
        <Table.Row>
          <Table.Cell key={item.id}>{item.id}</Table.Cell>
          <Table.Cell>{item.url}</Table.Cell>
          <Table.Cell>{item.username}</Table.Cell>
					<Table.Cell>{item.password}</Table.Cell>
					<Table.Cell>
						<Link to={`/edit/${item.id}`} ><Button color='teal'>EDIT</Button></Link>
						<Button color='red'  >DELETE</Button>
					</Table.Cell>
        </Table.Row>

				))}
			</Table.Body>
		)
	}

	render() {
	const { open } = this.state
	return (
		<div>
		{/* edit modal*/}
		<Modal size='small' open={open} onClose={this.close()}>
      <Modal.Header>
        Create Password
      </Modal.Header>
      <Modal.Content>
				<PasswordAdd
					handleInputChange={this.handleChange.bind(this)}/>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={this.close}>
          No
        </Button>
				<Button positive icon='checkmark' labelPosition='right' content='Save'
					onClick={ ()=> {
						this.close();
						this.props.addPassword(this.state.form);
					}}
				/>
      </Modal.Actions>
    </Modal>
		<Button onClick={this.show('small')} color='blue'>Create Password</Button>
		<Table size='large'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>URL</Table.HeaderCell>
          <Table.HeaderCell>USERNAME</Table.HeaderCell>
					<Table.HeaderCell>PASSWORD</Table.HeaderCell>
					<Table.HeaderCell>ACTION</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

			{ this.renderTBody() }
		</Table>
		</div>
	)
	}
}

const mapStateToProps = state => ({
	passwords: state.data
})
const mapDispatchToProps = dispatch => ({
	fetchPasswords: () => dispatch(fetchPasswords()),
	addPassword: data => dispatch(addPassword(data)),
	deletePassword: (id) => dispatch(deletePassword(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PasswordList)
