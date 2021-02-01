import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { FaEye, FaTimes, FaEyeSlash } from 'react-icons/fa';

export const MovieControls = ({movie, type}) => {

  const { removeMovieFromWatchlist, 
          addMovieToWatched, 
          moveToWatchlist, 
          removeFromWatched 
        } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === 'watchlist' && (
        <>
        <button className="ctrl-btn"
          onClick={() => addMovieToWatched(movie)}
        >
          <FaEye />
        </button>

        <button className="ctrl-btn"
          onClick={() => removeMovieFromWatchlist(movie.id)}
        >
          <FaTimes />
        </button>
        </>
      )}

      {type === 'watched' && (
        <>
          <buttone className="ctrl-btn"
            onClick={() => moveToWatchlist(movie)}
          >
            <FaEyeSlash />
          </buttone>

          <buttone className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <FaTimes />
          </buttone>
        </>
      )}
    </div>
  )
}
