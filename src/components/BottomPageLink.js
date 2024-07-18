import React from 'react';
import { Link } from 'react-router-dom';

class BottomPageLink extends React.Component {
  render() {
    const { to, text, marginRight } = this.props;

    const linkStyle = {
      marginLeft: 'auto', 
      marginRight: marginRight || '20px', 

    };

    return (
      <Link to={to} style={linkStyle}>
        {text}
      </Link>
    );
  }
}

export default BottomPageLink;
