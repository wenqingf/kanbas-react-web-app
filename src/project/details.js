import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as client from "./client";
import * as userClient from "./users/client";
import * as likesClient from "./likes/client";

function Details() {
    const [currentUser, setCurrentUser] = useState(null);
    const [movie, setMovie] = useState(null);
    const [videos, setVideos] = useState(null);
    const { movieId } = useParams();
    const [likes, setLikes] = useState([]);

    const fetchUser = async () => {
        try {
            const user = await userClient.account();
            setCurrentUser(user);
        } catch (error) {
            setCurrentUser(null);
        }

    };

    const fetchMovie = async () => {
        const movie = await client.findMovieById(movieId);
        setMovie(movie);
    };

    const fetchVideosByMovieId = async () => {
        const video = await client.findVideosByMovieId(movieId);
        setVideos(video);
    };

    const currentUserlikesMovie = async () => {
        console.log("currentUser likes");
        const _likes = await likesClient.createUserLikesMovie(currentUser._id, movieId);
        setLikes(_likes, ...likes);
    };

    const fetchLikes = async () => {
        const likes = await likesClient.findUsersThatLikeMovie(movieId);
        setLikes(likes);
    }

    useEffect(() => {
        fetchMovie();
        fetchVideosByMovieId();
        fetchUser();
        fetchLikes();
    }, []);

    return (
        <div>
            {movie && videos && (
                <div>
                    {
                        currentUser &&
                    <button onClick={currentUserlikesMovie} className="btn btn-warning float-end">Like</button>

                    }
                    <h1>{movie.original_title}</h1>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.original_title}
                    />
                    <h2>Likes</h2>
                    <ul className="list-group">
                        {likes.map((like, index) => (
                            <li key={index} className="list-group-item">
                                <Link to={`/project/users/${like.user._id}`}>
                                    @{like.user.username}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {videos.results[0] && <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${videos.results[0].key}`}
                        title="YouTube Video Player"
                        frameBorder="0"
                        allowFullScreen
                    />}
                    {/* <pre>{JSON.stringify(video, null, 2)}</pre>
                    <pre>{JSON.stringify(movie, null, 2)}</pre> */}
                </div>
            )}
        </div>
    )
}

export default Details;
