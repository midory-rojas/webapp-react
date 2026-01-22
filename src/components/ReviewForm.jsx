/* Creiamo un nuovo oggetto per tutti i value */

import { useState, useEffect } from "react";
import axios from "axios";

const initialFormData = {
    name: "",
    vote: 1,
    text: "",
};

export default function ReviewForm({movieId}) {
    const [formData, setFormData] = useState(initialFormData);

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
 
    function updateFormData(event) {
        const value = event.target.value;
        const key = event.target.name; //Chiave di aggiornare
        //Dobbiamo creare un nuovo ogetto
        //SetFormData per l'aggiornamento
        setFormData({...formData, 
            [key]: value, 
        }) //copyFormData con nuovo valore
    }


        function handleSubmit(event) {
            event.preventDefault();
            axios.post(`${backendUrl}/api/movies/${movieId}/reviews`, 
                formData).then((resp) => {
                    setFormData(initialFormData)
            });
        
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="form-label" htmlFor="name">Nome</label>
                    <input value={formData.name} onChange={updateFormData} className="form-control" type="text" id="name" name="name" required />
                </div>
                <div className="mb-4">
                    <label className="form-label" htmlFor="vote">Voto</label>
                    <input value={formData.vote} onChange={updateFormData} className="form-control" type="number" id="vote" name="vote" min="1" max="5" />
                </div>

                <div className="mb-4">
                    <label className="form-label" htmlFor="text">Testo</label>
                    <textarea value={formData.text} onChange={updateFormData} className="form-control" type="text" id="text" name="text" required/>
                </div>
                <button className="btn btn-dark">Invia</button>
            </form>
        </>
    )
}