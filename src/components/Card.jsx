
export default function Card({ movie }) { //Creazione di componente Card
   const { image, title, genre, director, abstract } = movie; //Destructurazione
    return (
        <div className="card h-100">
            <img className="card-img-top" src={image} alt={title} />
            <div className="card-body">
                <h4>{title}</h4>
                <h5>Genere: {genre}</h5>
                <h5>Director: {director}</h5>
                <p>{abstract}</p>
            </div>
        </div>
    )
}