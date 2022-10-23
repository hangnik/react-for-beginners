import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// loading 추가, json State에 넣어서 detail 페이지 완성하기~
function Detail(){
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const {id} = useParams();
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
            {loading ? <h1>loading...</h1> :
            <div>
                <div key={movie.id}>
                    <img src={movie.medium_cover_image} alt="" />
                    <h1>{movie.title}</h1>
                    <h3>rate : {movie.rating}</h3>
                    <h3>runtime : {movie.runtime}m</h3>
                    <h5>summary : {movie.description_intro}</h5>
                </div>
            </div>
            }
        </div>
    );
}
export default Detail;