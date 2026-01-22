import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import CardSingleMovie from "../components/CardSingleMovie";
import ReviewsCard from "../components/ReviewsCard";



export default function DetailsSingleMovie({ }) {
    const { slug } = useParams(); //Modifica del id per lo slug
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();
    //Uso il lick creato per fare la chiamata API
    const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;


    useEffect(() => {
        axios.get(`${backendBaseUrl}/api/movies/${slug}`).then((resp) => { //Modifica della chiamata API per lo slug
            console.log(resp)
            setMovie(resp.data);
        })
            .catch((err) => {
                console.log(err)
            });
    }, [slug]) //Modifica della dipendenza per lo slug
    return (
        <>
            <div className="container d-flex mt-5 pt-3">
                <h1>Dettagli del film</h1>
            </div>
            <div>
                {movie !== null &&
                    <CardSingleMovie movie={movie} />
                }
            </div>
            <div>
            </div>
        </>
    )
}