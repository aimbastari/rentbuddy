import React from 'react';
import {Link} from 'react-router-dom';
import { Menu, Dropdown, Button, Image } from 'semantic-ui-react';

import logo from './assets/images/rentbuddy-logo.png';

import { connect } from 'react-redux';

class Header extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    const renderSign = () =>  {
      if (this.props.authenticated){
         return (
          <Menu.Menu position='right'>
            <Menu.Item as={Link} to="/signout">
              <Button color='orange' compact>Sign Out</Button>
            </Menu.Item>          
          </Menu.Menu>

        )
      }else{
         return (
          <Menu.Menu position='right'>
            <Menu.Item as={Link} to="/signup">
              <Button color='orange' compact>Sign Up</Button>
              <Button.Or />
            </Menu.Item>
            <Menu.Item as={Link} to="/signin">
              <Button color='orange' compact>Sign In</Button>
            </Menu.Item>
          </Menu.Menu>
        )
      }
    }


    return (
      <Menu size='mini'>
        <Menu.Item as={Link} to="/" name='home' active={activeItem === 'home'} onClick={this.handleItemClick} fitted><Image src={logo} /> </Menu.Item>
        <Menu.Item name='dashboard'   as={Link} to="/dashboard" active={activeItem === 'dashboard'} onClick={this.handleItemClick} />
        <Menu.Item name='application' as={Link} to="/application" active={activeItem === 'application'} onClick={this.handleItemClick} />
        <Menu.Item name='agreement'   as={Link} to="/agreement" active={activeItem === 'agreement'} onClick={this.handleItemClick} />
        <Menu.Item name='maintenance' as={Link} to="/maintenance" active={activeItem === 'manintenance'} onClick={this.handleItemClick} />

        <Menu.Menu position='right'>
 
          {renderSign()}
        </Menu.Menu>
      </Menu>
    )
  }


}


const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated
  }
}


export default connect(mapStateToProps)(Header);
