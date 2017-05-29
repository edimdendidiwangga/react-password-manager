import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import PasswordAdd from './components/PasswordAdd'
import PasswordList from './components/PasswordList'
import PasswordEdit from './components/PasswordEdit'

import { Grid, Button, Dropdown, Menu, Input, Container, Header } from 'semantic-ui-react'

class App extends React.Component {
	state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
		const { activeItem } = this.state
    return (
      <div>
				<Menu size='small' color='teal' inverted>
	        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
	      	<Menu.Item>
	        	<Input className='icon' icon='search' placeholder='Search...' />
	      	</Menu.Item>
					<Menu.Menu position='right'>
						<Menu.Item>
							<Button color='green'>Sign In</Button>
						</Menu.Item>
						<Menu.Item>
		          <Button primary>Sign Up</Button>
		        </Menu.Item>
		      </Menu.Menu>
		    </Menu>


				<BrowserRouter>
					<div>
					<Grid divided='vertically'>
						<Grid.Row columns={16}>
							<Container>
								<Route exact path="/" component={PasswordList} />
								<Route path="/add" component={PasswordAdd}  />
								<Route path="/edit/:id" component={PasswordEdit} />
							</Container>
						</Grid.Row>
					</Grid>
					</div>
				</BrowserRouter>
      </div>
    );
  }
}

export default App;
