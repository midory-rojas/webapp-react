import axios from "axios"; //Importo axios per fare la chiamata API
import { useEffect, useState } from "react"; //Importo i hooks di react
import CardAllMovies from "../components/CardAllMovies"; //Importo Card come componente

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);

    //Faccio una constante per fare la chiamata API
    const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        axios
            .get(`${backendBaseUrl}/api/movies`) //Prendo la chiamata api con backtick `
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
            <div className="container d-flex justify-content-center mt-5 py-4">
            <h1>Elenco di tutti i film</h1>
            </div>
            <div className="py-2 container">
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
                    {movies.map((movie) => (
                        <div className="col" key={movie.id}> {/* Uso di map per stampare dinamicamente i films */}
                            <CardAllMovies movie={movie} /> {/*Paso card attraverso props */}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}