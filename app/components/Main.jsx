var React = require('react');
var Navbar = require('Navbar');

var Main = (props) => {
  return (
    <div>
      <Navbar />
      <p>Main.jsx is here!!</p>
      { props.children }
    </div>
  );
}

module.exports = Main;
