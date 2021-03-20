import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import './timer.scss';

export const Timer = ({ time }) => {

  return (      
    <div className="time-wrapper">
       { time }
    </div>
  )
}
