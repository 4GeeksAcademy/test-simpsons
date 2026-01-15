export const initialStore=()=>{
  return {
   personajes: [],
   favoritos: []
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
      return {
        ...store,
        favoritos: [...store.favoritos, action.payload]
      };
    
    case 'remove_favorito':
      return {
        ...store,
        favoritos: store.favoritos.filter(fav => fav.id !== action.payload)
      };
    
    default:
      throw Error('Unknown action.');
  }    
}