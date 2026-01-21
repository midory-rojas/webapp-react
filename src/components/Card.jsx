import { Link } from "react-router-dom";

export default function Card({ movie }) { //Creazione di componente Card
   const { image, title, genre, director, abstract } = movie; //Destructurazione
    return (
        <div className="card w-75 h-100">
            <img className="img-fluid" src={image} alt={title} />
            <div className="card-body">
                <h4>{title}</h4>
                <h5>Genere: {genre}</h5>
                <h5>Director: {director}</h5>
                <p>{abstract}</p>
                <Link to={`/movies/${movie.id}`} className="btn btn-dark">Vedi detagli</Link>
            </div>
        </div>
    )
}