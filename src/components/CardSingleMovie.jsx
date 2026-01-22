import { useNavigate, useParams } from "react-router-dom";
import ReviewsCard from "./ReviewsCard";
import ReviewForm from "./ReviewForm";

export default function CardSingleMovie({ movie }) {
    const { image, title, genre, director, abstract, release_year } = movie;
    const navigate = useNavigate();
    const { id } = useParams(); //Ricupero l'id

    //Funzione per andare avanti con il bottone
    function next(event) {
        const prossimoId = parseInt(movie.id) + 1;
        navigate(`/movies/${prossimoId}`);
    };

    
    return (
        <>
            <div className="container py-3">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <img className="img-fluid" src={image} alt={title} />
                    </div>
                    <div className="col-12 col-md-7">
                        <h1>{title}</h1>
                        <h2>Genere: {genre}</h2>
                        <h3>Autore: {director}</h3>
                        <h4>{release_year}</h4>
                        <p>{abstract}</p>

                        <div className="d-flex g-3">
                            <button className="btn btn-dark me-2" onClick={() => navigate(-1)}>
                                Torna alla pagina precedente
                            </button>
                            <button className="btn btn-dark" onClick={next}>
                                Vai alla pagina successiva
                            </button>
                        </div>
                    {movie.reviews.length &&
                        <ReviewsCard reviews={movie.reviews} />
                    }
                    </div>
                </div>
                <section className="container py-5">
                    <div className="row">
                        <div className="col-12 col-md-6">
                    <h2>Lascia una review</h2> 
                    <ReviewForm movieId={movie.id} /> {/* Importo il ReviewForn che ho creato */}
                    </div>
                    </div>
                </section>
            </div>


        </>
    )
}