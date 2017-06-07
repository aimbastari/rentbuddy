import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Header from './Header'
import Home from './Home';
import About from './About';
import NoMatch from './NoMatch';

import SignIn from './components/auth/SignIn';
import SignOut from './components/auth/SignOut';
import SignUp from './components/auth/SignUp';

import Dashboard from './Dashboard';
import RentalApplication from './RentalApplication';
import Agreement from './agreement/Agreement';
import Agreements from './Agreements';

import Maintenance from './Maintenance';
import Footer from './Footer';


import { Switch, Route, Redirect, Link } from 'react-router-dom';

import { Container, Grid, GridColumn, GridRow, Menu } from 'semantic-ui-react';

import { Spinner} from 'react-redux-spinner';





class App extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state

    return (
     <Container>
        <Spinner />
        <Header />
        <Grid stackable>
          <GridRow >
            <GridColumn width={3}>
              <Menu size='mini' vertical fluid>
                <Menu.Item name='dashboard'   as={Link} to="/dashboard" active={activeItem === 'dashboard'} onClick={this.handleItemClick} />
                <Menu.Item name='application' as={Link} to="/application" active={activeItem === 'application'} onClick={this.handleItemClick} />
                <Menu.Item name='agreements'   as={Link} to="/agreements" active={activeItem === 'agreements'} onClick={this.handleItemClick} />
                <Menu.Item name='communityRules'   as={Link} to="/" active={activeItem === ''} onClick={this.handleItemClick} />
                <Menu.Item name='notifications'   as={Link} to="/" active={activeItem === ''} onClick={this.handleItemClick} />
                
                <Menu.Item name='maintenance' as={Link} to="/maintenance" active={activeItem === 'manintenance'} onClick={this.handleItemClick} />

              </Menu>

            </GridColumn>
            <GridColumn width={13}>
              <Switch>
                <Route exact path='/'   component={Home} />
                <Route path='/about'    component={About} />
                <Route path='/signin'   component={SignIn} />
                <Route path='/signout'  component={SignOut} />
                <Route path='/signup'   component={SignUp} />

                <Route path='/dashboard'    render={()=>(
                    localStorage.getItem('token') ? <Dashboard /> :
                      <Redirect to='/signin' /> )}
                />
                <Route path='/application'  render={()=>(
                    localStorage.getItem('token') ? <RentalApplication /> :
                      <Redirect to='/signin' /> )}
                />

                <Route path='/agreement/:id'  render={(match)=>(
                    localStorage.getItem('token') ? <Agreement id={match.match.params.id}/> :
                      <Redirect to='/signin' /> )}
                />

                <Route path='/agreements'  render={()=>(
                    localStorage.getItem('token') ? <Agreements /> :
                      <Redirect to='/signin' /> )}
                />

                <Route path='/maintenance'  render={()=>(
                    localStorage.getItem('token') ? <Maintenance /> :
                      <Redirect to='/signin' /> )}
                />

                <Route component={NoMatch}/>
              </Switch>

            </GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn>
              <Footer />
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    );
  }
}



export default App;
