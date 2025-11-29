// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Row, Col, Input, Button, Spin } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";

import ResultList from "../components/ResultList";
import MovieList from "../components/MovieList";
import TrendingList from "../components/TrendingList";
import MovieModal from "../components/MovieModal";

const API_KEY = import.meta.env.VITE_TMDB_KEY;

const GENRE_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
const TRENDING_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // NEW → Selected movie for modal
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Load genre + trending + saved movies
  useEffect(() => {
    const fetchGenres = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(GENRE_URL);
        setGenres(res.data.genres);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGenres();

    const stored = JSON.parse(localStorage.getItem("saved-movies"));
    if (stored) setSavedMovies(stored);

    const fetchTrending = async () => {
      try {
        const res = await axios.get(TRENDING_URL);
        setTrending(res.data.results);
      } catch (err) {
        console.error("Failed to fetch trending movies", err);
      }
    };

    fetchTrending();
  }, []);

  // Search handlers
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (!value) setResults([]);
  };

  const handleSearchClick = async (e) => {
    e.preventDefault();
    if (searchTerm.length < 2) return;

    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`
      );
      setResults(res.data.results);
    } finally {
      setIsLoading(false);
    }
  };

  // Add movie
  const handleAddMovie = (movie) => {
    const movieGenres =
      movie.genre_ids
        ?.map((id) => genres.find((g) => g.id === id)?.name)
        .filter(Boolean)
        .join(", ") || "";

    const updated = [...savedMovies, { ...movie, genres: movieGenres, rating: null }];
    setSavedMovies(updated);
    localStorage.setItem("saved-movies", JSON.stringify(updated));

    setResults([]);
    setSearchTerm("");
  };

  // Remove movie
  const handleRemoveMovie = (movieId) => {
    const updated = savedMovies.filter((m) => m.id !== movieId);
    setSavedMovies(updated);
    localStorage.setItem("saved-movies", JSON.stringify(updated));
  };

  // Rating change
  const handleRatingChange = (movieId, index) => {
    const updated = savedMovies.map((movie) =>
      movie.id === movieId ? { ...movie, rating: index + 1 } : movie
    );
    setSavedMovies(updated);
    localStorage.setItem("saved-movies", JSON.stringify(updated));
  };

  // Open modal
  const openMovieModal = (movie) => {
    setSelectedMovie(movie);
    setModalOpen(true);
  };

  return (
    <>
      {/* Search Bar */}
      <div className="search-wrapper">
        <Row justify="center">
          <form onSubmit={handleSearchClick}>
            <Row gutter={10}>
              <Col span={16}>
                <Input
                  placeholder="Search for a movie"
                  value={searchTerm}
                  allowClear
                  size="large"
                  onChange={handleSearchChange}
                />
              </Col>

              <Col span={6}>
                <Button
                  type="primary"
                  icon={<SearchOutlined />}
                  size="large"
                  block
                  loading={isLoading}
                  disabled={searchTerm.length < 2}
                  onClick={handleSearchClick}
                >
                  Search
                </Button>
              </Col>
            </Row>
          </form>
        </Row>
      </div>

      {/* Trending Block */}
      {trending.length > 0 && (
        <TrendingList movies={trending} onAddMovie={handleAddMovie} onSelectMovie={openMovieModal} />
      )}

      {/* Search Results */}
      <Row justify="center">
        <Col span={14} className="result_container">
          {isLoading ? (
            <Spin />
          ) : (
            <ResultList
              savedMovies={savedMovies}
              results={results}
              onAddMovie={handleAddMovie}
              onSelectMovie={openMovieModal}
            />
          )}
        </Col>
      </Row>

      {/* Saved Movies */}
      <Row style={{ marginTop: 30 }}>
        <Col span={20} offset={2} className="movie_list">
          {savedMovies.length > 0 && (
            <MovieList
              movies={savedMovies}
              onRemoveMovie={handleRemoveMovie}
              onRatingChange={handleRatingChange}
              onSelectMovie={openMovieModal}
            />
          )}
        </Col>
      </Row>

      {/* MOVIE MODAL */}
      {selectedMovie && (
        <MovieModal
          movieId={selectedMovie.id}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          apiKey={API_KEY}
        />
      )}
    </>
  );
};

export default Home;
