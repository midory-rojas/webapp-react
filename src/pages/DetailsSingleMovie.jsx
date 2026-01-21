import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import CardSingleMovie from "../components/CardSingleMovie";


export default function DetailsSingleMovie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3000/api/movies/${id}`).then((resp) => {
            console.log(resp)
            setMovie(resp.data);
        });
    }, [id])
    return (
        <>
            <section className="container py-5 mt-5">
               <CardSingleMovie movie={movie} />
            </section>
        </>
    )
}