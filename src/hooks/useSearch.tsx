"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import ACCESS_TOKEN from "@/constants";
import Genre from "@/app/types";
import MovieType from "@/app/types/movie";
export const UseSearch = () => {
  const [searchMovie, setSearchMovies] = useState<MovieType[]>([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const SearchMoviesByGenre = async (query: string) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&language=en&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    setSearchMovies(res.data.results);
  };

  useEffect(() => {
    SearchMoviesByGenre(query);
  }, [query]);

  return { searchMovie, setQuery, query };
};
