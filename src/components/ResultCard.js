import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { ModalStyle } from './ModalStyle';
import { MovieDetail } from './MovieDetail';

export const ResultCard = ({movie}) => {

  const [showModal, setShowModal] = useState(false);

  // grab our action from GlobalContext
  const { addMovieToWatchlist,
          addMovieToWatched,
          watchlist, 
          watched 
        } = useContext(GlobalContext);

  let storedMovie = watchlist.find(obj => obj.id === movie.id);
  let storedMovieWatched = watched.find(obj => obj.id === movie.id);

  // this nested if statement checked both array watchlist and watched
  const watchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false;

  const watchedDisabled = storedMovieWatched ? true: false;

  const openModal = () => {
    setShowModal(prev => !prev);
  };


  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>

        <div className="controls">
          <button className="btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Watchlist
          </button>

          <button className="btn"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>

          <button className="btn"
            onClick={() => openModal(movie)}
          >
            View Detail
          </button>
          <MovieDetail movie={movie} showModal={showModal} setShowModal={setShowModal} />
          <ModalStyle />
        </div>
      </div>

    </div>
  )
}
