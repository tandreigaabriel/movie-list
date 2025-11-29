// src/components/MovieList.jsx
import React from "react";
import { Card, Button } from "antd";
import { DeleteFilled, StarFilled, StarOutlined } from "@ant-design/icons";

const { Meta } = Card;
const IMAGE_PATH = "https://image.tmdb.org/t/p/w300/";

const MovieList = ({ movies, onRemoveMovie, onRatingChange, onSelectMovie }) => {
  return (
    <>
      {movies.map((movie) => (
        <Card
          key={movie.id}
          hoverable
          onClick={() => onSelectMovie(movie)}
          style={{ cursor: "pointer" }}
          cover={
            <img
              src={IMAGE_PATH + movie.poster_path}
              alt={movie.title}
              style={{ borderRadius: "8px 8px 0 0" }}
            />
          }
          actions={[
            <Button
              key="delete"
              danger
              icon={<DeleteFilled />}
              onClick={(e) => {
                e.stopPropagation(); // stop card click
                onRemoveMovie(movie.id);
              }}
            >
              Remove
            </Button>,
          ]}
        >
          <Meta
            title={movie.title}
            description={
              <>
                <div className="movie_genres">{movie.genres}</div>

                <div className="movie_votes">⭐ {movie.vote_average}</div>

                <div
                  className="movie_rating"
                  onClick={(e) => e.stopPropagation()} // prevent modal opening
                >
                  {[...Array(10)].map((_, i) =>
                    movie.rating > i ? (
                      <StarFilled
                        key={i}
                        style={{ color: "#ff4d4f", fontSize: 20 }}
                        onClick={() => onRatingChange(movie.id, i)}
                      />
                    ) : (
                      <StarOutlined
                        key={i}
                        style={{ fontSize: 20 }}
                        onClick={() => onRatingChange(movie.id, i)}
                      />
                    )
                  )}

                  {movie.rating && (
                    <span className="movie_rating_value">{movie.rating}</span>
                  )}
                </div>

                <div className="movie_description">{movie.overview}</div>
              </>
            }
          />
        </Card>
      ))}
    </>
  );
};

export default MovieList;
