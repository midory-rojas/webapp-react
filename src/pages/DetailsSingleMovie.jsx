import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import CardSingleMovie from "../components/CardSingleMovie";


export default function DetailsSingleMovie() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`http://localhost:3000/api/movies/${id}`).then((resp) => {
            console.log(resp)
            setMovie(resp.data);
        })
            .catch((err) => {
                console.log(err)
            });
    }, [id])
    return (
        <>
            <section className="container py-5 mt-5">
                {movie !== null &&
                    <CardSingleMovie movie={movie} />}
            </section>
        </>
    )
}