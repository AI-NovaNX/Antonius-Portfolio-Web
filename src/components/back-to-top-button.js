import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './ui/button';

const ArrowUpIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
    <path d="m5 12 7-7 7 7M12 5v14" />
  </svg>
);

const BackToTopButton = ({ targetId = 'overview' }) => {
  const scrollToTop = () => {
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${targetId}`);
    }
  };

  return (
    <Button
      className="back-to-top-button"
      variant="outline"
      onClick={scrollToTop}
      aria-label="Back to top page"
      title="Back to top page">
      <ArrowUpIcon />
      <span>Back to top page</span>
    </Button>
  );
};

BackToTopButton.propTypes = {
  targetId: PropTypes.string,
};

export default BackToTopButton;
