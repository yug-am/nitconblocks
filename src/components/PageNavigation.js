// src/components/PageNavigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './PageNavigation.css';

const PageNavigation = ({ prevLink, prevText, nextLink, nextText }) => {
  return (
    <div className="page-navigation">
      {prevLink && (
        <Link to={prevLink} className="page-navigation-link">
          {prevText}
        </Link>
      )}
      {nextLink && (
        <Link to={nextLink} className="page-navigation-link">
          {nextText}
        </Link>
      )}
    </div>
  );
};

PageNavigation.propTypes = {
  prevLink: PropTypes.string,
  prevText: PropTypes.string,
  nextLink: PropTypes.string,
  nextText: PropTypes.string,
};

export default PageNavigation;
