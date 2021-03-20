import React from 'react';
import './bombCounter.scss';

export const BombCounter = ({ bombCount }) => {

  return (
    <div className="bomb-wrapper">
      { bombCount }
    </div>
  )
}