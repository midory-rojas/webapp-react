import {useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    //Funzione per tornare a Home
    function goHome(event) {
        event.preventDefault();
        navigate("/");
    }
    return (
        <>
            <section className="container justify-content-center d-flex mt-5 py-4">
                <h1>Error 404: Pagina non trovata</h1>
            </section>
            <div className="d-flex justify-content-center">
                <a className="btn btn-dark" onClick={goHome} href="">Ritorna a Home</a>
            </div>
        </>
    );
}