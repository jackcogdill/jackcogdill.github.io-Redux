import React from 'react';
import PropTypes from 'prop-types';

import './Timeline.css';

const TimelineElem = ({
  image, title, location, date, children,
}) => (
  <div className="timeline-elem">
    <div
      className="timeline-image"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="timeline-title">
      {title}
    </div>
    <div className="timeline-location">
      {location}
    </div>
    <div className="timeline-content">
      {children.length ? children[0] : children}
    </div>
    {children.length && (
      <div className="timeline-links">
        {children.slice(1)}
      </div>
    )}
    <div className="timeline-date">
      <span>
        {date}
      </span>
    </div>
  </div>
);

TimelineElem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default TimelineElem;
