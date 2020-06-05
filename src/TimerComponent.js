import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components'
import withCountState from './withCountState';

const TimerComponentNeedingCountState = (props) => {
  var interval = null;
  useEffect(() => {
    interval = setInterval(props.handleCountChange,1000)
      return () => clearInterval(interval);
  },[props.count])
  return(<div>{props.count}
  </div>)
};

const TimerComponent = withCountState(TimerComponentNeedingCountState);
export default TimerComponent;