import React from 'react'
import { connect } from 'react-redux'
import { editPassword, getById } from '../actions/passwordAction'

class PasswordEdit extends React.Component {
  constructor(props){
    super(props)
    this.state = {
			form : {
				id: '',
				url : '',
				username : '',
				password : ''
			}
  }
}

	componentWillReceiveProps(nextProps){
		let newState = {
			form : nextProps.passwords.data[0]
		}
		this.setState(newState)
	}

	componentDidMount(){
		let idParam = this.props.match.params.id
		// this.props.getById(idParam)
	}
	componentWillMount(){
		let idParam = this.props.match.params.id
		if(this.props.passwords.data.length != 0){
			let newData = this.props.passwords.data.filter(item => {
				return item.id == idParam
			})
			let newState = {
				form: {
					id: idParam,
					url : newData[0].url,
					username : newData[0].username,
					password : newData[0].password
				}
			}
			console.log('will', newState)
			this.setState(newState)
		}else{
			console.log('kosong')
		}
	}

  handleEditChange(e){
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

  render() {
		console.log('render', this.state)
    return (
      <div>
        <form>
          <label>
            Url
          </label>
          <input
	          name="url"
	          type="text"
						value={this.state.form.url}
	          onChange={this.handleEditChange.bind(this)}
					/>
          <br />
					<label>
            Username
          </label>
          <input
          name="username"
          type="text"
					value={this.state.form.username}
          onChange={this.handleEditChange.bind(this)} />
          <br />
          <label>
            Password
          </label>
          <input
          name="password"
          type="text"
					value={this.state.form.password}
          onChange={this.handleEditChange.bind(this)} />
          <br />
          <button
          type='button'
          onClick={()=>{
            this.props.editPassword(this.state.form)
          }}>
            Update
          </button>
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => ({
	passwords: state
})

const mapDispatchToProps = dispatch => ({
  editPassword : data => dispatch(editPassword(data)),
	getById: id => dispatch(getById(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PasswordEdit)
