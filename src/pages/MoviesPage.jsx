import axios from "axios"; //Importo axios per fare la chiamata API
import { useEffect, useState } from "react"; //Importo i hooks di react
import Card from "../components/Card"; //Importo Card come componente

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/movies")
            .then((resp) => {
                //console.log(resp.data) Risposta in console, per vedere cosa mi ristituisce l'api
                setMovies(resp.data.results)
            })
            .catch((err) => {
                console.log(err)
            });

    }, []);

    return (
        <>
            <div className="container d-flex justify-content-center py-4">
            <h1>List of all movies</h1>
            </div>
            <div className="py-3 container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3">
                    {movies.map((movie) => (
                        <div className="col" key={movie.id}> {/* Uso di map per stampare dinamicamente i films */}
                            <Card movie={movie} /> {/*Paso card attraverso props */}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}