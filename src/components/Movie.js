import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, year, summary, genres}){
  return (
    <div className={styles.movie}>
        <img src={coverImg} alt={title} className={styles.movie_img}/>
        <h2 className={styles.movie_title}>
          <Link to={`/movie/${id}`} className={styles.movie_title}>{title}</Link>
        </h2>
        <h3 className={styles.movie_year}>{year}</h3>
        <p className={styles.summary}>{summary && summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        {genres !== null ? 
        <ul className={styles.movie_genres}> 
            { genres.map((g) => 
            <li key={g}>{g}</li>
            )}
        </ul>
          : null }
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
};

export default Movie;