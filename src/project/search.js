import React, { useState, useEffect } from "react";
import * as client from "./client";
import { Link, useParams, useNavigate } from "react-router-dom";

function Search() {
    const { search } = useParams();
    const [searchTerm, setSearchTerm] = useState(search);
    const [results, setResults] = useState(null);
    const navigate = useNavigate();

    const fetchMovies = async (search) => {
        const results = await client.findMovies(search);
        setResults(results);
        setSearchTerm(search);
    };

    useEffect(() => {
        if (search) {
            fetchMovies(search);
        }
    }, [search]);

    return (
        <div>
            <h1>Search</h1>
            {searchTerm}
            <button onClick={() =>
                // fetchMovies(searchTerm)}
                navigate(`/project/search/${searchTerm}`)
            }
                className="btn btn-primary float-end">
                Search
            </button>
            <input
                type="text"
                className="form-control w-75"
                placeholder="Search..."
                value={searchTerm}
                onChange={(event) => {
                    setSearchTerm(event.target.value);
                }}
            />
            <h2>Results</h2>
            <ul className="list-group">
                {results &&
                    results.map((movie, index) => (
                        <li key={index} className="list-group-iem">
                            <Link to={`/project/details/${movie.id}`}>
                            <h3>{movie.original_title}</h3>
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.original_title}
                            />
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
    )
}

export default Search;