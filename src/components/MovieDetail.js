import React from 'react';
import { GrClose } from 'react-icons/gr';


export const MovieDetail = ({ movie, showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <div className="container">
          <div className="modal-background">
            <div className="modal-wrapper" showModal={showModal}>
              <div className="modal-image">
                {movie.poster_path ? (
                  <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
                  />
                ) : (
                    <div className="filler-poster"></div>
                  )}
              </div>
              
              <div className="modal-content">
                <h1>{movie.title}</h1>
                <h4 className="release-date">
                  {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
                </h4>
                <p className="header">Overview:</p>
                <p className="content-detail">{movie.overview}</p>
              </div>

              <div className="close-modal-button" onClick={() => setShowModal(prev => !prev)}>
                <GrClose />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
