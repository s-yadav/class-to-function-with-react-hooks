import React, { useReducer, useState, useEffect, useRef } from "react";

class ClassAuthExample extends React.Component {
  state = {
    tab: "login"
  };
  static getDerivedStateFromProps(props, state) {
    if (state.tab === "signup" && props.signupDisabled === true) {
      return {
        tab: "login"
      };
    }

    return null;
  }
  changeTab = tab => {
    this.setState({ tab });
  };
  render() {
    const { signupDisabled } = this.props;
    const { tab } = this.state;
    return (
      <div className="auth tab-view">
        <ul className="tabs">
          <li className="tab" onClick={() => this.changeTab("login")}>
            Login
          </li>
          {!signupDisabled && (
            <li className="tab" onClick={() => this.changeTab("signup")}>
              Signup
            </li>
          )}
        </ul>
        <div className="form-container tab-content">
          <div className="placeholder">{tab} form</div>
        </div>
      </div>
    );
  }
}

function FunctionAuthExample(props) {
  const { signupDisabled } = props;
  const [tab, changeTab] = useState("login");

  if (tab === "signup" && signupDisabled === true) {
    changeTab("login");
  }

  return (
    <div className="auth tab-view">
      <ul className="tabs">
        <li className="tab" onClick={() => changeTab("login")}>
          Login
        </li>
        {!signupDisabled && (
          <li className="tab" onClick={() => changeTab("signup")}>
            Signup
          </li>
        )}
      </ul>
      <div className="form-container tab-content">
        <div className="placeholder">{tab} form</div>
      </div>
    </div>
  );
}

function withSignupDisableButton(Component) {
  return function() {
    const [signupDisabled, disableSignup] = useState(false);

    return (
      <>
        <Component signupDisabled={signupDisabled} />
        <button onClick={() => disableSignup(!signupDisabled)}>
          Toggle Signup Disable
        </button>
      </>
    );
  };
}

export const ClassDerivedStateExample = withSignupDisableButton(
  ClassAuthExample
);

export const FunctionDerivedStateExample = withSignupDisableButton(
  FunctionAuthExample
);
