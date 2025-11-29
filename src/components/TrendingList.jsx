import React from "react";
import "./Trending.css";

const IMAGE_PATH = "https://image.tmdb.org/t/p/w300/";

const TrendingList = ({ movies, onAddMovie }) => {
  return (
    <div className="trending-wrapper">
      <h2 className="trending-title">🔥 Trending Today</h2>

      <div className="trending-scroll">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="trending-card"
            onClick={() => onAddMovie(movie)}
          >
            <img
              src={IMAGE_PATH + movie.poster_path}
              alt={movie.title}
              className="trending-poster"
            />
            <div className="trending-info">
              <span className="trending-name">{movie.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingList;
