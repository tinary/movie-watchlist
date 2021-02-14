import React from 'react';
import { MovieDetail } from './MovieDetail';

export const ModalStyle = () => {
  return (
    <div className="container">
      <div className="modal">
        <MovieDetail />
      </div>
    </div>
  )
}
