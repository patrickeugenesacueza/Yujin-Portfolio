import React from "react";
import PropTypes from "prop-types";

const Link = ({ url, children }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
