import React, {useState, useEffect} from 'react';
import './cell.scss'

export const Cell = ({isBomb, title}) => {
  const [bomb, setBomb] = useState(isBomb)

  return (
    <div className="cell">
      title
    </div>
  )
}