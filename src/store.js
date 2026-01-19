export const initialStore = () => {
  const favoritosGuardados = localStorage.getItem('favoritos');
  
  return {
    personajes: [],
    favoritos: favoritosGuardados ? JSON.parse(favoritosGuardados) : []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'get_personajes':
      return {
        ...store,
        personajes: action.payload
      };
    
    case 'add_favorito':
      const nuevosFavoritos = [...store.favoritos, action.payload];

      localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));

      return {
        ...store,
        favoritos: nuevosFavoritos
      };
    
    case 'remove_favorito':
      const favoritosFiltrados = store.favoritos.filter(fav => fav.id !== action.payload);

      localStorage.setItem('favoritos', JSON.stringify(favoritosFiltrados));
      
      return {
        ...store,
        favoritos: favoritosFiltrados
      };
    
    default:
      throw Error('Unknown action.');
  }    
}