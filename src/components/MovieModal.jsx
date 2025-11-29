// src/components/MovieModal.jsx
import React, { useEffect, useState } from "react";
import { Modal, Row, Col, Spin, Tag } from "antd";
import axios from "axios";

const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";

const MovieModal = ({ movieId, open, onClose, apiKey }) => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch full movie details (overview, genres, runtime, cast, etc.)
  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=credits,videos`
        );
        setMovie(res.data);
      } catch (err) {
        console.error("Movie details fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={900}
      centered
      destroyOnClose
    >
      {isLoading || !movie ? (
        <div style={{ textAlign: "center", padding: 40 }}>
          <Spin size="large" />
        </div>
      ) : (
        <Row gutter={20}>
          {/* Poster */}
          <Col span={8}>
            <img
              src={IMAGE_PATH + movie.poster_path}
              alt={movie.title}
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
              }}
            />
          </Col>

          {/* Info */}
          <Col span={16}>
            <h2 style={{ marginBottom: 5 }}>{movie.title}</h2>
            <p style={{ fontSize: 15, opacity: 0.9 }}>
              ⭐ {movie.vote_average} / 10  
              &nbsp;•&nbsp; {movie.release_date?.slice(0, 4)}
              &nbsp;•&nbsp; {movie.runtime} min
            </p>

            {/* Genres */}
            <div style={{ marginBottom: 15 }}>
              {movie.genres.map((g) => (
                <Tag key={g.id} color="blue">
                  {g.name}
                </Tag>
              ))}
            </div>

            {/* Overview */}
            <p style={{ lineHeight: "1.6", fontSize: 15 }}>
              {movie.overview}
            </p>

            {/* Cast */}
            <h3 style={{ marginTop: 25 }}>Top Cast</h3>
            <div style={{ display: "flex", overflowX: "auto", gap: 12 }}>
              {movie.credits?.cast?.slice(0, 10).map((actor) => (
                <div
                  key={actor.id}
                  style={{ textAlign: "center", minWidth: 80 }}
                >
                  <img
                    src={
                      actor.profile_path
                        ? "https://image.tmdb.org/t/p/w200" + actor.profile_path
                        : "https://via.placeholder.com/80x120.png?text=No+Image"
                    }
                    alt={actor.name}
                    style={{
                      width: "80px",
                      height: "120px",
                      objectFit: "cover",
                      borderRadius: 6,
                    }}
                  />
                  <div style={{ fontSize: 12, opacity: 0.8 }}>{actor.name}</div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      )}
    </Modal>
  );
};

export default MovieModal;
