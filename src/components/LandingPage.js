import React from 'react';

export const LandingPage = () => {
  return (
    <div className="bg">
      <div className="landing">
        <div className="centered">
          <h1>Welcome to Watchlist</h1>
          <p>A simple way to manage your collection of movies!</p>
          <button className="btn"><a href="/add" >Add Movies</a></button>
        </div>
      </div>
    </div>

  );
}