import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getPersonajes } from "../services/api_services.js";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();

	useEffect(() => {
		getPersonajes(dispatch);
	}, [dispatch])

	const toggleFavorito = (personaje) => {
		const existe = store.favoritos.find(fav => fav.id === personaje.id);

		if (existe) {
			dispatch({ type: 'remove_favorito', payload: personaje.id });
		} else {
			dispatch({ type: 'add_favorito', payload: personaje });
		}
	}

	return (
		<div className="container mt-5">
			<h2>Personajes</h2>

			<div style={{
				display: "flex",
				gap: "20px",
				overflowX: "auto",
			}}>
				{store.personajes.map((personaje) => (
					<div
						key={personaje.id}
						style={{ minWidth: "250px" }}
					>
						<div className="card h-100 d-flex flex-column">
							<img
								src={`https://cdn.thesimpsonsapi.com/500${personaje.portrait_path}`}
								alt={personaje.name}
								style={{ height: "300px", objectFit: "contain" }}
							/>
							<div className="card-body d-flex flex-column ">
								<h5>{personaje.name}</h5>
								<p className="flex-grow-1">{personaje.occupation}</p>
							</div>
							<div className="card-footer">
								<button className="btn btn-danger" onClick={() => toggleFavorito(personaje)}>
									{store.favoritos.find(fav => fav.id === personaje.id) ? 'favorite -' : 'favorite +'}
								</button>
								<Link to={`/details/${personaje.id}`}>
									<button className="btn btn-warning ms-4">DETAILS</button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};