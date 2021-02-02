import React from "react";
const Context = React.createContext();

export default class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: false,
    };
  }
  render() {
    return (
      <div>
        <Context.Provider
          value={{
            state: this.state,
            LoginUser: () => {
              this.setState({ loggedin: true });
            },
            LogoutUser: () => {
              this.setState({ loggedin: false });
            },
          }}
        >
          {this.props.children}
        </Context.Provider>
      </div>
    );
  }
}

export { Context };
