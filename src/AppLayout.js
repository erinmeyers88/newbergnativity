import React, {Component} from 'react'
import {
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import Routes from './Routes';
import Footer from './Footer';
import {withRouter} from 'react-router-dom';

/* eslint-disable react/no-multi-comp */

const MenuItems = (location, history) => <>
  <Menu.Item active={location.pathname === ('/' || '/home')} onClick={() => history.push('/')}>Home</Menu.Item>
  <Menu.Item active={location.pathname === '/animals'} onClick={() => history.push('/animals')}>Animals</Menu.Item>
  <Menu.Item active={location.pathname === '/history'} onClick={() => history.push('/history')}>History</Menu.Item>
  <Menu.Item active={location.pathname === '/photos'} onClick={() => history.push('/photos')}>Photos</Menu.Item>
</>;

class DesktopContainer extends Component {
  state = {};

  render() {
    const {children, history, location} = this.props;
    const {fixed} = this.state;

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Segment
          inverted
          textAlign='center'
          style={{padding: 0}}
          vertical
        >
          <Menu
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            color="red"
            pointing={!fixed}
            secondary={!fixed}
            size='large'
            style={{margin: 0}}
          >
            {MenuItems(location, history)}
          </Menu>
        </Segment>
        <div style={{minHeight: 'calc(100vh - 188px)'}}>
          {children}
        </div>
        <Footer/>
      </Responsive>
    )
  }
}



class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({sidebarOpened: false});

  handleToggle = () => this.setState({sidebarOpened: true});

  render() {
    const {children, history, location} = this.props;
    const {sidebarOpened} = this.state;


    return (
      <Responsive as={Sidebar.Pushable} maxWidth={Responsive.onlyMobile.maxWidth} style={{height: '100%'}}>
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          color="red"
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
          style={{margin: 0}}
        >
          {MenuItems(location, history)}
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened} style={{height: '100%'}}>
          <Segment
            inverted
            textAlign='center'
            style={{padding: 0}}
            vertical
          >
            <Menu inverted color="red" pointing secondary size='large' style={{margin: 0}}>
              <Menu.Item onClick={this.handleToggle}>
                <Icon name='sidebar'/>
              </Menu.Item>
            </Menu>
          </Segment>
          <div style={{height: 'calc(100% - 45px)'}}>
            {children}
          </div>
        </Sidebar.Pusher>
        <Footer/>
      </Responsive>
    )
  }
}

const AppLayout = (props) => (
  <div style={{height: '100vh'}}>
    <DesktopContainer {...props}><Routes/></DesktopContainer>
    <MobileContainer {...props} mobile><Routes mobile/></MobileContainer>
  </div>
);

export default withRouter(AppLayout);