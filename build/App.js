import React from 'react';
import logo from './logo.svg';
import Card from './components/Card';
import './App.css';

function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("header", {
    className: "App-header"
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    className: "App-logo",
    alt: "logo"
  }), /*#__PURE__*/React.createElement("p", null, "Edit ", /*#__PURE__*/React.createElement("code", null, "src/App.js"), " and save to reload."), /*#__PURE__*/React.createElement("a", {
    className: "App-link",
    href: "https://reactjs.org",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Testing for publishing NPM with create-react-app"), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h1", null, "Hello Developer, ", /*#__PURE__*/React.createElement("br", null), "I am new card component!!"))));
}

export default App;