"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import ACCESS_TOKEN from "@/constants";
import Genre from "@/app/types";

export const useGenres = () => {
  const [genre, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [loading, setIsLoading] = useState(true);

  const fetchGenres = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list",
        {
          headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
        }
      );
      setGenres(res.data.genres);
      setIsLoading(false);
    } catch (error: any) {
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchGenres();
    setIsLoading(false);
  }, []);

  return { genre, error, loading };
};
