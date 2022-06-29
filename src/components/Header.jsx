//rfce boiler template
import PropTypes from "prop-types";
import React from "react";
function Header(props) {

  const headerStyle = {
    backgroundColor: props.bgColor, //passing from parent / else take default
    color: props.textColor,
  };

  return (
    <header style={headerStyle}>
      <div className='container '>
        <h2>{props.text}</h2>
      </div>
    </header>
  );
}
Header.defaultProps = {
  text: "Feedback UI",
  bgColor: 'rgb(0,0,0,0.4)',
  textColor: '#ff6a95',
};

Header.propTypes = {
  text: PropTypes.string,
};
export default Header;
