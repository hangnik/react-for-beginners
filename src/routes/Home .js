import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Home.module.css";

function Home(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
        <Header />
      {loading ? (
        <Loading />
        ) : ( 
        <div className={styles.movies}>
          {movies.map(movie => 
            <Movie 
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              year={movie.year}
            />
          )}
        </div>
        )
      }
        <Footer />
    </div>
  );
}
export default Home;