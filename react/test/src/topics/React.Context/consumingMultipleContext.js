import React, { Component, Fragment, createContext } from 'react';

const ThemeContext = createContext('light');

// Signed-in user context
const UserContext = createContext('Guest');

export default class ConsumingMultipleContext extends Component {
  render() {
    const { signedInUser, theme } = this.props;
    // if we wanna remove all Providers we will receive default context
    return (
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={signedInUser}>
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

ConsumingMultipleContext.defaultProps = {
  signedInUser: 'Bob',
  theme: 'light'
};

function Layout() {
  return (
    <div>
      <Sidebar />
      <Content />
    </div>
  );
}

function Sidebar() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <SidebarPage user={user} theme={theme} />
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}

function Content() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <ContentPage user={user} theme={theme} />
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}

class SidebarPage extends Component {
  render() {
    return (
      <Fragment>
        <h1>{this.props.user}</h1>
        <h2>{this.props.theme}</h2>
      </Fragment>
    )
  }
}

class ContentPage extends Component {
  render() {
    return (
      <Fragment>
        <h1>{this.props.user}</h1>
        <h2>{this.props.theme}</h2>
      </Fragment>
    )
  }
}