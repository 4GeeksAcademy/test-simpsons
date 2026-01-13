import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Details = () => {
    const { id } = useParams();  
    const { store } = useGlobalReducer();

    const personaje = store.personajes.find(p => p.id == id);

    if (!personaje) {
        return <div className="container mt-5"><p>Personaje no encontrado</p></div>;
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={`https://cdn.thesimpsonsapi.com/500${personaje.portrait_path}`}
                        alt={personaje.name}
                        style={{ width: "100%", objectFit: "contain" }}
                    />
                </div>
                <div className="col-md-8">
                    <h1>{personaje.name}</h1>
                    <p><strong>Ocupación:</strong> {personaje.occupation}</p>
                    <p><strong>Género:</strong> {personaje.gender}</p>
                    <p><strong>Status:</strong> {personaje.status}</p>
                </div>
            </div>
        </div>
    );
};