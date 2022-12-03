import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Point from "../components/Point";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Detail.module.css";

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();
    const getMovie = useCallback(async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    }, [id]);
    useEffect(() => {
        getMovie();
    }, [getMovie]);
    return (
        <div>
            <div className={styles.header}>
                <Header />
            </div>
            {loading ? (
                <Loading />
            ) : (
            <div className={styles.info}>
                <Point
                    navigate = {navigate}
                    background_image={movie.background_image_original}
                    cover_image={movie.medium_cover_image}
                    url={movie.url}
                    title={movie.title}
                    year={movie.year}
                    rating={movie.rating}
                    runtime={movie.runtime}
                    genres={movie.genres}
                    summary={movie.description_intro}
                />
                </div>
            )}
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    );
}
export default Detail;