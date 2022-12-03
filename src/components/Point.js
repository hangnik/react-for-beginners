import styles from "./Point.module.css";
import PropTypes from "prop-types";

function Point({navigate, background_image, cover_image, url, title, year, rating, runtime, genres, summary}){
    return (
        <div className={styles.movie}>
            <img className={styles.bg} src={background_image} alt="" />
            <div className={styles.show}>
                <input className={styles.backBtn} type="button" value="✕" onClick={() => navigate(-1)}/>
                <img className={styles.img} src={cover_image} alt="" />
                <div className={styles.textbox}>
                    <h1 className={styles.title}><a href={url}>{title}</a></h1>
                    <div className={styles.info}>
                        <span className={styles.year}>{year}</span>
                        {<span>{genres.map((genre) => <span key={genre} className={styles.genres}>{genre}  </span>)}</span>}
                    </div>
                    <div>
                        <h3 className={styles.rating_title}>rating ★</h3>
                        <p className={styles.rating}>{rating}</p>
                        <h3 className={styles.runtime_title}>runtime</h3>
                        <p className={styles.runtime}>{runtime} min</p>
                    </div>
                    <div>
                        <p className={styles.summary}>{summary}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

Point.propTypes = {
    background_image: PropTypes.string.isRequired,
    cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Point;