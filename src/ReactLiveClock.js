import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

let tickTimer;
const getDate = date => date ? date : new Date().getTime();

const ReactLiveClock = ({
  ago,
  children,
  className,
  date,
  format,
  from,
  fromNow,
  locale,
  parse,
  timezone,
  to,
  toNow,
  unix
  }) =>
    <Moment
      ago={ago}
      className={className}
      date={getDate(date || children)}
      format={format}
      from={from}
      fromNow={fromNow}
      locale={locale}
      parse={parse}
      to={to}
      toNow={toNow}
      tz={timezone}
      unix={unix} />;

ReactLiveClock.componentDidMount = ({ticking, interval}) => {
  if (ticking) {
    tickTimer = setInterval(() => {
      ReactLiveClock.forceUpdate();
    }, interval);
  }
};

ReactLiveClock.componentWillUnmount = () => {
  if (tickTimer) {
    clearInterval(tickTimer);
  }
};

ReactLiveClock.propTypes = {
  ago: PropTypes.bool,
  children: PropTypes.string,
  className: PropTypes.string,
  date: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  format: PropTypes.string,
  from: PropTypes.string,
  fromNow: PropTypes.bool,
  interval: PropTypes.number,
  locale: PropTypes.string,
  parse: PropTypes.string,
  to: PropTypes.string,
  toNow: PropTypes.bool,
  unix: PropTypes.bool,
  ticking: PropTypes.bool,
  timezone: PropTypes.string
};

ReactLiveClock.defaultProps = {
  ago: false,
  className: null,
  date: null,
  format: 'HH:mm',
  from: null,
  fromNow: false,
  interval: 1000,
  locale: null,
  parse: null,
  to: null,
  toNow: false,
  unix: false,
  ticking: false,
  timezone: null
};

export default ReactLiveClock;
