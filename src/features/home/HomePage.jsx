import React from "react";

const HomePage = ({ history }) => {
  return (
    <div className="ui inverted vertical masthead center aligned segment">
      <div className="ui text container">
        <h1 className="ui inverted stackable header">
          <img className="ui image massive" src="/assets/logo.png" alt="logo" />

          <div className="content">Re-Vents </div>
        </h1>
        <h2>Do Whatever You Want To Do!</h2>
        <div
          onClick={() => history.push("/events")}
          className="ui massive green inverted button"
        >
          Get Started
          <i className="right arrow icon" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
