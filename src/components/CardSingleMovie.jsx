export default function CardSingleMovie({ movie }) {
    const {image, title, genre, director, abstract, created_at, release_year} = movie;
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <img className="img-fluid" src={image} alt={title} />
                    </div>
                    <div className="col-12 col-md-7">
                        <h1>{title}</h1>
                        <h2>{genre}</h2>
                        <h3>{director}</h3>
                        <h4>{release_year}</h4>
                        <p>{abstract}</p>
                    </div>
                </div>
            </div>


        </>
    )
}