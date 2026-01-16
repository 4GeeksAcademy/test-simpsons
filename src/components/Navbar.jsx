import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState } from "react";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();
	const [mostrarDropdown, setMostrarDropdown] = useState(false);

	const eliminarFavorito = (id) => {
		dispatch({ type: 'remove_favorito', payload: id });
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown" style={{ display: "inline-block", marginRight: "10px" }}>
						<button 
							className="btn btn-warning dropdown-toggle"
							onClick={() => setMostrarDropdown(!mostrarDropdown)}
						>
							Favoritos ({store.favoritos.length})
						</button>
						
						{mostrarDropdown && (
							<div className="dropdown-menu show" style={{ display: "block" }}>
								{store.favoritos.length === 0 ? (
									<span className="dropdown-item">Sin favoritos</span>
								) : (
									store.favoritos.map(fav => (
										<div key={fav.id} style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
											<p style={{ margin: "0 0 5px 0" }}>{fav.name}</p>
											<button 
												className="btn btn-sm btn-danger"
												onClick={() => eliminarFavorito(fav.id)}
											>
												Eliminar
											</button>
										</div>
									))
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};